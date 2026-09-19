import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Calendar } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Logo } from '@/components/common/Logo';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 12);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Product', href: '/product' },
    { name: 'Features', href: '/features' },
    { name: 'Solutions', href: '/solutions' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Resources', href: '/resources' },
    { name: 'About', href: '/about' },
    { name: 'Security', href: '/security' },
  ];

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300',
        'bg-white/85 backdrop-blur-md border-b border-slate-200/80',
        scrolled
          ? 'shadow-[0_4px_20px_-4px_rgba(15,23,42,0.06)] bg-white/95 border-slate-200'
          : 'shadow-[0_1px_3px_rgba(0,0,0,0.02)]'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          
          {/* Brand / Logo Area with Editorial Spacer */}
          <div className="flex items-center gap-4 sm:gap-6">
            <Logo size="md" variant="light" />

            {/* Subtle editorial hairline divider */}
            <div className="hidden lg:block h-4 w-px bg-slate-200" aria-hidden="true" />
            
            <span className="hidden lg:inline-flex items-center text-[11px] font-mono font-medium tracking-wider uppercase text-slate-400">
              COMMUNICATION CRM
            </span>
          </div>

          {/* Desktop Editorial Navigation Links */}
          <nav className="hidden md:flex items-center gap-7 lg:gap-10" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive =
                link.href === '/features'
                  ? location.pathname.startsWith('/features')
                  : link.href === '/product'
                  ? location.pathname === '/product'
                  : location.pathname === link.href || (link.href !== '/' && location.pathname.startsWith(link.href));

              return (
                <Link
                  key={link.name}
                  to={link.href}
                  className={cn(
                    'text-sm font-medium transition-colors relative py-1.5 hover:text-slate-900 tracking-tight',
                    isActive
                      ? 'text-slate-900 font-semibold'
                      : 'text-slate-600'
                  )}
                >
                  {link.name}
                  {isActive && (
                    <span
                      className="absolute bottom-0 inset-x-0 h-[2px] bg-[#00695C] rounded-full"
                      aria-hidden="true"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Action Group */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="https://app.dialpulse.com/login"
              className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors px-2 py-1.5"
            >
              Sign In
            </a>

            {/* Subtle hairline separator */}
            <div className="h-4 w-px bg-slate-200" aria-hidden="true" />

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 h-10 px-4 sm:px-5 rounded-xl bg-[#00695C] hover:bg-[#004D40] text-white text-xs sm:text-sm font-semibold tracking-normal transition-all shadow-xs hover:shadow-sm active:scale-[0.98]"
            >
              <Calendar className="w-3.5 h-3.5 opacity-90" />
              <span>Book Demo</span>
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 -mr-1.5 rounded-xl text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500/20"
              aria-label="Toggle navigation menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isOpen && (
        <div className="border-t border-slate-200/80 bg-white/95 backdrop-blur-md px-4 pt-3 pb-6 md:hidden transition-all duration-200">
          <div className="max-w-7xl mx-auto space-y-1">
            {navLinks.map((link) => {
              const isActive =
                link.href === '/features'
                  ? location.pathname.startsWith('/features')
                  : link.href === '/product'
                  ? location.pathname === '/product'
                  : location.pathname === link.href || (link.href !== '/' && location.pathname.startsWith(link.href));

              return (
                <Link
                  key={link.name}
                  to={link.href}
                  className={cn(
                    'flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium transition-colors',
                    isActive
                      ? 'bg-teal-50/80 text-[#00695C] font-semibold'
                      : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900'
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  <span>{link.name}</span>
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00695C]" />
                  )}
                </Link>
              );
            })}

            <div className="pt-3 mt-2 border-t border-slate-100 flex flex-col gap-2">
              <a
                href="https://app.dialpulse.com/login"
                className="w-full h-10 rounded-xl flex items-center justify-center text-sm font-semibold text-slate-700 bg-slate-50 border border-slate-200 hover:bg-slate-100 transition-colors"
              >
                Sign In
              </a>
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="w-full h-10 rounded-xl flex items-center justify-center gap-2 text-sm font-semibold text-white bg-[#00695C] hover:bg-[#004D40] transition-colors shadow-xs"
              >
                <Calendar className="w-4 h-4 opacity-90" />
                <span>Book Demo</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
