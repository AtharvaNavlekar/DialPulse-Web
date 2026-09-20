/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Phone, Tag, UserCheck, FileText, BellOff, History, ArrowRight } from 'lucide-react';

export function LeadInformationDetails() {
  const categories = [
    {
      icon: Phone,
      group: 'CONTACT',
      title: 'Direct Reachability',
      description: 'Primary identifiers essential for verified voice, messaging, and email communications.',
      fields: [
        { name: 'Lead Name', desc: 'Full individual name and organizational account affiliation.' },
        { name: 'Phone Number', desc: 'Normalized telephone identifier with country and region codes.' },
        { name: 'Email Address', desc: 'Electronic address for formal collateral and documentation dispatch.' },
      ],
      tag: 'Core Identity',
    },
    {
      icon: Tag,
      group: 'PIPELINE',
      title: 'Workflow Progression',
      description: 'Standardized operational markers that indicate readiness, urgency, and customer origin.',
      fields: [
        { name: 'Stage', desc: 'Discrete step in your organization’s sales or qualification funnel.' },
        { name: 'Priority', desc: 'Triage indicator (e.g., Low, Medium, High) directing operator focus.' },
        { name: 'Acquisition Source', desc: 'Channel or campaign origin attribute for performance attribution.' },
      ],
      tag: 'Triage & Funnel',
    },
    {
      icon: UserCheck,
      group: 'OWNERSHIP',
      title: 'Responsibility & Scope',
      description: 'Defines exactly which operator and managerial group is accountable for the relationship.',
      fields: [
        { name: 'Assigned Representative', desc: 'Named telecaller or sales representative responsible for outreach.' },
        { name: 'Responsible Team', desc: 'Team unit governing assignment rules, quotas, and supervisor oversight.' },
        { name: 'Tenant Scoping', desc: 'Strict organizational isolation ensuring zero cross-tenant exposure.' },
      ],
      tag: 'Accountability',
    },
    {
      icon: FileText,
      group: 'CONTEXT',
      title: 'Operational Memory',
      description: 'Preserves unstructured operator memos and structured tenant-specific data points.',
      fields: [
        { name: 'Freeform Notes', desc: 'Chronological memos capturing customer objections, timelines, and preferences.' },
        { name: 'Custom Fields', desc: 'Tenant-configured data attributes (e.g., Fleet Size, ERP Type, Budget).' },
        { name: 'Version Control', desc: 'Concurrency metadata safeguarding against conflicting overwrites.' },
      ],
      tag: 'Custom Data',
    },
    {
      icon: BellOff,
      group: 'PREFERENCES',
      title: 'Outreach Safeguards',
      description: 'Customer-expressed parameters that prevent unwanted or intrusive communications.',
      fields: [
        { name: 'Opt-Out State', desc: 'Explicit consent withdrawal stopping outbound automated and manual reach.' },
        { name: 'Temporary Pause', desc: 'Time-bound quiet status preventing outreach during customer unavailability.' },
        { name: 'Channel Preferences', desc: 'Customer guidance favoring voice, WhatsApp, or email interaction.' },
      ],
      tag: 'Compliance Controls',
    },
    {
      icon: History,
      group: 'ACTIVITY CONTEXT',
      title: 'Interaction History',
      description: 'Granular log of attempted and connected communications tied to this record.',
      fields: [
        { name: 'Contact-Attempt Counters', desc: 'Quantified tallies of dial attempts to prevent lead burnout.' },
        { name: 'Last Touch Timestamp', desc: 'Immediate visibility into when the lead was last contacted.' },
        { name: 'Activity Linkage', desc: 'Direct association with call logs, messages, and ticket inquiries.' },
      ],
      tag: 'Interaction Depth',
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-[#F8FAF8] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200/80 border border-slate-300 text-slate-700 text-xs font-mono font-medium tracking-wider uppercase mb-4">
            <span>STRUCTURED DATA MODEL</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-slate-900 tracking-tight mb-5">
            The details that keep <br />
            the work moving.
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed font-normal">
            Every lead in DialPulse is structured to support clean operations: clear identification, visible ownership, real-time stage tracking, customer communication preferences, and deep context.
          </p>
        </div>

        {/* Asymmetric 2x3 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <div
                key={idx}
                className="rounded-[24px] bg-white border border-slate-200/90 p-7 flex flex-col justify-between shadow-sm hover:border-[#00695C]/40 transition-all"
              >
                <div>
                  {/* Category Top Banner */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-mono font-bold text-[#00695C] tracking-wider">
                      {cat.group}
                    </span>
                    <span className="text-[10px] font-mono bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full">
                      {cat.tag}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-xl bg-[#00695C]/10 text-[#00695C] flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">
                      {cat.title}
                    </h3>
                  </div>

                  <p className="text-xs text-slate-500 leading-relaxed mb-6 font-normal">
                    {cat.description}
                  </p>

                  {/* Attributes list */}
                  <div className="space-y-3 pt-2 border-t border-slate-100">
                    {cat.fields.map((field, fIdx) => (
                      <div key={fIdx} className="text-xs">
                        <span className="font-semibold text-slate-800 block font-mono text-[11px]">
                          • {field.name}
                        </span>
                        <span className="text-slate-500 leading-normal pl-3 block text-[11px]">
                          {field.desc}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                  <span>Verified Parameter</span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-300" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
