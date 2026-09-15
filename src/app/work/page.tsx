import Link from "next/link";
import { allProjects } from "@/data/projects";
import { Badge } from "@/components/ui/Badge";
import { ArrowUpRight, ChevronRight, ExternalLink } from "lucide-react";
import { MotionReveal, MotionCard, MotionTap } from "@/components/motion/MotionReveal";
import { ProjectTechStrip } from "@/components/projects/ProjectTechStrip";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Selected Work & Systems",
  description:
    "Production software, financial ledgers, operational SaaS, and academic engineering capstones built by Subhankar Das.",
};

export default function WorkPage() {
  return (
    <div className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-10 space-y-16">
        {/* Page Editorial Header */}
        <MotionReveal>
          <div className="space-y-4 border-b border-[#D9D9D4] dark:border-[#1C1F26] pb-8">
            <div className="flex items-center gap-3 font-mono text-xs text-[#C56A3A] dark:text-[#FB923C] tracking-widest">
              <span>INDEX</span>
              <span className="text-[#7C8288]">/ SOFTWARE SYSTEMS</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-semibold tracking-[-0.035em] text-[#17191C] dark:text-[#F5F5F3]">
              Selected Work
            </h1>
            <p className="text-base sm:text-lg text-[#565B61] dark:text-[#9BA1A6] max-w-3xl leading-relaxed">
              A documented record of software built for active business workflows, shared
              financial transparency, and distributed concurrency problems.
            </p>
          </div>
        </MotionReveal>

        {/* Projects List */}
        <div className="space-y-12">
          {allProjects.map((project, index) => {
            const isFlagship = project.category === "real-world-product";
            const isAcademic = project.category === "academic";

            return (
              <MotionCard
                key={project.slug}
                delay={index * 0.06}
                className={`border rounded-[7px] p-6 md:p-10 transition-all ${
                  isFlagship
                    ? "border-[#174A7E] dark:border-[#3B82F6] bg-[#FBFAF7] dark:bg-[#0C0D0F] ring-1 ring-[#174A7E]/20 dark:ring-[#3B82F6]/20"
                    : "border-[#D9D9D4] dark:border-[#1C1F26] bg-[#FBFAF7] dark:bg-[#0C0D0F] hover:border-[#BFC2BE] dark:hover:border-[#383D45]"
                }`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  {/* Metadata Left Column */}
                  <div className="lg:col-span-4 space-y-4">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs text-[#7C8288]">
                        {`0${index + 1} //`}
                      </span>
                      <Badge
                        variant={
                          isFlagship
                            ? "brand"
                            : isAcademic
                            ? "academic"
                            : project.category === "personal"
                            ? "personal"
                            : "outline"
                        }
                      >
                        {project.categoryLabel}
                      </Badge>
                    </div>

                    <div className="space-y-1">
                      <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#17191C] dark:text-[#F5F5F3]">
                        {project.title}
                      </h2>
                      <p className="text-xs font-mono text-[#174A7E] dark:text-[#60A5FA] font-medium">
                        {project.headline}
                      </p>
                    </div>

                    <div className="space-y-2 text-xs font-mono text-[#7C8288] pt-2 border-t border-[#D9D9D4] dark:border-[#1C1F26]">
                      <div className="flex items-center justify-between">
                        <span>ROLE:</span>
                        <span className="text-[#17191C] dark:text-[#F5F5F3] font-medium">
                          {project.role}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>TIMELINE:</span>
                        <span className="text-[#17191C] dark:text-[#F5F5F3] font-medium">
                          {project.timeline}
                        </span>
                      </div>
                      {project.origin && (
                        <div className="flex items-center justify-between">
                          <span>ORIGIN:</span>
                          <span className="text-[#C56A3A] dark:text-[#FB923C] font-medium">
                            {project.origin.domain}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Links */}
                    <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-[#D9D9D4] dark:border-[#1C1F26] text-xs font-mono">
                      <a
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-[#174A7E] dark:text-[#60A5FA] hover:underline font-medium"
                      >
                        <span>Live Deployment</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                      <span className="text-[#D9D9D4] dark:text-[#2B303B]">|</span>
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-[#565B61] dark:text-[#9BA1A6] hover:text-[#17191C] dark:hover:text-[#F5F5F3] transition-colors"
                      >
                        <span>GitHub</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </a>
                    </div>
                  </div>

                  {/* Narrative Right Column */}
                  <div className="lg:col-span-8 space-y-6">
                    <div className="space-y-3">
                      <p className="text-sm sm:text-base text-[#17191C] dark:text-[#F5F5F3] font-medium leading-relaxed">
                        {project.summary}
                      </p>
                      <p className="text-xs sm:text-sm text-[#565B61] dark:text-[#9BA1A6] leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Features list */}
                    <div className="space-y-2 pt-2 border-t border-[#D9D9D4] dark:border-[#1C1F26]">
                      <p className="font-mono text-[0.70rem] text-[#7C8288] uppercase tracking-wider">
                        KEY SUBSYSTEMS &amp; CAPABILITIES
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.features.map((feature) => (
                          <span
                            key={feature}
                            className="px-2.5 py-1 text-xs font-mono text-[#17191C] dark:text-[#F5F5F3] bg-[#ECECE7] dark:bg-[#14161A] border border-[#D9D9D4] dark:border-[#1C1F26] rounded-[3px]"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Tech Stack Strip */}
                    <div className="pt-2 border-t border-[#D9D9D4] dark:border-[#1C1F26]">
                      <ProjectTechStrip
                        technologies={[
                          ...project.stack.frontend.slice(0, 3),
                          ...project.stack.backend.slice(0, 2),
                          ...project.stack.database.slice(0, 2),
                        ]}
                      />
                    </div>

                    {/* Deep-Dive Case Study CTA */}
                    <div className="pt-4">
                      <MotionTap>
                        <Link
                          href={`/work/${project.slug}`}
                          className="inline-flex items-center gap-2 px-4 py-2 text-xs font-mono font-medium text-[#17191C] dark:text-[#F5F5F3] bg-[#ECECE7] dark:bg-[#14161A] hover:bg-[#DCE8F3] dark:hover:bg-[#1E2126] hover:text-[#174A7E] dark:hover:text-[#60A5FA] border border-[#D9D9D4] dark:border-[#1C1F26] rounded-[4px] transition-colors"
                        >
                          <span>READ ENGINEERING CASE STUDY</span>
                          <ChevronRight className="w-3.5 h-3.5" />
                        </Link>
                      </MotionTap>
                    </div>
                  </div>
                </div>
              </MotionCard>
            );
          })}
        </div>
      </div>
    </div>
  );
}
