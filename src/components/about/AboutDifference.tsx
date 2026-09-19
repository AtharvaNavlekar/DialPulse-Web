import React from 'react';
import { SlidersHorizontal } from 'lucide-react';

const STATEMENTS = [
  {
    num: '01',
    heading: 'LESS FRAGMENTATION',
    summary: 'Bring related operational work closer together.',
    narrative: 'Instead of forcing agents to toggle between phone dialers, messaging portals, and separate ticket systems, DialPulse brings the customer timeline into one cohesive operational space.',
  },
  {
    num: '02',
    heading: 'MORE CONTEXT',
    summary: 'Keep the customer story connected across interactions.',
    narrative: 'Every note, call outcome, messaging thread, and status change stays permanently bound to the lead profile so anyone stepping in understands the complete customer history.',
  },
  {
    num: '03',
    heading: 'BUILT-IN GUARDRAILS',
    summary: 'Put operational and communication safeguards into relevant workflows.',
    narrative: 'Compliance is not an afterthought handled in an external spreadsheet. Opt-outs, frequency thresholds, and quiet-hour rules are enforced directly at the moment of outreach.',
  },
  {
    num: '04',
    heading: 'HUMAN + AI',
    summary: 'Use AI to assist people while keeping permissions and human review in the picture.',
    narrative: 'We use machine intelligence to transcribe, summarize, and categorize. But humans remain the operators, and strict tenant boundaries ensure data is never exposed or trained on.',
  },
];

export function AboutDifference() {
  return (
    <section className="py-20 md:py-32 bg-surface border-b border-outline-variant/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono font-semibold tracking-wider uppercase mb-4">
            <SlidersHorizontal className="w-3.5 h-3.5" />
            <span>PRODUCT POSITIONING</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-on-surface tracking-tight">
            How we approach the product
          </h2>
          <p className="mt-4 text-base sm:text-lg text-on-surface-variant">
            Four commitments that define our standard for customer operations software.
          </p>
        </div>

        {/* 4 Large Editorial Statements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {STATEMENTS.map((item) => (
            <div 
              key={item.heading}
              className="p-8 sm:p-10 rounded-3xl bg-surface-container-low border border-outline-variant/80 flex flex-col justify-between group hover:border-primary/40 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold tracking-widest text-primary uppercase">
                    {item.heading}
                  </span>
                  <span className="text-xl font-mono font-bold text-outline group-hover:text-primary transition-colors">
                    {item.num}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-display font-bold text-on-surface mb-3 leading-snug">
                  {item.summary}
                </h3>

                <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed">
                  {item.narrative}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-outline-variant/40 text-[11px] font-mono text-outline uppercase tracking-wider">
                CORE_PRODUCT_TENET
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
