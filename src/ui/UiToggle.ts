import { iconSvg } from './icons';

/** 隐藏 / 呼出 UI（提示词 6-4）：隐藏后画面无任何 HUD，回到纯观赏模式 */
export class UiToggle {
  readonly el: HTMLButtonElement;
  private visible = true;
  private onChange: (v: boolean) => void;

  constructor(host: HTMLElement, onChange: (v: boolean) => void) {
    this.onChange = onChange;
    this.el = document.createElement('button');
    this.el.className = 'camp-toggle';
    this.el.type = 'button';
    this.el.title = '隐藏 / 呼出界面 (H)';
    this.el.setAttribute('aria-label', '隐藏或呼出界面');
    this.render();
    this.el.addEventListener('click', () => this.toggle());
    host.appendChild(this.el);
  }

  toggle(): void {
    this.visible = !this.visible;
    this.render();
    this.onChange(this.visible);
  }

  get isVisible(): boolean { return this.visible; }

  private render(): void {
    this.el.innerHTML = iconSvg(this.visible ? 'eye' : 'eye-off', 19);
    this.el.classList.toggle('is-hidden', !this.visible);
  }
}
