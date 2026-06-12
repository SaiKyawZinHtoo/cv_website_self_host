"use client";

import { useEffect, useState, type ComponentType } from "react";
import type { IconBaseProps } from "react-icons";

type SafeBrandIconProps = IconBaseProps & {
  icon: ComponentType<IconBaseProps>;
};

export function SafeBrandIcon({ icon: Icon, className, ...props }: SafeBrandIconProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <span aria-hidden className={className} style={{ display: "inline-block" }} />;
  }

  return <Icon className={className} {...props} />;
}
