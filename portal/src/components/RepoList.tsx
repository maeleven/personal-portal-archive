"use client";

import { useMemo, useState } from "react";
import type { GithubRepo } from "@/lib/types";

function formatStars(stars: number) {
  return stars >= 1000 ? `${(stars / 1000).toFixed(0)}k` : String(stars);
}

export default function RepoList({ repos }: { repos: GithubRepo[] }) {
  const [query, setQuery] = useState("");
  const [language, setLanguage] = useState("全部");

  const languages = useMemo(
    () => ["全部", ...Array.from(new Set(repos.flatMap((repo) => (repo.language ? [repo.language] : []))))],
    [repos],
  );

  const filtered = repos.filter((repo) => {
    const matchLanguage = language === "全部" || repo.language === language;
    const text = `${repo.name} ${repo.description} ${repo.topics.join(" ")}`.toLowerCase();
    return matchLanguage && text.includes(query.trim().toLowerCase());
  });

  return (
    <div>
      <div className="mb-6 flex flex-wrap items-center gap-3">
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="搜索项目或主题…"
          className="min-w-[220px] flex-1 rounded-lg border border-white/10 bg-black/20 px-4 py-2.5 text-sm text-slate-200 outline-none placeholder:text-slate-600 focus:border-accent/60"
        />
        <div className="flex flex-wrap gap-2">
          {languages.map((item) => (
            <button
              key={item}
              onClick={() => setLanguage(item)}
              className={`rounded-lg border px-3 py-2 text-xs transition-colors ${
                language === item
                  ? "border-accent/50 bg-accent/15 text-accent"
                  : "border-white/10 bg-white/5 text-slate-400 hover:text-slate-200"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <p className="mb-4 text-xs text-slate-500">共 {filtered.length} 个项目</p>

      <div className="grid gap-4 sm:grid-cols-2">
        {filtered.map((repo) => (
          <a
            key={repo.id}
            href={repo.url}
            target="_blank"
            rel="noreferrer"
            className="panel group p-5 transition-colors hover:border-accent/40"
          >
            <div className="flex items-center justify-between gap-3">
              <h3 className="truncate text-sm font-semibold text-white group-hover:text-accent">
                {repo.fullName}
              </h3>
              <span className="chip shrink-0">★ {formatStars(repo.stars)}</span>
            </div>
            <p className="mt-2 line-clamp-2 text-xs leading-6 text-slate-400">{repo.description}</p>
            <div className="mt-4 flex flex-wrap items-center gap-2">
              {repo.language && (
                <span className="flex items-center gap-1.5 text-[11px] text-slate-400">
                  <span className="h-2 w-2 rounded-full bg-accent" />
                  {repo.language}
                </span>
              )}
              {repo.topics.slice(0, 3).map((topic) => (
                <span key={topic} className="chip !px-2 !py-0.5 !text-[10px]">
                  {topic}
                </span>
              ))}
              <span className="ml-auto text-[11px] text-slate-600">更新于 {repo.updatedAt}</span>
            </div>
          </a>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="panel p-10 text-center text-sm text-slate-500">没有匹配的项目</p>
      )}
    </div>
  );
}
