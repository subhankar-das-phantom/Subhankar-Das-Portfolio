"use client";

import { whatBrokeSequence } from "@/data/engineering";
import { ArrowDown } from "lucide-react";
import { MotionReveal, MotionCard } from "@/components/motion/MotionReveal";

export function WhatBrokeSequence() {
  return (
    <section
      id="what-broke"
      className="py-20 md:py-28 border-b border-[#D9D9D4] dark:border-[#1C1F26] bg-[#F5F4F0] dark:bg-[#000000]"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 space-y-12">
        {/* Section Header */}
        <MotionReveal>
          <div className="flex flex-wrap items-baseline justify-between gap-4 border-b border-[#D9D9D4] dark:border-[#1C1F26] pb-6">
            <div className="space-y-1">
              <div className="flex items-center gap-3 font-mono text-xs text-[#C56A3A] dark:text-[#FB923C] tracking-widest">
                <span>02</span>
                <span className="text-[#7C8288]">/ ENGINEERING RESILIENCE</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-semibold tracking-[-0.035em] text-[#17191C] dark:text-[#F5F5F3]">
                What Broke. What Changed.
              </h2>
            </div>
            <p className="text-sm text-[#565B61] dark:text-[#9BA1A6] max-w-md leading-relaxed">
              Real production software breaks when edge cases intersect with daily user
              habits. Here are six critical architectural pivots driven by operational
              reality.
            </p>
          </div>
        </MotionReveal>

        {/* Editorial Vertical Sequence */}
        <div className="space-y-6">
          {whatBrokeSequence.map((item, idx) => (
            <MotionCard
              key={item.number}
              delay={idx * 0.04}
              className="border border-[#D9D9D4] dark:border-[#1C1F26] rounded-[7px] bg-[#FBFAF7] dark:bg-[#0C0D0F] p-6 md:p-8 hover:border-[#BFC2BE] dark:hover:border-[#383D45] transition-colors"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                {/* Column 1: Number & Status */}
                <div className="lg:col-span-2 font-mono text-xs space-y-1">
                  <span className="text-[#C56A3A] dark:text-[#FB923C] font-semibold text-sm">
                    {item.number}
                  </span>
                  <p className="text-[#7C8288] text-[0.70rem] uppercase tracking-wider">
                    CASE STUDY
                  </p>
                </div>

                {/* Column 2: The Failure Mode */}
                <div className="lg:col-span-4 space-y-2 border-l-2 border-[#A6473C]/60 dark:border-[#EF4444]/60 pl-4 py-0.5">
                  <div className="font-mono text-[0.70rem] tracking-wider text-[#A6473C] dark:text-[#F87171] font-semibold uppercase">
                    FAILURE MODE // WHAT BROKE
                  </div>
                  <h3 className="text-base font-semibold tracking-tight text-[#17191C] dark:text-[#F5F5F3]">
                    {item.broken}
                  </h3>
                  <p className="text-xs text-[#565B61] dark:text-[#9BA1A6] leading-relaxed">
                    {item.brokenContext}
                  </p>
                </div>

                {/* Transition Indicator */}
                <div className="hidden lg:flex lg:col-span-1 justify-center items-center pt-6 text-[#7C8288]">
                  <ArrowDown className="w-5 h-5 opacity-60" />
                </div>

                {/* Column 3: The Engineered Solution */}
                <div className="lg:col-span-5 space-y-2 border-l-2 border-[#174A7E] dark:border-[#3B82F6] pl-4 py-0.5">
                  <div className="font-mono text-[0.70rem] tracking-wider text-[#174A7E] dark:text-[#60A5FA] font-semibold uppercase">
                    ENGINEERED PIVOT // WHAT CHANGED
                  </div>
                  <h4 className="text-base font-semibold tracking-tight text-[#17191C] dark:text-[#F5F5F3]">
                    {item.changed}
                  </h4>
                  <p className="text-xs text-[#565B61] dark:text-[#9BA1A6] leading-relaxed">
                    {item.changedSolution}
                  </p>
                  <div className="pt-2 text-[0.70rem] font-mono text-[#2D6A4F] dark:text-[#34D399] bg-[#DCE8F3]/50 dark:bg-[#1E3A2F]/40 p-2 rounded-[3px] border border-[#2D6A4F]/20 dark:border-[#34D399]/20">
                    TAKEAWAY: {item.keyTakeaway}
                  </div>
                </div>
              </div>
            </MotionCard>
          ))}
        </div>
      </div>
    </section>
  );
}
