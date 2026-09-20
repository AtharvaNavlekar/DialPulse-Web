import { Check, X, ArrowRight, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ComparisonRow {
  area: string;
  before: string;
  withDialpulse: string;
}

const comparisonRows: ComparisonRow[] = [
  {
    area: 'Lead Ingestion & Assignment',
    before: 'Leads arrive in scattered spreadsheets and email alerts; reps manually cherry-pick inquiries while others sit untouched for days.',
    withDialpulse: 'Automated CSV ingestion, instant deduplication, and automatic assignment into configured pipeline stages.'
  },
  {
    area: 'Telephony & Voice Calling',
    before: 'Telecallers dial manually from personal mobile phones or clunky separate desktop PBX software with zero connection to lead notes.',
    withDialpulse: 'Embedded browser WebRTC softphone with one-click dialing, live on-call notes, and automatic dual-track audio recording.'
  },
  {
    area: 'Follow-Up Discipline',
    before: 'Callbacks rely on memory or scattered notes; high volumes of interested leads stall or drop off when reps lack automated reminders.',
    withDialpulse: 'Mandatory call disposition logging and automated follow-up reminder alerts directly in the agent’s softphone drawer.'
  },
  {
    area: 'Multi-Channel Outreach',
    before: 'If a prospect misses a call, the outreach stalls unless the rep manually opens personal WhatsApp or email clients.',
    withDialpulse: 'One-click multi-channel fallback: dispatch pre-approved WhatsApp or SMS templates immediately from the lead profile.'
  },
  {
    area: 'Team & Queue Oversight',
    before: 'Managers have no live visibility into who is currently on calls, idle, or overloaded until weekly self-reported meetings.',
    withDialpulse: 'Real-time agent presence feeds and dynamic lead queue redistribution across active telecallers in two clicks.'
  },
  {
    area: 'Communication Compliance',
    before: 'Reps inadvertently dial after 8:00 PM or buzz unconsented prospects on Do-Not-Call lists, creating compliance liability.',
    withDialpulse: 'Strict pre-flight compliance verification with hard quiet-hour and DNC locks before any call or message is permitted.'
  },
  {
    area: 'Analytics & Reporting',
    before: 'Managers export massive spreadsheets that cause UI freezing and database timeouts just to compile basic weekly metrics.',
    withDialpulse: 'Real-time handle-time dashboards powered by asynchronous background workers that process large CSV exports without UI lag.'
  },
  {
    area: 'Post-Call Documentation',
    before: 'Reps spend substantial time each day typing manual summaries, leading to hasty or missing notes on key objections and next steps.',
    withDialpulse: 'Tenant-isolated AI automatically transcribes calls and extracts structured bullet points within your private security boundary.'
  }
];

export function SolutionsComparison() {
  return (
    <div className="w-full bg-slate-900 text-white rounded-3xl p-6 sm:p-8 lg:p-12 border border-slate-800 shadow-2xl relative overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(0,105,92,0.15),transparent_70%)] pointer-events-none" />

      <div className="max-w-3xl mb-10 relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-teal-950 border border-teal-500/30 text-teal-400 text-xs font-mono font-medium tracking-wide uppercase mb-3">
          <ShieldCheck className="w-3.5 h-3.5" />
          Operational Transformation
        </div>
        <h2 className="text-2xl sm:text-4xl font-display font-bold text-white tracking-tight">
          How Workflows Change With DialPulse
        </h2>
        <p className="text-slate-400 text-base sm:text-lg mt-2 leading-relaxed">
          Compare common disjointed sales operations with DialPulse’s unified, policy-driven operating architecture.
        </p>
      </div>

      {/* Comparison Table */}
      <div className="w-full overflow-x-auto relative z-10">
        <table className="w-full text-left border-collapse text-sm">
          <thead>
            <tr className="border-b border-slate-800 text-xs font-mono uppercase tracking-wider text-slate-400">
              <th className="py-4 px-4 w-1/4">Operational Area</th>
              <th className="py-4 px-4 w-3/8 text-rose-300/90">Traditional / Disjointed Setup</th>
              <th className="py-4 px-4 w-3/8 text-teal-300">With DialPulse Operating Layer</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/80 font-sans">
            {comparisonRows.map((row, idx) => (
              <tr key={idx} className="hover:bg-slate-800/30 transition-colors">
                <td className="py-4 px-4 font-bold text-white align-top">
                  <div className="text-sm font-display">{row.area}</div>
                </td>

                <td className="py-4 px-4 text-xs text-slate-300/90 leading-relaxed align-top">
                  <div className="flex items-start gap-2.5">
                    <div className="w-4 h-4 rounded-full bg-rose-950/80 text-rose-400 flex items-center justify-center shrink-0 mt-0.5 border border-rose-500/30">
                      <X className="w-2.5 h-2.5 stroke-[3]" />
                    </div>
                    <span>{row.before}</span>
                  </div>
                </td>

                <td className="py-4 px-4 text-xs text-slate-200 leading-relaxed align-top">
                  <div className="flex items-start gap-2.5">
                    <div className="w-4 h-4 rounded-full bg-teal-950 text-teal-300 flex items-center justify-center shrink-0 mt-0.5 border border-teal-500/30">
                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                    </div>
                    <span className="font-medium text-teal-50/95">{row.withDialpulse}</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-8 pt-6 border-t border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono text-slate-400 relative z-10">
        <div>
          <span>Verified Operating Capabilities • No Fabricated Benchmarks</span>
        </div>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 text-teal-300 hover:text-teal-200 font-semibold transition-colors"
        >
          <span>Schedule an operational architecture audit</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

    </div>
  );
}
