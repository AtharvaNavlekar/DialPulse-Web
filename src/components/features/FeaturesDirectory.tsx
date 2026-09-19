/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Link } from 'react-router-dom';
import { ArrowUpRight, Users, Phone, MessageSquare, LifeBuoy, ShieldCheck, BarChart3, ArrowUpDown, Scale, Sparkles, Sliders } from 'lucide-react';
import { FEATURE_DEFINITIONS } from '@/data/featuresData';

const iconMap: Record<string, any> = {
  Users,
  Phone,
  MessageSquare,
  LifeBuoy,
  ShieldCheck,
  BarChart3,
  ArrowUpDown,
  Scale,
  Sparkles,
  Sliders,
};

export function FeaturesDirectory() {
  return (
    <section id="feature-directory" className="py-20 md:py-28 bg-[#F8FAF8] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs font-mono font-semibold tracking-wider text-[#00695C] uppercase block mb-3">
              FEATURE INDEX
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-slate-900 tracking-tight">
              Explore DialPulse.
            </h2>
          </div>
          <p className="text-slate-600 text-base max-w-md leading-relaxed font-normal">
            Discover the ten core capability areas supporting connected lead management, communication, safeguards, and visibility.
          </p>
        </div>

        {/* Feature Index Grid: Asymmetric, clean, highly legible */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5 sm:gap-6">
          {FEATURE_DEFINITIONS.map((feat, index) => {
            const Icon = iconMap[feat.icon] || Sparkles;
            // Asymmetric grid spans for editorial cadence: items 0, 1 span 6; items 2, 3, 4 span 4, etc.
            const spanClass =
              index < 2
                ? 'lg:col-span-6'
                : index >= 2 && index < 5
                ? 'lg:col-span-4'
                : index >= 5 && index < 7
                ? 'lg:col-span-6'
                : 'lg:col-span-4';

            return (
              <Link
                key={feat.slug}
                to={feat.route}
                className={`${spanClass} group rounded-[24px] bg-white border border-slate-200/90 p-6 sm:p-8 shadow-xs hover:shadow-md hover:border-[#00695C]/40 transition-all duration-300 flex flex-col justify-between focus:outline-none focus:ring-2 focus:ring-[#00695C] focus:ring-offset-2`}
              >
                <div>
                  <div className="flex items-start justify-between mb-6">
                    <span className="text-xs font-mono font-bold text-slate-400 group-hover:text-[#00695C] transition-colors">
                      {feat.number}
                    </span>
                    <div className="w-11 h-11 rounded-2xl bg-slate-100 group-hover:bg-[#00695C]/10 border border-slate-200/60 group-hover:border-[#00695C]/20 flex items-center justify-center text-slate-700 group-hover:text-[#00695C] transition-colors">
                      <Icon className="w-5 h-5" strokeWidth={1.75} />
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-display font-bold text-slate-900 tracking-tight mb-3 group-hover:text-[#00695C] transition-colors">
                    {feat.name}
                  </h3>

                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal mb-8">
                    {feat.shortDescription}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-[#00695C]">
                  <span className="tracking-wide uppercase font-mono text-[11px]">Explore capability</span>
                  <span className="inline-flex items-center gap-1 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-200">
                    Explore <ArrowUpRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
