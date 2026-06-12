"use client";

interface ModalImageProps {
  src: string;
  alt: string;
  className?: string;
}

export function ModalImage({ src, alt, className = "" }: ModalImageProps) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      draggable={false}
      className={`max-h-[min(75vh,900px)] w-auto max-w-full object-contain ${className}`}
    />
  );
}
