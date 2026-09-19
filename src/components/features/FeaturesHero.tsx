/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/Button';
import { ArrowRight, Phone, MessageSquare, Users, CheckCircle2, FileText, BarChart3, Clock } from 'lucide-react';

export function FeaturesHero() {
  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden bg-gradient-to-b from-white via-[#F8FAF8] to-white border-b border-slate-200/80">
      {/* Subtle ambient blur accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(0,105,92,0.05),transparent_70%)] pointer-events-none translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-[radial-gradient(ellipse_at_center,rgba(31,58,95,0.04),transparent_70%)] pointer-events-none -translate-x-1/3 translate-y-1/3" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00695C]/10 border border-[#00695C]/20 text-[#00695C] text-xs font-mono font-semibold tracking-wider uppercase mb-6">
            <span>FEATURES</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-slate-900 tracking-tight leading-[1.08] mb-6">
            Everything around the <br className="hidden sm:inline" />
            <span className="text-[#00695C]">customer workflow.</span>
          </h1>

          {/* Supporting Copy */}
          <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto mb-10 font-normal">
            DialPulse brings leads, conversations, follow-up, team operations, reporting, safeguards and AI-assisted work into a connected customer workflow.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              href="/product"
              size="lg"
              className="w-full sm:w-auto h-13 px-8 text-base bg-[#00695C] hover:bg-[#004D40] text-white shadow-sm"
            >
              <span>Explore Product</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button
              variant="outlined"
              href="/solutions"
              size="lg"
              className="w-full sm:w-auto h-13 px-8 text-base border-slate-300 hover:border-slate-400 bg-white text-slate-700"
            >
              See Solutions
            </Button>
          </div>
        </div>

        {/* Editorial Product Schematic Visual */}
        <div className="relative max-w-5xl mx-auto">
          {/* Decorative backdrop frame */}
          <div className="rounded-[28px] p-2 sm:p-4 bg-gradient-to-b from-slate-100/90 to-slate-200/40 border border-slate-200/90 shadow-xl shadow-slate-900/5">
            <div className="rounded-[24px] bg-[#F8FAF8] border border-slate-200/80 p-5 sm:p-8 overflow-hidden relative">
              {/* Window controls header bar */}
              <div className="flex items-center justify-between border-b border-slate-200/80 pb-4 mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-slate-300" />
                  <div className="w-3 h-3 rounded-full bg-slate-300" />
                  <div className="w-3 h-3 rounded-full bg-slate-300" />
                  <span className="ml-3 text-xs font-mono text-slate-400 uppercase tracking-wider">
                    DIALPULSE CONNECTED WORKSPACE
                  </span>
                </div>
                <div className="inline-flex items-center gap-2 text-xs font-mono text-[#00695C] bg-[#00695C]/10 px-2.5 py-1 rounded-md">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00695C] animate-pulse" />
                  <span>TENANT SCOPE ACTIVE</span>
                </div>
              </div>

              {/* Connected Asymmetric Fragments Grid */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 lg:gap-6 relative">
                {/* Fragment 1: LEAD (Span 4) */}
                <div className="md:col-span-4 rounded-2xl bg-white p-5 border border-slate-200/80 shadow-xs flex flex-col justify-between hover:border-[#00695C]/40 transition-colors">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400">01 / LEAD RECORD</span>
                      <span className="px-2 py-0.5 rounded text-[11px] font-medium bg-emerald-50 text-emerald-700 border border-emerald-200">
                        In Pipeline
                      </span>
                    </div>
                    <div className="text-base font-bold text-slate-900 mb-1">Aarav Sharma</div>
                    <div className="text-xs text-slate-500 mb-3">Apex FinTech Pvt Ltd • Enterprise Tier</div>
                    <div className="space-y-1.5 text-xs text-slate-600 bg-slate-50 rounded-xl p-3 border border-slate-100">
                      <div className="flex justify-between">
                        <span className="text-slate-400">Stage:</span>
                        <span className="font-medium text-slate-700">Proposal Review</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Owner:</span>
                        <span className="font-medium text-[#00695C]">Priya Nair</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Channel Pref:</span>
                        <span className="font-medium text-slate-700">WhatsApp / Voice</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> Updated 12m ago</span>
                    <span className="font-mono text-[#00695C]">#LD-8402</span>
                  </div>
                </div>

                {/* Fragment 2: CALL & OUTCOME (Span 4) */}
                <div className="md:col-span-4 rounded-2xl bg-white p-5 border border-slate-200/80 shadow-xs flex flex-col justify-between hover:border-[#00695C]/40 transition-colors">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400">02 / CALL ACTIVITY</span>
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-medium bg-[#00695C]/10 text-[#00695C]">
                        <Phone className="w-3 h-3" /> Connected
                      </span>
                    </div>
                    <div className="flex items-baseline gap-2 mb-1">
                      <span className="text-xl font-bold font-mono text-slate-900">04:18</span>
                      <span className="text-xs text-slate-500">Outbound voice session</span>
                    </div>
                    <div className="text-xs text-slate-500 mb-3">Today • 10:42 AM IST</div>
                    <div className="text-xs text-slate-700 bg-slate-50 rounded-xl p-3 border border-slate-100">
                      <p className="font-medium text-slate-900 mb-1">Logged Outcome: Demo Scheduled</p>
                      <p className="text-slate-500 text-[11px] leading-relaxed">
                        "Reviewed custom pipeline requirements. Follow-up summary dispatch queued on WhatsApp."
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                    <span>Telecaller: Priya N.</span>
                    <span className="font-mono text-emerald-600">Verified</span>
                  </div>
                </div>

                {/* Fragment 3: MESSAGING (Span 4) */}
                <div className="md:col-span-4 rounded-2xl bg-white p-5 border border-slate-200/80 shadow-xs flex flex-col justify-between hover:border-[#00695C]/40 transition-colors">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400">03 / CONVERSATION</span>
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-medium bg-emerald-50 text-emerald-700">
                        <MessageSquare className="w-3 h-3" /> WhatsApp
                      </span>
                    </div>
                    <div className="text-sm font-bold text-slate-900 mb-1">Meeting Confirmation</div>
                    <div className="text-xs text-slate-500 mb-3">Delivered via registered template</div>
                    <div className="space-y-2 text-xs">
                      <div className="bg-[#00695C]/5 border border-[#00695C]/15 rounded-xl p-2.5 text-slate-700">
                        <p className="text-[11px]">"Hi Aarav, demo confirmed for Thursday 2:00 PM IST with your team."</p>
                        <div className="text-[10px] text-[#00695C] mt-1 flex items-center justify-end gap-1 font-mono">
                          <span>Delivered & Read</span>
                          <CheckCircle2 className="w-3 h-3" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                    <span className="text-slate-500">Channel: In-Scope</span>
                    <span className="font-mono text-slate-500">2 min ago</span>
                  </div>
                </div>

                {/* Fragment 4: TASK & FOLLOW-UP (Span 4) */}
                <div className="md:col-span-4 rounded-2xl bg-white p-5 border border-slate-200/80 shadow-xs flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400">04 / NEXT ACTION</span>
                      <span className="px-2 py-0.5 rounded text-[11px] font-medium bg-amber-50 text-amber-700 border border-amber-200">
                        Scheduled
                      </span>
                    </div>
                    <div className="text-sm font-bold text-slate-900 mb-1">Send Technical Architecture Spec</div>
                    <div className="text-xs text-slate-500 mb-2">Due tomorrow • 11:00 AM IST</div>
                    <div className="text-xs text-slate-600 bg-slate-50 rounded-lg p-2 flex items-center justify-between">
                      <span>Assigned to:</span>
                      <span className="font-medium text-slate-800">Priya Nair (Sales)</span>
                    </div>
                  </div>
                  <div className="text-[11px] text-slate-400 mt-3 pt-2 border-t border-slate-100 flex items-center gap-1.5">
                    <FileText className="w-3 h-3 text-[#00695C]" /> Auto-linked to Lead record #LD-8402
                  </div>
                </div>

                {/* Fragment 5: TEAM & ROLE (Span 4) */}
                <div className="md:col-span-4 rounded-2xl bg-white p-5 border border-slate-200/80 shadow-xs flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400">05 / TEAM SCOPE</span>
                      <span className="px-2 py-0.5 rounded text-[11px] font-medium bg-sky-50 text-sky-700 border border-sky-200">
                        Active Roster
                      </span>
                    </div>
                    <div className="text-sm font-bold text-slate-900 mb-1">Enterprise Sales Group</div>
                    <div className="text-xs text-slate-500 mb-2">Team Lead: Vikram Sen (Lead Scope)</div>
                    <div className="text-xs text-slate-600 bg-slate-50 rounded-lg p-2 space-y-1">
                      <div className="flex justify-between">
                        <span>Role:</span>
                        <span className="font-mono text-[#00695C]">TELECALLER</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Visibility:</span>
                        <span className="text-slate-700 font-medium">Assigned Leads Only</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-[11px] text-slate-400 mt-3 pt-2 border-t border-slate-100 flex items-center gap-1.5">
                    <Users className="w-3 h-3 text-[#00695C]" /> Role-based boundary enforced
                  </div>
                </div>

                {/* Fragment 6: REPORTING (Span 4) */}
                <div className="md:col-span-4 rounded-2xl bg-[#191C1B] text-white p-5 border border-slate-800 shadow-xs flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-teal-400">06 / VISIBILITY</span>
                      <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-teal-900/60 text-[#80D5C4] border border-teal-500/30">
                        TELEMETRY
                      </span>
                    </div>
                    <div className="text-sm font-bold text-slate-100 mb-1">Team Conversion Velocity</div>
                    <div className="text-xs text-slate-400 mb-3">Live aggregation across active queues</div>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div className="bg-white/5 rounded-lg p-2">
                        <span className="text-slate-400 block text-[10px]">Pacing</span>
                        <span className="font-mono text-base font-bold text-[#80D5C4]">94.2%</span>
                      </div>
                      <div className="bg-white/5 rounded-lg p-2">
                        <span className="text-slate-400 block text-[10px]">Follow-up SLA</span>
                        <span className="font-mono text-base font-bold text-white">&lt; 15 min</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-[11px] text-slate-400 mt-3 pt-2 border-t border-white/10 flex items-center justify-between">
                    <span className="flex items-center gap-1"><BarChart3 className="w-3 h-3 text-[#80D5C4]" /> Audited Queue</span>
                    <span className="font-mono text-slate-400">Async</span>
                  </div>
                </div>
              </div>

              {/* Editorial schematic relationship footnote */}
              <div className="mt-6 pt-4 border-t border-slate-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-slate-500 font-normal">
                <p>
                  A conceptual representation of how customer touchpoints connect inside a single tenant scope.
                </p>
                <Link to="/product" className="text-[#00695C] hover:text-[#004D40] font-medium inline-flex items-center gap-1 group">
                  See how the engine works <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
