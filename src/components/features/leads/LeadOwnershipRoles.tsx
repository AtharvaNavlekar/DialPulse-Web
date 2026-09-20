/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Users, User, Shield, Key, Eye, ShieldCheck, ArrowDown, ChevronRight } from 'lucide-react';

export function LeadOwnershipRoles() {
  const roles = [
    {
      role: 'TELECALLER',
      viewTitle: 'My Assigned Work',
      scope: 'Owner-Scoped Visibility',
      description: 'Access is limited strictly to leads assigned to the individual representative. Preserves clean focus on daily call queues and active customer conversations.',
      features: [
        'Personal assigned queue only',
        'Direct call & messaging execution',
        'Notes creation & stage updates',
        'No visibility into peers’ leads',
      ],
      badgeColor: 'bg-blue-50 text-blue-700 border-blue-200',
    },
    {
      role: 'TEAM LEAD (TL)',
      viewTitle: 'My Team’s Work',
      scope: 'Team-Scoped Visibility',
      description: 'Supervisors oversee the entire team pool. Able to review outreach cadence, monitor follow-up adherence, and re-assign records when reps are overloaded.',
      features: [
        'Aggregated team lead queue',
        'Lead re-assignment within team',
        'Team contact attempt auditing',
        'Escalation & ticket triage',
      ],
      badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    },
    {
      role: 'TL HEAD / REGIONAL MANAGER',
      viewTitle: 'My Managed Teams',
      scope: 'Multi-Team Group Visibility',
      description: 'Cross-team operational leaders managing multiple regional pods. Oversees capacity distribution between West, North, and South operational hubs.',
      features: [
        'Cross-team workload monitoring',
        'Territory queue distribution',
        'Cross-pod transfer authorization',
        'Team throughput comparisons',
      ],
      badgeColor: 'bg-amber-50 text-amber-800 border-amber-200',
    },
    {
      role: 'IT / OWNER / CTO',
      viewTitle: 'Tenant Administration',
      scope: 'Tenant-Wide Authority',
      description: 'Enterprise administrative oversight governing overall security posture, role definitions, custom attribute schemas, and bulk export approvals.',
      features: [
        'Full tenant record visibility',
        'Export authorization gates',
        'Custom schema configuration',
        'Security & audit log access',
      ],
      badgeColor: 'bg-purple-50 text-purple-700 border-purple-200',
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-[#F8FAF8] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section 7 Header: Ownership & Assignment */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200 border border-slate-300 text-slate-700 text-xs font-mono font-medium tracking-wider uppercase mb-4">
            <span>GOVERNED RESPONSIBILITY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-slate-900 tracking-tight mb-5">
            Every lead needs an owner.
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed font-normal">
            Lead ownership helps make responsibility visible. DialPulse can scope access and workflow responsibility around users and teams so that customer records don't fall between the cracks.
          </p>
        </div>

        {/* Ownership Chain Visual: LEAD -> OWNER -> TEAM -> AUTHORIZED ACCESS */}
        <div className="rounded-[28px] bg-white border border-slate-200 p-6 sm:p-10 shadow-sm mb-20">
          <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-6">
            AUTHORIZATION & SCOPING PIPELINE
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative">
            <div className="p-5 rounded-2xl bg-[#F8FAF8] border border-slate-200">
              <span className="text-[10px] font-mono text-slate-400 block mb-1">LEVEL 01</span>
              <h4 className="font-bold text-slate-900 text-base mb-1">Lead Record</h4>
              <p className="text-xs text-slate-500">
                Incoming contact data created with tenant identifier and initial qualification parameters.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#F8FAF8] border border-slate-200">
              <span className="text-[10px] font-mono text-slate-400 block mb-1">LEVEL 02</span>
              <h4 className="font-bold text-slate-900 text-base mb-1">Assigned Owner</h4>
              <p className="text-xs text-slate-500">
                Single designated telecaller accountable for direct voice calls, messages, and next actions.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#F8FAF8] border border-slate-200">
              <span className="text-[10px] font-mono text-slate-400 block mb-1">LEVEL 03</span>
              <h4 className="font-bold text-slate-900 text-base mb-1">Assigned Team</h4>
              <p className="text-xs text-slate-500">
                Functional unit (e.g. Enterprise Sales) governing supervisory review, re-assignment, and quotas.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-teal-50/70 border border-teal-200">
              <span className="text-[10px] font-mono text-[#00695C] block mb-1">LEVEL 04</span>
              <h4 className="font-bold text-[#00695C] text-base mb-1">Authorized Access</h4>
              <p className="text-xs text-slate-600">
                Enforced server-side. Users only view and modify records permitted by their role and team scope.
              </p>
            </div>
          </div>
        </div>

        {/* Section 8: Different People. Different Views. */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200 border border-slate-300 text-slate-700 text-xs font-mono font-medium tracking-wider uppercase mb-4">
            <span>ROLE-BASED VIEWS</span>
          </div>
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-slate-900 tracking-tight mb-4">
            Different people. Different views.
          </h3>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Not every user needs access to every record. DialPulse uses role and scope controls to shape what different users can access, keeping telecallers focused and sensitive operations protected.
          </p>
        </div>

        {/* Role Matrix Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {roles.map((item, idx) => (
            <div
              key={idx}
              className="rounded-[24px] bg-white border border-slate-200 p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-2.5 py-1 rounded-md text-[10px] font-mono font-bold border ${item.badgeColor}`}>
                    {item.role}
                  </span>
                  <Eye className="w-4 h-4 text-slate-400" />
                </div>

                <h4 className="text-lg font-bold text-slate-900 mb-1">
                  "{item.viewTitle}"
                </h4>
                <span className="text-[11px] font-mono text-[#00695C] font-medium block mb-3">
                  {item.scope}
                </span>

                <p className="text-xs text-slate-600 leading-relaxed mb-6 font-normal">
                  {item.description}
                </p>

                <div className="pt-3 border-t border-slate-100 space-y-2">
                  <span className="text-[10px] font-mono uppercase text-slate-400 tracking-wider block">
                    PERMITTED CAPABILITIES
                  </span>
                  {item.features.map((feat, fIdx) => (
                    <div key={fIdx} className="text-xs text-slate-700 flex items-start gap-1.5">
                      <ChevronRight className="w-3.5 h-3.5 text-[#00695C] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 text-[10px] font-mono text-slate-400">
                Server-Side Scoping Enforced
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
