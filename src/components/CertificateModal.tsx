import React from 'react';
import { Certificate, portfolioData } from '../data/portfolioData';
import { X, Award, CheckCircle, ExternalLink, Calendar, BookOpen, ShieldCheck } from 'lucide-react';

interface CertificateModalProps {
  certificate: Certificate | null;
  isOpen: boolean;
  onClose: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({ certificate, isOpen, onClose }) => {
  if (!isOpen || !certificate) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-neutral-950/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-neutral-200 overflow-hidden flex flex-col z-10">
        {/* Header */}
        <div className="px-6 py-4 border-b border-neutral-200 flex items-center justify-between bg-[#F7F7F5]">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span className="text-xs uppercase tracking-wider font-semibold text-neutral-600">
              Verified Credential
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

        {/* Certificate Display Canvas */}
        <div className="p-6 sm:p-8 space-y-6">
          <div className="p-6 bg-[#FAF9F5] border-2 border-dashed border-neutral-300 rounded-2xl relative text-center space-y-3">
            <div className="w-12 h-12 rounded-full bg-white border border-neutral-200 flex items-center justify-center mx-auto shadow-2xs">
              <Award className="w-6 h-6 text-neutral-900" />
            </div>

            <div className="text-[11px] uppercase tracking-widest text-neutral-400 font-semibold">
              Certificate of Completion & Technical Proficiency
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 font-serif">
              {certificate.title}
            </h3>

            <p className="text-xs sm:text-sm text-neutral-600 max-w-md mx-auto">
              Awarded to <span className="font-semibold text-neutral-900">Ankit Srivastava</span> in recognition of successful completion and algorithmic mastery.
            </p>

            <div className="pt-2 flex items-center justify-center gap-4 text-xs text-neutral-500 border-t border-neutral-200/80">
              <span>Issued: {certificate.issuer}</span>
              <span>·</span>
              <span>Year: {certificate.date}</span>
            </div>
          </div>

          {/* Curriculum Scope */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400">
              Coursework & Domains Covered
            </h4>
            <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
              {certificate.summary}
            </p>
          </div>

          {/* Verified Competencies */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400">
              Verified Competencies
            </h4>
            <div className="flex flex-wrap gap-2">
              {certificate.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-[#F7F7F5] border border-neutral-200 rounded-lg text-xs font-medium text-neutral-800"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 sm:p-5 border-t border-neutral-200 bg-[#F7F7F5] flex flex-wrap items-center justify-between gap-3">
          <a
            href={portfolioData.socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-800 hover:text-neutral-900 underline"
          >
            <span>Verify on LinkedIn Profile</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-white bg-neutral-900 rounded-xl hover:bg-neutral-800 transition-colors shadow-2xs cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
