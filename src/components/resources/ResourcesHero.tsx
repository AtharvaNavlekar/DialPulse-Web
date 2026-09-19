import React from 'react';
import { ResourceCategory } from '@/data/resourcesData';
import { cn } from '@/lib/utils';
import { Sparkles, BookOpen, Layers, Users, PhoneCall, ShieldCheck, Lock, FolderGit2 } from 'lucide-react';

interface ResourcesHeroProps {
  selectedCategory: ResourceCategory;
  onSelectCategory: (category: ResourceCategory) => void;
}

const CATEGORY_CHIPS: { id: ResourceCategory; label: string; icon?: React.ElementType }[] = [
  { id: 'all', label: 'All' },
  { id: 'guides', label: 'Guides', icon: BookOpen },
  { id: 'product', label: 'Product', icon: Layers },
  { id: 'operations', label: 'Operations', icon: Users },
  { id: 'communication', label: 'Communication', icon: PhoneCall },
  { id: 'compliance', label: 'Compliance', icon: ShieldCheck },
  { id: 'ai', label: 'AI', icon: Sparkles },
  { id: 'security', label: 'Security', icon: Lock },
  { id: 'case-studies', label: 'Case Studies', icon: FolderGit2 },
];

export const ResourcesHero: React.FC<ResourcesHeroProps> = ({
  selectedCategory,
  onSelectCategory,
}) => {
  return (
    <section className="relative pt-12 pb-16 md:pt-20 md:pb-24 bg-[#F8FAF8] border-b border-slate-200/80 overflow-hidden">
      {/* Editorial Grid Texture Subtle Overlay */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#00000006_1px,transparent_1px),linear-gradient(to_bottom,#00000006_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none opacity-60" 
        aria-hidden="true" 
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200/70 text-[#00695C] mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00695C]" />
            <span className="text-[11px] font-mono uppercase tracking-widest font-semibold">
              RESOURCES
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#191C1B] tracking-tight leading-[1.08] mb-6">
            Ideas for doing <br />
            <span className="text-[#00695C]">customer work better.</span>
          </h1>

          {/* Supporting copy */}
          <p className="text-lg sm:text-xl text-[#3F4946] leading-relaxed max-w-2xl mb-10">
            Guides, product thinking and practical resources around the systems, workflows and decisions behind modern customer operations.
          </p>

          {/* Category Navigation Pills */}
          <div className="pt-2">
            <div className="text-xs font-mono uppercase tracking-wider text-slate-500 mb-3 font-semibold flex items-center gap-2">
              <span>EXPLORE CONTENT CATEGORIES</span>
              <span className="text-slate-300 font-normal">/</span>
              <span className="text-[11px] text-slate-400 font-normal">Select a category to view planned resources</span>
            </div>

            <div 
              className="flex flex-wrap items-center gap-2" 
              role="tablist" 
              aria-label="Resource category filter"
            >
              {CATEGORY_CHIPS.map((chip) => {
                const isSelected = selectedCategory === chip.id;
                const Icon = chip.icon;
                return (
                  <button
                    key={chip.id}
                    id={`category-chip-${chip.id}`}
                    role="tab"
                    aria-selected={isSelected}
                    onClick={() => onSelectCategory(chip.id)}
                    className={cn(
                      'inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00695C] focus-visible:ring-offset-2',
                      isSelected
                        ? 'bg-[#00695C] text-white shadow-xs font-semibold'
                        : 'bg-white border border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50'
                    )}
                  >
                    {Icon && (
                      <Icon className={cn('w-3.5 h-3.5', isSelected ? 'text-white' : 'text-slate-400')} />
                    )}
                    <span>{chip.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
