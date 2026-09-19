import React from 'react';
import { Newspaper, Sparkles, Clock, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export const ResourcesBlogInsights: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-[#F8FAF8] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white border border-slate-200/90 rounded-3xl p-8 sm:p-12 lg:p-16 shadow-2xs">
          <div className="max-w-3xl">
            
            {/* Eyebrow / Badges */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 border border-teal-200/70 text-[#00695C] text-xs font-mono font-semibold uppercase">
                <Newspaper className="w-3.5 h-3.5" />
                ARTICLES & ESSAYS
              </span>

              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-mono font-medium">
                <Clock className="w-3.5 h-3.5 text-slate-500" />
                ARTICLES — COMING SOON
              </span>
            </div>

            {/* Headline */}
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#191C1B] tracking-tight leading-[1.12] mb-6">
              Thinking beyond <br />
              <span className="text-[#00695C]">the product.</span>
            </h2>

            {/* Supporting Copy */}
            <p className="text-lg text-[#3F4946] leading-relaxed mb-8">
              Articles and practical ideas about customer operations, CRM workflows, communication, compliance and AI-assisted work.
            </p>

            {/* Planned Essay Threads (No fake articles or dates) */}
            <div className="space-y-4 mb-10">
              <div className="p-4 rounded-xl bg-[#F8FAF8] border border-slate-200 flex items-start gap-4">
                <span className="w-6 h-6 rounded-md bg-white border border-slate-300 text-slate-700 flex items-center justify-center font-mono text-xs font-bold shrink-0 mt-0.5">
                  A
                </span>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 mb-1">
                    Why speed-to-lead without operational context burns telecaller morale
                  </h4>
                  <p className="text-xs text-slate-600">
                    A critical review of aggressive lead allocation vs. intelligent readiness gating.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#F8FAF8] border border-slate-200 flex items-start gap-4">
                <span className="w-6 h-6 rounded-md bg-white border border-slate-300 text-slate-700 flex items-center justify-center font-mono text-xs font-bold shrink-0 mt-0.5">
                  B
                </span>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 mb-1">
                    The invisible tax of disconnected WhatsApp threads in high-volume CRM
                  </h4>
                  <p className="text-xs text-slate-600">
                    How private messaging silos erode ticket ownership and administrative visibility.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#F8FAF8] border border-slate-200 flex items-start gap-4">
                <span className="w-6 h-6 rounded-md bg-white border border-slate-300 text-slate-700 flex items-center justify-center font-mono text-xs font-bold shrink-0 mt-0.5">
                  C
                </span>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 mb-1">
                    Governing generative AI summaries on customer telephony audio
                  </h4>
                  <p className="text-xs text-slate-600">
                    Protecting customer PII while delivering instant structured call outcomes to team leads.
                  </p>
                </div>
              </div>
            </div>

            {/* Status Button */}
            <div className="flex items-center gap-4">
              <Button
                variant="outlined"
                size="md"
                disabled
                className="border-slate-300 text-slate-400 bg-slate-50 cursor-not-allowed opacity-80"
              >
                <span>Articles in Drafting</span>
                <span className="text-xs font-mono ml-2 text-slate-400">Coming Soon</span>
              </Button>

              <span className="text-xs font-mono text-slate-400">
                NO GUEST POSTS &middot; NO CONTENT FARMS
              </span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
