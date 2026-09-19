import { useState } from 'react';
import { 
  Users, 
  PhoneCall, 
  MessageSquare, 
  Scale, 
  Sparkles, 
  BarChart3, 
  Check, 
  ExternalLink,
  Shield,
  Layers
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { PipelineMockup } from '@/components/marketing/mockups/PipelineMockup';
import { OmnichannelMockup } from '@/components/marketing/mockups/OmnichannelMockup';
import { ComplianceMockup } from '@/components/marketing/mockups/ComplianceMockup';
import { AIMockup } from '@/components/marketing/mockups/AIMockup';
import { AnalyticsMockup } from '@/components/marketing/mockups/AnalyticsMockup';

interface Module {
  id: string;
  name: string;
  shortName: string;
  status: 'IMPLEMENTED' | 'CONFIRMED' | 'PLANNED';
  icon: any;
  lead: string;
  deepLink: string;
  metricsLabel: string;
  features: string[];
  mockupComponent: any;
}

// Softphone dedicated UI representation for the Softphone module
function SoftphoneModuleMockup() {
  return (
    <div className="w-full bg-white rounded-2xl md:rounded-3xl border border-slate-200 shadow-[0_20px_50px_-15px_rgba(0,105,92,0.12)] p-6 md:p-8 flex flex-col justify-between min-h-[460px]">
      <div className="flex items-center justify-between pb-4 border-b border-slate-100">
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-sm font-bold text-slate-900 font-display">Active WebRTC Telephony Call</span>
        </div>
        <span className="text-xs font-mono px-2.5 py-1 rounded bg-teal-50 border border-teal-200 text-[#00695C] font-semibold">
          LIVE • 03:42
        </span>
      </div>

      <div className="my-6 p-6 rounded-2xl bg-slate-50 border border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-[#00695C] text-white flex items-center justify-center font-bold text-xl shadow-md">
            AM
          </div>
          <div>
            <div className="text-lg font-bold text-slate-900 font-display">Alex Mercer</div>
            <div className="text-xs font-mono text-slate-500">+1 (415) 555-0199 • Enterprise Lead</div>
            <div className="inline-flex items-center gap-1.5 mt-1 px-2 py-0.5 rounded bg-emerald-100/80 text-emerald-800 text-[10px] font-mono font-bold">
              <Shield className="w-3 h-3" /> Pre-Flight DNC Checked
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button className="px-3.5 py-2 rounded-xl bg-white border border-slate-200 text-xs font-semibold text-slate-700 shadow-2xs hover:bg-slate-50">
            Hold
          </button>
          <button className="px-3.5 py-2 rounded-xl bg-white border border-slate-200 text-xs font-semibold text-slate-700 shadow-2xs hover:bg-slate-50">
            Mute
          </button>
          <button className="px-4 py-2 rounded-xl bg-rose-600 text-white text-xs font-semibold shadow-xs hover:bg-rose-700">
            End Call
          </button>
        </div>
      </div>

      <div className="space-y-3">
        <div className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
          Live Agent Notes & Outcomes
        </div>
        <div className="p-3.5 rounded-xl bg-white border border-slate-200 text-xs text-slate-700 font-mono leading-relaxed shadow-2xs">
          Client confirmed 40-telecaller seat requirement. Requested quiet-hours compliance documentation. Scheduled follow-up demonstration for Tuesday 2:00 PM.
        </div>
      </div>

      <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-mono">
        <span>Channel: Browser WebRTC Softphone</span>
        <span className="text-teal-700 font-semibold">Dual-Track Audio Recording Active</span>
      </div>
    </div>
  );
}

const modules: Module[] = [
  {
    id: 'leads',
    name: 'Lead Management & Custom Pipelines',
    shortName: 'Leads & Pipeline',
    status: 'IMPLEMENTED',
    icon: Users,
    lead: 'Centralize lead ingestion, stage transitions, and contact schemas with multi-tenant data separation.',
    deepLink: '/features/leads',
    metricsLabel: 'Dynamic Pipeline Architecture',
    features: [
      'Multi-stage visual pipeline Kanban and tabular sorting modes',
      'Batch CSV ingestion with field auto-mapping and deduplication',
      'Custom contact properties (deal value, industry, priority, lead source)',
      'Interaction history timeline showing all past calls, notes, and messages'
    ],
    mockupComponent: PipelineMockup
  },
  {
    id: 'calling',
    name: 'Browser WebRTC Softphone & Telephony',
    shortName: 'Calling & Softphone',
    status: 'IMPLEMENTED',
    icon: PhoneCall,
    lead: 'Outbound and inbound voice infrastructure running directly inside the browser with zero desk phone hardware.',
    deepLink: '/features/calling',
    metricsLabel: 'Direct Browser Telephony',
    features: [
      'Single-click browser dialing via WebRTC audio stream pipelines',
      'Call outcome disposition tags (Connected, Follow-Up, Voicemail, Busy)',
      'Dual-track audio recording stored securely under tenant partition',
      'Live in-call note taking synchronized with lead profile state'
    ],
    mockupComponent: SoftphoneModuleMockup
  },
  {
    id: 'messaging',
    name: 'Omnichannel Communications Center',
    shortName: 'Omnichannel Inbox',
    status: 'IMPLEMENTED',
    icon: MessageSquare,
    lead: 'Seamless multi-channel customer communications across WhatsApp, SMS, and Email in a unified thread.',
    deepLink: '/features/messaging',
    metricsLabel: 'Unified Communications',
    features: [
      'Synchronized multi-channel customer timeline in a single conversation thread',
      'Automated fallback: send SMS or WhatsApp template if call is unanswered',
      'Delivery status receipts (Sent, Delivered, Read) across supported carriers',
      'Tenant-level sender phone number and messaging gateway mapping'
    ],
    mockupComponent: OmnichannelMockup
  },
  {
    id: 'compliance',
    name: 'Automated Compliance & Policy Guardrails',
    shortName: 'DNC & Compliance',
    status: 'IMPLEMENTED',
    icon: Scale,
    lead: 'Guaranteed compliance verification that checks DNC registries and legal timezone windows before dialing.',
    deepLink: '/features/compliance',
    metricsLabel: 'Zero-Bypass Policy Engine',
    features: [
      'Do-Not-Call (DNC) list checking executed prior to telephony call setup',
      'Timezone-aware quiet hour enforcement (e.g. 9:00 AM - 8:00 PM local recipient window)',
      'Contact frequency limits to prevent over-calling and spam flags',
      'Permanent compliance audit logs recording every block or permit decision'
    ],
    mockupComponent: ComplianceMockup
  },
  {
    id: 'ai',
    name: 'Tenant-Isolated AI Intelligence',
    shortName: 'AI Intelligence',
    status: 'IMPLEMENTED',
    icon: Sparkles,
    lead: 'Smart call transcription, automated bullet summarization, and follow-up drafting without data leakage.',
    deepLink: '/features/ai',
    metricsLabel: 'Private Tenant AI',
    features: [
      'Automatic call transcription converting completed audio to structured text',
      'Contextual bullet summarization extracting customer requirements and next steps',
      'Sentiment and purchase-intent tagging based on prospect conversational cues',
      'Zero model sharing: your tenant transcripts are never used to train public models'
    ],
    mockupComponent: AIMockup
  },
  {
    id: 'reports',
    name: 'Real-Time Analytics & Async Export Engine',
    shortName: 'Analytics & Reporting',
    status: 'IMPLEMENTED',
    icon: BarChart3,
    lead: 'Operational intelligence on agent handle times, conversion velocity, and large background data exports.',
    deepLink: '/features/reports',
    metricsLabel: 'Async Analytics Core',
    features: [
      'Real-time agent call metrics, connection ratios, and conversion rates',
      'Pipeline velocity analysis by stage duration and deal value',
      'Background asynchronous worker engine for large-dataset CSV exports',
      'Supervisor visibility into team performance and telecaller workloads'
    ],
    mockupComponent: AnalyticsMockup
  }
];

export function ProductModuleExplorer() {
  const [activeModuleId, setActiveModuleId] = useState('leads');
  const activeModule = modules.find(m => m.id === activeModuleId) || modules[0];
  const Mockup = activeModule.mockupComponent;

  return (
    <div className="w-full bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 lg:p-12 shadow-sm">
      
      {/* Top Header */}
      <div className="max-w-3xl mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-teal-50 border border-teal-200 text-[#00695C] text-xs font-mono font-semibold uppercase tracking-wider mb-3">
          <Layers className="w-3.5 h-3.5" />
          Interactive Product Explorer
        </div>
        <h3 className="text-2xl sm:text-4xl font-display font-bold text-slate-900 tracking-tight">
          Explore Every Platform Module
        </h3>
        <p className="text-slate-600 text-base sm:text-lg mt-2 leading-relaxed">
          Switch between the operational modules below to review their technical capabilities, safeguards, and view their exact product interfaces.
        </p>
      </div>

      {/* Module Selector Pills */}
      <div className="flex flex-wrap items-center gap-2 pb-6 mb-8 border-b border-slate-100">
        {modules.map((mod) => {
          const MIcon = mod.icon;
          const isActive = mod.id === activeModuleId;
          return (
            <button
              key={mod.id}
              onClick={() => setActiveModuleId(mod.id)}
              className={cn(
                'inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border text-xs sm:text-sm font-semibold transition-all cursor-pointer',
                isActive
                  ? 'bg-[#00695C] border-[#00695C] text-white shadow-xs'
                  : 'bg-slate-50 border-slate-200/90 text-slate-700 hover:bg-slate-100 hover:text-slate-900'
              )}
            >
              <MIcon className={cn('w-4 h-4', isActive ? 'text-teal-200' : 'text-slate-500')} />
              <span>{mod.shortName}</span>
              <span className={cn(
                'text-[10px] font-mono px-1.5 py-0.2 rounded uppercase ml-1',
                isActive ? 'bg-teal-900/60 text-teal-200' : 'bg-slate-200 text-slate-600'
              )}>
                {mod.status}
              </span>
            </button>
          );
        })}
      </div>

      {/* 2-Column Split: Specs on Left, Live Mockup on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* Left Column: Specifications & Feature Checklist */}
        <div className="lg:col-span-5 space-y-6">
          <div>
            <div className="flex items-center gap-2.5 mb-2">
              <span className="text-[11px] font-mono font-bold px-2 py-0.5 rounded bg-teal-100 text-teal-900 uppercase">
                {activeModule.metricsLabel}
              </span>
              <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 border border-emerald-300 font-bold">
                [{activeModule.status}]
              </span>
            </div>
            <h4 className="text-2xl font-display font-bold text-slate-900">
              {activeModule.name}
            </h4>
            <p className="text-slate-600 text-sm sm:text-base mt-2 leading-relaxed">
              {activeModule.lead}
            </p>
          </div>

          <div className="space-y-3 pt-2">
            <div className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
              Confirmed System Capabilities
            </div>
            <ul className="space-y-3">
              {activeModule.features.map((feat, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-slate-700">
                  <div className="w-5 h-5 rounded-full bg-[#00695C]/10 text-[#00695C] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                  <span className="leading-normal">{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
            <Link
              to={activeModule.deepLink}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#00695C] hover:text-[#004D40] transition-colors"
            >
              <span>View dedicated {activeModule.shortName.toLowerCase()} doc</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Right Column: Live Interactive Mockup */}
        <div className="lg:col-span-7 w-full overflow-hidden">
          <div className="w-full">
            <Mockup />
          </div>
        </div>

      </div>

    </div>
  );
}
