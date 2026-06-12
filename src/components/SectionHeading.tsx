"use client";

import { type LucideIcon } from "lucide-react";
import { SafeIcon } from "./SafeIcon";

interface SectionHeadingProps {
  icon: LucideIcon;
  title: string;
  subtitle?: string;
}

export function SectionHeading({ icon, title, subtitle }: SectionHeadingProps) {
  return (
    <div className="mb-6 flex items-start gap-4">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[var(--accent-soft)] ring-1 ring-[var(--border)]">
        <SafeIcon icon={icon} className="h-5 w-5 text-[var(--accent)]" strokeWidth={1.75} />
      </div>
      <div>
        <h2 className="text-xl font-semibold tracking-tight text-[var(--text-heading)] sm:text-2xl">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-1 text-sm text-[var(--text-muted)]">{subtitle}</p>
        )}
      </div>
    </div>
  );
}
