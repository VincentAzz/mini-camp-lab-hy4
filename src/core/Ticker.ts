export type TickFn = (dt: number, elapsed: number) => void;

interface Entry {
  fn: TickFn;
  interval: number;
  acc: number;
}

/**
 * 统一主循环（DESIGN.md §5.7）：必要动效每帧，次要动效按 hz 节流。
 * 所有内容模块的 update 都挂在这里，避免各自 requestAnimationFrame。
 */
export class Ticker {
  private entries: Entry[] = [];
  private elapsed = 0;

  /** hz = 0 表示每帧；hz = 15 表示约 15 次/秒 */
  add(fn: TickFn, hz = 0): () => void {
    const entry: Entry = { fn, interval: hz > 0 ? 1 / hz : 0, acc: 0 };
    this.entries.push(entry);
    return () => {
      const i = this.entries.indexOf(entry);
      if (i >= 0) this.entries.splice(i, 1);
    };
  }

  update(dt: number): void {
    const d = Math.min(dt, 0.05);
    this.elapsed += d;
    for (const e of this.entries) {
      if (e.interval === 0) {
        e.fn(d, this.elapsed);
      } else {
        e.acc += d;
        if (e.acc >= e.interval) {
          e.fn(e.acc, this.elapsed);
          e.acc = 0;
        }
      }
    }
  }

  get time(): number {
    return this.elapsed;
  }

  clear(): void {
    this.entries.length = 0;
  }
}

export const ticker = new Ticker();
