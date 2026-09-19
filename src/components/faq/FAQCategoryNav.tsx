import React from 'react';
import { FAQ_CATEGORIES, FAQCategoryId } from '@/data/faqData';
import { cn } from '@/lib/utils';

interface FAQCategoryNavProps {
  selectedCategory: FAQCategoryId | 'all';
  onSelectCategory: (categoryId: FAQCategoryId | 'all') => void;
  categoryCounts: Record<string, number>;
}

export function FAQCategoryNav({
  selectedCategory,
  onSelectCategory,
  categoryCounts,
}: FAQCategoryNavProps) {
  const allCount = Object.values(categoryCounts).reduce((acc, count) => acc + count, 0);

  return (
    <div className="sticky top-16 md:top-20 z-30 bg-white/95 backdrop-blur-md border-b border-outline-variant/80 py-3 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Scrollable container for mobile & desktop */}
        <nav 
          aria-label="FAQ Category Filters"
          className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-1 scroll-smooth"
        >
          {/* ALL Tab */}
          <button
            type="button"
            onClick={() => onSelectCategory('all')}
            className={cn(
              'px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold tracking-wider uppercase transition-all duration-200 whitespace-nowrap shrink-0 flex items-center gap-1.5',
              selectedCategory === 'all'
                ? 'bg-primary text-white shadow-xs'
                : 'bg-surface-container-low text-on-surface-variant hover:bg-surface-container hover:text-on-surface border border-outline-variant/60'
            )}
          >
            <span>ALL</span>
            <span className={cn(
              'text-[10px] px-1.5 py-0.2 rounded-full font-mono font-normal',
              selectedCategory === 'all' ? 'bg-white/20 text-white' : 'bg-surface-variant text-on-surface-variant'
            )}>
              {allCount}
            </span>
          </button>

          {/* Individual Category Tabs */}
          {FAQ_CATEGORIES.map((cat) => {
            const count = categoryCounts[cat.id] || 0;
            const isSelected = selectedCategory === cat.id;

            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => onSelectCategory(cat.id)}
                className={cn(
                  'px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold tracking-wider uppercase transition-all duration-200 whitespace-nowrap shrink-0 flex items-center gap-1.5',
                  isSelected
                    ? 'bg-primary text-white shadow-xs'
                    : 'bg-surface-container-low text-on-surface-variant hover:bg-surface-container hover:text-on-surface border border-outline-variant/60'
                )}
              >
                <span>{cat.label}</span>
                <span className={cn(
                  'text-[10px] px-1.5 py-0.2 rounded-full font-mono font-normal',
                  isSelected ? 'bg-white/20 text-white' : 'bg-surface-variant text-on-surface-variant'
                )}>
                  {count}
                </span>
              </button>
            );
          })}
        </nav>

      </div>
    </div>
  );
}
