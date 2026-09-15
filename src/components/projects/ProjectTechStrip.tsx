import React from "react";
import { canonicalTechnologies } from "@/data/technologies";
import { TechIcon } from "@/components/ui/TechIcon";

interface ProjectTechStripProps {
  technologies: string[];
  className?: string;
  showLogos?: boolean;
}

export function ProjectTechStrip({
  technologies,
  className = "",
  showLogos = true,
}: ProjectTechStripProps) {
  return (
    <div
      className={`flex flex-wrap items-center gap-x-3 gap-y-2 text-xs font-mono text-[#565B61] dark:text-[#9BA1A6] ${className}`}
    >
      <span className="text-[#7C8288] text-[0.70rem] uppercase tracking-wider">
        STACK:
      </span>
      {technologies.map((techName, idx) => {
        // Find matching tech record if available
        const record = canonicalTechnologies.find(
          (t) =>
            t.name.toLowerCase() === techName.toLowerCase() ||
            techName.toLowerCase().startsWith(t.name.toLowerCase())
        );

        return (
          <React.Fragment key={techName}>
            <span className="inline-flex items-center gap-1.5 text-[#17191C] dark:text-[#F5F5F3] font-medium">
              {showLogos && record?.logo && (
                <TechIcon name={record.name} logo={record.logo} size={15} />
              )}
              <span>{techName}</span>
            </span>
            {idx < technologies.length - 1 && (
              <span className="text-[#D9D9D4] dark:text-[#2B303B]">·</span>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
}
