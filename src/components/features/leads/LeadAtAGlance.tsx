/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { User, Phone, Mail, Shield, Building2, Tag, FileText, Sliders, BellOff, History, Check } from 'lucide-react';

export function LeadAtAGlance() {
  return (
    <section className="py-20 md:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-mono font-medium tracking-wider uppercase mb-4">
            <span>UNIFIED CUSTOMER RECORD</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-slate-900 tracking-tight mb-5">
            One record. <br />
            The context around it.
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed font-normal">
            A useful lead record is more than a name and number. DialPulse brings the information and operational context around that customer into one place.
          </p>
        </div>

        {/* Large Profile Visual Card */}
        <div className="rounded-[28px] bg-[#F8FAF8] border border-slate-200 p-6 sm:p-10 shadow-sm">
          
          {/* Top Metadata Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between pb-8 border-b border-slate-200/80 gap-4">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-2xl bg-[#00695C] text-white flex items-center justify-center font-display font-bold text-xl shadow-sm shrink-0">
                AP
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-2.5">
                  <h3 className="text-2xl font-bold text-slate-900">Aarav Patel</h3>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-slate-200 text-slate-700">
                    Lead ID: #LD-8402
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-teal-100 text-[#00695C]">
                    Tenant: tn_apac_prod_09
                  </span>
                </div>
                <p className="text-sm text-slate-500 mt-1">
                  Director of Operations • Apex Logistics Pvt Ltd • Source: Direct Website Form
                </p>
              </div>
            </div>

            {/* Quick Status Badges */}
            <div className="flex flex-wrap items-center gap-2">
              <div className="px-3 py-1.5 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-medium font-mono">
                STAGE: QUALIFIED
              </div>
              <div className="px-3 py-1.5 rounded-lg bg-amber-50 border border-amber-200 text-amber-800 text-xs font-medium font-mono">
                PRIORITY: HIGH
              </div>
            </div>
          </div>

          {/* 9-Part Context Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-8">
            
            {/* 1. Identity & Contact */}
            <div className="bg-white rounded-2xl p-5 border border-slate-200/90">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-slate-400 uppercase mb-3">
                <User className="w-3.5 h-3.5 text-[#00695C]" />
                <span>Contact & Identity</span>
              </div>
              <div className="space-y-2 text-sm">
                <div>
                  <span className="text-xs text-slate-500 block">Phone Number</span>
                  <span className="font-semibold text-slate-800 font-mono">+91 98201 44921</span>
                </div>
                <div>
                  <span className="text-xs text-slate-500 block">Email Address</span>
                  <span className="font-medium text-slate-800">aarav@apexlogistics.in</span>
                </div>
                <div>
                  <span className="text-xs text-slate-500 block">City / Territory</span>
                  <span className="text-slate-700">Mumbai, Maharashtra (IST)</span>
                </div>
              </div>
            </div>

            {/* 2. Ownership & Team */}
            <div className="bg-white rounded-2xl p-5 border border-slate-200/90">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-slate-400 uppercase mb-3">
                <Building2 className="w-3.5 h-3.5 text-[#00695C]" />
                <span>Ownership & Scoping</span>
              </div>
              <div className="space-y-2 text-sm">
                <div>
                  <span className="text-xs text-slate-500 block">Assigned Representative</span>
                  <span className="font-semibold text-slate-800">Priya Sharma</span>
                </div>
                <div>
                  <span className="text-xs text-slate-500 block">Responsible Team</span>
                  <span className="font-medium text-slate-800">Enterprise Sales (West Hub)</span>
                </div>
                <div>
                  <span className="text-xs text-slate-500 block">Assigned Date</span>
                  <span className="text-slate-700 font-mono text-xs">Sep 18, 2026 • 09:30 AM</span>
                </div>
              </div>
            </div>

            {/* 3. Stage & Priority */}
            <div className="bg-white rounded-2xl p-5 border border-slate-200/90">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-slate-400 uppercase mb-3">
                <Tag className="w-3.5 h-3.5 text-[#00695C]" />
                <span>Pipeline Stage & Priority</span>
              </div>
              <div className="space-y-2 text-sm">
                <div>
                  <span className="text-xs text-slate-500 block">Current Stage</span>
                  <span className="font-semibold text-emerald-700">Qualified Lead</span>
                </div>
                <div>
                  <span className="text-xs text-slate-500 block">Operational Priority</span>
                  <span className="font-medium text-amber-800">High (Follow-up within 4h)</span>
                </div>
                <div>
                  <span className="text-xs text-slate-500 block">Acquisition Source</span>
                  <span className="text-slate-700">Inbound Web Form #WF-109</span>
                </div>
              </div>
            </div>

            {/* 4. Preserved Notes */}
            <div className="bg-white rounded-2xl p-5 border border-slate-200/90">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-slate-400 uppercase mb-3">
                <FileText className="w-3.5 h-3.5 text-[#00695C]" />
                <span>Preserved Operational Notes</span>
              </div>
              <div className="bg-slate-50 rounded-xl p-3 border border-slate-100 text-xs text-slate-700 space-y-1.5">
                <p className="font-medium text-slate-900">"Wants to support 45 telecallers across Mumbai & Pune hubs."</p>
                <span className="text-[10px] text-slate-400 font-mono block">
                  Logged by Priya Sharma • Sep 19, 11:02 AM
                </span>
              </div>
            </div>

            {/* 5. Custom Fields */}
            <div className="bg-white rounded-2xl p-5 border border-slate-200/90">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-slate-400 uppercase mb-3">
                <Sliders className="w-3.5 h-3.5 text-[#00695C]" />
                <span>Tenant-Defined Custom Fields</span>
              </div>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between py-1 border-b border-slate-100">
                  <span className="text-slate-500">Fleet Size</span>
                  <span className="font-mono font-semibold text-slate-800">120+ Vehicles</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-100">
                  <span className="text-slate-500">ERP System</span>
                  <span className="font-mono font-semibold text-slate-800">SAP S/4HANA</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-slate-500">Contract Term</span>
                  <span className="font-mono font-semibold text-slate-800">Annual Multi-Year</span>
                </div>
              </div>
            </div>

            {/* 6. Communication Preferences */}
            <div className="bg-white rounded-2xl p-5 border border-slate-200/90">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-slate-400 uppercase mb-3">
                <BellOff className="w-3.5 h-3.5 text-[#00695C]" />
                <span>Communication Preferences</span>
              </div>
              <div className="space-y-2 text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-slate-600">Global Opt-out:</span>
                  <span className="font-mono font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">Active (False)</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-600">Temporary Pause:</span>
                  <span className="font-mono font-semibold text-slate-600">None</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-600">Preferred Channel:</span>
                  <span className="font-mono font-semibold text-[#00695C]">WhatsApp / Voice</span>
                </div>
              </div>
            </div>

          </div>

          {/* Activity Context Bottom Bar */}
          <div className="mt-6 pt-5 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-600">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1.5 font-mono">
                <History className="w-3.5 h-3.5 text-slate-400" />
                Contact Attempts: <strong className="text-slate-900 font-semibold">2 Attempts</strong>
              </span>
              <span className="text-slate-300">|</span>
              <span className="font-mono">
                Last Interaction: <strong className="text-slate-900 font-semibold">Today, 11:15 AM (WhatsApp)</strong>
              </span>
            </div>
            <div className="flex items-center gap-2 text-[11px] font-mono text-slate-500">
              <Shield className="w-3.5 h-3.5 text-emerald-600" />
              Resource authorization verified for user role
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
