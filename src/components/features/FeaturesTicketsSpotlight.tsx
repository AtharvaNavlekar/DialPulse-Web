/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Link } from 'react-router-dom';
import { ArrowRight, LifeBuoy, AlertCircle, Clock, CheckCircle2, MessageSquare, Tag } from 'lucide-react';

export function FeaturesTicketsSpotlight() {
  return (
    <section className="py-20 md:py-28 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Stylized Ticket Interface */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <div className="rounded-[28px] bg-[#F8FAF8] border border-slate-200/90 p-6 sm:p-8 shadow-sm">
              {/* Ticket Top bar */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-5 border-b border-slate-200 gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#1F3A5F] text-white flex items-center justify-center">
                    <LifeBuoy className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase text-slate-400">SUPPORT TICKET</span>
                    <h3 className="text-base font-bold text-slate-900">#TK-8041: Webhook Retry Threshold</h3>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-md text-xs font-mono font-semibold bg-amber-50 text-amber-800 border border-amber-200">
                    P1 — HIGH
                  </span>
                  <span className="px-2.5 py-1 rounded-md text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200">
                    In Progress
                  </span>
                </div>
              </div>

              {/* Linked Customer & Metadata */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 py-5 border-b border-slate-200 text-xs">
                <div className="bg-white rounded-xl p-3 border border-slate-200/70">
                  <span className="text-slate-400 block text-[11px]">Customer Record</span>
                  <span className="font-semibold text-slate-900 block">Apex FinTech Pvt Ltd</span>
                  <span className="text-[10px] text-[#00695C] font-mono">Lead #LD-8402</span>
                </div>
                <div className="bg-white rounded-xl p-3 border border-slate-200/70">
                  <span className="text-slate-400 block text-[11px]">Assigned Agent</span>
                  <span className="font-semibold text-slate-900 block">Karan Mehta</span>
                  <span className="text-[10px] text-slate-500">Tier-2 Operations</span>
                </div>
                <div className="bg-white rounded-xl p-3 border border-slate-200/70">
                  <span className="text-slate-400 block text-[11px]">First Response SLA</span>
                  <span className="font-semibold text-emerald-700 block font-mono">Met (18m elapsed)</span>
                  <span className="text-[10px] text-slate-500">Target: &lt; 30m</span>
                </div>
              </div>

              {/* Ticket Resolution Thread */}
              <div className="pt-5 space-y-3">
                <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                  CASE TIMELINE & CONTEXT
                </div>
                <div className="bg-white rounded-xl p-4 border border-slate-200 text-xs space-y-2">
                  <div className="flex items-center justify-between text-slate-500 text-[11px]">
                    <span className="font-medium text-slate-900">Customer Issue Submitted</span>
                    <span className="font-mono">09:15 AM</span>
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    "Inquiry regarding custom export webhook timeout limits during peak batch delivery."
                  </p>
                </div>
                <div className="bg-white rounded-xl p-4 border border-slate-200 text-xs space-y-2">
                  <div className="flex items-center justify-between text-slate-500 text-[11px]">
                    <span className="font-medium text-[#00695C]">Operator Resolution Reply</span>
                    <span className="font-mono">09:33 AM</span>
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    "Adjusted retry interval backoff to 5-minute exponential pacing within tenant policy settings."
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Copy & Details */}
          <div className="lg:col-span-5 order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1F3A5F]/10 border border-[#1F3A5F]/20 text-[#1F3A5F] text-xs font-mono font-semibold tracking-wider uppercase mb-5">
              <span>04 / TICKETS & SUPPORT</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-slate-900 tracking-tight leading-[1.12] mb-6">
              Keep support work in the same picture.
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal mb-8">
              Track customer issues, replies, priority and operational context without losing the relationship around the customer.
            </p>

            <div className="space-y-4 mb-10 text-sm text-slate-600">
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/70">
                <strong className="text-slate-900 block font-semibold mb-1">Unified Customer Relationship</strong>
                <span>Support tickets remain directly anchored to the lead profile, preventing siloed customer communications.</span>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/70">
                <strong className="text-slate-900 block font-semibold mb-1">Explicit Priority & SLA Pacing</strong>
                <span>Flag urgent escalations with clear priority levels (P1, P2, P3) and visible response benchmarks.</span>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/70">
                <strong className="text-slate-900 block font-semibold mb-1">Shared Context for Telecallers</strong>
                <span>Sales and calling operators see open tickets before placing a call, preventing awkward miscommunications.</span>
              </div>
            </div>

            <Link
              to="/features/tickets"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#00695C] hover:bg-[#004D40] text-white text-sm font-semibold tracking-normal transition-all shadow-xs group"
            >
              <span>Explore Tickets</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
