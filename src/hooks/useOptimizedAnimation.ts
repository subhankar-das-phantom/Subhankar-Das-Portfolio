"use client";

import { useEffect, useState, useCallback, useMemo } from "react";

/**
 * Hook to detect if the user has requested reduced motion in their OS settings.
 * Ensures accessibility and avoids unwanted animations.
 */
export function useReducedMotion(): boolean {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mediaQuery.matches);

    const onChange = (event: MediaQueryListEvent) => {
      setReducedMotion(event.matches);
    };

    mediaQuery.addEventListener("change", onChange);
    return () => mediaQuery.removeEventListener("change", onChange);
  }, []);

  return reducedMotion;
}

/**
 * Hook to detect mobile viewports with an optional configurable breakpoint.
 * Automatically handles resize events with a passive listener.
 */
export function useIsMobile(breakpoint = 768): boolean {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const checkMobile = () => {
      setIsMobile(window.innerWidth < breakpoint);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile, { passive: true });
    return () => window.removeEventListener("resize", checkMobile);
  }, [breakpoint]);

  return isMobile;
}

/**
 * Hook to detect scroll direction ("up", "down", or null).
 * Useful for dynamic nav micro-interactions and scroll-linked awareness.
 */
export function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState<"up" | "down" | null>(null);
  const [prevOffset, setPrevOffset] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined") return;
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentOffset = window.pageYOffset;
          const diff = currentOffset - prevOffset;

          if (Math.abs(diff) > 4) {
            setScrollDirection(diff > 0 ? "down" : "up");
            setPrevOffset(currentOffset);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevOffset]);

  return scrollDirection;
}

/**
 * Precision cubic-bezier easing curves tailored for Swiss typography & software products.
 * Never rubber-bandy; always restrained, fast, and mathematically smooth.
 */
export const transitions = {
  // Ultra-refined editorial reveal (fast start, silky deceleration)
  smooth: {
    duration: 0.36,
    ease: [0.16, 1, 0.3, 1] as const,
  },
  // Snappy for interactive micro-actions (buttons, toggles, badges)
  snappy: {
    duration: 0.2,
    ease: [0.2, 0.8, 0.2, 1] as const,
  },
  // Mobile-optimized (shorter duration to respect limited GPU power and touch velocity)
  mobileSmooth: {
    duration: 0.28,
    ease: [0.16, 1, 0.3, 1] as const,
  },
  // Spring for physics-feeling hairline scroll progress or small badges
  gentleSpring: {
    type: "spring" as const,
    stiffness: 350,
    damping: 30,
    mass: 0.8,
  },
  // Stagger generator
  stagger: (staggerChildren = 0.05, delayChildren = 0) => ({
    staggerChildren,
    delayChildren,
  }),
};

/**
 * Primary optimization hook:
 * Bundles reduced-motion detection, viewport sizing, responsive translation offsets,
 * and high-performance GPU-only animation variants.
 */
export function useOptimizedAnimation() {
  const isReduced = useReducedMotion();
  const isMobile = useIsMobile();

  const getResponsiveOffset = useCallback(
    (desktop = 14, mobile = 8) => {
      return isMobile ? mobile : desktop;
    },
    [isMobile]
  );

  const revealVariants = useMemo(() => {
    if (isReduced) {
      return {
        hidden: { opacity: 1, y: 0 },
        visible: { opacity: 1, y: 0 },
      };
    }
    return {
      hidden: {
        opacity: 0,
        y: isMobile ? 8 : 14,
      },
      visible: {
        opacity: 1,
        y: 0,
        transition: isMobile ? transitions.mobileSmooth : transitions.smooth,
      },
    };
  }, [isReduced, isMobile]);

  const staggerContainer = useCallback(
    (staggerDelay = isMobile ? 0.04 : 0.06, delayStart = 0) => {
      if (isReduced) {
        return {
          hidden: {},
          visible: {},
        };
      }
      return {
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
            delayChildren: delayStart,
          },
        },
      };
    },
    [isReduced, isMobile]
  );

  const staggerItem = useMemo(() => {
    if (isReduced) {
      return {
        hidden: { opacity: 1, y: 0 },
        visible: { opacity: 1, y: 0 },
      };
    }
    return {
      hidden: {
        opacity: 0,
        y: isMobile ? 6 : 10,
      },
      visible: {
        opacity: 1,
        y: 0,
        transition: isMobile ? transitions.mobileSmooth : transitions.smooth,
      },
    };
  }, [isReduced, isMobile]);

  // Micro-interaction presets
  const microInteractions = useMemo(() => {
    if (isReduced) {
      return {
        tapSubtle: {},
        hoverLift: {},
        hoverScale: {},
      };
    }
    return {
      // Subtle tactile button press
      tapSubtle: {
        scale: 0.98,
        transition: transitions.snappy,
      },
      // Subtle card micro-elevation on desktop only
      hoverLift: isMobile
        ? {}
        : {
            y: -2,
            transition: transitions.snappy,
          },
      // Subtle icon or badge scale
      hoverScale: {
        scale: 1.04,
        transition: transitions.snappy,
      },
    };
  }, [isReduced, isMobile]);

  return {
    isReduced,
    isMobile,
    shouldAnimate: !isReduced,
    transitions,
    getResponsiveOffset,
    revealVariants,
    staggerContainer,
    staggerItem,
    microInteractions,
  };
}
