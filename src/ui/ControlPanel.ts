import type { ComboState, Dimension } from '../app/State';
import type { RegistryItem } from '../registry/types';
import { sceneItems } from '../registry/sceneRegistry';
import { vehicleItems } from '../registry/vehicleRegistry';
import { timeItems } from '../registry/timeRegistry';
import { weatherItems } from '../registry/weatherRegistry';
import { iconSvg } from './icons';

interface PanelGroup {
  dim: Dimension;
  title: string;
  items: RegistryItem[];
  wide?: boolean;
}

/** 四维分段按钮面板：按钮由注册表遍历生成，新增模块自动出现（DESIGN.md §6.1） */
export class ControlPanel {
  readonly el: HTMLDivElement;
  private buttons = new Map<string, HTMLButtonElement>();

  constructor(host: HTMLElement, onSelect: (dim: Dimension, id: string) => void) {
    this.el = document.createElement('div');
    this.el.className = 'camp-panel';
    this.el.setAttribute('role', 'group');
    this.el.setAttribute('aria-label', '场景组合控制');

    const heading = document.createElement('div');
    heading.className = 'camp-heading';
    heading.innerHTML = '<strong>微缩营地巡游</strong><span>Mini Camp</span>';
    this.el.appendChild(heading);

    const groups: PanelGroup[] = [
      { dim: 'scene', title: '场景 SCENE', items: sceneItems() },
      { dim: 'vehicle', title: '车型 VEHICLE', items: vehicleItems() },
      { dim: 'time', title: '时间 TIME', items: timeItems(), wide: true },
      { dim: 'weather', title: '天气 WEATHER', items: weatherItems(), wide: true },
    ];

    for (const group of groups) {
      const section = document.createElement('div');
      section.className = 'camp-group';
      const title = document.createElement('div');
      title.className = 'camp-group-title';
      title.textContent = group.title;
      section.appendChild(title);

      const segment = document.createElement('div');
      segment.className = group.wide ? 'camp-segment wide' : 'camp-segment';
      for (const item of group.items) {
        const btn = document.createElement('button');
        btn.className = 'camp-btn';
        btn.type = 'button';
        btn.dataset.dim = group.dim;
        btn.dataset.id = item.id;
        btn.title = item.label;
        btn.innerHTML = `${iconSvg(item.icon)}<span>${item.label}</span>`;
        btn.addEventListener('click', () => onSelect(group.dim, item.id));
        segment.appendChild(btn);
        this.buttons.set(`${group.dim}:${item.id}`, btn);
      }
      section.appendChild(segment);
      this.el.appendChild(section);
    }

    host.appendChild(this.el);
  }

  setActive(combo: ComboState): void {
    for (const [key, btn] of this.buttons) {
      const [dim, id] = key.split(':');
      btn.classList.toggle('active', combo[dim as Dimension] === id);
    }
  }

  setVisible(v: boolean): void {
    this.el.classList.toggle('is-hidden', !v);
  }

  setBusy(v: boolean): void {
    for (const btn of this.buttons.values()) btn.disabled = v;
  }
}
