/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Users, Phone, MessageSquare, LifeBuoy, ShieldCheck, BarChart3, Scale, Sparkles, Sliders, ArrowDown, ArrowRight, ArrowUpRight } from 'lucide-react';

interface MapNode {
  id: string;
  name: string;
  category: string;
  route: string;
  icon: any;
  summary: string;
  connectedTo: string[];
}

const MAP_NODES: MapNode[] = [
  {
    id: 'leads',
    name: 'LEADS',
    category: 'Intake & Profile',
    route: '/features/leads',
    icon: Users,
    summary: 'Central customer record anchoring communication history, ownership, and stages.',
    connectedTo: ['calls', 'messaging', 'tickets'],
  },
  {
    id: 'calls',
    name: 'CALLS',
    category: 'Voice Communication',
    route: '/features/calls',
    icon: Phone,
    summary: 'Voice calls with logged outcomes, duration, and disposition notes.',
    connectedTo: ['teams', 'ai', 'reports'],
  },
  {
    id: 'messaging',
    name: 'MESSAGING',
    category: 'Conversational Channels',
    route: '/features/messaging',
    icon: MessageSquare,
    summary: 'Two-way WhatsApp and SMS threads with delivery telemetry.',
    connectedTo: ['teams', 'compliance', 'reports'],
  },
  {
    id: 'tickets',
    name: 'TICKETS',
    category: 'Support & Escalation',
    route: '/features/tickets',
    icon: LifeBuoy,
    summary: 'Customer issue resolution attached directly to lead profiles.',
    connectedTo: ['teams', 'reports'],
  },
  {
    id: 'teams',
    name: 'TEAMS',
    category: 'Roles & Scopes',
    route: '/features/teams',
    icon: ShieldCheck,
    summary: 'Role-based access separating telecaller and supervisor visibility.',
    connectedTo: ['reports', 'administration'],
  },
  {
    id: 'reports',
    name: 'REPORTS',
    category: 'Visibility & Telemetry',
    route: '/features/reports',
    icon: BarChart3,
    summary: 'Operational metrics across calls, messaging pacing, and conversions.',
    connectedTo: ['compliance-ai', 'administration'],
  },
  {
    id: 'compliance-ai',
    name: 'COMPLIANCE / AI',
    category: 'Safeguards & Assistance',
    route: '/features/compliance',
    icon: Sparkles,
    summary: 'Communication quiet hours, opt-outs, quotas, and server-side AI assistance.',
    connectedTo: ['administration'],
  },
  {
    id: 'administration',
    name: 'ADMINISTRATION',
    category: 'Tenant Governance',
    route: '/features/administration',
    icon: Sliders,
    summary: 'Tenant configuration, user lifecycle, settings, and immutable audit logs.',
    connectedTo: [],
  },
];

export function FeaturesProductMap() {
  const [activeNodeId, setActiveNodeId] = useState<string>('leads');

  const activeNode = MAP_NODES.find((n) => n.id === activeNodeId) || MAP_NODES[0];

  return (
    <section className="py-20 md:py-28 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00695C]/10 border border-[#00695C]/20 text-[#00695C] text-xs font-mono font-semibold tracking-wider uppercase mb-5">
            <span>WORKFLOW TOPOLOGY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-slate-900 tracking-tight leading-[1.12] mb-6">
            One workflow. <br />
            Many capabilities.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Interact with the conceptual product map to see how customer touchpoints, team roles, safeguards, and visibility connect.
          </p>
        </div>

        {/* Interactive Workspace Container */}
        <div className="max-w-4xl mx-auto rounded-[28px] bg-[#F8FAF8] border border-slate-200/90 p-6 sm:p-10 shadow-xs">
          {/* Top Level: LEADS */}
          <div className="flex justify-center mb-4">
            {renderNode(MAP_NODES[0], activeNodeId, setActiveNodeId)}
          </div>

          {/* Vertical Trunk Line down from Leads */}
          <div className="flex justify-center my-2">
            <div className="w-0.5 h-6 bg-slate-300" />
          </div>

          {/* Split Crossbar */}
          <div className="hidden sm:flex justify-center items-center my-1 relative">
            <div className="w-2/3 h-0.5 bg-slate-300 relative">
              <div className="absolute left-0 top-0 w-0.5 h-4 bg-slate-300 -translate-x-1/2" />
              <div className="absolute left-1/2 top-0 w-0.5 h-4 bg-slate-300 -translate-x-1/2" />
              <div className="absolute right-0 top-0 w-0.5 h-4 bg-slate-300 -translate-x-1/2" />
            </div>
          </div>

          {/* Level 2: Channels (CALLS, MESSAGING, TICKETS) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-3">
            {renderNode(MAP_NODES[1], activeNodeId, setActiveNodeId)}
            {renderNode(MAP_NODES[2], activeNodeId, setActiveNodeId)}
            {renderNode(MAP_NODES[3], activeNodeId, setActiveNodeId)}
          </div>

          {/* Join Crossbar to TEAMS */}
          <div className="hidden sm:flex justify-center items-center my-1 relative">
            <div className="w-2/3 h-0.5 bg-slate-300 relative">
              <div className="absolute left-0 bottom-0 w-0.5 h-4 bg-slate-300 -translate-x-1/2" />
              <div className="absolute left-1/2 bottom-0 w-0.5 h-4 bg-slate-300 -translate-x-1/2" />
              <div className="absolute right-0 bottom-0 w-0.5 h-4 bg-slate-300 -translate-x-1/2" />
            </div>
          </div>

          <div className="flex justify-center my-2">
            <div className="w-0.5 h-6 bg-slate-300" />
          </div>

          {/* Level 3: TEAMS */}
          <div className="flex justify-center my-3">
            {renderNode(MAP_NODES[4], activeNodeId, setActiveNodeId)}
          </div>

          <div className="flex justify-center my-2">
            <div className="w-0.5 h-6 bg-slate-300" />
          </div>

          {/* Level 4: REPORTS */}
          <div className="flex justify-center my-3">
            {renderNode(MAP_NODES[5], activeNodeId, setActiveNodeId)}
          </div>

          <div className="flex justify-center my-2">
            <div className="w-0.5 h-6 bg-slate-300" />
          </div>

          {/* Level 5: COMPLIANCE / AI */}
          <div className="flex justify-center my-3">
            {renderNode(MAP_NODES[6], activeNodeId, setActiveNodeId)}
          </div>

          <div className="flex justify-center my-2">
            <div className="w-0.5 h-6 bg-slate-300" />
          </div>

          {/* Level 6: ADMINISTRATION */}
          <div className="flex justify-center my-3">
            {renderNode(MAP_NODES[7], activeNodeId, setActiveNodeId)}
          </div>

          {/* Active Context Preview Panel */}
          <div className="mt-10 p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#00695C]/10 text-[#00695C] flex items-center justify-center font-bold">
                <activeNode.icon className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-mono font-bold text-slate-900 text-sm">{activeNode.name}</span>
                  <span className="text-xs text-slate-500 font-normal">({activeNode.category})</span>
                </div>
                <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                  {activeNode.summary}
                </p>
              </div>
            </div>

            <Link
              to={activeNode.route}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#00695C] text-white text-xs font-semibold hover:bg-[#004D40] transition-colors shrink-0 self-start sm:self-center"
            >
              <span>Explore {activeNode.name}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        <div className="text-center text-xs text-slate-400 mt-6 font-normal">
          Conceptual topology. DialPulse enforces tenant data boundaries at all operational junctures.
        </div>
      </div>
    </section>
  );
}

function renderNode(
  node: MapNode,
  activeNodeId: string,
  setActiveNodeId: (id: string) => void
) {
  const isActive = activeNodeId === node.id;
  const Icon = node.icon;

  return (
    <button
      type="button"
      onClick={() => setActiveNodeId(node.id)}
      onMouseEnter={() => setActiveNodeId(node.id)}
      onFocus={() => setActiveNodeId(node.id)}
      className={`px-5 py-3 rounded-2xl border transition-all duration-200 text-left flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-[#00695C] focus:ring-offset-2 w-full sm:w-auto justify-center sm:justify-start ${
        isActive
          ? 'bg-[#00695C] text-white border-[#00695C] shadow-md scale-[1.02]'
          : 'bg-white text-slate-800 border-slate-200 hover:border-[#00695C]/40 hover:bg-slate-50 shadow-2xs'
      }`}
      aria-label={`Select ${node.name} module`}
    >
      <div
        className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${
          isActive ? 'bg-white/20 text-white' : 'bg-slate-100 text-[#00695C]'
        }`}
      >
        <Icon className="w-4 h-4" />
      </div>
      <div>
        <span className="font-mono text-xs font-bold tracking-wider block">{node.name}</span>
        <span className={`text-[10px] block ${isActive ? 'text-teal-100' : 'text-slate-400'}`}>
          {node.category}
        </span>
      </div>
    </button>
  );
}
