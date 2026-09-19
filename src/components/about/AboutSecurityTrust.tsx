import React from 'react';
import { ShieldCheck, Lock, Database, FileClock, Cpu, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export function AboutSecurityTrust() {
  return (
    <section className="py-20 md:py-32 bg-[#0F172A] text-white border-b border-slate-800 relative overflow-hidden">
      {/* Decorative ambient lighting */}
      <div 
        aria-hidden="true" 
        className="absolute top-0 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-[#80D5C4] text-xs font-mono font-semibold tracking-wider uppercase mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>SECURITY PHILOSOPHY</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold tracking-tight text-white leading-tight mb-6">
            Trust is a product decision.
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Security is not only something that belongs in infrastructure. It shapes who can access information, how actions are authorized, how sensitive operations are recorded and how customer data moves through the platform.
          </p>
        </div>

        {/* Four Visual Trust Markers */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          
          {/* 1. AUTHORIZED ACCESS */}
          <div className="p-6 rounded-3xl bg-slate-900/80 border border-slate-800 hover:border-teal-500/40 transition-colors flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-teal-500/10 text-[#80D5C4] flex items-center justify-center mb-4">
                <Lock className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-[#80D5C4] mb-2">
                AUTHORIZED ACCESS
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Role-based scoping ensures users only view records relevant to their operational responsibility.
              </p>
            </div>
            <div className="mt-6 pt-3 border-t border-slate-800 text-[10px] font-mono text-slate-400">
              RBAC_TENANT_SCOPING
            </div>
          </div>

          {/* 2. TENANT BOUNDARIES */}
          <div className="p-6 rounded-3xl bg-slate-900/80 border border-slate-800 hover:border-teal-500/40 transition-colors flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-teal-500/10 text-[#80D5C4] flex items-center justify-center mb-4">
                <Database className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-[#80D5C4] mb-2">
                TENANT BOUNDARIES
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Server-side partitions keep each customer's data isolated within strict authorization perimeters.
              </p>
            </div>
            <div className="mt-6 pt-3 border-t border-slate-800 text-[10px] font-mono text-slate-400">
              STRICT_PARTITIONING
            </div>
          </div>

          {/* 3. AUDITABILITY */}
          <div className="p-6 rounded-3xl bg-slate-900/80 border border-slate-800 hover:border-teal-500/40 transition-colors flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-teal-500/10 text-[#80D5C4] flex items-center justify-center mb-4">
                <FileClock className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-[#80D5C4] mb-2">
                AUDITABILITY
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Administrative actions, data exports, and security-sensitive events are systematically recorded.
              </p>
            </div>
            <div className="mt-6 pt-3 border-t border-slate-800 text-[10px] font-mono text-slate-400">
              IMMUTABLE_LOG_TRAIL
            </div>
          </div>

          {/* 4. CONTROLLED AI PROCESSING */}
          <div className="p-6 rounded-3xl bg-slate-900/80 border border-slate-800 hover:border-teal-500/40 transition-colors flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-teal-500/10 text-[#80D5C4] flex items-center justify-center mb-4">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-[#80D5C4] mb-2">
                CONTROLLED AI PROCESSING
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Server-side sanitization masks detected personal identifiers before dispatch to external models.
              </p>
            </div>
            <div className="mt-6 pt-3 border-t border-slate-800 text-[10px] font-mono text-slate-400">
              PII_MASKING_ENFORCED
            </div>
          </div>

        </div>

        {/* Bottom CTA to Security Architecture */}
        <div className="pt-4 flex items-center justify-between flex-wrap gap-4">
          <p className="text-xs sm:text-sm text-slate-400 font-mono">
            Learn more about our defense-in-depth model and operational safeguards.
          </p>
          <Button href="/security" variant="outlined" className="text-white border-slate-700 hover:bg-slate-800">
            Explore Security
            <ArrowRight className="w-4 h-4 ml-1.5" />
          </Button>
        </div>

      </div>
    </section>
  );
}
