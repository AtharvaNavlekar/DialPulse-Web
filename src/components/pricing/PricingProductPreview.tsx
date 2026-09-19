import { Phone, PhoneCall, Mic, Users, Clock, ShieldCheck, CheckCircle2, Volume2 } from 'lucide-react';

export function PricingProductPreview() {
  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <div className="rounded-3xl bg-white border border-slate-200/90 p-4 sm:p-8 shadow-xs relative overflow-hidden">
        {/* Subtle header bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
              Live Product Preview
            </div>
            <div className="text-base sm:text-lg font-bold text-slate-900 mt-0.5">
              The DialPulse Unified Workplace
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              WEBRTC SOFTPHONE ACTIVE
            </span>
          </div>
        </div>

        {/* 2-column layout preview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-6 items-center">
          {/* Left: Softphone widget preview */}
          <div className="lg:col-span-5 bg-slate-900 text-white rounded-2xl p-5 shadow-md border border-slate-800 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs font-mono">
              <span className="text-teal-400 font-semibold flex items-center gap-1.5">
                <PhoneCall className="w-3.5 h-3.5" />
                OUTBOUND CALL CONNECTED
              </span>
              <span className="text-slate-400">03:42</span>
            </div>

            <div className="space-y-1">
              <div className="text-xs text-slate-400">Prospect:</div>
              <div className="text-base font-bold text-white">Rohit Sharma — TechFin Logistics</div>
              <div className="text-xs font-mono text-slate-400">+91 98201 44820</div>
            </div>

            {/* Audio Waveform Simulator */}
            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
              <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span className="flex items-center gap-1">
                  <Mic className="w-3 h-3 text-teal-400" />
                  Dual-Track Recording
                </span>
                <span className="text-teal-400">48 kHz lossless</span>
              </div>
              <div className="flex items-center gap-1 h-6 px-1">
                {[40, 65, 30, 85, 95, 45, 70, 60, 90, 50, 35, 80, 65, 40, 90, 75, 55, 30, 70, 85, 40].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 bg-teal-400/80 rounded-full"
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
            </div>

            {/* Mandatory Disposition Lock */}
            <div className="p-3 rounded-xl bg-teal-950/40 border border-teal-800/50 text-xs space-y-1.5">
              <div className="flex items-center justify-between font-mono text-[11px] text-teal-300 font-semibold">
                <span>MANDATORY DISPOSITION</span>
                <span className="text-amber-400">Required</span>
              </div>
              <div className="grid grid-cols-2 gap-1.5 text-[11px]">
                <span className="px-2 py-1 rounded bg-teal-900/60 text-teal-200 border border-teal-700/60 text-center font-medium">
                  Follow-up Callback
                </span>
                <span className="px-2 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700 text-center">
                  Interested / Send Deck
                </span>
              </div>
            </div>
          </div>

          {/* Right: Pipeline & Lead Record Preview */}
          <div className="lg:col-span-7 space-y-4">
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3">
              <div className="flex items-center justify-between text-xs font-mono text-slate-600">
                <span className="font-bold text-slate-900">LEAD PIPELINE SNAPSHOT</span>
                <span>STAGE: TECHNICAL EVALUATION</span>
              </div>

              {/* Progress bar stages */}
              <div className="grid grid-cols-4 gap-2 text-center text-[11px] font-medium">
                <div className="p-2 rounded-lg bg-teal-100 text-teal-800 font-semibold border border-teal-200">
                  1. Ingestion ✓
                </div>
                <div className="p-2 rounded-lg bg-teal-100 text-teal-800 font-semibold border border-teal-200">
                  2. First Dial ✓
                </div>
                <div className="p-2 rounded-lg bg-[#00695C] text-white font-bold shadow-xs">
                  3. Demo Done
                </div>
                <div className="p-2 rounded-lg bg-white border border-slate-200 text-slate-500">
                  4. Commercial
                </div>
              </div>

              {/* Regulatory banner in lead card */}
              <div className="p-3 rounded-xl bg-white border border-slate-200 text-xs flex items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span className="text-slate-700 font-medium">
                    National DNC Registry: <strong>Verified Cleared</strong>
                  </span>
                </div>
                <span className="text-[11px] font-mono text-slate-400">
                  Quiet-Hours: PASS
                </span>
              </div>

              <div className="p-3 rounded-xl bg-white border border-slate-200 text-xs flex items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#00695C] shrink-0" />
                  <span className="text-slate-700">
                    Cadence Trigger: <strong>Callback scheduled tomorrow at 11:30 AM IST</strong>
                  </span>
                </div>
                <span className="text-[11px] font-mono text-emerald-600 font-semibold">
                  ACTIVE
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
