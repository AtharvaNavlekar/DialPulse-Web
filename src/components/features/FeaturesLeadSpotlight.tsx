/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Link } from 'react-router-dom';
import { ArrowRight, UserCheck, Tag, Building2, Bell, Shield, SlidersHorizontal, CheckCircle2 } from 'lucide-react';

export function FeaturesLeadSpotlight() {
  return (
    <section className="py-20 md:py-28 bg-[#F8FAF8] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Copy & Details */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00695C]/10 border border-[#00695C]/20 text-[#00695C] text-xs font-mono font-semibold tracking-wider uppercase mb-5">
              <span>01 / LEAD MANAGEMENT</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-slate-900 tracking-tight leading-[1.12] mb-6">
              Start with the customer.
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal mb-8">
              Keep lead information, ownership, stages, notes, priorities and communication preferences in context.
            </p>

            {/* Visual Capabilities List */}
            <div className="space-y-3 mb-10">
              {[
                { title: 'Customer Details & Custom Fields', desc: 'Capture operational attributes, organization data, and custom metadata.' },
                { title: 'Pipeline Stages & Ownership', desc: 'Assign leads to specific telecallers with defined team visibility boundaries.' },
                { title: 'Priorities & Contextual Notes', desc: 'Pin chronological interaction memos and urgency tags to the profile.' },
                { title: 'Communication Preferences', desc: 'Honor opt-in channels, preferred contact windows, and language settings.' },
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#00695C]/10 text-[#00695C] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-slate-900 block">{item.title}</span>
                    <span className="text-xs text-slate-500 leading-normal">{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>

            <Link
              to="/features/leads"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#00695C] hover:bg-[#004D40] text-white text-sm font-semibold tracking-normal transition-all shadow-xs group"
            >
              <span>Explore Lead Management</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Right Column: Stylized Lead Card Schematic */}
          <div className="lg:col-span-7">
            <div className="rounded-[28px] bg-white border border-slate-200/90 p-6 sm:p-8 shadow-sm relative">
              {/* Header inside Lead Fragment */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-100 gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#00695C]/10 text-[#00695C] flex items-center justify-center font-bold text-lg">
                    AS
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-lg font-bold text-slate-900">Aarav Sharma</h3>
                      <span className="px-2 py-0.5 rounded text-[11px] font-mono font-medium bg-amber-50 text-amber-800 border border-amber-200">
                        High Priority
                      </span>
                    </div>
                    <div className="text-xs text-slate-500 flex items-center gap-2 mt-0.5">
                      <Building2 className="w-3.5 h-3.5 text-slate-400" />
                      <span>Apex FinTech Pvt Ltd</span>
                      <span>•</span>
                      <span>#LD-8402</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-xs text-slate-400 font-mono">STAGE:</span>
                  <span className="px-3 py-1 rounded-lg text-xs font-semibold bg-[#00695C] text-white">
                    Proposal Review
                  </span>
                </div>
              </div>

              {/* Lead Details Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-6 border-b border-slate-100 text-xs">
                <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
                  <span className="text-slate-400 block mb-1 text-[11px]">Owner / Scope</span>
                  <div className="font-semibold text-slate-900 flex items-center gap-1.5">
                    <UserCheck className="w-3.5 h-3.5 text-[#00695C]" /> Priya Nair
                  </div>
                  <span className="text-[10px] text-slate-500">Enterprise West Team</span>
                </div>
                <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
                  <span className="text-slate-400 block mb-1 text-[11px]">Contact Channel</span>
                  <div className="font-semibold text-slate-900 flex items-center gap-1.5">
                    <Bell className="w-3.5 h-3.5 text-[#00695C]" /> WhatsApp + Voice
                  </div>
                  <span className="text-[10px] text-emerald-600 font-medium">Opt-in Active</span>
                </div>
                <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
                  <span className="text-slate-400 block mb-1 text-[11px]">Custom Attribute</span>
                  <div className="font-semibold text-slate-900 flex items-center gap-1.5">
                    <Tag className="w-3.5 h-3.5 text-[#00695C]" /> Multi-Branch Seat
                  </div>
                  <span className="text-[10px] text-slate-500">Tier: 25-50 Seats</span>
                </div>
              </div>

              {/* Contextual Interaction Timeline Preview */}
              <div className="pt-6">
                <div className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400 mb-4 flex items-center justify-between">
                  <span>RECENT CONTEXT & ACTIVITY</span>
                  <span className="text-slate-400">3 ENTRIES</span>
                </div>
                <div className="space-y-3">
                  <div className="bg-[#F8FAF8] rounded-xl p-3 border border-slate-200/60 text-xs flex items-start justify-between">
                    <div>
                      <span className="font-semibold text-slate-800 block mb-0.5">Call Logged — Connected (04:18)</span>
                      <p className="text-slate-500 text-[11px]">Discussed contract SLA terms and data export requirements.</p>
                    </div>
                    <span className="text-[10px] font-mono text-slate-400 shrink-0 ml-2">10:42 AM</span>
                  </div>
                  <div className="bg-[#F8FAF8] rounded-xl p-3 border border-slate-200/60 text-xs flex items-start justify-between">
                    <div>
                      <span className="font-semibold text-slate-800 block mb-0.5">WhatsApp Message Dispatched</span>
                      <p className="text-slate-500 text-[11px]">Sent proposal document link via pre-approved template.</p>
                    </div>
                    <span className="text-[10px] font-mono text-slate-400 shrink-0 ml-2">Yesterday</span>
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
