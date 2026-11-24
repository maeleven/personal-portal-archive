import { NextResponse } from "next/server";
import { optimizeFeedback } from "@/lib/ai";
import { FEEDBACK_LABELS, type FeedbackType } from "@/lib/types";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export async function POST(request: Request) {
  let body: { raw?: string; type?: FeedbackType; sourcePage?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "请求体不是合法 JSON" }, { status: 400 });
  }

  const raw = body.raw?.trim() || "";
  const type = body.type as FeedbackType;
  const sourcePage = body.sourcePage?.trim() || "/";

  if (!raw || raw.length < 2 || !(type in FEEDBACK_LABELS)) {
    return NextResponse.json({ error: "反馈内容或类型不完整" }, { status: 400 });
  }

  const optimized = await optimizeFeedback(raw, FEEDBACK_LABELS[type], sourcePage);
  return NextResponse.json({ optimized });
}
