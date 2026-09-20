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

  // Click & touch outside listener
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (
        navContainerRef.current &&
        !navContainerRef.current.contains(event.target as Node)
      ) {
        setOpenMenu(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, []);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  // Keyboard accessibility: Escape closes dropdown and mobile drawer
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

  // Viewport resize: automatically close mobile drawer if screen widens to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
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
    }, 160);
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
        isMenuOpen={Boolean(openMenu || isMobileOpen)}
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
        {/* Top Header Row (Compact & Balanced: 56-58px) */}
        <div className="flex items-center justify-between h-14 sm:h-[58px] px-4 sm:px-5 lg:px-6 w-full">
          {/* 1. Brand Logo */}
          <div className="flex items-center gap-3 shrink-0">
            <Logo size="md" variant="light" />
            <div className="hidden xl:block h-3.5 w-px bg-slate-200/90" aria-hidden="true" />
            <span className="hidden xl:inline-flex items-center text-[10px] font-mono font-semibold tracking-wider uppercase text-slate-400 select-none">
              COMMUNICATION CRM
            </span>
          </div>

          {/* 2. Primary Navigation Links: Product, Solutions, Resources, Pricing */}
          <nav
            className="hidden lg:flex items-center gap-1 xl:gap-1.5"
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
                'group relative flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-sm transition-colors tracking-tight cursor-pointer',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00695C]/30 focus-visible:ring-offset-1',
                openMenu === 'product'
                  ? 'bg-teal-50/90 text-[#00695C] font-semibold'
                  : isProductActive
                  ? 'bg-teal-50/50 text-[#00695C] font-semibold hover:bg-teal-50/70'
                  : 'font-medium text-slate-600 hover:text-slate-950 hover:bg-slate-100/60'
              )}
            >
              <span>{headerNavigation.product.title}</span>
              <ChevronDown
                className={cn(
                  'w-3.5 h-3.5 transition-transform duration-200',
                  openMenu === 'product'
                    ? 'rotate-180 text-[#00695C]'
                    : isProductActive
                    ? 'text-[#00695C]'
                    : 'text-slate-400 group-hover:text-slate-600'
                )}
                aria-hidden="true"
              />
              {openMenu === 'product' && (
                <span
                  className="absolute -bottom-1 left-3 right-3 h-0.5 bg-[#00695C] rounded-full"
                  aria-hidden="true"
                />
              )}
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
                'group relative flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-sm transition-colors tracking-tight cursor-pointer',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00695C]/30 focus-visible:ring-offset-1',
                openMenu === 'solutions'
                  ? 'bg-teal-50/90 text-[#00695C] font-semibold'
                  : isSolutionsActive
                  ? 'bg-teal-50/50 text-[#00695C] font-semibold hover:bg-teal-50/70'
                  : 'font-medium text-slate-600 hover:text-slate-950 hover:bg-slate-100/60'
              )}
            >
              <span>{headerNavigation.solutions.title}</span>
              <ChevronDown
                className={cn(
                  'w-3.5 h-3.5 transition-transform duration-200',
                  openMenu === 'solutions'
                    ? 'rotate-180 text-[#00695C]'
                    : isSolutionsActive
                    ? 'text-[#00695C]'
                    : 'text-slate-400 group-hover:text-slate-600'
                )}
                aria-hidden="true"
              />
              {openMenu === 'solutions' && (
                <span
                  className="absolute -bottom-1 left-3 right-3 h-0.5 bg-[#00695C] rounded-full"
                  aria-hidden="true"
                />
              )}
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
                'group relative flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-sm transition-colors tracking-tight cursor-pointer',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00695C]/30 focus-visible:ring-offset-1',
                openMenu === 'resources'
                  ? 'bg-teal-50/90 text-[#00695C] font-semibold'
                  : isResourcesActive
                  ? 'bg-teal-50/50 text-[#00695C] font-semibold hover:bg-teal-50/70'
                  : 'font-medium text-slate-600 hover:text-slate-950 hover:bg-slate-100/60'
              )}
            >
              <span>{headerNavigation.resources.title}</span>
              <ChevronDown
                className={cn(
                  'w-3.5 h-3.5 transition-transform duration-200',
                  openMenu === 'resources'
                    ? 'rotate-180 text-[#00695C]'
                    : isResourcesActive
                    ? 'text-[#00695C]'
                    : 'text-slate-400 group-hover:text-slate-600'
                )}
                aria-hidden="true"
              />
              {openMenu === 'resources' && (
                <span
                  className="absolute -bottom-1 left-3 right-3 h-0.5 bg-[#00695C] rounded-full"
                  aria-hidden="true"
                />
              )}
            </button>

            {/* Direct Pricing Link */}
            <Link
              to={headerNavigation.pricing.href}
              aria-current={isPricingActive ? 'page' : undefined}
              onMouseEnter={() => setOpenMenu(null)}
              className={cn(
                'px-3 py-1.5 rounded-xl text-sm transition-colors tracking-tight',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00695C]/30 focus-visible:ring-offset-1',
                isPricingActive
                  ? 'bg-teal-50/50 text-[#00695C] font-semibold hover:bg-teal-50/70'
                  : 'font-medium text-slate-600 hover:text-slate-950 hover:bg-slate-100/60'
              )}
            >
              {headerNavigation.pricing.label}
            </Link>
          </nav>

          {/* 3. Action Group: Sign In + Talk to DialPulse CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="https://app.dialpulse.com/login"
              className="text-sm font-medium text-slate-600 hover:text-slate-950 transition-colors px-2.5 py-1.5 rounded-lg hover:bg-slate-100/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00695C]/30"
            >
              Sign In
            </a>

            <div className="h-3.5 w-px bg-slate-200/90" aria-hidden="true" />

            <Link
              to={headerNavigation.cta.href}
              className={cn(
                'inline-flex items-center gap-1.5 h-9 px-3.5 rounded-xl text-xs sm:text-sm font-semibold tracking-normal transition-all shadow-2xs hover:shadow-xs active:scale-[0.98]',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00695C] focus-visible:ring-offset-1',
                location.pathname === '/contact'
                  ? 'bg-[#004D40] text-white ring-2 ring-[#00695C]/30'
                  : 'bg-[#00695C] hover:bg-[#004D40] text-white'
              )}
            >
              <Calendar className="w-3.5 h-3.5 opacity-90 shrink-0" aria-hidden="true" />
              <span className="whitespace-nowrap">{headerNavigation.cta.label}</span>
            </Link>
          </div>

          {/* 4. Mobile & Tablet Navigation Controls */}
          <div className="flex lg:hidden items-center gap-2">
            {/* Direct CTA button for quick conversions on tablet/mobile */}
            <Link
              to={headerNavigation.cta.href}
              className={cn(
                'inline-flex items-center gap-1.5 h-9 px-3 rounded-xl text-xs font-semibold shadow-2xs transition-all active:scale-[0.98]',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00695C]/40 focus-visible:ring-offset-1',
                location.pathname === '/contact'
                  ? 'bg-[#004D40] text-white'
                  : 'bg-[#00695C] hover:bg-[#004D40] text-white'
              )}
            >
              <Calendar className="w-3.5 h-3.5 opacity-90 shrink-0" aria-hidden="true" />
              <span className="whitespace-nowrap hidden sm:inline">{headerNavigation.cta.label}</span>
              <span className="whitespace-nowrap sm:hidden">Contact</span>
            </Link>

            <button
              type="button"
              id="mobile-nav-toggle"
              onClick={() => {
                setIsMobileOpen(!isMobileOpen);
                setOpenMenu(null);
              }}
              className="w-10 h-10 flex items-center justify-center rounded-xl text-slate-700 hover:text-slate-950 hover:bg-slate-100/80 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00695C]/40 cursor-pointer shrink-0"
              aria-label={isMobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isMobileOpen}
              aria-controls="mobile-nav-drawer"
            >
              {isMobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </FloatingNav>
    </div>
  );
}
