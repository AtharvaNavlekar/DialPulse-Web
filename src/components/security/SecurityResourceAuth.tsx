import React from 'react';
import { ShieldX, ShieldCheck, ArrowRight, Ban, CheckCircle2, Lock } from 'lucide-react';

export function SecurityResourceAuth() {
  return (
    <section className="py-20 md:py-28 bg-surface border-b border-outline-variant/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono font-semibold tracking-wider uppercase mb-4">
            <Lock className="w-3.5 h-3.5" />
            <span>AUTHORIZATION LOGIC</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-on-surface tracking-tight leading-tight">
            Access isn't just <br />
            <span className="text-primary">about the screen.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-on-surface-variant leading-relaxed">
            A button appearing in the interface does not define authorization. DialPulse evaluates whether the acting user is permitted to access or change the underlying resource.
          </p>
        </div>

        {/* Comparative Resource Evaluation Scenario */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* SCENARIO A: UNAUTHORIZED MUTATION */}
          <div className="p-8 rounded-3xl bg-surface-container-low border border-outline-variant flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-outline-variant/60 pb-3 mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-600" />
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-on-surface">
                    EVALUATION // OUT OF SCOPE
                  </span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-red-100 text-red-800 font-bold border border-red-200">
                  ACTION_BLOCKED
                </span>
              </div>

              <div className="space-y-3 font-mono text-xs">
                <div className="p-3 rounded-xl bg-surface-container-lowest border border-outline-variant/60 flex justify-between">
                  <span className="text-outline">REQUESTING_ACTOR:</span>
                  <span className="text-on-surface font-semibold">User: Telecaller (Agent #204)</span>
                </div>
                <div className="p-3 rounded-xl bg-surface-container-lowest border border-outline-variant/60 flex justify-between">
                  <span className="text-outline">REQUESTED_ACTION:</span>
                  <span className="text-on-surface font-semibold">PATCH /leads/8821 (Reassign)</span>
                </div>
                <div className="p-3 rounded-xl bg-surface-container-lowest border border-outline-variant/60 flex justify-between">
                  <span className="text-outline">RESOURCE_STATE:</span>
                  <span className="text-on-surface font-semibold">Assigned to Agent #109 (Team South)</span>
                </div>
              </div>

              <div className="mt-6 p-4 rounded-2xl bg-red-50/70 border border-red-200/80 flex items-start gap-3">
                <Ban className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                <div className="text-xs text-red-900 leading-relaxed font-sans">
                  <strong>Access Denied (403):</strong> Telecaller scope is strictly bound to self-assigned records. Attempting to mutate another agent's lead is rejected on the server regardless of client state.
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-outline-variant/40 text-[10px] font-mono text-outline">
              // AUDIT_EVENT: EVT_AUTH_DENIED_SCOPE_MISMATCH
            </div>
          </div>

          {/* SCENARIO B: AUTHORIZED SUPERVISORY MUTATION */}
          <div className="p-8 rounded-3xl bg-surface-container-low border border-primary/30 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-outline-variant/60 pb-3 mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-600" />
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-on-surface">
                    EVALUATION // IN JURISDICTION
                  </span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold border border-emerald-200">
                  ACTION_PERMITTED
                </span>
              </div>

              <div className="space-y-3 font-mono text-xs">
                <div className="p-3 rounded-xl bg-surface-container-lowest border border-outline-variant/60 flex justify-between">
                  <span className="text-outline">REQUESTING_ACTOR:</span>
                  <span className="text-on-surface font-semibold">User: Team Lead (TL #44)</span>
                </div>
                <div className="p-3 rounded-xl bg-surface-container-lowest border border-outline-variant/60 flex justify-between">
                  <span className="text-outline">REQUESTED_ACTION:</span>
                  <span className="text-on-surface font-semibold">PATCH /leads/8821 (Reassign)</span>
                </div>
                <div className="p-3 rounded-xl bg-surface-container-lowest border border-outline-variant/60 flex justify-between">
                  <span className="text-outline">RESOURCE_STATE:</span>
                  <span className="text-on-surface font-semibold">Assigned to Team South (TL Managed)</span>
                </div>
              </div>

              <div className="mt-6 p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200/80 flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div className="text-xs text-emerald-900 leading-relaxed font-sans">
                  <strong>Access Granted (200):</strong> Team Lead role includes supervisory reassignment permissions for all records within Team South. Action committed and audited.
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-outline-variant/40 text-[10px] font-mono text-primary">
              // AUDIT_EVENT: EVT_RESOURCE_MUTATE_AUTHORIZED
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
