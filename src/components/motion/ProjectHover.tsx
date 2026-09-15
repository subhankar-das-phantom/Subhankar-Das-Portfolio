"use client";

import React from "react";
import { motion } from "motion/react";
import { useReducedMotion } from "./useReducedMotion";

interface ProjectHoverProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function ProjectHover({
  children,
  className = "",
  delay = 0,
}: ProjectHoverProps) {
  const isReduced = useReducedMotion();

  if (isReduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{
        duration: 0.32,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={`group ${className}`}
    >
      {children}
    </motion.div>
  );
}
