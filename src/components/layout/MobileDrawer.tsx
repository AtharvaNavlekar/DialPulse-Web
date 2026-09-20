/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import {
  ChevronDown,
  Calendar,
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
import { headerNavigation, type NavItem } from '@/config/navigation';
import { cn } from '@/lib/utils';

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

// Complete lookup dictionary mapping icon identifier strings to Lucide components
const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
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
};

export function MobileDrawer({ isOpen, onClose }: MobileDrawerProps) {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const location = useLocation();

  // Active route evaluators
  const isProductActive =
    location.pathname === '/product' || location.pathname.startsWith('/features');
  const isSolutionsActive =
    location.pathname === '/solutions' || location.pathname.startsWith('/solutions');
  const isResourcesActive =
    location.pathname === '/resources' ||
    location.pathname.startsWith('/resources') ||
    location.pathname === '/faq' ||
    location.pathname.startsWith('/faq') ||
    location.pathname === '/security' ||
    location.pathname.startsWith('/security') ||
    location.pathname === '/blog' ||
    location.pathname.startsWith('/blog') ||
    location.pathname === '/guides' ||
    location.pathname.startsWith('/guides') ||
    location.pathname === '/case-studies' ||
    location.pathname.startsWith('/case-studies') ||
    location.pathname === '/compare' ||
    location.pathname.startsWith('/compare');
  const isPricingActive = location.pathname === '/pricing';

  // Body scroll locking when drawer is open
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    const originalPaddingRight = document.body.style.paddingRight;

    // Prevent layout shift from scrollbar disappearing on platforms with visible scrollbars
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = originalOverflow;
      document.body.style.paddingRight = originalPaddingRight;
    };
  }, [isOpen]);

  // Pre-expand section matching current route when drawer opens
  useEffect(() => {
    if (isOpen) {
      if (isProductActive) {
        setExpandedSection('product');
      } else if (isSolutionsActive) {
        setExpandedSection('solutions');
      } else if (isResourcesActive) {
        setExpandedSection('resources');
      } else {
        setExpandedSection(null);
      }
    }
  }, [isOpen, location.pathname]);

  const toggleSection = (section: string) => {
    setExpandedSection((prev) => (prev === section ? null : section));
  };

  const isItemActive = (href: string) => {
    if (location.pathname === href) return true;
    if (href !== '/product' && href !== '/solutions' && href !== '/resources' && href !== '/features') {
      return location.pathname.startsWith(href);
    }
    return false;
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Subtle Restrained Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            onClick={onClose}
            className="fixed inset-0 z-40 bg-slate-900/20 backdrop-blur-xs lg:hidden pointer-events-auto"
            aria-hidden="true"
          />

          {/* Floating Mobile Drawer Surface */}
          <motion.div
            initial={{ opacity: 0, y: -4, scale: 0.985 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -4, scale: 0.985 }}
            transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
            id="mobile-nav-drawer"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation Menu"
            className={cn(
              'relative z-50 mt-2 w-full rounded-2xl border border-slate-200/90',
              'bg-white/98 backdrop-blur-2xl',
              'shadow-[0_20px_48px_-10px_rgba(15,23,42,0.12),0_4px_16px_rgba(0,0,0,0.04)]',
              'p-3.5 sm:p-4 lg:hidden max-h-[calc(100dvh-5.5rem)] overflow-y-auto pointer-events-auto overscroll-contain'
            )}
          >
            <div className="space-y-2">
              {/* ========================================================================= */}
              {/* 1. PRODUCT ACCORDION                                                     */}
              {/* ========================================================================= */}
              <div className="border border-slate-200/80 rounded-xl overflow-hidden bg-slate-50/40">
                <button
                  type="button"
                  id="mobile-product-accordion-btn"
                  aria-controls="mobile-product-accordion-content"
                  aria-expanded={expandedSection === 'product'}
                  onClick={() => toggleSection('product')}
                  className={cn(
                    'w-full flex items-center justify-between p-3 text-left transition-colors cursor-pointer',
                    expandedSection === 'product'
                      ? 'bg-teal-50/70 text-[#00695C]'
                      : isProductActive
                      ? 'bg-teal-50/40 text-[#00695C]'
                      : 'text-slate-800 hover:bg-slate-100/60'
                  )}
                >
                  <div className="flex items-center gap-2.5">
                    <div
                      className={cn(
                        'w-7 h-7 rounded-lg flex items-center justify-center transition-colors',
                        expandedSection === 'product' || isProductActive
                          ? 'bg-[#00695C] text-white shadow-2xs'
                          : 'bg-slate-100 text-slate-600'
                      )}
                    >
                      <Layers className="w-4 h-4" />
                    </div>
                    <span className="text-sm font-semibold tracking-tight">
                      {headerNavigation.product.title}
                    </span>
                    {isProductActive && (
                      <span className="text-[10px] font-mono px-1.5 py-0.5 rounded-full bg-teal-100/70 text-[#00695C] font-semibold">
                        Active
                      </span>
                    )}
                  </div>
                  <ChevronDown
                    className={cn(
                      'w-4 h-4 transition-transform duration-200',
                      expandedSection === 'product' ? 'rotate-180 text-[#00695C]' : 'text-slate-400'
                    )}
                    aria-hidden="true"
                  />
                </button>

                <AnimatePresence initial={false}>
                  {expandedSection === 'product' && (
                    <motion.div
                      id="mobile-product-accordion-content"
                      role="region"
                      aria-labelledby="mobile-product-accordion-btn"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden bg-white border-t border-slate-100"
                    >
                      <div className="p-2.5 space-y-1">
                        {/* Overview and Hub Links */}
                        {[headerNavigation.product.overview, headerNavigation.product.featuresHub].map(
                          (item) => {
                            const Icon = (item.icon && ICON_MAP[item.icon]) || Layers;
                            const active = isItemActive(item.href);

                            return (
                              <Link
                                key={item.href}
                                to={item.href}
                                onClick={onClose}
                                className={cn(
                                  'flex items-center gap-2.5 p-2.5 rounded-lg text-xs transition-colors border',
                                  active
                                    ? 'bg-teal-50/80 border-teal-200/70 text-[#00695C] font-semibold'
                                    : 'text-slate-900 hover:text-[#00695C] hover:bg-slate-50 border-transparent font-medium'
                                )}
                              >
                                <div
                                  className={cn(
                                    'w-6 h-6 rounded-md flex items-center justify-center shrink-0 transition-colors',
                                    active ? 'bg-[#00695C] text-white' : 'bg-teal-50 text-[#00695C]'
                                  )}
                                >
                                  <Icon className="w-3.5 h-3.5" />
                                </div>
                                <div className="min-w-0 flex-1">
                                  <div className="truncate font-semibold">{item.label}</div>
                                  {item.description && (
                                    <div className="text-[11px] text-slate-500 truncate mt-0.5">
                                      {item.description}
                                    </div>
                                  )}
                                </div>
                              </Link>
                            );
                          }
                        )}

                        <div className="pt-2 pb-1 text-[10px] font-mono uppercase text-slate-400 px-2 font-bold tracking-wider">
                          Featured Capabilities
                        </div>

                        {/* 6 Capabilities */}
                        {headerNavigation.product.featuredCapabilities.map((item) => {
                          const Icon = (item.icon && ICON_MAP[item.icon]) || Grid;
                          const active = isItemActive(item.href);

                          return (
                            <Link
                              key={item.href}
                              to={item.href}
                              onClick={onClose}
                              className={cn(
                                'flex items-center gap-2.5 p-2 rounded-lg text-xs transition-colors border',
                                active
                                  ? 'bg-teal-50/80 border-teal-200/70 text-[#00695C] font-semibold'
                                  : 'text-slate-700 hover:text-[#00695C] hover:bg-slate-50 border-transparent'
                              )}
                            >
                              <div
                                className={cn(
                                  'w-6 h-6 rounded-md flex items-center justify-center shrink-0 transition-colors',
                                  active ? 'bg-[#00695C] text-white' : 'bg-slate-100 text-slate-500'
                                )}
                              >
                                <Icon className="w-3 h-3" />
                              </div>
                              <span className="truncate">{item.label}</span>
                            </Link>
                          );
                        })}

                        {/* Bottom Action */}
                        <div className="pt-2 mt-1 border-t border-slate-100">
                          <Link
                            to={headerNavigation.product.bottomAction.href}
                            onClick={onClose}
                            className="flex items-center justify-between p-2 text-xs font-bold text-[#00695C] hover:text-[#004D40] transition-colors"
                          >
                            <span>{headerNavigation.product.bottomAction.label}</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* ========================================================================= */}
              {/* 2. SOLUTIONS ACCORDION                                                   */}
              {/* ========================================================================= */}
              <div className="border border-slate-200/80 rounded-xl overflow-hidden bg-slate-50/40">
                <button
                  type="button"
                  id="mobile-solutions-accordion-btn"
                  aria-controls="mobile-solutions-accordion-content"
                  aria-expanded={expandedSection === 'solutions'}
                  onClick={() => toggleSection('solutions')}
                  className={cn(
                    'w-full flex items-center justify-between p-3 text-left transition-colors cursor-pointer',
                    expandedSection === 'solutions'
                      ? 'bg-teal-50/70 text-[#00695C]'
                      : isSolutionsActive
                      ? 'bg-teal-50/40 text-[#00695C]'
                      : 'text-slate-800 hover:bg-slate-100/60'
                  )}
                >
                  <div className="flex items-center gap-2.5">
                    <div
                      className={cn(
                        'w-7 h-7 rounded-lg flex items-center justify-center transition-colors',
                        expandedSection === 'solutions' || isSolutionsActive
                          ? 'bg-[#00695C] text-white shadow-2xs'
                          : 'bg-slate-100 text-slate-600'
                      )}
                    >
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <span className="text-sm font-semibold tracking-tight">
                      {headerNavigation.solutions.title}
                    </span>
                    {isSolutionsActive && (
                      <span className="text-[10px] font-mono px-1.5 py-0.5 rounded-full bg-teal-100/70 text-[#00695C] font-semibold">
                        Active
                      </span>
                    )}
                  </div>
                  <ChevronDown
                    className={cn(
                      'w-4 h-4 transition-transform duration-200',
                      expandedSection === 'solutions' ? 'rotate-180 text-[#00695C]' : 'text-slate-400'
                    )}
                    aria-hidden="true"
                  />
                </button>

                <AnimatePresence initial={false}>
                  {expandedSection === 'solutions' && (
                    <motion.div
                      id="mobile-solutions-accordion-content"
                      role="region"
                      aria-labelledby="mobile-solutions-accordion-btn"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden bg-white border-t border-slate-100"
                    >
                      <div className="p-2.5 space-y-1">
                        {/* Solutions Overview */}
                        {(() => {
                          const item = headerNavigation.solutions.overview;
                          const Icon = (item.icon && ICON_MAP[item.icon]) || Layers;
                          const active = isItemActive(item.href);

                          return (
                            <Link
                              to={item.href}
                              onClick={onClose}
                              className={cn(
                                'flex items-center gap-2.5 p-2.5 rounded-lg text-xs transition-colors border',
                                active
                                  ? 'bg-teal-50/80 border-teal-200/70 text-[#00695C] font-semibold'
                                  : 'text-slate-900 hover:text-[#00695C] hover:bg-slate-50 border-transparent font-medium'
                              )}
                            >
                              <div
                                className={cn(
                                  'w-6 h-6 rounded-md flex items-center justify-center shrink-0 transition-colors',
                                  active ? 'bg-[#00695C] text-white' : 'bg-teal-50 text-[#00695C]'
                                )}
                              >
                                <Icon className="w-3.5 h-3.5" />
                              </div>
                              <div className="min-w-0 flex-1">
                                <div className="truncate font-semibold">{item.label}</div>
                                {item.description && (
                                  <div className="text-[11px] text-slate-500 truncate mt-0.5">
                                    {item.description}
                                  </div>
                                )}
                              </div>
                            </Link>
                          );
                        })()}

                        <div className="pt-2 pb-1 text-[10px] font-mono uppercase text-slate-400 px-2 font-bold tracking-wider">
                          Workflows
                        </div>

                        {/* 8 Solutions List */}
                        {headerNavigation.solutions.solutionsList.map((item) => {
                          const Icon = (item.icon && ICON_MAP[item.icon]) || Users;
                          const active = isItemActive(item.href);

                          return (
                            <Link
                              key={item.href}
                              to={item.href}
                              onClick={onClose}
                              className={cn(
                                'flex items-center gap-2.5 p-2 rounded-lg text-xs transition-colors border',
                                active
                                  ? 'bg-teal-50/80 border-teal-200/70 text-[#00695C] font-semibold'
                                  : 'text-slate-700 hover:text-[#00695C] hover:bg-slate-50 border-transparent'
                              )}
                            >
                              <div
                                className={cn(
                                  'w-6 h-6 rounded-md flex items-center justify-center shrink-0 transition-colors',
                                  active ? 'bg-[#00695C] text-white' : 'bg-slate-100 text-slate-500'
                                )}
                              >
                                <Icon className="w-3 h-3" />
                              </div>
                              <span className="truncate">{item.label}</span>
                            </Link>
                          );
                        })}

                        {/* Bottom Action */}
                        <div className="pt-2 mt-1 border-t border-slate-100">
                          <Link
                            to={headerNavigation.solutions.bottomAction.href}
                            onClick={onClose}
                            className="flex items-center justify-between p-2 text-xs font-bold text-[#00695C] hover:text-[#004D40] transition-colors"
                          >
                            <span>{headerNavigation.solutions.bottomAction.label}</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* ========================================================================= */}
              {/* 3. RESOURCES ACCORDION                                                   */}
              {/* ========================================================================= */}
              <div className="border border-slate-200/80 rounded-xl overflow-hidden bg-slate-50/40">
                <button
                  type="button"
                  id="mobile-resources-accordion-btn"
                  aria-controls="mobile-resources-accordion-content"
                  aria-expanded={expandedSection === 'resources'}
                  onClick={() => toggleSection('resources')}
                  className={cn(
                    'w-full flex items-center justify-between p-3 text-left transition-colors cursor-pointer',
                    expandedSection === 'resources'
                      ? 'bg-teal-50/70 text-[#00695C]'
                      : isResourcesActive
                      ? 'bg-teal-50/40 text-[#00695C]'
                      : 'text-slate-800 hover:bg-slate-100/60'
                  )}
                >
                  <div className="flex items-center gap-2.5">
                    <div
                      className={cn(
                        'w-7 h-7 rounded-lg flex items-center justify-center transition-colors',
                        expandedSection === 'resources' || isResourcesActive
                          ? 'bg-[#00695C] text-white shadow-2xs'
                          : 'bg-slate-100 text-slate-600'
                      )}
                    >
                      <BookOpen className="w-4 h-4" />
                    </div>
                    <span className="text-sm font-semibold tracking-tight">
                      {headerNavigation.resources.title}
                    </span>
                    {isResourcesActive && (
                      <span className="text-[10px] font-mono px-1.5 py-0.5 rounded-full bg-teal-100/70 text-[#00695C] font-semibold">
                        Active
                      </span>
                    )}
                  </div>
                  <ChevronDown
                    className={cn(
                      'w-4 h-4 transition-transform duration-200',
                      expandedSection === 'resources' ? 'rotate-180 text-[#00695C]' : 'text-slate-400'
                    )}
                    aria-hidden="true"
                  />
                </button>

                <AnimatePresence initial={false}>
                  {expandedSection === 'resources' && (
                    <motion.div
                      id="mobile-resources-accordion-content"
                      role="region"
                      aria-labelledby="mobile-resources-accordion-btn"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden bg-white border-t border-slate-100"
                    >
                      <div className="p-2.5 space-y-1">
                        {/* Resources Directory */}
                        {(() => {
                          const item = headerNavigation.resources.overview;
                          const Icon = (item.icon && ICON_MAP[item.icon]) || BookOpen;
                          const active = isItemActive(item.href);

                          return (
                            <Link
                              to={item.href}
                              onClick={onClose}
                              className={cn(
                                'flex items-center gap-2.5 p-2.5 rounded-lg text-xs transition-colors border',
                                active
                                  ? 'bg-teal-50/80 border-teal-200/70 text-[#00695C] font-semibold'
                                  : 'text-slate-900 hover:text-[#00695C] hover:bg-slate-50 border-transparent font-medium'
                              )}
                            >
                              <div
                                className={cn(
                                  'w-6 h-6 rounded-md flex items-center justify-center shrink-0 transition-colors',
                                  active ? 'bg-[#00695C] text-white' : 'bg-teal-50 text-[#00695C]'
                                )}
                              >
                                <Icon className="w-3.5 h-3.5" />
                              </div>
                              <div className="min-w-0 flex-1">
                                <div className="truncate font-semibold">{item.label}</div>
                                {item.description && (
                                  <div className="text-[11px] text-slate-500 truncate mt-0.5">
                                    {item.description}
                                  </div>
                                )}
                              </div>
                            </Link>
                          );
                        })()}

                        <div className="pt-2 pb-1 text-[10px] font-mono uppercase text-slate-400 px-2 font-bold tracking-wider">
                          Knowledge & Guidance
                        </div>

                        {/* 6 Resources Items */}
                        {headerNavigation.resources.items.map((item) => {
                          const Icon = (item.icon && ICON_MAP[item.icon]) || HelpCircle;
                          const active = isItemActive(item.href);

                          return (
                            <Link
                              key={item.label}
                              to={item.href}
                              onClick={onClose}
                              className={cn(
                                'flex items-center gap-2.5 p-2 rounded-lg text-xs transition-colors border',
                                active
                                  ? 'bg-teal-50/80 border-teal-200/70 text-[#00695C] font-semibold'
                                  : 'text-slate-700 hover:text-[#00695C] hover:bg-slate-50 border-transparent'
                              )}
                            >
                              <div
                                className={cn(
                                  'w-6 h-6 rounded-md flex items-center justify-center shrink-0 transition-colors',
                                  active ? 'bg-[#00695C] text-white' : 'bg-slate-100 text-slate-500'
                                )}
                              >
                                <Icon className="w-3 h-3" />
                              </div>
                              <span className="truncate flex-1">{item.label}</span>
                              {item.isComingSoon && (
                                <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-slate-100 text-slate-500 border border-slate-200/60 shrink-0">
                                  Soon
                                </span>
                              )}
                            </Link>
                          );
                        })}

                        {/* Bottom Action */}
                        <div className="pt-2 mt-1 border-t border-slate-100">
                          <Link
                            to={headerNavigation.resources.bottomAction.href}
                            onClick={onClose}
                            className="flex items-center justify-between p-2 text-xs font-bold text-[#00695C] hover:text-[#004D40] transition-colors"
                          >
                            <span>{headerNavigation.resources.bottomAction.label}</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* ========================================================================= */}
              {/* 4. DIRECT PRICING LINK                                                   */}
              {/* ========================================================================= */}
              <Link
                to={headerNavigation.pricing.href}
                onClick={onClose}
                className={cn(
                  'flex items-center justify-between p-3 rounded-xl border text-sm font-semibold transition-colors',
                  isPricingActive
                    ? 'bg-teal-50/70 border-teal-200/80 text-[#00695C]'
                    : 'border-slate-200/80 text-slate-800 hover:bg-slate-100/60 bg-slate-50/40'
                )}
              >
                <div className="flex items-center gap-2.5">
                  <div
                    className={cn(
                      'w-7 h-7 rounded-lg flex items-center justify-center transition-colors',
                      isPricingActive ? 'bg-[#00695C] text-white shadow-2xs' : 'bg-slate-100 text-slate-600'
                    )}
                  >
                    <span className="text-xs font-mono font-bold">$</span>
                  </div>
                  <span>{headerNavigation.pricing.label}</span>
                </div>
                <ArrowRight
                  className={cn('w-4 h-4', isPricingActive ? 'text-[#00695C]' : 'text-slate-400')}
                />
              </Link>

              {/* ========================================================================= */}
              {/* 5. ACTION BUTTONS: SIGN IN & PRIMARY CTA                                  */}
              {/* ========================================================================= */}
              <div className="pt-3 mt-1 border-t border-slate-200/80 flex flex-col gap-2">
                <a
                  href="https://app.dialpulse.com/login"
                  className="w-full h-10.5 rounded-xl flex items-center justify-center text-sm font-semibold text-slate-700 bg-slate-50 border border-slate-200/90 hover:bg-slate-100 transition-colors"
                >
                  Sign In
                </a>
                <Link
                  to={headerNavigation.cta.href}
                  onClick={onClose}
                  className="w-full h-10.5 rounded-xl flex items-center justify-center gap-2 text-sm font-semibold text-white bg-[#00695C] hover:bg-[#004D40] transition-colors shadow-xs active:scale-[0.99]"
                >
                  <Calendar className="w-4 h-4 opacity-90" />
                  <span>{headerNavigation.cta.label}</span>
                </Link>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
