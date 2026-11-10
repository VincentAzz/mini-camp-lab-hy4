import * as THREE from 'three';
import type { VehicleModule, VehicleContext } from '../../registry/types';
import type { EnvSnapshot, TimeId } from '../../app/State';
import { textures } from '../../core/TextureFactory';
import { geo, makeMesh } from '../../core/GeoFactory';
import { glass, emissive, glowSprite } from '../../core/ToonMaterialFactory';
import { cloth } from '../../common/Cloth';
import { breathe } from '../../common/LightBreath';

/**
 * A 型大巴式房车（提示词 3.2）。
 * 坐标：长轴沿 X，车头朝 -X，露营侧（门窗 / 拓展舱 / 遮阳棚 / 踏步）朝 +Z 面向默认相机。
 * 两核心特征：+Z 侧拓展舱已展开；生活区透过贯通大车窗清楚可见。
 * 内饰按「驾驶舱 - 环形卡座 - 中岛厨房 - 卫浴 - 独立卧室」沿 X 严格分区，
 * 家具底面统一贴在地板顶面 floorY，车体板 / 窗框 / 家具互不插入。
 */
interface Motion {
  cabinLight: THREE.PointLight;
  screenMat: THREE.MeshBasicMaterial;
  stripMat: THREE.MeshBasicMaterial;
  nightLamp: THREE.Sprite;
  root: THREE.Group;
  warmth: number;
  stripBase: THREE.Color;
  screenBase: THREE.Color;
}

let motion: Motion | null = null;

const typeA: VehicleModule = {
  id: 'typeA',
  label: 'A型大巴房车',
  icon: 'rv-a',

  build(ctx: VehicleContext): THREE.Group {
    const L = ctx.lib;
    const root = new THREE.Group();
    root.name = 'vehicle-typeA';

    const body = 0xf1ecdd;      // 米白大巴车身
    const body2 = 0xe4dcc6;     // 下裙 / 顶沿
    const trim = 0xc9a97f;      // 暖木饰条
    const frame = 0x5f6d76;     // 窗框
    const metal = 0x8a9298;
    const floorY = 0.82;        // 木纹地板顶面（所有内饰家具的底面高度）

    // ---------- 底盘 / 三轴车轮 / 下沿饰条 ----------
    root.add(L.box(9.20, 0.18, 2.50, 0x59636a, 0, 0.38, 0));
    for (const x of [-3.45, 2.55, 3.60]) {
      for (const z of [-1.10, 1.10]) {
        const w = L.wheel(0.40, 0.22);
        w.position.set(x, 0, z);
        root.add(w);
      }
    }
    root.add(L.box(9.30, 0.14, 2.56, trim, 0, 0.56, 0));
    // 侧裙储物舱门（+Z / -Z 两侧）与把手
    for (const x of [-3.40, -1.60, 1.60, 3.40]) {
      root.add(L.box(0.95, 0.30, 0.05, 0xd3cbb7, x, 0.52, 1.27));
      root.add(L.box(0.14, 0.04, 0.06, 0x6c7b84, x, 0.65, 1.30));
      root.add(L.box(0.95, 0.30, 0.05, 0xd3cbb7, x, 0.52, -1.27));
    }
    // 车身腰线（贴下部实板，不穿窗）
    root.add(L.box(9.10, 0.08, 0.03, 0x7f9ab0, 0, 1.02, 1.26));
    root.add(L.box(9.10, 0.05, 0.03, 0xd8b98a, 0, 1.14, 1.26));
    root.add(L.box(9.10, 0.08, 0.03, 0x7f9ab0, 0, 1.02, -1.26));

    // ---------- 木纹地板 / 车顶 / 端板 ----------
    root.add(L.box(9.10, 0.12, 2.44, 0xb98a5c, 0, 0.70, 0, textures.wood()));
    root.add(L.box(9.10, 0.12, 2.44, body, 0, 2.92, 0));
    root.add(L.rounded(9.30, 0.10, 2.60, body2, 0, 3.02, 0, 0.04));
    // 车尾端板（实心）+ 尾灯
    root.add(L.box(0.12, 2.10, 2.44, body, 4.54, 0.82, 0));
    for (const z of [-0.95, 0.95]) {
      root.add(L.box(0.06, 0.16, 0.24, 0xd05a4a, 4.62, 1.02, z));
    }

    // ---------- 车头：大前挡风 / 保险杠 / 车灯 / 后视镜 ----------
    root.add(L.box(0.12, 0.53, 2.44, body, -4.54, 0.82, 0));
    root.add(L.box(0.12, 0.20, 2.44, body, -4.54, 2.72, 0));
    const windshield = makeMesh(geo.plane(2.24, 1.32), glass(0.22), -4.62, 2.04, 0);
    windshield.rotation.y = -Math.PI / 2;
    root.add(windshield);
    for (const z of [-1.14, 0, 1.14]) {
      root.add(L.box(0.06, 1.34, 0.06, frame, -4.60, 1.37, z));
    }
    root.add(L.box(0.05, 0.03, 0.86, 0x4a555c, -4.64, 1.42, 0.48));
    root.add(L.box(0.05, 0.03, 0.86, 0x4a555c, -4.64, 1.42, -0.48));
    root.add(L.box(0.16, 0.24, 2.50, 0x67737a, -4.68, 0.55, 0));
    root.add(L.box(0.05, 0.22, 1.20, 0x4a555c, -4.72, 0.80, 0));
    for (const z of [-0.86, 0.86]) {
      root.add(L.box(0.06, 0.18, 0.34, 0xffe9b8, -4.71, 1.02, z));
      root.add(L.box(0.10, 0.10, 0.10, 0x5b666d, -4.28, 2.30, z * 1.55));
      root.add(L.box(0.05, 0.05, 0.22, 0x5b666d, -4.34, 2.30, z * 1.35));
    }

    // ---------- +Z 露营侧：通长下部实板 + 上部横楣 + 分区竖框 ----------
    root.add(L.box(9.10, 0.46, 0.10, body, 0, 0.82, 1.22));   // 0.82~1.28
    root.add(L.box(9.10, 0.24, 0.10, body, 0, 2.68, 1.22));   // 2.68~2.92
    for (const x of [-4.55, -3.05, -0.55, 0.65, 1.65, 2.75, 4.55]) {
      root.add(L.box(0.09, 1.40, 0.11, body, x, 1.28, 1.22));
    }
    // 各段大车窗（低反射半透，透视内饰）
    for (const [x, w] of [[-3.80, 1.34], [0.05, 1.04], [2.20, 0.94], [3.65, 1.64]] as [number, number][]) {
      const win = L.window(w, 1.38, frame);
      win.position.set(x, 1.28, 1.27);
      root.add(win);
    }

    // 车门（门窗 + 把手 + 门楣），单独一段不与其他窗重叠
    const door = L.group('entry-door');
    door.add(L.box(0.92, 1.06, 0.05, 0xe6ddc8, 1.15, 0.82, 1.27));
    const doorWin = L.window(0.74, 0.66, frame);
    doorWin.position.set(1.15, 1.90, 1.30);
    door.add(doorWin);
    door.add(L.box(0.94, 0.06, 0.06, trim, 1.15, 1.86, 1.30));
    door.add(L.box(0.92, 0.12, 0.05, body, 1.15, 2.56, 1.27));
    door.add(L.box(0.10, 0.04, 0.06, 0x6c7b84, 1.52, 1.50, 1.31));
    root.add(door);

    // ---------- -Z 背侧：贯通侧窗（翻转朝 -Z）----------
    root.add(L.box(9.10, 0.46, 0.10, body, 0, 0.82, -1.22));
    root.add(L.box(9.10, 0.24, 0.10, body, 0, 2.68, -1.22));
    for (const x of [-4.55, -2.30, 0, 2.30, 4.55]) {
      root.add(L.box(0.09, 1.40, 0.11, body, x, 1.28, -1.22));
    }
    for (const x of [-3.42, -1.15, 1.15, 3.42]) {
      const win = L.window(2.10, 1.38, frame);
      win.rotation.y = Math.PI;
      win.position.set(x, 1.28, -1.27);
      root.add(win);
    }

    // ---------- 驾驶舱内饰：大屏仪表 / 方向盘 / 双座椅 ----------
    const cockpit = L.group('cockpit');
    cockpit.add(L.box(0.50, 0.42, 2.00, 0x5b666e, -4.25, floorY, 0));
    cockpit.add(L.box(0.82, 0.36, 0.06, 0x2e363d, -4.02, 1.24, 0.50));
    const screenMat = emissive(0x79c8dc);
    const dash = makeMesh(geo.plane(0.72, 0.30), screenMat, -4.02, 1.42, 0.54);
    cockpit.add(dash);
    for (const z of [-0.52, 0.52]) {
      cockpit.add(L.box(0.44, 0.30, 0.46, 0x9b8f7d, -3.62, floorY, z));
      cockpit.add(L.box(0.44, 0.58, 0.10, 0x9b8f7d, -3.38, 1.12, z));
    }
    const steer = makeMesh(geo.torus(0.15, 0.028, 12), L.mat(0x3f4a50), -3.96, 1.40, -0.52);
    steer.rotation.y = Math.PI / 2;
    cockpit.add(steer);
    root.add(cockpit);

    // ---------- 生活区内饰（贴近 +Z 大窗，从默认相机清楚可见）----------
    const inner = L.group('interior');

    // 环形豪华沙发卡座（U 型围合，家具之间留缝不互插）
    const seatBack = L.sofa(1.90, 0xb88a6c);
    seatBack.position.set(-1.80, floorY, -0.80);
    inner.add(seatBack);
    const seatFront = L.sofa(1.90, 0xc4a17b);
    seatFront.position.set(-1.80, floorY, 0.80);
    seatFront.rotation.y = Math.PI;
    inner.add(seatFront);
    const seatEnd = L.sofa(0.90, 0xb88a6c);
    seatEnd.position.set(-2.65, floorY, 0);
    seatEnd.rotation.y = Math.PI / 2;
    inner.add(seatEnd);
    // 卡座茶几
    inner.add(L.box(0.90, 0.05, 0.62, 0xb07f4e, -1.80, 1.20, 0, textures.wood()));
    inner.add(L.cyl(0.07, 0.07, 0.38, 0x7a6a52, -1.80, floorY, 0, 8));

    // 中岛厨房：双开门冰箱 / 水槽 / 嵌入式灶台 / 烤箱 / 通顶吊柜
    const fridge = L.fridge(1.60);
    fridge.position.set(-0.35, floorY, -0.86);
    inner.add(fridge);
    const sink = L.sink();
    sink.position.set(0.35, floorY, -0.86);
    inner.add(sink);
    const stove = L.stove();
    stove.position.set(1.05, floorY, -0.86);
    inner.add(stove);
    inner.add(L.box(0.52, 0.52, 0.44, 0x545c60, 1.75, floorY, -0.86));
    inner.add(makeMesh(geo.plane(0.40, 0.30), glass(0.30, 0x9fb0b6), 1.75, 1.08, -0.63));
    for (const x of [1.60, 1.90]) {
      inner.add(L.cyl(0.035, 0.035, 0.03, 0xc9cdd0, x, 1.40, -0.62, 8));
    }
    // 通顶吊柜（冰箱上方补齐，形成到顶的整体柜列）
    inner.add(L.box(0.56, 0.24, 0.52, 0xc79b6c, -0.35, 2.42, -0.86));
    for (const x of [0.35, 1.05, 1.75]) {
      const cab = L.cabinet(0.62, 0.42, 0.30, 0xc79b6c);
      cab.position.set(x, 2.24, -0.86);
      inner.add(cab);
    }
    // 独立中岛（+Z 侧，台面与果盘从车窗可直接看到）
    inner.add(L.box(1.70, 0.66, 0.62, 0xb07f4e, 0.05, floorY, 0.55, textures.wood()));
    inner.add(L.box(1.78, 0.06, 0.70, 0xe8d9b8, 0.05, 1.48, 0.55));
    inner.add(L.cyl(0.09, 0.09, 0.10, 0xe6e0d0, -0.35, 1.54, 0.55, 10));
    inner.add(L.sphere(0.10, 0xd98c6a, 0.35, 1.54, 0.55));

    // 小卫浴间：半高隔断 / 洗手盆 / 淋浴玻璃隔断 / 花洒 / 镜子
    inner.add(L.box(1.00, 1.30, 0.07, 0xdcd6c4, 2.20, floorY, -0.20));
    inner.add(L.box(0.85, 1.20, 0.06, 0xe4e7e4, 2.20, floorY, -0.75));
    inner.add(makeMesh(geo.plane(0.62, 1.00), glass(0.28, 0xd8e8ee), 2.20, 1.34, -0.10));
    inner.add(L.cyl(0.02, 0.02, 0.90, metal, 2.20, floorY, -0.10, 8));
    inner.add(L.cyl(0.06, 0.06, 0.04, 0xb8c0c4, 2.20, 1.70, -0.10, 10));
    const basin = L.sink();
    basin.scale.setScalar(0.72);
    basin.position.set(1.90, floorY, 0.55);
    inner.add(basin);
    inner.add(makeMesh(geo.plane(0.34, 0.40), glass(0.22, 0xdceaf0), 1.90, 1.72, -0.70));

    // 半隔断独立卧室：双人床 / 床头板 / 床头柜
    inner.add(L.box(0.08, 1.30, 2.10, 0xc9a97f, 2.78, floorY, 0, textures.wood()));
    const bed = L.bed(1.60, 1.70, 0xe8ddc8);
    bed.position.set(3.62, floorY, -0.05);
    inner.add(bed);
    inner.add(L.box(0.10, 0.60, 1.80, 0xb07f4e, 4.46, floorY, -0.05));
    inner.add(L.box(0.34, 0.34, 0.34, 0xb07f4e, 2.98, floorY, 0.98));
    const nightLamp = glowSprite(0xffd79a, 0.60, 0);
    nightLamp.position.set(2.98, 1.32, 0.98);
    inner.add(nightLamp);
    const nlMat = nightLamp.material as THREE.SpriteMaterial;
    breathe('interiorWarmth', (v) => { nlMat.opacity = v * 0.9; }, { base: 0, speed: 1.0 });

    // 车内暖色灯带（车顶一条 + 拓展舱一条）
    const stripMat = emissive(0xffe0a8);
    inner.add(makeMesh(geo.box(8.30, 0.035, 0.10), stripMat, 0, 2.80, 0.66));
    inner.add(makeMesh(geo.box(2.20, 0.030, 0.08), stripMat, -1.80, 2.54, 1.70));
    root.add(inner);

    // ---------- +Z 侧拓展舱（已展开，外凸到 z≈2.16，大窗透视）----------
    const slide = L.group('slide-out');
    const cx = -1.80;
    slide.add(L.box(2.50, 0.10, 0.94, 0xb98a5c, cx, 0.72, 1.69, textures.wood()));
    slide.add(L.box(2.50, 0.46, 0.09, body, cx, 0.82, 2.12));
    slide.add(L.box(2.50, 0.20, 0.09, body, cx, 2.48, 2.12));
    for (const x of [-3.05, -0.55]) {
      slide.add(L.box(0.09, 1.76, 0.90, body, x, 0.82, 1.67));
    }
    slide.add(L.box(2.50, 0.10, 0.90, body, cx, 2.58, 1.67));
    const slideWin = L.window(2.24, 1.20, frame);
    slideWin.position.set(cx, 1.28, 2.17);
    slide.add(slideWin);
    // 舱内：单人沙发 / 电视 / 书架（与车厢环形卡座连成一体观感）
    const slideSofa = L.sofa(0.90, 0xb88a6c);
    slideSofa.position.set(cx, floorY, 1.70);
    slide.add(slideSofa);
    slide.add(L.box(0.06, 0.44, 0.44, 0x2e363d, -3.00, 1.63, 1.70));
    const tv = makeMesh(geo.plane(0.44, 0.34), screenMat, -2.98, 1.85, 1.70);
    tv.rotation.y = Math.PI / 2;
    slide.add(tv);
    const shelf = L.group('bookshelf');
    shelf.add(L.box(0.55, 1.00, 0.20, 0xa9885f, 0, 0, 0, textures.wood()));
    for (let i = 0; i < 3; i++) {
      for (let k = 0; k < 4; k++) {
        shelf.add(L.box(0.09, 0.18, 0.14, [0xd98c6a, 0x7fa8c8, 0xe0c47a, 0x9bbd8f][k],
          -0.18 + k * 0.12, 0.08 + i * 0.30, 0.12));
      }
    }
    shelf.position.set(-0.90, floorY, 1.70);
    slide.add(shelf);
    root.add(slide);

    // ---------- 侧遮阳棚（已展开）+ 串灯 + 电动踏步 ----------
    const canopy = L.group('canopy');
    for (const x of [-0.80, 2.40]) {
      canopy.add(L.pole(0.038, 2.86, metal, x, 0, 3.72));
    }
    const shade = cloth(3.40, 2.46, 0xe8d9b8, { amplitude: 0.05, key: 'typeACanopy' });
    shade.position.set(0.80, 2.84, 2.50);
    canopy.add(shade);
    const lights = L.stringLights(3.0, 8);
    lights.position.set(0.80, 0, 3.66);
    canopy.add(lights);
    root.add(canopy);
    root.add(L.box(1.05, 0.10, 0.70, metal, 1.15, 0.40, 1.62));
    root.add(L.box(0.90, 0.09, 0.44, 0x9aa2a6, 1.15, 0.22, 1.95));

    // ---------- 车顶：空调外机 / 卫星锅 / 天窗 / 行李架 ----------
    root.add(L.rounded(1.20, 0.30, 0.92, 0xe4e7e6, -1.60, 3.04, 0, 0.06));
    for (let i = -2; i <= 2; i++) {
      root.add(L.box(0.03, 0.02, 0.80, 0x9aa2a6, -1.60 + i * 0.20, 3.34, 0));
    }
    const fan = makeMesh(geo.torus(0.26, 0.02, 14), L.mat(0x8a9298), -1.60, 3.35, 0);
    fan.rotation.x = -Math.PI / 2;
    root.add(fan);
    root.add(L.cyl(0.05, 0.05, 0.24, metal, 2.20, 3.04, 0, 8));
    const dish = makeMesh(geo.sphere(0.44, 12), L.mat(0xd8dcd8), 2.20, 3.38, 0);
    dish.scale.set(1, 0.22, 0.62);
    dish.rotation.x = -0.42;
    root.add(dish);
    root.add(L.cyl(0.02, 0.02, 0.22, metal, 2.20, 3.34, 0.22, 6));
    root.add(L.sphere(0.05, 0xe8e4d8, 2.20, 3.52, 0.32));
    const sky = makeMesh(geo.plane(1.00, 0.70), glass(0.25), 0.20, 3.06, 0);
    sky.rotation.x = -Math.PI / 2;
    root.add(sky);
    for (const z of [-0.38, 0.38]) root.add(L.box(1.10, 0.03, 0.04, metal, 0.20, 3.04, z));
    for (const x of [-0.36, 0.76]) root.add(L.box(0.04, 0.03, 0.80, metal, x, 3.04, 0));

    // ---------- 车尾自行车架 + 折叠自行车（横挂，长轴沿 Z 以不超长）----------
    const rack = L.group('bike-rack');
    rack.add(L.box(0.10, 0.10, 1.40, 0x4f5a60, 4.62, 0.52, 0));
    for (const z of [-0.60, 0.60]) {
      rack.add(L.box(0.08, 0.40, 0.08, 0x4f5a60, 4.62, 0.12, z));
    }
    root.add(rack);
    const bike = L.bicycle(0x4b8ea8);
    bike.rotation.y = Math.PI / 2;
    bike.scale.setScalar(0.85);
    bike.position.set(4.72, 0.62, 0);
    root.add(bike);

    // ---------- 外部灯饰钩子 ----------
    const logoMat = emissive(0xffe0a0);
    logoMat.transparent = true;
    root.add(makeMesh(geo.box(0.70, 0.14, 0.04), logoMat, 1.15, 2.72, 1.28));
    const logoGlow = glowSprite(0xffd894, 0.90, 0);
    logoGlow.position.set(1.15, 2.79, 1.34);
    root.add(logoGlow);
    const logoGlowMat = logoGlow.material as THREE.SpriteMaterial;
    breathe('signLight', (v) => {
      logoMat.opacity = 0.35 + v * 0.65;
      logoGlowMat.opacity = v * 0.8;
    }, { base: 0, speed: 0.8 });

    const stepGlow = glowSprite(0xffdca0, 0.70, 0);
    stepGlow.position.set(1.15, 0.52, 1.90);
    root.add(stepGlow);
    const headGlows: THREE.SpriteMaterial[] = [];
    for (const z of [-0.86, 0.86]) {
      const hg = glowSprite(0xffe9b8, 0.55, 0);
      hg.position.set(-4.74, 1.02, z);
      root.add(hg);
      headGlows.push(hg.material as THREE.SpriteMaterial);
    }
    const stepMat = stepGlow.material as THREE.SpriteMaterial;
    breathe('flashlight', (v) => {
      stepMat.opacity = v * 0.7;
      for (const hm of headGlows) hm.opacity = v * 0.6;
    }, { base: 0, speed: 1.4 });

    // ---------- 内饰灯光钩子：interiorWarmth 驱动车内主灯 / 屏幕 / 灯带 ----------
    const cabinLight = new THREE.PointLight(0xffd39a, 0, 10, 2);
    cabinLight.position.set(0.20, 2.35, 0.55);
    root.add(cabinLight);

    const m: Motion = {
      cabinLight, screenMat, stripMat, nightLamp, root,
      warmth: 0.8,
      stripBase: new THREE.Color(1, 0.86, 0.64),
      screenBase: new THREE.Color(0.46, 0.76, 0.86),
    };
    motion = m;
    ctx.decor.bind('interiorWarmth', (v) => {
      m.warmth = v;
      m.cabinLight.intensity = v * 2.1;
      m.stripBase.setRGB(0.35 + v * 0.65, 0.28 + v * 0.58, 0.18 + v * 0.46);
      m.screenBase.setRGB(0.20 + v * 0.26, 0.42 + v * 0.34, 0.52 + v * 0.34);
      m.stripMat.color.copy(m.stripBase);
      m.screenMat.color.copy(m.screenBase);
    });

    return root;
  },

  onTimeChange(next: TimeId, _ctx: VehicleContext): void {
    if (!motion) return;
    // 黄昏 / 夜间车内色温更暖；亮度仍由 interiorWarmth 装饰状态驱动，不在此重复设置
    const warm = next === 'dusk' || next === 'night';
    motion.cabinLight.color.set(warm ? 0xffc98a : 0xffe9c8);
    (motion.nightLamp.material as THREE.SpriteMaterial).color.set(warm ? 0xffc98a : 0xffe9c8);
  },

  update(_dt: number, elapsed: number, env: EnvSnapshot): void {
    if (!motion) return;
    const m = motion;
    const glow = env.glow ?? 1;
    const wind = env.wind?.strength ?? 1;
    // 灯带微亮 / 屏幕微闪，幅度克制；白天由 interiorWarmth 压暗
    const flick = (0.97 + Math.sin(elapsed * 1.4) * 0.03) * (0.75 + glow * 0.25);
    m.stripMat.color.copy(m.stripBase).multiplyScalar(flick);
    const blink = 0.98 + Math.sin(elapsed * 2.6) * 0.02;
    m.screenMat.color.copy(m.screenBase).multiplyScalar(blink);
    // 小夜灯呼吸
    const s = 0.55 + Math.sin(elapsed * 1.1) * 0.06 + m.warmth * 0.12;
    m.nightLamp.scale.setScalar(s);
    // 车体极轻微呼吸（只动 Y，水平占位不变）
    m.root.scale.y = 1 + Math.sin(elapsed * 0.55) * 0.0011 * wind;
  },
};

export default typeA;
