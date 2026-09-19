import React from 'react';
import { ArrowRight, MessageSquareCode } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export function AboutContactCTA() {
  return (
    <section className="py-20 md:py-32 bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-surface-container rounded-3xl p-8 sm:p-14 border border-outline-variant/80 relative overflow-hidden shadow-xs">
          
          {/* Subtle decorative glow */}
          <div 
            aria-hidden="true" 
            className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" 
          />

          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono font-semibold tracking-wider uppercase mb-4">
                <MessageSquareCode className="w-3.5 h-3.5" />
                <span>LET'S TALK</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-on-surface tracking-tight leading-tight mb-4">
                Have a workflow <br className="hidden sm:inline" />
                worth talking about?
              </h2>

              <p className="text-base sm:text-lg text-on-surface-variant leading-relaxed">
                Show us the problem. We'll start there.
              </p>
            </div>

            <div className="shrink-0 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Button href="/contact" size="lg" className="shadow-sm">
                Talk to DialPulse
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </Button>
              <Button href="/solutions" variant="outlined" size="lg">
                Explore Solutions
              </Button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
