import type { DecorFlags } from '../registry/types';

export type DecorKey =
  | 'campLamp' | 'stringLight' | 'ember' | 'breakfastSet' | 'smoke' | 'steam'
  | 'signLight' | 'searchLight' | 'warningLight' | 'lighthouse' | 'dewHighlight'
  | 'interiorWarmth' | 'vendingLight' | 'trafficLight' | 'storeLight' | 'flashlight'
  | 'fire' | 'dustMote' | 'awningCloth' | 'flagCloth' | 'cloudShadow';

interface Tween { key: string; from: number; to: number; t: number; dur: number }

/**
 * 装饰物状态控制（提示词第四节：切换时间必须改变装饰物状态，不允许只换色调）。
 * 每个状态用 0~1 补间，灯的呼吸、粒子密度、早餐餐具显隐等都订阅同一状态。
 */
export class DecorController {
  private values = new Map<string, number>();
  private handlers = new Map<string, Set<(v: number) => void>>();
  private spawns = new Map<string, (show: boolean) => void>();
  private tweens: Tween[] = [];

  get(key: string): number { return this.values.get(key) ?? 0; }

  bind(key: string, fn: (v: number) => void): () => void {
    let set = this.handlers.get(key);
    if (!set) { set = new Set(); this.handlers.set(key, set); }
    set.add(fn);
    fn(this.get(key));
    return () => set!.delete(fn);
  }

  setFlag(key: string, value: number, duration = 1.4): void {
    const from = this.get(key);
    if (Math.abs(from - value) < 0.001) return;
    if (duration <= 0) {
      this.values.set(key, value);
      this.notify(key, value);
      return;
    }
    const i = this.tweens.findIndex((t) => t.key === key);
    if (i >= 0) this.tweens.splice(i, 1);
    this.tweens.push({ key, from, to: value, t: 0, dur: duration });
  }

  setAll(flags: DecorFlags, duration = 1.4): void {
    const keys = new Set<string>([...this.values.keys(), ...Object.keys(flags)]);
    for (const key of keys) this.setFlag(key, flags[key as DecorKey] ?? 0, duration);
  }

  setLightGroup(group: string, intensity: number): void { this.setFlag(group, intensity); }

  registerSpawn(id: string, fn: (show: boolean) => void): void { this.spawns.set(id, fn); }
  spawn(id: string): void { this.spawns.get(id)?.(true); }
  despawn(id: string): void { this.spawns.get(id)?.(false); }

  update(dt: number): void {
    for (let i = this.tweens.length - 1; i >= 0; i--) {
      const tw = this.tweens[i];
      tw.t = Math.min(1, tw.t + dt / tw.dur);
      const e = tw.t < 0.5 ? 2 * tw.t * tw.t : 1 - Math.pow(-2 * tw.t + 2, 2) / 2;
      const v = tw.from + (tw.to - tw.from) * e;
      this.values.set(tw.key, v);
      this.notify(tw.key, v);
      if (tw.t >= 1) this.tweens.splice(i, 1);
    }
  }

  reset(): void {
    this.tweens.length = 0;
    this.values.clear();
    this.handlers.clear();
    this.spawns.clear();
  }

  private notify(key: string, v: number): void {
    const set = this.handlers.get(key);
    if (!set) return;
    for (const fn of set) fn(v);
  }
}

export const decor = new DecorController();
