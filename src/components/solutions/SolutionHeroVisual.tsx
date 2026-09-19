import { useState } from 'react';
import { 
  Users, 
  PhoneCall, 
  MessageSquare, 
  Clock, 
  ShieldCheck, 
  BarChart3, 
  Sparkles, 
  ArrowRight,
  Shield,
  Layers,
  Database,
  Lock,
  Calendar,
  CheckCircle2,
  AlertTriangle
} from 'lucide-react';
import { cn } from '@/lib/utils';

export function SolutionHeroVisual() {
  const [activeStage, setActiveStage] = useState(1);

  const stages = [
    { id: 0, label: 'LEAD', desc: 'Inbound Webhook / CSV Ingestion', icon: Users, color: 'text-blue-500', bg: 'bg-blue-50', border: 'border-blue-200' },
    { id: 1, label: 'COMPLIANCE', desc: 'DNC & Quiet Hour Lock Check', icon: ShieldCheck, color: 'text-[#00695C]', bg: 'bg-teal-50', border: 'border-teal-200' },
    { id: 2, label: 'CALL', desc: 'Browser WebRTC Softphone Audio', icon: PhoneCall, color: 'text-indigo-500', bg: 'bg-indigo-50', border: 'border-indigo-200' },
    { id: 3, label: 'MESSAGE', desc: 'Fallback WhatsApp / SMS Thread', icon: MessageSquare, color: 'text-cyan-500', bg: 'bg-cyan-50', border: 'border-cyan-200' },
    { id: 4, label: 'AI SUMMARY', desc: 'Tenant-Isolated Bullet Synthesis', icon: Sparkles, color: 'text-violet-500', bg: 'bg-violet-50', border: 'border-violet-200' },
    { id: 5, label: 'REPORT', desc: 'Team Queue & Async Analytics', icon: BarChart3, color: 'text-emerald-500', bg: 'bg-emerald-50', border: 'border-emerald-200' }
  ];

  return (
    <div className="w-full bg-white rounded-3xl border border-slate-200/90 shadow-[0_20px_60px_-15px_rgba(0,105,92,0.12)] p-6 sm:p-8 lg:p-10 relative overflow-hidden">
      
      {/* Top Bar: Connected Pipeline Indicator */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 mb-6 border-b border-slate-100">
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900">
            CONNECTED OPERATIONAL FLOW • REAL-TIME STATE
          </span>
        </div>
        <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-teal-50 border border-teal-200 text-[#00695C] text-[11px] font-mono font-bold">
          <Lock className="w-3 h-3" />
          <span>TENANT ISOLATION BOUNDARY</span>
        </div>
      </div>

      {/* Interactive Horizontal Workflow Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 mb-8">
        {stages.map((stg) => {
          const Icon = stg.icon;
          const isActive = stg.id === activeStage;
          return (
            <button
              key={stg.id}
              onClick={() => setActiveStage(stg.id)}
              className={cn(
                'p-3 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between',
                isActive
                  ? 'bg-slate-900 text-white border-slate-900 shadow-md ring-2 ring-[#00695C]/30'
                  : 'bg-slate-50 hover:bg-slate-100/80 border-slate-200/80 text-slate-700'
              )}
            >
              <div className="flex items-center justify-between mb-2">
                <span className={cn(
                  'text-[10px] font-mono font-bold px-1.5 py-0.5 rounded',
                  isActive ? 'bg-teal-400 text-slate-950' : 'bg-slate-200 text-slate-600'
                )}>
                  0{stg.id + 1}
                </span>
                <Icon className={cn('w-4 h-4', isActive ? 'text-teal-300' : stg.color)} />
              </div>
              <div>
                <div className={cn('text-xs font-bold font-display tracking-tight', isActive ? 'text-white' : 'text-slate-900')}>
                  {stg.label}
                </div>
                <div className={cn('text-[10px] truncate mt-0.5 font-mono', isActive ? 'text-slate-400' : 'text-slate-500')}>
                  {stg.desc.split(' ')[0]}
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* High-Fidelity Active State Product Panel */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 bg-slate-50/80 rounded-2xl p-5 sm:p-7 border border-slate-200/90">
        
        {/* Left Sub-Panel: Stage Context & Logic */}
        <div className="lg:col-span-6 space-y-4">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-white border border-slate-200 text-xs font-mono text-[#00695C] font-semibold">
            <span>ACTIVE WORKFLOW STATE</span>
            <span className="text-slate-300">•</span>
            <span>STAGE 0{activeStage + 1}</span>
          </div>

          <h3 className="text-xl sm:text-2xl font-display font-bold text-slate-900">
            {activeStage === 0 && 'Lead Intake & Deduplication Engine'}
            {activeStage === 1 && 'Pre-Flight Policy & Quiet Hour Guard'}
            {activeStage === 2 && 'WebRTC Voice Softphone In Action'}
            {activeStage === 3 && 'Unified Multi-Channel Message Fallback'}
            {activeStage === 4 && 'In-Tenant AI Extraction & Summarization'}
            {activeStage === 5 && 'Supervisor Visibility & Async Queue Reporting'}
          </h3>

          <p className="text-slate-600 text-sm leading-relaxed">
            {activeStage === 0 && 'When raw contact data arrives from webhooks or batch imports, DialPulse automatically checks for existing phone numbers, runs validation against custom properties, and assigns the lead to the active sales pipeline.'}
            {activeStage === 1 && 'Before an outbound call or message is dispatched, the system verifies Do-Not-Call (DNC) registries and calculates recipient local time (e.g. 9:00 AM - 8:00 PM). If in quiet hours, the action is physically locked.'}
            {activeStage === 2 && 'Telecallers dial directly inside their Chrome or modern browser via WebRTC with zero desk phone hardware. Dual-track audio is recorded and instantly associated with the lead timeline.'}
            {activeStage === 3 && 'If an outbound voice attempt goes unanswered, telecallers can trigger pre-approved WhatsApp or SMS templates in one click without toggling to external messaging apps.'}
            {activeStage === 4 && 'The completed call audio is converted into text and structured action bullets strictly within the tenant boundary. Transcripts are never transmitted to public LLM training datasets.'}
            {activeStage === 5 && 'Team leads monitor live agent presence and conversation volume. Heavy analytical queries and CSV audits run asynchronously in background workers without freezing the web interface.'}
          </p>

          <div className="pt-3 border-t border-slate-200/70 flex flex-wrap gap-2 text-xs font-mono text-slate-500">
            <span className="px-2 py-0.5 rounded bg-white border border-slate-200">
              Module: {activeStage === 0 ? 'Leads & Imports' : activeStage === 1 ? 'Compliance Engine' : activeStage === 2 ? 'WebRTC Softphone' : activeStage === 3 ? 'Omnichannel Messaging' : activeStage === 4 ? 'Tenant AI' : 'Reports & Analytics'}
            </span>
            <span className="px-2 py-0.5 rounded bg-emerald-50 border border-emerald-200 text-emerald-800 font-bold">
              [IMPLEMENTED]
            </span>
          </div>
        </div>

        {/* Right Sub-Panel: Live Simulated UI State */}
        <div className="lg:col-span-6 bg-white rounded-xl border border-slate-200 p-5 shadow-sm font-sans">
          
          {/* Card header */}
          <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-100">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#00695C] text-white flex items-center justify-center font-bold text-xs">
                DP
              </div>
              <div>
                <div className="text-xs font-bold text-slate-900">Prospect: Elena Rostova</div>
                <div className="text-[11px] font-mono text-slate-500">+1 (415) 555-0142 • Inbound Inquiry</div>
              </div>
            </div>
            <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-teal-50 border border-teal-200 text-[#00695C] font-semibold">
              Pipeline: Enterprise Sales
            </span>
          </div>

          {/* Conditional state visual */}
          {activeStage === 0 && (
            <div className="space-y-3 font-mono text-xs">
              <div className="p-3 rounded-lg bg-blue-50/70 border border-blue-200/80 text-blue-900">
                <div className="font-bold flex items-center gap-1.5 text-blue-800">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                  Deduplication Check Passed
                </div>
                <div className="text-[11px] text-blue-700 mt-1">No existing record with phone +14155550142. New lead record created: #lead_7719.</div>
              </div>
              <div className="grid grid-cols-2 gap-2 text-[11px] text-slate-600">
                <div className="p-2 rounded bg-slate-50 border border-slate-200">Owner: Marcus Vance (Telecaller)</div>
                <div className="p-2 rounded bg-slate-50 border border-slate-200">Stage: Needs Qualification</div>
              </div>
            </div>
          )}

          {activeStage === 1 && (
            <div className="space-y-3 font-mono text-xs">
              <div className="p-3 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-900">
                <div className="font-bold flex items-center gap-1.5 text-emerald-800">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  Pre-Flight Compliance: PERMITTED
                </div>
                <div className="text-[11px] text-emerald-700 mt-1">Local Time: 14:18 PST (Permitted 09:00 - 20:00). DNC Check: NOT MATCHED.</div>
              </div>
              <div className="p-2 rounded bg-slate-50 border border-slate-200 text-[11px] text-slate-600">
                Audit Hash: chk_a94f1b • Lockout Status: UNLOCKED
              </div>
            </div>
          )}

          {activeStage === 2 && (
            <div className="space-y-3">
              <div className="p-3.5 rounded-xl bg-[#00695C]/5 border border-[#00695C]/20 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-bold text-[#00695C] font-mono">LIVE CALL ACTIVE • 02:47</span>
                </div>
                <span className="text-[10px] font-mono text-slate-500">Opus 48kHz HD Audio</span>
              </div>
              <div className="text-xs text-slate-600 p-2.5 rounded bg-slate-50 border border-slate-200">
                Live note: &quot;Customer evaluating 30-seat telephony rollout for Q3. Requested technical architecture whitepaper.&quot;
              </div>
            </div>
          )}

          {activeStage === 3 && (
            <div className="space-y-2.5">
              <div className="text-[11px] font-mono text-slate-500 font-bold uppercase">Multi-Channel Thread</div>
              <div className="p-2.5 rounded-lg bg-teal-50/70 border border-teal-200 text-xs text-slate-700">
                <span className="font-bold text-[#00695C]">WhatsApp Template Sent:</span> &quot;Hi Elena, thank you for speaking with Marcus at DialPulse today. Here is the link to our security architecture overview.&quot;
              </div>
              <div className="flex items-center justify-between text-[10px] font-mono text-slate-500 px-1">
                <span>Delivery: Read by Recipient</span>
                <span className="text-emerald-600">● Delivered via Twilio/Meta Gateway</span>
              </div>
            </div>
          )}

          {activeStage === 4 && (
            <div className="space-y-2.5 font-sans">
              <div className="flex items-center justify-between text-xs font-mono text-violet-700 font-bold">
                <span className="flex items-center gap-1.5"><Sparkles className="w-3.5 h-3.5" /> AI Interaction Summary</span>
                <span className="text-[10px] bg-violet-100 text-violet-800 px-1.5 py-0.5 rounded">Tenant Isolated</span>
              </div>
              <ul className="text-xs text-slate-700 space-y-1.5 list-disc list-inside bg-slate-50 p-3 rounded-lg border border-slate-200">
                <li>Budget confirmed for 30 sales seats ($1.5k/mo target).</li>
                <li>Requires quiet-hours enforcement proof for compliance team.</li>
                <li>Next step: Schedule supervisor-led demonstration on Thursday.</li>
              </ul>
            </div>
          )}

          {activeStage === 5 && (
            <div className="space-y-3 font-mono text-xs">
              <div className="grid grid-cols-2 gap-2">
                <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                  <div className="text-[10px] text-slate-500">Agent Calls Today</div>
                  <div className="text-base font-bold text-slate-900 mt-0.5 font-mono">42 Dials</div>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                  <div className="text-[10px] text-slate-500">Avg Handle Time</div>
                  <div className="text-base font-bold text-teal-700 mt-0.5 font-mono">3m 18s</div>
                </div>
              </div>
              <div className="text-[11px] text-slate-500 p-2 rounded bg-slate-50 border border-slate-200 flex items-center justify-between">
                <span>Background Export Worker: Idle</span>
                <span className="text-emerald-600 font-bold">System Load: 12%</span>
              </div>
            </div>
          )}

          {/* Bottom Card Footer */}
          <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-400">
            <span>Multi-Tenant Architecture</span>
            <span className="text-[#00695C] font-semibold">End-to-End Synchronized</span>
          </div>

        </div>

      </div>

    </div>
  );
}
