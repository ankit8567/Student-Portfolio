import React, { useState } from 'react';
import { GitBranch, Sparkles, Terminal, CheckCircle2, ArrowRight, BarChart3, Database, Cpu, ShieldCheck, Server, ExternalLink, Github } from 'lucide-react';

interface MockupPreviewProps {
  type: 'academic' | 'ansible' | 'portfolio' | 'dsa' | 'todo';
  title: string;
  thumbnailUrl?: string;
  githubUrl?: string;
  liveUrl?: string;
}

export const MockupPreview: React.FC<MockupPreviewProps> = ({
  type,
  title,
  thumbnailUrl,
  githubUrl,
  liveUrl,
}) => {
  const [imgError, setImgError] = useState(false);

  // If a real thumbnail exists and hasn't failed to load, display the real GitHub thumbnail
  if (thumbnailUrl && !imgError) {
    return (
      <div className="w-full h-full min-h-[260px] sm:min-h-[320px] bg-[#12161f] border border-neutral-200/90 rounded-2xl sm:rounded-3xl overflow-hidden flex flex-col font-sans select-none shadow-[0_8px_30px_rgba(0,0,0,0.04)] group/thumb">
        {/* Browser Top Bar */}
        <div className="px-4 py-2.5 bg-[#1b2230] border-b border-neutral-800 flex items-center justify-between text-xs text-neutral-400">
          <div className="flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
          </div>
          <div className="px-3 py-0.5 bg-neutral-900/80 border border-neutral-700/60 rounded-md text-[11px] font-mono text-neutral-300 truncate max-w-[220px] sm:max-w-sm flex items-center gap-1.5">
            <span className="text-emerald-400 font-bold">●</span>
            <span className="truncate">
              {liveUrl?.replace('https://', '') || githubUrl?.replace('https://', '')}
            </span>
          </div>
          <div className="text-[10px] text-neutral-400 font-mono hidden sm:flex items-center gap-1">
            <span className="px-1.5 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-800/80 font-bold">
              VERIFIED REPO
            </span>
          </div>
        </div>

        {/* Real Thumbnail Graphic */}
        <div className="relative flex-1 bg-neutral-950 overflow-hidden flex items-center justify-center">
          <img
            src={thumbnailUrl}
            alt={`${title} Real GitHub Thumbnail`}
            referrerPolicy="no-referrer"
            onError={() => setImgError(true)}
            className="w-full h-full object-cover object-center transition-transform duration-700 group-hover/thumb:scale-105"
          />

          {/* Interactive hover overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-80 group-hover/thumb:opacity-95 transition-opacity flex flex-col justify-end p-4 sm:p-5">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-[10px] uppercase font-mono tracking-wider text-emerald-400 font-semibold block">
                  Official GitHub Project
                </span>
                <h4 className="text-sm sm:text-base font-semibold text-white drop-shadow-sm line-clamp-1">
                  {title}
                </h4>
              </div>

              {liveUrl && (
                <span className="inline-flex items-center gap-1 px-3 py-1 bg-white text-neutral-900 text-xs font-semibold rounded-full shadow-md shrink-0">
                  <span>Live App</span>
                  <ExternalLink className="w-3 h-3" />
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Simulated code/architecture fallback view
  return (
    <div className="w-full h-full min-h-[260px] sm:min-h-[320px] bg-[#FAF9F5] border border-neutral-200/90 rounded-2xl overflow-hidden flex flex-col font-sans select-none shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
      {/* Browser / Shell Top Bar */}
      <div className="px-4 py-2.5 bg-[#F0EFEB] border-b border-neutral-200/80 flex items-center justify-between text-xs text-neutral-500">
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-neutral-300" />
          <div className="w-2.5 h-2.5 rounded-full bg-neutral-300" />
          <div className="w-2.5 h-2.5 rounded-full bg-neutral-300" />
        </div>
        <div className="px-3 py-0.5 bg-white/70 border border-neutral-200 rounded-md text-[11px] font-mono text-neutral-600 truncate max-w-[200px] sm:max-w-xs">
          {type === 'academic' && 'github.com/ankit8567/Smart-Academic-Recommendation-System'}
          {type === 'ansible' && 'rhel-node01:~/ansible/playbooks/site.yml'}
          {type === 'portfolio' && 'github.com/ankit8567/Student-Portfolio'}
          {type === 'todo' && 'to-do-list-roan-phi.vercel.app'}
          {type === 'dsa' && 'python -m dsa_suite.graph_benchmark'}
        </div>
        <div className="text-[10px] text-neutral-400 font-mono hidden sm:block">STATUS: 200 OK</div>
      </div>

      {/* Content Canvas */}
      <div className="p-4 sm:p-6 flex-1 flex flex-col justify-between bg-white/70">
        {type === 'academic' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-neutral-200/80">
              <div>
                <div className="text-xs uppercase tracking-wider text-neutral-400 font-semibold font-mono">
                  Smart Academic Recommendation System
                </div>
                <div className="text-sm sm:text-base font-semibold text-neutral-900">
                  Curriculum Planner & Career Roadmap Engine
                </div>
              </div>
              <div className="text-right">
                <span className="text-[11px] text-neutral-500">Live Status</span>
                <div className="text-sm font-bold text-emerald-700 font-mono">VERCEL LIVE</div>
              </div>
            </div>

            {/* Course Node Tree */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              <div className="p-3 bg-[#F7F7F5] rounded-xl border border-neutral-200/80">
                <div className="flex items-center justify-between text-[11px] text-neutral-500">
                  <span>Prerequisite 01</span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                </div>
                <div className="font-semibold text-xs text-neutral-900 mt-1">Data Structures & Algo</div>
                <div className="text-[10px] text-neutral-500 mt-0.5">Topological Ordering</div>
              </div>

              <div className="p-3 bg-[#F7F7F5] rounded-xl border border-neutral-200/80">
                <div className="flex items-center justify-between text-[11px] text-neutral-500">
                  <span>Academic Standing</span>
                  <span className="font-mono text-emerald-700 font-bold text-xs">9.2 CGPA</span>
                </div>
                <div className="font-semibold text-xs text-neutral-900 mt-1">NIET 1st Year Metrics</div>
                <div className="text-[10px] text-neutral-500 mt-0.5">Automated Roadmaps</div>
              </div>

              <div className="p-3 bg-neutral-900 text-white rounded-xl border border-neutral-900 shadow-sm">
                <div className="flex items-center justify-between text-[11px] text-neutral-300">
                  <span>Recommendation</span>
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                </div>
                <div className="font-semibold text-xs text-white mt-1">Advanced Systems Track</div>
                <div className="text-[10px] text-neutral-300 mt-0.5">Zero Conflict Path</div>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-3 text-[11px] text-neutral-600">
              <span className="flex items-center gap-1 font-mono text-neutral-800">
                <Cpu className="w-3 h-3 text-neutral-500" />
                Gemini API & TypeScript
              </span>
              <span>·</span>
              <span className="text-emerald-700 font-medium">ankit8567 GitHub Repository</span>
            </div>
          </div>
        )}

        {type === 'todo' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-neutral-200/80">
              <div>
                <div className="text-xs uppercase tracking-wider text-neutral-400 font-semibold font-mono">
                  To-Do Task Productivity Dashboard
                </div>
                <div className="text-sm sm:text-base font-semibold text-neutral-900">
                  Interactive Task Scheduling & State Persistence
                </div>
              </div>
              <div className="px-2.5 py-1 bg-emerald-100 rounded-lg text-xs font-mono font-medium text-emerald-800">
                Active Vercel App
              </div>
            </div>

            <div className="space-y-2">
              <div className="p-2.5 bg-[#F7F7F5] rounded-xl border border-neutral-200 flex items-center justify-between text-xs">
                <span className="flex items-center gap-2 text-neutral-800 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Review Red Hat Ansible Automation Playbooks</span>
                </span>
                <span className="text-[10px] font-mono text-neutral-500 bg-neutral-200/60 px-2 py-0.5 rounded">High Priority</span>
              </div>

              <div className="p-2.5 bg-[#F7F7F5] rounded-xl border border-neutral-200 flex items-center justify-between text-xs">
                <span className="flex items-center gap-2 text-neutral-800 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>LeetCode Daily Problem & Complexity Analysis</span>
                </span>
                <span className="text-[10px] font-mono text-neutral-500 bg-neutral-200/60 px-2 py-0.5 rounded">Completed</span>
              </div>
            </div>

            <div className="flex items-center justify-between text-[11px] text-neutral-500 pt-1">
              <span>to-do-list-roan-phi.vercel.app</span>
              <span>·</span>
              <span className="text-neutral-900 font-medium">Responsive Mobile-First UI</span>
            </div>
          </div>
        )}

        {type === 'ansible' && (
          <div className="space-y-4 font-mono text-xs">
            <div className="flex items-center justify-between pb-3 border-b border-neutral-200/80 font-sans">
              <div>
                <div className="text-xs uppercase tracking-wider text-neutral-400 font-semibold font-mono">
                  Red Hat Enterprise Linux
                </div>
                <div className="text-sm sm:text-base font-semibold text-neutral-900 font-sans">
                  Ansible Automation & Configuration Engine
                </div>
              </div>
              <div className="px-2.5 py-1 bg-neutral-100 rounded-lg text-xs font-mono font-medium text-neutral-700 flex items-center gap-1.5">
                <Server className="w-3 h-3 text-emerald-600" />
                <span>3 Nodes Synchronized</span>
              </div>
            </div>

            <div className="p-3 bg-neutral-950 text-neutral-200 rounded-xl space-y-1.5 shadow-inner">
              <div className="text-neutral-400 text-[11px]">
                $ ansible-playbook -i inventory/hosts site.yml --check
              </div>
              <div className="text-emerald-400 text-[11px] flex items-center justify-between">
                <span>TASK [common : Ensure Idempotent Package Deployment]</span>
                <span className="text-neutral-400">[ok: node01, node02, node03]</span>
              </div>
              <div className="text-amber-300 text-[11px] flex items-center justify-between">
                <span>TASK [security : Enforce SSH hardening & user groups]</span>
                <span className="text-neutral-400">[changed: node01, node02]</span>
              </div>
              <div className="text-neutral-400 text-[10px] pt-1 border-t border-neutral-800">
                PLAY RECAP: ok=14 changed=4 unreachable=0 failed=0 (RH294 Certified Standard)
              </div>
            </div>
          </div>
        )}

        {type === 'portfolio' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-neutral-200/80">
              <div>
                <div className="text-xs uppercase tracking-wider text-neutral-400 font-semibold font-mono">
                  Student Developer Portfolio Platform
                </div>
                <div className="text-sm sm:text-base font-semibold text-neutral-900">
                  Minimalist Editorial Architecture & High Responsiveness
                </div>
              </div>
              <div className="text-xs font-medium text-neutral-600 bg-neutral-100 px-2 py-0.5 rounded font-mono">
                HTML5 · CSS3 · JS
              </div>
            </div>

            <div className="p-4 bg-[#F7F7F5] rounded-xl border border-neutral-200/80 space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="font-serif text-lg tracking-tight text-neutral-900">ANKIT SRIVASTAVA</span>
                <span className="text-[11px] text-neutral-500 font-mono">NIET · 9.2 CGPA</span>
              </div>
            </div>

            <div className="flex items-center justify-between text-[11px] text-neutral-500 pt-1">
              <span>github.com/ankit8567/Student-Portfolio</span>
              <span>·</span>
              <span className="text-neutral-900 font-medium">Deployed & Version Controlled</span>
            </div>
          </div>
        )}

        {type === 'dsa' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-neutral-200/80">
              <div>
                <div className="text-xs uppercase tracking-wider text-neutral-400 font-semibold font-mono">
                  Core Computer Science Implementations
                </div>
                <div className="text-sm sm:text-base font-semibold text-neutral-900">
                  Data Structures & Algorithm Benchmark Suite
                </div>
              </div>
              <div className="text-xs font-mono text-neutral-500">Python 3.12</div>
            </div>

            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="p-2.5 bg-[#F7F7F5] rounded-xl border border-neutral-200/80">
                <div className="font-semibold text-neutral-900">Tree & Graph Traversals</div>
                <div className="text-[10px] text-neutral-500 font-mono mt-0.5">BFS, DFS, Dijkstra · O(V + E)</div>
              </div>
              <div className="p-2.5 bg-[#F7F7F5] rounded-xl border border-neutral-200/80">
                <div className="font-semibold text-neutral-900">Sorting & Searching</div>
                <div className="text-[10px] text-neutral-500 font-mono mt-0.5">Quick, Merge, Binary · O(n log n)</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
