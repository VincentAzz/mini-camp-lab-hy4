import type { TimePreset } from '../registry/types';
import { DECOR_MATRIX } from './decorStates';

/** 白天：明亮柔和正午光、干净饱和、短而清晰阴影、灯具全熄、炊烟与蒸汽 */
const daytime: TimePreset = {
  id: 'daytime', label: '白天', icon: 'day',
  decor: DECOR_MATRIX.daytime,
  light: {
    sunColor: 0xfff4dd, sunIntensity: 1.35, sunPosition: [-6, 27, 9],
    hemiSky: 0xbfe0f2, hemiGround: 0x7a8068, hemiIntensity: 0.72,
    ambientColor: 0xffffff, ambientIntensity: 0.38,
    exposure: 1.06, fogDensity: 0.0006, fogColor: 0xdce9f0,
    sky: {
      top: 0x6fa8dc, mid: 0xbfe0f2, bottom: 0xdbeaf2,
      star: 0, cloud: 0.35, cloudTint: 0xffffff,
      sunColor: 0xfff6d8, sunHeight: 0.85, sunGlow: 0.70,
    },
    glow: 0.55, interiorWarmth: 0.05,
  },
};
export default daytime;
