"use client";

import Link from "next/link";
import { ArrowUpRight, ChevronRight, ExternalLink } from "lucide-react";
import { accountly, personalFinanceTracker, evora } from "@/data/projects";
import { Badge } from "@/components/ui/Badge";
import { MotionReveal, MotionCard, MotionTap } from "@/components/motion/MotionReveal";
import { ProjectTechStrip } from "@/components/projects/ProjectTechStrip";

export function OtherProjects() {
  const secondaryProjects = [accountly, personalFinanceTracker, evora];

  return (
    <section className="py-20 md:py-28 border-b border-[#D9D9D4] dark:border-[#1C1F26] bg-[#FBFAF7] dark:bg-[#000000]">
      <div className="max-w-7xl mx-auto px-6 md:px-10 space-y-12">
        {/* Section Header */}
        <MotionReveal>
          <div className="flex flex-wrap items-baseline justify-between gap-4 border-b border-[#D9D9D4] dark:border-[#1C1F26] pb-6">
            <div className="space-y-1">
              <div className="flex items-center gap-3 font-mono text-xs text-[#C56A3A] dark:text-[#FB923C] tracking-widest">
                <span>03</span>
                <span className="text-[#7C8288]">/ ADDITIONAL SYSTEMS &amp; STUDIES</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-semibold tracking-[-0.035em] text-[#17191C] dark:text-[#F5F5F3]">
                Products Built Around Real Problems
              </h2>
            </div>
            <Link
              href="/work"
              className="inline-flex items-center gap-1 text-xs font-mono text-[#174A7E] dark:text-[#60A5FA] font-medium hover:underline"
            >
              <span>View all systems &amp; repositories</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </MotionReveal>

        {/* Project Cards (Asymmetrical Editorial Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {secondaryProjects.map((project, idx) => {
            const isAcademic = project.category === "academic";

            return (
              <MotionCard
                key={project.slug}
                delay={idx * 0.08}
                className="border border-[#D9D9D4] dark:border-[#1C1F26] rounded-[7px] bg-[#F5F4F0] dark:bg-[#0C0D0F] p-6 md:p-8 flex flex-col justify-between space-y-6 hover:border-[#BFC2BE] dark:hover:border-[#383D45] transition-colors"
              >
                <div className="space-y-4">
                  {/* Category Badge & Timeline */}
                  <div className="flex items-center justify-between gap-2 border-b border-[#D9D9D4] dark:border-[#1C1F26] pb-3 text-xs font-mono">
                    <Badge
                      variant={
                        project.category === "academic"
                          ? "academic"
                          : project.category === "personal"
                          ? "personal"
                          : "outline"
                      }
                    >
                      {project.categoryLabel}
                    </Badge>
                    <span className="text-[#7C8288] text-[0.70rem]">
                      {project.timeline}
                    </span>
                  </div>

                  {/* Project Title & Headline */}
                  <div className="space-y-1.5">
                    <h3 className="text-xl font-semibold tracking-tight text-[#17191C] dark:text-[#F5F5F3]">
                      {project.title}
                    </h3>
                    <p className="text-xs font-mono text-[#174A7E] dark:text-[#60A5FA] font-medium">
                      {project.headline}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-[#565B61] dark:text-[#9BA1A6] leading-relaxed">
                    {project.description}
                  </p>

                  {/* Feature Tags */}
                  <div className="space-y-2 pt-2">
                    <p className="font-mono text-[0.65rem] text-[#7C8288] uppercase tracking-wider">
                      CORE CAPABILITIES
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.features.slice(0, 4).map((f) => (
                        <span
                          key={f}
                          className="px-2 py-0.5 text-[0.70rem] font-mono text-[#17191C] dark:text-[#F5F5F3] bg-[#ECECE7] dark:bg-[#14161A] border border-[#D9D9D4] dark:border-[#1C1F26] rounded-[3px]"
                        >
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Tech Strip */}
                  <div className="pt-2 border-t border-[#D9D9D4] dark:border-[#1C1F26]">
                    <ProjectTechStrip
                      technologies={[
                        ...project.stack.frontend.slice(0, 2),
                        ...project.stack.backend.slice(0, 2),
                      ]}
                    />
                  </div>
                </div>

                {/* Bottom Actions */}
                <div className="pt-4 border-t border-[#D9D9D4] dark:border-[#1C1F26] space-y-2.5 text-xs font-mono">
                  <div className="flex items-center justify-between gap-2">
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[#174A7E] dark:text-[#60A5FA] hover:underline font-medium"
                    >
                      <span>Live Deployment</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[#565B61] dark:text-[#9BA1A6] hover:text-[#17191C] dark:hover:text-[#F5F5F3] transition-colors"
                    >
                      <span>Repository</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  </div>

                  <MotionTap className="w-full block">
                    <Link
                      href={`/work/${project.slug}`}
                      className="block text-center py-2 text-[0.75rem] font-medium text-[#17191C] dark:text-[#F5F5F3] bg-[#FBFAF7] dark:bg-[#14161A] hover:bg-[#ECECE7] dark:hover:bg-[#1E2126] border border-[#D9D9D4] dark:border-[#1C1F26] rounded-[4px] transition-colors"
                    >
                      Read Architectural Notes →
                    </Link>
                  </MotionTap>
                </div>
              </MotionCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
