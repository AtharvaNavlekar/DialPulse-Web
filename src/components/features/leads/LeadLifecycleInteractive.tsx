/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { UserPlus, Filter, UserCheck, PhoneCall, CalendarCheck, MoveRight, Award, CheckCircle2, ChevronRight } from 'lucide-react';

export function LeadLifecycleInteractive() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const steps = [
    {
      id: 'capture',
      short: '01. CAPTURE',
      title: 'Inbound Capture & Intake',
      icon: UserPlus,
      summary: 'Raw inquiries enter through web forms, CSV bulk uploads, or API webhooks. A normalized record is minted with a tenant ID and creation timestamp.',
      operationalFocus: 'Deduplication against existing phone numbers, source tagging, and custom attribute preservation.',
      preview: {
        header: 'New Lead Ingested',
        primary: 'Aarav Patel (+91 98201 44921)',
        badge: 'Status: Unassigned New',
        meta: 'Source: Web Form #WF-109 • Ingest: Asynchronous Worker',
      },
    },
    {
      id: 'qualify',
      short: '02. QUALIFY',
      title: 'Initial Triage & Attributes',
      icon: Filter,
      summary: 'Operators or automated routing rules evaluate basic demographic data, company territory, and initial requirements before assigning priorities.',
      operationalFocus: 'Setting High / Medium / Low priority tiers to ensure high-value accounts receive rapid initial touchpoints.',
      preview: {
        header: 'Lead Triage Applied',
        primary: 'Priority Marked: High (Fleet size: 120+ Vehicles)',
        badge: 'Territory: West Zone',
        meta: 'Required response window: < 4 business hours',
      },
    },
    {
      id: 'own',
      short: '03. OWN',
      title: 'Representative Assignment',
      icon: UserCheck,
      summary: 'Lead is assigned to a specific telecaller and team pod. The record moves directly into the representative’s personalized work queue.',
      operationalFocus: 'Establishes clear operational accountability and applies team-level supervisory access boundaries.',
      preview: {
        header: 'Ownership Scoped',
        primary: 'Assigned to Priya Sharma (Enterprise Sales)',
        badge: 'Scope: Owner Access',
        meta: 'Notifications dispatched to assigned representative',
      },
    },
    {
      id: 'contact',
      short: '04. CONTACT',
      title: 'Gated Outreach Interaction',
      icon: PhoneCall,
      summary: 'Outreach begins after automated compliance verification. Telecallers connect via integrated telephony or approved messaging templates.',
      operationalFocus: 'Verifying opt-out status, quiet hours, and frequency caps before connecting the call.',
      preview: {
        header: 'Voice Call Session Connected',
        primary: 'Duration: 08m 14s • Outcome: Interested',
        badge: 'Telephony Active',
        meta: 'Call audio & operator notes synchronized to lead record',
      },
    },
    {
      id: 'followup',
      short: '05. FOLLOW UP',
      title: 'Contextual Follow-Up',
      icon: CalendarCheck,
      summary: 'Representative logs conversation notes, updates custom fields, and schedules the exact date and time for the next customer interaction.',
      operationalFocus: 'Prevents customer attrition and ensures promises made during calls are captured with clear reminders.',
      preview: {
        header: 'Next Action Committed',
        primary: 'Scheduled: Today, 3:30 PM (Commercial Review)',
        badge: 'Queue: Pending Action',
        meta: 'WhatsApp documentation sent & acknowledged by customer',
      },
    },
    {
      id: 'move',
      short: '06. MOVE',
      title: 'Stage Progression',
      icon: MoveRight,
      summary: 'As milestone criteria are met, the operator advances the record through the pipeline (e.g. from Contacted to Qualified Opportunity).',
      operationalFocus: 'Every stage transition records an audit timestamp, operator identifier, and concurrency version tag.',
      preview: {
        header: 'Pipeline Transition',
        primary: 'Moved: Contacted → Qualified Lead',
        badge: 'Stage: Qualified',
        meta: 'Audit Version incremented to v4 • Logged by Priya Sharma',
      },
    },
    {
      id: 'outcome',
      short: '07. OUTCOME',
      title: 'Resolution & Conversion',
      icon: Award,
      summary: 'Lead reaches its terminal or transition state: Won / Converted into an ongoing commercial account, or Closed with a logged reason.',
      operationalFocus: 'Provides accurate attribution data for reporting dashboards without losing historical communication context.',
      preview: {
        header: 'Commercial Outcome Reached',
        primary: 'Outcome: Won • Converted to Enterprise Contract',
        badge: 'Status: Closed-Won',
        meta: 'Full historical audit trail retained permanently for reporting',
      },
    },
  ];

  const currentStep = steps[activeStepIndex];
  const CurrentIcon = currentStep.icon;

  return (
    <section className="py-20 md:py-28 bg-[#F8FAF8] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200 border border-slate-300 text-slate-700 text-xs font-mono font-medium tracking-wider uppercase mb-4">
            <span>INTERACTIVE WORKFLOW</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-slate-900 tracking-tight mb-5">
            From first contact to outcome.
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed font-normal">
            Walk through each step in the customer journey. Click any phase below to examine how DialPulse maintains context, ownership, and compliance from initial intake to final conversion.
          </p>
          <div className="mt-3 text-xs font-mono text-slate-500">
            * Conceptual progression. DialPulse records transitions as they occur rather than forcing an automated linear path.
          </div>
        </div>

        {/* Interactive Steps Bar (Horizontal Scroller / Clickable Tabs) */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2 mb-8">
          {steps.map((step, idx) => {
            const isCurrent = idx === activeStepIndex;
            return (
              <button
                key={step.id}
                onClick={() => setActiveStepIndex(idx)}
                className={`p-3.5 rounded-2xl text-left border transition-all cursor-pointer ${
                  isCurrent
                    ? 'bg-[#00695C] text-white border-[#00695C] shadow-sm'
                    : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className={`text-[10px] font-mono font-semibold ${isCurrent ? 'text-teal-200' : 'text-slate-400'}`}>
                    {step.short}
                  </span>
                  {isCurrent && <CheckCircle2 className="w-3.5 h-3.5 text-teal-200" />}
                </div>
                <span className="text-xs font-bold block truncate">
                  {step.title}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Step Deep-Dive Card */}
        <div className="rounded-[28px] bg-white border border-slate-200 p-6 sm:p-10 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Narrative */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-[#00695C]/10 text-[#00695C] flex items-center justify-center">
                  <CurrentIcon className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-[#00695C] font-semibold uppercase tracking-wider block">
                    PHASE {activeStepIndex + 1} OF {steps.length}
                  </span>
                  <h3 className="text-2xl font-bold text-slate-900">
                    {currentStep.title}
                  </h3>
                </div>
              </div>

              <p className="text-base text-slate-700 leading-relaxed mb-6">
                {currentStep.summary}
              </p>

              <div className="p-4 rounded-xl bg-[#F8FAF8] border border-slate-200 text-xs space-y-1.5 mb-6">
                <span className="font-bold font-mono text-slate-800 uppercase block text-[10px]">
                  OPERATIONAL EMPHASIS:
                </span>
                <p className="text-slate-600 leading-normal">
                  {currentStep.operationalFocus}
                </p>
              </div>

              {/* Step Navigation Controls */}
              <div className="flex items-center gap-3 text-xs font-mono">
                <button
                  disabled={activeStepIndex === 0}
                  onClick={() => setActiveStepIndex((prev) => Math.max(0, prev - 1))}
                  className="px-4 py-2 rounded-lg border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  ← Previous Phase
                </button>
                <button
                  disabled={activeStepIndex === steps.length - 1}
                  onClick={() => setActiveStepIndex((prev) => Math.min(steps.length - 1, prev + 1))}
                  className="px-4 py-2 rounded-lg bg-[#00695C] text-white hover:bg-[#004D40] disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-1.5"
                >
                  <span>Next Phase</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Right Product Visualization Fragment */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl bg-[#F8FAF8] border border-slate-200 p-6 shadow-xs">
                <div className="flex items-center justify-between pb-3 border-b border-slate-200 text-xs font-mono text-slate-500 mb-4">
                  <span>STATE TRANSITION SNAPSHOT</span>
                  <span className="text-[#00695C] font-semibold">{currentStep.preview.badge}</span>
                </div>

                <div className="bg-white rounded-xl p-4 border border-slate-200 mb-4">
                  <span className="text-[10px] font-mono text-slate-400 uppercase block mb-1">
                    {currentStep.preview.header}
                  </span>
                  <h4 className="text-base font-bold text-slate-900 mb-1">
                    {currentStep.preview.primary}
                  </h4>
                  <p className="text-xs text-slate-500 font-mono">
                    {currentStep.preview.meta}
                  </p>
                </div>

                <div className="space-y-2 text-xs">
                  <div className="flex justify-between py-1.5 border-b border-slate-200/60 text-slate-600">
                    <span>Audit Record:</span>
                    <span className="font-mono font-semibold text-slate-800">Immutable</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-slate-200/60 text-slate-600">
                    <span>Tenant Scope:</span>
                    <span className="font-mono text-emerald-700 font-semibold">Isolated</span>
                  </div>
                  <div className="flex justify-between py-1.5 text-slate-600">
                    <span>Concurrency Lock:</span>
                    <span className="font-mono text-slate-700">Verified (v4)</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
