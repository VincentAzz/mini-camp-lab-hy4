import * as THREE from 'three';
import { toon } from '../core/ToonMaterialFactory';
import { textures } from '../core/TextureFactory';
import type { EnvSnapshot } from '../app/State';

export interface ClothOptions {
  amplitude?: number;
  speed?: number;
  key?: string;
  /** true = 竖直布料（旗 / 挂毯 / 晾晒衣物），false = 水平布料（天幕 / 帐帘） */
  vertical?: boolean;
}

interface ClothEntry {
  mesh: THREE.Mesh;
  base: Float32Array;
  w: number;
  d: number;
  axis: 'y' | 'z';
  amplitude: number;
  speed: number;
  phase: number;
}

const cloths: ClothEntry[] = [];

/**
 * 布料统一受全局风力参数控制（提示词 7-5）。
 * 振幅刻意压得很小，避免天幕 / 吊床 / 衣物摆动时穿过支架或相邻道具。
 */
export function cloth(
  w: number, d: number,
  color: THREE.ColorRepresentation,
  opts: ClothOptions = {},
): THREE.Mesh {
  const geometry = new THREE.PlaneGeometry(w, d, 10, 6);
  if (!opts.vertical) geometry.rotateX(-Math.PI / 2);
  const material = toon(color, { map: textures.cloth(), side: THREE.DoubleSide });
  const mesh = new THREE.Mesh(geometry, material);
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  mesh.userData.dynamic = true;
  mesh.userData.noOutline = true;
  mesh.userData.noMerge = true;
  mesh.name = `cloth-${opts.key ?? 'plain'}`;
  const pos = geometry.getAttribute('position') as THREE.BufferAttribute;
  const base = new Float32Array(pos.array as Float32Array);
  cloths.push({
    mesh,
    base,
    w, d,
    axis: opts.vertical ? 'z' : 'y',
    amplitude: Math.min(0.16, opts.amplitude ?? 0.06),
    speed: opts.speed ?? 1.0,
    phase: cloths.length * 0.83,
  });
  return mesh;
}

export function updateCloths(dt: number, env: EnvSnapshot): void {
  const wind = env.wind.strength;
  const dirX = env.wind.x;
  const dirZ = env.wind.z;
  for (const c of cloths) {
    const geometry = c.mesh.geometry;
    const pos = geometry.getAttribute('position') as THREE.BufferAttribute;
    const t = env.elapsed * c.speed;
    for (let i = 0; i < pos.count; i++) {
      const x = c.base[i * 3];
      const y = c.base[i * 3 + 1];
      const z = c.base[i * 3 + 2];
      const u = x / Math.max(0.001, c.w);
      const v = z / Math.max(0.001, c.d);
      const sway = Math.sin(t * 1.35 + u * 3.2 + c.phase) * 0.6
                 + Math.sin(t * 0.7 + v * 2.4 + c.phase * 1.7) * 0.4;
      const amp = c.amplitude * (0.45 + wind * 0.55);
      const centerFalloff = Math.max(0, 1 - u * u * 2 - v * v * 2);
      const sag = env.clothSag * 0.14 * centerFalloff;
      const delta = sway * amp - sag;
      if (c.axis === 'y') {
        pos.setXYZ(i, x + dirX * delta * 0.25, y + delta, z + dirZ * delta * 0.25);
      } else {
        pos.setXYZ(i, x, y - sag, z + delta);
      }
    }
    pos.needsUpdate = true;
    geometry.computeVertexNormals();
  }
}

export function clearCloths(): void {
  for (const c of cloths) c.mesh.geometry.dispose();
  cloths.length = 0;
}
