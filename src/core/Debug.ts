export interface DebugData {
  combo: string;
  fps: number;
  calls: number;
  triangles: number;
  geometries: number;
  textures: number;
  staticIssues: number;
  runtimeIssues: string[];
  moduleCount: string;
}

/** 开发态自检面板：非 HUD，默认关闭（?debug=1 或 D 键开启），交付构建中不显示 */
export class DebugPanel {
  private el: HTMLDivElement;
  private visible = false;
  private acc = 0;

  constructor(host: HTMLElement) {
    this.el = document.createElement('div');
    this.el.className = 'debug-panel';
    this.el.style.cssText = [
      'position:absolute', 'left:12px', 'top:12px', 'z-index:80',
      'padding:10px 13px', 'border-radius:10px', 'font:11px/1.6 ui-monospace,Consolas,monospace',
      'color:#dce8f5', 'background:rgba(18,26,38,0.82)', 'border:1px solid rgba(160,190,220,0.25)',
      'backdrop-filter:blur(8px)', 'white-space:pre', 'pointer-events:none', 'display:none',
      'max-width:340px', 'max-height:60vh', 'overflow:hidden',
    ].join(';');
    host.appendChild(this.el);
    this.visible = new URLSearchParams(location.search).has('debug');
    this.el.style.display = this.visible ? 'block' : 'none';
  }

  toggle(): void {
    this.visible = !this.visible;
    this.el.style.display = this.visible ? 'block' : 'none';
  }

  get isVisible(): boolean { return this.visible; }

  update(dt: number, data: DebugData): void {
    if (!this.visible) return;
    this.acc += dt;
    if (this.acc < 0.25) return;
    this.acc = 0;
    const lines = [
      `组合  ${data.combo}`,
      `帧率  ${data.fps} fps   DrawCall ${data.calls}   三角面 ${data.triangles}`,
      `资源  geo ${data.geometries}   tex ${data.textures}`,
      `模块  ${data.moduleCount}`,
      `静态布局校验  ${data.staticIssues === 0 ? '通过 (0)' : `问题 ${data.staticIssues}`}`,
      `运行时穿模    ${data.runtimeIssues.length === 0 ? '通过 (0)' : `冲突 ${data.runtimeIssues.length}`}`,
    ];
    if (data.runtimeIssues.length > 0) {
      lines.push('', ...data.runtimeIssues.slice(0, 6).map((s) => ` ! ${s}`));
    }
    this.el.textContent = lines.join('\n');
    this.el.style.borderColor = data.runtimeIssues.length > 0
      ? 'rgba(240,120,110,0.75)' : 'rgba(160,190,220,0.25)';
  }
}
