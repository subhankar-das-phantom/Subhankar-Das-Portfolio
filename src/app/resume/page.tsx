import Link from "next/link";
import { siteConfig } from "@/data/site";
import { educationInfo } from "@/data/education";
import {
  bharatEnterprise,
  accountly,
  personalFinanceTracker,
  evora,
} from "@/data/projects";
import { Download, ArrowLeft } from "lucide-react";
import { MotionReveal, MotionTap } from "@/components/motion/MotionReveal";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Curriculum Vitae / Resume",
  description:
    "Official resume of Subhankar Das — Full-Stack / MERN Developer & BCA (Hons.) student.",
};

export default function ResumePage() {
  return (
    <div className="py-12 md:py-20 bg-[#F5F4F0] dark:bg-[#000000] min-h-screen">
      <div className="max-w-4xl mx-auto px-6 md:px-10 space-y-10">
        {/* Navigation & Action Bar */}
        <MotionReveal>
          <div className="no-print flex flex-wrap items-center justify-between gap-4 border-b border-[#D9D9D4] dark:border-[#1C1F26] pb-6">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-[#565B61] dark:text-[#9BA1A6] hover:text-[#174A7E] dark:hover:text-[#60A5FA] transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>RETURN TO OVERVIEW</span>
            </Link>

            <div className="flex items-center gap-3">
              <MotionTap>
                <a
                  href="/resume/Subhankar-Das-Resume.pdf"
                  download="Subhankar-Das-Resume.pdf"
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs font-mono font-medium text-[#F5F4F0] bg-[#174A7E] hover:bg-[#0F3B68] dark:bg-[#2563EB] dark:hover:bg-[#1D4ED8] rounded-[4px] transition-colors shadow-xs"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>DOWNLOAD PDF</span>
                </a>
              </MotionTap>
            </div>
          </div>
        </MotionReveal>

        {/* Printable Editorial CV Sheet */}
        <MotionReveal delay={0.06}>
          <div className="border border-[#D9D9D4] dark:border-[#1C1F26] rounded-[7px] bg-[#FBFAF7] dark:bg-[#0C0D0F] p-8 sm:p-12 space-y-10 shadow-xs print:border-none print:p-0 print:shadow-none">
            {/* Header */}
            <div className="border-b border-[#D9D9D4] dark:border-[#1C1F26] pb-8 space-y-3">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#17191C] dark:text-[#F5F5F3]">
                    {siteConfig.name}
                  </h1>
                  <p className="text-sm sm:text-base font-medium text-[#174A7E] dark:text-[#60A5FA] font-mono pt-1">
                    {siteConfig.role} · {siteConfig.subRole}
                  </p>
                </div>
                <div className="text-xs font-mono text-[#565B61] dark:text-[#9BA1A6] text-left sm:text-right space-y-1">
                  <p>
                    {siteConfig.location}, {siteConfig.country}
                  </p>
                  <p>{siteConfig.email}</p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[#7C8288] pt-2">
                <a
                  href={siteConfig.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#174A7E] dark:hover:text-[#60A5FA] underline"
                >
                  github.com/subhankar-das-phantom
                </a>
                <span>·</span>
                <a
                  href={siteConfig.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#174A7E] dark:hover:text-[#60A5FA] underline"
                >
                  linkedin.com/in/subhankar-das-610883317
                </a>
              </div>
            </div>

            {/* Engineering Profile */}
            <section className="space-y-3">
              <h2 className="font-mono text-xs font-bold uppercase tracking-wider text-[#17191C] dark:text-[#F5F5F3] border-b border-[#D9D9D4] dark:border-[#1C1F26] pb-1.5">
                ENGINEERING SUMMARY
              </h2>
              <p className="text-xs sm:text-sm text-[#565B61] dark:text-[#9BA1A6] leading-relaxed">
                Product-minded full-stack developer with real-world experience building
                operational SaaS platforms, financial ledgers, and event systems. Proven
                ability to translate complex business workflows into reliable software with
                atomic data transactions, double-entry accounting integrity, and sub-second
                query performance.
              </p>
            </section>

            {/* Production Work & Featured Projects */}
            <section className="space-y-6">
              <h2 className="font-mono text-xs font-bold uppercase tracking-wider text-[#17191C] dark:text-[#F5F5F3] border-b border-[#D9D9D4] dark:border-[#1C1F26] pb-1.5">
                FEATURED PRODUCTION WORK &amp; SYSTEMS
              </h2>

              {/* Bharat Enterprise */}
              <div className="space-y-2">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-sm font-bold text-[#17191C] dark:text-[#F5F5F3]">
                    {bharatEnterprise.title} — {bharatEnterprise.headline}
                  </h3>
                  <span className="font-mono text-xs text-[#7C8288]">
                    {bharatEnterprise.timeline}
                  </span>
                </div>
                <p className="text-xs font-mono text-[#174A7E] dark:text-[#60A5FA]">
                  Role: {bharatEnterprise.role} · Origin: Pharmaceutical Distribution
                  Workflow
                </p>
                <ul className="list-disc list-inside space-y-1 text-xs text-[#565B61] dark:text-[#9BA1A6] leading-relaxed">
                  <li>
                    Independently designed, architected, and shipped an operational SaaS
                    platform originating from the live daily workflow of an active regional
                    pharmaceutical distributor.
                  </li>
                  <li>
                    Implemented an immutable dual-entry customer ledger with running balance
                    recalculations enforced at the database transaction layer, resolving
                    historical balance drift.
                  </li>
                  <li>
                    Engineered automated FIFO lot-tracking ledger sorting medicine cartons by
                    earliest expiry date to eliminate expired stock dispatches.
                  </li>
                  <li>
                    Built MongoDB aggregation pipelines ($facet, $project) reducing ledger
                    statement payload size by ~99.8% (2.3 MB down to ~5 KB) with bounded
                    key-set pagination.
                  </li>
                  <li>
                    Restructured compound indices over tenancy and chronology, cutting
                    cold-start customer reconciliation query latency from 128.38 ms to 34.64
                    ms (~73% reduction).
                  </li>
                </ul>
              </div>

              {/* Accountly */}
              <div className="space-y-2 pt-2">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-sm font-bold text-[#17191C] dark:text-[#F5F5F3]">
                    {accountly.title} — {accountly.headline}
                  </h3>
                  <span className="font-mono text-xs text-[#7C8288]">
                    {accountly.timeline}
                  </span>
                </div>
                <p className="text-xs font-mono text-[#174A7E] dark:text-[#60A5FA]">
                  Role: {accountly.role} · Independent Financial System
                </p>
                <ul className="list-disc list-inside space-y-1 text-xs text-[#565B61] dark:text-[#9BA1A6] leading-relaxed">
                  <li>
                    Engineered a multi-member organization ledger for pooled financial
                    transparency with public-facing read-only audit verification dashboards.
                  </li>
                  <li>
                    Enforced an immutable append-only transaction stream where modifications
                    require explicit reversing vouchers to preserve audit integrity.
                  </li>
                </ul>
              </div>

              {/* Personal Finance Tracker */}
              <div className="space-y-2 pt-2">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-sm font-bold text-[#17191C] dark:text-[#F5F5F3]">
                    {personalFinanceTracker.title}
                  </h3>
                  <span className="font-mono text-xs text-[#7C8288]">
                    {personalFinanceTracker.timeline}
                  </span>
                </div>
                <p className="text-xs font-mono text-[#174A7E] dark:text-[#60A5FA]">
                  Role: {personalFinanceTracker.role}
                </p>
                <ul className="list-disc list-inside space-y-1 text-xs text-[#565B61] dark:text-[#9BA1A6] leading-relaxed">
                  <li>
                    Built out of daily personal necessity: expense categorization, custom
                    budget threshold indicators, and visual trend breakdowns.
                  </li>
                  <li>
                    Developed bidirectional Excel import/export pipelines guaranteeing
                    offline user data sovereignty.
                  </li>
                </ul>
              </div>

              {/* EVORA */}
              <div className="space-y-2 pt-2">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-sm font-bold text-[#17191C] dark:text-[#F5F5F3]">
                    {evora.title} — {evora.headline} (Academic Capstone)
                  </h3>
                  <span className="font-mono text-xs text-[#7C8288]">
                    {evora.timeline}
                  </span>
                </div>
                <p className="text-xs font-mono text-[#174A7E] dark:text-[#60A5FA]">
                  Role: {evora.role} · Academic Research Project
                </p>
                <ul className="list-disc list-inside space-y-1 text-xs text-[#565B61] dark:text-[#9BA1A6] leading-relaxed">
                  <li>
                    Designed an event reservation platform featuring atomic seat locking with
                    10-minute TTL expiry to prevent double-booking race conditions.
                  </li>
                  <li>
                    Integrated cryptographic QR ticket pass generation and on-site organizer
                    admission validation.
                  </li>
                </ul>
              </div>
            </section>

            {/* Education & Academic Record */}
            <section className="space-y-4">
              <h2 className="font-mono text-xs font-bold uppercase tracking-wider text-[#17191C] dark:text-[#F5F5F3] border-b border-[#D9D9D4] dark:border-[#1C1F26] pb-1.5">
                EDUCATION &amp; ACADEMICS
              </h2>
              <div className="space-y-2 text-xs">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <div className="font-bold text-sm text-[#17191C] dark:text-[#F5F5F3]">
                    {educationInfo.degree}
                  </div>
                  <div className="font-mono text-[#7C8288]">
                    {educationInfo.timeline}
                  </div>
                </div>
                <p className="font-mono text-[#174A7E] dark:text-[#60A5FA]">
                  {educationInfo.institution} · {educationInfo.location}
                </p>
                <p className="text-[#565B61] dark:text-[#9BA1A6] font-mono">
                  {educationInfo.averageNote}
                </p>

                <div className="pt-2 flex flex-wrap gap-2 font-mono">
                  {educationInfo.semesters.map((sem) => (
                    <span
                      key={sem.semester}
                      className="px-2 py-1 bg-[#ECECE7] dark:bg-[#14161A] border border-[#D9D9D4] dark:border-[#1C1F26] rounded-[3px] text-[#17191C] dark:text-[#F5F5F3]"
                    >
                      {sem.semester}: <strong>{sem.sgpa}</strong>
                    </span>
                  ))}
                </div>

                <div className="pt-2 text-[#565B61] dark:text-[#9BA1A6]">
                  <strong>Coursework:</strong> {educationInfo.coursework.join(", ")}.
                </div>
              </div>
            </section>

            {/* Technical Skills */}
            <section className="space-y-3">
              <h2 className="font-mono text-xs font-bold uppercase tracking-wider text-[#17191C] dark:text-[#F5F5F3] border-b border-[#D9D9D4] dark:border-[#1C1F26] pb-1.5">
                TECHNICAL PROFICIENCY
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
                <div>
                  <span className="text-[#7C8288]">Languages:</span>{" "}
                  <span className="text-[#17191C] dark:text-[#F5F5F3]">
                    TypeScript, JavaScript, Java, C++, SQL, HTML5, CSS3
                  </span>
                </div>
                <div>
                  <span className="text-[#7C8288]">Frontend:</span>{" "}
                  <span className="text-[#17191C] dark:text-[#F5F5F3]">
                    React, Next.js, TypeScript, Tailwind CSS, Material UI, Vite
                  </span>
                </div>
                <div>
                  <span className="text-[#7C8288]">Backend:</span>{" "}
                  <span className="text-[#17191C] dark:text-[#F5F5F3]">
                    Node.js, Express, REST APIs, JWT, Server-Sent Events (SSE)
                  </span>
                </div>
                <div>
                  <span className="text-[#7C8288]">Databases:</span>{" "}
                  <span className="text-[#17191C] dark:text-[#F5F5F3]">
                    MongoDB, Mongoose, Aggregation Pipelines, Transactions, MySQL
                  </span>
                </div>
                <div>
                  <span className="text-[#7C8288]">Infrastructure &amp; Tools:</span>{" "}
                  <span className="text-[#17191C] dark:text-[#F5F5F3]">
                    Docker, Git, GitHub, Postman, Vercel, Render
                  </span>
                </div>
                <div>
                  <span className="text-[#7C8288]">Architecture &amp; Systems:</span>{" "}
                  <span className="text-[#17191C] dark:text-[#F5F5F3]">
                    Double-Entry Ledgers, FIFO Lot Tracking, Multi-Tenancy, RBAC, Idempotency
                  </span>
                </div>
              </div>
            </section>
          </div>
        </MotionReveal>
      </div>
    </div>
  );
}
