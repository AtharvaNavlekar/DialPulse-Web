import React from 'react';
import { Scale, AlertTriangle } from 'lucide-react';

export function SecurityComplianceDistinction() {
  return (
    <section className="py-20 md:py-28 bg-[#1F3A5F] text-white border-b border-slate-700 relative overflow-hidden">
      <div 
        aria-hidden="true" 
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(0,105,92,0.15),transparent_60%)] pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-[#80D5C4] text-xs font-mono font-semibold tracking-wider uppercase mb-6">
            <Scale className="w-3.5 h-3.5" />
            <span>CLARITY OF OBLIGATIONS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight leading-tight mb-6">
            Security controls are not <br />
            <span className="text-[#80D5C4]">a legal certification.</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-2xl mx-auto mb-8">
            Technical safeguards help protect information and govern system behavior. They do not automatically mean that every customer deployment satisfies every privacy, telecommunications or regulatory obligation.
          </p>

          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 text-xs sm:text-sm text-slate-300 text-left leading-relaxed">
            <div className="flex items-center gap-2 text-white font-mono font-bold text-xs uppercase mb-2">
              <AlertTriangle className="w-4 h-4 text-[#80D5C4]" />
              OPERATIONAL COMPLIANCE VS. TECHNICAL CONTROLS
            </div>
            DialPulse provides organizations with building blocks — such as role-based permissions, quiet hour enforcement, opt-out flags, and audit logging. How organizations obtain customer consents, train agents, adhere to local telemarketing rules, and manage exported records remains an organizational operational responsibility.
          </div>

        </div>
      </div>
    </section>
  );
}
