import React, { useState } from 'react';
import { portfolioData, Certificate } from '../data/portfolioData';
import { Award, ShieldCheck, ArrowUpRight, Calendar, CheckCircle2, Linkedin, Terminal, Cpu, Sparkles, BookOpen } from 'lucide-react';

interface CertificationsSectionProps {
  onSelectCertificate: (cert: Certificate) => void;
}

export const CertificationsSection: React.FC<CertificationsSectionProps> = ({
  onSelectCertificate,
}) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');

  const categories = ['All', 'Linux & Systems', 'Programming & DSA', 'AI & Prompt Eng', 'Professional'];

  const filteredCerts = selectedFilter === 'All'
    ? portfolioData.certifications
    : portfolioData.certifications.filter(c => c.category === selectedFilter);

  return (
    <section id="certificates" className="py-20 sm:py-28 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 sm:mb-12 pb-4 border-b border-neutral-200">
          <div>
            <span className="text-xs uppercase tracking-widest text-neutral-400 font-semibold font-mono">
              05 // CREDENTIALS & LICENSES
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-neutral-900 font-serif tracking-tight mt-1">
              CERTIFICATIONS & LICENSES
            </h2>
          </div>
          <div className="mt-2 sm:mt-0 text-left sm:text-right">
            <a
              href={portfolioData.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs sm:text-sm font-mono text-neutral-700 hover:text-neutral-900 underline flex items-center gap-1.5 sm:justify-end"
            >
              <Linkedin className="w-3.5 h-3.5 text-blue-700" />
              <span>Verified on LinkedIn Profile</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-white/80 border border-neutral-200/90 rounded-2xl w-fit mb-10 shadow-2xs">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedFilter(cat)}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-xl transition-all cursor-pointer ${
                selectedFilter === cat
                  ? 'bg-neutral-900 text-white shadow-2xs'
                  : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100'
              }`}
            >
              {cat} {cat === 'All' ? `(${portfolioData.certifications.length})` : ''}
            </button>
          ))}
        </div>

        {/* Certificate Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {filteredCerts.map((cert) => (
            <div
              key={cert.id}
              className="bg-white border border-neutral-200/90 rounded-3xl p-6 flex flex-col justify-between shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_12px_30px_rgba(0,0,0,0.05)] hover:border-neutral-400 transition-all duration-300 group"
            >
              <div className="space-y-4">
                {/* Header Icon & Category */}
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-2xl bg-[#FAF9F5] border border-neutral-200 flex items-center justify-center text-neutral-900 group-hover:scale-105 transition-transform">
                    {cert.category === 'Linux & Systems' && <Terminal className="w-5 h-5 text-red-600" />}
                    {cert.category === 'Programming & DSA' && <Cpu className="w-5 h-5 text-emerald-600" />}
                    {cert.category === 'AI & Prompt Eng' && <Sparkles className="w-5 h-5 text-amber-500" />}
                    {cert.category === 'Professional' && <BookOpen className="w-5 h-5 text-neutral-800" />}
                  </div>
                  <span className="text-[10px] font-mono text-neutral-500 bg-neutral-100 px-2 py-0.5 rounded font-semibold uppercase">
                    {cert.issuer}
                  </span>
                </div>

                {/* Title & Date */}
                <div>
                  <h3 className="text-base font-bold text-neutral-900 font-serif leading-snug group-hover:text-neutral-700 transition-colors">
                    {cert.title}
                  </h3>
                  <div className="flex items-center justify-between text-xs text-neutral-500 mt-1 font-mono">
                    <span>{cert.issuer}</span>
                    <span>{cert.date}</span>
                  </div>
                </div>

                {/* Summary */}
                <p className="text-xs text-neutral-600 leading-relaxed line-clamp-3">
                  {cert.summary}
                </p>

                {/* Skills tags */}
                <div className="flex flex-wrap gap-1 pt-1">
                  {cert.skills.slice(0, 3).map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-0.5 bg-[#FAF9F5] border border-neutral-200/70 rounded text-[10px] font-medium text-neutral-700"
                    >
                      {skill}
                    </span>
                  ))}
                  {cert.skills.length > 3 && (
                    <span className="text-[10px] text-neutral-400 font-mono py-0.5">
                      +{cert.skills.length - 3} more
                    </span>
                  )}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-5 mt-4 border-t border-neutral-100 flex items-center justify-between">
                <span className="text-[11px] text-emerald-700 font-medium flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Verified</span>
                </span>
                <button
                  onClick={() => onSelectCertificate(cert)}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-neutral-900 hover:underline cursor-pointer"
                >
                  <span>Details</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Verification banner */}
        <div className="mt-12 p-6 bg-white border border-neutral-200/90 rounded-3xl flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5 text-emerald-700" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-neutral-900">
                All 8 Certifications Documented on Official Profile
              </h4>
              <p className="text-xs text-neutral-500 font-mono">
                Red Hat (Ansible & Linux), Infosys Springboard (DSA & OOP), AWS, Claude Academy, NASSCOM & NIET.
              </p>
            </div>
          </div>
          <a
            href={portfolioData.socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-neutral-900 rounded-xl hover:bg-neutral-800 transition-colors shadow-2xs shrink-0"
          >
            <Linkedin className="w-3.5 h-3.5" />
            <span>Verify on LinkedIn</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
};
