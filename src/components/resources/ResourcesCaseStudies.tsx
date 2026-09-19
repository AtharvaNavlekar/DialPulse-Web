import React, { useState } from 'react';
import { FolderGit2, Clock, CheckCircle2, X } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export const ResourcesCaseStudies: React.FC = () => {
  const [showNotice, setShowNotice] = useState(false);

  return (
    <section id="case-studies" className="py-16 md:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Container with Asymmetric Border Styling */}
        <div className="bg-[#F8FAF8] border border-slate-200 rounded-3xl p-8 sm:p-12 lg:p-16 relative overflow-hidden">
          
          <div className="max-w-3xl">
            {/* Header Badge */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 border border-slate-300/80 text-slate-700 text-xs font-mono font-semibold uppercase">
                <FolderGit2 className="w-3.5 h-3.5 text-[#00695C]" />
                CASE STUDIES
              </span>

              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-mono font-medium">
                <Clock className="w-3.5 h-3.5 text-amber-600" />
                CASE STUDIES — COMING SOON
              </span>
            </div>

            {/* Headline */}
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#191C1B] tracking-tight leading-[1.1] mb-6">
              The work behind <br />
              <span className="text-[#00695C]">the results.</span>
            </h2>

            {/* Supporting Copy */}
            <p className="text-lg text-[#3F4946] leading-relaxed mb-8">
              When real customer stories are ready, this is where they&rsquo;ll live. We document actual operational architecture, telemetry outcomes, and team transitions rather than generic promotional quotes.
            </p>

            {/* Blueprint Architecture Indicators (What will be published) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10 pt-4 border-t border-slate-200">
              <div className="p-4 rounded-xl bg-white border border-slate-200">
                <div className="text-xs font-mono font-semibold text-[#00695C] mb-1">
                  WORKFLOW TOPOLOGY
                </div>
                <div className="text-xs text-slate-600">
                  How high-velocity calling teams replace fragmented phone dials with unified lead routing.
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200">
                <div className="text-xs font-mono font-semibold text-[#00695C] mb-1">
                  SUPERVISION AT SCALE
                </div>
                <div className="text-xs text-slate-600">
                  Real team lead hierarchies managing 50+ concurrent agents with live queue intervention.
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200">
                <div className="text-xs font-mono font-semibold text-[#00695C] mb-1">
                  GOVERNANCE OUTCOMES
                </div>
                <div className="text-xs text-slate-600">
                  Automated opt-outs and quiet hours eliminating outreach violations and compliance risk.
                </div>
              </div>
            </div>

            {/* Action Button: Disabled/Coming-Soon */}
            <div className="flex flex-wrap items-center gap-4">
              <Button
                id="case-studies-view-btn"
                variant="outlined"
                size="md"
                onClick={() => setShowNotice(true)}
                className="border-slate-300 text-slate-700 hover:bg-slate-50 cursor-pointer"
              >
                <span>View Case Studies</span>
                <span className="text-[11px] font-mono bg-slate-100 text-slate-600 px-2 py-0.5 rounded ml-1">
                  Coming soon
                </span>
              </Button>

              <span className="text-xs font-mono text-slate-500">
                NO FICTIONAL CUSTOMERS PUBLISHED
              </span>
            </div>
          </div>

        </div>

      </div>

      {/* Clean Status Popover */}
      {showNotice && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 backdrop-blur-xs p-4 animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
          aria-labelledby="case-studies-notice-title"
        >
          <div className="bg-white rounded-2xl max-w-md w-full p-6 sm:p-8 border border-slate-200 shadow-xl relative">
            <button
              onClick={() => setShowNotice(false)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100 transition-colors"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-teal-50 border border-teal-200 flex items-center justify-center text-[#00695C]">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
                  STATUS
                </span>
                <h4 id="case-studies-notice-title" className="text-lg font-bold text-slate-900">
                  Case Studies in Validation
                </h4>
              </div>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed mb-6">
              DialPulse publishes verified case studies only after operational metrics and team workflows have run continuously in production. We do not publish simulated testimonial quotes.
            </p>

            <div className="flex justify-end">
              <Button
                variant="filled"
                size="sm"
                onClick={() => setShowNotice(false)}
                className="bg-[#00695C] text-white"
              >
                Understood
              </Button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
