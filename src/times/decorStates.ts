import type { TimeId } from '../app/State';
import type { DecorFlags } from '../registry/types';

/**
 * 装饰物状态矩阵（DESIGN.md §4.3 / 提示词第四节）。
 * 「切换时间不允许只换色调不换内容」的落地：每个 key 是 0~1 的连续强度，
 * 由 DecorController 补间，灯光呼吸、显隐、粒子密度统一订阅。
 */
export const DECOR_MATRIX: Record<TimeId, DecorFlags> = {
  dawn: {
    campLamp: 0.20, stringLight: 0.10, ember: 0.35, breakfastSet: 1,
    smoke: 0.25, steam: 0.20, signLight: 0.50, searchLight: 0.35,
    warningLight: 0, lighthouse: 0.20, dewHighlight: 1, interiorWarmth: 0.20,
    vendingLight: 0.35, trafficLight: 0.30, storeLight: 0.55, flashlight: 0.30,
    fire: 0.20, dustMote: 0.25, awningCloth: 1, flagCloth: 1, cloudShadow: 0.10,
  },
  daytime: {
    campLamp: 0, stringLight: 0, ember: 0, breakfastSet: 0,
    smoke: 1, steam: 1, signLight: 0, searchLight: 0,
    warningLight: 0, lighthouse: 0, dewHighlight: 0, interiorWarmth: 0,
    vendingLight: 0.45, trafficLight: 0.20, storeLight: 0.15, flashlight: 0,
    fire: 0, dustMote: 0.15, awningCloth: 1, flagCloth: 1, cloudShadow: 0.35,
  },
  dusk: {
    campLamp: 0.80, stringLight: 1, ember: 0.75, breakfastSet: 0,
    smoke: 0.50, steam: 0.60, signLight: 0.60, searchLight: 0.65,
    warningLight: 0.60, lighthouse: 0.85, dewHighlight: 0, interiorWarmth: 0.80,
    vendingLight: 0.85, trafficLight: 0.75, storeLight: 0.80, flashlight: 0.75,
    fire: 0.85, dustMote: 0.45, awningCloth: 1, flagCloth: 1, cloudShadow: 0.25,
  },
  night: {
    campLamp: 1, stringLight: 1, ember: 1, breakfastSet: 0,
    smoke: 0.30, steam: 0.45, signLight: 1, searchLight: 1,
    warningLight: 1, lighthouse: 1, dewHighlight: 0, interiorWarmth: 1,
    vendingLight: 1, trafficLight: 1, storeLight: 1, flashlight: 1,
    fire: 1, dustMote: 0.85, awningCloth: 1, flagCloth: 1, cloudShadow: 0,
  },
};
