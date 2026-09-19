import { Layers, PhoneCall, ShieldCheck, Clock, BarChart2, Bot } from 'lucide-react';

export function PricingValueBanner() {
  const valuePillars = [
    {
      icon: Layers,
      title: 'Unified Customer Data Layer',
      desc: 'Replaces disjointed spreadsheets and siloed mobile logs with a single PostgreSQL-backed contact timeline.',
      tag: 'PostgreSQL DB',
    },
    {
      icon: PhoneCall,
      title: 'In-Browser WebRTC Softphone',
      desc: 'Zero external hardware. Instant click-to-dial, real-time agent presence, and dual-track recordings in your browser.',
      tag: 'WebRTC Audio',
    },
    {
      icon: ShieldCheck,
      title: 'Zero-Bypass Policy Guardrails',
      desc: 'Automated DNC validation, quiet-hour timezone enforcement, and frequency limits programmatically locked into code.',
      tag: 'Regulatory Lock',
    },
    {
      icon: Clock,
      title: 'Follow-Up Cadence & Triggers',
      desc: 'Mandatory call dispositions, automated callback notifications, and multi-channel touchpoint sequencing.',
      tag: 'Cadence Engine',
    },
    {
      icon: BarChart2,
      title: 'Operational Telephony BI',
      desc: 'Handle times, call duration, rep talk ratios, and async background worker CSV exports without UI freezing.',
      tag: 'Async BI',
    },
    {
      icon: Bot,
      title: 'Private In-Tenant AI Intelligence',
      desc: 'Speech-to-text transcriptions and action item extraction operating strictly inside your isolated tenant boundary.',
      tag: 'Zero Training Leak',
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-slate-900 text-white relative overflow-hidden border-b border-slate-800">
      {/* Subtle backdrop pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-8 border-b border-slate-800/80">
          <div className="space-y-3 max-w-2xl">
            <span className="text-teal-400 font-mono text-xs uppercase tracking-widest font-semibold">
              The Architecture You Are Investing In
            </span>
            <h2 className="text-2xl sm:text-4xl font-display font-bold tracking-tight text-white">
              Every tier delivers verified operational infrastructure.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-slate-400 max-w-md leading-relaxed">
            DialPulse is not an empty seat counter or skin on third-party APIs. Every tier is backed by verified telephony, compliance, and database boundaries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {valuePillars.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="p-6 rounded-2xl bg-slate-800/60 border border-slate-700/60 hover:border-teal-500/40 transition-colors group flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider bg-slate-900/60 px-2.5 py-1 rounded-md border border-slate-700">
                      {item.tag}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-white group-hover:text-teal-300 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-400 mt-2 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
