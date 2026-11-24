import StatusPill from "./StatusPill";
import { FEEDBACK_LABELS, type PortalTask } from "@/lib/types";

export default function TaskCard({ task }: { task: PortalTask }) {
  const time = new Date(task.createdAt).toLocaleString("zh-CN", {
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <article className="panel p-5">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="min-w-0">
          <h3 className="truncate text-sm font-semibold text-white">{task.title}</h3>
          <div className="mt-2 flex flex-wrap items-center gap-2 text-[11px] text-slate-500">
            <span className="chip">{FEEDBACK_LABELS[task.type]}</span>
            <span>来源 {task.sourcePage}</span>
            <span>·</span>
            <span>{time}</span>
          </div>
        </div>
        <StatusPill status={task.status} />
      </div>

      <p className="mt-3 text-xs leading-6 text-slate-300">{task.content}</p>

      {task.workbuddyId && (
        <p className="mt-2 text-[11px] text-slate-500">
          WorkBuddy 任务 ID：<span className="font-medium text-accent">{task.workbuddyId}</span>
        </p>
      )}

      {task.result && (
        <div className="mt-3 rounded-lg border border-emerald-400/20 bg-emerald-400/5 p-3">
          <p className="text-[11px] font-medium text-emerald-300">任务结果</p>
          <p className="mt-1 whitespace-pre-wrap text-xs leading-6 text-slate-300">{task.result}</p>
        </div>
      )}
    </article>
  );
}
