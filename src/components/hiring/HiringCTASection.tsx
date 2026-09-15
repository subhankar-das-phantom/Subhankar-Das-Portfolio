"use client";

import Link from "next/link";
import { siteConfig } from "@/data/site";
import { ArrowUpRight, Download, FileText, CheckCircle2 } from "lucide-react";
import { MotionReveal, MotionCard, MotionTap } from "@/components/motion/MotionReveal";
import { SocialIcon } from "@/components/ui/SocialIcon";

export function HiringCTASection() {
  return (
    <section className="py-20 md:py-28 border-b border-[#D9D9D4] dark:border-[#1C1F26] bg-[#FBFAF7] dark:bg-[#000000]">
      <div className="max-w-7xl mx-auto px-6 md:px-10 space-y-12">
        <MotionReveal>
          <div className="border border-[#174A7E] dark:border-[#3B82F6] rounded-[7px] bg-[#F5F4F0] dark:bg-[#0C0D0F] p-8 sm:p-12 space-y-8 ring-1 ring-[#174A7E]/20 dark:ring-[#3B82F6]/20 shadow-xs">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#D9D9D4] dark:border-[#1C1F26] pb-6">
              <div className="flex items-center gap-2.5 font-mono text-xs text-[#C56A3A] dark:text-[#FB923C] uppercase tracking-wider font-semibold">
                <span className="w-2 h-2 rounded-full bg-[#2D6A4F] animate-pulse" />
                <span>AVAILABILITY &amp; HIRING STATUS</span>
              </div>
              <span className="font-mono text-xs text-[#174A7E] dark:text-[#60A5FA] font-medium">
                IMMEDIATE / SUMMER 2026 ENGAGEMENTS
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <h2 className="text-2xl sm:text-4xl md:text-5xl font-semibold tracking-[-0.03em] text-[#17191C] dark:text-[#F5F5F3]">
                  Looking for the next problem to work on.
                </h2>
                <p className="text-sm sm:text-base text-[#565B61] dark:text-[#9BA1A6] leading-relaxed max-w-2xl">
                  I’m currently interested in software development internships and junior full-stack engineering opportunities where I can take end-to-end ownership across frontend interfaces, backend APIs, data schemas, and production reliability.
                </p>

                <div className="flex flex-wrap gap-4 pt-2 text-xs font-mono text-[#17191C] dark:text-[#F5F5F3]">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#2D6A4F] dark:text-[#34D399]" />
                    <span>Software Development Internships</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#2D6A4F] dark:text-[#34D399]" />
                    <span>Junior Full-Stack Roles</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#2D6A4F] dark:text-[#34D399]" />
                    <span>Remote or Hybrid</span>
                  </div>
                </div>
              </div>

              {/* Action Column */}
              <div className="lg:col-span-4 flex flex-col gap-3">
                <MotionTap>
                  <Link
                    href="/resume"
                    className="btn-tactile w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-mono font-medium text-[#F5F4F0] bg-[#174A7E] hover:bg-[#0F3B68] dark:bg-[#2563EB] dark:hover:bg-[#1D4ED8] rounded-[4px] shadow-xs"
                  >
                    <FileText className="w-4 h-4" />
                    <span>VIEW CURRICULUM VITAE</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
                  </Link>
                </MotionTap>

                <MotionTap>
                  <a
                    href={siteConfig.links.gmailCompose}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-tactile w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-mono font-medium text-[#17191C] dark:text-[#F5F5F3] bg-[#FBFAF7] dark:bg-[#14161A] hover:bg-[#ECECE7] dark:hover:bg-[#1E2126] border border-[#D9D9D4] dark:border-[#1C1F26] rounded-[4px]"
                  >
                    <SocialIcon brand="email" size={16} />
                    <span>EMAIL DIRECTLY (GMAIL)</span>
                  </a>
                </MotionTap>

                <div className="pt-2 flex items-center justify-center gap-4 text-xs font-mono text-[#565B61] dark:text-[#9BA1A6]">
                  <a
                    href={siteConfig.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 hover:text-[#174A7E] dark:hover:text-[#60A5FA] transition-colors"
                  >
                    <SocialIcon brand="github" size={14} />
                    <span>GitHub</span>
                    <ArrowUpRight className="w-3 h-3 opacity-60" />
                  </a>
                  <span>·</span>
                  <a
                    href={siteConfig.links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 hover:text-[#174A7E] dark:hover:text-[#60A5FA] transition-colors"
                  >
                    <SocialIcon brand="linkedin" size={14} />
                    <span>LinkedIn</span>
                    <ArrowUpRight className="w-3 h-3 opacity-60" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}
