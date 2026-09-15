"use client";

import React from "react";
import { motion } from "motion/react";
import { useReducedMotion } from "./useReducedMotion";

interface LineDrawProps {
  d: string;
  className?: string;
  stroke?: string;
  strokeWidth?: number;
  duration?: number;
  delay?: number;
  strokeDasharray?: string;
}

export function LineDraw({
  d,
  className = "",
  stroke = "currentColor",
  strokeWidth = 1.5,
  duration = 0.8,
  delay = 0.1,
  strokeDasharray,
}: LineDrawProps) {
  const isReduced = useReducedMotion();

  if (isReduced) {
    return (
      <path
        d={d}
        className={className}
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeDasharray={strokeDasharray}
        fill="none"
      />
    );
  }

  return (
    <motion.path
      d={d}
      className={className}
      stroke={stroke}
      strokeWidth={strokeWidth}
      strokeDasharray={strokeDasharray}
      fill="none"
      initial={{ pathLength: 0, opacity: 0.2 }}
      whileInView={{ pathLength: 1, opacity: 1 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
    />
  );
}
