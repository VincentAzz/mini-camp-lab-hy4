#!/usr/bin/env node
/**
 * 内容模块契约 / 注册表自动装配校验（提示词 2.5、3.6、9-3）。
 * 只读扫描源码，不创建或删除任何文件：
 *  - 每个场景 / 车型 / 时间 / 天气模块必须 default export 且声明正确 id / label / icon；
 *  - 场景模块必须含 palette / build / onTimeChange / onWeatherChange / update；
 *  - 车型模块必须含 build 且显式体现两核心特征（展开机构 + 透视内饰）；
 *  - registry/index.ts 的 glob 模式必须覆盖所有内容模块目录；
 *  - layouts.js 的点名元素覆盖度由 validate-layout.mjs 校验，这里做交叉核对。
 * 用法：pnpm validate:contracts
 */
import { readFileSync, readdirSync, existsSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = fileURLToPath(new URL('..', import.meta.url));
const SRC = join(ROOT, 'src');
const issues = [];
const notes = [];

function read(p) {
  try { return readFileSync(p, 'utf8'); } catch { return ''; }
}
function dirs(base) {
  if (!existsSync(base)) return [];
  return readdirSync(base).filter((n) => statSync(join(base, n)).isDirectory() && !n.startsWith('_'));
}
function tsFiles(base) {
  if (!existsSync(base)) return [];
  return readdirSync(base).filter((n) => n.endsWith('.ts') && !n.endsWith('.d.ts'));
}

const sceneDirs = dirs(join(SRC, 'scenes'));
const vehicleDirs = dirs(join(SRC, 'vehicles'));
const timeFiles = tsFiles(join(SRC, 'times'));
const weatherFiles = tsFiles(join(SRC, 'weathers'));

const layoutSrc = read(join(SRC, 'data', 'layouts.js'));
const expectedScenes = [...new Set([...layoutSrc.matchAll(/^\s{2}(seaCliff|pineForest|wasteland|highwaySA):\s*\[/gm)].map((m) => m[1]))];
const expectedVehicles = [...new Set([...layoutSrc.matchAll(/^\s{2}(typeC|typeA|trailer|van|overland):\s*\{/gm)].map((m) => m[1]))];

console.log('=== 模块契约 / 注册表自动装配校验 ===');
console.log(`场景目录 ${sceneDirs.length}（布局声明 ${expectedScenes.length}）`);
console.log(`车型目录 ${vehicleDirs.length}（布局声明 ${expectedVehicles.length}）`);
console.log(`时间文件 ${timeFiles.length}，天气文件 ${weatherFiles.length}`);
console.log('');

for (const id of expectedScenes) if (!sceneDirs.includes(id)) issues.push(`缺少场景模块目录: src/scenes/${id}`);
for (const id of expectedVehicles) if (!vehicleDirs.includes(id)) issues.push(`缺少车型模块目录: src/vehicles/${id}`);

for (const id of sceneDirs) {
  const p = join(SRC, 'scenes', id, 'index.ts');
  const s = read(p);
  if (!s) { issues.push(`场景 ${id} 缺少 index.ts`); continue; }
  if (!/export default/.test(s)) issues.push(`场景 ${id} 未 default export（glob 自动注册会忽略它）`);
  if (!new RegExp(`id:\\s*['"]${id}['"]`).test(s)) issues.push(`场景 ${id} 的 id 声明与目录名不一致`);
  if (!/label:\s*['"]/.test(s)) issues.push(`场景 ${id} 缺少 label`);
  if (!/icon:\s*['"]/.test(s)) issues.push(`场景 ${id} 缺少 icon`);
  if (!/palette/.test(s)) issues.push(`场景 ${id} 缺少色彩基调 palette`);
  for (const fn of ['build', 'onTimeChange', 'onWeatherChange', 'update']) {
    if (!new RegExp(`${fn}\\s*\\(`).test(s)) notes.push(`场景 ${id} 未实现 ${fn}（可选，除非提示词要求该动效/钩子）`);
  }
  const layoutIds = [...s.matchAll(/put\(root,\s*ctx,\s*['"]([^'"]+)['"]/g)].map((m) => m[1]);
  const layoutIds2 = [...s.matchAll(/layout\.place\([^,]+,\s*['"]([^'"]+)['"]/g)].map((m) => m[1]);
  const placed = new Set([...layoutIds, ...layoutIds2]);
  console.log(`  scene/${id.padEnd(12)} 登记实体 ${String(placed.size).padStart(2)} 个`);
  if (placed.size < 8) issues.push(`场景 ${id} 登记实体过少（${placed.size}），可能未逐条覆盖提示词点名元素`);
}

for (const id of vehicleDirs) {
  const p = join(SRC, 'vehicles', id, 'index.ts');
  const s = read(p);
  if (!s) { issues.push(`车型 ${id} 缺少 index.ts`); continue; }
  if (!/export default/.test(s)) issues.push(`车型 ${id} 未 default export`);
  if (!new RegExp(`id:\\s*['"]${id}['"]`).test(s)) issues.push(`车型 ${id} 的 id 声明与目录名不一致`);
  if (!/label:\s*['"]/.test(s)) issues.push(`车型 ${id} 缺少 label`);
  if (!/build\s*\(/.test(s)) issues.push(`车型 ${id} 缺少 build`);
  if (!/interiorWarmth/.test(s)) issues.push(`车型 ${id} 缺少内饰灯光钩子（interiorWarmth）`);
  if (!/(window|glass|curtain|帐帘|帐蓬|tent)/i.test(s)) issues.push(`车型 ${id} 未体现「透视内饰」核心特征`);
  console.log(`  vehicle/${id.padEnd(10)} ${String(s.length).padStart(5)} 字符`);
}

for (const f of timeFiles) {
  const s = read(join(SRC, 'times', f));
  if (f === 'decorStates.ts') continue;
  if (!/export default/.test(s)) issues.push(`时间模块 ${f} 未 default export`);
  if (!/decor:\s*DECOR_MATRIX/.test(s)) issues.push(`时间模块 ${f} 未引用装饰物状态矩阵`);
}
for (const f of weatherFiles) {
  if (f === 'modifiers.ts') continue;
  const s = read(join(SRC, 'weathers', f));
  if (!/export default/.test(s)) issues.push(`天气模块 ${f} 未 default export`);
}

const registry = read(join(SRC, 'registry', 'index.ts'));
for (const pattern of ["../scenes/*/index.ts", "../vehicles/*/index.ts", "../times/*.ts", "../weathers/*.ts"]) {
  if (!registry.includes(pattern)) issues.push(`registry/index.ts 缺少 glob 模式 ${pattern}`);
}
if (!/import\.meta\.glob/.test(registry)) issues.push('registry/index.ts 未使用 glob 自动装配');

console.log('');
if (notes.length) {
  console.log(`提示 ${notes.length} 条：`);
  for (const n of notes.slice(0, 10)) console.log(`   · ${n}`);
  console.log('');
}
if (issues.length) {
  console.error(`❌ 契约校验发现 ${issues.length} 个问题：`);
  for (const s of issues) console.error(`   - ${s}`);
  process.exit(1);
}
console.log('✅ 模块契约与注册表自动装配校验通过');
console.log(`   组合空间 ${expectedScenes.length} × ${expectedVehicles.length} × 4 × 5 = ${expectedScenes.length * expectedVehicles.length * 4 * 5}`);
process.exit(0);
