"use client";

import { useEffect } from "react";
import { ExternalLink, X } from "lucide-react";
import { useApp } from "@/context/AppProvider";
import { SafeIcon } from "./SafeIcon";
import { ModalImage } from "./ModalImage";
import { ModalPortal } from "./ModalPortal";

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
    <ModalPortal>
      <div
        className="fixed inset-0 z-[200] flex items-end justify-center sm:items-center sm:p-4 md:p-6"
      role="dialog"
      aria-modal="true"
      aria-label={title}
    >
      <button
        type="button"
        className="absolute inset-0 bg-black/75 backdrop-blur-sm"
        onClick={onClose}
        aria-label={t.ui.closeViewer}
      />

      <div className="relative z-10 flex max-h-[95dvh] w-full max-w-4xl flex-col overflow-hidden rounded-t-2xl border border-[var(--border)] bg-[var(--surface)] shadow-2xl sm:max-h-[90vh] sm:rounded-2xl">
        <div className="flex items-center justify-between gap-3 border-b border-[var(--border)] px-4 py-3 sm:px-6">
          <h3 className="min-w-0 flex-1 truncate text-sm font-semibold text-[var(--text-heading)] sm:text-base">
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
          <div className="flex min-h-[50dvh] flex-1 items-center justify-center overflow-auto bg-neutral-100 p-3 dark:bg-neutral-900 sm:min-h-[60vh] sm:p-6">
            <ModalImage src={url} alt={title} />
          </div>
        ) : (
          <iframe
            src={`${url}#toolbar=1&navpanes=0`}
            title={title}
            className="min-h-[60dvh] w-full flex-1 bg-white sm:min-h-[70vh]"
          />
        )}
      </div>
    </div>
    </ModalPortal>
  );
}
