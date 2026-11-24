"use client";

import { useEffect, useState, type FormEvent } from "react";
import StatusPill from "./StatusPill";
import { FEEDBACK_LABELS, type FeedbackType, type PortalTask } from "@/lib/types";

const types: FeedbackType[] = ["bug", "feature", "idea", "other"];

export default function FeedbackWidget({
  sourcePage,
  compact = false,
}: {
  sourcePage: string;
  compact?: boolean;
}) {
  const [type, setType] = useState<FeedbackType>("feature");
  const [raw, setRaw] = useState("");
  const [optimized, setOptimized] = useState("");
  const [showOptimized, setShowOptimized] = useState(false);
  const [optimizing, setOptimizing] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [task, setTask] = useState<PortalTask | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!task || task.status === "done") return;
    const timer = setInterval(async () => {
      try {
        const res = await fetch(`/api/tasks/${task.id}`, { cache: "no-store" });
        if (res.ok) setTask((await res.json()) as PortalTask);
      } catch {
        /* 轮询失败时保留上一次状态 */
      }
    }, 1500);
    return () => clearInterval(timer);
  }, [task?.id, task?.status]);

  async function handleOptimize() {
    if (raw.trim().length < 2) {
      setError("再多写几个字吧");
      return;
    }
    setOptimizing(true);
    setError("");
    try {
      const res = await fetch("/api/optimize", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ raw: raw.trim(), type, sourcePage }),
      });
      if (!res.ok) throw new Error("AI 优化失败，请重试");
      const data = (await res.json()) as { optimized: string };
      setOptimized(data.optimized);
      setShowOptimized(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "AI 优化失败");
    } finally {
      setOptimizing(false);
    }
  }

  async function submit(content: string) {
    if (content.trim().length < 2) {
      setError("再多写几个字吧");
      return;
    }
    setSubmitting(true);
    setError("");
    try {
      const res = await fetch("/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type,
          content: content.trim(),
          raw: raw.trim() || undefined,
          sourcePage,
        }),
      });
      if (!res.ok) {
        const data = (await res.json().catch(() => ({}))) as { error?: string };
        throw new Error(data.error || "提交失败，请稍后再试");
      }
      setTask((await res.json()) as PortalTask);
      setRaw("");
      setOptimized("");
      setShowOptimized(false);
    } catch (err) {
      setError(err instanceof Error ? err.message : "提交失败");
    } finally {
      setSubmitting(false);
    }
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    void submit(showOptimized ? optimized : raw);
  }

  return (
    <div className={compact ? "" : "panel p-6"}>
      <div className="mb-4">
        <h3 className="text-base font-semibold text-white">把想法交给 WorkBuddy</h3>
        <p className="mt-1 text-xs text-slate-400">
          先用 AI 把反馈整理成清晰的任务描述，确认后提交为真实的 WorkBuddy 任务。
        </p>
      </div>

      <div className="space-y-3">
        <div className="flex flex-wrap gap-2">
          {types.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setType(item)}
              className={`rounded-lg border px-2.5 py-1.5 text-xs transition-colors ${
                type === item
                  ? "border-accent/50 bg-accent/15 text-accent"
                  : "border-white/10 bg-white/5 text-slate-400 hover:text-slate-200"
              }`}
            >
              {FEEDBACK_LABELS[item]}
            </button>
          ))}
        </div>

        <textarea
          value={raw}
          onChange={(event) => {
            setRaw(event.target.value);
            setShowOptimized(false);
          }}
          rows={compact ? 3 : 4}
          placeholder="说说你的问题、需求或点子…"
          className="w-full resize-none rounded-lg border border-white/10 bg-black/20 px-3 py-2.5 text-sm text-slate-200 outline-none placeholder:text-slate-600 focus:border-accent/60"
        />

        <div className="flex flex-wrap items-center justify-between gap-3">
          <span className="text-[11px] text-slate-600">来源：{sourcePage}</span>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => void submit(raw)}
              disabled={submitting}
              className="btn-ghost !px-3 !py-1.5 !text-xs disabled:opacity-50"
            >
              直接提交
            </button>
            <button
              type="button"
              onClick={() => void handleOptimize()}
              disabled={optimizing}
              className="btn-primary !px-3 !py-1.5 !text-xs disabled:opacity-50"
            >
              {optimizing ? "AI 优化中…" : "✦ AI 优化反馈"}
            </button>
          </div>
        </div>
        {error && <p className="text-xs text-rose-400">{error}</p>}
      </div>

      {showOptimized && (
        <form onSubmit={handleSubmit} className="mt-4 rounded-xl border border-accent/30 bg-accent/5 p-4">
          <p className="mb-2 text-xs font-medium text-accent">✦ AI 优化结果（可以直接修改）</p>
          <textarea
            value={optimized}
            onChange={(event) => setOptimized(event.target.value)}
            rows={compact ? 5 : 6}
            className="w-full resize-none rounded-lg border border-white/10 bg-black/20 px-3 py-2.5 text-xs leading-6 text-slate-200 outline-none focus:border-accent/60"
          />
          <div className="mt-3 flex justify-end gap-2">
            <button
              type="button"
              onClick={() => setShowOptimized(false)}
              className="btn-ghost !px-3 !py-1.5 !text-xs"
            >
              返回修改
            </button>
            <button type="submit" disabled={submitting} className="btn-primary !px-3 !py-1.5 !text-xs disabled:opacity-50">
              {submitting ? "提交中…" : "确认提交为 WorkBuddy 任务"}
            </button>
          </div>
        </form>
      )}

      {task && (
        <div className="mt-4 rounded-xl border border-white/10 bg-black/20 p-4">
          <div className="flex items-center justify-between gap-3">
            <span className="text-sm font-medium text-white">{task.title}</span>
            <StatusPill status={task.status} />
          </div>
          <p className="mt-2 whitespace-pre-wrap text-xs leading-6 text-slate-400">
            {task.status === "done" && task.result
              ? task.result
              : task.status === "running"
                ? "WorkBuddy 正在处理这个任务…"
                : "任务已创建，等待 WorkBuddy 接手…"}
          </p>
          <p className="mt-3 text-[11px] text-slate-500">
            本地记录：{task.id}
            {task.workbuddyId && (
              <>
                <br />
                WorkBuddy 任务：<span className="font-medium text-accent">{task.workbuddyId}</span>
              </>
            )}
          </p>
        </div>
      )}
    </div>
  );
}
