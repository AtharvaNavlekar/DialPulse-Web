import React from 'react';
import { Database, ShieldCheck, Users, Phone, MessageSquare, AlertTriangle } from 'lucide-react';

export function SecurityTenantIsolation() {
  return (
    <section className="py-20 md:py-32 bg-surface border-b border-outline-variant/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono font-semibold tracking-wider uppercase mb-4">
            <Database className="w-3.5 h-3.5" />
            <span>DATA PARTITIONING</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-on-surface tracking-tight leading-tight">
            Your tenant. <br className="hidden sm:inline" />
            <span className="text-primary">Your boundary.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-on-surface-variant leading-relaxed">
            DialPulse is built as a multi-tenant system. Customer data is scoped to the appropriate tenant context before application resources are accessed.
          </p>
        </div>

        {/* Visual Boundary Architecture Diagram */}
        <div className="p-6 sm:p-10 rounded-3xl bg-surface-container-low border border-outline-variant/80 shadow-xs mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-11 gap-6 items-center">
            
            {/* TENANT A CONTAINER */}
            <div className="lg:col-span-5 p-6 rounded-2xl bg-surface-container-lowest border border-outline-variant space-y-4">
              <div className="flex items-center justify-between border-b border-outline-variant/60 pb-3">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-primary" />
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-on-surface">
                    TENANT A // ORG_ALPHA
                  </span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-primary/10 text-primary font-semibold">
                  ACTIVE_CONTEXT
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 rounded-xl bg-surface-container-low border border-outline-variant/60">
                  <Users className="w-4 h-4 text-primary mb-1.5" />
                  <div className="text-xs font-bold text-on-surface">Users & Teams</div>
                  <div className="text-[10px] font-mono text-on-surface-variant">Scoped to Alpha</div>
                </div>
                <div className="p-3 rounded-xl bg-surface-container-low border border-outline-variant/60">
                  <Users className="w-4 h-4 text-primary mb-1.5" />
                  <div className="text-xs font-bold text-on-surface">Leads & Pipelines</div>
                  <div className="text-[10px] font-mono text-on-surface-variant">Isolated records</div>
                </div>
                <div className="p-3 rounded-xl bg-surface-container-low border border-outline-variant/60">
                  <Phone className="w-4 h-4 text-[#1F3A5F] mb-1.5" />
                  <div className="text-xs font-bold text-on-surface">Calls & Logs</div>
                  <div className="text-[10px] font-mono text-on-surface-variant">Tenant timeline</div>
                </div>
                <div className="p-3 rounded-xl bg-surface-container-low border border-outline-variant/60">
                  <MessageSquare className="w-4 h-4 text-emerald-700 mb-1.5" />
                  <div className="text-xs font-bold text-on-surface">Messages & Threads</div>
                  <div className="text-[10px] font-mono text-on-surface-variant">Channel metadata</div>
                </div>
              </div>
            </div>

            {/* ISOLATION BOUNDARY DIVIDER */}
            <div className="lg:col-span-1 flex lg:flex-col items-center justify-center gap-2 py-4 lg:py-0">
              <div className="h-px lg:h-16 w-full lg:w-px bg-primary/40" />
              <div className="px-2.5 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary text-[10px] font-mono font-bold tracking-wider uppercase text-center whitespace-nowrap">
                ISOLATED<br className="hidden lg:inline" /> BOUNDARY
              </div>
              <div className="h-px lg:h-16 w-full lg:w-px bg-primary/40" />
            </div>

            {/* TENANT B CONTAINER */}
            <div className="lg:col-span-5 p-6 rounded-2xl bg-surface-container-lowest border border-outline-variant space-y-4">
              <div className="flex items-center justify-between border-b border-outline-variant/60 pb-3">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-400" />
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-on-surface">
                    TENANT B // ORG_BETA
                  </span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-surface-variant text-on-surface-variant font-semibold">
                  DISTINCT_CONTEXT
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 rounded-xl bg-surface-container-low border border-outline-variant/60">
                  <Users className="w-4 h-4 text-outline mb-1.5" />
                  <div className="text-xs font-bold text-on-surface">Users & Teams</div>
                  <div className="text-[10px] font-mono text-on-surface-variant">Scoped to Beta</div>
                </div>
                <div className="p-3 rounded-xl bg-surface-container-low border border-outline-variant/60">
                  <Users className="w-4 h-4 text-outline mb-1.5" />
                  <div className="text-xs font-bold text-on-surface">Leads & Pipelines</div>
                  <div className="text-[10px] font-mono text-on-surface-variant">Isolated records</div>
                </div>
                <div className="p-3 rounded-xl bg-surface-container-low border border-outline-variant/60">
                  <Phone className="w-4 h-4 text-outline mb-1.5" />
                  <div className="text-xs font-bold text-on-surface">Calls & Logs</div>
                  <div className="text-[10px] font-mono text-on-surface-variant">Tenant timeline</div>
                </div>
                <div className="p-3 rounded-xl bg-surface-container-low border border-outline-variant/60">
                  <MessageSquare className="w-4 h-4 text-outline mb-1.5" />
                  <div className="text-xs font-bold text-on-surface">Messages & Threads</div>
                  <div className="text-[10px] font-mono text-on-surface-variant">Channel metadata</div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Architectural Statement */}
        <div className="p-4 rounded-2xl bg-surface-container border border-outline-variant/80 flex items-start sm:items-center gap-3 text-xs sm:text-sm text-on-surface-variant">
          <ShieldCheck className="w-5 h-5 text-primary shrink-0 mt-0.5 sm:mt-0" />
          <p className="leading-relaxed">
            <strong>Server-Enforced Partitioning:</strong> Tenant boundaries are enforced server-side rather than relying on client-supplied identifiers. Application logic explicitly validates that query filters and mutation targets belong to the authenticated session context.
          </p>
        </div>

      </div>
    </section>
  );
}
