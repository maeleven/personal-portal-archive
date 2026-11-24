import { execFile } from "node:child_process";
import { promisify } from "node:util";

const runFile = promisify(execFile);

/**
 * 用 AI 把口语化的页面反馈改写成结构化的任务描述。
 * 走沙箱内的 codebuddy CLI（无交互模式）；失败时降级为本地模板改写，
 * 保证提交流程不会因为模型调用失败而中断。
 */
export async function optimizeFeedback(
  raw: string,
  typeLabel: string,
  sourcePage: string,
): Promise<string> {
  const prompt = [
    "你是个人门户的任务描述优化助手。请把用户提交的反馈改写成一份清晰、专业、可直接执行的任务描述。",
    "要求：",
    "1. 用中文，分成【问题概述】【期望结果】【建议行动】三段；",
    "2. 保留用户原始意图，不要凭空增加未提到的功能；",
    "3. 总字数控制在 180 字以内；",
    "4. 只输出改写后的内容，不要任何解释或前后缀。",
    `反馈类型：${typeLabel}`,
    `来源页面：${sourcePage}`,
    "----- 用户反馈开始 -----",
    raw,
    "----- 用户反馈结束 -----",
  ].join("\n");

  try {
    const { stdout } = await runFile(
      "codebuddy",
      [
        "-p",
        "--tools",
        "",
        "--no-session-persistence",
        "--model",
        "hy4flash-free",
        "--output-format",
        "text",
        prompt,
      ],
      {
        cwd: process.cwd(),
        timeout: 45_000,
        maxBuffer: 1024 * 1024,
      },
    );
    const text = stdout.trim();
    if (text.length > 0) return text;
  } catch {
    /* 降级到本地改写 */
  }

  return localOptimize(raw, typeLabel);
}

function localOptimize(raw: string, typeLabel: string): string {
  const text = raw.trim();
  return [
    `【问题概述】${typeLabel}：${text}`,
    "【期望结果】问题得到明确结论或有效改进。",
    "【建议行动】由 WorkBuddy 进一步分析该反馈，定位原因、给出方案并跟进落实。",
  ].join("\n");
}
