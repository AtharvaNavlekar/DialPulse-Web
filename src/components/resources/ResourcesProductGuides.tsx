import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Filter, PhoneCall, Users, BarChart3 } from 'lucide-react';

const PRODUCT_WORKFLOW_ITEMS = [
  {
    key: 'leads',
    title: 'LEADS',
    subtitle: 'Intake, qualification & distribution',
    description: 'Understand how customer information enters and moves through the workflow.',
    icon: Filter,
    href: '/product',
    tag: 'PIPELINE LOGIC',
  },
  {
    key: 'communication',
    title: 'COMMUNICATION',
    subtitle: 'Voice & WhatsApp audit streams',
    description: 'See how calls and messaging connect to customer operations.',
    icon: PhoneCall,
    href: '/product',
    tag: 'VOICE & CHAT',
  },
  {
    key: 'teams',
    title: 'TEAMS',
    subtitle: 'Supervision & role hierarchies',
    description: 'Explore role-based visibility and team operations.',
    icon: Users,
    href: '/product',
    tag: 'RBAC SCOPES',
  },
  {
    key: 'reporting',
    title: 'REPORTING',
    subtitle: 'Operational activity to analytics',
    description: 'Understand how operational activity becomes visibility.',
    icon: BarChart3,
    href: '/product',
    tag: 'AUDIT METRICS',
  },
];

export const ResourcesProductGuides: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-[#00695C]" />
              <span className="text-xs font-mono uppercase tracking-widest text-[#00695C] font-semibold">
                PLATFORM CAPABILITIES
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#191C1B] tracking-tight">
              Start with the workflow.
            </h2>
          </div>
          <p className="text-slate-500 text-sm max-w-md">
            While dedicated deep-dive guides are being authored, you can explore the underlying systems directly on our platform tour.
          </p>
        </div>

        {/* 4 Large Editorial Navigation Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PRODUCT_WORKFLOW_ITEMS.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.key}
                to={item.href}
                className="p-8 rounded-2xl bg-[#F8FAF8] hover:bg-white border border-slate-200/90 hover:border-[#00695C]/40 hover:shadow-md transition-all duration-200 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-[#00695C] group-hover:bg-[#00695C] group-hover:text-white transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono text-slate-400 bg-white px-2.5 py-1 rounded-full border border-slate-200">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="font-display text-2xl font-bold text-slate-900 tracking-tight mb-1 group-hover:text-[#00695C] transition-colors flex items-center justify-between">
                    <span>{item.title}</span>
                    <ArrowUpRight className="w-5 h-5 text-slate-400 group-hover:text-[#00695C] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </h3>

                  <div className="text-xs font-mono text-[#00695C] font-semibold mb-3">
                    {item.subtitle}
                  </div>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-200/80 flex items-center justify-between text-xs font-mono text-slate-500">
                  <span>EXPLORE IN PRODUCT TOUR</span>
                  <span className="text-slate-400">/product &rarr;</span>
                </div>
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
};
