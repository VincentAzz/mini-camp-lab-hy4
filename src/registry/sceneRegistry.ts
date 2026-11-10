import type { SceneId } from '../app/State';
import type { SceneModule, RegistryItem } from './types';

const registry = new Map<SceneId, SceneModule>();

export function registerScene(m: SceneModule): void { registry.set(m.id, m); }
export function getScene(id: SceneId): SceneModule {
  const m = registry.get(id);
  if (!m) throw new Error(`未注册的场景模块: ${id}`);
  return m;
}
export function listScenes(): SceneModule[] { return [...registry.values()]; }
export function sceneItems(): RegistryItem[] {
  return listScenes().map((m) => ({ id: m.id, label: m.label, icon: m.icon }));
}
export function hasScene(id: string): boolean { return registry.has(id as SceneId); }
