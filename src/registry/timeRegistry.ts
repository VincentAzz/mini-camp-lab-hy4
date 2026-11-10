import type { TimeId } from '../app/State';
import type { TimePreset, RegistryItem } from './types';

const registry = new Map<TimeId, TimePreset>();

export function registerTime(m: TimePreset): void { registry.set(m.id, m); }
export function getTime(id: TimeId): TimePreset {
  const m = registry.get(id);
  if (!m) throw new Error(`未注册的时间预设: ${id}`);
  return m;
}
export function listTimes(): TimePreset[] { return [...registry.values()]; }
export function timeItems(): RegistryItem[] {
  return listTimes().map((m) => ({ id: m.id, label: m.label, icon: m.icon }));
}
export function hasTime(id: string): boolean { return registry.has(id as TimeId); }
