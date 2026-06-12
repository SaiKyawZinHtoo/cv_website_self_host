"use client";

import { useEffect, useState } from "react";
import {
  User,
  GraduationCap,
  Brain,
  Languages,
  Bot,
  Briefcase,
  Menu,
  X,
} from "lucide-react";
import { useApp } from "@/context/AppProvider";
import { SafeIcon } from "./SafeIcon";

const navIds = ["profile", "education", "skills", "languages", "ai-tools", "experience"] as const;
const navIcons = {
  profile: User,
  education: GraduationCap,
  skills: Brain,
  languages: Languages,
  "ai-tools": Bot,
  experience: Briefcase,
};

export function Navigation() {
  const { t } = useApp();
  const [active, setActive] = useState("profile");
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLabels: Record<(typeof navIds)[number], string> = {
    profile: t.ui.profile,
    education: t.ui.education,
    skills: t.ui.skills,
    languages: t.ui.languages,
    "ai-tools": t.ui.aiTools,
    experience: t.ui.experience,
  };

  const navItems = navIds.map((id) => ({
    id,
    label: navLabels[id],
    icon: navIcons[id],
  }));

  useEffect(() => {
    const sections = navIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(visible.target.id);
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: [0, 0.25, 0.5] }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setMobileOpen(false);
  };

  const navButtonClass = (id: string, compact = false) =>
    `flex w-full items-center gap-3 rounded-xl text-left font-medium transition-all ${
      compact ? "px-3 py-2.5 text-sm" : "px-3 py-2.5"
    } ${
      active === id
        ? "bg-[var(--accent-soft)] text-[var(--text-heading)] ring-1 ring-[var(--accent-ring)]"
        : "text-[var(--text-muted)] hover:bg-[var(--chip-bg)] hover:text-[var(--text-heading)]"
    }`;

  return (
    <>
      <button
        type="button"
        onClick={() => setMobileOpen(!mobileOpen)}
        className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-violet-500 text-white shadow-lg shadow-cyan-500/30 lg:hidden print:hidden"
        aria-label="Toggle navigation"
      >
        {mobileOpen ? (
          <SafeIcon icon={X} className="h-6 w-6" />
        ) : (
          <SafeIcon icon={Menu} className="h-6 w-6" />
        )}
      </button>

      <nav
        aria-label="Section navigation"
        className={`fixed bottom-24 right-6 z-40 flex w-[min(18rem,calc(100vw-3rem))] flex-col gap-2 rounded-2xl border border-[var(--border)] bg-[var(--nav-bg)] p-3 shadow-2xl backdrop-blur-xl transition-all duration-300 lg:hidden print:hidden ${
          mobileOpen
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-4 opacity-0"
        }`}
      >
        {navItems.map(({ id, label, icon }) => (
          <button
            key={id}
            type="button"
            onClick={() => scrollTo(id)}
            className={navButtonClass(id, true)}
          >
            <SafeIcon icon={icon} className="h-4 w-4 shrink-0" />
            <span className="text-sm leading-snug">{label}</span>
          </button>
        ))}
      </nav>

      <aside className="hidden w-56 shrink-0 lg:block print:hidden">
        <nav
          aria-label="Section navigation"
          className="sticky top-28 flex flex-col gap-1.5 rounded-2xl border border-[var(--border)] bg-[var(--nav-bg)] p-2.5 shadow-xl backdrop-blur-xl"
        >
          {navItems.map(({ id, label, icon }) => (
            <button
              key={id}
              type="button"
              onClick={() => scrollTo(id)}
              className={navButtonClass(id)}
            >
              <SafeIcon icon={icon} className="mt-0.5 h-4 w-4 shrink-0 self-start" />
              <span className="text-[13px] leading-snug">{label}</span>
            </button>
          ))}
        </nav>
      </aside>
    </>
  );
}
