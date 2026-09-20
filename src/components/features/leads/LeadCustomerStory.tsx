/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { UserPlus, UserCheck, PhoneCall, FileEdit, MessageSquare, CalendarClock, ArrowUpRight, ShieldCheck, Clock } from 'lucide-react';

export function LeadCustomerStory() {
  const storyEvents = [
    {
      id: 'step-1',
      badge: '01 • INTAKE',
      title: 'Lead Created',
      icon: UserPlus,
      timestamp: 'Sep 18, 09:15 AM',
      summary: 'Record entered via inbound web inquiry form with contact details and logistics interest.',
      details: [
        { label: 'Source', value: 'Inbound Web Form #WF-109' },
        { label: 'Tenant ID', value: 'tn_apac_prod_09' },
        { label: 'Initial State', value: 'New Unassigned' },
      ],
    },
    {
      id: 'step-2',
      badge: '02 • ASSIGNMENT',
      title: 'Owner Assigned',
      icon: UserCheck,
      timestamp: 'Sep 18, 09:30 AM',
      summary: 'Assigned to Priya Sharma within Enterprise Sales Team based on regional territory rules.',
      details: [
        { label: 'Assignee', value: 'Priya Sharma (Telecaller)' },
        { label: 'Team', value: 'Enterprise Sales (West Hub)' },
        { label: 'Scope', value: 'Owner Scoped Access' },
      ],
    },
    {
      id: 'step-3',
      badge: '03 • OUTREACH',
      title: 'Voice Call Connected',
      icon: PhoneCall,
      timestamp: 'Sep 18, 10:45 AM',
      summary: 'Telephony session completed (8m 14s). Telecaller verified requirements and operational scale.',
      details: [
        { label: 'Duration', value: '08m 14s' },
        { label: 'Outcome', value: 'Interested / Discovery Complete' },
        { label: 'Compliance Gate', value: 'Passed (Active Opt-In)' },
      ],
    },
    {
      id: 'step-4',
      badge: '04 • CONTEXT',
      title: 'Operator Note Logged',
      icon: FileEdit,
      timestamp: 'Sep 18, 11:02 AM',
      summary: 'Preserved critical operational details: 120-vehicle logistics fleet, SAP ERP integration needs.',
      details: [
        { label: 'Author', value: 'Priya Sharma' },
        { label: 'Type', value: 'Operational Memo' },
        { label: 'Custom Attribute', value: 'Fleet Size: 120+' },
      ],
    },
    {
      id: 'step-5',
      badge: '05 • MESSAGING',
      title: 'WhatsApp Message Sent',
      icon: MessageSquare,
      timestamp: 'Sep 18, 11:15 AM',
      summary: 'Sent requested technical spec sheet via supported WhatsApp template. Delivered and read.',
      details: [
        { label: 'Channel', value: 'WhatsApp Business API' },
        { label: 'Template', value: 'Tech_Architecture_v2' },
        { label: 'Status', value: 'Delivered & Read' },
      ],
    },
    {
      id: 'step-6',
      badge: '06 • PLANNING',
      title: 'Follow-Up Scheduled',
      icon: CalendarClock,
      timestamp: 'Sep 18, 11:30 AM',
      summary: 'Set next operational milestone for commercial proposal review with West Hub leadership.',
      details: [
        { label: 'Target Time', value: 'Sep 19, 03:30 PM' },
        { label: 'Type', value: 'Commercial Review' },
        { label: 'Reminder', value: 'Tenant In-App Queue' },
      ],
    },
    {
      id: 'step-7',
      badge: '07 • PIPELINE',
      title: 'Stage Moved to Qualified',
      icon: ArrowUpRight,
      timestamp: 'Sep 19, 11:45 AM',
      summary: 'Lead transitioned from New to Qualified. Stage history recorded with concurrency version increment.',
      details: [
        { label: 'Previous Stage', value: 'New Inbound' },
        { label: 'New Stage', value: 'Qualified Opportunity' },
        { label: 'Audit Version', value: 'Version Concurrency v4' },
      ],
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-[#0F172A] text-white relative overflow-hidden border-b border-slate-800">
      {/* Visual background subtle grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1E293B0A_1px,transparent_1px),linear-gradient(to_bottom,#1E293B0A_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00695C]/20 border border-[#80D5C4]/30 text-[#80D5C4] text-xs font-mono font-medium tracking-wider uppercase mb-4">
            <span>OPERATIONAL TIMELINE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold tracking-tight text-white mb-5">
            See the story, <br />
            not just the record.
          </h2>
          <p className="text-lg text-slate-300 leading-relaxed font-normal">
            Leads change over time. Calls happen. Messages are exchanged. Notes are added. Ownership can change. DialPulse is designed to keep those pieces close to the customer record.
          </p>
          <div className="mt-4 text-xs font-mono text-slate-400 bg-slate-800/60 inline-block px-3 py-1.5 rounded-lg border border-slate-700">
            * Illustrative workflow sequence. DialPulse records activity events as they occur; it does not force an arbitrary sequence.
          </div>
        </div>

        {/* Chronological Story Cards */}
        <div className="relative border-l-2 border-slate-800 ml-4 md:ml-6 pl-6 md:pl-10 space-y-8">
          {storyEvents.map((event) => {
            const Icon = event.icon;
            return (
              <div key={event.id} className="relative group">
                {/* Node icon on timeline */}
                <div className="absolute -left-[35px] md:-left-[51px] top-1.5 w-8 h-8 rounded-xl bg-slate-900 border-2 border-[#80D5C4] text-[#80D5C4] flex items-center justify-center shadow-md">
                  <Icon className="w-4 h-4" />
                </div>

                {/* Event Card */}
                <div className="rounded-2xl bg-slate-900/90 border border-slate-800 p-6 hover:border-slate-700 transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2.5">
                      <span className="text-[11px] font-mono font-bold text-[#80D5C4] tracking-wider">
                        {event.badge}
                      </span>
                      <h3 className="text-lg font-bold text-white">
                        {event.title}
                      </h3>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{event.timestamp}</span>
                    </div>
                  </div>

                  <p className="text-sm text-slate-300 leading-relaxed mb-4">
                    {event.summary}
                  </p>

                  {/* Micro Metadata Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3 border-t border-slate-800 text-xs">
                    {event.details.map((detail, idx) => (
                      <div key={idx} className="bg-slate-950/60 rounded-lg p-2.5 border border-slate-800/80">
                        <span className="text-[10px] text-slate-500 font-mono block uppercase">
                          {detail.label}
                        </span>
                        <span className="font-mono font-medium text-slate-200">
                          {detail.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Section Takeaway banner */}
        <div className="mt-12 rounded-2xl bg-slate-900 border border-slate-800 p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-sm text-slate-300">
            <ShieldCheck className="w-5 h-5 text-[#80D5C4] shrink-0" />
            <span>Every interaction retains its immutable timestamp, operator identity, and tenant association.</span>
          </div>
          <div className="text-xs font-mono text-slate-400">
            Audit Trail Standard
          </div>
        </div>

      </div>
    </section>
  );
}
