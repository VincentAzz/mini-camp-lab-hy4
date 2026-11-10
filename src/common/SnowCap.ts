import * as THREE from 'three';
import { contentBox } from '../core/Layout';

/**
 * 上表面积雪（提示词第五节第 5 点）：屋顶 / 天幕 / 树枝 / 护栏 / 桌椅顶部。
 * 用独立的顶面薄壳 + polygonOffset，避免与本体共面 z-fighting，也避免 shader 依赖。
 */
export class SnowCaps {
  readonly group = new THREE.Group();
  private caps: THREE.Mesh[] = [];
  private material: THREE.MeshBasicMaterial;
  private amount = 0;

  constructor() {
    this.group.name = 'snow-caps';
    this.material = new THREE.MeshBasicMaterial({
      color: 0xf4f8fc, transparent: true, opacity: 0, depthWrite: false,
      side: THREE.DoubleSide, polygonOffset: true, polygonOffsetFactor: -2,
    });
  }

  /** obj 需已完成 layout.place（世界矩阵有效）；只取包围盒顶面生成薄壳 */
  addFor(obj: THREE.Object3D, id: string): void {
    const b = contentBox(obj);
    if (b.isEmpty()) return;
    const w = b.max.x - b.min.x;
    const d = b.max.z - b.min.z;
    const h = b.max.y - b.min.y;
    if (!Number.isFinite(w) || w < 0.12 || d < 0.12 || h < 0.08) return;
    const cap = new THREE.Mesh(new THREE.PlaneGeometry(w * 0.93, d * 0.93), this.material);
    cap.rotation.x = -Math.PI / 2;
    cap.position.set((b.min.x + b.max.x) / 2, b.max.y + 0.018, (b.min.z + b.max.z) / 2);
    cap.name = `snow-${id}`;
    cap.visible = false;
    cap.castShadow = false;
    cap.userData.noOutline = true;
    cap.renderOrder = 3;
    this.caps.push(cap);
    this.group.add(cap);
  }

  setAmount(v: number): void {
    this.amount = v;
    this.material.opacity = Math.min(0.94, v * 0.94);
    for (const c of this.caps) c.visible = v > 0.035;
  }

  get value(): number { return this.amount; }

  clear(): void {
    for (const c of this.caps) c.geometry.dispose();
    this.caps.length = 0;
    this.group.clear();
    this.setAmount(0);
  }
}

export const snowCaps = new SnowCaps();
