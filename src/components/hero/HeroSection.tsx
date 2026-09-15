import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import { SystemDiagram } from "./SystemDiagram";
import { siteConfig } from "@/data/site";
import { MotionReveal } from "@/components/motion/MotionReveal";
import { MaskedTextReveal } from "@/components/motion/MaskedTextReveal";
import { SocialIcon } from "@/components/ui/SocialIcon";

export function HeroSection() {
  return (
    <section className="pt-8 sm:pt-14 pb-16 md:pb-24 border-b border-[#D9D9D4] dark:border-[#1C1F26]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Top Metadata Bar */}
        <MotionReveal delay={0.02}>
          <div className="flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-[#D9D9D4] dark:border-[#1C1F26] text-xs font-mono text-[#7C8288]">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#2D6A4F] animate-pulse" />
              <span className="text-[#17191C] dark:text-[#F5F5F3] font-medium tracking-wide">
                {siteConfig.tagline}
              </span>
            </div>
            <div className="flex items-center gap-4">
              <span>ANDAL, WB // INDIA</span>
              <span className="text-[#D9D9D4] dark:text-[#2B303B]">|</span>
              <span className="text-[#174A7E] dark:text-[#60A5FA] font-medium">
                BCA (HONS.) 2024–2027
              </span>
            </div>
          </div>
        </MotionReveal>

        {/* Hero Editorial Typography */}
        <div className="py-12 md:py-16 grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-8 space-y-6">
            {/* Sophisticated Masked Line Reveal */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-semibold tracking-[-0.035em] text-[#17191C] dark:text-[#F5F5F3] leading-[1.05]">
              <MaskedTextReveal
                lines={["I build software", "that gets used."]}
                lineClassName="block"
                delay={0.05}
                staggerDelay={0.08}
              />
            </h1>

            <MotionReveal delay={0.14}>
              <div className="space-y-3 pt-2 max-w-2xl">
                <p className="text-base sm:text-lg text-[#565B61] dark:text-[#9BA1A6] leading-relaxed">
                  {siteConfig.supportingText}
                </p>
                <p className="text-sm sm:text-base text-[#7C8288] leading-relaxed">
                  {siteConfig.secondaryLine}
                </p>
              </div>
            </MotionReveal>

            {/* CTAs & Social Channels */}
            <MotionReveal delay={0.2}>
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <Link
                  href="/work"
                  className="btn-tactile inline-flex items-center gap-2 px-5 py-2.5 text-xs font-mono font-medium text-[#F5F4F0] bg-[#174A7E] hover:bg-[#0F3B68] dark:bg-[#2563EB] dark:hover:bg-[#1D4ED8] rounded-[4px] shadow-xs cursor-pointer focus-visible:outline-2"
                >
                  <span>VIEW WORK</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Link
                  href="/contact"
                  className="btn-tactile inline-flex items-center gap-2 px-5 py-2.5 text-xs font-mono font-medium text-[#17191C] dark:text-[#F5F5F3] bg-[#FBFAF7] dark:bg-[#14161A] hover:bg-[#ECECE7] dark:hover:bg-[#1E2126] border border-[#D9D9D4] dark:border-[#1C1F26] rounded-[4px] cursor-pointer focus-visible:outline-2"
                >
                  <Mail className="w-3.5 h-3.5 text-[#565B61] dark:text-[#9BA1A6]" />
                  <span>GET IN TOUCH</span>
                </Link>

                {/* Secondary brand links with official icons supporting labels */}
                <div className="flex items-center gap-3 pl-2 text-xs font-mono text-[#565B61] dark:text-[#9BA1A6]">
                  <span className="text-[#D9D9D4] dark:text-[#2B303B] hidden sm:inline">|</span>
                  <a
                    href={siteConfig.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 hover:text-[#174A7E] dark:hover:text-[#60A5FA] transition-colors"
                  >
                    <SocialIcon brand="github" size={16} />
                    <span>GitHub</span>
                  </a>
                  <a
                    href={siteConfig.links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 hover:text-[#174A7E] dark:hover:text-[#60A5FA] transition-colors"
                  >
                    <SocialIcon brand="linkedin" size={16} />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </MotionReveal>
          </div>

          {/* Right Column: Compact Status Card */}
          <MotionReveal delay={0.24} className="lg:col-span-4">
            <div className="border border-[#D9D9D4] dark:border-[#1C1F26] rounded-[7px] bg-[#FBFAF7] dark:bg-[#0C0D0F] p-5 space-y-4 shadow-xs">
              <div className="flex items-center justify-between border-b border-[#D9D9D4] dark:border-[#1C1F26] pb-2 text-[0.70rem] font-mono text-[#7C8288]">
                <span>DISPATCH STATUS</span>
                <span className="text-[#2D6A4F] dark:text-[#34D399] font-semibold">ACTIVE</span>
              </div>
              <div className="space-y-1.5 text-xs">
                <p className="font-mono text-[#7C8288] text-[0.70rem] uppercase">
                  Current Positioning
                </p>
                <p className="font-medium text-[#17191C] dark:text-[#F5F5F3]">
                  Full-Stack &amp; Systems Engineering
                </p>
                <p className="text-[#565B61] dark:text-[#9BA1A6] text-[0.80rem]">
                  Available for internships &amp; high-impact software engineering roles.
                </p>
              </div>
              <div className="pt-2 border-t border-[#D9D9D4] dark:border-[#1C1F26] text-[0.70rem] font-mono text-[#565B61] dark:text-[#9BA1A6] flex items-center justify-between">
                <span>LOCATION</span>
                <span className="text-[#17191C] dark:text-[#F5F5F3] font-medium">WEST BENGAL, INDIA</span>
              </div>
            </div>
          </MotionReveal>
        </div>

        {/* System Diagram Technical Artifact */}
        <MotionReveal delay={0.28} className="pt-4">
          <SystemDiagram />
        </MotionReveal>
      </div>
    </section>
  );
}
