"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

interface Step {
  id: string;
  number: string;
  name: string;
  artifact: string;
  detail: string;
}

const steps: Step[] = [
  {
    id: "problem",
    number: "01",
    name: "PROBLEM",
    artifact: "WORKFLOW FRICTION",
    detail: "Identify real operational friction: manual balance tallies, inventory drift, paper receipts.",
  },
  {
    id: "model",
    number: "02",
    name: "MODEL",
    artifact: "LEDGER SCHEMA",
    detail: "Define single-source-of-truth schemas, atomic deltas, compound indices, and invariants.",
  },
  {
    id: "build",
    number: "03",
    name: "BUILD",
    artifact: "MERN PIPELINE",
    detail: "Implement server-first routes, transaction boundaries, strict RBAC, and bounded projections.",
  },
  {
    id: "ship",
    number: "04",
    name: "SHIP",
    artifact: "LIVE PRODUCTION",
    detail: "Deploy to actual operators with zero-downtime index builds and secure credential handling.",
  },
  {
    id: "measure",
    number: "05",
    name: "MEASURE",
    artifact: "TELEMETRY & LOGS",
    detail: "Track cold-start query latency, payload size under heavy data, and operator error retries.",
  },
  {
    id: "iterate",
    number: "06",
    name: "ITERATE",
    artifact: "EVOLVED SAAS",
    detail: "Refactor based on daily warehouse usage: add automated FIFO, idempotency, and multi-tenancy.",
  },
];

export function SystemDiagram() {
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <div className="w-full border border-[#D9D9D4] dark:border-[#1C1F26] rounded-[7px] bg-[#FBFAF7] dark:bg-[#0C0D0F] p-5 md:p-6 shadow-xs">
      {/* Header bar of the artifact */}
      <div className="flex items-center justify-between border-b border-[#D9D9D4] dark:border-[#1C1F26] pb-3 mb-5">
        <div className="flex items-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-[#174A7E] dark:bg-[#3B82F6]" />
          <span className="font-mono text-xs text-[#17191C] dark:text-[#F5F5F3] font-medium tracking-wider">
            FIG 01. PRODUCT ENGINEERING CYCLE
          </span>
        </div>
        <span className="font-mono text-[0.70rem] text-[#7C8288]">
          INTERACTIVE ARTIFACT
        </span>
      </div>

      {/* SVG Pipeline Visualization (Desktop / Tablet) */}
      <div className="hidden lg:block relative py-4">
        <div className="grid grid-cols-6 gap-2 relative">
          {steps.map((step, index) => {
            const isActive = activeStep === index;
            return (
              <div key={step.id} className="relative flex flex-col items-center">
                {/* Node Box */}
                <button
                  type="button"
                  onClick={() => setActiveStep(index)}
                  className={`w-full text-left p-3 rounded-[4px] border transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-[#DCE8F3] dark:bg-[#1E293B] border-[#174A7E] dark:border-[#3B82F6] ring-1 ring-[#174A7E] dark:ring-[#3B82F6]"
                      : "bg-[#ECECE7] dark:bg-[#14161A] hover:bg-[#F5F4F0] dark:hover:bg-[#1E2126] border-[#D9D9D4] dark:border-[#1C1F26]"
                  }`}
                  aria-pressed={isActive}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span
                      className={`font-mono text-[0.65rem] font-medium ${
                        isActive ? "text-[#174A7E] dark:text-[#60A5FA]" : "text-[#7C8288]"
                      }`}
                    >
                      {step.number}
                    </span>
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${
                        isActive ? "bg-[#C56A3A] dark:bg-[#FB923C]" : "bg-[#BFC2BE] dark:bg-[#383D45]"
                      }`}
                    />
                  </div>
                  <div
                    className={`font-mono text-xs font-semibold tracking-wider ${
                      isActive ? "text-[#174A7E] dark:text-[#60A5FA]" : "text-[#17191C] dark:text-[#F5F5F3]"
                    }`}
                  >
                    {step.name}
                  </div>
                  <div className="font-mono text-[0.65rem] text-[#7C8288] mt-1 truncate">
                    {step.artifact}
                  </div>
                </button>

                {/* Arrow to next node */}
                {index < steps.length - 1 && (
                  <div
                    className="absolute -right-2 top-1/2 -translate-y-1/2 z-10 text-[#7C8288] pointer-events-none"
                    aria-hidden="true"
                  >
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 6H10M10 6L6.5 2.5M10 6L6.5 9.5"
                        stroke="currentColor"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Mobile Stepper */}
      <div className="lg:hidden space-y-2 mb-4">
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-1.5">
          {steps.map((step, index) => {
            const isActive = activeStep === index;
            return (
              <button
                key={step.id}
                type="button"
                onClick={() => setActiveStep(index)}
                className={`py-2 px-2 text-center rounded-[4px] border font-mono text-xs transition-colors ${
                  isActive
                    ? "bg-[#DCE8F3] dark:bg-[#1E293B] text-[#174A7E] dark:text-[#60A5FA] border-[#174A7E] dark:border-[#3B82F6] font-medium"
                    : "bg-[#ECECE7] dark:bg-[#14161A] text-[#565B61] dark:text-[#9BA1A6] border-[#D9D9D4] dark:border-[#1C1F26]"
                }`}
              >
                {step.name}
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Phase Note Drawer with Animated Transition */}
      <div className="mt-4 pt-3.5 border-t border-[#D9D9D4] dark:border-[#1C1F26] bg-[#ECECE7]/60 dark:bg-[#14161A]/60 p-3.5 rounded-[4px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 3 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -3 }}
            transition={{ duration: 0.16, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs"
          >
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="font-mono text-[#C56A3A] dark:text-[#FB923C] font-semibold text-[0.70rem]">
                  {`STAGE ${steps[activeStep].number} //`}
                </span>
                <span className="font-mono text-[#17191C] dark:text-[#F5F5F3] font-semibold">
                  {steps[activeStep].name}: {steps[activeStep].artifact}
                </span>
              </div>
              <p className="text-[#565B61] dark:text-[#9BA1A6] max-w-2xl leading-relaxed">
                {steps[activeStep].detail}
              </p>
            </div>
            <div className="font-mono text-[0.70rem] text-[#2D6A4F] dark:text-[#34D399] bg-[#DCE8F3]/60 dark:bg-[#1E3A2F]/60 px-2 py-0.5 rounded-[3px] shrink-0 border border-[#2D6A4F]/20 dark:border-[#34D399]/20">
              STATUS: VERIFIED IN PROD
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
