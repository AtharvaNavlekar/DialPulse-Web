/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, KeyRound, Layers, Lock, Cpu, History } from 'lucide-react';

const BOUNDARY_LAYERS = [
  {
    step: '01',
    name: 'AUTHENTICATION',
    desc: 'Identity verification & session tokens',
    icon: KeyRound,
  },
  {
    step: '02',
    name: 'TENANT SCOPE',
    desc: 'Database row-level data isolation',
    icon: Layers,
  },
  {
    step: '03',
    name: 'AUTHORIZATION',
    desc: 'Role-based access & queue permissions',
    icon: Lock,
  },
  {
    step: '04',
    name: 'FEATURE EXECUTION',
    desc: 'Voice, messaging, lead records, or AI',
    icon: Cpu,
  },
  {
    step: '05',
    name: 'AUDIT LOGGING',
    desc: 'Persistent chronological security trace',
    icon: History,
  },
];

export function FeaturesSecurityFoundation() {
  return (
    <section className="py-20 md:py-28 bg-[#F8FAF8] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00695C]/10 border border-[#00695C]/20 text-[#00695C] text-xs font-mono font-semibold tracking-wider uppercase mb-5">
            <span>FOUNDATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-slate-900 tracking-tight leading-[1.12] mb-6">
            Behind every feature: <br />
            a boundary.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Lead access, exports, communication, administration and AI-assisted workflows operate within authorization and tenant-scoping controls.
          </p>
        </div>

        {/* Foundation Layer Visual Flow */}
        <div className="max-w-5xl mx-auto bg-white rounded-[28px] border border-slate-200/90 p-6 sm:p-10 shadow-xs mb-10">
          <div className="flex items-center justify-between pb-6 border-b border-slate-100 mb-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#00695C]/10 text-[#00695C] flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-mono uppercase text-slate-400">ARCHITECTURAL MODEL</span>
                <h3 className="text-base font-bold text-slate-900">End-to-End Boundary Enforcement</h3>
              </div>
            </div>
            <span className="text-xs font-mono text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200">
              ZERO LEAKAGE POLICY
            </span>
          </div>

          {/* Sequential 5-Layer Stack */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
            {BOUNDARY_LAYERS.map((layer, index) => {
              const Icon = layer.icon;
              return (
                <div
                  key={layer.name}
                  className="p-5 rounded-2xl bg-[#F8FAF8] border border-slate-200/80 flex flex-col justify-between hover:border-[#00695C]/50 hover:bg-white transition-all shadow-2xs group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-mono font-bold text-slate-400 group-hover:text-[#00695C] transition-colors">
                        {layer.step}
                      </span>
                      <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-700 group-hover:text-[#00695C] transition-colors">
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>

                    <div className="text-xs font-mono font-bold text-slate-900 tracking-wide mb-1">
                      {layer.name}
                    </div>
                    <p className="text-[11px] text-slate-500 leading-relaxed font-normal">
                      {layer.desc}
                    </p>
                  </div>

                  <div className="mt-4 pt-2 border-t border-slate-200/60 text-[10px] font-mono text-slate-400 flex items-center justify-between">
                    <span>LAYER {layer.step}</span>
                    <span className="text-emerald-600">Enforced</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="text-center">
          <Link
            to="/security"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#00695C] hover:bg-[#004D40] text-white text-sm font-semibold tracking-normal transition-all shadow-xs group"
          >
            <span>Explore Security</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
