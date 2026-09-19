import { useState } from 'react';
import { 
  Building2, 
  Users2, 
  PhoneForwarded, 
  MessageSquare, 
  ShieldCheck, 
  Scale, 
  ArrowRight,
  Check
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface Situation {
  id: string;
  badge: string;
  title: string;
  description: string;
  primaryFriction: string;
  dialpulseFit: string[];
  suggestedSolution: string;
}

const operationalSituations: Situation[] = [
  {
    id: 'growing-team',
    badge: 'STAGE: SCALING',
    title: 'Growing Sales Teams',
    description: 'Teams that have outgrown shared spreadsheets and informal email threads, requiring standardized pipeline stages and contact ownership.',
    primaryFriction: 'Reps accidentally contact the same prospects twice, or leads go cold while waiting for manual assignment.',
    dialpulseFit: [
      'Automated CSV lead intake with automatic deduplication.',
      'Visual drag-and-drop Kanban pipeline stages.',
      'Custom lead property schemas to match your sales qualification process.'
    ],
    suggestedSolution: '01 Manage Leads & Custom Pipelines'
  },
  {
    id: 'multi-user',
    badge: 'STAGE: MULTI-TIER',
    title: 'Multi-User Sales Operations',
    description: 'Organizations structured across Owners, Team Leads/Supervisors, and dedicated telecallers requiring role-bounded permissions.',
    primaryFriction: 'Managers have no live oversight over who is currently dialing, while reps have excessive access to export company databases.',
    dialpulseFit: [
      'Strict Role-Based Access Control (RBAC) tiers.',
      'Real-time agent presence monitoring (on-call, idle, wrap-up).',
      'Instant lead redistribution to active telecallers.'
    ],
    suggestedSolution: '02 Run Sales Teams & Presence'
  },
  {
    id: 'high-volume',
    badge: 'STAGE: VOLUME CALLING',
    title: 'High-Volume Telecalling Workflows',
    description: 'Teams making 50 to 500+ outbound dials per day that need rapid one-click dialing and frictionless post-call logging.',
    primaryFriction: 'Dialing manually from desk phones or copy-pasting numbers into external PBX apps eats up 3+ hours per agent each day.',
    dialpulseFit: [
      'Direct in-browser WebRTC softphone dialing with zero hardware setup.',
      'Dual-track audio recording automatically mapped to contact history.',
      'One-click disposition outcome tagging (Interested, Call Back, Busy).'
    ],
    suggestedSolution: '03 Customer Communication Center'
  },
  {
    id: 'communication-heavy',
    badge: 'STAGE: OMNICHANNEL',
    title: 'Communication-Heavy Sales Processes',
    description: 'Processes requiring continuous multi-touch engagement across voice calls, WhatsApp updates, and follow-up SMS templates.',
    primaryFriction: 'Prospects rarely answer unknown calls; reps have no standardized way to send instant WhatsApp follow-up messages.',
    dialpulseFit: [
      'Instant multi-channel fallback: dispatch WhatsApp/SMS when calls are missed.',
      'Unified customer conversation thread combining voice logs and text messages.',
      'Delivery receipts and message status tracking across gateways.'
    ],
    suggestedSolution: '04 Follow-Up Cadence & Fallback'
  },
  {
    id: 'operational-control',
    badge: 'STAGE: ENTERPRISE AUDIT',
    title: 'Teams Needing Stronger Operational Control',
    description: 'Companies that need to protect customer contact data, track every lead interaction, and maintain immutable audit logs.',
    primaryFriction: 'Reps download company lead lists to personal computers; no record of who modified a contact or exported records.',
    dialpulseFit: [
      'Granular permission toggles: disable CSV exports for front-line callers.',
      'Comprehensive security event and audit logging on all system actions.',
      'Tenant-isolated PostgreSQL database partitioning.'
    ],
    suggestedSolution: '07 Centralized Customer Operations'
  },
  {
    id: 'policy-driven',
    badge: 'STAGE: GOVERNANCE',
    title: 'Organizations Needing Policy-Driven Communication',
    description: 'Regulated or customer-centric teams requiring strict Do-Not-Call (DNC) compliance and quiet-hour calling window enforcement.',
    primaryFriction: 'Human error leads to calls placed after legal hours or contacting prospects who previously requested to be opted out.',
    dialpulseFit: [
      'Automated pre-flight DNC registry query before call connection.',
      'Timezone-aware quiet hour lockout (e.g. 9:00 AM – 8:00 PM local recipient window).',
      'Permanent compliance audit trail for every permitted or suppressed dial.'
    ],
    suggestedSolution: '06 Communication Compliance'
  }
];

export function SolutionsSituations() {
  const [selectedId, setSelectedId] = useState('growing-team');
  const activeSit = operationalSituations.find(s => s.id === selectedId) || operationalSituations[0];

  return (
    <div className="w-full bg-slate-50/70 rounded-3xl border border-slate-200/90 p-6 sm:p-8 lg:p-12">
      
      {/* Header */}
      <div className="max-w-3xl mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-teal-100/70 border border-teal-200 text-[#00695C] text-xs font-mono font-semibold uppercase tracking-wider mb-3">
          <Building2 className="w-3.5 h-3.5" />
          Operational Situation Alignment
        </div>
        <h2 className="text-2xl sm:text-4xl font-display font-bold text-slate-900 tracking-tight">
          Built For Teams That Need Operational Discipline
        </h2>
        <p className="text-slate-600 text-base sm:text-lg mt-2 leading-relaxed">
          Rather than claiming generic industry buzzwords, DialPulse is engineered for specific operational realities. Identify your current operating situation below.
        </p>
      </div>

      {/* Grid of Situation Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {operationalSituations.map((sit) => {
          const isSelected = sit.id === selectedId;
          return (
            <button
              key={sit.id}
              onClick={() => setSelectedId(sit.id)}
              className={cn(
                'p-5 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between',
                isSelected
                  ? 'bg-white border-[#00695C] shadow-md ring-2 ring-[#00695C]/15'
                  : 'bg-white/70 border-slate-200 hover:bg-white hover:border-slate-300 text-slate-700'
              )}
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider">
                    {sit.badge}
                  </span>
                  {isSelected && (
                    <span className="w-2 h-2 rounded-full bg-[#00695C]" />
                  )}
                </div>
                <h3 className={cn('text-base font-bold font-display', isSelected ? 'text-[#00695C]' : 'text-slate-900')}>
                  {sit.title}
                </h3>
                <p className="text-xs text-slate-600 mt-2 line-clamp-2 leading-relaxed">
                  {sit.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono">
                <span className="text-slate-500">Core Fit:</span>
                <span className={cn('font-semibold', isSelected ? 'text-[#00695C]' : 'text-slate-700')}>
                  {sit.suggestedSolution.split('&')[0]}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Deep-Dive Inspection Card for Selected Situation */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-100">
          <div>
            <div className="text-xs font-mono font-bold text-[#00695C] uppercase tracking-wider">
              {activeSit.badge}
            </div>
            <h3 className="text-xl sm:text-2xl font-display font-bold text-slate-900 mt-1">
              How DialPulse Resolves: {activeSit.title}
            </h3>
          </div>

          <a
            href="#solution-explorer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-teal-50 border border-teal-200 text-[#00695C] text-xs font-mono font-bold hover:bg-teal-100 transition-colors self-start md:self-auto"
          >
            <span>Jump to {activeSit.suggestedSolution}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-6">
          <div className="lg:col-span-5 p-4 rounded-xl bg-rose-50/60 border border-rose-200/80">
            <div className="text-xs font-mono font-bold text-rose-800 uppercase mb-1">
              Current Friction & Breakdown
            </div>
            <p className="text-xs text-slate-700 leading-relaxed">
              {activeSit.primaryFriction}
            </p>
          </div>

          <div className="lg:col-span-7 space-y-2.5">
            <div className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider">
              DialPulse Architectural Solution
            </div>
            <div className="space-y-2">
              {activeSit.dialpulseFit.map((fit, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                  <Check className="w-4 h-4 text-[#00695C] shrink-0 mt-0.5 stroke-[2.5]" />
                  <span>{fit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
