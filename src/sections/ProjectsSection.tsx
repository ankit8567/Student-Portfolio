import React from 'react';
import { portfolioData, Project } from '../data/portfolioData';
import { MockupPreview } from '../components/MockupPreviews';
import { Github, ArrowUpRight, Sparkles, Layers, ArrowRight } from 'lucide-react';

interface ProjectsSectionProps {
  onSelectProject: (project: Project) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onSelectProject }) => {
  return (
    <section id="projects" className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 sm:mb-16 pb-4 border-b border-neutral-200">
          <div>
            <span className="text-xs uppercase tracking-widest text-neutral-400 font-semibold font-mono">
              03 // TECHNICAL PROJECTS
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-neutral-900 font-serif tracking-tight mt-1">
              TECHNICAL PROJECTS
            </h2>
          </div>
          <div className="mt-2 sm:mt-0 text-left sm:text-right">
            <a
              href={portfolioData.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs sm:text-sm font-mono text-neutral-700 hover:text-neutral-900 underline flex items-center gap-1 sm:justify-end"
            >
              <span>GITHUB: github.com/ankit8567</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="space-y-12 sm:space-y-16">
          {portfolioData.projects.map((project, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={project.id}
                className="group relative bg-white border border-neutral-200/90 rounded-3xl sm:rounded-[2.5rem] p-6 sm:p-10 lg:p-12 shadow-[0_4px_30px_rgba(0,0,0,0.02)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.05)] transition-all duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  
                  {/* Left Column: Project Information */}
                  <div className={`lg:col-span-6 space-y-6 ${!isEven ? 'lg:order-2' : ''}`}>
                    {/* Category & Index */}
                    <div className="flex items-center gap-2 text-xs font-mono text-neutral-400">
                      <span className="text-neutral-900 font-bold">0{index + 1}</span>
                      <span>/</span>
                      <span className="uppercase tracking-wider">{project.category}</span>
                      <span>·</span>
                      <span>{project.year}</span>
                    </div>

                    {/* Title */}
                    <div>
                      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-neutral-900 font-serif tracking-tight">
                        {project.title}
                      </h3>
                      {project.id === 'smart-academic-recommendation' && (
                        <span className="inline-block mt-2 px-2.5 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-[11px] font-mono font-bold">
                          Featured GitHub Repository · ankit8567
                        </span>
                      )}
                    </div>

                    {/* Tagline / Description */}
                    <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-normal">
                      {project.description}
                    </p>

                    {/* Key Technical Highlights */}
                    <div className="space-y-1.5 pt-1">
                      {project.highlights.map((highlight, hIdx) => (
                        <div key={hIdx} className="text-xs text-neutral-700 flex items-start gap-2">
                          <span className="text-neutral-400 mt-0.5">↳</span>
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>

                    {/* Technology Tags */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-[#F7F7F5] border border-neutral-200/80 rounded-lg text-xs font-medium text-neutral-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="pt-3 flex flex-wrap items-center gap-3">
                      <button
                        onClick={() => onSelectProject(project)}
                        className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-neutral-900 rounded-full hover:bg-neutral-800 transition-colors shadow-2xs cursor-pointer"
                      >
                        <span>VIEW ARCHITECTURE</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>

                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-neutral-800 bg-white border border-neutral-300 rounded-full hover:bg-neutral-100 hover:border-neutral-400 transition-colors shadow-2xs"
                      >
                        <Github className="w-4 h-4" />
                        <span>VIEW GITHUB REPO</span>
                        <ArrowUpRight className="w-3 h-3 text-neutral-400" />
                      </a>
                    </div>
                  </div>

                  {/* Right Column: Interactive Code-Rendered UI Mockup Preview */}
                  <div
                    className={`lg:col-span-6 cursor-pointer ${!isEven ? 'lg:order-1' : ''}`}
                    onClick={() => onSelectProject(project)}
                  >
                    <div className="relative group/mockup">
                      <div className="transform transition-transform duration-300 group-hover/mockup:scale-[1.015]">
                        <MockupPreview type={project.mockupType} title={project.title} />
                      </div>

                      {/* Floating circular inspect badge */}
                      <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white/95 backdrop-blur-xs border border-neutral-200 shadow-md flex flex-col items-center justify-center text-[10px] font-semibold text-neutral-900 tracking-tight transition-transform duration-200 group-hover/mockup:scale-110">
                        <span>INSPECT</span>
                        <div className="flex items-center">
                          <span>SYSTEM</span>
                          <ArrowUpRight className="w-2.5 h-2.5 ml-0.5" />
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
