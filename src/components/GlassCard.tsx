import { type ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export function GlassCard({ children, className = "", id }: GlassCardProps) {
  return (
    <section
      id={id}
      className={`rounded-2xl border border-[var(--border)] bg-[var(--card-bg)] p-4 shadow-xl shadow-[var(--shadow-color)] backdrop-blur-xl transition-all duration-300 hover:border-[var(--border-hover)] hover:bg-[var(--card-bg-hover)] sm:p-6 md:p-8 ${id ? "scroll-mt-28" : ""} ${className}`}
    >
      {children}
    </section>
  );
}
