import React from 'react';
import { ArrowRight, CircleDot } from 'lucide-react';

const JOURNEY_STEPS = [
  { id: 'lead', title: 'LEAD', desc: 'Inbound or bulk ingestion' },
  { id: 'ownership', title: 'OWNERSHIP', desc: 'Scoped user assignment' },
  { id: 'call', title: 'CALL', desc: 'Dialing & interaction outcome' },
  { id: 'message', title: 'MESSAGE', desc: 'WhatsApp & SMS follow-up' },
  { id: 'follow-up', title: 'FOLLOW-UP', desc: 'Task & pipeline movement' },
  { id: 'team', title: 'TEAM', desc: 'Supervisory review' },
  { id: 'support', title: 'SUPPORT', desc: 'Ticket escalations' },
  { id: 'report', title: 'REPORT', desc: 'Operational metrics' },
  { id: 'decision', title: 'DECISION', desc: 'Strategic adjustment' },
];

export function AboutJourney() {
  return (
    <section className="py-20 md:py-28 bg-surface border-b border-outline-variant/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono font-semibold tracking-wider uppercase mb-4">
            <CircleDot className="w-3.5 h-3.5" />
            <span>PRODUCT PHILOSOPHY</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-on-surface tracking-tight mb-6">
            Built from the work outward.
          </h2>

          <p className="text-base sm:text-lg text-on-surface-variant leading-relaxed mb-4">
            Instead of starting with a collection of screens, DialPulse is organized around the operational journey.
          </p>
        </div>

        {/* Operational Flow Visualization */}
        <div className="p-6 sm:p-8 rounded-3xl bg-surface-container-low border border-outline-variant/80 shadow-xs mb-8">
          <div className="text-xs font-mono uppercase tracking-widest text-primary font-bold mb-6">
            THE OPERATIONAL PROGRESSION
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-9 gap-3">
            {JOURNEY_STEPS.map((step, idx, arr) => (
              <div 
                key={step.id} 
                className="p-3.5 rounded-2xl bg-surface-container-lowest border border-outline-variant flex flex-col justify-between relative group hover:border-primary/50 transition-colors"
              >
                <div>
                  <div className="text-[10px] font-mono text-outline font-semibold mb-1">
                    0{idx + 1}
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-on-surface group-hover:text-primary transition-colors">
                    {step.title}
                  </div>
                </div>
                <div className="mt-3 text-[11px] text-on-surface-variant leading-tight">
                  {step.desc}
                </div>

                {/* Arrow to next item (hidden on last item) */}
                {idx < arr.length - 1 && (
                  <div className="hidden lg:block absolute -right-2.5 top-1/2 -translate-y-1/2 z-10 text-outline-variant">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Closing Paragraph */}
        <p className="text-sm sm:text-base text-on-surface-variant italic max-w-2xl">
          "Each part of the platform exists because it belongs somewhere in the workflow."
        </p>

      </div>
    </section>
  );
}
