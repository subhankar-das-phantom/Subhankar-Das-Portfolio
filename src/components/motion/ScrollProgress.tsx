"use client";

import { motion, useScroll, useSpring } from "motion/react";
import { useReducedMotion } from "@/hooks/useOptimizedAnimation";

export function ScrollProgress() {
  const isReduced = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 280,
    damping: 32,
    restDelta: 0.001,
  });

  if (isReduced) return null;

  return (
    <motion.div
      style={{ scaleX, transformOrigin: "0%" }}
      className="absolute top-0 left-0 right-0 h-[2px] bg-[#174A7E] dark:bg-[#FFFFFF] dark:shadow-[0_0_8px_rgba(255,255,255,0.5)] z-50 pointer-events-none"
      aria-hidden="true"
    />
  );
}
