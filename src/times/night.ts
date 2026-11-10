import type { TimePreset } from '../registry/types';
import { DECOR_MATRIX } from './decorStates';

/** 夜间：月光与星空主导、深蓝紫环境、所有灯光点亮并带柔和光晕、车内暖光成为焦点 */
const night: TimePreset = {
  id: 'night', label: '夜间', icon: 'night',
  decor: DECOR_MATRIX.night,
  light: {
    sunColor: 0x9fb6e8, sunIntensity: 0.30, sunPosition: [11, 21, -13],
    hemiSky: 0x2b3b68, hemiGround: 0x1c2740, hemiIntensity: 0.34,
    ambientColor: 0x3d4c7a, ambientIntensity: 0.22,
    exposure: 0.82, fogDensity: 0.0035, fogColor: 0x2b3a5c,
    sky: {
      top: 0x0e1a38, mid: 0x26345e, bottom: 0x3c4a72,
      star: 1, cloud: 0.25, cloudTint: 0x7a89ad,
      sunColor: 0xdfe8ff, sunHeight: 0.66, sunGlow: 0.35,
    },
    glow: 1.35, interiorWarmth: 1,
  },
};
export default night;
