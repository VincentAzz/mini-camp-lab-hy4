import * as THREE from 'three';
import type { SkySpec } from './Sky';

/** 时间预设提供的基准光照（DESIGN.md §4.3 光照预设表） */
export interface TimeLightData {
  sunColor: THREE.ColorRepresentation;
  sunIntensity: number;
  sunPosition: [number, number, number];
  hemiSky: THREE.ColorRepresentation;
  hemiGround: THREE.ColorRepresentation;
  hemiIntensity: number;
  ambientColor: THREE.ColorRepresentation;
  ambientIntensity: number;
  exposure: number;
  fogDensity: number;
  fogColor: THREE.ColorRepresentation;
  sky: SkySpec;
  glow: number;
  interiorWarmth: number;
}

/** 天气对基准光照的修正（DESIGN.md §4.4） */
export interface WeatherLightData {
  intensity: number;
  ambientDelta: number;
  fogDensity: number;
  glow: number;
  exposure: number;
  windScale: number;
  wetness: number;
  snow: number;
  dust: number;
  clothSag: number;
  cloud: number;
  saturation: number;
}

/** 四维合成后的完整环境参数 */
export interface LightSpec extends TimeLightData {
  windScale: number;
  wetness: number;
  snow: number;
  dust: number;
  clothSag: number;
  saturation: number;
}

const num = (a: number, b: number, t: number): number => a + (b - a) * t;
const col = (a: THREE.ColorRepresentation, b: THREE.ColorRepresentation, t: number): THREE.Color =>
  new THREE.Color(a).lerp(new THREE.Color(b), t);
const vec3 = (a: [number, number, number], b: [number, number, number], t: number): [number, number, number] =>
  [num(a[0], b[0], t), num(a[1], b[1], t), num(a[2], b[2], t)];

function lerpSky(a: SkySpec, b: SkySpec, t: number): SkySpec {
  return {
    top: col(a.top, b.top, t),
    mid: col(a.mid, b.mid, t),
    bottom: col(a.bottom, b.bottom, t),
    star: num(a.star, b.star, t),
    cloud: num(a.cloud, b.cloud, t),
    cloudTint: col(a.cloudTint, b.cloudTint, t),
    sunColor: col(a.sunColor, b.sunColor, t),
    sunHeight: num(a.sunHeight, b.sunHeight, t),
    sunGlow: num(a.sunGlow, b.sunGlow, t),
  };
}

export function lerpSpec(a: LightSpec, b: LightSpec, t: number): LightSpec {
  return {
    sunColor: col(a.sunColor, b.sunColor, t),
    sunIntensity: num(a.sunIntensity, b.sunIntensity, t),
    sunPosition: vec3(a.sunPosition, b.sunPosition, t),
    hemiSky: col(a.hemiSky, b.hemiSky, t),
    hemiGround: col(a.hemiGround, b.hemiGround, t),
    hemiIntensity: num(a.hemiIntensity, b.hemiIntensity, t),
    ambientColor: col(a.ambientColor, b.ambientColor, t),
    ambientIntensity: num(a.ambientIntensity, b.ambientIntensity, t),
    exposure: num(a.exposure, b.exposure, t),
    fogDensity: num(a.fogDensity, b.fogDensity, t),
    fogColor: col(a.fogColor, b.fogColor, t),
    sky: lerpSky(a.sky, b.sky, t),
    glow: num(a.glow, b.glow, t),
    interiorWarmth: num(a.interiorWarmth, b.interiorWarmth, t),
    windScale: num(a.windScale, b.windScale, t),
    wetness: num(a.wetness, b.wetness, t),
    snow: num(a.snow, b.snow, t),
    dust: num(a.dust, b.dust, t),
    clothSag: num(a.clothSag, b.clothSag, t),
    saturation: num(a.saturation, b.saturation, t),
  };
}

/** 时间给基准、天气给乘性 / 加性修正（DESIGN.md §3.4 正交合成公式） */
export function compose(time: TimeLightData, weather: WeatherLightData): LightSpec {
  return {
    ...time,
    sunIntensity: time.sunIntensity * weather.intensity,
    ambientIntensity: Math.max(0.05, time.ambientIntensity + weather.ambientDelta),
    fogDensity: Math.max(time.fogDensity, weather.fogDensity),
    glow: time.glow * weather.glow,
    exposure: time.exposure * weather.exposure,
    sky: { ...time.sky, cloud: Math.max(time.sky.cloud, weather.cloud) },
    windScale: weather.windScale,
    wetness: weather.wetness,
    snow: weather.snow,
    dust: weather.dust,
    clothSag: weather.clothSag,
    saturation: weather.saturation,
  };
}

function ease(t: number): number {
  return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
}

/**
 * 光照合成器：1~2 秒交叉淡入淡出（提示词第四节第 5 点）。
 * 所有参数在同一条时间轴上插值，避免「只换色调」或过渡瞬间两套光源叠加过曝。
 */
export class LightingComposer {
  readonly sun: THREE.DirectionalLight;
  readonly hemi: THREE.HemisphereLight;
  readonly ambient: THREE.AmbientLight;
  private skyApply: (spec: SkySpec) => void;
  private fog: THREE.FogExp2;
  private renderer: THREE.WebGLRenderer;

  private from!: LightSpec;
  private to!: LightSpec;
  private current!: LightSpec;
  private t = 1;
  private duration = 1.6;

  constructor(
    scene: THREE.Scene,
    renderer: THREE.WebGLRenderer,
    skyApply: (spec: SkySpec) => void,
  ) {
    this.renderer = renderer;
    this.skyApply = skyApply;

    this.sun = new THREE.DirectionalLight(0xffd9a8, 1.1);
    this.sun.position.set(-14, 18, 12);
    this.sun.castShadow = true;
    this.sun.shadow.mapSize.set(1024, 1024);
    this.sun.shadow.camera.left = -15;
    this.sun.shadow.camera.right = 15;
    this.sun.shadow.camera.top = 15;
    this.sun.shadow.camera.bottom = -15;
    this.sun.shadow.camera.near = 0.5;
    this.sun.shadow.camera.far = 70;
    this.sun.shadow.bias = -0.0007;
    this.sun.shadow.normalBias = 0.022;
    scene.add(this.sun);
    scene.add(this.sun.target);

    this.hemi = new THREE.HemisphereLight(0xbcd6f0, 0x6b6a5c, 0.55);
    scene.add(this.hemi);

    this.ambient = new THREE.AmbientLight(0xffffff, 0.28);
    scene.add(this.ambient);

    this.fog = new THREE.FogExp2(0xa8b8cc, 0.0001);
    scene.fog = this.fog;
  }

  set(spec: LightSpec, immediate = false): void {
    if (!this.current || immediate) {
      this.from = spec;
      this.to = spec;
      this.current = spec;
      this.t = 1;
      this.apply(spec);
    } else {
      this.from = this.current;
      this.to = spec;
      this.t = 0;
      this.duration = 1.6;
    }
  }

  update(dt: number): LightSpec {
    if (this.t < 1) {
      this.t = Math.min(1, this.t + dt / this.duration);
      this.current = lerpSpec(this.from, this.to, ease(this.t));
      this.apply(this.current);
    }
    return this.current;
  }

  get spec(): LightSpec { return this.current; }
  get transitioning(): boolean { return this.t < 1; }

  private apply(s: LightSpec): void {
    this.sun.color.set(s.sunColor);
    this.sun.intensity = s.sunIntensity;
    this.sun.position.set(...s.sunPosition);
    this.hemi.color.set(s.hemiSky);
    this.hemi.groundColor.set(s.hemiGround);
    this.hemi.intensity = s.hemiIntensity;
    this.ambient.color.set(s.ambientColor);
    this.ambient.intensity = s.ambientIntensity;
    this.renderer.toneMappingExposure = s.exposure;
    this.fog.color.set(s.fogColor);
    this.fog.density = Math.max(0.00001, s.fogDensity);
    this.skyApply(s.sky);
  }
}
