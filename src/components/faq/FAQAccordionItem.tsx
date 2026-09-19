import React from 'react';
import { ChevronDown, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FAQItem } from '@/data/faqData';
import { cn } from '@/lib/utils';

interface FAQAccordionItemProps {
  faq: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
}

export function FAQAccordionItem({ faq, isOpen, onToggle }: FAQAccordionItemProps) {
  const contentId = `faq-content-${faq.id}`;
  const headerId = `faq-header-${faq.id}`;

  return (
    <div 
      id={`faq-item-${faq.id}`}
      className={cn(
        'rounded-2xl border transition-all duration-200 overflow-hidden',
        isOpen
          ? 'bg-surface-container-lowest border-primary/40 shadow-xs ring-1 ring-primary/20'
          : faq.highlighted
          ? 'bg-surface-container-low border-primary/20 hover:border-primary/40'
          : 'bg-surface-container-lowest border-outline-variant/70 hover:border-outline-variant'
      )}
    >
      <h3>
        <button
          id={headerId}
          type="button"
          aria-expanded={isOpen}
          aria-controls={contentId}
          onClick={onToggle}
          className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-inset group"
        >
          <div className="flex items-start gap-3">
            {faq.highlighted && (
              <span 
                title="Key architecture answer"
                className="mt-1 w-2 h-2 rounded-full bg-primary shrink-0" 
                aria-hidden="true" 
              />
            )}
            <span className={cn(
              'text-base sm:text-lg font-semibold tracking-tight transition-colors duration-150',
              isOpen ? 'text-primary' : 'text-on-surface group-hover:text-primary'
            )}>
              {faq.question}
            </span>
          </div>

          <div className={cn(
            'w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200',
            isOpen 
              ? 'bg-primary/10 text-primary rotate-180' 
              : 'bg-surface-container text-on-surface-variant group-hover:text-primary'
          )}>
            <ChevronDown className="w-4 h-4" />
          </div>
        </button>
      </h3>

      {isOpen && (
        <div
          id={contentId}
          role="region"
          aria-labelledby={headerId}
          className="px-5 pb-5 sm:px-6 sm:pb-6 pt-0 text-on-surface-variant text-sm sm:text-base leading-relaxed border-t border-outline-variant/40 mt-1"
        >
          {/* Answer Text */}
          <div className="pt-3">
            <p className="text-on-surface leading-relaxed">
              {faq.answer}
            </p>

            {/* Optional Verified Documentation / Feature Link */}
            {faq.learnMoreHref && (
              <div className="mt-4 pt-3 border-t border-outline-variant/40 flex items-center">
                <Link
                  to={faq.learnMoreHref}
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-primary hover:text-primary/80 transition-colors group/link"
                >
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>{faq.learnMoreLabel || 'Learn more in product docs'}</span>
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover/link:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
