export type SceneId = 'seaCliff' | 'pineForest' | 'wasteland' | 'highwaySA';
export type VehicleId = 'typeC' | 'typeA' | 'trailer' | 'van' | 'overland';
export type TimeId = 'dawn' | 'daytime' | 'dusk' | 'night';
export type WeatherId = 'clear' | 'cloudy' | 'rain' | 'fog' | 'snow';
export type Dimension = 'scene' | 'vehicle' | 'time' | 'weather';

export interface ComboState {
  scene: SceneId;
  vehicle: VehicleId;
  time: TimeId;
  weather: WeatherId;
}

/** 第十一节：默认第一眼印象 */
export const DEFAULT_COMBO: ComboState = {
  scene: 'seaCliff',
  vehicle: 'typeC',
  time: 'dusk',
  weather: 'clear',
};

export const DIMENSIONS: readonly Dimension[] = ['scene', 'vehicle', 'time', 'weather'];

/** 每帧传给所有内容模块的综合环境快照（时间 × 天气 × 场景合成结果） */
export interface EnvSnapshot {
  scene: SceneId;
  vehicle: VehicleId;
  time: TimeId;
  weather: WeatherId;
  wind: { x: number; z: number; strength: number };
  wetness: number;
  snow: number;
  dust: number;
  clothSag: number;
  glow: number;
  exposure: number;
  fogDensity: number;
  interiorWarmth: number;
  elapsed: number;
}

export function createEnv(): EnvSnapshot {
  return {
    scene: DEFAULT_COMBO.scene,
    vehicle: DEFAULT_COMBO.vehicle,
    time: DEFAULT_COMBO.time,
    weather: DEFAULT_COMBO.weather,
    wind: { x: 1, z: 0.25, strength: 1 },
    wetness: 0,
    snow: 0,
    dust: 0,
    clothSag: 0,
    glow: 1,
    exposure: 1,
    fogDensity: 0,
    interiorWarmth: 0.8,
    elapsed: 0,
  };
}
