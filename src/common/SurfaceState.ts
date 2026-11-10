import { surfaceUniforms } from '../core/ToonMaterialFactory';
import type { LightSpec } from '../core/LightingComposer';

/** 每帧把合成后的湿润 / 积雪 / 蒙尘状态写入共享材质 uniform（DESIGN.md §4.4） */
export function applySurface(spec: LightSpec): void {
  surfaceUniforms.uWetness.value = spec.wetness;
  surfaceUniforms.uSnow.value = spec.snow;
  surfaceUniforms.uDust.value = spec.dust;
}

export function surfaceDebug(): { wetness: number; snow: number; dust: number } {
  return {
    wetness: surfaceUniforms.uWetness.value,
    snow: surfaceUniforms.uSnow.value,
    dust: surfaceUniforms.uDust.value,
  };
}
