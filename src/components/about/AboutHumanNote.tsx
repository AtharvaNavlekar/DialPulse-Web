import React from 'react';
import { PenTool } from 'lucide-react';

export function AboutHumanNote() {
  return (
    <section className="py-16 md:py-24 bg-surface border-b border-outline-variant/60">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="p-8 sm:p-12 rounded-3xl bg-surface-container-lowest border border-outline-variant/90 relative shadow-xs">
          
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-primary uppercase mb-6">
            <PenTool className="w-3.5 h-3.5" />
            <span>A NOTE ON OUR PROCESS</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-display font-bold text-on-surface mb-6">
            We're still building.
          </h2>

          <div className="space-y-4 text-base text-on-surface-variant leading-relaxed font-sans">
            <p>
              DialPulse is an evolving product. Some parts of the platform are mature, some are being refined, and some decisions are still being shaped by the problems customers bring to us.
            </p>
            <p className="text-on-surface font-medium">
              That is intentional. The product should grow from real operational needs, not from a checklist of features.
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-outline-variant/50 flex items-center justify-between text-xs font-mono text-outline">
            <span>DIALPULSE_PRODUCT_PHILOSOPHY</span>
            <span className="text-primary font-semibold">CRAFT & PRECISION</span>
          </div>

        </div>

      </div>
    </section>
  );
}
