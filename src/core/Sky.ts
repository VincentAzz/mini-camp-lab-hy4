import * as THREE from 'three';
import { textures } from './TextureFactory';

export interface SkySpec {
  top: THREE.ColorRepresentation;
  mid: THREE.ColorRepresentation;
  bottom: THREE.ColorRepresentation;
  star: number;
  cloud: number;
  cloudTint: THREE.ColorRepresentation;
  sunColor: THREE.ColorRepresentation;
  sunHeight: number;
  sunGlow: number;
}

const vertexShader = `
varying vec3 vDir;
void main() {
  vDir = normalize(position);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`;

const fragmentShader = `
uniform vec3 uTop;
uniform vec3 uMid;
uniform vec3 uBottom;
varying vec3 vDir;
void main() {
  float h = vDir.y;
  vec3 c = h >= 0.0
    ? mix(uMid, uTop, pow(clamp(h, 0.0, 1.0), 0.62))
    : mix(uMid, uBottom, pow(clamp(-h, 0.0, 1.0), 0.45));
  gl_FragColor = vec4(c, 1.0);
}`;

/** 渐变天空球 + 星空 + 云层 + 日月光晕（DESIGN.md §5.4） */
export class Sky {
  readonly group = new THREE.Group();
  private uniforms = {
    uTop: { value: new THREE.Color(0x4a6fa5) },
    uMid: { value: new THREE.Color(0xe0a978) },
    uBottom: { value: new THREE.Color(0x6a7fa8) },
  };
  private stars: THREE.Points;
  private starMat: THREE.PointsMaterial;
  private clouds: THREE.Sprite[] = [];
  private cloudMats: THREE.SpriteMaterial[] = [];
  private sun: THREE.Sprite;
  private sunMat: THREE.SpriteMaterial;
  private disc: THREE.Mesh;
  private discMat: THREE.MeshBasicMaterial;
  private elapsed = 0;

  constructor() {
    this.group.name = 'sky';

    const dome = new THREE.Mesh(
      new THREE.SphereGeometry(135, 32, 20),
      new THREE.ShaderMaterial({
        uniforms: this.uniforms,
        vertexShader, fragmentShader,
        side: THREE.BackSide, depthWrite: false, fog: false,
      }),
    );
    dome.renderOrder = -1000;
    dome.frustumCulled = false;
    this.group.add(dome);

    // 星空：上半球随机点，夜间由 opacity 控制
    const pts: number[] = [];
    let seed = 20261110;
    const rand = () => { seed = (seed * 1664525 + 1013904223) >>> 0; return seed / 4294967296; };
    for (let i = 0; i < 420; i++) {
      const a = rand() * Math.PI * 2;
      const y = 0.06 + rand() * 0.9;
      const r = Math.sqrt(1 - y * y);
      pts.push(Math.cos(a) * r * 118, y * 118, Math.sin(a) * r * 118);
    }
    const starGeo = new THREE.BufferGeometry();
    starGeo.setAttribute('position', new THREE.Float32BufferAttribute(pts, 3));
    this.starMat = new THREE.PointsMaterial({
      color: 0xfff6dc, size: 1.05, sizeAttenuation: true,
      transparent: true, opacity: 0, depthWrite: false, fog: false,
    });
    this.stars = new THREE.Points(starGeo, this.starMat);
    this.stars.renderOrder = -999;
    this.stars.frustumCulled = false;
    this.group.add(this.stars);

    // 云层：柔和光晕精灵压扁成云团，随时间缓慢横移
    for (let i = 0; i < 9; i++) {
      const mat = new THREE.SpriteMaterial({
        map: textures.glow(), color: 0xffffff, transparent: true, opacity: 0,
        depthWrite: false, fog: false,
      });
      const sp = new THREE.Sprite(mat);
      const w = 22 + rand() * 26;
      sp.scale.set(w, w * 0.24, 1);
      const a = (i / 9) * Math.PI * 2 + rand() * 0.5;
      sp.position.set(Math.cos(a) * 96, 18 + rand() * 36, Math.sin(a) * 96);
      sp.userData.baseX = sp.position.x;
      sp.userData.speed = 0.35 + rand() * 0.5;
      sp.renderOrder = -998;
      this.clouds.push(sp);
      this.cloudMats.push(mat);
      this.group.add(sp);
    }

    // 日 / 月
    this.sunMat = new THREE.SpriteMaterial({
      map: textures.glow(), color: 0xffd8a0, transparent: true, opacity: 0.6,
      depthWrite: false, blending: THREE.AdditiveBlending, fog: false,
    });
    this.sun = new THREE.Sprite(this.sunMat);
    this.sun.scale.set(26, 26, 1);
    this.sun.renderOrder = -997;
    this.group.add(this.sun);

    this.discMat = new THREE.MeshBasicMaterial({ color: 0xffe7b8, fog: false, toneMapped: false });
    this.disc = new THREE.Mesh(new THREE.CircleGeometry(2.6, 24), this.discMat);
    this.disc.renderOrder = -996;
    this.group.add(this.disc);
  }

  apply(spec: SkySpec): void {
    this.uniforms.uTop.value.set(spec.top);
    this.uniforms.uMid.value.set(spec.mid);
    this.uniforms.uBottom.value.set(spec.bottom);
    this.starMat.opacity = Math.max(0, Math.min(1, spec.star));
    this.sunMat.color.set(spec.sunColor);
    this.sunMat.opacity = 0.22 + spec.sunGlow * 0.55;
    this.discMat.color.set(spec.sunColor);
    const y = spec.sunHeight * 62 - 6;
    const x = -78, z = -46;
    this.sun.position.set(x, y, z);
    this.disc.position.set(x * 0.92, y, z * 0.92);
    this.disc.lookAt(0, y, 0);
    const cloudColor = new THREE.Color(spec.cloudTint);
    for (let i = 0; i < this.cloudMats.length; i++) {
      this.cloudMats[i].color.copy(cloudColor);
      this.cloudMats[i].opacity = spec.cloud * (0.16 + (i % 3) * 0.05);
    }
  }

  update(dt: number, env?: { elapsed: number; wind?: { strength: number } }): void {
    this.elapsed += dt;
    const t = env?.elapsed ?? this.elapsed;
    const wind = env?.wind?.strength ?? 1;
    for (const sp of this.clouds) {
      const base = sp.userData.baseX as number;
      const speed = sp.userData.speed as number;
      sp.position.x = base + Math.sin(t * 0.035 * speed * wind) * 12;
    }
    this.starMat.opacity *= 1 + Math.sin(t * 0.7) * 0.002;
  }
}
