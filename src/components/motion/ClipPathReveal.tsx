"use client";

import React from "react";
import { motion } from "motion/react";
import { useReducedMotion } from "./useReducedMotion";

interface ClipPathRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
}

export function ClipPathReveal({
  children,
  className = "",
  delay = 0.08,
  duration = 0.58,
}: ClipPathRevealProps) {
  const isReduced = useReducedMotion();

  if (isReduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ clipPath: "inset(0 100% 0 0)", opacity: 0.9 }}
      whileInView={{ clipPath: "inset(0 0 0 0)", opacity: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
