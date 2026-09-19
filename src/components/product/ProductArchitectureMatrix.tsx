import { CheckCircle2, Shield, Lock, Layers, Database, Clock } from 'lucide-react';
import { cn } from '@/lib/utils';

interface MatrixRow {
  capability: string;
  category: string;
  status: 'IMPLEMENTED' | 'CONFIRMED' | 'PLANNED';
  truthStatement: string;
  isolationBoundary: string;
}

const matrixData: MatrixRow[] = [
  {
    capability: 'Lead Ingestion & Custom Schema',
    category: 'Lead Management',
    status: 'IMPLEMENTED',
    truthStatement: 'Batch CSV ingestion with field auto-mapping, deduplication, and custom property schemas.',
    isolationBoundary: 'Tenant-scoped PostgreSQL schema partition'
  },
  {
    capability: 'Multi-Stage Sales Pipelines',
    category: 'Lead Management',
    status: 'IMPLEMENTED',
    truthStatement: 'Configurable pipeline stages with Kanban drag-and-drop and tabular filtering.',
    isolationBoundary: 'Strict tenant_id filtering on all stage queries'
  },
  {
    capability: 'WebRTC Browser Softphone',
    category: 'Telephony',
    status: 'IMPLEMENTED',
    truthStatement: 'In-browser one-click outbound dialing with live duration, mute, hold, and disposition logging.',
    isolationBoundary: 'Per-tenant telephony credential mapping'
  },
  {
    capability: 'Call Audio Recording & Storage',
    category: 'Telephony',
    status: 'IMPLEMENTED',
    truthStatement: 'Audio recording storage with playback directly in lead profile history.',
    isolationBoundary: 'Encrypted object storage partitioned by tenant ID'
  },
  {
    capability: 'Omnichannel Messaging (SMS / WhatsApp / Email)',
    category: 'Messaging',
    status: 'IMPLEMENTED',
    truthStatement: 'Unified conversation threading with message dispatch queues and delivery status receipts.',
    isolationBoundary: 'Isolated message queue routing & webhook handling'
  },
  {
    capability: 'Pre-Flight DNC Verification',
    category: 'Compliance',
    status: 'IMPLEMENTED',
    truthStatement: 'Mandatory pre-call and pre-message query blocking numbers on Do-Not-Call registries.',
    isolationBoundary: 'Tenant DNC list + regional regulatory registries'
  },
  {
    capability: 'Timezone-Aware Quiet Hours',
    category: 'Compliance',
    status: 'IMPLEMENTED',
    truthStatement: 'Automatic detection of recipient timezone with hard dialer lock outside legal calling windows.',
    isolationBoundary: 'Area code & geo-coordinate resolution engine'
  },
  {
    capability: 'Role-Based Access Control (RBAC)',
    category: 'Team Operations',
    status: 'IMPLEMENTED',
    truthStatement: 'Hierarchy tiering (Tenant Owner, Team Lead/Supervisor, Telecaller/Agent) with strict permission limits.',
    isolationBoundary: 'Role validation middleware on every API endpoint'
  },
  {
    capability: 'Tenant-Isolated AI Summarization',
    category: 'AI Assistance',
    status: 'IMPLEMENTED',
    truthStatement: 'Automated call transcription and structured bullet summaries without sharing data between tenants.',
    isolationBoundary: 'Contextual prompt isolation; zero cross-tenant learning'
  },
  {
    capability: 'Asynchronous Reporting Engine',
    category: 'Analytics',
    status: 'IMPLEMENTED',
    truthStatement: 'Background worker generation of large CSV and analytical audits without blocking web UI threads.',
    isolationBoundary: 'Dedicated background worker queue per tenant'
  },
  {
    capability: 'Automated Round-Robin Routing',
    category: 'Automation',
    status: 'CONFIRMED',
    truthStatement: 'Rule-based lead distribution based on agent availability, skill profile, or pipeline quota.',
    isolationBoundary: 'Tenant worker state engine'
  },
  {
    capability: 'External CRM Two-Way Sync',
    category: 'Integrations',
    status: 'PLANNED',
    truthStatement: 'Bi-directional synchronization connectors for external enterprise legacy systems.',
    isolationBoundary: 'Scoped OAuth token vaults per external endpoint'
  }
];

export function ProductArchitectureMatrix() {
  return (
    <div className="w-full bg-slate-900 text-white rounded-3xl p-6 sm:p-8 lg:p-12 border border-slate-800 shadow-2xl relative overflow-hidden">
      
      {/* Background highlight */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(0,105,92,0.12),transparent_70%)] pointer-events-none" />

      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 pb-6 border-b border-slate-800 relative z-10">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-teal-950 border border-teal-500/30 text-teal-400 text-xs font-mono font-medium tracking-wide uppercase mb-3">
            <Shield className="w-3.5 h-3.5" />
            Product Truth & Capability Classification
          </div>
          <h3 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">
            Verified Architectural Matrix
          </h3>
          <p className="text-slate-400 text-sm sm:text-base mt-1 max-w-xl">
            In compliance with our product truth principles, all features are classified strictly by verified status. No fabricated statistics or hypothetical benchmarks.
          </p>
        </div>

        <div className="flex flex-wrap gap-2 text-xs font-mono">
          <span className="px-2.5 py-1 rounded bg-teal-950 text-teal-300 border border-teal-500/30 font-bold">
            [IMPLEMENTED] Live in Platform
          </span>
          <span className="px-2.5 py-1 rounded bg-blue-950 text-blue-300 border border-blue-500/30 font-bold">
            [CONFIRMED] Architectural Spec
          </span>
          <span className="px-2.5 py-1 rounded bg-amber-950 text-amber-300 border border-amber-500/30 font-bold">
            [PLANNED] Roadmap
          </span>
        </div>
      </div>

      {/* Table representation */}
      <div className="w-full overflow-x-auto relative z-10">
        <table className="w-full text-left text-sm text-slate-300 border-collapse">
          <thead>
            <tr className="border-b border-slate-800 text-xs font-mono uppercase tracking-wider text-slate-400">
              <th className="py-3 px-4">Platform Capability</th>
              <th className="py-3 px-4">Category</th>
              <th className="py-3 px-4">Status</th>
              <th className="py-3 px-4">Truth Statement</th>
              <th className="py-3 px-4">Tenant Isolation Boundary</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/60 font-sans">
            {matrixData.map((row, idx) => (
              <tr key={idx} className="hover:bg-slate-800/40 transition-colors">
                <td className="py-3.5 px-4 font-bold text-white whitespace-nowrap">
                  {row.capability}
                </td>
                <td className="py-3.5 px-4 text-xs font-mono text-slate-400 whitespace-nowrap">
                  {row.category}
                </td>
                <td className="py-3.5 px-4 whitespace-nowrap">
                  <span className={cn(
                    'text-[11px] font-mono font-bold px-2 py-0.5 rounded border inline-block',
                    row.status === 'IMPLEMENTED' && 'bg-teal-950 text-teal-300 border-teal-500/30',
                    row.status === 'CONFIRMED' && 'bg-blue-950 text-blue-300 border-blue-500/30',
                    row.status === 'PLANNED' && 'bg-amber-950 text-amber-300 border-amber-500/30'
                  )}>
                    [{row.status}]
                  </span>
                </td>
                <td className="py-3.5 px-4 text-xs text-slate-300 max-w-sm">
                  {row.truthStatement}
                </td>
                <td className="py-3.5 px-4 text-xs font-mono text-teal-300/80 whitespace-nowrap">
                  {row.isolationBoundary}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-8 pt-6 border-t border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono text-slate-400 relative z-10">
        <div className="flex items-center gap-2">
          <Lock className="w-4 h-4 text-teal-400" />
          <span>Multi-Tenant CRM SaaS • Strict tenant_id foreign-key isolation on all database transactions</span>
        </div>
        <div>
          <span>Zero Fabricated Benchmarks • Audited Specifications</span>
        </div>
      </div>

    </div>
  );
}
