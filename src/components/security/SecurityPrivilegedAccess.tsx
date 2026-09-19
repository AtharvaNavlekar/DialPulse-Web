import React from 'react';
import { ArrowRight, UserCog, FileText, Lock, Eye, ShieldAlert } from 'lucide-react';

const IMPERSONATION_STAGES = [
  { step: '01', title: 'PLATFORM STAFF', desc: 'Authorized support or operations engineer initiates request' },
  { step: '02', title: 'FORMAL JUSTIFICATION', desc: 'Mandatory ticketing reference and reason recorded' },
  { step: '03', title: 'CONTROLLED SESSION', desc: 'Time-bounded impersonation session issued' },
  { step: '04', title: 'TENANT CONTEXT', desc: 'Operates strictly within target tenant isolation boundaries' },
  { step: '05', title: 'AUDIT RECORDING', desc: 'Session duration and activities logged for governance' },
];

export function SecurityPrivilegedAccess() {
  return (
    <section className="py-20 md:py-32 bg-[#0F172A] text-white border-b border-slate-800 relative overflow-hidden">
      {/* Decorative radial lighting */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/2 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-[#80D5C4] text-xs font-mono font-semibold tracking-wider uppercase mb-4">
            <UserCog className="w-3.5 h-3.5" />
            <span>PRIVILEGED GOVERNANCE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold tracking-tight text-white leading-tight mb-6">
            Privileged access <br />
            <span className="text-[#80D5C4]">leaves a trail.</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Platform staff do not receive unrestricted raw tenant-data access by default. Supported raw-data access requires a controlled impersonation context.
          </p>
        </div>

        {/* 5-step Impersonation Pipeline Visual */}
        <div className="p-6 sm:p-10 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-2xl mb-12">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-8">
            <div className="flex items-center gap-2">
              <ShieldAlert className="w-4 h-4 text-[#80D5C4]" />
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#80D5C4]">
                CONTROLLED_IMPERSONATION_PROTOCOL
              </span>
            </div>
            <span className="text-[10px] font-mono text-slate-400">
              AUDITED_JUSTIFIED_BOUNDED
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {IMPERSONATION_STAGES.map((stg, idx, arr) => (
              <div 
                key={stg.step}
                className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 flex flex-col justify-between relative group hover:border-teal-500/40 transition-colors"
              >
                <div>
                  <span className="text-[10px] font-mono text-slate-500 block mb-1">
                    STEP {stg.step}
                  </span>
                  <div className="text-xs sm:text-sm font-mono font-bold text-white group-hover:text-[#80D5C4] transition-colors">
                    {stg.title}
                  </div>
                </div>

                <div className="mt-4 text-xs text-slate-400 leading-relaxed">
                  {stg.desc}
                </div>

                {idx < arr.length - 1 && (
                  <div className="hidden lg:block absolute -right-2.5 top-1/2 -translate-y-1/2 z-10 text-slate-600 pointer-events-none">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Recorded Attributes Specification */}
        <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800/80">
          <h3 className="text-sm font-mono font-bold uppercase text-[#80D5C4] tracking-wider mb-4">
            MANDATORY IMPERSONATION AUDIT TRAIL ATTRIBUTES
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
            Whenever a controlled impersonation session is authorized, the system immutably attributes actions back to both the staff operator and the target identity:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 font-mono text-xs">
            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
              <span className="text-slate-500 block text-[10px]">OPERATOR</span>
              <span className="text-white font-semibold">Staff Identity</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
              <span className="text-slate-500 block text-[10px]">TARGET USER</span>
              <span className="text-white font-semibold">Assumed Identity</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
              <span className="text-slate-500 block text-[10px]">TENANT CONTEXT</span>
              <span className="text-white font-semibold">Workspace Bound</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
              <span className="text-slate-500 block text-[10px]">JUSTIFICATION</span>
              <span className="text-white font-semibold">Documented Reason</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
              <span className="text-slate-500 block text-[10px]">LIFECYCLE</span>
              <span className="text-white font-semibold">Start & End Timestamps</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
