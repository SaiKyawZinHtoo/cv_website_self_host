"use client";

import { useState } from "react";
import { ImageOff, Loader2 } from "lucide-react";
import { useApp } from "@/context/AppProvider";
import { SafeIcon } from "./SafeIcon";

interface ModalImageProps {
  src: string;
  alt: string;
  className?: string;
}

export function ModalImage({ src, alt, className = "" }: ModalImageProps) {
  const { t } = useApp();
  const [status, setStatus] = useState<"loading" | "loaded" | "error">("loading");

  return (
    <div className="relative flex min-h-[200px] w-full items-center justify-center">
      {status === "loading" && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-[var(--text-muted)]">
          <SafeIcon icon={Loader2} className="h-8 w-8 animate-spin text-[var(--accent)]" />
          <span className="text-xs">{t.ui.imageLoading}</span>
        </div>
      )}

      {status === "error" && (
        <div className="flex flex-col items-center gap-2 px-4 text-center text-[var(--text-muted)]">
          <SafeIcon icon={ImageOff} className="h-10 w-10 text-[var(--text-muted)]" />
          <p className="text-sm">{t.ui.imageError}</p>
        </div>
      )}

      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        draggable={false}
        onLoad={() => setStatus("loaded")}
        onError={() => setStatus("error")}
        className={`max-h-[min(70dvh,900px)] w-auto max-w-full object-contain transition-opacity duration-200 ${
          status === "loaded" ? "opacity-100" : "opacity-0"
        } ${className}`}
      />
    </div>
  );
}
