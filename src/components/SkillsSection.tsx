"use client";

import { Brain, Layers } from "lucide-react";
import { useApp } from "@/context/AppProvider";
import { techStackItems } from "@/data/techStack";
import { GlassCard } from "./GlassCard";
import { SectionHeading } from "./SectionHeading";
import { SafeIcon } from "./SafeIcon";
import { TechStackGrid } from "./TechStackGrid";

export function SkillsSection() {
  const { t } = useApp();

  return (
    <GlassCard id="skills">
      <SectionHeading icon={Brain} title={t.ui.skills} subtitle={t.ui.skillsSubtitle} />
      <div className="mb-8 flex flex-wrap gap-2">
        {t.cv.skills.map((skill) => (
          <span
            key={skill}
            className="rounded-lg border border-[var(--border)] bg-[var(--chip-bg)] px-3 py-1.5 text-sm text-[var(--text-body)] transition-colors hover:border-[var(--accent-ring)] hover:bg-[var(--chip-hover-bg)] hover:text-[var(--text-heading)]"
          >
            {skill}
          </span>
        ))}
      </div>

      <div className="border-t border-[var(--border)] pt-6">
        <div className="mb-5 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <SafeIcon icon={Layers} className="h-4 w-4 text-[var(--accent)]" />
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--text-muted)]">
              {t.ui.techStack}
            </h3>
          </div>
          <span className="rounded-full border border-[var(--border)] bg-[var(--chip-bg)] px-3 py-1 text-xs font-medium text-[var(--text-muted)]">
            {techStackItems.length} {t.ui.technologies}
          </span>
        </div>
        <TechStackGrid />
      </div>
    </GlassCard>
  );
}
