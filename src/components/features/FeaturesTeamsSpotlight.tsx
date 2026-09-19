/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Users, Sliders, ChevronDown } from 'lucide-react';

const ROLES_HIERARCHY = [
  {
    role: 'TELECALLER',
    scope: 'Assigned Leads & Direct Queues',
    responsibilities: 'Places calls, sends contextual messages, logs call outcomes, and creates follow-ups within assigned boundaries.',
    badge: 'Operational Agent',
    color: 'bg-emerald-50 text-emerald-800 border-emerald-200',
  },
  {
    role: 'TEAM LEAD',
    scope: 'Team Queue & Telecaller Roster',
    responsibilities: 'Monitors active call pacing, reassigns stalled leads, reviews queue metrics, and conducts QA reviews.',
    badge: 'Team Oversight',
    color: 'bg-sky-50 text-sky-800 border-sky-200',
  },
  {
    role: 'TEAM MANAGEMENT',
    scope: 'Cross-Team Performance & Pipelines',
    responsibilities: 'Defines stage conversion gates, monitors department SLAs, and manages capacity allocation.',
    badge: 'Department Control',
    color: 'bg-indigo-50 text-indigo-800 border-indigo-200',
  },
  {
    role: 'OPERATIONS / ADMINISTRATION',
    scope: 'Tenant Configuration & Governance',
    responsibilities: 'Manages user provisioning, compliance guardrails, export authorizations, audit trails, and tenant settings.',
    badge: 'Tenant Governance',
    color: 'bg-teal-50 text-[#00695C] border-teal-200',
  },
];

export function FeaturesTeamsSpotlight() {
  return (
    <section className="py-20 md:py-28 bg-[#F8FAF8] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Copy & Details */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00695C]/10 border border-[#00695C]/20 text-[#00695C] text-xs font-mono font-semibold tracking-wider uppercase mb-5">
              <span>05 / TEAMS & ROLES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-slate-900 tracking-tight leading-[1.12] mb-6">
              Give every role the right view.
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal mb-8">
              Different people need different levels of visibility and responsibility. DialPulse uses role-based access and team scope to support that model.
            </p>

            <div className="space-y-4 mb-10 text-sm text-slate-600">
              <div className="p-3.5 rounded-xl bg-white border border-slate-200/80 shadow-xs">
                <strong className="text-slate-900 block font-semibold mb-1">Strict Team Scoping</strong>
                <span>Prevent telecallers from viewing or interacting with leads outside their designated team queue.</span>
              </div>
              <div className="p-3.5 rounded-xl bg-white border border-slate-200/80 shadow-xs">
                <strong className="text-slate-900 block font-semibold mb-1">Role-Based Access Control (RBAC)</strong>
                <span>Grant administrative powers only to authorized operators without granting blanket data export rights.</span>
              </div>
              <div className="p-3.5 rounded-xl bg-white border border-slate-200/80 shadow-xs">
                <strong className="text-slate-900 block font-semibold mb-1">Audit-Ready Accountability</strong>
                <span>Every status transition, assignment change, and supervisory override is logged for compliance review.</span>
              </div>
            </div>

            <Link
              to="/features/teams"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#00695C] hover:bg-[#004D40] text-white text-sm font-semibold tracking-normal transition-all shadow-xs group"
            >
              <span>Explore Teams</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Right Column: Role Hierarchy Diagram */}
          <div className="lg:col-span-7">
            <div className="rounded-[28px] bg-white border border-slate-200/90 p-6 sm:p-8 shadow-sm space-y-4">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div>
                  <span className="text-xs font-mono uppercase text-slate-400">ORGANIZATIONAL ARCHITECTURE</span>
                  <h3 className="text-base font-bold text-slate-900">Role & Scope Hierarchy</h3>
                </div>
                <span className="text-xs font-mono text-[#00695C] bg-[#00695C]/10 px-2.5 py-1 rounded-md">
                  TENANT SCOPE ENFORCED
                </span>
              </div>

              {/* Hierarchy Cards */}
              <div className="space-y-3 relative">
                {ROLES_HIERARCHY.map((item, idx) => (
                  <div key={item.role} className="relative">
                    <div className="rounded-2xl bg-[#F8FAF8] border border-slate-200/80 p-4 sm:p-5 hover:border-[#00695C]/40 transition-colors">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                        <div className="flex items-center gap-2.5">
                          <span className="text-xs font-mono font-bold text-slate-400">{`0${idx + 1}`}</span>
                          <span className="font-mono font-bold text-slate-900 text-sm tracking-wide">
                            {item.role}
                          </span>
                        </div>
                        <span className={`px-2 py-0.5 rounded text-[11px] font-mono border ${item.color} w-fit`}>
                          {item.badge}
                        </span>
                      </div>

                      <div className="text-xs text-[#00695C] font-medium mb-1 flex items-center gap-1">
                        <ShieldCheck className="w-3.5 h-3.5" /> Scope: {item.scope}
                      </div>

                      <p className="text-xs text-slate-600 leading-relaxed font-normal">
                        {item.responsibilities}
                      </p>
                    </div>

                    {/* Downward connector between items */}
                    {idx < ROLES_HIERARCHY.length - 1 && (
                      <div className="flex justify-center -my-1 relative z-10">
                        <div className="w-5 h-5 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 shadow-2xs">
                          <ChevronDown className="w-3 h-3" />
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="pt-2 text-center text-xs text-slate-400">
                Role definitions maintain strict boundary enforcement across all database queries.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
