import React from 'react';
import { Link } from 'react-router-dom';
import { Lock, Shield, FileText, HelpCircle, ArrowUpRight } from 'lucide-react';

const TRUST_RESOURCES = [
  {
    title: 'Security Architecture',
    href: '/security',
    label: '/security',
    icon: Lock,
    description: 'Tenant isolation, RBAC hierarchies, session token rotation, staff impersonation governance, and audit logging.',
    badge: 'TECHNICAL DEEP DIVE',
  },
  {
    title: 'Privacy Policy',
    href: '/privacy',
    label: '/privacy',
    icon: Shield,
    description: 'Clear disclosures on customer data retention, telephony audio streams, AI processing scopes, and subprocessors.',
    badge: 'DATA PROTECTION',
  },
  {
    title: 'Terms of Service',
    href: '/terms',
    label: '/terms',
    icon: FileText,
    description: 'Operational responsibilities, usage policies, tenant ownership, and communication safeguard boundaries.',
    badge: 'LEGAL TERMS',
  },
  {
    title: 'Platform FAQ',
    href: '/faq',
    label: '/faq',
    icon: HelpCircle,
    description: 'Answers to common questions regarding multi-tenant hosting, telephony integration, and role configurations.',
    badge: 'KNOWLEDGE BASE',
  },
];

export const ResourcesTrustSecurity: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-[#0F172A] text-white border-b border-slate-800 relative overflow-hidden">
      {/* Subtle background radial gradient */}
      <div 
        className="absolute inset-0 bg-[radial-gradient(#80D5C4_1px,transparent_1px)] [background-size:32px_32px] opacity-5 pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#80D5C4]" />
            <span className="text-xs font-mono uppercase tracking-widest text-[#80D5C4] font-semibold">
              TRUST & GOVERNANCE
            </span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.12] mb-5">
            Some questions deserve <br />
            <span className="text-[#80D5C4]">more than a sales page.</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Security, privacy, AI processing and communication controls are areas where details matter. Explore our published governance documentation.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TRUST_RESOURCES.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                to={item.href}
                className="p-8 rounded-2xl bg-slate-900/90 hover:bg-slate-850 border border-slate-800 hover:border-teal-500/50 transition-all duration-200 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-[#80D5C4] group-hover:bg-[#00695C] group-hover:text-white transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-teal-400 bg-teal-950/70 border border-teal-900 px-2.5 py-1 rounded-full">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="font-display text-2xl font-bold text-white mb-2 group-hover:text-[#80D5C4] transition-colors flex items-center justify-between">
                    <span>{item.title}</span>
                    <ArrowUpRight className="w-5 h-5 text-slate-400 group-hover:text-[#80D5C4] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </h3>

                  <div className="text-xs font-mono text-slate-400 mb-4">
                    {item.label}
                  </div>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-800 flex items-center justify-between text-xs font-mono text-slate-400">
                  <span>PUBLISHED DOCUMENTATION</span>
                  <span className="text-[#80D5C4] group-hover:underline">Read page &rarr;</span>
                </div>
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
};
