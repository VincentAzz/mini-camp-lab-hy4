import * as THREE from 'three';
import {
  BASE, KEEP_OUT, VEHICLES, resolveScene, validateAll,
  type ResolvedPlacement, type Box2,
} from '../data/layouts.js';
import { groundAlign } from './GeoFactory';
import type { SceneId, VehicleId } from '../app/State';

interface RuntimeRecord { id: string; box: Box2; height: number; decal: boolean }

function intersects(a: Box2, b: Box2): boolean {
  return a.minX < b.maxX - 0.02 && a.maxX > b.minX + 0.02 &&
         a.minZ < b.maxZ - 0.02 && a.maxZ > b.minZ + 0.02;
}

/**
 * 实体包围盒：跳过 userData.noBounds 的纯视觉特效（光晕 / 光束 / 粒子），
 * 避免它们把占位撑大、误判穿模或导致物件被错误缩放。
 */
export function contentBox(obj: THREE.Object3D): THREE.Box3 {
  obj.updateMatrixWorld(true);
  const result = new THREE.Box3();
  const point = new THREE.Vector3();
  const instanceMatrix = new THREE.Matrix4();
  const worldMatrix = new THREE.Matrix4();
  obj.traverse((o) => {
    if (o.userData.noBounds || o.userData.isOutline) return;
    if (!(o instanceof THREE.Mesh) || !o.geometry) return;
    const attr = o.geometry.getAttribute('position');
    if (!attr) return;
    const im = o as THREE.InstancedMesh;
    // 实例化物件必须把每个实例的矩阵都算进去，否则会漏判散点越界 / 穿模
    if (im.isInstancedMesh) {
      for (let k = 0; k < im.count; k++) {
        im.getMatrixAt(k, instanceMatrix);
        worldMatrix.multiplyMatrices(o.matrixWorld, instanceMatrix);
        for (let i = 0; i < attr.count; i++) {
          point.set(attr.getX(i), attr.getY(i), attr.getZ(i)).applyMatrix4(worldMatrix);
          result.expandByPoint(point);
        }
      }
      return;
    }
    for (let i = 0; i < attr.count; i++) {
      point.set(attr.getX(i), attr.getY(i), attr.getZ(i)).applyMatrix4(o.matrixWorld);
      result.expandByPoint(point);
    }
  });
  return result;
}

function boxOf(obj: THREE.Object3D): Box2 & { minY: number; maxY: number } {
  const b = contentBox(obj);
  return { minX: b.min.x, maxX: b.max.x, minZ: b.min.z, maxZ: b.max.z, minY: b.min.y, maxY: b.max.y };
}

/**
 * 穿模防线（用户 2026-11-10 特别关注项）。
 * 三道关卡：
 *  ① 静态：layouts.js 的网格占位 + validateAll() 对所有场景 × 车型做越界 / 侵入禁放区 / 重叠校验；
 *  ② 构建期：place() 把物件放到格子中心，并把几何强制缩放到不超过格子占位，底面精确贴合 y=0；
 *  ③ 运行时：checkRuntime() 用真实包围盒复查场景物件之间、以及物件与当前车辆之间是否干涉。
 */
export class LayoutValidator {
  private sceneId: SceneId | '' = '';
  private current: ResolvedPlacement[] = [];
  private runtime: RuntimeRecord[] = [];
  private vehicleBox: (Box2 & { minY: number; maxY: number }) | null = null;
  private vehicleId: VehicleId | '' = '';

  load(sceneId: SceneId): void {
    this.sceneId = sceneId;
    this.current = resolveScene(sceneId);
    this.runtime = [];
  }

  get specs(): readonly ResolvedPlacement[] { return this.current; }

  byId(id: string): ResolvedPlacement | undefined {
    return this.current.find((p) => p.id === id);
  }

  /**
   * 按布局数据安放物件。fit=true 时按占位尺寸等比缩放，保证不侵入相邻格子；
   * 然后底面贴合 groundY，杜绝悬浮 / 沉地。
   */
  place(obj: THREE.Object3D, id: string, opts: { fit?: boolean; alignGround?: boolean } = {}): THREE.Object3D {
    const spec = this.byId(id);
    if (!spec) {
      console.warn(`[layout] 未登记的物件 id: ${id}（请加入 layouts.js 的 SCENE_LAYOUTS.${this.sceneId}）`);
      return obj;
    }
    obj.position.set(spec.x, BASE.groundY, spec.z);
    obj.userData.layoutId = id;
    const decal = spec.h <= 0.06;
    obj.userData.layoutDecal = decal;

    if (opts.fit !== false) {
      const b = contentBox(obj);
      const w = b.max.x - b.min.x;
      const d = b.max.z - b.min.z;
      if (w > 0 && d > 0) {
        const k = Math.min(1, spec.w / w, spec.d / d);
        if (k < 1) obj.scale.multiplyScalar(k);
      }
    }
    if (opts.alignGround !== false) groundAlign(obj, BASE.groundY);

    const bb = boxOf(obj);
    this.runtime.push({
      id,
      box: { minX: bb.minX, maxX: bb.maxX, minZ: bb.minZ, maxZ: bb.maxZ },
      height: bb.maxY - bb.minY,
      decal,
    });
    return obj;
  }

  /** 记录当前车辆的真实包围盒，用于与场景物件的干涉复查 */
  setVehicleBox(obj: THREE.Object3D, vehicleId: VehicleId): void {
    this.vehicleBox = boxOf(obj);
    this.vehicleId = vehicleId;
  }

  /** 静态全量校验（4 场景 × 5 车型 + 提示词点名元素覆盖度） */
  staticCheck(): string[] { return validateAll(); }

  /** 运行时真实几何校验 */
  checkRuntime(): string[] {
    const issues: string[] = [];
    const inner: Box2 = { minX: -BASE.inner, maxX: BASE.inner, minZ: -BASE.inner, maxZ: BASE.inner };

    for (const r of this.runtime) {
      if (r.box.minX < inner.minX - 0.05 || r.box.maxX > inner.maxX + 0.05 ||
          r.box.minZ < inner.minZ - 0.05 || r.box.maxZ > inner.maxZ + 0.05) {
        issues.push(`[${r.id}] 真实包围盒越出底座内界`);
      }
      if (intersects(r.box, KEEP_OUT)) issues.push(`[${r.id}] 真实包围盒侵入中央营位（与车辆穿模）`);
      if (this.vehicleBox && intersects(r.box, this.vehicleBox)) {
        issues.push(`[${r.id}] 与车辆 ${this.vehicleId} 包围盒重叠（穿模）`);
      }
    }
    for (let i = 0; i < this.runtime.length; i++) {
      for (let j = i + 1; j < this.runtime.length; j++) {
        const a = this.runtime[i], b = this.runtime[j];
        if (a.decal || b.decal) continue;
        if (intersects(a.box, b.box)) {
          issues.push(`场景实体互相穿模: ${a.id} × ${b.id}`);
        }
      }
    }
    if (this.vehicleBox) {
      const v = this.vehicleBox;
      const fp = VEHICLES[this.vehicleId];
      if (fp) {
        if (v.minX < -fp.halfLength - 0.25 || v.maxX > fp.halfLength + 0.25) {
          issues.push(`车辆 ${this.vehicleId} 车身长度超出登记占位`);
        }
        if (v.maxZ > fp.deployZ + 0.25) issues.push(`车辆 ${this.vehicleId} 展开机构超出登记占位`);
        if (v.maxY > fp.height + 0.35) issues.push(`车辆 ${this.vehicleId} 高度超出登记占位`);
      }
    }
    return issues;
  }

  summary(): { scene: string; objects: number; vehicle: string; runtimeIssues: number; staticIssues: number } {
    return {
      scene: this.sceneId || '-',
      objects: this.runtime.length,
      vehicle: this.vehicleId || '-',
      runtimeIssues: this.checkRuntime().length,
      staticIssues: this.staticCheck().length,
    };
  }
}

export const layout = new LayoutValidator();
export { KEEP_OUT, BASE };
