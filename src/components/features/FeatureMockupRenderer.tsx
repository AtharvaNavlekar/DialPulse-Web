/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  Phone, 
  PhoneCall, 
  PhoneOff, 
  Clock, 
  ShieldCheck, 
  FileText, 
  User, 
  CheckCircle2, 
  LifeBuoy, 
  AlertCircle, 
  Users, 
  ArrowUpDown, 
  Sliders, 
  Database, 
  Lock, 
  Check, 
  Layers
} from 'lucide-react';
import { PipelineMockup } from '@/components/marketing/mockups/PipelineMockup';
import { OmnichannelMockup } from '@/components/marketing/mockups/OmnichannelMockup';
import { ComplianceMockup } from '@/components/marketing/mockups/ComplianceMockup';
import { AIMockup } from '@/components/marketing/mockups/AIMockup';
import { AnalyticsMockup } from '@/components/marketing/mockups/AnalyticsMockup';
import { FeatureMockupType } from '@/data/featuresData';

interface FeatureMockupRendererProps {
  mockupType: FeatureMockupType;
  disclaimer?: string;
}

export function FeatureMockupRenderer({ mockupType, disclaimer }: FeatureMockupRendererProps) {
  const defaultDisclaimer = "Abstracted DOM demonstration • Illustrates operational workflow";
  const displayDisclaimer = disclaimer || defaultDisclaimer;

  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-full max-w-4xl bg-[#F8FAF8] rounded-2xl p-2 sm:p-4 border border-slate-200/80 shadow-sm">
        {renderMockupContent(mockupType)}
      </div>
      <div className="mt-3 flex items-center gap-2 text-[11px] font-mono text-slate-500 bg-white/90 border border-slate-200/70 px-3 py-1 rounded-full shadow-2xs">
        <span className="w-1.5 h-1.5 rounded-full bg-[#00695C]/60" />
        <span>{displayDisclaimer}</span>
      </div>
    </div>
  );
}

function renderMockupContent(type: FeatureMockupType) {
  switch (type) {
    case 'pipeline':
      return <PipelineMockup />;
    case 'messaging':
      return <OmnichannelMockup />;
    case 'compliance':
      return <ComplianceMockup />;
    case 'ai':
      return <AIMockup />;
    case 'reports':
      return <AnalyticsMockup />;
    case 'calls':
      return <CallSessionMockup />;
    case 'tickets':
      return <TicketCaseMockup />;
    case 'teams':
      return <TeamHierarchyMockup />;
    case 'imports-exports':
      return <DataMovementMockup />;
    case 'administration':
      return <AdminGovernanceMockup />;
    default:
      return <PipelineMockup />;
  }
}

/**
 * High-fidelity Calls & Telephony In-Browser Session Mockup
 */
function CallSessionMockup() {
  return (
    <div className="w-full bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden text-left font-sans">
      {/* Voice Bar */}
      <div className="px-5 py-3.5 bg-slate-900 text-white flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center">
            <PhoneCall className="w-4 h-4 animate-pulse" />
          </div>
          <div>
            <div className="text-xs font-semibold text-white flex items-center gap-2">
              Active Call Session: Aarav Sharma
              <span className="px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-mono text-[10px]">Connected</span>
            </div>
            <div className="text-[11px] text-slate-400 font-mono">+91 98201 44820 • Apex FinTech</div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1 text-xs font-mono text-emerald-400 bg-slate-800 px-2.5 py-1 rounded border border-slate-700">
            <Clock className="w-3.5 h-3.5" />
            <span>04:18</span>
          </div>
          <button className="px-3 py-1 bg-rose-600 hover:bg-rose-700 text-white rounded text-xs font-medium flex items-center gap-1 transition-colors">
            <PhoneOff className="w-3.5 h-3.5" />
            <span>End Call</span>
          </button>
        </div>
      </div>

      {/* Disposition Panel */}
      <div className="p-5 grid grid-cols-1 md:grid-cols-3 gap-4 bg-slate-50/50">
        <div className="md:col-span-2 space-y-3">
          <div className="bg-white p-4 rounded-lg border border-slate-200">
            <div className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2 flex items-center justify-between">
              <span>Standardized Call Disposition</span>
              <span className="text-[10px] text-[#00695C] font-mono font-medium">Mandatory for Timeline Indexing</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {[
                { label: 'Connected', active: true, badge: 'High Intent' },
                { label: 'Callback Set', active: false, badge: 'Scheduled' },
                { label: 'Gatekeeper', active: false, badge: 'Rerouted' },
                { label: 'No Answer', active: false, badge: 'Retry Queue' },
              ].map((disp, i) => (
                <div
                  key={i}
                  className={`p-2.5 rounded-lg border text-xs cursor-pointer transition-all ${
                    disp.active
                      ? 'border-[#00695C] bg-teal-50/60 text-[#00695C] font-bold shadow-2xs'
                      : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
                  }`}
                >
                  <div className="font-semibold">{disp.label}</div>
                  <div className="text-[10px] text-slate-500 font-normal">{disp.badge}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg border border-slate-200">
            <div className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-1.5">Operator Notes</div>
            <div className="p-2.5 bg-slate-50 rounded border border-slate-200 text-xs text-slate-700 leading-relaxed">
              &quot;Confirmed compliance requirements for multi-tenant data isolation. Lead requested revised pricing breakdown for 25 telecaller seats. Scheduled follow-up on Thursday 2:00 PM.&quot;
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg border border-slate-200 flex flex-col justify-between">
          <div>
            <div className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">Customer Profile</div>
            <div className="space-y-2 text-xs text-slate-600">
              <div className="flex justify-between border-b border-slate-100 pb-1">
                <span className="text-slate-400">Lead ID</span>
                <span className="font-mono font-semibold text-slate-800">#LD-8402</span>
              </div>
              <div className="flex justify-between border-b border-slate-100 pb-1">
                <span className="text-slate-400">Assigned Owner</span>
                <span className="font-medium text-slate-800">Priya N.</span>
              </div>
              <div className="flex justify-between border-b border-slate-100 pb-1">
                <span className="text-slate-400">Pipeline Stage</span>
                <span className="font-medium text-[#00695C]">Proposal Review</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Past Attempts</span>
                <span className="font-mono text-slate-800">3 calls, 1 SMS</span>
              </div>
            </div>
          </div>
          <div className="pt-3 border-t border-slate-100">
            <div className="text-[10px] text-slate-400 font-mono">DNC Verified • Quiet Hours: Clear</div>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Support Ticket & Customer Context Mockup
 */
function TicketCaseMockup() {
  return (
    <div className="w-full bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden text-left font-sans">
      <div className="px-5 py-4 border-b border-slate-200 bg-slate-50/70 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-teal-50 border border-teal-200 text-[#00695C] flex items-center justify-center">
            <LifeBuoy className="w-4 h-4" />
          </div>
          <div>
            <div className="text-xs font-bold text-slate-900 flex items-center gap-2">
              Case #TK-8041: Webhook Retry Exceeded
              <span className="px-2 py-0.5 rounded bg-rose-50 text-rose-700 font-mono text-[10px] font-bold border border-rose-200">P1 — HIGH</span>
            </div>
            <div className="text-[11px] text-slate-500">Customer: Apex FinTech Pvt Ltd • Lead #LD-8402</div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono text-slate-500">SLA Response:</span>
          <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">Met (18m elapsed)</span>
        </div>
      </div>

      <div className="p-5 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="md:col-span-2 space-y-3">
          <div className="p-3.5 bg-slate-50 rounded-lg border border-slate-200">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-xs font-bold text-slate-800">Customer Issue Report</span>
              <span className="text-[10px] font-mono text-slate-400">Logged 10:24 AM</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              &quot;Inbound webhook batches above 500 leads triggered 429 rate limit backoff on customer gateway. Requesting retry threshold adjustment.&quot;
            </p>
          </div>

          <div className="p-3.5 bg-teal-50/40 rounded-lg border border-teal-200">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-xs font-bold text-[#00695C] flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                Technical Resolution Applied
              </span>
              <span className="text-[10px] font-mono text-slate-400">Resolved 10:42 AM</span>
            </div>
            <p className="text-xs text-slate-700 leading-relaxed">
              Configured custom batch queue chunking (250 items per payload) in tenant webhook policy. Verified successful re-transmission of queued payloads.
            </p>
          </div>
        </div>

        <div className="bg-slate-50/70 p-4 rounded-lg border border-slate-200 space-y-3">
          <div className="text-xs font-bold text-slate-900 uppercase tracking-wider">Contextual Details</div>
          <div className="space-y-2 text-xs text-slate-600">
            <div>
              <div className="text-slate-400 text-[10px]">ASSIGNED SPECIALIST</div>
              <div className="font-semibold text-slate-800">Karan M. (Tier-2 Operations)</div>
            </div>
            <div>
              <div className="text-slate-400 text-[10px]">CATEGORY</div>
              <div className="font-semibold text-slate-800">Webhook & API Ingestion</div>
            </div>
            <div>
              <div className="text-slate-400 text-[10px]">ACCOUNT HEALTH</div>
              <div className="text-emerald-700 font-semibold flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                Standard Tier • Healthy
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Team Hierarchy & RBAC Scopes Mockup
 */
function TeamHierarchyMockup() {
  const roles = [
    { role: 'Telecaller', scope: 'Assigned Leads & Direct Queues', permissions: 'Call dispositioning, SMS/WhatsApp reply, note creation, stage transitions', color: 'border-l-emerald-500' },
    { role: 'Team Lead', scope: 'Team Queue & Telecaller Roster', permissions: 'Queue rebalancing, call monitoring, daily throughput reporting, lead reassignment', color: 'border-l-teal-600' },
    { role: 'Operations / IT', scope: 'Tenant Configuration & Ingestion', permissions: 'CSV bulk mapping, carrier gateway setup, quiet hours & DNC list enforcement', color: 'border-l-blue-600' },
    { role: 'Tenant Admin / Owner', scope: 'Tenant-Wide Security & Billing', permissions: 'User provisioning, commercial tier management, immutable audit log reviews', color: 'border-l-indigo-600' },
  ];

  return (
    <div className="w-full bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden text-left font-sans">
      <div className="px-5 py-4 border-b border-slate-200 bg-slate-50/70 flex items-center justify-between">
        <div>
          <div className="text-xs font-bold text-slate-900">Role-Based Access Boundaries (RBAC)</div>
          <div className="text-[11px] text-slate-500">Enforces least-privilege scoping across operational teams</div>
        </div>
        <div className="px-2.5 py-1 bg-teal-50 border border-teal-200 rounded text-xs font-bold text-[#00695C] font-mono">
          4 Tiers Defined
        </div>
      </div>

      <div className="p-5 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
        {roles.map((item, i) => (
          <div key={i} className={`bg-slate-50/60 p-4 rounded-lg border border-slate-200 border-l-4 ${item.color} shadow-2xs`}>
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs font-bold text-slate-900">{item.role}</span>
              <span className="text-[10px] font-mono bg-white px-2 py-0.5 rounded border border-slate-200 text-slate-500">Tier 0{i + 1}</span>
            </div>
            <div className="text-[11px] font-medium text-slate-600 mb-2">Scope: {item.scope}</div>
            <p className="text-[11px] text-slate-500 leading-relaxed border-t border-slate-200/60 pt-2">
              {item.permissions}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

/**
 * Data Movement & Export Audit Mockup
 */
function DataMovementMockup() {
  return (
    <div className="w-full bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden text-left font-sans">
      <div className="px-5 py-4 border-b border-slate-200 bg-slate-50/70 flex items-center justify-between">
        <div>
          <div className="text-xs font-bold text-slate-900">Bulk Ingestion & Export Control</div>
          <div className="text-[11px] text-slate-500">Pre-flight schema validation with immutable export logging</div>
        </div>
        <div className="px-2.5 py-1 bg-emerald-50 text-emerald-800 border border-emerald-200 rounded text-xs font-bold font-mono">
          Async Worker: Idle
        </div>
      </div>

      <div className="p-5 space-y-4">
        {/* Ingestion Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <div className="bg-slate-50/80 p-3.5 rounded-lg border border-slate-200">
            <div className="text-[10px] font-mono font-bold text-slate-400 mb-1">STEP 1</div>
            <div className="text-xs font-bold text-slate-900 mb-1">CSV Header Mapping</div>
            <div className="text-[11px] text-slate-500">14 columns detected • 100% matched to CRM fields</div>
          </div>
          <div className="bg-slate-50/80 p-3.5 rounded-lg border border-slate-200">
            <div className="text-[10px] font-mono font-bold text-slate-400 mb-1">STEP 2</div>
            <div className="text-xs font-bold text-slate-900 mb-1">Sanitization & DNC</div>
            <div className="text-[11px] text-slate-500">E.164 phone normalization • 18 DNC numbers flagged</div>
          </div>
          <div className="bg-slate-50/80 p-3.5 rounded-lg border border-slate-200">
            <div className="text-[10px] font-mono font-bold text-slate-400 mb-1">STEP 3</div>
            <div className="text-xs font-bold text-slate-900 mb-1">Chunked Ingestion</div>
            <div className="text-[11px] text-slate-500">Processed in background • Zero CRM latency impact</div>
          </div>
        </div>

        {/* Export Gate */}
        <div className="p-3.5 bg-slate-900 text-slate-200 rounded-lg font-mono text-[11px] space-y-1.5">
          <div className="text-slate-400 flex items-center justify-between border-b border-slate-800 pb-1">
            <span className="flex items-center gap-1.5 text-emerald-400 font-bold">
              <Lock className="w-3.5 h-3.5" />
              AUDIT LOG: EXPORT AUTHORIZATION
            </span>
            <span className="text-[10px]">2026-09-20 14:02:19 UTC</span>
          </div>
          <div className="text-slate-300">
            User: <span className="text-white">admin@apexfintech.com (Role: Operations Lead)</span>
          </div>
          <div className="text-slate-300">
            Action: <span className="text-amber-300">EXPORT_LEAD_DISPOSITIONS_CSV</span> • Records: 2,410
          </div>
          <div className="text-slate-400 text-[10px]">
            Approval: Multi-factor authenticated • Retention signature stored in tenant audit ledger.
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Tenant Administration & Policy Safeguards Mockup
 */
function AdminGovernanceMockup() {
  return (
    <div className="w-full bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden text-left font-sans">
      <div className="px-5 py-4 border-b border-slate-200 bg-slate-50/70 flex items-center justify-between">
        <div>
          <div className="text-xs font-bold text-slate-900">Tenant Administration Console</div>
          <div className="text-[11px] text-slate-500">Tenant Isolation ID: <span className="font-mono text-slate-700">pg_tenant_88204</span></div>
        </div>
        <div className="px-2.5 py-1 bg-emerald-50 text-emerald-800 border border-emerald-200 rounded text-xs font-bold font-mono">
          Strict Separation Active
        </div>
      </div>

      <div className="p-5 grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div className="bg-slate-50/80 p-3.5 rounded-lg border border-slate-200">
          <div className="text-xs font-bold text-slate-900 mb-1 flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[#00695C]" />
            DNC List Size
          </div>
          <div className="text-xl font-bold font-mono text-slate-900 mb-0.5">1,482</div>
          <div className="text-[10px] text-slate-500">Suppressed numbers synced</div>
        </div>

        <div className="bg-slate-50/80 p-3.5 rounded-lg border border-slate-200">
          <div className="text-xs font-bold text-slate-900 mb-1 flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-blue-600" />
            Quiet Hours Policy
          </div>
          <div className="text-sm font-bold font-mono text-slate-900 mb-0.5">09:00 — 20:00</div>
          <div className="text-[10px] text-slate-500">Recipient local timezone</div>
        </div>

        <div className="bg-slate-50/80 p-3.5 rounded-lg border border-slate-200">
          <div className="text-xs font-bold text-slate-900 mb-1 flex items-center gap-1.5">
            <Sliders className="w-4 h-4 text-indigo-600" />
            Outreach Frequency Cap
          </div>
          <div className="text-sm font-bold font-mono text-slate-900 mb-0.5">Max 3 / 24 hrs</div>
          <div className="text-[10px] text-slate-500">Per destination phone number</div>
        </div>
      </div>
    </div>
  );
}
