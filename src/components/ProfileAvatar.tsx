"use client";

import { useApp } from "@/context/AppProvider";

export function ProfileAvatar() {
  const { t } = useApp();

  return (
    <div className="relative mx-auto h-32 w-32 shrink-0 sm:mx-0 sm:h-36 sm:w-36 print:mx-0">
      <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-cyan-400 to-violet-500 opacity-70 blur-md print:hidden" />
      <div className="relative h-full w-full overflow-hidden rounded-2xl bg-[var(--card-inner)] ring-2 ring-[var(--border)] ring-offset-2 ring-offset-[var(--ring-offset)] print:ring-1 print:ring-slate-300 print:ring-offset-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/profile.png"
          alt={t.cv.name}
          width={144}
          height={144}
          className="print-image h-full w-full object-cover object-top"
        />
      </div>
    </div>
  );
}
