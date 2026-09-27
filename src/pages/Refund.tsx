/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { useSEO } from '@/lib/seo/useSEO';
import { Link } from 'react-router-dom';
import {
  Receipt,
  AlertCircle,
  Clock,
  ShieldCheck,
  FileText,
  HelpCircle,
  ArrowRight,
  Info,
  Calendar,
  Building2,
} from 'lucide-react';
import { Button } from '@/components/ui/Button';

export default function Refund() {
  useSEO({
    title: 'Refund & Commercial Cancellation Policy | DialPulse CRM',
    description: 'Understand DialPulse commercial billing terms, seat adjustments, telephony carrier usage pass-through, and cancellation terms.',
    canonical: 'https://dialpulse.com/refund',
  });

  return (
    <div className="flex flex-col bg-surface min-h-screen text-on-surface">
      {/* Hero Header */}
      <section className="relative pt-12 pb-16 md:pt-20 md:pb-20 bg-surface border-b border-outline-variant/60 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(0,105,92,0.05),transparent_60%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            {/* Eyebrow & Badges */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-wider uppercase font-mono">
                <Receipt className="w-3.5 h-3.5 text-primary" />
                COMMERCIAL & REFUND TERMS
              </span>

              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-800 text-xs font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                <span>PRE-PUBLICATION DRAFT</span>
              </div>

              <span className="text-xs text-on-surface-variant font-mono flex items-center gap-1">
                <Clock className="w-3 h-3 text-on-surface-variant" />
                Effective date: To be confirmed
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold tracking-tight text-on-surface leading-[1.1] mb-6">
              Refund & Cancellation <br />
              <span className="text-primary">Policy</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-on-surface-variant leading-relaxed max-w-3xl mb-8">
              DialPulse is a B2B enterprise telecalling CRM and operational sales management platform. 
              This document outlines how subscription cancellations, seat adjustments, telephony carrier charges, and refund requests are handled.
            </p>

            {/* Transparency Disclosure */}
            <div className="p-4 sm:p-5 rounded-2xl bg-surface-container border border-outline-variant/80 flex items-start gap-3.5 max-w-3xl">
              <AlertCircle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
              <div className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                <strong className="text-on-surface font-semibold">Commercial Status Notice:</strong> Standardized self-serve refund timelines (e.g. 14-day or 30-day money-back windows) are currently under executive commercial and legal review. Contractual terms for active pilot engagements and enterprise deployments are governed directly by individual signed Service Agreements or Order Forms.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Sections */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 space-y-12">
        {/* Section 1: Business-to-Business Premise */}
        <section className="space-y-4">
          <span className="text-xs font-mono font-bold tracking-widest text-primary uppercase block">
            01 / COMMERCIAL PREMISE
          </span>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-on-surface">
            B2B Commercial Nature of Services
          </h2>
          <p className="text-sm text-on-surface-variant leading-relaxed">
            DialPulse services are marketed, sold, and provisioned exclusively to businesses, commercial organizations, and institutional sales teams. We do not provide consumer services. As such, statutory consumer cooling-off rights do not automatically apply to commercial enterprise contracts unless explicitly stipulated under applicable local law or your individual order form.
          </p>
        </section>

        {/* Section 2: Core Commercial Billing Principles */}
        <section className="space-y-6">
          <span className="text-xs font-mono font-bold tracking-widest text-primary uppercase block">
            02 / BILLING & USAGE
          </span>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-on-surface">
            Subscription Fees, Seats & Telephony
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Seat Fees */}
            <div className="p-5 rounded-2xl bg-surface-container-lowest border border-outline-variant/80 space-y-2">
              <h3 className="text-sm font-bold text-on-surface flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-primary" />
                Software Seat Subscriptions
              </h3>
              <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                Platform fees are billed on an agreed billing cycle (monthly or annual) per active seat tier (Core, Pro, Business, Enterprise). Seat subscriptions are pre-paid for the upcoming billing period.
              </p>
            </div>

            {/* Telephony Pass-Through */}
            <div className="p-5 rounded-2xl bg-surface-container-lowest border border-outline-variant/80 space-y-2">
              <h3 className="text-sm font-bold text-on-surface flex items-center gap-2">
                <Receipt className="w-4 h-4 text-primary" />
                Telephony & Carrier Usage
              </h3>
              <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                Telecommunications charges (inbound/outbound call minutes, SMS message delivery, and WhatsApp Business API message sessions) are third-party consumption fees. <strong>Carrier usage charges are non-refundable once consumed across telecom networks.</strong>
              </p>
            </div>

            {/* Dedicated Partitions */}
            <div className="p-5 rounded-2xl bg-surface-container-lowest border border-outline-variant/80 space-y-2">
              <h3 className="text-sm font-bold text-on-surface flex items-center gap-2">
                <Building2 className="w-4 h-4 text-primary" />
                Dedicated Partitions & Infrastructure
              </h3>
              <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                Enterprise deployment fees, dedicated PostgreSQL partitions, custom KMS key configurations, and white-glove onboarding migrations cover dedicated compute resources and are non-refundable once engineering setup has commenced.
              </p>
            </div>

            {/* AI Speech Minutes */}
            <div className="p-5 rounded-2xl bg-surface-container-lowest border border-outline-variant/80 space-y-2">
              <h3 className="text-sm font-bold text-on-surface flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary" />
                AI Inference Compute
              </h3>
              <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                AI speech-to-text transcription minutes and conversation summarization credits are deducted as compute is utilized by your workspace. Consumed AI compute allocations are non-refundable.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Subscription Cancellation & Data Extraction */}
        <section className="space-y-4">
          <span className="text-xs font-mono font-bold tracking-widest text-primary uppercase block">
            03 / CANCELLATION & EXPORT
          </span>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-on-surface">
            Cancellation Workflow & Data Retrieval
          </h2>
          <p className="text-sm text-on-surface-variant leading-relaxed">
            Workspace administrators can request subscription termination by contacting customer success or their designated account representative. Standard commercial agreements include the following provisions:
          </p>
          <ul className="text-xs sm:text-sm text-on-surface-variant space-y-2.5 list-disc pl-5 leading-relaxed">
            <li><strong>Notice Periods:</strong> Unless otherwise agreed in your Order Form, cancellation requests must be submitted prior to the renewal date of your current billing cycle.</li>
            <li><strong>End of Billing Period Access:</strong> Following a cancellation notice, your team retains access to the CRM platform until the conclusion of the paid billing period.</li>
            <li><strong>Asynchronous Data Export:</strong> Workspace Owners have the verified technical capability to export all lead records, call logs, interaction histories, and audit records into structured CSV and JSON formats prior to account decommissioning. DialPulse does not hold your CRM data hostage.</li>
          </ul>
        </section>

        {/* Section 4: Refund Eligibility Criteria (Pre-Publication Breakdown) */}
        <section className="space-y-4">
          <span className="text-xs font-mono font-bold tracking-widest text-primary uppercase block">
            04 / ELIGIBILITY
          </span>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-on-surface">
            Refund Evaluation & Adjustments
          </h2>

          <div className="overflow-x-auto rounded-2xl border border-outline-variant bg-surface-container-lowest">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-outline-variant bg-surface-container-low text-on-surface font-semibold">
                  <th className="py-3 px-4">Circumstance</th>
                  <th className="py-3 px-4">Policy Treatment</th>
                  <th className="py-3 px-4">Resolution Mechanism</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant/60 text-on-surface-variant">
                <tr>
                  <td className="py-3 px-4 font-semibold text-on-surface">Billing Computation Error</td>
                  <td className="py-3 px-4 text-emerald-800 font-semibold">Full Credit or Refund</td>
                  <td className="py-3 px-4">Adjusted on next invoice or refunded via original payment method upon verification.</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold text-on-surface">Telephony / Carrier Minutes Consumed</td>
                  <td className="py-3 px-4 text-amber-800 font-semibold">Non-refundable</td>
                  <td className="py-3 px-4">Carrier infrastructure costs cannot be reclaimed once routed over telecom networks.</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold text-on-surface">Mid-Cycle Seat Reduction</td>
                  <td className="py-3 px-4">Effective at Next Renewal</td>
                  <td className="py-3 px-4">Seats remain active through the prepaid cycle; renewed at the lower count on subsequent billing.</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold text-on-surface">Service Level Agreement (SLA) Credit</td>
                  <td className="py-3 px-4">Governed by Enterprise Contract</td>
                  <td className="py-3 px-4">Applicable only where formal SLA addenda are signed under custom Enterprise agreements.</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold text-on-surface">Early Annual Commitment Termination</td>
                  <td className="py-3 px-4 font-mono text-[11px] text-amber-800">To be confirmed / Per Order Form</td>
                  <td className="py-3 px-4">Early cancellation of discounted annual contracts is subject to negotiated contract terms.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 5: Unresolved Commercial Questions Panel */}
        <section className="p-6 sm:p-8 rounded-2xl bg-surface-container-low border border-outline-variant space-y-4">
          <div className="flex items-center gap-2">
            <Info className="w-5 h-5 text-primary" />
            <h3 className="text-lg font-bold text-on-surface">
              Commercial Review Status & Inquiries
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
            DialPulse is committed to commercial transparency without fabricated policies. Self-serve refund automation and specific grace periods will be finalized alongside public pricing tier announcements.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-outline-variant/60 pt-4">
            <div className="text-xs font-mono text-on-surface-variant space-y-1">
              <div>COMMERCIAL INQUIRIES: <span className="font-semibold text-on-surface">To be confirmed (Pending billing desk)</span></div>
              <div>RELATED: <Link to="/terms" className="text-primary hover:underline">Terms of Service</Link> • <Link to="/pricing" className="text-primary hover:underline">Pricing Architecture</Link></div>
            </div>
            <Button href="/contact" size="sm">
              Contact Commercial Team
              <ArrowRight className="w-3.5 h-3.5 ml-1" />
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
}
