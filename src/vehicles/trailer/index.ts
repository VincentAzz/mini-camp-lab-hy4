import * as THREE from 'three';
import type { VehicleModule, VehicleContext } from '../../registry/types';
import type { EnvSnapshot, TimeId } from '../../app/State';
import { textures } from '../../core/TextureFactory';
import { geo, makeMesh } from '../../core/GeoFactory';
import { glass, emissive, glowSprite } from '../../core/ToonMaterialFactory';
import { cloth } from '../../common/Cloth';
import { breathe } from '../../common/LightBreath';

/**
 * 拖挂式房车 + 牵引皮卡（提示词 3.3）：唯一双车体车型。
 * 皮卡 x[-5.7,-3.3]、拖挂 x[-3.0,5.6]，中间 0.3 间隙用牵引杆连接，两车 AABB 不相交。
 * 长轴 X / 车头 -X / 露营侧 +Z；落在 halfLength 5.8、deployZ 4.05、height 3.35 内。
 */
interface Motion {
  cabinLight: THREE.PointLight;
  nightLamp: THREE.Sprite;
  screenMat: THREE.MeshBasicMaterial;
}

let motion: Motion | null = null;

const trailer: VehicleModule = {
  id: 'trailer', label: '拖挂房车+皮卡', icon: 'trailer',

  build(ctx: VehicleContext): THREE.Group {
    const L = ctx.lib;
    const root = new THREE.Group();
    root.name = 'vehicle-trailer';
    const white = 0xf3f1e9;
    const truck = 0x4a6b80;
    const wood = 0xc19b6d;

    // ---------- 牵引皮卡 ----------
    const pickup = L.group('pickup');
    pickup.add(L.box(2.35, 0.20, 2.10, 0x4e585e, -4.5, 0.40, 0));
    for (const x of [-5.25, -3.75]) for (const z of [-1.06, 1.06]) {
      const w = L.wheel(0.40, 0.22); w.position.set(x, 0, z); pickup.add(w);
    }
    // 双排驾驶舱
    pickup.add(L.box(1.28, 1.20, 2.06, truck, -4.98, 0.60, 0));
    pickup.add(L.box(1.30, 0.12, 2.10, 0x7d97a8, -4.98, 1.80, 0));
    const truckGlass = makeMesh(geo.plane(1.10, 0.82), glass(0.22), -5.63, 1.42, 0);
    truckGlass.rotation.y = -Math.PI / 2;
    pickup.add(truckGlass);
    for (const z of [-1.05, 1.05]) {
      const side = makeMesh(geo.plane(1.06, 0.68), glass(0.20), -4.98, 1.42, z);
      pickup.add(side);
    }
    // 货斗
    pickup.add(L.box(1.05, 0.52, 2.06, truck, -3.72, 0.60, 0));
    pickup.add(L.box(1.05, 0.06, 2.06, 0x3d586b, -3.72, 1.12, 0));
    // 货斗里：行李箱 / 备用油桶 / 柴火
    pickup.add(L.crate(0.46, 0.34, 0.44, 0xa9885f).translateX(-3.95).translateY(1.18).translateZ(-0.5));
    const drum = L.drum(0.16, 0.42, 0x9a6b4f); drum.position.set(-3.55, 1.18, 0.48); pickup.add(drum);
    for (let i = 0; i < 4; i++) {
      const log = L.cyl(0.045, 0.045, 0.42, 0x8a6642, -3.4, 1.18 + (i % 2) * 0.09, -0.28 + Math.floor(i / 2) * 0.16, 6);
      log.rotation.z = Math.PI / 2;
      pickup.add(log);
    }
    // 皮卡内饰：仪表盘 / 中控屏 / 后座睡袋行李
    pickup.add(L.box(0.34, 0.28, 1.7, 0x404c52, -5.3, 1.0, 0));
    const screenMat = emissive(0x7fc8dc);
    const screen = makeMesh(geo.plane(0.3, 0.22), screenMat, -5.28, 1.4, 0.3);
    screen.rotation.y = -Math.PI / 2;
    pickup.add(screen);
    const sleepingBag = L.box(0.62, 0.16, 0.72, 0x7d8a72, -4.62, 1.02, -0.5);
    pickup.add(sleepingBag);
    root.add(pickup);

    // 牵引杆与连接器（两车之间的可见连接，不与车体穿插）
    root.add(L.box(0.5, 0.10, 0.16, 0x6f7a80, -3.15, 0.48, 0));
    root.add(L.sphere(0.10, 0x8a9498, -3.0, 0.44, 0));

    // ---------- 流线型白色拖挂 ----------
    const caravan = L.group('caravan');
    caravan.add(L.box(8.4, 0.20, 2.50, 0x59636a, 1.3, 0.40, 0));
    for (const x of [0.2, 3.9]) for (const z of [-1.26, 1.26]) {
      const w = L.wheel(0.42, 0.20); w.position.set(x, 0, z); caravan.add(w);
    }
    // 车厢（前端圆润收口用斜面盒近似）
    caravan.add(L.box(8.2, 0.12, 2.36, wood, 1.3, 0.73, 0, textures.wood()));
    caravan.add(L.box(8.2, 1.92, 0.09, white, 1.3, 0.85, -1.18));
    caravan.add(L.box(0.10, 1.92, 2.36, white, 5.4, 0.85, 0));
    caravan.add(L.box(0.10, 1.60, 2.36, white, -2.8, 0.85, 0));
    const nose = L.box(0.7, 1.60, 2.20, white, -2.45, 0.85, 0);
    nose.rotation.z = -0.22;
    caravan.add(nose);
    caravan.add(L.box(8.2, 0.12, 2.36, white, 1.3, 2.77, 0));

    // 两侧大窗（+Z 面可透视）
    caravan.add(L.box(8.2, 0.42, 0.09, white, 1.3, 0.85, 1.18));
    caravan.add(L.box(8.2, 0.22, 0.09, white, 1.3, 2.67, 1.18));
    for (const x of [-2.8, -0.6, 1.6, 3.8, 5.4]) caravan.add(L.box(0.08, 1.40, 0.10, white, x, 1.27, 1.18));
    for (const [x, w] of [[-1.7, 2.1], [0.5, 2.1], [2.7, 2.1], [4.6, 1.4]] as [number, number][]) {
      const win = L.window(w, 1.30, 0x6a7880);
      win.position.set(x, 1.32, 1.24);
      caravan.add(win);
    }

    // 支撑腿放下 / 前部燃气瓶与备胎 / 遮阳棚展开
    for (const x of [-2.2, 4.6]) caravan.add(L.pole(0.05, 0.44, 0x7a8488, x, 0, 0.9));
    for (const z of [-0.45, 0.45]) {
      const bottle = L.cyl(0.14, 0.14, 0.44, 0x9aa8a4, -2.35, 0.6, z, 10);
      caravan.add(bottle);
    }
    // 拖挂前部备胎：轮盘正对 -X 车头方向
    const spare = L.wheel(0.30, 0.15); spare.position.set(-2.5, 0.8, 0); spare.rotation.y = Math.PI / 2; caravan.add(spare);
    {
      const awning = L.group('caravan-awning');
      for (const x of [0.4, 3.6]) awning.add(L.pole(0.032, 2.45, 0x8a9498, x, 0, 3.35));
      // 棚布从拖挂 +Z 车身面 z≈1.24 连续延伸到立柱 z≈3.35，消除中间悬空
      const shade = cloth(3.5, 2.15, 0xe8d9b8, { amplitude: 0.055, key: 'trailerAwning' });
      shade.position.set(2.0, 2.62, 2.30);
      awning.add(shade);
      caravan.add(awning);
    }
    caravan.add(L.box(0.9, 0.08, 0.32, 0x9aa2a6, 2.0, 0.38, 1.6)); // 踏步
    root.add(caravan);

    // ---------- 拖挂内饰（两侧大窗透视）----------
    const inner = L.group('caravan-interior');
    // 尾部横置双人床 + 舷窗
    const bed = L.bed(1.9, 1.6, 0xe8ddc8); bed.position.set(4.35, 0.85, -0.2); inner.add(bed);
    for (const z of [-0.8, 0.4]) {
      const port = makeMesh(new THREE.CircleGeometry(0.18, 12), emissive(0xbcd8e6), 4.35, 1.9, z);
      port.rotation.y = Math.PI / 2;
      inner.add(port);
    }
    // 一侧紧凑厨房与吊柜
    const sink = L.sink(); sink.position.set(0.0, 0.85, -0.86); inner.add(sink);
    const stove = L.stove(); stove.position.set(0.75, 0.85, -0.86); inner.add(stove);
    for (const x of [-0.3, 0.5, 1.3]) {
      const cab = L.cabinet(0.7, 0.38, 0.3, wood); cab.position.set(x, 2.26, -0.94); inner.add(cab);
    }
    // 对坐卡座与可升降小桌板
    const seatA = L.sofa(0.9, 0xc4a17b); seatA.position.set(2.1, 0.85, 0.86); inner.add(seatA);
    const seatB = L.sofa(0.9, 0xc4a17b); seatB.position.set(2.1, 0.85, -0.24); seatB.rotation.y = Math.PI; inner.add(seatB);
    const folding = L.table(0.78, 0.5, 0xb98a5c); folding.position.set(2.1, 0.85, 0.31); inner.add(folding);
    // 小卫生间隔断
    inner.add(L.box(0.06, 1.6, 1.2, 0xd8e0de, -1.5, 0.85, -0.4));
    const basin = L.sink(); basin.position.set(-1.9, 0.85, -0.7); basin.scale.setScalar(0.6); inner.add(basin);
    // 车内串灯与夜灯
    const nightLamp = glowSprite(0xffd79a, 0.6, 0);
    nightLamp.position.set(4.9, 1.4, -0.2);
    inner.add(nightLamp);
    breathe('interiorWarmth', (v) => { (nightLamp.material as THREE.SpriteMaterial).opacity = v * 0.9; }, { base: 0, speed: 1.0 });
    const strip = makeMesh(geo.box(6.4, 0.035, 0.1), emissive(0xffe6b8), 1.3, 2.68, 0.86);
    inner.add(strip);
    root.add(inner);

    // ---------- 内饰灯光钩子 ----------
    const cabinLight = new THREE.PointLight(0xffd39a, 0, 10, 2);
    cabinLight.position.set(1.4, 2.2, 0.5);
    root.add(cabinLight);
    ctx.decor.bind('interiorWarmth', (v) => {
      cabinLight.intensity = v * 1.9;
      screenMat.color.setRGB(0.42 + v * 0.05, 0.72, 0.86);
    });

    motion = { cabinLight, nightLamp, screenMat };
    return root;
  },

  onTimeChange(next: TimeId, _ctx: VehicleContext): void {
    if (!motion) return;
    motion.cabinLight.color.set(next === 'dusk' || next === 'night' ? 0xffd09a : 0xffe9c8);
  },

  update(_dt: number, elapsed: number, env: EnvSnapshot): void {
    if (!motion) return;
    motion.nightLamp.scale.setScalar(0.55 + Math.sin(elapsed * 1.1) * 0.05 + env.interiorWarmth * 0.12);
  },
};

export default trailer;
