import * as THREE from 'three';
import type { VehicleModule, VehicleContext } from '../../registry/types';
import type { EnvSnapshot, TimeId } from '../../app/State';
import { textures } from '../../core/TextureFactory';
import { geo, makeMesh } from '../../core/GeoFactory';
import { glass, emissive, glowSprite } from '../../core/ToonMaterialFactory';
import { cloth } from '../../common/Cloth';
import { breathe } from '../../common/LightBreath';

/**
 * 越野皮卡 + 车顶帐篷（提示词 3.5，overlanding）。
 * 坐标约定：长轴沿 X，车头朝 -X，露营侧（双排车窗 / 遮阳幕 / 登车梯）朝 +Z 面向默认相机。
 * 两核心特征：车顶折叠帐篷已展开（半开帐帘可见内部）、侧遮阳幕 / 登车梯 / 折叠桌板均已展开；
 * 驾驶舱与后座休憩区透过双排车窗清楚可见。
 * 占位上限（layouts.js overland）：|x|<=3.80、maxZ<=4.35、height<=4.55（登记 4.25）。
 */
interface Motion {
  cabinLight: THREE.PointLight;
  stripMat: THREE.MeshBasicMaterial;
  dashMat: THREE.MeshBasicMaterial;
  centerMat: THREE.MeshBasicMaterial;
  spotLensMat: THREE.MeshBasicMaterial;
  nightLamp: THREE.Sprite;
  spotlight: THREE.Group;
  tentStringLights: THREE.Group;
}

let motion: Motion | null = null;

const overland: VehicleModule = {
  id: 'overland',
  label: '越野皮卡+车顶帐篷',
  icon: 'overland',

  build(ctx: VehicleContext): THREE.Group {
    const L = ctx.lib;
    const root = new THREE.Group();
    root.name = 'vehicle-overland';

    const body = 0x55605a;     // 硬派深橄榄车身
    const trim = 0x2f3639;     // 黑色护杠 / 行李架
    const accent = 0xd98c4a;   // 远征橙点缀
    const wood = 0xb08a5c;
    const dark = 0x2b3033;
    const ink = 0x23282b;

    // ---------- 1. 升高底盘 / 全地形胎（带环状胎纹小节）----------
    root.add(L.box(6.80, 0.22, 1.90, dark, 0, 0.70, 0));                    // 大梁 0.70..0.92
    root.add(L.box(1.10, 0.08, 1.92, trim, -2.90, 0.62, 0));                // 前护板
    root.add(L.box(0.80, 0.16, 0.80, trim, 2.45, 0.54, 0));                 // 后差速器
    for (const x of [-3.42, 3.42]) root.add(L.box(0.14, 0.22, 2.20, trim, x, 0.72, 0)); // 前后保险杠
    for (const x of [-2.75, 2.45]) {
      for (const z of [-1.05, 1.05]) {
        const w = L.wheel(0.46, 0.26); w.position.set(x, 0, z); root.add(w);
        // 全地形胎：胎纹沿轮盘圆周（X-Y 平面）排布，厚度沿 Z 覆盖轮宽，不撑大包围盒
        for (let k = 0; k < 8; k++) {
          const a = (k / 8) * Math.PI * 2;
          const cx = x + 0.46 * 0.90 * Math.cos(a);
          const cy = 0.46 + 0.46 * 0.90 * Math.sin(a);
          root.add(L.box(0.10, 0.10, 0.28, ink, cx, cy - 0.05, z));
        }
      }
    }

    // ---------- 2. 引擎盖（车头 -X，低于驾驶舱）----------
    root.add(L.rounded(1.00, 0.53, 2.10, body, -2.90, 0.92, 0, 0.08));      // x -3.40..-2.40, 顶 1.45
    root.add(L.box(0.04, 0.30, 1.60, trim, -3.43, 1.05, 0));                // 进气格栅
    for (const z of [-0.85, 0.85]) root.add(L.box(0.04, 0.14, 0.24, 0xffe9b8, -3.43, 1.18, z)); // 大灯
    root.add(L.box(0.60, 0.03, 0.50, accent, -2.90, 1.45, 0));              // 引擎盖橙色拉花

    // ---------- 3. 驾驶舱主体：地板 / 下部实板 / 上部窗框 / 圆顶 ----------
    root.add(L.box(2.20, 0.08, 2.10, wood, -1.30, 0.92, 0, textures.wood())); // 地板 0.92..1.00
    root.add(L.box(2.20, 0.50, 0.09, body, -1.30, 1.00, -1.10));            // -Z 下部实板
    root.add(L.box(2.20, 0.50, 0.09, body, -1.30, 1.00, 1.10));             // +Z 下部实板
    root.add(L.box(2.20, 0.78, 0.09, body, -1.30, 1.50, -1.05));            // -Z 上部实墙
    root.add(L.box(2.20, 0.06, 0.09, body, -1.30, 2.28, 1.05));             // +Z 上横楣
    root.add(L.rounded(2.30, 0.20, 2.26, body, -1.30, 2.34, 0, 0.08));      // 车顶 2.34..2.54
    // 舱前壁（-X）：下实板 + 前挡风 + 角柱
    root.add(L.box(0.09, 0.50, 2.10, body, -2.40, 1.00, 0));
    const cabWs = makeMesh(geo.plane(1.80, 0.72), glass(0.22), -2.46, 1.90, 0);
    cabWs.rotation.y = -Math.PI / 2; root.add(cabWs);
    for (const z of [-1.0, 1.0]) root.add(L.box(0.09, 0.78, 0.10, body, -2.40, 1.50, z));
    root.add(L.box(0.09, 0.06, 2.10, body, -2.40, 2.28, 0));
    // 舱后壁（+X，兼货斗前挡板）：带后窗可透视
    root.add(L.box(0.09, 0.50, 2.10, body, -0.20, 1.00, 0));
    const rearWs = makeMesh(geo.plane(1.70, 0.66), glass(0.22), -0.14, 1.92, 0);
    rearWs.rotation.y = Math.PI / 2; root.add(rearWs);
    for (const z of [-1.0, 1.0]) root.add(L.box(0.09, 0.78, 0.10, body, -0.20, 1.50, z));
    root.add(L.box(0.09, 0.06, 2.10, body, -0.20, 2.28, 0));

    // ---------- 4. +Z 双排车窗（前排 / 后排，低反射半透）----------
    for (const x of [-1.85, -0.75]) {
      const win = L.window(0.85, 0.78, trim);
      win.position.set(x, 1.50, 1.12); root.add(win);
    }
    root.add(L.box(0.10, 0.78, 0.10, body, -1.30, 1.50, 1.07));             // B 柱
    for (const x of [-2.36, -0.24]) root.add(L.box(0.09, 0.78, 0.10, body, x, 1.50, 1.07)); // 端柱
    // -Z 侧为上部实墙（与下部实板连成整体），作为内饰的深色背景；
    // 透视完全交给 +Z 双排大窗，避免实墙与窗框互相插入。
    root.add(L.box(0.50, 0.20, 0.02, accent, -1.30, 1.62, -1.00));         // 内壁工具挂板

    // ---------- 5. 货斗（+X）：地板 / 侧板 / 尾门 ----------
    root.add(L.box(3.60, 0.08, 2.10, wood, 1.60, 0.92, 0, textures.wood())); // 货斗地板 0.92..1.00
    for (const z of [-1.10, 1.10]) root.add(L.box(3.60, 0.55, 0.09, body, 1.60, 1.00, z));
    root.add(L.box(0.09, 0.55, 2.10, body, 3.40, 1.00, 0));                 // 尾门

    // ---------- 6. 驾驶舱内饰：全液晶仪表 + 中控大屏 + 方向盘 + 座椅 ----------
    const cockpit = L.group('cockpit');
    const dashMat = emissive(0x6fc4d8);
    const centerMat = emissive(0x7fd0e0);
    cockpit.add(L.box(0.40, 0.26, 1.80, trim, -2.18, 1.00, 0));             // 仪表台
    cockpit.add(L.box(0.55, 0.24, 0.05, ink, -1.96, 1.20, 0.58));           // 仪表底座
    const cluster = makeMesh(geo.plane(0.48, 0.18), dashMat, -1.96, 1.32, 0.61);
    cockpit.add(cluster);                                                     // 全液晶仪表
    cockpit.add(L.box(0.44, 0.36, 0.05, ink, -1.96, 1.16, -0.04));          // 中控底座
    const center = makeMesh(geo.plane(0.38, 0.30), centerMat, -1.96, 1.34, -0.01);
    cockpit.add(center);                                                      // 中控大屏
    const swheel = makeMesh(geo.torus(0.14, 0.028, 12), L.mat(ink), -1.92, 1.34, 0.52);
    swheel.rotation.y = Math.PI / 2; cockpit.add(swheel);
    for (const z of [-0.46, 0.46]) {
      cockpit.add(L.box(0.36, 0.14, 0.44, 0x6b7168, -1.55, 1.00, z));       // 前排坐垫
      cockpit.add(L.box(0.36, 0.42, 0.10, 0x6b7168, -1.35, 1.14, z));       // 前排靠背
    }
    root.add(cockpit);

    // ---------- 7. 后座改装休憩区：睡袋 / 摊开的地图 / 对讲机 / 杂物网兜 ----------
    const rest = L.group('rear-rest');
    rest.add(L.box(1.10, 0.12, 0.80, 0x4a5450, -0.80, 1.00, 0.0));          // 后座平台 x -1.35..-0.25
    const bag = cloth(0.50, 0.70, 0x7a9b6e, { amplitude: 0.03, key: 'overlandSleepingBag' });
    bag.position.set(-1.075, 1.12, 0.0); rest.add(bag);                      // 睡袋（平台左半）
    rest.add(L.box(0.24, 0.08, 0.36, 0xd8c9a0, -1.15, 1.12, 0.0));          // 枕头
    // 摊开的地图（平台右半，台面 + 折线）
    rest.add(L.box(0.50, 0.01, 0.44, 0xe8dcc0, -0.55, 1.12, 0.10));
    for (let i = 0; i < 3; i++) rest.add(L.box(0.40, 0.012, 0.012, 0x9bbd8f, -0.55, 1.13, -0.02 + i * 0.12));
    // 手持对讲机（立在地板上，贴近 +Z 车窗可见）
    rest.add(L.box(0.07, 0.20, 0.05, trim, -0.42, 1.00, 0.80));
    rest.add(L.pole(0.010, 0.12, ink, -0.42, 1.20, 0.80));                  // 天线
    rest.add(L.box(0.04, 0.06, 0.02, accent, -0.42, 1.08, 0.83));           // 指示灯
    // 杂物网兜（-Z 内壁，横竖细条）
    rest.add(L.box(0.52, 0.36, 0.02, 0x3a4148, -0.65, 1.55, -0.93));
    for (let i = 1; i < 4; i++) rest.add(L.box(0.50, 0.012, 0.012, 0x6b7168, -0.65, 1.55 + (i - 2) * 0.10, -0.91));
    for (let i = 1; i < 3; i++) rest.add(L.box(0.012, 0.34, 0.012, 0x6b7168, -0.65 + (i - 1.5) * 0.24, 1.55, -0.91));
    root.add(rest);

    // ---------- 8. 货斗装备：油桶 / 水箱 / 工具箱 / 折叠桌板 / 备胎 ----------
    const drum = L.drum(0.24, 0.62, 0xb06a3f); drum.position.set(0.85, 1.00, -0.52); root.add(drum);
    root.add(L.rounded(0.72, 0.55, 0.55, 0x6fa8b8, 1.75, 1.00, -0.50, 0.06)); // 水箱
    root.add(L.cyl(0.05, 0.05, 0.10, trim, 1.75, 1.55, -0.50, 8));          // 水箱盖
    const toolbox = L.crate(0.70, 0.46, 0.52, 0xb08050); toolbox.position.set(2.75, 1.00, -0.48); root.add(toolbox);
    // 折叠桌板（从 +Z 斗壁向外翻下）
    root.add(L.box(0.90, 0.05, 0.55, wood, 0.80, 1.30, 1.55));
    for (const x of [0.45, 1.15]) root.add(L.box(0.04, 0.30, 0.04, trim, x, 1.00, 1.78));
    const spare = L.tire(0.30, 0.16); spare.position.set(2.60, 0.86, 0.55); root.add(spare); // 下沿贴合货斗地板

    // ---------- 9. 货斗龙门架（行李架）----------
    const rack = L.group('bed-rack');
    for (const x of [0.30, 3.20]) for (const z of [-1.00, 1.00]) {
      rack.add(L.box(0.07, 1.11, 0.07, trim, x, 1.55, z));                   // 立柱 1.55..2.66
    }
    for (const z of [-1.00, 1.00]) rack.add(L.box(2.90, 0.06, 0.07, trim, 1.75, 2.60, z)); // 纵梁
    for (const x of [0.40, 1.75, 3.10]) rack.add(L.box(0.06, 0.06, 2.00, trim, x, 2.60, 0)); // 横梁
    root.add(rack);

    // ---------- 10. 车顶折叠帐篷（已展开，真正坐在龙门架顶面 2.66 上）----------
    const tent = L.group('roof-tent');
    tent.add(L.box(2.60, 0.08, 2.00, 0x6d7a72, 1.75, 2.66, 0));            // 帐篷底座 2.66..2.74
    tent.add(L.box(2.60, 1.31, 0.05, 0xd9c9a4, 1.75, 2.74, -1.00));        // -Z 帐壁
    tent.add(L.box(0.05, 1.31, 2.00, 0xd9c9a4, 0.45, 2.74, 0));            // -X 帐壁
    tent.add(L.box(0.05, 1.31, 2.00, 0xd9c9a4, 3.05, 2.74, 0));            // +X 帐壁
    // +Z 半开帐帘，中间留缝可见内部
    for (const cx of [0.85, 2.55]) {
      const c = cloth(1.00, 1.20, 0xd9c9a4, { vertical: true, amplitude: 0.05, key: 'overlandTentCurtain' });
      c.position.set(cx, 3.40, 1.02); tent.add(c);
    }
    tent.add(L.rounded(2.70, 0.10, 2.10, body, 1.75, 4.05, 0, 0.06));       // 帐顶 4.05..4.15
    // 帐篷内部：床垫 / 枕头 / 睡袋卷 / 小灯
    tent.add(L.box(2.20, 0.14, 1.60, 0xe8ddc8, 1.75, 2.74, 0));
    tent.add(L.box(0.40, 0.09, 0.50, 0xf3eee2, 1.00, 2.88, 0));
    const roll = L.cyl(0.12, 0.12, 0.50, 0x9bbd8f, 2.40, 2.88, 0.0, 10);
    roll.rotation.z = Math.PI / 2; tent.add(roll);
    const tentLamp = glowSprite(0xffd79a, 0.45, 0);
    tentLamp.position.set(1.75, 3.30, -0.55); tent.add(tentLamp);
    root.add(tent);

    // 帐篷边 LED 灯串
    const tsl = L.stringLights(2.40, 9, 'stringLight');
    tsl.position.set(1.75, 1.00, 1.12);
    root.add(tsl);

    // ---------- 11. 登车梯（从帐篷口斜向地面，不与车身穿插）----------
    const boarding = L.ladder(3.40);
    boarding.position.set(1.70, 0, 3.10);
    boarding.rotation.x = -0.63;
    root.add(boarding);

    // ---------- 12. 侧遮阳幕（+Z，独立于车窗不遮挡透视）----------
    const shadeG = L.group('side-shade');
    for (const x of [2.30, 3.35]) shadeG.add(L.pole(0.035, 2.50, 0x8a9298, x, 0, 2.70));
    shadeG.add(L.box(1.10, 0.04, 0.04, trim, 2.83, 2.48, 2.70));
    const shade = cloth(1.10, 1.00, 0xdfd0ae, { vertical: true, amplitude: 0.05, key: 'overlandShade' });
    shade.position.set(2.83, 1.95, 2.70);
    shadeG.add(shade);
    root.add(shadeG);

    // ---------- 13. 车侧爬梯 ----------
    const sideLadder = L.ladder(1.50);
    sideLadder.position.set(3.25, 1.00, 1.25);
    root.add(sideLadder);

    // ---------- 14. 车顶探照灯（缓慢摆动；光束 / 光晕为纯视觉特效）----------
    const spotLensMat = emissive(0xfff0c0);
    const spotlight = L.group('spotlight');
    spotlight.add(L.box(0.24, 0.16, 0.20, trim, 0, 0, 0));
    const lens = makeMesh(geo.sphere(0.08), spotLensMat, 0, 0.08, 0.11);
    spotlight.add(lens);
    const halo = glowSprite(0xffe6a8, 0.90, 0);
    halo.position.set(0, 0.10, 0.14); spotlight.add(halo);
    const beam = makeMesh(
      geo.cone(0.55, 2.20, 12),
      new THREE.MeshBasicMaterial({ color: 0xffe6a8, transparent: true, opacity: 0.10, side: THREE.DoubleSide, depthWrite: false }),
      0, 0, 1.30,
    );
    beam.rotation.x = -Math.PI / 2;                                          // 灯口为锥尖，向外张开
    beam.userData.noBounds = true;
    beam.userData.dynamic = true;
    beam.userData.noOutline = true;
    beam.name = 'spot-beam';
    spotlight.add(beam);
    spotlight.position.set(-2.10, 2.54, 0.60);
    root.add(spotlight);

    // ---------- 15. 外部细节：踏板 / 车门拉花贴纸 / 天线 / 拖车钩 ----------
    for (const x of [-2.10, -0.70]) root.add(L.box(0.70, 0.06, 0.24, trim, x, 0.62, 1.30)); // 侧踏步
    for (const [x, y] of [[-1.85, 1.20], [-0.75, 1.20]] as [number, number][]) {
      root.add(makeMesh(geo.plane(0.30, 0.30), L.mat(0xffffff, textures.sticker()), x, y, 1.155));
    }
    root.add(L.pole(0.012, 0.70, ink, -2.20, 2.54, -0.90));                  // 天线
    root.add(L.box(0.16, 0.12, 0.16, accent, 3.50, 0.78, 0));                // 拖车钩

    // ---------- 16. 车内顶灯带 / 小夜灯 / 灯光钩子 ----------
    const stripMat = emissive(0xffe6b8, 0.85);
    root.add(makeMesh(geo.box(1.90, 0.035, 0.08), stripMat, -1.30, 2.26, 0.40));
    const nightLamp = glowSprite(0xffd79a, 0.50, 0);
    nightLamp.position.set(-0.50, 1.70, 0.60);
    root.add(nightLamp);
    const cabinLight = new THREE.PointLight(0xffd39a, 0, 9, 2);
    cabinLight.position.set(-1.30, 1.90, 0.40);
    root.add(cabinLight);
    const nlMat = nightLamp.material as THREE.SpriteMaterial;
    breathe('interiorWarmth', (v) => { nlMat.opacity = v * 0.9; }, { base: 0, speed: 1.0 });
    const tentLampMat = tentLamp.material as THREE.SpriteMaterial;
    breathe('interiorWarmth', (v) => { tentLampMat.opacity = v * 0.8; }, { base: 0, speed: 0.9 });
    ctx.decor.bind('interiorWarmth', (v) => {
      cabinLight.intensity = v * 1.9;
      stripMat.opacity = 0.12 + v * 0.8;
      dashMat.color.setRGB(0.42 + v * 0.06, 0.72 + v * 0.05, 0.86);
      centerMat.color.setRGB(0.48 + v * 0.06, 0.78 + v * 0.04, 0.88);
      spotLensMat.color.setRGB(0.90 + v * 0.10, 0.86 + v * 0.08, 0.70 + v * 0.10);
    });

    motion = {
      cabinLight, stripMat, dashMat, centerMat, spotLensMat,
      nightLamp, spotlight, tentStringLights: tsl,
    };
    return root;
  },

  onTimeChange(next: TimeId, _ctx: VehicleContext): void {
    if (!motion) return;
    const warm = next === 'dusk' || next === 'night';
    motion.cabinLight.color.set(warm ? 0xffd09a : 0xffe9c8);  // 黄昏/夜间车内色温更暖
  },

  update(_dt: number, elapsed: number, env: EnvSnapshot): void {
    if (!motion) return;
    const s = 0.55 + Math.sin(elapsed * 1.1) * 0.06 + env.interiorWarmth * 0.12;
    motion.nightLamp.scale.setScalar(s);
    // 探照灯缓慢摆动（幅度克制）
    motion.spotlight.rotation.y = Math.sin(elapsed * 0.35) * 0.22;
    // 帐篷边灯串轻摆（闪烁由 breathe('stringLight') 驱动）
    motion.tentStringLights.rotation.z = Math.sin(elapsed * 0.7) * 0.012;
  },
};

export default overland;
