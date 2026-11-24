import Link from "next/link";
import FeedbackWidget from "@/components/FeedbackWidget";
import StatusPill from "@/components/StatusPill";
import { getGithubRepos, getWorks } from "@/lib/data";
import { syncTasks } from "@/lib/workbuddy";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const works = getWorks();
  const repos = getGithubRepos();
  const tasks = await syncTasks();
  const doneCount = tasks.filter((task) => task.status === "done").length;

  const stats = [
    { label: "二开作品", value: works.length },
    { label: "关注项目", value: repos.length },
    { label: "反馈任务", value: tasks.length },
    { label: "已完成任务", value: doneCount },
  ];

  return (
    <div className="space-y-14">
      <section className="panel overflow-hidden p-8 sm:p-12">
        <div className="flex flex-wrap items-center gap-2">
          <span className="chip !border-emerald-400/30 !bg-emerald-400/10 !text-emerald-300">
            私密自用
          </span>
          <span className="chip">个人门户原型</span>
        </div>
        <h1 className="mt-6 text-4xl font-bold leading-tight text-white sm:text-5xl">
          你好，我是一只虫。
        </h1>
        <p className="page-subtitle">
          这里收集我二次开发的作品和我关注的开源项目。更重要的是，每个页面都能把反馈直接变成
          WorkBuddy 任务，并追踪它的状态与结果——这个门户不只是展示，它会干活。
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/works" className="btn-primary">
            看看二开作品
          </Link>
          <Link href="/tasks" className="btn-ghost">
            打开任务中心
          </Link>
        </div>
      </section>

      <section className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="panel p-5">
            <p className="text-3xl font-bold text-white">{stat.value}</p>
            <p className="mt-1 text-xs text-slate-500">{stat.label}</p>
          </div>
        ))}
      </section>

      <section>
        <h2 className="text-xl font-semibold text-white">反馈如何变成任务</h2>
        <p className="mt-2 text-sm text-slate-400">一个贯穿全站的闭环，所有页面共享同一套任务系统。</p>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {[
            { step: "01", title: "任意页面提交反馈", desc: "填写类型与内容，自动带上来源页面上下文。" },
            { step: "02", title: "WorkBuddy 生成任务", desc: "反馈进入任务队列，状态实时流转为待处理、进行中。" },
            { step: "03", title: "回显状态与结果", desc: "任务完成后结果直接显示在页面与任务中心，可追溯。" },
          ].map((item) => (
            <div key={item.step} className="panel p-6">
              <span className="text-xs font-bold tracking-widest text-accent">{item.step}</span>
              <h3 className="mt-3 text-sm font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-xs leading-6 text-slate-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="mb-5 flex items-center justify-between">
          <h2 className="text-xl font-semibold text-white">最近任务</h2>
          <Link href="/tasks" className="text-xs text-accent hover:underline">
            查看全部 →
          </Link>
        </div>
        {tasks.length > 0 ? (
          <div className="space-y-3">
            {tasks.slice(0, 3).map((task) => (
              <div key={task.id} className="panel flex items-center justify-between gap-4 p-4">
                <span className="min-w-0 truncate text-sm text-slate-200">{task.title}</span>
                <StatusPill status={task.status} />
              </div>
            ))}
          </div>
        ) : (
          <div className="panel p-8 text-center text-sm text-slate-500">
            还没有任务，在下面提交第一条反馈试试
          </div>
        )}
      </section>

      <section>
        <h2 className="mb-5 text-xl font-semibold text-white">精选二开作品</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {works.slice(0, 2).map((work) => (
            <Link key={work.id} href="/works" className="panel group p-6 hover:border-accent/40">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-white group-hover:text-accent">{work.name}</h3>
                <span className="text-xs text-slate-500">{work.year}</span>
              </div>
              <p className="mt-2 text-xs leading-6 text-slate-400">{work.summary}</p>
              <p className="mt-4 text-[11px] text-slate-500">基于 {work.baseProject} 二次开发</p>
            </Link>
          ))}
        </div>
      </section>

      <section>
        <FeedbackWidget sourcePage="/" />
      </section>
    </div>
  );
}
