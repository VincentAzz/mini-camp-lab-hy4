export interface Zone {
  minX: number; maxX: number; minZ: number; maxZ: number; cols: number; rows: number;
}
export type ZoneId = 'front' | 'back' | 'left' | 'right' | 'far' | 'backFar';
export interface Box2 { minX: number; maxX: number; minZ: number; maxZ: number; }
export interface PlacementSpec {
  id: string;
  zone: ZoneId;
  cell: [number, number];
  span?: [number, number];
  h: number;
  kind: string;
  label: string;
}
export interface ResolvedPlacement extends PlacementSpec {
  x: number; z: number; w: number; d: number;
  box: Box2;
  slot: Box2;
}
export interface VehicleFootprint {
  halfLength: number; halfWidth: number; height: number; deployZ: number; deployMinusZ: number;
}
export const BASE: Readonly<{
  size: number; half: number; inner: number; groundY: number; thickness: number; rim: number;
}>;
export const KEEP_OUT: Readonly<Box2>;
export const ZONES: Readonly<Record<ZoneId, Zone>>;
export const VEHICLES: Readonly<Record<string, VehicleFootprint>>;
export const SCENE_LAYOUTS: Readonly<Record<string, readonly PlacementSpec[]>>;
export const REQUIRED_IDS: Readonly<Record<string, readonly string[]>>;
export const CELL_INSET: number;
export function placementFor(spec: PlacementSpec): ResolvedPlacement;
export function resolveScene(sceneId: string): ResolvedPlacement[];
export function validateAll(): string[];
