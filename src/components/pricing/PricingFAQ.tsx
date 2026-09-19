import { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, ArrowRight } from 'lucide-react';
import { PRICING_FAQ } from '@/config/pricing';
import { Link } from 'react-router-dom';
import { trackEvent } from '@/lib/analytics';

export function PricingFAQ() {
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({
    'per-user-structure': true,
    'telephony-billing': true,
  });
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const toggleQuestion = (id: string) => {
    const nextState = !openIds[id];
    setOpenIds((prev) => ({ ...prev, [id]: nextState }));
    if (nextState) {
      trackEvent('pricing_faq_open', { faqId: id });
    }
  };

  const filteredFaqs =
    selectedCategory === 'all'
      ? PRICING_FAQ
      : PRICING_FAQ.filter((item) => item.category === selectedCategory);

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-200/80">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-mono font-semibold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5 text-[#00695C]" />
            Commercial Transparency
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 tracking-tight">
            Frequently Asked Pricing & Licensing Questions
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Direct, candid answers regarding licensing models, telephony minutes, data ownership, and enterprise deployment options.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            {[
              { id: 'all', label: 'All Questions' },
              { id: 'billing', label: 'Licensing & Billing' },
              { id: 'telephony', label: 'Telephony & Carrier' },
              { id: 'compliance', label: 'Compliance & AI' },
              { id: 'enterprise', label: 'Enterprise & Support' },
            ].map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-[#00695C] text-white shadow-xs'
                    : 'bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ Accordion List */}
        <div className="divide-y divide-slate-200 border-y border-slate-200">
          {filteredFaqs.map((faq) => {
            const isOpen = !!openIds[faq.id];
            return (
              <div key={faq.id} className="py-5 sm:py-6">
                <button
                  type="button"
                  onClick={() => toggleQuestion(faq.id)}
                  className="w-full flex items-center justify-between gap-4 text-left group"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-[#00695C] transition-colors">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform ${
                      isOpen ? 'bg-teal-50 text-[#00695C] rotate-180' : 'bg-slate-100 text-slate-500'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="mt-3.5 pr-8 text-slate-600 text-sm sm:text-base leading-relaxed animate-fadeIn">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Help footer banner */}
        <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/90 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-sm font-bold text-slate-900">Have a question not listed here?</h4>
            <p className="text-xs text-slate-600">Our engineering and sales team can review your specific deployment requirements.</p>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold whitespace-nowrap transition-colors"
          >
            <span>Ask Us Directly</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
