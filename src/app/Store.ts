import type { ComboState, Dimension } from './State';
import { DEFAULT_COMBO, DIMENSIONS } from './State';

export type ChangeSet = Partial<ComboState>;
type Listener = (state: Readonly<ComboState>, changed: Dimension[]) => void;

/**
 * 单一数据源（DESIGN.md §3.4）。任何维度切换都走 patch，
 * 内容模块只订阅自己关心的字段，绝不为某个组合硬编码布景。
 */
class Store {
  private state: ComboState = { ...DEFAULT_COMBO };
  private listeners = new Set<Listener>();

  get(): Readonly<ComboState> {
    return this.state;
  }

  patch(partial: ChangeSet): Dimension[] {
    const changed: Dimension[] = [];
    for (const key of DIMENSIONS) {
      const value = partial[key];
      if (value !== undefined && value !== this.state[key]) {
        Object.assign(this.state, { [key]: value });
        changed.push(key);
      }
    }
    if (changed.length === 0) return changed;
    const snapshot = { ...this.state };
    for (const fn of this.listeners) fn(snapshot, changed);
    return changed;
  }

  subscribe(fn: Listener): () => void {
    this.listeners.add(fn);
    return () => this.listeners.delete(fn);
  }
}

export const store = new Store();
