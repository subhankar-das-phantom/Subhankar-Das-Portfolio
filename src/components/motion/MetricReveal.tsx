"use client";

import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { useReducedMotion } from "./useReducedMotion";

interface MetricRevealProps {
  before: string;
  after: string;
  highlight?: string;
  label: string;
  className?: string;
  delay?: number;
}

export function MetricReveal({
  before,
  after,
  highlight,
  label,
  className = "",
  delay = 0.1,
}: MetricRevealProps) {
  const isReduced = useReducedMotion();
  const [inView, setInView] = useState(false);
  const [showFinal, setShowFinal] = useState(false);

  useEffect(() => {
    if (inView && !isReduced) {
      const timer = setTimeout(() => {
        setShowFinal(true);
      }, (delay * 1000) + 300);
      return () => clearTimeout(timer);
    } else if (isReduced) {
      setShowFinal(true);
    }
  }, [inView, isReduced, delay]);

  return (
    <div
      className={`border border-[#D9D9D4] dark:border-[#1C1F26] rounded-[4px] bg-[#FBFAF7] dark:bg-[#0C0D0F] p-4 font-mono ${className}`}
      onMouseEnter={() => setInView(true)}
    >
      <div className="text-[0.70rem] text-[#7C8288] uppercase tracking-wider">{label}</div>
      <motion.div
        onViewportEnter={() => setInView(true)}
        viewport={{ once: true, margin: "-20px" }}
        className="flex items-baseline gap-2 pt-1 pb-1"
      >
        <span className="text-xl font-semibold text-[#17191C] dark:text-[#F5F5F3]">
          {isReduced ? (
            `${before} → ${after}`
          ) : showFinal ? (
            `${before} → ${after}`
          ) : (
            before
          )}
        </span>
      </motion.div>
      {highlight && (
        <div className="text-[0.70rem] text-[#C56A3A] dark:text-[#FB923C] font-mono">
          {highlight}
        </div>
      )}
    </div>
  );
}
