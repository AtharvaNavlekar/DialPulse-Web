/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Link } from 'react-router-dom';
import { ArrowRight, MessageSquare, Check, CheckCheck, AlertCircle, ArrowUpRight, ArrowDownLeft } from 'lucide-react';

export function FeaturesMessagingSpotlight() {
  return (
    <section className="py-20 md:py-28 bg-[#F8FAF8] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Copy & Details */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00695C]/10 border border-[#00695C]/20 text-[#00695C] text-xs font-mono font-semibold tracking-wider uppercase mb-5">
              <span>03 / OMNICHANNEL MESSAGING</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-slate-900 tracking-tight leading-[1.12] mb-6">
              Bring conversations closer to the workflow.
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal mb-8">
              Connect supported messaging activity with customer records instead of leaving the conversation disconnected from the rest of the operation.
            </p>

            <div className="space-y-4 mb-10 text-sm text-slate-600">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 border border-emerald-200">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <div>
                  <strong className="text-slate-900 block font-semibold">WhatsApp & SMS Channels</strong>
                  <span className="text-xs text-slate-500">Dispatch pre-approved templates and manage two-way replies within customer history.</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-sky-50 text-sky-700 flex items-center justify-center shrink-0 border border-sky-200">
                  <CheckCheck className="w-4 h-4" />
                </div>
                <div>
                  <strong className="text-slate-900 block font-semibold">Live Delivery & Read Telemetry</strong>
                  <span className="text-xs text-slate-500">Track sent, delivered, read, and failed delivery receipts in real time.</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-slate-100 text-slate-700 flex items-center justify-center shrink-0 border border-slate-200">
                  <ArrowDownLeft className="w-4 h-4" />
                </div>
                <div>
                  <strong className="text-slate-900 block font-semibold">Inbound Queue Routing</strong>
                  <span className="text-xs text-slate-500">Inbound customer inquiries attach directly to the assigned lead profile.</span>
                </div>
              </div>
            </div>

            <Link
              to="/features/messaging"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#00695C] hover:bg-[#004D40] text-white text-sm font-semibold tracking-normal transition-all shadow-xs group"
            >
              <span>Explore Messaging</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Right Column: Stylized Messaging Thread Visual */}
          <div className="lg:col-span-7">
            <div className="rounded-[28px] bg-white border border-slate-200/90 p-6 sm:p-8 shadow-sm">
              {/* Channel Selector Header */}
              <div className="flex items-center justify-between pb-5 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-lg text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" /> WhatsApp Channel
                  </span>
                  <span className="px-3 py-1 rounded-lg text-xs font-medium bg-slate-100 text-slate-600">
                    SMS Gateway
                  </span>
                </div>
                <span className="text-xs font-mono text-slate-400">LEAD: #LD-8402</span>
              </div>

              {/* Thread simulation */}
              <div className="py-6 space-y-4">
                {/* Outbound message */}
                <div className="flex flex-col items-end">
                  <div className="max-w-md bg-[#00695C] text-white p-4 rounded-2xl rounded-tr-xs text-xs sm:text-sm leading-relaxed shadow-xs">
                    <p>
                      Hello Aarav, here is the technical specification document for DialPulse tenant isolation. Please let us know when your engineering team is available for a walkthrough.
                    </p>
                    <div className="flex items-center justify-end gap-1 mt-2 text-[10px] text-teal-100 font-mono">
                      <span>10:45 AM</span>
                      <CheckCheck className="w-3.5 h-3.5 text-[#80D5C4]" />
                      <span>Read</span>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-slate-400 mt-1 mr-1">Outbound • Verified Template</span>
                </div>

                {/* Inbound message */}
                <div className="flex flex-col items-start">
                  <div className="max-w-md bg-slate-100 text-slate-900 p-4 rounded-2xl rounded-tl-xs text-xs sm:text-sm leading-relaxed border border-slate-200/80">
                    <p>
                      Thanks Priya, received. We reviewed section 3 regarding asynchronous export auditing. We're ready for the walkthrough on Thursday 2 PM.
                    </p>
                    <div className="flex items-center justify-start gap-1 mt-2 text-[10px] text-slate-400 font-mono">
                      <span>11:14 AM</span>
                      <span>Inbound received</span>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-slate-400 mt-1 ml-1">Inbound • Attached to Lead</span>
                </div>

                {/* Status Telemetry Strip */}
                <div className="pt-4 border-t border-slate-100 grid grid-cols-3 gap-3 text-center">
                  <div className="bg-slate-50 rounded-xl p-2.5 border border-slate-100">
                    <span className="text-[10px] font-mono text-slate-400 uppercase block">OUTBOUND</span>
                    <span className="text-xs font-semibold text-emerald-700 flex items-center justify-center gap-1 mt-0.5">
                      <CheckCheck className="w-3.5 h-3.5" /> Delivered
                    </span>
                  </div>
                  <div className="bg-slate-50 rounded-xl p-2.5 border border-slate-100">
                    <span className="text-[10px] font-mono text-slate-400 uppercase block">INBOUND</span>
                    <span className="text-xs font-semibold text-[#00695C] flex items-center justify-center gap-1 mt-0.5">
                      <ArrowDownLeft className="w-3.5 h-3.5" /> Synced
                    </span>
                  </div>
                  <div className="bg-slate-50 rounded-xl p-2.5 border border-slate-100">
                    <span className="text-[10px] font-mono text-slate-400 uppercase block">CHANNEL AUDIT</span>
                    <span className="text-xs font-semibold text-slate-700 font-mono mt-0.5">
                      100% Logged
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
