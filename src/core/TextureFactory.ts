import * as THREE from 'three';

/** 全部贴图由 Canvas 2D 程序化生成，零外部文件、零网络请求（提示词 8-2） */
const cache = new Map<string, THREE.Texture>();

function rng(seed: number): () => number {
  let s = seed >>> 0;
  return () => {
    s = (s * 1664525 + 1013904223) >>> 0;
    return s / 4294967296;
  };
}

function makeCanvas(size: number): { c: HTMLCanvasElement; ctx: CanvasRenderingContext2D } {
  const c = document.createElement('canvas');
  c.width = c.height = size;
  const ctx = c.getContext('2d');
  if (!ctx) throw new Error('Canvas 2D context unavailable');
  return { c, ctx };
}

function fill(ctx: CanvasRenderingContext2D, s: number, color: string): void {
  ctx.fillStyle = color;
  ctx.fillRect(0, 0, s, s);
}

function speckle(
  ctx: CanvasRenderingContext2D, s: number, colors: string[],
  count: number, seed: number, min = 1, max = 3,
): void {
  const r = rng(seed);
  for (let i = 0; i < count; i++) {
    ctx.fillStyle = colors[Math.floor(r() * colors.length)];
    const w = min + r() * (max - min);
    ctx.fillRect(r() * s, r() * s, w, w * (0.6 + r() * 0.8));
  }
}

interface TexOpts { repeat?: number; srgb?: boolean }

function build(
  key: string, size: number,
  draw: (ctx: CanvasRenderingContext2D, s: number) => void,
  opts: TexOpts = {},
): THREE.CanvasTexture {
  const hit = cache.get(key);
  if (hit) return hit as THREE.CanvasTexture;
  const { c, ctx } = makeCanvas(size);
  draw(ctx, size);
  const t = new THREE.CanvasTexture(c);
  if (opts.srgb !== false) t.colorSpace = THREE.SRGBColorSpace;
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  const r = opts.repeat ?? 1;
  t.repeat.set(r, r);
  t.anisotropy = 4;
  t.needsUpdate = true;
  cache.set(key, t);
  return t;
}

/** 3~5 阶渐变色阶，供 MeshToonMaterial.gradientMap 使用（DESIGN.md §5.1） */
export function toonRamp(steps = 4): THREE.DataTexture {
  const key = `ramp-${steps}`;
  const hit = cache.get(key);
  if (hit) return hit as THREE.DataTexture;
  const levels = [0.35, 0.58, 0.80, 1.0, 1.0];
  const data = new Uint8Array(steps * 4);
  for (let i = 0; i < steps; i++) {
    const v = Math.round(255 * levels[Math.min(i, levels.length - 1)]);
    data[i * 4] = v;
    data[i * 4 + 1] = v;
    data[i * 4 + 2] = v;
    data[i * 4 + 3] = 255;
  }
  const t = new THREE.DataTexture(data, steps, 1, THREE.RGBAFormat);
  t.minFilter = THREE.NearestFilter;
  t.magFilter = THREE.NearestFilter;
  t.generateMipmaps = false;
  t.needsUpdate = true;
  cache.set(key, t);
  return t;
}

function verticalBands(ctx: CanvasRenderingContext2D, s: number, color: string, count: number, seed: number): void {
  const r = rng(seed);
  ctx.strokeStyle = color;
  for (let i = 0; i < count; i++) {
    ctx.globalAlpha = 0.15 + r() * 0.3;
    ctx.lineWidth = 0.6 + r() * 2.2;
    ctx.beginPath();
    const x = r() * s;
    ctx.moveTo(x, 0);
    ctx.bezierCurveTo(x + (r() - 0.5) * 12, s * 0.33, x + (r() - 0.5) * 12, s * 0.66, x, s);
    ctx.stroke();
  }
  ctx.globalAlpha = 1;
}

export const textures = {
  grass: (): THREE.CanvasTexture => build('grass', 256, (ctx, s) => {
    fill(ctx, s, '#7fa869');
    speckle(ctx, s, ['#8fba75', '#6d995c', '#a3c98a', '#5f8b52'], 1400, 17, 1, 4);
    verticalBands(ctx, s, '#d8e8b4', 90, 23);
  }, { repeat: 7 }),

  forestFloor: (): THREE.CanvasTexture => build('forest-floor', 256, (ctx, s) => {
    fill(ctx, s, '#5d7f56');
    speckle(ctx, s, ['#6f9464', '#4b6b48', '#87a473', '#3f5c3e'], 1200, 31, 1, 4);
    verticalBands(ctx, s, '#b9cf97', 70, 37);
  }, { repeat: 7 }),

  gravel: (): THREE.CanvasTexture => build('gravel', 256, (ctx, s) => {
    fill(ctx, s, '#a49d8c');
    const r = rng(41);
    for (let i = 0; i < 900; i++) {
      ctx.fillStyle = ['#b8b0a0', '#8e897c', '#c7bfae', '#7d796e'][Math.floor(r() * 4)];
      ctx.beginPath();
      ctx.ellipse(r() * s, r() * s, 1 + r() * 3.4, 0.8 + r() * 2.2, r() * 6.28, 0, 6.28);
      ctx.fill();
    }
  }, { repeat: 6 }),

  asphalt: (): THREE.CanvasTexture => build('asphalt', 256, (ctx, s) => {
    fill(ctx, s, '#59616b');
    speckle(ctx, s, ['#6a727c', '#4c535c', '#78818b', '#454b54'], 1800, 53, 0.6, 1.8);
  }, { repeat: 5 }),

  concrete: (): THREE.CanvasTexture => build('concrete', 256, (ctx, s) => {
    fill(ctx, s, '#a9a79e');
    speckle(ctx, s, ['#b8b6ad', '#97958d', '#c2c0b7'], 700, 59, 0.8, 2.4);
    const r = rng(61);
    ctx.strokeStyle = 'rgba(90,88,82,0.32)';
    ctx.lineWidth = 0.8;
    for (let i = 0; i < 12; i++) {
      ctx.beginPath();
      let x = r() * s, y = r() * s;
      ctx.moveTo(x, y);
      for (let k = 0; k < 4; k++) { x += (r() - 0.5) * 40; y += (r() - 0.5) * 40; ctx.lineTo(x, y); }
      ctx.stroke();
    }
  }, { repeat: 4 }),

  wood: (): THREE.CanvasTexture => build('wood', 256, (ctx, s) => {
    fill(ctx, s, '#b98a5c');
    const r = rng(67);
    for (let i = 0; i < 26; i++) {
      ctx.strokeStyle = `rgba(${90 + r() * 40},${60 + r() * 30},${35 + r() * 20},${0.18 + r() * 0.28})`;
      ctx.lineWidth = 0.7 + r() * 2.4;
      const y = r() * s;
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.bezierCurveTo(s * 0.3, y + (r() - 0.5) * 14, s * 0.7, y + (r() - 0.5) * 14, s, y);
      ctx.stroke();
    }
  }, { repeat: 2 }),

  rust: (): THREE.CanvasTexture => build('rust', 256, (ctx, s) => {
    fill(ctx, s, '#9a6b4f');
    const r = rng(71);
    for (let i = 0; i < 260; i++) {
      ctx.fillStyle = ['#7d5138', '#b57f55', '#6a4636', '#c08b5f'][Math.floor(r() * 4)];
      ctx.globalAlpha = 0.25 + r() * 0.5;
      ctx.beginPath();
      ctx.ellipse(r() * s, r() * s, 2 + r() * 18, 2 + r() * 12, r() * 6.28, 0, 6.28);
      ctx.fill();
    }
    ctx.globalAlpha = 1;
  }, { repeat: 2 }),

  corrugated: (): THREE.CanvasTexture => build('corrugated', 256, (ctx, s) => {
    fill(ctx, s, '#8c9298');
    for (let x = 0; x < s; x += 16) {
      const g = ctx.createLinearGradient(x, 0, x + 16, 0);
      g.addColorStop(0, '#6e757c');
      g.addColorStop(0.45, '#aeb5ba');
      g.addColorStop(1, '#717a80');
      ctx.fillStyle = g;
      ctx.fillRect(x, 0, 16, s);
    }
    speckle(ctx, s, ['#8a6144', '#a37a52'], 120, 73, 1, 3);
  }, { repeat: 2 }),

  sand: (): THREE.CanvasTexture => build('sand', 256, (ctx, s) => {
    fill(ctx, s, '#c2a276');
    speckle(ctx, s, ['#d0b187', '#ad8c62', '#d9bd95'], 1400, 79, 0.6, 2);
  }, { repeat: 6 }),

  snow: (): THREE.CanvasTexture => build('snow', 256, (ctx, s) => {
    fill(ctx, s, '#eef3f8');
    speckle(ctx, s, ['#ffffff', '#dce6f0', '#f7fbff'], 700, 83, 1, 3);
  }, { repeat: 5 }),

  water: (): THREE.CanvasTexture => build('water', 256, (ctx, s) => {
    const g = ctx.createLinearGradient(0, 0, 0, s);
    g.addColorStop(0, '#4f79a8');
    g.addColorStop(0.5, '#6a94bd');
    g.addColorStop(1, '#3f6a99');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, s, s);
    const r = rng(89);
    for (let i = 0; i < 90; i++) {
      ctx.strokeStyle = `rgba(220,238,255,${0.08 + r() * 0.22})`;
      ctx.lineWidth = 0.7 + r() * 1.6;
      const y = r() * s, x = r() * s, w = 10 + r() * 60;
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.quadraticCurveTo(x + w * 0.5, y - 3, x + w, y);
      ctx.stroke();
    }
  }, { repeat: 3 }),

  cloth: (): THREE.CanvasTexture => build('cloth', 128, (ctx, s) => {
    fill(ctx, s, '#e8d9b8');
    ctx.strokeStyle = 'rgba(170,145,110,0.35)';
    ctx.lineWidth = 1;
    for (let i = 0; i < s; i += 8) {
      ctx.beginPath(); ctx.moveTo(i, 0); ctx.lineTo(i, s); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(0, i); ctx.lineTo(s, i); ctx.stroke();
    }
  }, { repeat: 2 }),

  starfield: (): THREE.CanvasTexture => build('stars', 512, (ctx, s) => {
    const g = ctx.createLinearGradient(0, 0, 0, s);
    g.addColorStop(0, '#101a35');
    g.addColorStop(0.6, '#22335c');
    g.addColorStop(1, '#3b4b74');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, s, s);
    const r = rng(97);
    for (let i = 0; i < 420; i++) {
      const a = 0.25 + r() * 0.75;
      const rad = 0.4 + r() * 1.5;
      ctx.fillStyle = `rgba(255,252,235,${a})`;
      ctx.beginPath(); ctx.arc(r() * s, r() * s, rad, 0, 6.28); ctx.fill();
    }
  }),

  glow: (): THREE.CanvasTexture => build('glow', 128, (ctx, s) => {
    const g = ctx.createRadialGradient(s / 2, s / 2, 0, s / 2, s / 2, s / 2);
    g.addColorStop(0, 'rgba(255,250,225,0.95)');
    g.addColorStop(0.22, 'rgba(255,232,175,0.55)');
    g.addColorStop(0.6, 'rgba(255,214,150,0.16)');
    g.addColorStop(1, 'rgba(255,210,150,0)');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, s, s);
  }),

  parkingLines: (): THREE.CanvasTexture => build('parking-lines', 512, (ctx, s) => {
    fill(ctx, s, '#5b636d');
    speckle(ctx, s, ['#676f79', '#4e555e', '#757d87'], 2400, 101, 0.5, 1.5);
    ctx.strokeStyle = 'rgba(240,240,225,0.86)';
    ctx.lineWidth = 5;
    for (let i = 1; i < 5; i++) {
      const x = (i / 5) * s;
      ctx.beginPath(); ctx.moveTo(x, s * 0.12); ctx.lineTo(x, s * 0.88); ctx.stroke();
    }
    ctx.beginPath(); ctx.moveTo(s * 0.04, s * 0.12); ctx.lineTo(s * 0.96, s * 0.12); ctx.stroke();
  }),

  highway: (): THREE.CanvasTexture => build('highway', 256, (ctx, s) => {
    fill(ctx, s, '#4c545e');
    speckle(ctx, s, ['#5a626c', '#434a53'], 900, 103, 0.5, 1.4);
    ctx.fillStyle = 'rgba(245,238,205,0.75)';
    for (let x = 0; x < s; x += 40) ctx.fillRect(x, s * 0.48, 22, 3);
  }, { repeat: 6 }),

  glass: (): THREE.CanvasTexture => build('glass', 128, (ctx, s) => {
    fill(ctx, s, '#a9c9d8');
    const g = ctx.createLinearGradient(0, 0, s, s);
    g.addColorStop(0, 'rgba(255,255,255,0.55)');
    g.addColorStop(0.35, 'rgba(255,255,255,0.05)');
    g.addColorStop(0.55, 'rgba(255,255,255,0.32)');
    g.addColorStop(1, 'rgba(190,220,235,0.05)');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, s, s);
  }),

  sign: (text: string, bg = '#fff4d8', fg = '#3b4a5a'): THREE.CanvasTexture =>
    build(`sign-${text}-${bg}-${fg}`, 256, (ctx, s) => {
      fill(ctx, s, bg);
      ctx.strokeStyle = fg;
      ctx.lineWidth = 6;
      ctx.strokeRect(10, 10, s - 20, s - 20);
      ctx.fillStyle = fg;
      ctx.font = 'bold 40px sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      const lines = text.split('\n');
      lines.forEach((line, i) => ctx.fillText(line, s / 2, s / 2 + (i - (lines.length - 1) / 2) * 48));
    }),

  sticker: (): THREE.CanvasTexture => build('sticker', 128, (ctx, s) => {
    fill(ctx, s, '#f3c96b');
    ctx.fillStyle = '#3e6e8e';
    ctx.beginPath(); ctx.arc(s / 2, s / 2, 42, 0, 6.28); ctx.fill();
    ctx.fillStyle = '#fff3cf';
    ctx.beginPath(); ctx.arc(s / 2, s / 2, 27, 0, 6.28); ctx.fill();
    ctx.fillStyle = '#e07a5f';
    ctx.font = 'bold 30px sans-serif';
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillText('GO', s / 2, s / 2);
  }),
};

export function disposeTextures(): void {
  for (const t of cache.values()) t.dispose();
  cache.clear();
}
