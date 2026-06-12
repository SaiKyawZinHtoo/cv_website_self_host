"use client";

import Image from "next/image";
import { useApp } from "@/context/AppProvider";
import { useMounted } from "@/hooks/useMounted";

export function ProfileAvatar() {
  const { t } = useApp();
  const mounted = useMounted();

  return (
    <div className="relative mx-auto h-32 w-32 shrink-0 sm:mx-0 sm:h-36 sm:w-36">
      <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-cyan-400 to-violet-500 opacity-70 blur-md" />
      <div className="relative h-full w-full overflow-hidden rounded-2xl bg-[var(--card-inner)] ring-2 ring-[var(--border)] ring-offset-2 ring-offset-[var(--ring-offset)]">
        {mounted ? (
          <Image
            src="/profile.png"
            alt={t.cv.name}
            fill
            priority
            sizes="(max-width: 640px) 128px, 144px"
            className="object-cover object-top"
          />
        ) : (
          <div className="h-full w-full animate-pulse bg-[var(--chip-bg)]" aria-hidden />
        )}
      </div>
    </div>
  );
}
