"use client";

import { MapPin, Mail, Phone, Download, Sparkles, ExternalLink } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { useApp } from "@/context/AppProvider";
import { SafeIcon } from "./SafeIcon";
import { SafeBrandIcon } from "./SafeBrandIcon";
import { ProfileAvatar } from "./ProfileAvatar";

export function Hero() {
  const { t } = useApp();
  const { cv, ui } = t;

  return (
    <header className="relative scroll-mt-28 overflow-hidden rounded-3xl border border-[var(--border)] bg-gradient-to-br from-[var(--hero-bg-from)] to-[var(--hero-bg-to)] p-8 shadow-2xl shadow-[var(--glow-cyan)] backdrop-blur-2xl sm:p-10">
      <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[var(--glow-cyan)] blur-3xl" />
      <div className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-[var(--glow-violet)] blur-3xl" />

      <div className="relative mb-6 flex flex-wrap items-center gap-3">
        <a
          href={cv.contact.github}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2.5 rounded-full border border-[var(--border)] bg-[var(--chip-bg)] px-4 py-2 text-sm font-medium text-[var(--text-body)] shadow-sm transition-all hover:border-[var(--accent-ring)] hover:bg-[var(--chip-hover-bg)] hover:text-[var(--text-heading)] hover:shadow-md"
          aria-label={ui.viewGitHub}
        >
          <SafeBrandIcon
            icon={SiGithub}
            className="h-4 w-4 text-[var(--text-heading)] transition-transform group-hover:scale-110"
          />
          <span className="font-semibold text-[var(--text-heading)]">@{cv.contact.githubUsername}</span>
          <span className="text-xs text-[var(--text-muted)]">{ui.viewGitHub}</span>
          <SafeIcon
            icon={ExternalLink}
            className="h-3.5 w-3.5 text-[var(--accent)] opacity-70 transition-opacity group-hover:opacity-100"
          />
        </a>
      </div>

      <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
          <ProfileAvatar />

          <div className="text-center sm:text-left">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[var(--accent-ring)] bg-[var(--accent-soft)] px-3 py-1 text-xs font-medium text-[var(--accent-text)]">
              <SafeIcon icon={Sparkles} className="h-3.5 w-3.5" />
              {ui.availableForOpportunities}
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-[var(--text-heading)] sm:text-4xl lg:text-5xl">
              {cv.name}
            </h1>
            <p className="mt-2 text-lg font-medium text-[var(--accent)] sm:text-xl">
              {cv.title}
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-3 sm:items-end">
          <a
            href={`mailto:${cv.contact.email}`}
            className="group flex items-center gap-3 rounded-xl border border-[var(--border)] bg-[var(--chip-bg)] px-4 py-2.5 text-sm text-[var(--text-body)] transition-all hover:border-[var(--accent-ring)] hover:bg-[var(--chip-hover-bg)] hover:text-[var(--text-heading)]"
          >
            <SafeIcon icon={Mail} className="h-4 w-4 text-[var(--accent)] transition-transform group-hover:scale-110" />
            {cv.contact.email}
          </a>
          <a
            href={`tel:${cv.contact.phone.replace(/\s/g, "")}`}
            className="group flex items-center gap-3 rounded-xl border border-[var(--border)] bg-[var(--chip-bg)] px-4 py-2.5 text-sm text-[var(--text-body)] transition-all hover:border-[var(--accent-ring)] hover:bg-[var(--chip-hover-bg)] hover:text-[var(--text-heading)]"
          >
            <SafeIcon icon={Phone} className="h-4 w-4 text-[var(--accent)] transition-transform group-hover:scale-110" />
            {cv.contact.phone}
          </a>
          <a
            href={cv.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 rounded-xl border border-[var(--border)] bg-[var(--chip-bg)] px-4 py-2.5 text-sm text-[var(--text-body)] transition-all hover:border-[var(--accent-ring)] hover:bg-[var(--chip-hover-bg)] hover:text-[var(--text-heading)]"
          >
            <SafeBrandIcon icon={SiGithub} className="h-4 w-4 text-[var(--accent)] transition-transform group-hover:scale-110" />
            github.com/{cv.contact.githubUsername}
          </a>
          <div className="flex items-center gap-3 rounded-xl border border-[var(--border)] bg-[var(--chip-bg)] px-4 py-2.5 text-sm text-[var(--text-body)]">
            <SafeIcon icon={MapPin} className="h-4 w-4 shrink-0 text-[var(--accent)]" />
            <span className="text-left">{cv.contact.address}</span>
          </div>
          <button
            type="button"
            onClick={() => window.print()}
            className="mt-2 inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-cyan-500/25 transition-all hover:shadow-cyan-500/40 hover:brightness-110 print:hidden"
          >
            <SafeIcon icon={Download} className="h-4 w-4" />
            {ui.downloadCv}
          </button>
        </div>
      </div>
    </header>
  );
}
