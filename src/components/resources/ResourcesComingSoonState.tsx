import React from 'react';
import { Layers, FileCode, CheckCircle2, Sliders, Database, ShieldAlert } from 'lucide-react';

export const ResourcesComingSoonState: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-[#F8FAF8] border-b border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Editorial Statement */}
          <div className="lg:col-span-6">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#00695C]" />
              <span className="text-xs font-mono uppercase tracking-widest text-[#00695C] font-semibold">
                EDITORIAL INTEGRITY
              </span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#191C1B] tracking-tight leading-[1.12] mb-6">
              We&rsquo;re building the library.
            </h2>

            <p className="text-base sm:text-lg text-[#3F4946] leading-relaxed mb-5">
              Useful resources take more than filling a page. We&rsquo;re building practical material around the workflows DialPulse is designed to help teams manage.
            </p>

            <p className="text-sm sm:text-base text-slate-500 leading-relaxed mb-8">
              More guides, product explainers and customer stories will appear here as they&rsquo;re ready.
            </p>

            <div className="border-l-2 border-[#00695C] pl-4 py-1 text-xs font-mono text-slate-600 bg-teal-50/50 rounded-r-lg">
              <span className="font-bold text-[#00695C]">PUBLICATION PRINCIPLE:</span> We publish technical accuracy and operational reality. No placeholder word counts or promotional fluff.
            </div>
          </div>

          {/* Right Column: Branded Document/Content-System Visual Built from Interface Elements */}
          <div className="lg:col-span-6">
            <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-6 sm:p-8 relative">
              {/* Header Bar */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-6">
                <div className="flex items-center gap-2.5">
                  <div className="w-3 h-3 rounded-full bg-slate-200" />
                  <div className="w-3 h-3 rounded-full bg-slate-200" />
                  <div className="w-3 h-3 rounded-full bg-slate-200" />
                  <span className="text-xs font-mono text-slate-400 ml-2">editorial_spec.ts</span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200 font-semibold">
                  STATUS: COMPOSING
                </span>
              </div>

              {/* Interface Document Mockup */}
              <div className="space-y-4">
                {/* Module 1: Research & Reality */}
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-lg bg-teal-50 text-[#00695C] flex items-center justify-center">
                        <Sliders className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-900 font-mono">
                          01. GROUNDED IN REAL WORKFLOWS
                        </div>
                        <div className="text-[11px] text-slate-500">
                          Verified against actual multi-tenant communication constraints
                        </div>
                      </div>
                    </div>
                    <CheckCircle2 className="w-4 h-4 text-[#00695C] shrink-0 mt-1" />
                  </div>
                </div>

                {/* Module 2: Architectural Clarity */}
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-lg bg-indigo-50 text-[#1F3A5F] flex items-center justify-center">
                        <Database className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-900 font-mono">
                          02. ACCESSIBLE TECHNICAL DEPTH
                        </div>
                        <div className="text-[11px] text-slate-500">
                          Explaining tenant isolation, role boundaries, and audit logic
                        </div>
                      </div>
                    </div>
                    <CheckCircle2 className="w-4 h-4 text-[#00695C] shrink-0 mt-1" />
                  </div>
                </div>

                {/* Module 3: Operational Boundaries */}
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center">
                        <ShieldAlert className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-900 font-mono">
                          03. REAL SAFEGUARDS OVER HYPE
                        </div>
                        <div className="text-[11px] text-slate-500">
                          Clear distinction between technical safeguards and legal compliance
                        </div>
                      </div>
                    </div>
                    <CheckCircle2 className="w-4 h-4 text-[#00695C] shrink-0 mt-1" />
                  </div>
                </div>
              </div>

              {/* Document Footer Bar */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1.5">
                  <FileCode className="w-3.5 h-3.5 text-slate-400" />
                  <span>DIALPULSE KNOWLEDGE BASE</span>
                </span>
                <span>SYSTEM VERSION 2026.1</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
