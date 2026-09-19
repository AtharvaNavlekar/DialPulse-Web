import { Server, Shield, Layers, Clock, Lock, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { trackEvent } from '@/lib/analytics';

export function PricingEnterprise() {
  const enterpriseSpecs = [
    {
      title: 'Dedicated Tenant Partition',
      desc: 'Complete database separation on PostgreSQL with isolated connection pools and custom KMS encryption keys.',
    },
    {
      title: 'Private In-Tenant AI Perimeter',
      desc: 'Speech-to-text transcription and post-call summaries run in an isolated runtime with zero public model training.',
    },
    {
      title: 'Custom Telecom Trunk Interconnect',
      desc: 'Bring your existing SIP trunking, regional telecom PBXs, or negotiated carrier minutes with zero platform markups.',
    },
    {
      title: 'Granular SSO & Directory Sync',
      desc: 'SAML 2.0 / Okta integration, custom role hierarchies, and automated SCIM user provisioning.',
    },
    {
      title: '1-Hour Priority Incident SLA',
      desc: 'Guaranteed 24/7 technical escalation pathways backed by dedicated solution engineering personnel.',
    },
    {
      title: 'Regulatory & Audit Export Support',
      desc: 'Continuous tamper-evident audit logging, legal discovery archives, and signed Data Processing Agreements (DPA).',
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-slate-950 text-white relative overflow-hidden border-b border-slate-800">
      {/* Subtle technical background grid */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,105,92,0.15),transparent_50%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Copy & Value */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-400 text-xs font-mono font-semibold uppercase tracking-wider">
              <Server className="w-3.5 h-3.5" />
              Custom For Your Operation
            </div>

            <h2 className="text-3xl sm:text-5xl font-display font-bold tracking-tight text-white leading-[1.08]">
              Enterprise-grade isolation for mission-critical telecalling.
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              When standard multi-tenant parameters cannot satisfy your organizational risk tolerances, DialPulse engineers tailored single-tenant partitions and dedicated carrier interconnections.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {enterpriseSpecs.map((spec, i) => (
                <div key={i} className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1.5">
                  <div className="flex items-center gap-2 text-teal-400 text-sm font-bold">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    <span>{spec.title}</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {spec.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                to="/contact"
                onClick={() => trackEvent('enterprise_cta_click', { source: 'pricing_enterprise_section' })}
                className="inline-flex items-center gap-2 h-12 px-7 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 text-sm font-bold transition-all shadow-md active:scale-[0.99]"
              >
                <span>Talk to Sales Architecture</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/security"
                className="inline-flex items-center gap-2 h-12 px-6 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-300 text-sm font-semibold transition-all"
              >
                <Shield className="w-4 h-4 text-slate-400" />
                <span>Review Security Architecture</span>
              </Link>
            </div>
          </div>

          {/* Right Column: High Fidelity Infrastructure Card */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl bg-slate-900 border border-slate-800 p-6 sm:p-8 shadow-2xl relative">
              <div className="flex items-center justify-between pb-6 border-b border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400">
                    <Lock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white">Enterprise Boundary Profile</div>
                    <div className="text-[11px] font-mono text-teal-400">STATUS: PROVISIONED & ISOLATED</div>
                  </div>
                </div>
                <span className="text-[11px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-teal-900/40 text-teal-300 border border-teal-800">
                  Custom SLA
                </span>
              </div>

              <div className="space-y-4 my-6">
                <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800/80 flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-400">Database Partition:</span>
                  <span className="text-white font-bold">PostgreSQL Single-Tenant</span>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800/80 flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-400">Audio KMS Key:</span>
                  <span className="text-teal-400 font-bold">Customer-Managed (BYOK)</span>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800/80 flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-400">Telephony Routing:</span>
                  <span className="text-white font-bold">Dedicated SIP Interconnect</span>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800/80 flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-400">Incident Escalation:</span>
                  <span className="text-white font-bold">1-Hour P1 Response SLA</span>
                </div>
              </div>

              {/* Technical Code Snippet */}
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800/80 font-mono text-[11px] text-slate-400 space-y-1">
                <div className="text-teal-500">{'// DialPulse Enterprise Tenant Topology'}</div>
                <div>{`schema "organization_partition" {`}</div>
                <div className="pl-4 text-slate-300">{`data_isolation   = "isolated_schema"`}</div>
                <div className="pl-4 text-slate-300">{`webrtc_cluster   = "dedicated_turn"`}</div>
                <div className="pl-4 text-slate-300">{`ai_perimeter     = "in_tenant_only"`}</div>
                <div className="pl-4 text-slate-300">{`export_retention = "365_days"`}</div>
                <div>{`}`}</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
