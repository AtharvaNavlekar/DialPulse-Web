/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { ChevronDown, ArrowRight, ShieldCheck, HelpCircle } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export function LeadRoleMatrixFAQ() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const matrixRows = [
    {
      role: 'Telecaller',
      capability: 'Personal assigned queue, rapid voice & WhatsApp outreach, note creation, stage updating',
      purpose: 'Daily outreach execution with zero distraction from unassigned or peer records.',
      scope: 'Owner-Scoped',
    },
    {
      role: 'Team Lead',
      capability: 'Team queue visibility, lead re-assignment, follow-up monitoring, contact attempt audits',
      purpose: 'Supervisory oversight, workload balancing, and preventing stalled opportunities.',
      scope: 'Team-Scoped',
    },
    {
      role: 'Operations / IT',
      capability: 'Tenant-defined custom fields, CSV bulk imports (up to 250 records), duplicate phone checks',
      purpose: 'Data quality governance, system schema configuration, and batch intake hygiene.',
      scope: 'System Administration',
    },
    {
      role: 'Owner / CTO',
      capability: 'Tenant-wide visibility, multi-step export authorization gates, immutable security audit logs',
      purpose: 'Organizational compliance, enterprise security boundaries, and data export control.',
      scope: 'Tenant Authority',
    },
  ];

  const faqs = [
    {
      question: 'Can we define custom fields for our specific industry?',
      answer: 'Yes. DialPulse supports tenant-defined custom fields so your organization can capture specialized attributes (such as fleet size, ERP software, or territory codes) without altering core product database structures.',
    },
    {
      question: 'How do access permissions differ between telecallers and team leads?',
      answer: 'Telecallers operate with owner-scoped visibility, meaning they only see records directly assigned to them. Team leads operate with team-scoped visibility, giving them supervisory access to monitor all team members, review call notes, and re-assign accounts when needed.',
    },
    {
      question: 'How does bulk lead importing work?',
      answer: 'DialPulse provides structured CSV bulk imports supporting up to 250 records per upload batch. Files are validated for formatting and processed asynchronously in the background. Tenant-scoped phone number checks act as an idempotency safeguard to prevent duplicate records.',
    },
    {
      question: 'Can leads be exported safely?',
      answer: 'Yes. Lead data exports are restricted strictly to authorized administrative roles. The export workflow requires explicit confirmation, processes payloads asynchronously, and records an immutable entry in the tenant audit log.',
    },
    {
      question: 'How are customer communication preferences respected?',
      answer: 'Each lead record maintains explicit preference attributes including opt-out status, temporary communication pauses, and preferred channels (e.g. WhatsApp vs voice). These attributes feed directly into pre-outreach technical safeguards before any call or message is dispatched.',
    },
  ];

  return (
    <div>
      {/* SECTION 19: Role-Based Experience Feature Matrix */}
      <section className="py-20 md:py-28 bg-[#F8FAF8] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200 border border-slate-300 text-slate-700 text-xs font-mono font-medium tracking-wider uppercase mb-4">
              <span>RESPONSIBILITY MATRIX</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-slate-900 tracking-tight mb-5">
              Role-based lead experience.
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed font-normal">
              Every persona in your organization interacts with lead data differently. Here is how capabilities align with organizational responsibilities in DialPulse.
            </p>
          </div>

          {/* Table / Matrix Card */}
          <div className="rounded-[28px] bg-white border border-slate-200 overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50 text-[11px] font-mono uppercase tracking-wider text-slate-500">
                    <th className="py-4 px-6 font-semibold">Organizational Role</th>
                    <th className="py-4 px-6 font-semibold">Most Relevant Lead Capability</th>
                    <th className="py-4 px-6 font-semibold">Typical Purpose</th>
                    <th className="py-4 px-6 font-semibold">Access Scope</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-sm">
                  {matrixRows.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/70 transition-colors">
                      <td className="py-5 px-6 font-bold text-slate-900 whitespace-nowrap">
                        {row.role}
                      </td>
                      <td className="py-5 px-6 text-slate-700 max-w-sm">
                        {row.capability}
                      </td>
                      <td className="py-5 px-6 text-slate-600 max-w-xs text-xs leading-relaxed">
                        {row.purpose}
                      </td>
                      <td className="py-5 px-6 whitespace-nowrap">
                        <span className="inline-block px-2.5 py-1 rounded-md text-xs font-mono font-semibold bg-teal-50 text-[#00695C] border border-teal-200">
                          {row.scope}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-slate-500">
              <span>Role-Based Access Control (RBAC) Standard</span>
              <span>Tenant Isolation Guaranteed</span>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 20: Frequently Asked Questions */}
      <section className="py-20 md:py-28 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-mono font-medium tracking-wider uppercase mb-4">
              <span>QUESTIONS & CLARIFICATIONS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 tracking-tight mb-4">
              Common questions about <br />
              lead management.
            </h2>
            <p className="text-base text-slate-600 font-normal">
              Clear, factual answers regarding how DialPulse structures customer records, access boundaries, and imports.
            </p>
          </div>

          {/* Accordion List */}
          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200 bg-[#F8FAF8] overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full text-left p-6 flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-100/60 transition-colors"
                  >
                    <span className="font-bold text-slate-900 text-base sm:text-lg">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-500 transition-transform shrink-0 ${
                        isOpen ? 'rotate-180 text-[#00695C]' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 text-sm text-slate-600 leading-relaxed border-t border-slate-200/60 bg-white">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* SECTION 21: Final Typographic Statement */}
      <section className="py-24 md:py-32 bg-[#F8FAF8] border-b border-slate-200 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-mono uppercase tracking-widest text-[#00695C] block mb-4 font-semibold">
            THE DIALPULSE PHILOSOPHY
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-bold text-slate-900 tracking-tight leading-tight mb-4">
            A lead is not just a record.
          </h2>
          <p className="text-2xl sm:text-3xl lg:text-4xl font-display text-slate-500 italic mb-8">
            "It is a customer story in progress."
          </p>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            DialPulse keeps the context around that story close to the workflow so teams can act with more clarity, consistency, and respect for the customer.
          </p>
        </div>
      </section>

      {/* SECTION 22: Full-width Call to Action */}
      <section className="py-20 md:py-28 bg-[#00695C] text-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="text-xs font-mono uppercase tracking-wider text-teal-200 block mb-4 font-semibold">
            TRANSFORM YOUR CUSTOMER PIPELINE
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight mb-6">
            Ready to see your lead workflow differently?
          </h2>
          <p className="text-lg text-teal-100 leading-relaxed max-w-2xl mx-auto mb-10 font-normal">
            Explore the full DialPulse platform or start a conversation about your team's workflow and operational architecture.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              href="/product"
              size="lg"
              className="h-14 px-8 text-base bg-white text-[#00695C] hover:bg-slate-100 font-semibold shadow-sm"
            >
              <span>Explore Product</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button
              variant="outlined"
              href="/contact"
              size="lg"
              className="h-14 px-8 text-base border-white text-white hover:bg-white/10"
            >
              <span>Talk to DialPulse</span>
            </Button>
          </div>

          <div className="mt-12 pt-8 border-t border-teal-700/60 flex flex-wrap items-center justify-center gap-8 text-xs font-mono text-teal-200">
            <span>● Tenant-Scoped Data Model</span>
            <span>● Governed Role Access</span>
            <span>● Preference Safeguards</span>
            <span>● Asynchronous Bulk Imports</span>
          </div>
        </div>
      </section>
    </div>
  );
}
