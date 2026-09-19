/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Link } from 'react-router-dom';
import { ArrowRight, Users, Phone, Sparkles, ArrowUpRight } from 'lucide-react';

export function FeaturesDetailPreview() {
  return (
    <section className="py-20 md:py-28 bg-[#F8FAF8] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs font-mono font-semibold tracking-wider text-[#00695C] uppercase block mb-3">
              DEEP DIVES
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-slate-900 tracking-tight">
              Go deeper.
            </h2>
          </div>
          <p className="text-slate-600 text-base max-w-md leading-relaxed font-normal">
            Take a closer look at key capabilities built to sustain high-volume communication with strict operational boundaries.
          </p>
        </div>

        {/* Asymmetric 3-Card Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Large Editorial Card (Span 7) - LEAD MANAGEMENT */}
          <div className="lg:col-span-7 rounded-[28px] bg-white border border-slate-200/90 p-8 sm:p-10 shadow-xs flex flex-col justify-between group hover:border-[#00695C]/40 transition-all">
            <div>
              <div className="flex items-center justify-between mb-8">
                <div className="w-12 h-12 rounded-2xl bg-[#00695C]/10 text-[#00695C] flex items-center justify-center">
                  <Users className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono text-slate-400">DETAIL 01</span>
              </div>

              <span className="text-xs font-mono uppercase tracking-wider text-[#00695C] block mb-2 font-semibold">
                LEAD MANAGEMENT
              </span>
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 mb-4 tracking-tight">
                "Customer context from first contact onward."
              </h3>
              <p className="text-slate-600 text-base leading-relaxed mb-8 font-normal">
                Organize customer intake, custom attributes, ownership assignment, and pipeline stages with strict tenant isolation and contextual follow-up.
              </p>

              {/* Minimal preview diagram */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 mb-8 space-y-2 text-xs">
                <div className="flex items-center justify-between text-slate-700 font-medium">
                  <span>Intake Pipeline → Assignment Engine → Custom Fields</span>
                  <span className="text-emerald-700 font-mono">Synced</span>
                </div>
                <div className="h-1.5 w-full bg-slate-200 rounded-full overflow-hidden">
                  <div className="h-full bg-[#00695C] rounded-full w-3/4" />
                </div>
              </div>
            </div>

            <Link
              to="/features/leads"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#00695C] group-hover:text-[#004D40] transition-colors"
            >
              <span>Explore Lead Management</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Right Stack (Span 5) - CALLING & AI */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Card 2: CALLING */}
            <div className="flex-1 rounded-[28px] bg-white border border-slate-200/90 p-7 sm:p-8 shadow-xs flex flex-col justify-between group hover:border-[#00695C]/40 transition-all">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-700 group-hover:text-[#00695C] group-hover:bg-[#00695C]/10 transition-colors flex items-center justify-center">
                    <Phone className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono text-slate-400">DETAIL 02</span>
                </div>

                <span className="text-xs font-mono uppercase tracking-wider text-[#00695C] block mb-1 font-semibold">
                  CALLING
                </span>
                <h3 className="text-xl font-display font-bold text-slate-900 mb-2 tracking-tight">
                  "Interaction history where the workflow needs it."
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                  Log call outcomes, record durations, and capture operator notes seamlessly linked to the customer timeline.
                </p>
              </div>

              <Link
                to="/features/calls"
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#00695C] group-hover:text-[#004D40] transition-colors"
              >
                <span>Explore Calling</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Card 3: AI */}
            <div className="flex-1 rounded-[28px] bg-[#191C1B] text-white border border-slate-800 p-7 sm:p-8 shadow-xs flex flex-col justify-between group hover:border-teal-500/40 transition-all">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 text-[#80D5C4] flex items-center justify-center">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono text-slate-400">DETAIL 03</span>
                </div>

                <span className="text-xs font-mono uppercase tracking-wider text-[#80D5C4] block mb-1 font-semibold">
                  AI ASSISTANCE
                </span>
                <h3 className="text-xl font-display font-bold text-white mb-2 tracking-tight">
                  "Assistance without removing context or control."
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed mb-6 font-normal">
                  Server-side summarization and transcription with strict tenant quotas and human operator review gates.
                </p>
              </div>

              <Link
                to="/features/ai"
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#80D5C4] group-hover:text-white transition-colors"
              >
                <span>Explore AI</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
