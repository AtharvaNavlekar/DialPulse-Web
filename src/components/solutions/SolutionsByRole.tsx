import { useState } from 'react';
import { 
  Building2, 
  Users, 
  PhoneCall, 
  Shield, 
  Check, 
  ArrowRight,
  Lock,
  Zap,
  Briefcase
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface RoleSolution {
  id: string;
  role: string;
  badge: string;
  headline: string;
  coreNeeds: string;
  icon: any;
  capabilities: string[];
  keyOutcome: string;
}

const roleSolutions: RoleSolution[] = [
  {
    id: 'owner',
    role: 'Business Owner & Executive',
    badge: 'LEADERSHIP & REVENUE GOVERNANCE',
    headline: 'Total operational transparency with zero customer data leakage.',
    coreNeeds: 'Executives need clear visibility into sales velocity, customer acquisition costs, and compliance risks without being bogged down in micromanagement.',
    icon: Building2,
    capabilities: [
      'Comprehensive pipeline conversion and handle-time analytics.',
      'Tenant-level data isolation preventing cross-tenant information contamination.',
      'Cryptographic audit trail tracking all data exports and administrative events.',
      'Consolidation of telephony, CRM, and messaging into one predictable subscription.'
    ],
    keyOutcome: 'Eliminates fragmented software subscriptions while ensuring company customer lists remain securely partitioned within the enterprise perimeter.'
  },
  {
    id: 'team-lead',
    role: 'Sales Lead & Supervisor',
    badge: 'QUEUE MANAGEMENT & COACHING',
    headline: 'Live agent oversight and zero-latency lead queue rebalancing.',
    coreNeeds: 'Supervisors need to know which telecallers are currently on live calls, which leads have gone untouched, and where pipeline bottlenecks occur.',
    icon: Users,
    capabilities: [
      'Real-time WebSocket telemetry displaying live calling states across the squad.',
      'Dynamic round-robin reassignment of untouched or stalled contacts.',
      'Audit disposition outcomes to identify agents requiring coaching on objection handling.',
      'Background CSV generation for weekly team quotas without web interface lag.'
    ],
    keyOutcome: 'Eliminates lead decay by ensuring every high-priority contact is worked immediately by available agents.'
  },
  {
    id: 'telecaller',
    role: 'Telecaller & Inside Sales Rep',
    badge: 'FRONT-LINE EXECUTION & SPEED',
    headline: 'One-click browser calling and automatic AI documentation.',
    coreNeeds: 'Reps want to spend their day speaking with interested prospects rather than typing repetitive notes, formatting phone numbers, or switching between 5 tabs.',
    icon: PhoneCall,
    capabilities: [
      'Embedded browser WebRTC softphone with one-click dialing and zero desk hardware.',
      'Automated pre-flight compliance check ensures you never dial off-hours by accident.',
      'In-tenant AI bullet summarization extracts budget, timeline, and next actions instantly.',
      'One-click multi-channel fallback: send WhatsApp or SMS template when calls are missed.'
    ],
    keyOutcome: 'Automates post-call administrative wrap-up with AI bullet-point drafting and one-click disposition logging.'
  },
  {
    id: 'admin',
    role: 'IT & System Administrator',
    badge: 'SECURITY, CONFIG & AUDIT',
    headline: 'Granular RBAC boundaries and tenant-scoped credentials.',
    coreNeeds: 'IT and security teams need to ensure least-privilege access, secure API trunk storage, and immutable compliance records.',
    icon: Shield,
    capabilities: [
      'Multi-tier role-based access control (Owner, Team Lead, Telecaller, Support).',
      'Configurable export restrictions: block raw CSV downloads for front-line callers.',
      'Encrypted vault storage for telephony trunks and third-party messaging gateways.',
      'Complete security event logs with actor IP, timestamp, and action context.'
    ],
    keyOutcome: 'Provides ironclad enterprise access governance while simplifying user provisioning and role onboarding.'
  }
];

export function SolutionsByRole() {
  const [activeRoleId, setActiveRoleId] = useState('owner');
  const activeRole = roleSolutions.find(r => r.id === activeRoleId) || roleSolutions[0];
  const Icon = activeRole.icon;

  return (
    <div className="w-full bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 lg:p-12 shadow-sm">
      
      {/* Header */}
      <div className="max-w-3xl mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-teal-50 border border-teal-200 text-[#00695C] text-xs font-mono font-semibold uppercase tracking-wider mb-3">
          <Briefcase className="w-3.5 h-3.5" />
          Role-Centric Operational Fit
        </div>
        <h2 className="text-2xl sm:text-4xl font-display font-bold text-slate-900 tracking-tight">
          Built Around the People Who Run the Workflow
        </h2>
        <p className="text-slate-600 text-base sm:text-lg mt-2 leading-relaxed">
          Different stakeholders have distinct operational responsibilities. DialPulse tailors its interface and permissions to empower each role without introducing unnecessary friction.
        </p>
      </div>

      {/* Role Picker Selector */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
        {roleSolutions.map((role) => {
          const RIcon = role.icon;
          const isSelected = role.id === activeRoleId;
          return (
            <button
              key={role.id}
              onClick={() => setActiveRoleId(role.id)}
              className={cn(
                'p-4 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between',
                isSelected
                  ? 'bg-slate-900 border-slate-900 text-white shadow-md ring-2 ring-[#00695C]/20'
                  : 'bg-slate-50/70 border-slate-200 hover:bg-slate-100 text-slate-700'
              )}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className={cn(
                    'w-8 h-8 rounded-lg flex items-center justify-center',
                    isSelected ? 'bg-teal-400 text-slate-950' : 'bg-slate-200 text-slate-600'
                  )}>
                    <RIcon className="w-4 h-4" />
                  </div>
                  <span className={cn(
                    'text-[10px] font-mono font-bold uppercase tracking-wider',
                    isSelected ? 'text-teal-300' : 'text-slate-400'
                  )}>
                    {role.badge.split('&')[0]}
                  </span>
                </div>
                <div className={cn('text-sm font-bold font-display', isSelected ? 'text-white' : 'text-slate-900')}>
                  {role.role}
                </div>
              </div>

              {isSelected && (
                <div className="mt-3 flex items-center gap-1 text-[11px] font-mono text-teal-300 font-semibold">
                  <span>Selected</span>
                  <ArrowRight className="w-3 h-3" />
                </div>
              )}
            </button>
          );
        })}
      </div>

      {/* Active Role Detail View */}
      <div className="bg-slate-50/80 rounded-2xl border border-slate-200/90 p-6 sm:p-8 lg:p-10 space-y-6">
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200/80">
          <div>
            <div className="text-xs font-mono font-bold text-[#00695C] uppercase tracking-wider">
              {activeRole.badge}
            </div>
            <h3 className="text-xl sm:text-3xl font-display font-bold text-slate-900 mt-1">
              {activeRole.headline}
            </h3>
            <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-2xl leading-relaxed">
              {activeRole.coreNeeds}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-teal-50 border border-teal-200/80 max-w-sm self-start md:self-center">
            <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-[#00695C] uppercase mb-1">
              <Zap className="w-3.5 h-3.5" />
              Verified Outcome
            </div>
            <p className="text-xs text-slate-700 leading-normal font-medium">
              {activeRole.keyOutcome}
            </p>
          </div>
        </div>

        {/* 4 Core Capabilities */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          {activeRole.capabilities.map((cap, i) => (
            <div key={i} className="p-4 rounded-xl bg-white border border-slate-200/80 flex items-start gap-3 shadow-2xs">
              <div className="w-5 h-5 rounded-full bg-teal-100 text-[#00695C] flex items-center justify-center shrink-0 mt-0.5">
                <Check className="w-3 h-3 stroke-[2.5]" />
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-sans">
                {cap}
              </p>
            </div>
          ))}
        </div>

        <div className="pt-4 border-t border-slate-200/80 flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
          <div className="flex items-center gap-2 text-slate-500">
            <Lock className="w-3.5 h-3.5 text-[#00695C]" />
            <span>Role-Based Access Enforcement: Active</span>
          </div>

          <Link
            to="/contact"
            className="inline-flex items-center gap-1.5 font-bold text-[#00695C] hover:text-[#004D40] transition-colors"
          >
            <span>Book personalized {activeRole.role.toLowerCase()} demonstration</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

      </div>

    </div>
  );
}
