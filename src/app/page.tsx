import { HeroSection } from "@/components/hero/HeroSection";
import { HiringSnapshot } from "@/components/hiring/HiringSnapshot";
import { BharatEnterpriseHero } from "@/components/projects/BharatEnterpriseHero";
import { OtherProjects } from "@/components/projects/OtherProjects";
import { WhatIBringSection } from "@/components/hiring/WhatIBringSection";
import { WhatBrokeSequence } from "@/components/engineering/WhatBrokeSequence";
import { PerformanceMetrics } from "@/components/metrics/PerformanceMetrics";
import { TechStackSection } from "@/components/engineering/TechStackSection";
import { GitHubContributionGraph } from "@/components/engineering/GitHubContributionGraph";
import { AcademicSection } from "@/components/academic/AcademicSection";
import { HiringCTASection } from "@/components/hiring/HiringCTASection";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* 01. Hero (Positioning + Explicit Hiring Intent) */}
      <HeroSection />

      {/* 02. Recruiter Hiring Snapshot (10-20 sec scannable summary) */}
      <HiringSnapshot />

      {/* 03. Flagship Real-World Product: Bharat Enterprise (Dual Representation) */}
      <BharatEnterpriseHero />

      {/* 04. Selected Systems & Projects (Independent, Personal, Academic) */}
      <OtherProjects />

      {/* 05. What I Bring to a Team (Product, Ownership, Systems, Evolution) */}
      <WhatIBringSection />

      {/* 06. Engineering History: What Broke → What Changed */}
      <WhatBrokeSequence />

      {/* 07. Production Performance Benchmarks */}
      <PerformanceMetrics />

      {/* 08. Technical Spectrum & Tools I Work With */}
      <TechStackSection />

      {/* 09. Verified GitHub Contribution Telemetry */}
      <GitHubContributionGraph />

      {/* 10. Academic Foundations & SGPA Breakdown */}
      <AcademicSection />

      {/* 11. Dedicated Hiring CTA & Availability */}
      <HiringCTASection />
    </div>
  );
}
