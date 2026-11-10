import * as THREE from 'three';
import { geo, lathe, makeMesh } from '../core/GeoFactory';
import { toon, glass, emissive, glowSprite } from '../core/ToonMaterialFactory';
import { textures } from '../core/TextureFactory';
import { breathe } from './LightBreath';
import { cloth } from './Cloth';

/**
 * 共享构件库（DESIGN.md §3.1 / §10 风险控制①）。
 * 所有构件的局部坐标以「底面中心」为原点，y >= 0；y 参数表示底面高度，内部自动抬升半个高度。
 * 这样 layout.place() 的 groundAlign 能精确贴地，杜绝悬浮 / 沉地 / 互相插入。
 */
export class PropsLibrary {
  readonly ink: THREE.ColorRepresentation = 0x2c3546;

  mat(color: THREE.ColorRepresentation, map?: THREE.Texture | null): THREE.MeshToonMaterial {
    return toon(color, map ? { map } : {});
  }

  // ---------- 基础件 ----------
  box(w: number, h: number, d: number, color: THREE.ColorRepresentation, x = 0, y = 0, z = 0, map?: THREE.Texture): THREE.Mesh {
    return makeMesh(geo.box(w, h, d), this.mat(color, map), x, y + h / 2, z);
  }
  rounded(w: number, h: number, d: number, color: THREE.ColorRepresentation, x = 0, y = 0, z = 0, r = 0.06): THREE.Mesh {
    return makeMesh(geo.rounded(w, h, d, r), this.mat(color), x, y + h / 2, z);
  }
  cyl(rt: number, rb: number, h: number, color: THREE.ColorRepresentation, x = 0, y = 0, z = 0, seg = 12): THREE.Mesh {
    return makeMesh(geo.cyl(rt, rb, h, seg), this.mat(color), x, y + h / 2, z);
  }
  sphere(r: number, color: THREE.ColorRepresentation, x = 0, y = 0, z = 0): THREE.Mesh {
    return makeMesh(geo.sphere(r), this.mat(color), x, y + r, z);
  }
  cone(r: number, h: number, color: THREE.ColorRepresentation, x = 0, y = 0, z = 0): THREE.Mesh {
    return makeMesh(geo.cone(r, h), this.mat(color), x, y + h / 2, z);
  }
  /** 水平面片（贴地装饰、水面、布料），y 为所在高度 */
  plane(w: number, d: number, color: THREE.ColorRepresentation, y = 0.012, map?: THREE.Texture): THREE.Mesh {
    const m = makeMesh(geo.plane(w, d), this.mat(color, map), 0, y, 0);
    m.rotation.x = -Math.PI / 2;
    m.castShadow = false;
    m.userData.noOutline = true;
    return m;
  }
  group(name = 'prop'): THREE.Group {
    const g = new THREE.Group();
    g.name = name;
    return g;
  }
  pole(r: number, h: number, color: THREE.ColorRepresentation, x = 0, y = 0, z = 0): THREE.Mesh {
    return this.cyl(r, r, h, color, x, y, z, 8);
  }

  // ---------- 营位家具 ----------
  sign(text: string, w = 1.15, h = 0.72, color: THREE.ColorRepresentation = 0x8a6b48, poleH = 1.1): THREE.Group {
    const g = this.group('sign');
    g.add(this.pole(0.055, poleH, color, 0, 0, 0));
    const board = makeMesh(geo.box(w, h, 0.07), this.mat(0xfff4d8, textures.sign(text)), 0, poleH + h / 2, 0.045);
    g.add(board);
    g.add(this.box(w + 0.08, 0.05, 0.1, 0x6d563d, 0, poleH - 0.02, 0.045));
    return g;
  }

  lamp(height = 1.2, color: THREE.ColorRepresentation = 0x4d5b66, glowColor: THREE.ColorRepresentation = 0xffd58a, key = 'campLamp'): THREE.Group {
    const g = this.group('lamp');
    g.add(this.pole(0.045, height, color));
    g.add(this.cyl(0.16, 0.1, 0.22, color, 0, height, 0));
    const bulb = makeMesh(geo.sphere(0.095), emissive(0xffe9b8), 0, height + 0.12, 0);
    g.add(bulb);
    const halo = glowSprite(glowColor, 0.95, 0);
    halo.position.set(0, height + 0.12, 0);
    g.add(halo);
    const bulbMat = bulb.material as THREE.MeshBasicMaterial;
    const haloMat = halo.material as THREE.SpriteMaterial;
    breathe(key, (v) => {
      bulbMat.color.setRGB(1, 0.88 + v * 0.1, 0.66 + v * 0.2);
      haloMat.opacity = v * 0.85;
      (halo.scale as THREE.Vector3).setScalar(0.7 + v * 0.5);
    }, { base: 0, speed: 1.1 });
    return g;
  }

  stringLights(width = 3.4, bulbs = 9, key = 'stringLight'): THREE.Group {
    const g = this.group('string-lights');
    const pts: THREE.Vector3[] = [];
    for (let i = 0; i <= 24; i++) {
      const t = i / 24;
      pts.push(new THREE.Vector3(-width / 2 + t * width, 2.35 - Math.sin(t * Math.PI) * 0.32, 0));
    }
    const curve = new THREE.CatmullRomCurve3(pts);
    g.add(new THREE.Mesh(new THREE.TubeGeometry(curve, 32, 0.012, 4, false), this.mat(0x4a4640)));
    const bulbsGroup = this.group('bulbs');
    for (let i = 1; i < bulbs; i++) {
      const p = curve.getPoint(i / bulbs);
      const b = makeMesh(geo.sphere(0.055), emissive(0xffd98c), p.x, p.y - 0.05, p.z);
      bulbsGroup.add(b);
      const halo = glowSprite(0xffcf7a, 0.36, 0);
      halo.position.copy(b.position);
      bulbsGroup.add(halo);
      const bm = b.material as THREE.MeshBasicMaterial;
      const hm = halo.material as THREE.SpriteMaterial;
      breathe(key, (v) => { bm.opacity = 0.4 + v * 0.6; hm.opacity = v * 0.7; }, { base: 0, speed: 1.8, phase: i * 0.7 });
      bm.transparent = true;
    }
    g.add(bulbsGroup);
    return g;
  }

  table(w = 1.1, d = 0.68, color: THREE.ColorRepresentation = 0xb98a5c): THREE.Group {
    const g = this.group('table');
    g.add(this.box(w, 0.06, d, color, 0, 0.72, 0, textures.wood()));
    for (const sx of [-1, 1]) for (const sz of [-1, 1]) {
      g.add(this.box(0.05, 0.7, 0.05, 0x6f757a, sx * (w / 2 - 0.09), 0, sz * (d / 2 - 0.08)));
    }
    return g;
  }

  chair(color: THREE.ColorRepresentation = 0x9c7a55): THREE.Group {
    const g = this.group('chair');
    g.add(this.box(0.42, 0.05, 0.42, color, 0, 0.42, 0));
    g.add(this.box(0.42, 0.44, 0.05, color, 0, 0.46, -0.19));
    for (const sx of [-1, 1]) for (const sz of [-1, 1]) {
      g.add(this.box(0.035, 0.42, 0.035, 0x6f757a, sx * 0.17, 0, sz * 0.17));
    }
    return g;
  }

  bench(w = 1.5, color: THREE.ColorRepresentation = 0xa87f56): THREE.Group {
    const g = this.group('bench');
    g.add(this.box(w, 0.07, 0.42, color, 0, 0.45, 0, textures.wood()));
    g.add(this.box(w, 0.4, 0.06, color, 0, 0.5, -0.2));
    for (const sx of [-1, 1]) g.add(this.box(0.08, 0.45, 0.36, 0x5f656a, sx * (w / 2 - 0.13), 0, 0));
    return g;
  }

  crate(w = 0.6, h = 0.5, d = 0.6, color: THREE.ColorRepresentation = 0xa9885f): THREE.Group {
    const g = this.group('crate');
    g.add(this.box(w, h, d, color, 0, 0, 0, textures.wood()));
    for (const y of [0.06, h - 0.08]) g.add(this.box(w + 0.02, 0.035, d + 0.02, 0x7d6242, 0, y, 0));
    return g;
  }

  drum(r = 0.26, h = 0.76, color: THREE.ColorRepresentation = 0x9a6b4f): THREE.Group {
    const g = this.group('drum');
    g.add(this.cyl(r, r, h, color, 0, 0, 0, 14));
    for (const y of [0.1, h * 0.5, h - 0.12]) g.add(this.cyl(r + 0.012, r + 0.012, 0.045, 0x5d5a52, 0, y, 0, 14));
    return g;
  }

  tire(r = 0.34, w = 0.18): THREE.Group {
    const g = this.group('tire');
    const t = makeMesh(geo.torus(r, w, 12), this.mat(0x3a3d40), 0, r, 0);
    t.rotation.x = Math.PI / 2;
    g.add(t);
    g.add(this.cyl(r * 0.55, r * 0.55, w * 0.5, 0x777b7e, 0, r - w * 0.25, 0, 10));
    return g;
  }

  rock(r = 0.4, color: THREE.ColorRepresentation = 0x8d8f88): THREE.Group {
    const g = this.group('rock');
    const m = makeMesh(geo.sphere(r, 7), this.mat(color), 0, r * 0.55, 0);
    m.scale.set(1, 0.62, 0.85);
    m.rotation.y = r * 3.1;
    g.add(m);
    return g;
  }

  // ---------- 植被 ----------
  pineTree(h = 4.2, color: THREE.ColorRepresentation = 0x3f6b4c): THREE.Group {
    const g = this.group('pine');
    g.add(this.cyl(0.13, 0.18, h * 0.42, 0x6b4f39, 0, 0, 0, 7));
    for (let i = 0; i < 4; i++) {
      const t = i / 4;
      const r = (1 - t * 0.62) * h * 0.26;
      const ch = h * 0.34;
      const y = h * 0.3 + t * h * 0.19;
      const c = this.cone(r, ch, i % 2 ? color : 0x4c7a56, 0, y, 0);
      c.userData.dynamic = true;
      g.add(c);
    }
    return g;
  }

  streetTree(h = 3.1, color: THREE.ColorRepresentation = 0x6d9b5e): THREE.Group {
    const g = this.group('street-tree');
    g.add(this.cyl(0.11, 0.15, h * 0.62, 0x7a6347, 0, 0, 0, 8));
    const crown = this.sphere(h * 0.26, color, 0, h * 0.6, 0);
    crown.scale.set(1.12, 0.95, 1.05);
    g.add(crown);
    g.add(this.sphere(h * 0.19, 0x7faa68, h * 0.14, h * 0.72, h * 0.08));
    return g;
  }

  shrub(r = 0.3, color: THREE.ColorRepresentation = 0x5f8a59): THREE.Group {
    const g = this.group('shrub');
    for (let i = 0; i < 3; i++) {
      const s = this.sphere(r * (0.6 + i * 0.13), color, (i - 1) * r * 0.65, 0, (i % 2) * r * 0.4);
      s.scale.y = 0.72;
      g.add(s);
    }
    return g;
  }

  // ---------- 结构物 ----------
  fence(length: number, height = 0.95, color: THREE.ColorRepresentation = 0xa88a63, kind: 'wood' | 'metal' = 'wood'): THREE.Group {
    const g = this.group('fence');
    const posts = Math.max(2, Math.round(length / 0.85));
    for (let i = 0; i <= posts; i++) {
      const x = -length / 2 + (i / posts) * length;
      g.add(this.box(kind === 'wood' ? 0.09 : 0.06, height, 0.09, color, x, 0, 0));
    }
    for (const y of [height * 0.32, height * 0.72]) {
      g.add(this.box(length, 0.06, 0.055, color, 0, y, 0));
    }
    return g;
  }

  awning(w = 3.2, d = 1.9, color: THREE.ColorRepresentation = 0xe8d9b8, key = 'awningCloth'): THREE.Group {
    const g = this.group('awning');
    for (const sx of [-1, 1]) for (const sz of [-1, 1]) {
      g.add(this.pole(0.045, 2.35, 0x7a7f82, sx * (w / 2 - 0.1), 0, sz * (d / 2 - 0.1)));
    }
    const c = cloth(w, d, color, { amplitude: 0.055, key });
    c.position.y = 2.32;
    g.add(c);
    return g;
  }

  flag(height = 3.0, color: THREE.ColorRepresentation = 0xe07a5f): THREE.Group {
    const g = this.group('flag');
    g.add(this.pole(0.04, height, 0x9aa2a8));
    const f = cloth(0.72, 0.44, color, { amplitude: 0.09, speed: 2.1, vertical: true, key: 'flagCloth' });
    f.position.set(0.36, height - 0.4, 0);
    g.add(f);
    return g;
  }

  panel(w = 1.25, h = 0.8): THREE.Group {
    const g = this.group('solar-panel');
    g.add(this.pole(0.05, 0.7, 0x6d7479));
    const p = this.box(w, 0.05, h, 0x2c4a6b, 0, 0.7, 0);
    p.rotation.x = -0.42;
    g.add(p);
    for (let i = -2; i <= 2; i++) {
      const line = this.box(0.012, 0.055, h * 0.94, 0x7fa8c8, i * w / 5, 0.7, 0);
      line.rotation.x = -0.42;
      g.add(line);
    }
    return g;
  }

  stairs(w = 1.3, d = 1.5, steps = 4, color: THREE.ColorRepresentation = 0x9b9a90): THREE.Group {
    const g = this.group('stairs');
    for (let i = 0; i < steps; i++) {
      const h = (i + 1) * 0.13;
      g.add(this.box(w, h, d / steps, color, 0, 0, -d / 2 + (i + 0.5) * d / steps));
    }
    return g;
  }

  bicycle(color: THREE.ColorRepresentation = 0x4b8ea8): THREE.Group {
    const g = this.group('bicycle');
    for (const x of [-0.42, 0.42]) {
      const w = makeMesh(geo.torus(0.26, 0.035, 12), this.mat(0x3c4045), x, 0.26, 0);
      g.add(w);
      g.add(this.cyl(0.012, 0.012, 0.9, 0x8d9499, x, 0.26, 0, 6));
    }
    const bar = this.box(0.72, 0.045, 0.045, color, 0, 0.62, 0);
    g.add(bar);
    g.add(this.box(0.2, 0.05, 0.16, 0x3c4045, 0.06, 0.82, 0));
    g.add(this.cyl(0.012, 0.012, 0.42, 0x8d9499, -0.38, 0.62, 0, 6));
    return g;
  }

  grill(): THREE.Group {
    const g = this.group('grill');
    for (const sx of [-1, 1]) for (const sz of [-1, 1]) g.add(this.box(0.04, 0.42, 0.04, 0x54595e, sx * 0.26, 0, sz * 0.2));
    g.add(this.box(0.62, 0.16, 0.48, 0x4a4e52, 0, 0.42, 0));
    g.add(this.box(0.56, 0.02, 0.42, 0x8c6a4a, 0, 0.58, 0));
    return g;
  }

  barrelGrill(): THREE.Group {
    const g = this.group('barrel-grill');
    const barrel = this.cyl(0.34, 0.34, 0.78, 0x8a6144, 0, 0.28, 0, 14);
    barrel.rotation.z = Math.PI / 2;
    g.add(barrel);
    for (const x of [-0.3, 0.3]) g.add(this.box(0.05, 0.3, 0.5, 0x5c5f61, x, 0, 0));
    g.add(this.box(0.62, 0.02, 0.4, 0x3e4245, 0, 0.62, 0));
    return g;
  }

  vending(w = 0.86, h = 1.9, d = 0.62): THREE.Group {
    const g = this.group('vending');
    g.add(this.box(w, h, d, 0xd8534f, 0, 0, 0));
    g.add(this.box(w * 0.78, h * 0.58, 0.03, 0x9fd6e8, -0.05, h * 0.34, d / 2 + 0.01));
    // 货道排列可见
    for (let r = 0; r < 4; r++) for (let c = 0; c < 4; c++) {
      g.add(this.box(0.12, 0.16, 0.035, [0xf2d27a, 0x8fc5e8, 0xeb8e7c, 0xb9d69a][(r + c) % 4],
        -w * 0.3 + c * 0.17, h * 0.38 + r * 0.22, d / 2 + 0.035));
    }
    const light = makeMesh(geo.box(w * 0.7, 0.09, 0.02), emissive(0xfff0c0), 0, h * 0.9, d / 2 + 0.02);
    g.add(light);
    g.add(this.box(w * 0.35, 0.26, 0.05, 0x3b4750, w * 0.22, h * 0.2, d / 2 + 0.02));
    return g;
  }

  gasPump(): THREE.Group {
    const g = this.group('gas-pump');
    g.add(this.box(0.72, 0.18, 0.55, 0x8f9aa2, 0, 0, 0));
    g.add(this.box(0.5, 1.25, 0.38, 0xe8ebec, 0, 0.18, 0));
    g.add(this.box(0.34, 0.3, 0.03, 0x37474f, 0, 1.0, 0.2));
    g.add(this.box(0.06, 0.42, 0.06, 0x4a5157, 0.3, 0.7, 0));
    return g;
  }

  store(w = 3.2, h = 2.7, d = 2.0, signText = '道の駅'): THREE.Group {
    const g = this.group('store');
    g.add(this.box(w, h, d, 0xe9e3d3, 0, 0, 0));
    g.add(this.box(w + 0.2, 0.16, d + 0.2, 0x7c8a94, 0, h, 0));
    // 大玻璃窗（餐饮区）
    const win = makeMesh(geo.box(w * 0.72, h * 0.52, 0.04), glass(0.32), 0, h * 0.3, d / 2 + 0.02);
    g.add(win);
    for (let i = -1; i <= 1; i++) g.add(this.box(0.05, h * 0.52, 0.06, 0x8a949b, i * w * 0.24, h * 0.3, d / 2 + 0.04));
    const signBoard = makeMesh(geo.box(w * 0.78, 0.46, 0.08), this.mat(0xfff4d8, textures.sign(signText)), 0, h * 0.78, d / 2 + 0.05);
    g.add(signBoard);
    const halo = glowSprite(0xffd894, 2.4, 0);
    halo.position.set(0, h * 0.78, d / 2 + 0.2);
    g.add(halo);
    const hm = halo.material as THREE.SpriteMaterial;
    breathe('signLight', (v) => { hm.opacity = v * 0.8; }, { base: 0, speed: 0.7 });
    return g;
  }

  container(w = 2.2, h = 1.9, d = 1.2, color: THREE.ColorRepresentation = 0x9a6b4f): THREE.Group {
    const g = this.group('container');
    g.add(this.box(w, h, d, color, 0, 0, 0, textures.rust()));
    for (let x = -w / 2 + 0.16; x < w / 2; x += 0.22) {
      g.add(this.box(0.05, h * 0.94, 0.03, 0x7c563e, x, 0.03, d / 2 + 0.01));
    }
    return g;
  }

  bunker(w = 2.4, h = 2.0, d = 1.8): THREE.Group {
    const g = this.group('bunker');
    g.add(this.box(w, h, d, 0xa7a49a, 0, 0, 0, textures.concrete()));
    g.add(this.box(w * 0.42, h * 0.72, 0.12, 0x5f6568, 0, 0, d / 2 + 0.06));
    g.add(this.box(w * 0.5, 0.1, 0.16, 0x40474b, 0, h * 0.78, d / 2 + 0.06));
    return g;
  }

  tower(h = 4.2): THREE.Group {
    const g = this.group('tower');
    for (const sx of [-1, 1]) for (const sz of [-1, 1]) {
      g.add(this.box(0.07, h, 0.07, 0x6d747a, sx * 0.5, 0, sz * 0.5));
    }
    for (let i = 1; i <= 3; i++) g.add(this.box(1.12, 0.05, 1.12, 0x7b8288, 0, (i / 4) * h, 0));
    g.add(this.box(1.25, 0.1, 1.25, 0x8b9195, 0, h, 0));
    const light = this.cyl(0.2, 0.26, 0.32, 0xd8d2b6, 0, h + 0.1, 0, 10);
    g.add(light);
    const halo = glowSprite(0xfff0c0, 1.8, 0);
    halo.position.set(0, h + 0.3, 0);
    g.add(halo);
    breathe('searchLight', (v) => { (halo.material as THREE.SpriteMaterial).opacity = v * 0.9; }, { base: 0 });
    return g;
  }

  radar(): THREE.Group {
    const g = this.group('radar');
    g.add(this.pole(0.07, 2.0, 0x7c8489));
    const dish = makeMesh(geo.sphere(0.62, 12), this.mat(0xb9c0c2), 0, 2.45, 0);
    dish.scale.set(1, 0.24, 0.62);
    dish.rotation.x = -0.4;
    g.add(dish);
    const led = makeMesh(geo.sphere(0.06), emissive(0xff8a72), 0.4, 2.1, 0);
    g.add(led);
    breathe('warningLight', (v) => { (led.material as THREE.MeshBasicMaterial).opacity = 0.3 + v * 0.7; }, { base: 0, speed: 3 });
    return g;
  }

  lighthouse(h = 3.4): THREE.Group {
    const g = this.group('lighthouse');
    g.add(this.cyl(0.34, 0.48, h, 0xe6e2d6, 0, 0, 0, 12));
    g.add(this.cyl(0.35, 0.35, 0.24, 0xb85f52, 0, h * 0.42, 0, 12));
    g.add(this.cyl(0.42, 0.42, 0.44, 0xf3ead2, 0, h, 0, 12));
    g.add(this.cone(0.52, 0.4, 0xb85f52, 0, h + 0.44, 0));
    const beam = makeMesh(geo.cone(1.5, 5.5, 12), new THREE.MeshBasicMaterial({
      color: 0xffe9b0, transparent: true, opacity: 0.16, side: THREE.DoubleSide, depthWrite: false,
    }), 0, h + 0.3, 0);
    beam.rotation.z = Math.PI / 2;
    beam.userData.dynamic = true;
    beam.name = 'lighthouse-beam';
    g.add(beam);
    return g;
  }

  sailboat(): THREE.Group {
    const g = this.group('sailboat');
    const hull = this.box(1.1, 0.22, 0.42, 0xf1ece0, 0, 0.05, 0);
    g.add(hull);
    g.add(this.pole(0.025, 1.3, 0x8a7458, 0, 0.24, 0));
    const sailShape = new THREE.Shape();
    sailShape.moveTo(0, 0); sailShape.lineTo(0.52, 0.08); sailShape.lineTo(0, 1.15); sailShape.lineTo(0, 0);
    const sail = makeMesh(new THREE.ShapeGeometry(sailShape), this.mat(0xfff8e6), 0.02, 0.3, 0);
    (sail.material as THREE.Material).side = THREE.DoubleSide;
    g.add(sail);
    return g;
  }

  // ---------- 车辆 / 内饰基础件 ----------
  wheel(r = 0.42, w = 0.22): THREE.Group {
    const g = this.group('wheel');
    const t = makeMesh(geo.cyl(r, r, w, 16), this.mat(0x35383c), 0, r, 0);
    t.rotation.z = Math.PI / 2;
    g.add(t);
    const hub = makeMesh(geo.cyl(r * 0.48, r * 0.48, w + 0.02, 12), this.mat(0xa8adb0), 0, r, 0);
    hub.rotation.z = Math.PI / 2;
    g.add(hub);
    return g;
  }

  window(w = 1.1, h = 0.72, frame = 0x5a646b): THREE.Group {
    const g = this.group('window');
    g.add(this.box(w + 0.08, 0.055, 0.05, frame, 0, h, 0));
    g.add(this.box(w + 0.08, 0.055, 0.05, frame, 0, 0, 0));
    for (const sx of [-1, 1]) g.add(this.box(0.055, h, 0.05, frame, sx * w / 2, 0, 0));
    const pane = makeMesh(geo.plane(w, h), glass(0.2), 0, h / 2, 0.026);
    pane.userData.noOutline = true;
    g.add(pane);
    return g;
  }

  cabinet(w = 0.9, h = 0.42, d = 0.34, color: THREE.ColorRepresentation = 0xc79b6c): THREE.Group {
    const g = this.group('cabinet');
    g.add(this.box(w, h, d, color, 0, 0, 0, textures.wood()));
    g.add(this.box(w * 0.96, 0.03, 0.02, 0x6d563d, 0, h * 0.5, d / 2 + 0.01));
    return g;
  }

  bed(w = 1.5, d = 0.9, color: THREE.ColorRepresentation = 0xe8ddc8): THREE.Group {
    const g = this.group('bed');
    g.add(this.box(w, 0.28, d, 0xa9885f, 0, 0, 0));
    g.add(this.box(w * 0.96, 0.14, d * 0.94, color, 0, 0.28, 0));
    g.add(this.box(w * 0.42, 0.1, d * 0.5, 0xf3eee2, -w * 0.24, 0.42, 0));
    return g;
  }

  sofa(w = 1.3, color: THREE.ColorRepresentation = 0xb98a6a): THREE.Group {
    const g = this.group('sofa');
    g.add(this.box(w, 0.28, 0.6, color, 0, 0, 0));
    g.add(this.box(w, 0.42, 0.16, color, 0, 0.28, -0.24));
    return g;
  }

  sink(): THREE.Group {
    const g = this.group('sink');
    g.add(this.box(0.62, 0.66, 0.46, 0xb4a58c, 0, 0, 0));
    g.add(this.box(0.5, 0.04, 0.36, 0x9aa8ab, 0, 0.66, 0));
    g.add(this.box(0.06, 0.28, 0.06, 0x8a9296, -0.16, 0.7, -0.12));
    return g;
  }

  stove(): THREE.Group {
    const g = this.group('stove');
    g.add(this.box(0.6, 0.64, 0.44, 0xa9a396, 0, 0, 0));
    g.add(this.box(0.52, 0.03, 0.38, 0x3f4548, 0, 0.64, 0));
    for (const sx of [-1, 1]) for (const sz of [-1, 1]) {
      g.add(this.cyl(0.07, 0.07, 0.02, 0x60676a, sx * 0.13, 0.66, sz * 0.1, 10));
    }
    return g;
  }

  fridge(h = 1.3): THREE.Group {
    const g = this.group('fridge');
    g.add(this.box(0.56, h, 0.52, 0xd9ddd9, 0, 0, 0));
    g.add(this.box(0.5, 0.03, 0.02, 0x8e979a, 0, h * 0.58, 0.27));
    g.add(this.box(0.03, 0.24, 0.04, 0x8e979a, 0.2, h * 0.72, 0.28));
    return g;
  }

  screen(w = 0.5, h = 0.32, color: THREE.ColorRepresentation = 0x6fc4d8): THREE.Group {
    const g = this.group('screen');
    g.add(this.box(w, h, 0.04, 0x2e363d, 0, 0, 0));
    g.add(makeMesh(geo.plane(w * 0.9, h * 0.84), emissive(color), 0, h / 2, 0.024));
    return g;
  }

  ladder(h = 2.2): THREE.Group {
    const g = this.group('ladder');
    for (const sx of [-1, 1]) g.add(this.box(0.045, h, 0.045, 0x8b9297, sx * 0.22, 0, 0));
    for (let i = 1; i < 7; i++) g.add(this.box(0.46, 0.035, 0.045, 0x9ba2a6, 0, (i / 7) * h, 0));
    return g;
  }

  roofTent(w = 2.1, d = 1.5, h = 1.1): THREE.Group {
    const g = this.group('roof-tent');
    g.add(this.box(w, 0.1, d, 0x6d7a72, 0, 0, 0));
    const tent = this.box(w * 0.94, h * 0.82, d * 0.9, 0xdfd0ae, 0, 0.1, 0, textures.cloth());
    g.add(tent);
    g.add(this.box(w * 0.98, 0.08, d * 0.96, 0xb9a888, 0, 0.1 + h * 0.82, 0));
    const curtain = makeMesh(geo.plane(w * 0.5, h * 0.6), glass(0.3, 0xf2e3c4), 0, 0.1 + h * 0.4, d * 0.45 + 0.01);
    curtain.userData.noOutline = true;
    g.add(curtain);
    return g;
  }

  /** Lathe 旋转体示例（瓶罐 / 灯罩），供车型与场景补充细节 */
  bottle(r = 0.1, h = 0.3, color: THREE.ColorRepresentation = 0x8fb8c4): THREE.Mesh {
    const g = lathe([[0, 0], [r, 0], [r, h * 0.72], [r * 0.45, h * 0.85], [r * 0.45, h]], 10);
    return makeMesh(g, this.mat(color), 0, 0, 0);
  }
}
