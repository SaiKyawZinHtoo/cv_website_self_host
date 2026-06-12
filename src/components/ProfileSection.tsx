"use client";

import { User } from "lucide-react";
import { useApp } from "@/context/AppProvider";
import { GlassCard } from "./GlassCard";
import { SectionHeading } from "./SectionHeading";

export function ProfileSection() {
  const { t } = useApp();

  return (
    <GlassCard id="profile">
      <SectionHeading icon={User} title={t.ui.profile} subtitle={t.ui.profileSubtitle} />
      <div className="space-y-4">
        {t.cv.profile.map((paragraph) => (
          <p
            key={paragraph.slice(0, 48)}
            className="text-pretty text-base leading-relaxed text-[var(--text-body)]"
          >
            {paragraph}
          </p>
        ))}
      </div>
    </GlassCard>
  );
}
