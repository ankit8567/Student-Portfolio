import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { permanentProfilePhoto } from '../assets/profileImage';
import { ArrowRight, CheckCircle2, Terminal, Brain, Code, Database, Sparkles, BookOpen, GraduationCap, Award } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 sm:mb-16 pb-4 border-b border-neutral-200/80">
          <div>
            <span className="text-xs uppercase tracking-widest text-neutral-400 font-semibold font-mono">
              01 // BACKGROUND
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-neutral-900 font-serif tracking-tight mt-1">
              A LITTLE ABOUT ME
            </h2>
          </div>
          <div className="mt-2 sm:mt-0 text-xs sm:text-sm text-neutral-500 font-mono">
            NIET GREATER NOIDA · 1ST YEAR CGPA: {portfolioData.personal.cgpa}
          </div>
        </div>

        {/* Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Editorial Text & Interests */}
          <div className="lg:col-span-7 space-y-7">
            <div className="space-y-4 text-base sm:text-lg text-neutral-700 leading-relaxed font-normal">
              <p>
                I am a{' '}
                <strong className="font-semibold text-neutral-900 underline decoration-neutral-300 decoration-2 underline-offset-4">
                  Computer Science and Engineering undergraduate
                </strong>{' '}
                at{' '}
                <span className="text-neutral-900 font-semibold">
                  Noida Institute of Engineering and Technology (NIET)
                </span>
                , holding a{' '}
                <strong className="text-emerald-800 font-bold bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                  1st Year CGPA of 9.2 / 10
                </strong>
                .
              </p>
              
              <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
                I possess a strong foundation in <span className="text-neutral-900 font-medium">Python</span>,{' '}
                <span className="text-neutral-900 font-medium">Java</span>, and{' '}
                <span className="text-neutral-900 font-medium">C</span>, alongside hands-on expertise in{' '}
                <span className="text-neutral-900 font-medium">Linux automation using Red Hat Ansible</span>,{' '}
                <span className="text-neutral-900 font-medium">responsive web development</span>, and{' '}
                <span className="text-neutral-900 font-medium">algorithm design</span>.
              </p>

              <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
                My approach is driven by writing clean, efficient, and well-documented code with sound time and space complexity analysis, demonstrated through my internships at <span className="text-neutral-800 font-medium">Skill Nexis</span> and virtual simulations with <span className="text-neutral-800 font-medium">Deloitte Australia</span> and <span className="text-neutral-800 font-medium">Forage</span>.
              </p>
            </div>

            {/* Core Areas of Focus */}
            <div className="pt-2">
              <h3 className="text-xs uppercase tracking-wider font-bold text-neutral-400 mb-4 font-mono">
                CORE TECHNICAL INTERESTS & COMPETENCIES:
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {portfolioData.interests.map((interest, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 bg-white/80 border border-neutral-200/90 rounded-2xl flex items-center gap-3 shadow-2xs hover:border-neutral-300 transition-colors"
                  >
                    <div className="w-6 h-6 rounded-full bg-neutral-100 flex items-center justify-center shrink-0">
                      <span className="text-[10px] font-mono font-bold text-neutral-700">0{idx + 1}</span>
                    </div>
                    <span className="text-xs sm:text-sm font-medium text-neutral-800">
                      {interest}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Engineering philosophy quote */}
            <div className="p-5 bg-white border-l-2 border-neutral-900 rounded-r-2xl shadow-2xs">
              <p className="text-xs sm:text-sm italic text-neutral-700 font-serif">
                "Focused on applying sound time and space complexity analysis, writing maintainable code, and automating systems with idempotent engineering practices."
              </p>
            </div>
          </div>

          {/* Right Column: Visual Academic Card / Highlights */}
          <div className="lg:col-span-5">
            <div className="bg-white border border-neutral-200/90 rounded-3xl p-6 sm:p-8 space-y-6 shadow-[0_8px_30px_rgba(0,0,0,0.03)]">
              
              <div className="flex items-center justify-between pb-4 border-b border-neutral-200">
                <span className="text-xs font-mono font-semibold text-neutral-500 uppercase flex items-center gap-1.5">
                  <GraduationCap className="w-4 h-4 text-neutral-800" />
                  <span>ACADEMIC STANDING</span>
                </span>
                <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-mono">
                  CGPA: 9.2
                </span>
              </div>

              {/* Student Identity Card */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-[#0f172a] border border-neutral-200 overflow-hidden flex items-center justify-center shrink-0 shadow-2xs">
                    <img
                      src={permanentProfilePhoto}
                      alt="Ankit Srivastava"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-neutral-900">{portfolioData.personal.name}</h4>
                    <p className="text-xs text-neutral-500">{portfolioData.personal.college}</p>
                  </div>
                </div>

                <div className="p-3.5 bg-[#FAF9F5] rounded-xl text-xs text-neutral-600 leading-relaxed border border-neutral-200/60 space-y-1">
                  <div className="flex justify-between font-semibold text-neutral-800">
                    <span>Degree: B.Tech Computer Science & Eng.</span>
                    <span className="font-mono text-neutral-500">Grad: 2029</span>
                  </div>
                  <p className="text-[11px] text-neutral-500 pt-0.5">
                    Coursework: DSA, OOP, OS, Linux Fundamentals, DBMS, Computer Networks.
                  </p>
                </div>
              </div>

              {/* Metric Highlights Grid */}
              <div className="grid grid-cols-2 gap-3 pt-1">
                <div className="p-3.5 bg-emerald-50/70 rounded-2xl border border-emerald-200/80">
                  <div className="text-2xl font-bold font-mono text-emerald-900">9.2</div>
                  <div className="text-xs text-emerald-700 font-medium mt-0.5">1st Year CGPA</div>
                </div>
                <div className="p-3.5 bg-[#FAF9F5] rounded-2xl border border-neutral-200/80">
                  <div className="text-2xl font-bold font-mono text-neutral-900">8</div>
                  <div className="text-xs text-neutral-500 mt-0.5">Verified Certifications</div>
                </div>
                <div className="p-3.5 bg-[#FAF9F5] rounded-2xl border border-neutral-200/80">
                  <div className="text-2xl font-bold font-mono text-neutral-900">168+</div>
                  <div className="text-xs text-neutral-500 mt-0.5">LeetCode Solved</div>
                </div>
                <div className="p-3.5 bg-[#FAF9F5] rounded-2xl border border-neutral-200/80">
                  <div className="text-2xl font-bold font-mono text-neutral-900">RH294</div>
                  <div className="text-xs text-neutral-500 mt-0.5">Red Hat Ansible Cert</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex gap-2">
                <a
                  href="#certificates"
                  className="flex-1 flex items-center justify-center gap-1.5 py-2.5 text-xs font-semibold text-neutral-800 bg-[#F7F7F5] border border-neutral-200 hover:bg-neutral-100 rounded-xl transition-colors"
                >
                  <Award className="w-3.5 h-3.5 text-amber-600" />
                  <span>View Certifications</span>
                </a>
                <a
                  href="#contact"
                  className="flex-1 flex items-center justify-center gap-1.5 py-2.5 text-xs font-semibold text-white bg-neutral-900 hover:bg-neutral-800 rounded-xl transition-colors"
                >
                  <span>Connect</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
