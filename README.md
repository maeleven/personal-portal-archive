# personal-portal-archive

私有归档仓库，包含两部分内容：

## 目录结构

| 目录 | 内容 |
|---|---|
| `portal/` | 个人门户完整源码（Next.js 14 + React 18 + TypeScript + Tailwind） |
| `wechat-article/` | 微信文章《入门 MES 系统必会的 66 个专业术语解析》完整网页 HTML |

## 个人门户

聚合「二次开发作品」与「GitHub 关注项目」的个人站，核心特色：任意页面反馈 → AI 优化 → 生成真实 WorkBuddy 任务 → 回显状态与结果。

- 本地运行：`cd portal && pnpm install && pnpm dev`
- 生产构建：`cd portal && pnpm build`

> 注：`data/tasks.json` 为运行时任务镜像，含反馈数据，故不纳入版本库。

## 微信文章

来源：https://mp.weixin.qq.com/s/2ZCEb8mQ1kzAZULF26NoXg
`wechat-article/index.html` 为完整抓取的网页（约 4MB）。
