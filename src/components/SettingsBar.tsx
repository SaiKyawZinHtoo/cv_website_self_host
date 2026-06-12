"use client";

import { Moon, Sun } from "lucide-react";
import { useApp } from "@/context/AppProvider";
import { SafeIcon } from "./SafeIcon";

export function SettingsBar() {
  const { locale, theme, setLocale, toggleTheme, t } = useApp();

  return (
    <div className="fixed right-4 top-4 z-50 flex items-center gap-2 print:hidden sm:right-6 sm:top-6">
      <div className="flex items-center rounded-xl border border-[var(--border)] bg-[var(--surface)] p-1 shadow-lg backdrop-blur-xl">
        <button
          type="button"
          onClick={() => setLocale("en")}
          className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition-all ${
            locale === "en"
              ? "bg-[var(--accent-soft)] text-[var(--accent)] ring-1 ring-[var(--accent-ring)]"
              : "text-[var(--text-muted)] hover:text-[var(--text-heading)]"
          }`}
          aria-label={t.ui.switchToEnglish}
        >
          EN
        </button>
        <button
          type="button"
          onClick={() => setLocale("my")}
          className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition-all ${
            locale === "my"
              ? "bg-[var(--accent-soft)] text-[var(--accent)] ring-1 ring-[var(--accent-ring)]"
              : "text-[var(--text-muted)] hover:text-[var(--text-heading)]"
          }`}
          aria-label={t.ui.switchToMyanmar}
        >
          မြန်မာ
        </button>
      </div>

      <button
        type="button"
        onClick={toggleTheme}
        className="flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--surface)] text-[var(--text-body)] shadow-lg backdrop-blur-xl transition-all hover:border-[var(--accent-ring)] hover:text-[var(--accent)]"
        aria-label={theme === "dark" ? t.ui.lightTheme : t.ui.darkTheme}
      >
        {theme === "dark" ? (
          <SafeIcon icon={Sun} className="h-4 w-4" />
        ) : (
          <SafeIcon icon={Moon} className="h-4 w-4" />
        )}
      </button>
    </div>
  );
}
