import { ShieldCheck, Smartphone, Check, X } from 'lucide-react';

export function ComplianceMockup() {
  return (
    <div className="w-full bg-white rounded-2xl md:rounded-3xl p-5 md:p-8 border border-slate-200 shadow-[0_20px_50px_-15px_rgba(0,105,92,0.12)] relative z-10 overflow-hidden text-left">
       <div className="relative z-10">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
             <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center text-amber-600 border border-amber-200">
                   <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                   <h3 className="text-slate-900 font-bold text-lg md:text-xl">Policy Engine Evaluation</h3>
                   <div className="text-slate-400 text-xs font-mono font-medium">REQ_ID: #882-A491-00</div>
                </div>
             </div>
             <div className="px-3 py-1.5 rounded-full bg-rose-50 text-rose-700 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 border border-rose-200">
                <X className="w-3.5 h-3.5 text-rose-600" />
                <span>Transmission Blocked</span>
             </div>
          </div>

          {/* Workflow Sequence */}
          <div className="flex flex-col gap-3 relative">
             {/* Step 1 */}
             <div className="bg-slate-50/70 border border-slate-200 rounded-xl p-3.5 md:p-4 flex items-center gap-3.5 shadow-2xs">
                <div className="w-9 h-9 rounded-full bg-white border border-slate-200 flex items-center justify-center shrink-0 text-slate-500">
                   <Smartphone className="w-4 h-4" />
                </div>
                <div className="flex-1 min-w-0">
                   <div className="text-xs md:text-sm font-bold text-slate-900">Agent Initiates Contact</div>
                   <div className="text-[11px] text-slate-500 font-medium">Outbound SMS to +1 (555) 019-4822</div>
                </div>
                <div className="text-[10px] font-mono font-bold text-slate-400 bg-white px-2 py-0.5 rounded border border-slate-200 shrink-0">14:02:11 PST</div>
             </div>

             {/* Step 2 */}
             <div className="bg-slate-50/70 border border-slate-200 rounded-xl p-3.5 md:p-4 flex items-center gap-3.5 shadow-2xs ml-3 md:ml-6 border-l-4 border-l-emerald-500">
                <div className="w-7 h-7 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 flex items-center justify-center shrink-0">
                   <Check className="w-3.5 h-3.5" />
                </div>
                <div className="flex-1 min-w-0">
                   <div className="text-xs md:text-sm font-bold text-slate-900">Consent & Registry Check</div>
                   <div className="text-[11px] text-slate-500 font-medium">Contact verified opted-in via inbound form</div>
                </div>
                <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">Pass</span>
             </div>

             {/* Step 3 */}
             <div className="bg-slate-50/70 border border-slate-200 rounded-xl p-3.5 md:p-4 flex items-center gap-3.5 shadow-2xs ml-3 md:ml-6 border-l-4 border-l-emerald-500">
                <div className="w-7 h-7 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 flex items-center justify-center shrink-0">
                   <Check className="w-3.5 h-3.5" />
                </div>
                <div className="flex-1 min-w-0">
                   <div className="text-xs md:text-sm font-bold text-slate-900">Timezone Validation</div>
                   <div className="text-[11px] text-slate-500 font-medium">Recipient local time: 17:02 EST (Permitted window)</div>
                </div>
                <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">Pass</span>
             </div>

             {/* Step 4 (Failure) */}
             <div className="bg-rose-50/70 border border-rose-200 rounded-xl p-3.5 md:p-4 flex items-center gap-3.5 shadow-2xs ml-3 md:ml-6 border-l-4 border-l-rose-500">
                <div className="w-7 h-7 rounded-full bg-rose-100 border border-rose-200 text-rose-700 flex items-center justify-center shrink-0">
                   <X className="w-3.5 h-3.5" />
                </div>
                <div className="flex-1 min-w-0">
                   <div className="text-xs md:text-sm font-bold text-rose-900">Frequency Limit Exceeded</div>
                   <div className="text-[11px] text-rose-700 font-medium mt-0.5">
                      Rule <span className="font-mono font-bold bg-rose-100 px-1 py-0.2 rounded">MAX_MSG_24H</span>: Already reached 2 contacts today.
                   </div>
                </div>
                <span className="text-[10px] font-bold text-rose-700 bg-rose-100 px-2 py-0.5 rounded-full">Blocked</span>
             </div>
          </div>
       </div>
    </div>
  );
}
