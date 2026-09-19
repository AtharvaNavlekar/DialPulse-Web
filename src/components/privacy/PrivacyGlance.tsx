import React from 'react';
import { Database, ShieldCheck, FileCheck, Cpu, Trash2, ArrowRight } from 'lucide-react';

interface GlanceItem {
  id: string;
  icon: React.ElementType;
  title: string;
  description: string;
  targetId: string;
  tag: string;
}

const GLANCE_ITEMS: GlanceItem[] = [
  {
    id: 'tenant-scoped',
    icon: Database,
    title: 'Tenant-scoped data',
    description: 'Customer data is processed strictly within verified tenant boundaries.',
    targetId: 'customer-and-tenant-data',
    tag: 'Partitioned'
  },
  {
    id: 'server-auth',
    icon: ShieldCheck,
    title: 'Server-side authorization',
    description: 'Access decisions and RBAC rules are enforced exclusively by the backend.',
    targetId: 'security-and-access-control',
    tag: 'Zero-Trust'
  },
  {
    id: 'security-logging',
    icon: FileCheck,
    title: 'Security logging',
    description: 'Important security, auth, and data-export events are recorded in audit logs.',
    targetId: 'security-and-access-control',
    tag: 'Traceable'
  },
  {
    id: 'ai-controls',
    icon: Cpu,
    title: 'AI processing controls',
    description: 'AI requests pass through permission, quota, and server-side sanitization controls.',
    targetId: 'ai-processing',
    tag: 'Sanitized'
  },
  {
    id: 'retention-status',
    icon: Trash2,
    title: 'Deletion & retention',
    description: 'Current technical behavior is documented; contractual periods remain pending review.',
    targetId: 'retention-and-deletion',
    tag: 'Review Active'
  }
];

export function PrivacyGlance() {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const elem = document.getElementById(targetId);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // Update hash without jumping
      window.history.pushState(null, '', `#${targetId}`);
    }
  };

  return (
    <section className="py-12 bg-surface-container-low border-b border-outline-variant/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-primary font-semibold block mb-1">
              SUMMARY OVERVIEW
            </span>
            <h2 className="text-xl sm:text-2xl font-display font-bold text-on-surface">
              Privacy Architecture at a Glance
            </h2>
          </div>
          <span className="text-xs text-on-surface-variant font-mono">
            Click any principle to jump to detailed technical specifications
          </span>
        </div>

        {/* 5 concise cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {GLANCE_ITEMS.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.id}
                href={`#${item.targetId}`}
                onClick={(e) => scrollToSection(e, item.targetId)}
                className="group p-5 rounded-2xl bg-surface-container-lowest border border-outline-variant/80 hover:border-primary/50 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3.5">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-mono font-medium px-2 py-0.5 rounded-full bg-surface-container text-on-surface-variant group-hover:text-primary transition-colors">
                      {item.tag}
                    </span>
                  </div>
                  <h3 className="text-sm font-semibold text-on-surface group-hover:text-primary transition-colors mb-1.5 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-on-surface-variant leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-outline-variant/40 flex items-center gap-1 text-xs font-medium text-primary opacity-80 group-hover:opacity-100 group-hover:translate-x-1 transition-all">
                  <span>View details</span>
                  <ArrowRight className="w-3 h-3" />
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
