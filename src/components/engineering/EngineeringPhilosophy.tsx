"use client";

import { engineeringPhilosophy } from "@/data/engineering";
import { MotionReveal, MotionCard } from "@/components/motion/MotionReveal";

export function EngineeringPhilosophy() {
  return (
    <section className="py-20 md:py-28 border-b border-[#D9D9D4] dark:border-[#1C1F26] bg-[#F5F4F0] dark:bg-[#000000]">
      <div className="max-w-7xl mx-auto px-6 md:px-10 space-y-12">
        {/* Section Header */}
        <MotionReveal>
          <div className="flex flex-wrap items-baseline justify-between gap-4 border-b border-[#D9D9D4] dark:border-[#1C1F26] pb-6">
            <div className="space-y-1">
              <div className="flex items-center gap-3 font-mono text-xs text-[#C56A3A] dark:text-[#FB923C] tracking-widest">
                <span>04</span>
                <span className="text-[#7C8288]">/ CORE PRINCIPLES</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-semibold tracking-[-0.035em] text-[#17191C] dark:text-[#F5F5F3]">
                How I Build
              </h2>
            </div>
            <p className="text-sm text-[#565B61] dark:text-[#9BA1A6] max-w-md leading-relaxed">
              Five non-negotiable architectural tenets developed through shipping software to
              actual operators.
            </p>
          </div>
        </MotionReveal>

        {/* 5 Editorial Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {engineeringPhilosophy.map((pillar, idx) => (
            <MotionCard
              key={pillar.number}
              delay={idx * 0.05}
              className="border border-[#D9D9D4] dark:border-[#1C1F26] rounded-[7px] bg-[#FBFAF7] dark:bg-[#0C0D0F] p-6 space-y-4 flex flex-col justify-between hover:border-[#BFC2BE] dark:hover:border-[#383D45] transition-colors"
            >
              <div className="space-y-3">
                <div className="font-mono text-xs text-[#C56A3A] dark:text-[#FB923C] font-semibold border-b border-[#D9D9D4] dark:border-[#1C1F26] pb-2">
                  {`${pillar.number} // ${pillar.title}`}
                </div>
                <blockquote className="text-sm font-semibold tracking-tight text-[#17191C] dark:text-[#F5F5F3] leading-snug">
                  &ldquo;{pillar.statement}&rdquo;
                </blockquote>
              </div>
              <p className="text-xs text-[#565B61] dark:text-[#9BA1A6] leading-relaxed pt-2 border-t border-[#D9D9D4]/60 dark:border-[#1C1F26]">
                {pillar.elaboration}
              </p>
            </MotionCard>
          ))}
        </div>
      </div>
    </section>
  );
}
