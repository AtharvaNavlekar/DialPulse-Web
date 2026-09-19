import React from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export function SecurityFinalCTA() {
  return (
    <section className="py-20 md:py-32 bg-surface text-center relative overflow-hidden">
      <div 
        aria-hidden="true" 
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,105,92,0.06),transparent_70%)] pointer-events-none" 
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mx-auto mb-6">
          <ShieldCheck className="w-6 h-6" />
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-on-surface tracking-tight leading-tight mb-6">
          Built for customer work. <br />
          <span className="text-primary">Built with boundaries.</span>
        </h2>

        <p className="text-base sm:text-lg text-on-surface-variant leading-relaxed max-w-2xl mx-auto mb-10">
          See how DialPulse brings customer operations, communication, visibility, compliance and AI-assisted workflows together.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button href="/product" size="lg">
            Explore Product
            <ArrowRight className="w-4 h-4 ml-1.5" />
          </Button>
          <Button href="/contact" variant="outlined" size="lg">
            Talk to DialPulse
          </Button>
        </div>
      </div>
    </section>
  );
}
