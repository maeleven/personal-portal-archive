# personal-portal-archive

开源归档仓库，包含十一部分内容：

## 目录结构

| 目录 | 内容 |
|---|---|
| `portal/` | 个人门户完整源码（Next.js 14 + React 18 + TypeScript + Tailwind） |
| `wechat-article/` | 微信文章《入门 MES 系统必会的 66 个专业术语解析》完整网页 HTML |
| `wechat-library/` | 公众号「滚滚的全栈运动场」46 篇半导体 MES/CIM 历史文章资料库（图文本地化） |
| `wechat-article/filee/` | 公众号「分享迷」文章《GitHub 3万 Star 的文件转换神器 Filee》完整归档（图文本地化） |
| `wechat-article/ai-agent-handbook/` | 公众号「哆咪AI编程」文章《阿里云开源 AI Agent Handbook》完整归档 |
| `wechat-article/agent-orchestrator/` | 公众号「胶兜」文章《10.6 万 star 的 agent 编排台》完整归档（图文本地化） |
| `wechat-library/fmea/` | AIAG 第五版 FMEA 中文版 PDF 转 HTML（239 页，图文本地化，可搜索） |
| `wechat-article/rust-anything/` | 公众号「逛逛GitHub」文章《rust-anything：让 AI 给旧项目性能提速》完整归档（图文本地化） |
| `wechat-article/academic-figure-skill/` | 公众号「前沿技术分享」文章《装上这个开源 Skill，AI 画图按 Nature 标准来》完整归档（图文本地化） |
| `wechat-article/tokeneconomizer/` | 公众号「AI开源无界」文章《微软开源了个省钱插件：让 Claude Code、Codex 越用越省钱》完整归档（图文本地化） |
| `wechat-article/billion-context/` | 《billion-context：让编码 Agent 会话连跑数月不崩的本地上下文折叠代理》完整归档（图文本地化，已去除出处信息） |

## 个人门户

聚合「二次开发作品」与「GitHub 关注项目」的个人站，核心特色：任意页面反馈 → AI 优化 → 生成真实 WorkBuddy 任务 → 回显状态与结果。

- 本地运行：`cd portal && pnpm install && pnpm dev`
- 生产构建：`cd portal && pnpm build`

> 注：`data/tasks.json` 为运行时任务镜像，含反馈数据，故不纳入版本库。

## 微信文章

来源：https://mp.weixin.qq.com/s/2ZCEb8mQ1kzAZULF26NoXg
`wechat-article/index.html` 为完整抓取的网页（约 4MB）。

## 半导体 MES/CIM 历史文章资料库

来源公众号：滚滚的全栈运动场。共 **46 篇**（2026-06 ~ 2026-11），按时间倒序排列，支持标题/日期搜索。

打开 [`wechat-library/index.html`](wechat-library/index.html) 浏览，含左侧目录、搜索框、完整正文与 109 张本地化图片；每篇均附微信原文链接。

内容仅供学习交流，版权归原作者所有。

## Filee 文章归档

来源公众号：分享迷。文章《这个最无敌：GitHub 3万 Star，270 种格式，完全免费，还不用联网》，完整图文归档（9 张本地化图片）。

打开 [`wechat-article/filee/index.html`](wechat-article/filee/index.html) 浏览。

内容仅供学习交流，版权归原作者所有。

## AI Agent Handbook 文章归档

来源公众号：哆咪AI编程。文章《阿里云开源了一本〈AI Agent Handbook〉，系统讲解 AI Agent 工程实践》，完整正文归档。

打开 [`wechat-article/ai-agent-handbook/index.html`](wechat-article/ai-agent-handbook/index.html) 浏览。

内容仅供学习交流，版权归原作者所有。

## Agent 编排台文章归档

来源公众号：胶兜。文章《10.6 万 star 的 agent 编排台：把一群 agent 组织成一家公司》，完整图文归档（3 张本地化图片）。

打开 [`wechat-article/agent-orchestrator/index.html`](wechat-article/agent-orchestrator/index.html) 浏览。

内容仅供学习交流，版权归原作者所有。

## AIAG 第五版 FMEA 中文版

来源：百度网盘分享《第五版FMEA中文版.pdf》（239 页）。已转换为 HTML 资料库：每页保留原始页面影像，并附可展开、可全文搜索的文字层。

打开 [`wechat-library/fmea/index.html`](wechat-library/fmea/index.html) 浏览。

内容仅供学习交流，版权归原作者所有。

## rust-anything 文章归档

来源公众号：逛逛GitHub。文章《GitHub 上开源不到 7 天拿下 7000 Star，让 AI 给旧项目性能提速。》，完整图文归档（8 张本地化图片）。

打开 [`wechat-article/rust-anything/index.html`](wechat-article/rust-anything/index.html) 浏览。

内容仅供学习交流，版权归原作者所有。

## academic-figure-skill 文章归档

来源公众号：前沿技术分享。文章《装上这个开源 Skill，AI 画图按 Nature 标准来》，完整图文归档（4 张本地化图片）。

打开 [`wechat-article/academic-figure-skill/index.html`](wechat-article/academic-figure-skill/index.html) 浏览。

内容仅供学习交流，版权归原作者所有。

## TokenEconomizer 文章归档

来源公众号：AI开源无界。文章《微软开源了个省钱插件：让 Claude Code、Codex 越用越省钱》，完整图文归档（6 张本地化图片）。

打开 [`wechat-article/tokeneconomizer/index.html`](wechat-article/tokeneconomizer/index.html) 浏览。

内容仅供学习交流，版权归原作者所有。

## billion-context 文章归档

技术文章《billion-context：让编码 Agent 会话连跑数月不崩的本地上下文折叠代理》，完整图文归档（3 张本地化图片），已去除源链接与作者出处信息。

打开 [`wechat-article/billion-context/index.html`](wechat-article/billion-context/index.html) 浏览。

内容仅供学习交流，版权归原作者所有。
