"use client";

import { Bot, Sparkles } from "lucide-react";
import { useApp } from "@/context/AppProvider";
import { GlassCard } from "./GlassCard";
import { SectionHeading } from "./SectionHeading";
import { SafeIcon } from "./SafeIcon";

export function AiWorkflowSection() {
  const { t } = useApp();
  const { aiWorkflow } = t.cv;

  return (
    <GlassCard id="ai-tools">
      <SectionHeading
        icon={Bot}
        title={t.ui.aiTools}
        subtitle={t.ui.aiToolsSubtitle}
      />

      <p className="mb-8 text-sm leading-relaxed text-[var(--text-body)] sm:text-base">
        {aiWorkflow.summary}
      </p>

      <div className="mb-8">
        <div className="mb-4 flex items-center gap-2">
          <SafeIcon icon={Sparkles} className="h-4 w-4 text-[var(--accent)]" />
          <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--text-muted)]">
            {t.ui.aiJourney}
          </h3>
        </div>

        <div className="space-y-4">
          {aiWorkflow.milestones.map((milestone, index) => (
            <article
              key={milestone.title}
              className="group relative rounded-xl border border-[var(--border)] bg-[var(--card-inner)] p-5 transition-all hover:border-[var(--accent-ring)] hover:bg-[var(--card-inner-hover)] sm:p-6"
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div className="min-w-0 flex-1">
                  <time className="text-xs font-medium uppercase tracking-wider text-[var(--accent)]">
                    {milestone.period}
                  </time>
                  <h4 className="mt-1 text-base font-semibold text-[var(--text-heading)] sm:text-lg">
                    {milestone.title}
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--text-body)]">
                    {milestone.description}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {milestone.tools.map((tool) => (
                      <span
                        key={tool}
                        className="rounded-full border border-[var(--accent-ring)] bg-[var(--accent-soft)] px-2.5 py-1 text-xs font-medium text-[var(--accent-text)]"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
                <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--chip-bg)] text-xs font-bold text-[var(--text-muted)]">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="border-t border-[var(--border)] pt-6">
        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-[var(--text-muted)]">
          {t.ui.aiToolkit}
        </h3>
        <div className="grid gap-3 sm:grid-cols-2">
          {aiWorkflow.tools.map((tool) => (
            <div
              key={tool.name}
              className="rounded-xl border border-[var(--border)] bg-[var(--card-inner)] p-4 transition-colors hover:border-[var(--accent-ring)]"
            >
              <p className="font-semibold text-[var(--text-heading)]">{tool.name}</p>
              <p className="mt-1.5 text-sm leading-relaxed text-[var(--text-body)]">
                {tool.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </GlassCard>
  );
}
