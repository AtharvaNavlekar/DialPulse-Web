import React from 'react';
import { BarChart3, ArrowUpRight, Clock, Target, Users } from 'lucide-react';

export function AnalyticsMockup() {
  return (
    <div className="w-full bg-white rounded-2xl md:rounded-3xl p-5 md:p-7 border border-slate-200 shadow-[0_20px_50px_-15px_rgba(0,105,92,0.12)] relative z-10 overflow-hidden text-left">
      
      {/* Header */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-teal-50 rounded-xl flex items-center justify-center text-[#00695C] border border-teal-200">
            <BarChart3 className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-slate-900 font-bold text-lg md:text-xl">Conversion Intelligence</h3>
            <p className="text-slate-500 text-xs font-medium">Real-time performance metrics & connect rates</p>
          </div>
        </div>
        <div className="px-3 py-1.5 bg-slate-50 rounded-lg border border-slate-200 text-xs font-bold text-slate-700 flex items-center gap-2">
          Last 30 Days
        </div>
      </div>

      {/* Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 mb-6">
        {[
          { label: 'Total Calls', value: '14.2k', trend: '+24%', color: 'text-teal-700', bg: 'bg-teal-50', icon: Clock },
          { label: 'Connect Rate', value: '38.5%', trend: '+4.2%', color: 'text-blue-700', bg: 'bg-blue-50', icon: Target },
          { label: 'Meetings Booked', value: '842', trend: '+12%', color: 'text-emerald-700', bg: 'bg-emerald-50', icon: Users },
        ].map((metric, i) => (
          <div key={i} className="bg-slate-50/70 rounded-xl p-4 border border-slate-200 hover:border-teal-300 transition-colors">
            <div className="flex justify-between items-start mb-3">
              <div className={`w-8 h-8 rounded-lg ${metric.bg} ${metric.color} flex items-center justify-center`}>
                <metric.icon className="w-4 h-4" />
              </div>
              <div className="flex items-center gap-0.5 text-[11px] font-bold text-emerald-800 bg-emerald-100/70 px-2 py-0.5 rounded-full">
                <ArrowUpRight className="w-3 h-3" />
                {metric.trend}
              </div>
            </div>
            <div className="text-2xl md:text-3xl font-display font-extrabold text-slate-900 mb-0.5 tracking-tight">{metric.value}</div>
            <div className="text-xs font-medium text-slate-500">{metric.label}</div>
          </div>
        ))}
      </div>

      {/* Main Chart Area */}
      <div className="bg-slate-50/50 rounded-xl p-4 md:p-5 border border-slate-200">
        <div className="flex items-center justify-between mb-5">
          <span className="text-xs font-bold text-slate-800 uppercase tracking-wide">Conversion Velocity</span>
          <div className="flex items-center gap-4 text-xs font-semibold">
            <div className="flex items-center gap-1.5 text-teal-800">
              <div className="w-2 h-2 rounded-full bg-[#00695C]" />
              <span>Inbound</span>
            </div>
            <div className="flex items-center gap-1.5 text-blue-800">
              <div className="w-2 h-2 rounded-full bg-blue-500" />
              <span>Outbound</span>
            </div>
          </div>
        </div>
        
        <div className="h-40 flex items-end justify-between gap-1.5 md:gap-2 relative pt-2">
          {/* Grid lines */}
          <div className="absolute inset-0 flex flex-col justify-between opacity-30 pointer-events-none">
             <div className="w-full h-px border-b border-dashed border-slate-300" />
             <div className="w-full h-px border-b border-dashed border-slate-300" />
             <div className="w-full h-px border-b border-dashed border-slate-300" />
          </div>

          {[40, 55, 45, 70, 65, 85, 75, 90, 80, 100, 85, 95].map((h, i) => (
            <div key={i} className="flex-1 flex flex-col gap-1 justify-end h-full group relative z-10">
              <div 
                className="w-full bg-blue-300/70 rounded-t-xs transition-opacity"
                style={{ height: `${h * 0.4}%` }}
              />
              <div 
                className="w-full bg-[#00695C] rounded-t-xs hover:bg-[#004D40] transition-all"
                style={{ height: `${h * 0.7}%` }}
              />
            </div>
          ))}
        </div>
        <div className="flex justify-between text-[10px] text-slate-400 font-mono mt-3 px-1">
          <span>Week 1</span>
          <span>Week 2</span>
          <span>Week 3</span>
          <span>Week 4</span>
        </div>
      </div>

    </div>
  );
}
