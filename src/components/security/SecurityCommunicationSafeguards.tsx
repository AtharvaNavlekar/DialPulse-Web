import React from 'react';
import { Ban, BellOff, Clock, Sliders, Shield, AlertCircle } from 'lucide-react';

const SAFEGUARDS = [
  {
    name: 'Customer Opt-Out Handling',
    desc: 'Automated handling of explicit stop and unsubscribe requests, suppressing subsequent outreach campaigns.',
    icon: Ban,
  },
  {
    name: 'DND & Blocked State',
    desc: 'Contacts flagged with do-not-disturb or blocked status are quarantined from telecalling dialers and broadcast queues.',
    icon: BellOff,
  },
  {
    name: 'Quiet Hours Scheduling',
    desc: 'Configurable operational windows prevent outbound calls and messaging outside authorized local timezone hours.',
    icon: Clock,
  },
  {
    name: 'Fatigue & Frequency Caps',
    desc: 'Threshold limits restrict how many touches a customer can receive within a rolling 24-hour or 7-day window.',
    icon: Sliders,
  },
  {
    name: 'Channel Restrictions',
    desc: 'Respects customer preference matrices (e.g. WhatsApp permitted, phone calls restricted, or vice versa).',
    icon: Shield,
  },
  {
    name: 'Temporary Workflow Pause',
    desc: 'Enables supervisors to instantly halt active campaign sequences without deleting contact records or disposition histories.',
    icon: Sliders,
  },
];

export function SecurityCommunicationSafeguards() {
  return (
    <section className="py-20 md:py-28 bg-surface border-b border-outline-variant/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono font-semibold tracking-wider uppercase mb-4">
            <BellOff className="w-3.5 h-3.5" />
            <span>COMMUNICATION CONTROLS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-on-surface tracking-tight leading-tight">
            Security also means <br />
            <span className="text-primary">knowing when not to send.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-on-surface-variant leading-relaxed">
            Customer operations must respect customer boundaries. DialPulse embeds operational controls directly into calling queues and messaging pipelines to prevent unwanted touches.
          </p>
        </div>

        {/* Safeguard Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {SAFEGUARDS.map((s) => {
            const Icon = s.icon;
            return (
              <div 
                key={s.name}
                className="p-6 rounded-3xl bg-surface-container-low border border-outline-variant/80 hover:border-primary/40 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-display font-bold text-on-surface mb-2">
                    {s.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                    {s.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-outline-variant/40 text-[10px] font-mono text-outline">
                  // OUTREACH_GUARDRAIL
                </div>
              </div>
            );
          })}
        </div>

        {/* Regulatory Distinction Notice */}
        <div className="p-5 rounded-2xl bg-surface-container border border-outline-variant/80 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
            <strong>Important Regulatory Notice:</strong> These are technical platform safeguards for communication workflows. They do not by themselves establish legal compliance with every applicable privacy, messaging, telemarketing, or telecommunications requirement in your operating jurisdiction. Organizations remain responsible for lawful communication practices.
          </div>
        </div>

      </div>
    </section>
  );
}
