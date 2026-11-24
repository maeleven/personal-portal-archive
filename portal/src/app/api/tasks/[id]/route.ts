import { NextResponse } from "next/server";
import { getTask } from "@/lib/workbuddy";

export const dynamic = "force-dynamic";

export async function GET(_request: Request, { params }: { params: { id: string } }) {
  const task = await getTask(params.id);
  if (!task) {
    return NextResponse.json({ error: "任务不存在" }, { status: 404 });
  }
  return NextResponse.json(task);
}
