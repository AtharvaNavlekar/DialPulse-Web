import { useState, useEffect } from 'react';
import { 
  Users, 
  Users2, 
  PhoneCall, 
  Clock, 
  BarChart3, 
  ShieldAlert, 
  Layers, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Check, 
  Lock, 
  ShieldCheck, 
  FileSpreadsheet, 
  MessageSquare,
  AlertCircle,
  Calendar,
  Zap,
  TrendingUp,
  Cpu
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { PipelineMockup } from '@/components/marketing/mockups/PipelineMockup';
import { OmnichannelMockup } from '@/components/marketing/mockups/OmnichannelMockup';
import { ComplianceMockup } from '@/components/marketing/mockups/ComplianceMockup';
import { AIMockup } from '@/components/marketing/mockups/AIMockup';
import { AnalyticsMockup } from '@/components/marketing/mockups/AnalyticsMockup';

interface SolutionItem {
  id: string;
  number: string;
  title: string;
  shortTitle: string;
  badge: string;
  colorScheme: {
    primary: string;
    bg: string;
    border: string;
    text: string;
  };
  problem: string;
  friction: string;
  workflow: string[];
  solutionHeadline: string;
  solutionDetail: string;
  modulesUsed: string[];
  operationalOutcomes: string[];
  mockupType: 'pipeline' | 'teams' | 'omnichannel' | 'followup' | 'analytics' | 'compliance' | 'central' | 'ai';
}

const solutionsData: SolutionItem[] = [
  {
    id: 'leads',
    number: '01',
    title: 'Lead Operations & Custom Schema',
    shortTitle: 'Manage Leads',
    badge: 'LEAD INGESTION & PIPELINE',
    colorScheme: {
      primary: '#00695C',
      bg: 'bg-teal-50',
      border: 'border-teal-200',
      text: 'text-[#00695C]'
    },
    problem: 'Leads arrive from webhooks, website forms, and CSV spreadsheets in scattered formats, leading to duplicate records, slow initial response times, and unassigned prospects.',
    friction: 'Sales reps spend their mornings manually copying phone numbers into personal spreadsheets, while team leaders have no idea which inquiries have been contacted.',
    workflow: ['SOURCE (Webhook/CSV)', 'CAPTURE & DEDUPLICATE', 'ASSIGN TO AGENT', 'PIPELINE KANBAN', 'ACTIVITY LOG', 'STRUCTURED FOLLOW-UP'],
    solutionHeadline: 'Bring lead intake, custom properties, and pipeline progression into one verified operating workflow.',
    solutionDetail: 'DialPulse automates CSV ingestion with field auto-mapping and phone deduplication. Every lead is automatically routed into a custom-configured sales pipeline with drag-and-drop Kanban staging and rich interaction history.',
    modulesUsed: ['Leads', 'Imports', 'Teams', 'Communication', 'Reports'],
    operationalOutcomes: [
      'Eliminates duplicate contacts before they reach dialing queues.',
      'Immediate assignment to telecallers with zero spreadsheet juggling.',
      'Full visibility into lead age, deal stage, and interaction timeline.',
      'Custom schemas adapt to your exact qualification criteria.'
    ],
    mockupType: 'pipeline'
  },
  {
    id: 'teams',
    number: '02',
    title: 'Sales Team Operations & Presence',
    shortTitle: 'Run Sales Teams',
    badge: 'TEAM MANAGEMENT & HIERARCHY',
    colorScheme: {
      primary: '#1F3A5F',
      bg: 'bg-blue-50',
      border: 'border-blue-200',
      text: 'text-blue-900'
    },
    problem: 'Sales managers cannot see which agents are actively on calls, idle, or offline, making real-time queue balancing and workload distribution impossible.',
    friction: 'Leads sit untouched in queues when an agent takes a break or leaves for the day, while other high-performing telecallers sit waiting for fresh assignments.',
    workflow: ['OWNER / ADMIN', 'TEAM LEAD SUPERVISOR', 'TELECALLER QUEUE', 'LIVE PRESENCE FEED', 'DYNAMIC REBALANCING', 'ACTIVITY AUDIT'],
    solutionHeadline: 'Connect organizational hierarchy, live agent presence, and team queue balancing.',
    solutionDetail: 'Multi-tier role boundaries (Owner, Team Lead, Telecaller) govern data visibility. Supervisors monitor active softphone calls via live WebSocket telemetry and can reassign stalled leads across available agents in two clicks.',
    modulesUsed: ['Teams', 'Users', 'Administration', 'Calls', 'Reports'],
    operationalOutcomes: [
      'Real-time supervisor visibility into live agent calling states.',
      'Dynamic redistribution of unworked leads to active telecallers.',
      'Strict tenant permission boundaries prevent cross-team data leaks.',
      'Clear individual and squad accountability on disposition metrics.'
    ],
    mockupType: 'teams'
  },
  {
    id: 'communication',
    number: '03',
    title: 'Customer Communication Center',
    shortTitle: 'Customer Communication',
    badge: 'OMNICHANNEL & SOFTPHONE',
    colorScheme: {
      primary: '#06B6D4',
      bg: 'bg-cyan-50',
      border: 'border-cyan-200',
      text: 'text-cyan-900'
    },
    problem: 'Sales conversations are fractured across personal cell phones, WhatsApp accounts, and separate email clients, leaving management completely blind.',
    friction: 'When an employee departs, customer relationship history is lost forever. Prospect questions go unanswered because message context is trapped on individual devices.',
    workflow: ['LEAD PROFILE', 'WEBRTC VOICE CALL', 'CALL AUDIO RECORDED', 'FALLBACK MESSAGE (SMS/WA)', 'SYNCHRONIZED TIMELINE', 'HISTORY LOG'],
    solutionHeadline: 'Connect in-browser WebRTC calling and multi-channel messaging directly to customer records.',
    solutionDetail: 'DialPulse embeds a complete dual-track WebRTC softphone inside the browser. If a prospect doesn’t answer, dispatch pre-approved WhatsApp or SMS templates in one click—all recorded in a single chronological customer timeline.',
    modulesUsed: ['Calls', 'Messages', 'Leads', 'Compliance'],
    operationalOutcomes: [
      'One-click browser dialing with zero external hardware or SIP phones.',
      'Synchronized multi-channel timeline combining calls, SMS, and WhatsApp.',
      'Dual-track call recordings stored securely under tenant partitions.',
      'Delivery receipts and message status tracking across gateways.'
    ],
    mockupType: 'omnichannel'
  },
  {
    id: 'followup',
    number: '04',
    title: 'Follow-Up Discipline & Scheduled Cadence',
    shortTitle: 'Control Follow-Ups',
    badge: 'CADENCE & REMINDERS',
    colorScheme: {
      primary: '#6366F1',
      bg: 'bg-indigo-50',
      border: 'border-indigo-200',
      text: 'text-indigo-900'
    },
    problem: 'Deals fail not from lack of interest, but because agents forget to follow up at the agreed time, allowing warm prospects to cool off or sign with competitors.',
    friction: 'Agents rely on paper notebooks or mental memory to remember callbacks. Half of all inquiries never receive a second call after an initial missed connection.',
    workflow: ['LEAD ENGAGED', 'CALL DISPOSITION SET', 'SCHEDULED FOLLOW-UP', 'REMINDER TRIGGER', 'OMNICHANNEL NUDGE', 'PIPELINE ADVANCE'],
    solutionHeadline: 'Eliminate lost revenue through structured, mandatory call dispositions and scheduled follow-up alerts.',
    solutionDetail: 'Every completed call prompts mandatory disposition tagging (Interested, Call Back, Voicemail, Not Interested). Automated reminder triggers ensure agents are notified when callbacks are due, keeping pipeline velocity steady.',
    modulesUsed: ['Leads', 'Calls', 'Messages', 'Compliance'],
    operationalOutcomes: [
      'Mandatory post-call outcome logging stops untracked calls.',
      'Structured callback reminders prevent warm leads from stalling.',
      'Automatic fallback templates dispatched when prospects are unreachable.',
      'Supervisors can audit overdue follow-ups across the entire team.'
    ],
    mockupType: 'followup'
  },
  {
    id: 'analytics',
    number: '05',
    title: 'Performance Visibility & Async Reporting',
    shortTitle: 'Monitor Performance',
    badge: 'ANALYTICS & EXPORTS',
    colorScheme: {
      primary: '#3B82F6',
      bg: 'bg-blue-50',
      border: 'border-blue-200',
      text: 'text-blue-900'
    },
    problem: 'Leaders only understand team conversion rates weeks after the fact through manual spreadsheet roll-ups that cause database lockups and report timeouts.',
    friction: 'Running large analytical queries across 50,000+ call records freezes the web application, causing telecallers to experience lag during live operations.',
    workflow: ['CALL DISPOSITIONS', 'REAL-TIME AGGREGATION', 'DASHBOARD METRICS', 'WORKER JOB QUEUED', 'ASYNC CSV GENERATION', 'SECURE DOWNLOAD'],
    solutionHeadline: 'Gain live operational visibility into handle times, connection rates, and export large audits asynchronously.',
    solutionDetail: 'DialPulse calculates real-time connection ratios, average call durations, and pipeline velocity. Large historical audits and CSV reports are processed by background asynchronous workers without degrading web app responsiveness.',
    modulesUsed: ['Reports', 'Calls', 'Teams', 'Leads'],
    operationalOutcomes: [
      'Real-time metrics: connection ratios, dial volume, average handle time (AHT).',
      'Pipeline velocity analysis by stage duration and deal value.',
      'Asynchronous worker architecture ensures report exports never freeze the UI.',
      'Granular visibility into individual telecaller performance benchmarks.'
    ],
    mockupType: 'analytics'
  },
  {
    id: 'compliance',
    number: '06',
    title: 'Communication Compliance & Policy Guardrails',
    shortTitle: 'Enforce Policies',
    badge: 'GOVERNANCE & DNC LOCK',
    colorScheme: {
      primary: '#F59E0B',
      bg: 'bg-amber-50',
      border: 'border-amber-200',
      text: 'text-amber-950'
    },
    problem: 'Sales teams risk severe regulatory penalties and brand damage by accidentally dialing unconsented prospects on Do-Not-Call (DNC) lists or calling outside legal hours.',
    friction: 'Relying on agents to manually check timezones across different area codes leads to accidental calls at 6:00 AM or 10:00 PM, resulting in customer complaints.',
    workflow: ['DIAL REQUEST', 'DNC REGISTRY QUERY', 'RECIPIENT LOCAL TIME CALC', 'POLICY ENGINE EVALUATION', 'PERMIT / HARD LOCK', 'IMMUTABLE AUDIT LOG'],
    solutionHeadline: 'Automate Do-Not-Call checks and jurisdiction-aware quiet hour locks with zero manual bypass loopholes.',
    solutionDetail: 'Before any WebRTC call connects or message dispatches, DialPulse executes a mandatory pre-flight check against tenant and national DNC registries, calculating local recipient time based on area code to hard-lock off-hours dialing.',
    modulesUsed: ['Compliance', 'Calls', 'Messages', 'Audit'],
    operationalOutcomes: [
      'Zero-bypass policy engine: agents physically cannot dial numbers on DNC lists.',
      'Automatic quiet-hour lockouts based on recipient local timezone.',
      'Permanent cryptographic audit logs of every permit and block decision.',
      'Contact frequency limits prevent over-dialing and carrier spam flags.'
    ],
    mockupType: 'compliance'
  },
  {
    id: 'central',
    number: '07',
    title: 'Centralized Customer Operations',
    shortTitle: 'Centralize Operations',
    badge: 'ALL-IN-ONE CUSTOMER 360',
    colorScheme: {
      primary: '#00695C',
      bg: 'bg-teal-50',
      border: 'border-teal-200',
      text: 'text-[#00695C]'
    },
    problem: 'Customer records, calling apps, messaging tools, support tickets, and team rosters live in five isolated SaaS subscriptions with brittle custom integrations.',
    friction: 'High recurring software licensing costs, broken webhook integrations, and sales reps constantly switching between 4 browser tabs just to handle one prospect.',
    workflow: ['CENTRAL CUSTOMER RECORD', 'INTEGRATED PIPELINE', 'EMBEDDED SOFTPHONE', 'OMNICHANNEL THREAD', 'SUPPORT TICKETS', 'ADMIN AUDIT'],
    solutionHeadline: 'Consolidate leads, voice, messaging, tickets, and team management into a unified multi-tenant CRM layer.',
    solutionDetail: 'DialPulse replaces disjointed point solutions with a single operational workspace. A lead’s complete lifecycle—from initial CSV import to WebRTC voice call, follow-up WhatsApp message, and support ticket—lives in one centralized hub.',
    modulesUsed: ['Leads', 'Calls', 'Messages', 'Tickets', 'Teams', 'Reports', 'Settings'],
    operationalOutcomes: [
      'Replaces 3-5 disconnected subscriptions with a unified multi-tenant platform.',
      'Zero context switching: telecallers do everything from a single browser view.',
      'Centralized data architecture with foreign-key tenant isolation.',
      'Simplified onboarding: new agents are productive on day one.'
    ],
    mockupType: 'central'
  },
  {
    id: 'ai',
    number: '08',
    title: 'Tenant-Isolated AI Sales Assistance',
    shortTitle: 'AI Sales Assistant',
    badge: 'PRIVATE CONTEXTUAL AI',
    colorScheme: {
      primary: '#8B5CF6',
      bg: 'bg-violet-50',
      border: 'border-violet-200',
      text: 'text-violet-950'
    },
    problem: 'Telecallers spend 35% of their working day manually typing notes, summarizing phone conversations, and drafting follow-up emails instead of speaking with buyers.',
    friction: 'Customer notes are incomplete or inconsistent, while executives fear that sensitive customer conversations will leak into public LLM training datasets.',
    workflow: ['CALL AUDIO RECORDED', 'TENANT-ISOLATED STT', 'ACTION ITEM EXTRACTION', 'SENTIMENT ANALYSIS', 'ONE-CLICK DRAFT DISPATCH', 'STRICT PRIVACY GUARD'],
    solutionHeadline: 'Extract key action items and draft follow-ups automatically within a tenant-isolated security perimeter.',
    solutionDetail: 'DialPulse AI operates strictly within your tenant partition. It transcribes completed calls, identifies objections and purchase intent, and drafts follow-up messages for agent review—with zero global model training on your proprietary data.',
    modulesUsed: ['AI', 'Calls', 'Leads', 'Messages'],
    operationalOutcomes: [
      'Cuts post-call administrative documentation time down to seconds.',
      'Extracts structured bullet points: budget, timeline, decision makers.',
      'Drafts personalized follow-up emails and WhatsApp messages for agent approval.',
      'Absolute data boundary: customer voice transcripts are never shared or leaked.'
    ],
    mockupType: 'ai'
  }
];

// Dedicated Teams Mockup for Solution 02
function TeamsSolutionMockup() {
  return (
    <div className="w-full bg-white rounded-2xl md:rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-6">
      <div className="flex items-center justify-between pb-4 border-b border-slate-100">
        <div>
          <div className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">TEAM HIERARCHY & ACTIVE SUPERVISION</div>
          <div className="text-base font-bold font-display text-slate-900 mt-0.5">West Coast Inside Sales • 14 Telecallers</div>
        </div>
        <span className="text-xs font-mono px-2.5 py-1 rounded bg-blue-50 border border-blue-200 text-blue-800 font-bold">
          [CONFIRMED RBAC]
        </span>
      </div>

      {/* Role Hierarchy Visual */}
      <div className="grid grid-cols-3 gap-3">
        <div className="p-3.5 rounded-xl bg-slate-900 text-white font-mono text-xs">
          <div className="text-[10px] text-teal-400 font-bold uppercase">Tier 1: Owner</div>
          <div className="text-sm font-bold text-white mt-1">Tenant Admin</div>
          <div className="text-[10px] text-slate-400 mt-1">Full config & billing</div>
        </div>
        <div className="p-3.5 rounded-xl bg-blue-900 text-white font-mono text-xs">
          <div className="text-[10px] text-blue-300 font-bold uppercase">Tier 2: Team Lead</div>
          <div className="text-sm font-bold text-white mt-1">Supervisor Queue</div>
          <div className="text-[10px] text-blue-200 mt-1">Live call monitoring & routing</div>
        </div>
        <div className="p-3.5 rounded-xl bg-teal-900 text-white font-mono text-xs">
          <div className="text-[10px] text-teal-300 font-bold uppercase">Tier 3: Telecaller</div>
          <div className="text-sm font-bold text-white mt-1">Assigned Pipeline</div>
          <div className="text-[10px] text-teal-200 mt-1">One-click browser dialing</div>
        </div>
      </div>

      {/* Live Agent Presence Feed */}
      <div className="space-y-2.5">
        <div className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider">
          Real-Time Agent Presence & State Feed
        </div>
        <div className="space-y-2 font-mono text-xs">
          <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <div>
                <span className="font-bold text-slate-900">Marcus Vance</span>
                <span className="text-slate-400 ml-2">• On Call with Elena Rostova (03:42)</span>
              </div>
            </div>
            <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold text-[10px]">DIALING</span>
          </div>

          <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-2.5 h-2.5 rounded-full bg-teal-500" />
              <div>
                <span className="font-bold text-slate-900">Sarah Chen</span>
                <span className="text-slate-400 ml-2">• Ready in Queue (Idle 00:45)</span>
              </div>
            </div>
            <span className="px-2 py-0.5 rounded bg-teal-100 text-teal-800 font-bold text-[10px]">AVAILABLE</span>
          </div>

          <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-2.5 h-2.5 rounded-full bg-amber-500" />
              <div>
                <span className="font-bold text-slate-900">David Ross</span>
                <span className="text-slate-400 ml-2">• Post-Call Note Entry (12 leads in queue)</span>
              </div>
            </div>
            <span className="px-2 py-0.5 rounded bg-amber-100 text-amber-800 font-bold text-[10px]">WRAP-UP</span>
          </div>
        </div>
      </div>

      <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-slate-500">
        <span>Lead Reassignment: Dynamic Round-Robin</span>
        <span className="text-blue-700 font-semibold">Role-Based Access Enforced</span>
      </div>
    </div>
  );
}

// Dedicated Follow-Up Mockup for Solution 04
function FollowupSolutionMockup() {
  return (
    <div className="w-full bg-white rounded-2xl md:rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-6">
      <div className="flex items-center justify-between pb-4 border-b border-slate-100">
        <div>
          <div className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">CADENCE & FOLLOW-UP DISCIPLINE</div>
          <div className="text-base font-bold font-display text-slate-900 mt-0.5">Automated Lead Touchpoint Timeline</div>
        </div>
        <span className="text-xs font-mono px-2.5 py-1 rounded bg-indigo-50 border border-indigo-200 text-indigo-800 font-bold">
          [SCHEDULED DISCIPLINE]
        </span>
      </div>

      {/* Operational Follow-Up Timeline */}
      <div className="relative pl-6 space-y-6 before:absolute before:left-2.5 before:top-2 before:bottom-2 before:w-0.5 before:bg-indigo-100">
        
        <div className="relative flex items-start gap-4">
          <div className="w-5 h-5 rounded-full bg-indigo-600 text-white flex items-center justify-center text-[10px] font-bold absolute -left-6 mt-0.5">
            1
          </div>
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/90 w-full text-xs">
            <div className="flex items-center justify-between font-mono font-bold text-slate-900 mb-1">
              <span>Day 1 • Outbound Call Attempt (No Answer)</span>
              <span className="text-[10px] text-slate-400">10:14 AM</span>
            </div>
            <div className="text-slate-600">
              Telecaller dialed via WebRTC. Ring timeout at 30 seconds. Outcome tagged as <span className="font-mono font-bold text-amber-700">UNANSWERED</span>.
            </div>
          </div>
        </div>

        <div className="relative flex items-start gap-4">
          <div className="w-5 h-5 rounded-full bg-cyan-600 text-white flex items-center justify-center text-[10px] font-bold absolute -left-6 mt-0.5">
            2
          </div>
          <div className="p-3.5 rounded-xl bg-cyan-50/70 border border-cyan-200 w-full text-xs">
            <div className="flex items-center justify-between font-mono font-bold text-cyan-900 mb-1">
              <span>Day 1 • Automated WhatsApp Fallback Nudge</span>
              <span className="text-[10px] text-cyan-700">10:15 AM (Instant)</span>
            </div>
            <div className="text-slate-700">
              System dispatched pre-approved WhatsApp template: &quot;Hi Alex, tried reaching you regarding your enterprise inquiry. When is a good time to connect?&quot;
            </div>
          </div>
        </div>

        <div className="relative flex items-start gap-4">
          <div className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center text-[10px] font-bold absolute -left-6 mt-0.5">
            3
          </div>
          <div className="p-3.5 rounded-xl bg-emerald-50/80 border border-emerald-200 w-full text-xs">
            <div className="flex items-center justify-between font-mono font-bold text-emerald-900 mb-1">
              <span>Day 2 • Scheduled Follow-Up Reminder Alert</span>
              <span className="text-[10px] text-emerald-700">02:00 PM</span>
            </div>
            <div className="text-slate-700">
              Telecaller notified in app drawer. One-click dial initiated. Call connected: 6 minutes duration. Status advanced to <span className="font-mono font-bold text-emerald-800">QUALIFIED OPPORTUNITY</span>.
            </div>
          </div>
        </div>

      </div>

      <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-slate-500">
        <span>Follow-Up Leakage Prevention: Active</span>
        <span className="text-indigo-700 font-semibold">100% Outcome Accountability</span>
      </div>
    </div>
  );
}

// Dedicated Central Customer Operations Mockup for Solution 07
function CentralCustomerMockup() {
  return (
    <div className="w-full bg-white rounded-2xl md:rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-6">
      <div className="flex items-center justify-between pb-4 border-b border-slate-100">
        <div>
          <div className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">UNIFIED CUSTOMER 360 HUB</div>
          <div className="text-base font-bold font-display text-slate-900 mt-0.5">Apex Global Logistics • Enterprise Account #9914</div>
        </div>
        <span className="text-xs font-mono px-2.5 py-1 rounded bg-teal-50 border border-teal-200 text-[#00695C] font-bold">
          [CONSOLIDATED STACK]
        </span>
      </div>

      {/* 4 Interconnected Core Surfaces */}
      <div className="grid grid-cols-2 gap-3 text-xs">
        <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
          <div className="flex items-center gap-2 text-[#00695C] font-mono font-bold mb-1">
            <Users className="w-3.5 h-3.5" /> Pipeline & Leads
          </div>
          <div className="text-slate-600 text-[11px]">
            Deal value: $48,000 ARR • Stage: Contract Review • Custom properties mapped.
          </div>
        </div>

        <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
          <div className="flex items-center gap-2 text-indigo-600 font-mono font-bold mb-1">
            <PhoneCall className="w-3.5 h-3.5" /> Telephony Audio
          </div>
          <div className="text-slate-600 text-[11px]">
            5 total calls • 38 mins total handle time • Dual-track recordings attached.
          </div>
        </div>

        <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
          <div className="flex items-center gap-2 text-cyan-600 font-mono font-bold mb-1">
            <MessageSquare className="w-3.5 h-3.5" /> Omnichannel Inbox
          </div>
          <div className="text-slate-600 text-[11px]">
            Unified thread: 8 SMS + 4 WhatsApp replies from CTO & Finance Lead.
          </div>
        </div>

        <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
          <div className="flex items-center gap-2 text-violet-600 font-mono font-bold mb-1">
            <Sparkles className="w-3.5 h-3.5" /> AI Action Items
          </div>
          <div className="text-slate-600 text-[11px]">
            Extracted: Requested SLA amendment & ISO 27001 certificate before Friday.
          </div>
        </div>
      </div>

      {/* Single Customer Record Proof */}
      <div className="p-3 rounded-xl bg-teal-50/70 border border-teal-200 text-xs font-mono text-slate-700">
        <div className="font-bold text-[#00695C] mb-1">Zero Integration Overhead:</div>
        <div>All 4 operational modules share the exact same PostgreSQL record and tenant_id. No Zapier triggers or third-party sync lag required.</div>
      </div>

      <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-slate-500">
        <span>Architecture: Multi-Tenant PostgreSQL</span>
        <span className="text-[#00695C] font-semibold">Single Unified Record</span>
      </div>
    </div>
  );
}

const slugToIdMap: Record<string, string> = {
  'lead-operations': 'leads',
  'follow-up-control': 'followup',
  'customer-communication': 'omnichannel',
  'sales-team-operations': 'teams',
  'performance-visibility': 'analytics',
  'customer-operations': 'central',
  'communication-compliance': 'compliance',
  'ai-assisted-work': 'ai',
};

export function SolutionExplorer({ selectedSlug }: { selectedSlug?: string }) {
  const initialId = (selectedSlug && slugToIdMap[selectedSlug]) || 'leads';
  const [activeSolutionId, setActiveSolutionId] = useState(initialId);

  // Sync if selectedSlug changes via URL navigation
  useEffect(() => {
    if (selectedSlug && slugToIdMap[selectedSlug]) {
      setActiveSolutionId(slugToIdMap[selectedSlug]);
      // Scroll to explorer section gently
      const el = document.getElementById('solution-explorer');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, [selectedSlug]);

  const currentSolution = solutionsData.find(s => s.id === activeSolutionId) || solutionsData[0];

  const renderMockup = (type: SolutionItem['mockupType']) => {
    switch (type) {
      case 'pipeline':
        return <PipelineMockup />;
      case 'teams':
        return <TeamsSolutionMockup />;
      case 'omnichannel':
        return <OmnichannelMockup />;
      case 'followup':
        return <FollowupSolutionMockup />;
      case 'analytics':
        return <AnalyticsMockup />;
      case 'compliance':
        return <ComplianceMockup />;
      case 'central':
        return <CentralCustomerMockup />;
      case 'ai':
        return <AIMockup />;
      default:
        return <PipelineMockup />;
    }
  };

  return (
    <div id="solution-explorer" className="w-full bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 lg:p-12 shadow-sm">
      
      {/* Section Header */}
      <div className="max-w-3xl mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-teal-50 border border-teal-200 text-[#00695C] text-xs font-mono font-semibold uppercase tracking-wider mb-3">
          <Layers className="w-3.5 h-3.5" />
          Problem-First Solution Selector
        </div>
        <h2 className="text-2xl sm:text-4xl font-display font-bold text-slate-900 tracking-tight">
          What business problem are you trying to solve?
        </h2>
        <p className="text-slate-600 text-base sm:text-lg mt-2 leading-relaxed">
          Select an operational challenge below to see how DialPulse connects workflow, product capabilities, and compliance guards to deliver real operational outcomes.
        </p>
      </div>

      {/* Main 2-Column Desktop Grid / Stacked Mobile Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Solution Selector Menu */}
        <div className="lg:col-span-5 space-y-2.5">
          <div className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mb-2 px-1">
            Choose Operational Challenge:
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2">
            {solutionsData.map((sol) => {
              const isActive = sol.id === activeSolutionId;
              return (
                <button
                  key={sol.id}
                  onClick={() => setActiveSolutionId(sol.id)}
                  className={cn(
                    'w-full text-left p-4 rounded-2xl border transition-all cursor-pointer flex items-center justify-between',
                    isActive
                      ? 'bg-slate-900 border-slate-900 text-white shadow-md ring-2 ring-[#00695C]/20'
                      : 'bg-slate-50/70 border-slate-200/80 text-slate-700 hover:bg-slate-100/90 hover:border-slate-300'
                  )}
                >
                  <div className="flex items-center gap-3.5">
                    <span className={cn(
                      'text-xs font-mono font-bold px-2 py-0.5 rounded',
                      isActive ? 'bg-teal-400 text-slate-950' : 'bg-slate-200 text-slate-600'
                    )}>
                      {sol.number}
                    </span>
                    <div>
                      <div className={cn(
                        'text-sm font-bold font-display leading-snug',
                        isActive ? 'text-white' : 'text-slate-900'
                      )}>
                        {sol.title}
                      </div>
                      <div className={cn(
                        'text-[11px] font-mono mt-0.5 truncate max-w-[210px] sm:max-w-[280px]',
                        isActive ? 'text-teal-300' : 'text-slate-500'
                      )}>
                        {sol.badge}
                      </div>
                    </div>
                  </div>

                  <ArrowRight className={cn(
                    'w-4 h-4 shrink-0 transition-transform',
                    isActive ? 'text-teal-300 translate-x-0.5' : 'text-slate-400'
                  )} />
                </button>
              );
            })}
          </div>

          <div className="p-4 rounded-2xl bg-teal-50/60 border border-teal-200/80 text-xs text-slate-600 mt-4">
            <span className="font-bold text-[#00695C]">Architectural Note:</span> Every solution operates inside your tenant perimeter with zero cross-tenant data leakage and verified RBAC permissions.
          </div>
        </div>

        {/* Right Column: Deep-Dive Solution Experience & Dynamic Mockup */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Solution Header Card */}
          <div className="bg-slate-50/90 rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-5">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-slate-900 text-white">
                SOLUTION {currentSolution.number}
              </span>
              <span className="text-xs font-mono font-semibold tracking-wider text-slate-500 uppercase">
                {currentSolution.badge}
              </span>
              <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 border border-emerald-300 font-bold ml-auto">
                [VERIFIED SOLUTION]
              </span>
            </div>

            <div>
              <h3 className="text-xl sm:text-2xl font-display font-bold text-slate-900">
                {currentSolution.solutionHeadline}
              </h3>
              <p className="text-slate-600 text-sm sm:text-base mt-2 leading-relaxed">
                {currentSolution.solutionDetail}
              </p>
            </div>

            {/* Problem & Friction Context */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-white border border-rose-200/80 shadow-2xs">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-rose-700 uppercase mb-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  Business Problem
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">
                  {currentSolution.problem}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-amber-200/80 shadow-2xs">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-amber-700 uppercase mb-1">
                  <Clock className="w-3.5 h-3.5" />
                  Operational Friction
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">
                  {currentSolution.friction}
                </p>
              </div>
            </div>

            {/* Workflow Progression Steps */}
            <div className="pt-2">
              <div className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mb-2">
                Operational Workflow
              </div>
              <div className="flex flex-wrap items-center gap-1.5 text-xs font-mono">
                {currentSolution.workflow.map((step, idx) => (
                  <div key={idx} className="flex items-center gap-1.5">
                    <span className="px-2.5 py-1 rounded-md bg-white border border-slate-200 text-slate-800 font-semibold shadow-2xs">
                      {step}
                    </span>
                    {idx < currentSolution.workflow.length - 1 && (
                      <span className="text-slate-400">→</span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Operational Outcomes Checklist */}
            <div className="pt-3 border-t border-slate-200">
              <div className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mb-2">
                Verified Operational Outcomes
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {currentSolution.operationalOutcomes.map((outcome, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs text-slate-700 leading-relaxed">
                    <Check className="w-4 h-4 text-[#00695C] shrink-0 mt-0.5 stroke-[2.5]" />
                    <span>{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Modules Used Tag Bar */}
            <div className="pt-3 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
              <div className="flex flex-wrap items-center gap-1.5 text-slate-500">
                <span className="font-bold text-slate-700">Product Modules:</span>
                {currentSolution.modulesUsed.map((mod, i) => (
                  <span key={i} className="px-2 py-0.5 rounded bg-teal-50 border border-teal-200 text-[#00695C] font-semibold">
                    {mod}
                  </span>
                ))}
              </div>

              <Link
                to="/contact"
                className="inline-flex items-center gap-1.5 font-bold text-[#00695C] hover:text-[#004D40] transition-colors"
              >
                <span>Request workflow demo</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Dynamic Live Mockup Display */}
          <div className="w-full">
            <div className="mb-2 flex items-center justify-between text-xs font-mono text-slate-400 px-1">
              <span>LIVE INTERFACE REPRESENTATION: {currentSolution.title.toUpperCase()}</span>
              <span className="text-[#00695C] font-semibold">INTERACTIVE STATE</span>
            </div>
            {renderMockup(currentSolution.mockupType)}
          </div>

        </div>

      </div>

    </div>
  );
}
