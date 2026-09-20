/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Link, useLocation } from 'react-router-dom';
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
import { headerNavigation, type NavItem } from '@/config/navigation';
import { cn } from '@/lib/utils';

export type OpenMenuType = 'product' | 'solutions' | 'resources' | null;

interface DesktopDropdownProps {
  openMenu: OpenMenuType;
  setOpenMenu: (menu: OpenMenuType) => void;
  handleMouseEnter: (menu: OpenMenuType) => void;
  handleMouseLeave: () => void;
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

export function DesktopDropdown({
  openMenu,
  setOpenMenu,
  handleMouseEnter,
  handleMouseLeave,
}: DesktopDropdownProps) {
  const location = useLocation();

  // Active route evaluator for items inside the dropdowns
  const isItemActive = (href: string) => {
    if (location.pathname === href) return true;
    if (href !== '/product' && href !== '/solutions' && href !== '/resources' && href !== '/features') {
      return location.pathname.startsWith(href);
    }
    return false;
  };

  return (
    <div className="absolute top-full inset-x-0 flex justify-center pointer-events-none hidden lg:flex">
      <AnimatePresence mode="wait">
        {openMenu && (
          <motion.div
            key={openMenu}
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -3 }}
            transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
            id={`${openMenu}-dropdown-panel`}
            role="region"
            aria-label={`${headerNavigation[openMenu].title} Menu`}
            aria-labelledby={`${openMenu}-menu-button`}
            onMouseEnter={() => handleMouseEnter(openMenu)}
            onMouseLeave={handleMouseLeave}
            className={cn(
              'relative -mt-px w-full pointer-events-auto',
              'rounded-b-2xl rounded-t-xl border border-slate-200/90',
              'bg-white/95 backdrop-blur-2xl',
              'shadow-[0_24px_50px_-12px_rgba(15,23,42,0.12),0_6px_20px_-4px_rgba(0,0,0,0.04)]',
              'overflow-hidden px-5 py-4.5 sm:px-6 sm:py-5',
              // Seamless hover bridge to eliminate any potential cursor dead zones
              "before:content-[''] before:absolute before:-top-3 before:inset-x-0 before:h-3 before:pointer-events-auto",
              // Content-proportional sensible maximum widths
              openMenu === 'product' && 'max-w-[min(calc(100vw-32px),_760px)]',
              openMenu === 'solutions' && 'max-w-[min(calc(100vw-32px),_880px)]',
              openMenu === 'resources' && 'max-w-[min(calc(100vw-32px),_700px)]'
            )}
          >
            {/* ========================================================================= */}
            {/* 1. PRODUCT DROPDOWN                                                      */}
            {/* ========================================================================= */}
            {openMenu === 'product' && (
              <div className="space-y-4">
                {/* Top Row: Primary Architectural Anchors */}
                <div className="grid grid-cols-2 gap-3">
                  {[headerNavigation.product.overview, headerNavigation.product.featuresHub].map(
                    (primaryItem) => {
                      const Icon = (primaryItem.icon && ICON_MAP[primaryItem.icon]) || Layers;
                      const active = isItemActive(primaryItem.href);

                      return (
                        <Link
                          key={primaryItem.href}
                          to={primaryItem.href}
                          onClick={() => setOpenMenu(null)}
                          className={cn(
                            'group flex items-start gap-3 p-3 rounded-xl transition-all',
                            'border',
                            active
                              ? 'bg-teal-50/70 border-teal-200/80 shadow-2xs'
                              : 'bg-slate-50/70 hover:bg-teal-50/60 border-slate-200/60 hover:border-teal-200/80'
                          )}
                        >
                          <div
                            className={cn(
                              'w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-colors',
                              active
                                ? 'bg-[#00695C] text-white shadow-2xs'
                                : 'bg-teal-100/70 text-[#00695C] group-hover:bg-[#00695C] group-hover:text-white'
                            )}
                          >
                            <Icon className="w-4 h-4" />
                          </div>
                          <div className="min-w-0">
                            <div
                              className={cn(
                                'text-sm font-semibold transition-colors truncate',
                                active
                                  ? 'text-[#00695C]'
                                  : 'text-slate-900 group-hover:text-[#00695C]'
                              )}
                            >
                              {primaryItem.label}
                            </div>
                            {primaryItem.description && (
                              <p className="text-xs text-slate-500 leading-relaxed mt-0.5 line-clamp-2">
                                {primaryItem.description}
                              </p>
                            )}
                          </div>
                        </Link>
                      );
                    }
                  )}
                </div>

                {/* Section Divider & Eyebrow */}
                <div className="border-t border-slate-200/60 pt-3">
                  <div className="text-[10px] font-mono font-semibold uppercase tracking-wider text-slate-400 px-1 mb-2">
                    Featured Capabilities
                  </div>

                  {/* 6 Capabilities Grid */}
                  <div className="grid grid-cols-2 gap-1.5">
                    {headerNavigation.product.featuredCapabilities.map((item) => {
                      const Icon = (item.icon && ICON_MAP[item.icon]) || Grid;
                      const active = isItemActive(item.href);

                      return (
                        <Link
                          key={item.href}
                          to={item.href}
                          onClick={() => setOpenMenu(null)}
                          className={cn(
                            'group flex items-start gap-3 p-2.5 rounded-xl transition-colors border',
                            active
                              ? 'bg-teal-50/70 border-teal-200/60'
                              : 'hover:bg-slate-100/70 border-transparent'
                          )}
                        >
                          <div
                            className={cn(
                              'w-7 h-7 rounded-lg flex items-center justify-center shrink-0 transition-colors mt-0.5',
                              active
                                ? 'bg-[#00695C] text-white shadow-2xs'
                                : 'bg-teal-50/80 text-[#00695C] group-hover:bg-[#00695C] group-hover:text-white'
                            )}
                          >
                            <Icon className="w-3.5 h-3.5" />
                          </div>
                          <div className="min-w-0 flex-1">
                            <div
                              className={cn(
                                'text-sm transition-colors truncate',
                                active
                                  ? 'font-semibold text-[#00695C]'
                                  : 'font-medium text-slate-900 group-hover:text-[#00695C]'
                              )}
                            >
                              {item.label}
                            </div>
                            {item.description && (
                              <p className="text-xs text-slate-500 truncate leading-normal mt-0.5">
                                {item.description}
                              </p>
                            )}
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
                    to={headerNavigation.product.bottomAction.href}
                    onClick={() => setOpenMenu(null)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#00695C] hover:text-[#004D40] transition-colors group"
                  >
                    <span>{headerNavigation.product.bottomAction.label}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            )}

            {/* ========================================================================= */}
            {/* 2. SOLUTIONS DROPDOWN                                                    */}
            {/* ========================================================================= */}
            {openMenu === 'solutions' && (
              <div className="space-y-4">
                {/* Top Row: Solutions Overview Banner */}
                <div>
                  {(() => {
                    const item = headerNavigation.solutions.overview;
                    const Icon = (item.icon && ICON_MAP[item.icon]) || Layers;
                    const active = isItemActive(item.href);

                    return (
                      <Link
                        to={item.href}
                        onClick={() => setOpenMenu(null)}
                        className={cn(
                          'group flex items-center justify-between p-3 rounded-xl transition-all border',
                          active
                            ? 'bg-teal-50/70 border-teal-200/80 shadow-2xs'
                            : 'bg-slate-50/70 hover:bg-teal-50/60 border-slate-200/60 hover:border-teal-200/80'
                        )}
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className={cn(
                              'w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-colors',
                              active
                                ? 'bg-[#00695C] text-white shadow-2xs'
                                : 'bg-teal-100/70 text-[#00695C] group-hover:bg-[#00695C] group-hover:text-white'
                            )}
                          >
                            <Icon className="w-4 h-4" />
                          </div>
                          <div>
                            <div
                              className={cn(
                                'text-sm font-semibold transition-colors',
                                active
                                  ? 'text-[#00695C]'
                                  : 'text-slate-900 group-hover:text-[#00695C]'
                              )}
                            >
                              {item.label}
                            </div>
                            {item.description && (
                              <p className="text-xs text-slate-500 mt-0.5">
                                {item.description}
                              </p>
                            )}
                          </div>
                        </div>
                        <span className="text-xs font-semibold text-[#00695C] flex items-center gap-1 group-hover:translate-x-0.5 transition-transform shrink-0">
                          View Overview <ArrowRight className="w-3.5 h-3.5" />
                        </span>
                      </Link>
                    );
                  })()}
                </div>

                {/* Section Divider & Eyebrow */}
                <div className="border-t border-slate-200/60 pt-3">
                  <div className="text-[10px] font-mono font-semibold uppercase tracking-wider text-slate-400 px-1 mb-2">
                    Operational Workflows
                  </div>

                  {/* 8 Flat Solutions in 2 Balanced Columns */}
                  <div className="grid grid-cols-2 gap-1.5">
                    {headerNavigation.solutions.solutionsList.map((item) => {
                      const Icon = (item.icon && ICON_MAP[item.icon]) || Users;
                      const active = isItemActive(item.href);

                      return (
                        <Link
                          key={item.href}
                          to={item.href}
                          onClick={() => setOpenMenu(null)}
                          className={cn(
                            'group flex items-start gap-3 p-2.5 rounded-xl transition-colors border',
                            active
                              ? 'bg-teal-50/70 border-teal-200/60'
                              : 'hover:bg-slate-100/70 border-transparent'
                          )}
                        >
                          <div
                            className={cn(
                              'w-7 h-7 rounded-lg flex items-center justify-center shrink-0 transition-colors mt-0.5',
                              active
                                ? 'bg-[#00695C] text-white shadow-2xs'
                                : 'bg-teal-50/80 text-[#00695C] group-hover:bg-[#00695C] group-hover:text-white'
                            )}
                          >
                            <Icon className="w-3.5 h-3.5" />
                          </div>
                          <div className="min-w-0 flex-1">
                            <div
                              className={cn(
                                'text-sm transition-colors truncate',
                                active
                                  ? 'font-semibold text-[#00695C]'
                                  : 'font-medium text-slate-900 group-hover:text-[#00695C]'
                              )}
                            >
                              {item.label}
                            </div>
                            {item.description && (
                              <p className="text-xs text-slate-500 truncate leading-normal mt-0.5">
                                {item.description}
                              </p>
                            )}
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
                    to={headerNavigation.solutions.bottomAction.href}
                    onClick={() => setOpenMenu(null)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#00695C] hover:text-[#004D40] transition-colors group"
                  >
                    <span>{headerNavigation.solutions.bottomAction.label}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            )}

            {/* ========================================================================= */}
            {/* 3. RESOURCES DROPDOWN                                                    */}
            {/* ========================================================================= */}
            {openMenu === 'resources' && (
              <div className="space-y-4">
                {/* Top Row: Resources Directory */}
                <div>
                  {(() => {
                    const item = headerNavigation.resources.overview;
                    const Icon = (item.icon && ICON_MAP[item.icon]) || BookOpen;
                    const active = isItemActive(item.href);

                    return (
                      <Link
                        to={item.href}
                        onClick={() => setOpenMenu(null)}
                        className={cn(
                          'group flex items-center justify-between p-3 rounded-xl transition-all border',
                          active
                            ? 'bg-teal-50/70 border-teal-200/80 shadow-2xs'
                            : 'bg-slate-50/70 hover:bg-teal-50/60 border-slate-200/60 hover:border-teal-200/80'
                        )}
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className={cn(
                              'w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-colors',
                              active
                                ? 'bg-[#00695C] text-white shadow-2xs'
                                : 'bg-teal-100/70 text-[#00695C] group-hover:bg-[#00695C] group-hover:text-white'
                            )}
                          >
                            <Icon className="w-4 h-4" />
                          </div>
                          <div>
                            <div
                              className={cn(
                                'text-sm font-semibold transition-colors',
                                active
                                  ? 'text-[#00695C]'
                                  : 'text-slate-900 group-hover:text-[#00695C]'
                              )}
                            >
                              {item.label}
                            </div>
                            {item.description && (
                              <p className="text-xs text-slate-500 mt-0.5">
                                {item.description}
                              </p>
                            )}
                          </div>
                        </div>
                        <span className="text-xs font-semibold text-[#00695C] flex items-center gap-1 group-hover:translate-x-0.5 transition-transform shrink-0">
                          Directory <ArrowRight className="w-3.5 h-3.5" />
                        </span>
                      </Link>
                    );
                  })()}
                </div>

                {/* Section Divider & Eyebrow */}
                <div className="border-t border-slate-200/60 pt-3">
                  <div className="text-[10px] font-mono font-semibold uppercase tracking-wider text-slate-400 px-1 mb-2">
                    Knowledge & Guidance
                  </div>

                  {/* 6 Resources in 2 Columns */}
                  <div className="grid grid-cols-2 gap-1.5">
                    {headerNavigation.resources.items.map((item) => {
                      const Icon = (item.icon && ICON_MAP[item.icon]) || HelpCircle;
                      const active = isItemActive(item.href);

                      return (
                        <Link
                          key={item.label}
                          to={item.href}
                          onClick={() => setOpenMenu(null)}
                          className={cn(
                            'group flex items-start gap-3 p-2.5 rounded-xl transition-colors border',
                            active
                              ? 'bg-teal-50/70 border-teal-200/60'
                              : 'hover:bg-slate-100/70 border-transparent'
                          )}
                        >
                          <div
                            className={cn(
                              'w-7 h-7 rounded-lg flex items-center justify-center shrink-0 transition-colors mt-0.5',
                              active
                                ? 'bg-[#00695C] text-white shadow-2xs'
                                : 'bg-teal-50/80 text-[#00695C] group-hover:bg-[#00695C] group-hover:text-white'
                            )}
                          >
                            <Icon className="w-3.5 h-3.5" />
                          </div>
                          <div className="min-w-0 flex-1">
                            <div className="flex items-center gap-2">
                              <span
                                className={cn(
                                  'text-sm transition-colors',
                                  active
                                    ? 'font-semibold text-[#00695C]'
                                    : 'font-medium text-slate-900 group-hover:text-[#00695C]'
                                )}
                              >
                                {item.label}
                              </span>
                              {item.isComingSoon && (
                                <span className="text-[9px] font-mono font-medium px-1.5 py-0.5 rounded bg-slate-100 text-slate-500 border border-slate-200/70">
                                  Soon
                                </span>
                              )}
                            </div>
                            {item.description && (
                              <p className="text-xs text-slate-500 truncate leading-normal mt-0.5">
                                {item.description}
                              </p>
                            )}
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
                    to={headerNavigation.resources.bottomAction.href}
                    onClick={() => setOpenMenu(null)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#00695C] hover:text-[#004D40] transition-colors group"
                  >
                    <span>{headerNavigation.resources.bottomAction.label}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
