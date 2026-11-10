import * as THREE from 'three';
import { textures } from '../core/TextureFactory';
import type { EnvSnapshot } from '../app/State';

const RAIN_COUNT = 420;
const SNOW_COUNT = 380;

function seeded(seed: number): () => number {
  let s = seed >>> 0;
  return () => { s = (s * 1664525 + 1013904223) >>> 0; return s / 4294967296; };
}

/**
 * 天气粒子系统（提示词第五节）：雨丝、雪花、云影、雾气面片。
 * 密度用目标值 + 每帧插值实现平滑过渡，切换天气不生硬跳变。
 */
export class ParticleSystem {
  readonly group = new THREE.Group();
  private rain: THREE.LineSegments;
  private rainMat: THREE.LineBasicMaterial;
  private rainPos: Float32Array;
  private rainAttr: THREE.BufferAttribute;
  private rainSeed: number[] = [];

  private snow: THREE.Points;
  private snowMat: THREE.PointsMaterial;
  private snowPos: Float32Array;
  private snowAttr: THREE.BufferAttribute;
  private snowPhase: number[] = [];

  private cloudShadows: THREE.Mesh[] = [];
  private cloudMat: THREE.MeshBasicMaterial;
  private mist: THREE.Mesh[] = [];
  private mistMat: THREE.MeshBasicMaterial;

  private target = { rain: 0, snow: 0, cloud: 0, mist: 0 };
  private current = { rain: 0, snow: 0, cloud: 0, mist: 0 };

  constructor() {
    this.group.name = 'weather-particles';
    const rnd = seeded(20261110);

    // 雨丝：短线段，快速下落
    this.rainPos = new Float32Array(RAIN_COUNT * 6);
    for (let i = 0; i < RAIN_COUNT; i++) {
      const x = (rnd() - 0.5) * 21;
      const y = rnd() * 14;
      const z = (rnd() - 0.5) * 21;
      const o = i * 6;
      this.rainPos[o] = x; this.rainPos[o + 1] = y; this.rainPos[o + 2] = z;
      this.rainPos[o + 3] = x + 0.055; this.rainPos[o + 4] = y - 0.36; this.rainPos[o + 5] = z;
      this.rainSeed.push(0.8 + rnd() * 0.5);
    }
    const rainGeo = new THREE.BufferGeometry();
    this.rainAttr = new THREE.BufferAttribute(this.rainPos, 3);
    this.rainAttr.setUsage(THREE.DynamicDrawUsage);
    rainGeo.setAttribute('position', this.rainAttr);
    this.rainMat = new THREE.LineBasicMaterial({
      color: 0xc6dcee, transparent: true, opacity: 0, depthWrite: false,
    });
    this.rain = new THREE.LineSegments(rainGeo, this.rainMat);
    this.rain.frustumCulled = false;
    this.rain.visible = false;
    this.group.add(this.rain);

    // 雪花：柔和圆点，缓慢飘落
    this.snowPos = new Float32Array(SNOW_COUNT * 3);
    for (let i = 0; i < SNOW_COUNT; i++) {
      this.snowPos[i * 3] = (rnd() - 0.5) * 21;
      this.snowPos[i * 3 + 1] = rnd() * 14;
      this.snowPos[i * 3 + 2] = (rnd() - 0.5) * 21;
      this.snowPhase.push(rnd() * 6.28);
    }
    const snowGeo = new THREE.BufferGeometry();
    this.snowAttr = new THREE.BufferAttribute(this.snowPos, 3);
    this.snowAttr.setUsage(THREE.DynamicDrawUsage);
    snowGeo.setAttribute('position', this.snowAttr);
    this.snowMat = new THREE.PointsMaterial({
      color: 0xffffff, size: 0.23, map: textures.glow(),
      transparent: true, opacity: 0, depthWrite: false, sizeAttenuation: true,
    });
    this.snow = new THREE.Points(snowGeo, this.snowMat);
    this.snow.frustumCulled = false;
    this.snow.visible = false;
    this.group.add(this.snow);

    // 云影：地面缓慢移动的柔和暗斑
    this.cloudMat = new THREE.MeshBasicMaterial({
      map: textures.glow(), color: 0x3c4a60, transparent: true, opacity: 0,
      depthWrite: false, side: THREE.DoubleSide,
    });
    for (let i = 0; i < 3; i++) {
      const m = new THREE.Mesh(new THREE.PlaneGeometry(11 + i * 3, 7 + i * 2), this.cloudMat);
      m.rotation.x = -Math.PI / 2;
      m.position.set(-6 + i * 6, 0.035 + i * 0.002, -3 + i * 3);
      m.userData.baseX = m.position.x;
      m.userData.speed = 0.12 + i * 0.05;
      m.renderOrder = 2;
      m.visible = false;
      this.cloudShadows.push(m);
      this.group.add(m);
    }

    // 浓雾：几层半透明雾片，压缩景深
    this.mistMat = new THREE.MeshBasicMaterial({
      map: textures.glow(), color: 0xdfe8f0, transparent: true, opacity: 0,
      depthWrite: false, side: THREE.DoubleSide,
    });
    for (let i = 0; i < 3; i++) {
      const m = new THREE.Mesh(new THREE.PlaneGeometry(24, 9), this.mistMat);
      m.position.set(0, 2.6 + i * 1.5, -7 + i * 2.5);
      m.userData.baseX = m.position.x;
      m.visible = false;
      this.mist.push(m);
      this.group.add(m);
    }
  }

  /** 目标密度（0~1），由天气模块设置；内部平滑逼近 */
  set(kind: 'rain' | 'snow' | 'cloud' | 'mist', v: number): void {
    this.target[kind] = Math.max(0, Math.min(1, v));
  }

  immediate(): void {
    this.current = { ...this.target };
  }

  update(dt: number, env: EnvSnapshot): void {
    const k = Math.min(1, dt * 1.8);
    for (const key of ['rain', 'snow', 'cloud', 'mist'] as const) {
      this.current[key] += (this.target[key] - this.current[key]) * k;
    }

    const rain = this.current.rain;
    this.rain.visible = rain > 0.01;
    this.rainMat.opacity = rain * 0.55;
    if (this.rain.visible) {
      const speed = 9.5 * (0.8 + env.wind.strength * 0.35);
      for (let i = 0; i < RAIN_COUNT; i++) {
        const o = i * 6;
        const dy = speed * dt * this.rainSeed[i];
        let y = this.rainPos[o + 1] - dy;
        if (y < 0) y = 12 + (i % 7) * 0.5;
        this.rainPos[o + 1] = y;
        this.rainPos[o + 4] = y - 0.36;
        this.rainPos[o] += env.wind.x * dt * 0.35;
        this.rainPos[o + 3] = this.rainPos[o] + 0.055;
        if (this.rainPos[o] > 11) { this.rainPos[o] = -11; this.rainPos[o + 3] = -10.945; }
      }
      this.rainAttr.needsUpdate = true;
    }

    const snow = this.current.snow;
    this.snow.visible = snow > 0.01;
    this.snowMat.opacity = snow * 0.9;
    if (this.snow.visible) {
      for (let i = 0; i < SNOW_COUNT; i++) {
        const o = i * 3;
        let y = this.snowPos[o + 1] - dt * (0.85 + (i % 5) * 0.13);
        if (y < 0.02) y = 12 + (i % 9) * 0.4;
        this.snowPos[o + 1] = y;
        this.snowPos[o] += Math.sin(env.elapsed * 0.6 + this.snowPhase[i]) * dt * 0.16
                         + env.wind.x * dt * 0.06;
      }
      this.snowAttr.needsUpdate = true;
    }

    const cloud = this.current.cloud;
    this.cloudMat.opacity = cloud * 0.16;
    for (const m of this.cloudShadows) {
      m.visible = cloud > 0.02;
      m.position.x = (m.userData.baseX as number) + Math.sin(env.elapsed * (m.userData.speed as number)) * 2.4;
    }

    const mist = this.current.mist;
    this.mistMat.opacity = mist * 0.28;
    for (const m of this.mist) {
      m.visible = mist > 0.02;
      m.position.x = (m.userData.baseX as number) + Math.sin(env.elapsed * 0.08) * 1.2;
    }
  }
}

export const particles = new ParticleSystem();
