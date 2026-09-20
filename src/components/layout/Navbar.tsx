/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X, Calendar } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Logo } from '@/components/common/Logo';
import { headerNavigation } from '@/config/navigation';
import { FloatingNav } from '@/components/ui/floating-navbar';
import { DesktopDropdown, type OpenMenuType } from '@/components/layout/DesktopDropdown';
import { MobileDrawer } from '@/components/layout/MobileDrawer';

export function Navbar() {
  const [openMenu, setOpenMenu] = useState<OpenMenuType>(null);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const location = useLocation();
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const navContainerRef = useRef<HTMLDivElement>(null);

  // Close menus on route changes
  useEffect(() => {
    setOpenMenu(null);
    setIsMobileOpen(false);
  }, [location.pathname]);

  // Click outside listener
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        navContainerRef.current &&
        !navContainerRef.current.contains(event.target as Node)
      ) {
        setOpenMenu(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Keyboard accessibility: Escape closes dropdown
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpenMenu(null);
        setIsMobileOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Hover handlers with brief intent grace period
  const handleMouseEnter = (menu: OpenMenuType) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setOpenMenu(menu);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpenMenu(null);
    }, 150);
  };

  // Active state evaluation
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

  return (
    <div ref={navContainerRef}>
      <FloatingNav
        dropdown={
          <>
            <DesktopDropdown
              openMenu={openMenu}
              setOpenMenu={setOpenMenu}
              handleMouseEnter={handleMouseEnter}
              handleMouseLeave={handleMouseLeave}
            />
            <MobileDrawer
              isOpen={isMobileOpen}
              onClose={() => setIsMobileOpen(false)}
            />
          </>
        }
      >
        {/* Top Header Row (Closed: 64-68px) */}
        <div className="flex items-center justify-between h-16 md:h-[68px] px-4 sm:px-6 w-full">
          {/* 1. Brand Logo */}
          <div className="flex items-center gap-3 sm:gap-4">
            <Logo size="md" variant="light" />
            <div className="hidden lg:block h-4 w-px bg-slate-200" aria-hidden="true" />
            <span className="hidden lg:inline-flex items-center text-[11px] font-mono font-medium tracking-wider uppercase text-slate-400">
              COMMUNICATION CRM
            </span>
          </div>

          {/* 2. Primary Navigation Links: Product, Solutions, Resources, Pricing */}
          <nav
            className="hidden md:flex items-center gap-1 lg:gap-1.5"
            aria-label="Main Navigation"
            onMouseLeave={handleMouseLeave}
          >
            {/* Product Trigger */}
            <button
              type="button"
              id="product-menu-button"
              aria-expanded={openMenu === 'product'}
              aria-haspopup="true"
              aria-controls="product-dropdown-panel"
              aria-current={isProductActive ? 'page' : undefined}
              onMouseEnter={() => handleMouseEnter('product')}
              onClick={() => setOpenMenu(openMenu === 'product' ? null : 'product')}
              className={cn(
                'flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-sm font-medium transition-colors tracking-tight cursor-pointer',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00695C]/30',
                openMenu === 'product' || isProductActive
                  ? 'text-slate-950 font-semibold bg-teal-50/70 text-[#00695C]'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/60'
              )}
            >
              <span>Product</span>
              <ChevronDown
                className={cn(
                  'w-3.5 h-3.5 transition-transform duration-200 text-slate-400',
                  openMenu === 'product' && 'rotate-180 text-[#00695C]'
                )}
              />
            </button>

            {/* Solutions Trigger */}
            <button
              type="button"
              id="solutions-menu-button"
              aria-expanded={openMenu === 'solutions'}
              aria-haspopup="true"
              aria-controls="solutions-dropdown-panel"
              aria-current={isSolutionsActive ? 'page' : undefined}
              onMouseEnter={() => handleMouseEnter('solutions')}
              onClick={() => setOpenMenu(openMenu === 'solutions' ? null : 'solutions')}
              className={cn(
                'flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-sm font-medium transition-colors tracking-tight cursor-pointer',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00695C]/30',
                openMenu === 'solutions' || isSolutionsActive
                  ? 'text-slate-950 font-semibold bg-teal-50/70 text-[#00695C]'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/60'
              )}
            >
              <span>Solutions</span>
              <ChevronDown
                className={cn(
                  'w-3.5 h-3.5 transition-transform duration-200 text-slate-400',
                  openMenu === 'solutions' && 'rotate-180 text-[#00695C]'
                )}
              />
            </button>

            {/* Resources Trigger */}
            <button
              type="button"
              id="resources-menu-button"
              aria-expanded={openMenu === 'resources'}
              aria-haspopup="true"
              aria-controls="resources-dropdown-panel"
              aria-current={isResourcesActive ? 'page' : undefined}
              onMouseEnter={() => handleMouseEnter('resources')}
              onClick={() => setOpenMenu(openMenu === 'resources' ? null : 'resources')}
              className={cn(
                'flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-sm font-medium transition-colors tracking-tight cursor-pointer',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00695C]/30',
                openMenu === 'resources' || isResourcesActive
                  ? 'text-slate-950 font-semibold bg-teal-50/70 text-[#00695C]'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/60'
              )}
            >
              <span>Resources</span>
              <ChevronDown
                className={cn(
                  'w-3.5 h-3.5 transition-transform duration-200 text-slate-400',
                  openMenu === 'resources' && 'rotate-180 text-[#00695C]'
                )}
              />
            </button>

            {/* Direct Pricing Link */}
            <Link
              to={headerNavigation.pricing.href}
              aria-current={isPricingActive ? 'page' : undefined}
              onMouseEnter={() => setOpenMenu(null)}
              className={cn(
                'px-3.5 py-2 rounded-xl text-sm font-medium transition-colors tracking-tight',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00695C]/30',
                isPricingActive
                  ? 'text-slate-950 font-semibold bg-teal-50/70 text-[#00695C]'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/60'
              )}
            >
              {headerNavigation.pricing.label}
            </Link>
          </nav>

          {/* 3. Action Group: Sign In + Talk to DialPulse CTA */}
          <div className="hidden md:flex items-center gap-3 lg:gap-3.5">
            <a
              href="https://app.dialpulse.com/login"
              className="text-sm font-medium text-slate-600 hover:text-slate-950 transition-colors px-2.5 py-1.5 rounded-lg hover:bg-slate-100/50"
            >
              Sign In
            </a>

            <div className="h-4 w-px bg-slate-200" aria-hidden="true" />

            <Link
              to={headerNavigation.cta.href}
              className={cn(
                'inline-flex items-center gap-2 h-10 px-4 sm:px-4.5 rounded-xl text-xs sm:text-sm font-semibold tracking-normal transition-all shadow-xs hover:shadow-sm active:scale-[0.98]',
                location.pathname === '/contact'
                  ? 'bg-[#004D40] text-white ring-2 ring-[#00695C]'
                  : 'bg-[#00695C] hover:bg-[#004D40] text-white'
              )}
            >
              <Calendar className="w-3.5 h-3.5 opacity-90" />
              <span>{headerNavigation.cta.label}</span>
            </Link>
          </div>

          {/* 4. Mobile Menu Toggle Button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => {
                setIsMobileOpen(!isMobileOpen);
                setOpenMenu(null);
              }}
              className="p-2 -mr-1.5 rounded-xl text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500/20 cursor-pointer"
              aria-label="Toggle navigation menu"
              aria-expanded={isMobileOpen}
            >
              {isMobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </FloatingNav>
    </div>
  );
}
