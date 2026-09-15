"use client";

import Link from "next/link";
import { siteConfig } from "@/data/site";
import { ArrowUpRight, FileText, CheckCircle2 } from "lucide-react";
import { MotionReveal, MotionCard, MotionTap } from "@/components/motion/MotionReveal";
import { TechIcon } from "@/components/ui/TechIcon";

export function HiringSnapshot() {
  const primarySkills = [
    { name: "React", logo: "/logos/react.svg" },
    { name: "TypeScript", logo: "/logos/typescript.svg" },
    { name: "JavaScript", logo: "/logos/javascript.svg" },
    { name: "Node.js", logo: "/logos/nodejs.svg" },
    { name: "Express", logo: "/logos/express.svg" },
    { name: "MongoDB", logo: "/logos/mongodb.svg" },
  ];

  const additionalSkills = [
    { name: "Java", logo: "/logos/java.svg" },
    { name: "Python", logo: "/logos/python.svg" },
    { name: "C++", logo: "/logos/cpp.svg" },
    { name: "Docker", logo: "/logos/docker.svg" },
    { name: "MySQL", logo: "/logos/mysql.svg" },
    { name: "Git", logo: "/logos/git.svg" },
  ];

  return (
    <section className="py-12 md:py-16 border-b border-[#D9D9D4] dark:border-[#1C1F26] bg-[#FBFAF7] dark:bg-[#060708]">
      <div className="max-w-7xl mx-auto px-6 md:px-10 space-y-8">
        {/* Section Header with Recruiter Target Badge */}
        <MotionReveal>
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#D9D9D4] dark:border-[#1C1F26] pb-4">
            <div className="flex items-center gap-2.5 font-mono text-xs text-[#C56A3A] dark:text-[#FB923C] tracking-wider uppercase font-semibold">
              <FileText className="w-3.5 h-3.5" />
              <span>RECRUITER &amp; HIRING SNAPSHOT</span>
              <span className="text-[#7C8288] font-normal">/ 15-SECOND SUMMARY</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono">
              <span className="inline-block w-2 h-2 rounded-full bg-[#2D6A4F] animate-pulse" />
              <span className="text-[#2D6A4F] dark:text-[#34D399] font-medium">
                AVAILABLE FOR INTERNSHIPS &amp; JUNIOR ROLES
              </span>
            </div>
          </div>
        </MotionReveal>

        {/* High-Signal Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1: Role & Identity */}
          <MotionCard delay={0.04} className="border border-[#D9D9D4] dark:border-[#1C1F26] rounded-[7px] bg-[#F5F4F0] dark:bg-[#0C0D0F] p-5 space-y-3">
            <div className="text-[0.70rem] font-mono text-[#7C8288] uppercase tracking-wider">
              TARGET ROLE &amp; SCOPE
            </div>
            <div className="space-y-1">
              <h3 className="text-base font-bold text-[#17191C] dark:text-[#F5F5F3]">
                Full-Stack / MERN Developer
              </h3>
              <p className="text-xs text-[#565B61] dark:text-[#9BA1A6] leading-relaxed">
                Full-stack web application development across UI architecture, REST APIs, database schemas, and operational integrity.
              </p>
            </div>
            <div className="pt-2 border-t border-[#D9D9D4] dark:border-[#1C1F26] text-xs font-mono text-[#174A7E] dark:text-[#60A5FA]">
              <span>Based in Andal, WB, India</span>
            </div>
          </MotionCard>

          {/* Card 2: Academic & Status */}
          <MotionCard delay={0.08} className="border border-[#D9D9D4] dark:border-[#1C1F26] rounded-[7px] bg-[#F5F4F0] dark:bg-[#0C0D0F] p-5 space-y-3">
            <div className="text-[0.70rem] font-mono text-[#7C8288] uppercase tracking-wider">
              EDUCATION &amp; STANDING
            </div>
            <div className="space-y-1">
              <h3 className="text-base font-bold text-[#17191C] dark:text-[#F5F5F3]">
                BCA (Hons.) Student
              </h3>
              <p className="text-xs text-[#565B61] dark:text-[#9BA1A6] leading-relaxed">
                Kazi Nazrul University (RICIS Institutions). Nominal 2024–2028 program (2024–2027 planned path).
              </p>
            </div>
            <div className="pt-2 border-t border-[#D9D9D4] dark:border-[#1C1F26] flex items-center justify-between text-xs font-mono">
              <span className="text-[#7C8288]">Average SGPA:</span>
              <span className="font-bold text-[#17191C] dark:text-[#F5F5F3]">8.79 / 10</span>
            </div>
          </MotionCard>

          {/* Card 3: Real-World Experience */}
          <MotionCard delay={0.12} className="border border-[#D9D9D4] dark:border-[#1C1F26] rounded-[7px] bg-[#F5F4F0] dark:bg-[#0C0D0F] p-5 space-y-3">
            <div className="text-[0.70rem] font-mono text-[#7C8288] uppercase tracking-wider">
              REAL-WORLD PRODUCT
            </div>
            <div className="space-y-1">
              <h3 className="text-base font-bold text-[#17191C] dark:text-[#F5F5F3] flex items-center gap-1.5">
                <span>Bharat Enterprise</span>
                <span className="text-[0.65rem] px-1.5 py-0.5 rounded bg-[#2D6A4F]/15 text-[#2D6A4F] dark:text-[#34D399] font-mono font-semibold">
                  LIVE
                </span>
              </h3>
              <p className="text-xs text-[#565B61] dark:text-[#9BA1A6] leading-relaxed">
                Independently engineered operational billing SaaS managing active pharmaceutical wholesale workflows and FIFO batch allocation.
              </p>
            </div>
            <div className="pt-2 border-t border-[#D9D9D4] dark:border-[#1C1F26] text-xs font-mono text-[#174A7E] dark:text-[#60A5FA]">
              <Link href="/work/bharat-enterprise" className="hover:underline inline-flex items-center gap-1">
                <span>Inspect technical case study</span>
                <ArrowUpRight className="w-3 h-3" />
              </Link>
            </div>
          </MotionCard>

          {/* Card 4: Open Opportunities & Fast Action */}
          <MotionCard delay={0.16} className="border border-[#174A7E] dark:border-[#3B82F6] rounded-[7px] bg-[#FBFAF7] dark:bg-[#0C0D0F] p-5 space-y-3 ring-1 ring-[#174A7E]/20 dark:ring-[#3B82F6]/20">
            <div className="text-[0.70rem] font-mono text-[#174A7E] dark:text-[#60A5FA] uppercase tracking-wider font-semibold">
              OPEN OPPORTUNITIES
            </div>
            <div className="space-y-1.5">
              <ul className="space-y-1 text-xs text-[#17191C] dark:text-[#F5F5F3] font-medium">
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#2D6A4F] dark:text-[#34D399] shrink-0" />
                  <span>Software Development Internships</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#2D6A4F] dark:text-[#34D399] shrink-0" />
                  <span>Junior Full-Stack Roles</span>
                </li>
              </ul>
            </div>
            <div className="pt-3 border-t border-[#D9D9D4] dark:border-[#1C1F26] flex items-center gap-2">
              <MotionTap className="w-full">
                <Link
                  href="/resume"
                  className="btn-tactile w-full inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-mono font-medium text-[#F5F4F0] bg-[#174A7E] hover:bg-[#0F3B68] dark:bg-[#2563EB] dark:hover:bg-[#1D4ED8] rounded-[4px] shadow-xs"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>VIEW RESUME</span>
                </Link>
              </MotionTap>
            </div>
          </MotionCard>
        </div>

        {/* Canonical Technology Stack Bar */}
        <MotionReveal delay={0.2}>
          <div className="border border-[#D9D9D4] dark:border-[#1C1F26] rounded-[7px] bg-[#F5F4F0] dark:bg-[#0C0D0F] p-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 font-mono text-xs">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[#7C8288] text-[0.70rem] uppercase tracking-wider pr-2">
                PRIMARY STACK:
              </span>
              {primarySkills.map((tech) => (
                <span
                  key={tech.name}
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded-[4px] bg-[#FBFAF7] dark:bg-[#14161A] border border-[#D9D9D4] dark:border-[#1C1F26] text-[#17191C] dark:text-[#F5F5F3]"
                >
                  <TechIcon name={tech.name} logo={tech.logo} size={14} />
                  <span>{tech.name}</span>
                </span>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-2 border-t md:border-t-0 md:border-l border-[#D9D9D4] dark:border-[#1C1F26] pt-3 md:pt-0 md:pl-4">
              <span className="text-[#7C8288] text-[0.70rem] uppercase tracking-wider pr-1">
                ADDITIONAL:
              </span>
              {additionalSkills.map((tech) => (
                <span
                  key={tech.name}
                  className="inline-flex items-center gap-1 px-2 py-0.5 rounded-[3px] bg-[#ECECE7] dark:bg-[#121418] text-[#565B61] dark:text-[#9BA1A6] text-[0.72rem]"
                >
                  <TechIcon name={tech.name} logo={tech.logo} size={13} />
                  <span>{tech.name}</span>
                </span>
              ))}
            </div>
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}
