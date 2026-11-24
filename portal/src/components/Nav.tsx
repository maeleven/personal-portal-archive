"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "首页" },
  { href: "/works", label: "二开作品" },
  { href: "/github", label: "GitHub 关注" },
  { href: "/about", label: "关于" },
  { href: "/tasks", label: "任务中心" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-ink/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4">
        <Link href="/" className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent text-lg font-bold text-white">
            虫
          </span>
          <span className="leading-tight">
            <span className="block text-sm font-semibold text-white">一只虫</span>
            <span className="block text-[10px] tracking-widest text-slate-500">PERSONAL PORTAL</span>
          </span>
        </Link>

        <nav className="flex flex-wrap items-center gap-1 sm:gap-2">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-lg px-3 py-2 text-xs font-medium transition-colors sm:text-sm ${
                  active
                    ? "bg-white/10 text-white"
                    : "text-slate-400 hover:bg-white/5 hover:text-slate-200"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
