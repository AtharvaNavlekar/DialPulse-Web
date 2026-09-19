import React from 'react';
import { Target } from 'lucide-react';

export function AboutVision() {
  return (
    <section className="py-20 md:py-32 bg-surface-container-low border-b border-outline-variant/60 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
        
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono font-semibold tracking-wider uppercase mb-8">
          <Target className="w-3.5 h-3.5" />
          <span>FUTURE & DIRECTION</span>
        </div>

        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-medium text-on-surface-variant tracking-tight leading-tight mb-4">
          The goal is not more software.
        </h2>

        {/* Secondary Oversized Statement */}
        <p className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-on-surface tracking-tight leading-[1.1] mb-8">
          It's <span className="text-primary">better customer work.</span>
        </p>

        {/* Supporting Narrative */}
        <p className="text-lg sm:text-xl text-on-surface-variant leading-relaxed max-w-3xl">
          As DialPulse evolves, the direction remains the same: make customer operations easier to understand, easier to act on and easier to manage — without losing the context and controls that matter.
        </p>

      </div>
    </section>
  );
}
