/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ChevronDown,
  ShieldCheck,
  Activity,
  Layers,
  Sparkles,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Logo } from '@/components/common/Logo';
import { FooterCTA } from '@/components/layout/FooterCTA';
import { footerNavigation } from '@/config/navigation';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const {
    brandArea,
    productColumn,
    solutionsColumn,
    resourcesColumn,
    companyAndTrustColumn,
    legalBottomBar,
  } = footerNavigation;

  // Mobile accordion state
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    product: false,
    solutions: false,
    resources: false,
    company: false,
  });

  const toggleSection = (id: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <footer className="w-full bg-[#0B1311] text-slate-300 relative border-t border-slate-800/80">
      {/* LAYER 1: CTA PANEL */}
      <FooterCTA />

      {/* LAYER 2: FOOTER DIRECTORY */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 sm:pt-20 sm:pb-16">
        
        {/* Desktop 5-Column Grid Layout (visible on lg+) */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-8 xl:gap-12 pb-16 border-b border-slate-800/80">
          
          {/* Column 1: BRAND AREA (span 4 columns) */}
          <div className="lg:col-span-4 space-y-6 pr-4">
            <div className="flex items-center gap-3">
              <Logo size="md" variant="dark" />
            </div>

            <div className="space-y-3">
              <div className="text-sm font-semibold text-white tracking-tight">
                {brandArea.tagline}
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                {brandArea.description}
              </p>
            </div>

            {/* Direct Action Links (No fake phone/email) */}
            <div className="flex flex-wrap gap-2 pt-2">
              {brandArea.links.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-900/90 border border-slate-800 text-xs font-semibold text-slate-200 hover:text-[#80D5C4] hover:border-teal-800/80 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#80D5C4]"
                >
                  <span>{link.label}</span>
                  <ArrowRight className="w-3 h-3 text-slate-400" />
                </Link>
              ))}
            </div>

            {/* Platform Status Indicator */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-950/40 border border-emerald-800/50 text-[11px] font-mono text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>SYSTEMS OPERATIONAL • 99.98% UPTIME</span>
            </div>
          </div>

          {/* Column 2: PRODUCT (span 2 columns) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xs font-mono font-bold tracking-wider uppercase text-slate-400">
              {productColumn.title}
            </h3>
            <ul className="space-y-2.5 text-xs">
              {productColumn.links.map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className="text-slate-400 hover:text-[#80D5C4] transition-colors inline-block py-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#80D5C4]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="pt-2 border-t border-slate-800/60">
              <Link
                to={productColumn.bottomAction.href}
                className="text-xs font-mono font-semibold text-[#80D5C4] hover:text-teal-200 transition-colors inline-flex items-center gap-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#80D5C4]"
              >
                <span>{productColumn.bottomAction.label}</span>
              </Link>
            </div>
          </div>

          {/* Column 3: SOLUTIONS (span 2 columns) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xs font-mono font-bold tracking-wider uppercase text-slate-400">
              {solutionsColumn.title}
            </h3>
            <ul className="space-y-2.5 text-xs">
              {solutionsColumn.links.map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className="text-slate-400 hover:text-[#80D5C4] transition-colors inline-block py-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#80D5C4]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="pt-2 border-t border-slate-800/60">
              <Link
                to={solutionsColumn.bottomAction.href}
                className="text-xs font-mono font-semibold text-[#80D5C4] hover:text-teal-200 transition-colors inline-flex items-center gap-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#80D5C4]"
              >
                <span>{solutionsColumn.bottomAction.label}</span>
              </Link>
            </div>
          </div>

          {/* Column 4: RESOURCES (span 2 columns) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xs font-mono font-bold tracking-wider uppercase text-slate-400">
              {resourcesColumn.title}
            </h3>
            <ul className="space-y-2.5 text-xs">
              {resourcesColumn.links.map((item) => (
                <li key={item.label} className="flex items-center justify-between">
                  <Link
                    to={item.href}
                    className="text-slate-400 hover:text-[#80D5C4] transition-colors inline-block py-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#80D5C4]"
                  >
                    {item.label}
                  </Link>
                  {item.isComingSoon && (
                    <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-slate-900 text-slate-500 border border-slate-800">
                      Soon
                    </span>
                  )}
                </li>
              ))}
            </ul>
            <div className="pt-2 border-t border-slate-800/60">
              <Link
                to={resourcesColumn.bottomAction.href}
                className="text-xs font-mono font-semibold text-[#80D5C4] hover:text-teal-200 transition-colors inline-flex items-center gap-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#80D5C4]"
              >
                <span>{resourcesColumn.bottomAction.label}</span>
              </Link>
            </div>
          </div>

          {/* Column 5: COMPANY & TRUST (span 2 columns) */}
          <div className="lg:col-span-2 space-y-6">
            {/* Company Section */}
            <div className="space-y-4">
              <h3 className="text-xs font-mono font-bold tracking-wider uppercase text-slate-400">
                {companyAndTrustColumn.companySection.subtitle}
              </h3>
              <ul className="space-y-2.5 text-xs">
                {companyAndTrustColumn.companySection.links.map((item) => (
                  <li key={item.href} className="flex items-center justify-between">
                    <Link
                      to={item.href}
                      className="text-slate-400 hover:text-[#80D5C4] transition-colors inline-block py-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#80D5C4]"
                    >
                      {item.label}
                    </Link>
                    {item.isComingSoon && (
                      <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-slate-900 text-slate-500 border border-slate-800">
                        Soon
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Trust Section */}
            <div className="space-y-3 pt-3 border-t border-slate-800/60">
              <h4 className="text-xs font-mono font-bold tracking-wider uppercase text-slate-400">
                {companyAndTrustColumn.trustSection.subtitle}
              </h4>
              <ul className="space-y-2.5 text-xs">
                {companyAndTrustColumn.trustSection.links.map((item) => (
                  <li key={item.href}>
                    <Link
                      to={item.href}
                      className="text-slate-400 hover:text-[#80D5C4] transition-colors inline-block py-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#80D5C4]"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

        {/* Mobile / Tablet Accordion Layout (visible below lg) */}
        <div className="lg:hidden space-y-6 pb-12 border-b border-slate-800/80">
          
          {/* Brand Summary */}
          <div className="space-y-4">
            <Logo size="md" variant="dark" />
            <p className="text-xs text-slate-400 leading-relaxed">
              {brandArea.description}
            </p>
            <div className="flex flex-wrap gap-2 pt-1">
              {brandArea.links.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs font-semibold text-slate-200 hover:text-[#80D5C4] transition-colors"
                >
                  <span>{link.label}</span>
                  <ArrowRight className="w-3 h-3 text-slate-400" />
                </Link>
              ))}
            </div>
          </div>

          {/* Accordion List */}
          <div className="space-y-3 pt-4 border-t border-slate-800/60">
            
            {/* Product Accordion */}
            <div className="border border-slate-800 rounded-xl overflow-hidden bg-slate-900/40">
              <button
                type="button"
                id="accordion-trigger-product"
                aria-controls="accordion-panel-product"
                aria-expanded={openSections.product}
                onClick={() => toggleSection('product')}
                className="w-full flex items-center justify-between p-4 text-left text-sm font-semibold text-slate-200 hover:text-[#80D5C4] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#80D5C4] transition-colors"
              >
                <span>Product</span>
                <ChevronDown
                  className={cn(
                    'w-4 h-4 text-slate-400 transition-transform duration-200',
                    openSections.product && 'rotate-180 text-[#80D5C4]'
                  )}
                />
              </button>

              {openSections.product && (
                <div
                  id="accordion-panel-product"
                  role="region"
                  aria-labelledby="accordion-trigger-product"
                  className="px-4 pb-4 pt-1 space-y-2.5 border-t border-slate-800/60 text-xs animate-in fade-in duration-200"
                >
                  {productColumn.links.map((item) => (
                    <Link
                      key={item.href}
                      to={item.href}
                      className="block text-slate-400 hover:text-[#80D5C4] py-1"
                    >
                      {item.label}
                    </Link>
                  ))}
                  <div className="pt-2 border-t border-slate-800">
                    <Link
                      to={productColumn.bottomAction.href}
                      className="font-mono text-xs text-[#80D5C4] font-semibold block"
                    >
                      {productColumn.bottomAction.label}
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Solutions Accordion */}
            <div className="border border-slate-800 rounded-xl overflow-hidden bg-slate-900/40">
              <button
                type="button"
                id="accordion-trigger-solutions"
                aria-controls="accordion-panel-solutions"
                aria-expanded={openSections.solutions}
                onClick={() => toggleSection('solutions')}
                className="w-full flex items-center justify-between p-4 text-left text-sm font-semibold text-slate-200 hover:text-[#80D5C4] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#80D5C4] transition-colors"
              >
                <span>Solutions</span>
                <ChevronDown
                  className={cn(
                    'w-4 h-4 text-slate-400 transition-transform duration-200',
                    openSections.solutions && 'rotate-180 text-[#80D5C4]'
                  )}
                />
              </button>

              {openSections.solutions && (
                <div
                  id="accordion-panel-solutions"
                  role="region"
                  aria-labelledby="accordion-trigger-solutions"
                  className="px-4 pb-4 pt-1 space-y-2.5 border-t border-slate-800/60 text-xs animate-in fade-in duration-200"
                >
                  {solutionsColumn.links.map((item) => (
                    <Link
                      key={item.href}
                      to={item.href}
                      className="block text-slate-400 hover:text-[#80D5C4] py-1"
                    >
                      {item.label}
                    </Link>
                  ))}
                  <div className="pt-2 border-t border-slate-800">
                    <Link
                      to={solutionsColumn.bottomAction.href}
                      className="font-mono text-xs text-[#80D5C4] font-semibold block"
                    >
                      {solutionsColumn.bottomAction.label}
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Resources Accordion */}
            <div className="border border-slate-800 rounded-xl overflow-hidden bg-slate-900/40">
              <button
                type="button"
                id="accordion-trigger-resources"
                aria-controls="accordion-panel-resources"
                aria-expanded={openSections.resources}
                onClick={() => toggleSection('resources')}
                className="w-full flex items-center justify-between p-4 text-left text-sm font-semibold text-slate-200 hover:text-[#80D5C4] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#80D5C4] transition-colors"
              >
                <span>Resources</span>
                <ChevronDown
                  className={cn(
                    'w-4 h-4 text-slate-400 transition-transform duration-200',
                    openSections.resources && 'rotate-180 text-[#80D5C4]'
                  )}
                />
              </button>

              {openSections.resources && (
                <div
                  id="accordion-panel-resources"
                  role="region"
                  aria-labelledby="accordion-trigger-resources"
                  className="px-4 pb-4 pt-1 space-y-2.5 border-t border-slate-800/60 text-xs animate-in fade-in duration-200"
                >
                  {resourcesColumn.links.map((item) => (
                    <div key={item.label} className="flex items-center justify-between py-1">
                      <Link to={item.href} className="text-slate-400 hover:text-[#80D5C4]">
                        {item.label}
                      </Link>
                      {item.isComingSoon && (
                        <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-slate-900 text-slate-500 border border-slate-800">
                          Soon
                        </span>
                      )}
                    </div>
                  ))}
                  <div className="pt-2 border-t border-slate-800">
                    <Link
                      to={resourcesColumn.bottomAction.href}
                      className="font-mono text-xs text-[#80D5C4] font-semibold block"
                    >
                      {resourcesColumn.bottomAction.label}
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Company & Trust Accordion */}
            <div className="border border-slate-800 rounded-xl overflow-hidden bg-slate-900/40">
              <button
                type="button"
                id="accordion-trigger-company"
                aria-controls="accordion-panel-company"
                aria-expanded={openSections.company}
                onClick={() => toggleSection('company')}
                className="w-full flex items-center justify-between p-4 text-left text-sm font-semibold text-slate-200 hover:text-[#80D5C4] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#80D5C4] transition-colors"
              >
                <span>Company & Trust</span>
                <ChevronDown
                  className={cn(
                    'w-4 h-4 text-slate-400 transition-transform duration-200',
                    openSections.company && 'rotate-180 text-[#80D5C4]'
                  )}
                />
              </button>

              {openSections.company && (
                <div
                  id="accordion-panel-company"
                  role="region"
                  aria-labelledby="accordion-trigger-company"
                  className="px-4 pb-4 pt-1 space-y-3 border-t border-slate-800/60 text-xs animate-in fade-in duration-200"
                >
                  <div className="font-mono uppercase text-[10px] text-slate-500 font-bold">Company</div>
                  {companyAndTrustColumn.companySection.links.map((item) => (
                    <div key={item.href} className="flex items-center justify-between py-0.5">
                      <Link to={item.href} className="text-slate-400 hover:text-[#80D5C4]">
                        {item.label}
                      </Link>
                      {item.isComingSoon && (
                        <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-slate-900 text-slate-500 border border-slate-800">
                          Soon
                        </span>
                      )}
                    </div>
                  ))}

                  <div className="font-mono uppercase text-[10px] text-slate-500 font-bold pt-2 border-t border-slate-800">Trust</div>
                  {companyAndTrustColumn.trustSection.links.map((item) => (
                    <Link
                      key={item.href}
                      to={item.href}
                      className="block text-slate-400 hover:text-[#80D5C4] py-0.5"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

          </div>

          {/* Telemetry Status Indicator for Mobile */}
          <div className="pt-2">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-950/40 border border-emerald-800/50 text-[11px] font-mono text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>SYSTEMS OPERATIONAL • 99.98% UPTIME</span>
            </div>
          </div>

        </div>

        {/* LAYER 3: LEGAL BOTTOM BAR */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono">
          <div className="flex items-center gap-6">
            {legalBottomBar.links.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="hover:text-slate-300 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#80D5C4]"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div>
            © {currentYear} {legalBottomBar.copyrightOwner}. All rights reserved.
          </div>
        </div>

      </div>
    </footer>
  );
}
