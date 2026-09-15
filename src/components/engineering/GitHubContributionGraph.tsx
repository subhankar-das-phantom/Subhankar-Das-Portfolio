"use client";

import { useState, useEffect, useMemo, useRef } from "react";
import initialData from "@/data/githubContributions.json";
import { siteConfig } from "@/data/site";
import { ArrowUpRight, GitCommit, Calendar, Flame } from "lucide-react";
import { MotionReveal, MotionCard, MotionTap } from "@/components/motion/MotionReveal";

interface ContributionDay {
  date: string;
  count: number;
  level: number;
}

interface ContributionsPayload {
  total: {
    lastYear: number;
  };
  contributions: ContributionDay[];
}

export function GitHubContributionGraph() {
  const [data, setData] = useState<ContributionsPayload>(initialData as ContributionsPayload);
  const [hoveredDay, setHoveredDay] = useState<ContributionDay | null>(null);
  const [tooltipPos, setTooltipPos] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  // Auto scroll to latest weeks on mobile after mount
  const scrollRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (scrollRef.current && window.innerWidth < 768) {
      scrollRef.current.scrollLeft = scrollRef.current.scrollWidth;
    }
  }, []);

  // Fetch live update in background if available
  useEffect(() => {
    let isMounted = true;
    async function fetchLatest() {
      try {
        const res = await fetch(
          "https://github-contributions-api.jogruber.de/v4/subhankar-das-phantom?y=last"
        );
        if (!res.ok) return;
        const json = await res.json();
        if (isMounted && json && json.contributions && json.contributions.length > 0) {
          setData(json);
        }
      } catch {
        // Fallback to static cached data silently
      }
    }
    fetchLatest();
    return () => {
      isMounted = false;
    };
  }, []);

  // Organize contributions into weeks (52-53 columns of 7 days: Sunday=0 to Saturday=6)
  const { weeks, monthLabels, stats } = useMemo(() => {
    const raw = data.contributions;
    if (!raw || raw.length === 0) {
      return { weeks: [], monthLabels: [], stats: { total: 0, activeDays: 0, maxDay: 0 } };
    }

    const weeksArray: ContributionDay[][] = [];
    let currentWeek: ContributionDay[] = [];

    // Align the first day of the week
    const firstDate = new Date(raw[0].date);
    const firstDayOfWeek = firstDate.getDay(); // 0 = Sunday

    // Pad leading empty days if first date is not Sunday
    for (let i = 0; i < firstDayOfWeek; i++) {
      currentWeek.push({ date: "", count: -1, level: -1 });
    }

    let activeDays = 0;
    let maxDay = 0;

    raw.forEach((item) => {
      if (item.count > 0) activeDays++;
      if (item.count > maxDay) maxDay = item.count;

      currentWeek.push(item);
      if (currentWeek.length === 7) {
        weeksArray.push(currentWeek);
        currentWeek = [];
      }
    });

    if (currentWeek.length > 0) {
      while (currentWeek.length < 7) {
        currentWeek.push({ date: "", count: -1, level: -1 });
      }
      weeksArray.push(currentWeek);
    }

    // Determine month labels positioned by week index
    const months: { label: string; weekIndex: number }[] = [];
    const MONTH_NAMES = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    let lastMonth = -1;

    weeksArray.forEach((week, wIdx) => {
      const validDay = week.find((d) => d.date);
      if (validDay) {
        const d = new Date(validDay.date);
        const m = d.getMonth();
        if (m !== lastMonth) {
          months.push({
            label: MONTH_NAMES[m],
            weekIndex: wIdx,
          });
          lastMonth = m;
        }
      }
    });

    return {
      weeks: weeksArray,
      monthLabels: months,
      stats: {
        total: data.total?.lastYear || 1173,
        activeDays,
        maxDay,
      },
    };
  }, [data]);

  const handleMouseEnter = (
    day: ContributionDay,
    e: React.MouseEvent<HTMLDivElement>
  ) => {
    if (day.count < 0) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const containerRect = containerRef.current?.getBoundingClientRect();

    if (containerRect) {
      setTooltipPos({
        x: rect.left - containerRect.left + rect.width / 2,
        y: rect.top - containerRect.top - 8,
      });
    }
    setHoveredDay(day);
  };

  const formatDisplayDate = (dateStr: string) => {
    if (!dateStr) return "";
    const [year, month, day] = dateStr.split("-");
    const d = new Date(Number(year), Number(month) - 1, Number(day));
    return d.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <section className="py-20 md:py-28 border-b border-[#D9D9D4] dark:border-[#1C1F26] bg-[#FBFAF7] dark:bg-[#000000] transition-colors">
      <div className="max-w-7xl mx-auto px-6 md:px-10 space-y-12">
        {/* Section Header */}
        <MotionReveal>
          <div className="flex flex-wrap items-baseline justify-between gap-4 border-b border-[#D9D9D4] dark:border-[#1C1F26] pb-6">
            <div className="space-y-1">
              <div className="flex items-center gap-3 font-mono text-xs text-[#C56A3A] dark:text-[#FB923C] tracking-widest">
                <span>OPEN SOURCE</span>
                <span className="text-[#7C8288]">/ ENGINEERING VELOCITY</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-semibold tracking-[-0.035em] text-[#17191C] dark:text-[#F5F5F3]">
                GitHub Contribution Activity
              </h2>
            </div>
            <a
              href={siteConfig.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-[#174A7E] dark:text-[#60A5FA] font-medium hover:underline"
            >
              <span>github.com/subhankar-das-phantom</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </MotionReveal>

        {/* GitHub Graph Container Card */}
        <MotionCard className="border border-[#D9D9D4] dark:border-[#1C1F26] rounded-[7px] bg-[#F5F4F0] dark:bg-[#0C0D0F] p-6 sm:p-8 space-y-6">
          {/* Top Bar of the Graph */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#D9D9D4] dark:border-[#1C1F26] pb-4 font-mono text-xs">
            <div className="flex items-center gap-2.5">
              <GitCommit className="w-4 h-4 text-[#174A7E] dark:text-[#60A5FA]" />
              <span className="font-semibold text-[#17191C] dark:text-[#F5F5F3] text-sm">
                {stats.total.toLocaleString()} contributions
              </span>
              <span className="text-[#7C8288]">in the last year</span>
            </div>

            <div className="flex items-center gap-4 text-[0.70rem] text-[#7C8288]">
              <span className="hidden sm:inline">VERIFIED GIT COMMITS &amp; PRs</span>
              <span className="text-[#2D6A4F] dark:text-[#34D399] font-medium bg-[#DCE8F3]/50 dark:bg-[#1E3A2F]/40 px-2 py-0.5 rounded-[3px] border border-[#2D6A4F]/20 dark:border-[#34D399]/20">
                ACTIVE
              </span>
            </div>
          </div>

          {/* Heatmap Grid Wrapper (Scrollable on Mobile) */}
          <div ref={containerRef} className="relative">
            {/* Tooltip */}
            {hoveredDay && (
              <div
                style={{
                  left: `${tooltipPos.x}px`,
                  top: `${tooltipPos.y}px`,
                  transform: "translate(-50%, -100%)",
                }}
                className="pointer-events-none absolute z-50 px-2.5 py-1.5 rounded-[4px] bg-[#17191C] dark:bg-[#1E222A] text-[#F5F5F3] text-[0.70rem] font-mono shadow-md whitespace-nowrap border border-[#565B61]/40 transition-transform duration-75"
              >
                <div className="font-semibold">
                  {hoveredDay.count === 0
                    ? "No contributions"
                    : `${hoveredDay.count} contribution${hoveredDay.count === 1 ? "" : "s"}`}
                </div>
                <div className="text-[0.65rem] text-[#9BA1A6]">
                  {formatDisplayDate(hoveredDay.date)}
                </div>
              </div>
            )}

            <div
              ref={scrollRef}
              className="overflow-x-auto pb-3 scroll-smooth snap-x touch-pan-x"
            >
              <div className="min-w-[780px] select-none">
                {/* Month Labels Header */}
                <div className="flex pl-8 mb-2 font-mono text-[0.68rem] text-[#7C8288]">
                  {monthLabels.map((m, idx) => (
                    <div
                      key={`${m.label}-${idx}`}
                      style={{
                        position: "relative",
                        left: `${m.weekIndex * 14.5}px`,
                        marginRight: "-100%",
                      }}
                      className="shrink-0"
                    >
                      {m.label}
                    </div>
                  ))}
                </div>

                {/* Days Grid & Row Labels */}
                <div className="flex items-start gap-2">
                  {/* Row Labels (Mon, Wed, Fri) */}
                  <div className="flex flex-col justify-between h-[96px] text-[0.65rem] font-mono text-[#7C8288] pr-1 py-0.5">
                    <span className="opacity-0">Sun</span>
                    <span>Mon</span>
                    <span className="opacity-0">Tue</span>
                    <span>Wed</span>
                    <span className="opacity-0">Thu</span>
                    <span>Fri</span>
                    <span className="opacity-0">Sat</span>
                  </div>

                  {/* 52 Columns */}
                  <div className="flex gap-[3.5px]">
                    {weeks.map((week, wIdx) => (
                      <div key={wIdx} className="flex flex-col gap-[3.5px]">
                        {week.map((day, dIdx) => {
                          if (day.count < 0) {
                            return (
                              <div
                                key={dIdx}
                                className="w-[11px] h-[11px] rounded-[2px] opacity-0 pointer-events-none"
                              />
                            );
                          }

                          // GitHub-Standard Green Level Colors
                          let levelClass = "";
                          if (day.level === 0) {
                            levelClass =
                              "bg-[#E1E4E8] dark:bg-[#161B22] border border-black/5 dark:border-white/5";
                          } else if (day.level === 1) {
                            levelClass =
                              "bg-[#9BE9A8] dark:bg-[#0E4429] border border-[#40C463]/20";
                          } else if (day.level === 2) {
                            levelClass =
                              "bg-[#40C463] dark:bg-[#006D32] border border-[#30A14E]/30";
                          } else if (day.level === 3) {
                            levelClass =
                              "bg-[#30A14E] dark:bg-[#26A641] border border-[#216E39]/30";
                          } else {
                            levelClass =
                              "bg-[#216E39] dark:bg-[#39D353] border border-[#216E39]/40";
                          }

                          return (
                            <div
                              key={dIdx}
                              onMouseEnter={(e) => handleMouseEnter(day, e)}
                              onMouseLeave={() => setHoveredDay(null)}
                              className={`w-[11px] h-[11px] rounded-[2px] cursor-pointer transition-transform duration-100 hover:scale-125 ${levelClass}`}
                            />
                          );
                        })}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Graph Footer & Legend */}
          <div className="pt-3 border-t border-[#D9D9D4] dark:border-[#1C1F26] flex flex-wrap items-center justify-between gap-4 font-mono text-[0.70rem] text-[#7C8288]">
            <div className="flex items-center gap-2">
              <Calendar className="w-3.5 h-3.5 text-[#174A7E] dark:text-[#60A5FA]" />
              <span>Continuous daily commits across commercial and academic systems</span>
            </div>

            {/* Legend */}
            <div className="flex items-center gap-1.5">
              <span>Less</span>
              <div className="w-[11px] h-[11px] rounded-[2px] bg-[#E1E4E8] dark:bg-[#161B22] border border-black/5 dark:border-white/5" />
              <div className="w-[11px] h-[11px] rounded-[2px] bg-[#9BE9A8] dark:bg-[#0E4429]" />
              <div className="w-[11px] h-[11px] rounded-[2px] bg-[#40C463] dark:bg-[#006D32]" />
              <div className="w-[11px] h-[11px] rounded-[2px] bg-[#30A14E] dark:bg-[#26A641]" />
              <div className="w-[11px] h-[11px] rounded-[2px] bg-[#216E39] dark:bg-[#39D353]" />
              <span>More</span>
            </div>
          </div>
        </MotionCard>

        {/* 3 Quick Velocity Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <MotionCard delay={0.04} className="border border-[#D9D9D4] dark:border-[#1C1F26] rounded-[7px] bg-[#F5F4F0] dark:bg-[#0C0D0F] p-5 space-y-2">
            <div className="flex items-center justify-between font-mono text-xs text-[#7C8288]">
              <span>TOTAL COMMITS &amp; PRS</span>
              <GitCommit className="w-4 h-4 text-[#174A7E] dark:text-[#60A5FA]" />
            </div>
            <div className="font-mono text-2xl font-semibold text-[#17191C] dark:text-[#F5F5F3]">
              {stats.total.toLocaleString()}+
            </div>
            <p className="text-xs text-[#565B61] dark:text-[#9BA1A6]">
              Verified contributions across repositories in the trailing 12 months.
            </p>
          </MotionCard>

          <MotionCard delay={0.08} className="border border-[#D9D9D4] dark:border-[#1C1F26] rounded-[7px] bg-[#F5F4F0] dark:bg-[#0C0D0F] p-5 space-y-2">
            <div className="flex items-center justify-between font-mono text-xs text-[#7C8288]">
              <span>ACTIVITY FREQUENCY</span>
              <Flame className="w-4 h-4 text-[#C56A3A] dark:text-[#FB923C]" />
            </div>
            <div className="font-mono text-2xl font-semibold text-[#17191C] dark:text-[#F5F5F3]">
              {stats.activeDays} Days Active
            </div>
            <p className="text-xs text-[#565B61] dark:text-[#9BA1A6]">
              Consistent day-by-day progression on operational software modules.
            </p>
          </MotionCard>

          <MotionCard delay={0.12} className="border border-[#D9D9D4] dark:border-[#1C1F26] rounded-[7px] bg-[#F5F4F0] dark:bg-[#0C0D0F] p-5 space-y-2 flex flex-col justify-between">
            <div className="space-y-2">
              <div className="flex items-center justify-between font-mono text-xs text-[#7C8288]">
                <span>PROFILE DESTINATION</span>
                <ArrowUpRight className="w-4 h-4 text-[#2D6A4F] dark:text-[#34D399]" />
              </div>
              <div className="font-mono text-sm font-semibold text-[#17191C] dark:text-[#F5F5F3] truncate">
                subhankar-das-phantom
              </div>
              <p className="text-xs text-[#565B61] dark:text-[#9BA1A6]">
                Explore full public commit history, branches, and code architecture.
              </p>
            </div>
            <div className="pt-2 border-t border-[#D9D9D4] dark:border-[#1C1F26]">
              <MotionTap className="w-full">
                <a
                  href={siteConfig.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between w-full py-1 text-xs font-mono font-medium text-[#174A7E] dark:text-[#60A5FA] hover:underline"
                >
                  <span>Open GitHub Profile</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </MotionTap>
            </div>
          </MotionCard>
        </div>
      </div>
    </section>
  );
}
