import React from 'react';
import { Headphones, UserCheck, Sliders, LineChart, Users2 } from 'lucide-react';

const AUDIENCE_ROLES = [
  {
    id: 'telecallers',
    role: 'TELECALLERS',
    quote: 'Need customer context quickly and need the next action to be clear.',
    detail: 'Designed with dense, legible lead views, fast interaction logging, clear follow-up queues, and one-click access to conversation context.',
    icon: Headphones,
  },
  {
    id: 'team-leads',
    role: 'TEAM LEADS',
    quote: "Need visibility across their team's activity without losing ownership.",
    detail: 'Equipped with team-scoped assignment boards, pacing metrics, live interaction distribution, and escalation routing.',
    icon: UserCheck,
  },
  {
    id: 'operations-it',
    role: 'OPERATIONS / IT',
    quote: 'Need control over users, configuration, workflows and system behavior.',
    detail: 'Supported by role-based access rules, audit logging, quiet-hour configurations, tenant boundaries, and bulk data controls.',
    icon: Sliders,
  },
  {
    id: 'owners',
    role: 'OWNERS / BUSINESS LEADERS',
    quote: "Need a clearer view of what's happening across customer operations.",
    detail: 'Provided with transparent pipeline progression, communication health oversight, conversion pacing, and operational visibility.',
    icon: LineChart,
  },
];

export function AboutAudience() {
  return (
    <section className="py-20 md:py-32 bg-surface-container-low border-b border-outline-variant/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono font-semibold tracking-wider uppercase mb-4">
            <Users2 className="w-3.5 h-3.5" />
            <span>OPERATIONAL AUDIENCE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-on-surface tracking-tight">
            Built around the people doing the work.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-on-surface-variant">
            Software succeeds when it respects the distinct pressures, goals, and responsibilities of each person in the customer journey.
          </p>
        </div>

        {/* Vertical Editorial Role Index */}
        <div className="divide-y divide-outline-variant/70">
          {AUDIENCE_ROLES.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={item.id}
                className="py-10 sm:py-12 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-baseline group"
              >
                {/* Role Header */}
                <div className="lg:col-span-4 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-2xl bg-surface-container-lowest border border-outline-variant flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-outline block">ROLE // 0{idx + 1}</span>
                    <h3 className="text-lg sm:text-xl font-display font-bold text-on-surface">
                      {item.role}
                    </h3>
                  </div>
                </div>

                {/* Role Quote & Realities */}
                <div className="lg:col-span-8 space-y-2">
                  <p className="text-lg sm:text-xl font-medium text-on-surface leading-snug">
                    "{item.quote}"
                  </p>
                  <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
