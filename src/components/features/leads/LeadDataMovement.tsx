/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Upload, Download, CheckCircle, ArrowRight, ShieldCheck, AlertCircle, FileSpreadsheet, Lock, RefreshCw, Layers } from 'lucide-react';

export function LeadDataMovement() {
  const importSteps = [
    {
      num: '01',
      title: 'CSV / Structured Data',
      desc: 'Upload CSV formatted files containing name, phone number, email, source, and initial custom attributes.',
    },
    {
      num: '02',
      title: 'Schema Validation',
      desc: 'System parses columns, checks phone formatting, verifies field data types, and reports parsing anomalies.',
    },
    {
      num: '03',
      title: 'Background Processing',
      desc: 'Asynchronous queue ingests records in batches, assigning tenant IDs and calculating initial hash fingerprints.',
    },
    {
      num: '04',
      title: 'Active Leads Ingested',
      desc: 'Records populate the CRM queue, ready for assignment rules, initial triage, and telecaller distribution.',
    },
  ];

  const exportSteps = [
    { step: 'REQUEST', desc: 'User initiates export filter query' },
    { step: 'AUTHORIZE', desc: 'Server validates export RBAC permission' },
    { step: 'CONFIRM', desc: 'Explicit multi-step user confirmation' },
    { step: 'PROCESS', desc: 'Asynchronous background payload generation' },
    { step: 'EXPORT', desc: 'Secure downloadable structured file' },
    { step: 'AUDIT', desc: 'Immutable log entry of user, timestamp & scope' },
  ];

  return (
    <section className="py-20 md:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION 13: Bulk Lead Import */}
        <div className="mb-24">
          <div className="max-w-3xl mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-mono font-medium tracking-wider uppercase mb-4">
              <span>DATA ONBOARDING</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-slate-900 tracking-tight mb-5">
              Bring your existing <br />
              pipeline with you.
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed font-normal">
              DialPulse supports structured bulk lead imports. Imported records are validated and processed through asynchronous background workflows to maintain system responsiveness.
            </p>
          </div>

          {/* Import Pipeline Flow */}
          <div className="rounded-[28px] bg-[#F8FAF8] border border-slate-200 p-8 sm:p-10 shadow-sm mb-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {importSteps.map((step, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-xs">
                  <span className="text-[11px] font-mono font-bold text-[#00695C] block mb-2">
                    STEP {step.num}
                  </span>
                  <h3 className="font-bold text-slate-900 text-base mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Documented Implementation Limit Notice */}
            <div className="mt-8 pt-6 border-t border-slate-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs">
              <div className="flex items-center gap-2 text-slate-700">
                <FileSpreadsheet className="w-4 h-4 text-[#00695C] shrink-0" />
                <span>
                  <strong>Documented implementation:</strong> Up to 250 records per bulk upload batch with asynchronous queueing.
                </span>
              </div>
              <span className="font-mono text-slate-500 bg-slate-100 px-3 py-1 rounded-md">
                Asynchronous Task Model
              </span>
            </div>
          </div>
        </div>

        {/* SECTION 15: Data Quality / Duplicate Handling */}
        <div className="mb-24 rounded-[28px] bg-teal-50/50 border border-teal-200/80 p-8 sm:p-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-teal-200 text-[#00695C] text-xs font-mono font-semibold tracking-wider uppercase mb-4">
              <span>DATA HYGIENE & IDEMPOTENCY</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 tracking-tight mb-4">
              Tenant-Scoped Phone Idempotency
            </h3>
            <p className="text-base text-slate-700 leading-relaxed mb-4">
              During bulk import processing, DialPulse checks for existing phone numbers within the tenant to avoid creating duplicate lead records.
            </p>
            <p className="text-sm text-slate-600 leading-relaxed">
              The current import workflow uses tenant-scoped phone-number checks as an idempotency safeguard. If a matching phone record already exists in your tenant, the system prevents accidental duplication while preserving original record attribution.
            </p>
          </div>
        </div>

        {/* SECTION 14: Export Governance */}
        <div>
          <div className="max-w-3xl mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-mono font-medium tracking-wider uppercase mb-4">
              <span>DATA GOVERNANCE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-slate-900 tracking-tight mb-5">
              Take your data <br />
              when you need it.
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed font-normal">
              Authorized users can export lead data. Export requests are permission-controlled, require explicit confirmation in the documented workflow, and may be processed asynchronously.
            </p>
          </div>

          {/* Export Progression Visual */}
          <div className="rounded-[28px] bg-[#F8FAF8] border border-slate-200 p-8 sm:p-10 shadow-sm">
            <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-6">
              GOVERNED EXPORT PIPELINE: REQUEST → AUDIT
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {exportSteps.map((step, idx) => (
                <div key={idx} className="bg-white rounded-xl p-4 border border-slate-200 text-center flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 block mb-1">
                      STEP 0{idx + 1}
                    </span>
                    <span className="text-xs font-mono font-bold text-slate-900 block mb-2">
                      {step.step}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-500 leading-tight">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-slate-200/80 flex items-center justify-between text-xs text-slate-500 font-mono">
              <span className="flex items-center gap-2">
                <Lock className="w-4 h-4 text-emerald-700" /> Explicit user confirmation enforced
              </span>
              <span>Audit Logged to Tenant Trail</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
