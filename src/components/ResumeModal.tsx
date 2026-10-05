import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { X, Download, Printer, Copy, Check, ExternalLink, GraduationCap, Code2, Briefcase, Award, Terminal, ShieldCheck } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopySummary = () => {
    const text = `
ANKIT SRIVASTAVA
Greater Noida, Uttar Pradesh, India | ankitsri2911@gmail.com
LinkedIn: ${portfolioData.socialLinks.linkedin}
GitHub: ${portfolioData.socialLinks.github}
LeetCode: ${portfolioData.socialLinks.leetcode}

PROFESSIONAL SUMMARY:
${portfolioData.personal.summary}

EDUCATION:
Bachelor of Technology in Computer Science and Engineering
Noida Institute of Engineering and Technology (NIET) — Greater Noida, India
Expected Graduation: 2029 | 1st Year CGPA: 9.2 / 10
Relevant Coursework: Data Structures & Algorithms, Object-Oriented Programming, Operating Systems, Linux Fundamentals, Database Management Systems, Computer Networks

TECHNICAL SKILLS:
• Languages: Python, Java, C, JavaScript
• Web Technologies: HTML5, CSS3, Responsive Design, DOM Manipulation, Web Design
• Operating Systems & DevOps: Linux (RHEL), Red Hat Ansible, Bash/Shell Scripting
• Core Computer Science: Data Structures & Algorithms (DSA), Object-Oriented Programming (OOP), Database Management Systems (DBMS), Time and Space Complexity Analysis
• Tools & AI: Git, GitHub, VS Code, Prompt Engineering, Claude, Generative AI, AutoCAD
• Additional: Data Analysis, Technical Documentation, Risk Assessment, Professional Communication

EXPERIENCE:
• Web Development Intern | Skill Nexis — September 2026
• Data Analytics Job Simulation | Deloitte Australia (Forage) — September 2026
• Internal Audit Job Simulation | Forage — September 2026

TECHNICAL PROJECTS:
• Smart Academic Recommendation System | Python, DSA, Graph Traversal (github.com/ankit8567/Smart-Academic-Recommendation-System)
• Linux Automation & System Configuration Engine | Red Hat Ansible, Python, Linux
• Personal Developer Portfolio Platform | HTML5, CSS3, JavaScript, Git, GitHub Pages/Vercel
• Data Structures & Algorithm Implementations | Python

CERTIFICATIONS & LICENSES:
• Red Hat Enterprise Linux Automation with Ansible (RH294) – Red Hat
• Getting Started with Linux Fundamentals – Red Hat
• Data Structures and Algorithms using Python – Part 2 – Infosys Springboard
• Object Oriented Programming using Python – Infosys Springboard
• Foundations of Prompt Engineering – AWS
• Claude 101 – Claude Academy
• Adobe Creativity & GenAI – NASSCOM
• Professional Communication – NIET
    `.trim();

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-neutral-950/70 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-4xl max-h-[92vh] bg-white rounded-3xl shadow-2xl border border-neutral-200 overflow-hidden flex flex-col z-10">
        
        {/* Header Bar */}
        <div className="px-6 py-4 border-b border-neutral-200 flex items-center justify-between bg-[#F7F7F5]">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-neutral-900" />
            <h3 className="font-semibold text-neutral-900 text-xs sm:text-sm tracking-wide uppercase">
              Official Resume Preview — Ankit Srivastava
            </h3>
            <span className="hidden sm:inline-flex px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 text-[10px] font-mono font-bold">
              1st Year CGPA: 9.2
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleCopySummary}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-neutral-700 bg-white border border-neutral-200 rounded-lg hover:bg-neutral-50 transition-colors shadow-2xs"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Copy Text'}</span>
            </button>
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-white bg-neutral-900 rounded-lg hover:bg-neutral-800 transition-colors shadow-2xs cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              aria-label="Close modal"
              className="p-1.5 text-neutral-500 hover:text-neutral-900 rounded-lg hover:bg-neutral-200/60 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Printable Resume Sheet (Modeled directly after attached resume) */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-7 text-neutral-900 font-sans text-xs sm:text-sm leading-normal bg-white">
          
          {/* Header Block */}
          <div className="text-center border-b border-neutral-300 pb-5 space-y-1.5">
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 font-serif">
              Ankit Srivastava
            </h1>
            <p className="text-neutral-600 text-xs sm:text-[13px]">
              Greater Noida, Uttar Pradesh, India &nbsp;|&nbsp;{' '}
              <a href="mailto:ankitsri2911@gmail.com" className="hover:underline">
                ankitsri2911@gmail.com
              </a>
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs font-mono text-neutral-700 pt-1">
              <span>
                LinkedIn:{' '}
                <a
                  href={portfolioData.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-neutral-900"
                >
                  linkedin.com/in/ankit-srivastava-a65a23389
                </a>
              </span>
              <span>&nbsp;|&nbsp;</span>
              <span>
                GitHub:{' '}
                <a
                  href={portfolioData.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-neutral-900"
                >
                  github.com/ankit8567
                </a>
              </span>
              <span>&nbsp;|&nbsp;</span>
              <span>
                LeetCode:{' '}
                <a
                  href={portfolioData.socialLinks.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-neutral-900"
                >
                  leetcode.com/u/Ankit2904
                </a>
              </span>
            </div>
          </div>

          {/* PROFESSIONAL SUMMARY */}
          <div className="space-y-1.5">
            <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-900 border-b border-neutral-300 pb-1">
              PROFESSIONAL SUMMARY
            </h2>
            <p className="text-neutral-700 leading-relaxed text-xs sm:text-[13px] pt-1">
              {portfolioData.personal.summary}
            </p>
          </div>

          {/* EDUCATION */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-900 border-b border-neutral-300 pb-1">
              EDUCATION
            </h2>
            <div className="pt-1">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between font-semibold text-neutral-900">
                <span className="text-xs sm:text-sm">Bachelor of Technology in Computer Science and Engineering</span>
                <span className="text-xs text-neutral-600 font-mono">Expected Graduation: 2029</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between text-neutral-700 text-xs mt-0.5">
                <span>Noida Institute of Engineering and Technology (NIET) — Greater Noida, India</span>
                <span className="font-semibold text-emerald-800 font-mono">1st Year CGPA: 9.2 / 10</span>
              </div>
              <p className="text-[11px] sm:text-xs text-neutral-600 mt-1.5">
                <strong className="text-neutral-800">Relevant Coursework:</strong> Data Structures & Algorithms, Object-Oriented Programming, Operating Systems, Linux Fundamentals, Database Management Systems, Computer Networks
              </p>
            </div>
          </div>

          {/* TECHNICAL SKILLS */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-900 border-b border-neutral-300 pb-1">
              TECHNICAL SKILLS
            </h2>
            <div className="space-y-1.5 text-xs sm:text-[13px] pt-1">
              <p>
                <strong className="text-neutral-900">Languages:</strong> Python, Java, C, JavaScript
              </p>
              <p>
                <strong className="text-neutral-900">Web Technologies:</strong> HTML5, CSS3, Responsive Design, DOM Manipulation, Web Design
              </p>
              <p>
                <strong className="text-neutral-900">Operating Systems & DevOps:</strong> Linux (RHEL), Red Hat Ansible, Bash/Shell Scripting
              </p>
              <p>
                <strong className="text-neutral-900">Core Computer Science:</strong> Data Structures & Algorithms (DSA), Object-Oriented Programming (OOP), Database Management Systems (DBMS), Time and Space Complexity Analysis
              </p>
              <p>
                <strong className="text-neutral-900">Tools & AI:</strong> Git, GitHub, VS Code, Prompt Engineering, Claude, Generative AI, AutoCAD
              </p>
              <p>
                <strong className="text-neutral-900">Additional:</strong> Data Analysis, Technical Documentation, Risk Assessment, Professional Communication
              </p>
            </div>
          </div>

          {/* EXPERIENCE */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-900 border-b border-neutral-300 pb-1">
              EXPERIENCE
            </h2>

            {/* Experience item 1 */}
            <div className="space-y-1">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between font-semibold text-neutral-900">
                <span>Web Development Intern | Skill Nexis</span>
                <span className="text-xs text-neutral-600 font-mono">September 2026</span>
              </div>
              <ul className="list-disc list-outside ml-4 text-xs sm:text-[13px] text-neutral-700 space-y-1">
                <li>
                  Engineered responsive, mobile-first interface components using HTML5, CSS3, and JavaScript, ensuring consistent layouts across screen sizes and browsers through modular component design and DOM scripting.
                </li>
                <li>
                  Implemented Git-based version control workflows including branching, commits, and pull requests to keep code organized, maintainable, and easy to review.
                </li>
              </ul>
            </div>

            {/* Experience item 2 */}
            <div className="space-y-1">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between font-semibold text-neutral-900">
                <span>Data Analytics Job Simulation | Deloitte Australia (Forage)</span>
                <span className="text-xs text-neutral-600 font-mono">September 2026</span>
              </div>
              <ul className="list-disc list-outside ml-4 text-xs sm:text-[13px] text-neutral-700">
                <li>
                  Analyzed structured datasets and produced dashboard-based insights by cleaning, manipulating, and visualizing data.
                </li>
              </ul>
            </div>

            {/* Experience item 3 */}
            <div className="space-y-1">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between font-semibold text-neutral-900">
                <span>Internal Audit Job Simulation | Forage</span>
                <span className="text-xs text-neutral-600 font-mono">September 2026</span>
              </div>
              <ul className="list-disc list-outside ml-4 text-xs sm:text-[13px] text-neutral-700">
                <li>
                  Conducted structured process reviews and risk assessments, validating compliance against defined standards and documenting findings with recommendations.
                </li>
              </ul>
            </div>
          </div>

          {/* TECHNICAL PROJECTS */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-900 border-b border-neutral-300 pb-1">
              TECHNICAL PROJECTS
            </h2>

            {/* Project 1: Smart Academic Recommendation System */}
            <div className="space-y-1">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between font-semibold text-neutral-900">
                <span>
                  Smart Academic Recommendation System | Python, DSA, Graph Traversal, Decision Logic
                </span>
                <a
                  href={portfolioData.projects[0].githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-neutral-600 hover:text-neutral-900 underline"
                >
                  github.com/ankit8567/Smart-Academic-Recommendation-System
                </a>
              </div>
              <ul className="list-disc list-outside ml-4 text-xs sm:text-[13px] text-neutral-700 space-y-1">
                <li>
                  A DSA-focused system designed to provide personalized academic recommendations using student-related data and algorithmic techniques.
                </li>
                <li>
                  Utilized priority queues and prerequisite dependency graph mapping to evaluate academic performance and recommend customized learning paths.
                </li>
              </ul>
            </div>

            {/* Project 2: Personal Developer Portfolio Platform */}
            <div className="space-y-1">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between font-semibold text-neutral-900">
                <span>Personal Developer Portfolio Platform | HTML5, CSS3, JavaScript, Git, GitHub Pages/Vercel</span>
              </div>
              <ul className="list-disc list-outside ml-4 text-xs sm:text-[13px] text-neutral-700 space-y-1">
                <li>
                  Architected a responsive, mobile-first portfolio site, ensuring consistent rendering across devices through flexible layouts and clean, modular code structure.
                </li>
                <li>
                  Optimized page performance and deployed the site via GitHub Pages/Vercel with Git-based version control.
                </li>
              </ul>
            </div>

            {/* Project 3: Linux Automation & System Configuration Engine */}
            <div className="space-y-1">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between font-semibold text-neutral-900">
                <span>Linux Automation & System Configuration Engine | Red Hat Ansible, Python, Linux</span>
              </div>
              <ul className="list-disc list-outside ml-4 text-xs sm:text-[13px] text-neutral-700 space-y-1">
                <li>
                  Automated system configuration, user management, and package deployment across Linux environments by writing reusable, idempotent Ansible playbooks.
                </li>
                <li>
                  Implemented Python scripts with error handling and logging to extend playbook workflows and improve automation reliability.
                </li>
              </ul>
            </div>

            {/* Project 4: Data Structures & Algorithm Implementations */}
            <div className="space-y-1">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between font-semibold text-neutral-900">
                <span>Data Structures & Algorithm Implementations | Python</span>
              </div>
              <ul className="list-disc list-outside ml-4 text-xs sm:text-[13px] text-neutral-700">
                <li>
                  Implemented core algorithms and data structures including sorting, searching, tree and graph traversals, with documented time and space complexity analysis.
                </li>
              </ul>
            </div>
          </div>

          {/* CERTIFICATIONS & LICENSES */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-900 border-b border-neutral-300 pb-1">
              CERTIFICATIONS & LICENSES
            </h2>
            <ul className="list-disc list-outside ml-4 text-xs sm:text-[13px] text-neutral-700 space-y-1 pt-1">
              {portfolioData.certifications.map((cert) => (
                <li key={cert.id}>
                  <strong className="text-neutral-900">{cert.title}</strong> – {cert.issuer}
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="p-4 sm:p-5 border-t border-neutral-200 bg-[#F7F7F5] flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-neutral-600 flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Verified Credentials & Resume from NIET Greater Noida (CGPA: 9.2)</span>
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={handlePrint}
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-neutral-900 rounded-xl hover:bg-neutral-800 transition-colors shadow-sm cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>Print / Download PDF</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
