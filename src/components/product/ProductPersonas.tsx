import { useState } from 'react';
import { 
  PhoneCall, 
  Users, 
  Scale, 
  Building2, 
  Check, 
  ArrowRight,
  Shield,
  Zap,
  Clock,
  Briefcase
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

interface Persona {
  id: string;
  role: string;
  badge: string;
  headline: string;
  icon: any;
  summary: string;
  capabilities: {
    title: string;
    description: string;
  }[];
  primaryBenefit: string;
}

const personas: Persona[] = [
  {
    id: 'telecaller',
    role: 'Telecaller / Sales Agent',
    badge: 'FRONT-LINE OPERATOR',
    headline: 'Frictionless one-click dialing with zero off-hours accidents.',
    icon: PhoneCall,
    summary: 'The front-line communication worker who needs speed, clean lead context, and automated logging without getting bogged down by slow administrative entry.',
    primaryBenefit: 'Cuts post-call documentation time down to seconds via automated AI bullet summaries.',
    capabilities: [
      {
        title: 'Embedded Browser Softphone',
        description: 'Place calls directly from Chrome or modern browsers using WebRTC without installing separate desktop dialers or external PBX apps.'
      },
      {
        title: 'Automated Pre-Flight Check',
        description: 'Never worry about dialing someone on a Do-Not-Call list or outside their legal timezone. DialPulse checks automatically before ringing.'
      },
      {
        title: 'Multi-Channel Fallback Inbox',
        description: 'If a prospect misses a call, immediately dispatch a queued WhatsApp or SMS template directly from the lead drawer.'
      },
      {
        title: 'Instant Context Drawer',
        description: 'View custom properties, prior interaction logs, previous recordings, and lead status in a single slide-out card without leaving the view.'
      }
    ]
  },
  {
    id: 'supervisor',
    role: 'Team Lead / Sales Supervisor',
    badge: 'OPERATIONAL MANAGER',
    headline: 'Real-time agent oversight and dynamic queue rebalancing.',
    icon: Users,
    summary: 'Managers overseeing 5 to 100+ telecallers who need instant visibility into agent presence, live call queues, and team conversion metrics.',
    primaryBenefit: 'Eliminates stalled leads by instantly reassigning inactive pipelines in real time.',
    capabilities: [
      {
        title: 'Live Agent Presence Feed',
        description: 'See which telecallers are currently on active calls, available in queue, or offline with real-time WebSocket state synchronization.'
      },
      {
        title: 'Dynamic Lead Redistribution',
        description: 'Rebalance unassigned or untouched leads across active agents with round-robin or custom pipeline criteria in two clicks.'
      },
      {
        title: 'Call Disposition Tracking',
        description: 'Review outcome tags (Interested, Call Back, Voicemail, Invalid) to spot bottlenecks in campaign messaging.'
      },
      {
        title: 'Asynchronous Export Engine',
        description: 'Generate comprehensive CSV exports of team call histories in the background without UI lag or database timeouts.'
      }
    ]
  },
  {
    id: 'compliance',
    role: 'Compliance & Risk Officer',
    badge: 'GOVERNANCE & AUDIT',
    headline: 'Ironclad regulatory defense with zero manual bypass loopholes.',
    icon: Scale,
    summary: 'Officers charged with telecom policy enforcement, DNC registry adherence, data protection, and immutable audit trails.',
    primaryBenefit: 'Hard-coded code guards ensure agents cannot manually override compliance locks.',
    capabilities: [
      {
        title: 'Enforced Do-Not-Call (DNC) Registry',
        description: 'Maintain tenant-wide DNC databases. Any lead marked on the DNC list is permanently prevented from telephony connection.'
      },
      {
        title: 'Jurisdiction-Aware Quiet Hours',
        description: 'Configurable calling windows (e.g. 9:00 AM – 8:00 PM recipient local time) automatically locks dials outside permissible hours.'
      },
      {
        title: 'Immutable Audit Trail',
        description: 'Every outbound attempt, block event, lead stage change, and export request is cryptographically recorded with actor ID and timestamp.'
      },
      {
        title: 'Tenant-Isolated AI Boundaries',
        description: 'Call recordings and AI transcriptions are strictly cordoned within the tenant database and are never used to train global public models.'
      }
    ]
  },
  {
    id: 'executive',
    role: 'Tenant Admin / Platform Executive',
    badge: 'ENTERPRISE LEADERSHIP',
    headline: 'Complete operational visibility and multi-tenant security.',
    icon: Building2,
    summary: 'C-level executives, founders, and IT administrators managing cross-team quotas, tenant security settings, and provider credentials.',
    primaryBenefit: 'Unifies the entire sales stack into one tenant-isolated platform with predictable costs.',
    capabilities: [
      {
        title: 'Role-Based Access Control (RBAC)',
        description: 'Enforce strict organizational tiering between Owners, Team Leads, and Telecallers with zero cross-tenant leakage.'
      },
      {
        title: 'Custom Pipeline & Schema Builder',
        description: 'Tailor pipeline stages, required deal values, and custom fields to match enterprise sales methodologies precisely.'
      },
      {
        title: 'Enterprise Telephony Integrations',
        description: 'Connect enterprise telephony trunks and SMS providers securely with encrypted vault storage.'
      },
      {
        title: 'Consolidated Operational Analytics',
        description: 'Track conversion rates, average handle times, connection ratios, and pipeline velocity across all company departments.'
      }
    ]
  }
];

export function ProductPersonas() {
  const [activePersonaId, setActivePersonaId] = useState('telecaller');
  const activePersona = personas.find(p => p.id === activePersonaId) || personas[0];
  const Icon = activePersona.icon;

  return (
    <div className="w-full bg-slate-50/60 rounded-3xl border border-slate-200/90 p-6 sm:p-8 lg:p-12">
      <div className="max-w-3xl mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-teal-100/70 border border-teal-200 text-[#00695C] text-xs font-mono font-semibold uppercase tracking-wider mb-3">
          <Briefcase className="w-3.5 h-3.5" />
          Multi-Persona Value Architecture
        </div>
        <h3 className="text-2xl sm:text-4xl font-display font-bold text-slate-900 tracking-tight">
          What DialPulse Delivers to Every Role
        </h3>
        <p className="text-slate-600 text-base sm:text-lg mt-2 leading-relaxed">
          DialPulse is engineered to provide specialized operating environments for front-line sales agents, team supervisors, compliance officers, and tenant administrators alike.
        </p>
      </div>

      {/* Role Picker Tabs */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
        {personas.map((persona) => {
          const PIcon = persona.icon;
          const isSelected = persona.id === activePersonaId;
          return (
            <button
              key={persona.id}
              onClick={() => setActivePersonaId(persona.id)}
              className={cn(
                'p-4 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between h-full',
                isSelected
                  ? 'bg-white border-[#00695C] shadow-md ring-2 ring-[#00695C]/15'
                  : 'bg-white/60 border-slate-200 hover:bg-white hover:border-slate-300 text-slate-700'
              )}
            >
              <div>
                <div className={cn(
                  'w-9 h-9 rounded-xl flex items-center justify-center mb-3 transition-colors',
                  isSelected ? 'bg-[#00695C] text-white' : 'bg-slate-100 text-slate-500'
                )}>
                  <PIcon className="w-5 h-5" />
                </div>
                <div className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider">
                  {persona.badge}
                </div>
                <div className={cn(
                  'text-sm sm:text-base font-bold font-display mt-0.5',
                  isSelected ? 'text-[#00695C]' : 'text-slate-900'
                )}>
                  {persona.role}
                </div>
              </div>

              {isSelected && (
                <div className="mt-3 flex items-center gap-1 text-[11px] font-mono text-[#00695C] font-semibold">
                  <span>Selected</span>
                  <ArrowRight className="w-3 h-3" />
                </div>
              )}
            </button>
          );
        })}
      </div>

      {/* Active Persona Deep Dive Card */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 lg:p-10 shadow-xs">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-100">
          <div>
            <span className="text-xs font-mono font-bold text-[#00695C] uppercase tracking-wider">
              {activePersona.badge} EXPERIENCE
            </span>
            <h4 className="text-xl sm:text-3xl font-display font-bold text-slate-900 mt-1">
              {activePersona.headline}
            </h4>
            <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-2xl leading-relaxed">
              {activePersona.summary}
            </p>
          </div>

          <div className="bg-teal-50 border border-teal-200/80 rounded-xl p-4 max-w-sm self-start md:self-center">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#00695C] uppercase mb-1">
              <Zap className="w-3.5 h-3.5" />
              Primary Business Impact
            </div>
            <p className="text-xs text-slate-700 leading-normal font-medium">
              {activePersona.primaryBenefit}
            </p>
          </div>
        </div>

        {/* 4 Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {activePersona.capabilities.map((cap, i) => (
            <div key={i} className="p-5 rounded-xl bg-slate-50/70 border border-slate-200/70 flex gap-4">
              <div className="w-6 h-6 rounded-full bg-[#00695C]/10 text-[#00695C] flex items-center justify-center shrink-0 mt-0.5">
                <Check className="w-3.5 h-3.5 stroke-[2.5]" />
              </div>
              <div>
                <h5 className="text-base font-bold text-slate-900 font-display">
                  {cap.title}
                </h5>
                <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                  {cap.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs text-slate-500 font-mono">
            <Shield className="w-3.5 h-3.5 text-[#00695C]" />
            <span>Multi-Tenant Permission Scoped to {activePersona.role}</span>
          </div>

          <Link
            to="/contact"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#00695C] hover:text-[#004D40] transition-colors"
          >
            <span>Schedule live {activePersona.role.toLowerCase()} demo</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
