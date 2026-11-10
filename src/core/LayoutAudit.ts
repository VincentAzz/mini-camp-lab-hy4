import * as THREE from 'three';
import { LayoutValidator, layout, contentBox } from './Layout';
import { Ticker } from './Ticker';
import { PropsLibrary } from '../common/PropsLibrary';
import { DecorController } from '../common/DecorController';
import { clearCloths } from '../common/Cloth';
import { clearLightBreath } from '../common/LightBreath';
import { createEnv } from '../app/State';
import { initRegistries } from '../registry';
import { listScenes } from '../registry/sceneRegistry';
import { listVehicles } from '../registry/vehicleRegistry';
import { listTimes } from '../registry/timeRegistry';
import { listWeathers } from '../registry/weatherRegistry';
import { compose } from './LightingComposer';
import type { SceneContext } from '../registry/types';

/**
 * 开发态全量运行时穿模审计（提示词 9-3 + 用户特别关注项）。
 * 用独立的 LayoutValidator / DecorController / 临时根节点，遍历 4 场景 × 5 车型，
 * 真正调用每个模块的 build()，再用真实包围盒做 checkRuntime()，
 * 结果通过本地 dev 中间件回写到 .check/full-audit.json 供离线核对。
 * 只在 dev 且由 main.ts 在 App 构造之前同步调用；生产构建完全不包含此路径。
 */
function report(payload: unknown): void {
  void fetch('/__layout_report', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  }).catch(() => { /* 中间件未启用时静默 */ });
}

function release(obj: THREE.Object3D): void {
  obj.traverse((o) => {
    if (o instanceof THREE.Mesh && (o.userData.isOutline || o.userData.merged)) o.geometry.dispose();
  });
}

export interface AuditResult {
  combo: string;
  objects: number;
  issues: string[];
}

export function startLayoutAudit(): void {
  initRegistries();
  const lib = new PropsLibrary();
  const env = createEnv();
  const staticIssues = layout.staticCheck();
  const results: AuditResult[] = [];

  for (const sm of listScenes()) {
    for (const vm of listVehicles()) {
      clearCloths();
      clearLightBreath();
      const decor = new DecorController();
      const validator = new LayoutValidator();
      validator.load(sm.id);
      const ctx: SceneContext = {
        root: new THREE.Group(),
        lib,
        decor,
        layout: validator,
        ticker: new Ticker(),
        env,
      };
      try {
        const sceneGroup = sm.build(ctx);
        const vehicleGroup = vm.build(ctx);
        validator.setVehicleBox(vehicleGroup, vm.id);
        results.push({
          combo: `${sm.id} × ${vm.id}`,
          objects: validator.summary().objects,
          issues: validator.checkRuntime(),
        });
        release(sceneGroup);
        release(vehicleGroup);
      } catch (err) {
        results.push({
          combo: `${sm.id} × ${vm.id}`,
          objects: 0,
          issues: [`构建异常：${err instanceof Error ? err.message : String(err)}`],
        });
      }
    }
  }

  // 清空审计残留，主应用随后会重新注册自己的布料 / 灯光呼吸
  clearCloths();
  clearLightBreath();

  // 真正的 400 组合：逐组验证「时间基准 × 天气修正」的合成参数合法（无 NaN / 负值 / 越界）
  const comboIssues: string[] = [];
  let comboCount = 0;
  for (const sm of listScenes()) {
    for (const vm of listVehicles()) {
      for (const tm of listTimes()) {
        for (const wm of listWeathers()) {
          comboCount++;
          const spec = compose(tm.light, wm.light);
          for (const [key, value] of Object.entries(spec)) {
            if (typeof value === 'number' && (!Number.isFinite(value) || value < -0.0001)) {
              comboIssues.push(`${sm.id}/${vm.id}/${tm.id}/${wm.id}: ${key} = ${value}`);
            }
          }
          if (spec.sky.cloud < 0 || spec.sky.cloud > 1.001) {
            comboIssues.push(`${sm.id}/${vm.id}/${tm.id}/${wm.id}: sky.cloud = ${spec.sky.cloud}`);
          }
          if (!(spec.sunIntensity > 0)) {
            comboIssues.push(`${sm.id}/${vm.id}/${tm.id}/${wm.id}: 太阳光强为 0`);
          }
        }
      }
    }
  }

  // 车轮朝向专项校验：wheel() 的轮盘平面必须落在 X-Y、法线沿 Z，
  // 即真实包围盒 X≈Y≈2r、Z≈轮宽；若绕错轴会变成 X≈w、Z≈2r（与车体侧面垂直）。
  const wheelIssues: string[] = [];
  {
    const probe = lib.wheel(0.42, 0.22);
    const b = contentBox(probe);
    const wx = b.max.x - b.min.x;
    const wy = b.max.y - b.min.y;
    const wz = b.max.z - b.min.z;
    if (!(wx > wy * 0.7 && wz < wx * 0.6)) {
      wheelIssues.push(
        `车轮朝向异常：真实包围盒 X=${wx.toFixed(2)} Y=${wy.toFixed(2)} Z=${wz.toFixed(2)}；` +
        `期望 X≈Y≈0.84、Z≈0.22（轮盘法线沿 Z）`,
      );
    }
  }

  const totalIssues = results.reduce((n, r) => n + r.issues.length, 0);
  report({
    type: 'full-audit',
    timestamp: new Date().toISOString(),
    combos: results.length,
    comboCount,
    comboIssues,
    wheelIssues,
    totalIssues,
    staticIssues,
    results,
  });
  console.info(`[layout-audit] ${results.length} 组真实包围盒校验（冲突 ${totalIssues}）；${comboCount} 组合成参数校验（问题 ${comboIssues.length}）；车轮朝向问题 ${wheelIssues.length}`);

  // 主应用 rebuildAll 完成后，再上报默认组合的运行时状态
  setTimeout(() => {
    report({
      type: 'combo',
      timestamp: new Date().toISOString(),
      combo: 'default',
      summary: layout.summary(),
      runtimeIssues: layout.checkRuntime(),
      staticIssues,
    });
  }, 1800);
}
