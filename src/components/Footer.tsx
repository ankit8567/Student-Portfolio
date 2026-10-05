import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { ArrowUp, Linkedin, Github, Code2, Mail, Instagram } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="pt-8 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-[#1A1A1A] text-neutral-300 rounded-3xl sm:rounded-[2.8rem] p-8 sm:p-12 lg:p-14 border border-neutral-800 shadow-xl space-y-10">
          
          {/* Top row */}
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-8 pb-10 border-b border-neutral-800">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-serif uppercase">
                  {portfolioData.personal.name}
                </h2>
                <span className="px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 text-[10px] font-mono font-bold border border-emerald-800">
                  CGPA: {portfolioData.personal.cgpa}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-neutral-400 font-mono">
                {portfolioData.personal.college} — Greater Noida, India
              </p>
              <p className="text-xs text-neutral-500 max-w-sm pt-1">
                Aspiring SDE with core strengths in Python, Java, C, Linux Red Hat Ansible automation, and algorithmic data structures.
              </p>
            </div>

            {/* Quick links columns */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 text-xs font-mono">
              <div>
                <span className="text-[11px] uppercase tracking-wider text-neutral-500 block mb-3 font-semibold">
                  NAVIGATION
                </span>
                <ul className="space-y-2 text-neutral-400">
                  <li><a href="#hero" className="hover:text-white transition-colors">Home</a></li>
                  <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
                  <li><a href="#skills" className="hover:text-white transition-colors">Skills</a></li>
                  <li><a href="#projects" className="hover:text-white transition-colors">Projects</a></li>
                </ul>
              </div>

              <div>
                <span className="text-[11px] uppercase tracking-wider text-neutral-500 block mb-3 font-semibold">
                  CREDENTIALS
                </span>
                <ul className="space-y-2 text-neutral-400">
                  <li><a href="#experience" className="hover:text-white transition-colors">Experience</a></li>
                  <li><a href="#certificates" className="hover:text-white transition-colors">8 Certifications</a></li>
                  <li><a href="#coding" className="hover:text-white transition-colors">LeetCode Journey</a></li>
                  <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
                </ul>
              </div>

              <div className="col-span-2 sm:col-span-1">
                <span className="text-[11px] uppercase tracking-wider text-neutral-500 block mb-3 font-semibold">
                  CONTACT DETAILS
                </span>
                <p className="text-neutral-300 mb-1 truncate font-medium">
                  {portfolioData.personal.email}
                </p>
                <p className="text-neutral-400">
                  {portfolioData.personal.location}
                </p>
              </div>
            </div>
          </div>

          {/* Social links row */}
          <div className="flex flex-wrap items-center justify-between gap-6 text-xs text-neutral-400">
            <div className="flex flex-wrap items-center gap-6">
              <a
                href={portfolioData.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors flex items-center gap-1.5"
              >
                <Linkedin className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
              </a>
              <a
                href={portfolioData.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors flex items-center gap-1.5"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub (ankit8567)</span>
              </a>
              <a
                href={portfolioData.socialLinks.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors flex items-center gap-1.5"
              >
                <Code2 className="w-3.5 h-3.5 text-amber-500" />
                <span>LeetCode (Ankit2904)</span>
              </a>
              <a
                href={portfolioData.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors flex items-center gap-1.5"
              >
                <Instagram className="w-3.5 h-3.5" />
                <span>Instagram (ankit2911_)</span>
              </a>
              <a
                href={portfolioData.socialLinks.email}
                className="hover:text-white transition-colors flex items-center gap-1.5"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Email</span>
              </a>
            </div>

            {/* Back to top button */}
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-xs text-neutral-400 hover:text-white py-1 px-3 rounded-full border border-neutral-800 hover:border-neutral-700 transition-colors cursor-pointer"
            >
              <span>Back On Top</span>
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>

          {/* Bottom Copyright */}
          <div className="pt-6 border-t border-neutral-800/80 flex flex-col sm:flex-row items-center justify-between text-[11px] text-neutral-500 font-mono">
            <p>© 2026 Ankit Srivastava. All rights reserved.</p>
            <p className="mt-2 sm:mt-0">
              NIET Greater Noida · B.Tech Computer Science & Engineering
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
};
