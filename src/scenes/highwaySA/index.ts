import * as THREE from 'three';
import type { SceneModule, SceneContext } from '../../registry/types';
import type { BasePalette } from '../../core/BasePlate';
import type { EnvSnapshot, TimeId, WeatherId } from '../../app/State';
import { textures } from '../../core/TextureFactory';
import { geo, makeMesh } from '../../core/GeoFactory';
import { emissive, glowSprite, glass } from '../../core/ToonMaterialFactory';
import { cloth } from '../../common/Cloth';
import { instanced, scatter, type InstanceTransform } from '../../common/Instancing';

/** 高速路服务区（提示词 2.4）：柏油灰 × 便利店暖光 × 行道树绿，旅途驿站的深夜与清晨 */
const palette: BasePalette = {
  key: 'highwaySA',
  top: 0x606872,
  topTexture: 'asphalt',
  side: 0x7b838c,
  strata: 0x565e68,
  rim: 0x8d959e,
  ink: 0x2b3546,
};

interface TrafficLight { mesh: THREE.Mesh; mat: THREE.MeshBasicMaterial; baseX: number; z: number; speed: number; phase: number }
interface TreeSway { obj: THREE.Object3D; base: number; phase: number }

interface Motion {
  traffic: TrafficLight[];
  vendingStripMat: THREE.MeshBasicMaterial;
  signGlowMat: THREE.SpriteMaterial;
  dawnStoreBoard: THREE.Object3D;
  deliveryCart: THREE.Group;
  treeSways: TreeSway[];
  storeLightLevel: number;
  signLevel: number;
  vendingLevel: number;
  trafficLevel: number;
  dustLevel: number;
  dawnStore: number;
  eveningTraffic: number;
  weatherWet: number;
  weatherFog: number;
  trafficHx: number;
  trafficHalf: number;
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

const highwaySA: SceneModule = {
  id: 'highwaySA',
  label: '高速路服务区',
  icon: 'service',
  palette,

  build(ctx: SceneContext): THREE.Group {
    const L = ctx.lib;
    const root = new THREE.Group();
    root.name = 'highwaySA-scene';

    const vendingStripMat = emissive(0xfff0bc, 0.9);
    vendingStripMat.transparent = true;
    vendingStripMat.depthWrite = false;
    const signGlow = glowSprite(0xffd894, 2.2, 0);
    const signGlowMat = signGlow.material as THREE.SpriteMaterial;

    const m: Motion = {
      traffic: [], vendingStripMat, signGlowMat,
      dawnStoreBoard: L.group('dawn-store-board'),
      deliveryCart: L.group('delivery-cart'),
      treeSways: [],
      storeLightLevel: 0, signLevel: 0, vendingLevel: 0, trafficLevel: 0, dustLevel: 0,
      dawnStore: 0, eveningTraffic: 0, weatherWet: 0, weatherFog: 0,
      trafficHx: 0, trafficHalf: 7,
    };

    // ---- 加油站雨棚与加油机 ----
    {
      const g = L.group('gas-canopy');
      g.add(L.box(3.2, 0.28, 2.1, 0xe8ecec, 0, 3.5, 0));
      g.add(L.box(3.3, 0.12, 2.2, 0xc4524a, 0, 3.66, 0));
      g.add(L.box(3.3, 0.05, 2.22, 0x3f6b96, 0, 3.52, 0));
      for (const sx of [-1.4, 1.4]) for (const sz of [-0.85, 0.85]) {
        g.add(L.pole(0.07, 3.5, 0xb9c0c4, sx, 0, sz));
      }
      for (const sx of [-0.8, 0.8]) {
        const pump = L.gasPump();
        pump.position.set(sx, 0, 0);
        g.add(pump);
      }
      // 檐下灯带
      for (const sz of [-0.9, 0.9]) {
        const strip = makeMesh(geo.box(3.0, 0.06, 0.05), emissive(0xfff2c8), 0, 3.4, sz);
        g.add(strip);
      }
      // 雨棚下一串小旗（竖直布料，受全局风力飘动）
      for (let i = 0; i < 5; i++) {
        const pennant = cloth(0.2, 0.26, i % 2 ? 0xe8c25c : 0xd8665a,
          { amplitude: 0.08, speed: 2.0, vertical: true, key: 'pennant' });
        pennant.position.set(-1.0 + i * 0.5, 3.05, 1.0);
        g.add(pennant);
      }
      put(root, ctx, 'gasCanopy', g);
    }

    // ---- 电动车充电桩 ----
    {
      const g = L.group('charger');
      g.add(L.box(0.5, 0.12, 0.4, 0x6d7478, 0, 0, 0));
      g.add(L.box(0.36, 1.35, 0.28, 0xe2e8e6, 0, 0.12, 0));
      const screen = makeMesh(geo.box(0.24, 0.3, 0.02), emissive(0x7fd6c0), 0, 1.08, 0.15);
      g.add(screen);
      g.add(L.box(0.26, 0.05, 0.02, 0x39434a, 0, 0.86, 0.15));
      g.add(L.cyl(0.05, 0.05, 0.1, 0x6fae7a, 0, 0.6, 0.15, 8));
      const cable = new THREE.CatmullRomCurve3([
        new THREE.Vector3(0.18, 0.9, 0), new THREE.Vector3(0.34, 0.6, 0.1),
        new THREE.Vector3(0.3, 0.28, 0.18), new THREE.Vector3(0.22, 0.2, 0.2),
      ]);
      g.add(new THREE.Mesh(new THREE.TubeGeometry(cable, 14, 0.02, 5, false), L.mat(0x3f474b)));
      g.add(L.box(0.08, 0.16, 0.08, 0x4a545a, 0.2, 0.14, 0.2));
      put(root, ctx, 'charger', g);
    }

    // ---- 自动售货机（货道可见 + 随时间常亮的灯带）----
    {
      const g = L.group('vending-prop');
      const vm = L.vending(0.9, 1.95, 0.64);
      g.add(vm);
      const strip = makeMesh(geo.box(0.66, 0.07, 0.02), vendingStripMat, 0, 1.78, 0.35);
      g.add(strip);
      g.add(L.box(0.3, 0.16, 0.04, 0x3b4750, 0, 0.34, 0.35));
      put(root, ctx, 'vending', g);
      ctx.decor.bind('vendingLight', (v) => { m.vendingLevel = v; });
    }

    // ---- 旗杆与小旗 ----
    {
      const g = L.group('flagpole-prop');
      g.add(L.cyl(0.18, 0.22, 0.12, 0x9aa2a8, 0, 0, 0, 10));
      g.add(L.flag(2.9, 0xe07a5f));
      const flag2 = L.flag(2.9, 0x6f9bb5);
      flag2.position.set(0.28, 0, 0.1);
      flag2.scale.setScalar(0.86);
      g.add(flag2);
      put(root, ctx, 'flagpole', g);
    }

    // ---- 长椅与分类垃圾桶 ----
    {
      const g = L.group('bench-bins');
      const bench = L.bench(1.25, 0xa8835b);
      bench.position.set(-0.35, 0, -0.1);
      g.add(bench);
      const bins: [number, number][] = [[0.55, 0x4f86b8], [0.82, 0x5f9a63], [1.09, 0xc46a52]];
      for (const [bx, col] of bins) {
        g.add(L.cyl(0.13, 0.14, 0.5, col, bx, 0, 0.05, 10));
        g.add(L.cyl(0.15, 0.15, 0.05, 0x3f474b, bx, 0.5, 0.05, 10));
        g.add(L.box(0.1, 0.12, 0.02, 0xf0ece0, bx, 0.3, 0.19));
      }
      put(root, ctx, 'benchBins', g);
    }

    // ---- 洗手池 ----
    {
      const g = L.group('wash-basin');
      g.add(L.sink());
      g.add(L.box(0.7, 0.06, 0.5, 0xb4a58c, 0, 0.7, 0));
      g.add(L.box(0.4, 0.5, 0.02, 0xbcd8e6, 0, 1.15, -0.24));
      g.add(L.cyl(0.02, 0.02, 0.18, 0x9aa8ab, 0, 0.72, -0.12, 8));
      put(root, ctx, 'washBasin', g);
    }

    // ---- 遮阳连廊与公共步道 ----
    {
      const g = L.group('walkway');
      g.add(L.box(3.0, 0.14, 1.3, 0xd6dcd8, 0, 2.25, 0));
      g.add(L.box(3.1, 0.06, 1.4, 0x8fa7ad, 0, 2.33, 0));
      for (const sx of [-1.35, 1.35]) for (const sz of [-0.55, 0.55]) {
        g.add(L.pole(0.05, 2.2, 0x9aa2a6, sx, 0, sz));
      }
      g.add(L.plane(2.9, 1.2, 0xb9bdb6, 0.02, textures.concrete()));
      for (const sx of [-0.9, 0.9]) {
        const strip = makeMesh(geo.box(0.9, 0.04, 0.04), emissive(0xfff0c4), sx, 2.18, 0.5);
        g.add(strip);
      }
      put(root, ctx, 'walkway', g);
    }

    // ---- 绿化带 ----
    {
      const g = L.group('planter');
      g.add(L.box(1.6, 0.28, 0.7, 0x9a9e95, 0, 0, 0));
      g.add(L.plane(1.45, 0.56, 0x6b5a42, 0.29));
      for (const sx of [-0.5, 0, 0.5]) {
        const sh = L.shrub(0.22, sx < 0 ? 0x6f9a5b : 0x82ac6a);
        sh.position.set(sx, 0.28, 0);
        g.add(sh);
      }
      g.add(instanced(geo.cone(0.035, 0.24, 5), L.mat(0x9ac27a),
        scatter(12, -0.65, 0.65, -0.22, 0.22, 13, 0), 'planter-grass'));
      put(root, ctx, 'planter', g);
    }

    // ---- 便利店与发光招牌 ----
    {
      const g = L.group('store-prop');
      g.add(L.store(3.0, 2.6, 1.8, '服务区'));
      // 门口「刚开灯」灯箱（清晨由 spawn 显隐）
      const board = makeMesh(geo.box(0.66, 0.3, 0.06),
        L.mat(0xfff4d8, textures.sign('OPEN')), 0, 2.15, 0.98);
      board.visible = false;
      g.add(board);
      m.dawnStoreBoard = board;
      // 送货小车（清晨出现，作为便利店子装饰随 place 定位）
      const cart = m.deliveryCart;
      cart.add(L.box(0.5, 0.06, 0.36, 0xb08a5f, 0, 0.34, 0));
      for (const sx of [-0.2, 0.2]) for (const sz of [-0.14, 0.14]) {
        const w = L.cyl(0.06, 0.06, 0.04, 0x3f474b, sx, 0.06, sz, 8);
        w.rotation.x = Math.PI / 2;
        cart.add(w);
      }
      cart.add(L.box(0.26, 0.24, 0.26, 0xd8b87a, -0.1, 0.49, 0));
      cart.position.set(1.05, 0, 1.15);
      cart.visible = false;
      g.add(cart);
      put(root, ctx, 'store', g);

      // 招牌额外柔和光晕（独立特效，按 store 定位，循环微闪）
      const sp = ctx.layout.byId('store');
      fx(signGlow);
      signGlow.position.set(sp?.x ?? 0, 2.1, (sp?.z ?? 0) + 1.1);
      root.add(signGlow);
      ctx.decor.bind('signLight', (v) => { m.signLevel = v; });
      ctx.decor.bind('storeLight', (v) => { m.storeLightLevel = v; });
      ctx.decor.registerSpawn('dawnStore', (show) => {
        m.dawnStore = show ? 1 : 0;
        m.dawnStoreBoard.visible = show;
        m.deliveryCart.visible = show;
      });
    }

    // ---- 餐饮区大玻璃窗（内透暖光 + 桌椅剪影）----
    {
      const g = L.group('dining-window');
      g.add(L.box(2.0, 2.1, 0.16, 0xd8d2c2, 0, 0, 0));
      const pane = makeMesh(geo.box(1.7, 1.5, 0.04), glass(0.34, 0xbcd8e6), 0, 1.2, 0.1);
      g.add(pane);
      const warmMat = emissive(0xffd79a, 0.35);
      warmMat.depthWrite = false;
      const warm = makeMesh(geo.box(1.6, 1.4, 0.02), warmMat, 0, 1.2, 0.02);
      g.add(warm);
      for (const cx of [-0.5, 0.5]) {
        g.add(L.box(0.05, 1.5, 0.06, 0x8a949b, cx, 1.2, 0.13));
      }
      g.add(L.box(1.8, 0.05, 0.06, 0x8a949b, 0, 1.2, 0.13));
      for (const tx of [-0.6, 0.3]) {
        g.add(L.box(0.3, 0.06, 0.26, 0x8a6a48, tx, 0.8, -0.02));
        g.add(L.box(0.06, 0.4, 0.06, 0x6f757a, tx, 0.55, -0.02));
      }
      put(root, ctx, 'diningWindow', g);
    }

    // ---- 高速路牌与出口指示牌 ----
    {
      const g = L.group('road-sign');
      for (const sx of [-0.9, 0.9]) g.add(L.pole(0.06, 2.9, 0x8a9296, sx, 0, 0));
      g.add(L.box(2.0, 0.08, 0.08, 0x8a9296, 0, 2.9, 0));
      const board = makeMesh(geo.box(1.7, 0.9, 0.08),
        L.mat(0x3f7a5a, textures.sign('EXIT\n出口 →')), 0, 2.25, 0.06);
      g.add(board);
      g.add(L.sign('服务区\n500m', 0.6, 0.44, 0x6d7478, 1.5));
      put(root, ctx, 'roadSign', g);
    }

    // ---- 行道树（实例化树冠，叶片轻摆）----
    {
      const g = L.group('street-trees');
      const spots = scatter(4, -1.3, 1.3, -0.3, 0.3, 17, 0);
      const trunks: InstanceTransform[] = [];
      const crowns: InstanceTransform[] = [];
      const crowns2: InstanceTransform[] = [];
      for (const s of spots) {
        const k = s.scale ?? 1;
        const h = 3.2 * k;
        const th = h * 0.62;
        trunks.push({ x: s.x, y: th / 2, z: s.z, scaleX: k, scaleY: th, scaleZ: k });
        crowns.push({ x: s.x, y: h * 0.86, z: s.z, scale: h * 0.26, rotY: s.rotY ?? 0 });
        crowns2.push({ x: s.x + h * 0.14, y: h * 0.91, z: s.z + h * 0.08, scale: h * 0.19 });
      }
      g.add(instanced(geo.cyl(0.11, 0.15, 1, 8), L.mat(0x7a6347), trunks, 'street-trunks'));
      const c1 = instanced(geo.sphere(1, 10), L.mat(0x6d9b5e), crowns, 'street-crowns-a');
      const c2 = instanced(geo.sphere(1, 10), L.mat(0x84ae6c), crowns2, 'street-crowns-b');
      g.add(c1, c2);
      m.treeSways.push({ obj: c1, base: 0, phase: 0.4 });
      m.treeSways.push({ obj: c2, base: 0, phase: 1.7 });
      put(root, ctx, 'streetTrees', g);
    }

    // ---- 车位划线（贴地层）----
    {
      const g = L.group('parking-lines');
      g.add(L.plane(3.0, 1.4, 0x5b636d, 0.014, textures.parkingLines()));
      put(root, ctx, 'parkingLines', g);
    }

    // ---- 公路护栏 ----
    {
      const g = L.group('guardrail');
      for (let i = 0; i < 5; i++) g.add(L.pole(0.05, 0.85, 0x9aa2a6, -0.9 + i * 0.45, 0, 0));
      for (const y of [0.42, 0.7]) g.add(L.box(2.0, 0.1, 0.06, 0xb9c0c4, 0, y, 0));
      put(root, ctx, 'guardrail', g);
    }

    // ---- 步道灯杆 ----
    put(root, ctx, 'lampPost', L.lamp(3.4, 0x6d7478, 0xffe1a8, 'campLamp'));

    // ---- 服务区指示灯箱 ----
    {
      const g = L.group('sign-board');
      g.add(L.pole(0.05, 1.5, 0x8a9296, 0, 0, 0));
      g.add(L.box(0.9, 1.0, 0.12, 0x39434a, 0, 1.8, 0));
      const face = makeMesh(geo.box(0.8, 0.9, 0.02),
        L.mat(0xfff4d8, textures.sign('P\n服务区')), 0, 1.8, 0.07);
      g.add(face);
      const halo = glowSprite(0xffd894, 1.1, 0);
      halo.position.set(0, 1.8, 0.16);
      g.add(halo);
      const hm = halo.material as THREE.SpriteMaterial;
      ctx.decor.bind('signLight', (v) => { hm.opacity = v * 0.7; });
      put(root, ctx, 'signBoard', g);
    }

    // ---- 公路主线（贴地路面）+ 车流灯光流动（独立特效）----
    {
      const g = L.group('highway');
      g.add(L.plane(15.2, 1.0, 0x5b636d, 0.02, textures.highway()));
      for (const sz of [-1, 1]) g.add(L.box(15.2, 0.04, 0.05, 0xd8d2b8, 0, 0.03, sz * 0.46));
      put(root, ctx, 'highway', g);

      const hp = ctx.layout.byId('highway');
      const hx = hp?.x ?? 0, hz = hp?.z ?? 8.5, half = (hp?.w ?? 15) * 0.46;
      const span = half * 2;
      m.trafficHx = hx;
      m.trafficHalf = half;
      for (let i = 0; i < 26; i++) {
        const white = i % 2 === 0;
        const mat = new THREE.MeshBasicMaterial({
          color: white ? 0xfff3d0 : 0xff6a5a, transparent: true, opacity: 0,
          side: THREE.DoubleSide, depthWrite: false, blending: THREE.AdditiveBlending,
        });
        const light = makeMesh(geo.plane(0.26, 0.055), mat,
          hx - half + (i / 26) * span, 0.08, hz + (white ? 0.2 : -0.2));
        light.rotation.x = -Math.PI / 2;
        fx(light);
        root.add(light);
        m.traffic.push({ mesh: light, mat, baseX: hx - half, z: hz, speed: white ? 1.5 : -1.2, phase: i * 0.37 });
      }
      ctx.decor.bind('trafficLight', (v) => { m.trafficLevel = v; });
      ctx.decor.bind('dustMote', (v) => { m.dustLevel = v; });
    }

    // ---- 路侧远景（贴地层 + 矮护栏剪影）----
    {
      const g = L.group('roadside');
      g.add(L.plane(15.5, 1.0, 0x8a8375, 0.014, textures.gravel()));
      const posts = instanced(geo.box(0.06, 0.22, 0.06), L.mat(0xa8aca4),
        Array.from({ length: 16 }, (_, i) => ({ x: -7.2 + i * 0.96, y: 0.11, z: 0.3 })), 'roadside-posts');
      g.add(posts);
      put(root, ctx, 'roadside', g);
    }

    // ---- 场景专属时间表现 ----
    ctx.decor.registerSpawn('eveningTraffic', (show) => { m.eveningTraffic = show ? 1 : 0; });

    motion = m;
    return root;
  },

  onTimeChange(next: TimeId, _prev: TimeId, ctx: SceneContext): void {
    if (next === 'dawn') {
      ctx.decor.spawn('dawnStore');        // 清晨刚开灯的便利店 + 送货小车
      ctx.decor.despawn('eveningTraffic');
    } else if (next === 'dusk' || next === 'night') {
      ctx.decor.despawn('dawnStore');
      ctx.decor.spawn('eveningTraffic');   // 黄昏招牌初亮、车流渐密；夜间全灯点亮
    } else {
      ctx.decor.despawn('dawnStore');
      ctx.decor.despawn('eveningTraffic');
    }
  },

  onWeatherChange(next: WeatherId, _ctx: SceneContext): void {
    if (!motion) return;
    motion.weatherWet = next === 'rain' ? 1 : 0;
    motion.weatherFog = next === 'fog' ? 1 : 0;
  },

  update(_dt: number, elapsed: number, env: EnvSnapshot): void {
    if (!motion) return;
    const m = motion;
    const wind = env.wind.strength;

    // 公路主线车流灯光流动（雨天湿地反光更亮，雾天略缓）
    const hx = m.trafficHx, half = m.trafficHalf, span = half * 2;
    const flow = 1 - m.weatherFog * 0.35;
    for (const t of m.traffic) {
      const p = (((elapsed * t.speed * 0.1 * flow + t.phase) % 1) + 1) % 1;
      t.mesh.position.x = hx - half + p * span;
      const bright = m.trafficLevel * 0.7 + m.eveningTraffic * 0.3 + m.dawnStore * 0.1;
      t.mat.opacity = bright * (0.6 + 0.4 * Math.sin(elapsed * 3 + t.phase)) * (1 + m.weatherWet * 0.45);
    }

    // 便利店招牌灯箱循环微闪（清晨刚开灯时更亮）
    m.signGlowMat.opacity = (m.signLevel * 0.7 + m.dawnStore * 0.3)
      * (0.72 + 0.28 * Math.sin(elapsed * 2.1));

    // 售货机灯带常亮（轻微呼吸）
    m.vendingStripMat.opacity = m.vendingLevel * (0.86 + 0.14 * Math.sin(elapsed * 1.6));

    // 行道树叶片轻摆
    for (const s of m.treeSways) {
      s.obj.rotation.z = s.base + Math.sin(elapsed * 0.8 + s.phase) * 0.022 * (0.5 + wind * 0.5);
    }

    // 送货小车轻微停驻晃动
    if (m.deliveryCart.visible) {
      m.deliveryCart.rotation.y = Math.sin(elapsed * 0.6) * 0.03;
    }
  },

  dispose(): void { motion = null; },
};

export default highwaySA;
