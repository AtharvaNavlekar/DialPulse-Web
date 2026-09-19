import { MoreHorizontal, Plus, Search, Filter } from 'lucide-react';

export function PipelineMockup() {
  const columns = [
    {
      title: 'New Leads',
      count: 12,
      color: 'bg-teal-500',
      cards: [
        { name: 'Quantum Inc.', contact: 'Alice Chen', value: '$24,000', tags: ['Enterprise'] },
        { name: 'Nova Logistics', contact: 'Bob Smith', value: '$12,500', tags: ['Mid-Market'] },
      ]
    },
    {
      title: 'Contacted',
      count: 8,
      color: 'bg-blue-500',
      cards: [
        { name: 'Apex Systems', contact: 'Sarah Connor', value: '$45,000', tags: ['Enterprise', 'Priority'] },
        { name: 'Nexus Cloud', contact: 'David Lee', value: '$8,000', tags: ['SMB'] },
      ]
    },
    {
      title: 'Qualified',
      count: 4,
      color: 'bg-emerald-500',
      cards: [
        { name: 'Aero Dynamics', contact: 'Michael Chang', value: '$120,000', tags: ['Enterprise', 'Strategic'] },
      ]
    }
  ];

  return (
    <div className="w-full h-full bg-white rounded-2xl md:rounded-3xl shadow-[0_20px_50px_-15px_rgba(0,105,92,0.12)] border border-slate-200 flex flex-col overflow-hidden text-left relative z-10">
      
      {/* Header */}
      <div className="px-5 py-4 border-b border-slate-200 flex flex-wrap items-center justify-between gap-3 bg-slate-50/70 relative z-20">
        <div className="flex items-center gap-3">
          <h3 className="font-display font-bold text-lg md:text-xl text-slate-900">Sales Pipeline</h3>
          <span className="px-2.5 py-0.5 rounded-md bg-teal-50 border border-teal-200 text-xs font-bold text-[#00695C]">
            Q3 Live Pipeline
          </span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg border border-slate-200 bg-white flex items-center justify-center text-slate-500 hover:text-[#00695C] transition-colors cursor-pointer">
            <Search className="w-3.5 h-3.5" />
          </div>
          <div className="w-8 h-8 rounded-lg border border-slate-200 bg-white flex items-center justify-center text-slate-500 hover:text-[#00695C] transition-colors cursor-pointer">
            <Filter className="w-3.5 h-3.5" />
          </div>
          <button className="px-3.5 py-1.5 rounded-lg bg-[#00695C] text-white text-xs md:text-sm font-bold flex items-center gap-1.5 shadow-2xs hover:bg-[#004D40] transition-colors">
            <Plus className="w-3.5 h-3.5" />
            <span>Add Lead</span>
          </button>
        </div>
      </div>

      {/* Board */}
      <div className="flex-1 flex bg-slate-50/40 p-4 md:p-6 gap-4 md:gap-5 overflow-x-auto relative">
        {columns.map((col, i) => (
          <div key={i} className="flex-1 flex flex-col min-w-[200px] max-w-[280px] relative z-10">
            {/* Column Header */}
            <div className="flex items-center justify-between mb-3 px-1">
              <div className="flex items-center gap-2">
                <div className={`w-2.5 h-2.5 rounded-full ${col.color}`} />
                <span className="font-bold text-xs text-slate-700 uppercase tracking-wide">{col.title}</span>
                <span className="text-[11px] font-bold text-slate-500 bg-slate-200/60 px-1.5 py-0.2 rounded-full">{col.count}</span>
              </div>
              <MoreHorizontal className="w-4 h-4 text-slate-400 cursor-pointer" />
            </div>

            {/* Cards */}
            <div className="flex flex-col gap-3 overflow-y-auto">
              {col.cards.map((card, j) => (
                <div key={j} className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs hover:shadow-sm hover:border-teal-300 transition-all cursor-pointer group">
                  <div className="flex justify-between items-start mb-2.5">
                    <div className="font-bold text-sm text-slate-900 group-hover:text-[#00695C] transition-colors">{card.name}</div>
                    <div className="text-xs font-mono font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-100">{card.value}</div>
                  </div>
                  <div className="text-xs text-slate-500 font-medium mb-3">{card.contact}</div>
                  <div className="flex items-center gap-1.5 flex-wrap">
                    {card.tags.map((tag, k) => (
                      <span key={k} className="px-2 py-0.5 rounded bg-slate-100 text-[10px] font-semibold text-slate-600">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
              <div className="h-10 border border-dashed border-slate-300 rounded-xl flex items-center justify-center text-slate-500 hover:text-[#00695C] hover:border-teal-400 hover:bg-teal-50/40 transition-colors cursor-pointer font-medium text-xs gap-1">
                <Plus className="w-3.5 h-3.5" />
                <span>Quick Add</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
