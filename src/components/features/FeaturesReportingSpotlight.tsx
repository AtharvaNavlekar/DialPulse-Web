/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Link } from 'react-router-dom';
import { ArrowRight, BarChart3, TrendingUp, PhoneCall, CheckCircle2, Clock, DownloadCloud } from 'lucide-react';

export function FeaturesReportingSpotlight() {
  return (
    <section className="py-20 md:py-28 bg-[#0F172A] text-white border-b border-slate-800 relative overflow-hidden">
      {/* Subtle background gradient orbs */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(0,105,92,0.15),transparent_70%)] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[400px] h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(31,58,95,0.2),transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Copy & Details */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-[#80D5C4] text-xs font-mono font-semibold tracking-wider uppercase mb-5">
              <span>06 / REPORTING & VISIBILITY</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight leading-[1.12] mb-6">
              Turn activity into visibility.
            </h2>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal mb-8">
              Operational activity becomes more useful when teams can see what's happening across leads, communication and customer workflows.
            </p>

            <div className="space-y-4 mb-10 text-sm text-slate-300">
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                <strong className="text-white block font-semibold mb-1">Communication Pacing & Outcomes</strong>
                <span className="text-slate-400 text-xs">Monitor connected calls, disposition splits, and message response times across teams.</span>
              </div>
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                <strong className="text-white block font-semibold mb-1">Pipeline Stage Velocity</strong>
                <span className="text-slate-400 text-xs">Track conversion milestones and identify stagnant stages before leads turn cold.</span>
              </div>
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                <strong className="text-white block font-semibold mb-1">Asynchronous Report Generation</strong>
                <span className="text-slate-400 text-xs">Generate comprehensive tenant exports in background queues without UI lag.</span>
              </div>
            </div>

            <Link
              to="/features/reports"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#00695C] hover:bg-[#00796B] text-white text-sm font-semibold tracking-normal transition-all shadow-md group"
            >
              <span>Explore Reporting</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Right Column: Dark Dashboard Composition */}
          <div className="lg:col-span-7">
            <div className="rounded-[28px] bg-slate-900/90 border border-slate-800 p-6 sm:p-8 shadow-2xl backdrop-blur-sm">
              {/* Dashboard header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-5 border-b border-slate-800 gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#00695C] text-white flex items-center justify-center">
                    <BarChart3 className="w-5 h-5 text-[#80D5C4]" />
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase text-teal-400">OPERATIONAL METRICS</span>
                    <h3 className="text-base font-bold text-white">Lead & Communication Activity</h3>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-md text-xs font-mono bg-teal-900/50 text-[#80D5C4] border border-teal-500/30">
                    REAL-TIME STREAM
                  </span>
                </div>
              </div>

              {/* Metrics Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 py-6 border-b border-slate-800 text-xs">
                <div className="bg-white/5 rounded-xl p-4 border border-white/5">
                  <span className="text-slate-400 block text-[11px] mb-1">Connected Calls</span>
                  <div className="text-2xl font-bold font-mono text-white mb-1">84.2%</div>
                  <span className="text-[10px] text-teal-300 font-mono">Outbound connect rate</span>
                </div>
                <div className="bg-white/5 rounded-xl p-4 border border-white/5">
                  <span className="text-slate-400 block text-[11px] mb-1">First Touch SLA</span>
                  <div className="text-2xl font-bold font-mono text-white mb-1">&lt; 12m</div>
                  <span className="text-[10px] text-emerald-400 font-mono">Average team pacing</span>
                </div>
                <div className="bg-white/5 rounded-xl p-4 border border-white/5">
                  <span className="text-slate-400 block text-[11px] mb-1">Pipeline Velocity</span>
                  <div className="text-2xl font-bold font-mono text-white mb-1">21.4d</div>
                  <span className="text-[10px] text-teal-300 font-mono">Intake to proposal</span>
                </div>
              </div>

              {/* Stylized Visual Bar Distribution */}
              <div className="py-6 border-b border-slate-800 space-y-4">
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span className="font-mono uppercase">LEAD DISPOSITION BREAKDOWN</span>
                  <span className="font-mono text-teal-400">TODAY'S BATCH</span>
                </div>

                <div className="space-y-3 text-xs">
                  <div>
                    <div className="flex justify-between text-slate-300 mb-1">
                      <span>Proposal Review (High Engagement)</span>
                      <span className="font-mono">42%</span>
                    </div>
                    <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-[#00695C] rounded-full" style={{ width: '42%' }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-slate-300 mb-1">
                      <span>Callback Scheduled</span>
                      <span className="font-mono">31%</span>
                    </div>
                    <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-[#80D5C4]" style={{ width: '31%' }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-slate-300 mb-1">
                      <span>New Intake Queue</span>
                      <span className="font-mono">27%</span>
                    </div>
                    <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-slate-600 rounded-full" style={{ width: '27%' }} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Asynchronous Export Queue Notification */}
              <div className="pt-5 flex items-center justify-between text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <DownloadCloud className="w-4 h-4 text-[#80D5C4]" />
                  <span>Scheduled CSV Export: Ready for audited download</span>
                </div>
                <span className="font-mono text-slate-500">ID #EXP-419</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
