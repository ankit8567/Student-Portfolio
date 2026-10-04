import React, { useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Menu, X, ArrowUpRight, FileText, Github, Linkedin, Copy, Check, Award, Code2 } from 'lucide-react';

interface NavbarProps {
  onResumeClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onResumeClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [copied, setCopied] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['hero', 'about', 'skills', 'projects', 'experience', 'certificates', 'coding', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(portfolioData.personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const navLinks = [
    { label: 'Home', href: '#hero', id: 'hero' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Experience', href: '#experience', id: 'experience' },
    { label: 'Certificates', href: '#certificates', id: 'certificates' },
    { label: 'Coding', href: '#coding', id: 'coding' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-[#F7F7F5]/90 backdrop-blur-md border-b border-neutral-200/70 py-3 shadow-[0_2px_15px_rgba(0,0,0,0.03)]'
            : 'bg-transparent py-5 sm:py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Zone 1: Brand Wordmark */}
            <a
              href="#hero"
              className="group flex items-center gap-2 text-base sm:text-lg font-bold tracking-tight text-neutral-900 transition-colors"
            >
              <span className="w-2 h-2 rounded-full bg-neutral-900 group-hover:scale-125 transition-transform" />
              <span className="tracking-wider uppercase text-xs sm:text-sm font-semibold">
                {portfolioData.personal.name}
              </span>
              <span className="hidden xl:inline-flex px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-mono font-bold">
                CGPA: {portfolioData.personal.cgpa}
              </span>
            </a>

            {/* Zone 2: Navigation Links (Desktop) */}
            <nav className="hidden lg:flex items-center gap-5 xl:gap-7 text-xs xl:text-sm font-medium text-neutral-600">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  className={`transition-colors py-1 relative hover:text-neutral-900 ${
                    activeSection === link.id
                      ? 'text-neutral-900 font-semibold'
                      : 'text-neutral-500'
                  }`}
                >
                  {link.label}
                  {activeSection === link.id && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-neutral-900 rounded-full" />
                  )}
                </a>
              ))}
            </nav>

            {/* Zone 3: Actions & Quick Profiles */}
            <div className="hidden sm:flex items-center gap-2.5">
              {/* Active Certificates Quick Nav button */}
              <a
                href="#certificates"
                className="hidden xl:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs text-neutral-700 hover:text-neutral-900 bg-white/90 border border-neutral-200/90 rounded-full hover:border-neutral-400 transition-colors shadow-2xs font-medium"
              >
                <Award className="w-3.5 h-3.5 text-amber-600" />
                <span>8 Certificates</span>
              </a>

              {/* Resume button */}
              <button
                onClick={onResumeClick}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-neutral-900 bg-white border border-neutral-300 rounded-full hover:bg-neutral-100 hover:border-neutral-400 transition-all shadow-2xs cursor-pointer"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Resume</span>
              </button>

              {/* LinkedIn */}
              <a
                href={portfolioData.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn Profile"
                className="p-1.5 text-neutral-600 hover:text-neutral-900 hover:bg-white/80 rounded-full transition-colors border border-transparent hover:border-neutral-200"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              {/* GitHub */}
              <a
                href={portfolioData.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub Profile (ankit8567)"
                className="p-1.5 text-neutral-600 hover:text-neutral-900 hover:bg-white/80 rounded-full transition-colors border border-transparent hover:border-neutral-200"
              >
                <Github className="w-4 h-4" />
              </a>

              {/* LeetCode */}
              <a
                href={portfolioData.socialLinks.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                title="LeetCode Profile (Ankit2904)"
                className="p-1.5 text-neutral-600 hover:text-neutral-900 hover:bg-white/80 rounded-full transition-colors border border-transparent hover:border-neutral-200"
              >
                <Code2 className="w-4 h-4 text-amber-600" />
              </a>
            </div>

            {/* Mobile menu toggle */}
            <div className="flex sm:hidden items-center gap-2">
              <button
                onClick={onResumeClick}
                className="px-2.5 py-1 text-xs font-medium text-neutral-900 bg-white border border-neutral-300 rounded-full"
              >
                Resume
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle Menu"
                className="p-2 text-neutral-900 bg-white border border-neutral-200 rounded-lg focus:outline-none"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="fixed inset-0 bg-neutral-900/40 backdrop-blur-xs transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="fixed inset-y-0 right-0 w-full max-w-xs bg-[#F7F7F5] border-l border-neutral-200 p-6 shadow-2xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-neutral-200">
                <div>
                  <span className="font-semibold text-sm tracking-wider uppercase text-neutral-900 block">
                    {portfolioData.personal.name}
                  </span>
                  <span className="text-[11px] text-emerald-700 font-mono font-medium">
                    NIET · 1st Year CGPA: {portfolioData.personal.cgpa}
                  </span>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 text-neutral-500 hover:text-neutral-900 rounded-md"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="mt-6 flex flex-col gap-2.5">
                {navLinks.map((link) => (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors flex items-center justify-between ${
                      activeSection === link.id
                        ? 'bg-neutral-200/70 text-neutral-900 font-semibold'
                        : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100'
                    }`}
                  >
                    <span>{link.label}</span>
                    {link.id === 'certificates' && (
                      <span className="px-2 py-0.5 text-[10px] font-mono bg-amber-100 text-amber-800 rounded-full font-bold">
                        8 Certs
                      </span>
                    )}
                  </a>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-neutral-200 space-y-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onResumeClick();
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium text-white bg-neutral-900 rounded-xl hover:bg-neutral-800 transition-colors"
              >
                <FileText className="w-4 h-4" />
                <span>View / Print Resume</span>
              </button>

              <div className="flex items-center justify-center gap-3 pt-2">
                <a
                  href={portfolioData.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-neutral-700 hover:text-neutral-900 bg-white border border-neutral-200 rounded-full"
                  title="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={portfolioData.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-neutral-700 hover:text-neutral-900 bg-white border border-neutral-200 rounded-full"
                  title="GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={portfolioData.socialLinks.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-neutral-700 hover:text-neutral-900 bg-white border border-neutral-200 rounded-full"
                  title="LeetCode"
                >
                  <Code2 className="w-4 h-4 text-amber-600" />
                </a>
                <a
                  href={portfolioData.socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-neutral-700 hover:text-neutral-900 bg-white border border-neutral-200 rounded-full"
                  title="Instagram"
                >
                  <span className="text-xs font-mono font-bold">IG</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
