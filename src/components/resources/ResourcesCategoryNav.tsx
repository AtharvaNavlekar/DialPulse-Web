import React from 'react';
import { ResourceCategory, RESOURCE_CATEGORIES } from '@/data/resourcesData';
import { cn } from '@/lib/utils';
import { BookOpen, Layers, Users, PhoneCall, ShieldCheck, Sparkles, Lock, FolderGit2, ArrowRight } from 'lucide-react';

interface ResourcesCategoryNavProps {
  selectedCategory: ResourceCategory;
  onSelectCategory: (category: ResourceCategory) => void;
}

const CATEGORY_ICONS: Record<string, React.ElementType> = {
  guides: BookOpen,
  product: Layers,
  operations: Users,
  communication: PhoneCall,
  compliance: ShieldCheck,
  ai: Sparkles,
  security: Lock,
  'case-studies': FolderGit2,
};

export const ResourcesCategoryNav: React.FC<ResourcesCategoryNavProps> = ({
  selectedCategory,
  onSelectCategory,
}) => {
  return (
    <section className="py-14 md:py-20 bg-[#F8FAF8] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#00695C]" />
            <span className="text-xs font-mono uppercase tracking-widest text-[#00695C] font-semibold">
              KNOWLEDGE DOMAINS
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#191C1B] tracking-tight mb-4">
            Curated across operational disciplines.
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Select a domain to filter planned materials and explore how DialPulse approaches customer operations.
          </p>
        </div>

        {/* 8 Category Tiles Grid - Asymmetrical M3 Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {RESOURCE_CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            const Icon = CATEGORY_ICONS[cat.id] || BookOpen;

            return (
              <button
                key={cat.id}
                id={`category-card-${cat.id}`}
                onClick={() => onSelectCategory(cat.id)}
                className={cn(
                  'p-6 rounded-2xl text-left transition-all duration-200 cursor-pointer flex flex-col justify-between border relative group',
                  isSelected
                    ? 'bg-white border-[#00695C] shadow-md ring-2 ring-[#00695C]/20'
                    : 'bg-white/80 hover:bg-white border-slate-200/90 hover:border-slate-300 hover:shadow-xs'
                )}
              >
                <div>
                  {/* Top Bar: Icon + Focus Tag */}
                  <div className="flex items-center justify-between mb-4">
                    <div className={cn(
                      'w-10 h-10 rounded-xl flex items-center justify-center transition-colors',
                      isSelected 
                        ? 'bg-[#00695C] text-white' 
                        : 'bg-slate-100 text-slate-700 group-hover:bg-teal-50 group-hover:text-[#00695C]'
                    )}>
                      <Icon className="w-5 h-5" />
                    </div>

                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
                      {cat.focusArea}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className={cn(
                    'font-display text-lg font-bold tracking-tight mb-2 flex items-center justify-between',
                    isSelected ? 'text-[#00695C]' : 'text-slate-900 group-hover:text-[#00695C]'
                  )}>
                    <span>{cat.name.toUpperCase()}</span>
                    <ArrowRight className={cn(
                      'w-4 h-4 transition-transform group-hover:translate-x-1',
                      isSelected ? 'opacity-100 text-[#00695C]' : 'opacity-0 group-hover:opacity-100 text-slate-400'
                    )} />
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {cat.description}
                  </p>
                </div>

                {/* Bottom Status Indicator */}
                <div className="pt-5 mt-4 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <span className={cn('w-1.5 h-1.5 rounded-full', isSelected ? 'bg-[#00695C]' : 'bg-slate-300')} />
                    <span>{isSelected ? 'ACTIVE FILTER' : 'FILTER'}</span>
                  </span>
                  <span className="text-[10px] uppercase text-slate-400">
                    IN PREPARATION
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Reset Filter Button if Filter Active */}
        {selectedCategory !== 'all' && (
          <div className="mt-6 flex items-center justify-center">
            <button
              onClick={() => onSelectCategory('all')}
              className="inline-flex items-center gap-2 text-xs font-mono text-[#00695C] hover:text-[#005a4e] font-semibold underline underline-offset-4 cursor-pointer"
            >
              <span>Reset filter & show all domains</span>
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
