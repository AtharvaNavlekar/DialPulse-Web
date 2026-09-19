import React from 'react';
import { FAQItem, FEATURED_FAQ_IDS } from '@/data/faqData';
import { Sparkles, ArrowRight } from 'lucide-react';

interface FAQFeaturedProps {
  items: FAQItem[];
  onSelectQuestion: (id: string) => void;
}

export function FAQFeatured({ items, onSelectQuestion }: FAQFeaturedProps) {
  // Grab the 5 featured items
  const featuredQuestions = FEATURED_FAQ_IDS.map((id) =>
    items.find((item) => item.id === id)
  ).filter((item): item is FAQItem => Boolean(item));

  if (featuredQuestions.length === 0) return null;

  return (
    <section className="py-10 md:py-14 bg-surface-container-low border-b border-outline-variant/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold tracking-widest text-primary uppercase mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>START HERE</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-display font-bold text-on-surface">
              High-Value Core Questions
            </h2>
          </div>
          <span className="text-xs text-on-surface-variant font-mono">
            Direct shortcuts to the most frequently evaluated concepts
          </span>
        </div>

        {/* 5 Quick Link Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
          {featuredQuestions.map((faq, index) => (
            <button
              key={faq.id}
              type="button"
              onClick={() => onSelectQuestion(faq.id)}
              className="text-left p-4 rounded-2xl bg-surface-container-lowest border border-outline-variant/80 hover:border-primary/50 hover:shadow-xs transition-all duration-200 flex flex-col justify-between group h-full"
            >
              <div>
                <div className="flex items-center justify-between text-[10px] font-mono font-semibold text-outline uppercase tracking-wider mb-2">
                  <span>0{index + 1} // {faq.category}</span>
                  <span className="text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    JUMP TO ANSWER
                  </span>
                </div>
                <h3 className="text-sm sm:text-base font-semibold text-on-surface group-hover:text-primary transition-colors leading-snug">
                  {faq.question}
                </h3>
              </div>

              <div className="mt-4 pt-2.5 border-t border-outline-variant/40 flex items-center justify-between text-xs font-medium text-primary">
                <span>View verified answer</span>
                <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </button>
          ))}
        </div>

      </div>
    </section>
  );
}
