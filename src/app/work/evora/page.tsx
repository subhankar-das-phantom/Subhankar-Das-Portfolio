import Link from "next/link";
import { evora } from "@/data/projects";
import { Badge } from "@/components/ui/Badge";
import { ArrowUpRight, ArrowLeft, ExternalLink, QrCode, Lock } from "lucide-react";
import { ProjectTechStrip } from "@/components/projects/ProjectTechStrip";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "EVORA — Academic Engineering Project",
  description:
    "Academic event discovery and reservation system exploring atomic seat locking, QR ticket verification, and role-based permissions.",
};

export default function EvoraCaseStudy() {
  return (
    <article className="py-12 md:py-20 bg-[#F5F4F0] dark:bg-[#000000]">
      <div className="max-w-4xl mx-auto px-6 md:px-10 space-y-16">
        <div>
          <Link
            href="/work"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-[#565B61] dark:text-[#9BA1A6] hover:text-[#174A7E] dark:hover:text-[#60A5FA] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>BACK TO SELECTED WORK</span>
          </Link>
        </div>

        <header className="space-y-4 border-b border-[#D9D9D4] dark:border-[#1C1F26] pb-8">
          <div className="flex flex-wrap items-center gap-3">
            <span className="font-mono text-xs text-[#C56A3A] dark:text-[#FB923C] font-semibold">
              CASE STUDY //
            </span>
            <Badge variant="academic">{evora.categoryLabel}</Badge>
            <span className="font-mono text-xs text-[#7C8288]">
              {evora.timeline}
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-semibold tracking-[-0.035em] text-[#17191C] dark:text-[#F5F5F3]">
            {evora.title}
          </h1>

          <p className="text-xl font-medium text-[#174A7E] dark:text-[#60A5FA] tracking-tight">
            &ldquo;{evora.headline}&rdquo;
          </p>

          <p className="text-base text-[#565B61] dark:text-[#9BA1A6] leading-relaxed max-w-2xl">
            {evora.summary}
          </p>

          <div className="pt-2">
            <ProjectTechStrip
              technologies={["React", "TypeScript", "Tailwind CSS", "Node.js", "Express", "MongoDB", "Mongoose"]}
            />
          </div>

          <div className="border border-[#BFC2BE] dark:border-[#383D45] border-dashed rounded-[4px] bg-[#FBFAF7] dark:bg-[#0C0D0F] p-3 text-xs font-mono text-[#7C8288]">
            NOTE: This is an academic engineering capstone built to study concurrency and distributed booking algorithms, not a commercial enterprise deployment.
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href={evora.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-mono font-medium text-[#F5F4F0] bg-[#174A7E] hover:bg-[#0F3B68] rounded-[4px] transition-colors"
            >
              <span>OPEN LIVE DEMO</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <a
              href={evora.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-mono font-medium text-[#17191C] bg-[#FBFAF7] hover:bg-[#ECECE7] border border-[#D9D9D4] rounded-[4px] transition-colors"
            >
              <span>VIEW REPOSITORY</span>
              <ArrowUpRight className="w-3 h-3 text-[#565B61]" />
            </a>
          </div>
        </header>

        <section className="space-y-4">
          <div className="flex items-center gap-2 font-mono text-xs text-[#C56A3A] font-semibold">
            <span>01 //</span>
            <span>OVERVIEW &amp; ACADEMIC SCOPE</span>
          </div>
          <h2 className="text-2xl font-semibold tracking-tight text-[#17191C]">
            Distributed Reservation &amp; Concurrency Exploration
          </h2>
          <div className="text-[#565B61] text-sm sm:text-base leading-relaxed space-y-3">
            <p>{evora.sections.overview}</p>
          </div>
        </section>

        <section className="space-y-4 border-t border-[#D9D9D4] pt-10">
          <div className="flex items-center gap-2 font-mono text-xs text-[#C56A3A] font-semibold">
            <span>02 //</span>
            <span>KEY ENGINEERING MECHANICS</span>
          </div>
          <h2 className="text-2xl font-semibold tracking-tight text-[#17191C]">
            Atomic Seat Allocation &amp; Cryptographic QR Passes
          </h2>
          <div className="text-[#565B61] text-sm sm:text-base leading-relaxed space-y-3">
            <p>{evora.sections.whatIBuilt}</p>
            <p>{evora.sections.keyDecisions}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
            <div className="border border-[#D9D9D4] rounded-[4px] bg-[#FBFAF7] p-4 space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono text-[#174A7E] font-semibold">
                <Lock className="w-3.5 h-3.5" />
                <span>ATOMIC SEAT LOCKING</span>
              </div>
              <p className="text-xs text-[#565B61] leading-relaxed">
                Prevents double-booking via atomic status condition updates. Uncompleted reservations automatically release their seat hold after a 10-minute TTL expiry.
              </p>
            </div>

            <div className="border border-[#D9D9D4] rounded-[4px] bg-[#FBFAF7] p-4 space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono text-[#174A7E] font-semibold">
                <QrCode className="w-3.5 h-3.5" />
                <span>SIGNED QR TICKETS</span>
              </div>
              <p className="text-xs text-[#565B61] leading-relaxed">
                Encodes attendee reservation payloads into digitally verifiable QR passes, validated client-side during on-site admission scanning.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-4 border-t border-[#D9D9D4] pt-10">
          <div className="flex items-center gap-2 font-mono text-xs text-[#C56A3A] font-semibold">
            <span>03 //</span>
            <span>WHAT I LEARNED</span>
          </div>
          <h2 className="text-2xl font-semibold tracking-tight text-[#17191C]">
            Academic Rigor vs Real-World Chaos
          </h2>
          <div className="text-[#565B61] text-sm sm:text-base leading-relaxed">
            <p>{evora.sections.whatILearned}</p>
          </div>
        </section>

        <footer className="border-t border-[#D9D9D4] pt-6 flex items-center justify-between text-xs font-mono">
          <Link href="/work" className="text-[#565B61] hover:text-[#17191C]">
            ← Return to Work
          </Link>
          <a
            href={evora.links.live}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#174A7E] hover:underline"
          >
            Launch Demo →
          </a>
        </footer>
      </div>
    </article>
  );
}
