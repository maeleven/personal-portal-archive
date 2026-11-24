import FeedbackWidget from "@/components/FeedbackWidget";
import { getWorks } from "@/lib/data";

export default function WorksPage() {
  const works = getWorks();

  return (
    <div className="space-y-10">
      <div>
        <h1 className="page-title">二次开发作品</h1>
        <p className="page-subtitle">
          从开源项目出发，做适合自己的功能裁剪、体验重做和本地化改造。每个作品都标注了上游项目与主要改动。
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        {works.map((work) => (
          <article key={work.id} className="panel flex flex-col p-6">
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-3">
                <span
                  className="flex h-10 w-10 items-center justify-center rounded-xl text-sm font-bold text-white"
                  style={{ backgroundColor: work.accent }}
                >
                  {work.name.slice(0, 1)}
                </span>
                <div>
                  <h2 className="text-lg font-semibold text-white">{work.name}</h2>
                  <p className="text-[11px] text-slate-500">{work.year}</p>
                </div>
              </div>
              <span className="chip">二开</span>
            </div>

            <p className="mt-4 text-sm leading-6 text-slate-300">{work.summary}</p>

            <div className="mt-4 rounded-lg border border-white/10 bg-black/20 px-4 py-3">
              <p className="text-[11px] text-slate-500">
                基于 <span className="text-accent">{work.baseProject}</span> 二次开发
              </p>
            </div>

            <div className="mt-4 flex-1">
              <p className="mb-2 text-xs font-medium text-slate-400">主要改动</p>
              <ul className="space-y-1.5">
                {work.changes.map((change) => (
                  <li key={change} className="flex gap-2 text-xs leading-5 text-slate-400">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    {change}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {work.tech.map((tech) => (
                <span key={tech} className="chip !text-[10px]">
                  {tech}
                </span>
              ))}
            </div>

            {(work.url || work.repo) && (
              <div className="mt-5 flex gap-4 border-t border-white/10 pt-4 text-xs">
                {work.url && (
                  <a href={work.url} target="_blank" rel="noreferrer" className="text-accent hover:underline">
                    在线访问 ↗
                  </a>
                )}
                {work.repo && (
                  <a href={work.repo} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white">
                    源码仓库 ↗
                  </a>
                )}
              </div>
            )}
          </article>
        ))}
      </div>

      <FeedbackWidget sourcePage="/works" />
    </div>
  );
}
