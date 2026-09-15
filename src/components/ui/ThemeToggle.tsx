"use client";

import { useSyncExternalStore, useState, useEffect } from "react";
import { motion } from "motion/react";
import { Sun, Moon } from "lucide-react";

function subscribe(callback: () => void) {
  const observer = new MutationObserver(callback);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["class"],
  });
  return () => observer.disconnect();
}

function getSnapshot(): "light" | "dark" {
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
}

function getServerSnapshot(): "light" | "dark" {
  return "light";
}

export function ThemeToggle({ className = "" }: { className?: string }) {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = (newTheme: "light" | "dark") => {
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const isDark = mounted ? theme === "dark" : false;

  return (
    <div
      role="radiogroup"
      aria-label="Visual color theme"
      className={`inline-flex items-center border border-[#D9D9D4] dark:border-[#1C1F26] rounded-[4px] bg-[#ECECE7] dark:bg-[#14161A] p-0.5 text-[0.70rem] font-mono tracking-wider transition-colors ${className}`}
    >
      {/* Light Option */}
      <button
        type="button"
        role="radio"
        aria-checked={!isDark}
        onClick={() => toggleTheme("light")}
        className={`relative flex items-center gap-1 px-2.5 py-1 rounded-[3px] transition-colors cursor-pointer min-h-[28px] ${
          !isDark
            ? "text-[#17191C] font-semibold"
            : "text-[#7C8288] hover:text-[#17191C] dark:hover:text-[#F5F5F3]"
        }`}
      >
        {mounted && !isDark && (
          <motion.span
            layoutId="theme-pill"
            className="absolute inset-0 rounded-[3px] bg-[#FBFAF7] shadow-2xs"
            transition={{ type: "spring", stiffness: 450, damping: 35 }}
          />
        )}
        <span className="relative z-10 flex items-center gap-1">
          <Sun className="w-3 h-3 text-[#C56A3A]" />
          <span>LGT</span>
        </span>
      </button>

      {/* Dark Option */}
      <button
        type="button"
        role="radio"
        aria-checked={isDark}
        onClick={() => toggleTheme("dark")}
        className={`relative flex items-center gap-1 px-2.5 py-1 rounded-[3px] transition-colors cursor-pointer min-h-[28px] ${
          isDark
            ? "text-[#F5F5F3] font-semibold"
            : "text-[#7C8288] hover:text-[#17191C] dark:hover:text-[#F5F5F3]"
        }`}
      >
        {mounted && isDark && (
          <motion.span
            layoutId="theme-pill"
            className="absolute inset-0 rounded-[3px] bg-[#1E2126] ring-1 ring-[#383D45] shadow-2xs"
            transition={{ type: "spring", stiffness: 450, damping: 35 }}
          />
        )}
        <span className="relative z-10 flex items-center gap-1">
          <Moon className="w-3 h-3 text-[#60A5FA]" />
          <span>DRK</span>
        </span>
      </button>
    </div>
  );
}
