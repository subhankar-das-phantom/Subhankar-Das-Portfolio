"use client";

import { performanceMetrics } from "@/data/engineering";
import { MotionReveal, MotionCard } from "@/components/motion/MotionReveal";

export function PerformanceMetrics() {
  return (
    <section
      id="engineering"
      className="py-20 md:py-28 bg-[#ECECE7] dark:bg-[#050607] border-y border-[#D9D9D4] dark:border-[#1C1F26] transition-colors duration-200"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 space-y-12">
        {/* Header Bar */}
        <MotionReveal>
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#D9D9D4] dark:border-[#565B61]/40 pb-6">
            <div className="space-y-1">
              <div className="flex items-center gap-3 font-mono text-xs tracking-widest text-[#C56A3A] dark:text-[#FB923C]">
                <span>ENGINEERING NOTES</span>
                <span className="text-[#7C8288]">/ BENCHMARKS</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-semibold tracking-[-0.03em] text-[#17191C] dark:text-[#F5F4F0]">
                Performance &amp; Query Optimization
              </h2>
            </div>
            <p className="font-mono text-xs text-[#565B61] dark:text-[#BFC2BE] max-w-md leading-relaxed">
              Measured against high-volume pharmaceutical customer ledgers with 3+ years of continuous transactional records.
            </p>
          </div>
        </MotionReveal>

        {/* 3 High-Impact Monospace Metric Blocks */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {performanceMetrics.map((item, index) => (
            <MotionCard
              key={item.id}
              delay={0.06 * (index + 1)}
              className="border border-[#D9D9D4] dark:border-[#1E222A] rounded-[7px] bg-[#FBFAF7] dark:bg-[#0C0D0F] p-6 space-y-6 flex flex-col justify-between hover:border-[#BFC2BE] dark:hover:border-[#383D45] transition-all duration-200"
            >
              {/* Metric Label */}
              <div className="flex items-center justify-between border-b border-[#D9D9D4] dark:border-[#565B61]/30 pb-3 font-mono text-xs text-[#7C8288]">
                <span>{`0${index + 1} // ${item.metric}`}</span>
                <span className="text-[#C56A3A] dark:text-[#FB923C] font-medium">{item.change}</span>
              </div>

              {/* Large Monospace Numbers */}
              <div className="space-y-2">
                <div className="font-mono flex items-baseline gap-3 flex-wrap">
                  <span className="text-2xl sm:text-3xl text-[#7C8288] line-through decoration-[#C56A3A]/60 dark:decoration-[#FB923C]/60">
                    {item.before}
                  </span>
                  <span className="text-sm font-sans text-[#7C8288]">→</span>
                  <span className="text-4xl sm:text-5xl font-semibold text-[#17191C] dark:text-[#F5F4F0] tracking-tight">
                    {item.after}
                  </span>
                </div>
                <p className="font-mono text-xs text-[#C56A3A] dark:text-[#FB923C]">
                  {item.changeLabel}
                </p>
              </div>

              {/* Explanation & Technical Context */}
              <div className="space-y-3 pt-3 border-t border-[#D9D9D4] dark:border-[#565B61]/30 text-xs">
                <h3 className="font-semibold text-[#17191C] dark:text-[#F5F4F0] font-sans text-sm">
                  {item.headline}
                </h3>
                <p className="text-[#565B61] dark:text-[#BFC2BE] leading-relaxed font-sans">
                  {item.description}
                </p>
                <div className="font-mono text-[0.70rem] text-[#565B61] dark:text-[#7C8288] bg-[#ECECE7] dark:bg-[#000000]/60 p-2.5 rounded-[4px] border border-[#D9D9D4] dark:border-[#565B61]/20">
                  {item.technicalContext}
                </div>
              </div>
            </MotionCard>
          ))}
        </div>

        {/* Footnote on Measurement Methodology */}
        <div className="pt-4 border-t border-[#D9D9D4] dark:border-[#565B61]/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs font-mono text-[#7C8288]">
          <span>METHODOLOGY: MongoDB explain(&quot;executionStats&quot;) over 10,000+ synthetic and production records.</span>
          <span>SYSTEM: Node.js / Mongoose / MongoDB Atlas M10 Tier</span>
        </div>
      </div>
    </section>
  );
}
