/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { StickyNote, Sliders, CheckCircle2, User, Clock, ShieldCheck, Database } from 'lucide-react';

export function LeadNotesCustomFields() {
  const exampleNotes = [
    {
      id: 1,
      author: 'Priya Sharma (Telecaller)',
      role: 'Enterprise Sales',
      timestamp: 'Today, 11:02 AM',
      note: 'Asked for pricing details on 50-agent seat tier and API throughput limits.',
      context: 'Call Disposition: Interested',
    },
    {
      id: 2,
      author: 'Priya Sharma (Telecaller)',
      role: 'Enterprise Sales',
      timestamp: 'Today, 11:15 AM',
      note: 'Preferred WhatsApp for technical documentation delivery over email.',
      context: 'Preference Update: Channel Tagged',
    },
    {
      id: 3,
      author: 'Kunal Verma (Team Lead)',
      role: 'Supervisory Review',
      timestamp: 'Today, 02:20 PM',
      note: 'Requested follow-up tomorrow at 3:30 PM with logistics solution engineer present.',
      context: 'Milestone Created',
    },
  ];

  const customFieldExamples = [
    {
      label: 'Property / Fleet Type',
      key: 'cf_fleet_category',
      type: 'Dropdown (Single Select)',
      sampleValue: 'Heavy Commercial Transport',
      purpose: 'Categorizes client vehicle base for accurate telephony script assignment.',
    },
    {
      label: 'Specific Requirement',
      key: 'cf_operational_req',
      type: 'Multi-line Text',
      sampleValue: 'SAP S/4HANA ERP dispatch sync & real-time telecaller disposition webhook.',
      purpose: 'Records bespoke integration or operational requirements without modifying CRM schemas.',
    },
    {
      label: 'Acquisition Source Detail',
      key: 'cf_campaign_subsource',
      type: 'Text (Indexed)',
      sampleValue: 'Q3_Logistics_Summit_Booth_B4',
      purpose: 'Preserves fine-grained marketing and event attribution on imported lead batches.',
    },
    {
      label: 'Regional Operating Hub',
      key: 'cf_operating_hub',
      type: 'Dropdown (Single Select)',
      sampleValue: 'West Zone • Nhava Sheva Facility',
      purpose: 'Assists automatic team routing to the appropriate regional supervisor.',
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION 9: Notes & Customer Context */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-24">
          
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-mono font-medium tracking-wider uppercase mb-4">
              <span>OPERATIONAL CONTEXT</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 tracking-tight mb-5">
              Don't make the team <br />
              rebuild the story.
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal mb-6">
              Notes give teams a place to preserve operational context around customer interactions. When a telecaller takes a call or a supervisor reviews a file, previous discussions remain immediately accessible.
            </p>
            <div className="p-4 rounded-2xl bg-[#F8FAF8] border border-slate-200 text-xs text-slate-600 space-y-2">
              <div className="font-semibold text-slate-800 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#00695C]" />
                Preserved across re-assignment
              </div>
              <p>
                When ownership changes from one telecaller to another, chronological notes prevent duplicate questioning and preserve customer goodwill.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-[24px] bg-[#F8FAF8] border border-slate-200 p-6 sm:p-8 shadow-sm space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-200 text-xs">
                <span className="font-mono text-slate-500 uppercase">CHRONOLOGICAL NOTE STREAM</span>
                <span className="font-mono text-slate-400">Lead: #LD-8402</span>
              </div>

              {exampleNotes.map((note) => (
                <div key={note.id} className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-[10px] font-bold text-slate-600">
                        {note.author.charAt(0)}
                      </div>
                      <span className="text-xs font-bold text-slate-900">{note.author}</span>
                      <span className="text-[10px] font-mono text-slate-400">({note.role})</span>
                    </div>
                    <span className="text-[11px] font-mono text-slate-400 flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {note.timestamp}
                    </span>
                  </div>

                  <p className="text-sm text-slate-800 font-medium pl-8 mb-2">
                    "{note.note}"
                  </p>

                  <div className="pl-8 flex items-center justify-between text-[11px] font-mono text-slate-500">
                    <span className="bg-slate-50 px-2 py-0.5 rounded border border-slate-100">
                      {note.context}
                    </span>
                    <span className="text-slate-400">Read-only audit record</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* SECTION 10: Custom Fields */}
        <div className="pt-16 border-t border-slate-200">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-mono font-medium tracking-wider uppercase mb-4">
              <span>FLEXIBLE SCHEMAS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 tracking-tight mb-5">
              Your workflow isn't the <br />
              same as everyone else's.
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Tenant-defined custom fields allow teams to capture additional information specific to their workflow without changing the underlying product structure. Configure attributes that mirror your industry language.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {customFieldExamples.map((item, idx) => (
              <div key={idx} className="rounded-[24px] bg-[#F8FAF8] border border-slate-200 p-6 shadow-sm">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Sliders className="w-4 h-4 text-[#00695C]" />
                    <h4 className="font-bold text-slate-900 text-base">{item.label}</h4>
                  </div>
                  <span className="text-[10px] font-mono bg-white text-slate-600 border border-slate-200 px-2 py-0.5 rounded-full">
                    {item.type}
                  </span>
                </div>

                <div className="text-xs font-mono text-slate-400 mb-4">
                  Schema Key: <code className="text-slate-600 bg-slate-200/60 px-1.5 py-0.5 rounded">{item.key}</code>
                </div>

                <div className="p-3 bg-white rounded-xl border border-slate-200 mb-3">
                  <span className="text-[10px] font-mono text-slate-400 uppercase block mb-1">RECORD VALUE EXAMPLE</span>
                  <span className="text-sm font-semibold text-slate-800">{item.sampleValue}</span>
                </div>

                <p className="text-xs text-slate-500 leading-relaxed">
                  {item.purpose}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
