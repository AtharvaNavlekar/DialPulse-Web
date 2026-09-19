import React from 'react';
import { ArrowRight, Server, Cloud, Cpu, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

const SUBPROCESSORS = [
  {
    provider: 'Google / Gemini',
    purpose: 'AI inference and audio transcription services',
    scope: 'Invoked when users trigger AI-assisted text summarization or transcription workflows.',
    icon: Cpu,
  },
  {
    provider: 'Meta / WhatsApp',
    purpose: 'WhatsApp Business API communication transport',
    scope: 'Delivers outbound template messages and ingests customer inbound responses.',
    icon: MessageSquare,
  },
  {
    provider: 'Cloud Infrastructure',
    purpose: 'Container application hosting and relational database infrastructure',
    scope: 'Hosts application runtime services, persistent tenant data stores, and disk volumes.',
    icon: Cloud,
  },
  {
    provider: 'Redis / Queue Infrastructure',
    purpose: 'Caching, rate-limiting enforcement, and background job queuing',
    scope: 'Manages distributed session cache, telemetry throttling, and high-volume background tasks.',
    icon: Server,
  },
];

export function SecurityThirdParty() {
  return (
    <section className="py-20 md:py-28 bg-surface border-b border-outline-variant/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono font-semibold tracking-wider uppercase mb-4">
            <Cloud className="w-3.5 h-3.5" />
            <span>SUBPROCESSORS & INFRASTRUCTURE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-on-surface tracking-tight leading-tight">
            Third-party services
          </h2>
          <p className="mt-4 text-base sm:text-lg text-on-surface-variant leading-relaxed">
            DialPulse works with specialized infrastructure and model providers to deliver voice, messaging, queuing, and compute capabilities.
          </p>
        </div>

        {/* 4-provider Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {SUBPROCESSORS.map((p) => {
            const Icon = p.icon;
            return (
              <div 
                key={p.provider}
                className="p-6 rounded-3xl bg-surface-container-low border border-outline-variant/80 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-2xl bg-surface-container-lowest border border-outline-variant flex items-center justify-center text-primary">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-display font-bold text-on-surface">
                        {p.provider}
                      </h3>
                      <div className="text-xs font-mono text-primary font-medium">
                        {p.purpose}
                      </div>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                    {p.scope}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-outline-variant/40 text-[10px] font-mono text-outline">
                  // INFRASTRUCTURE_DEPENDENCY
                </div>
              </div>
            );
          })}
        </div>

        {/* Link to Privacy Policy */}
        <div className="flex items-center justify-between p-5 rounded-2xl bg-surface-container border border-outline-variant/80">
          <span className="text-xs sm:text-sm text-on-surface-variant">
            For detailed information on how data is handled across these services, review our complete privacy terms.
          </span>
          <Link 
            to="/privacy" 
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-primary hover:text-primary/80 transition-colors shrink-0"
          >
            <span>Privacy Policy</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
