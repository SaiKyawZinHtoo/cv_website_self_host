"use client";

import { Languages } from "lucide-react";
import { useApp } from "@/context/AppProvider";
import { GlassCard } from "./GlassCard";
import { SectionHeading } from "./SectionHeading";

export function LanguagesSection() {
  const { t } = useApp();

  return (
    <GlassCard id="languages">
      <SectionHeading
        icon={Languages}
        title={t.ui.languages}
        subtitle={t.ui.languagesSubtitle}
      />
      <div className="grid gap-4 sm:grid-cols-2">
        {t.cv.languages.map((lang) => (
          <div
            key={lang.name}
            className="rounded-xl border border-[var(--border)] bg-[var(--card-inner)] p-4"
          >
            <div className="mb-3 flex items-center justify-between">
              <span className="font-medium text-[var(--text-heading)]">{lang.name}</span>
              <span className="rounded-full border border-[var(--accent-ring)] bg-[var(--accent-soft)] px-2.5 py-0.5 text-xs font-medium text-[var(--accent-text)]">
                {lang.level}
              </span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-[var(--chip-bg)]">
              <div
                className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 transition-all duration-700"
                style={{ width: `${lang.proficiency}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </GlassCard>
  );
}
