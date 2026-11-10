import * as THREE from 'three';
import type { SceneModule, SceneContext } from '../../registry/types';
import type { BasePalette } from '../../core/BasePlate';
import type { EnvSnapshot, TimeId, WeatherId } from '../../app/State';
import { textures } from '../../core/TextureFactory';
import { geo, makeMesh } from '../../core/GeoFactory';
import { emissive, glowSprite } from '../../core/ToonMaterialFactory';
import { cloth } from '../../common/Cloth';
import { instanced, scatter } from '../../common/Instancing';

/** 海崖营地（提示词 2.1）：日落金橙 × 海面蓝紫、临崖观海、夏末旅行一幕 */
const palette: BasePalette = {
  key: 'seaCliff',
  top: 0x7fa869,
  topTexture: 'grass',
  side: 0x8d7f68,
  strata: 0x756a58,
  rim: 0xa08c69,
  ink: 0x2b3546,
};

interface Motion {
  waterTex: THREE.CanvasTexture;
  beam: THREE.Mesh;
  beamMat: THREE.MeshBasicMaterial;
  sailboat: THREE.Group;
  bird: THREE.Group;
  birdTimer: number;
  birdActive: boolean;
}

let motion: Motion | null = null;

/** 统一安放：登记占位 → 自动缩放贴合格子 → 底面精确贴地 → 挂到场景根 */
function put(root: THREE.Group, ctx: SceneContext, id: string, obj: THREE.Object3D): void {
  ctx.layout.place(obj, id);
  root.add(obj);
}

const seaCliff: SceneModule = {
  id: 'seaCliff',
  label: '海崖营地',
  icon: 'cliff',
  palette,

  build(ctx: SceneContext): THREE.Group {
    const L = ctx.lib;
    const root = new THREE.Group();
    root.name = 'seaCliff-scene';

    // ---- 营位：遮阳天幕 + 串灯 ----
    {
      const g = L.group('awning-prop');
      g.add(L.awning(3.0, 1.8));
      const lights = L.stringLights(2.9, 9);
      lights.position.y = 0.02;
      g.add(lights);
      put(root, ctx, 'awning', g);
    }

    // ---- 折叠桌 + 早餐餐具（清晨出现）----
    {
      const g = L.group('table-prop');
      g.add(L.table(1.05, 0.64));
      const breakfast = L.group('breakfast-set');
      breakfast.add(L.cyl(0.11, 0.11, 0.035, 0xf5f0e2, -0.22, 0.78, 0));
      breakfast.add(L.cyl(0.075, 0.075, 0.11, 0xd3a46a, 0.14, 0.78, 0.06));
      breakfast.add(L.box(0.22, 0.018, 0.16, 0xc99f6c, 0.0, 0.78, -0.14));
      g.add(breakfast);
      put(root, ctx, 'table', g);
      ctx.decor.bind('breakfastSet', (v) => {
        breakfast.visible = v > 0.04;
        breakfast.scale.setScalar(0.75 + v * 0.25);
      });
    }

    // ---- 折叠椅 ----
    {
      const g = L.group('chairs');
      const a = L.chair(0xa8845d); a.position.set(-0.28, 0, 0.1);
      const b = L.chair(0x9c7a55); b.position.set(0.3, 0, -0.06); b.rotation.y = -0.5;
      g.add(a, b);
      put(root, ctx, 'chairs', g);
    }

    // ---- 烧烤炉 + 炭火 ----
    {
      const g = L.group('grill-prop');
      g.add(L.grill());
      const coal = makeMesh(geo.box(0.44, 0.02, 0.32), emissive(0xff8a4c), 0, 0.605, 0);
      g.add(coal);
      const halo = glowSprite(0xffa15c, 0.7, 0);
      halo.position.set(0, 0.72, 0);
      g.add(halo);
      const cm = coal.material as THREE.MeshBasicMaterial;
      const hm = halo.material as THREE.SpriteMaterial;
      ctx.decor.bind('fire', (v) => {
        cm.opacity = v; cm.transparent = true;
        hm.opacity = v * 0.7;
      });
      put(root, ctx, 'grill', g);
    }

    // ---- 小营地灯 ----
    put(root, ctx, 'campLamp', L.lamp(1.15, 0x4d5b66, 0xffd58a, 'campLamp'));

    // ---- 野餐垫 + 被风轻掀的纸巾 ----
    {
      const g = L.group('picnic');
      g.add(L.plane(1.25, 0.9, 0xd9c49a, 0.02, textures.cloth()));
      const napkin = cloth(0.26, 0.2, 0xf6f1e4, { amplitude: 0.07, speed: 2.4, key: 'napkin' });
      napkin.position.set(0.28, 0.045, 0.16);
      g.add(napkin);
      put(root, ctx, 'picnicMat', g);
    }

    // ---- 防水地垫 ----
    put(root, ctx, 'groundMat', L.plane(1.35, 0.95, 0x6f8a86, 0.018, textures.cloth()));

    // ---- 水电桩与连接管线 ----
    {
      const g = L.group('utility');
      g.add(L.box(0.24, 0.95, 0.22, 0x7f8b8e));
      g.add(L.box(0.3, 0.08, 0.28, 0x556268, 0, 0.95, 0));
      g.add(L.cyl(0.035, 0.035, 0.28, 0xd8c98f, -0.1, 0.7, 0.13, 8));
      const curve = new THREE.CatmullRomCurve3([
        new THREE.Vector3(0.12, 0.16, 0), new THREE.Vector3(0.4, 0.07, 0.2),
        new THREE.Vector3(0.65, 0.06, 0.05), new THREE.Vector3(0.8, 0.04, -0.22),
      ]);
      g.add(new THREE.Mesh(new THREE.TubeGeometry(curve, 18, 0.026, 5, false), L.mat(0x3f4b50)));
      put(root, ctx, 'utilityPost', g);
    }

    // ---- 折叠自行车 ----
    put(root, ctx, 'bicycle', L.bicycle(0x4b8ea8));

    // ---- 木栈道（实例化木板）----
    {
      const g = L.group('boardwalk');
      const boards = instanced(geo.box(0.16, 0.075, 1.0), L.mat(0xb08a5f, textures.wood()),
        Array.from({ length: 9 }, (_, i) => ({ x: -0.85 + i * 0.21, y: 0.04, z: 0 })), 'boards');
      g.add(boards);
      put(root, ctx, 'boardwalk', g);
    }

    // ---- 崖边护栏 ----
    put(root, ctx, 'railing', L.fence(3.6, 1.02, 0xa88a63, 'wood'));

    // ---- 观景长椅 ----
    put(root, ctx, 'bench', L.bench(1.55, 0xa87f56));

    // ---- 路牌 ----
    put(root, ctx, 'signpost', L.sign('海岬\n小海湾', 1.05, 0.66, 0x8a6b48, 1.35));

    // ---- 通往小海湾的石阶 ----
    put(root, ctx, 'stoneSteps', L.stairs(1.2, 1.25, 4, 0x9b9a90));

    // ---- 礁石群 ----
    {
      const g = L.group('reefs');
      const spots = scatter(7, -0.9, 0.9, -0.45, 0.45, 12, 0);
      for (const s of spots) {
        const r = L.rock(0.22 + ((s.scale ?? 1) - 0.7) * 0.35, 0x8d8f88);
        r.position.set(s.x, 0, s.z);
        r.rotation.y = s.rotY ?? 0;
        g.add(r);
      }
      put(root, ctx, 'reefCluster', g);
    }

    // ---- 海草 ----
    {
      const g = L.group('sea-grass');
      const tufts = instanced(geo.cone(0.045, 0.42, 5), L.mat(0x6f9a63),
        scatter(24, -0.8, 0.8, -0.5, 0.5, 19, 0), 'grass-tufts');
      g.add(tufts);
      put(root, ctx, 'seaGrass', g);
    }

    // ---- 崖沿草坡 ----
    {
      const g = L.group('cliff-edge');
      g.add(L.box(2.9, 0.26, 0.9, 0x7d9a68, 0, 0, 0));
      g.add(L.box(2.9, 0.14, 0.16, 0x8b7e63, 0, 0, 0.46));
      const grass = instanced(geo.cone(0.04, 0.3, 5), L.mat(0x8cb173),
        scatter(18, -1.35, 1.35, -0.35, 0.35, 23, 0.24), 'edge-grass');
      g.add(grass);
      put(root, ctx, 'cliffEdge', g);
    }

    // ---- 海岸营地灯 ----
    put(root, ctx, 'coastLight', L.lamp(1.35, 0x586a72, 0xffd9a0, 'campLamp'));

    // ---- 栈道缆桩 ----
    {
      const g = L.group('rope-posts');
      for (const x of [-0.55, 0.55]) g.add(L.pole(0.055, 0.9, 0x9a8a6d, x, 0, 0));
      const rope = new THREE.CatmullRomCurve3([
        new THREE.Vector3(-0.55, 0.78, 0), new THREE.Vector3(0, 0.66, 0), new THREE.Vector3(0.55, 0.78, 0),
      ]);
      g.add(new THREE.Mesh(new THREE.TubeGeometry(rope, 14, 0.014, 4, false), L.mat(0xd8c9a4)));
      put(root, ctx, 'ropePost', g);
    }

    // ---- 防波堤灯塔 + 旋转光束 ----
    {
      const g = L.group('lighthouse-prop');
      g.add(L.lighthouse(2.9));
      put(root, ctx, 'lighthouse', g);

      const beamMat = new THREE.MeshBasicMaterial({
        color: 0xffe9b0, transparent: true, opacity: 0, side: THREE.DoubleSide, depthWrite: false,
      });
      const beam = makeMesh(geo.cone(1.15, 5.0, 12), beamMat, 0, 3.4, 0);
      beam.rotation.z = Math.PI / 2;
      beam.userData.noBounds = true;
      beam.userData.dynamic = true;
      beam.name = 'lighthouse-beam';
      root.add(beam);
      ctx.decor.bind('lighthouse', (v) => {
        beamMat.opacity = v * 0.20;
        beam.visible = v > 0.04;
      });
      motion = { ...(motion ?? ({} as Motion)), beam, beamMat } as Motion;
    }

    // ---- 防波堤 ----
    {
      const g = L.group('breakwater');
      for (let i = 0; i < 6; i++) {
        const b = L.box(0.42, 0.42 + (i % 3) * 0.12, 0.6, 0x9a9b93, -1.1 + i * 0.44, 0, 0);
        g.add(b);
      }
      put(root, ctx, 'breakwater', g);
    }

    // ---- 远处小帆船（清晨刚刚出海）----
    {
      const boat = L.sailboat();
      boat.visible = false;
      put(root, ctx, 'sailboat', boat);
      ctx.decor.registerSpawn('morningBoat', (show) => { boat.visible = show; });
      motion = { ...(motion as Motion), sailboat: boat } as Motion;
    }

    // ---- 海面（贴地水带，纹理滚动形成粼粼波光）----
    {
      const waterTex = textures.water().clone();
      waterTex.needsUpdate = true;
      waterTex.repeat.set(4, 1);
      const waterMat = new THREE.MeshBasicMaterial({
        map: waterTex, transparent: true, opacity: 0.94, side: THREE.DoubleSide,
      });
      const water = makeMesh(geo.plane(17.4, 1.05), waterMat, 0, 0.022, 0);
      water.rotation.x = -Math.PI / 2;
      water.userData.noBounds = true;
      water.userData.dynamic = true;
      // 贴地水带不参与运行时占位（静态数据层仍校验 seaBackdrop 的越界与禁放区）
      water.position.set(0, 0.022, -8.5);
      root.add(water);

      // 前缘也铺一条窄海带，让灯塔 / 防波堤 / 帆船落在水边
      const front = makeMesh(geo.plane(17.4, 0.9), waterMat, 0, 0.02, 8.5);
      front.rotation.x = -Math.PI / 2;
      front.userData.noBounds = true;
      front.userData.dynamic = true;
      root.add(front);

      motion = { ...(motion as Motion), waterTex } as Motion;
    }

    // ---- 偶尔掠过的海鸟 ----
    {
      const bird = L.group('sea-bird');
      for (const s of [-1, 1]) {
        const wing = makeMesh(geo.plane(0.34, 0.1), L.mat(0xf2f2ea), s * 0.17, 0, 0);
        wing.rotation.x = -Math.PI / 2;
        wing.rotation.z = s * 0.25;
        wing.userData.noBounds = true;
        bird.add(wing);
      }
      bird.position.set(-9, 4.6, -5);
      bird.visible = false;
      bird.userData.noBounds = true;
      bird.userData.dynamic = true;
      root.add(bird);
      motion = {
        ...(motion as Motion),
        bird, birdTimer: 6, birdActive: false,
      } as Motion;
    }

    return root;
  },

  onTimeChange(next: TimeId, _prev: TimeId, ctx: SceneContext): void {
    if (next === 'dawn') ctx.decor.spawn('morningBoat');
    else ctx.decor.despawn('morningBoat');
  },

  onWeatherChange(next: WeatherId, _ctx: SceneContext): void {
    if (!motion) return;
    // 雨天水面更暗、波纹滚动更快；其余天气由全局光照与材质状态接管
    motion.waterTex.repeat.set(next === 'rain' ? 6 : 4, 1);
  },

  update(dt: number, elapsed: number, env: EnvSnapshot): void {
    if (!motion) return;
    const m = motion;
    m.waterTex.offset.x += dt * (0.018 + env.wind.strength * 0.012);
    if (m.beam && m.beam.visible) m.beam.rotation.y += dt * 0.22;

    // 海鸟低频掠过（约每 14 秒一次，幅度克制）
    m.birdTimer -= dt;
    if (!m.birdActive && m.birdTimer <= 0) {
      m.birdActive = true;
      m.bird.visible = true;
      m.bird.position.set(-9, 4.4 + Math.sin(elapsed) * 0.4, -5);
      m.birdTimer = 14;
    }
    if (m.birdActive) {
      m.bird.position.x += dt * 2.6;
      m.bird.position.y += Math.sin(elapsed * 3) * dt * 0.12;
      if (m.bird.position.x > 9) { m.birdActive = false; m.bird.visible = false; }
    }
  },
};

export default seaCliff;
