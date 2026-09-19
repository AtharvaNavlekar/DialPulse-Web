import React from 'react';
import { Button } from '@/components/ui/Button';
import { ArrowRight, MessageSquare } from 'lucide-react';

export const ResourcesCTA: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-[#00695C] text-white relative overflow-hidden">
      {/* Background radial accent */}
      <div 
        className="absolute inset-0 bg-[radial-gradient(#80D5C4_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-900/60 border border-teal-500/40 text-[#80D5C4] mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-[#80D5C4]" />
          <span className="text-xs font-mono uppercase tracking-widest font-semibold">
            PLATFORM DISCOVERY
          </span>
        </div>

        {/* Headline */}
        <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08] mb-6 max-w-3xl mx-auto">
          Have a problem worth <br />
          <span className="text-[#80D5C4]">turning into a workflow?</span>
        </h2>

        {/* Supporting Copy */}
        <p className="text-lg sm:text-xl text-teal-100/90 leading-relaxed max-w-2xl mx-auto mb-10">
          Explore DialPulse and see how the platform brings customer operations together.
        </p>

        {/* Dual CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            id="resources-final-explore-btn"
            variant="filled"
            size="lg"
            href="/product"
            className="w-full sm:w-auto bg-white text-[#00695C] hover:bg-teal-50 font-bold shadow-md cursor-pointer"
          >
            <span>Explore Product</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </Button>

          <Button
            id="resources-final-contact-btn"
            variant="outlined"
            size="lg"
            href="/contact"
            className="w-full sm:w-auto border-white/40 text-white hover:bg-teal-700/40 cursor-pointer"
          >
            <MessageSquare className="w-4 h-4 mr-1 text-[#80D5C4]" />
            <span>Talk to DialPulse</span>
          </Button>
        </div>

        {/* Footnote */}
        <div className="mt-12 text-xs font-mono text-teal-200/60">
          TENANT ISOLATION &bull; VOICE & MESSAGING &bull; RBAC SUPERVISION
        </div>

      </div>
    </section>
  );
};
