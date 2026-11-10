export interface BreathOptions {
  phase?: number;
  speed?: number;
  /** 兼容旧调用：基础亮度保留比例（未使用时忽略） */
  base?: number;
}

interface Entry {
  key: string;
  apply: (v: number) => void;
  phase: number;
  speed: number;
}

const entries: Entry[] = [];

/** 串灯 / 小夜灯 / 招牌 / 指示灯统一呼吸节奏（提示词 7-5） */
export function breathe(key: string, apply: (v: number) => void, opts: BreathOptions = {}): () => void {
  const e: Entry = {
    key,
    apply,
    phase: opts.phase ?? (entries.length * 1.37) % 6.28,
    speed: opts.speed ?? 1.2,
  };
  entries.push(e);
  return () => {
    const i = entries.indexOf(e);
    if (i >= 0) entries.splice(i, 1);
  };
}

/** level 由 DecorController 提供（时间 / 天气决定的开关强度） */
export function updateLightBreath(t: number, level: (key: string) => number): void {
  for (const e of entries) {
    const lv = level(e.key);
    const wave = 0.5 + 0.5 * Math.sin(t * e.speed + e.phase);
    e.apply(lv * (0.74 + wave * 0.26));
  }
}

export function clearLightBreath(): void { entries.length = 0; }
