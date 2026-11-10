import './style.css';
import './ui/ui.css';
import { App } from './app/App';

function boot(): void {
  const canvas = document.getElementById('scene-canvas') as HTMLCanvasElement | null;
  const uiRoot = document.getElementById('ui-root') as HTMLElement | null;
  if (!canvas || !uiRoot) throw new Error('缺少 #scene-canvas 或 #ui-root 容器');
  new App(canvas, uiRoot);
}

try {
  boot();
} catch (err) {
  const el = document.createElement('div');
  el.className = 'boot-error';
  el.textContent = `启动失败：\n${err instanceof Error ? (err.stack ?? err.message) : String(err)}`;
  document.body.appendChild(el);
  console.error(err);
}
