import * as THREE from 'three';
import { toonRamp, textures } from './TextureFactory';

/**
 * 全局材质状态（DESIGN.md §5.1 / §4.4）：湿润、积雪、蒙尘由时间与天气系统写入，
 * 通过共享 uniform 注入所有卡通材质，避免逐物体改材质。
 * 积雪的「上表面覆盖」由 common/SnowCap.ts 的独立薄壳负责，不依赖 shader varying。
 */
export const surfaceUniforms = {
  uWetness: { value: 0 },
  uSnow: { value: 0 },
  uDust: { value: 0 },
};

const matCache = new Map<string, THREE.MeshToonMaterial>();

function injectSurface(mat: THREE.MeshToonMaterial): void {
  mat.onBeforeCompile = (shader) => {
    shader.uniforms.uWetness = surfaceUniforms.uWetness;
    shader.uniforms.uSnow = surfaceUniforms.uSnow;
    shader.uniforms.uDust = surfaceUniforms.uDust;
    shader.fragmentShader = shader.fragmentShader
      .replace(
        'void main() {',
        'uniform float uWetness;\nuniform float uSnow;\nuniform float uDust;\nvoid main() {',
      )
      .replace(
        '#include <dithering_fragment>',
        `
        vec3 wetCol = gl_FragColor.rgb * vec3(0.78, 0.86, 0.98);
        gl_FragColor.rgb = mix(gl_FragColor.rgb, wetCol, uWetness * 0.72);
        gl_FragColor.rgb = mix(gl_FragColor.rgb, gl_FragColor.rgb * vec3(1.0, 1.02, 1.08) + vec3(0.010, 0.014, 0.024), uSnow * 0.30);
        gl_FragColor.rgb = mix(gl_FragColor.rgb, gl_FragColor.rgb * vec3(0.88, 0.84, 0.76) + vec3(0.018, 0.014, 0.006), uDust * 0.60);
        #include <dithering_fragment>`,
      );
  };
}

export interface ToonOptions {
  emissive?: THREE.ColorRepresentation;
  emissiveIntensity?: number;
  map?: THREE.Texture | null;
  transparent?: boolean;
  opacity?: number;
  side?: THREE.Side;
  ramp?: number;
}

/** 主卡通材质：MeshToonMaterial + 程序化渐变色阶 */
export function toon(color: THREE.ColorRepresentation, opts: ToonOptions = {}): THREE.MeshToonMaterial {
  const steps = opts.ramp ?? 4;
  const key = [
    String(color), steps, String(opts.emissive ?? ''), opts.emissiveIntensity ?? 0,
    opts.map?.uuid ?? '', opts.transparent ? 1 : 0, opts.opacity ?? 1, opts.side ?? 0,
  ].join('|');
  const hit = matCache.get(key);
  if (hit) return hit;
  const mat = new THREE.MeshToonMaterial({
    color,
    gradientMap: toonRamp(steps),
    emissive: opts.emissive ?? 0x000000,
    emissiveIntensity: opts.emissiveIntensity ?? 1,
    map: opts.map ?? null,
    transparent: opts.transparent ?? false,
    opacity: opts.opacity ?? 1,
    side: opts.side ?? THREE.FrontSide,
  });
  injectSurface(mat);
  matCache.set(key, mat);
  return mat;
}

const glassCache = new Map<string, THREE.MeshBasicMaterial>();

/** 车窗 / 帐帘：低反射半透，避免遮挡透视内饰（DESIGN.md §4.2） */
export function glass(opacity = 0.24, tint: THREE.ColorRepresentation = 0xbcd8e6): THREE.MeshBasicMaterial {
  const key = `${opacity}|${tint}`;
  let m = glassCache.get(key);
  if (!m) {
    m = new THREE.MeshBasicMaterial({
      color: tint, transparent: true, opacity, depthWrite: false,
      side: THREE.DoubleSide, map: textures.glass(),
    });
    m.polygonOffset = true;
    m.polygonOffsetFactor = -1;
    glassCache.set(key, m);
  }
  return m;
}

/** 自发光体（灯箱、灯带、屏幕）：用 Basic 材质保证不被环境光压暗 */
export function emissive(color: THREE.ColorRepresentation, opacity = 1): THREE.MeshBasicMaterial {
  return new THREE.MeshBasicMaterial({
    color, transparent: opacity < 1, opacity, side: THREE.DoubleSide, toneMapped: false,
  });
}

/** 柔和光晕精灵（夜间灯光 / 灯塔光束 / 浓雾扩散） */
export function glowSprite(color: THREE.ColorRepresentation, size = 1.2, opacity = 0.75): THREE.Sprite {
  const mat = new THREE.SpriteMaterial({
    map: textures.glow(), color, transparent: true, opacity,
    depthWrite: false, blending: THREE.AdditiveBlending, toneMapped: false,
  });
  const s = new THREE.Sprite(mat);
  s.scale.set(size, size, 1);
  s.userData.dynamic = true;
  s.userData.noBounds = true; // 纯视觉光晕不参与布局占位与穿模判定
  return s;
}

/** 描边墨色（非纯黑，随场景微调） */
export function inkColor(hex: THREE.ColorRepresentation = 0x2c3546): THREE.Color {
  return new THREE.Color(hex);
}

export function disposeMaterials(): void {
  for (const m of matCache.values()) m.dispose();
  matCache.clear();
  for (const m of glassCache.values()) m.dispose();
  glassCache.clear();
}
