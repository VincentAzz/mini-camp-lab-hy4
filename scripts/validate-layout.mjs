#!/usr/bin/env node
/**
 * 静态布局 / 穿模校验（提示词第九节第 3 点 + 用户特别关注项）。
 * 与浏览器侧共用 src/data/layouts.js 这一份数据，覆盖：
 *   越出底座内界、侵入中央营位禁放区、格子越界、实体两两重叠、
 *   车型占位被 KEEP_OUT 覆盖、提示词点名元素覆盖度。
 * 用法：pnpm validate:layout
 */
import {
  BASE, KEEP_OUT, ZONES, VEHICLES, SCENE_LAYOUTS, REQUIRED_IDS,
  resolveScene, validateAll,
} from '../src/data/layouts.js';

const scenes = Object.keys(SCENE_LAYOUTS);
const vehicles = Object.keys(VEHICLES);

console.log('=== 微缩营地巡游 · 静态布局 / 穿模校验 ===');
console.log(`底座      ${BASE.size} × ${BASE.size}，内界 ±${BASE.inner}`);
console.log(`营位禁放  x[${KEEP_OUT.minX}, ${KEEP_OUT.maxX}] z[${KEEP_OUT.minZ}, ${KEEP_OUT.maxZ}]`);
console.log(`分区      ${Object.keys(ZONES).join(', ')}`);
console.log(`组合空间  ${scenes.length} 场景 × ${vehicles.length} 车型 × 4 时间 × 5 天气 = ${scenes.length * vehicles.length * 4 * 5} 种`);
console.log('');

for (const scene of scenes) {
  const placed = resolveScene(scene);
  const required = REQUIRED_IDS[scene] ?? [];
  const decals = placed.filter((p) => p.h <= 0.06).length;
  console.log(`  ${scene.padEnd(12)} 实体 ${String(placed.length).padStart(2)} 个（贴地层 ${decals}），点名元素 ${required.length} 项`);
}
console.log('');

// 车型 × 场景：确认每辆车都能放进每个场景的禁放区，且不侵入任何实体
const intersections = [];
for (const scene of scenes) {
  const placed = resolveScene(scene).filter((p) => p.h > 0.06);
  for (const [vid, v] of Object.entries(VEHICLES)) {
    const vb = { minX: -v.halfLength, maxX: v.halfLength, minZ: -v.halfWidth, maxZ: v.deployZ };
    for (const p of placed) {
      const b = p.box;
      const hit = b.minX < vb.maxX && b.maxX > vb.minX && b.minZ < vb.maxZ && b.maxZ > vb.minZ;
      if (hit) intersections.push(`${scene} × ${vid} 与实体 ${p.id} 干涉`);
    }
  }
}

const issues = validateAll();
if (intersections.length > 0) issues.push(...intersections);

if (issues.length > 0) {
  console.error(`❌ 发现 ${issues.length} 个问题：`);
  for (const s of issues) console.error(`   - ${s}`);
  process.exit(1);
}

console.log(`✅ 静态校验通过：${scenes.length} 场景 × ${vehicles.length} 车型的占位与禁放区无冲突，0 处穿模风险`);
console.log('   运行时还会用真实包围盒在自检面板中复查一遍（?debug=1）');
process.exit(0);
