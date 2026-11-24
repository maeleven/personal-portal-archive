"use client";

import { useEffect, useState } from "react";
import TaskCard from "./TaskCard";
import type { PortalTask, TaskStatus } from "@/lib/types";

type Filter = "all" | TaskStatus;

const filters: { value: Filter; label: string }[] = [
  { value: "all", label: "全部" },
  { value: "pending", label: "待处理" },
  { value: "running", label: "进行中" },
  { value: "done", label: "已完成" },
];

export default function TaskBoard({ initialTasks }: { initialTasks: PortalTask[] }) {
  const [tasks, setTasks] = useState(initialTasks);
  const [filter, setFilter] = useState<Filter>("all");

  useEffect(() => {
    const timer = setInterval(async () => {
      try {
        const res = await fetch("/api/tasks", { cache: "no-store" });
        if (res.ok) setTasks((await res.json()) as PortalTask[]);
      } catch {
        /* 保持上一次数据 */
      }
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  const shown = filter === "all" ? tasks : tasks.filter((task) => task.status === filter);

  return (
    <div>
      <div className="mb-6 flex flex-wrap gap-2">
        {filters.map((item) => (
          <button
            key={item.value}
            onClick={() => setFilter(item.value)}
            className={`rounded-lg border px-3 py-2 text-xs transition-colors ${
              filter === item.value
                ? "border-accent/50 bg-accent/15 text-accent"
                : "border-white/10 bg-white/5 text-slate-400 hover:text-slate-200"
            }`}
          >
            {item.label}
            <span className="ml-1.5 text-[10px] opacity-70">
              {item.value === "all"
                ? tasks.length
                : tasks.filter((task) => task.status === item.value).length}
            </span>
          </button>
        ))}
      </div>

      {shown.length > 0 ? (
        <div className="grid gap-4 sm:grid-cols-2">
          {shown.map((task) => (
            <TaskCard key={task.id} task={task} />
          ))}
        </div>
      ) : (
        <div className="panel p-12 text-center">
          <p className="text-sm text-slate-400">这里还没有任务</p>
          <p className="mt-2 text-xs text-slate-600">
            在任意页面提交一条反馈，或从右下角悬浮按钮创建任务
          </p>
        </div>
      )}
    </div>
  );
}
