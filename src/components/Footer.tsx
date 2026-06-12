"use client";

import { useApp } from "@/context/AppProvider";

export function Footer() {
  const { t } = useApp();

  return (
    <footer className="mt-12 border-t border-[var(--border)] py-8 text-center text-sm text-[var(--text-muted)] print:mt-8">
      <p suppressHydrationWarning>
        © {new Date().getFullYear()} {t.cv.name}. {t.ui.allRightsReserved}
      </p>
    </footer>
  );
}
