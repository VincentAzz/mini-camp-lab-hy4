import * as THREE from 'three';
import { BASE } from '../data/layouts.js';
import { geo, makeMesh } from './GeoFactory';
import { toon } from './ToonMaterialFactory';
import { textures } from './TextureFactory';

export interface BasePalette {
  key: string;
  top: THREE.ColorRepresentation;
  topTexture: string | null;
  side: THREE.ColorRepresentation;
  strata: THREE.ColorRepresentation;
  rim: THREE.ColorRepresentation;
  ink: THREE.ColorRepresentation;
}

const maps: Record<string, () => THREE.CanvasTexture> = {
  grass: textures.grass,
  forestFloor: textures.forestFloor,
  gravel: textures.gravel,
  asphalt: textures.asphalt,
  concrete: textures.concrete,
  sand: textures.sand,
  parkingLines: textures.parkingLines,
};

/**
 * 统一正方形微缩底座（提示词 1-3）：尺寸 / 比例 / 陈列盒形式四场景一致，
 * 仅顶面材质、侧壁分层与边缘包边随场景变化。
 */
export class BasePlate {
  readonly group = new THREE.Group();
  private topMat!: THREE.MeshToonMaterial;
  private sideMat!: THREE.MeshToonMaterial;
  private strataMat!: THREE.MeshToonMaterial;
  private rimMats: THREE.MeshToonMaterial[] = [];
  private applied: BasePalette | null = null;

  constructor() {
    this.group.name = 'base-plate';
    this.build();
  }

  private build(): void {
    const s = BASE.size;
    const t = BASE.thickness;

    this.topMat = toon(0x7fa869, { map: textures.grass() });
    this.sideMat = toon(0x9a8b72);
    this.strataMat = toon(0x776a58);

    // 表层：顶面贴图 + 侧壁场景色
    const top = makeMesh(geo.box(s, t * 0.32, s), [
      this.sideMat, this.sideMat, this.topMat, this.strataMat, this.sideMat, this.sideMat,
    ], 0, -t * 0.16, 0);
    top.name = 'base-top';
    top.receiveShadow = true;
    top.castShadow = false;
    top.userData.noOutline = true;
    this.group.add(top);

    // 下层岩土 / 混凝土分层
    const strata = makeMesh(geo.box(s * 0.992, t * 0.68, s * 0.992), this.strataMat, 0, -t * 0.32 - t * 0.34, 0);
    strata.name = 'base-strata';
    strata.receiveShadow = true;
    strata.castShadow = false;
    strata.userData.noOutline = true;
    this.group.add(strata);

    // 底沿（陈列盒层次）
    const plinth = makeMesh(geo.box(s * 1.012, 0.14, s * 1.012), toon(0x4a4740), 0, -t - 0.07, 0);
    plinth.name = 'base-plinth';
    plinth.castShadow = false;
    plinth.userData.noOutline = true;
    this.group.add(plinth);

    // 顶面四周包边：4 条细长圆角条
    const rimW = BASE.rim;
    const inner = s - rimW;
    for (let i = 0; i < 4; i++) {
      const mat = toon(0x8d7c62);
      this.rimMats.push(mat);
      const horizontal = i < 2;
      const bar = makeMesh(
        horizontal ? geo.rounded(s, 0.11, rimW, 0.04) : geo.rounded(rimW, 0.11, inner, 0.04),
        mat,
        horizontal ? 0 : (i === 2 ? -1 : 1) * (s - rimW) / 2,
        0.055,
        horizontal ? (i === 0 ? -1 : 1) * (s - rimW) / 2 : 0,
      );
      bar.name = `base-rim-${i}`;
      bar.castShadow = false;
      bar.userData.noOutline = true;
      this.group.add(bar);
    }
  }

  apply(p: BasePalette): void {
    if (this.applied?.key === p.key) return;
    this.applied = p;
    this.topMat.color.set(p.top);
    this.topMat.map = p.topTexture && maps[p.topTexture] ? maps[p.topTexture]() : null;
    this.topMat.needsUpdate = true;
    this.sideMat.color.set(p.side);
    this.strataMat.color.set(p.strata);
    for (const m of this.rimMats) m.color.set(p.rim);
  }

  get ink(): THREE.ColorRepresentation {
    return this.applied?.ink ?? 0x2c3546;
  }
}
