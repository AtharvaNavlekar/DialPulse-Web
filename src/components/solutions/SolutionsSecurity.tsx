import { Shield, Lock, Database, KeyRound, FileCheck2, Cpu, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export function SolutionsSecurity() {
  const securityPillars = [
    {
      title: 'Tenant Database Isolation',
      desc: 'Every customer interaction, lead, and call log is strictly scoped by tenant_id. Row-level security and strict foreign key isolation ensure zero cross-tenant data leakage.',
      icon: Database,
      badge: 'POSTGRESQL MULTI-TENANT'
    },
    {
      title: 'Role-Based Access Control',
      desc: 'Owners, Team Leads, and Telecallers operate within precise permission envelopes. Telecallers cannot view unauthorized queues or export raw contact databases.',
      icon: Lock,
      badge: 'RBAC ENFORCEMENT'
    },
    {
      title: 'Encrypted Telephony Vault',
      desc: 'Carrier credentials and SIP trunks (Twilio / Telnyx / Meta) are encrypted at rest using AES-256 with tenant-scoped encryption keys.',
      icon: KeyRound,
      badge: 'AT-REST ENCRYPTION'
    },
    {
      title: 'Immutable Compliance Logging',
      desc: 'Every call placement, DNC check, quiet-hour lockout, and CSV export generates a permanent cryptographic audit event recording actor, timestamp, and IP.',
      icon: FileCheck2,
      badge: 'AUDIT TRAIL'
    },
    {
      title: 'Private In-Tenant AI Boundary',
      desc: 'Call transcripts and speech-to-text models process strictly within your private tenant perimeter. Your confidential voice data is never used to train global LLM foundation models.',
      icon: Cpu,
      badge: 'ZERO MODEL TRAINING'
    },
    {
      title: 'Asynchronous Job Queues',
      desc: 'Large analytical queries, bulk CSV uploads, and audio transcoders execute on detached worker processes, protecting web application uptime from denial of service.',
      icon: Shield,
      badge: 'ISOLATED WORKERS'
    }
  ];

  return (
    <div className="w-full bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 lg:p-12 shadow-sm">
      
      <div className="max-w-3xl mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-teal-50 border border-teal-200 text-[#00695C] text-xs font-mono font-semibold uppercase tracking-wider mb-3">
          <Shield className="w-3.5 h-3.5" />
          Enterprise Data & Security Architecture
        </div>
        <h2 className="text-2xl sm:text-4xl font-display font-bold text-slate-900 tracking-tight">
          Enterprise Governance & Tenant Security Boundaries
        </h2>
        <p className="text-slate-600 text-base sm:text-lg mt-2 leading-relaxed">
          Operational efficiency means nothing if customer data is compromised. DialPulse applies defense-in-depth isolation across storage, compute, and third-party gateways.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {securityPillars.map((pillar, i) => {
          const Icon = pillar.icon;
          return (
            <div 
              key={i} 
              className="p-6 rounded-2xl bg-slate-50/70 border border-slate-200/80 hover:bg-slate-50 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-[#00695C]">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider">
                    {pillar.badge}
                  </span>
                </div>
                <h3 className="text-base font-bold font-display text-slate-900 mb-2">
                  {pillar.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-sans">
                  {pillar.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center gap-1.5 text-[11px] font-mono text-[#00695C] font-semibold">
                <CheckCircle className="w-3.5 h-3.5" />
                <span>Verified System Invariant</span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-8 p-5 rounded-2xl bg-teal-50/70 border border-teal-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono">
        <div className="text-slate-700">
          <span className="font-bold text-[#00695C]">Security Architecture:</span> Multi-tenant isolation boundaries, structured data retention controls, and encrypted communication channels.
        </div>
        <Link
          to="/security"
          className="inline-flex items-center gap-1.5 font-bold text-[#00695C] hover:text-[#004D40] transition-colors shrink-0"
        >
          <span>View Security Architecture & Controls</span>
          <span>→</span>
        </Link>
      </div>

    </div>
  );
}
