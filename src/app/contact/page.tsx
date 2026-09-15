"use client";

import { useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import { Clock, MapPin, ArrowUpRight, Copy, Check, FileText } from "lucide-react";
import { MotionReveal, MotionCard } from "@/components/motion/MotionReveal";
import { SocialIcon } from "@/components/ui/SocialIcon";

export default function ContactPage() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(siteConfig.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="py-12 md:py-20">
      <div className="max-w-4xl mx-auto px-6 md:px-10 space-y-16">
        {/* Header */}
        <MotionReveal>
          <div className="space-y-6 border-b border-[#D9D9D4] dark:border-[#1C1F26] pb-8">
            <div className="flex items-center gap-3 font-mono text-xs text-[#C56A3A] dark:text-[#FB923C] tracking-widest uppercase">
              <span>COORDINATES</span>
              <span className="text-[#7C8288]">/ DIRECT CONTACT</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-semibold tracking-[-0.035em] text-[#17191C] dark:text-[#F5F5F3]">
              LET’S BUILD SOFTWARE THAT MATTERS.
            </h1>
            <div className="space-y-3 text-base sm:text-lg text-[#565B61] dark:text-[#9BA1A6] max-w-2xl leading-relaxed">
              <p>
                I’m currently open to software development internships and junior full-stack engineering roles where I can contribute across frontend, backend, databases, and product engineering.
              </p>
              <p>
                I’m particularly interested in teams where I can take ownership, solve real product problems, and keep improving the systems I build.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                href="/resume"
                className="btn-tactile inline-flex items-center gap-2 px-4 py-2 text-xs font-mono font-medium text-[#F5F4F0] bg-[#174A7E] hover:bg-[#0F3B68] dark:bg-[#2563EB] dark:hover:bg-[#1D4ED8] rounded-[4px] shadow-xs"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>View Resume</span>
              </Link>
              <a
                href={siteConfig.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-tactile inline-flex items-center gap-2 px-4 py-2 text-xs font-mono font-medium text-[#17191C] dark:text-[#F5F5F3] bg-[#FBFAF7] dark:bg-[#14161A] hover:bg-[#ECECE7] dark:hover:bg-[#1E2126] border border-[#D9D9D4] dark:border-[#1C1F26] rounded-[4px]"
              >
                <SocialIcon brand="github" size={14} />
                <span>GitHub</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
              </a>
              <a
                href={siteConfig.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-tactile inline-flex items-center gap-2 px-4 py-2 text-xs font-mono font-medium text-[#17191C] dark:text-[#F5F5F3] bg-[#FBFAF7] dark:bg-[#14161A] hover:bg-[#ECECE7] dark:hover:bg-[#1E2126] border border-[#D9D9D4] dark:border-[#1C1F26] rounded-[4px]"
              >
                <SocialIcon brand="linkedin" size={14} />
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
              </a>
              <a
                href={siteConfig.links.gmailCompose}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-tactile inline-flex items-center gap-2 px-4 py-2 text-xs font-mono font-medium text-[#17191C] dark:text-[#F5F5F3] bg-[#FBFAF7] dark:bg-[#14161A] hover:bg-[#ECECE7] dark:hover:bg-[#1E2126] border border-[#D9D9D4] dark:border-[#1C1F26] rounded-[4px]"
                title="Compose in Gmail"
              >
                <SocialIcon brand="email" size={14} />
                <span>Email</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
              </a>
            </div>
          </div>
        </MotionReveal>

        {/* Primary Contact Card */}
        <MotionCard className="border border-[#174A7E] dark:border-[#3B82F6] rounded-[7px] bg-[#FBFAF7] dark:bg-[#0C0D0F] p-8 space-y-6 ring-1 ring-[#174A7E]/20 dark:ring-[#3B82F6]/20">
          <div className="flex items-center justify-between border-b border-[#D9D9D4] dark:border-[#1C1F26] pb-4 font-mono text-xs">
            <div className="flex items-center gap-2">
              <SocialIcon brand="email" size={16} />
              <span className="text-[#7C8288]">PRIMARY INBOX</span>
            </div>
            <span className="text-[#2D6A4F] dark:text-[#34D399] font-semibold">DIRECT ROUTE</span>
          </div>

          <div className="space-y-3">
            <div className="text-xs font-mono text-[#7C8288]">
              SUBHANKAR DAS // {siteConfig.role}
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={siteConfig.links.gmailCompose}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl sm:text-3xl font-semibold tracking-tight text-[#17191C] dark:text-[#F5F5F3] hover:text-[#174A7E] dark:hover:text-[#60A5FA] transition-colors block font-mono"
                title="Compose in Gmail"
              >
                {siteConfig.email}
              </a>
              <div className="flex items-center gap-2">
                <a
                  href={siteConfig.links.gmailCompose}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-tactile inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-medium text-[#F5F4F0] bg-[#174A7E] hover:bg-[#0F3B68] dark:bg-[#2563EB] dark:hover:bg-[#1D4ED8] rounded-[4px] transition-colors cursor-pointer"
                >
                  <SocialIcon brand="email" size={14} />
                  <span>COMPOSE IN GMAIL</span>
                </a>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="btn-tactile inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono text-[#565B61] dark:text-[#9BA1A6] hover:text-[#17191C] dark:hover:text-[#F5F5F3] bg-[#ECECE7] dark:bg-[#14161A] hover:bg-[#D9D9D4] dark:hover:bg-[#1E2126] border border-[#D9D9D4] dark:border-[#1C1F26] rounded-[4px] cursor-pointer"
                  aria-label="Copy email address"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#2D6A4F] dark:text-[#34D399]" />
                      <span className="text-[#2D6A4F] dark:text-[#34D399] font-semibold">COPIED</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>COPY</span>
                    </>
                  )}
                </button>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-2 text-xs text-[#565B61] dark:text-[#9BA1A6] pt-1">
              <span>Opens directly in Google Mail web compose. Prefer desktop app?</span>
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-[#174A7E] dark:text-[#60A5FA] underline hover:text-[#0F3B68]"
              >
                Launch local mail client
              </a>
            </div>
          </div>

          <div className="pt-4 border-t border-[#D9D9D4] dark:border-[#1C1F26] flex flex-wrap items-center gap-4 text-xs font-mono text-[#565B61] dark:text-[#9BA1A6]">
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#174A7E] dark:text-[#60A5FA]" />
              <span>TIMEZONE: IST (UTC+05:30)</span>
            </div>
            <span className="text-[#D9D9D4] dark:text-[#2B303B]">|</span>
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#C56A3A] dark:text-[#FB923C]" />
              <span>LOCATION: Andal, West Bengal, India</span>
            </div>
          </div>
        </MotionCard>

        {/* Alternate Channels */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* LinkedIn */}
          <MotionCard delay={0.06}>
            <a
              href={siteConfig.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="block border border-[#D9D9D4] dark:border-[#1C1F26] rounded-[7px] bg-[#FBFAF7] dark:bg-[#0C0D0F] p-6 space-y-3 hover:border-[#174A7E] dark:hover:border-[#3B82F6] transition-colors group"
            >
              <div className="flex items-center justify-between text-xs font-mono text-[#7C8288]">
                <div className="flex items-center gap-2">
                  <SocialIcon brand="linkedin" size={16} />
                  <span>LINKEDIN</span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#174A7E] dark:text-[#60A5FA] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
              <div className="text-base font-semibold text-[#17191C] dark:text-[#F5F5F3] group-hover:text-[#174A7E] dark:group-hover:text-[#60A5FA] transition-colors">
                subhankar-das
              </div>
              <p className="text-xs text-[#565B61] dark:text-[#9BA1A6]">
                Professional network, background timeline, and updates.
              </p>
            </a>
          </MotionCard>

          {/* GitHub */}
          <MotionCard delay={0.1}>
            <a
              href={siteConfig.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="block border border-[#D9D9D4] dark:border-[#1C1F26] rounded-[7px] bg-[#FBFAF7] dark:bg-[#0C0D0F] p-6 space-y-3 hover:border-[#174A7E] dark:hover:border-[#3B82F6] transition-colors group"
            >
              <div className="flex items-center justify-between text-xs font-mono text-[#7C8288]">
                <div className="flex items-center gap-2">
                  <SocialIcon brand="github" size={16} />
                  <span>GITHUB</span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#174A7E] dark:text-[#60A5FA] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
              <div className="text-base font-semibold text-[#17191C] dark:text-[#F5F5F3] group-hover:text-[#174A7E] dark:group-hover:text-[#60A5FA] transition-colors">
                subhankar-das-phantom
              </div>
              <p className="text-xs text-[#565B61] dark:text-[#9BA1A6]">
                Source repositories, commit history, and technical architecture.
              </p>
            </a>
          </MotionCard>
        </div>
      </div>
    </div>
  );
}
