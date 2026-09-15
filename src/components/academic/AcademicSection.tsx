"use client";

import { educationInfo } from "@/data/education";
import { GraduationCap, Award } from "lucide-react";
import { MotionReveal, MotionCard } from "@/components/motion/MotionReveal";

export function AcademicSection() {
  return (
    <section className="py-20 md:py-28 border-b border-[#D9D9D4] dark:border-[#1C1F26] bg-[#F5F4F0] dark:bg-[#000000]">
      <div className="max-w-7xl mx-auto px-6 md:px-10 space-y-12">
        {/* Section Header */}
        <MotionReveal>
          <div className="flex flex-wrap items-baseline justify-between gap-4 border-b border-[#D9D9D4] dark:border-[#1C1F26] pb-6">
            <div className="space-y-1">
              <div className="flex items-center gap-3 font-mono text-xs text-[#C56A3A] dark:text-[#FB923C] tracking-widest">
                <span>06</span>
                <span className="text-[#7C8288]">/ ACADEMIC BACKGROUND</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-semibold tracking-[-0.035em] text-[#17191C] dark:text-[#F5F5F3]">
                Education &amp; Foundations
              </h2>
            </div>
            <div className="flex items-center gap-2 font-mono text-xs text-[#174A7E] dark:text-[#60A5FA]">
              <GraduationCap className="w-4 h-4" />
              <span>RICIS INSTITUTIONS · 2024–2027</span>
            </div>
          </div>
        </MotionReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Degree & Semester Performance */}
          <div className="lg:col-span-7 space-y-6">
            <MotionCard className="border border-[#D9D9D4] dark:border-[#1C1F26] rounded-[7px] bg-[#FBFAF7] dark:bg-[#0C0D0F] p-6 space-y-4 hover:border-[#BFC2BE] dark:hover:border-[#383D45] transition-all">
              <div className="flex flex-wrap items-start justify-between gap-2 border-b border-[#D9D9D4] dark:border-[#1C1F26] pb-3">
                <div>
                  <h3 className="text-lg font-semibold tracking-tight text-[#17191C] dark:text-[#F5F5F3]">
                    {educationInfo.degree}
                  </h3>
                  <p className="text-xs font-mono text-[#565B61] dark:text-[#9BA1A6]">
                    {educationInfo.institution} · {educationInfo.timeline}
                  </p>
                </div>
                <span className="font-mono text-xs text-[#7C8288]">
                  {educationInfo.location}
                </span>
              </div>

              {/* Semester SGPA Cards */}
              <div className="space-y-3 pt-2">
                <p className="font-mono text-xs text-[#7C8288] uppercase tracking-wider">
                  SEMESTER SGPA PROGRESSION
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
                  {educationInfo.semesters.map((sem) => (
                    <div
                      key={sem.semester}
                      className="border border-[#D9D9D4] dark:border-[#1C1F26] rounded-[4px] bg-[#ECECE7] dark:bg-[#14161A] p-3 text-center space-y-1 hover:border-[#174A7E] dark:hover:border-[#60A5FA] transition-colors"
                    >
                      <div className="font-mono text-[0.65rem] text-[#7C8288]">
                        {sem.semester}
                      </div>
                      <div
                        className={`font-mono text-sm font-semibold ${
                          sem.status === "completed"
                            ? "text-[#17191C] dark:text-[#F5F5F3]"
                            : "text-[#C56A3A] dark:text-[#FB923C] text-xs"
                        }`}
                      >
                        {sem.sgpa}
                      </div>
                      <div className="text-[0.60rem] font-mono uppercase text-[#7C8288]">
                        {sem.status === "completed" ? "Verified" : sem.status}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Explicit Average Disclaimer Note */}
              <div className="border border-[#D9D9D4] dark:border-[#1C1F26] rounded-[4px] bg-[#DCE8F3]/40 dark:bg-[#1E293B]/40 p-3.5 flex items-start gap-2.5 text-xs">
                <Award className="w-4 h-4 text-[#174A7E] dark:text-[#60A5FA] shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <p className="font-medium text-[#17191C] dark:text-[#F5F5F3]">
                    Academic Standing: {educationInfo.calculatedAverage}
                  </p>
                  <p className="font-mono text-[0.70rem] text-[#565B61] dark:text-[#9BA1A6]">
                    {educationInfo.averageNote}
                  </p>
                </div>
              </div>
            </MotionCard>
          </div>

          {/* Coursework Modules */}
          <div className="lg:col-span-5">
            <MotionCard
              delay={0.08}
              className="border border-[#D9D9D4] dark:border-[#1C1F26] rounded-[7px] bg-[#FBFAF7] dark:bg-[#0C0D0F] p-6 space-y-4 hover:border-[#BFC2BE] dark:hover:border-[#383D45] transition-all"
            >
              <h3 className="font-mono text-xs font-semibold text-[#17191C] dark:text-[#F5F5F3] uppercase tracking-wider border-b border-[#D9D9D4] dark:border-[#1C1F26] pb-3">
                RELEVANT UNIVERSITY COURSEWORK
              </h3>
              <ul className="space-y-2.5 text-xs font-mono">
                {educationInfo.coursework.map((course) => (
                  <li
                    key={course}
                    className="flex items-center gap-2 text-[#565B61] dark:text-[#9BA1A6] border-b border-[#D9D9D4]/40 dark:border-[#1C1F26] pb-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#174A7E] dark:bg-[#60A5FA]" />
                    <span>{course}</span>
                  </li>
                ))}
              </ul>
            </MotionCard>
          </div>
        </div>
      </div>
    </section>
  );
}
