import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import { educationInfo } from "@/data/education";
import { Award, GraduationCap, MapPin } from "lucide-react";
import { MotionReveal, MotionCard } from "@/components/motion/MotionReveal";
import { SocialIcon } from "@/components/ui/SocialIcon";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Engineering Background & Progression",
  description:
    "How Subhankar Das evolved from personal necessity projects into building production operational SaaS systems for real business workflows.",
};

export default function AboutPage() {
  return (
    <div className="py-12 md:py-20">
      <div className="max-w-5xl mx-auto px-6 md:px-10 space-y-16">
        {/* Editorial Top Header */}
        <MotionReveal>
          <div className="space-y-4 border-b border-[#D9D9D4] dark:border-[#1C1F26] pb-8">
            <div className="flex items-center gap-3 font-mono text-xs text-[#C56A3A] dark:text-[#FB923C] tracking-widest">
              <span>PROFILE</span>
              <span className="text-[#7C8288]">/ BACKGROUND &amp; PROGRESSION</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-semibold tracking-[-0.035em] text-[#17191C] dark:text-[#F5F5F3]">
              About Subhankar
            </h1>
            <p className="text-base sm:text-lg text-[#565B61] dark:text-[#9BA1A6] max-w-3xl leading-relaxed">
              Full-stack developer and BCA student based in Andal, West Bengal. Focused on
              backend data integrity, operational predictability, and software that survives
              daily warehouse use.
            </p>
          </div>
        </MotionReveal>

        {/* Editorial Story Grid with Rectangular Portrait Crop */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Portrait Column (Rectangular, not circular) */}
          <div className="lg:col-span-5 space-y-4">
            <MotionCard className="border border-[#D9D9D4] dark:border-[#1C1F26] rounded-[7px] bg-[#FBFAF7] dark:bg-[#0C0D0F] p-2 overflow-hidden shadow-xs">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[4px] bg-[#ECECE7] dark:bg-[#14161A]">
                <Image
                  src="/images/profile/subhankar.png"
                  alt="Subhankar Das — Full-Stack Developer"
                  fill
                  priority
                  className="object-cover transition-all duration-300"
                  sizes="(max-width: 768px) 100vw, 400px"
                />
              </div>
              <div className="p-3 font-mono text-xs text-[#565B61] dark:text-[#9BA1A6] space-y-1">
                <div className="flex items-center justify-between text-[#17191C] dark:text-[#F5F5F3] font-semibold">
                  <span>{siteConfig.name}</span>
                  <span className="text-[#174A7E] dark:text-[#60A5FA]">MERN / SYSTEMS</span>
                </div>
                <div className="flex items-center gap-1.5 text-[0.70rem] text-[#7C8288]">
                  <MapPin className="w-3 h-3 text-[#C56A3A] dark:text-[#FB923C]" />
                  <span>Andal, West Bengal, India</span>
                </div>
              </div>
            </MotionCard>

            {/* Quick Metadata Box */}
            <MotionCard delay={0.06} className="border border-[#D9D9D4] dark:border-[#1C1F26] rounded-[7px] bg-[#FBFAF7] dark:bg-[#0C0D0F] p-5 space-y-3 font-mono text-xs">
              <div className="text-[0.70rem] text-[#7C8288] uppercase tracking-wider border-b border-[#D9D9D4] dark:border-[#1C1F26] pb-2">
                COORDINATES &amp; PRESENCE
              </div>
              <ul className="space-y-2 text-[#565B61] dark:text-[#9BA1A6]">
                <li className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5">
                    <SocialIcon brand="github" size={14} />
                    <span>GitHub:</span>
                  </span>
                  <a
                    href={siteConfig.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#174A7E] dark:text-[#60A5FA] hover:underline"
                  >
                    subhankar-das-phantom
                  </a>
                </li>
                <li className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5">
                    <SocialIcon brand="linkedin" size={14} />
                    <span>LinkedIn:</span>
                  </span>
                  <a
                    href={siteConfig.links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#174A7E] dark:text-[#60A5FA] hover:underline"
                  >
                    subhankar-das
                  </a>
                </li>
                <li className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5">
                    <SocialIcon brand="email" size={14} />
                    <span>Email:</span>
                  </span>
                  <a
                    href={siteConfig.links.gmailCompose}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#174A7E] dark:text-[#60A5FA] hover:underline"
                    title="Compose in Gmail"
                  >
                    {siteConfig.email}
                  </a>
                </li>
                <li className="flex items-center justify-between pt-1 border-t border-[#D9D9D4] dark:border-[#1C1F26]">
                  <span>Resume:</span>
                  <Link href="/resume" className="text-[#174A7E] dark:text-[#60A5FA] hover:underline">
                    View / Download CV
                  </Link>
                </li>
              </ul>
            </MotionCard>
          </div>

          {/* Narrative Right Column */}
          <div className="lg:col-span-7 space-y-8">
            <MotionReveal delay={0.04}>
              <div className="space-y-4">
                <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#17191C] dark:text-[#F5F5F3]">
                  &ldquo;Most of my strongest projects started with a real problem.&rdquo;
                </h2>
                <div className="prose text-[#565B61] dark:text-[#9BA1A6] text-sm sm:text-base leading-relaxed space-y-4">
                  <p>
                    I have never enjoyed building software for the sake of empty portfolio demonstrations. Technology becomes compelling only when someone actually depends on it to balance their accounts, pick inventory, or verify where shared money went.
                  </p>
                  <p className="font-medium text-[#17191C] dark:text-[#F5F5F3] border-l-2 border-[#174A7E] dark:border-[#3B82F6] pl-3 py-0.5">
                    Most of my work is built around React, Node.js, Express and MongoDB, with JavaScript and Java as core programming foundations. I also work with Docker, Git/GitHub, REST APIs, authentication, RBAC, transactions and performance optimization.
                  </p>
                  <p>
                    My engineering journey is defined by a continuous progression of solving friction with escalating domain complexity:
                  </p>
                </div>
              </div>
            </MotionReveal>

            {/* Progression Sequence */}
            <div className="space-y-4 border-t border-[#D9D9D4] dark:border-[#1C1F26] pt-6 font-mono text-xs">
              {/* Step 1 */}
              <MotionCard delay={0.06} className="border border-[#D9D9D4] dark:border-[#1C1F26] rounded-[4px] bg-[#FBFAF7] dark:bg-[#0C0D0F] p-4 space-y-1.5 hover:border-[#BFC2BE] dark:hover:border-[#383D45] transition-colors">
                <div className="flex items-center justify-between text-[#7C8288] text-[0.70rem]">
                  <span>01 // PERSONAL PROJECT</span>
                  <span>SEP 2025 – NOV 2025</span>
                </div>
                <h3 className="text-sm font-semibold text-[#17191C] dark:text-[#F5F5F3] font-sans">
                  Personal Finance Tracker
                </h3>
                <p className="text-[#565B61] dark:text-[#9BA1A6] font-sans leading-relaxed">
                  Main development Sep–Nov 2025 · Continued maintenance &amp; updates. Built out of daily personal necessity: custom budget thresholds, visual category analytics, and bidirectional Excel ingestion to keep financial records sovereign.
                </p>
              </MotionCard>

              {/* Step 2 */}
              <MotionCard delay={0.1} className="border border-[#D9D9D4] dark:border-[#1C1F26] rounded-[4px] bg-[#FBFAF7] dark:bg-[#0C0D0F] p-4 space-y-1.5 hover:border-[#BFC2BE] dark:hover:border-[#383D45] transition-colors">
                <div className="flex items-center justify-between text-[#7C8288] text-[0.70rem]">
                  <span>02 // INDEPENDENT PROJECT</span>
                  <span>2024</span>
                </div>
                <h3 className="text-sm font-semibold text-[#17191C] dark:text-[#F5F5F3] font-sans">
                  Accountly
                </h3>
                <p className="text-[#565B61] dark:text-[#9BA1A6] font-sans leading-relaxed">
                  Evolved the personal ledger architecture into a multi-member organization platform. Solved the trust dilemma in pooled funds with immutable append-only logs and public read-only verification dashboards.
                </p>
              </MotionCard>

              {/* Step 3 */}
              <MotionCard delay={0.14} className="border border-[#174A7E] dark:border-[#3B82F6] rounded-[4px] bg-[#FBFAF7] dark:bg-[#0C0D0F] p-4 space-y-1.5 ring-1 ring-[#174A7E]/20 dark:ring-[#3B82F6]/20">
                <div className="flex items-center justify-between text-[#7C8288] text-[0.70rem]">
                  <span className="text-[#174A7E] dark:text-[#60A5FA] font-semibold">
                    03 // REAL-WORLD PRODUCT
                  </span>
                  <span>DEC 2025 – PRESENT</span>
                </div>
                <h3 className="text-sm font-semibold text-[#17191C] dark:text-[#F5F5F3] font-sans">
                  Bharat Enterprise
                </h3>
                <p className="text-[#565B61] dark:text-[#9BA1A6] font-sans leading-relaxed">
                  Flagship operational SaaS built to solve real daily chaos for an active regional pharmaceutical distributor. Replaced paper billing and drifting balances with dual-entry ledgers, atomic delta adjustments, and automated FIFO batch allocation.
                </p>
              </MotionCard>

              {/* Step 4 */}
              <MotionCard delay={0.18} className="border border-[#D9D9D4] dark:border-[#1C1F26] rounded-[4px] bg-[#FBFAF7] dark:bg-[#0C0D0F] p-4 space-y-1.5 hover:border-[#BFC2BE] dark:hover:border-[#383D45] transition-colors">
                <div className="flex items-center justify-between text-[#7C8288] text-[0.70rem]">
                  <span>04 // ACADEMIC PROJECT</span>
                  <span>MAY 2026 – AUG 2026</span>
                </div>
                <h3 className="text-sm font-semibold text-[#17191C] dark:text-[#F5F5F3] font-sans">
                  EVORA
                </h3>
                <p className="text-[#565B61] dark:text-[#9BA1A6] font-sans leading-relaxed">
                  Academic engineering capstone exploring high-concurrency seat reservation algorithms, optimistic locking, and dynamic cryptographic QR ticketing for venue admissions.
                </p>
              </MotionCard>
            </div>
          </div>
        </div>

        {/* Academic Details */}
        <section className="border-t border-[#D9D9D4] dark:border-[#1C1F26] pt-12 space-y-6">
          <MotionReveal>
            <div className="flex items-center gap-2 font-mono text-xs text-[#C56A3A] dark:text-[#FB923C] font-semibold">
              <span>ACADEMICS //</span>
              <span>UNIVERSITY EDUCATION</span>
            </div>
          </MotionReveal>

          <MotionCard className="border border-[#D9D9D4] dark:border-[#1C1F26] rounded-[7px] bg-[#FBFAF7] dark:bg-[#0C0D0F] p-6 space-y-6">
            <div className="flex flex-wrap items-start justify-between gap-4 border-b border-[#D9D9D4] dark:border-[#1C1F26] pb-4">
              <div>
                <h3 className="text-xl font-semibold tracking-tight text-[#17191C] dark:text-[#F5F5F3]">
                  {educationInfo.degree}
                </h3>
                <p className="text-xs font-mono text-[#565B61] dark:text-[#9BA1A6]">
                  {educationInfo.institution} · {educationInfo.timeline}
                </p>
              </div>
              <div className="flex items-center gap-2 font-mono text-xs text-[#174A7E] dark:text-[#60A5FA]">
                <GraduationCap className="w-4 h-4" />
                <span>{educationInfo.location}</span>
              </div>
            </div>

            {/* Semester Progression Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
              {educationInfo.semesters.map((sem) => (
                <div
                  key={sem.semester}
                  className="border border-[#D9D9D4] dark:border-[#1C1F26] rounded-[4px] bg-[#ECECE7] dark:bg-[#14161A] p-3 text-center space-y-1 hover:border-[#174A7E] dark:hover:border-[#60A5FA] transition-colors"
                >
                  <div className="font-mono text-[0.65rem] text-[#7C8288]">
                    {sem.semester}
                  </div>
                  <div
                    className={`font-mono text-sm font-semibold ${
                      sem.status === "completed"
                        ? "text-[#17191C] dark:text-[#F5F5F3]"
                        : "text-[#C56A3A] dark:text-[#FB923C] text-xs"
                    }`}
                  >
                    {sem.sgpa}
                  </div>
                  <div className="text-[0.60rem] font-mono text-[#7C8288] uppercase">
                    {sem.status === "completed" ? "Verified" : sem.status}
                  </div>
                </div>
              ))}
            </div>

            {/* Average Note */}
            <div className="border border-[#D9D9D4] dark:border-[#1C1F26] rounded-[4px] bg-[#DCE8F3]/40 dark:bg-[#1E293B]/40 p-4 flex items-start gap-3 text-xs">
              <Award className="w-4 h-4 text-[#174A7E] dark:text-[#60A5FA] shrink-0 mt-0.5" />
              <div className="space-y-1">
                <p className="font-medium text-[#17191C] dark:text-[#F5F5F3]">
                  Academic SGPA Average: {educationInfo.calculatedAverage}
                </p>
                <p className="font-mono text-[0.70rem] text-[#565B61] dark:text-[#9BA1A6]">
                  {educationInfo.averageNote}
                </p>
              </div>
            </div>

            {/* Coursework list */}
            <div className="space-y-3 pt-2">
              <p className="font-mono text-xs text-[#7C8288] uppercase tracking-wider">
                COMPLETED COURSEWORK &amp; DISCIPLINES
              </p>
              <div className="flex flex-wrap gap-2 text-xs font-mono">
                {educationInfo.coursework.map((course) => (
                  <span
                    key={course}
                    className="px-2.5 py-1 bg-[#ECECE7] dark:bg-[#14161A] border border-[#D9D9D4] dark:border-[#1C1F26] rounded-[3px] text-[#17191C] dark:text-[#F5F5F3]"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </MotionCard>
        </section>

        {/* Footer CTAs */}
        <div className="border-t border-[#D9D9D4] dark:border-[#1C1F26] pt-8 flex items-center justify-between text-xs font-mono">
          <Link href="/work" className="text-[#565B61] dark:text-[#9BA1A6] hover:text-[#17191C] dark:hover:text-[#F5F5F3]">
            ← View Selected Work
          </Link>
          <Link href="/contact" className="text-[#174A7E] dark:text-[#60A5FA] hover:underline">
            Get in Touch →
          </Link>
        </div>
      </div>
    </div>
  );
}
