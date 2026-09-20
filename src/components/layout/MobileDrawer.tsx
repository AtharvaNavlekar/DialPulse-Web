/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, Calendar, Layers, Sparkles, BookOpen, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileDrawer({ isOpen, onClose }: MobileDrawerProps) {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setExpandedSection((prev) => (prev === section ? null : section));
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 6 }}
          transition={{ duration: 0.16 }}
          id="mobile-nav-drawer"
          className="mt-2.5 rounded-2xl border border-slate-200/90 bg-[#F8FAF8]/98 backdrop-blur-2xl shadow-xl px-4 pt-3 pb-5 md:hidden max-h-[calc(100vh-6.5rem)] overflow-y-auto"
        >
          <div className="space-y-2">
            {/* Mobile Product Accordion */}
            <div className="border border-slate-200/80 rounded-xl overflow-hidden bg-slate-50/50">
              <button
                type="button"
                onClick={() => toggleSection('product')}
                aria-expanded={expandedSection === 'product'}
                className="w-full flex items-center justify-between p-3 text-left text-sm font-semibold text-slate-800 bg-slate-50/70"
              >
                <div className="flex items-center gap-2">
                  <Layers className="w-4 h-4 text-[#00695C]" />
                  <span>Product</span>
                </div>
                <ChevronDown
                  className={cn(
                    'w-4 h-4 text-slate-400 transition-transform duration-200',
                    expandedSection === 'product' && 'rotate-180 text-slate-700'
                  )}
                />
              </button>

              {expandedSection === 'product' && (
                <div className="p-3 bg-white space-y-1 border-t border-slate-100">
                  <Link
                    to="/product"
                    onClick={onClose}
                    className="block p-2 rounded-lg text-xs font-semibold text-slate-900 hover:bg-slate-50"
                  >
                    Product Overview
                  </Link>
                  <Link
                    to="/features"
                    onClick={onClose}
                    className="block p-2 rounded-lg text-xs font-semibold text-slate-900 hover:bg-slate-50"
                  >
                    Features Hub
                  </Link>
                  <div className="pt-2 pb-1 text-[10px] font-mono uppercase text-slate-400 px-2 font-bold">
                    Featured Capabilities
                  </div>
                  {[
                    { label: 'Lead Management', href: '/features/leads' },
                    { label: 'Calling', href: '/features/calls' },
                    { label: 'Messaging', href: '/features/messaging' },
                    { label: 'Teams', href: '/features/teams' },
                    { label: 'Reports', href: '/features/reports' },
                    { label: 'AI', href: '/features/ai' },
                  ].map((item) => (
                    <Link
                      key={item.href}
                      to={item.href}
                      onClick={onClose}
                      className="block p-2 rounded-lg text-xs text-slate-700 hover:text-[#00695C] hover:bg-slate-50"
                    >
                      {item.label}
                    </Link>
                  ))}
                  <div className="pt-2 border-t border-slate-100">
                    <Link
                      to="/features"
                      onClick={onClose}
                      className="block p-2 text-xs font-bold text-[#00695C]"
                    >
                      Explore all features →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Mobile Solutions Accordion */}
            <div className="border border-slate-200/80 rounded-xl overflow-hidden bg-slate-50/50">
              <button
                type="button"
                onClick={() => toggleSection('solutions')}
                aria-expanded={expandedSection === 'solutions'}
                className="w-full flex items-center justify-between p-3 text-left text-sm font-semibold text-slate-800 bg-slate-50/70"
              >
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#00695C]" />
                  <span>Solutions</span>
                </div>
                <ChevronDown
                  className={cn(
                    'w-4 h-4 text-slate-400 transition-transform duration-200',
                    expandedSection === 'solutions' && 'rotate-180 text-slate-700'
                  )}
                />
              </button>

              {expandedSection === 'solutions' && (
                <div className="p-3 bg-white space-y-1 border-t border-slate-100">
                  <Link
                    to="/solutions"
                    onClick={onClose}
                    className="block p-2 rounded-lg text-xs font-semibold text-slate-900 hover:bg-slate-50"
                  >
                    Solutions Overview
                  </Link>
                  <div className="pt-2 pb-1 text-[10px] font-mono uppercase text-slate-400 px-2 font-bold">
                    Workflows
                  </div>
                  {[
                    { label: 'Lead Operations', href: '/solutions/lead-operations' },
                    { label: 'Follow-up Control', href: '/solutions/follow-up-control' },
                    { label: 'Customer Communication', href: '/solutions/customer-communication' },
                    { label: 'Sales Team Operations', href: '/solutions/sales-team-operations' },
                    { label: 'Performance Visibility', href: '/solutions/performance-visibility' },
                    { label: 'Customer Operations', href: '/solutions/customer-operations' },
                    { label: 'Communication Compliance', href: '/solutions/communication-compliance' },
                    { label: 'AI-Assisted Work', href: '/solutions/ai-assisted-work' },
                  ].map((item) => (
                    <Link
                      key={item.href}
                      to={item.href}
                      onClick={onClose}
                      className="block p-2 rounded-lg text-xs text-slate-700 hover:text-[#00695C] hover:bg-slate-50"
                    >
                      {item.label}
                    </Link>
                  ))}
                  <div className="pt-2 border-t border-slate-100">
                    <Link
                      to="/solutions"
                      onClick={onClose}
                      className="block p-2 text-xs font-bold text-[#00695C]"
                    >
                      Explore all solutions →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Mobile Resources Accordion */}
            <div className="border border-slate-200/80 rounded-xl overflow-hidden bg-slate-50/50">
              <button
                type="button"
                onClick={() => toggleSection('resources')}
                aria-expanded={expandedSection === 'resources'}
                className="w-full flex items-center justify-between p-3 text-left text-sm font-semibold text-slate-800 bg-slate-50/70"
              >
                <div className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-[#00695C]" />
                  <span>Resources</span>
                </div>
                <ChevronDown
                  className={cn(
                    'w-4 h-4 text-slate-400 transition-transform duration-200',
                    expandedSection === 'resources' && 'rotate-180 text-slate-700'
                  )}
                />
              </button>

              {expandedSection === 'resources' && (
                <div className="p-3 bg-white space-y-1 border-t border-slate-100">
                  <Link
                    to="/resources"
                    onClick={onClose}
                    className="block p-2 rounded-lg text-xs font-semibold text-slate-900 hover:bg-slate-50"
                  >
                    Resources Directory
                  </Link>
                  {[
                    { label: 'FAQ', href: '/faq' },
                    { label: 'Security', href: '/security' },
                    { label: 'Blog', href: '/blog', isSoon: true },
                    { label: 'Guides', href: '/guides', isSoon: true },
                    { label: 'Case Studies', href: '/case-studies', isSoon: true },
                    { label: 'Compare', href: '/compare', isSoon: true },
                  ].map((item) => (
                    <Link
                      key={item.label}
                      to={item.href}
                      onClick={onClose}
                      className="flex items-center justify-between p-2 rounded-lg text-xs text-slate-700 hover:text-[#00695C] hover:bg-slate-50"
                    >
                      <span>{item.label}</span>
                      {item.isSoon && (
                        <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-slate-100 text-slate-500">
                          Soon
                        </span>
                      )}
                    </Link>
                  ))}
                  <div className="pt-2 border-t border-slate-100">
                    <Link
                      to="/resources"
                      onClick={onClose}
                      className="block p-2 text-xs font-bold text-[#00695C]"
                    >
                      Explore resources →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Direct Pricing Link in Mobile */}
            <Link
              to="/pricing"
              onClick={onClose}
              className="flex items-center justify-between p-3 rounded-xl border border-slate-200/80 text-sm font-semibold text-slate-800 hover:bg-slate-50 bg-slate-50/40"
            >
              <span>Pricing</span>
              <ArrowRight className="w-4 h-4 text-slate-400" />
            </Link>

            {/* Action Buttons in Mobile Drawer */}
            <div className="pt-3 mt-1 border-t border-slate-200/80 flex flex-col gap-2.5">
              <a
                href="https://app.dialpulse.com/login"
                className="w-full h-10 rounded-xl flex items-center justify-center text-sm font-semibold text-slate-700 bg-slate-50 border border-slate-200 hover:bg-slate-100 transition-colors"
              >
                Sign In
              </a>
              <Link
                to="/contact"
                onClick={onClose}
                className="w-full h-10 rounded-xl flex items-center justify-center gap-2 text-sm font-semibold text-white bg-[#00695C] hover:bg-[#004D40] transition-colors shadow-xs"
              >
                <Calendar className="w-4 h-4 opacity-90" />
                <span>Talk to DialPulse</span>
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
