import Link from "next/link";
import { bharatEnterprise } from "@/data/projects";
import { Badge } from "@/components/ui/Badge";
import { ArrowUpRight, ArrowLeft } from "lucide-react";
import { ProjectTechStrip } from "@/components/projects/ProjectTechStrip";
import type { Metadata } from "next";
import { generateSoftwareApplicationJsonLd } from "@/lib/metadata";

export const metadata: Metadata = {
  title: "Bharat Enterprise — Engineering Case Study",
  description:
    "Comprehensive engineering deep dive: Dual-entry customer ledger, FIFO pharmaceutical batch allocation, atomic delta updates, and multi-tenant SaaS architecture.",
};

export default function BharatEnterpriseCaseStudy() {
  const jsonLd = generateSoftwareApplicationJsonLd({
    name: bharatEnterprise.title,
    headline: bharatEnterprise.headline,
    description: bharatEnterprise.description,
    url: bharatEnterprise.links.live,
  });

  return (
    <article className="py-12 md:py-20 bg-[#F5F4F0]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-5xl mx-auto px-6 md:px-10 space-y-16">
        {/* Back navigation */}
        <div>
          <Link
            href="/work"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-[#565B61] hover:text-[#174A7E] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>BACK TO SELECTED WORK</span>
          </Link>
        </div>

        {/* Case Study Header */}
        <header className="space-y-6 border-b border-[#D9D9D4] pb-10">
          <div className="flex flex-wrap items-center gap-3">
            <span className="font-mono text-xs text-[#C56A3A] font-semibold">
              CASE STUDY //
            </span>
            <Badge variant="brand">{bharatEnterprise.categoryLabel}</Badge>
            <span className="font-mono text-xs text-[#7C8288]">
              {bharatEnterprise.timeline}
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-semibold tracking-[-0.035em] text-[#17191C]">
            {bharatEnterprise.title}
          </h1>

          <p className="text-xl sm:text-2xl font-medium text-[#174A7E] tracking-tight">
            &ldquo;{bharatEnterprise.headline}&rdquo;
          </p>

          <p className="text-base sm:text-lg text-[#565B61] dark:text-[#9BA1A6] leading-relaxed max-w-3xl">
            {bharatEnterprise.summary} An independently engineered operational SaaS managing wholesale billing, dual-entry credit ledgers, automated FIFO pharmaceutical batch lots, and multi-tenant isolation.
          </p>

          <div className="pt-2">
            <ProjectTechStrip
              technologies={["React", "TypeScript", "Tailwind CSS", "Node.js", "Express", "MongoDB", "Mongoose", "JWT", "Razorpay"]}
            />
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-[#D9D9D4]">
            <div className="border border-[#D9D9D4] rounded-[4px] bg-[#FBFAF7] p-4 font-mono">
              <div className="text-[0.70rem] text-[#7C8288]">PAYLOAD REDUCTION</div>
              <div className="text-xl font-semibold text-[#17191C]">2.3 MB → ~5 KB</div>
              <div className="text-[0.70rem] text-[#C56A3A]">~99.8% reduction via pipelines</div>
            </div>
            <div className="border border-[#D9D9D4] rounded-[4px] bg-[#FBFAF7] p-4 font-mono">
              <div className="text-[0.70rem] text-[#7C8288]">COLD-START LEDGER QUERY</div>
              <div className="text-xl font-semibold text-[#17191C]">128.38 ms → 34.64 ms</div>
              <div className="text-[0.70rem] text-[#C56A3A]">~73% faster compound indexing</div>
            </div>
            <div className="border border-[#D9D9D4] rounded-[4px] bg-[#FBFAF7] p-4 font-mono">
              <div className="text-[0.70rem] text-[#7C8288]">PAGINATED PATH LATENCY</div>
              <div className="text-xl font-semibold text-[#17191C]">56.01 ms → 23.02 ms</div>
              <div className="text-[0.70rem] text-[#C56A3A]">~59% faster key-set scanning</div>
            </div>
          </div>

          {/* Action Links */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href={bharatEnterprise.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-mono font-medium text-[#F5F4F0] bg-[#174A7E] hover:bg-[#0F3B68] rounded-[4px] transition-colors"
            >
              <span>OPEN LIVE PRODUCTION SAAS</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
            <a
              href={bharatEnterprise.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-mono font-medium text-[#17191C] bg-[#FBFAF7] hover:bg-[#ECECE7] border border-[#D9D9D4] rounded-[4px] transition-colors"
            >
              <span>VIEW GITHUB REPOSITORY</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#565B61]" />
            </a>
          </div>
        </header>

        {/* Section 01: Overview & Origin */}
        <section className="space-y-4">
          <div className="flex items-center gap-2 font-mono text-xs text-[#C56A3A] font-semibold">
            <span>01 //</span>
            <span>OVERVIEW &amp; REAL-WORLD ORIGIN</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#17191C]">
            Originating from an Active Distributor Workflow
          </h2>
          <div className="prose text-[#565B61] text-sm sm:text-base leading-relaxed space-y-4">
            <p>{bharatEnterprise.sections.overview}</p>
            <div className="border border-[#D9D9D4] rounded-[7px] bg-[#FBFAF7] p-6 space-y-3 font-mono text-xs">
              <div className="flex items-center justify-between border-b border-[#D9D9D4] pb-2 text-[#7C8288]">
                <span>DEPLOYMENT PROFILE</span>
                <span className="text-[#2D6A4F] font-semibold">LIVE SAAS</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[#17191C]">
                <div>
                  <span className="text-[#7C8288]">Domain: </span>
                  Pharmaceutical wholesale &amp; distribution
                </div>
                <div>
                  <span className="text-[#7C8288]">Initial User: </span>
                  Active regional pharmaceutical distributor
                </div>
                <div>
                  <span className="text-[#7C8288]">Adoption Model: </span>
                  Built during active warehouse billing hours
                </div>
                <div>
                  <span className="text-[#7C8288]">Architecture: </span>
                  Multi-tenant MERN with ACID transactions
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 02: The Problem */}
        <section className="space-y-4 border-t border-[#D9D9D4] pt-12">
          <div className="flex items-center gap-2 font-mono text-xs text-[#C56A3A] font-semibold">
            <span>02 //</span>
            <span>THE OPERATIONAL PROBLEM</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#17191C]">
            Why Generic Billing and Spreadsheets Broke Down
          </h2>
          <div className="prose text-[#565B61] text-sm sm:text-base leading-relaxed space-y-4">
            <p>{bharatEnterprise.sections.theProblem}</p>
            <p>
              In pharmaceutical distribution, mistakes carry heavy legal and financial liabilities. Selling an expired batch by accident results in distributor drug-license suspensions. Miscalculating a pharmacy customer&apos;s rolling ledger balance by even 0.5% leads to dispute standoffs that halt daily order shipments.
            </p>
          </div>
        </section>

        {/* Section 03: Product Evolution */}
        <section className="space-y-4 border-t border-[#D9D9D4] pt-12">
          <div className="flex items-center gap-2 font-mono text-xs text-[#C56A3A] font-semibold">
            <span>03 //</span>
            <span>PRODUCT EVOLUTION (9 ARCHITECTURAL STAGES)</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#17191C]">
            How the System Evolved from a Single Screen to a Business SaaS
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 font-mono text-xs">
            {bharatEnterprise.evolution?.map((stage, idx) => (
              <div
                key={stage}
                className="border border-[#D9D9D4] rounded-[4px] bg-[#FBFAF7] p-3 space-y-1"
              >
                <span className="text-[#7C8288] text-[0.65rem]">PHASE 0{idx + 1}</span>
                <p className="text-[#17191C] font-semibold">{stage}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 04: Key Engineering Decisions */}
        <section className="space-y-6 border-t border-[#D9D9D4] pt-12">
          <div className="flex items-center gap-2 font-mono text-xs text-[#C56A3A] font-semibold">
            <span>04 //</span>
            <span>KEY ARCHITECTURAL DECISIONS &amp; WHAT BROKE</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#17191C]">
            Engineering Decisions Forged Under Real Daily Operations
          </h2>

          <div className="space-y-6">
            {bharatEnterprise.architectureDecisions?.map((decision) => (
              <div
                key={decision.number}
                className="border border-[#D9D9D4] rounded-[7px] bg-[#FBFAF7] p-6 space-y-4"
              >
                <div className="flex items-center justify-between border-b border-[#D9D9D4] pb-2">
                  <span className="font-mono text-xs text-[#C56A3A] font-semibold">
                    DECISION {decision.number}
                  </span>
                  <span className="font-mono text-[0.70rem] text-[#2D6A4F] bg-[#DCE8F3]/60 px-2 py-0.5 rounded-[3px]">
                    VERIFIED IN PRODUCTION
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                  <div className="space-y-1 border-l-2 border-[#A6473C]/50 pl-3">
                    <span className="font-mono text-[#A6473C] font-semibold text-[0.65rem] uppercase">
                      Problem &amp; Operational Impact
                    </span>
                    <h3 className="font-semibold text-sm text-[#17191C]">
                      {decision.problem}
                    </h3>
                    <p className="text-[#565B61] leading-relaxed">
                      {decision.impact}
                    </p>
                  </div>

                  <div className="space-y-1 border-l-2 border-[#174A7E] pl-3">
                    <span className="font-mono text-[#174A7E] font-semibold text-[0.65rem] uppercase">
                      Engineered Resolution
                    </span>
                    <h4 className="font-semibold text-sm text-[#17191C]">
                      {decision.solution}
                    </h4>
                    <p className="text-[#565B61] leading-relaxed">
                      {decision.technicalDetails}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 05: FIFO Batch Allocation & Ledger Technical Deep Dive */}
        <section className="space-y-6 border-t border-[#D9D9D4] pt-12">
          <div className="flex items-center gap-2 font-mono text-xs text-[#C56A3A] font-semibold">
            <span>05 //</span>
            <span>SYSTEM SCHEMAS &amp; DATA FLOW</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#17191C]">
            FIFO Batch Sorting &amp; Dual-Entry Event Ledger Mechanics
          </h2>

          <div className="border border-[#D9D9D4] rounded-[7px] bg-[#ECECE7] p-6 space-y-4 font-mono text-xs">
            <div className="flex items-center justify-between border-b border-[#BFC2BE] pb-2">
              <span className="font-semibold text-[#17191C]">
                FIFO BATCH ALLOCATION ENGINE (PSEUDOCODE SPECIFICATION)
              </span>
              <span className="text-[#7C8288] text-[0.70rem]">TRANSACTION PIPELINE</span>
            </div>

            <pre className="bg-[#FBFAF7] p-4 rounded-[4px] border border-[#D9D9D4] overflow-x-auto text-[0.75rem] text-[#17191C] leading-relaxed">
{`async function allocateFifoLots(session, tenantId, productId, requestedQty) {
  // 1. Query active lots sorted strictly by earliest expiry date
  const lots = await BatchLot.find({
    tenantId,
    productId,
    availableQty: { $gt: 0 }
  })
  .sort({ expiryDate: 1 })
  .session(session);

  let remainingToFulfill = requestedQty;
  const allocations = [];

  for (const lot of lots) {
    if (remainingToFulfill <= 0) break;
    const take = Math.min(lot.availableQty, remainingToFulfill);

    // 2. Perform atomic delta decrement on the lot document
    await BatchLot.updateOne(
      { _id: lot._id, availableQty: { $gte: take } },
      { $inc: { availableQty: -take } },
      { session }
    );

    allocations.push({ lotId: lot._id, batchNumber: lot.batchNumber, qty: take });
    remainingToFulfill -= take;
  }

  if (remainingToFulfill > 0) {
    throw new Error("Insufficient unexpired stock available across active lots.");
  }

  return allocations;
}`}
            </pre>
            <p className="text-[#565B61] text-[0.75rem] font-sans">
              All lot updates execute within a single MongoDB multi-document ACID session. If an invoice line request exceeds available unexpired inventory, the entire session aborts atomically, preserving warehouse inventory integrity.
            </p>
          </div>
        </section>

        {/* Section 06: What I Learned */}
        <section className="space-y-4 border-t border-[#D9D9D4] pt-12">
          <div className="flex items-center gap-2 font-mono text-xs text-[#C56A3A] font-semibold">
            <span>06 //</span>
            <span>WHAT I LEARNED</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#17191C]">
            Lessons from the Warehouse Floor
          </h2>
          <div className="prose text-[#565B61] text-sm sm:text-base leading-relaxed space-y-4">
            <p>{bharatEnterprise.sections.whatILearned}</p>
          </div>
        </section>

        {/* Footer CTAs */}
        <footer className="border-t border-[#D9D9D4] pt-8 flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
          <Link
            href="/work"
            className="inline-flex items-center gap-1 text-[#565B61] hover:text-[#17191C]"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>RETURN TO WORK INDEX</span>
          </Link>
          <div className="flex items-center gap-4">
            <a
              href={bharatEnterprise.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#174A7E] font-medium hover:underline inline-flex items-center gap-1"
            >
              <span>Launch Bharat Enterprise</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </footer>
      </div>
    </article>
  );
}
