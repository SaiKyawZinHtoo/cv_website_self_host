"use client";

import { Briefcase } from "lucide-react";
import { useApp } from "@/context/AppProvider";
import { GlassCard } from "./GlassCard";
import { SectionHeading } from "./SectionHeading";
import { ProjectGallery } from "./ProjectGallery";
import { ExperienceAppLinks } from "./ExperienceAppLinks";

export function ExperienceSection() {
  const { t } = useApp();

  return (
    <GlassCard id="experience">
      <SectionHeading
        icon={Briefcase}
        title={t.ui.experience}
        subtitle={t.ui.experienceSubtitle}
      />
      <div className="space-y-6">
        {t.cv.experience.map((job, index) => (
          <article
            key={`${job.period}-${job.company}`}
            className="group relative rounded-xl border border-[var(--border)] bg-[var(--card-inner)] p-5 transition-all hover:border-[var(--accent-ring)] hover:bg-[var(--card-inner-hover)] sm:p-6"
          >
            <div className="absolute -left-px top-6 h-[calc(100%-3rem)] w-0.5 rounded-full bg-gradient-to-b from-[var(--accent)]/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
              <div className="min-w-0 flex-1">
                <time className="text-xs font-medium uppercase tracking-wider text-[var(--accent)]">
                  {job.period}
                </time>
                <h3 className="mt-1 text-lg font-semibold text-[var(--text-heading)]">{job.role}</h3>
                <p className="text-sm font-medium text-violet-500 dark:text-violet-300">{job.company}</p>
              </div>
              <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--chip-bg)] text-xs font-bold text-[var(--text-muted)]">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>
            <ul className="mt-4 space-y-2">
              {job.highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="flex gap-3 text-sm leading-relaxed text-[var(--text-body)]"
                >
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--accent)]" />
                  <span className="min-w-0 flex-1">{highlight}</span>
                </li>
              ))}
            </ul>
            {job.apps && job.apps.length > 0 && <ExperienceAppLinks apps={job.apps} />}
            {job.images && job.images.length > 0 && (
              <ProjectGallery images={job.images} />
            )}
          </article>
        ))}
      </div>
    </GlassCard>
  );
}
