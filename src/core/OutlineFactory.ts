import * as THREE from 'three';

/**
 * 反面外扩壳描边（DESIGN.md §5.2）：纯代码、无后处理管线。
 * 透明物 / 薄片用 userData.noOutline 跳过，改由边缘线补强。
 */
const outlineMats = new Map<string, THREE.MeshBasicMaterial>();

export function outlineMaterial(color: THREE.ColorRepresentation = 0x2c3546): THREE.MeshBasicMaterial {
  const key = String(color);
  let m = outlineMats.get(key);
  if (!m) {
    m = new THREE.MeshBasicMaterial({ color, side: THREE.BackSide, toneMapped: false });
    outlineMats.set(key, m);
  }
  return m;
}

export function addOutline(
  target: THREE.Mesh,
  thickness = 0.035,
  color: THREE.ColorRepresentation = 0x2c3546,
): THREE.Mesh | null {
  if (target.userData.noOutline || target.userData.isOutline) return null;
  if (Array.isArray(target.material) || target.material.transparent) return null;
  const src = target.geometry;
  const posAttr = src.getAttribute('position');
  const norAttr = src.getAttribute('normal');
  if (!posAttr || !norAttr) return null;

  const g = src.clone();
  const pos = g.getAttribute('position') as THREE.BufferAttribute;
  const nor = g.getAttribute('normal') as THREE.BufferAttribute;
  if (pos === nor) return null;
  for (let i = 0; i < pos.count; i++) {
    pos.setXYZ(
      i,
      pos.getX(i) + nor.getX(i) * thickness,
      pos.getY(i) + nor.getY(i) * thickness,
      pos.getZ(i) + nor.getZ(i) * thickness,
    );
  }
  pos.needsUpdate = true;

  const mesh = new THREE.Mesh(g, outlineMaterial(color));
  mesh.name = '__outline';
  mesh.userData.isOutline = true;
  mesh.userData.noMerge = true;
  mesh.castShadow = false;
  mesh.receiveShadow = false;
  mesh.renderOrder = -1;
  target.add(mesh);
  return mesh;
}

export interface OutlineOptions {
  thickness?: number;
  color?: THREE.ColorRepresentation;
  /** 仅描边主轮廓（默认跳过小碎件），由调用方按需放宽 */
  minSize?: number;
}

export function outlineGroup(root: THREE.Object3D, opts: OutlineOptions = {}): number {
  const targets: THREE.Mesh[] = [];
  root.traverse((o) => {
    if (!(o instanceof THREE.Mesh)) return;
    if (o.userData.isOutline || o.userData.noOutline) return;
    if (Array.isArray(o.material) || o.material.transparent) return;
    if (opts.minSize) {
      o.geometry.computeBoundingSphere();
      const r = o.geometry.boundingSphere?.radius ?? 0;
      if (r < opts.minSize) return;
    }
    targets.push(o);
  });
  let n = 0;
  for (const t of targets) if (addOutline(t, opts.thickness ?? 0.035, opts.color)) n++;
  return n;
}

/** 薄片 / 透明物的边缘线补强（天幕、帐帘、小旗、玻璃框） */
export function edgeLine(target: THREE.Mesh, color: THREE.ColorRepresentation = 0x39445a, threshold = 25): THREE.LineSegments | null {
  const g = new THREE.EdgesGeometry(target.geometry, threshold);
  if (!g.getAttribute('position') || g.getAttribute('position').count === 0) { g.dispose(); return null; }
  const line = new THREE.LineSegments(g, new THREE.LineBasicMaterial({ color, transparent: true, opacity: 0.8 }));
  line.userData.isOutline = true;
  line.userData.noMerge = true;
  target.add(line);
  return line;
}

export function disposeOutlines(): void {
  for (const m of outlineMats.values()) m.dispose();
  outlineMats.clear();
}
