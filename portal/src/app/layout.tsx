import type { Metadata } from "next";
import Nav from "@/components/Nav";
import GlobalFeedback from "@/components/GlobalFeedback";
import "./globals.css";

export const metadata: Metadata = {
  title: "一只虫 · 个人门户",
  description: "二次开发作品、GitHub 关注项目，以及一个会把反馈变成任务的个人门户。",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <body>
        <Nav />
        <main className="mx-auto min-h-[70vh] max-w-6xl px-5 pb-28 pt-10">{children}</main>
        <footer className="border-t border-white/10 py-8 text-center text-xs text-slate-500">
          <p>一只虫 · 个人门户原型 · 私密自用</p>
          <p className="mt-1">每一条反馈都会变成一个可追踪的 WorkBuddy 任务</p>
        </footer>
        <GlobalFeedback />
      </body>
    </html>
  );
}
