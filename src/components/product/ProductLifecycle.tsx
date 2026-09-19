import { useState } from 'react';
import { 
  FileSpreadsheet, 
  ShieldAlert, 
  PhoneCall, 
  Users2, 
  Sparkles, 
  CheckCircle2, 
  Clock, 
  ArrowRight,
  Database,
  Lock
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface Step {
  number: string;
  badge: string;
  status: 'IMPLEMENTED' | 'CONFIRMED';
  title: string;
  tagline: string;
  icon: any;
  mechanics: string[];
  dataArtifact: {
    label: string;
    code: string;
  };
}

const lifecycleSteps: Step[] = [
  {
    number: '01',
    badge: 'INGESTION LAYER',
    status: 'IMPLEMENTED',
    title: 'Lead Ingestion & Custom Schema Mapping',
    tagline: 'Raw contacts enter the system via CSV batch upload or programmatic webhooks.',
    icon: FileSpreadsheet,
    mechanics: [
      'Automatic deduplication against existing tenant phone & email records.',
      'Validation against tenant-defined custom properties and required fields.',
      'Immediate assignment to configured Sales Pipeline and initial status stage.'
    ],
    dataArtifact: {
      label: 'Tenant Lead Record',
      code: `{
  "id": "lead_9481a02f",
  "tenant_id": "tenant_enterprise_01",
  "name": "Alex Mercer",
  "phone": "+1-415-555-0199",
  "timezone": "America/Los_Angeles",
  "pipeline_stage": "NEW_INQUIRY",
  "dnc_status": "UNVERIFIED"
}`
    }
  },
  {
    number: '02',
    badge: 'GOVERNANCE GATE',
    status: 'IMPLEMENTED',
    title: 'Pre-Flight Compliance & Quiet-Hour Verification',
    tagline: 'Before an agent can dial or a message can dispatch, the policy engine runs pre-flight checks.',
    icon: ShieldAlert,
    mechanics: [
      'Real-time query against tenant and national Do-Not-Call (DNC) registries.',
      'Calculation of local recipient time based on area code / geolocation to prevent off-hours contact.',
      'Hard lockout prevention: If outside quiet-hour window, the dialer action is physically disabled.'
    ],
    dataArtifact: {
      label: 'Pre-Flight Check Log',
      code: `{
  "check_id": "chk_8812c",
  "recipient_tz": "America/Los_Angeles",
  "local_time": "14:22:04 PST",
  "quiet_hours_active": false,
  "dnc_matched": false,
  "action_status": "PERMITTED_TO_DIAL"
}`
    }
  },
  {
    number: '03',
    badge: 'INTERACTION LAYER',
    status: 'IMPLEMENTED',
    title: 'WebRTC Softphone & Omnichannel Engagement',
    tagline: 'Telecallers connect with zero external hardware using our embedded browser softphone.',
    icon: PhoneCall,
    mechanics: [
      'One-click browser dialing via WebSockets and WebRTC audio streams.',
      'Live call timer, mute, hold, and simultaneous on-call note-taking.',
      'Automatic multi-channel queue fallback (SMS / WhatsApp / Email) for unreached contacts.'
    ],
    dataArtifact: {
      label: 'Telephony Event Session',
      code: `{
  "call_session_id": "call_73199",
  "agent_id": "usr_telecaller_44",
  "duration_seconds": 184,
  "disposition": "CONNECTED_INTERESTED",
  "recording_stored": true,
  "omnichannel_fallback_dispatched": false
}`
    }
  },
  {
    number: '04',
    badge: 'ORGANIZATIONAL LAYER',
    status: 'IMPLEMENTED',
    title: 'Multi-Tenant RBAC & Team Supervision',
    tagline: 'Team Leads monitor live call statuses while agent access remains strictly bounded.',
    icon: Users2,
    mechanics: [
      'Role-based permissions separate Owner (config), Team Lead (monitoring), and Telecaller (dialing).',
      'Real-time WebSocket event feeds power the supervisor queue dashboard.',
      'Instant lead re-allocation across active telecallers when agents go offline or hit capacity.'
    ],
    dataArtifact: {
      label: 'RBAC Policy Context',
      code: `{
  "tenant_id": "tenant_enterprise_01",
  "user_role": "TELECALLER",
  "allowed_pipelines": ["WEST_COAST_SMB"],
  "can_export_data": false,
  "can_override_compliance": false
}`
    }
  },
  {
    number: '05',
    badge: 'INTELLIGENCE LAYER',
    status: 'IMPLEMENTED',
    title: 'Tenant-Isolated AI & Background Reporting',
    tagline: 'Contextual AI summarizes the interaction while analytics workers process exports asynchronously.',
    icon: Sparkles,
    mechanics: [
      'Automated post-call transcription processed strictly within the tenant security perimeter.',
      'Generation of key action items, sentiment tags, and follow-up email drafts.',
      'Background worker generation of large CSV and analytical audits without blocking web UI threads.'
    ],
    dataArtifact: {
      label: 'AI Summary Payload',
      code: `{
  "summary": "Prospect evaluated 50-seat rollout. Requested compliance whitepaper.",
  "sentiment": "HIGH_PURCHASE_INTENT",
  "next_action": "SEND_SECURITY_BRIEF",
  "tenant_isolation_verified": true
}`
    }
  }
];

export function ProductLifecycle() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const activeStep = lifecycleSteps[activeStepIndex];

  return (
    <div className="w-full bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 lg:p-12 shadow-sm">
      <div className="max-w-3xl mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-teal-50 border border-teal-200 text-[#00695C] text-xs font-mono font-semibold uppercase tracking-wider mb-3">
          <Database className="w-3.5 h-3.5" />
          End-to-End Operational Workflow
        </div>
        <h3 className="text-2xl sm:text-4xl font-display font-bold text-slate-900 tracking-tight">
          How DialPulse Operates In Practice
        </h3>
        <p className="text-slate-600 text-base sm:text-lg mt-2 leading-relaxed">
          Explore the five sequential stages of every lead interaction — from raw intake through strict compliance checks, real-time telephony, supervisor routing, and contextual AI synthesis.
        </p>
      </div>

      {/* Step Selector Horizontal Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5 mb-8 pb-4 border-b border-slate-100">
        {lifecycleSteps.map((step, idx) => {
          const Icon = step.icon;
          const isActive = idx === activeStepIndex;
          return (
            <button
              key={step.number}
              onClick={() => setActiveStepIndex(idx)}
              className={cn(
                'flex flex-col p-3 rounded-xl border text-left transition-all cursor-pointer',
                isActive
                  ? 'bg-teal-50/80 border-[#00695C] ring-2 ring-[#00695C]/15 shadow-xs'
                  : 'bg-slate-50/60 border-slate-200 hover:bg-slate-100/80 text-slate-700'
              )}
            >
              <div className="flex items-center justify-between mb-2">
                <span className={cn(
                  'text-xs font-mono font-bold px-1.5 py-0.5 rounded',
                  isActive ? 'bg-[#00695C] text-white' : 'bg-slate-200 text-slate-600'
                )}>
                  {step.number}
                </span>
                <Icon className={cn('w-4 h-4', isActive ? 'text-[#00695C]' : 'text-slate-400')} />
              </div>
              <span className={cn(
                'text-xs font-bold leading-snug line-clamp-2',
                isActive ? 'text-[#00695C]' : 'text-slate-800'
              )}>
                {step.title.split('&')[0]}
              </span>
            </button>
          );
        })}
      </div>

      {/* Active Stage Detailed Card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start bg-slate-50/70 rounded-2xl p-6 sm:p-8 border border-slate-200/90">
        
        {/* Left Column: Descriptive Content */}
        <div className="lg:col-span-7 space-y-6">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-[#00695C] text-white">
              STAGE {activeStep.number}
            </span>
            <span className="text-xs font-mono font-semibold tracking-wider text-slate-500 uppercase">
              {activeStep.badge}
            </span>
            <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 border border-emerald-300 font-bold ml-auto">
              [{activeStep.status}]
            </span>
          </div>

          <div>
            <h4 className="text-xl sm:text-2xl font-display font-bold text-slate-900">
              {activeStep.title}
            </h4>
            <p className="text-slate-600 text-sm sm:text-base mt-2 leading-relaxed">
              {activeStep.tagline}
            </p>
          </div>

          {/* Core Mechanics List */}
          <div className="space-y-3 pt-2">
            <div className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider">
              Execution Details & Logic
            </div>
            <ul className="space-y-2.5">
              {activeStep.mechanics.map((mech, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-slate-700 leading-normal">
                  <CheckCircle2 className="w-4 h-4 text-[#00695C] shrink-0 mt-0.5" />
                  <span>{mech}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center gap-4 pt-4 border-t border-slate-200/80">
            <button
              onClick={() => setActiveStepIndex((prev) => (prev + 1) % lifecycleSteps.length)}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#00695C] hover:text-[#004D40] transition-colors"
            >
              <span>Next Stage: {lifecycleSteps[(activeStepIndex + 1) % lifecycleSteps.length].title.split('&')[0]}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Right Column: JSON State Snapshot representing Real Architecture */}
        <div className="lg:col-span-5 bg-slate-900 rounded-xl p-5 border border-slate-800 shadow-md">
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <Lock className="w-3.5 h-3.5 text-teal-400" />
              <span className="text-xs font-mono text-teal-300">{activeStep.dataArtifact.label}</span>
            </div>
            <span className="text-[10px] font-mono text-slate-500">JSON • STRICT TYPED</span>
          </div>

          <pre className="text-xs font-mono text-teal-300/90 leading-relaxed overflow-x-auto p-1 max-h-[300px]">
            <code>{activeStep.dataArtifact.code}</code>
          </pre>

          <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span>Verified Isolation: Tenant Scoped</span>
            <span className="text-emerald-400">● Live State Schema</span>
          </div>
        </div>

      </div>
    </div>
  );
}
