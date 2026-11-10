import * as THREE from 'three';
import type {
  SceneId, VehicleId, TimeId, WeatherId, EnvSnapshot,
} from '../app/State';
import type { BasePalette } from '../core/BasePlate';
import type { TimeLightData, WeatherLightData } from '../core/LightingComposer';
import type { LayoutValidator } from '../core/Layout';
import type { Ticker } from '../core/Ticker';
import type { PropsLibrary } from '../common/PropsLibrary';
import type { DecorController, DecorKey } from '../common/DecorController';

/** 装饰物状态（提示词第四节：切换时间不允许只换色调不换内容） */
export type DecorFlags = Partial<Record<DecorKey, number>>;

export interface SceneContext {
  /** 内容根节点：模块把构建好的 Group 挂到这里（或返回由 App 挂载） */
  root: THREE.Group;
  lib: PropsLibrary;
  decor: DecorController;
  layout: LayoutValidator;
  ticker: Ticker;
  env: EnvSnapshot;
}

export type VehicleContext = SceneContext;

/**
 * 场景模块契约（提示词 2.5）：地形 + 道具布置 + 场景动效 + 色彩基调 + 光照钩子。
 * 新增场景 = 新增 src/scenes/<id>/index.ts 并 default export 一个 SceneModule，核心代码零改动。
 */
export interface SceneModule {
  id: SceneId;
  label: string;
  icon: string;
  palette: BasePalette;
  build(ctx: SceneContext): THREE.Group;
  onTimeChange?(next: TimeId, prev: TimeId, ctx: SceneContext): void;
  onWeatherChange?(next: WeatherId, ctx: SceneContext): void;
  update?(dt: number, elapsed: number, env: EnvSnapshot): void;
  dispose?(): void;
}

/**
 * 车型模块契约（提示词 3.6）：外部模型 + 展开机构 + 透视内饰 + 内饰灯光钩子。
 * 两核心特征必须保留：外拓展机构已展开、内部可透过车窗 / 帐帘清楚看到。
 * 约定：车辆长轴沿 X，车头朝 -X，露营侧（窗 / 门 / 遮阳棚 / 拓展舱）朝 +Z 面向默认相机。
 */
export interface VehicleModule {
  id: VehicleId;
  label: string;
  icon: string;
  build(ctx: VehicleContext): THREE.Group;
  onTimeChange?(next: TimeId, ctx: VehicleContext): void;
  update?(dt: number, elapsed: number, env: EnvSnapshot): void;
  dispose?(): void;
}

/** 时间预设：光照预设 + 装饰物状态切换 */
export interface TimePreset {
  id: TimeId;
  label: string;
  icon: string;
  light: TimeLightData;
  decor: DecorFlags;
}

/** 天气模块：光照修正 + 粒子 + 材质状态 */
export interface WeatherModule {
  id: WeatherId;
  label: string;
  icon: string;
  light: WeatherLightData;
  build?(ctx: SceneContext): THREE.Object3D | null;
  update?(dt: number, elapsed: number, env: EnvSnapshot): void;
  dispose?(): void;
}

export interface RegistryItem {
  id: string;
  label: string;
  icon: string;
}
