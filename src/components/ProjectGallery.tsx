"use client";

import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Images, X } from "lucide-react";
import type { ProjectImage } from "@/i18n/types";
import { useApp } from "@/context/AppProvider";
import { SafeIcon } from "./SafeIcon";
import { ModalImage } from "./ModalImage";

interface ProjectGalleryProps {
  images: ProjectImage[];
}

export function ProjectGallery({ images }: ProjectGalleryProps) {
  const { t } = useApp();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const close = useCallback(() => setActiveIndex(null), []);
  const goPrev = useCallback(() => {
    setActiveIndex((i) => (i === null ? null : (i - 1 + images.length) % images.length));
  }, [images.length]);
  const goNext = useCallback(() => {
    setActiveIndex((i) => (i === null ? null : (i + 1) % images.length));
  }, [images.length]);

  useEffect(() => {
    if (activeIndex === null) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [activeIndex, close, goPrev, goNext]);

  if (!images.length) return null;

  const active = activeIndex !== null ? images[activeIndex] : null;

  return (
    <>
      <div className="mt-5 border-t border-[var(--border)] pt-5 print:break-inside-avoid">
        <div className="mb-3 flex flex-wrap items-center gap-2">
          <SafeIcon icon={Images} className="h-4 w-4 text-[var(--accent)]" />
          <h4 className="text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)]">
            {t.ui.projectGallery}
          </h4>
          <span className="rounded-full border border-[var(--border)] bg-[var(--chip-bg)] px-2 py-0.5 text-[10px] font-medium text-[var(--text-muted)]">
            {images.length}
          </span>
        </div>

        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3 md:grid-cols-4">
          {images.map((image, index) => (
            <button
              key={image.url}
              type="button"
              onClick={() => setActiveIndex(index)}
              className="group relative aspect-[4/3] overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--chip-bg)] transition-all hover:border-[var(--accent-ring)] hover:shadow-lg print:pointer-events-none"
              aria-label={`${t.ui.viewImage}: ${image.caption}`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={image.url}
                alt={image.caption}
                loading="lazy"
                className="print-image absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-2 pt-6 print:hidden">
                <p className="line-clamp-2 text-left text-[10px] font-medium leading-tight text-white">
                  {image.caption}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {active && activeIndex !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-end justify-center sm:items-center sm:p-4 md:p-6 print:hidden"
          role="dialog"
          aria-modal="true"
          aria-label={active.caption}
        >
          <button
            type="button"
            className="absolute inset-0 bg-black/85 backdrop-blur-sm"
            onClick={close}
            aria-label={t.ui.closeViewer}
          />

          <div className="relative flex max-h-[95dvh] w-full max-w-5xl flex-col overflow-hidden rounded-t-2xl border border-[var(--border)] bg-[var(--surface)] shadow-2xl sm:max-h-[92vh] sm:rounded-2xl">
            <div className="flex items-center justify-between gap-3 border-b border-[var(--border)] px-4 py-3 sm:px-5">
              <p className="min-w-0 flex-1 truncate text-sm font-medium text-[var(--text-heading)]">
                {active.caption}
              </p>
              <div className="flex shrink-0 items-center gap-1">
                <span className="mr-2 hidden text-xs text-[var(--text-muted)] sm:inline">
                  {activeIndex + 1} / {images.length}
                </span>
                <button
                  type="button"
                  onClick={close}
                  className="flex h-8 w-8 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--chip-bg)] text-[var(--text-muted)] hover:text-[var(--text-heading)]"
                  aria-label={t.ui.close}
                >
                  <SafeIcon icon={X} className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="relative flex min-h-[55dvh] flex-1 flex-col items-center justify-center gap-3 overflow-auto bg-neutral-950 p-3 sm:min-h-[65vh] sm:flex-row sm:gap-0 sm:p-4">
              <button
                type="button"
                onClick={goPrev}
                className="order-2 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/20 bg-black/50 text-white backdrop-blur-sm transition-colors hover:bg-black/70 sm:order-1 sm:absolute sm:left-4 sm:z-10"
                aria-label={t.ui.previousImage}
              >
                <SafeIcon icon={ChevronLeft} className="h-5 w-5" />
              </button>

              <div className="order-1 flex min-h-0 flex-1 items-center justify-center sm:order-2">
                <ModalImage src={active.url} alt={active.caption} />
              </div>

              <button
                type="button"
                onClick={goNext}
                className="order-3 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/20 bg-black/50 text-white backdrop-blur-sm transition-colors hover:bg-black/70 sm:absolute sm:right-4 sm:z-10"
                aria-label={t.ui.nextImage}
              >
                <SafeIcon icon={ChevronRight} className="h-5 w-5" />
              </button>
            </div>

            <p className="border-t border-[var(--border)] px-4 py-2 text-center text-xs text-[var(--text-muted)] sm:hidden">
              {activeIndex + 1} / {images.length}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
