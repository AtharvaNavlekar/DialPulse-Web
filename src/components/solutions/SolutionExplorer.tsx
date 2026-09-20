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
import { SOLUTIONS_DATA, SolutionDefinition } from '@/data/solutionsData';

// Using centralized SolutionDefinition from @/data/solutionsData


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
            Extracted: Requested security whitepaper & architecture review before Friday.
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

export function SolutionExplorer({ selectedSlug }: { selectedSlug?: string }) {
  const initialSlug = selectedSlug && SOLUTIONS_DATA.some(s => s.slug === selectedSlug || s.id === selectedSlug)
    ? (SOLUTIONS_DATA.find(s => s.slug === selectedSlug || s.id === selectedSlug)?.slug || SOLUTIONS_DATA[0].slug)
    : SOLUTIONS_DATA[0].slug;
  const [activeSlug, setActiveSlug] = useState(initialSlug);

  // Sync if selectedSlug changes via URL navigation
  useEffect(() => {
    if (selectedSlug) {
      const match = SOLUTIONS_DATA.find(s => s.slug === selectedSlug || s.id === selectedSlug);
      if (match) {
        setActiveSlug(match.slug);
        // Scroll to explorer section gently
        const el = document.getElementById('solution-explorer');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    }
  }, [selectedSlug]);

  const currentSolution = SOLUTIONS_DATA.find(s => s.slug === activeSlug) || SOLUTIONS_DATA[0];

  const renderMockup = (type: SolutionDefinition['mockupType']) => {
    switch (type) {
      case 'pipeline':
        return <PipelineMockup />;
      case 'teams':
        return <TeamsSolutionMockup />;
      case 'calls':
        return <OmnichannelMockup />;
      case 'messaging':
        return <FollowupSolutionMockup />;
      case 'reports':
        return <AnalyticsMockup />;
      case 'compliance':
        return <ComplianceMockup />;
      case 'tickets':
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
            {SOLUTIONS_DATA.map((sol) => {
              const isActive = sol.slug === currentSolution.slug;
              return (
                <button
                  key={sol.id}
                  onClick={() => setActiveSlug(sol.slug)}
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
                {currentSolution.statusBadge}
              </span>
            </div>

            <div>
              <h3 className="text-xl sm:text-2xl font-display font-bold text-slate-900">
                {currentSolution.headline}
              </h3>
              <p className="text-slate-600 text-sm sm:text-base mt-2 leading-relaxed">
                {currentSolution.shortDescription}
              </p>
            </div>

            {/* Problem & Friction Context */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-white border border-rose-200/80 shadow-2xs">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-rose-700 uppercase mb-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  Operational Problem
                </div>
                <p className="text-xs text-slate-700 leading-relaxed font-medium">
                  {currentSolution.problem.headline}
                </p>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                  {currentSolution.problem.description}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-amber-200/80 shadow-2xs">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-amber-700 uppercase mb-1">
                  <Clock className="w-3.5 h-3.5" />
                  Primary Workflow Friction
                </div>
                <p className="text-xs text-slate-700 leading-relaxed font-medium">
                  {currentSolution.problem.frictions[0]}
                </p>
                {currentSolution.problem.frictions[1] && (
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    {currentSolution.problem.frictions[1]}
                  </p>
                )}
              </div>
            </div>

            {/* Workflow Progression Steps */}
            <div className="pt-2">
              <div className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mb-2">
                Operational Workflow Sequence
              </div>
              <div className="flex flex-wrap items-center gap-1.5 text-xs font-mono">
                {currentSolution.workflow.map((step, idx) => (
                  <div key={idx} className="flex items-center gap-1.5">
                    <span className="px-2.5 py-1 rounded-md bg-white border border-slate-200 text-slate-800 font-semibold shadow-2xs">
                      {step.step}. {step.title}
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
                {currentSolution.benefits.map((outcome, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs text-slate-700 leading-relaxed">
                    <Check className="w-4 h-4 text-[#00695C] shrink-0 mt-0.5 stroke-[2.5]" />
                    <span><strong>{outcome.title}:</strong> {outcome.description}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Modules Used & Action Links */}
            <div className="pt-3 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
              <div className="flex flex-wrap items-center gap-1.5 text-slate-500">
                <span className="font-bold text-slate-700">Product Modules:</span>
                {currentSolution.modulesUsed.map((mod, i) => (
                  <span key={i} className="px-2 py-0.5 rounded bg-teal-50 border border-teal-200 text-[#00695C] font-semibold">
                    {mod}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-3">
                <Link
                  to={`/solutions/${currentSolution.slug}`}
                  className="inline-flex items-center gap-1.5 font-bold text-[#00695C] hover:text-[#004D40] transition-colors"
                >
                  <span>Full solution spec</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <span className="text-slate-300">•</span>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-1.5 font-semibold text-slate-600 hover:text-slate-900 transition-colors"
                >
                  <span>Demo</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Dynamic Live Mockup Display */}
          <div className="w-full">
            <div className="mb-2 flex items-center justify-between text-xs font-mono text-slate-400 px-1">
              <span>LIVE INTERFACE REPRESENTATION: {currentSolution.title.toUpperCase()}</span>
              <span className="text-[#00695C] font-semibold">INTERACTIVE STATE</span>
            </div>
            {renderMockup(currentSolution.mockupType)}
            <div className="mt-2 text-center">
              <span className="text-[11px] font-mono text-slate-400">
                {currentSolution.mockupDisclaimer}
              </span>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
