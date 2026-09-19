import React from 'react';
import { Sparkles, FileText, ArrowRight, CheckCircle2 } from 'lucide-react';

export function AIMockup() {
  return (
    <div className="w-full bg-white rounded-2xl md:rounded-3xl p-5 md:p-8 border border-slate-200 shadow-[0_20px_50px_-15px_rgba(0,105,92,0.12)] relative z-10 overflow-hidden text-left">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6 relative z-10">
        <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center border border-teal-200 text-[#00695C]">
          <Sparkles className="w-5 h-5" />
        </div>
        <div>
          <h3 className="text-slate-900 font-bold text-lg md:text-xl">DialPulse AI Intelligence</h3>
          <p className="text-slate-500 text-xs font-medium">Automatic call transcription, summarization & action items</p>
        </div>
      </div>

      {/* Main Flow Container */}
      <div className="relative z-10 flex flex-col gap-4">
        {/* Step 1: Activity Context */}
        <div className="bg-slate-50/70 rounded-xl p-4 border border-slate-200 shadow-2xs">
           <div className="flex items-center gap-2.5 mb-2.5">
             <div className="w-7 h-7 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
               <FileText className="w-3.5 h-3.5" />
             </div>
             <span className="text-xs font-bold text-slate-900">Call Transcript Logged</span>
             <span className="text-[10px] text-slate-400 font-mono ml-auto">14m 22s</span>
           </div>
           <div className="pl-9">
             <p className="text-xs text-slate-600 leading-relaxed italic bg-white p-3 rounded-lg border border-slate-200">
               "...the security requirements are critical for our team. If your RBAC handles multi-tenant data isolation out of the box, we want to initiate a pilot next month."
             </p>
           </div>
        </div>

        {/* Processing Indicator */}
        <div className="flex items-center justify-center py-1 relative">
           <div className="px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-[#00695C] text-[11px] font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-2xs">
             <Sparkles className="w-3 h-3 animate-pulse" />
             <span>AI Extracted Intent</span>
           </div>
        </div>

        {/* Step 2: AI Summary */}
        <div className="bg-teal-50/30 rounded-xl p-4 border border-teal-200 shadow-2xs relative">
           <div className="flex items-center justify-between mb-2">
             <span className="text-xs font-bold text-slate-900">Executive Summary</span>
             <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700">
               <CheckCircle2 className="w-3.5 h-3.5" />
             </div>
           </div>
           
           <p className="text-xs text-slate-700 leading-relaxed mb-4">
             Prospect confirmed readiness for pilot program. The primary deciding requirement is out-of-the-box RBAC and strict multi-tenant isolation. No pricing friction observed.
           </p>

           <div className="border-t border-teal-100 pt-3">
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block mb-2">Recommended Next Action</span>
              <div className="bg-[#00695C] hover:bg-[#004D40] transition-colors rounded-lg p-2.5 px-3.5 flex items-center justify-between cursor-pointer text-white shadow-2xs">
                 <span className="font-bold text-xs">Send Security Whitepaper & Pilot Agreement</span>
                 <ArrowRight className="w-3.5 h-3.5" />
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
