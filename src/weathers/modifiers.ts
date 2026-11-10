import type { WeatherId } from '../app/State';
import type { WeatherLightData } from '../core/LightingComposer';

/**
 * 天气光照 / 材质修正（DESIGN.md §4.4）。
 * 时间给基准、天气给乘性与加性修正，由 LightingComposer.compose() 统一叠加。
 * 夜间浓雾 = 更暗 + 更强光晕 + 更强雾化；夜间小雨 = 冷蓝紫 + 湿地面彩色反光。
 */
export const WEATHER_MODIFIERS: Record<WeatherId, WeatherLightData> = {
  clear: {
    intensity: 1.00, ambientDelta: 0.00, fogDensity: 0.0008, glow: 1.00,
    exposure: 1.00, windScale: 1.00, wetness: 0, snow: 0, dust: 0,
    clothSag: 0, cloud: 0.05, saturation: 1.00,
  },
  cloudy: {
    intensity: 0.80, ambientDelta: 0.06, fogDensity: 0.0018, glow: 1.05,
    exposure: 0.96, windScale: 1.30, wetness: 0, snow: 0, dust: 0,
    clothSag: 0, cloud: 0.72, saturation: 0.95,
  },
  rain: {
    intensity: 0.65, ambientDelta: 0.10, fogDensity: 0.0032, glow: 1.20,
    exposure: 0.88, windScale: 1.50, wetness: 1, snow: 0, dust: 0,
    clothSag: 1, cloud: 0.80, saturation: 0.88,
  },
  fog: {
    intensity: 0.70, ambientDelta: 0.08, fogDensity: 0.0160, glow: 1.60,
    exposure: 0.90, windScale: 0.60, wetness: 0.20, snow: 0, dust: 0,
    clothSag: 0, cloud: 0.55, saturation: 0.85,
  },
  snow: {
    intensity: 0.75, ambientDelta: 0.14, fogDensity: 0.0040, glow: 1.15,
    exposure: 0.98, windScale: 0.80, wetness: 0, snow: 1, dust: 0,
    clothSag: 0.30, cloud: 0.50, saturation: 0.90,
  },
};

/** 天气 → 粒子目标密度 */
export const PARTICLE_DENSITY: Record<WeatherId, { rain: number; snow: number; cloud: number; mist: number }> = {
  clear:  { rain: 0, snow: 0, cloud: 0.05, mist: 0 },
  cloudy: { rain: 0, snow: 0, cloud: 0.75, mist: 0 },
  rain:   { rain: 1, snow: 0, cloud: 0.60, mist: 0.15 },
  fog:    { rain: 0, snow: 0, cloud: 0.35, mist: 1 },
  snow:   { rain: 0, snow: 1, cloud: 0.40, mist: 0.20 },
};
