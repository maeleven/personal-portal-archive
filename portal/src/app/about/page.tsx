import FeedbackWidget from "@/components/FeedbackWidget";

const timeline = [
  { year: "2025", text: "开始把常用工具都改成自己的版本，做了 InkBlog 主题增强。" },
  { year: "2024", text: "完成 MiniDrive 和 TaskLens，两个二开项目进入日常使用。" },
  { year: "2023", text: "从开源天气应用出发，做了第一个桌面小组件 DailyWidget。" },
];

export default function AboutPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="page-title">关于我</h1>
        <p className="page-subtitle">
          一只虫。喜欢把现成的东西拆开、改造成更顺手的样子，也喜欢把想法变成真正能用的工具。
        </p>
      </div>

      <section className="grid gap-5 sm:grid-cols-2">
        <div className="panel p-6">
          <h2 className="text-sm font-semibold text-white">我在做什么</h2>
          <p className="mt-3 text-sm leading-7 text-slate-400">
            主要做前端和轻量全栈，偏产品向。习惯从开源项目起步，围绕真实使用场景做二次开发，
            再把自己需要的功能一点点补进去。这个门户本身也是一个实验：把反馈、任务和结果串成一条闭环。
          </p>
        </div>
        <div className="panel p-6">
          <h2 className="text-sm font-semibold text-white">技术偏好</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {["TypeScript", "React", "Next.js", "Vue 3", "Tailwind CSS", "Node.js", "Go", "SQLite"].map(
              (item) => (
                <span key={item} className="chip">
                  {item}
                </span>
              ),
            )}
          </div>
        </div>
      </section>

      <section className="panel p-6">
        <h2 className="text-sm font-semibold text-white">一点点时间线</h2>
        <div className="mt-5 space-y-5">
          {timeline.map((item) => (
            <div key={item.year} className="flex gap-5">
              <span className="w-12 shrink-0 text-sm font-bold text-accent">{item.year}</span>
              <span className="text-sm leading-6 text-slate-400">{item.text}</span>
            </div>
          ))}
        </div>
      </section>

      <FeedbackWidget sourcePage="/about" />
    </div>
  );
}
