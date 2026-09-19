import React from 'react';
import { FileCheck2, ArrowRight, Activity, ShieldAlert, LogIn, Download, UserCheck, Clock } from 'lucide-react';
import { Button } from '@/components/ui/Button';

const AUDIT_EVENTS = [
  {
    type: 'LOGIN',
    category: 'AUTHENTICATION',
    desc: 'Actor session successfully established from verified IP and client footprint.',
    status: 'AUTHORIZED',
    icon: LogIn,
  },
  {
    type: 'ACCESS_DENIED',
    category: 'AUTHORIZATION',
    desc: 'Attempted resource mutation blocked due to role or tenant scope boundary.',
    status: 'BLOCKED',
    icon: ShieldAlert,
  },
  {
    type: 'DATA_EXPORT',
    category: 'DATA_GOVERNANCE',
    desc: 'Authorized customer record export requested, confirmed, and queued for processing.',
    status: 'QUEUED',
    icon: Download,
  },
  {
    type: 'LEAD_CHANGE',
    category: 'WORKFLOW',
    desc: 'Assigned agent updated, stage progressed, or contact disposition committed.',
    status: 'MUTATED',
    icon: UserCheck,
  },
  {
    type: 'COMPLIANCE_EVENT',
    category: 'COMMUNICATION',
    desc: 'Outreach attempt evaluated against quiet hour rules or DND opt-out threshold.',
    status: 'EVALUATED',
    icon: Clock,
  },
  {
    type: 'SECURITY_ALERT',
    category: 'SURFACE_PROTECTION',
    desc: 'Rate-limiting threshold exceeded on authentication endpoint; temporary lock enacted.',
    status: 'THROTTLED',
    icon: Activity,
  },
  {
    type: 'PLATFORM_IMPERSONATION',
    category: 'PRIVILEGED_ACCESS',
    desc: 'Support operator session started with recorded customer ticket justification.',
    status: 'TIMED_SESSION',
    icon: FileCheck2,
  },
];

export function SecurityAuditability() {
  return (
    <section className="py-20 md:py-32 bg-surface-container-low border-b border-outline-variant/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono font-semibold tracking-wider uppercase mb-4">
            <Activity className="w-3.5 h-3.5" />
            <span>OPERATIONAL AUDITABILITY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-on-surface tracking-tight leading-tight">
            Important actions <br />
            <span className="text-primary">should be explainable.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-on-surface-variant leading-relaxed">
            DialPulse records important security, authorization, data-governance and administrative events so sensitive activity has an audit trail.
          </p>
        </div>

        {/* Timeline-Style Visual of Events */}
        <div className="bg-surface-container-lowest border border-outline-variant/80 rounded-3xl p-6 sm:p-8 shadow-xs mb-8">
          <div className="flex items-center justify-between border-b border-outline-variant/60 pb-4 mb-6">
            <div className="flex items-center gap-2">
              <FileCheck2 className="w-4 h-4 text-primary" />
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-on-surface">
                STRUCTURED_AUDIT_LOG
              </span>
            </div>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-surface-container text-on-surface-variant font-medium">
              ATTRIBUTED_TIMESTAMPS
            </span>
          </div>

          <div className="space-y-3">
            {AUDIT_EVENTS.map((evt) => {
              const Icon = evt.icon;
              return (
                <div 
                  key={evt.type}
                  className="p-4 rounded-2xl bg-surface-container-low border border-outline-variant/60 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-primary/40 transition-colors"
                >
                  <div className="flex items-start sm:items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-surface-container-lowest border border-outline-variant flex items-center justify-center text-primary shrink-0">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono font-bold text-on-surface">
                          {evt.type}
                        </span>
                        <span className="text-[10px] font-mono text-outline">
                          // {evt.category}
                        </span>
                      </div>
                      <p className="text-xs text-on-surface-variant mt-0.5">
                        {evt.desc}
                      </p>
                    </div>
                  </div>

                  <span className="self-start sm:self-center text-[10px] font-mono px-2 py-0.5 rounded bg-surface-container-lowest border border-outline-variant text-on-surface font-semibold shrink-0">
                    {evt.status}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA to Product capabilities */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <p className="text-xs sm:text-sm text-on-surface-variant font-mono">
            Explore how supervisory roles access team activity histories.
          </p>
          <Button href="/product" variant="outlined">
            Explore Product
            <ArrowRight className="w-4 h-4 ml-1.5" />
          </Button>
        </div>

      </div>
    </section>
  );
}
