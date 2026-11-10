import type { TimePreset } from '../registry/types';
import { DECOR_MATRIX } from './decorStates';

/** 黄昏（默认）：日落金橙 × 海面蓝紫渐变、晚霞、蓝调时刻、暖车内灯 × 冷暮色强对比 */
const dusk: TimePreset = {
  id: 'dusk', label: '黄昏', icon: 'dusk',
  decor: DECOR_MATRIX.dusk,
  light: {
    sunColor: 0xffb06a, sunIntensity: 0.98, sunPosition: [-19, 7, 7],
    hemiSky: 0x8892c8, hemiGround: 0x5a5470, hemiIntensity: 0.55,
    ambientColor: 0x9aa6c8, ambientIntensity: 0.32,
    exposure: 1.00, fogDensity: 0.0022, fogColor: 0xb49aa8,
    sky: {
      top: 0x3b4c86, mid: 0xe8925c, bottom: 0x6a6fa8,
      star: 0.06, cloud: 0.45, cloudTint: 0xffc79a,
      sunColor: 0xffb469, sunHeight: 0.17, sunGlow: 1.00,
    },
    glow: 1.00, interiorWarmth: 0.85,
  },
};
export default dusk;
