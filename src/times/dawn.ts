import type { TimePreset } from '../registry/types';
import { DECOR_MATRIX } from './decorStates';

/** 清晨：低角度青金色晨光、薄雾、长投影、营地灯将熄未熄、早餐餐具、露水高光 */
const dawn: TimePreset = {
  id: 'dawn', label: '清晨', icon: 'dawn',
  decor: DECOR_MATRIX.dawn,
  light: {
    sunColor: 0xffd9a8, sunIntensity: 0.88, sunPosition: [-17, 9, 11],
    hemiSky: 0xcfe2f2, hemiGround: 0x6d7a72, hemiIntensity: 0.62,
    ambientColor: 0xd8e6f0, ambientIntensity: 0.34,
    exposure: 0.98, fogDensity: 0.0060, fogColor: 0xd6e2e8,
    sky: {
      top: 0x7fa6c9, mid: 0xf2c9a0, bottom: 0xa8bfd2,
      star: 0.12, cloud: 0.30, cloudTint: 0xfff0dc,
      sunColor: 0xffe3b0, sunHeight: 0.22, sunGlow: 0.50,
    },
    glow: 0.75, interiorWarmth: 0.25,
  },
};
export default dawn;
