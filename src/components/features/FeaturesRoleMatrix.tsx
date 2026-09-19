/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { ROLE_FEATURE_VIEWS } from '@/data/featuresData';

export function FeaturesRoleMatrix() {
  return (
    <section className="py-20 md:py-28 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00695C]/10 border border-[#00695C]/20 text-[#00695C] text-xs font-mono font-semibold tracking-wider uppercase mb-5">
            <span>OPERATIONAL LENSES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-slate-900 tracking-tight leading-[1.12] mb-6">
            Features mapped to how teams work.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Every team member accesses DialPulse through their specific operational scope. These lenses illustrate primary daily tools, not rigid functional boundaries.
          </p>
        </div>

        {/* 4 Role Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ROLE_FEATURE_VIEWS.map((roleView) => (
            <div
              key={roleView.role}
              className="rounded-[24px] bg-[#F8FAF8] border border-slate-200/80 p-6 flex flex-col justify-between hover:border-[#00695C]/40 hover:bg-white transition-all shadow-xs"
            >
              <div>
                <div className="mb-4">
                  <span className="text-xs font-mono font-bold text-[#00695C] uppercase tracking-wider block mb-1">
                    ROLE PERSPECTIVE
                  </span>
                  <h3 className="text-xl font-display font-bold text-slate-900">{roleView.role}</h3>
                </div>

                <p className="text-xs text-slate-500 leading-relaxed mb-6 font-normal">
                  {roleView.tagline}
                </p>

                <div className="space-y-3 pt-4 border-t border-slate-200/70">
                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                    MOST RELEVANT CAPABILITIES
                  </span>
                  {roleView.primaryFeatures.map((feat) => (
                    <Link
                      key={feat.name}
                      to={feat.route}
                      className="block p-3 rounded-xl bg-white border border-slate-200/80 hover:border-[#00695C]/40 transition-colors group shadow-2xs"
                    >
                      <div className="flex items-center justify-between mb-0.5">
                        <span className="text-xs font-bold text-slate-900 group-hover:text-[#00695C] transition-colors">
                          {feat.name}
                        </span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#00695C] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </div>
                      <span className="text-[11px] text-slate-500 leading-tight block">
                        {feat.context}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-200/60 text-[10px] font-mono text-slate-400 flex items-center justify-between">
                <span>PERMISSION SCOPE</span>
                <span className="text-emerald-700">Enforced</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center text-xs text-slate-400 font-normal">
          * Roles can be customized and extended within administrative tenant settings.
        </div>
      </div>
    </section>
  );
}
