import React from 'react';
import { Button } from '@/components/ui/Button';
import { ArrowRight, Layers, PhoneCall, MessageSquare, Ticket, Users, BarChart3 } from 'lucide-react';

export function NotFoundContext() {
  return (
    <section className="py-16 md:py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-surface-container rounded-3xl p-8 sm:p-12 border border-outline-variant/80 relative overflow-hidden">
          
          {/* Subtle background glow */}
          <div 
            aria-hidden="true" 
            className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" 
          />

          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="max-w-xl">
              <span className="text-xs font-mono font-bold tracking-widest text-primary uppercase block mb-2">
                PLATFORM CONTINUITY
              </span>
              
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-on-surface tracking-tight leading-tight mb-4">
                Lost page. <br />
                <span className="text-primary">Not lost context.</span>
              </h2>

              <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed mb-6">
                DialPulse is built to keep customer operations organized — from leads and calls to messaging, tickets, teams and reporting.
              </p>

              {/* Supported Capability Badges */}
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-lowest border border-outline-variant/60 text-xs text-on-surface-variant font-medium">
                  <PhoneCall className="w-3.5 h-3.5 text-primary" />
                  Calls
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-lowest border border-outline-variant/60 text-xs text-on-surface-variant font-medium">
                  <MessageSquare className="w-3.5 h-3.5 text-primary" />
                  WhatsApp & SMS
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-lowest border border-outline-variant/60 text-xs text-on-surface-variant font-medium">
                  <Ticket className="w-3.5 h-3.5 text-primary" />
                  Tickets
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-lowest border border-outline-variant/60 text-xs text-on-surface-variant font-medium">
                  <Users className="w-3.5 h-3.5 text-primary" />
                  Teams
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-lowest border border-outline-variant/60 text-xs text-on-surface-variant font-medium">
                  <BarChart3 className="w-3.5 h-3.5 text-primary" />
                  Reporting
                </span>
              </div>
            </div>

            <div className="shrink-0 flex flex-col items-start md:items-end">
              <Button href="/product" size="lg" className="w-full sm:w-auto shadow-sm">
                Explore DialPulse
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </Button>
            </div>
          </div>

          {/* Microcopy / Human Touch */}
          <div className="mt-8 pt-6 border-t border-outline-variant/50 text-center sm:text-left">
            <p className="text-xs sm:text-sm font-mono text-on-surface-variant italic">
              "We checked. This page isn't in the pipeline."
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
