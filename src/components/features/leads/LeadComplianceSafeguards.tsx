/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ShieldCheck, BellOff, Clock, AlertTriangle, CheckCircle2, Lock, XCircle, ArrowRight, ShieldAlert } from 'lucide-react';

export function LeadComplianceSafeguards() {
  const safeguards = [
    {
      title: 'Opt-Out State',
      trigger: 'Explicit Unsubscribe / Opt-out Flag',
      action: 'Immediate Outbound Block',
      desc: 'Halts scheduled voice and automated message outreach as soon as an opt-out preference is recorded on the lead.',
      status: 'Enforced',
    },
    {
      title: 'Blocked / DNC List',
      trigger: 'Tenant DNC or System Blacklist Entry',
      action: 'Prevent Reach Across All Channels',
      desc: 'Matches inbound and outbound phone numbers against tenant-scoped restriction lists before allowing dialing.',
      status: 'Enforced',
    },
    {
      title: 'Temporary Communication Pause',
      trigger: 'Time-bound Snooze (e.g. Travel, Vacation)',
      action: 'Suspend Active Queues',
      desc: 'Holds leads in pause state until the configured resumption timestamp without losing queue placement.',
      status: 'Configurable',
    },
    {
      title: 'Channel Restriction',
      trigger: 'Customer Explicit Channel Preference',
      action: 'Route Only to Permitted Channel',
      desc: 'If customer prefers WhatsApp over voice calls, the telephony interface surfaces clear warnings prior to dialing.',
      status: 'Advisory Gate',
    },
    {
      title: 'Frequency Caps',
      trigger: 'Max Attempts per Day / Week Exceeded',
      action: 'Lock Lead Dialing for Cooldown',
      desc: 'Prevents multiple telecallers from calling the same customer repeatedly in quick succession.',
      status: 'Automated Throttle',
    },
    {
      title: 'Fatigue Control',
      trigger: 'Multi-Campaign Outreach Volume Check',
      action: 'Suppress Secondary Campaign Queue',
      desc: 'Limits cross-departmental outreach touches so customers are not overwhelmed by overlapping team initiatives.',
      status: 'Tenant Policy',
    },
    {
      title: 'Configured Quiet Hours',
      trigger: 'Time of Day outside Configured Window',
      action: 'Queue Suppression Outside Hours',
      desc: 'Restricts outgoing calls and messages during early mornings, late evenings, or statutory national holidays.',
      status: 'Time-Bound',
    },
  ];

  return (
    <div>
      {/* SECTION 11: Communication Preferences (Light/Editorial) */}
      <section className="py-20 md:py-28 bg-[#F8FAF8] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200 border border-slate-300 text-slate-700 text-xs font-mono font-medium tracking-wider uppercase mb-4">
              <span>PREFERENCE INTEGRITY</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-slate-900 tracking-tight mb-5">
              Customer preferences <br />
              belong in the workflow.
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed font-normal">
              Lead records can include communication preferences: opt-out state, temporary communication pause, preferred channel, and blocked status. These preferences feed into communication safeguards before outreach is permitted.
            </p>
          </div>

          {/* Three-Stage Preference Verification Pipeline */}
          <div className="rounded-[28px] bg-white border border-slate-200 p-8 sm:p-12 shadow-sm mb-10">
            <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-8">
              PRE-DISPATCH VERIFICATION GATING
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
              
              {/* Step 1 */}
              <div className="rounded-2xl bg-[#F8FAF8] p-6 border border-slate-200">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono text-slate-400">STAGE 01</span>
                  <BellOff className="w-4 h-4 text-[#00695C]" />
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">Contact Preference</h4>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Stored directly on the lead record: opt-out status, pause date, preferred channel, and customer communication parameters.
                </p>
                <div className="text-[11px] font-mono bg-white p-2.5 rounded-lg border border-slate-200 text-slate-700">
                  Lead Attributes: <code>opt_out=false, pause=null</code>
                </div>
              </div>

              {/* Step 2 */}
              <div className="rounded-2xl bg-[#F8FAF8] p-6 border border-slate-200">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono text-slate-400">STAGE 02</span>
                  <ShieldCheck className="w-4 h-4 text-[#00695C]" />
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">Compliance Check</h4>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Automated checks evaluate frequency caps, fatigue limits, quiet hour schedules, and tenant blocklists prior to outreach execution.
                </p>
                <div className="text-[11px] font-mono bg-white p-2.5 rounded-lg border border-slate-200 text-slate-700">
                  Evaluator: <code>QuietHoursPass=OK, DNC=Clear</code>
                </div>
              </div>

              {/* Step 3 */}
              <div className="rounded-2xl bg-teal-50/70 p-6 border border-teal-200">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono text-[#00695C]">STAGE 03</span>
                  <CheckCircle2 className="w-4 h-4 text-[#00695C]" />
                </div>
                <h4 className="text-lg font-bold text-[#00695C] mb-2">Communication Action</h4>
                <p className="text-xs text-slate-700 leading-relaxed mb-4">
                  Telephony dialer connects or message dispatches. If checks fail, outreach is blocked and logged with an audit reason.
                </p>
                <div className="text-[11px] font-mono bg-white p-2.5 rounded-lg border border-teal-200 text-[#00695C] font-semibold">
                  Action: <code>Dispatch Permitted</code>
                </div>
              </div>

            </div>

            {/* Note on legal compliance vs technical safeguards */}
            <div className="mt-8 pt-6 border-t border-slate-100 flex items-start gap-3 text-xs text-slate-500">
              <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              <span>
                Storing a preference or applying a safeguard assists operational hygiene. Recording a preference in software alone does not guarantee statutory legal compliance; organizations remain responsible for their communication policies.
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 12: Compliance-Aware Lead Workflow (Darker Section) */}
      <section className="py-20 md:py-28 bg-[#0F172A] text-white border-b border-slate-800 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="max-w-3xl mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/80 border border-red-800/60 text-red-300 text-xs font-mono font-medium tracking-wider uppercase mb-4">
              <span>COMMUNICATION GATES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight mb-5">
              Know when not to contact.
            </h2>
            <p className="text-lg text-slate-300 leading-relaxed font-normal">
              High-velocity outbound calling without discipline damages customer trust and burns operational energy. DialPulse equips lead workflows with multi-layer safeguards that halt outreach when parameters say no.
            </p>
          </div>

          {/* Grid of Safeguards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {safeguards.map((item, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-slate-900 border border-slate-800 p-6 flex flex-col justify-between hover:border-slate-700 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-base font-bold text-white">{item.title}</h3>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-[#80D5C4] border border-slate-700">
                      {item.status}
                    </span>
                  </div>

                  <div className="text-[11px] font-mono text-slate-400 mb-2">
                    Trigger: <span className="text-slate-300">{item.trigger}</span>
                  </div>

                  <div className="text-[11px] font-mono text-red-300 mb-4 flex items-center gap-1.5">
                    <XCircle className="w-3.5 h-3.5 text-red-400 shrink-0" />
                    <span>Action: {item.action}</span>
                  </div>

                  <p className="text-xs text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-800 text-[10px] font-mono text-slate-500">
                  Pre-Call Evaluation Gate
                </div>
              </div>
            ))}
          </div>

          {/* Mandatory Technical Disclaimer */}
          <div className="rounded-2xl bg-slate-950 border border-slate-800 p-6 flex items-start gap-4">
            <ShieldAlert className="w-5 h-5 text-amber-400 shrink-0 mt-1" />
            <div className="text-xs text-slate-300 leading-relaxed space-y-1">
              <strong className="text-white block font-semibold text-sm">Regulatory Notice & Scope Clarification</strong>
              <p>
                These are technical communication safeguards provided as software capabilities. They do not by themselves constitute a legal determination that a customer's outreach complies with every applicable national or local regulation (such as telemarketing regulations or opt-in statutes). Organizations configure and operate DialPulse according to their own legal counsel and regulatory policies.
              </p>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
