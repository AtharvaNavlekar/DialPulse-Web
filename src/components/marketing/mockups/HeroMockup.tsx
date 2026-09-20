import React from 'react';
import { 
  Users, 
  Phone, 
  ShieldCheck, 
  ArrowUpRight, 
  MoreHorizontal, 
  Activity, 
  ChevronDown,
  Calendar,
  CheckCircle2
} from 'lucide-react';

export function HeroMockup() {
  return (
    <div className="w-full h-full relative z-10 flex items-center justify-center">
      {/* MAIN DASHBOARD WINDOW - Clean Light Theme */}
      <div className="w-full max-w-full bg-white rounded-2xl md:rounded-3xl shadow-[0_20px_50px_-12px_rgba(0,105,92,0.14)] border border-slate-200 flex flex-col overflow-hidden text-left relative z-20">
        
        {/* Browser-like Header */}
        <div className="h-10 md:h-12 bg-slate-100/90 border-b border-slate-200 flex items-center px-4 md:px-5 gap-4 relative z-10">
          <div className="flex gap-2 shrink-0">
            <div className="w-3 h-3 rounded-full bg-rose-400" />
            <div className="w-3 h-3 rounded-full bg-amber-400" />
            <div className="w-3 h-3 rounded-full bg-emerald-400" />
          </div>
          <div className="flex-1 flex justify-center">
             <div className="h-6 md:h-7 px-4 bg-white rounded-md border border-slate-200 flex items-center justify-center text-[11px] md:text-xs font-mono font-medium text-slate-600 shadow-2xs truncate max-w-xs">
               app.dialpulse.com/workspace
             </div>
          </div>
          <div className="w-12 hidden md:block" />
        </div>

        {/* Dashboard Content */}
        <div className="p-4 sm:p-6 md:p-7 flex flex-col gap-5 md:gap-6 bg-white relative">
          
          {/* Top Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 relative z-10">
            <div>
              <h3 className="text-xl md:text-2xl font-display font-extrabold text-slate-900 tracking-tight">
                Morning, Sarah
              </h3>
              <p className="text-xs md:text-sm text-slate-500 font-medium">
                Here is your live team pipeline and compliance status.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 text-xs font-semibold text-slate-700 bg-slate-50 shadow-2xs">
                <Calendar className="w-3.5 h-3.5 text-[#00695C]" />
                <span>Today, Live</span>
                <ChevronDown className="w-3 h-3 text-slate-400" />
              </div>
            </div>
          </div>

          {/* Metrics Row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 relative z-10">
            {[
              { label: 'Active Leads', value: '1,248', trend: '+12%', icon: Users, color: 'text-teal-700', bg: 'bg-teal-50', border: 'border-teal-100' },
              { label: 'Calls Made', value: '432', trend: '+5%', icon: Phone, color: 'text-blue-700', bg: 'bg-blue-50', border: 'border-blue-100' },
              { label: 'Compliance Checks', value: '100%', trend: 'Verified', icon: ShieldCheck, color: 'text-emerald-700', bg: 'bg-emerald-50', border: 'border-emerald-100' },
            ].map((metric, i) => (
              <div 
                key={i} 
                className={`bg-slate-50/70 rounded-xl md:rounded-2xl border ${metric.border} p-3.5 md:p-4 shadow-2xs relative overflow-hidden transition-all hover:border-slate-300`}
              >
                <div className="flex items-center justify-between mb-2">
                   <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">{metric.label}</span>
                   <div className={`w-8 h-8 rounded-lg ${metric.bg} flex items-center justify-center ${metric.color}`}>
                     <metric.icon className="w-4 h-4" />
                   </div>
                </div>
                <div className="flex items-baseline justify-between gap-2">
                  <span className="text-2xl md:text-3xl font-display font-extrabold text-slate-900 tracking-tight">
                    {metric.value}
                  </span>
                  <span className={`inline-flex items-center gap-0.5 text-[11px] font-bold px-2 py-0.5 rounded-full ${
                    metric.trend === 'Passed' || metric.trend.startsWith('+') 
                      ? 'bg-emerald-100/70 text-emerald-800' 
                      : 'bg-amber-100/70 text-amber-800'
                  }`}>
                    {metric.trend.startsWith('+') && <ArrowUpRight className="w-3 h-3" />}
                    {metric.trend}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Charts & Activity */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 relative z-10">
            {/* Outbound Volume Bar Chart */}
            <div className="md:col-span-2 bg-slate-50/60 rounded-xl md:rounded-2xl border border-slate-200 p-4 md:p-5 flex flex-col justify-between">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2.5">
                   <div className="w-7 h-7 rounded-lg bg-[#00695C]/10 text-[#00695C] flex items-center justify-center">
                     <Activity className="w-4 h-4" />
                   </div>
                   <h4 className="font-bold text-slate-800 text-sm tracking-tight">Outbound Call Rhythm</h4>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-600 bg-white px-2.5 py-1 rounded-md border border-slate-200 shadow-2xs">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Real-time</span>
                </div>
              </div>

              {/* Bar visualization */}
              <div className="h-28 md:h-32 flex items-end gap-2 pt-2 px-1 relative">
                {/* Horizontal guide lines */}
                <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-40">
                  <div className="w-full h-px border-b border-dashed border-slate-200" />
                  <div className="w-full h-px border-b border-dashed border-slate-200" />
                  <div className="w-full h-px border-b border-dashed border-slate-200" />
                </div>

                {[45, 65, 50, 85, 60, 92, 75, 70, 90, 100, 80, 60].map((h, i) => (
                  <div key={i} className="flex-1 bg-slate-200/50 rounded-t-sm md:rounded-t-md relative h-full flex items-end">
                    <div 
                      className="w-full bg-gradient-to-t from-[#00695C] to-[#0D9488] rounded-t-sm md:rounded-t-md transition-all hover:brightness-110 shadow-2xs"
                      style={{ height: `${h}%` }}
                    />
                  </div>
                ))}
              </div>
              <div className="flex justify-between text-[10px] text-slate-400 font-mono mt-2 px-1">
                <span>9 AM</span>
                <span>12 PM</span>
                <span>3 PM</span>
                <span>6 PM</span>
              </div>
            </div>
            
            {/* Live Feed Column */}
            <div className="md:col-span-1 bg-slate-50/60 rounded-xl md:rounded-2xl border border-slate-200 p-0 flex flex-col overflow-hidden">
               <div className="p-3.5 border-b border-slate-200 flex items-center justify-between bg-white/70">
                 <h4 className="font-bold text-slate-800 text-xs md:text-sm">Live Feed</h4>
                 <span className="text-[11px] font-bold text-[#00695C] hover:underline cursor-pointer">View All</span>
               </div>
               <div className="flex flex-col flex-1 divide-y divide-slate-100 overflow-hidden text-left">
                 {[
                   { name: 'Acme Corp', action: 'Lead Assigned', time: '2m ago', color: 'bg-teal-500' },
                   { name: 'TechFlow', action: 'Call Completed', time: '14m ago', color: 'bg-blue-500' },
                   { name: 'GlobalNet', action: 'DNC Verified', time: '1h ago', color: 'bg-emerald-500' },
                   { name: 'Stark Ind', action: 'Stage: Won', time: '2h ago', color: 'bg-indigo-500' },
                 ].map((act, i) => (
                   <div key={i} className="px-3.5 py-2.5 flex items-center justify-between hover:bg-white transition-colors">
                      <div className="flex items-center gap-2.5 min-w-0">
                        <div className={`w-2 h-2 rounded-full shrink-0 ${act.color}`} />
                        <div className="truncate">
                           <div className="text-xs font-bold text-slate-800 truncate">{act.name}</div>
                           <div className="text-[10px] text-slate-500 truncate">{act.action}</div>
                        </div>
                      </div>
                      <span className="text-[10px] font-mono text-slate-400 shrink-0 ml-2">{act.time}</span>
                   </div>
                 ))}
               </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
