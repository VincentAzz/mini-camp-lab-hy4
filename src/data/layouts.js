/**
 * 布局与穿模约束的单一数据源。
 * 纯 ESM JavaScript：既被浏览器侧 TS 导入，也被 scripts/validate-layout.mjs 由 Node 直接导入校验。
 * 约定：Y 轴向上；底座顶面 y = 0；所有实体底面贴合 y = 0；车辆长轴沿 X，展开机构朝 +Z（面向默认相机）。
 */

export const BASE = Object.freeze({
  size: 20,
  half: 10,
  inner: 9.15,
  groundY: 0,
  thickness: 1.15,
  rim: 0.42,
});

/** 中央营位禁放区：覆盖所有车型的车身 + 展开机构 + 登车梯/踏步，场景实体一律不得侵入 */
export const KEEP_OUT = Object.freeze({ minX: -6.5, maxX: 6.5, minZ: -2.7, maxZ: 4.5 });

/**
 * 场景实体分区。所有分区都在底座内界内，且与 KEEP_OUT 完全不相交。
 * 每个分区按 cols × rows 划分格子，物件通过 cell + span 占位，天然互斥。
 */
export const ZONES = Object.freeze({
  front:   { minX: -5.7, maxX: 5.7,  minZ: 4.9,   maxZ: 7.7,   cols: 6, rows: 2 },
  back:    { minX: -8.9, maxX: 8.9,  minZ: -7.8,  maxZ: -3.1,  cols: 8, rows: 2 },
  left:    { minX: -9.0, maxX: -6.9, minZ: -2.5,  maxZ: 4.3,   cols: 2, rows: 6 },
  right:   { minX: 6.9,  maxX: 9.0,  minZ: -2.5,  maxZ: 4.3,   cols: 2, rows: 6 },
  far:     { minX: -9.0, maxX: 9.0,  minZ: 7.9,   maxZ: 9.05,  cols: 8, rows: 1 },
  backFar: { minX: -9.0, maxX: 9.0,  minZ: -9.05, maxZ: -7.9,  cols: 8, rows: 1 },
});

/** 车型占位（半长/半宽/高度/展开范围）。KEEP_OUT 必须能容纳其中最大者。 */
export const VEHICLES = Object.freeze({
  typeC:    { halfLength: 4.90, halfWidth: 1.35, height: 3.40, deployZ: 4.10, deployMinusZ: 1.60 },
  typeA:    { halfLength: 5.00, halfWidth: 1.55, height: 3.65, deployZ: 4.20, deployMinusZ: 1.75 },
  trailer:  { halfLength: 5.80, halfWidth: 1.45, height: 3.35, deployZ: 4.05, deployMinusZ: 1.65 },
  van:      { halfLength: 3.25, halfWidth: 1.25, height: 2.95, deployZ: 3.95, deployMinusZ: 1.45 },
  overland: { halfLength: 3.60, halfWidth: 1.35, height: 4.25, deployZ: 4.15, deployMinusZ: 1.55 },
});

/**
 * 逐场景实体清单。id 与提示词点名元素一一对应；小装饰（串灯、纸巾、货道商品等）
 * 作为父物件的子构件实现，不单独占位。
 * h = 物件最大高度（用于相机取景与 3D 干涉检查）；kind 用于材质分组与几何合并。
 */
export const SCENE_LAYOUTS = Object.freeze({
  seaCliff: [
    { id: 'awning',      zone: 'front', cell: [0, 0], span: [2, 1], h: 2.70, kind: 'fabric', label: '遮阳天幕' },
    { id: 'table',       zone: 'front', cell: [2, 0], h: 0.78, kind: 'wood',   label: '折叠桌' },
    { id: 'chairs',      zone: 'front', cell: [3, 0], h: 0.86, kind: 'wood',   label: '折叠椅' },
    { id: 'grill',       zone: 'front', cell: [4, 0], h: 0.72, kind: 'metal',  label: '烧烤炉' },
    { id: 'campLamp',    zone: 'front', cell: [5, 0], h: 1.30, kind: 'light',  label: '小营地灯' },
    { id: 'picnicMat',   zone: 'front', cell: [0, 1], h: 0.06, kind: 'fabric', label: '野餐垫' },
    { id: 'groundMat',   zone: 'front', cell: [1, 1], h: 0.05, kind: 'fabric', label: '防水地垫' },
    { id: 'utilityPost', zone: 'front', cell: [2, 1], h: 1.10, kind: 'metal',  label: '水电桩与管线' },
    { id: 'bicycle',     zone: 'front', cell: [3, 1], h: 1.05, kind: 'metal',  label: '折叠自行车' },
    { id: 'boardwalk',   zone: 'front', cell: [4, 1], span: [2, 1], h: 0.14, kind: 'wood', label: '木栈道' },
    { id: 'railing',     zone: 'back',  cell: [0, 0], span: [3, 1], h: 1.05, kind: 'wood',  label: '崖边护栏' },
    { id: 'bench',       zone: 'back',  cell: [3, 0], h: 0.92, kind: 'wood',   label: '观景长椅' },
    { id: 'signpost',    zone: 'back',  cell: [4, 0], h: 1.85, kind: 'wood',   label: '路牌' },
    { id: 'stoneSteps',  zone: 'back',  cell: [5, 0], span: [2, 1], h: 0.55, kind: 'stone', label: '通往小海湾的石阶' },
    { id: 'reefCluster', zone: 'back',  cell: [0, 1], span: [2, 1], h: 1.15, kind: 'stone', label: '礁石' },
    { id: 'seaGrass',    zone: 'back',  cell: [2, 1], h: 0.55, kind: 'plant',  label: '海草' },
    { id: 'cliffEdge',   zone: 'back',  cell: [3, 1], span: [3, 1], h: 0.40, kind: 'stone', label: '崖沿草坡' },
    { id: 'coastLight',  zone: 'right', cell: [0, 0], h: 1.45, kind: 'light',  label: '海岸营地灯' },
    { id: 'ropePost',    zone: 'left',  cell: [0, 0], h: 0.95, kind: 'wood',   label: '栈道缆桩' },
    { id: 'lighthouse',  zone: 'far',   cell: [0, 0], span: [2, 1], h: 3.60, kind: 'stone', label: '防波堤灯塔' },
    { id: 'breakwater',  zone: 'far',   cell: [2, 0], span: [3, 1], h: 0.85, kind: 'stone', label: '防波堤' },
    { id: 'sailboat',    zone: 'far',   cell: [6, 0], h: 1.60, kind: 'wood',   label: '远处小帆船' },
    { id: 'seaBackdrop', zone: 'backFar', cell: [0, 0], span: [8, 1], h: 0.02, kind: 'water', label: '海面' },
  ],
  pineForest: [
    { id: 'hammock',     zone: 'front', cell: [0, 0], span: [2, 1], h: 1.75, kind: 'fabric', label: '两树间吊床' },
    { id: 'campfire',    zone: 'front', cell: [2, 0], h: 0.55, kind: 'fire',   label: '篝火堆' },
    { id: 'logSeats',    zone: 'front', cell: [3, 0], h: 0.48, kind: 'wood',   label: '环形原木凳' },
    { id: 'deck',        zone: 'front', cell: [4, 0], span: [2, 1], h: 0.16, kind: 'wood', label: '木质营位平台' },
    { id: 'firewood',    zone: 'front', cell: [0, 1], h: 0.72, kind: 'wood',   label: '垒起的柴堆' },
    { id: 'laundry',     zone: 'front', cell: [1, 1], h: 1.60, kind: 'fabric', label: '晾晒的毛巾' },
    { id: 'waterBucket', zone: 'front', cell: [2, 1], h: 0.48, kind: 'metal',  label: '打水桶与水瓢' },
    { id: 'woodSteps',   zone: 'front', cell: [3, 1], h: 0.30, kind: 'wood',   label: '林间木阶步道' },
    { id: 'trailSign',   zone: 'front', cell: [4, 1], h: 1.80, kind: 'wood',   label: '指路木牌' },
    { id: 'undergrowth', zone: 'front', cell: [5, 1], h: 0.55, kind: 'plant',  label: '苔藓蕨类与蘑菇' },
    { id: 'stream',      zone: 'back',  cell: [0, 0], span: [5, 1], h: 0.05, kind: 'water', label: '山涧小溪' },
    { id: 'footbridge',  zone: 'back',  cell: [5, 0], span: [2, 1], h: 0.62, kind: 'wood', label: '跨溪小木桥' },
    { id: 'birdhouse',   zone: 'back',  cell: [0, 1], h: 1.30, kind: 'wood',   label: '树干鸟屋' },
    { id: 'bearBox',     zone: 'back',  cell: [1, 1], h: 0.90, kind: 'metal',  label: '防熊食物储藏箱' },
    { id: 'fernPatch',   zone: 'back',  cell: [2, 1], span: [2, 1], h: 0.48, kind: 'plant', label: '蕨类苔藓' },
    { id: 'stoneLantern',zone: 'back',  cell: [5, 1], h: 0.85, kind: 'stone',  label: '溪边石灯' },
    { id: 'pineLeft',    zone: 'left',  cell: [0, 0], span: [2, 3], h: 5.20, kind: 'tree',  label: '左侧层叠松林' },
    { id: 'pineRight',   zone: 'right', cell: [0, 0], span: [2, 3], h: 5.40, kind: 'tree',  label: '右侧层叠松林' },
    { id: 'pineCornerL', zone: 'left',  cell: [0, 3], span: [2, 3], h: 4.60, kind: 'tree',  label: '左后松林' },
    { id: 'pineCornerR', zone: 'right', cell: [0, 3], span: [2, 3], h: 4.80, kind: 'tree',  label: '右后松林' },
    { id: 'mountains',   zone: 'far',   cell: [0, 0], span: [8, 1], h: 3.20, kind: 'stone', label: '远处层叠山脊与云带' },
    { id: 'forestFloor', zone: 'backFar', cell: [0, 0], span: [8, 1], h: 0.05, kind: 'plant', label: '林缘地被' },
  ],
  wasteland: [
    { id: 'bunker',      zone: 'front', cell: [0, 0], span: [2, 1], h: 2.40, kind: 'concrete', label: '混凝土掩体与防爆门' },
    { id: 'sandbags',    zone: 'front', cell: [2, 0], h: 0.85, kind: 'sand',   label: '沙袋工事' },
    { id: 'barrelGrill', zone: 'front', cell: [3, 0], h: 1.05, kind: 'metal',  label: '油桶改造烧烤架' },
    { id: 'clothesline', zone: 'front', cell: [4, 0], span: [2, 1], h: 1.75, kind: 'fabric', label: '晾衣绳与工装' },
    { id: 'waterPurifier',zone:'front', cell: [0, 1], h: 1.35, kind: 'metal',  label: '净水装置' },
    { id: 'generator',   zone: 'front', cell: [1, 1], h: 1.10, kind: 'metal',  label: '冒蒸汽的发电机' },
    { id: 'solarPanels', zone: 'front', cell: [2, 1], span: [2, 1], h: 1.25, kind: 'metal', label: '太阳能板阵列' },
    { id: 'oilDrums',    zone: 'front', cell: [4, 1], h: 0.95, kind: 'metal',  label: '油桶' },
    { id: 'warningSign', zone: 'front', cell: [5, 1], h: 1.55, kind: 'metal',  label: '手写警示牌' },
    { id: 'watchtower',  zone: 'back',  cell: [0, 0], span: [2, 1], h: 4.60, kind: 'metal',  label: '铁架瞭望塔与探照灯' },
    { id: 'radar',       zone: 'back',  cell: [2, 0], h: 2.90, kind: 'metal',  label: '旋转雷达天线' },
    { id: 'containers',  zone: 'back',  cell: [3, 0], span: [2, 1], h: 2.30, kind: 'metal',  label: '锈蚀集装箱' },
    { id: 'wreck',       zone: 'back',  cell: [5, 0], span: [2, 1], h: 1.30, kind: 'metal',  label: '废旧汽车残骸' },
    { id: 'tires',       zone: 'back',  cell: [0, 1], h: 0.80, kind: 'metal',  label: '轮胎堆' },
    { id: 'corrugatedFence', zone: 'back', cell: [1, 1], span: [4, 1], h: 2.05, kind: 'metal', label: '波纹铁皮围墙' },
    { id: 'wireFence',   zone: 'back',  cell: [5, 1], span: [3, 1], h: 1.55, kind: 'metal',  label: '缠绕铁丝网' },
    { id: 'barrelStack', zone: 'left',  cell: [0, 0], h: 1.10, kind: 'metal',  label: '左侧油桶堆' },
    { id: 'supplyCrate', zone: 'right', cell: [0, 0], h: 0.95, kind: 'metal',  label: '补给箱' },
    { id: 'ruinedSkyline',zone:'far',   cell: [0, 0], span: [8, 1], h: 3.40, kind: 'concrete', label: '断裂高架桥与荒废城市剪影' },
    { id: 'wasteGround', zone: 'backFar', cell: [0, 0], span: [8, 1], h: 0.05, kind: 'sand', label: '废土地表' },
  ],
  highwaySA: [
    { id: 'gasCanopy',   zone: 'front', cell: [0, 0], span: [3, 1], h: 3.90, kind: 'concrete', label: '加油站雨棚与加油机' },
    { id: 'charger',     zone: 'front', cell: [3, 0], h: 1.55, kind: 'metal',  label: '电动车充电桩' },
    { id: 'vending',     zone: 'front', cell: [4, 0], h: 2.05, kind: 'light',  label: '自动售货机（货道可见）' },
    { id: 'flagpole',    zone: 'front', cell: [5, 0], h: 3.10, kind: 'fabric', label: '旗杆与小旗' },
    { id: 'benchBins',   zone: 'front', cell: [0, 1], h: 0.95, kind: 'metal',  label: '长椅与分类垃圾桶' },
    { id: 'washBasin',   zone: 'front', cell: [1, 1], h: 1.05, kind: 'concrete', label: '洗手池' },
    { id: 'walkway',     zone: 'front', cell: [2, 1], span: [3, 1], h: 2.35, kind: 'concrete', label: '遮阳连廊与公共步道' },
    { id: 'planter',     zone: 'front', cell: [5, 1], h: 0.62, kind: 'plant',  label: '绿化带' },
    { id: 'store',       zone: 'back',  cell: [0, 0], span: [3, 1], h: 3.35, kind: 'concrete', label: '便利店与发光招牌' },
    { id: 'diningWindow',zone: 'back',  cell: [3, 0], span: [2, 1], h: 2.30, kind: 'light',  label: '餐饮区大玻璃窗' },
    { id: 'roadSign',    zone: 'back',  cell: [5, 0], span: [2, 1], h: 3.05, kind: 'metal',  label: '高速路牌与出口指示牌' },
    { id: 'streetTrees', zone: 'back',  cell: [0, 1], span: [3, 1], h: 3.20, kind: 'tree',   label: '行道树' },
    { id: 'parkingLines',zone: 'back',  cell: [3, 1], span: [3, 1], h: 0.02, kind: 'decal',  label: '车位划线' },
    { id: 'guardrail',   zone: 'back',  cell: [6, 1], span: [2, 1], h: 0.85, kind: 'metal',  label: '公路护栏' },
    { id: 'lampPost',    zone: 'left',  cell: [0, 0], h: 3.60, kind: 'light',  label: '步道灯杆' },
    { id: 'signBoard',   zone: 'right', cell: [0, 0], h: 2.40, kind: 'light',  label: '服务区指示灯箱' },
    { id: 'highway',     zone: 'far',   cell: [0, 0], span: [8, 1], h: 0.12, kind: 'decal',  label: '公路主线车流灯光' },
    { id: 'roadside',    zone: 'backFar', cell: [0, 0], span: [8, 1], h: 0.05, kind: 'decal', label: '路侧远景' },
  ],
});

/** 提示词点名的关键元素，用于静态校验的覆盖度检查（防止实现时漏项） */
export const REQUIRED_IDS = Object.freeze({
  seaCliff: ['awning','table','chairs','grill','campLamp','picnicMat','groundMat','utilityPost','bicycle','boardwalk','railing','bench','signpost','stoneSteps','reefCluster','seaGrass','lighthouse','breakwater','sailboat'],
  pineForest: ['hammock','campfire','logSeats','deck','woodSteps','footbridge','trailSign','birdhouse','bearBox','undergrowth','firewood','laundry','waterBucket','stream','mountains','pineLeft','pineRight'],
  wasteland: ['bunker','watchtower','sandbags','containers','corrugatedFence','wireFence','wreck','tires','oilDrums','warningSign','waterPurifier','generator','solarPanels','radar','barrelGrill','clothesline','ruinedSkyline'],
  highwaySA: ['gasCanopy','store','vending','charger','diningWindow','walkway','streetTrees','highway','roadSign','benchBins','washBasin','flagpole','guardrail','planter','parkingLines'],
});

/** 几何占位内缩比例：格子之间留出间隙，保证相邻物件必然不接触 */
export const CELL_INSET = 0.86;

/** 把 cell + span 解析成世界坐标下的占位矩形 */
export function placementFor(spec) {
  const zone = ZONES[spec.zone];
  if (!zone) throw new Error(`unknown zone: ${spec.zone}`);
  const spanX = spec.span ? spec.span[0] : 1;
  const spanZ = spec.span ? spec.span[1] : 1;
  const cw = (zone.maxX - zone.minX) / zone.cols;
  const ch = (zone.maxZ - zone.minZ) / zone.rows;
  const minX = zone.minX + spec.cell[0] * cw;
  const minZ = zone.minZ + spec.cell[1] * ch;
  const slotW = cw * spanX;
  const slotD = ch * spanZ;
  const w = slotW * CELL_INSET;
  const d = slotD * CELL_INSET;
  const x = minX + slotW / 2;
  const z = minZ + slotD / 2;
  return {
    ...spec,
    x, z, w, d, h: spec.h || 0.5,
    box: { minX: x - w / 2, maxX: x + w / 2, minZ: z - d / 2, maxZ: z + d / 2 },
    slot: { minX, maxX: minX + slotW, minZ, maxZ: minZ + slotD },
  };
}

export function resolveScene(sceneId) {
  const list = SCENE_LAYOUTS[sceneId];
  if (!list) throw new Error(`unknown scene: ${sceneId}`);
  return list.map(placementFor);
}

function intersects(a, b) {
  return a.minX < b.maxX - 1e-6 && a.maxX > b.minX + 1e-6 &&
         a.minZ < b.maxZ - 1e-6 && a.maxZ > b.minZ + 1e-6;
}

/**
 * 静态穿模校验：越界 / 侵入营位禁放区 / 格子越界 / 实体两两重叠 / 覆盖度。
 * 返回问题字符串数组，空数组表示通过。
 */
export function validateAll() {
  const issues = [];
  const innerBox = { minX: -BASE.inner, maxX: BASE.inner, minZ: -BASE.inner, maxZ: BASE.inner };

  // 0. KEEP_OUT 必须容纳所有车型
  for (const [id, v] of Object.entries(VEHICLES)) {
    const vb = { minX: -v.halfLength, maxX: v.halfLength, minZ: -v.halfWidth, maxZ: v.deployZ };
    if (vb.minX < KEEP_OUT.minX || vb.maxX > KEEP_OUT.maxX || vb.minZ < KEEP_OUT.minZ || vb.maxZ > KEEP_OUT.maxZ) {
      issues.push(`[vehicle:${id}] 车型占位超出 KEEP_OUT 禁放区`);
    }
    if (v.height > 6.0) issues.push(`[vehicle:${id}] 车高 ${v.height} 超出取景上限`);
  }

  for (const sceneId of Object.keys(SCENE_LAYOUTS)) {
    const placed = resolveScene(sceneId);
    const ids = new Set(placed.map((p) => p.id));
    for (const req of REQUIRED_IDS[sceneId] || []) {
      if (!ids.has(req)) issues.push(`[${sceneId}] 缺少提示词点名元素: ${req}`);
    }
    for (const p of placed) {
      const tag = `[${sceneId}/${p.id}]`;
      if (p.box.minX < innerBox.minX || p.box.maxX > innerBox.maxX ||
          p.box.minZ < innerBox.minZ || p.box.maxZ > innerBox.maxZ) {
        issues.push(`${tag} 越出底座内界 (±${BASE.inner})`);
      }
      if (intersects(p.box, KEEP_OUT)) issues.push(`${tag} 侵入中央营位禁放区（会与车辆穿模）`);
      const zone = ZONES[p.zone];
      if (p.slot.minX < zone.minX - 1e-6 || p.slot.maxX > zone.maxX + 1e-6 ||
          p.slot.minZ < zone.minZ - 1e-6 || p.slot.maxZ > zone.maxZ + 1e-6) {
        issues.push(`${tag} cell+span 越出所属分区 ${p.zone}`);
      }
      if (p.h > 6.0) issues.push(`${tag} 高度 ${p.h} 超出取景上限`);
    }
    for (let i = 0; i < placed.length; i++) {
      for (let j = i + 1; j < placed.length; j++) {
        const a = placed[i], b = placed[j];
        // h <= 0.06 视为贴地装饰层（地垫 / 水面 / 车位划线 / 林缘地被），
        // 允许与实体同区铺设，不构成穿模；仍受越界与禁放区约束。
        if (a.h <= 0.06 || b.h <= 0.06) continue;
        if (intersects(a.box, b.box)) {
          issues.push(`[${sceneId}] 实体重叠（穿模）: ${a.id} × ${b.id}`);
        }
      }
    }
  }
  return issues;
}
