/** 全局风力（提示词 7-5）：布料、旗帜、树叶、粒子统一订阅，风力随天气变化 */
class Wind {
  x = 1;
  z = 0.25;
  strength = 1;
  private target = 1;
  private t = 0;

  setScale(v: number, immediate = false): void {
    this.target = v;
    if (immediate) { this.strength = v; this.t = 0; }
  }

  update(dt: number): void {
    this.t += dt;
    if (Math.abs(this.target - this.strength) > 0.002) {
      this.strength += (this.target - this.strength) * Math.min(1, dt * 1.6);
    }
    // 缓慢的自然阵风，幅度克制
    this.x = 0.92 + Math.sin(this.t * 0.31) * 0.16;
    this.z = 0.22 + Math.cos(this.t * 0.23) * 0.12;
  }

  get value(): { x: number; z: number; strength: number } {
    return { x: this.x, z: this.z, strength: this.strength };
  }
}

export const wind = new Wind();
