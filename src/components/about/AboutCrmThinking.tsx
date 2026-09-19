import React from 'react';
import { Compass } from 'lucide-react';

export function AboutCrmThinking() {
  return (
    <section className="py-20 md:py-32 bg-surface border-b border-outline-variant/60 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
        
        {/* Eyebrow marker */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono font-semibold tracking-wider uppercase mb-8">
          <Compass className="w-3.5 h-3.5" />
          <span>A DIFFERENT WAY TO THINK ABOUT CRM</span>
        </div>

        {/* Primary Headline */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-medium text-on-surface-variant tracking-tight leading-tight mb-4">
          A CRM shouldn't only store customer records.
        </h2>

        {/* Oversized Secondary Statement */}
        <p className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-on-surface tracking-tight leading-[1.1] mb-8">
          It should help teams <br className="hidden sm:inline" />
          <span className="text-primary underline decoration-primary/30 decoration-4 underline-offset-8">
            move the work forward.
          </span>
        </p>

        {/* Supporting Narrative */}
        <p className="text-lg sm:text-xl lg:text-2xl text-on-surface-variant font-normal leading-relaxed max-w-3xl">
          That means the product has to understand more than records. It has to understand ownership, communication, follow-up, team visibility, operational constraints and the context around every customer interaction.
        </p>

      </div>
    </section>
  );
}
