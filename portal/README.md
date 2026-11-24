# 个人门户原型

一个可运行的个人门户原型：聚合**二次开发作品**与 **GitHub 关注项目**，并把每个页面的反馈直接变成 WorkBuddy 任务，回显状态与结果。当前为私密自用版本，不含账号体系。

## 快速开始

```bash
cd /workspace/portal
pnpm install
pnpm dev
```

打开 http://localhost:3000 。生产构建用 `pnpm build && pnpm start`。

## 页面

| 路径 | 内容 |
|---|---|
| `/` | 首页：简介、统计、闭环说明、最近任务、精选作品 |
| `/works` | 二次开发作品：上游项目、主要改动、技术栈、链接 |
| `/github` | GitHub 关注项目：支持搜索与语言筛选 |
| `/about` | 关于我 |
| `/tasks` | 任务中心：按状态筛选，自动刷新 |
| 右下角悬浮按钮 | 任意页面的全局反馈入口 |

## 反馈 → 任务闭环（真实 WorkBuddy 任务）

1. 页面填写反馈后，可点 **AI 优化反馈**：服务端调用 codebuddy，把口语化反馈改写成【问题概述】【期望结果】【建议行动】结构；优化结果可直接编辑，确认后再提交。也可以跳过优化直接提交。
2. 提交时 `POST /api/feedback` 通过 MCP 网关调用 `todo_create`，在项目中创建**真实 WorkBuddy 任务**，并返回真实任务 ID。
3. `GET /api/tasks/[id]` 与 `GET /api/tasks` 通过 `todo_show` / `todo_list` 同步真实任务状态（待处理 / 进行中 / 完成）。
4. `data/tasks.json` 只是门户侧的展示镜像；任务的真实数据在工作区任务系统里。

## 关键实现

- `src/lib/mcp.ts`：MCP HTTP 网关调用封装
- `src/lib/workbuddy.ts`：创建与同步真实任务
- `src/lib/ai.ts`：AI 优化反馈（模型不可用时降级为本地模板改写）
- `src/app/api/optimize/route.ts`：AI 优化接口

## 数据文件

- `data/works.json`：二次开发作品，可直接编辑
- `data/github.json`：关注项目，正式版可改为调用 GitHub API 拉取 Starred 仓库
- `data/tasks.json`：运行时生成的任务（已加入 `.gitignore`）

## 技术栈

Next.js 14（App Router）· React 18 · TypeScript · Tailwind CSS · JSON 文件存储。
