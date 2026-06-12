"use client";

import { techStackItems, type TechItem } from "@/data/techStack";
import { useApp } from "@/context/AppProvider";
import { useMounted } from "@/hooks/useMounted";
import { SafeBrandIcon } from "./SafeBrandIcon";

function TechCardSkeleton() {
  return (
    <div className="rounded-2xl border border-[var(--border)] bg-[var(--card-inner)] p-4 sm:p-5">
      <div className="flex items-center gap-4">
        <div className="h-12 w-12 shrink-0 animate-pulse rounded-xl bg-[var(--chip-bg)] sm:h-14 sm:w-14" />
        <div className="flex-1 space-y-2">
          <div className="h-4 w-24 animate-pulse rounded bg-[var(--chip-bg)]" />
          <div className="h-3 w-16 animate-pulse rounded bg-[var(--chip-bg)]" />
        </div>
      </div>
    </div>
  );
}

function TechCard({ tech }: { tech: TechItem }) {
  const { t, theme } = useApp();
  const Icon = tech.icon;
  const categoryLabel = t.ui.techCategories[tech.category];
  const lightColorOverrides: Record<string, string> = {
    "Next.js": "#0f172a",
    JavaScript: "#323330",
    "GitHub Copilot": "#0f172a",
  };
  const color =
    theme === "light" && lightColorOverrides[tech.name]
      ? lightColorOverrides[tech.name]
      : tech.color;

  return (
    <div
      className="group relative overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card-inner)] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--border-hover)] hover:shadow-xl sm:p-5"
      style={{ "--tech-color": color } as React.CSSProperties}
    >
      <div
        className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-30"
        style={{ backgroundColor: color }}
      />

      <div className="relative flex items-center gap-4">
        <div
          className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ring-1 transition-all duration-300 group-hover:scale-105"
          style={{
            backgroundColor: `${color}18`,
            boxShadow: `0 0 0 1px ${color}25`,
          }}
        >
          <SafeBrandIcon
            icon={Icon}
            className="h-6 w-6 transition-transform duration-300 group-hover:scale-110 sm:h-7 sm:w-7"
            style={{ color }}
            aria-hidden
          />
        </div>

        <div className="min-w-0 flex-1">
          <p className="truncate font-semibold tracking-tight text-[var(--text-heading)]">
            {tech.name}
          </p>
          <span
            className="mt-1 inline-block rounded-md px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider"
            style={{
              color,
              backgroundColor: `${color}15`,
              boxShadow: `inset 0 0 0 1px ${color}25`,
            }}
          >
            {categoryLabel}
          </span>
        </div>
      </div>

      <div
        className="absolute bottom-0 left-0 h-0.5 w-0 transition-all duration-500 group-hover:w-full"
        style={{ backgroundColor: color }}
      />
    </div>
  );
}

export function TechStackGrid() {
  const mounted = useMounted();

  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
      {mounted
        ? techStackItems.map((tech) => <TechCard key={tech.name} tech={tech} />)
        : techStackItems.map((tech) => <TechCardSkeleton key={tech.name} />)}
    </div>
  );
}
