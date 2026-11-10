interface Tween {
  from: number;
  to: number;
  apply: (v: number) => void;
  t: number;
  dur: number;
}

/** 通用数值补间：天气粒子密度、材质状态、装饰物显隐都走这里，保证平滑过渡 */
export class Transition {
  private tweens: Tween[] = [];

  to(from: number, to: number, duration: number, apply: (v: number) => void): void {
    const existing = this.tweens.findIndex((t) => t.apply === apply);
    if (existing >= 0) this.tweens.splice(existing, 1);
    this.tweens.push({ from, to, apply, t: 0, dur: Math.max(0.01, duration) });
    apply(from);
  }

  update(dt: number): void {
    for (let i = this.tweens.length - 1; i >= 0; i--) {
      const tw = this.tweens[i];
      tw.t = Math.min(1, tw.t + dt / tw.dur);
      const e = tw.t < 0.5 ? 2 * tw.t * tw.t : 1 - Math.pow(-2 * tw.t + 2, 2) / 2;
      tw.apply(tw.from + (tw.to - tw.from) * e);
      if (tw.t >= 1) this.tweens.splice(i, 1);
    }
  }

  clear(): void { this.tweens.length = 0; }
}

export const transition = new Transition();

/**
 * 场景 / 车型结构性切换的淡入淡出（提示词 6-5）。
 * 用 CSS 遮罩实现，不触碰相机与 OrbitControls 状态。
 */
export function fadeSwitch(host: HTMLElement, onMid: () => void, outMs = 200, inMs = 300): Promise<void> {
  return new Promise((resolve) => {
    const veil = document.createElement('div');
    veil.className = 'scene-veil';
    veil.style.cssText = [
      'position:absolute', 'inset:0', 'z-index:60', 'pointer-events:none',
      'background:#dfe7ef', 'opacity:0', 'transition:opacity 200ms ease',
    ].join(';');
    host.appendChild(veil);
    requestAnimationFrame(() => {
      veil.style.opacity = '0.92';
      window.setTimeout(() => {
        onMid();
        veil.style.opacity = '0';
        window.setTimeout(() => {
          veil.remove();
          resolve();
        }, inMs);
      }, outMs);
    });
  });
}
