# personal-portal-archive

开源归档仓库，包含四部分内容：

## 目录结构

| 目录 | 内容 |
|---|---|
| `portal/` | 个人门户完整源码（Next.js 14 + React 18 + TypeScript + Tailwind） |
| `wechat-article/` | 微信文章《入门 MES 系统必会的 66 个专业术语解析》完整网页 HTML |
| `wechat-library/` | 公众号「滚滚的全栈运动场」46 篇半导体 MES/CIM 历史文章资料库（图文本地化） |
| `wechat-article/filee/` | 公众号「分享迷」文章《GitHub 3万 Star 的文件转换神器 Filee》完整归档（图文本地化） |

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
