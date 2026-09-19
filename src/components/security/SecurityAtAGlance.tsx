import React from 'react';
import { Database, UserCheck, Key, FileCheck2, ShieldCheck, Sparkles, CheckCircle2 } from 'lucide-react';

const GLANCE_ITEMS = [
  {
    id: 'tenant-isolation',
    title: 'TENANT ISOLATION',
    summary: 'Customer data is scoped by tenant on the server.',
    description: 'Every database query and background worker is bound to a verified tenant context, preventing inadvertent cross-tenant data leakage.',
    icon: Database,
  },
  {
    id: 'rbac',
    title: 'ROLE-BASED ACCESS',
    summary: 'Users receive access according to role and scope.',
    description: 'Privileges are bounded from individual telecaller scope to team leadership and tenant-wide operational administration.',
    icon: UserCheck,
  },
  {
    id: 'controlled-privilege',
    title: 'CONTROLLED PRIVILEGE',
    summary: 'Sensitive administrative actions require appropriate authorization.',
    description: 'Elevated actions, configuration alterations, and platform staff impersonation sessions require explicit justification and logging.',
    icon: Key,
  },
  {
    id: 'auditability',
    title: 'AUDITABILITY',
    summary: 'Important security and governance events are recorded.',
    description: 'Authentication attempts, access denials, data exports, lead modifications, and compliance alerts generate detailed audit records.',
    icon: FileCheck2,
  },
  {
    id: 'secure-sessions',
    title: 'SECURE SESSIONS',
    summary: 'Authentication uses controlled sessions and token lifecycle mechanisms.',
    description: 'Credentials are cryptographically hashed, sessions are short-lived, refresh tokens are securely rotated, and login attempts are rate-limited.',
    icon: ShieldCheck,
  },
  {
    id: 'ai-safeguards',
    title: 'AI SAFEGUARDS',
    summary: 'AI workflows include permission, quota and supported text-sanitization controls.',
    description: 'Automated redaction masks detected email and phone patterns prior to external AI inference, with server-managed model credentials.',
    icon: Sparkles,
  },
];

export function SecurityAtAGlance() {
  return (
    <section className="py-20 md:py-28 bg-surface-container-low border-b border-outline-variant/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono font-semibold tracking-wider uppercase mb-4">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>FOUNDATIONAL ARCHITECTURE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-on-surface tracking-tight leading-tight">
            Security at a glance
          </h2>
          <p className="mt-4 text-base sm:text-lg text-on-surface-variant">
            A comprehensive overview of how DialPulse enforces technical boundaries across accounts, identities, workflows, and infrastructure.
          </p>
        </div>

        {/* 6-item Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {GLANCE_ITEMS.map((item) => {
            const Icon = item.icon;
            return (
              <div 
                key={item.id}
                className="p-8 rounded-3xl bg-surface-container-lowest border border-outline-variant/80 hover:border-primary/50 transition-colors flex flex-col justify-between shadow-2xs group"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>

                  <span className="text-xs font-mono font-bold tracking-widest text-primary uppercase block mb-2">
                    {item.title}
                  </span>

                  <h3 className="text-lg font-display font-bold text-on-surface mb-2 leading-snug">
                    {item.summary}
                  </h3>

                  <p className="text-sm text-on-surface-variant leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-outline-variant/40 text-[10px] font-mono text-outline">
                  // TECHNICAL_SAFEGUARD
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
