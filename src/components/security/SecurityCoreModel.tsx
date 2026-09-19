import React from 'react';
import { ArrowRight, Layers, Lock, ShieldCheck, CheckCircle } from 'lucide-react';

const PIPELINE_STAGES = [
  { step: '01', title: 'USER', desc: 'Actor initiates an operational request' },
  { step: '02', title: 'AUTHENTICATION', desc: 'Cryptographic session validation' },
  { step: '03', title: 'SECURITY CONTEXT', desc: 'Immutable server-side context hydrated' },
  { step: '04', title: 'TENANT SCOPE', desc: 'Boundary verification & workspace binding' },
  { step: '05', title: 'ROLE / PERMISSION', desc: 'Granular capability evaluation' },
  { step: '06', title: 'RESOURCE', desc: 'Entity-level ownership & team check' },
  { step: '07', title: 'ACTION', desc: 'Authorized execution & database commit' },
  { step: '08', title: 'AUDIT', desc: 'Security event recorded with actor metadata' },
];

export function SecurityCoreModel() {
  return (
    <section className="py-20 md:py-32 bg-[#0F172A] text-white border-b border-slate-800 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div 
        aria-hidden="true" 
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,105,92,0.12),transparent_70%)] pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-[#80D5C4] text-xs font-mono font-semibold tracking-wider uppercase mb-4">
            <Layers className="w-3.5 h-3.5" />
            <span>AUTHORIZATION ARCHITECTURE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold tracking-tight text-white leading-tight mb-6">
            Every request starts <br />
            <span className="text-[#80D5C4]">with context.</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            DialPulse does not treat the browser as the final authority for access. Authorization decisions are enforced through server-side security context, tenant scope and resource permissions.
          </p>
        </div>

        {/* 8-stage Visual Flow Pipeline */}
        <div className="p-6 sm:p-10 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-2xl mb-12">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-8">
            <div className="flex items-center gap-2">
              <Lock className="w-4 h-4 text-[#80D5C4]" />
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#80D5C4]">
                SERVER_AUTHORITATIVE_CHAIN
              </span>
            </div>
            <span className="text-[10px] font-mono text-slate-400">
              ZERO_CLIENT_AUTH_BYPASS
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
            {PIPELINE_STAGES.map((stage, idx, arr) => (
              <div 
                key={stage.step}
                className="p-3.5 rounded-2xl bg-slate-950/70 border border-slate-800 flex flex-col justify-between relative group hover:border-teal-500/40 transition-colors"
              >
                <div>
                  <span className="text-[10px] font-mono text-slate-500 block mb-1">
                    STAGE {stage.step}
                  </span>
                  <div className="text-xs sm:text-sm font-mono font-bold text-white group-hover:text-[#80D5C4] transition-colors">
                    {stage.title}
                  </div>
                </div>

                <div className="mt-3 text-[11px] text-slate-400 leading-tight">
                  {stage.desc}
                </div>

                {idx < arr.length - 1 && (
                  <div className="hidden lg:block absolute -right-2 top-1/2 -translate-y-1/2 z-10 text-slate-600 pointer-events-none">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Guiding Principle Box */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-slate-300">
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 space-y-2">
            <div className="font-mono text-xs font-bold text-[#80D5C4] uppercase">Server-Side Context Hydration</div>
            <p className="text-xs leading-relaxed text-slate-400">
              Session tokens determine identity on the server. The client cannot forge tenant IDs, role elevations, or authorization attributes in HTTP payloads.
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 space-y-2">
            <div className="font-mono text-xs font-bold text-[#80D5C4] uppercase">Resource Scoping</div>
            <p className="text-xs leading-relaxed text-slate-400">
              Even with a valid role, access to individual records requires explicit ownership or supervisory jurisdiction within the authenticated tenant.
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 space-y-2">
            <div className="font-mono text-xs font-bold text-[#80D5C4] uppercase">Traceable Commit</div>
            <p className="text-xs leading-relaxed text-slate-400">
              Every sensitive modification produces a synchronous audit entry, linking the operational state mutation directly to the authenticated actor.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
