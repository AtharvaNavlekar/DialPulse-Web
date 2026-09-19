import React, { useState, useEffect } from 'react';
import { ChevronDown, ListOrdered } from 'lucide-react';

export interface TOCSection {
  id: string;
  number: string;
  label: string;
}

export const PRIVACY_SECTIONS: TOCSection[] = [
  { id: 'information-we-handle', number: '01', label: 'Information We Handle' },
  { id: 'how-we-use-information', number: '02', label: 'How We Use Information' },
  { id: 'customer-and-tenant-data', number: '03', label: 'Customer & Tenant Data' },
  { id: 'communications-data', number: '04', label: 'Communications Data' },
  { id: 'security-and-access-control', number: '05', label: 'Security & Access Control' },
  { id: 'ai-processing', number: '06', label: 'AI Processing' },
  { id: 'sharing-and-service-providers', number: '07', label: 'Sharing & Service Providers' },
  { id: 'retention-and-deletion', number: '08', label: 'Retention & Deletion' },
  { id: 'communication-preferences-and-compliance', number: '09', label: 'Preferences & Compliance' },
  { id: 'international-data-handling', number: '10', label: 'International Data Handling' },
  { id: 'privacy-rights-and-requests', number: '11', label: 'Privacy Rights & Requests' },
  { id: 'customer-responsibilities', number: '12', label: 'Customer Responsibilities' },
  { id: 'changes-and-contact', number: '13', label: 'Changes & Contact' },
];

export function PrivacyTOC() {
  const [activeId, setActiveId] = useState<string>(PRIVACY_SECTIONS[0].id);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + 180;
      let currentActive = PRIVACY_SECTIONS[0].id;

      for (const section of PRIVACY_SECTIONS) {
        const elem = document.getElementById(section.id);
        if (elem) {
          const top = elem.offsetTop;
          if (scrollY >= top) {
            currentActive = section.id;
          }
        }
      }
      setActiveId(currentActive);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const elem = document.getElementById(id);
    if (elem) {
      const yOffset = -90; // offset for sticky header
      const y = elem.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setActiveId(id);
      setMobileOpen(false);
      window.history.pushState(null, '', `#${id}`);
    }
  };

  const activeSection = PRIVACY_SECTIONS.find((s) => s.id === activeId) || PRIVACY_SECTIONS[0];

  return (
    <>
      {/* Mobile Selector Bar (Fixed/Sticky on small screens) */}
      <div className="lg:hidden sticky top-16 z-30 bg-surface/95 backdrop-blur-md border-b border-outline-variant/80 py-3 px-4 shadow-xs">
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="w-full flex items-center justify-between px-4 py-2.5 rounded-xl bg-surface-container border border-outline-variant text-sm font-medium text-on-surface"
          aria-expanded={mobileOpen}
        >
          <span className="flex items-center gap-2 truncate">
            <ListOrdered className="w-4 h-4 text-primary shrink-0" />
            <span className="font-mono text-xs text-primary font-bold">{activeSection.number}</span>
            <span className="truncate">{activeSection.label}</span>
          </span>
          <ChevronDown className={`w-4 h-4 text-on-surface-variant transition-transform duration-200 shrink-0 ${mobileOpen ? 'rotate-180' : ''}`} />
        </button>

        {mobileOpen && (
          <div className="mt-2 p-2 rounded-2xl bg-surface-container-lowest border border-outline-variant shadow-lg max-h-80 overflow-y-auto space-y-1">
            {PRIVACY_SECTIONS.map((sec) => (
              <a
                key={sec.id}
                href={`#${sec.id}`}
                onClick={(e) => handleLinkClick(e, sec.id)}
                className={`flex items-center gap-3 px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
                  activeId === sec.id
                    ? 'bg-primary/10 text-primary font-semibold'
                    : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container'
                }`}
              >
                <span className="font-mono text-[11px] opacity-70 w-5">{sec.number}</span>
                <span className="truncate">{sec.label}</span>
              </a>
            ))}
          </div>
        )}
      </div>

      {/* Desktop Sticky Sidebar */}
      <aside className="hidden lg:block w-72 shrink-0">
        <div className="sticky top-24 max-h-[calc(100vh-7rem)] overflow-y-auto pr-4 py-2 scrollbar-thin">
          <div className="flex items-center gap-2 mb-4 px-3 text-xs font-mono font-bold uppercase tracking-wider text-primary">
            <ListOrdered className="w-3.5 h-3.5" />
            <span>Policy Sections</span>
          </div>

          <nav className="space-y-1">
            {PRIVACY_SECTIONS.map((sec) => {
              const isActive = activeId === sec.id;
              return (
                <a
                  key={sec.id}
                  href={`#${sec.id}`}
                  onClick={(e) => handleLinkClick(e, sec.id)}
                  className={`group flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs transition-all duration-150 ${
                    isActive
                      ? 'bg-primary/10 text-primary font-semibold shadow-xs'
                      : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container/60'
                  }`}
                >
                  <span
                    className={`font-mono text-[11px] w-6 shrink-0 transition-colors ${
                      isActive ? 'text-primary font-bold' : 'text-outline group-hover:text-on-surface-variant'
                    }`}
                  >
                    {sec.number}
                  </span>
                  <span className="truncate leading-relaxed">{sec.label}</span>
                </a>
              );
            })}
          </nav>

          {/* Quick Notice in Sidebar */}
          <div className="mt-8 p-3.5 rounded-xl bg-surface-container-low border border-outline-variant/70 text-[11px] text-on-surface-variant leading-relaxed">
            <span className="font-semibold text-on-surface block mb-1">Status: Pre-Production Draft</span>
            Technical audit complete. Legal verification and DPO approval pending.
          </div>
        </div>
      </aside>
    </>
  );
}
