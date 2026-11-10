import * as THREE from 'three';

export interface InstanceTransform {
  x: number; y: number; z: number;
  rotY?: number;
  scale?: number;
  scaleX?: number; scaleY?: number; scaleZ?: number;
}

/** 重复元素实例化（提示词 8-3）：松树、礁石、集装箱、行道树、桌椅、沙袋等 */
export function instanced(
  geometry: THREE.BufferGeometry,
  material: THREE.Material,
  transforms: InstanceTransform[],
  name = 'instances',
): THREE.InstancedMesh {
  const mesh = new THREE.InstancedMesh(geometry, material, Math.max(1, transforms.length));
  const dummy = new THREE.Object3D();
  transforms.forEach((t, i) => {
    dummy.position.set(t.x, t.y, t.z);
    dummy.rotation.set(0, t.rotY ?? 0, 0);
    dummy.scale.set(
      (t.scaleX ?? 1) * (t.scale ?? 1),
      (t.scaleY ?? 1) * (t.scale ?? 1),
      (t.scaleZ ?? 1) * (t.scale ?? 1),
    );
    dummy.updateMatrix();
    mesh.setMatrixAt(i, dummy.matrix);
  });
  mesh.instanceMatrix.needsUpdate = true;
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  mesh.name = name;
  mesh.count = transforms.length;
  return mesh;
}

/** 在矩形区域内生成确定性散点（避免每次构建位置漂移） */
export function scatter(
  count: number, minX: number, maxX: number, minZ: number, maxZ: number,
  seed = 1, jitterY = 0,
): InstanceTransform[] {
  let s = seed >>> 0;
  const rand = () => { s = (s * 1664525 + 1013904223) >>> 0; return s / 4294967296; };
  const out: InstanceTransform[] = [];
  for (let i = 0; i < count; i++) {
    out.push({
      x: minX + rand() * (maxX - minX),
      y: jitterY * rand(),
      z: minZ + rand() * (maxZ - minZ),
      rotY: rand() * Math.PI * 2,
      scale: 0.72 + rand() * 0.55,
    });
  }
  return out;
}
