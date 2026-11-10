# 「微缩营地巡游」· 项目依赖统计文档（DEPENDENCIES.md）

> **当前状态：已安装 4 个直接依赖，均已锁定版本。**
> 用户于 2026-11-10 审阅通过 `DESIGN.md` 后进入实现阶段，执行了 `pnpm install`。
> 本文件随每次依赖变化同步更新，记录每个依赖的**名称、版本、用途与体积**；项目结束时保留最终版。

| 项 | 值 |
| --- | --- |
| 最近更新 | 2026-11-10 |
| 阶段 | P1~P9 实现中 |
| 直接依赖数 | **4**（1 production + 3 dev） |
| 虚拟仓库包条目 | 25（含传递依赖） |
| `pnpm install` 执行次数 | 2（首次被 pnpm 12 的 `ERR_PNPM_IGNORED_BUILDS` 拦截，补 `allowBuilds: esbuild: true` 后成功） |
| 包管理器 | pnpm 12.3.4（本机预装，本项目未做全局安装） |
| node | v22.22.2（本机预装） |
| 全局包 | **无**（`pnpm list -g --depth 0` → No global packages found） |

## 1. 统计口径与方法

| 类别 | 统计内容 | 采集命令 |
| --- | --- | --- |
| A. 项目内依赖 | `package.json` 的 `dependencies` / `devDependencies` | `pnpm list --depth 0`、`pnpm-lock.yaml` |
| A. 项目内占用 | `node_modules/` 表观体积、虚拟仓库体积 | `du -sh node_modules`、`du -sh node_modules/.pnpm` |
| A. 单包体积 | 各直接依赖在虚拟仓库中的目录体积 | `du -sh node_modules/.pnpm/<name>@<version>` |
| A. 构建产物 | `dist/` 体积 | `du -sh dist`（构建后填写） |
| B. 系统仓库依赖 | 全局安装的包及位置 | `pnpm list -g --depth 0`、`pnpm root -g` |
| B. 系统级占用 | pnpm 全局内容寻址仓库 | `pnpm store path` → `du -sh` |

> 注：pnpm 使用硬链接 + 全局内容寻址仓库，同一份包内容在不同项目间不重复占用磁盘。因此 `node_modules` 的 86M 是**表观体积**，实际新增磁盘占用远小于此；全局 store 的 1.9G 是本机所有 pnpm 项目共享的历史总量，**不是本项目引入的增量**。

## 2. 表 A · 项目内依赖（已安装）

| 包名 | 类别 | 版本 | 用途 | 虚拟仓库内体积 | 状态 |
| --- | --- | --- | --- | --- | --- |
| `three` | dependencies | 0.187.0 | 三维渲染核心、OrbitControls、MeshToonMaterial、InstancedMesh、RoundedBoxGeometry、BufferGeometryUtils | 23 MB | ✅ 已安装 |
| `vite` | devDependencies | 7.3.8 | 开发服务器、模块 glob 自动注册、静态构建 | 2.3 MB（其传递依赖 esbuild / rollup 等另计） | ✅ 已安装 |
| `typescript` | devDependencies | 5.9.3 | 类型检查（`pnpm typecheck`）与编译 | 23 MB | ✅ 已安装 |
| `@types/three` | devDependencies | 0.187.0 | Three.js 类型声明 | 4.4 MB | ✅ 已安装 |

**明确不引入**：UI 框架、状态管理库、动画库、后处理库、图标字体、外部字体、任何运行时 CDN 或网络资源（理由见 `DESIGN.md` §2.2）。运行时零网络请求已由「所有贴图 Canvas 程序化生成 + 内联 SVG 图标 + 系统字体栈」保证。

### 版本选择说明

查询到最新版本为 three 0.187.0 / vite 8.3.7 / typescript 7.0.2 / @types/three 0.187.0。刻意选用 **Vite 7.3.8 + TypeScript 5.9.3** 而非刚发布的 Vite 8 / TS 7，规避新版本工具链与 `@types/three` 的兼容不确定性；回写至 `DESIGN.md` 附录 D。

## 3. 表 A · 项目内磁盘占用

| 目录 / 项 | 体积 | 说明 | 状态 |
| --- | --- | --- | --- |
| `node_modules/` | **86 MB** | 表观体积（硬链接） | ✅ 已产生 |
| `node_modules/.pnpm/` | **81 MB** | 虚拟仓库，25 个包条目 | ✅ 已产生 |
| `pnpm-lock.yaml` | 已生成 | 版本锁定，随本地 git 提交 | ✅ 已产生 |
| `pnpm-workspace.yaml` | 已生成 | `allowBuilds: esbuild: true`、`minimumReleaseAgeExclude: vite@7.3.8` | ✅ 已产生 |
| `dist/`（构建产物） | **729 KB** | `pnpm build` 产出：index.html 0.61 KB / CSS 4.35 KB（gzip 1.59 KB）/ JS 734.42 KB（gzip 196.16 KB）；67 个模块 | ✅ 已产生 |

## 4. 表 B · 写入系统仓库的依赖 / 全局包

| 名称 | 版本 | 用途 | 位置 | 体积 | 是否本项目引入 |
| --- | --- | --- | --- | --- | --- |
| node | v22.22.2 | 运行时 | 本机预装 | — | 否 |
| pnpm | 12.3.4 | 包管理器 | 本机预装 | — | 否 |
| git | 2.55.0.windows.3 | 本地版本管理 | 本机预装 | — | 否 |
| 全局 npm / pnpm 包 | — | — | — | — | **无**（`pnpm list -g --depth 0` 返回 No global packages found） |

**本项目未向系统仓库写入任何依赖。** 全局内容寻址仓库 `E:\_Dev\node\pnpm-store\v11` 当前总量 1.9 GB，为本机历史共享缓存，其中本项目新增部分为上述 4 个包的内容寻址文件（硬链接到项目内，不额外重复占用）。

## 5. 依赖变化时的更新规则

1. 每次 `pnpm install` / 增删包 / 升级版本后，立即更新表 A 的版本、用途与体积，并重新统计表 A 磁盘占用。
2. 每次出现全局安装，立即更新表 B。
3. 每次变更在 §7 变更记录追加一行，注明变更内容与体积增量。
4. `pnpm-lock.yaml` 作为版本锁定的依据随本地 git 提交。

## 6. 清理红线（提示词第九节第 4 点）

| 场景 | 允许做法 | 严禁做法 |
| --- | --- | --- |
| 依赖损坏 / 需重装 | `pnpm install`、`pnpm install --force` | 任何通配符 / 递归删除 |
| 需隔离损坏目录 | **整体重命名挪开**（`node_modules` → `node_modules_broken`）后全新安装 | 对父目录一键清空 |
| 需清理构建缓存 | 同上，或列入交付说明「待清理项」交用户处理 | `rm -rf dist` / `del *` 等 |
| 确需删除单文件 | 逐一显式完整绝对路径 + 移入系统回收站；无法可靠移入则保留并列入「待清理项」 | 直接删除 |

**宁可换方法，不做大规模删除。** 本项目截至目前**未执行任何删除操作**。

## 7. 变更记录

| 日期 | 变更 | 体积增量 |
| --- | --- | --- |
| 2026-11-09 | 建立统计骨架；确认 P0 阶段零依赖、零安装命令、零项目内占用 | 0 |
| 2026-11-10 | 首次 `pnpm install`：安装 4 个直接依赖 / 23 个包，被 pnpm 12 的 `ERR_PNPM_IGNORED_BUILDS`（esbuild 构建脚本）拦截 | 约 86 MB（表观） |
| 2026-11-10 | 在 `pnpm-workspace.yaml` 补 `allowBuilds: esbuild: true` 后重跑 `pnpm install` 成功；确认无全局包写入、无远程仓库操作 | 0 |
