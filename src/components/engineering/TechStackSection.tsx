"use client";

import { technologyGroups } from "@/data/technologies";
import { TechIcon } from "@/components/ui/TechIcon";
import { MotionReveal, MotionStaggerGroup, MotionStaggerItem } from "@/components/motion/MotionReveal";

export function TechStackSection() {
  return (
    <section className="py-20 md:py-28 border-b border-[#D9D9D4] dark:border-[#1C1F26] bg-[#FBFAF7] dark:bg-[#000000]">
      <div className="max-w-7xl mx-auto px-6 md:px-10 space-y-12">
        {/* Section Header */}
        <MotionReveal>
          <div className="flex flex-wrap items-baseline justify-between gap-4 border-b border-[#D9D9D4] dark:border-[#1C1F26] pb-6">
            <div className="space-y-1">
              <div className="flex items-center gap-3 font-mono text-xs text-[#C56A3A] dark:text-[#FB923C] tracking-widest">
                <span>05</span>
                <span className="text-[#7C8288]">/ TECHNICAL PROFILE</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-semibold tracking-[-0.035em] text-[#17191C] dark:text-[#F5F5F3]">
                Tools I Work With
              </h2>
            </div>
            <p className="text-sm text-[#565B61] dark:text-[#9BA1A6] max-w-md leading-relaxed">
              Curated languages, frameworks, and engineering protocols deployed across real-world systems,
              prioritized for reliability, predictable queries, and data integrity.
            </p>
          </div>
        </MotionReveal>

        {/* 6 Column Typography & Normalized Icon Grid */}
        <MotionStaggerGroup staggerDelay={0.05} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
          {technologyGroups.map((group) => (
            <MotionStaggerItem
              key={group.category}
              className="border-t border-[#D9D9D4] dark:border-[#1C1F26] pt-4 space-y-3"
            >
              <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-[#174A7E] dark:text-[#60A5FA]">
                {group.title}
              </h3>
              <ul className="space-y-2">
                {group.items.map((item) => (
                  <li
                    key={item.name}
                    className="flex items-center gap-2 text-xs font-mono text-[#17191C] dark:text-[#F5F5F3] border-b border-[#D9D9D4]/40 dark:border-[#1C1F26] pb-1.5 hover:border-[#174A7E] dark:hover:border-[#60A5FA] group transition-colors"
                  >
                    {item.logo && (
                      <TechIcon
                        name={item.name}
                        logo={item.logo}
                        size={16}
                      />
                    )}
                    <span className="truncate">{item.name}</span>
                  </li>
                ))}
              </ul>
            </MotionStaggerItem>
          ))}
        </MotionStaggerGroup>
      </div>
    </section>
  );
}
