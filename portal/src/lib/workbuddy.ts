import { callMcp } from "./mcp";
import { findTask, readTasks, upsertTask } from "./store";
import { FEEDBACK_LABELS, type FeedbackInput, type PortalTask, type TaskStatus } from "./types";

/**
 * WorkBuddy 任务适配层
 * ------------------------------------------------------------------
 * 反馈会真实创建为项目中的 WorkBuddy 任务（通过 MCP 网关的 todo_create）。
 * data/tasks.json 只作为门户侧的展示镜像，状态与结果从真实任务同步。
 */

interface WbTodoSummary {
  id: string;
  title: string;
  status: string;
}

interface WbTodoDetail extends WbTodoSummary {
  description?: string;
  status_id?: string;
  updated_at?: string;
}

function mapStatus(status: string): TaskStatus {
  switch (status) {
    case "done":
      return "done";
    case "running":
      return "running";
    case "paused":
    case "claim":
    default:
      return "pending";
  }
}

function buildTitle(type: FeedbackInput["type"], content: string): string {
  const overview = /【问题概述】\s*([\s\S]*?)(?=【|$)/.exec(content)?.[1]?.trim();
  let core = (overview || content)
    .replace(/来源页面\s*\S+\s*的?/, "")
    .replace(/^[\s，,、]+/, "")
    .trim();
  core = (core.split(/[。！？\n]/)[0] || core).trim();
  const short = core.slice(0, 24);
  return `${FEEDBACK_LABELS[type]}：${short}${core.length > 24 ? "…" : ""}`;
}

export async function createTaskFromFeedback(input: FeedbackInput): Promise<PortalTask> {
  const now = new Date().toISOString();
  const title = buildTitle(input.type, input.content);
  const description = [
    `来源页面：${input.sourcePage}`,
    `反馈类型：${FEEDBACK_LABELS[input.type]}`,
    input.raw ? `原始反馈：${input.raw}` : null,
    "",
    "优化后的任务描述：",
    input.content,
  ]
    .filter((line) => line !== null)
    .join("\n");

  const created = await callMcp<string>("todo_create", { title, description });
  const match = /ID:\s*([A-Za-z0-9_-]+)/.exec(created || "");
  if (!match?.[1]) {
    throw new Error(`未能从 WorkBuddy 返回值中解析任务 ID：${created}`);
  }
  const workbuddyId = match[1];

  const task: PortalTask = {
    id: `portal_${Date.now().toString(36)}_${workbuddyId}`,
    title,
    type: input.type,
    content: input.content,
    raw: input.raw,
    sourcePage: input.sourcePage,
    status: "pending",
    createdAt: now,
    updatedAt: now,
    result: null,
    workbuddyId,
  };
  upsertTask(task);
  return task;
}

export async function syncTasks(): Promise<PortalTask[]> {
  const local = readTasks();
  let remote: Record<string, WbTodoSummary> = {};
  try {
    const list = await callMcp<{ items: WbTodoSummary[] }>("todo_list", { limit: 200 });
    remote = Object.fromEntries((list.items || []).map((item) => [item.id, item]));
  } catch {
    /* 网关临时不可用时保留本地镜像状态 */
  }

  return local.map((task) => {
    if (!task.workbuddyId) return task;
    const wb = remote[task.workbuddyId];
    if (!wb) return task;
    const status = mapStatus(wb.status);
    if (status === task.status) return task;
    return upsertTask({
      ...task,
      status,
      result:
        status === "done"
          ? `WorkBuddy 任务已完成（任务 ID：${task.workbuddyId}）。完整处理记录可在 WorkBuddy 中查看。`
          : task.result,
      updatedAt: new Date().toISOString(),
    });
  });
}

export async function getTask(id: string): Promise<PortalTask | undefined> {
  const task = findTask(id);
  if (!task) return undefined;
  if (!task.workbuddyId) return task;

  try {
    const wb = await callMcp<WbTodoDetail>("todo_show", { todo_id: task.workbuddyId });
    const status = mapStatus(wb.status);
    if (status === task.status) return task;
    return upsertTask({
      ...task,
      status,
      result:
        status === "done"
          ? `WorkBuddy 任务已完成（任务 ID：${task.workbuddyId}）。完整处理记录可在 WorkBuddy 中查看。`
          : task.result,
      updatedAt: new Date().toISOString(),
    });
  } catch {
    return task;
  }
}
