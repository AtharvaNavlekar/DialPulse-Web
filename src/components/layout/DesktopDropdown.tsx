/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import {
  Layers,
  Grid,
  Users,
  Phone,
  MessageSquare,
  ShieldCheck,
  BarChart3,
  Sparkles,
  Clock,
  PhoneCall,
  Users2,
  ShieldAlert,
  Cpu,
  BookOpen,
  HelpCircle,
  FileText,
  Compass,
  Award,
  GitCompare,
  ArrowRight,
} from 'lucide-react';

export type OpenMenuType = 'product' | 'solutions' | 'resources' | null;

interface DesktopDropdownProps {
  openMenu: OpenMenuType;
  setOpenMenu: (menu: OpenMenuType) => void;
  handleMouseEnter: (menu: OpenMenuType) => void;
  handleMouseLeave: () => void;
}

export function DesktopDropdown({
  openMenu,
  setOpenMenu,
  handleMouseEnter,
  handleMouseLeave,
}: DesktopDropdownProps) {
  return (
    <AnimatePresence mode="wait">
      {openMenu && (
        <motion.div
          key={openMenu}
          initial={{ opacity: 0, y: 8, scale: 0.99 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 6, scale: 0.99 }}
          transition={{ duration: 0.16, ease: [0.16, 1, 0.3, 1] }}
          id={`${openMenu}-dropdown-panel`}
          role="region"
          aria-label={`${openMenu} menu`}
          onMouseEnter={() => handleMouseEnter(openMenu)}
          onMouseLeave={handleMouseLeave}
          className="absolute top-[calc(100%+8px)] inset-x-0 w-full rounded-2xl border border-slate-200/90 bg-[#F8FAF8]/95 backdrop-blur-2xl shadow-[0_20px_50px_-12px_rgba(15,23,42,0.18),0_4px_16px_rgba(0,105,92,0.06)] px-6 py-5 hidden md:block overflow-hidden"
        >
          {/* PRODUCT DROPDOWN */}
          {openMenu === 'product' && (
            <div className="space-y-4">
              {/* Top Row: Product Overview & Features Hub */}
              <div className="grid grid-cols-2 gap-3">
                <Link
                  to="/product"
                  onClick={() => setOpenMenu(null)}
                  className="group flex items-start gap-3 p-3 rounded-xl bg-slate-50/70 hover:bg-teal-50/60 border border-slate-200/60 hover:border-teal-200/80 transition-all"
                >
                  <div className="w-8 h-8 rounded-lg bg-teal-100/70 text-[#00695C] flex items-center justify-center shrink-0 group-hover:bg-[#00695C] group-hover:text-white transition-colors">
                    <Layers className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-900 group-hover:text-[#00695C] transition-colors">
                      Product Overview
                    </div>
                    <p className="text-xs text-slate-500 leading-relaxed mt-0.5">
                      The complete communication-first operational CRM platform
                    </p>
                  </div>
                </Link>

                <Link
                  to="/features"
                  onClick={() => setOpenMenu(null)}
                  className="group flex items-start gap-3 p-3 rounded-xl bg-slate-50/70 hover:bg-teal-50/60 border border-slate-200/60 hover:border-teal-200/80 transition-all"
                >
                  <div className="w-8 h-8 rounded-lg bg-teal-100/70 text-[#00695C] flex items-center justify-center shrink-0 group-hover:bg-[#00695C] group-hover:text-white transition-colors">
                    <Grid className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-900 group-hover:text-[#00695C] transition-colors">
                      Features Hub
                    </div>
                    <p className="text-xs text-slate-500 leading-relaxed mt-0.5">
                      Explore the full matrix of operational capabilities
                    </p>
                  </div>
                </Link>
              </div>

              {/* Section Header */}
              <div className="border-t border-slate-200/60 pt-3">
                <div className="text-[11px] font-mono font-semibold uppercase tracking-wider text-[#3F4946]/70 px-1 mb-2">
                  Featured Capabilities
                </div>

                {/* 6 Flat Navigation Rows (2 Columns) */}
                <div className="grid grid-cols-2 gap-1.5">
                  {[
                    {
                      label: 'Lead Management',
                      href: '/features/leads',
                      description: 'Complete lifecycle, audit trail & pipeline control',
                      icon: Users,
                    },
                    {
                      label: 'Calling',
                      href: '/features/calls',
                      description: 'Native dialer, recording & call attribution',
                      icon: Phone,
                    },
                    {
                      label: 'Messaging',
                      href: '/features/messaging',
                      description: 'Omnichannel SMS, WhatsApp & template engines',
                      icon: MessageSquare,
                    },
                    {
                      label: 'Teams',
                      href: '/features/teams',
                      description: 'Hierarchy, tenant scoping & role-based security',
                      icon: ShieldCheck,
                    },
                    {
                      label: 'Reports',
                      href: '/features/reports',
                      description: 'Real-time pipeline metrics & rep productivity',
                      icon: BarChart3,
                    },
                    {
                      label: 'AI',
                      href: '/features/ai',
                      description: 'Call summarization & tenant-isolated intelligence',
                      icon: Sparkles,
                    },
                  ].map((item) => {
                    const Icon = item.icon;
                    return (
                      <Link
                        key={item.href}
                        to={item.href}
                        onClick={() => setOpenMenu(null)}
                        className="group flex items-start gap-3 p-2.5 rounded-lg hover:bg-slate-100/70 transition-colors"
                      >
                        <div className="w-7 h-7 rounded-md bg-teal-50 text-[#00695C] flex items-center justify-center shrink-0 group-hover:bg-[#00695C] group-hover:text-white transition-colors mt-0.5">
                          <Icon className="w-3.5 h-3.5" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="text-sm font-semibold text-[#191C1B] group-hover:text-[#00695C] transition-colors truncate">
                            {item.label}
                          </div>
                          <p className="text-xs text-[#3F4946] truncate leading-normal">
                            {item.description}
                          </p>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>

              {/* Bottom Bar Action */}
              <div className="border-t border-slate-200/60 pt-3 flex items-center justify-between px-1">
                <span className="text-xs font-mono text-slate-400">
                  Zero-bypass policy engine & modular architecture
                </span>
                <Link
                  to="/features"
                  onClick={() => setOpenMenu(null)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#00695C] hover:text-[#004D40] transition-colors group"
                >
                  <span>Explore all features →</span>
                </Link>
              </div>
            </div>
          )}

          {/* SOLUTIONS DROPDOWN */}
          {openMenu === 'solutions' && (
            <div className="space-y-4">
              {/* Top Row: Solutions Overview */}
              <div>
                <Link
                  to="/solutions"
                  onClick={() => setOpenMenu(null)}
                  className="group flex items-center justify-between p-3 rounded-xl bg-slate-50/70 hover:bg-teal-50/60 border border-slate-200/60 hover:border-teal-200/80 transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-teal-100/70 text-[#00695C] flex items-center justify-center shrink-0 group-hover:bg-[#00695C] group-hover:text-white transition-colors">
                      <Layers className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-slate-900 group-hover:text-[#00695C] transition-colors">
                        Solutions Overview
                      </div>
                      <p className="text-xs text-slate-500">
                        Operational playbooks designed for specific scaling bottlenecks
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-[#00695C] flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                    Overview <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              </div>

              {/* Section Header */}
              <div className="border-t border-slate-200/60 pt-3">
                <div className="text-[11px] font-mono font-semibold uppercase tracking-wider text-[#3F4946]/70 px-1 mb-2">
                  Operational Workflows
                </div>

                {/* 8 Flat Navigation Rows (2 Columns) */}
                <div className="grid grid-cols-2 gap-1.5">
                  {[
                    {
                      label: 'Lead Operations',
                      href: '/solutions/lead-operations',
                      description: 'Deterministic ingestion, deduping & assignment',
                      icon: Users,
                    },
                    {
                      label: 'Follow-up Control',
                      href: '/solutions/follow-up-control',
                      description: 'Zero forgotten leads with automated SLAs',
                      icon: Clock,
                    },
                    {
                      label: 'Customer Communication',
                      href: '/solutions/customer-communication',
                      description: 'Unified telephony, SMS and messaging timeline',
                      icon: PhoneCall,
                    },
                    {
                      label: 'Sales Team Operations',
                      href: '/solutions/sales-team-operations',
                      description: 'Lead quotas, queue routing & activity enforcement',
                      icon: Users2,
                    },
                    {
                      label: 'Performance Visibility',
                      href: '/solutions/performance-visibility',
                      description: 'Real-time telemetry and management visibility',
                      icon: BarChart3,
                    },
                    {
                      label: 'Customer Operations',
                      href: '/solutions/customer-operations',
                      description: 'End-to-end post-sale support & customer context',
                      icon: Layers,
                    },
                    {
                      label: 'Communication Compliance',
                      href: '/solutions/communication-compliance',
                      description: 'Strict DNC, opt-out & quiet hours enforcement',
                      icon: ShieldAlert,
                    },
                    {
                      label: 'AI-Assisted Work',
                      href: '/solutions/ai-assisted-work',
                      description: 'Automated call transcription & insight extraction',
                      icon: Cpu,
                    },
                  ].map((item) => {
                    const Icon = item.icon;
                    return (
                      <Link
                        key={item.href}
                        to={item.href}
                        onClick={() => setOpenMenu(null)}
                        className="group flex items-start gap-3 p-2.5 rounded-lg hover:bg-slate-100/70 transition-colors"
                      >
                        <div className="w-7 h-7 rounded-md bg-teal-50 text-[#00695C] flex items-center justify-center shrink-0 group-hover:bg-[#00695C] group-hover:text-white transition-colors mt-0.5">
                          <Icon className="w-3.5 h-3.5" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="text-sm font-semibold text-[#191C1B] group-hover:text-[#00695C] transition-colors truncate">
                            {item.label}
                          </div>
                          <p className="text-xs text-[#3F4946] truncate leading-normal">
                            {item.description}
                          </p>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>

              {/* Bottom Bar Action */}
              <div className="border-t border-slate-200/60 pt-3 flex items-center justify-between px-1">
                <span className="text-xs font-mono text-slate-400">
                  Problem-first solutions matching team scale
                </span>
                <Link
                  to="/solutions"
                  onClick={() => setOpenMenu(null)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#00695C] hover:text-[#004D40] transition-colors group"
                >
                  <span>Explore all solutions →</span>
                </Link>
              </div>
            </div>
          )}

          {/* RESOURCES DROPDOWN */}
          {openMenu === 'resources' && (
            <div className="space-y-4">
              {/* Top Row: Resources Directory */}
              <div>
                <Link
                  to="/resources"
                  onClick={() => setOpenMenu(null)}
                  className="group flex items-center justify-between p-3 rounded-xl bg-slate-50/70 hover:bg-teal-50/60 border border-slate-200/60 hover:border-teal-200/80 transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-teal-100/70 text-[#00695C] flex items-center justify-center shrink-0 group-hover:bg-[#00695C] group-hover:text-white transition-colors">
                      <BookOpen className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-slate-900 group-hover:text-[#00695C] transition-colors">
                        Resources Directory
                      </div>
                      <p className="text-xs text-slate-500">
                        Guides, technical documentation, security and operational manuals
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-[#00695C] flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                    Directory <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              </div>

              {/* Section Header */}
              <div className="border-t border-slate-200/60 pt-3">
                <div className="text-[11px] font-mono font-semibold uppercase tracking-wider text-[#3F4946]/70 px-1 mb-2">
                  Knowledge & Guidance
                </div>

                {/* 6 Flat Navigation Rows (2 Columns) */}
                <div className="grid grid-cols-2 gap-1.5">
                  {[
                    {
                      label: 'FAQ',
                      href: '/faq',
                      description: 'Common questions regarding architecture and adoption',
                      icon: HelpCircle,
                      isComingSoon: false,
                    },
                    {
                      label: 'Security',
                      href: '/security',
                      description: 'Multi-tenant isolation and security architecture',
                      icon: ShieldCheck,
                      isComingSoon: false,
                    },
                    {
                      label: 'Blog',
                      href: '/blog',
                      description: 'Operational perspectives on customer communication',
                      icon: FileText,
                      isComingSoon: true,
                    },
                    {
                      label: 'Guides',
                      href: '/guides',
                      description: 'Practical playbooks for telecalling and CRM hygiene',
                      icon: Compass,
                      isComingSoon: true,
                    },
                    {
                      label: 'Case Studies',
                      href: '/case-studies',
                      description: 'Real-world deployment outcomes and scale benchmarks',
                      icon: Award,
                      isComingSoon: true,
                    },
                    {
                      label: 'Compare',
                      href: '/compare',
                      description: 'How DialPulse compares to legacy standalone tools',
                      icon: GitCompare,
                      isComingSoon: true,
                    },
                  ].map((item) => {
                    const Icon = item.icon;
                    return (
                      <Link
                        key={item.label}
                        to={item.href}
                        onClick={() => setOpenMenu(null)}
                        className="group flex items-start gap-3 p-2.5 rounded-lg hover:bg-slate-100/70 transition-colors"
                      >
                        <div className="w-7 h-7 rounded-md bg-teal-50 text-[#00695C] flex items-center justify-center shrink-0 group-hover:bg-[#00695C] group-hover:text-white transition-colors mt-0.5">
                          <Icon className="w-3.5 h-3.5" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-semibold text-[#191C1B] group-hover:text-[#00695C] transition-colors">
                              {item.label}
                            </span>
                            {item.isComingSoon && (
                              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-100 text-slate-500 border border-slate-200/60">
                                Soon
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-[#3F4946] truncate leading-normal">
                            {item.description}
                          </p>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>

              {/* Bottom Bar Action */}
              <div className="border-t border-slate-200/60 pt-3 flex items-center justify-between px-1">
                <span className="text-xs font-mono text-slate-400">
                  Technical accuracy and practical operations
                </span>
                <Link
                  to="/resources"
                  onClick={() => setOpenMenu(null)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#00695C] hover:text-[#004D40] transition-colors group"
                >
                  <span>Explore resources →</span>
                </Link>
              </div>
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
