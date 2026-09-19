import React from 'react';
import { Bookmark } from 'lucide-react';

const BELIEFS = [
  {
    num: '01',
    label: 'CONTEXT OVER CHAOS',
    title: 'Customer information becomes useful when the people doing the work can see the context around it.',
    elaboration: 'A phone number or email address is just data. What makes it actionable is knowing the history: what was said on the last call, what message was sent yesterday, which teammate owns the relationship, and what the customer expects next.',
  },
  {
    num: '02',
    label: 'WORKFLOW OVER TOOL SPRAWL',
    title: 'Useful software should connect the steps of a workflow instead of creating more places for work to disappear.',
    elaboration: 'Adding another standalone tool often means adding another place where customer context gets stranded. We prioritize cohesion over feature sprawl so team members spend their day doing the work rather than copying data between tabs.',
  },
  {
    num: '03',
    label: 'VISIBILITY WITHOUT OVEREXPOSURE',
    title: 'Different people need different levels of access. Operational visibility should exist alongside deliberate access boundaries.',
    elaboration: 'A telecaller needs fast access to their assigned pipeline. A supervisor needs aggregate team pacing. An administrator needs configuration control. Visibility is not all-or-nothing; it is structured, intentional, and scoped.',
  },
  {
    num: '04',
    label: 'COMPLIANCE SHOULD LIVE IN THE WORKFLOW',
    title: 'Important communication safeguards should be part of the system where the work happens, not something teams remember only afterwards.',
    elaboration: 'If opt-out lists, quiet hours, and frequency fatigue limits live in a disconnected spreadsheet or handbook, mistakes are inevitable. Technical safeguards must evaluate outreach at the point of action.',
  },
  {
    num: '05',
    label: 'AI SHOULD ASSIST THE WORK',
    title: 'AI should help people process information and move faster without removing human review or bypassing the controls around the underlying data.',
    elaboration: 'Transcription, summaries, and sentiment classification should lighten cognitive load. But human operators must remain accountable, and customer data boundaries must remain strictly protected throughout the process.',
  },
  {
    num: '06',
    label: 'DETAILS MATTER',
    title: 'Small decisions around permissions, exports, communication states, auditability and data handling shape whether software can actually be trusted.',
    elaboration: 'Reliability is built from the ground up: audited data exports, clear opt-out states, predictable tenant boundaries, and precise background jobs. The details determine whether an enterprise can depend on the platform every day.',
  },
];

export function AboutBeliefs() {
  return (
    <section className="py-20 md:py-32 bg-surface-container-low border-b border-outline-variant/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono font-semibold tracking-wider uppercase mb-4">
            <Bookmark className="w-3.5 h-3.5" />
            <span>FOUNDATIONAL PRINCIPLES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-on-surface tracking-tight">
            What we believe
          </h2>
          <p className="mt-4 text-base sm:text-lg text-on-surface-variant">
            These six convictions guide how we design workflows, build features, and establish technical boundaries across DialPulse.
          </p>
        </div>

        {/* Vertical Editorial Index - Clean non-grid list */}
        <div className="divide-y divide-outline-variant/70">
          {BELIEFS.map((belief) => (
            <div 
              key={belief.num}
              className="py-10 sm:py-12 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-baseline group"
            >
              {/* Left Column: Number and Label */}
              <div className="lg:col-span-4 flex items-center gap-4">
                <span className="text-3xl sm:text-4xl font-mono font-bold text-primary/40 group-hover:text-primary transition-colors">
                  {belief.num}
                </span>
                <span className="text-xs sm:text-sm font-mono font-bold uppercase tracking-widest text-primary">
                  {belief.label}
                </span>
              </div>

              {/* Right Column: Statement & Elaboration */}
              <div className="lg:col-span-8 space-y-3">
                <h3 className="text-xl sm:text-2xl font-display font-bold text-on-surface leading-snug">
                  "{belief.title}"
                </h3>
                <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed">
                  {belief.elaboration}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
