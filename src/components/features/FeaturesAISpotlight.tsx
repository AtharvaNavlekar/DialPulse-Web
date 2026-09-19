/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, ShieldCheck, FileText, CheckCircle2, UserCheck, Cpu, AlertCircle } from 'lucide-react';

const AI_PIPELINE_STEPS = [
  { step: '01', title: 'INPUT', desc: 'Call audio, agent memo, or message thread payload' },
  { step: '02', title: 'PERMISSION', desc: 'Tenant quota validation & explicit feature toggle' },
  { step: '03', title: 'PROCESSING', desc: 'Server-side provider handling with sanitization' },
  { step: '04', title: 'ASSISTANCE', desc: 'Draft summary, sentiment tag, or action suggestion' },
  { step: '05', title: 'HUMAN REVIEW', desc: 'Operator reviews, edits, or approves output' },
];

export function FeaturesAISpotlight() {
  return (
    <section className="py-20 md:py-28 bg-[#F8FAF8] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Copy & Details */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00695C]/10 border border-[#00695C]/20 text-[#00695C] text-xs font-mono font-semibold tracking-wider uppercase mb-5">
              <span>09 / AI ASSISTANCE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-slate-900 tracking-tight leading-[1.12] mb-6">
              AI that fits inside the workflow.
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal mb-8">
              Use AI-assisted capabilities for supported tasks such as transcription, summarization, sentiment classification and text-based assistance.
            </p>

            <div className="space-y-4 mb-8 text-sm text-slate-600">
              <div className="p-3.5 rounded-xl bg-white border border-slate-200/80 shadow-xs">
                <strong className="text-slate-900 block font-semibold mb-1">Server-Side Provider Handling</strong>
                <span className="text-xs">API credentials and prompts remain secure on the backend, completely hidden from client browsers.</span>
              </div>
              <div className="p-3.5 rounded-xl bg-white border border-slate-200/80 shadow-xs">
                <strong className="text-slate-900 block font-semibold mb-1">Tenant Quotas & Usage Visibility</strong>
                <span className="text-xs">Control consumption with granular tenant limits and auditable usage telemetry.</span>
              </div>
              <div className="p-3.5 rounded-xl bg-white border border-slate-200/80 shadow-xs">
                <strong className="text-slate-900 block font-semibold mb-1">Human-in-the-Loop Review</strong>
                <span className="text-xs">AI suggestions remain drafts until an authorized operator confirms or adjusts the content.</span>
              </div>
            </div>

            {/* Mandatory processing architecture notice */}
            <div className="p-4 rounded-xl bg-slate-100 border border-slate-200 text-xs text-slate-600 mb-8 leading-relaxed">
              <p className="font-mono text-[11px] text-slate-500 uppercase mb-1">PROCESSING PATH SPECIFICATION:</p>
              <p>
                "Audio submitted for transcription follows a different processing path from supported text sanitization."
              </p>
            </div>

            <Link
              to="/features/ai"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#00695C] hover:bg-[#004D40] text-white text-sm font-semibold tracking-normal transition-all shadow-xs group"
            >
              <span>Explore AI</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Right Column: Processing Pipeline Schematic */}
          <div className="lg:col-span-7">
            <div className="rounded-[28px] bg-white border border-slate-200/90 p-6 sm:p-8 shadow-sm">
              <div className="flex items-center justify-between pb-5 border-b border-slate-100 mb-6">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-[#00695C]/10 text-[#00695C] flex items-center justify-center">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase text-slate-400">PIPELINE ARCHITECTURE</span>
                    <h3 className="text-base font-bold text-slate-900">Assisted Workflow Sequence</h3>
                  </div>
                </div>
                <span className="text-xs font-mono px-2.5 py-1 rounded bg-teal-50 text-[#00695C] border border-teal-200">
                  TENANT CONTROLLED
                </span>
              </div>

              {/* 5-Step Pipeline Journey */}
              <div className="space-y-3 relative mb-6">
                {AI_PIPELINE_STEPS.map((step, idx) => (
                  <div
                    key={step.step}
                    className="p-3.5 rounded-xl bg-[#F8FAF8] border border-slate-200/80 flex items-center justify-between gap-4 hover:border-[#00695C]/40 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-7 h-7 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-xs font-mono font-bold text-slate-700 shadow-2xs">
                        {step.step}
                      </span>
                      <div>
                        <span className="text-xs font-mono font-bold text-slate-900 block">{step.title}</span>
                        <span className="text-[11px] text-slate-500 leading-normal">{step.desc}</span>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono text-[#00695C] shrink-0 font-medium">Verified</span>
                  </div>
                ))}
              </div>

              {/* Example AI Output Sample */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs">
                <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 uppercase mb-1.5">
                  <span>DRAFT CALL SUMMARY (PENDING REVIEW)</span>
                  <span className="text-[#00695C]">Confidence: High</span>
                </div>
                <p className="text-slate-700 leading-relaxed italic mb-3">
                  "Prospect requested multi-tenant architecture validation before contract finalization. Scheduled walkthrough for Thursday."
                </p>
                <div className="flex items-center justify-between text-[11px] pt-2 border-t border-slate-200 text-slate-500">
                  <span>Action: Follow-up created</span>
                  <span className="font-medium text-slate-800">Operator Review Required</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
