"use client";

import { useEffect } from "react";
import Image from "next/image";
import { ExternalLink, X } from "lucide-react";
import { useApp } from "@/context/AppProvider";
import { SafeIcon } from "./SafeIcon";

interface CertificateModalProps {
  title: string;
  url: string;
  onClose: () => void;
}

function isImageUrl(url: string) {
  return /\.(png|jpe?g|webp|gif)(\?.*)?$/i.test(url);
}

export function CertificateModal({ title, url, onClose }: CertificateModalProps) {
  const { t } = useApp();
  const isImage = isImageUrl(url);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEscape);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label={title}
    >
      <button
        type="button"
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
        aria-label={t.ui.closeViewer}
      />

      <div className="relative flex h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-2xl">
        <div className="flex items-center justify-between gap-4 border-b border-[var(--border)] px-4 py-3 sm:px-6">
          <h3 className="truncate text-sm font-semibold text-[var(--text-heading)] sm:text-base">
            {title}
          </h3>
          <div className="flex shrink-0 items-center gap-2">
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg border border-[var(--border)] bg-[var(--chip-bg)] px-3 py-1.5 text-xs font-medium text-[var(--text-body)] transition-colors hover:bg-[var(--chip-hover-bg)] hover:text-[var(--text-heading)]"
            >
              <SafeIcon icon={ExternalLink} className="h-3.5 w-3.5" />
              {t.ui.open}
            </a>
            <button
              type="button"
              onClick={onClose}
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--chip-bg)] text-[var(--text-muted)] transition-colors hover:bg-[var(--chip-hover-bg)] hover:text-[var(--text-heading)]"
              aria-label={t.ui.close}
            >
              <SafeIcon icon={X} className="h-4 w-4" />
            </button>
          </div>
        </div>

        {isImage ? (
          <div className="relative flex-1 overflow-auto bg-neutral-100 p-4 dark:bg-neutral-900">
            <div className="relative mx-auto min-h-full w-full max-w-3xl">
              <Image
                src={url}
                alt={title}
                width={1200}
                height={1600}
                className="h-auto w-full rounded-lg object-contain shadow-lg"
                unoptimized
              />
            </div>
          </div>
        ) : (
          <iframe
            src={`${url}#toolbar=1&navpanes=0`}
            title={title}
            className="h-full w-full flex-1 bg-white"
          />
        )}
      </div>
    </div>
  );
}
