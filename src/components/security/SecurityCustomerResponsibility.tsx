import React from 'react';
import { Users2, Shield, Laptop, FileCheck, Check } from 'lucide-react';

const RESPONSIBILITIES = [
  {
    title: 'User Lifecycle Management',
    desc: 'Promptly deactivating former personnel, updating supervisory roles, and pruning inactive team members.',
  },
  {
    title: 'Credential Protection',
    desc: 'Ensuring team members maintain strong, unique passwords and avoid sharing individual login accounts.',
  },
  {
    title: 'Access Scoping',
    desc: 'Assigning minimum necessary role privileges (e.g. Telecaller vs. Team Lead) based on actual operational need.',
  },
  {
    title: 'Workflow Configuration',
    desc: 'Setting local quiet hours, frequency caps, and channel restrictions according to local operational rules.',
  },
  {
    title: 'Exported Data Handling',
    desc: 'Safeguarding offline CSV/Excel spreadsheets once downloaded from the platform to local hardware.',
  },
  {
    title: 'Lawful Communications',
    desc: 'Ensuring customer outreach adheres to applicable marketing consent and calling standards.',
  },
  {
    title: 'Endpoint Hygiene',
    desc: 'Securing physical workstations, mobile devices, and office internet networks used to access DialPulse.',
  },
  {
    title: 'Compliance Assessment',
    desc: 'Determining applicable statutory privacy and industry obligations for your specific business sector.',
  },
];

export function SecurityCustomerResponsibility() {
  return (
    <section className="py-20 md:py-32 bg-surface border-b border-outline-variant/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono font-semibold tracking-wider uppercase mb-4">
            <Users2 className="w-3.5 h-3.5" />
            <span>SHARED RESPONSIBILITY MODEL</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-on-surface tracking-tight leading-tight">
            Security is <span className="text-primary">shared.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-on-surface-variant leading-relaxed">
            Effective security is a partnership. DialPulse enforces application boundaries and infrastructure controls; customer organizations maintain authority over who enters and how workflows are configured.
          </p>
        </div>

        {/* 8-item Balanced Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {RESPONSIBILITIES.map((item, idx) => (
            <div 
              key={item.title}
              className="p-6 rounded-3xl bg-surface-container-low border border-outline-variant/80 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono text-outline">0{idx + 1}</span>
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <h3 className="text-sm font-display font-bold text-on-surface mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-outline-variant/40 text-[10px] font-mono text-outline">
                // CUSTOMER_DOMAIN
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
