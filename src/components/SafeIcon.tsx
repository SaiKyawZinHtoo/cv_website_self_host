"use client";

import { type ComponentType } from "react";
import type { LucideProps } from "lucide-react";
import { useMounted } from "@/hooks/useMounted";

type SafeIconProps = LucideProps & {
  icon: ComponentType<LucideProps>;
};

export function SafeIcon({ icon: Icon, className, ...props }: SafeIconProps) {
  const mounted = useMounted();

  if (!mounted) {
    return <span aria-hidden className={className} style={{ display: "inline-block" }} />;
  }

  return <Icon className={className} {...props} />;
}
