import React from 'react';
import { Project } from '../data/portfolioData';
import { MockupPreview } from './MockupPreviews';
import { X, Github, ExternalLink, CheckCircle2, Cpu, GitFork, ArrowUpRight } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-neutral-950/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-3xl shadow-2xl border border-neutral-200 overflow-hidden flex flex-col z-10">
        {/* Top Header */}
        <div className="px-6 py-4 border-b border-neutral-200 flex items-center justify-between bg-[#F7F7F5]">
          <div className="flex items-center gap-2">
            <span className="text-xs uppercase tracking-wider font-semibold text-neutral-500 font-mono">
              {project.category} · {project.year}
            </span>
          </div>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-1.5 text-neutral-500 hover:text-neutral-900 rounded-lg hover:bg-neutral-200/60 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 font-serif">
              {project.title}
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 mt-2 font-normal leading-relaxed">
              {project.tagline}
            </p>
          </div>

          {/* Interactive UI Mockup */}
          <div className="w-full">
            <MockupPreview type={project.mockupType} title={project.title} />
          </div>

          {/* Detailed Overview */}
          <div className="space-y-4 pt-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400">
              System Architecture & Problem Formulation
            </h4>
            <p className="text-sm text-neutral-700 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Highlights */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400">
              Key Engineering Highlights
            </h4>
            <div className="space-y-2">
              {project.highlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies Used */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400">
              Technologies & Theoretical Foundations
            </h4>
            <div className="flex flex-wrap gap-2 text-xs font-medium text-neutral-700">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-[#F7F7F5] border border-neutral-200 rounded-lg"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 sm:p-6 border-t border-neutral-200 bg-[#F7F7F5] flex flex-wrap items-center justify-between gap-3">
          <div className="text-xs text-neutral-500">
            Open-source technical demonstration
          </div>
          <div className="flex items-center gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium text-neutral-800 bg-white border border-neutral-300 rounded-xl hover:bg-neutral-100 transition-colors shadow-2xs"
            >
              <Github className="w-4 h-4" />
              <span>View on GitHub</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400" />
            </a>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                onClick={(e) => {
                  if (project.liveUrl?.startsWith('#')) {
                    e.preventDefault();
                    onClose();
                  }
                }}
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium text-white bg-neutral-900 rounded-xl hover:bg-neutral-800 transition-colors shadow-sm"
              >
                <span>Live Interactive View</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
