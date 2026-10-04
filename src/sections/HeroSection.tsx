import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { permanentProfilePhoto } from '../assets/profileImage';
import { ArrowDown, FileText, Sparkles, MapPin, GraduationCap, Award } from 'lucide-react';

interface HeroSectionProps {
  onResumeClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onResumeClick }) => {
  return (
    <section
      id="hero"
      className="relative pt-28 sm:pt-36 lg:pt-40 pb-16 sm:pb-24 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Large Rounded Island Container inspired by reference 1 */}
        <div className="relative bg-white/70 border border-neutral-200/90 rounded-3xl sm:rounded-[2.5rem] p-6 sm:p-10 lg:p-14 shadow-[0_8px_30px_rgba(0,0,0,0.02)] backdrop-blur-xs">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Column: Editorial Headline & Academic Highlights */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-7">
              
              {/* Top Highlights Pill Row */}
              <div className="flex flex-wrap items-center gap-2">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-neutral-200 text-xs text-neutral-800 shadow-2xs">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="font-semibold text-neutral-900">
                    Seeking SDE Intern / Trainee
                  </span>
                </div>

                {/* 1st Year CGPA Badge requested by user */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-mono font-bold text-emerald-800 shadow-2xs">
                  <GraduationCap className="w-3.5 h-3.5 text-emerald-700" />
                  <span>1st Year CGPA: {portfolioData.personal.cgpa} / 10</span>
                </div>
              </div>

              {/* Main Headline */}
              <div className="space-y-1">
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal tracking-tight text-neutral-900 font-serif leading-[0.92]">
                  HEY, I'M ANKIT <br />
                  <span className="italic font-normal">SRIVASTAVA</span>
                </h1>
              </div>

              {/* Subheadline & Institution */}
              <div className="space-y-1">
                <p className="text-base sm:text-lg lg:text-xl font-medium text-neutral-900 tracking-tight">
                  Computer Science and Engineering Undergraduate & Aspiring Software Developer
                </p>
                <p className="text-xs sm:text-sm text-neutral-600 font-mono">
                  {portfolioData.personal.college} — Greater Noida, India
                </p>
              </div>

              {/* Short Bio */}
              <p className="text-sm sm:text-base text-neutral-600 font-normal leading-relaxed max-w-xl">
                {portfolioData.personal.heroShortBio}
              </p>

              {/* CTA Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 text-xs sm:text-sm font-semibold text-white bg-neutral-900 rounded-full hover:bg-neutral-800 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-sm"
                >
                  <span>VIEW MY WORK</span>
                  <ArrowDown className="w-4 h-4" />
                </a>

                <button
                  onClick={onResumeClick}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 text-xs sm:text-sm font-semibold text-neutral-900 bg-white border border-neutral-300 rounded-full hover:bg-neutral-100 hover:border-neutral-400 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-2xs cursor-pointer"
                >
                  <FileText className="w-4 h-4 text-neutral-700" />
                  <span>VIEW RESUME</span>
                </button>

                <a
                  href="#certificates"
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-3 text-xs sm:text-sm font-semibold text-neutral-700 bg-[#FAF9F5] border border-neutral-200 rounded-full hover:bg-neutral-100 transition-colors shadow-2xs"
                >
                  <Award className="w-4 h-4 text-amber-600" />
                  <span>8 Verified Certifications</span>
                </a>
              </div>

              {/* Quick Trust Highlights */}
              <div className="pt-3 flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-neutral-500 border-t border-neutral-200/60">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-neutral-400" />
                  <span>{portfolioData.personal.location}</span>
                </span>
                <span>·</span>
                <span className="font-mono text-neutral-800 font-medium">B.Tech (2029)</span>
                <span>·</span>
                <span className="text-neutral-800 font-medium">Red Hat Ansible & Python</span>
              </div>
            </div>

            {/* Right Column: Permanent Profile Photo Card */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center">
              <div className="relative w-full max-w-sm aspect-4/5 sm:aspect-3/4 rounded-3xl sm:rounded-[2.2rem] bg-gradient-to-b from-[#FAF9F5] to-[#F0EFEB] border border-neutral-200/90 p-4 sm:p-5 flex flex-col items-center justify-center shadow-[0_12px_36px_rgba(0,0,0,0.04)] group transition-all duration-300 hover:shadow-lg">
                
                {/* Floating Tag */}
                <div className="absolute top-4 sm:top-6 right-4 sm:right-6 z-10 inline-flex items-center gap-1.5 px-3 py-1 bg-white/95 backdrop-blur-xs border border-neutral-200 rounded-full text-[11px] font-medium text-neutral-800 shadow-2xs">
                  <span>Ankit Srivastava</span>
                  <span className="text-xs">👋</span>
                </div>

                {/* Permanent Photo Canvas */}
                <div className="w-full h-full rounded-2xl sm:rounded-[1.7rem] bg-[#0f172a] border border-neutral-200/80 overflow-hidden flex flex-col items-center justify-center relative text-center">
                  <div className="relative w-full h-full min-h-[320px] sm:min-h-[380px] flex items-center justify-center bg-[#0f172a] overflow-hidden">
                    <img
                      src={permanentProfilePhoto}
                      alt="Ankit Srivastava - Professional Profile"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Subtle gradient scrim at bottom for text readability */}
                    <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/85 via-black/40 to-transparent pointer-events-none" />

                    {/* Bottom caption overlay */}
                    <div className="absolute bottom-3 inset-x-3 flex items-center justify-between text-white text-[11px] font-mono px-2">
                      <span className="font-semibold drop-shadow-sm">NIET Greater Noida</span>
                      <span className="bg-emerald-500 text-white font-bold px-2 py-0.5 rounded-full text-[10px] shadow-xs">
                        CGPA: {portfolioData.personal.cgpa}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Corner detail star */}
                <div className="absolute -bottom-3 -left-3 w-8 h-8 rounded-full bg-white border border-neutral-200 flex items-center justify-center text-neutral-700 text-xs shadow-xs hidden sm:flex">
                  ✦
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
