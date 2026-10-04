import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Code2, Cpu, Globe, Wrench, Layers, Terminal, Sparkles, Database, Check, Server } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'languages' | 'systemsDevops' | 'coreCS' | 'webTech' | 'toolsAI'>('all');

  const categories = [
    { id: 'all', label: 'All Competencies' },
    { id: 'languages', label: 'Languages' },
    { id: 'systemsDevops', label: 'Linux & DevOps' },
    { id: 'coreCS', label: 'Core Computer Science' },
    { id: 'webTech', label: 'Web Technologies' },
    { id: 'toolsAI', label: 'Tools & AI' },
  ];

  return (
    <section id="skills" className="py-16 sm:py-24 bg-[#F4F4F0]/60 border-y border-neutral-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 sm:mb-14 pb-4 border-b border-neutral-200">
          <div>
            <span className="text-xs uppercase tracking-widest text-neutral-400 font-semibold font-mono">
              02 // CAPABILITIES
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-neutral-900 font-serif tracking-tight mt-1">
              TECHNICAL SKILLS
            </h2>
          </div>
          <p className="mt-2 sm:mt-0 text-xs sm:text-sm text-neutral-500 max-w-xs text-left sm:text-right font-mono">
            VERIFIED VIA CERTIFICATIONS & HANDS-ON PROJECTS
          </p>
        </div>

        {/* Filter Segmented Control */}
        <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-white/80 border border-neutral-200/90 rounded-2xl w-fit mb-10 shadow-2xs">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id as any)}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-xl transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-neutral-900 text-white shadow-2xs'
                  : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Categorized Display Grid */}
        <div className="space-y-12">
          
          {/* Programming Languages */}
          {(activeCategory === 'all' || activeCategory === 'languages') && (
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-neutral-400">
                <Code2 className="w-4 h-4 text-neutral-800" />
                <span>Languages</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {portfolioData.skills.languages.map((skill) => (
                  <div
                    key={skill.name}
                    className="p-5 bg-white border border-neutral-200/90 rounded-2xl shadow-2xs hover:border-neutral-400 hover:scale-[1.01] transition-all duration-200"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-base font-semibold text-neutral-900">{skill.name}</span>
                      <span className="text-[11px] font-mono text-neutral-500 bg-neutral-100 px-2 py-0.5 rounded font-medium">
                        {skill.level}
                      </span>
                    </div>
                    <p className="text-xs text-neutral-600 leading-relaxed">{skill.note}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Operating Systems & DevOps */}
          {(activeCategory === 'all' || activeCategory === 'systemsDevops') && (
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-neutral-400">
                <Server className="w-4 h-4 text-neutral-800" />
                <span>Operating Systems & DevOps (Red Hat Certified)</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {portfolioData.skills.systemsDevops.map((skill) => (
                  <div
                    key={skill.name}
                    className="p-5 bg-white border border-neutral-200/90 rounded-2xl shadow-2xs hover:border-neutral-400 hover:scale-[1.01] transition-all duration-200"
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <h4 className="text-sm font-semibold text-neutral-900">{skill.name}</h4>
                      <span className="text-[10px] font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded font-bold">
                        RH294 / RHEL
                      </span>
                    </div>
                    <p className="text-xs text-neutral-600 leading-relaxed">{skill.note}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Core Computer Science */}
          {(activeCategory === 'all' || activeCategory === 'coreCS') && (
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-neutral-400">
                <Cpu className="w-4 h-4 text-neutral-800" />
                <span>Core Computer Science</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {portfolioData.skills.coreCS.map((skill) => (
                  <div
                    key={skill.name}
                    className="p-5 bg-white border border-neutral-200/90 rounded-2xl shadow-2xs hover:border-neutral-400 hover:scale-[1.01] transition-all duration-200"
                  >
                    <div className="flex items-center gap-2 mb-1.5">
                      <div className="w-2 h-2 rounded-full bg-neutral-900" />
                      <h4 className="text-sm font-semibold text-neutral-900">{skill.name}</h4>
                    </div>
                    <p className="text-xs text-neutral-600 leading-relaxed pl-4">{skill.note}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Web Technologies */}
          {(activeCategory === 'all' || activeCategory === 'webTech') && (
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-neutral-400">
                <Globe className="w-4 h-4 text-neutral-800" />
                <span>Web Technologies (Skill Nexis Experience)</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                {portfolioData.skills.webTech.map((skill) => (
                  <div
                    key={skill.name}
                    className="p-5 bg-white border border-neutral-200/90 rounded-2xl shadow-2xs hover:border-neutral-400 hover:scale-[1.01] transition-all duration-200"
                  >
                    <h4 className="text-sm font-semibold text-neutral-900 mb-1">{skill.name}</h4>
                    <p className="text-xs text-neutral-600 leading-relaxed">{skill.note}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tools & AI */}
          {(activeCategory === 'all' || activeCategory === 'toolsAI') && (
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-neutral-400">
                <Wrench className="w-4 h-4 text-neutral-800" />
                <span>Tools & AI (AWS & Claude Certified)</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {portfolioData.skills.toolsAI.map((skill) => (
                  <div
                    key={skill.name}
                    className="p-5 bg-white border border-neutral-200/90 rounded-2xl shadow-2xs hover:border-neutral-400 hover:scale-[1.01] transition-all duration-200"
                  >
                    <h4 className="text-sm font-semibold text-neutral-900 mb-1">{skill.name}</h4>
                    <p className="text-xs text-neutral-600 leading-relaxed">{skill.note}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
