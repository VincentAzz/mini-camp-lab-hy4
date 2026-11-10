import type { VehicleId } from '../app/State';
import type { VehicleModule, RegistryItem } from './types';

const registry = new Map<VehicleId, VehicleModule>();

export function registerVehicle(m: VehicleModule): void { registry.set(m.id, m); }
export function getVehicle(id: VehicleId): VehicleModule {
  const m = registry.get(id);
  if (!m) throw new Error(`未注册的车型模块: ${id}`);
  return m;
}
export function listVehicles(): VehicleModule[] { return [...registry.values()]; }
export function vehicleItems(): RegistryItem[] {
  return listVehicles().map((m) => ({ id: m.id, label: m.label, icon: m.icon }));
}
export function hasVehicle(id: string): boolean { return registry.has(id as VehicleId); }
