import { STATUS_LABELS, type TaskStatus } from "@/lib/types";

const styles: Record<TaskStatus, string> = {
  pending: "border-slate-500/30 bg-slate-500/10 text-slate-300",
  running: "border-amber-400/30 bg-amber-400/10 text-amber-300",
  done: "border-emerald-400/30 bg-emerald-400/10 text-emerald-300",
};

const dots: Record<TaskStatus, string> = {
  pending: "bg-slate-400",
  running: "bg-amber-400 animate-pulse",
  done: "bg-emerald-400",
};

export default function StatusPill({ status }: { status: TaskStatus }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-medium ${styles[status]}`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${dots[status]}`} />
      {STATUS_LABELS[status]}
    </span>
  );
}
