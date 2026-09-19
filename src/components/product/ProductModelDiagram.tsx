import { useState } from 'react';
import { 
  Users, 
  PhoneCall, 
  ShieldCheck, 
  Cpu, 
  BarChart3, 
  Sliders, 
  Scale, 
  Sparkles,
  ArrowDown,
  CheckCircle2,
  Info
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface NodeDetail {
  id: string;
  title: string;
  category: string;
  status: 'IMPLEMENTED' | 'CONFIRMED' | 'PLANNED';
  description: string;
  inputs: string[];
  outputs: string[];
  safeguard: string;
}

const nodeDetails: Record<string, NodeDetail> = {
  dialpulse: {
    id: 'dialpulse',
    title: 'DialPulse Multi-Tenant Core',
    category: 'ROOT PLATFORM',
    status: 'IMPLEMENTED',
    description: 'Central multi-tenant orchestration layer. Enforces strict tenant isolation, identity authentication, workspace routing, and unified system configuration.',
    inputs: ['Authenticated session tokens', 'Tenant workspace ID', 'Role-based scopes'],
    outputs: ['Isolated tenant context', 'Encrypted session states', 'Scoped database connection pool'],
    safeguard: 'Zero cross-tenant data leakage via automated query scoping on all database transactions.'
  },
  capture: {
    id: 'capture',
    title: 'Capture & Ingestion (Leads)',
    category: 'CORE PILLAR 1',
    status: 'IMPLEMENTED',
    description: 'Centralized lead repository. Ingests leads through batch CSV imports, webhooks, and manual entry into custom pipelines with user-defined property schemas.',
    inputs: ['CSV batch payloads', 'CRM webhooks', 'Manual lead creation forms'],
    outputs: ['Normalized lead records', 'Pipeline stage assignments', 'Change audit logs'],
    safeguard: 'Deduplication validation and schema enforcement on custom properties.'
  },
  communicate: {
    id: 'communicate',
    title: 'Communicate (Calls & Messages)',
    category: 'CORE PILLAR 2',
    status: 'IMPLEMENTED',
    description: 'Real-time communication engine. Powers in-browser WebRTC softphone calling, call recording, and omnichannel queueing across SMS, WhatsApp, and email.',
    inputs: ['Outbound click-to-dial trigger', 'Omnichannel message composer', 'Incoming telephony webhooks'],
    outputs: ['Audio call recordings', 'Call disposition tags', 'Queued outbound message dispatches'],
    safeguard: 'Pre-flight DNC verification and timezone quiet-hour lockout checks prior to connection.'
  },
  manage: {
    id: 'manage',
    title: 'Manage (Teams & RBAC)',
    category: 'CORE PILLAR 3',
    status: 'IMPLEMENTED',
    description: 'Organizational hierarchy manager. Defines multi-tier roles (Tenant Owner, Team Lead/Supervisor, Telecaller/Agent) with precise access boundaries.',
    inputs: ['User invitations', 'Role assignment updates', 'Team pipeline mappings'],
    outputs: ['Scoped access tokens', 'Agent queue allocations', 'Activity logs'],
    safeguard: 'Immutable role boundaries preventing lower-tier agents from viewing unauthorized lead pools.'
  },
  automate: {
    id: 'automate',
    title: 'Automate & Orchestrate',
    category: 'PROCESSING LAYER',
    status: 'CONFIRMED',
    description: 'Workflow execution framework. Handles rule-based lead routing (round-robin distribution, skill-based assignment), and automated task creation.',
    inputs: ['Lead creation events', 'Call outcome webhooks', 'Stage change triggers'],
    outputs: ['Lead re-assignment commands', 'Scheduled follow-up reminders', 'Dispatch queue entries'],
    safeguard: 'Execution rate limiting and loop-prevention guards to avoid event storms.'
  },
  analyze: {
    id: 'analyze',
    title: 'Analyze & Report',
    category: 'ANALYTICS LAYER',
    status: 'IMPLEMENTED',
    description: 'Business intelligence and performance engine. Delivers real-time agent metrics, call connection rates, and asynchronous large-dataset export workers.',
    inputs: ['Call duration logs', 'Lead stage transitions', 'Agent active times'],
    outputs: ['Real-time team dashboards', 'Conversion funnels', 'Background CSV/PDF export jobs'],
    safeguard: 'Asynchronous queue workers prevent analytical calculations from locking transactional CRM tables.'
  },
  control: {
    id: 'control',
    title: 'Control & Administration',
    category: 'GOVERNANCE LAYER',
    status: 'IMPLEMENTED',
    description: 'Administrative governance suite. Provides workspace-wide configuration toggles, telephony credential setup, and complete immutable audit logs.',
    inputs: ['Admin policy updates', 'Telephony provider API keys', 'Audit query parameters'],
    outputs: ['Updated tenant policies', 'Encrypted credential vault entries', 'Tamper-evident audit trails'],
    safeguard: 'Owner-only permission gates on sensitive configuration keys and security credentials.'
  },
  comply: {
    id: 'comply',
    title: 'Comply (DNC & Quiet Hours)',
    category: 'REGULATORY SHIELD',
    status: 'IMPLEMENTED',
    description: 'Automated compliance enforcement engine. Hard stops outbound calls and messages against Do-Not-Call (DNC) lists and local jurisdiction quiet hours.',
    inputs: ['Target phone numbers', 'Lead geographic timezone', 'Outbound channel type'],
    outputs: ['Dial approval / hard block response', 'Compliance audit record', 'Reason codes'],
    safeguard: 'Zero-override blocking logic: telecallers cannot manually bypass active DNC or quiet-hour locks.'
  },
  ai: {
    id: 'ai',
    title: 'AI Intelligence (Tenant-Isolated)',
    category: 'INTELLIGENCE LAYER',
    status: 'IMPLEMENTED',
    description: 'Contextual AI assistant operating strictly within tenant boundaries. Automatically transcribes call recordings, generates structured bullet summaries, and drafts follow-ups.',
    inputs: ['Completed call audio recordings', 'Chat conversation threads', 'Lead interaction timeline'],
    outputs: ['Automated call summaries', 'Customer sentiment classification', 'Personalized message drafts'],
    safeguard: 'Strict tenant data isolation: zero multi-tenant model training or data leakage between organizations.'
  }
};

export function ProductModelDiagram() {
  const [selectedNode, setSelectedNode] = useState<string>('dialpulse');
  const activeDetail = nodeDetails[selectedNode] || nodeDetails.dialpulse;

  return (
    <div className="w-full bg-slate-900 text-white rounded-3xl p-6 sm:p-8 lg:p-12 border border-slate-800 shadow-2xl relative overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(0,105,92,0.18),transparent_70%)] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[400px] h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(11,30,54,0.4),transparent_70%)] pointer-events-none" />

      {/* Header Info */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 pb-8 border-b border-slate-800 relative z-10">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-teal-950/80 border border-teal-500/30 text-teal-400 text-xs font-mono font-medium tracking-wide uppercase mb-3">
            <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
            Interactive Core Model
          </div>
          <h3 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">
            The DialPulse Operating Model
          </h3>
          <p className="text-slate-400 text-sm sm:text-base mt-1 max-w-xl">
            Click any functional layer in the hierarchy to inspect its inputs, processing logic, safeguards, and real system status.
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs font-mono text-slate-400 bg-slate-950/60 px-3 py-2 rounded-lg border border-slate-800 self-start md:self-auto">
          <Info className="w-3.5 h-3.5 text-teal-400" />
          <span>Select nodes to inspect live architecture</span>
        </div>
      </div>

      {/* Main Grid: Diagram on left, Inspector on right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
        
        {/* Left Column: Visual Hierarchy Tree */}
        <div className="lg:col-span-7 flex flex-col items-center">
          
          {/* Level 0: DIALPULSE ROOT */}
          <button
            onClick={() => setSelectedNode('dialpulse')}
            className={cn(
              'w-full max-w-sm px-6 py-4 rounded-2xl border text-center transition-all duration-200 cursor-pointer shadow-lg group relative',
              selectedNode === 'dialpulse'
                ? 'bg-[#00695C] border-teal-400 text-white ring-2 ring-teal-400/30 shadow-[0_0_24px_rgba(0,105,92,0.4)]'
                : 'bg-slate-800/90 border-slate-700 hover:border-teal-500/60 text-slate-200'
            )}
          >
            <div className="text-[10px] font-mono tracking-widest text-teal-300 uppercase mb-0.5">Multi-Tenant Platform</div>
            <div className="text-lg font-display font-bold">DIALPULSE CORE</div>
            <div className="text-xs text-slate-300/80 mt-0.5 font-sans">Tenant Isolation & Identity Governance</div>
          </button>

          {/* Spine connector */}
          <div className="h-6 w-0.5 bg-gradient-to-b from-teal-500 to-slate-700" />

          {/* Level 1: 3-Way Fork Header */}
          <div className="w-full max-w-xl relative py-1">
            <div className="hidden sm:block absolute top-0 left-[16.66%] right-[16.66%] h-0.5 bg-slate-700" />
            <div className="hidden sm:block absolute top-0 left-[16.66%] h-3 w-0.5 bg-slate-700" />
            <div className="hidden sm:block absolute top-0 left-1/2 -translate-x-1/2 h-3 w-0.5 bg-slate-700" />
            <div className="hidden sm:block absolute top-0 right-[16.66%] h-3 w-0.5 bg-slate-700" />

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 sm:pt-3">
              {/* Pillar 1: CAPTURE */}
              <button
                onClick={() => setSelectedNode('capture')}
                className={cn(
                  'p-3.5 rounded-xl border text-left transition-all cursor-pointer flex flex-col items-center sm:items-start text-center sm:text-left',
                  selectedNode === 'capture'
                    ? 'bg-teal-950/80 border-teal-400 text-white ring-2 ring-teal-400/20'
                    : 'bg-slate-800/80 border-slate-700/80 hover:border-slate-600 text-slate-300'
                )}
              >
                <div className="w-7 h-7 rounded-lg bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400 mb-2">
                  <Users className="w-4 h-4" />
                </div>
                <div className="text-xs font-mono font-semibold text-teal-400 uppercase">CAPTURE</div>
                <div className="text-sm font-bold text-white mt-0.5">Leads & Pipelines</div>
                <div className="text-[11px] text-slate-400 mt-1 line-clamp-2">CSV, webhooks, custom property schemas.</div>
              </button>

              {/* Pillar 2: COMMUNICATE */}
              <button
                onClick={() => setSelectedNode('communicate')}
                className={cn(
                  'p-3.5 rounded-xl border text-left transition-all cursor-pointer flex flex-col items-center sm:items-start text-center sm:text-left',
                  selectedNode === 'communicate'
                    ? 'bg-teal-950/80 border-teal-400 text-white ring-2 ring-teal-400/20'
                    : 'bg-slate-800/80 border-slate-700/80 hover:border-slate-600 text-slate-300'
                )}
              >
                <div className="w-7 h-7 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-2">
                  <PhoneCall className="w-4 h-4" />
                </div>
                <div className="text-xs font-mono font-semibold text-cyan-400 uppercase">COMMUNICATE</div>
                <div className="text-sm font-bold text-white mt-0.5">Calls & Messages</div>
                <div className="text-[11px] text-slate-400 mt-1 line-clamp-2">WebRTC softphone, SMS, WhatsApp queues.</div>
              </button>

              {/* Pillar 3: MANAGE */}
              <button
                onClick={() => setSelectedNode('manage')}
                className={cn(
                  'p-3.5 rounded-xl border text-left transition-all cursor-pointer flex flex-col items-center sm:items-start text-center sm:text-left',
                  selectedNode === 'manage'
                    ? 'bg-teal-950/80 border-teal-400 text-white ring-2 ring-teal-400/20'
                    : 'bg-slate-800/80 border-slate-700/80 hover:border-slate-600 text-slate-300'
                )}
              >
                <div className="w-7 h-7 rounded-lg bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 mb-2">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div className="text-xs font-mono font-semibold text-indigo-400 uppercase">MANAGE</div>
                <div className="text-sm font-bold text-white mt-0.5">Teams & Hierarchy</div>
                <div className="text-[11px] text-slate-400 mt-1 line-clamp-2">RBAC roles: Owner, Supervisor, Telecaller.</div>
              </button>
            </div>
          </div>

          {/* Spine connector below Pillars */}
          <div className="h-5 w-0.5 bg-slate-700 mt-2" />

          {/* Level 2: AUTOMATE */}
          <button
            onClick={() => setSelectedNode('automate')}
            className={cn(
              'w-full max-w-md px-5 py-3 rounded-xl border flex items-center justify-between transition-all cursor-pointer',
              selectedNode === 'automate'
                ? 'bg-teal-950/80 border-teal-400 text-white ring-2 ring-teal-400/20'
                : 'bg-slate-800/70 border-slate-700 hover:border-slate-600 text-slate-300'
            )}
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400">
                <Sliders className="w-4 h-4" />
              </div>
              <div className="text-left">
                <div className="text-xs font-mono text-blue-400 uppercase">STEP 02 • ORCHESTRATION</div>
                <div className="text-sm font-bold text-white">AUTOMATE & ROUTE</div>
              </div>
            </div>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-900/60 text-blue-300 border border-blue-700/40">
              [CONFIRMED]
            </span>
          </button>

          <div className="h-4 w-0.5 bg-slate-700" />

          {/* Level 3: ANALYZE */}
          <button
            onClick={() => setSelectedNode('analyze')}
            className={cn(
              'w-full max-w-md px-5 py-3 rounded-xl border flex items-center justify-between transition-all cursor-pointer',
              selectedNode === 'analyze'
                ? 'bg-teal-950/80 border-teal-400 text-white ring-2 ring-teal-400/20'
                : 'bg-slate-800/70 border-slate-700 hover:border-slate-600 text-slate-300'
            )}
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <BarChart3 className="w-4 h-4" />
              </div>
              <div className="text-left">
                <div className="text-xs font-mono text-emerald-400 uppercase">STEP 03 • VISIBILITY</div>
                <div className="text-sm font-bold text-white">ANALYZE & REPORT</div>
              </div>
            </div>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-900/60 text-emerald-300 border border-emerald-700/40">
              [IMPLEMENTED]
            </span>
          </button>

          <div className="h-4 w-0.5 bg-slate-700" />

          {/* Level 4: CONTROL */}
          <button
            onClick={() => setSelectedNode('control')}
            className={cn(
              'w-full max-w-md px-5 py-3 rounded-xl border flex items-center justify-between transition-all cursor-pointer',
              selectedNode === 'control'
                ? 'bg-teal-950/80 border-teal-400 text-white ring-2 ring-teal-400/20'
                : 'bg-slate-800/70 border-slate-700 hover:border-slate-600 text-slate-300'
            )}
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                <Cpu className="w-4 h-4" />
              </div>
              <div className="text-left">
                <div className="text-xs font-mono text-amber-400 uppercase">STEP 04 • GOVERNANCE</div>
                <div className="text-sm font-bold text-white">CONTROL & ADMIN</div>
              </div>
            </div>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-900/60 text-amber-300 border border-amber-700/40">
              [IMPLEMENTED]
            </span>
          </button>

          <div className="h-4 w-0.5 bg-slate-700" />

          {/* Level 5: COMPLY */}
          <button
            onClick={() => setSelectedNode('comply')}
            className={cn(
              'w-full max-w-md px-5 py-3 rounded-xl border flex items-center justify-between transition-all cursor-pointer',
              selectedNode === 'comply'
                ? 'bg-teal-950/80 border-teal-400 text-white ring-2 ring-teal-400/20'
                : 'bg-slate-800/70 border-slate-700 hover:border-slate-600 text-slate-300'
            )}
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-rose-500/10 border border-rose-500/30 flex items-center justify-center text-rose-400">
                <Scale className="w-4 h-4" />
              </div>
              <div className="text-left">
                <div className="text-xs font-mono text-rose-400 uppercase">STEP 05 • SAFEGUARD</div>
                <div className="text-sm font-bold text-white">COMPLY (DNC & QUIET HOURS)</div>
              </div>
            </div>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-rose-900/60 text-rose-300 border border-rose-700/40">
              [IMPLEMENTED]
            </span>
          </button>

          <div className="h-4 w-0.5 bg-slate-700" />

          {/* Level 6: AI */}
          <button
            onClick={() => setSelectedNode('ai')}
            className={cn(
              'w-full max-w-md px-5 py-3.5 rounded-2xl border flex items-center justify-between transition-all cursor-pointer shadow-md',
              selectedNode === 'ai'
                ? 'bg-purple-950/80 border-purple-400 text-white ring-2 ring-purple-400/20'
                : 'bg-slate-800/70 border-slate-700 hover:border-purple-500/50 text-slate-300'
            )}
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-purple-500/20 border border-purple-500/40 flex items-center justify-center text-purple-300">
                <Sparkles className="w-4 h-4" />
              </div>
              <div className="text-left">
                <div className="text-xs font-mono text-purple-400 uppercase">STEP 06 • CONTEXTUAL INTELLIGENCE</div>
                <div className="text-sm font-bold text-white">TENANT-ISOLATED AI</div>
              </div>
            </div>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-900/60 text-purple-300 border border-purple-700/40">
              [IMPLEMENTED]
            </span>
          </button>

        </div>

        {/* Right Column: Architectural Inspector Card */}
        <div className="lg:col-span-5 bg-slate-950/80 rounded-2xl border border-slate-800 p-6 shadow-xl sticky top-28">
          <div className="flex items-center justify-between gap-3 pb-4 border-b border-slate-800">
            <div>
              <span className="text-[11px] font-mono font-medium text-teal-400 tracking-wider uppercase">
                {activeDetail.category}
              </span>
              <h4 className="text-xl font-display font-bold text-white mt-0.5">
                {activeDetail.title}
              </h4>
            </div>

            <span className={cn(
              'text-[11px] font-mono font-bold px-2.5 py-1 rounded-md border',
              activeDetail.status === 'IMPLEMENTED' && 'bg-teal-950 text-teal-300 border-teal-500/30',
              activeDetail.status === 'CONFIRMED' && 'bg-blue-950 text-blue-300 border-blue-500/30',
              activeDetail.status === 'PLANNED' && 'bg-amber-950 text-amber-300 border-amber-500/30'
            )}>
              [{activeDetail.status}]
            </span>
          </div>

          <p className="text-slate-300 text-sm leading-relaxed mt-4">
            {activeDetail.description}
          </p>

          <div className="space-y-4 mt-6">
            {/* Inputs */}
            <div>
              <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
                <ArrowDown className="w-3 h-3 text-teal-400" />
                Data Ingestion / Inputs
              </div>
              <ul className="space-y-1.5">
                {activeDetail.inputs.map((inp, idx) => (
                  <li key={idx} className="text-xs text-slate-300 font-mono bg-slate-900 px-2.5 py-1.5 rounded border border-slate-800/80">
                    → {inp}
                  </li>
                ))}
              </ul>
            </div>

            {/* Outputs */}
            <div>
              <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
                <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                Generated Output / State
              </div>
              <ul className="space-y-1.5">
                {activeDetail.outputs.map((out, idx) => (
                  <li key={idx} className="text-xs text-slate-300 font-mono bg-slate-900 px-2.5 py-1.5 rounded border border-slate-800/80">
                    ✓ {out}
                  </li>
                ))}
              </ul>
            </div>

            {/* Operational Safeguard */}
            <div className="pt-4 border-t border-slate-800">
              <div className="text-[11px] font-mono uppercase tracking-wider text-rose-400 mb-1 flex items-center gap-1.5">
                <Scale className="w-3 h-3 text-rose-400" />
                Strict Operational Safeguard
              </div>
              <p className="text-xs text-slate-400 leading-normal bg-rose-950/20 border border-rose-900/30 p-2.5 rounded-lg">
                {activeDetail.safeguard}
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
