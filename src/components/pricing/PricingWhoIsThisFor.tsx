import { Users, PhoneForwarded, ShieldCheck, Building2, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function PricingWhoIsThisFor() {
  const archetypes = [
    {
      category: 'Growing Team',
      recommendedPlan: 'Core',
      badge: 'Foundational Lead Organization',
      icon: Users,
      situation: 'Transitioning from uncoordinated spreadsheets, shared email inboxes, and messy chat threads into a structured sales pipeline.',
      characteristics: [
        'Needs clear lead ownership so reps never step on each other',
        'Visual Kanban stages representing sales qualification progression',
        'Standard contact history timeline aggregating customer touchpoints',
        'CSV contact import and export for external reporting',
      ],
      ctaText: 'Explore Core Architecture',
    },
    {
      category: 'Established Sales Operation',
      recommendedPlan: 'Pro',
      badge: 'High-Velocity Outbound Desk',
      icon: PhoneForwarded,
      situation: 'Reps dial actively every day; management requires in-browser dialing, automated call recording, and real-time supervisor presence.',
      characteristics: [
        'Zero-hardware WebRTC softphone embedded directly in the CRM',
        'Automated dual-track call audio recordings with in-app playback',
        'Mandatory call disposition tagging (Connected, Busy, Callback, Lost)',
        'Live floor presence telemetry (Available, On Call, Break, Offline)',
      ],
      ctaText: 'Explore Pro Telecalling',
    },
    {
      category: 'Communication-Heavy & Regulated',
      recommendedPlan: 'Business',
      badge: 'Policy & Cadence Discipline',
      icon: ShieldCheck,
      situation: 'Organizations operating under strict telecom consumer laws, requiring quiet-hour timezone barriers, DNC checks, and follow-up cadence.',
      characteristics: [
        'Zero-bypass DNC verification programmatically disabling dial buttons',
        'Automated quiet-hour timezone locks preventing illegal off-hours contact',
        'Cadence triggers & automated callback reminders for active reps',
        'Hierarchical RBAC (Owner, Team Lead, Telecaller, Admin)',
      ],
      ctaText: 'Explore Business Guardrails',
    },
    {
      category: 'Enterprise / Complex Operations',
      recommendedPlan: 'Enterprise',
      badge: 'Dedicated Tenant Partition',
      icon: Building2,
      situation: 'Multi-branch operations requiring single-tenant database isolation, private AI transcription perimeters, custom SIP trunks, and tailored SLAs.',
      characteristics: [
        'Dedicated PostgreSQL database partition with isolated KMS keys',
        'Private speech-to-text transcriptions with zero public AI model training',
        'Direct SIP trunk interconnect with existing corporate PBX systems',
        'Dedicated Technical Account Manager & custom engineering SLA',
      ],
      ctaText: 'Book Enterprise Consultation',
    },
  ];

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-[#00695C] text-xs font-mono font-semibold uppercase tracking-wider">
            <Users className="w-3.5 h-3.5" />
            Operational Archetypes
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 tracking-tight">
            Designed for the reality of your sales workflow
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Every tier reflects an operational stage in organizational maturity—from first pipeline structure to high-volume telecalling and enterprise isolation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {archetypes.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.category}
                className="p-7 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-xs hover:border-slate-300 transition-all flex flex-col justify-between"
              >
                <div className="space-y-5">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-teal-50 border border-teal-200/60 flex items-center justify-center text-[#00695C]">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-display font-bold text-slate-900">
                          {item.category}
                        </h3>
                        <span className="text-xs font-mono font-semibold text-[#00695C]">
                          {item.badge}
                        </span>
                      </div>
                    </div>
                    <span className="text-xs font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 border border-slate-200">
                      Tier: {item.recommendedPlan}
                    </span>
                  </div>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.situation}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-slate-100">
                    <span className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400 block">
                      Key Operational Requirements:
                    </span>
                    <ul className="space-y-2" role="list">
                      {item.characteristics.map((c, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-[#00695C] shrink-0 mt-0.5" />
                          <span>{c}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#00695C] hover:text-[#004D40] transition-colors"
                  >
                    <span>{item.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
