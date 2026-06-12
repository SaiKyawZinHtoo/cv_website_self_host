"use client";

import { ExternalLink, Smartphone } from "lucide-react";
import { SiGoogleplay } from "react-icons/si";
import type { AppLink } from "@/i18n/types";
import { useApp } from "@/context/AppProvider";
import { SafeIcon } from "./SafeIcon";
import { SafeBrandIcon } from "./SafeBrandIcon";

interface ExperienceAppLinksProps {
  apps: AppLink[];
}

export function ExperienceAppLinks({ apps }: ExperienceAppLinksProps) {
  const { t } = useApp();

  if (!apps.length) return null;

  return (
    <div className="mt-5 border-t border-[var(--border)] pt-5">
      <div className="mb-3 flex items-center gap-2">
        <SafeIcon icon={Smartphone} className="h-4 w-4 text-[var(--accent)]" />
        <h4 className="text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)]">
          {t.ui.publishedApps}
        </h4>
      </div>
      <div className="grid gap-2 sm:grid-cols-2">
        {apps.map((app) => (
          <a
            key={app.url}
            href={app.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 rounded-xl border border-[var(--border)] bg-[var(--chip-bg)] p-3 transition-all hover:border-[var(--accent-ring)] hover:bg-[var(--chip-hover-bg)] hover:shadow-md"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[var(--accent-soft)]">
              <SafeBrandIcon
                icon={SiGoogleplay}
                className="h-5 w-5 text-[var(--accent)] transition-transform group-hover:scale-110"
                aria-hidden
              />
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-semibold text-[var(--text-heading)]">
                {app.name}
              </p>
              {app.description && (
                <p className="truncate text-xs text-[var(--text-muted)]">{app.description}</p>
              )}
              <span className="mt-1 inline-flex items-center gap-1 text-[10px] font-medium text-[var(--accent-text)]">
                {t.ui.viewOnPlayStore}
                <SafeIcon
                  icon={ExternalLink}
                  className="h-3 w-3 transition-transform group-hover:translate-x-0.5"
                />
              </span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
