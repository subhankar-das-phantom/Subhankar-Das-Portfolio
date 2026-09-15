"use client";

import React from "react";
import { motion, type HTMLMotionProps } from "motion/react";
import {
  useOptimizedAnimation,
  useReducedMotion,
  useIsMobile,
  transitions,
} from "@/hooks/useOptimizedAnimation";

interface MotionRevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  yOffset?: number;
  threshold?: number;
}

export function MotionReveal({
  children,
  delay = 0,
  className = "",
  yOffset,
  threshold = 0.1,
}: MotionRevealProps) {
  const isReduced = useReducedMotion();
  const isMobile = useIsMobile();

  if (isReduced) {
    return <div className={className}>{children}</div>;
  }

  const offset = yOffset ?? (isMobile ? 8 : 14);

  return (
    <motion.div
      initial={{ opacity: 0, y: offset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px", amount: threshold }}
      transition={{
        duration: isMobile ? transitions.mobileSmooth.duration : transitions.smooth.duration,
        delay,
        ease: transitions.smooth.ease,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function MotionStaggerGroup({
  children,
  className = "",
  staggerDelay = 0.05,
  delayChildren = 0,
}: {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
  delayChildren?: number;
}) {
  const isReduced = useReducedMotion();
  const isMobile = useIsMobile();

  if (isReduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-30px" }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: isMobile ? staggerDelay * 0.75 : staggerDelay,
            delayChildren,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function MotionStaggerItem({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const isReduced = useReducedMotion();
  const isMobile = useIsMobile();

  if (isReduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: isMobile ? 6 : 10 },
        visible: {
          opacity: 1,
          y: 0,
          transition: isMobile ? transitions.mobileSmooth : transitions.smooth,
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * Interactive card component with subtle scroll reveal and desktop micro-elevation hover
 */
interface MotionCardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function MotionCard({
  children,
  className = "",
  delay = 0,
  ...props
}: MotionCardProps) {
  const { isReduced, isMobile } = useOptimizedAnimation();

  if (isReduced) {
    return (
      <div className={className} {...(props as React.HTMLAttributes<HTMLDivElement>)}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: isMobile ? 8 : 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      whileHover={
        isMobile
          ? undefined
          : {
              y: -2,
              transition: { duration: 0.18, ease: transitions.snappy.ease },
            }
      }
      transition={{
        duration: isMobile ? transitions.mobileSmooth.duration : transitions.smooth.duration,
        delay,
        ease: transitions.smooth.ease,
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

/**
 * Tactile button wrapper with subtle press micro-interaction
 */
export function MotionTap({
  children,
  className = "",
  scale = 0.98,
}: {
  children: React.ReactNode;
  className?: string;
  scale?: number;
}) {
  const isReduced = useReducedMotion();

  if (isReduced) {
    return <span className={className}>{children}</span>;
  }

  return (
    <motion.span
      whileTap={{ scale }}
      transition={{ duration: 0.12 }}
      className={`inline-block ${className}`}
    >
      {children}
    </motion.span>
  );
}
