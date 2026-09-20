/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Link } from 'react-router-dom';
import { Phone, MessageSquare, ShieldCheck, BarChart3, ShieldAlert, Sparkles, ArrowRight } from 'lucide-react';

export function LeadRelatedFeatures() {
  const related = [
    {
      title: 'Calls & Telephony',
      slug: 'calls',
      route: '/features/calls',
      icon: Phone,
      summary: 'Make every call part of the customer story with outcomes, duration, and notes directly tied to lead history.',
      relationship: 'Interaction History',
      span: 'col-span-1 md:col-span-2 lg:col-span-2',
      bgGradient: 'bg-white',
    },
    {
      title: 'Omnichannel Messaging',
      slug: 'messaging',
      route: '/features/messaging',
      icon: MessageSquare,
      summary: 'Connect supported messaging activity directly with customer records, delivery states, and reading receipts.',
      relationship: 'Direct Communication',
      span: 'col-span-1 md:col-span-1 lg:col-span-1',
      bgGradient: 'bg-white',
    },
    {
      title: 'Teams & Hierarchies',
      slug: 'teams',
      route: '/features/teams',
      icon: ShieldCheck,
      summary: 'Role-based access control, team hierarchies, and supervisor delegation that shapes lead ownership.',
      relationship: 'Organizational Structure',
      span: 'col-span-1 md:col-span-1 lg:col-span-1',
      bgGradient: 'bg-white',
    },
    {
      title: 'Operational Reporting',
      slug: 'reports',
      route: '/features/reports',
      icon: BarChart3,
      summary: 'Aggregated analytics on contact attempt frequency, pipeline stage velocity, and team throughput metrics.',
      relationship: 'Performance Visibility',
      span: 'col-span-1 md:col-span-2 lg:col-span-2',
      bgGradient: 'bg-white',
    },
    {
      title: 'Communication Compliance',
      slug: 'compliance',
      route: '/features/compliance',
      icon: ShieldAlert,
      summary: 'Technical safeguards including opt-out controls, time-of-day quiet hours, and outreach frequency capping.',
      relationship: 'Workflow Safeguards',
      span: 'col-span-1 md:col-span-2 lg:col-span-2',
      bgGradient: 'bg-white',
    },
    {
      title: 'AI-Assisted Insights',
      slug: 'ai',
      route: '/features/ai',
      icon: Sparkles,
      summary: 'Automated conversation transcripts, concise operator summaries, and key takeaway generation.',
      relationship: 'Operational Leverage',
      span: 'col-span-1 md:col-span-1 lg:col-span-1',
      bgGradient: 'bg-white',
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-mono font-medium tracking-wider uppercase mb-4">
            <span>PLATFORM ECOSYSTEM</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-slate-900 tracking-tight mb-5">
            A lead rarely <br />
            works alone.
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed font-normal">
            Customer intake connects into every operational channel in DialPulse: voice, messaging, organizational scoping, operational reporting, and communication compliance.
          </p>
        </div>

        {/* Asymmetric Interconnected Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {related.map((item, idx) => {
            const Icon = item.icon;
            return (
              <Link
                key={idx}
                to={item.route}
                className={`${item.span} group rounded-[24px] bg-[#F8FAF8] border border-slate-200 p-8 flex flex-col justify-between hover:border-[#00695C] hover:bg-white transition-all shadow-xs hover:shadow-md`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-mono text-[#00695C] uppercase tracking-wider font-semibold">
                      {item.relationship}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center group-hover:bg-[#00695C] group-hover:text-white transition-colors">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>

                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-[#00695C]/10 text-[#00695C] flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#00695C] transition-colors">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.summary}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/80 flex items-center justify-between text-xs font-mono text-slate-400 group-hover:text-slate-600">
                  <span>Explore {item.title}</span>
                  <span className="text-[11px]">→</span>
                </div>
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
}
