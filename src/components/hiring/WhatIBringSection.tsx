"use client";

import { Layers, Cpu, ShieldCheck, RefreshCw } from "lucide-react";
import { MotionReveal, MotionStaggerGroup, MotionStaggerItem } from "@/components/motion/MotionReveal";

export function WhatIBringSection() {
  const principles = [
    {
      icon: Layers,
      number: "01",
      title: "Product Experience",
      headline: "Built around real workflows rather than tutorial problems.",
      description:
        "Every major system I've built originated from real user friction—from a physical pharmaceutical warehouse managing medicine expiration dates to shared organization funds requiring public ledger audits.",
    },
    {
      icon: Cpu,
      number: "02",
      title: "Full-Stack Ownership",
      headline: "End-to-end execution across the entire software stack.",
      description:
        "I take responsibility across UI architecture, API route performance, database transaction layers, authentication guards, deployments, and post-launch maintenance.",
    },
    {
      icon: ShieldCheck,
      number: "03",
      title: "Systems Thinking",
      headline: "Prioritizing data correctness, security, and edge-cases.",
      description:
        "I design with failure modes in mind: preventing ledger balance drift through atomic multi-document transactions, eliminating duplicate submissions with idempotency keys, and isolating tenant records via RBAC.",
    },
    {
      icon: RefreshCw,
      number: "04",
      title: "Continuous Improvement",
      headline: "Iterating systems when live usage exposes deeper friction.",
      description:
        "Software isn't finished when it compiles; it evolves when real operators use it daily. I optimize database indices, restructure aggregation pipelines, and refine keyboard shortcuts based on production telemetry.",
    },
  ];

  return (
    <section className="py-20 md:py-28 border-b border-[#D9D9D4] dark:border-[#1C1F26] bg-[#FBFAF7] dark:bg-[#060708]">
      <div className="max-w-7xl mx-auto px-6 md:px-10 space-y-12">
        {/* Section Header */}
        <MotionReveal>
          <div className="flex flex-wrap items-baseline justify-between gap-4 border-b border-[#D9D9D4] dark:border-[#1C1F26] pb-6">
            <div className="space-y-1 max-w-2xl">
              <div className="flex items-center gap-3 font-mono text-xs text-[#C56A3A] dark:text-[#FB923C] tracking-widest">
                <span>03</span>
                <span className="text-[#7C8288]">/ VALUE &amp; ENGINEERING MINDSET</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-semibold tracking-[-0.035em] text-[#17191C] dark:text-[#F5F5F3]">
                What I Bring to a Team
              </h2>
            </div>
            <p className="text-sm text-[#565B61] dark:text-[#9BA1A6] max-w-md leading-relaxed">
              The bridge between why I am effective to hire and why my projects are technically disciplined.
            </p>
          </div>
        </MotionReveal>

        {/* 4 Theme Cards */}
        <MotionStaggerGroup staggerDelay={0.08} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {principles.map((item) => {
            const Icon = item.icon;
            return (
              <MotionStaggerItem
                key={item.number}
                className="border border-[#D9D9D4] dark:border-[#1C1F26] rounded-[7px] bg-[#F5F4F0] dark:bg-[#0C0D0F] p-6 space-y-4 hover:border-[#174A7E] dark:hover:border-[#3B82F6] transition-colors group"
              >
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-[#C56A3A] dark:text-[#FB923C] font-semibold">
                    {item.number} //
                  </span>
                  <div className="w-8 h-8 rounded-[4px] bg-[#FBFAF7] dark:bg-[#14161A] border border-[#D9D9D4] dark:border-[#1C1F26] flex items-center justify-center text-[#174A7E] dark:text-[#60A5FA] group-hover:scale-110 transition-transform">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-base font-bold text-[#17191C] dark:text-[#F5F5F3]">
                    {item.title}
                  </h3>
                  <p className="text-xs font-mono font-medium text-[#174A7E] dark:text-[#60A5FA]">
                    {item.headline}
                  </p>
                  <p className="text-xs text-[#565B61] dark:text-[#9BA1A6] leading-relaxed pt-1">
                    {item.description}
                  </p>
                </div>
              </MotionStaggerItem>
            );
          })}
        </MotionStaggerGroup>
      </div>
    </section>
  );
}
