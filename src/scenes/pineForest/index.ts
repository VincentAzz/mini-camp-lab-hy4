import * as THREE from 'three';
import type { SceneModule, SceneContext } from '../../registry/types';
import type { BasePalette } from '../../core/BasePlate';
import type { EnvSnapshot, TimeId, WeatherId } from '../../app/State';
import { textures } from '../../core/TextureFactory';
import { geo, makeMesh } from '../../core/GeoFactory';
import { emissive, glowSprite } from '../../core/ToonMaterialFactory';
import { cloth } from '../../common/Cloth';
import { instanced, scatter, type InstanceTransform } from '../../common/Instancing';

/** 山间松林营地（提示词 2.2）：森林绿 × 晨雾青白、被层叠松林环抱的碎石营位 */
const palette: BasePalette = {
  key: 'pineForest',
  top: 0x5c7a4e,
  topTexture: 'forestFloor',
  side: 0x6b5c46,
  strata: 0x504634,
  rim: 0x836f4f,
  ink: 0x2a3629,
};

interface Sway { obj: THREE.Object3D; base: number; phase: number; amp: number }
interface Dapple { sprite: THREE.Sprite; mat: THREE.SpriteMaterial; baseX: number; baseZ: number; phase: number }
interface Leaf { mesh: THREE.Mesh; baseX: number; baseZ: number; phase: number }
interface Spark { sprite: THREE.Sprite; mat: THREE.SpriteMaterial; x: number; z: number; phase: number }
interface Flame { mesh: THREE.Mesh; mat: THREE.MeshBasicMaterial; phase: number }
interface MistPlane { mesh: THREE.Mesh; baseX: number; phase: number }

interface Motion {
  sways: Sway[];
  dapples: Dapple[];
  streamTex: THREE.Texture;
  leaves: Leaf[];
  squirrel: THREE.Group;
  squirrelTimer: number;
  squirrelActive: boolean;
  hammock: THREE.Group;
  flames: Flame[];
  sparks: Spark[];
  mist: MistPlane[];
  mistMat: THREE.MeshBasicMaterial;
  fireLevel: number;
  emberLevel: number;
  dustLevel: number;
  mistBoost: number;
  dappleBoost: number;
  golden: number;
  weatherWet: number;
  weatherFog: number;
}

let motion: Motion | null = null;

/** 统一安放：登记占位 → 自动缩放贴合格子 → 底面精确贴地 → 挂到场景根 */
function put(root: THREE.Group, ctx: SceneContext, id: string, obj: THREE.Object3D): void {
  ctx.layout.place(obj, id);
  root.add(obj);
}

/** 纯视觉特效：不参与布局占位、不撑大包围盒、不描边 */
function fx(obj: THREE.Object3D): THREE.Object3D {
  obj.userData.noBounds = true;
  obj.userData.noOutline = true;
  obj.userData.dynamic = true;
  return obj;
}

const pineForest: SceneModule = {
  id: 'pineForest',
  label: '山间松林营地',
  icon: 'forest',
  palette,

  build(ctx: SceneContext): THREE.Group {
    const L = ctx.lib;
    const root = new THREE.Group();
    root.name = 'pineForest-scene';

    const m: Motion = {
      sways: [], dapples: [], streamTex: textures.water().clone(), leaves: [],
      squirrel: L.group('squirrel'), squirrelTimer: 7, squirrelActive: false,
      hammock: L.group('hammock-prop'), flames: [], sparks: [], mist: [],
      mistMat: new THREE.MeshBasicMaterial({
        map: textures.glow(), color: 0xe6f0ea, transparent: true, opacity: 0,
        depthWrite: false, side: THREE.DoubleSide,
      }),
      fireLevel: 0, emberLevel: 0, dustLevel: 0, mistBoost: 0, dappleBoost: 0,
      golden: 0, weatherWet: 0, weatherFog: 0,
    };
    m.streamTex.needsUpdate = true;
    m.streamTex.repeat.set(6, 1);

    /** 瘦高松成列（实例化树干 + 双色层叠树冠），收集树冠做针叶轻摆 */
    const pineStand = (count: number, seed: number, h: number): THREE.Group => {
      const g = L.group('pine-stand');
      const spots = scatter(count, -0.1, 0.1, -0.75, 0.75, seed, 0);
      const trunks: InstanceTransform[] = [];
      const dark: InstanceTransform[] = [];
      const light: InstanceTransform[] = [];
      for (const s of spots) {
        const k = s.scale ?? 1;
        const trunkH = k * h * 0.42;
        trunks.push({ x: s.x, y: trunkH / 2, z: s.z, scaleX: k, scaleY: trunkH, scaleZ: k });
        for (let i = 0; i < 4; i++) {
          const t = i / 4;
          const r = (1 - t * 0.62) * h * 0.13 * k;
          const ch = h * 0.34 * k;
          const yBottom = h * 0.3 * k + t * h * 0.19 * k;
          const tr: InstanceTransform = {
            x: s.x, y: yBottom + ch / 2, z: s.z,
            scaleX: r, scaleY: ch, scaleZ: r, rotY: (s.rotY ?? 0) + i * 0.5,
          };
          (i % 2 ? light : dark).push(tr);
        }
      }
      g.add(instanced(geo.cyl(0.13, 0.18, 1, 7), L.mat(0x6b4f39), trunks, 'pine-trunks'));
      const cd = instanced(geo.cone(1, 1, 8), L.mat(0x3c6647), dark, 'pine-canopy-dark');
      const cl = instanced(geo.cone(1, 1, 8), L.mat(0x527f59), light, 'pine-canopy-light');
      g.add(cd, cl);
      m.sways.push({ obj: cd, base: 0, phase: seed * 0.8, amp: 0.02 });
      m.sways.push({ obj: cl, base: 0, phase: seed * 0.8 + 1.3, amp: 0.02 });
      return g;
    };

    // ---- 两树之间的吊床（布面随风轻晃）----
    {
      const g = m.hammock;
      for (const sx of [-0.92, 0.92]) {
        const trunk = L.pole(0.09, 1.7, 0x6b4f39, sx, 0, 0);
        const crown = L.cone(0.34, 0.7, 0x456f4c, sx, 1.35, 0);
        g.add(trunk, crown);
      }
      const bed = cloth(1.7, 0.62, 0xddc9a0, { amplitude: 0.09, key: 'hammock' });
      bed.position.y = 0.92;
      g.add(bed);
      for (const sx of [-1, 1]) {
        const rope = new THREE.CatmullRomCurve3([
          new THREE.Vector3(sx * 0.92, 1.6, 0),
          new THREE.Vector3(sx * 0.78, 1.24, 0.06),
          new THREE.Vector3(sx * 0.78, 0.98, 0.28),
        ]);
        g.add(new THREE.Mesh(new THREE.TubeGeometry(rope, 12, 0.014, 4, false), L.mat(0xd8c9a4)));
      }
      put(root, ctx, 'hammock', g);
    }

    // ---- 篝火堆：石圈 + 交错的柴 + 跳动火焰 ----
    {
      const g = L.group('campfire');
      for (let i = 0; i < 8; i++) {
        const a = (i / 8) * Math.PI * 2;
        const r = L.rock(0.13, 0x8c8f86);
        r.position.set(Math.cos(a) * 0.34, 0, Math.sin(a) * 0.34);
        g.add(r);
      }
      for (let i = 0; i < 3; i++) {
        const log = L.cyl(0.055, 0.055, 0.46, 0x7a5538, 0, 0.1 + i * 0.05, 0, 7);
        log.rotation.z = Math.PI / 2;
        log.rotation.y = i * 1.05;
        g.add(log);
      }
      for (let i = 0; i < 3; i++) {
        const fmat = emissive(i === 0 ? 0xffd06a : 0xff8a3c, 0.92);
        const flame = makeMesh(geo.cone(0.16 - i * 0.03, 0.42 - i * 0.08, 6), fmat,
          (i - 1) * 0.07, 0.2, 0);
        flame.userData.dynamic = true;
        flame.userData.noOutline = true;
        g.add(flame);
        m.flames.push({ mesh: flame, mat: fmat, phase: i * 1.7 });
      }
      const halo = glowSprite(0xff9a4c, 0.75, 0);
      halo.position.set(0, 0.42, 0);
      g.add(halo);
      put(root, ctx, 'campfire', g);

      // 火星（独立特效：root.add，按 campfire 定位）
      const cp = ctx.layout.byId('campfire');
      const bx = cp?.x ?? 0, bz = cp?.z ?? 0;
      for (let i = 0; i < 6; i++) {
        const sp = glowSprite(0xffb45c, 0.14, 0);
        const smat = sp.material as THREE.SpriteMaterial;
        fx(sp);
        sp.position.set(bx + (i - 3) * 0.06, 0.4, bz + (i % 2) * 0.05);
        root.add(sp);
        m.sparks.push({ sprite: sp, mat: smat, x: bx + (i - 3) * 0.06, z: bz, phase: i * 0.63 });
      }
      ctx.decor.bind('fire', (v) => { m.fireLevel = v; });
      ctx.decor.bind('ember', (v) => { m.emberLevel = v; });
    }

    // ---- 环形原木凳 ----
    {
      const g = L.group('log-seats');
      for (let i = 0; i < 5; i++) {
        const a = -0.5 + (i / 4) * Math.PI * 1.15;
        const seat = L.cyl(0.14, 0.14, 0.52, 0x7d5c3c, Math.cos(a) * 0.62, 0.14, Math.sin(a) * 0.62, 8);
        seat.rotation.z = Math.PI / 2;
        seat.rotation.y = -a;
        const end = L.cyl(0.14, 0.14, 0.02, 0xb08a5f, Math.cos(a) * 0.62, 0.14, Math.sin(a) * 0.62, 8);
        end.rotation.z = Math.PI / 2;
        end.position.x += Math.sin(a) * 0.26;
        g.add(seat, end);
      }
      put(root, ctx, 'logSeats', g);
    }

    // ---- 木质营位平台（实例化木板 + 边框）----
    {
      const g = L.group('deck');
      const boards = instanced(geo.box(0.19, 0.09, 1.7), L.mat(0xb08a5f, textures.wood()),
        Array.from({ length: 10 }, (_, i) => ({ x: -0.86 + i * 0.19, y: 0.045, z: 0 })), 'deck-boards');
      g.add(boards);
      for (const sz of [-1, 1]) g.add(L.box(1.95, 0.1, 0.07, 0x8a6a45, 0, 0, sz * 0.87));
      put(root, ctx, 'deck', g);
    }

    // ---- 垒起的柴堆 ----
    {
      const g = L.group('firewood');
      for (let row = 0; row < 3; row++) {
        for (let i = 0; i < 4 - row; i++) {
          const log = L.cyl(0.07, 0.07, 0.62, 0x8a6240, -0.28 + i * 0.18 + row * 0.09, 0.09 + row * 0.15, 0, 7);
          log.rotation.x = Math.PI / 2;
          g.add(log);
        }
      }
      for (const sx of [-0.42, 0.42]) g.add(L.pole(0.045, 0.58, 0x5f4632, sx, 0, 0));
      put(root, ctx, 'firewood', g);
    }

    // ---- 晾晒的毛巾（竖直布料，全局风力驱动）----
    {
      const g = L.group('laundry');
      for (const sx of [-0.78, 0.78]) g.add(L.pole(0.04, 1.55, 0x8a7458, sx, 0, 0));
      const line = new THREE.CatmullRomCurve3([
        new THREE.Vector3(-0.78, 1.45, 0), new THREE.Vector3(0, 1.34, 0), new THREE.Vector3(0.78, 1.45, 0),
      ]);
      g.add(new THREE.Mesh(new THREE.TubeGeometry(line, 16, 0.012, 4, false), L.mat(0xd8c9a4)));
      const specs: [number, number][] = [[-0.42, 0xe8ddc4], [0.05, 0xa9c2c8], [0.5, 0xd9b48a]];
      for (const [tx, col] of specs) {
        const towel = cloth(0.34, 0.5, col, { amplitude: 0.09, speed: 1.7, vertical: true, key: 'laundry' });
        towel.position.set(tx, 1.08, 0);
        g.add(towel);
      }
      put(root, ctx, 'laundry', g);
    }

    // ---- 打水桶与水瓢 ----
    {
      const g = L.group('water-bucket');
      g.add(L.cyl(0.17, 0.19, 0.42, 0x8a6a45, 0, 0, 0, 12));
      for (const y of [0.06, 0.36]) g.add(L.cyl(0.185, 0.185, 0.035, 0x5f5a4e, 0, y, 0, 12));
      const handle = new THREE.CatmullRomCurve3([
        new THREE.Vector3(-0.17, 0.4, 0), new THREE.Vector3(0, 0.62, 0), new THREE.Vector3(0.17, 0.4, 0),
      ]);
      g.add(new THREE.Mesh(new THREE.TubeGeometry(handle, 12, 0.014, 4, false), L.mat(0x6f757a)));
      const dipper = L.group('dipper');
      const bowl = L.sphere(0.12, 0xc7a874, 0, 0, 0);
      bowl.scale.y = 0.55;
      dipper.add(bowl);
      const handle2 = L.cyl(0.018, 0.018, 0.3, 0xa9885f, 0.18, 0.02, 0, 6);
      handle2.rotation.z = 0.5;
      dipper.add(handle2);
      dipper.position.set(0.28, 0.06, 0.14);
      g.add(dipper);
      put(root, ctx, 'waterBucket', g);
    }

    // ---- 林间木阶步道 ----
    put(root, ctx, 'woodSteps', L.stairs(1.25, 1.2, 3, 0x9a7a52));

    // ---- 指路木牌（主牌 + 多向箭头）----
    {
      const g = L.group('trail-sign');
      g.add(L.sign('山涧\n营地', 0.92, 0.62, 0x7a5a3c, 1.35));
      const dirs: [number, number, number][] = [[0.5, 1.15, 0x8a6b48], [-0.5, 1.0, 0x8a6b48]];
      for (const [dz, y, col] of dirs) {
        const arrow = L.box(0.5, 0.14, 0.06, col, 0.12, y, dz * 0.2);
        g.add(arrow);
        const tip = L.cone(0.1, 0.16, col, 0.4, y - 0.01, dz * 0.2);
        tip.rotation.z = -Math.PI / 2;
        g.add(tip);
      }
      put(root, ctx, 'trailSign', g);
    }

    // ---- 苔藓蕨类与蘑菇丛 ----
    {
      const g = L.group('undergrowth');
      const fronds = instanced(geo.cone(0.05, 0.42, 5), L.mat(0x6f9a63),
        scatter(16, -0.6, 0.6, -0.4, 0.4, 12, 0), 'fronds');
      g.add(fronds);
      for (const s of scatter(6, -0.55, 0.55, -0.35, 0.35, 19, 0)) {
        const moss = L.sphere(0.14 * (s.scale ?? 1), 0x5e8249, s.x, 0, s.z);
        moss.scale.y = 0.35;
        g.add(moss);
      }
      for (const [mx, mz] of [[-0.3, 0.15], [0.18, -0.2], [0.4, 0.25]]) {
        g.add(L.cyl(0.03, 0.035, 0.16, 0xf0e6cf, mx, 0, mz, 7));
        const cap = L.sphere(0.1, 0xc55a44, mx, 0.16, mz);
        cap.scale.y = 0.55;
        g.add(cap);
        for (const [dx, dz] of [[0.03, 0.02], [-0.03, -0.02]]) {
          const dot = L.sphere(0.02, 0xf3ead6, mx + dx, 0.22, mz + dz);
          g.add(dot);
        }
      }
      put(root, ctx, 'undergrowth', g);
    }

    // ---- 山涧小溪（贴地水带 + 溪岸石 + 芦苇，纹理滚动形成流光）----
    {
      const g = L.group('stream');
      const waterMat = new THREE.MeshBasicMaterial({
        map: m.streamTex, transparent: true, opacity: 0.92, side: THREE.DoubleSide, depthWrite: false,
      });
      const water = makeMesh(geo.plane(9.4, 1.9), waterMat, 0, 0.02, 0);
      water.rotation.x = -Math.PI / 2;
      water.userData.noOutline = true;
      g.add(water);
      for (const s of scatter(9, -4.3, 4.3, -0.85, 0.85, 23, 0)) {
        if (Math.abs(s.z) < 0.55) continue;
        const r = L.rock(0.16 * (s.scale ?? 1), 0x8d9086);
        r.position.set(s.x, 0, s.z);
        g.add(r);
      }
      const reeds = instanced(geo.cone(0.035, 0.5, 5), L.mat(0x8aa86a),
        scatter(18, -4.4, 4.4, 0.6, 0.95, 29, 0), 'reeds');
      g.add(reeds);
      put(root, ctx, 'stream', g);

      // 落叶漂流（独立特效，按 stream 定位）
      const sp = ctx.layout.byId('stream');
      const sx = sp?.x ?? 0, sz = sp?.z ?? 0, half = (sp?.w ?? 8) * 0.45;
      for (let i = 0; i < 7; i++) {
        const leaf = makeMesh(geo.plane(0.16, 0.09),
          new THREE.MeshBasicMaterial({ color: i % 2 ? 0xd9a25a : 0xb9743f, side: THREE.DoubleSide }),
          sx - half + (i / 7) * half * 2, 0.06, sz + (i % 3 - 1) * 0.3);
        leaf.rotation.x = -Math.PI / 2;
        fx(leaf);
        root.add(leaf);
        m.leaves.push({ mesh: leaf, baseX: leaf.position.x, baseZ: leaf.position.z, phase: i * 0.9 });
      }
    }

    // ---- 跨溪小木桥（拱形桥板 + 栏杆）----
    {
      const g = L.group('footbridge');
      for (let i = 0; i < 9; i++) {
        const t = i / 8;
        const y = 0.18 + Math.sin(t * Math.PI) * 0.12;
        g.add(L.box(0.16, 0.07, 0.9, 0xa07c52, -0.72 + i * 0.18, y, 0, textures.wood()));
      }
      for (const sx of [-0.8, 0.8]) {
        for (const sz of [-0.42, 0.42]) g.add(L.pole(0.035, 0.55, 0x7a5a3c, sx, 0.2, sz));
        const rail = new THREE.CatmullRomCurve3([
          new THREE.Vector3(sx, 0.7, -0.42), new THREE.Vector3(sx, 0.78, 0), new THREE.Vector3(sx, 0.7, 0.42),
        ]);
        g.add(new THREE.Mesh(new THREE.TubeGeometry(rail, 12, 0.02, 4, false), L.mat(0x8a6a45)));
      }
      put(root, ctx, 'footbridge', g);
    }

    // ---- 树干鸟屋 ----
    {
      const g = L.group('birdhouse');
      g.add(L.pole(0.11, 1.05, 0x6b4f39, 0, 0, 0));
      const house = L.box(0.32, 0.3, 0.3, 0xc9a877, 0, 1.02, 0);
      g.add(house);
      const roof = L.cone(0.26, 0.2, 0x8a5f42, 0, 1.3, 0);
      roof.rotation.y = Math.PI / 4;
      g.add(roof);
      const hole = L.cyl(0.065, 0.065, 0.02, 0x3a2f26, 0, 1.05, 0.16, 10);
      hole.rotation.x = Math.PI / 2;
      g.add(hole);
      g.add(L.pole(0.012, 0.12, 0x6b4f39, 0, 0.98, 0.2));
      put(root, ctx, 'birdhouse', g);
    }

    // ---- 防熊食物储藏箱 ----
    {
      const g = L.group('bear-box');
      for (const sx of [-0.26, 0.26]) g.add(L.box(0.07, 0.18, 0.5, 0x6d7470, sx, 0, 0));
      g.add(L.box(0.72, 0.48, 0.52, 0x7d8880, 0, 0.18, 0));
      g.add(L.box(0.76, 0.06, 0.56, 0x5c6560, 0, 0.66, 0));
      for (const sx of [-0.3, 0.3]) g.add(L.box(0.05, 0.5, 0.56, 0x59615d, sx, 0.18, 0));
      const latch = L.box(0.1, 0.14, 0.04, 0xc9a24a, 0, 0.4, 0.28);
      g.add(latch);
      for (const sx of [-0.28, 0.28]) for (const sy of [0.24, 0.6]) {
        g.add(L.sphere(0.02, 0x40474b, sx, sy, 0.27));
      }
      put(root, ctx, 'bearBox', g);
    }

    // ---- 蕨类苔藓（大丛）----
    {
      const g = L.group('fern-patch');
      g.add(instanced(geo.cone(0.055, 0.46, 5), L.mat(0x67965a),
        scatter(26, -1.0, 1.0, -0.55, 0.55, 31, 0), 'ferns'));
      g.add(instanced(geo.cone(0.04, 0.32, 5), L.mat(0x86a86a),
        scatter(18, -1.0, 1.0, -0.55, 0.55, 37, 0), 'ferns2'));
      for (const s of scatter(8, -0.95, 0.95, -0.5, 0.5, 41, 0)) {
        const moss = L.sphere(0.18 * (s.scale ?? 1), 0x4f7a45, s.x, 0, s.z);
        moss.scale.y = 0.3;
        g.add(moss);
      }
      put(root, ctx, 'fernPatch', g);
    }

    // ---- 溪边石灯（灯室带柔光，随营地灯呼吸）----
    {
      const g = L.group('stone-lantern');
      g.add(L.cyl(0.2, 0.24, 0.12, 0x8f918a, 0, 0, 0, 8));
      g.add(L.cyl(0.08, 0.1, 0.4, 0x9a9c94, 0, 0.12, 0, 8));
      g.add(L.cyl(0.2, 0.18, 0.06, 0x8f918a, 0, 0.52, 0, 8));
      g.add(L.box(0.3, 0.26, 0.3, 0xa7a89f, 0, 0.58, 0));
      const win = makeMesh(geo.box(0.2, 0.16, 0.02), emissive(0xffd9a0), 0, 0.68, 0.16);
      g.add(win);
      const halo = glowSprite(0xffd39a, 0.6, 0);
      halo.position.set(0, 0.68, 0.2);
      g.add(halo);
      const winMat = win.material as THREE.MeshBasicMaterial;
      const haloMat = halo.material as THREE.SpriteMaterial;
      ctx.decor.bind('campLamp', (v) => { winMat.opacity = 0.25 + v * 0.75; haloMat.opacity = v * 0.7; });
      const roof = L.cone(0.28, 0.18, 0x82857e, 0, 0.84, 0);
      roof.rotation.y = Math.PI / 4;
      g.add(roof);
      g.add(L.sphere(0.06, 0x9a9c94, 0, 1.02, 0));
      put(root, ctx, 'stoneLantern', g);
    }

    // ---- 四片层叠松林（实例化瘦高松，树冠轻摆）----
    put(root, ctx, 'pineLeft', pineStand(3, 11, 5.2));
    put(root, ctx, 'pineRight', pineStand(3, 23, 5.4));
    put(root, ctx, 'pineCornerL', pineStand(3, 31, 4.6));
    put(root, ctx, 'pineCornerR', pineStand(3, 43, 4.8));

    // ---- 远处层叠山脊与山腰云带 ----
    {
      const g = L.group('mountains');
      const layers: [number, number, number][] = [
        [-0.1, 2.5, 0x7d9086], [0.5, 3.0, 0x6f857b], [1.1, 2.2, 0x627a70],
      ];
      for (let li = 0; li < layers.length; li++) {
        const [zz, hh, col] = layers[li];
        for (let i = 0; i < 6; i++) {
          const peak = makeMesh(geo.cone(1.15 + (i % 3) * 0.35, hh * (0.6 + (i % 3) * 0.2), 4),
            L.mat(col), -6.4 + i * 2.6, 0, zz);
          peak.rotation.y = Math.PI / 4;
          g.add(peak);
        }
      }
      for (let i = 0; i < 4; i++) {
        const cloud = makeMesh(geo.plane(3.2, 0.42),
          new THREE.MeshBasicMaterial({ color: 0xeaf2ea, transparent: true, opacity: 0.32, side: THREE.DoubleSide, depthWrite: false }),
          -5 + i * 3.4, 1.7 + (i % 2) * 0.5, 0.4);
        cloud.userData.noOutline = true;
        g.add(cloud);
      }
      put(root, ctx, 'mountains', g);
    }

    // ---- 林缘地被（贴地层）----
    {
      const g = L.group('forest-floor');
      g.add(L.plane(15.5, 1.0, 0x51704a, 0.014, textures.forestFloor()));
      g.add(instanced(geo.cone(0.04, 0.28, 5), L.mat(0x6f9a5b),
        scatter(30, -7.4, 7.4, -0.4, 0.4, 53, 0), 'floor-grass'));
      put(root, ctx, 'forestFloor', g);
    }

    // ---- 林间斑驳光斑（贴地柔光，摇曳 + 清晨跳动 + 黄昏转金）----
    {
      const front = ctx.layout.byId('deck');
      const cz = front?.z ?? 6.3;
      for (let i = 0; i < 7; i++) {
        const sp = glowSprite(0xfff2cc, 0.9 + (i % 3) * 0.25, 0);
        const smat = sp.material as THREE.SpriteMaterial;
        fx(sp);
        sp.position.set(-4.4 + i * 1.45, 0.06, cz + (i % 2 ? 0.5 : -0.5));
        root.add(sp);
        m.dapples.push({ sprite: sp, mat: smat, baseX: sp.position.x, baseZ: sp.position.z, phase: i * 1.1 });
      }
      ctx.decor.bind('dustMote', (v) => { m.dustLevel = v; });
    }

    // ---- 流动晨雾（大面片，清晨 / 浓雾天增强）----
    {
      for (let i = 0; i < 3; i++) {
        const plane = makeMesh(geo.plane(15, 3.2), m.mistMat, 0, 1.4 + i * 0.5, -6 + i * 1.6);
        fx(plane);
        root.add(plane);
        m.mist.push({ mesh: plane, baseX: 0, phase: i * 1.7 });
      }
    }

    // ---- 偶尔窜过枝头的松鼠 ----
    {
      const sq = m.squirrel;
      const body = L.sphere(0.11, 0xa9683c, 0, 0.1, 0);
      body.scale.set(1.3, 0.9, 0.9);
      sq.add(body);
      sq.add(L.sphere(0.07, 0xb87a48, -0.14, 0.2, 0));
      const tail = L.sphere(0.13, 0x8a5230, 0.18, 0.2, 0);
      tail.scale.set(0.7, 1.5, 0.7);
      sq.add(tail);
      for (const sz of [-1, 1]) sq.add(L.cone(0.035, 0.08, 0xa9683c, -0.13, 0.3, sz * 0.04));
      fx(sq);
      sq.visible = false;
      sq.position.set(-9, 2.4, -4);
      root.add(sq);
    }

    // ---- 场景专属时间表现 ----
    ctx.decor.registerSpawn('dawnMist', (show) => { m.mistBoost = show ? 1 : 0; });
    ctx.decor.registerSpawn('dawnDapples', (show) => { m.dappleBoost = show ? 1 : 0; });
    ctx.decor.registerSpawn('goldenHour', (show) => {
      m.golden = show ? 1 : 0;
      for (const d of m.dapples) d.mat.color.setHex(show ? 0xffcf78 : 0xfff2cc);
    });

    motion = m;
    return root;
  },

  onTimeChange(next: TimeId, _prev: TimeId, ctx: SceneContext): void {
    if (next === 'dawn') {
      ctx.decor.spawn('dawnMist');
      ctx.decor.spawn('dawnDapples');
      ctx.decor.despawn('goldenHour');
    } else if (next === 'dusk') {
      ctx.decor.despawn('dawnMist');
      ctx.decor.despawn('dawnDapples');
      ctx.decor.spawn('goldenHour');
    } else {
      ctx.decor.despawn('dawnMist');
      ctx.decor.despawn('dawnDapples');
      ctx.decor.despawn('goldenHour');
    }
  },

  onWeatherChange(next: WeatherId, _ctx: SceneContext): void {
    if (!motion) return;
    motion.weatherWet = next === 'rain' ? 1 : 0;
    motion.weatherFog = next === 'fog' ? 1 : 0;
    motion.streamTex.repeat.set(next === 'rain' ? 8 : 6, 1);
  },

  update(dt: number, elapsed: number, env: EnvSnapshot): void {
    if (!motion) return;
    const m = motion;
    const wind = env.wind.strength;

    // 松针随风轻摆（树冠层轻微摆动）
    for (const s of m.sways) {
      s.obj.rotation.z = s.base + Math.sin(elapsed * 0.7 + s.phase) * s.amp * (0.5 + wind * 0.5);
    }
    // 吊床轻晃
    m.hammock.rotation.z = Math.sin(elapsed * 0.7) * 0.018 * (0.5 + wind * 0.5);
    // 溪水流光
    m.streamTex.offset.x += dt * (0.05 + wind * 0.02 + m.weatherWet * 0.04);
    // 落叶漂流
    for (const lf of m.leaves) {
      lf.mesh.position.x = lf.baseX + ((elapsed * 0.24 + lf.phase) % 2.4) - 0.6;
      lf.mesh.position.z = lf.baseZ + Math.sin(elapsed * 0.8 + lf.phase) * 0.12;
      lf.mesh.rotation.z = Math.sin(elapsed + lf.phase) * 0.3;
    }
    // 林间光斑摇曳（清晨跳动更明显，夜间随营地灯减弱）
    for (const d of m.dapples) {
      d.sprite.position.x = d.baseX + Math.sin(elapsed * 0.5 + d.phase) * (0.18 + m.dappleBoost * 0.16);
      d.sprite.position.z = d.baseZ + Math.cos(elapsed * 0.42 + d.phase) * 0.16;
      const flick = 0.6 + 0.4 * Math.sin(elapsed * (1.4 + m.dappleBoost * 3.2) + d.phase);
      d.mat.opacity = (0.10 + m.dappleBoost * 0.22 + m.dustLevel * 0.05) * flick * (0.5 + env.glow * 0.5);
    }
    // 篝火火焰跳动
    for (const f of m.flames) {
      f.mesh.scale.y = 0.82 + Math.sin(elapsed * 6 + f.phase) * 0.18;
      f.mat.opacity = m.fireLevel * (0.7 + 0.3 * Math.sin(elapsed * 8 + f.phase));
      f.mesh.rotation.z = Math.sin(elapsed * 3 + f.phase) * 0.06;
    }
    // 火星升起
    for (const s of m.sparks) {
      const t = (elapsed * 0.55 + s.phase) % 1;
      s.sprite.position.y = 0.4 + t * 1.1;
      s.sprite.position.x = s.x + Math.sin(elapsed * 2 + s.phase) * 0.08;
      s.mat.opacity = m.emberLevel * (1 - t) * 0.9;
      (s.sprite.scale as THREE.Vector3).setScalar(0.1 + t * 0.06);
    }
    // 晨雾缓慢流动
    const mistAmt = m.mistBoost * 0.16 + m.weatherFog * 0.12;
    m.mistMat.opacity = mistAmt;
    for (const p of m.mist) {
      p.mesh.position.x = p.baseX + Math.sin(elapsed * 0.08 + p.phase) * 1.6;
    }
    // 松鼠低频窜过（约每 13 秒一次）
    m.squirrelTimer -= dt;
    if (!m.squirrelActive && m.squirrelTimer <= 0) {
      m.squirrelActive = true;
      m.squirrel.visible = true;
      m.squirrel.position.set(-9, 2.3 + Math.sin(elapsed) * 0.3, -4);
      m.squirrelTimer = 13;
    }
    if (m.squirrelActive) {
      m.squirrel.position.x += dt * 3.0;
      m.squirrel.position.y += Math.sin(elapsed * 9) * dt * 0.25;
      if (m.squirrel.position.x > 9) { m.squirrelActive = false; m.squirrel.visible = false; }
    }
  },

  dispose(): void { motion = null; },
};

export default pineForest;
