import { Shield, Database, UserCheck, Scale, Compass, Headphones, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

export function PricingBuyerTrust() {
  const trustFactors = [
    {
      icon: Database,
      title: 'Tenant Data Boundaries',
      desc: 'All lead records, audio recordings, and interaction histories are isolated by foreign-key tenant_id boundaries on PostgreSQL with zero cross-tenant contamination.',
    },
    {
      icon: Shield,
      title: 'Encryption & Storage Vault',
      desc: 'Audio files are encrypted at rest using AES-256 via Google Cloud KMS. Live softphone audio telemetry is routed strictly over TLS 1.3 encrypted WebRTC.',
    },
    {
      icon: UserCheck,
      title: 'Granular Role-Based Access',
      desc: 'Enforce strict organizational hierarchy between Owner, Team Lead, Telecaller, and Administrator to prevent unauthorized record exports or visibility leaks.',
    },
    {
      icon: Scale,
      title: 'Hard Compliance Controls',
      desc: 'Zero-bypass DNC verification programmatically locks the dial button, while automated timezone checks prevent calls outside permitted local hours.',
    },
    {
      icon: Compass,
      title: 'Structured Implementation',
      desc: 'Dedicated onboarding engineers assist with contact schema mapping, user provisioning, carrier interconnect, and team softphone orientation.',
    },
    {
      icon: Headphones,
      title: 'Production Telephony SLAs',
      desc: 'Continuous infrastructure monitoring across WebRTC signaling, audio media relays, and Redis background queues ensures dialer readiness.',
    },
  ];

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-mono font-semibold uppercase tracking-wider">
            <Shield className="w-3.5 h-3.5 text-[#00695C]" />
            B2B Commercial Diligence
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 tracking-tight">
            Before you choose: Operational safeguards
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Critical infrastructure answers for technical decision-makers, security officers, and operations executives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trustFactors.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:border-slate-300 transition-all space-y-3"
              >
                <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-200/60 flex items-center justify-center text-[#00695C]">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        <div className="p-6 rounded-2xl bg-white border border-slate-200/90 flex flex-col sm:flex-row items-center justify-between gap-4 max-w-4xl mx-auto">
          <div className="flex items-center gap-3">
            <FileText className="w-5 h-5 text-[#00695C] shrink-0" />
            <div className="text-xs sm:text-sm text-slate-700">
              Need a formal Data Processing Agreement (DPA) or security architecture packet?
            </div>
          </div>
          <Link
            to="/security"
            className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold whitespace-nowrap transition-colors"
          >
            Review Security Whitepaper
          </Link>
        </div>
      </div>
    </section>
  );
}
