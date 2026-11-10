import type { ComboState } from '../app/State';
import { getScene } from '../registry/sceneRegistry';
import { getVehicle } from '../registry/vehicleRegistry';
import { getTime } from '../registry/timeRegistry';
import { getWeather } from '../registry/weatherRegistry';

/** 当前组合标题（提示词 6-2），如「山间松林 · 拖挂房车 · 夜间 · 小雨」 */
export class ComboTitle {
  readonly el: HTMLDivElement;
  private value: HTMLDivElement;

  constructor(host: HTMLElement) {
    this.el = document.createElement('div');
    this.el.className = 'camp-title';
    const small = document.createElement('small');
    small.textContent = 'Now Viewing';
    this.value = document.createElement('div');
    this.el.append(small, this.value);
    host.appendChild(this.el);
  }

  set(combo: ComboState): void {
    this.value.textContent = [
      getScene(combo.scene).label,
      getVehicle(combo.vehicle).label,
      getTime(combo.time).label,
      getWeather(combo.weather).label,
    ].join(' · ');
  }

  setVisible(v: boolean): void {
    this.el.classList.toggle('is-hidden', !v);
  }
}
