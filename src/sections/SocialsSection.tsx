import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Linkedin, Github, Code2, Mail, ArrowUpRight, Copy, Check, Instagram } from 'lucide-react';

export const SocialsSection: React.FC = () => {
  const [copiedLink, setCopiedLink] = React.useState<string | null>(null);

  const handleCopy = (link: string, name: string) => {
    navigator.clipboard.writeText(link);
    setCopiedLink(name);
    setTimeout(() => setCopiedLink(null), 2000);
  };

  const socials = [
    {
      name: 'LinkedIn',
      handle: 'ankit-srivastava-a65a23389',
      url: portfolioData.socialLinks.linkedin,
      icon: Linkedin,
      desc: 'Professional connections, verified licenses & career updates',
    },
    {
      name: 'GitHub',
      handle: '@ankit8567',
      url: portfolioData.socialLinks.github,
      icon: Github,
      desc: 'Open source repositories, algorithms & Ansible automation playbooks',
    },
    {
      name: 'LeetCode',
      handle: '@Ankit2904',
      url: portfolioData.socialLinks.leetcode,
      icon: Code2,
      desc: '168+ solved DSA problems, algorithmic streaks & complexity optimizations',
    },
    {
      name: 'Instagram',
      handle: `@${portfolioData.socialLinks.instagramHandle}`,
      url: portfolioData.socialLinks.instagram,
      icon: Instagram,
      desc: 'Personal updates, creative pursuits & social connection',
    },
    {
      name: 'Email',
      handle: portfolioData.personal.email,
      url: portfolioData.socialLinks.email,
      icon: Mail,
      desc: 'Direct inquiries, SDE internship offers & technical collaboration',
    },
  ];

  return (
    <section className="py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 sm:mb-12 pb-4 border-b border-neutral-200">
          <div>
            <span className="text-xs uppercase tracking-widest text-neutral-400 font-semibold font-mono">
              07 // NETWORKS & CHANNELS
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-neutral-900 font-serif tracking-tight mt-1">
              CONNECT ACROSS THE WEB
            </h2>
          </div>
          <span className="text-xs font-mono text-neutral-500 mt-2 sm:mt-0">
            DIRECT PROFILES & CHANNELS
          </span>
        </div>

        {/* Minimal Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {socials.map((item) => {
            const Icon = item.icon;
            const isCopied = copiedLink === item.name;

            return (
              <div
                key={item.name}
                className="bg-white border border-neutral-200/90 rounded-2xl p-5 flex flex-col justify-between hover:border-neutral-400 hover:shadow-xs transition-all group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-9 h-9 rounded-xl bg-[#FAF9F5] border border-neutral-200 flex items-center justify-center text-neutral-900 group-hover:scale-105 transition-transform">
                      <Icon className="w-4 h-4" />
                    </div>
                    <button
                      onClick={() => handleCopy(item.url.replace('mailto:', ''), item.name)}
                      title="Copy handle"
                      className="p-1 text-neutral-400 hover:text-neutral-900 rounded transition-colors text-xs"
                    >
                      {isCopied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>

                  <div>
                    <h3 className="font-semibold text-sm text-neutral-900 flex items-center gap-1.5">
                      <span>{item.name}</span>
                    </h3>
                    <p className="text-xs text-neutral-500 font-mono mt-0.5 truncate">
                      {item.handle}
                    </p>
                  </div>

                  <p className="text-xs text-neutral-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 mt-3 border-t border-neutral-100">
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-neutral-900 hover:underline"
                  >
                    <span>Visit {item.name}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
