import type { SceneModule, VehicleModule, TimePreset, WeatherModule } from './types';
import { registerScene, listScenes } from './sceneRegistry';
import { registerVehicle, listVehicles } from './vehicleRegistry';
import { registerTime, listTimes } from './timeRegistry';
import { registerWeather, listWeathers } from './weatherRegistry';

type ModuleFile<T> = { default?: T };

/**
 * 四套注册表自动装配（提示词 2.5 / 3.6 硬性要求）。
 * 用 Vite 的 glob 自动发现模块：新增场景 / 车型 / 时间 / 天气只需新增对应目录与 index.ts
 * 并 default export 模块即可，核心渲染与切换代码、甚至本文件都无需修改。
 * 辅助文件（decorStates / modifiers 等不导出 default）会被自动忽略；_template 目录 likewise。
 */
export function initRegistries(): void {
  const scenes = import.meta.glob<ModuleFile<SceneModule>>('../scenes/*/index.ts', { eager: true });
  for (const [path, file] of Object.entries(scenes)) {
    if (path.includes('_template')) continue;
    if (file.default) registerScene(file.default);
  }

  const vehicles = import.meta.glob<ModuleFile<VehicleModule>>('../vehicles/*/index.ts', { eager: true });
  for (const [path, file] of Object.entries(vehicles)) {
    if (path.includes('_template')) continue;
    if (file.default) registerVehicle(file.default);
  }

  const times = import.meta.glob<ModuleFile<TimePreset>>('../times/*.ts', { eager: true });
  for (const [, file] of Object.entries(times)) if (file.default) registerTime(file.default);

  const weathers = import.meta.glob<ModuleFile<WeatherModule>>('../weathers/*.ts', { eager: true });
  for (const [, file] of Object.entries(weathers)) if (file.default) registerWeather(file.default);
}

export function registrySummary(): string {
  return `场景 ${listScenes().length} / 车型 ${listVehicles().length} / 时间 ${listTimes().length} / 天气 ${listWeathers().length}`;
}
