import React from 'react';
import { Layers } from 'lucide-react';

export function AboutArchitectureWhy() {
  return (
    <section className="py-20 md:py-28 bg-surface-container-low border-b border-outline-variant/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono font-semibold tracking-wider uppercase mb-4">
            <Layers className="w-3.5 h-3.5" />
            <span>ARCHITECTURE INTENT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-on-surface tracking-tight">
            Why the platform is built this way
          </h2>
          <p className="mt-4 text-base sm:text-lg text-on-surface-variant">
            Three deliberate architectural commitments shape the design of every module in DialPulse.
          </p>
        </div>

        {/* Asymmetric Section Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* 01: Large Highlight Column */}
          <div className="lg:col-span-6 bg-surface-container-lowest border border-outline-variant/80 rounded-3xl p-8 sm:p-10 flex flex-col justify-between shadow-xs">
            <div>
              <span className="text-5xl sm:text-6xl font-mono font-bold text-primary/30 block mb-6">
                01
              </span>
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-on-surface mb-4 leading-snug">
                Keep customer context close.
              </h3>
              <p className="text-base text-on-surface-variant leading-relaxed">
                Lead information, interactions, notes and activity become more useful when the people working with customers do not have to reconstruct the story from multiple systems.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-outline-variant/40 text-xs font-mono text-primary font-semibold">
              // NO RECONSTRUCTING TIMELINES FROM MEMORY
            </div>
          </div>

          {/* 02 & 03: Stacked Right Column */}
          <div className="lg:col-span-6 space-y-8">
            
            {/* 02 */}
            <div className="bg-surface-container-lowest border border-outline-variant/80 rounded-3xl p-8 shadow-xs">
              <span className="text-4xl font-mono font-bold text-[#1F3A5F]/40 block mb-4">
                02
              </span>
              <h3 className="text-xl sm:text-2xl font-display font-bold text-on-surface mb-3 leading-snug">
                Make access intentional.
              </h3>
              <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed">
                DialPulse uses role-based access and tenant-scoped controls so different users can work with the visibility and responsibility appropriate to their role.
              </p>
              <div className="mt-6 pt-4 border-t border-outline-variant/40 text-xs font-mono text-[#1F3A5F] font-semibold">
                // SCOPED TO SELF, TEAM, OR ORGANIZATION
              </div>
            </div>

            {/* 03 */}
            <div className="bg-surface-container-lowest border border-outline-variant/80 rounded-3xl p-8 shadow-xs">
              <span className="text-4xl font-mono font-bold text-primary/40 block mb-4">
                03
              </span>
              <h3 className="text-xl sm:text-2xl font-display font-bold text-on-surface mb-3 leading-snug">
                Put safeguards where actions happen.
              </h3>
              <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed">
                Communication controls, export authorization and auditability are built into relevant workflows rather than being treated as separate concepts.
              </p>
              <div className="mt-6 pt-4 border-t border-outline-variant/40 text-xs font-mono text-primary font-semibold">
                // TECHNICAL COMPLIANCE AT POINT OF OUTREACH
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
