/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Shield, Lock, Layers, UserCheck, Key, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export function LeadSecurityBoundary() {
  const boundaryLayers = [
    {
      level: 'LEVEL 1',
      title: 'Tenant Scope Boundary',
      desc: 'Hard cryptographic and database isolation. A lead can only ever be indexed, queried, or modified within its originating tenant context.',
      icon: Layers,
    },
    {
      level: 'LEVEL 2',
      title: 'Role-Based Authorization',
      desc: 'Server-side RBAC validates every HTTP request before execution. Telecallers, Team Leads, and Admins operate within strictly gated permissions.',
      icon: Lock,
    },
    {
      level: 'LEVEL 3',
      title: 'Team & Ownership Scope',
      desc: 'Queries for lead listings filter down to the user’s assigned pod or individual queue, preventing unauthorized browsing of peer records.',
      icon: UserCheck,
    },
    {
      level: 'LEVEL 4',
      title: 'Resource-Level Record Guard',
      desc: 'Record-level locking and concurrency version checks prevent race conditions, unauthorized transfers, or unverified field mutations.',
      icon: Shield,
    },
    {
      level: 'LEVEL 5',
      title: 'Action & Audit Validation',
      desc: 'Calls, outbound messages, notes, and bulk exports generate immutable audit trails recording actor ID, timestamp, and operation payload.',
      icon: Key,
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-[#1F3A5F] text-white relative overflow-hidden border-b border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Architectural Explanation & CTA */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white text-xs font-mono font-medium tracking-wider uppercase mb-6">
              <span>DATA ISOLATION & PERMISSIONS</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight mb-6">
              The lead belongs inside <br />
              the right boundary.
            </h2>

            <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal mb-8">
              Lead access is governed by tenant scope and role-based authorization rather than relying solely on what the interface displays. Every inquiry, edit, and export is validated server-side.
            </p>

            <div className="space-y-3 mb-10 text-xs text-slate-200">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#80D5C4] shrink-0" />
                <span>Zero cross-tenant data leaks by architectural construction</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#80D5C4] shrink-0" />
                <span>Enforced server-side rather than superficial frontend hiding</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#80D5C4] shrink-0" />
                <span>Protected export controls requiring administrative confirmation</span>
              </div>
            </div>

            <Button
              href="/security"
              size="lg"
              className="h-13 px-7 text-base bg-white text-[#1F3A5F] hover:bg-slate-100 font-semibold"
            >
              <span>Explore Security</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>

          {/* Right Column: Visual Defense Stack */}
          <div className="lg:col-span-7">
            <div className="rounded-[28px] bg-slate-900/90 border border-slate-700/80 p-6 sm:p-8 shadow-2xl space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-700/80 text-xs font-mono text-slate-400">
                <span>AUTHORIZATION STACK: TENANT → ACTION</span>
                <span>FAIL-CLOSED ENFORCEMENT</span>
              </div>

              {boundaryLayers.map((layer, idx) => {
                const Icon = layer.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-slate-800/80 border border-slate-700 hover:border-[#80D5C4]/50 transition-colors"
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="flex items-center gap-2.5">
                        <Icon className="w-4 h-4 text-[#80D5C4]" />
                        <h4 className="font-bold text-white text-sm">
                          {layer.title}
                        </h4>
                      </div>
                      <span className="text-[10px] font-mono text-slate-400">
                        {layer.level}
                      </span>
                    </div>
                    <p className="text-xs text-slate-300 pl-6 leading-relaxed">
                      {layer.desc}
                    </p>
                  </div>
                );
              })}

              <div className="mt-4 pt-3 border-t border-slate-700/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span className="text-emerald-400">● Real-time RBAC Check on Every Mutation</span>
                <span>Audit Versioning Enforced</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
