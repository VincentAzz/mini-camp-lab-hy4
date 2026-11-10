import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';

/** 几何缓存 + 程序化建模基础件（提示词 8-2：只用代码生成基本体 / Lathe / Extrude / 实例化） */
const cache = new Map<string, THREE.BufferGeometry>();

function memo(key: string, make: () => THREE.BufferGeometry): THREE.BufferGeometry {
  let g = cache.get(key);
  if (!g) { g = make(); cache.set(key, g); }
  return g;
}

export const geo = {
  box: (w: number, h: number, d: number): THREE.BoxGeometry =>
    memo(`b|${w}|${h}|${d}`, () => new THREE.BoxGeometry(w, h, d)) as THREE.BoxGeometry,

  rounded: (w: number, h: number, d: number, r = 0.08): THREE.BufferGeometry =>
    memo(`r|${w}|${h}|${d}|${r}`, () => new RoundedBoxGeometry(w, h, d, 2, r)),

  cyl: (rt: number, rb: number, h: number, seg = 12, open = false): THREE.CylinderGeometry =>
    memo(`c|${rt}|${rb}|${h}|${seg}|${open}`, () => new THREE.CylinderGeometry(rt, rb, h, seg, 1, open)) as THREE.CylinderGeometry,

  sphere: (r: number, seg = 12): THREE.SphereGeometry =>
    memo(`s|${r}|${seg}`, () => new THREE.SphereGeometry(r, seg, Math.max(6, Math.floor(seg * 0.7)))) as THREE.SphereGeometry,

  cone: (r: number, h: number, seg = 10): THREE.ConeGeometry =>
    memo(`k|${r}|${h}|${seg}`, () => new THREE.ConeGeometry(r, h, seg)) as THREE.ConeGeometry,

  torus: (r: number, tube: number, seg = 14): THREE.TorusGeometry =>
    memo(`t|${r}|${tube}|${seg}`, () => new THREE.TorusGeometry(r, tube, 6, seg)) as THREE.TorusGeometry,

  plane: (w: number, d: number): THREE.PlaneGeometry =>
    memo(`p|${w}|${d}`, () => new THREE.PlaneGeometry(w, d)) as THREE.PlaneGeometry,
};

/** Lathe 旋转体（瓶罐、灯具、轮毂） */
export function lathe(points: [number, number][], seg = 12): THREE.LatheGeometry {
  const key = `l|${seg}|${points.map((p) => p.join(',')).join(';')}`;
  return memo(key, () => new THREE.LatheGeometry(points.map(([x, y]) => new THREE.Vector2(x, y)), seg)) as THREE.LatheGeometry;
}

/** Extrude 挤出轮廓（车身侧板、柜体、异形板件） */
export function extrude(shape: THREE.Shape, depth: number, bevel = 0.02): THREE.ExtrudeGeometry {
  const key = `e|${depth}|${bevel}|${shape.getPoints(8).map((p) => `${p.x},${p.y}`).join(';')}`;
  return memo(key, () => new THREE.ExtrudeGeometry(shape, {
    depth, bevelEnabled: bevel > 0, bevelThickness: bevel, bevelSize: bevel, bevelSegments: 1, curveSegments: 6,
  })) as THREE.ExtrudeGeometry;
}

export function makeMesh(
  geometry: THREE.BufferGeometry,
  material: THREE.Material | THREE.Material[],
  x = 0, y = 0, z = 0,
): THREE.Mesh {
  const m = new THREE.Mesh(geometry, material);
  m.position.set(x, y, z);
  m.castShadow = true;
  m.receiveShadow = true;
  return m;
}

/** 把物件底面精确贴合到 groundY，杜绝悬浮与沉入地面导致的视觉穿模 */
export function groundAlign(obj: THREE.Object3D, groundY = 0): void {
  obj.updateMatrixWorld(true);
  const box = new THREE.Box3().setFromObject(obj);
  if (!Number.isFinite(box.min.y)) return;
  obj.position.y += groundY - box.min.y;
}

/** 计算一组物件的水平占位，供运行时布局校验使用 */
export function footprintOf(obj: THREE.Object3D): { minX: number; maxX: number; minZ: number; maxZ: number } {
  obj.updateMatrixWorld(true);
  const b = new THREE.Box3().setFromObject(obj);
  return { minX: b.min.x, maxX: b.max.x, minZ: b.min.z, maxZ: b.max.z };
}

/**
 * 静态几何合批（DESIGN.md §5.7）：把同材质、非动效的网格合并，显著降低 Draw Call。
 * 动效对象用 userData.dynamic = true 标记，不参与合并。
 */
export function mergeStatic(root: THREE.Group): number {
  root.updateMatrixWorld(true);
  const buckets = new Map<string, { material: THREE.Material; geos: THREE.BufferGeometry[]; nodes: THREE.Mesh[] }>();
  const inverse = new THREE.Matrix4().copy(root.matrixWorld).invert();

  root.traverse((o) => {
    if (!(o instanceof THREE.Mesh)) return;
    if (o.userData.dynamic || o.userData.noMerge || o.userData.isOutline) return;
    if (o.children.length > 0) return;
    const material = o.material;
    if (Array.isArray(material) || !material) return;
    if ((material as THREE.Material).transparent) return;
    const key = material.uuid;
    let bucket = buckets.get(key);
    if (!bucket) { bucket = { material, geos: [], nodes: [] }; buckets.set(key, bucket); }
    const g = o.geometry.clone().toNonIndexed();
    const local = new THREE.Matrix4().multiplyMatrices(inverse, o.matrixWorld);
    g.applyMatrix4(local);
    bucket.geos.push(g);
    bucket.nodes.push(o);
  });

  let merged = 0;
  for (const bucket of buckets.values()) {
    if (bucket.geos.length < 2) { for (const g of bucket.geos) g.dispose(); continue; }
    const combined = mergeGeometries(bucket.geos, false);
    for (const g of bucket.geos) g.dispose();
    if (!combined) continue;
    for (const n of bucket.nodes) n.parent?.remove(n);
    const m = makeMesh(combined, bucket.material);
    m.userData.noOutline = true;
    m.userData.merged = true;
    root.add(m);
    merged += bucket.nodes.length - 1;
  }
  return merged;
}

export function disposeGeoCache(): void {
  for (const g of cache.values()) g.dispose();
  cache.clear();
}
