/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Users, Phone, MessageSquare, Clock, ShieldCheck, BarChart3, ArrowRight, CornerDownRight } from 'lucide-react';

interface JourneyStep {
  step: string;
  title: string;
  subtitle: string;
  meta: string;
  icon: any;
  highlight: string;
}

const JOURNEY_STEPS: JourneyStep[] = [
  {
    step: '01',
    title: 'LEAD',
    subtitle: 'Intake & Context',
    meta: 'Assigned with custom properties and priority tag',
    icon: Users,
    highlight: '#00695C',
  },
  {
    step: '02',
    title: 'CALL',
    subtitle: 'Outbound Voice',
    meta: 'Logged duration, timestamp, and disposition notes',
    icon: Phone,
    highlight: '#00695C',
  },
  {
    step: '03',
    title: 'MESSAGE',
    subtitle: 'Template Dispatch',
    meta: 'WhatsApp / SMS confirmation within quiet hours',
    icon: MessageSquare,
    highlight: '#1F3A5F',
  },
  {
    step: '04',
    title: 'FOLLOW-UP',
    subtitle: 'Scheduled Check-in',
    meta: 'Next touchpoint pinned directly to customer history',
    icon: Clock,
    highlight: '#00695C',
  },
  {
    step: '05',
    title: 'TEAM',
    subtitle: 'Role & Assignment',
    meta: 'Lead scope enforced between telecaller and manager',
    icon: ShieldCheck,
    highlight: '#1F3A5F',
  },
  {
    step: '06',
    title: 'REPORT',
    subtitle: 'Operational Telemetry',
    meta: 'Pacing, conversion rate, and SLA visibility',
    icon: BarChart3,
    highlight: '#00695C',
  },
  {
    step: '07',
    title: 'NEXT ACTION',
    subtitle: 'Continuous Momentum',
    meta: 'Stage transition triggered without lost context',
    icon: CornerDownRight,
    highlight: '#1F3A5F',
  },
];

export function FeaturesWorkflowJourney() {
  return (
    <section className="py-20 md:py-28 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <span className="text-xs font-mono font-semibold tracking-wider text-[#00695C] uppercase block mb-3">
            CONNECTED EXECUTION
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-slate-900 tracking-tight leading-[1.12] mb-6">
            Features work better <br />
            when they work together.
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 leading-relaxed font-normal">
            "A customer workflow doesn't happen one feature at a time. A lead becomes a conversation. A conversation becomes follow-up. Follow-up becomes activity. Activity becomes visibility."
          </p>
        </div>

        {/* Visual Journey Nodes */}
        <div className="relative">
          {/* Desktop connecting guide line */}
          <div className="hidden lg:block absolute top-1/2 left-4 right-4 h-0.5 bg-gradient-to-r from-slate-200 via-[#00695C]/20 to-slate-200 -translate-y-8 z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-4 relative z-10">
            {JOURNEY_STEPS.map((item, idx) => {
              const Icon = item.icon;
              const isLast = idx === JOURNEY_STEPS.length - 1;

              return (
                <div
                  key={item.step}
                  className="rounded-[20px] bg-[#F8FAF8] border border-slate-200 p-4 sm:p-5 flex flex-col justify-between hover:border-[#00695C]/50 hover:bg-white transition-all shadow-xs group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-mono font-bold text-slate-400 group-hover:text-[#00695C] transition-colors">
                        {item.step}
                      </span>
                      <div className="w-8 h-8 rounded-xl bg-white border border-slate-200/80 flex items-center justify-center text-slate-700 group-hover:text-[#00695C] transition-colors shadow-xs">
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>

                    <div className="text-xs font-mono font-bold text-slate-900 uppercase tracking-wide mb-1">
                      {item.title}
                    </div>
                    <div className="text-xs font-medium text-[#00695C] mb-2">
                      {item.subtitle}
                    </div>
                    <p className="text-[11px] text-slate-500 leading-relaxed">
                      {item.meta}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center justify-between text-[10px] font-mono text-slate-400">
                    <span>STAGE {item.step}</span>
                    {!isLast && (
                      <ArrowRight className="w-3 h-3 text-slate-300 group-hover:text-[#00695C] group-hover:translate-x-0.5 transition-all" />
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-8 text-center text-xs text-slate-400 font-normal">
            * Operational sequences vary based on organization rules, intake channels, and team workflows.
          </div>
        </div>
      </div>
    </section>
  );
}
