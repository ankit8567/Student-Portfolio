import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Mail, Linkedin, Code2, MapPin, Send, Copy, Check, ArrowUpRight, Instagram, Phone } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [sentNotice, setSentNotice] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(portfolioData.personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(portfolioData.personal.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`SDE Opportunity / Technical Inquiry from ${formState.name || 'Visitor'}`);
    const body = encodeURIComponent(
      `Hi Ankit,\n\nName: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}\n\nRegards`
    );
    window.location.href = `mailto:${portfolioData.personal.email}?subject=${subject}&body=${body}`;
    setSentNotice(true);
    setTimeout(() => setSentNotice(false), 4000);
  };

  return (
    <section id="contact" className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Large Rounded Contact Island */}
        <div className="relative bg-white border border-neutral-200/90 rounded-3xl sm:rounded-[2.8rem] p-8 sm:p-12 lg:p-16 shadow-[0_12px_40px_rgba(0,0,0,0.03)] overflow-hidden">
          
          <div className="absolute top-8 right-8 text-neutral-300 text-lg select-none hidden sm:block">
            ✦
          </div>

          <div className="max-w-3xl mx-auto text-center space-y-6 sm:space-y-8">
            
            {/* Friendly Handshake / Mail Icon */}
            <div className="w-14 h-14 rounded-2xl bg-[#FAF9F5] border border-neutral-200 flex items-center justify-center mx-auto shadow-2xs">
              <Mail className="w-7 h-7 text-neutral-900" />
            </div>

            {/* Editorial Heading */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-normal text-neutral-900 font-serif tracking-tight leading-[0.95]">
              LET'S BUILD SOMETHING <br />
              <span className="italic">TOGETHER</span>
            </h2>

            {/* Subtext */}
            <p className="text-sm sm:text-base lg:text-lg text-neutral-600 max-w-xl mx-auto leading-relaxed">
              Seeking SDE Intern and Software Engineer Trainee opportunities. Have a project idea, question, or want to connect? Feel free to reach out.
            </p>

            {/* Primary Action Buttons (No WhatsApp, with LinkedIn, LeetCode, Instagram, Email) */}
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 pt-2">
              <a
                href={portfolioData.socialLinks.email}
                className="inline-flex items-center gap-2 px-6 py-3 text-xs sm:text-sm font-semibold text-white bg-neutral-900 rounded-full hover:bg-neutral-800 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-sm"
              >
                <Mail className="w-4 h-4" />
                <span>EMAIL ME</span>
              </a>

              <a
                href={portfolioData.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 text-xs sm:text-sm font-semibold text-neutral-800 bg-white border border-neutral-300 rounded-full hover:bg-neutral-100 hover:border-neutral-400 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-2xs"
              >
                <Linkedin className="w-4 h-4 text-blue-700" />
                <span>LINKEDIN</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400" />
              </a>

              <a
                href={portfolioData.socialLinks.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 text-xs sm:text-sm font-semibold text-neutral-800 bg-white border border-neutral-300 rounded-full hover:bg-neutral-100 hover:border-neutral-400 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-2xs"
              >
                <Code2 className="w-4 h-4 text-amber-600" />
                <span>LEETCODE</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400" />
              </a>

              <a
                href={portfolioData.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 text-xs sm:text-sm font-semibold text-neutral-800 bg-white border border-neutral-300 rounded-full hover:bg-neutral-100 hover:border-neutral-400 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-2xs"
              >
                <Instagram className="w-4 h-4 text-rose-600" />
                <span>INSTAGRAM</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400" />
              </a>
            </div>

            {/* Explicit Contact Details Bar */}
            <div className="pt-6 border-t border-neutral-200/80 flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-xs sm:text-sm text-neutral-600 font-mono">
              <div className="flex items-center gap-2">
                <span className="text-neutral-400 uppercase">Email:</span>
                <button
                  onClick={handleCopyEmail}
                  className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 flex items-center gap-1 cursor-pointer"
                >
                  <span>{portfolioData.personal.email}</span>
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-neutral-400" />}
                </button>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-neutral-400 uppercase">Phone:</span>
                <button
                  onClick={handleCopyPhone}
                  className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 flex items-center gap-1 cursor-pointer"
                >
                  <Phone className="w-3.5 h-3.5 text-neutral-500" />
                  <span>{portfolioData.personal.phone}</span>
                  {copiedPhone ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-neutral-400" />}
                </button>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-neutral-400 uppercase">Location:</span>
                <span className="font-medium text-neutral-900 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-neutral-500" />
                  <span>{portfolioData.personal.location}</span>
                </span>
              </div>
            </div>

            {/* Quick Note Form */}
            <div className="mt-8 pt-8 border-t border-neutral-100 max-w-lg mx-auto text-left">
              <h4 className="text-xs uppercase font-mono font-bold tracking-wider text-neutral-400 mb-3 text-center">
                SEND A DIRECT MESSAGE
              </h4>
              <form onSubmit={handleFormSubmit} className="space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="text"
                    required
                    placeholder="Your Name"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs bg-[#FAF9F5] border border-neutral-300 rounded-xl focus:outline-neutral-900 text-neutral-900"
                  />
                  <input
                    type="email"
                    required
                    placeholder="Your Email"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs bg-[#FAF9F5] border border-neutral-300 rounded-xl focus:outline-neutral-900 text-neutral-900"
                  />
                </div>
                <textarea
                  required
                  rows={3}
                  placeholder="Describe your internship opportunity or engineering project inquiry..."
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-xs bg-[#FAF9F5] border border-neutral-300 rounded-xl focus:outline-neutral-900 text-neutral-900 resize-none"
                />
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-2.5 text-xs font-semibold text-white bg-neutral-900 hover:bg-neutral-800 rounded-xl transition-colors cursor-pointer shadow-xs"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Message via Email Client</span>
                </button>
                {sentNotice && (
                  <p className="text-[11px] text-emerald-600 text-center font-medium">
                    Opening your default email application...
                  </p>
                )}
              </form>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
