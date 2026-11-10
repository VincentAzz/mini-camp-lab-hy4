import * as THREE from 'three';
import {
  DEFAULT_COMBO, createEnv,
  type ComboState, type SceneId, type VehicleId, type TimeId, type WeatherId, type EnvSnapshot,
} from './State';
import { SwitchController, type SwitchHost } from './SwitchController';
import { initRegistries, registrySummary } from '../registry';
import { getScene } from '../registry/sceneRegistry';
import { getVehicle } from '../registry/vehicleRegistry';
import { getTime } from '../registry/timeRegistry';
import { getWeather } from '../registry/weatherRegistry';
import type { SceneModule, VehicleModule, SceneContext } from '../registry/types';
import { RenderCore } from '../core/Renderer';
import { CameraRig } from '../core/CameraRig';
import { Sky } from '../core/Sky';
import { LightingComposer, compose } from '../core/LightingComposer';
import { BasePlate } from '../core/BasePlate';
import { Ticker } from '../core/Ticker';
import { DebugPanel } from '../core/Debug';
import { transition } from '../core/Transition';
import { outlineGroup } from '../core/OutlineFactory';
import { layout } from '../core/Layout';
import { PropsLibrary } from '../common/PropsLibrary';
import { DecorController } from '../common/DecorController';
import { clearCloths, updateCloths } from '../common/Cloth';
import { clearLightBreath, updateLightBreath } from '../common/LightBreath';
import { wind } from '../common/Wind';
import { applySurface } from '../common/SurfaceState';
import { snowCaps } from '../common/SnowCap';
import { particles } from '../common/Particles';
import { PARTICLE_DENSITY } from '../weathers/modifiers';
import { ControlPanel } from '../ui/ControlPanel';
import { ComboTitle } from '../ui/ComboTitle';
import { UiToggle } from '../ui/UiToggle';

/** 释放切换时新建的几何（共享缓存的 geometry / material 由工厂统一管理，不在此释放） */
function releaseGroup(obj: THREE.Object3D): void {
  obj.traverse((o) => {
    if (o instanceof THREE.Mesh && (o.userData.isOutline || o.userData.merged)) {
      o.geometry.dispose();
    }
  });
  obj.removeFromParent();
}

export class App {
  private core: RenderCore;
  private rig: CameraRig;
  private sky: Sky;
  private lighting: LightingComposer;
  private base: BasePlate;
  private lib = new PropsLibrary();
  private decor = new DecorController();
  private ticker = new Ticker();

  private sceneGroup: THREE.Group | null = null;
  private vehicleGroup: THREE.Group | null = null;
  private sceneModule: SceneModule | null = null;
  private vehicleModule: VehicleModule | null = null;

  private currentScene: SceneId = DEFAULT_COMBO.scene;
  private currentVehicle: VehicleId = DEFAULT_COMBO.vehicle;
  private currentTime: TimeId = DEFAULT_COMBO.time;
  private currentWeather: WeatherId = DEFAULT_COMBO.weather;

  private env: EnvSnapshot = createEnv();
  private panel!: ControlPanel;
  private title!: ComboTitle;
  private toggle!: UiToggle;
  private debug!: DebugPanel;
  private switcher!: SwitchController;
  private veilHost!: HTMLElement;

  private last = performance.now();
  private staticIssues: string[] = [];
  private runtimeIssues: string[] = [];

  constructor(canvas: HTMLCanvasElement, uiRoot: HTMLElement) {
    initRegistries();
    this.staticIssues = layout.staticCheck();
    if (this.staticIssues.length > 0) {
      console.warn('[layout] 静态布局 / 穿模校验发现问题：', this.staticIssues);
    }

    this.core = new RenderCore(canvas);
    this.rig = new CameraRig(this.core.camera, canvas);
    this.sky = new Sky();
    this.core.scene.add(this.sky.group);
    this.lighting = new LightingComposer(this.core.scene, this.core.renderer, (s) => this.sky.apply(s));

    this.base = new BasePlate();
    this.core.root.add(this.base.group);
    this.core.scene.add(particles.group);
    this.core.root.add(snowCaps.group);
    this.veilHost = uiRoot;

    this.panel = new ControlPanel(uiRoot, (dim, id) => this.switcher.select(dim, id));
    this.title = new ComboTitle(uiRoot);
    this.toggle = new UiToggle(uiRoot, (v) => {
      this.panel.setVisible(v);
      this.title.setVisible(v);
    });
    this.debug = new DebugPanel(uiRoot);
    const hint = document.createElement('div');
    hint.className = 'camp-hint';
    hint.textContent = '拖拽旋转 · 滚轮 / 双指缩放 · H 隐藏界面 · D 调试';
    uiRoot.appendChild(hint);

    const host: SwitchHost = {
      veilHost: uiRoot,
      rebuildAll: (s, v) => this.rebuildAll(s, v),
      applyTime: (t, immediate) => this.applyTime(t, immediate),
      applyWeather: (w, immediate) => this.applyWeather(w, immediate),
      onComboChange: (combo) => this.onComboChange(combo),
    };
    this.switcher = new SwitchController(host);

    this.rebuildAll(this.currentScene, this.currentVehicle);
    this.applyTime(this.currentTime, true);
    this.applyWeather(this.currentWeather, true);
    this.title.set(DEFAULT_COMBO);
    this.panel.setActive(DEFAULT_COMBO);

    window.addEventListener('resize', () => this.core.resize());
    window.addEventListener('keydown', (e) => {
      if (e.key === 'h' || e.key === 'H') this.toggle.toggle();
      if (e.key === 'd' || e.key === 'D') this.debug.toggle();
    });

    requestAnimationFrame(this.loop);
  }

  private makeContext(): SceneContext {
    return {
      root: this.core.root,
      lib: this.lib,
      decor: this.decor,
      layout,
      ticker: this.ticker,
      env: this.env,
    };
  }

  /** 结构性切换：场景与车型一起重建，保证装饰状态 / 布局校验 / 灯光钩子始终一致 */
  private rebuildAll(sceneId: SceneId, vehicleId: VehicleId): void {
    if (this.sceneGroup) {
      this.sceneModule?.dispose?.();
      releaseGroup(this.sceneGroup);
    }
    if (this.vehicleGroup) {
      this.vehicleModule?.dispose?.();
      releaseGroup(this.vehicleGroup);
    }
    clearCloths();
    clearLightBreath();
    this.decor.reset();
    snowCaps.clear();
    transition.clear();
    layout.load(sceneId);

    const sceneMod = getScene(sceneId);
    this.base.apply(sceneMod.palette);
    const ctx = this.makeContext();

    this.sceneGroup = sceneMod.build(ctx) ?? new THREE.Group();
    this.sceneGroup.name = `scene-${sceneId}`;
    this.core.root.add(this.sceneGroup);
    outlineGroup(this.sceneGroup, { thickness: 0.028, color: sceneMod.palette.ink, minSize: 0.20 });

    const vehMod = getVehicle(vehicleId);
    this.vehicleGroup = vehMod.build(ctx) ?? new THREE.Group();
    this.vehicleGroup.name = `vehicle-${vehicleId}`;
    this.core.root.add(this.vehicleGroup);
    outlineGroup(this.vehicleGroup, { thickness: 0.030, color: sceneMod.palette.ink, minSize: 0.16 });
    layout.setVehicleBox(this.vehicleGroup, vehicleId);

    for (const child of this.sceneGroup.children) {
      if (child.userData.layoutId && !child.userData.layoutDecal) {
        snowCaps.addFor(child, String(child.userData.layoutId));
      }
    }
    snowCaps.addFor(this.vehicleGroup, `vehicle-${vehicleId}`);

    this.sceneModule = sceneMod;
    this.vehicleModule = vehMod;
    this.currentScene = sceneId;
    this.currentVehicle = vehicleId;

    this.applyTime(this.currentTime, true);
    this.applyWeather(this.currentWeather, true);
    this.runtimeIssues = layout.checkRuntime();
    if (this.runtimeIssues.length > 0) {
      console.warn('[layout] 运行时穿模校验发现问题：', this.runtimeIssues);
    }
  }

  private applyTime(id: TimeId, immediate = false): void {
    const prev = this.currentTime;
    this.currentTime = id;
    const preset = getTime(id);
    this.decor.setAll(preset.decor, immediate ? 0 : 1.4);
    this.updateLight(immediate);
    const ctx = this.makeContext();
    this.sceneModule?.onTimeChange?.(id, prev, ctx);
    this.vehicleModule?.onTimeChange?.(id, ctx);
  }

  private applyWeather(id: WeatherId, immediate = false): void {
    this.currentWeather = id;
    const d = PARTICLE_DENSITY[id];
    particles.set('rain', d.rain);
    particles.set('snow', d.snow);
    particles.set('cloud', d.cloud);
    particles.set('mist', d.mist);
    if (immediate) particles.immediate();
    this.updateLight(immediate);
    this.sceneModule?.onWeatherChange?.(id, this.makeContext());
  }

  private updateLight(immediate: boolean): void {
    const t = getTime(this.currentTime).light;
    const w = getWeather(this.currentWeather).light;
    const spec = compose(t, w);
    this.lighting.set(spec, immediate);
    wind.setScale(spec.windScale, immediate);
  }

  private onComboChange(combo: ComboState): void {
    this.title.set(combo);
    this.panel.setActive(combo);
  }

  private loop = (now: number): void => {
    const dt = Math.min(0.05, (now - this.last) / 1000 || 0.016);
    this.last = now;

    this.ticker.update(dt);
    this.decor.update(dt);
    wind.update(dt);
    transition.update(dt);
    const spec = this.lighting.update(dt);

    this.env = {
      ...this.env,
      scene: this.currentScene,
      vehicle: this.currentVehicle,
      time: this.currentTime,
      weather: this.currentWeather,
      wind: wind.value,
      wetness: spec.wetness,
      snow: spec.snow,
      dust: spec.dust,
      clothSag: spec.clothSag,
      glow: spec.glow,
      exposure: spec.exposure,
      fogDensity: spec.fogDensity,
      interiorWarmth: spec.interiorWarmth,
      elapsed: this.ticker.time,
    };

    applySurface(spec);
    updateCloths(dt, this.env);
    updateLightBreath(this.ticker.time, (k) => this.decor.get(k));
    particles.update(dt, this.env);
    snowCaps.setAmount(spec.snow);
    this.sky.update(dt, this.env);

    this.sceneModule?.update?.(dt, this.ticker.time, this.env);
    this.vehicleModule?.update?.(dt, this.ticker.time, this.env);

    this.rig.update();
    this.core.render(dt);

    const stats = this.core.stats;
    this.debug.update(dt, {
      combo: `${getScene(this.currentScene).label} · ${getVehicle(this.currentVehicle).label} · ${getTime(this.currentTime).label} · ${getWeather(this.currentWeather).label}`,
      fps: stats.fps, calls: stats.calls, triangles: stats.triangles,
      geometries: stats.geometries, textures: stats.textures,
      staticIssues: this.staticIssues.length,
      runtimeIssues: this.runtimeIssues,
      moduleCount: registrySummary(),
    });

    requestAnimationFrame(this.loop);
  };
}
