import { useState } from 'react';
import { Layers, CheckCircle2, Shield, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

interface MatrixEntry {
  solutionName: string;
  category: string;
  modules: {
    leads: boolean;
    calls: boolean;
    messages: boolean;
    tickets: boolean;
    teams: boolean;
    reports: boolean;
    compliance: boolean;
    ai: boolean;
    imports: boolean;
    admin: boolean;
  };
}

const matrixEntries: MatrixEntry[] = [
  {
    solutionName: '01 Lead Operations',
    category: 'Ingestion & Pipeline',
    modules: { leads: true, calls: true, messages: false, tickets: false, teams: true, reports: true, compliance: true, ai: false, imports: true, admin: false }
  },
  {
    solutionName: '02 Sales Team Operations',
    category: 'Hierarchy & Presence',
    modules: { leads: true, calls: true, messages: false, tickets: false, teams: true, reports: true, compliance: false, ai: false, imports: false, admin: true }
  },
  {
    solutionName: '03 Customer Communication',
    category: 'WebRTC & Omnichannel',
    modules: { leads: true, calls: true, messages: true, tickets: false, teams: false, reports: false, compliance: true, ai: false, imports: false, admin: false }
  },
  {
    solutionName: '04 Follow-Up Control',
    category: 'Cadence & Dispositions',
    modules: { leads: true, calls: true, messages: true, tickets: false, teams: true, reports: true, compliance: true, ai: false, imports: false, admin: false }
  },
  {
    solutionName: '05 Performance Visibility',
    category: 'Async Reporting',
    modules: { leads: true, calls: true, messages: false, tickets: false, teams: true, reports: true, compliance: false, ai: false, imports: false, admin: false }
  },
  {
    solutionName: '06 Communication Compliance',
    category: 'Policy & DNC Lock',
    modules: { leads: true, calls: true, messages: true, tickets: false, teams: false, reports: true, compliance: true, ai: false, imports: false, admin: true }
  },
  {
    solutionName: '07 Customer Operations',
    category: 'Unified Customer 360',
    modules: { leads: true, calls: true, messages: true, tickets: true, teams: true, reports: true, compliance: true, ai: true, imports: true, admin: true }
  },
  {
    solutionName: '08 AI Sales Assistance',
    category: 'Contextual AI',
    modules: { leads: true, calls: true, messages: true, tickets: false, teams: false, reports: false, compliance: false, ai: true, imports: false, admin: false }
  }
];

const moduleColumns = [
  { key: 'leads', label: 'Leads' },
  { key: 'calls', label: 'Calls' },
  { key: 'messages', label: 'Messages' },
  { key: 'tickets', label: 'Tickets' },
  { key: 'teams', label: 'Teams' },
  { key: 'reports', label: 'Reports' },
  { key: 'compliance', label: 'Compliance' },
  { key: 'ai', label: 'AI' },
  { key: 'imports', label: 'Imports' },
  { key: 'admin', label: 'Admin' }
];

export function SolutionsProductMatrix() {
  const [selectedSolution, setSelectedSolution] = useState<string | null>(null);

  return (
    <div className="w-full bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 lg:p-12 shadow-sm">
      
      <div className="max-w-3xl mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-teal-50 border border-teal-200 text-[#00695C] text-xs font-mono font-semibold uppercase tracking-wider mb-3">
          <Layers className="w-3.5 h-3.5" />
          Cross-Functional Solution Matrix
        </div>
        <h2 className="text-2xl sm:text-4xl font-display font-bold text-slate-900 tracking-tight">
          How Solutions Map to Product Modules
        </h2>
        <p className="text-slate-600 text-base sm:text-lg mt-2 leading-relaxed">
          Every solution draws upon specific, verified product capabilities. Click any solution row below to highlight which platform modules assemble to deliver that workflow.
        </p>
      </div>

      <div className="w-full overflow-x-auto">
        <table className="w-full text-left border-collapse text-xs">
          <thead>
            <tr className="border-b border-slate-200 text-[11px] font-mono uppercase tracking-wider text-slate-500 bg-slate-50/70">
              <th className="py-3 px-4 font-bold">Solution / Workflow</th>
              <th className="py-3 px-3">Classification</th>
              {moduleColumns.map((col) => (
                <th key={col.key} className="py-3 px-2 text-center font-bold">
                  {col.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 font-sans">
            {matrixEntries.map((row, idx) => {
              const isHighlighted = selectedSolution === row.solutionName;
              return (
                <tr 
                  key={idx}
                  onClick={() => setSelectedSolution(isHighlighted ? null : row.solutionName)}
                  className={cn(
                    'transition-colors cursor-pointer',
                    isHighlighted ? 'bg-teal-50/80' : 'hover:bg-slate-50/80'
                  )}
                >
                  <td className="py-3 px-4 font-bold text-slate-900 whitespace-nowrap">
                    {row.solutionName}
                  </td>
                  <td className="py-3 px-3 text-[11px] font-mono text-slate-500 whitespace-nowrap">
                    {row.category}
                  </td>
                  {moduleColumns.map((col) => {
                    const isSupported = row.modules[col.key as keyof typeof row.modules];
                    return (
                      <td key={col.key} className="py-3 px-2 text-center">
                        {isSupported ? (
                          <div className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-teal-100 text-[#00695C]">
                            <CheckCircle2 className="w-3.5 h-3.5 stroke-[2.5]" />
                          </div>
                        ) : (
                          <span className="text-slate-200">•</span>
                        )}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="mt-6 pt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono text-slate-500">
        <div className="flex items-center gap-2">
          <Shield className="w-3.5 h-3.5 text-[#00695C]" />
          <span>Interactive Architectural Mapping • Strict tenant-level execution</span>
        </div>
        <Link
          to="/product"
          className="inline-flex items-center gap-1.5 font-semibold text-[#00695C] hover:text-[#004D40] transition-colors"
        >
          <span>Explore Product Module Architecture</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

    </div>
  );
}
