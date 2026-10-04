import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Code2, Github, Flame, Trophy, CheckCircle2, ArrowUpRight, BarChart2, GitCommit, GitBranch } from 'lucide-react';

export const CodingJourneySection: React.FC = () => {
  const stats = portfolioData.codingStats;

  // Generate stylized GitHub activity squares
  const weeks = 28;
  const daysPerWeek = 7;
  const activityMatrix = React.useMemo(() => {
    const matrix = [];
    for (let w = 0; w < weeks; w++) {
      const week = [];
      for (let d = 0; d < daysPerWeek; d++) {
        const val = (w * 7 + d * 3) % 11;
        let level = 0;
        if (val > 8) level = 3;
        else if (val > 5) level = 2;
        else if (val > 2) level = 1;
        week.push(level);
      }
      matrix.push(week);
    }
    return matrix;
  }, []);

  return (
    <section id="coding" className="py-20 sm:py-28 bg-[#F4F4F0]/60 border-y border-neutral-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 sm:mb-16 pb-4 border-b border-neutral-200">
          <div>
            <span className="text-xs uppercase tracking-widest text-neutral-400 font-semibold font-mono">
              06 // ALGORITHMIC PRACTICE
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-neutral-900 font-serif tracking-tight mt-1">
              MY CODING JOURNEY
            </h2>
          </div>
          <p className="mt-2 sm:mt-0 text-xs sm:text-sm text-neutral-500 max-w-xs text-left sm:text-right font-mono">
            LEETCODE @{stats.leetcodeUsername} & GITHUB @{stats.githubUsername}
          </p>
        </div>

        {/* 2-Column Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: LeetCode Profile Card */}
          <div className="lg:col-span-6 bg-white border border-neutral-200/90 rounded-3xl sm:rounded-[2.2rem] p-6 sm:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.02)] flex flex-col justify-between">
            <div className="space-y-6">
              
              {/* Card Header */}
              <div className="flex items-center justify-between pb-4 border-b border-neutral-200/80">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-[#FAF9F5] border border-neutral-200 flex items-center justify-center font-bold text-neutral-900">
                    <Code2 className="w-5 h-5 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-neutral-900">LeetCode Profile</h3>
                    <span className="text-xs text-neutral-500 font-mono">@{stats.leetcodeUsername}</span>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1 bg-amber-50 border border-amber-200/60 rounded-full text-xs font-semibold text-amber-800">
                  <Flame className="w-3.5 h-3.5 text-amber-600 fill-amber-600" />
                  <span>{stats.activeStreakDays} Day Streak</span>
                </div>
              </div>

              {/* Big Solved Stat */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-[#FAF9F5] rounded-2xl border border-neutral-200/80">
                  <span className="text-xs text-neutral-500 uppercase font-mono font-semibold">Total Solved</span>
                  <div className="text-3xl sm:text-4xl font-bold font-mono text-neutral-900 mt-1">
                    {stats.totalSolved}
                  </div>
                  <span className="text-[11px] text-neutral-500">Python & C algorithms</span>
                </div>

                <div className="p-4 bg-[#FAF9F5] rounded-2xl border border-neutral-200/80">
                  <span className="text-xs text-neutral-500 uppercase font-mono font-semibold">Acceptance Rate</span>
                  <div className="text-3xl sm:text-4xl font-bold font-mono text-neutral-900 mt-1">
                    {stats.acceptanceRate}
                  </div>
                  <span className="text-[11px] text-emerald-700 font-medium">{stats.ranking}</span>
                </div>
              </div>

              {/* Solved Breakdown by Difficulty */}
              <div className="space-y-3">
                <span className="text-xs uppercase tracking-wider font-bold text-neutral-400 font-mono block">
                  Difficulty Distribution
                </span>

                {/* Easy */}
                <div className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span className="font-medium text-emerald-700">Easy</span>
                    <span className="font-mono text-neutral-800 font-semibold">{stats.easy} Solved</span>
                  </div>
                  <div className="w-full h-2 bg-neutral-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-emerald-500 rounded-full"
                      style={{ width: `${(stats.easy / stats.totalSolved) * 100}%` }}
                    />
                  </div>
                </div>

                {/* Medium */}
                <div className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span className="font-medium text-amber-700">Medium</span>
                    <span className="font-mono text-neutral-800 font-semibold">{stats.medium} Solved</span>
                  </div>
                  <div className="w-full h-2 bg-neutral-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-amber-500 rounded-full"
                      style={{ width: `${(stats.medium / stats.totalSolved) * 100}%` }}
                    />
                  </div>
                </div>

                {/* Hard */}
                <div className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span className="font-medium text-rose-700">Hard</span>
                    <span className="font-mono text-neutral-800 font-semibold">{stats.hard} Solved</span>
                  </div>
                  <div className="w-full h-2 bg-neutral-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-rose-500 rounded-full"
                      style={{ width: `${(stats.hard / stats.totalSolved) * 100}%` }}
                    />
                  </div>
                </div>
              </div>

            </div>

            {/* CTA Button */}
            <div className="pt-6 mt-6 border-t border-neutral-100">
              <a
                href={portfolioData.socialLinks.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 text-xs font-semibold text-neutral-900 bg-[#F7F7F5] border border-neutral-300 rounded-2xl hover:bg-neutral-900 hover:text-white transition-all shadow-2xs"
              >
                <span>OPEN LEETCODE PROFILE (Ankit2904)</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right Column: GitHub Profile & Activity Card */}
          <div className="lg:col-span-6 bg-white border border-neutral-200/90 rounded-3xl sm:rounded-[2.2rem] p-6 sm:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.02)] flex flex-col justify-between">
            <div className="space-y-6">
              
              {/* Card Header */}
              <div className="flex items-center justify-between pb-4 border-b border-neutral-200/80">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-[#FAF9F5] border border-neutral-200 flex items-center justify-center font-bold text-neutral-900">
                    <Github className="w-5 h-5 text-neutral-900" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-neutral-900">GitHub Profile</h3>
                    <span className="text-xs text-neutral-500 font-mono">@{stats.githubUsername}</span>
                  </div>
                </div>
                <div className="text-xs font-mono text-neutral-500">
                  {stats.publicRepos} Public Repositories
                </div>
              </div>

              {/* GitHub Stats Row */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-[#FAF9F5] rounded-2xl border border-neutral-200/80">
                  <span className="text-xs text-neutral-500 uppercase font-mono font-semibold">Contributions</span>
                  <div className="text-3xl sm:text-4xl font-bold font-mono text-neutral-900 mt-1">
                    {stats.totalContributions}+
                  </div>
                  <span className="text-[11px] text-neutral-500">Commits, PRs & reviews</span>
                </div>

                <div className="p-4 bg-[#FAF9F5] rounded-2xl border border-neutral-200/80">
                  <span className="text-xs text-neutral-500 uppercase font-mono font-semibold">Repositories</span>
                  <div className="text-3xl sm:text-4xl font-bold font-mono text-neutral-900 mt-1">
                    {stats.publicRepos}
                  </div>
                  <span className="text-[11px] text-neutral-500">Including Smart Academic Rec</span>
                </div>
              </div>

              {/* Visual Contribution Grid */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs text-neutral-500 font-mono">
                  <span>Year-Round Commit Frequency</span>
                  <span className="text-[10px]">Active Developer</span>
                </div>

                {/* Heatmap visualization */}
                <div className="p-3.5 bg-[#FAF9F5] border border-neutral-200/80 rounded-2xl overflow-x-auto">
                  <div className="flex gap-1 min-w-[340px]">
                    {activityMatrix.map((week, wIdx) => (
                      <div key={wIdx} className="flex flex-col gap-1">
                        {week.map((level, dIdx) => (
                          <div
                            key={dIdx}
                            className={`w-2.5 h-2.5 rounded-[2px] transition-colors ${
                              level === 3
                                ? 'bg-neutral-900'
                                : level === 2
                                ? 'bg-neutral-500'
                                : level === 1
                                ? 'bg-neutral-300'
                                : 'bg-neutral-200/60'
                            }`}
                            title={`Activity intensity: Level ${level}`}
                          />
                        ))}
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-[10px] text-neutral-400 font-mono mt-3">
                    <span>Less</span>
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 rounded-[2px] bg-neutral-200/60" />
                      <div className="w-2 h-2 rounded-[2px] bg-neutral-300" />
                      <div className="w-2 h-2 rounded-[2px] bg-neutral-500" />
                      <div className="w-2 h-2 rounded-[2px] bg-neutral-900" />
                    </div>
                    <span>More</span>
                  </div>
                </div>
              </div>

            </div>

            {/* CTA Button */}
            <div className="pt-6 mt-6 border-t border-neutral-100">
              <a
                href={portfolioData.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 text-xs font-semibold text-neutral-900 bg-[#F7F7F5] border border-neutral-300 rounded-2xl hover:bg-neutral-900 hover:text-white transition-all shadow-2xs"
              >
                <span>OPEN GITHUB REPOSITORIES (ankit8567)</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
