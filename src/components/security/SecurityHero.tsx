import React from 'react';
import { ShieldCheck, ArrowRight, Lock, KeyRound, Database, UserCheck, Activity } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export function SecurityHero() {
  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden bg-surface border-b border-outline-variant/60">
      {/* Background Architectural Ambient */}
      <div 
        aria-hidden="true" 
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(0,105,92,0.07),transparent_65%)] pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT: Eyebrow, Headline, Supporting Copy, and CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono font-semibold tracking-wider uppercase mb-6">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>SECURITY</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-on-surface tracking-tight leading-[1.1] mb-6">
              Security isn't <br className="hidden sm:inline" />
              <span className="text-primary">a checkbox.</span>
            </h1>

            <p className="text-base sm:text-lg text-on-surface-variant leading-relaxed max-w-2xl mb-8">
              DialPulse treats security as part of the workflow — shaping how users access information, how customer data stays within tenant boundaries, how sensitive actions are controlled, and how important events are recorded.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Button href="/product" size="lg">
                Explore DialPulse
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </Button>
              <Button href="/contact" variant="outlined" size="lg">
                Contact Us
              </Button>
            </div>
          </div>

          {/* RIGHT: Product-inspired security flow visual */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div 
              role="img"
              aria-label="Security flow visual showing user roles, authorization checkpoints, tenant boundaries, authorized resources, and audit records"
              className="w-full max-w-md bg-surface-container-lowest border border-outline-variant rounded-3xl p-6 shadow-sm relative overflow-hidden"
            >
              <div className="flex items-center justify-between border-b border-outline-variant/60 pb-3 mb-5">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                  <span className="text-[11px] font-mono font-medium text-on-surface-variant">
                    AUTHORIZATION_GATEWAY
                  </span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-primary/10 text-primary font-semibold border border-primary/20">
                  SERVER_ENFORCED
                </span>
              </div>

              {/* Multi-step access pipeline */}
              <div className="space-y-2.5 relative">
                
                {/* 1. Requesting Actor */}
                <div className="p-3 rounded-xl bg-surface-container-low border border-outline-variant/80 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <UserCheck className="w-4 h-4 text-primary" />
                    <div>
                      <div className="text-[11px] font-mono font-semibold text-on-surface">ACTOR_AUTHENTICATED</div>
                      <div className="text-[10px] text-on-surface-variant">Role: TL (Team Lead) • Team: North</div>
                    </div>
                  </div>
                  <span className="text-[9px] font-mono text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">
                    VALID_SESSION
                  </span>
                </div>

                {/* 2. Security Context & Tenant Perimeter */}
                <div className="p-3.5 rounded-2xl bg-primary/10 border border-primary/30 relative">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-primary font-bold flex items-center gap-1.5">
                      <Lock className="w-3 h-3" />
                      TENANT_BOUNDARY
                    </span>
                    <span className="text-[9px] font-mono text-primary font-semibold">ISOLATION: ACTIVE</span>
                  </div>
                  <div className="text-xs font-bold text-on-surface">
                    Tenant Context: ORG_ACME_CORP
                  </div>
                  <p className="text-[10px] text-on-surface-variant mt-0.5">
                    Server-authoritative tenant scoping prevents cross-tenant query contamination.
                  </p>
                </div>

                {/* 3. Resource Evaluation */}
                <div className="p-3 rounded-xl bg-surface-container-low border border-outline-variant/80 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <Database className="w-4 h-4 text-[#1F3A5F]" />
                    <div>
                      <div className="text-[11px] font-mono font-semibold text-on-surface">TARGET_RESOURCE</div>
                      <div className="text-[10px] text-on-surface-variant">Lead Record #4092 (Assigned to Team North)</div>
                    </div>
                  </div>
                  <span className="text-[9px] font-mono text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">
                    SCOPE_MATCH
                  </span>
                </div>

                {/* 4. Audit Trail Generation */}
                <div className="p-2.5 rounded-xl bg-surface-container border border-outline-variant/60 flex items-center justify-between text-[10px] font-mono text-on-surface-variant">
                  <span className="flex items-center gap-1.5 text-primary font-semibold">
                    <Activity className="w-3.5 h-3.5" />
                    AUDIT_EMITTED
                  </span>
                  <span>EVT_RESOURCE_MUTATE_SUCCESS</span>
                </div>

              </div>

              {/* Status footer */}
              <div className="mt-4 pt-3 border-t border-outline-variant/50 flex items-center justify-between text-[10px] font-mono text-on-surface-variant">
                <span>AUTHORITY: SERVER_SIDE</span>
                <span className="text-primary font-bold">ZERO_CLIENT_TRUST</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
