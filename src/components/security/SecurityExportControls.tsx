import React from 'react';
import { ArrowRight, Download, FileSpreadsheet, CheckCircle2, ShieldCheck, Clock } from 'lucide-react';

const EXPORT_FLOW = [
  { step: '01', title: 'REQUEST', desc: 'Authorized role initiates lead or report export' },
  { step: '02', title: 'AUTHORIZATION', desc: 'Server validates export permission & scope' },
  { step: '03', title: 'CONFIRMATION', desc: 'Explicit user confirmation step required' },
  { step: '04', title: 'BACKGROUND JOB', desc: 'Asynchronous worker executes within actor bounds' },
  { step: '05', title: 'SANITIZED EXPORT', desc: 'CSV/Excel payload generated with formula safety' },
  { step: '06', title: 'AUDIT LOGGED', desc: 'Record volume, actor, and timestamp committed' },
];

export function SecurityExportControls() {
  return (
    <section className="py-20 md:py-28 bg-surface border-b border-outline-variant/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono font-semibold tracking-wider uppercase mb-4">
            <Download className="w-3.5 h-3.5" />
            <span>DATA EXFILTRATION SAFEGUARDS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-on-surface tracking-tight leading-tight">
            Moving data should <br />
            <span className="text-primary">be intentional.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-on-surface-variant leading-relaxed">
            Authorized data exports are subject to permission checks and explicit confirmation in the current workflow. High-volume exports may be processed as background jobs and completed actions are recorded for auditability.
          </p>
        </div>

        {/* 6-step Export Pipeline Diagram */}
        <div className="p-6 sm:p-10 rounded-3xl bg-surface-container-low border border-outline-variant/80 shadow-xs mb-8">
          <div className="flex items-center justify-between border-b border-outline-variant/60 pb-3 mb-6">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-primary">
              CONTROLLED_EXPORT_LIFECYCLE
            </span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-surface-container border border-outline-variant text-on-surface-variant">
              NO_SILENT_EXTRACTIONS
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
            {EXPORT_FLOW.map((f, idx, arr) => (
              <div 
                key={f.step}
                className="p-4 rounded-2xl bg-surface-container-lowest border border-outline-variant flex flex-col justify-between relative group hover:border-primary/50 transition-colors"
              >
                <div>
                  <span className="text-[10px] font-mono text-outline block mb-1">
                    STEP {f.step}
                  </span>
                  <div className="text-xs font-mono font-bold text-on-surface group-hover:text-primary transition-colors">
                    {f.title}
                  </div>
                </div>

                <div className="mt-3 text-[11px] text-on-surface-variant leading-tight">
                  {f.desc}
                </div>

                {idx < arr.length - 1 && (
                  <div className="hidden lg:block absolute -right-2.5 top-1/2 -translate-y-1/2 z-10 text-outline-variant pointer-events-none">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Export Security Context Detail */}
        <div className="p-4 rounded-2xl bg-surface-container border border-outline-variant/60 text-xs text-on-surface-variant flex items-start gap-3">
          <ShieldCheck className="w-4 h-4 text-primary shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            Background export tasks inherit the exact authorization boundaries of the triggering user. Asynchronous workers cannot manufacture elevated permissions to extract data beyond what the requester is permitted to see.
          </p>
        </div>

      </div>
    </section>
  );
}
