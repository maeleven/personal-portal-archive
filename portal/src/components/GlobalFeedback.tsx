"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";
import FeedbackWidget from "./FeedbackWidget";

export default function GlobalFeedback() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {open && (
        <div className="panel mb-3 w-[min(92vw,380px)] p-4 shadow-2xl">
          <div className="mb-2 flex items-center justify-between">
            <span className="text-xs font-medium text-slate-400">当前页面反馈</span>
            <button
              onClick={() => setOpen(false)}
              className="text-slate-500 hover:text-slate-200"
              aria-label="关闭"
            >
              ✕
            </button>
          </div>
          <FeedbackWidget key={pathname} sourcePage={pathname} compact />
        </div>
      )}

      <button
        onClick={() => setOpen((value) => !value)}
        className="flex h-12 items-center gap-2 rounded-full bg-accent px-5 text-sm font-semibold text-white shadow-lg shadow-accent/25 transition-transform hover:scale-105"
      >
        <span className="text-lg leading-none">✦</span>
        {open ? "收起" : "反馈 / 建任务"}
      </button>
    </div>
  );
}
