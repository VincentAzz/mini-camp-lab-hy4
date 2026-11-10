import './style.css';
import './ui/ui.css';
import { App } from './app/App';
import { startLayoutAudit } from './core/LayoutAudit';

function boot(): void {
  const canvas = document.getElementById('scene-canvas') as HTMLCanvasElement | null;
  const uiRoot = document.getElementById('ui-root') as HTMLElement | null;
  if (!canvas || !uiRoot) throw new Error('缺少 #scene-canvas 或 #ui-root 容器');
  new App(canvas, uiRoot);
}

function devErrorBanner(): void {
  const banner = document.createElement('div');
  banner.id = 'dev-error';
  banner.style.cssText = [
    'position:absolute', 'left:12px', 'bottom:12px', 'z-index:200',
    'max-width:66vw', 'padding:8px 12px', 'border-radius:9px',
    'font:11px/1.5 ui-monospace,Consolas,monospace', 'color:#ffe2dc',
    'background:rgba(120,36,32,0.88)', 'border:1px solid rgba(255,160,150,0.5)',
    'display:none', 'pointer-events:none', 'white-space:pre-wrap',
  ].join(';');
  document.body.appendChild(banner);
  const report = (msg: string): void => {
    banner.style.display = 'block';
    banner.textContent = msg;
    console.error(msg);
  };
  window.addEventListener('error', (e) => report(`运行时错误：${e.message}`));
  window.addEventListener('unhandledrejection', (e) => report(`未处理的 Promise：${String(e.reason)}`));
}

function startPerfReport(): void {
  const send = (): void => {
    const stats = (window as unknown as { __campStats?: unknown }).__campStats;
    void fetch('/__layout_report', {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ type: 'perf', timestamp: new Date().toISOString(), stats }),
    }).catch(() => {});
  };
  setTimeout(send, 3500);
  setInterval(send, 10000);
}

try {
  if (import.meta.env.DEV) devErrorBanner();
  // 必须在 App 构造之前同步执行：审计用独立的注册表实例，结束时清空布料/呼吸注册，
  // 随后 App 会重新注册主场景的对应对象，避免相互污染。
  if (import.meta.env.DEV) startLayoutAudit();
  boot();
  if (import.meta.env.DEV) startPerfReport();
} catch (err) {
  const el = document.createElement('div');
  el.className = 'boot-error';
  el.textContent = `启动失败：\n${err instanceof Error ? (err.stack ?? err.message) : String(err)}`;
  document.body.appendChild(el);
  console.error(err);
}
