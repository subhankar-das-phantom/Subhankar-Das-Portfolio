"use client";

import { useReducedMotion as useFramerReducedMotion } from "motion/react";
import { useEffect, useState } from "react";

export function useReducedMotion(): boolean {
  const framerReduced = useFramerReducedMotion();
  const [isReduced, setIsReduced] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setIsReduced(mediaQuery.matches || !!framerReduced);

    const handler = (e: MediaQueryListEvent) => {
      setIsReduced(e.matches);
    };

    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, [framerReduced]);

  return isReduced;
}
