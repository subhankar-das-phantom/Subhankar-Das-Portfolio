import Link from "next/link";
import { accountly } from "@/data/projects";
import { Badge } from "@/components/ui/Badge";
import { ArrowUpRight, ArrowLeft, ExternalLink, ShieldCheck, CheckCircle2 } from "lucide-react";
import { ProjectTechStrip } from "@/components/projects/ProjectTechStrip";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Accountly — Engineering Case Study",
  description:
    "Financial transparency for shared contributions. Immutable transaction logs, multi-tenant organizations, and public audit dashboards.",
};

export default function AccountlyCaseStudy() {
  return (
    <article className="py-12 md:py-20 bg-[#F5F4F0] dark:bg-[#000000]">
      <div className="max-w-4xl mx-auto px-6 md:px-10 space-y-16">
        {/* Back navigation */}
        <div>
          <Link
            href="/work"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-[#565B61] dark:text-[#9BA1A6] hover:text-[#174A7E] dark:hover:text-[#60A5FA] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>BACK TO SELECTED WORK</span>
          </Link>
        </div>

        {/* Header */}
        <header className="space-y-4 border-b border-[#D9D9D4] dark:border-[#1C1F26] pb-8">
          <div className="flex flex-wrap items-center gap-3">
            <span className="font-mono text-xs text-[#C56A3A] dark:text-[#FB923C] font-semibold">
              CASE STUDY //
            </span>
            <Badge variant="outline">{accountly.categoryLabel}</Badge>
            <span className="font-mono text-xs text-[#7C8288]">
              {accountly.timeline}
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-semibold tracking-[-0.035em] text-[#17191C] dark:text-[#F5F5F3]">
            {accountly.title}
          </h1>

          <p className="text-xl font-medium text-[#174A7E] dark:text-[#60A5FA] tracking-tight">
            &ldquo;{accountly.headline}&rdquo;
          </p>

          <p className="text-base text-[#565B61] dark:text-[#9BA1A6] leading-relaxed max-w-2xl">
            {accountly.summary}
          </p>

          <div className="pt-2">
            <ProjectTechStrip
              technologies={["React", "JavaScript", "Tailwind CSS", "Node.js", "Express", "MongoDB", "Mongoose", "JWT"]}
            />
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href={accountly.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-mono font-medium text-[#F5F4F0] bg-[#174A7E] hover:bg-[#0F3B68] rounded-[4px] transition-colors"
            >
              <span>OPEN LIVE PLATFORM</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <a
              href={accountly.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-mono font-medium text-[#17191C] bg-[#FBFAF7] hover:bg-[#ECECE7] border border-[#D9D9D4] rounded-[4px] transition-colors"
            >
              <span>VIEW REPOSITORY</span>
              <ArrowUpRight className="w-3 h-3 text-[#565B61]" />
            </a>
          </div>
        </header>

        {/* Section 01: Overview */}
        <section className="space-y-4">
          <div className="flex items-center gap-2 font-mono text-xs text-[#C56A3A] font-semibold">
            <span>01 //</span>
            <span>OVERVIEW &amp; TRUST DILEMMA</span>
          </div>
          <h2 className="text-2xl font-semibold tracking-tight text-[#17191C]">
            Building Verification for Pooled Contributions
          </h2>
          <div className="text-[#565B61] text-sm sm:text-base leading-relaxed space-y-3">
            <p>{accountly.sections.overview}</p>
          </div>
        </section>

        {/* Section 02: Problem */}
        <section className="space-y-4 border-t border-[#D9D9D4] pt-10">
          <div className="flex items-center gap-2 font-mono text-xs text-[#C56A3A] font-semibold">
            <span>02 //</span>
            <span>THE PROBLEM</span>
          </div>
          <h2 className="text-2xl font-semibold tracking-tight text-[#17191C]">
            Opacity in Informal Shared Funds
          </h2>
          <div className="text-[#565B61] text-sm sm:text-base leading-relaxed space-y-3">
            <p>{accountly.sections.theProblem}</p>
          </div>
        </section>

        {/* Section 03: Architecture */}
        <section className="space-y-4 border-t border-[#D9D9D4] pt-10">
          <div className="flex items-center gap-2 font-mono text-xs text-[#C56A3A] font-semibold">
            <span>03 //</span>
            <span>WHAT I BUILT &amp; ARCHITECTURE</span>
          </div>
          <h2 className="text-2xl font-semibold tracking-tight text-[#17191C]">
            Immutable Append-Only Audit Logging
          </h2>
          <div className="text-[#565B61] text-sm sm:text-base leading-relaxed space-y-3">
            <p>{accountly.sections.whatIBuilt}</p>
            <p>{accountly.sections.keyDecisions}</p>
          </div>

          <div className="border border-[#D9D9D4] rounded-[7px] bg-[#FBFAF7] p-5 space-y-3 pt-4">
            <div className="flex items-center gap-2 text-xs font-mono text-[#174A7E] font-semibold">
              <ShieldCheck className="w-4 h-4" />
              <span>TRANSPARENCY GUARANTEES</span>
            </div>
            <ul className="space-y-2 text-xs text-[#565B61]">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#2D6A4F] shrink-0 mt-0.5" />
                <span><strong>No Silent Modifications:</strong> Corrections require explicit reversing vouchers with mandatory explanation tags.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#2D6A4F] shrink-0 mt-0.5" />
                <span><strong>Public Verification Link:</strong> Non-admin contributors access a read-only portal verifying the mathematical balance without viewing private personal identifiers.</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Section 04: What I Learned */}
        <section className="space-y-4 border-t border-[#D9D9D4] pt-10">
          <div className="flex items-center gap-2 font-mono text-xs text-[#C56A3A] font-semibold">
            <span>04 //</span>
            <span>WHAT I LEARNED</span>
          </div>
          <h2 className="text-2xl font-semibold tracking-tight text-[#17191C]">
            Designing for Collective Trust
          </h2>
          <div className="text-[#565B61] text-sm sm:text-base leading-relaxed">
            <p>{accountly.sections.whatILearned}</p>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-[#D9D9D4] pt-6 flex items-center justify-between text-xs font-mono">
          <Link href="/work" className="text-[#565B61] hover:text-[#17191C]">
            ← Return to Work
          </Link>
          <a
            href={accountly.links.live}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#174A7E] hover:underline"
          >
            Launch Accountly →
          </a>
        </footer>
      </div>
    </article>
  );
}
