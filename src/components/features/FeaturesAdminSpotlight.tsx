/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Link } from 'react-router-dom';
import { ArrowRight, Sliders, Users, Shield, Key, History, Settings, FileSpreadsheet } from 'lucide-react';

export function FeaturesAdminSpotlight() {
  return (
    <section className="py-20 md:py-28 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Stylized Admin Console Visual */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <div className="rounded-[28px] bg-[#F8FAF8] border border-slate-200/90 p-6 sm:p-8 shadow-sm">
              {/* Admin Bar */}
              <div className="flex items-center justify-between pb-5 border-b border-slate-200">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#00695C] text-white flex items-center justify-center">
                    <Sliders className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase text-slate-400">TENANT GOVERNANCE</span>
                    <h3 className="text-base font-bold text-slate-900">Administration Console</h3>
                  </div>
                </div>
                <span className="text-xs font-mono px-2.5 py-1 rounded bg-slate-200 text-slate-800">
                  TENANT #DP-CORP-91
                </span>
              </div>

              {/* Admin Controls Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 py-5 border-b border-slate-200 text-xs">
                <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
                  <div className="flex items-center gap-2 font-bold text-slate-900 mb-1">
                    <Users className="w-4 h-4 text-[#00695C]" /> User Provisioning & Rosters
                  </div>
                  <p className="text-slate-500 text-[11px] leading-relaxed">
                    Invite telecallers, assign teams, set active status, and configure manager oversight.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
                  <div className="flex items-center gap-2 font-bold text-slate-900 mb-1">
                    <Shield className="w-4 h-4 text-[#00695C]" /> RBAC & Scope Definition
                  </div>
                  <p className="text-slate-500 text-[11px] leading-relaxed">
                    Define operational roles and restrict lead visibility strictly to assigned scopes.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
                  <div className="flex items-center gap-2 font-bold text-slate-900 mb-1">
                    <Settings className="w-4 h-4 text-[#00695C]" /> Communication Policies
                  </div>
                  <p className="text-slate-500 text-[11px] leading-relaxed">
                    Set tenant quiet hours, contact frequency caps, and channel restriction rules.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
                  <div className="flex items-center gap-2 font-bold text-slate-900 mb-1">
                    <History className="w-4 h-4 text-[#00695C]" /> Immutable Audit Trails
                  </div>
                  <p className="text-slate-500 text-[11px] leading-relaxed">
                    Track user logins, role modifications, export requests, and policy changes.
                  </p>
                </div>
              </div>

              {/* Sample Audit Activity Stream */}
              <div className="pt-5 space-y-2">
                <div className="flex items-center justify-between text-xs font-mono text-slate-400 uppercase">
                  <span>RECENT GOVERNANCE EVENTS</span>
                  <span>IMMUTABLE LOG</span>
                </div>
                <div className="p-3 bg-white rounded-xl border border-slate-200 text-xs flex items-center justify-between text-slate-600">
                  <span>Policy Update: Daily contact cap set to 3 attempts/lead</span>
                  <span className="text-[10px] font-mono text-slate-400">12m ago • Admin User</span>
                </div>
                <div className="p-3 bg-white rounded-xl border border-slate-200 text-xs flex items-center justify-between text-slate-600">
                  <span>User Role Assigned: Priya Nair → Telecaller (Enterprise West)</span>
                  <span className="text-[10px] font-mono text-slate-400">1h ago • Manager</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Copy & Details */}
          <div className="lg:col-span-5 order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00695C]/10 border border-[#00695C]/20 text-[#00695C] text-xs font-mono font-semibold tracking-wider uppercase mb-5">
              <span>10 / ADMINISTRATION & GOVERNANCE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-slate-900 tracking-tight leading-[1.12] mb-6">
              Control the environment around the work.
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal mb-8">
              Administration brings together the controls needed to manage users, teams, configuration and operational governance.
            </p>

            <div className="space-y-4 mb-10 text-sm text-slate-600">
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/70">
                <strong className="text-slate-900 block font-semibold mb-1">Centralized User Lifecycle</strong>
                <span>Provision seats, deactivate former team members instantly, and reallocate active queues safely.</span>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/70">
                <strong className="text-slate-900 block font-semibold mb-1">Global Safeguard Parameters</strong>
                <span>Set quiet-hour time windows and frequency limits once, automatically enforced across all users.</span>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/70">
                <strong className="text-slate-900 block font-semibold mb-1">Audit Trail Transparency</strong>
                <span>Inspect changes to permissions, sensitive customer exports, and policy overrides.</span>
              </div>
            </div>

            <Link
              to="/features/administration"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#00695C] hover:bg-[#004D40] text-white text-sm font-semibold tracking-normal transition-all shadow-xs group"
            >
              <span>Explore Administration</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
