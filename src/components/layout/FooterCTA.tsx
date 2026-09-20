/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Calendar } from 'lucide-react';
import { footerNavigation } from '@/config/navigation';

export function FooterCTA() {
  const { ctaPanel } = footerNavigation;

  return (
    <div className="w-full bg-[#004D40] text-white relative overflow-hidden py-20 md:py-24 border-b border-teal-900/60">
      {/* Background Architectural Geometry */}
      <div className="absolute inset-0 pointer-events-none opacity-25">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#80D5C4]/20 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-[#00695C] blur-2xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80D5C4_1px,transparent_1px),linear-gradient(to_bottom,#80D5C4_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-10" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-[#80D5C4] text-xs font-mono font-semibold uppercase tracking-wider backdrop-blur-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>OPERATIONAL ARCHITECTURE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-extrabold text-white tracking-tight leading-[1.1]">
            {ctaPanel.headline}
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-teal-100/90 leading-relaxed max-w-2xl mx-auto">
            {ctaPanel.supportingText}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              to={ctaPanel.primaryButton.href}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 h-12 px-7 rounded-xl bg-white text-[#004D40] font-bold text-sm hover:bg-teal-50 transition-all shadow-sm active:scale-[0.98]"
            >
              <span>{ctaPanel.primaryButton.label}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              to={ctaPanel.secondaryButton.href}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 h-12 px-7 rounded-xl bg-transparent border border-[#80D5C4]/50 text-white font-semibold text-sm hover:bg-white/10 transition-all active:scale-[0.98]"
            >
              <Calendar className="w-4 h-4 text-[#80D5C4]" />
              <span>{ctaPanel.secondaryButton.label}</span>
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}
