/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Link } from 'react-router-dom';
import { ArrowRight, Phone, MessageSquare, StickyNote, UserCheck, ShieldCheck, CheckCircle2, Clock } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export function LeadHero() {
  return (
    <section className="relative pt-12 pb-20 md:pt-16 md:pb-28 bg-[#F8FAF8] border-b border-slate-200 overflow-hidden">
      {/* Subtle architectural radial glow */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(0,105,92,0.06),transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Value proposition & CTAs */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00695C]/10 border border-[#00695C]/20 text-[#00695C] text-xs font-mono font-semibold tracking-wider uppercase mb-6">
              <span>LEAD MANAGEMENT</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-slate-900 tracking-tight leading-[1.08] mb-6">
              Turn every lead <br />
              into a clear next step.
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed font-normal mb-8 max-w-xl">
              Keep customer context, ownership, activity, priority and communication preferences together so teams can understand what happened, what matters now and who should act next.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
              <Button
                href="/contact"
                size="lg"
                className="h-13 px-8 text-base bg-[#00695C] hover:bg-[#004D40] text-white shadow-sm"
              >
                <span>Talk to DialPulse</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button
                variant="outlined"
                href="/features"
                size="lg"
                className="h-13 px-7 text-base bg-white border-slate-200 text-slate-800 hover:bg-slate-50"
              >
                <span>Explore All Features</span>
              </Button>
            </div>

            {/* Micro-guarantees / Operational scope */}
            <div className="pt-6 border-t border-slate-200/80 grid grid-cols-3 gap-4 text-xs">
              <div>
                <span className="font-mono text-slate-400 block text-[10px] uppercase">DATA BOUNDARY</span>
                <span className="font-semibold text-slate-800">Tenant-Scoped</span>
              </div>
              <div>
                <span className="font-mono text-slate-400 block text-[10px] uppercase">ACCESS SCOPE</span>
                <span className="font-semibold text-slate-800">Role & Team Governed</span>
              </div>
              <div>
                <span className="font-mono text-slate-400 block text-[10px] uppercase">COMMUNICATION</span>
                <span className="font-semibold text-[#00695C]">Preferences Gated</span>
              </div>
            </div>
          </div>

          {/* Right Column: Realistic Product-Inspired Lead Workspace */}
          <div className="lg:col-span-6">
            <div className="rounded-[28px] bg-white border border-slate-200/90 p-6 sm:p-8 shadow-sm">
              {/* Workspace Top Bar */}
              <div className="flex items-center justify-between pb-5 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#00695C]/10 text-[#00695C] flex items-center justify-center font-bold text-sm">
                    LD
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-bold text-slate-900 text-base">Aarav Patel</h3>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-600">
                        ID: #LD-8402
                      </span>
                    </div>
                    <span className="text-xs text-slate-500 font-mono">Apex Logistics Pvt Ltd</span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-md text-xs font-mono font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200">
                    STAGE: QUALIFIED
                  </span>
                </div>
              </div>

              {/* Lead Core Attributes Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 py-5 border-b border-slate-100 text-xs">
                <div className="bg-[#F8FAF8] rounded-xl p-3 border border-slate-200/60">
                  <span className="text-slate-400 block text-[10px] font-mono uppercase">CONTACT</span>
                  <span className="font-semibold text-slate-900 block truncate">+91 98201 •••••</span>
                  <span className="text-[10px] text-slate-500 truncate block">aarav@apexlogistics.in</span>
                </div>

                <div className="bg-[#F8FAF8] rounded-xl p-3 border border-slate-200/60">
                  <span className="text-slate-400 block text-[10px] font-mono uppercase">PRIORITY</span>
                  <span className="font-semibold text-amber-800 block">High Priority</span>
                  <span className="text-[10px] text-slate-500 block">Source: Inbound Inquiry</span>
                </div>

                <div className="bg-[#F8FAF8] rounded-xl p-3 border border-slate-200/60 col-span-2 sm:col-span-1">
                  <span className="text-slate-400 block text-[10px] font-mono uppercase">OWNERSHIP</span>
                  <span className="font-semibold text-slate-900 block">Priya Sharma</span>
                  <span className="text-[10px] text-[#00695C] block">Enterprise Sales Team</span>
                </div>
              </div>

              {/* Next Action Banner */}
              <div className="py-4 border-b border-slate-100">
                <div className="p-3.5 rounded-xl bg-teal-50/60 border border-teal-200/80 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <Clock className="w-4 h-4 text-[#00695C] shrink-0" />
                    <div>
                      <span className="text-xs font-bold text-slate-900 block">NEXT ACTION: Follow-up Call</span>
                      <span className="text-[11px] text-slate-600">Scheduled for Today, 3:30 PM • Review tenant export policy</span>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-1 rounded bg-white text-[#00695C] border border-teal-200 font-semibold shrink-0">
                    PENDING
                  </span>
                </div>
              </div>

              {/* Activity Context Stream (Call, Note, Message) */}
              <div className="pt-4 space-y-2.5">
                <span className="text-[10px] font-mono uppercase text-slate-400 tracking-wider block">
                  RECENT ACTIVITY CONTEXT
                </span>

                {/* Call activity item */}
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2.5">
                    <div className="w-6 h-6 rounded-md bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                      <Phone className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <span className="font-semibold text-slate-800">Connected Voice Call (8m 14s)</span>
                      <span className="text-[10px] text-slate-500 block">Disposition: Interested • Follow-up requested</span>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-slate-400">10:45 AM</span>
                </div>

                {/* Note activity item */}
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2.5">
                    <div className="w-6 h-6 rounded-md bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
                      <StickyNote className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <span className="font-semibold text-slate-800">Operator Memo Added</span>
                      <span className="text-[10px] text-slate-500 block">"Requested walkthrough of data export authorization gates."</span>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-slate-400">11:02 AM</span>
                </div>

                {/* Message activity item */}
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2.5">
                    <div className="w-6 h-6 rounded-md bg-sky-100 text-sky-800 flex items-center justify-center shrink-0">
                      <MessageSquare className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <span className="font-semibold text-slate-800">WhatsApp Spec Sheet Dispatched</span>
                      <span className="text-[10px] text-slate-500 block">Delivered & Read • Template: Tech Overview</span>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-slate-400">11:15 AM</span>
                </div>
              </div>

              {/* Status footer */}
              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                <span className="flex items-center gap-1.5 text-emerald-700 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Tenant Isolation Verified
                </span>
                <span>Version Concurrency: v4</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
