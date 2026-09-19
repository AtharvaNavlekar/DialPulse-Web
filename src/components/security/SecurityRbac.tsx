import React from 'react';
import { UserCheck, Shield, Users, Building, Laptop, Crown } from 'lucide-react';

const ROLES = [
  {
    role: 'TELECALLER',
    scope: 'SELF',
    desc: 'Constrained to assigned leads, outbound tasks, active conversations, and individual performance timelines.',
    icon: UserCheck,
    tag: 'INDIVIDUAL_SCOPE',
  },
  {
    role: 'TL (TEAM LEAD)',
    scope: 'TEAM',
    desc: 'Supervisory visibility across direct team members, lead reallocation, live queues, and team disposition metrics.',
    icon: Users,
    tag: 'TEAM_SCOPE',
  },
  {
    role: 'TL HEAD',
    scope: 'MULTI-TEAM',
    desc: 'Regional or divisional oversight across multiple team clusters, pacing analytics, and cross-team escalation review.',
    icon: Shield,
    tag: 'DIVISION_SCOPE',
  },
  {
    role: 'IT ADMINISTRATOR',
    scope: 'COMPANY',
    desc: 'User lifecycle provisioning, security controls, quiet hour configurations, export authorisations, and system parameters.',
    icon: Laptop,
    tag: 'SYSTEM_SCOPE',
  },
  {
    role: 'OWNER',
    scope: 'COMPANY',
    desc: 'Comprehensive operational governance, financial administrative access, organization-wide policy decisions, and tenancy controls.',
    icon: Crown,
    tag: 'TENANT_SCOPE',
  },
  {
    role: 'CTO / TECH LEAD',
    scope: 'COMPANY',
    desc: 'Technical integration configurations, webhook oversight, AI quota policies, audit log access, and compliance parameter enforcement.',
    icon: Building,
    tag: 'INFRASTRUCTURE_SCOPE',
  },
];

export function SecurityRbac() {
  return (
    <section className="py-20 md:py-32 bg-surface-container-low border-b border-outline-variant/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono font-semibold tracking-wider uppercase mb-4">
            <UserCheck className="w-3.5 h-3.5" />
            <span>ACCESS GOVERNANCE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-on-surface tracking-tight leading-tight">
            Not everyone needs <br />
            <span className="text-primary">the same access.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-on-surface-variant leading-relaxed">
            Different roles are designed around different responsibilities and scopes. Access can be constrained to an individual's records, a team, managed teams or broader tenant-level operations.
          </p>
        </div>

        {/* Role Hierarchy Visual Index */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ROLES.map((r) => {
            const Icon = r.icon;
            return (
              <div 
                key={r.role}
                className="p-6 rounded-3xl bg-surface-container-lowest border border-outline-variant/80 hover:border-primary/50 transition-colors flex flex-col justify-between shadow-2xs group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-surface-container border border-outline-variant text-on-surface-variant font-bold">
                      SCOPE: {r.scope}
                    </span>
                  </div>

                  <h3 className="text-lg font-display font-bold text-on-surface mb-1">
                    {r.role}
                  </h3>

                  <p className="text-xs text-on-surface-variant leading-relaxed mb-4">
                    {r.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-outline-variant/40 text-[10px] font-mono text-primary font-semibold">
                  // {r.tag}
                </div>
              </div>
            );
          })}
        </div>

        {/* Scope disclaimer */}
        <div className="mt-8 text-xs text-on-surface-variant font-mono text-center max-w-2xl mx-auto">
          * Specific capability configurations and workflow assignments are governed at the tenant administration level.
        </div>

      </div>
    </section>
  );
}
