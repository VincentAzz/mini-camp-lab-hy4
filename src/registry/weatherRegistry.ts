import type { WeatherId } from '../app/State';
import type { WeatherModule, RegistryItem } from './types';

const registry = new Map<WeatherId, WeatherModule>();

export function registerWeather(m: WeatherModule): void { registry.set(m.id, m); }
export function getWeather(id: WeatherId): WeatherModule {
  const m = registry.get(id);
  if (!m) throw new Error(`未注册的天气模块: ${id}`);
  return m;
}
export function listWeathers(): WeatherModule[] { return [...registry.values()]; }
export function weatherItems(): RegistryItem[] {
  return listWeathers().map((m) => ({ id: m.id, label: m.label, icon: m.icon }));
}
export function hasWeather(id: string): boolean { return registry.has(id as WeatherId); }
