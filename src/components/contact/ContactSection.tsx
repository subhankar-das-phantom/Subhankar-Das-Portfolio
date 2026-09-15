"use client";

import Link from "next/link";
import { siteConfig } from "@/data/site";
import { ArrowUpRight, Download, FileText } from "lucide-react";
import { MotionReveal, MotionCard, MotionTap } from "@/components/motion/MotionReveal";
import { SocialIcon } from "@/components/ui/SocialIcon";

export function ContactSection() {
  return (
    <section className="py-20 md:py-28 bg-[#FBFAF7] dark:bg-[#000000]">
      <div className="max-w-7xl mx-auto px-6 md:px-10 space-y-16">
        {/* Resume Action Bar */}
        <MotionReveal>
          <div className="border border-[#D9D9D4] dark:border-[#1C1F26] rounded-[7px] bg-[#ECECE7] dark:bg-[#0C0D0F] p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-1.5">
              <div className="flex items-center gap-2 font-mono text-xs text-[#C56A3A] dark:text-[#FB923C] font-semibold">
                <FileText className="w-3.5 h-3.5" />
                <span>CURRICULUM VITAE</span>
              </div>
              <h3 className="text-xl font-semibold tracking-tight text-[#17191C] dark:text-[#F5F5F3]">
                Comprehensive Engineering Background &amp; Coursework
              </h3>
              <p className="text-xs text-[#565B61] dark:text-[#9BA1A6]">
                Available as an interactive web document or downloadable versioned PDF.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <MotionTap>
                <Link
                  href="/resume"
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs font-mono font-medium text-[#17191C] dark:text-[#F5F5F3] bg-[#FBFAF7] dark:bg-[#14161A] hover:bg-[#F5F4F0] dark:hover:bg-[#1E2126] border border-[#D9D9D4] dark:border-[#1C1F26] rounded-[4px] transition-colors"
                >
                  <span>VIEW FULL CV</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </MotionTap>
              <MotionTap>
                <a
                  href="/resume/Subhankar-Das-Resume.pdf"
                  download="Subhankar-Das-Resume.pdf"
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs font-mono font-medium text-[#F5F4F0] bg-[#174A7E] hover:bg-[#0F3B68] dark:bg-[#2563EB] dark:hover:bg-[#1D4ED8] rounded-[4px] transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>DOWNLOAD RESUME PDF</span>
                </a>
              </MotionTap>
            </div>
          </div>
        </MotionReveal>

        {/* Contact Module */}
        <div className="border-t border-[#D9D9D4] dark:border-[#1C1F26] pt-12 space-y-8">
          <MotionReveal>
            <div className="space-y-2 max-w-2xl">
              <p className="font-mono text-xs text-[#C56A3A] dark:text-[#FB923C] uppercase tracking-widest">
                07 / GET IN TOUCH
              </p>
              <h2 className="text-3xl sm:text-5xl font-semibold tracking-[-0.035em] text-[#17191C] dark:text-[#F5F5F3]">
                Have a problem worth solving?
              </h2>
              <p className="text-sm md:text-base text-[#565B61] dark:text-[#9BA1A6] leading-relaxed pt-2">
                Whether discussing operational SaaS architecture, MERN backend engineering,
                database optimization, or internship opportunities—my inbox is open.
              </p>
            </div>
          </MotionReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            {/* Email */}
            <MotionCard delay={0.02}>
              <a
                href={siteConfig.links.gmailCompose}
                target="_blank"
                rel="noopener noreferrer"
                className="block border border-[#D9D9D4] dark:border-[#1C1F26] rounded-[7px] bg-[#F5F4F0] dark:bg-[#0C0D0F] p-6 space-y-3 hover:border-[#174A7E] dark:hover:border-[#3B82F6] transition-colors group"
                title="Compose email in Gmail"
              >
                <div className="flex items-center justify-between text-[#7C8288] text-xs font-mono">
                  <div className="flex items-center gap-2">
                    <SocialIcon brand="email" size={16} />
                    <span>DIRECT EMAIL (GMAIL)</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#174A7E] dark:text-[#60A5FA] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
                <div className="text-sm font-semibold text-[#17191C] dark:text-[#F5F5F3] group-hover:text-[#174A7E] dark:group-hover:text-[#60A5FA] transition-colors font-mono">
                  {siteConfig.email}
                </div>
                <p className="text-[0.75rem] text-[#565B61] dark:text-[#9BA1A6]">
                  Opens directly in Google Mail. Responds within 24h.
                </p>
              </a>
            </MotionCard>

            {/* LinkedIn */}
            <MotionCard delay={0.06}>
              <a
                href={siteConfig.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="block border border-[#D9D9D4] dark:border-[#1C1F26] rounded-[7px] bg-[#F5F4F0] dark:bg-[#0C0D0F] p-6 space-y-3 hover:border-[#174A7E] dark:hover:border-[#3B82F6] transition-colors group"
              >
                <div className="flex items-center justify-between text-[#7C8288] text-xs font-mono">
                  <div className="flex items-center gap-2">
                    <SocialIcon brand="linkedin" size={16} />
                    <span>LINKEDIN NETWORK</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#174A7E] dark:text-[#60A5FA] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
                <div className="text-sm font-semibold text-[#17191C] dark:text-[#F5F5F3] group-hover:text-[#174A7E] dark:group-hover:text-[#60A5FA] transition-colors">
                  subhankar-das
                </div>
                <p className="text-[0.75rem] text-[#565B61] dark:text-[#9BA1A6]">
                  Professional network and updates.
                </p>
              </a>
            </MotionCard>

            {/* GitHub */}
            <MotionCard delay={0.1}>
              <a
                href={siteConfig.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="block border border-[#D9D9D4] dark:border-[#1C1F26] rounded-[7px] bg-[#F5F4F0] dark:bg-[#0C0D0F] p-6 space-y-3 hover:border-[#174A7E] dark:hover:border-[#3B82F6] transition-colors group"
              >
                <div className="flex items-center justify-between text-[#7C8288] text-xs font-mono">
                  <div className="flex items-center gap-2">
                    <SocialIcon brand="github" size={16} />
                    <span>GITHUB REPOSITORIES</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#174A7E] dark:text-[#60A5FA] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
                <div className="text-sm font-semibold text-[#17191C] dark:text-[#F5F5F3] group-hover:text-[#174A7E] dark:group-hover:text-[#60A5FA] transition-colors">
                  subhankar-das-phantom
                </div>
                <p className="text-[0.75rem] text-[#565B61] dark:text-[#9BA1A6]">
                  Public commits, PRs, and software architectures.
                </p>
              </a>
            </MotionCard>
          </div>
        </div>
      </div>
    </section>
  );
}
