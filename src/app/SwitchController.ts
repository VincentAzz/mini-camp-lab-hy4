import { store, type ChangeSet } from './Store';
import { DEFAULT_COMBO, type ComboState, type Dimension, type SceneId, type VehicleId, type TimeId, type WeatherId } from './State';
import { fadeSwitch } from '../core/Transition';

export interface SwitchHost {
  veilHost: HTMLElement;
  rebuildAll(scene: SceneId, vehicle: VehicleId): void;
  applyTime(id: TimeId, immediate?: boolean): void;
  applyWeather(id: WeatherId, immediate?: boolean): void;
  onComboChange(combo: ComboState): void;
}

/**
 * 切换编排（DESIGN.md §3.5 / 提示词 6-5）：
 * - 结构性切换（场景 / 车型）：淡出 → 重建 → 淡入，期间相机状态完全不变；
 * - 参数性切换（时间 / 天气）：光照与粒子 1~2 秒平滑插值，不遮挡画面；
 * - 快速连点只保留最终目标，切换结束后自动补齐差异。
 */
export class SwitchController {
  private current: ComboState = { ...DEFAULT_COMBO };
  private busy = false;
  private pending = false;
  private host: SwitchHost;

  constructor(host: SwitchHost) {
    this.host = host;
    store.subscribe(() => this.sync());
  }

  select(dim: Dimension, id: string): void {
    store.patch({ [dim]: id } as ChangeSet);
  }

  get state(): Readonly<ComboState> { return this.current; }
  get switching(): boolean { return this.busy; }

  private sync(): void {
    if (this.busy) { this.pending = true; return; }
    const target = store.get();
    const structural = target.scene !== this.current.scene || target.vehicle !== this.current.vehicle;

    if (structural) {
      this.busy = true;
      this.host.veilHost.style.pointerEvents = 'none';
      fadeSwitch(this.host.veilHost, () => {
        this.host.rebuildAll(target.scene, target.vehicle);
        this.current.scene = target.scene;
        this.current.vehicle = target.vehicle;
      }).then(() => {
        this.busy = false;
        this.host.onComboChange(this.current);
        if (this.pending) { this.pending = false; this.sync(); }
      });
    }

    if (target.time !== this.current.time) {
      this.host.applyTime(target.time);
      this.current.time = target.time;
    }
    if (target.weather !== this.current.weather) {
      this.host.applyWeather(target.weather);
      this.current.weather = target.weather;
    }
    this.host.onComboChange(target);
  }
}
