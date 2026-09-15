import { HeroSection } from "@/components/hero/HeroSection";
import { BharatEnterpriseHero } from "@/components/projects/BharatEnterpriseHero";
import { PerformanceMetrics } from "@/components/metrics/PerformanceMetrics";
import { WhatBrokeSequence } from "@/components/engineering/WhatBrokeSequence";
import { OtherProjects } from "@/components/projects/OtherProjects";
import { EngineeringPhilosophy } from "@/components/engineering/EngineeringPhilosophy";
import { TechStackSection } from "@/components/engineering/TechStackSection";
import { GitHubContributionGraph } from "@/components/engineering/GitHubContributionGraph";
import { AcademicSection } from "@/components/academic/AcademicSection";
import { ContactSection } from "@/components/contact/ContactSection";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* 01. Hero & Subtle Interactive System Diagram */}
      <HeroSection />

      {/* 02. Bharat Enterprise Flagship Showcase (40-50% Focus) */}
      <BharatEnterpriseHero />

      {/* 03. Engineering Notes (Performance Metrics) */}
      <PerformanceMetrics />

      {/* 04. What Broke. What Changed. (Editorial Vertical Sequence) */}
      <WhatBrokeSequence />

      {/* 05. Additional Systems (Accountly, Finance Tracker, EVORA) */}
      <OtherProjects />

      {/* 06. How I Build (Engineering Philosophy) */}
      <EngineeringPhilosophy />

      {/* 07. Technical Spectrum & Tools */}
      <TechStackSection />

      {/* 08. GitHub Contribution Activity (1,173 Real Contributions) */}
      <GitHubContributionGraph />

      {/* 09. Academic Foundations & Coursework */}
      <AcademicSection />

      {/* 10. Resume & Direct Contact Coordinates */}
      <ContactSection />
    </div>
  );
}
