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

## ainlp-ai-collaboration 文章归档

技术文章《如何与 AI 协作，让每次工作都产生复利》（公众号「AINLP」）。完整正文归档，含 CLAUDE.md 配置、目录结构、Skills 等全部代码示例（3 个代码块）。

打开 [`wechat-article/ainlp-ai-collaboration/index.html`](wechat-article/ainlp-ai-collaboration/index.html) 浏览。

内容仅供学习交流，版权归原作者所有。

## AINLP 公众号历史文章资料库

来源公众号：AINLP（微信号 nlpjob）。收录 256 篇历史文章，按 24 个主题分类，完整正文归档并本地化 2968 张图片，支持分类导航与全文关键词检索，每篇可跳转微信原文。

打开 [`wechat-library/ainlp/index.html`](wechat-library/ainlp/index.html) 浏览。

内容仅供学习交流，版权归原作者所有。

## ainlp-deepseek-38800 文章归档

技术文章《三万八千八，DeepSeek带回家》（公众号「AINLP」，2025-03-20）。满血版 DeepSeek 671B 全参数微调部署与纯 CPU 本地化部署实践，含装机选型、xtuner 训练、模型转换与 llama.cpp/vLLM 部署全流程命令（25 个代码块）。

打开 [`wechat-article/ainlp-deepseek-38800/index.html`](wechat-article/ainlp-deepseek-38800/index.html) 浏览。

内容仅供学习交流，版权归原作者所有。

## ainlp-looped-transformer 文章归档

技术文章《从 RNN 到循环 Transformer：跨越 80 年的循环历史》（公众号「AINLP」，2026-11-25）。alphaXiv 图解指南全文翻译：从视觉皮层反馈、Hopfield 网络、RNN 到深度平衡模型、通用 Transformer 与连续思维链的循环计算脉络（6 张图解）。

打开 [`wechat-article/ainlp-looped-transformer/index.html`](wechat-article/ainlp-looped-transformer/index.html) 浏览。

内容仅供学习交流，版权归原作者所有。

## ainlp-agent-skills-guide 文章归档

- **首发！Agent Skills实战指南：从 PPT 生成到自动发推文，源码级复刻**（2026-02-26）
  - 原文：[微信公众号 AINLP](https://mp.weixin.qq.com/s?__biz=MjM5ODkzMzMwMQ==&mid=2650451024&idx=1&sn=15c2f9e94667f8af0e5b83bafcc7ca32&chksm=bffc784b6b732a39733bb3130e9ed8a39ac8e30eb0a1ae7d19373c3efd13b5a85366fb0c369a#rd)
  - 归档目录：`wechat-article/ainlp-agent-skills-guide/`（含本地图片与代码高亮）

## ainlp-skills-openclaw 文章归档

- **一文讲清 Skills 概念与 OpenClaw 运作机制**（2026-03-01）
  - 原文：[微信公众号 AINLP](https://mp.weixin.qq.com/s?__biz=MjM5ODkzMzMwMQ==&mid=2650451062&idx=1&sn=5b73c78a344538e29099d8b1db6128ac&chksm=bf592d13237cba938f45f0eeae8ee08171757807cf6c2d59bff39d09563fcf402c6a66c51662#rd)
  - 归档目录：`wechat-article/ainlp-skills-openclaw/`（含本地图片与代码高亮）

## ainlp-domain-adaptive-pretrain 文章归档

- **领域自适应之继续预训练 demo**（2022-05-08）
  - 原文：[微信公众号 AINLP](https://mp.weixin.qq.com/s?__biz=MjM5ODkzMzMwMQ==&mid=2650430367&idx=5&sn=526585455c3645f1898973a49c445ad3&chksm=bf80d51755c495fe7d1672db5a36b44370d3e41c8f40335c82f0be131eec6c1440555de75d86#rd)
  - 归档目录：`wechat-article/ainlp-domain-adaptive-pretrain/`（含本地图片与代码高亮）

## ainlp-new-intent 文章归档

- **基于预训练和对比学习的新意图发现**（2022-12-20）
  - 原文：[微信公众号 AINLP](https://mp.weixin.qq.com/s?__biz=MjM5ODkzMzMwMQ==&mid=2650435104&idx=4&sn=cdf287101767a30f1bb968f2d74c64f1&chksm=becde87a89ba616c971f21039570d94b5501df8c1a04712ecbda0bd387a59de95b596821d40e#rd)
  - 归档目录：`wechat-article/ainlp-new-intent/`（含本地图片与代码高亮）

## ainlp-lm-data-aug 文章归档

- **指导性语言生成模型之数据增强**（2022-05-21）
  - 原文：[微信公众号 AINLP](https://mp.weixin.qq.com/s?__biz=MjM5ODkzMzMwMQ==&mid=2650430625&idx=5&sn=233130a8c3de54fc9c25ee16c894032e&chksm=becddafb89ba53edbe521e48b8c0b6304f60ac06bcfc0ffc9826caf2bad9e63104403befc963#rd)
  - 归档目录：`wechat-article/ainlp-lm-data-aug/`（含本地图片与代码高亮）

## ainlp-nlu-dialogue 文章归档

- **NLU 落地场景：智能对话交互**（2021-06-10）
  - 原文：[微信公众号 AINLP](https://mp.weixin.qq.com/s?__biz=MjM5ODkzMzMwMQ==&mid=2650423263&idx=2&sn=034a8a2cc6b70a2c50ad3b3214213962&chksm=bffa0c4f3e4d84f9a5f53bbf83085e2dab89ddf47820b6737205855175c450ae86cbd950b8d9#rd)
  - 归档目录：`wechat-article/ainlp-nlu-dialogue/`（含本地图片与代码高亮）

## ainlp-dialogue-arch 文章归档

- **聊聊对话系统：技术架构**（2022-04-27）
  - 原文：[微信公众号 AINLP](https://mp.weixin.qq.com/s?__biz=MjM5ODkzMzMwMQ==&mid=2650430186&idx=3&sn=f50dfe7f12557792690e7b5044c0c222&chksm=bf482b9808568f210a4622cb4a6795da0ef33f14dd7e95bddc38bf0c4f6c7245c34d7bc84457#rd)
  - 归档目录：`wechat-article/ainlp-dialogue-arch/`（含本地图片与代码高亮）
