"use client";

import { useCallback } from "react";
import { useApp } from "@/context/AppProvider";

export function usePrintCv() {
  const { theme } = useApp();

  return useCallback(() => {
    const html = document.documentElement;

    html.classList.remove("dark");
    html.classList.add("light");

    const restoreTheme = () => {
      if (theme === "dark") {
        html.classList.add("dark");
        html.classList.remove("light");
      } else {
        html.classList.remove("dark");
        html.classList.add("light");
      }
    };

    window.addEventListener("afterprint", restoreTheme, { once: true });
    window.print();
  }, [theme]);
}
