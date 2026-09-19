import { useState } from 'react';
import { HelpCircle, ChevronDown, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const faqs: FAQItem[] = [
  {
    question: 'Which teams is DialPulse designed for?',
    category: 'FIT & SCOPE',
    answer: 'DialPulse is designed for teams that make frequent phone calls and send follow-up messages to qualify leads, manage accounts, or close deals. It is particularly effective for growing sales teams, inside sales operations, telecalling squads, and organizations that need strict compliance safeguards and unified customer records.'
  },
  {
    question: 'Can DialPulse support multi-user teams with different access levels?',
    category: 'TEAM & RBAC',
    answer: 'Yes. DialPulse has a built-in role hierarchy including Owners, Team Leads, Telecallers, and Support agents. Each tier has strict data permissions: Telecallers only see their assigned pipeline and active queues, Team Leads supervise real-time calling activity and queues, and Owners maintain complete organizational, billing, and export controls.'
  },
  {
    question: 'Can leads be assigned between team members dynamically?',
    category: 'LEAD WORKFLOW',
    answer: 'Yes. Leads can be assigned automatically upon CSV upload or webhook ingestion via round-robin allocation, or manually assigned by Team Leads. Supervisors can also dynamically rebalance unworked or stalled queues to active telecallers in two clicks.'
  },
  {
    question: 'How do calling and messaging fit together in practice?',
    category: 'OMNICHANNEL',
    answer: 'Calling and messaging live inside the exact same customer timeline. Reps place calls directly in the browser via an embedded WebRTC softphone. If the customer does not answer, the agent can trigger a pre-approved WhatsApp or SMS template with one click. All audio recordings, notes, and messages are automatically attached to that contact record.'
  },
  {
    question: 'How does DialPulse handle communication controls and compliance?',
    category: 'COMPLIANCE',
    answer: 'DialPulse features a zero-bypass compliance engine. Before any call or message is dispatched, the system performs a pre-flight check against national/tenant Do-Not-Call (DNC) lists and calculates the recipient’s local timezone. If the recipient is outside legal calling hours (e.g. 9:00 AM – 8:00 PM), the dialing trigger is hard-locked.'
  },
  {
    question: 'Can existing customer data be imported into DialPulse?',
    category: 'DATA & MIGRATION',
    answer: 'Yes. DialPulse provides an automated CSV import engine with column auto-detection and field mapping. During ingestion, the system validates phone numbers and checks for existing duplicates to prevent database pollution. You can also define custom lead property schemas.'
  },
  {
    question: 'What reporting and analytics are available?',
    category: 'ANALYTICS',
    answer: 'DialPulse provides real-time operational dashboards tracking dial volume, connection rates, average handle time (AHT), and pipeline stage velocity. Heavy audit queries and CSV reports are processed by asynchronous background workers so analytical reporting never slows down active telecallers.'
  },
  {
    question: 'How does AI fit into the workflow, and is my data safe?',
    category: 'AI & PRIVACY',
    answer: 'DialPulse AI assists agents after calls by automatically generating bullet-point summaries, identifying customer objections, and drafting follow-up messages for human approval. AI operations run strictly within your tenant perimeter—your confidential voice recordings and transcripts are never shared or used to train public LLM models.'
  },
  {
    question: 'How are customer data boundaries and multi-tenancy handled?',
    category: 'SECURITY',
    answer: 'Every customer record, audio file, and audit event is logically isolated at the database level using strict tenant_id constraints and row-level security in PostgreSQL. Telephony provider credentials (Twilio, Telnyx, Meta) are encrypted at rest using AES-256 with tenant-scoped keys.'
  },
  {
    question: 'How do we get started with DialPulse?',
    category: 'ONBOARDING',
    answer: 'You can request a tailored architecture demonstration through our solutions team. We will walk through your current sales workflow, configure your custom pipelines, connect your telephony or messaging gateways, and import your existing contact data.'
  }
];

export function SolutionsFAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <div className="w-full bg-slate-50/70 rounded-3xl border border-slate-200/90 p-6 sm:p-8 lg:p-12">
      
      <div className="max-w-3xl mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-teal-100/70 border border-teal-200 text-[#00695C] text-xs font-mono font-semibold uppercase tracking-wider mb-3">
          <HelpCircle className="w-3.5 h-3.5" />
          Common Solutions Questions
        </div>
        <h2 className="text-2xl sm:text-4xl font-display font-bold text-slate-900 tracking-tight">
          Frequently Asked Questions
        </h2>
        <p className="text-slate-600 text-base sm:text-lg mt-2 leading-relaxed">
          Clear, authentic answers regarding workflow capabilities, architecture boundaries, and platform requirements.
        </p>
      </div>

      <div className="space-y-3">
        {faqs.map((faq, i) => {
          const isOpen = openIdx === i;
          return (
            <div 
              key={i}
              className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-2xs transition-all"
            >
              <button
                onClick={() => setOpenIdx(isOpen ? null : i)}
                className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50/50 transition-colors"
              >
                <div className="flex items-center gap-3.5">
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-500 shrink-0">
                    {faq.category}
                  </span>
                  <span className="text-sm sm:text-base font-bold font-display text-slate-900">
                    {faq.question}
                  </span>
                </div>
                <ChevronDown className={cn(
                  'w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200',
                  isOpen && 'transform rotate-180 text-[#00695C]'
                )} />
              </button>

              {isOpen && (
                <div className="px-5 sm:px-6 pb-6 pt-1 text-slate-600 text-sm leading-relaxed border-t border-slate-100 font-sans">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-8 pt-6 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono text-slate-500">
        <div>Have a specific operational question not listed here?</div>
        <Link
          to="/contact"
          className="inline-flex items-center gap-1.5 font-bold text-[#00695C] hover:text-[#004D40] transition-colors"
        >
          <span>Speak directly with our technical team</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

    </div>
  );
}
