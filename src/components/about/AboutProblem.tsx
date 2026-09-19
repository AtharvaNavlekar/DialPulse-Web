import React from 'react';
import { ArrowDown, AlertCircle, CheckCircle2, Split, GitMerge } from 'lucide-react';

export function AboutProblem() {
  return (
    <section className="py-20 md:py-28 bg-[#0F172A] text-white relative overflow-hidden border-b border-slate-800">
      {/* Subtle architectural background texture */}
      <div 
        aria-hidden="true" 
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,105,92,0.12),transparent_70%)] pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-[#80D5C4] text-xs font-mono font-semibold tracking-wider uppercase mb-4">
            <Split className="w-3.5 h-3.5" />
            <span>THE OPERATIONAL PROBLEM</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold tracking-tight text-white leading-tight mb-6">
            Too many systems. <br />
            <span className="text-[#80D5C4]">Not enough context.</span>
          </h2>

          <div className="space-y-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            <p>
              Customer-facing teams often work across several places at once. A lead lives in one tool. A call happens somewhere else. Messages sit somewhere else. Follow-up depends on memory. Reporting arrives later.
            </p>
            <p className="text-white font-medium">
              DialPulse is designed around the workflow between those events.
            </p>
          </div>
        </div>

        {/* Visual "Fragmented → Connected" Transition Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* LEFT: Fragmented Status Quo */}
          <div className="lg:col-span-6 bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                    FRAGMENTED ENVIRONMENT
                  </span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/20 font-medium">
                  DISCONNECTED SILOS
                </span>
              </div>

              {/* Vertical Stack of Broken Events */}
              <div className="space-y-2.5">
                {[
                  { title: 'Lead Ingestion', subtitle: 'Lives in an ad platform or website form' },
                  { title: 'Calling', subtitle: 'Dialed from an untracked personal device' },
                  { title: 'WhatsApp / SMS', subtitle: 'Sent from private chat threads with zero team visibility' },
                  { title: 'Spreadsheet Notes', subtitle: 'Manually copy-pasted at the end of the shift' },
                  { title: 'Follow-up Task', subtitle: 'Relies on individual memory or sticky notes' },
                  { title: 'Reporting', subtitle: 'Delayed, aggregated days later without operational context' },
                ].map((step, idx, arr) => (
                  <React.Fragment key={step.title}>
                    <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 flex items-center justify-between">
                      <div>
                        <div className="text-xs font-semibold text-slate-200">{step.title}</div>
                        <div className="text-[11px] text-slate-400 font-mono">{step.subtitle}</div>
                      </div>
                      <AlertCircle className="w-3.5 h-3.5 text-amber-400/70 shrink-0" />
                    </div>
                    {idx < arr.length - 1 && (
                      <div className="flex justify-center -my-1 text-slate-600">
                        <ArrowDown className="w-3 h-3" />
                      </div>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between text-xs font-mono text-slate-400">
              <span>OUTCOME:</span>
              <span className="text-amber-400 font-semibold">LOST CONTEXT & DELAYED REACTION</span>
            </div>
          </div>

          {/* RIGHT: Connected DialPulse Workflow */}
          <div className="lg:col-span-6 bg-gradient-to-b from-[#1F3A5F]/40 to-slate-900/90 border border-teal-500/30 rounded-3xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden">
            <div 
              aria-hidden="true" 
              className="absolute -top-16 -right-16 w-60 h-60 bg-teal-500/10 rounded-full blur-2xl pointer-events-none" 
            />

            <div>
              <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#80D5C4]">
                    DIALPULSE CONNECTED
                  </span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-teal-500/10 text-[#80D5C4] border border-teal-500/30 font-semibold">
                  ONE WORKFLOW
                </span>
              </div>

              {/* Connected Platform Stack */}
              <div className="p-6 rounded-2xl bg-slate-950/70 border border-teal-500/20 space-y-4 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-teal-500/20 text-[#80D5C4] flex items-center justify-center font-bold">
                    <GitMerge className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">One Connected Operating Workflow</h3>
                    <p className="text-xs text-slate-300 font-mono">
                      Lead &rarr; Interaction &rarr; Team &rarr; Compliance &rarr; Insight
                    </p>
                  </div>
                </div>

                <ul className="space-y-2.5 text-xs text-slate-300 pt-2 border-t border-slate-800/80">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#80D5C4] shrink-0 mt-0.5" />
                    <span><strong>Unified Customer Timeline:</strong> Calls, messages, notes, and ticket records stay attached to the lead.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#80D5C4] shrink-0 mt-0.5" />
                    <span><strong>Role Scoping:</strong> Team members see exactly what their role is authorized to view.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#80D5C4] shrink-0 mt-0.5" />
                    <span><strong>Inline Safeguards:</strong> Quiet hours, fatigue controls, and opt-outs prevent outreach mistakes.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#80D5C4] shrink-0 mt-0.5" />
                    <span><strong>Real-time Operational Insight:</strong> Immediate visibility without waiting for manual spreadsheets.</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between text-xs font-mono text-slate-400">
              <span>PHILOSOPHY:</span>
              <span className="text-[#80D5C4] font-semibold">CONNECT THE WORK, PRESERVE THE CONTEXT</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
