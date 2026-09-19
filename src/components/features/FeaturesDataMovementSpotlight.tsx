/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpDown, FileCheck, ShieldAlert, CheckCircle2, Lock, ArrowDown, ArrowRightCircle } from 'lucide-react';

export function FeaturesDataMovementSpotlight() {
  return (
    <section className="py-20 md:py-28 bg-[#F8FAF8] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00695C]/10 border border-[#00695C]/20 text-[#00695C] text-xs font-mono font-semibold tracking-wider uppercase mb-5">
            <span>07 / IMPORTS & EXPORTS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-slate-900 tracking-tight leading-[1.12] mb-6">
            Move customer data without losing control.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Bulk lead ingestion and customer data extraction are governed by strict background workers, format validation, and multi-step authorization checks.
          </p>
        </div>

        {/* Dual Flow Cards: Import Pipeline & Export Governance */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Flow 1: IMPORTS */}
          <div className="rounded-[28px] bg-white border border-slate-200/90 p-6 sm:p-8 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
                <div className="flex items-center gap-2.5">
                  <span className="w-8 h-8 rounded-lg bg-[#00695C]/10 text-[#00695C] flex items-center justify-center font-bold text-xs">
                    IN
                  </span>
                  <h3 className="text-lg font-bold text-slate-900">Structured Bulk Import Flow</h3>
                </div>
                <span className="text-xs font-mono text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200">
                  BACKGROUND JOB
                </span>
              </div>

              <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                Ingest high-volume customer records with schema pre-flight validation, field mapping, and asynchronous queue processing without locking the UI.
              </p>

              {/* Import Visual Journey: IMPORT -> VALIDATE -> PROCESS */}
              <div className="grid grid-cols-3 gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-200/70 text-center mb-6">
                <div className="p-3 bg-white rounded-xl border border-slate-200 shadow-2xs">
                  <span className="text-[10px] font-mono text-slate-400 block mb-1">STEP 1</span>
                  <span className="text-xs font-bold font-mono text-slate-900 block">IMPORT</span>
                  <span className="text-[10px] text-slate-500">CSV / Payload</span>
                </div>
                <div className="p-3 bg-white rounded-xl border border-slate-200 shadow-2xs">
                  <span className="text-[10px] font-mono text-slate-400 block mb-1">STEP 2</span>
                  <span className="text-xs font-bold font-mono text-[#00695C] block">VALIDATE</span>
                  <span className="text-[10px] text-slate-500">Format & Dups</span>
                </div>
                <div className="p-3 bg-white rounded-xl border border-slate-200 shadow-2xs">
                  <span className="text-[10px] font-mono text-slate-400 block mb-1">STEP 3</span>
                  <span className="text-xs font-bold font-mono text-emerald-700 block">PROCESS</span>
                  <span className="text-[10px] text-slate-500">Queue Worker</span>
                </div>
              </div>

              <ul className="space-y-2 text-xs text-slate-600">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#00695C]" /> Automatic phone number normalization and channel preference parsing
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#00695C]" /> Duplicate detection to prevent overlapping telecaller assignments
                </li>
              </ul>
            </div>

            <div className="pt-6 border-t border-slate-100 mt-6 flex justify-between items-center text-xs">
              <span className="text-slate-400 font-mono">TENANT ISOLATED</span>
              <span className="text-emerald-700 font-medium">Safe Ingestion</span>
            </div>
          </div>

          {/* Flow 2: EXPORTS */}
          <div className="rounded-[28px] bg-white border border-slate-200/90 p-6 sm:p-8 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
                <div className="flex items-center gap-2.5">
                  <span className="w-8 h-8 rounded-lg bg-[#1F3A5F]/10 text-[#1F3A5F] flex items-center justify-center font-bold text-xs">
                    OUT
                  </span>
                  <h3 className="text-lg font-bold text-slate-900">Audited Export Governance</h3>
                </div>
                <span className="text-xs font-mono text-amber-800 bg-amber-50 px-2.5 py-1 rounded border border-amber-200">
                  AUTHORIZATION REQUIRED
                </span>
              </div>

              <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                Data extraction requires explicit administrative credentials, user consent confirmations, rate limiting, and persistent audit logging.
              </p>

              {/* Export Visual Journey: REQUEST -> AUTHORIZE -> CONFIRM -> EXPORT -> AUDIT */}
              <div className="grid grid-cols-5 gap-2 p-3 bg-slate-50 rounded-2xl border border-slate-200/70 text-center mb-6">
                <div className="p-2 bg-white rounded-lg border border-slate-200 shadow-2xs">
                  <span className="text-[9px] font-mono text-slate-400 block">01</span>
                  <span className="text-[10px] font-bold font-mono text-slate-800 block">REQUEST</span>
                </div>
                <div className="p-2 bg-white rounded-lg border border-slate-200 shadow-2xs">
                  <span className="text-[9px] font-mono text-slate-400 block">02</span>
                  <span className="text-[10px] font-bold font-mono text-[#1F3A5F] block">AUTHORIZE</span>
                </div>
                <div className="p-2 bg-white rounded-lg border border-slate-200 shadow-2xs">
                  <span className="text-[9px] font-mono text-slate-400 block">03</span>
                  <span className="text-[10px] font-bold font-mono text-amber-700 block">CONFIRM</span>
                </div>
                <div className="p-2 bg-white rounded-lg border border-slate-200 shadow-2xs">
                  <span className="text-[9px] font-mono text-slate-400 block">04</span>
                  <span className="text-[10px] font-bold font-mono text-[#00695C] block">EXPORT</span>
                </div>
                <div className="p-2 bg-white rounded-lg border border-slate-200 shadow-2xs">
                  <span className="text-[9px] font-mono text-slate-400 block">05</span>
                  <span className="text-[10px] font-bold font-mono text-purple-700 block">AUDIT</span>
                </div>
              </div>

              <ul className="space-y-2 text-xs text-slate-600">
                <li className="flex items-center gap-2">
                  <Lock className="w-3.5 h-3.5 text-amber-600" /> Export privilege is restricted from telecaller and supervisor roles
                </li>
                <li className="flex items-center gap-2">
                  <ShieldAlert className="w-3.5 h-3.5 text-slate-600" /> Download actions generate immutable security audit logs
                </li>
              </ul>
            </div>

            <div className="pt-6 border-t border-slate-100 mt-6 flex justify-between items-center text-xs">
              <span className="text-slate-400 font-mono">AUDITED LOG</span>
              <span className="text-slate-600 font-medium">Compliance Guarded</span>
            </div>
          </div>
        </div>

        {/* CTA to detail route */}
        <div className="text-center">
          <Link
            to="/features/imports-exports"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#00695C] hover:bg-[#004D40] text-white text-sm font-semibold tracking-normal transition-all shadow-xs group"
          >
            <span>Explore Imports & Exports</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
