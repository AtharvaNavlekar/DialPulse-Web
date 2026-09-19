/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Link } from 'react-router-dom';
import { ArrowRight, Phone, PhoneForwarded, PhoneIncoming, Clock, CheckCircle2, FileText, User } from 'lucide-react';

export function FeaturesCallsSpotlight() {
  return (
    <section className="py-20 md:py-28 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Stylized Call Activity Visual */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <div className="rounded-[28px] bg-[#F8FAF8] border border-slate-200/90 p-6 sm:p-8 shadow-sm">
              {/* Call Bar Header */}
              <div className="flex items-center justify-between pb-5 border-b border-slate-200">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#00695C] text-white flex items-center justify-center">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase text-slate-400 block">CALL INTERACTION LOG</span>
                    <span className="text-base font-bold text-slate-900">Outbound Voice Session</span>
                  </div>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-medium">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Call Completed</span>
                </div>
              </div>

              {/* Call Details Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-5 border-b border-slate-200 text-xs">
                <div className="bg-white rounded-xl p-3 border border-slate-200/70">
                  <span className="text-slate-400 block text-[11px]">Duration</span>
                  <span className="text-base font-bold font-mono text-slate-900">04:18</span>
                </div>
                <div className="bg-white rounded-xl p-3 border border-slate-200/70">
                  <span className="text-slate-400 block text-[11px]">Timestamp</span>
                  <span className="text-sm font-semibold text-slate-800">10:42 AM IST</span>
                </div>
                <div className="bg-white rounded-xl p-3 border border-slate-200/70">
                  <span className="text-slate-400 block text-[11px]">Outcome</span>
                  <span className="text-sm font-semibold text-[#00695C]">Follow-up Needed</span>
                </div>
                <div className="bg-white rounded-xl p-3 border border-slate-200/70">
                  <span className="text-slate-400 block text-[11px]">Operator</span>
                  <span className="text-sm font-semibold text-slate-800">Priya N.</span>
                </div>
              </div>

              {/* Connected Lead Context Block */}
              <div className="py-5 border-b border-slate-200">
                <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                  CONNECTED LEAD RECORD
                </div>
                <div className="bg-white rounded-xl p-3.5 border border-slate-200 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-slate-600 font-bold text-xs">
                      AS
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-900">Aarav Sharma — Apex FinTech</div>
                      <div className="text-xs text-slate-500">Pipeline Stage: Proposal Review • ID #LD-8402</div>
                    </div>
                  </div>
                  <span className="text-xs font-medium text-[#00695C] font-mono">Synced</span>
                </div>
              </div>

              {/* Disposition Notes Box */}
              <div className="pt-5">
                <div className="flex items-center justify-between text-xs font-mono uppercase text-slate-400 mb-2">
                  <span>DISPOSITION & OPERATOR NOTES</span>
                  <span>RECORDED</span>
                </div>
                <div className="bg-white rounded-xl p-4 border border-slate-200 text-xs text-slate-700 leading-relaxed font-normal">
                  "Discussed data isolation requirements with legal lead. Lead requested follow-up proposal with seat tier breakdown. Confirmed WhatsApp as preferred channel for document transmission."
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Copy & Details */}
          <div className="lg:col-span-5 order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00695C]/10 border border-[#00695C]/20 text-[#00695C] text-xs font-mono font-semibold tracking-wider uppercase mb-5">
              <span>02 / CALLING & HISTORY</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-slate-900 tracking-tight leading-[1.12] mb-6">
              Make every call part of the customer story.
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal mb-8">
              Keep call outcomes, duration, notes and interaction history connected to the lead workflow.
            </p>

            <div className="space-y-4 mb-10 text-sm text-slate-600">
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/70">
                <strong className="text-slate-900 block font-semibold mb-1">Standardized Call Outcomes</strong>
                <span>Ensure consistent logging across telecallers with preset dispositions (Connected, Busy, Callback Scheduled, Gatekeeper).</span>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/70">
                <strong className="text-slate-900 block font-semibold mb-1">Automatic Interaction History</strong>
                <span>Every conversation links directly to the customer profile without manual copy-pasting between phone dials and records.</span>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/70">
                <strong className="text-slate-900 block font-semibold mb-1">Duration & Pacing Metrics</strong>
                <span>Capture talk time and follow-up turnaround to measure team capacity accurately.</span>
              </div>
            </div>

            <Link
              to="/features/calls"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#00695C] hover:bg-[#004D40] text-white text-sm font-semibold tracking-normal transition-all shadow-xs group"
            >
              <span>Explore Calling</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
