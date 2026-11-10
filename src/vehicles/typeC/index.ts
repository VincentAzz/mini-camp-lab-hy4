import * as THREE from 'three';
import type { VehicleModule, VehicleContext } from '../../registry/types';
import type { EnvSnapshot, TimeId } from '../../app/State';
import { textures } from '../../core/TextureFactory';
import { geo, makeMesh } from '../../core/GeoFactory';
import { glass, emissive, glowSprite } from '../../core/ToonMaterialFactory';
import { cloth } from '../../common/Cloth';
import { breathe } from '../../common/LightBreath';

/**
 * C 型房车（提示词 3.1，车型模块范例）。
 * 坐标约定：长轴沿 X，车头朝 -X，露营侧（窗 / 门 / 拓展舱 / 遮阳棚）朝 +Z 面向默认相机。
 * 两核心特征：升顶 + 侧拓展舱已展开；内部透过升顶帐帘与大面车窗清楚可见。
 * 内饰全部贴墙布置、留出中央通道，构件之间不互相插入（防穿模）。
 */
interface Motion {
  cabinLight: THREE.PointLight;
  screenMat: THREE.MeshBasicMaterial;
  nightLamp: THREE.Sprite;
}

let motion: Motion | null = null;

const typeC: VehicleModule = {
  id: 'typeC',
  label: 'C型房车',
  icon: 'rv-c',

  build(ctx: VehicleContext): THREE.Group {
    const L = ctx.lib;
    const root = new THREE.Group();
    root.name = 'vehicle-typeC';

    const bodyColor = 0xf1ecdd;
    const trim = 0xd8b98a;

    // ---------- 底盘与车轮 ----------
    root.add(L.box(8.0, 0.20, 2.46, 0x59636a, 0, 0.40, 0));
    for (const x of [-2.85, 2.45]) {
      for (const z of [-1.24, 1.24]) {
        const w = L.wheel(0.42, 0.22);
        w.position.set(x, 0, z);
        root.add(w);
      }
    }
    // 车身下沿装饰条
    root.add(L.box(7.9, 0.12, 2.52, trim, 0, 0.60, 0));

    // ---------- 车厢主体：背板 / 端板 / 顶 / 地板 ----------
    root.add(L.box(7.30, 0.12, 2.28, 0xc9a97f, 0, 0.72, 0, textures.wood()));
    root.add(L.box(7.30, 1.76, 0.09, bodyColor, 0, 0.84, -1.14));
    root.add(L.box(0.10, 1.76, 2.28, bodyColor, -3.65, 0.84, 0));
    root.add(L.box(0.10, 1.76, 2.28, bodyColor, 3.65, 0.84, 0));
    root.add(L.box(7.30, 0.10, 2.28, bodyColor, 0, 2.51, 0));

    // +Z 露营侧：下部实板 + 上部横楣 + 大面车窗（保证透视内饰可见）
    root.add(L.box(7.30, 0.48, 0.09, bodyColor, 0, 0.84, 1.14));
    root.add(L.box(7.30, 0.26, 0.09, bodyColor, 0, 2.35, 1.14));
    for (const x of [-3.65, -1.55, 0.55, 2.65, 3.65]) {
      root.add(L.box(0.09, 1.03, 0.10, bodyColor, x, 1.32, 1.14));
    }
    for (const [x, w] of [[-2.60, 2.0], [-0.50, 2.0], [1.60, 2.0], [3.15, 0.9]] as [number, number][]) {
      const win = L.window(w, 0.94, 0x6c7b84);
      win.position.set(x, 1.36, 1.20);
      root.add(win);
    }

    // ---------- 经典 C 型凸头驾驶舱 ----------
    const cab = L.group('cab');
    cab.add(L.box(1.28, 1.34, 2.30, bodyColor, -3.98, 0.72, 0));
    cab.add(L.box(1.34, 0.16, 2.36, bodyColor, -3.98, 2.06, 0));
    // 前挡风 + 侧窗
    const windshield = makeMesh(geo.plane(1.02, 0.78), glass(0.22), -4.66, 1.42, 0);
    windshield.rotation.y = -Math.PI / 2;
    cab.add(windshield);
    for (const z of [-1.17, 1.17]) {
      const side = makeMesh(geo.plane(0.92, 0.66), glass(0.20), -4.02, 1.46, z);
      cab.add(side);
    }
    // 保险杠、车灯、后视镜
    cab.add(L.box(0.14, 0.22, 2.34, 0x67737a, -4.66, 0.62, 0));
    for (const z of [-0.86, 0.86]) {
      cab.add(L.box(0.06, 0.16, 0.30, 0xffe9b8, -4.66, 1.02, z));
      cab.add(L.box(0.10, 0.10, 0.10, 0x5b666d, -3.78, 1.92, z * 1.35));
    }
    root.add(cab);

    // ---------- 驾驶舱内饰：大屏、仪表、方向盘、座椅 ----------
    const cockpit = L.group('cockpit');
    cockpit.add(L.box(0.62, 0.42, 1.90, 0x5b666e, -3.70, 0.84, 0));
    const screenMat = emissive(0x79c8dc);
    const screen = makeMesh(geo.plane(0.44, 0.28), screenMat, -3.66, 1.36, 0.34);
    screen.rotation.y = -Math.PI / 2;
    cockpit.add(screen);
    for (const z of [-0.62, 0.62]) {
      cockpit.add(L.box(0.50, 0.30, 0.48, 0x9b8f7d, -3.90, 0.84, z));
      cockpit.add(L.box(0.48, 0.64, 0.12, 0x9b8f7d, -3.62, 1.14, z));
      const wheel = makeMesh(geo.torus(0.16, 0.028, 12), L.mat(0x3f4a50), -3.52, 1.43, z);
      wheel.rotation.y = Math.PI / 2;
      cockpit.add(wheel);
    }
    root.add(cockpit);

    // ---------- 生活区内饰（贴近 +Z 车窗，从默认相机可清楚看到）----------
    const inner = L.group('interior');

    // 卡座餐桌
    inner.add(L.table(0.92, 0.52, 0xb98a5c).translateX(-1.75).translateZ(0.62));
    const seatA = L.sofa(0.80, 0xc4a17b); seatA.position.set(-1.75, 0.84, 0.10); inner.add(seatA);
    const seatB = L.sofa(0.80, 0xc4a17b); seatB.position.set(-1.75, 0.84, 1.02); seatB.rotation.y = Math.PI; inner.add(seatB);

    // 厨房区：水槽 / 灶台 / 冰箱 / 吊柜
    const sink = L.sink(); sink.position.set(-0.30, 0.84, -0.86); inner.add(sink);
    const stove = L.stove(); stove.position.set(0.42, 0.84, -0.86); inner.add(stove);
    const fridge = L.fridge(1.28); fridge.position.set(-1.02, 0.84, -0.86); inner.add(fridge);
    for (const x of [-0.95, 0.05, 0.95]) {
      const cab2 = L.cabinet(0.72, 0.36, 0.30, 0xc79b6c);
      cab2.position.set(x, 1.98, -0.94);
      inner.add(cab2);
    }

    // 床铺 + 温暖小夜灯
    const bed = L.bed(1.72, 1.02, 0xe8ddc8); bed.position.set(2.55, 0.84, -0.42); inner.add(bed);
    const nightLamp = glowSprite(0xffd79a, 0.62, 0);
    nightLamp.position.set(3.34, 1.32, -0.42);
    inner.add(nightLamp);
    const nlMat = nightLamp.material as THREE.SpriteMaterial;
    breathe('interiorWarmth', (v) => { nlMat.opacity = v * 0.9; }, { base: 0, speed: 1.0 });

    // 车内顶灯带
    const strip = makeMesh(geo.box(5.6, 0.035, 0.10), emissive(0xffe6b8), 0.2, 2.36, 0.72);
    inner.add(strip);
    root.add(inner);

    // ---------- 升顶展开（含半开帐帘，可见内部）----------
    const popTop = L.group('pop-top');
    popTop.add(L.box(3.60, 0.10, 2.20, bodyColor, 0.30, 3.14, 0));
    for (const x of [-1.50, 2.10]) for (const z of [-1.02, 1.02]) {
      popTop.add(L.box(0.07, 0.56, 0.07, 0xb9a888, x, 2.58, z));
    }
    // 帐帘：左右两片 + 中间敞开，保持「透视可见」
    for (const x of [-0.85, 1.55]) {
      const curtain = cloth(1.10, 0.54, 0xe6d6b4, { vertical: true, amplitude: 0.045, key: 'popTopCurtain' });
      curtain.position.set(x, 2.84, 1.10);
      popTop.add(curtain);
    }
    popTop.add(L.box(3.60, 0.10, 0.10, trim, 0.30, 2.58, 1.08));
    root.add(popTop);

    // ---------- 侧拓展舱滑出（+Z），内部沙发与书架可见 ----------
    const slide = L.group('slide-out');
    slide.add(L.box(2.50, 0.12, 1.02, 0xc9a97f, 1.35, 0.72, 1.25, textures.wood()));
    slide.add(L.box(2.50, 1.42, 0.09, bodyColor, 1.35, 0.84, 1.26));   // 舱底侧板
    slide.add(L.box(0.09, 1.42, 1.02, bodyColor, 0.10, 0.84, 1.76));
    slide.add(L.box(0.09, 1.42, 1.02, bodyColor, 2.60, 0.84, 1.76));
    slide.add(L.box(2.50, 0.10, 1.02, bodyColor, 1.35, 2.26, 1.76));
    // 拓展舱大窗（+Z 面）
    const slideWin = L.window(2.16, 0.92, 0x6c7b84);
    slideWin.position.set(1.35, 1.32, 2.28);
    slide.add(slideWin);
    // 舱内沙发与书架
    const sofa = L.sofa(1.30, 0xb88a6c); sofa.position.set(1.30, 0.84, 1.72); slide.add(sofa);
    const shelf = L.group('bookshelf');
    shelf.add(L.box(0.72, 1.08, 0.24, 0xa9885f, 0, 0, 0, textures.wood()));
    for (let i = 0; i < 3; i++) {
      for (let k = 0; k < 5; k++) {
        shelf.add(L.box(0.09, 0.20, 0.16, [0xd98c6a, 0x7fa8c8, 0xe0c47a, 0x9bbd8f][k % 4],
          -0.27 + k * 0.13, 0.10 + i * 0.32, 0.14));
      }
    }
    shelf.position.set(2.18, 0.84, 1.62);
    slide.add(shelf);
    root.add(slide);

    // ---------- 侧遮阳棚（已展开）+ 电动踏步 ----------
    const canopy = L.group('canopy');
    for (const x of [0.20, 2.55]) {
      canopy.add(L.pole(0.035, 2.30, 0x8a9298, x, 0, 3.62));
    }
    const shade = cloth(2.60, 1.20, 0xe8d9b8, { amplitude: 0.055, key: 'canopyCloth' });
    shade.position.set(1.38, 2.48, 3.00);
    canopy.add(shade);
    root.add(canopy);
    root.add(L.box(1.05, 0.09, 0.36, 0x8d9498, 1.35, 0.40, 1.62));

    // ---------- 外部细节：车门、储物舱、备胎、天线、贴纸 ----------
    root.add(L.box(0.62, 1.10, 0.05, 0xe0d7c2, -0.10, 0.84, 1.22));
    root.add(L.box(0.10, 0.05, 0.06, 0x6c7b84, 0.14, 1.52, 1.27));
    for (const x of [-2.4, 3.0]) root.add(L.box(0.72, 0.34, 0.05, 0xd3cbb7, x, 0.66, 1.22));
    root.add(L.pole(0.018, 0.62, 0x6f7a80, -2.9, 2.60, -0.6));
    const spare = L.tire(0.34, 0.16); spare.position.set(3.72, 1.05, 0); spare.rotation.y = Math.PI / 2; root.add(spare);

    // ---------- 内饰灯光钩子：夜间 / 黄昏车内暖光更突出 ----------
    const cabinLight = new THREE.PointLight(0xffd39a, 0, 9, 2);
    cabinLight.position.set(0.2, 2.05, 0.55);
    root.add(cabinLight);
    ctx.decor.bind('interiorWarmth', (v) => {
      cabinLight.intensity = v * 1.85;
      screenMat.color.setRGB(0.42 + v * 0.05, 0.72 + v * 0.04, 0.86);
    });

    motion = { cabinLight, screenMat, nightLamp };
    return root;
  },

  onTimeChange(next: TimeId, _ctx: VehicleContext): void {
    // 清晨车内屏光偏冷、黄昏/夜间偏暖，强化与室外暮色的冷暖对比；
    // 亮度本身由 interiorWarmth 装饰状态（decor.bind）驱动，不在此重复设置。
    if (!motion) return;
    const warm = next === 'dusk' || next === 'night';
    motion.cabinLight.color.set(warm ? 0xffd09a : 0xffe9c8);
  },

  update(_dt: number, elapsed: number, env: EnvSnapshot): void {
    if (!motion) return;
    // 车内小夜灯呼吸与串灯节奏一致，幅度克制
    const s = 0.55 + Math.sin(elapsed * 1.1) * 0.06 + env.interiorWarmth * 0.12;
    motion.nightLamp.scale.setScalar(s);
  },
};

export default typeC;
