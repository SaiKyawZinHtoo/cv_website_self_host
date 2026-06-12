"use client";

import { useState } from "react";
import { GraduationCap, BadgeCheck, FileText, Award } from "lucide-react";
import { useApp } from "@/context/AppProvider";
import { GlassCard } from "./GlassCard";
import { SectionHeading } from "./SectionHeading";
import { SafeIcon } from "./SafeIcon";
import { CertificateModal } from "./CertificateModal";

export function EducationSection() {
  const { t } = useApp();
  const [activeDoc, setActiveDoc] = useState<{ title: string; url: string } | null>(null);

  return (
    <>
      <GlassCard id="education">
        <SectionHeading
          icon={GraduationCap}
          title={t.ui.education}
          subtitle={t.ui.educationSubtitle}
        />
        <div className="relative space-y-0">
          {t.cv.education.map((item, index) => (
            <div key={`${item.period}-${item.title}`} className="relative flex gap-4 pb-8 last:pb-0">
              {index < t.cv.education.length - 1 && (
                <div className="absolute left-[7px] top-3 h-full w-px bg-gradient-to-b from-[var(--accent)]/50 to-transparent" />
              )}
              <div
                className={`relative z-10 mt-1.5 h-3.5 w-3.5 shrink-0 rounded-full border-2 bg-[var(--background)] ring-4 ${
                  item.verified
                    ? "border-emerald-400 ring-emerald-500/20"
                    : "border-[var(--accent)] ring-[var(--accent-soft)]"
                }`}
              />
              <div className="min-w-0 flex-1 rounded-xl border border-[var(--border)] bg-[var(--card-inner)] p-4 transition-colors hover:border-[var(--border-hover)] hover:bg-[var(--card-inner-hover)] sm:p-5">
                <div className="flex flex-wrap items-center gap-2">
                  <time className="text-xs font-medium uppercase tracking-wider text-[var(--accent)]">
                    {item.period}
                  </time>
                  {item.verified && (
                    <span className="inline-flex items-center gap-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-300">
                      <SafeIcon icon={BadgeCheck} className="h-3 w-3" />
                      {t.ui.verified}
                    </span>
                  )}
                  {item.grade && (
                    <span className="inline-flex items-center gap-1 rounded-full border border-amber-500/30 bg-amber-500/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-300">
                      <SafeIcon icon={Award} className="h-3 w-3" />
                      {item.grade}
                    </span>
                  )}
                </div>

                <h3 className="mt-2 font-semibold text-[var(--text-heading)]">{item.title}</h3>
                <p className="mt-0.5 text-sm text-[var(--text-muted)]">{item.institution}</p>

                {item.awardBody && (
                  <p className="mt-1 text-xs text-[var(--text-muted)]">{item.awardBody}</p>
                )}

                {item.issuedDate && (
                  <p className="mt-1 text-xs text-[var(--text-muted)]">
                    {t.ui.issued}: {item.issuedDate}
                  </p>
                )}

                {item.documents && item.documents.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.documents.map((doc) => (
                      <button
                        key={doc.url}
                        type="button"
                        onClick={() =>
                          setActiveDoc({
                            title: `${item.title} — ${doc.label}`,
                            url: doc.url,
                          })
                        }
                        className="inline-flex items-center gap-2 rounded-lg border border-[var(--accent-ring)] bg-[var(--accent-soft)] px-3 py-2 text-xs font-medium text-[var(--accent-text)] transition-all hover:border-[var(--accent)] hover:bg-[var(--chip-hover-bg)]"
                      >
                        <SafeIcon icon={FileText} className="h-3.5 w-3.5" />
                        {t.ui.viewDocument} {doc.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </GlassCard>

      {activeDoc && (
        <CertificateModal
          title={activeDoc.title}
          url={activeDoc.url}
          onClose={() => setActiveDoc(null)}
        />
      )}
    </>
  );
}
