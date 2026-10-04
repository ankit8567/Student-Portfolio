import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Briefcase, Calendar, MapPin, CheckCircle, ArrowRight, Sparkles, Building2, BarChart2, ShieldCheck } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-20 sm:py-28 bg-[#F4F4F0]/60 border-y border-neutral-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 sm:mb-16 pb-4 border-b border-neutral-200">
          <div>
            <span className="text-xs uppercase tracking-widest text-neutral-400 font-semibold font-mono">
              04 // WORK HISTORY & INDUSTRY SIMULATIONS
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-neutral-900 font-serif tracking-tight mt-1">
              EXPERIENCE & SIMULATIONS
            </h2>
          </div>
          <p className="mt-2 sm:mt-0 text-xs sm:text-sm text-neutral-500 max-w-xs text-left sm:text-right font-mono">
            SKILL NEXIS INTERNSHIP & DELOITTE SIMULATIONS
          </p>
        </div>

        {/* Timeline Container */}
        <div className="space-y-8">
          {portfolioData.experience.map((exp, idx) => (
            <div
              key={exp.id}
              className="bg-white border border-neutral-200/90 rounded-3xl sm:rounded-[2.2rem] p-6 sm:p-10 shadow-[0_4px_24px_rgba(0,0,0,0.02)]"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
                
                {/* Meta Column */}
                <div className="lg:col-span-4 space-y-3 pb-4 lg:pb-0 border-b lg:border-b-0 lg:border-r border-neutral-200/80 lg:pr-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F7F7F5] border border-neutral-200 rounded-full text-xs font-mono font-medium text-neutral-700">
                    {exp.type === 'internship' ? (
                      <Briefcase className="w-3.5 h-3.5 text-neutral-900" />
                    ) : (
                      <BarChart2 className="w-3.5 h-3.5 text-neutral-900" />
                    )}
                    <span>{exp.type === 'internship' ? 'Industry Internship' : 'Job Simulation'}</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 font-serif">
                    {exp.role}
                  </h3>

                  <div className="space-y-1.5 text-xs text-neutral-600 font-medium">
                    <p className="text-sm text-neutral-900 font-semibold">{exp.organization}</p>
                    <div className="flex items-center gap-1.5 text-neutral-500">
                      <Calendar className="w-3.5 h-3.5" />
                      <span className="font-mono">{exp.duration}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-neutral-500">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  {/* Tech stack */}
                  <div className="pt-2">
                    <span className="text-[11px] uppercase tracking-wider text-neutral-400 font-semibold block mb-2 font-mono">
                      Technologies & Tools
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {exp.technologies.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-0.5 bg-[#FAF9F5] border border-neutral-200 rounded-md text-[11px] font-mono text-neutral-700"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Details Column */}
                <div className="lg:col-span-8 space-y-6 lg:pl-2">
                  {/* Responsibilities */}
                  <div className="space-y-3">
                    <h4 className="text-xs uppercase tracking-wider font-bold text-neutral-400 font-mono">
                      Responsibilities & Deliverables
                    </h4>
                    <ul className="space-y-2.5">
                      {exp.responsibilities.map((resp, rIdx) => (
                        <li key={rIdx} className="flex items-start gap-3 text-xs sm:text-sm text-neutral-700 leading-relaxed">
                          <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Key Learning */}
                  <div className="p-4 sm:p-5 bg-[#FAF9F5] rounded-2xl border border-neutral-200/80 space-y-1.5">
                    <span className="text-xs uppercase tracking-wider font-semibold text-neutral-800 font-mono flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                      <span>Key Technical Learning</span>
                    </span>
                    <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
                      {exp.keyLearning}
                    </p>
                  </div>
                </div>

              </div>
            </div>
          ))}

          {/* Recruiter Callout Card */}
          <div className="p-6 sm:p-8 bg-white border border-neutral-200/90 rounded-3xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-2xs">
            <div className="space-y-1">
              <h4 className="text-base font-semibold text-neutral-900">
                Seeking SDE Intern / Software Engineer Trainee Roles
              </h4>
              <p className="text-xs sm:text-sm text-neutral-600">
                Available for internships with a solid foundation in Python, Java, C, Linux Ansible, and DSA (1st Year CGPA: 9.2).
              </p>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-neutral-900 rounded-full hover:bg-neutral-800 shrink-0 transition-colors shadow-2xs"
            >
              <span>Contact Ankit</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
