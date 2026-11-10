import * as THREE from 'three';
import type { SceneModule, SceneContext } from '../../registry/types';
import type { BasePalette } from '../../core/BasePlate';
import type { EnvSnapshot, TimeId, WeatherId } from '../../app/State';
import { textures } from '../../core/TextureFactory';
import { geo, makeMesh } from '../../core/GeoFactory';
import { emissive, glowSprite } from '../../core/ToonMaterialFactory';
import { cloth } from '../../common/Cloth';
import { instanced, scatter, type InstanceTransform } from '../../common/Instancing';

/** 末日避难所营地（提示词 2.3）：锈红 × 沙黄 × 混凝土灰的干净治愈系废土据点 */
const palette: BasePalette = {
  key: 'wasteland',
  top: 0xa89b82,
  topTexture: 'gravel',
  side: 0x8a7d68,
  strata: 0x6b6052,
  rim: 0x9c8b6d,
  ink: 0x3b332e,
};

interface Particle { sprite: THREE.Sprite; mat: THREE.SpriteMaterial; x: number; z: number; phase: number }
interface Flame { mesh: THREE.Mesh; mat: THREE.MeshBasicMaterial; phase: number }
interface Mote { mesh: THREE.Mesh; x: number; y: number; z: number; phase: number }

interface Motion {
  searchPivot: THREE.Group;
  searchBeamMat: THREE.MeshBasicMaterial;
  warnPivot: THREE.Group;
  warnMat: THREE.SpriteMaterial;
  radar: THREE.Group;
  steam: Particle[];
  sparks: Particle[];
  flames: Flame[];
  motes: Mote[];
  searchLevel: number;
  warnLevel: number;
  steamLevel: number;
  smokeLevel: number;
  emberLevel: number;
  fireLevel: number;
  dustLevel: number;
  patrolBoost: number;
  alarmBoost: number;
  weatherFog: number;
  weatherWet: number;
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

const wasteland: SceneModule = {
  id: 'wasteland',
  label: '末日避难所营地',
  icon: 'wasteland',
  palette,

  build(ctx: SceneContext): THREE.Group {
    const L = ctx.lib;
    const root = new THREE.Group();
    root.name = 'wasteland-scene';

    const beamMat = new THREE.MeshBasicMaterial({
      color: 0xfff0c0, transparent: true, opacity: 0, side: THREE.DoubleSide, depthWrite: false,
    });
    const warnSprite = glowSprite(0xff5a48, 0.4, 0);
    const warnMat = warnSprite.material as THREE.SpriteMaterial;

    const m: Motion = {
      searchPivot: L.group('searchlight-pivot'),
      searchBeamMat: beamMat,
      warnPivot: L.group('warning-pivot'),
      warnMat,
      radar: L.group('radar-prop'),
      steam: [], sparks: [], flames: [], motes: [],
      searchLevel: 0, warnLevel: 0, steamLevel: 0, smokeLevel: 0,
      emberLevel: 0, fireLevel: 0, dustLevel: 0,
      patrolBoost: 0, alarmBoost: 0, weatherFog: 0, weatherWet: 0,
    };

    // ---- 混凝土掩体与厚重防爆门 ----
    {
      const g = L.group('bunker-prop');
      g.add(L.bunker(2.4, 2.0, 1.8));
      // 防爆门舵轮 + 辐条 + 中心轴
      const wheel = makeMesh(geo.torus(0.24, 0.045, 12), L.mat(0x4a5155), 0, 1.0, 0.98);
      g.add(wheel);
      for (let i = 0; i < 4; i++) {
        const spoke = L.box(0.44, 0.04, 0.04, 0x5c6468, 0, 1.0, 0.99);
        spoke.rotation.z = (i / 4) * Math.PI;
        g.add(spoke);
      }
      g.add(L.cyl(0.07, 0.07, 0.08, 0x8a9296, 0, 1.0, 1.02, 10));
      // 门两侧加固沙袋与通气管
      for (const sx of [-0.75, 0.75]) {
        for (let i = 0; i < 3; i++) {
          const bag = L.rounded(0.34, 0.14, 0.22, 0xb9a37c, sx, i * 0.13, 0.9);
          g.add(bag);
        }
      }
      g.add(L.cyl(0.06, 0.06, 0.6, 0x7c8489, 0.9, 2.0, -0.6, 8));
      g.add(L.cyl(0.09, 0.09, 0.08, 0x5c6468, 0.9, 2.6, -0.6, 8));
      put(root, ctx, 'bunker', g);
    }

    // ---- 沙袋工事（错缝堆叠）----
    {
      const g = L.group('sandbags');
      const bags: InstanceTransform[] = [];
      for (let row = 0; row < 3; row++) {
        for (let i = 0; i < 5 - row; i++) {
          bags.push({ x: -0.5 + i * 0.26 + row * 0.13, y: 0.075 + row * 0.14, z: (row % 2) * 0.04, rotY: (i % 2) * 0.12 });
        }
      }
      g.add(instanced(geo.rounded(0.3, 0.15, 0.24, 0.05), L.mat(0xbda780), bags, 'sandbag-stack'));
      put(root, ctx, 'sandbags', g);
    }

    // ---- 油桶改造烧烤架 + 火堆 ----
    {
      const g = L.group('barrel-grill-prop');
      g.add(L.barrelGrill());
      for (let i = 0; i < 3; i++) {
        const fmat = emissive(i === 0 ? 0xffce6a : 0xff7f3a, 0.92);
        const flame = makeMesh(geo.cone(0.12 - i * 0.02, 0.34 - i * 0.06, 6), fmat, (i - 1) * 0.06, 0.5, 0);
        flame.userData.dynamic = true;
        flame.userData.noOutline = true;
        g.add(flame);
        m.flames.push({ mesh: flame, mat: fmat, phase: i * 1.5 });
      }
      const coal = glowSprite(0xff9248, 0.55, 0);
      coal.position.set(0, 0.66, 0);
      g.add(coal);
      put(root, ctx, 'barrelGrill', g);

      // 火堆火星（独立特效，按 barrelGrill 定位）
      const bp = ctx.layout.byId('barrelGrill');
      const bx = bp?.x ?? 0, bz = bp?.z ?? 0;
      for (let i = 0; i < 6; i++) {
        const sp = glowSprite(0xffab54, 0.13, 0);
        const smat = sp.material as THREE.SpriteMaterial;
        fx(sp);
        sp.position.set(bx + (i - 3) * 0.05, 0.6, bz);
        root.add(sp);
        m.sparks.push({ sprite: sp, mat: smat, x: sp.position.x, z: bz, phase: i * 0.61 });
      }
      ctx.decor.bind('fire', (v) => { m.fireLevel = v; });
      ctx.decor.bind('ember', (v) => { m.emberLevel = v; });
      ctx.decor.bind('smoke', (v) => { m.smokeLevel = v; });
    }

    // ---- 晾衣绳与工装（竖直布料，全局风力驱动）----
    {
      const g = L.group('clothesline');
      for (const sx of [-0.82, 0.82]) {
        g.add(L.pole(0.04, 1.7, 0x8a8f92, sx, 0, 0));
        g.add(L.box(0.12, 0.06, 0.12, 0x6d7478, sx, 0, 0));
      }
      const line = new THREE.CatmullRomCurve3([
        new THREE.Vector3(-0.82, 1.6, 0), new THREE.Vector3(0, 1.48, 0), new THREE.Vector3(0.82, 1.6, 0),
      ]);
      g.add(new THREE.Mesh(new THREE.TubeGeometry(line, 16, 0.012, 4, false), L.mat(0xb9bcae)));
      const cloths: [number, number, number][] = [[-0.45, 0.42, 0x6b7f86], [0.02, 0.5, 0x9a8663], [0.48, 0.38, 0x5f6f61]];
      for (const [cx, cw, col] of cloths) {
        const shirt = cloth(cw, 0.56, col, { amplitude: 0.1, speed: 1.6, vertical: true, key: 'workwear' });
        shirt.position.set(cx, 1.2, 0);
        g.add(shirt);
      }
      put(root, ctx, 'clothesline', g);
    }

    // ---- 净水装置（支架 + 过滤罐 + 管路，干净有序）----
    {
      const g = L.group('water-purifier');
      for (const sx of [-0.3, 0.3]) g.add(L.box(0.06, 0.9, 0.06, 0x7c8489, sx, 0, 0));
      g.add(L.box(0.78, 0.06, 0.5, 0x8a9296, 0, 0.9, 0));
      g.add(L.cyl(0.2, 0.2, 0.5, 0xb9c4c2, -0.16, 0.96, 0, 12));
      for (const fx2 of [-0.16, 0.16]) g.add(L.cyl(0.07, 0.07, 0.36, 0x8fb8ae, fx2, 0.96, 0.3, 10));
      const pipe = new THREE.CatmullRomCurve3([
        new THREE.Vector3(-0.16, 1.46, 0), new THREE.Vector3(-0.16, 1.6, 0),
        new THREE.Vector3(0.16, 1.6, 0), new THREE.Vector3(0.16, 1.32, 0),
      ]);
      g.add(new THREE.Mesh(new THREE.TubeGeometry(pipe, 16, 0.022, 5, false), L.mat(0x9aa2a6)));
      g.add(L.cyl(0.03, 0.03, 0.14, 0xb9c4c2, 0.16, 1.2, 0.3, 8));
      g.add(L.cyl(0.12, 0.12, 0.28, 0x9a7a52, 0.16, 0.0, 0.3, 10));
      put(root, ctx, 'waterPurifier', g);
    }

    // ---- 冒蒸汽的发电机 ----
    {
      const g = L.group('generator');
      g.add(L.box(0.9, 0.62, 0.56, 0x8a8f7e, 0, 0.08, 0));
      g.add(L.box(0.94, 0.06, 0.6, 0x6d7466, 0, 0.7, 0));
      const fins = instanced(geo.box(0.03, 0.4, 0.5), L.mat(0x5f6760),
        Array.from({ length: 9 }, (_, i) => ({ x: -0.38 + i * 0.095, y: 0.36, z: 0 })), 'gen-fins');
      g.add(fins);
      g.add(L.cyl(0.05, 0.05, 0.42, 0x7c8489, 0.3, 0.7, -0.16, 8));
      g.add(L.cyl(0.075, 0.075, 0.06, 0x5f6760, 0.3, 1.12, -0.16, 8));
      const led = makeMesh(geo.sphere(0.04), emissive(0x8fd6a0), -0.3, 0.55, 0.29);
      g.add(led);
      g.add(L.box(0.24, 0.2, 0.02, 0x39434a, 0.0, 0.5, 0.29));
      put(root, ctx, 'generator', g);

      // 蒸汽（独立特效，按 generator 定位，排气管口上升）
      const gp = ctx.layout.byId('generator');
      const gx = (gp?.x ?? 0) + 0.3, gz = (gp?.z ?? 0) - 0.16;
      for (let i = 0; i < 6; i++) {
        const sp = glowSprite(0xe4ece6, 0.22, 0);
        const smat = sp.material as THREE.SpriteMaterial;
        fx(sp);
        sp.position.set(gx, 1.15, gz);
        root.add(sp);
        m.steam.push({ sprite: sp, mat: smat, x: gx, z: gz, phase: i * 0.55 });
      }
      ctx.decor.bind('steam', (v) => { m.steamLevel = v; });
    }

    // ---- 太阳能板阵列 ----
    {
      const g = L.group('solar-panels');
      for (let i = 0; i < 3; i++) {
        const p = L.panel(1.1, 0.78);
        p.position.x = -0.85 + i * 0.85;
        g.add(p);
      }
      g.add(L.box(2.7, 0.05, 0.08, 0x6d7478, 0, 0.06, 0));
      put(root, ctx, 'solarPanels', g);
    }

    // ---- 油桶（带手写警示标）----
    {
      const g = L.group('oil-drums');
      const spots: [number, number, number][] = [[-0.3, 0, -0.1], [0.28, 0, 0.05], [0.0, 0, 0.32]];
      for (const [dx, dy, dz] of spots) {
        const d = L.drum(0.22, 0.68, 0xa06a44);
        d.position.set(dx, dy, dz);
        g.add(d);
      }
      const tag = makeMesh(geo.plane(0.3, 0.2), L.mat(0xf0d98a, textures.sign('!')), -0.3, 0.42, 0.13);
      g.add(tag);
      put(root, ctx, 'oilDrums', g);
    }

    // ---- 手写警示牌 ----
    {
      const g = L.group('warning-sign');
      g.add(L.sign('止步\n小心', 0.72, 0.56, 0x8a6b48, 1.15));
      const tri = L.cone(0.28, 0.32, 0xe8c25c, 0.0, 0.95, 0.05);
      g.add(tri);
      g.add(L.box(0.05, 0.16, 0.02, 0x5a4630, 0.0, 0.98, 0.2));
      g.add(L.sphere(0.03, 0x5a4630, 0.0, 0.88, 0.2));
      put(root, ctx, 'warningSign', g);
    }

    // ---- 铁架瞭望塔与探照灯 ----
    {
      const g = L.group('watchtower-prop');
      g.add(L.tower(4.2));
      const ladder = L.ladder(2.6);
      ladder.rotation.x = -0.18;
      ladder.position.set(0, 0, 0.62);
      g.add(ladder);
      const rail = L.fence(1.2, 0.5, 0x7c8489, 'metal');
      rail.position.y = 4.2;
      g.add(rail);
      put(root, ctx, 'watchtower', g);

      // 探照灯光束（独立特效，按 watchtower 定位）
      const wp = ctx.layout.byId('watchtower');
      const wx = wp?.x ?? 0, wz = wp?.z ?? 0;
      const beam = makeMesh(geo.cone(1.4, 6.0, 14), beamMat, 2.0, -2.2, 0);
      beam.rotation.z = -0.55;
      beam.userData.noBounds = true;
      beam.userData.noOutline = true;
      beam.userData.dynamic = true;
      m.searchPivot.add(beam);
      fx(m.searchPivot);
      m.searchPivot.position.set(wx, 4.3, wz);
      root.add(m.searchPivot);

      // 旋转警示红灯（独立特效，绕塔顶枢轴转）
      fx(warnSprite);
      warnSprite.position.set(0.62, 0, 0);
      m.warnPivot.add(warnSprite);
      fx(m.warnPivot);
      m.warnPivot.position.set(wx, 4.7, wz);
      root.add(m.warnPivot);

      // 光柱微尘（独立特效，在光束附近缓慢飘浮）
      for (let i = 0; i < 10; i++) {
        const mote = makeMesh(geo.plane(0.05, 0.05),
          new THREE.MeshBasicMaterial({ color: 0xffedc0, transparent: true, opacity: 0, side: THREE.DoubleSide, depthWrite: false }),
          wx + 1.2 + (i % 3) * 0.3, 0.6 + (i % 5) * 0.5, wz + Math.sin(i) * 0.5);
        fx(mote);
        root.add(mote);
        m.motes.push({ mesh: mote, x: mote.position.x, y: mote.position.y, z: mote.position.z, phase: i * 0.8 });
      }
      ctx.decor.bind('searchLight', (v) => { m.searchLevel = v; });
      ctx.decor.bind('warningLight', (v) => { m.warnLevel = v; });
      ctx.decor.bind('dustMote', (v) => { m.dustLevel = v; });
    }

    // ---- 旋转雷达天线（整体绕 y 慢转，LED 由构件内部绑定 warningLight）----
    {
      m.radar.add(L.radar());
      put(root, ctx, 'radar', m.radar);
    }

    // ---- 锈蚀集装箱 ----
    {
      const g = L.group('containers');
      const c1 = L.container(2.0, 1.5, 1.1, 0x9a6b4f);
      c1.position.set(-0.55, 0, 0);
      const c2 = L.container(1.8, 1.4, 1.1, 0x7c8a83);
      c2.position.set(0.75, 1.5, -0.05);
      g.add(c1, c2);
      for (const [cx, cy] of [[-0.55, 0.75], [0.75, 2.2]]) {
        g.add(L.box(0.34, 0.2, 0.02, 0xe8d9a8, cx, cy, 0.57));
      }
      put(root, ctx, 'containers', g);
    }

    // ---- 废旧汽车残骸（干净锈色，不写实血腥）----
    {
      const g = L.group('wreck');
      g.add(L.box(1.7, 0.42, 0.86, 0x9a7050, 0, 0.32, 0, textures.rust()));
      g.add(L.box(0.86, 0.36, 0.78, 0x8a6248, -0.1, 0.72, 0, textures.rust()));
      for (const sz of [-1, 1]) {
        g.add(L.box(0.7, 0.22, 0.02, 0x46545c, -0.1, 0.78, sz * 0.4));
      }
      for (const sx of [-0.56, 0.56]) for (const sz of [-0.5, 0.5]) {
        // 残骸车轮：wheel() 法线沿 Z，竖立且正对侧面
        const t = L.wheel(0.2, 0.12);
        t.position.set(sx, 0, sz);
        g.add(t);
      }
      g.add(L.box(0.5, 0.08, 0.7, 0x6d5a44, 0.9, 0.4, 0));
      put(root, ctx, 'wreck', g);
    }

    // ---- 轮胎堆（平放叠高，层距大于轮胎厚度，避免互相穿插）----
    {
      const g = L.group('tires');
      const stack: [number, number, number][] = [[-0.22, 0, 0], [0.22, 0, 0], [0, 0.38, 0], [0, 0.76, 0]];
      for (const [tx, ty, tz] of stack) {
        // tire() 本身即平放（法线 Y）；不可再绕 X 转 90°，否则会变竖立并按 ty 互相穿插
        const t = L.tire(0.28, 0.16);
        t.position.set(tx, ty, tz);
        g.add(t);
      }
      put(root, ctx, 'tires', g);
    }

    // ---- 波纹铁皮围墙 ----
    {
      const g = L.group('corrugated-fence');
      for (let i = 0; i < 6; i++) {
        const h = 1.7 + (i % 3) * 0.22;
        g.add(L.box(0.62, h, 0.06, 0x8c9298, -1.55 + i * 0.62, 0, 0, textures.corrugated()));
        g.add(L.pole(0.05, h + 0.08, 0x6d7478, -1.87 + i * 0.62, 0, 0.04));
      }
      g.add(L.box(3.8, 0.06, 0.08, 0x7c8489, 0, 1.95, 0));
      put(root, ctx, 'corrugatedFence', g);
    }

    // ---- 缠绕铁丝网 ----
    {
      const g = L.group('wire-fence');
      for (let i = 0; i < 5; i++) g.add(L.pole(0.035, 1.5, 0x8a9296, -1.4 + i * 0.7, 0, 0));
      for (let r = 0; r < 5; r++) {
        g.add(L.box(2.9, 0.014, 0.014, 0xa8b0b2, 0, 0.28 + r * 0.28, 0));
      }
      for (let i = 0; i < 8; i++) {
        const diag = L.box(0.02, 0.42, 0.02, 0x9aa2a4, -1.3 + i * 0.36, 1.5, 0);
        diag.rotation.z = (i % 2 ? 1 : -1) * 0.7;
        g.add(diag);
      }
      put(root, ctx, 'wireFence', g);
    }

    // ---- 左侧油桶堆 ----
    {
      const g = L.group('barrel-stack');
      const stack: [number, number, number][] = [[-0.24, 0, -0.1], [0.24, 0, -0.1], [0, 0, 0.24], [0, 0.72, -0.1]];
      for (const [dx, dy, dz] of stack) {
        const d = L.drum(0.24, 0.72, 0x8a6248);
        d.position.set(dx, dy, dz);
        g.add(d);
      }
      put(root, ctx, 'barrelStack', g);
    }

    // ---- 补给箱 ----
    {
      const g = L.group('supply-crate');
      const c1 = L.crate(0.7, 0.5, 0.6);
      c1.position.set(-0.2, 0, 0);
      const c2 = L.crate(0.56, 0.42, 0.5, 0x6f7a63);
      c2.position.set(0.3, 0.5, 0.05);
      g.add(c1, c2);
      g.add(L.box(0.3, 0.06, 0.02, 0xe8d9a8, -0.2, 0.28, 0.31));
      put(root, ctx, 'supplyCrate', g);
    }

    // ---- 断裂高架桥与荒废城市剪影 ----
    {
      const g = L.group('ruined-skyline');
      const skyline = [1.6, 2.4, 1.9, 2.8, 1.5, 2.2, 1.7, 2.6];
      for (let i = 0; i < skyline.length; i++) {
        const b = L.box(0.7, skyline[i], 0.5, i % 2 ? 0x8b9299 : 0x7c848c, -6.3 + i * 1.8, 0, -0.2);
        g.add(b);
        for (let w = 0; w < 3; w++) {
          g.add(L.box(0.1, 0.14, 0.02, 0xb9c2c4, -6.3 + i * 1.8 - 0.2 + w * 0.2, 0.5 + w * 0.5, 0.06));
        }
      }
      // 断裂高架桥：两段桥面 + 桥墩 + 中间断口
      for (const [bx, bw] of [[-2.5, 2.4], [2.6, 2.2]] as [number, number][]) {
        g.add(L.box(bw, 0.18, 0.6, 0x9aa09c, bx, 2.3, 0.5));
        g.add(L.box(bw, 0.05, 0.08, 0x7d8580, bx, 2.44, 0.78));
      }
      for (const px of [-3.2, -1.8, 2.0, 3.2]) {
        g.add(L.cyl(0.12, 0.16, 2.2, 0x8f9590, px, 0, 0.5, 8));
      }
      put(root, ctx, 'ruinedSkyline', g);
    }

    // ---- 废土地表（贴地层 + 散落碎石）----
    {
      const g = L.group('waste-ground');
      g.add(L.plane(15.5, 1.0, 0xa8946f, 0.014, textures.sand()));
      const pebbles = instanced(geo.cone(0.05, 0.12, 5), L.mat(0x9a8a70),
        scatter(24, -7.4, 7.4, -0.4, 0.4, 61, 0), 'pebbles');
      g.add(pebbles);
      put(root, ctx, 'wasteGround', g);
    }

    // ---- 场景专属时间表现 ----
    ctx.decor.registerSpawn('dawnPatrol', (show) => { m.patrolBoost = show ? 1 : 0; });
    ctx.decor.registerSpawn('eveningAlarm', (show) => { m.alarmBoost = show ? 1 : 0; });

    motion = m;
    return root;
  },

  onTimeChange(next: TimeId, _prev: TimeId, ctx: SceneContext): void {
    if (next === 'dawn') {
      ctx.decor.spawn('dawnPatrol');       // 清晨刚换岗：探照灯扫动加快
      ctx.decor.despawn('eveningAlarm');
    } else if (next === 'dusk' || next === 'night') {
      ctx.decor.despawn('dawnPatrol');
      ctx.decor.spawn('eveningAlarm');     // 黄昏 / 夜间：探照灯与警示灯启动
    } else {
      ctx.decor.despawn('dawnPatrol');
      ctx.decor.despawn('eveningAlarm');
    }
  },

  onWeatherChange(next: WeatherId, _ctx: SceneContext): void {
    if (!motion) return;
    motion.weatherFog = next === 'fog' ? 1 : 0;
    motion.weatherWet = next === 'rain' ? 1 : 0;
  },

  update(dt: number, elapsed: number, env: EnvSnapshot): void {
    if (!motion) return;
    const m = motion;
    const wind = env.wind.strength;

    // 探照灯光束缓慢扫动（清晨换岗更快，黄昏启动增强）
    m.searchPivot.rotation.y += dt * (0.16 + m.patrolBoost * 0.5 + m.alarmBoost * 0.12);
    m.searchBeamMat.opacity = (m.searchLevel * 0.18 + m.alarmBoost * 0.05) * (0.72 + 0.28 * Math.sin(elapsed * 0.8));
    m.searchPivot.visible = m.searchBeamMat.opacity > 0.005;

    // 警示红灯旋转 + 闪烁
    m.warnPivot.rotation.y += dt * 2.0;
    m.warnMat.opacity = m.warnLevel * (0.45 + 0.55 * Math.abs(Math.sin(elapsed * 4.5)));

    // 雷达天线慢转
    m.radar.rotation.y += dt * 0.35;

    // 发电机蒸汽：上升 + 扩散，白天 / 雾天更浓
    const steamAmt = m.steamLevel * 0.5 + m.weatherFog * 0.3 + m.smokeLevel * 0.1;
    for (const s of m.steam) {
      const t = (elapsed * 0.4 + s.phase) % 1;
      s.sprite.position.y = 1.15 + t * 1.2;
      s.sprite.position.x = s.x + Math.sin(elapsed * 0.8 + s.phase) * (0.1 + t * 0.3) + wind * 0.1 * t;
      s.mat.opacity = steamAmt * (1 - t) * 0.55;
      (s.sprite.scale as THREE.Vector3).setScalar(0.18 + t * 0.5);
    }

    // 火堆火星上升
    for (const s of m.sparks) {
      const t = (elapsed * 0.6 + s.phase) % 1;
      s.sprite.position.y = 0.6 + t * 1.0;
      s.sprite.position.x = s.x + Math.sin(elapsed * 2 + s.phase) * 0.07;
      s.mat.opacity = m.emberLevel * (1 - t) * 0.9 * (1 - m.weatherWet * 0.5);
      (s.sprite.scale as THREE.Vector3).setScalar(0.09 + t * 0.05);
    }

    // 火焰跳动
    for (const f of m.flames) {
      f.mesh.scale.y = 0.8 + Math.sin(elapsed * 6 + f.phase) * 0.2;
      f.mat.opacity = (m.fireLevel * 0.7 + 0.15) * (0.7 + 0.3 * Math.sin(elapsed * 8 + f.phase));
      f.mesh.rotation.z = Math.sin(elapsed * 3 + f.phase) * 0.05;
    }

    // 光柱微尘缓慢飘浮
    const dustAmt = m.dustLevel * 0.5 + m.weatherFog * 0.35;
    for (const d of m.motes) {
      d.mesh.position.y = d.y + Math.sin(elapsed * 0.5 + d.phase) * 0.35;
      d.mesh.position.x = d.x + Math.sin(elapsed * 0.3 + d.phase) * 0.12;
      (d.mesh.material as THREE.MeshBasicMaterial).opacity = dustAmt * (0.4 + 0.4 * Math.sin(elapsed * 1.2 + d.phase));
    }
  },

  dispose(): void { motion = null; },
};

export default wasteland;
