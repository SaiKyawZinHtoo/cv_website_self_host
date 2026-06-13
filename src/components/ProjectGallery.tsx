"use client";

import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, ExternalLink, Images, ZoomIn, X } from "lucide-react";
import type { ProjectImage } from "@/i18n/types";
import { useApp } from "@/context/AppProvider";
import { SafeIcon } from "./SafeIcon";
import { ModalImage } from "./ModalImage";
import { ModalPortal } from "./ModalPortal";

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
        <div className="mb-1 flex flex-wrap items-center gap-2">
          <SafeIcon icon={Images} className="h-4 w-4 text-[var(--accent)]" />
          <h4 className="text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)]">
            {t.ui.projectGallery}
          </h4>
          <span className="rounded-full border border-[var(--border)] bg-[var(--chip-bg)] px-2 py-0.5 text-[10px] font-medium text-[var(--text-muted)]">
            {images.length}
          </span>
        </div>
        <p className="mb-3 text-[11px] text-[var(--text-muted)]">{t.ui.galleryHint}</p>

        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3 md:grid-cols-4">
          {images.map((image, index) => (
            <button
              key={image.url}
              type="button"
              onClick={() => setActiveIndex(index)}
              className="group relative aspect-[4/3] overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--chip-bg)] transition-all hover:border-[var(--accent-ring)] hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-ring)] print:pointer-events-none"
              aria-label={`${t.ui.viewImage}: ${image.caption}`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={image.url}
                alt={image.caption}
                loading="lazy"
                className="print-image absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/20 print:hidden" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 print:hidden">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-sm">
                  <SafeIcon icon={ZoomIn} className="h-4 w-4" />
                </span>
              </div>
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-2 pt-8 print:hidden">
                <p className="line-clamp-2 text-left text-[10px] font-medium leading-tight text-white">
                  {image.caption}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {active && activeIndex !== null && (
        <ModalPortal>
          <div
            className="fixed inset-0 z-[200] flex items-end justify-center sm:items-center sm:p-4 md:p-6 print:hidden"
            role="dialog"
            aria-modal="true"
            aria-label={active.caption}
          >
            <button
              type="button"
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              onClick={close}
              aria-label={t.ui.closeViewer}
            />

            <div className="relative z-10 flex max-h-[95dvh] w-full max-w-5xl flex-col overflow-hidden rounded-t-2xl border border-[var(--border)] bg-[var(--surface)] shadow-2xl sm:max-h-[92vh] sm:rounded-2xl">
              <div className="flex items-start justify-between gap-3 border-b border-[var(--border)] px-4 py-3 sm:items-center sm:px-5">
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium leading-snug text-[var(--text-heading)] sm:truncate">
                    {active.caption}
                  </p>
                  <p className="mt-0.5 text-xs text-[var(--text-muted)]">
                    {activeIndex + 1} / {images.length}
                  </p>
                </div>
                <div className="flex shrink-0 items-center gap-1.5">
                  <a
                    href={active.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-lg border border-[var(--border)] bg-[var(--chip-bg)] px-2.5 py-1.5 text-xs font-medium text-[var(--text-body)] transition-colors hover:bg-[var(--chip-hover-bg)] hover:text-[var(--text-heading)]"
                  >
                    <SafeIcon icon={ExternalLink} className="h-3.5 w-3.5" />
                    <span className="hidden sm:inline">{t.ui.open}</span>
                  </a>
                  <button
                    type="button"
                    onClick={close}
                    className="flex h-8 w-8 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--chip-bg)] text-[var(--text-muted)] transition-colors hover:bg-[var(--chip-hover-bg)] hover:text-[var(--text-heading)]"
                    aria-label={t.ui.close}
                  >
                    <SafeIcon icon={X} className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <div className="relative flex min-h-[50dvh] flex-1 items-center justify-center overflow-hidden bg-neutral-100 dark:bg-neutral-900 sm:min-h-[60vh]">
                <button
                  type="button"
                  onClick={goPrev}
                  className="absolute left-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)]/90 text-[var(--text-heading)] shadow-lg backdrop-blur-sm transition-colors hover:bg-[var(--chip-hover-bg)] sm:left-4"
                  aria-label={t.ui.previousImage}
                >
                  <SafeIcon icon={ChevronLeft} className="h-5 w-5" />
                </button>

                <div className="flex w-full max-w-[calc(100%-5rem)] items-center justify-center px-2 py-4 sm:max-w-[calc(100%-7rem)] sm:px-6">
                  <ModalImage src={active.url} alt={active.caption} />
                </div>

                <button
                  type="button"
                  onClick={goNext}
                  className="absolute right-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)]/90 text-[var(--text-heading)] shadow-lg backdrop-blur-sm transition-colors hover:bg-[var(--chip-hover-bg)] sm:right-4"
                  aria-label={t.ui.nextImage}
                >
                  <SafeIcon icon={ChevronRight} className="h-5 w-5" />
                </button>
              </div>

              <p className="border-t border-[var(--border)] px-4 py-2.5 text-center text-[11px] text-[var(--text-muted)]">
                {t.ui.galleryViewerHint}
              </p>
            </div>
          </div>
        </ModalPortal>
      )}
    </>
  );
}
