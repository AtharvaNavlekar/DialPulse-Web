/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { CheckCircle2, ArrowRight, Clock, AlertCircle, ShieldAlert } from 'lucide-react';

export function LeadPipelineStages() {
  const stages = [
    {
      name: 'New',
      code: 'STAGE_NEW',
      desc: 'Fresh intake waiting for initial triage and owner assignment.',
      status: 'completed',
      date: 'Sep 18, 09:15 AM',
      operator: 'System Ingest',
    },
    {
      name: 'Contacted',
      code: 'STAGE_CONTACTED',
      desc: 'Initial voice or message outreach attempted or connected.',
      status: 'completed',
      date: 'Sep 18, 10:45 AM',
      operator: 'Priya Sharma',
    },
    {
      name: 'Qualified',
      code: 'STAGE_QUALIFIED',
      desc: 'Decision-maker confirmed interest, budget, and logistical requirements.',
      status: 'active',
      date: 'Sep 19, 11:45 AM',
      operator: 'Priya Sharma',
    },
    {
      name: 'Won / Outcome',
      code: 'STAGE_OUTCOME',
      desc: 'Converted to formal commercial engagement or marked closed with clear rationale.',
      status: 'pending',
      date: 'Pending Review',
      operator: 'Sales Leadership',
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-mono font-medium tracking-wider uppercase mb-4">
            <span>PIPELINE VISIBILITY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-slate-900 tracking-tight mb-5">
            Know where the <br />
            conversation stands.
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed font-normal">
            Stages give teams a shared view of where a customer sits in the workflow. DialPulse maintains a visible record of the active stage, priority triage, and assignment so that operations run with consistency.
          </p>
        </div>

        {/* Visual Progression Card */}
        <div className="rounded-[28px] bg-[#F8FAF8] border border-slate-200 p-6 sm:p-10 shadow-sm mb-12">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-8 border-b border-slate-200/80 gap-4 mb-8">
            <div>
              <span className="text-xs font-mono text-slate-500 uppercase block mb-1">
                CONCEPTUAL WORKFLOW PROGRESSION
              </span>
              <h3 className="text-xl font-bold text-slate-900">
                Pipeline Lifecycle for #LD-8402
              </h3>
            </div>
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-md text-xs font-mono font-semibold bg-amber-100 text-amber-900 border border-amber-200">
                PRIORITY: HIGH
              </span>
              <span className="px-3 py-1 rounded-md text-xs font-mono font-semibold bg-emerald-100 text-emerald-900 border border-emerald-200">
                CURRENT: QUALIFIED
              </span>
            </div>
          </div>

          {/* Stepper Progression */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
            {stages.map((stage, idx) => {
              const isCompleted = stage.status === 'completed';
              const isActive = stage.status === 'active';
              return (
                <div
                  key={idx}
                  className={`rounded-2xl p-5 border transition-all ${
                    isActive
                      ? 'bg-white border-[#00695C] shadow-md ring-2 ring-[#00695C]/20'
                      : isCompleted
                      ? 'bg-white border-slate-200'
                      : 'bg-slate-100/70 border-dashed border-slate-300 opacity-75'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono text-slate-400">
                      STEP 0{idx + 1}
                    </span>
                    {isCompleted ? (
                      <span className="inline-flex items-center gap-1 text-[11px] font-mono font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                        <CheckCircle2 className="w-3.5 h-3.5" /> Completed
                      </span>
                    ) : isActive ? (
                      <span className="inline-flex items-center gap-1 text-[11px] font-mono font-semibold text-[#00695C] bg-teal-50 px-2 py-0.5 rounded">
                        <Clock className="w-3.5 h-3.5" /> Active Stage
                      </span>
                    ) : (
                      <span className="text-[11px] font-mono text-slate-400">
                        Upcoming
                      </span>
                    )}
                  </div>

                  <h4 className="text-lg font-bold text-slate-900 mb-1">
                    {stage.name}
                  </h4>
                  <span className="text-[10px] font-mono text-slate-400 block mb-3">
                    {stage.code}
                  </span>

                  <p className="text-xs text-slate-600 mb-4 leading-relaxed">
                    {stage.desc}
                  </p>

                  <div className="pt-3 border-t border-slate-100 text-[11px] font-mono space-y-1">
                    <div className="flex justify-between text-slate-500">
                      <span>Updated:</span>
                      <span className="text-slate-700">{stage.date}</span>
                    </div>
                    <div className="flex justify-between text-slate-500">
                      <span>Operator:</span>
                      <span className="text-slate-700 truncate max-w-[120px]">{stage.operator}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Clarity note */}
          <div className="mt-8 pt-6 border-t border-slate-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-slate-500">
            <div className="flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-[#00695C] shrink-0" />
              <span>
                Stages represent organizational milestones configured by your team. DialPulse records transitions with full audit timestamps rather than enforcing opaque artificial stage automation.
              </span>
            </div>
            <div className="font-mono text-slate-400 shrink-0">
              Audit Version: v4
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
