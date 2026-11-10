# mini-camp-lab · 微缩营地巡游

一个网页端三渲二微缩房车营地小玩具：4 场景 × 5 车型 × 4 时间 × 5 天气 = **400 种组合**自由巡游，默认第一眼是「海崖 · C 型房车 · 黄昏 · 晴朗」。所有几何与贴图均由代码程序化生成，运行时零网络依赖。

> 需求原文：`PROMPT.md`（由工作目录外层 `A-多场景房车营地小玩具-完整提示词.md` 原样复制；外层原件保留未改动）

## 当前状态

```
✅ 已交付并发布 —— P0~P10 全部完成，全量校验通过，已推送 GitHub 并部署 GitHub Pages
```

- 2026-11-10 用户审阅通过 `DESIGN.md`（无修改意见），授权无人值守连续推进至交付。
- 4 场景 × 5 车型 × 4 时间 × 5 天气 = 400 组合全部可切换；默认「海崖 · C 型房车 · 黄昏 · 晴朗」。
- 全量校验：`pnpm typecheck` / `pnpm build` / `pnpm validate:layout` / `pnpm validate:contracts` 全通过；运行时审计 20 组真实包围盒 0 穿模、400 组合成参数 0 问题、车轮朝向专项 0 问题；内置预览实测 60 fps。
- 2026-11-10 追加修复：车轮方向、遮阳棚悬空、废土残骸车轮与轮胎堆；详见 `DELIVERY.md`。
- 收尾：全部文档归集到 `docs/`，外层提示词复制为 `docs/PROMPT.md`；按用户新指令推送 GitHub 并部署 Pages；本地 dev 服务器已停止。
- **特别关注**：模型穿模问题（布局约束 + 静态校验 + 运行时审计三重保障，详见 `DESIGN.md` §12）。

## 在线访问

| 项 | 地址 |
| --- | --- |
| GitHub 仓库 | <https://github.com/VincentAzz/mini-camp-lab-hy4> |
| GitHub Pages | <https://vincentazz.github.io/mini-camp-lab-hy4/> |

## 文档索引（全部位于 `docs/`，本目录会被 GitHub 识别为仓库首页 README）

| 文件 | 内容 |
| --- | --- |
| `PROMPT.md` | 需求提示词原文副本（工作目录外层原件保留，字节一致） |
| `DESIGN.md` | **实现设计文档（已审阅通过，实现基线 v0.6）**：逐节需求理解、技术选型、四套注册表架构、逐场景/逐车型/逐时段/逐天气实现方案、三渲二渲染、UI 与过渡、动效清单、阶段计划、风险取舍、§12 穿模专项、逐节验收自查表 |
| `TASKS.md` | 可勾选任务清单 + 阶段性逐条复盘记录 + 遗留项 + 收尾记录 |
| `DEPENDENCIES.md` | 全部依赖与体积统计（4 个直接依赖，虚拟仓库 25 个包条目） |
| `DELIVERY.md` | 最终交付说明：验证结果、修复记录、取舍、发布与流程约束核对 |
| `README.md` | 本文件：项目入口、状态、运行方式与约束速查 |

## 目录约定

- 项目源码、配置、构建产物（`dist/`）与全部文档一律写入 `mini-camp-lab/`；**所有文档统一收拢在 `mini-camp-lab/docs/`**。
- 工作目录外层既有的 `A-多场景房车营地小玩具-完整提示词.md` 及其他文件保持原样，不改动、不移动、不删除（仅复制了一份作为 `docs/PROMPT.md`）。
- 目录结构见 `DESIGN.md` §3.2：`src/core`（渲染核心）、`src/registry`（四套注册表）、`src/common`（公共系统）、`src/scenes/*`（场景模块）、`src/vehicles/*`（车型模块）、`src/times/*`、`src/weathers/*`、`src/ui/*`、`src/data/layouts.js`（穿模布局数据）、`scripts/*`（校验脚本）、`.github/workflows/*`（Pages 部署）。

## 运行方式

以下命令在项目根 `mini-camp-lab/` 执行：

```bash
pnpm install          # 已执行，4 个直接依赖
pnpm dev              # 启动本地 Vite 服务（127.0.0.1:5173）
pnpm build            # tsc --noEmit + vite build → dist/
pnpm typecheck        # 类型检查
pnpm validate:layout  # 静态布局 / 穿模校验（4 场景 × 5 车型）
pnpm validate:contracts # 模块契约与注册表自动装配校验
```

开发与调试阶段的页面打开**只用内置预览**（`http://127.0.0.1:5173/?debug=1` 可显示当前组合、帧率、Draw Call、静态与运行时穿模冲突数）；按 `H` 隐藏界面、`D` 切换调试面板。收尾后本地服务器已停止，可直接访问上方的 GitHub Pages 在线地址。

## 扩展方式（提示词 2.5 / 3.6）

新增场景：新建 `src/scenes/<新id>/index.ts`，`default export` 一个 `SceneModule`，并在 `src/data/layouts.js` 的 `SCENE_LAYOUTS` / `REQUIRED_IDS` 登记实体占位。**核心渲染、切换逻辑、注册表与 UI 都无需修改** —— `registry/index.ts` 用 `import.meta.glob` 自动发现所有模块，UI 按钮由注册表遍历生成。新增车型 / 时间 / 天气同理。

## 流程约束速查（提示词第九节，含收尾阶段的授权变更）

| # | 约束 |
| --- | --- |
| 9-1 | 文档先行：审阅同意前不编码、不搭脚手架、不装依赖；审阅意见先回写 `DESIGN.md`（已于 2026-11-10 通过，无修改意见） |
| 9-2 | 页面预览、打开与调试**仅用内置浏览器 / 内置预览**；严禁启动系统浏览器（Chrome / Edge / Firefox），严禁 `start` / `open` 类命令打开页面 |
| 9-3 | 每完成一个阶段模块，回提示词对应章节逐条核对，结论写入 `TASKS.md` 复盘区；拿不准回原文确认；交付前全文逐节自查 |
| 9-4 | **删除红线**：严禁任何通配符 / 递归删除；大规模清理用 `pnpm install --force` 或「整体重命名挪开」或列为「待清理项」；确需删单文件须逐一显式完整绝对路径并移入回收站，无法可靠移入则保留并交用户处理 |
| 9-5 | **实现阶段**严格仅本地 git 提交、不配置远程、不 push、不对外发布；**收尾阶段用户 2026-11-10 明确授权**推送至 `VincentAzz/mini-camp-lab-hy4` 并部署 GitHub Pages，据此执行（授权变更已回写 `DESIGN.md` 附录 D v0.6） |

明确禁用指令（任何理由都不放宽）：`*` 通配删除、`Remove-Item -Recurse`、`rm -rf`、`del *`、`shutil.rmtree()` 等。

## 版本管理

- 项目内 git 仓库，本地提交粒度：脚手架 / 单场景 / 单车型 / 公共系统 / UI 功能 / 文档更新 / 收尾发布。
- 实现阶段仅本地提交；收尾阶段按用户授权新增远程 `origin` 并推送 `master`。仓库由用户预先创建，未执行 `gh repo create` 等新建仓库操作。
- GitHub Pages 由仓库内 `.github/workflows/deploy-pages.yml` 构建 `dist/` 并发布到 `gh-pages` 分支。
