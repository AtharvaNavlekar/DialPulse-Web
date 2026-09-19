import React from 'react';
import { 
  Users, 
  Phone, 
  MessageSquare, 
  FileText, 
  Layers, 
  BarChart3, 
  ShieldAlert, 
  Sparkles,
  CheckCircle2,
  Clock
} from 'lucide-react';

const MOSAIC_ITEMS = [
  {
    id: 'leads',
    category: 'LEADS',
    title: 'Customer Context & Pipeline',
    desc: 'Structured ingestion, custom fields, status tracking and assigned ownership.',
    icon: Users,
    visual: (
      <div className="p-3 rounded-xl bg-surface-container border border-outline-variant/60 font-mono text-[11px] space-y-1.5">
        <div className="flex justify-between items-center text-on-surface">
          <span className="font-semibold">LEAD-8842 // Vikram S.</span>
          <span className="text-[10px] px-1.5 py-0.2 rounded bg-primary/10 text-primary font-bold">QUALIFIED</span>
        </div>
        <div className="text-on-surface-variant flex justify-between">
          <span>Owner: Priya M.</span>
          <span>Score: 84/100</span>
        </div>
      </div>
    ),
  },
  {
    id: 'calls',
    category: 'CALLS',
    title: 'Interaction Timelines',
    desc: 'Disposition outcomes, duration tracking, connected notes and recording links.',
    icon: Phone,
    visual: (
      <div className="p-3 rounded-xl bg-surface-container border border-outline-variant/60 font-mono text-[11px] space-y-1.5">
        <div className="flex justify-between items-center text-on-surface">
          <span className="font-semibold">OUTBOUND // 04m 12s</span>
          <span className="text-[10px] px-1.5 py-0.2 rounded bg-emerald-100 text-emerald-800 font-bold">CONNECTED</span>
        </div>
        <div className="text-on-surface-variant text-[10px] line-clamp-1">
          "Requested enterprise migration summary for 4 teams."
        </div>
      </div>
    ),
  },
  {
    id: 'messaging',
    category: 'MESSAGING',
    title: 'Supported Channels',
    desc: 'WhatsApp & SMS delivery metadata, message threads, and template consistency.',
    icon: MessageSquare,
    visual: (
      <div className="p-3 rounded-xl bg-surface-container border border-outline-variant/60 font-mono text-[11px] space-y-1.5">
        <div className="flex justify-between items-center">
          <span className="text-emerald-700 font-bold">WHATSAPP</span>
          <span className="text-outline text-[10px]">DELIVERED ✓✓</span>
        </div>
        <div className="text-on-surface-variant text-[10px]">
          Schedule confirmation sent with authenticated tracking link.
        </div>
      </div>
    ),
  },
  {
    id: 'tickets',
    category: 'TICKETS',
    title: 'Support & Escalation',
    desc: 'Issue lifecycles, SLA tracking, lead-linked tickets, and resolution history.',
    icon: FileText,
    visual: (
      <div className="p-3 rounded-xl bg-surface-container border border-outline-variant/60 font-mono text-[11px] space-y-1.5">
        <div className="flex justify-between items-center text-on-surface">
          <span className="font-semibold">TCK-1092 // API Sync</span>
          <span className="text-[10px] px-1.5 py-0.2 rounded bg-amber-100 text-amber-800 font-bold">IN REVIEW</span>
        </div>
        <div className="text-on-surface-variant flex items-center gap-1 text-[10px]">
          <Clock className="w-3 h-3 text-outline" />
          <span>Priority: High • Queue: Tier-2</span>
        </div>
      </div>
    ),
  },
  {
    id: 'teams',
    category: 'TEAMS',
    title: 'Role-Based Scoping',
    desc: 'Granular hierarchies across operational telecallers, team leads, and supervisors.',
    icon: Layers,
    visual: (
      <div className="p-3 rounded-xl bg-surface-container border border-outline-variant/60 font-mono text-[11px] space-y-1.5">
        <div className="flex justify-between items-center text-on-surface">
          <span>TEAM // North Region</span>
          <span className="text-primary font-bold">12 AGENTS</span>
        </div>
        <div className="text-on-surface-variant text-[10px]">
          Scope: Team-Scoped Read/Write • Masked PII Enabled
        </div>
      </div>
    ),
  },
  {
    id: 'reports',
    category: 'REPORTS',
    title: 'Operational Visibility',
    desc: 'Call volume metrics, conversion velocities, and team pacing analytics.',
    icon: BarChart3,
    visual: (
      <div className="p-3 rounded-xl bg-surface-container border border-outline-variant/60 font-mono text-[11px] space-y-1.5">
        <div className="flex justify-between items-center text-on-surface">
          <span>DAILY REACH // 420 calls</span>
          <span className="text-emerald-700 font-bold">+18% PACING</span>
        </div>
        <div className="w-full bg-surface-variant h-1.5 rounded-full overflow-hidden">
          <div className="bg-primary h-full rounded-full" style={{ width: '74%' }} />
        </div>
      </div>
    ),
  },
  {
    id: 'compliance',
    category: 'COMPLIANCE',
    title: 'Communication Safeguards',
    desc: 'Opt-out enforcement, quiet hours windows, and fatigue frequency caps.',
    icon: ShieldAlert,
    visual: (
      <div className="p-3 rounded-xl bg-surface-container border border-outline-variant/60 font-mono text-[11px] space-y-1.5">
        <div className="flex justify-between items-center">
          <span className="text-amber-800 font-bold">QUIET HOURS CHECK</span>
          <span className="text-emerald-700 font-bold">PASS (14:30)</span>
        </div>
        <div className="text-on-surface-variant text-[10px]">
          Window: 09:00 - 20:00 • Outreach Authorized
        </div>
      </div>
    ),
  },
  {
    id: 'ai',
    category: 'AI',
    title: 'Assisted Processing',
    desc: 'Server-side transcription, conversation summaries, and sentiment classification.',
    icon: Sparkles,
    visual: (
      <div className="p-3 rounded-xl bg-surface-container border border-outline-variant/60 font-mono text-[11px] space-y-1.5">
        <div className="flex justify-between items-center text-primary">
          <span className="font-bold">GEMINI // SUMMARY</span>
          <span className="text-[10px] px-1.5 py-0.2 rounded bg-primary/10 text-primary">SANITIZED</span>
        </div>
        <div className="text-on-surface-variant text-[10px] line-clamp-1">
          "Lead interested in multi-team rollout. Callback scheduled."
        </div>
      </div>
    ),
  },
];

export function AboutMosaic() {
  return (
    <section className="py-20 md:py-32 bg-surface border-b border-outline-variant/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono font-semibold tracking-wider uppercase mb-4">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>PLATFORM MOSAIC</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-on-surface tracking-tight leading-tight">
            One platform. <br className="hidden sm:inline" />
            Many moments in the workflow.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-on-surface-variant">
            Every module is crafted to handle a concrete stage of customer operations without creating isolated silos.
          </p>
        </div>

        {/* 8-Part Product Mosaic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {MOSAIC_ITEMS.map((item) => {
            const Icon = item.icon;
            return (
              <div 
                key={item.id}
                className="p-6 rounded-3xl bg-surface-container-lowest border border-outline-variant/80 hover:border-primary/50 transition-all duration-200 flex flex-col justify-between group shadow-2xs"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-mono font-bold tracking-widest text-primary uppercase">
                      {item.category}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-on-surface-variant group-hover:text-primary group-hover:bg-primary/10 transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-on-surface mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-on-surface-variant leading-relaxed mb-6">
                    {item.desc}
                  </p>
                </div>

                {/* UI Fragment */}
                <div className="mt-auto">
                  {item.visual}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
