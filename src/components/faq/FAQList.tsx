import React from 'react';
import { FAQItem, FAQ_CATEGORIES } from '@/data/faqData';
import { FAQAccordionItem } from './FAQAccordionItem';
import { SearchX, Sparkles } from 'lucide-react';

interface FAQListProps {
  items: FAQItem[];
  openIds: Record<string, boolean>;
  onToggle: (id: string) => void;
  selectedCategory: string;
  searchQuery: string;
  onClearSearch: () => void;
}

export function FAQList({
  items,
  openIds,
  onToggle,
  selectedCategory,
  searchQuery,
  onClearSearch,
}: FAQListProps) {
  // Empty State
  if (items.length === 0) {
    return (
      <div className="py-20 text-center max-w-xl mx-auto px-4">
        <div className="w-14 h-14 rounded-2xl bg-amber-50 border border-amber-200 text-amber-800 flex items-center justify-center mx-auto mb-4">
          <SearchX className="w-7 h-7" />
        </div>
        <h3 className="text-xl font-display font-bold text-on-surface mb-2">
          No answers matched that search.
        </h3>
        <p className="text-on-surface-variant text-sm sm:text-base leading-relaxed mb-6">
          Try a broader term such as leads, security, AI, messaging or pricing.
        </p>
        <button
          type="button"
          onClick={onClearSearch}
          className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-primary bg-primary/10 hover:bg-primary/20 rounded-full transition-colors"
        >
          Clear search
        </button>
      </div>
    );
  }

  // If a specific category is chosen (and not 'all'), or when searching, we group nicely
  const activeCategories = FAQ_CATEGORIES.filter((cat) =>
    items.some((item) => item.category === cat.id)
  );

  return (
    <div className="space-y-16">
      {/* Live Result Counter Banner if search is active */}
      {searchQuery && (
        <div className="flex items-center justify-between pb-4 border-b border-outline-variant/60">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary" />
            <span className="text-sm font-mono font-medium text-on-surface">
              {items.length} {items.length === 1 ? 'question' : 'questions'} found for "{searchQuery}"
            </span>
          </div>
          <button
            type="button"
            onClick={onClearSearch}
            className="text-xs font-mono text-primary hover:underline font-semibold"
          >
            Reset filter
          </button>
        </div>
      )}

      {/* Grouped Category Sections */}
      {activeCategories.map((cat) => {
        const categoryItems = items.filter((item) => item.category === cat.id);
        if (categoryItems.length === 0) return null;

        return (
          <section
            key={cat.id}
            id={`faq-category-${cat.id}`}
            className="scroll-mt-36"
          >
            {/* Category Header */}
            <div className="mb-6 flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 border-b border-outline-variant/50 pb-3">
              <div>
                <span className="text-xs font-mono font-bold tracking-widest text-primary uppercase block mb-1">
                  CATEGORY // {cat.label}
                </span>
                <h2 className="text-2xl sm:text-3xl font-display font-bold text-on-surface">
                  {cat.label}
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-on-surface-variant font-mono max-w-md text-left sm:text-right">
                {cat.description}
              </p>
            </div>

            {/* Accordion List for this category */}
            <div className="space-y-3">
              {categoryItems.map((faq) => (
                <FAQAccordionItem
                  key={faq.id}
                  faq={faq}
                  isOpen={Boolean(openIds[faq.id])}
                  onToggle={() => onToggle(faq.id)}
                />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
