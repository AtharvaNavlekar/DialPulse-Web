/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Link } from 'react-router-dom';
import { ArrowRight, Scale, ShieldAlert, Ban, Clock, VolumeX, AlertTriangle, ShieldCheck } from 'lucide-react';

const SAFEGUARDS = [
  {
    title: 'Opt-Out & Unsubscribe Handling',
    desc: 'Instantly suppresses outbound communication upon receiving opt-out requests across all channels.',
    icon: Ban,
    badge: 'Immediate Suppression',
  },
  {
    title: 'Quiet Hours Enforcement',
    desc: 'Blocks automated and manual outbound voice and messaging outside permitted operational time windows.',
    icon: Clock,
    badge: 'Time-Window Gating',
  },
  {
    title: 'Fatigue Controls & Frequency Caps',
    desc: 'Sets tenant-wide limits on touchpoint attempts per lead within daily and weekly intervals.',
    icon: VolumeX,
    badge: 'Rate Limiting',
  },
  {
    title: 'Blocked / DND State Management',
    desc: 'Prevents dialing numbers flagged on internal or scrubbed do-not-disturb registries.',
    icon: ShieldAlert,
    badge: 'Dialer Lockout',
  },
  {
    title: 'Channel Restrictions & Fallbacks',
    desc: 'Restricts outreach strictly to customer-authorized channels (e.g. WhatsApp only, no voice calls).',
    icon: Scale,
    badge: 'Channel Policy',
  },
  {
    title: 'Temporary Operational Pauses',
    desc: 'Enables supervisors to freeze specific communication queues during service updates or investigations.',
    icon: AlertTriangle,
    badge: 'Emergency Gate',
  },
];

export function FeaturesComplianceSpotlight() {
  return (
    <section className="py-20 md:py-28 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00695C]/10 border border-[#00695C]/20 text-[#00695C] text-xs font-mono font-semibold tracking-wider uppercase mb-5">
            <span>08 / PLATFORM SAFEGUARDS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-slate-900 tracking-tight leading-[1.12] mb-6">
            Put communication safeguards in the workflow.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal mb-4">
            Protect customer relationships and prevent operational overreach with native rules enforced before any outbound call or message is transmitted.
          </p>

          {/* Mandatory compliance disclaimer */}
          <div className="p-4 rounded-xl bg-amber-50/80 border border-amber-200/80 text-amber-900 text-xs sm:text-sm leading-relaxed">
            <p className="font-medium">
              "These are platform safeguards designed to help teams control communication workflows. They do not by themselves establish legal compliance with every applicable regulation."
            </p>
          </div>
        </div>

        {/* Safeguards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {SAFEGUARDS.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="rounded-[24px] bg-[#F8FAF8] border border-slate-200/80 p-6 flex flex-col justify-between hover:border-[#00695C]/40 hover:bg-white transition-all shadow-xs"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-700 shadow-2xs">
                      <Icon className="w-5 h-5 text-[#00695C]" />
                    </div>
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-600 border border-slate-200">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-200/60 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>Enforced at API Gateway</span>
                  <span className="text-emerald-700">Active</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Link */}
        <div className="text-center sm:text-left">
          <Link
            to="/features/compliance"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#00695C] hover:bg-[#004D40] text-white text-sm font-semibold tracking-normal transition-all shadow-xs group"
          >
            <span>Explore Compliance</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
