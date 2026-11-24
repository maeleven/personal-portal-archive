import { NextResponse } from "next/server";
import { createTaskFromFeedback } from "@/lib/workbuddy";
import { FEEDBACK_LABELS, type FeedbackInput, type FeedbackType } from "@/lib/types";

export async function POST(request: Request) {
  let body: Partial<FeedbackInput>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "请求体不是合法 JSON" }, { status: 400 });
  }

  const type = body.type as FeedbackType;
  const content = body.content?.trim();
  const raw = typeof body.raw === "string" ? body.raw.trim() : undefined;
  const sourcePage = body.sourcePage?.trim() || "/";

  if (!type || !(type in FEEDBACK_LABELS) || !content || content.length < 2) {
    return NextResponse.json({ error: "反馈类型或内容不完整" }, { status: 400 });
  }

  try {
    const task = await createTaskFromFeedback({ type, content, raw, sourcePage });
    return NextResponse.json(task, { status: 201 });
  } catch (err) {
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "创建 WorkBuddy 任务失败" },
      { status: 500 },
    );
  }
}
