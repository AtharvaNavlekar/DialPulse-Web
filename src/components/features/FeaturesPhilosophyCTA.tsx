/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/Button';
import { ArrowRight, MessageSquare, CheckCircle2 } from 'lucide-react';

export function FeaturesPhilosophyCTA() {
  return (
    <>
      {/* 19. FINAL PRODUCT STATEMENT */}
      <section className="py-24 md:py-32 bg-[#F8FAF8] border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-mono font-semibold tracking-wider text-[#00695C] uppercase block mb-4">
            OPERATIONAL PHILOSOPHY
          </span>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-bold text-slate-900 tracking-tight leading-[1.12] mb-6">
            Features are only useful <br className="hidden sm:inline" />
            when they move the work forward.
          </h2>

          <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
            DialPulse is built around the workflow behind the customer record — not just the record itself.
          </p>

          <Button
            href="/product"
            size="lg"
            className="h-13 px-8 text-base bg-[#00695C] hover:bg-[#004D40] text-white shadow-sm"
          >
            <span>Explore the Product</span>
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </section>

      {/* 20. FULL-WIDTH CONTACT CTA */}
      <section className="py-20 md:py-28 bg-[#191C1B] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(0,105,92,0.2),transparent_70%)] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(31,58,95,0.25),transparent_70%)] pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight leading-[1.12] mb-6">
            Want to see how it fits <br className="hidden sm:inline" />
            your workflow?
          </h2>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
            Explore the platform or start a conversation about the way your team works.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              href="/product"
              size="lg"
              className="w-full sm:w-auto h-13 px-8 text-base bg-[#00695C] hover:bg-[#00796B] text-white shadow-sm"
            >
              <span>Explore Product</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button
              variant="outlined"
              href="/contact"
              size="lg"
              className="w-full sm:w-auto h-13 px-8 text-base border-white/20 hover:border-white/40 bg-white/5 text-white hover:bg-white/10"
            >
              Talk to DialPulse
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
