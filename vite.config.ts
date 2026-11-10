import { defineConfig, type Plugin } from 'vite';
import { writeFileSync, mkdirSync } from 'node:fs';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = fileURLToPath(new URL('.', import.meta.url));

/** dev-only：接收内置预览页面回传的运行时穿模审计结果并写入项目内 .check/ */
function layoutReportPlugin(): Plugin {
  return {
    name: 'layout-report',
    configureServer(server) {
      server.middlewares.use('/__layout_report', (req, res) => {
        if (req.method !== 'POST') { res.statusCode = 405; res.end(); return; }
        let body = '';
        req.on('data', (chunk) => { body += String(chunk); });
        req.on('end', () => {
          try {
            const data = JSON.parse(body) as { type?: string };
            const dir = resolve(ROOT, '.check');
            mkdirSync(dir, { recursive: true });
            const name = data.type === 'full-audit' ? 'full-audit.json'
              : data.type === 'perf' ? 'perf.json' : 'runtime-layout.json';
            writeFileSync(resolve(dir, name), JSON.stringify(data, null, 2), 'utf8');
            res.setHeader('Content-Type', 'application/json');
            res.end('{"ok":true}');
          } catch (err) {
            res.statusCode = 500;
            res.end(String(err));
          }
        });
      });
    },
  };
}

export default defineConfig({
  base: './',
  plugins: [layoutReportPlugin()],
  server: {
    host: '127.0.0.1',
    port: 5173,
    strictPort: true,
  },
  preview: {
    host: '127.0.0.1',
    port: 4173,
    strictPort: true,
  },
  build: {
    target: 'es2022',
    outDir: 'dist',
    chunkSizeWarningLimit: 1500,
  },
});
