"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowUpRight,
  CheckCircle2,
  ChevronRight,
  Layers,
  ShieldCheck,
  Database,
  GitBranch,
} from "lucide-react";
import { bharatEnterprise } from "@/data/projects";
import { Badge } from "@/components/ui/Badge";
import { MotionReveal, MotionTap } from "@/components/motion/MotionReveal";
import { ProjectTechStrip } from "@/components/projects/ProjectTechStrip";

export function BharatEnterpriseHero() {
  const [selectedEvolutionIndex, setSelectedEvolutionIndex] = useState<number>(0);

  const evolutionDescriptions = [
    {
      title: "Billing Core",
      note: "Rapid keyboard-first invoice emission with thermal printing and GST calculations.",
    },
    {
      title: "Customer Ledger",
      note: "Chronological double-entry debit/credit ledger resolving customer balance drift.",
    },
    {
      title: "Inventory Engine",
      note: "Real-time stock decrements with low-stock warnings and multi-warehouse bins.",
    },
    {
      title: "Batch & Expiry (FIFO)",
      note: "Lot tracking sorting pharmaceutical cartons by earliest expiry date to eliminate expired write-offs.",
    },
    {
      title: "Purchasing",
      note: "Distributor purchase orders, vendor invoices, and automatic stock ingestion.",
    },
    {
      title: "Collections",
      note: "Partial payment reconciliations, customer credit limits, and aging debt logs.",
    },
    {
      title: "Backend RBAC",
      note: "Role-scoped data access stripping margin data from warehouse pickers.",
    },
    {
      title: "Multi-Tenancy",
      note: "Logical tenant partitioning supporting multiple independent distributor accounts.",
    },
    {
      title: "Enterprise SaaS",
      note: "Production web application serving live operational workflows.",
    },
  ];

  return (
    <section className="py-20 md:py-28 border-b border-[#D9D9D4] dark:border-[#1C1F26] bg-[#FBFAF7] dark:bg-[#000000]">
      <div className="max-w-7xl mx-auto px-6 md:px-10 space-y-12">
        {/* Section Label */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#D9D9D4] dark:border-[#1C1F26] pb-4">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-[#C56A3A] dark:text-[#FB923C] font-semibold">
              01
            </span>
            <span className="font-mono text-xs text-[#7C8288] uppercase tracking-wider">
              / FEATURED REAL-WORLD SYSTEM (~45% PORTFOLIO FOCUS)
            </span>
          </div>
          <Badge variant="brand">{bharatEnterprise.categoryLabel}</Badge>
        </div>

        {/* Hero Header */}
        <MotionReveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8 space-y-4">
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-semibold tracking-[-0.035em] text-[#17191C] dark:text-[#F5F5F3]">
                {bharatEnterprise.title}
              </h2>
              <p className="text-xl md:text-2xl font-medium text-[#174A7E] dark:text-[#60A5FA] tracking-tight">
                &ldquo;{bharatEnterprise.headline}&rdquo;
              </p>
              <p className="text-base sm:text-lg text-[#565B61] dark:text-[#9BA1A6] leading-relaxed max-w-3xl pt-2">
                Built from the workflow needs of a real pharmaceutical distributor. An
                independently engineered SaaS platform handling wholesale invoice
                generation, double-entry customer balances, FIFO batch expiration
                queues, and multi-tenant operational isolation.
              </p>

              {/* Concise Tech Strip */}
              <div className="pt-2">
                <ProjectTechStrip
                  technologies={["React", "TypeScript", "Node.js", "Express", "MongoDB", "JWT", "Razorpay"]}
                />
              </div>
            </div>

            {/* Quick Action Box */}
            <div className="lg:col-span-4 border border-[#D9D9D4] dark:border-[#1C1F26] rounded-[7px] bg-[#F5F4F0] dark:bg-[#0C0D0F] p-6 space-y-4">
              <p className="font-mono text-xs text-[#7C8288] uppercase tracking-wider">
                VERIFIED DEPLOYMENT
              </p>
              <div className="space-y-2.5">
                <MotionTap className="w-full">
                  <a
                    href={bharatEnterprise.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between w-full px-4 py-2.5 text-xs font-mono font-medium text-[#F5F4F0] bg-[#174A7E] hover:bg-[#0F3B68] dark:bg-[#2563EB] dark:hover:bg-[#1D4ED8] rounded-[4px] transition-colors"
                  >
                    <span>OPEN LIVE APPLICATION</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </MotionTap>
                <MotionTap className="w-full">
                  <a
                    href={bharatEnterprise.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between w-full px-4 py-2.5 text-xs font-mono font-medium text-[#17191C] dark:text-[#F5F5F3] bg-[#FBFAF7] dark:bg-[#14161A] hover:bg-[#ECECE7] dark:hover:bg-[#1E2126] border border-[#D9D9D4] dark:border-[#1C1F26] rounded-[4px] transition-colors"
                  >
                    <span>VIEW GITHUB REPOSITORY</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#565B61] dark:text-[#9BA1A6]" />
                  </a>
                </MotionTap>
              </div>
              <Link
                href="/work/bharat-enterprise"
                className="inline-flex items-center gap-1.5 text-xs font-mono text-[#174A7E] dark:text-[#60A5FA] hover:underline pt-2 font-medium"
              >
                <span>Read Full Case Study (2,000+ words)</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </MotionReveal>

        {/* Feature System Tags */}
        <MotionReveal delay={0.06}>
          <div className="space-y-3 pt-4">
            <p className="font-mono text-xs text-[#7C8288] uppercase tracking-wider">
              FEATURE SYSTEM ARCHITECTURE
            </p>
            <div className="flex flex-wrap gap-2">
              {bharatEnterprise.features.map((feature) => (
                <span
                  key={feature}
                  className="px-3 py-1.5 text-xs font-mono text-[#17191C] dark:text-[#F5F5F3] bg-[#ECECE7] dark:bg-[#14161A] border border-[#D9D9D4] dark:border-[#1C1F26] rounded-[4px] hover:border-[#BFC2BE] dark:hover:border-[#383D45] transition-colors"
                >
                  {feature}
                </span>
              ))}
            </div>
          </div>
        </MotionReveal>

        {/* Product Evolution Timeline */}
        <MotionReveal delay={0.1}>
          <div className="border border-[#D9D9D4] dark:border-[#1C1F26] rounded-[7px] bg-[#F5F4F0] dark:bg-[#0C0D0F] p-5 sm:p-6 space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#D9D9D4] dark:border-[#1C1F26] pb-3">
              <div className="flex items-center gap-2">
                <GitBranch className="w-4 h-4 text-[#174A7E] dark:text-[#60A5FA]" />
                <span className="font-mono text-xs font-semibold text-[#17191C] dark:text-[#F5F5F3]">
                  PRODUCT EVOLUTION TIMELINE
                </span>
              </div>
              <span className="font-mono text-[0.70rem] text-[#7C8288]">
                9 INCREMENTAL ARCHITECTURAL STAGES (SWIPE ON MOBILE)
              </span>
            </div>

            {/* Mobile-Friendly Horizontal Stepper */}
            <div className="overflow-x-auto pb-2 scroll-smooth snap-x snap-mandatory -webkit-overflow-scrolling-touch touch-pan-x">
              <div className="flex items-center gap-1.5 min-w-[780px] sm:min-w-0 sm:w-full">
                {bharatEnterprise.evolution?.map((stage, idx) => {
                  const isSelected = selectedEvolutionIndex === idx;
                  return (
                    <div
                      key={stage}
                      className="flex items-center flex-1 snap-start min-w-[90px] sm:min-w-0"
                    >
                      <button
                        type="button"
                        onClick={() => setSelectedEvolutionIndex(idx)}
                        className={`w-full py-2 px-1.5 sm:px-2 rounded-[4px] border text-center transition-all cursor-pointer min-h-[44px] flex flex-col justify-center ${
                          isSelected
                            ? "bg-[#174A7E] dark:bg-[#2563EB] text-[#F5F4F0] border-[#174A7E] dark:border-[#2563EB] font-medium shadow-xs"
                            : "bg-[#FBFAF7] dark:bg-[#14161A] text-[#565B61] dark:text-[#9BA1A6] hover:text-[#17191C] dark:hover:text-[#F5F5F3] hover:bg-[#ECECE7] dark:hover:bg-[#1E2126] border-[#D9D9D4] dark:border-[#1C1F26]"
                        }`}
                      >
                        <div className="text-[0.65rem] font-mono opacity-80">
                          STAGE 0{idx + 1}
                        </div>
                        <div className="text-[0.72rem] sm:text-xs font-mono font-medium truncate">
                          {stage}
                        </div>
                      </button>
                      {idx < (bharatEnterprise.evolution?.length || 0) - 1 && (
                        <span className="px-0.5 sm:px-1 text-[#7C8288] text-[0.70rem] font-mono">
                          →
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Evolution Drawer with Animated Transition */}
            <div className="bg-[#FBFAF7] dark:bg-[#14161A] border border-[#D9D9D4] dark:border-[#1C1F26] rounded-[4px] p-4 min-h-[72px] flex items-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedEvolutionIndex}
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-mono font-semibold text-[#C56A3A] dark:text-[#FB923C]">
                        EVOLUTION 0{selectedEvolutionIndex + 1}:
                      </span>
                      <span className="font-semibold text-[#17191C] dark:text-[#F5F5F3]">
                        {evolutionDescriptions[selectedEvolutionIndex].title}
                      </span>
                    </div>
                    <p className="text-[#565B61] dark:text-[#9BA1A6] max-w-3xl leading-relaxed">
                      {evolutionDescriptions[selectedEvolutionIndex].note}
                    </p>
                  </div>
                  <span className="font-mono text-[0.70rem] text-[#2D6A4F] dark:text-[#34D399] bg-[#DCE8F3]/60 dark:bg-[#1E3A2F]/60 px-2 py-1 rounded-[3px] shrink-0 border border-[#2D6A4F]/20 dark:border-[#34D399]/20">
                    SHIPPED IN PRODUCTION
                  </span>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </MotionReveal>

        {/* Technical Architecture & Workflow Model */}
        <MotionReveal delay={0.14}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Column: Context & Origin */}
            <div className="lg:col-span-5 space-y-6">
              <div className="border border-[#D9D9D4] dark:border-[#1C1F26] rounded-[7px] bg-[#FBFAF7] dark:bg-[#0C0D0F] p-6 space-y-4 hover:border-[#BFC2BE] dark:hover:border-[#383D45] transition-all">
                <div className="flex items-center gap-2 text-xs font-mono text-[#174A7E] dark:text-[#60A5FA] font-semibold">
                  <Database className="w-4 h-4" />
                  <span>ORIGIN CONTEXT</span>
                </div>
                <h3 className="text-lg font-semibold tracking-tight text-[#17191C] dark:text-[#F5F5F3]">
                  Why this software exists
                </h3>
                <p className="text-sm text-[#565B61] dark:text-[#9BA1A6] leading-relaxed">
                  A pharmaceutical wholesale business distributes medicines to dozens of
                  retail pharmacies every morning. Retailers order cartons of tablets,
                  injectables, and syrups on rolling credit accounts, paying in erratic
                  installments.
                </p>
                <div className="border-t border-[#D9D9D4] dark:border-[#1C1F26] pt-3 space-y-2 text-xs font-mono">
                  <div className="flex items-center justify-between">
                    <span className="text-[#7C8288]">FIRST OPERATOR:</span>
                    <span className="text-[#17191C] dark:text-[#F5F5F3] font-medium">
                      Regional Pharma Distributor
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#7C8288]">CORE CONSTRAINT:</span>
                    <span className="text-[#C56A3A] dark:text-[#FB923C] font-medium">
                      Zero Tolerance for Balance Drift
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#7C8288]">INVENTORY DISPATCH:</span>
                    <span className="text-[#17191C] dark:text-[#F5F5F3] font-medium">
                      Strict FIFO Batch Sorting
                    </span>
                  </div>
                </div>
              </div>

              <div className="border border-[#D9D9D4] dark:border-[#1C1F26] rounded-[7px] bg-[#FBFAF7] dark:bg-[#0C0D0F] p-6 space-y-3 hover:border-[#BFC2BE] dark:hover:border-[#383D45] transition-all">
                <div className="flex items-center gap-2 text-xs font-mono text-[#2D6A4F] dark:text-[#34D399] font-semibold">
                  <ShieldCheck className="w-4 h-4" />
                  <span>ENGINEERING GUARANTEES</span>
                </div>
                <ul className="space-y-2 text-xs text-[#565B61] dark:text-[#9BA1A6]">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#2D6A4F] dark:text-[#34D399] shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-[#17191C] dark:text-[#F5F5F3]">
                        Atomic Ledger Delta:
                      </strong>{" "}
                      No balance recalculation from scratch; mutations execute as signed
                      deltas in ACID transactions.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#2D6A4F] dark:text-[#34D399] shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-[#17191C] dark:text-[#F5F5F3]">
                        FIFO Lot Allocation:
                      </strong>{" "}
                      Outgoing stock auto-consumes oldest batch lots first to eliminate
                      expired medicine waste.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#2D6A4F] dark:text-[#34D399] shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-[#17191C] dark:text-[#F5F5F3]">
                        Role-Scoped Privacy:
                      </strong>{" "}
                      Backend RBAC strips commercial distributor buy rates before dispatch
                      view payloads leave the server.
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Column: Stylized Technical Data Flow Representation */}
            <div className="lg:col-span-7 border border-[#D9D9D4] dark:border-[#1C1F26] rounded-[7px] bg-[#ECECE7] dark:bg-[#0C0D0F] p-6 space-y-4">
              <div className="flex items-center justify-between border-b border-[#BFC2BE] dark:border-[#1C1F26] pb-3 text-xs font-mono">
                <div className="flex items-center gap-2">
                  <Layers className="w-4 h-4 text-[#174A7E] dark:text-[#60A5FA]" />
                  <span className="font-semibold text-[#17191C] dark:text-[#F5F5F3]">
                    TECHNICAL DATA FLOW: INVOICE &amp; LEDGER RECONCILIATION
                  </span>
                </div>
                <span className="text-[#7C8288] text-[0.70rem]">SCHEMATIC</span>
              </div>

              {/* Visual Flow Diagram */}
              <div className="space-y-3 font-mono text-xs">
                {/* Step 1 */}
                <div className="bg-[#FBFAF7] dark:bg-[#14161A] border border-[#D9D9D4] dark:border-[#1C1F26] p-3 rounded-[4px]">
                  <div className="flex items-center justify-between text-[#7C8288] text-[0.70rem] mb-1">
                    <span>01 // CLIENT DISPATCH INGESTION</span>
                    <span className="text-[#174A7E] dark:text-[#60A5FA]">
                      Idempotency Guard
                    </span>
                  </div>
                  <div className="text-[#17191C] dark:text-[#F5F5F3] font-semibold">
                    POST /api/invoices (Bearer JWT + X-Idempotency-Key)
                  </div>
                  <p className="text-[#565B61] dark:text-[#9BA1A6] text-[0.75rem] mt-1 font-sans">
                    Payload contains line items, quantities, and chosen payment terms (Cash /
                    Rolling Credit).
                  </p>
                </div>

                {/* Arrow */}
                <div className="text-center text-[#7C8288] text-xs">↓</div>

                {/* Step 2 */}
                <div className="bg-[#FBFAF7] dark:bg-[#14161A] border border-[#174A7E] dark:border-[#3B82F6] p-3 rounded-[4px] ring-1 ring-[#174A7E]/20 dark:ring-[#3B82F6]/20">
                  <div className="flex items-center justify-between text-[#7C8288] text-[0.70rem] mb-1">
                    <span>02 // FIFO BATCH ALLOCATION ENGINE</span>
                    <span className="text-[#C56A3A] dark:text-[#FB923C]">ACID Session</span>
                  </div>
                  <div className="text-[#17191C] dark:text-[#F5F5F3] font-semibold">
                    BatchLot.find({`{ productId, qty: { $gt: 0 } }`}).sort(
                      {`{ expiryDate: 1 }`}
                    )
                  </div>
                  <p className="text-[#565B61] dark:text-[#9BA1A6] text-[0.75rem] mt-1 font-sans">
                    Allocates requested quantity across earliest expiry lots. Decrements
                    batch stock atomically.
                  </p>
                </div>

                {/* Arrow */}
                <div className="text-center text-[#7C8288] text-xs">↓</div>

                {/* Step 3 */}
                <div className="bg-[#FBFAF7] dark:bg-[#14161A] border border-[#D9D9D4] dark:border-[#1C1F26] p-3 rounded-[4px]">
                  <div className="flex items-center justify-between text-[#7C8288] text-[0.70rem] mb-1">
                    <span>03 // DUAL-ENTRY CHRONOLOGICAL LEDGER</span>
                    <span className="text-[#2D6A4F] dark:text-[#34D399]">
                      Single Source of Truth
                    </span>
                  </div>
                  <div className="text-[#17191C] dark:text-[#F5F5F3] font-semibold">
                    CustomerLedger.create(
                      {`{ debit: invoiceTotal, credit: 0, balance: prev + delta }`}
                    )
                  </div>
                  <p className="text-[#565B61] dark:text-[#9BA1A6] text-[0.75rem] mt-1 font-sans">
                    Appends immutable transaction event. Running balances remain
                    verifiable across all historical audit dates.
                  </p>
                </div>
              </div>

              <div className="pt-2 text-right">
                <Link
                  href="/work/bharat-enterprise"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-[#174A7E] dark:text-[#60A5FA] font-medium hover:underline"
                >
                  <span>Read in-depth technical analysis</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}
