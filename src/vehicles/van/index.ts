import * as THREE from 'three';
import type { VehicleModule, VehicleContext } from '../../registry/types';
import type { EnvSnapshot, TimeId } from '../../app/State';
import { textures } from '../../core/TextureFactory';
import { geo, makeMesh } from '../../core/GeoFactory';
import { glass, emissive, glowSprite } from '../../core/ToonMaterialFactory';
import { cloth } from '../../common/Cloth';
import { breathe } from '../../common/LightBreath';

/**
 * B 型露营面包车（提示词 3.4，vanlife）。
 * 坐标约定：长轴沿 X，车头朝 -X，露营侧（大侧窗 / 尾门 / 遮阳棚）朝 +Z 面向默认相机。
 * 两核心特征：掀顶（半开帐帘）+ 侧遮阳棚已展开；内部透过三段大侧窗、掀顶帐帘与
 * 后掀尾门纱帘清楚可见。所有构件分层布置，互不插入。
 * 占位上限（layouts.js van）：|x|<=3.45、maxZ<=4.15、height<=3.25。
 */
interface Motion {
  cabinLight: THREE.PointLight;
  stripMat: THREE.MeshBasicMaterial;
  laptopMat: THREE.MeshBasicMaterial;
  nightLamp: THREE.Sprite;
  stringLights: THREE.Group;
}

let motion: Motion | null = null;

const van: VehicleModule = {
  id: 'van',
  label: 'B型露营面包车',
  icon: 'van',

  build(ctx: VehicleContext): THREE.Group {
    const L = ctx.lib;
    const root = new THREE.Group();
    root.name = 'vehicle-van';

    const cream = 0xf0e2c2;   // 复古奶油色（下半）
    const teal = 0x5f9e9b;    // 双色上身（青绿）
    const trim = 0xd8b98a;    // 木/金属饰条
    const wood = 0xc9a97f;
    const dark = 0x59636a;
    const ink = 0x3c4148;

    // ---------- 1. 底盘 / 车轮 / 双色下沿 ----------
    root.add(L.box(6.00, 0.18, 2.00, dark, 0, 0.42, 0));                    // 底盘 0.42..0.60
    root.add(L.box(6.00, 0.12, 2.10, teal, 0, 0.60, 0));                    // 双色下沿 0.60..0.72
    for (const x of [-2.15, 2.15]) {
      for (const z of [-1.02, 1.02]) {
        const w = L.wheel(0.36, 0.20); w.position.set(x, 0, z); root.add(w);
        // 轮拱饰板（盖住车轮与车身下沿交接处）
        root.add(L.rounded(0.86, 0.24, 0.16, cream, x, 0.52, z * 1.06, 0.07));
      }
    }

    // ---------- 2. 车厢主体：地板 / 下部实板 / 上部实墙 / 圆润车顶 ----------
    root.add(L.box(5.90, 0.10, 2.10, wood, 0, 0.74, 0, textures.wood()));   // 地板 0.74..0.84
    // 下部实板 y 0.84..1.24
    root.add(L.box(5.90, 0.40, 0.09, cream, 0, 0.84, -1.05));
    root.add(L.box(5.90, 0.40, 0.09, cream, 0, 0.84, 1.05));
    root.add(L.box(0.09, 0.40, 2.10, cream, 2.95, 0.84, 0));                // 尾端下部
    // -Z 侧上部实墙（背面，不挡 +Z 透视）
    root.add(L.box(5.90, 0.74, 0.09, teal, 0, 1.24, -1.05));
    // +Z 露营侧上部横楣
    root.add(L.box(5.90, 0.10, 0.09, teal, 0, 1.98, 1.05));
    // 圆润车顶 2.08..2.28
    root.add(L.rounded(6.10, 0.20, 2.26, teal, 0, 2.08, 0, 0.10));

    // ---------- 3. +Z 侧三段大车窗（低反射半透，保证透视内饰）----------
    for (const [x, w] of [[-2.10, 1.20], [-0.30, 1.95], [1.85, 1.70]] as [number, number][]) {
      const win = L.window(w, 0.74, 0x466b6a);
      win.position.set(x, 1.24, 1.12);
      root.add(win);
    }
    // 窗间立柱 / 端柱
    for (const x of [-2.86, -1.40, 0.84, 2.86]) {
      root.add(L.box(0.08, 0.74, 0.10, teal, x, 1.24, 1.07));
    }

    // ---------- 4. 复古双色车头：圆润鼻锥 + 前挡风 + 圆灯 + 保险杠 ----------
    const nose = L.group('front-nose');
    nose.add(L.rounded(0.34, 1.20, 2.10, cream, -2.95, 0.84, 0, 0.14));     // x -3.12..-2.78
    const ws = makeMesh(geo.plane(1.70, 0.66), glass(0.22), -3.13, 1.62, 0);
    ws.rotation.y = -Math.PI / 2;
    nose.add(ws);
    nose.add(L.box(0.12, 0.18, 2.14, trim, -3.14, 0.62, 0));
    for (const z of [-0.78, 0.78]) {
      nose.add(L.sphere(0.10, 0xffe9b8, -3.15, 0.98, z));                   // 圆灯
      nose.add(L.box(0.10, 0.10, 0.10, ink, -2.86, 1.98, z * 1.30));        // 后视镜
    }
    root.add(nose);

    // ---------- 5. 驾驶舱内饰（透过 +Z 前排车窗可见）----------
    const cockpit = L.group('cockpit');
    cockpit.position.x = 0.16;                                            // 整体后移，仪表台不与圆润鼻锥相交
    cockpit.add(L.box(0.42, 0.30, 1.80, 0x5b666e, -2.68, 0.84, 0));
    const dash = L.screen(0.34, 0.20, 0x79c8dc);
    dash.position.set(-2.60, 1.14, 0.55);
    cockpit.add(dash);
    const swheel = makeMesh(geo.torus(0.13, 0.026, 12), L.mat(0x3f4a50), -2.44, 1.26, 0.52);
    swheel.rotation.y = Math.PI / 2;
    cockpit.add(swheel);
    for (const z of [-0.48, 0.48]) {
      cockpit.add(L.box(0.42, 0.16, 0.46, 0x9b8f7d, -2.16, 0.84, z));      // 坐垫
      cockpit.add(L.box(0.42, 0.44, 0.10, 0x9b8f7d, -1.94, 1.00, z));      // 靠背
    }
    root.add(cockpit);

    // ---------- 6. 对坐小卡座 + 翻折小桌 + 半展开可变床 ----------
    const dinette = L.group('dinette');
    const seatA = L.sofa(0.90, 0xc4a17b);
    seatA.position.set(-1.15, 0.84, 0.55); seatA.rotation.y = Math.PI / 2;   // 面向 +X
    dinette.add(seatA);
    const seatB = L.sofa(0.90, 0xc4a17b);
    seatB.position.set(0.55, 0.84, 0.55); seatB.rotation.y = -Math.PI / 2;  // 面向 -X
    dinette.add(seatB);
    const table = L.table(0.90, 0.58);
    table.position.set(-0.30, 0.84, 0.55);
    dinette.add(table);
    // 可变床结构「半展开」：卡座下方抽出的床垫 + 折毯 + 枕，只铺一半
    dinette.add(L.box(0.84, 0.09, 0.52, 0xe8ddc8, -1.15, 0.84, -0.42));
    dinette.add(L.box(0.50, 0.05, 0.40, 0xd9a87c, -1.15, 0.93, -0.42));
    dinette.add(L.box(0.28, 0.08, 0.38, 0xf3eee2, -1.42, 0.93, -0.42));
    // 翻折桌的壁挂铰链（示意桌面可翻下变床）
    dinette.add(L.box(0.06, 0.10, 0.40, trim, -0.30, 1.10, -0.98));
    root.add(dinette);

    // 桌上「自由职业者在路上」：笔记本（发光屏）+ 手冲咖啡具 + 散落的书
    const laptopMat = emissive(0x8fd0e0);
    const laptop = L.group('laptop');
    laptop.add(L.box(0.32, 0.02, 0.22, 0x9aa0a4, 0, 0, 0));
    const lid = L.box(0.32, 0.20, 0.02, 0x9aa0a4, 0, 0.01, -0.11);
    lid.rotation.x = -0.32; laptop.add(lid);
    const lscr = makeMesh(geo.plane(0.27, 0.16), laptopMat, 0, 0.11, -0.098);
    lscr.rotation.x = -0.32; laptop.add(lscr);
    laptop.position.set(-0.42, 1.62, 0.55);
    root.add(laptop);
    // 咖啡具（放厨房台面）
    const dripper = L.cone(0.08, 0.11, 0xf5f0e0, 1.48, 1.54, -0.55); root.add(dripper);
    const carafe = L.bottle(0.06, 0.16, 0x8fb8c4); carafe.position.set(1.72, 1.54, -0.55); root.add(carafe);
    root.add(L.cyl(0.045, 0.04, 0.07, 0xe8ddc8, 1.84, 1.54, -0.55, 10));  // 咖啡杯
    // 散落的书（分别落在桌面与卡座坐垫上，避免悬浮）
    for (const [x, y, z, c, rot] of [
      [0.02, 1.62, 0.70, 0xd98c6a, 0.30], [-0.05, 1.62, 0.36, 0x7fa8c8, -0.20], [0.62, 1.12, 0.55, 0xe0c47a, 0.12],
    ] as [number, number, number, number, number][]) {
      const bk = L.box(0.17, 0.03, 0.23, c, x, y, z);
      bk.rotation.y = rot; root.add(bk);
    }

    // ---------- 7. 迷你厨房：迷你冰箱 / 小水槽 / 单孔灶 / 吊柜 ----------
    const fridge = L.fridge(0.95); fridge.position.set(2.45, 0.84, -0.70); root.add(fridge);
    const sink = L.sink(); sink.position.set(1.65, 0.84, -0.70); root.add(sink);
    // 单孔灶：柜体 + 单个灶眼（贴合「迷你厨房」的紧凑感）
    const stove = L.group('single-burner');
    stove.add(L.box(0.50, 0.62, 0.44, 0xa9a396, 0, 0, 0));
    stove.add(L.box(0.44, 0.03, 0.38, 0x3f4548, 0, 0.62, 0));
    stove.add(L.cyl(0.11, 0.11, 0.02, 0x60676a, 0, 0.65, 0, 12));
    stove.position.set(1.00, 0.84, -0.70); root.add(stove);
    for (const x of [1.05, 1.75, 2.45]) {
      const cab = L.cabinet(0.55, 0.32, 0.26, 0xc79b6c);
      cab.position.set(x, 1.70, -0.82); root.add(cab);
    }

    // ---------- 8. 车内氛围：串灯 / 顶灯带 / 挂毯 / 小盆栽 / 小夜灯 ----------
    const sl = L.stringLights(2.40, 8, 'stringLight');
    sl.position.set(0.20, -0.35, 0.90);
    root.add(sl);
    const stripMat = emissive(0xffe6b8, 0.85);
    root.add(makeMesh(geo.box(4.60, 0.035, 0.08), stripMat, 0, 2.00, 0.55));
    const tapestry = cloth(0.80, 0.85, 0xc98a6a, { vertical: true, amplitude: 0.04, key: 'vanTapestry' });
    tapestry.position.set(0.30, 1.55, -0.98); tapestry.rotation.y = Math.PI;
    root.add(tapestry);
    root.add(L.cyl(0.09, 0.11, 0.12, 0xb08050, 2.70, 0.84, 0.60, 10));    // 花盆
    const plant = L.sphere(0.12, 0x6f9b5f, 2.70, 0.96, 0.60); plant.scale.set(1, 0.85, 1); root.add(plant);
    const nightLamp = glowSprite(0xffd79a, 0.55, 0);
    nightLamp.position.set(2.55, 1.55, 0.35);
    root.add(nightLamp);

    // ---------- 9. 掀顶展开：半开帐帘，可见内部床垫 ----------
    const pop = L.group('pop-top');
    pop.add(L.box(2.40, 0.06, 2.06, wood, 1.10, 2.28, 0, textures.wood())); // 掀顶底板 2.28..2.34
    for (const x of [-0.05, 2.25]) for (const z of [-0.98, 0.98]) {
      pop.add(L.box(0.06, 0.52, 0.06, trim, x, 2.34, z));                    // 角柱
    }
    pop.add(L.box(2.30, 0.52, 0.05, 0xe6d6b4, 1.10, 2.34, -1.01));         // -Z 帐板
    pop.add(L.box(0.05, 0.52, 2.00, 0xe6d6b4, -0.02, 2.34, 0));            // -X 帐板
    pop.add(L.box(0.05, 0.52, 2.00, 0xe6d6b4, 2.22, 2.34, 0));             // +X 帐板
    for (const cx of [0.55, 1.65]) {                                          // +Z 半开帐帘，中间留缝
      const c = cloth(0.90, 0.50, 0xe6d6b4, { vertical: true, amplitude: 0.05, key: 'vanPopCurtain' });
      c.position.set(cx, 2.60, 1.03); pop.add(c);
    }
    pop.add(L.rounded(2.50, 0.10, 2.14, teal, 1.10, 2.86, 0, 0.05));        // 顶板 2.86..2.96
    pop.add(L.box(1.80, 0.12, 1.40, 0xe8ddc8, 1.10, 2.34, 0));             // 床垫
    pop.add(L.box(0.40, 0.09, 0.50, 0xf3eee2, 0.45, 2.46, 0));             // 枕头
    pop.add(L.box(0.16, 0.03, 0.22, 0x7fa8c8, 1.75, 2.46, -0.35));         // 一本摊开的书
    root.add(pop);

    // ---------- 10. 车顶行李架 + 捆着的冲浪板 ----------
    const rack = L.group('roof-rack');
    for (const x of [-2.70, -0.70]) for (const z of [-0.98, 0.98]) {
      rack.add(L.box(0.05, 0.16, 0.05, ink, x, 2.28, z));                    // 立柱
    }
    for (const z of [-0.98, 0.98]) rack.add(L.box(2.10, 0.04, 0.05, ink, -1.70, 2.44, z)); // 纵梁
    for (const x of [-2.40, -1.70, -1.00]) rack.add(L.box(0.04, 0.04, 2.00, ink, x, 2.44, 0)); // 横梁
    rack.add(L.rounded(1.90, 0.09, 0.40, cream, -1.70, 2.48, 0.10, 0.05));  // 冲浪板 2.48..2.57
    rack.add(L.cone(0.07, 0.12, trim, -1.70, 2.57, 0.10));                  // 尾鳍
    for (const x of [-2.20, -1.20]) rack.add(L.box(0.05, 0.02, 0.46, 0x8a5a3c, x, 2.57, 0.10)); // 捆带
    root.add(rack);

    // ---------- 11. 侧边遮阳棚（已展开，独立于车窗不遮挡透视）----------
    const canopy = L.group('canopy');
    for (const x of [-0.55, 2.25]) canopy.add(L.pole(0.035, 2.44, 0x8a9298, x, 0, 3.55));
    // 棚布从车身 +Z 面 z≈1.16 连续延伸到立柱 z≈3.55，消除中间悬空
    const shade = cloth(3.00, 2.42, 0xe8d9b8, { amplitude: 0.055, key: 'vanAwning' });
    shade.position.set(0.85, 2.44, 2.37);
    canopy.add(shade);
    root.add(canopy);

    // ---------- 12. 后掀式尾门 + 半开纱帘（+X 面向相机）----------
    const tail = L.group('tailgate');
    const hatch = L.box(0.70, 0.06, 2.02, teal, 2.85, 2.42, 0);
    hatch.rotation.z = 0.34; tail.add(hatch);                                // 掀起的尾门
    tail.add(L.box(0.10, 0.18, 2.00, trim, 2.95, 2.28, 0));                 // 铰链
    for (const z of [-0.55, 0.55]) {
      const gauze = makeMesh(geo.plane(0.62, 0.70), glass(0.18, 0xf2e6c8), 3.00, 1.62, z);
      gauze.rotation.y = Math.PI / 2; tail.add(gauze);                        // 半透纱帘
    }
    root.add(tail);

    // ---------- 13. 外部细节：手绘贴纸 / 滑门导轨 / 储物舱门 / 门把手 ----------
    for (const [x, y, s] of [[2.35, 1.05, 0.40], [-2.45, 1.02, 0.30], [0.90, 1.00, 0.26]] as [number, number, number][]) {
      root.add(makeMesh(geo.plane(s, s), L.mat(0xffffff, textures.sticker()), x, y, 1.105));
    }
    root.add(L.box(2.20, 0.03, 0.03, trim, 0.0, 1.22, 1.11));              // 滑门导轨
    root.add(L.box(0.12, 0.04, 0.04, ink, -0.90, 1.14, 1.12));             // 门把手
    for (const x of [-2.30, 1.40]) root.add(L.box(0.60, 0.26, 0.03, 0xd3cbb7, x, 0.90, 1.11)); // 储物舱门
    root.add(L.cyl(0.05, 0.05, 0.03, ink, 2.60, 1.02, -1.10, 10));         // 加油口

    // ---------- 14. 内饰灯光钩子 ----------
    const cabinLight = new THREE.PointLight(0xffd39a, 0, 8, 2);
    cabinLight.position.set(0.10, 1.90, 0.45);
    root.add(cabinLight);
    const nlMat = nightLamp.material as THREE.SpriteMaterial;
    breathe('interiorWarmth', (v) => { nlMat.opacity = v * 0.9; }, { base: 0, speed: 1.0 });
    ctx.decor.bind('interiorWarmth', (v) => {
      cabinLight.intensity = v * 1.8;
      stripMat.opacity = 0.12 + v * 0.8;                       // 白天灯带近熄，夜间点亮
      laptopMat.color.setRGB(0.45 + v * 0.08, 0.72 + v * 0.05, 0.86);
    });

    motion = { cabinLight, stripMat, laptopMat, nightLamp, stringLights: sl };
    return root;
  },

  onTimeChange(next: TimeId, _ctx: VehicleContext): void {
    if (!motion) return;
    const warm = next === 'dusk' || next === 'night';
    motion.cabinLight.color.set(warm ? 0xffd09a : 0xffe9c8);  // 黄昏/夜间车内色温更暖
  },

  update(_dt: number, elapsed: number, env: EnvSnapshot): void {
    if (!motion) return;
    // 小夜灯呼吸（与串灯节奏一致，幅度克制）
    const s = 0.55 + Math.sin(elapsed * 1.1) * 0.06 + env.interiorWarmth * 0.12;
    motion.nightLamp.scale.setScalar(s);
    // 车内串灯极轻微摆动（闪烁本身由 breathe('stringLight') 驱动）
    motion.stringLights.rotation.z = Math.sin(elapsed * 0.7) * 0.012;
  },
};

export default van;
