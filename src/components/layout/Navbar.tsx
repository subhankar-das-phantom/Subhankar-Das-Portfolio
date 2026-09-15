"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { siteConfig } from "@/data/site";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { ScrollProgress } from "@/components/motion/ScrollProgress";
import { MotionTap } from "@/components/motion/MotionReveal";
import { SocialIcon } from "@/components/ui/SocialIcon";

export function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { label: "HOME", href: "/" },
    { label: "WORK", href: "/work" },
    { label: "ABOUT", href: "/about" },
    { label: "ENGINEERING", href: "/#engineering" },
    { label: "CONTACT", href: "/contact" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-200 ${
        isScrolled
          ? "bg-[#FBFAF7]/95 dark:bg-[#000000]/95 backdrop-blur-md border-b border-[#D9D9D4] dark:border-[#1C1F26]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <ScrollProgress />
      <div className="max-w-7xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        {/* Left: Identity */}
        <Link
          href="/"
          className="group flex items-center gap-2 text-sm font-semibold tracking-tight text-[#17191C] dark:text-[#F5F5F3] hover:text-[#174A7E] dark:hover:text-[#60A5FA] transition-colors"
        >
          <span className="font-mono text-xs text-[#7C8288] group-hover:text-[#174A7E] dark:group-hover:text-[#60A5FA] transition-colors">
            SD //
          </span>
          <span className="tracking-wider">{siteConfig.name}</span>
        </Link>

        {/* Center / Right: Desktop Links */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-mono tracking-wider">
          {navItems.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : item.href.startsWith("/#")
                ? false
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.label}
                href={item.href}
                className={`relative py-1 transition-colors hover:text-[#17191C] dark:hover:text-[#F5F5F3] ${
                  isActive
                    ? "text-[#17191C] dark:text-[#F5F5F3] font-medium"
                    : "text-[#565B61] dark:text-[#9BA1A6]"
                }`}
              >
                {item.label}
                {isActive && (
                  <motion.span
                    layoutId="navbar-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-[1.5px] bg-[#174A7E] dark:bg-[#F5F5F3]"
                    aria-hidden="true"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Far Right: Socials, Theme Toggle & Resume Button */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={siteConfig.links.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="p-1.5 text-[#7C8288] hover:text-[#17191C] dark:hover:text-[#F5F5F3] transition-colors"
          >
            <span className="sr-only">GitHub</span>
            <SocialIcon brand="github" size={16} />
          </a>
          <a
            href={siteConfig.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="p-1.5 text-[#7C8288] hover:text-[#17191C] dark:hover:text-[#F5F5F3] transition-colors"
          >
            <span className="sr-only">LinkedIn</span>
            <SocialIcon brand="linkedin" size={16} />
          </a>
          <div className="w-[1px] h-4 bg-[#D9D9D4] dark:bg-[#1C1F26] mx-1" />
          <ThemeToggle />
          <MotionTap>
            <Link
              href="/resume"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-mono font-medium text-[#17191C] dark:text-[#F5F5F3] bg-[#ECECE7] dark:bg-[#14161A] hover:bg-[#DCE8F3] dark:hover:bg-[#1E2126] hover:text-[#174A7E] dark:hover:text-[#60A5FA] border border-[#D9D9D4] dark:border-[#1C1F26] rounded-[4px] transition-colors"
            >
              <span>RESUME</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
            </Link>
          </MotionTap>
        </div>

        {/* Mobile controls */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="w-11 h-11 flex items-center justify-center rounded-[4px] text-[#17191C] dark:text-[#F5F5F3] hover:text-[#174A7E] dark:hover:text-[#60A5FA] hover:bg-[#ECECE7] dark:hover:bg-[#14161A] transition-colors"
            aria-label="Toggle navigation menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Clean, Mobile Menu with Framer Motion AnimatePresence */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden overflow-hidden border-b border-[#D9D9D4] dark:border-[#1C1F26] bg-[#FBFAF7] dark:bg-[#0C0D0F] px-6 py-4 space-y-1"
          >
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={handleNavClick}
                className="flex items-center min-h-[44px] text-xs font-mono tracking-wider text-[#17191C] dark:text-[#F5F5F3] hover:text-[#174A7E] dark:hover:text-[#60A5FA] transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-2 border-t border-[#D9D9D4] dark:border-[#1C1F26]">
              <Link
                href="/resume"
                onClick={handleNavClick}
                className="flex items-center justify-between min-h-[44px] text-xs font-mono text-[#174A7E] dark:text-[#60A5FA] font-medium"
              >
                <span>VIEW RESUME</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
