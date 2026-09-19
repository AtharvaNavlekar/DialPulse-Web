import { useState, Fragment } from 'react';
import { Check, Minus, Info, ChevronDown, ChevronUp, Layers, HelpCircle } from 'lucide-react';
import { COMPARISON_CATEGORIES, PRICING_PLANS, FeatureComparisonItem } from '@/config/pricing';
import { PricingFeatureDrawer } from './PricingFeatureDrawer';
import { trackEvent } from '@/lib/analytics';

export function PricingComparisonTable() {
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>(
    COMPARISON_CATEGORIES.reduce((acc, cat) => ({ ...acc, [cat.id]: true }), {})
  );
  const [selectedFeature, setSelectedFeature] = useState<FeatureComparisonItem | null>(null);
  const [mobileActivePlan, setMobileActivePlan] = useState<'core' | 'pro' | 'business' | 'enterprise'>('pro');

  const toggleCategory = (catId: string) => {
    trackEvent('comparison_expand', { categoryId: catId });
    setExpandedCategories((prev) => ({
      ...prev,
      [catId]: !prev[catId],
    }));
  };

  const handleOpenDetail = (feature: FeatureComparisonItem) => {
    setSelectedFeature(feature);
  };

  return (
    <section id="plan-comparison" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-mono font-semibold uppercase tracking-wider">
            <Layers className="w-3.5 h-3.5 text-[#00695C]" />
            Side-by-Side Architectural Specifications
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-slate-900 tracking-tight">
            Detailed Capability Comparison
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Examine the operational guardrails, database partitions, and communication modules built into every tier. Click any capability to view full architectural details.
          </p>
        </div>

        {/* Mobile Plan Selector Tabs */}
        <div className="lg:hidden flex items-center justify-center p-1.5 rounded-2xl bg-slate-100 border border-slate-200 overflow-x-auto">
          {PRICING_PLANS.map((plan) => (
            <button
              key={plan.id}
              type="button"
              onClick={() => setMobileActivePlan(plan.id)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                mobileActivePlan === plan.id
                  ? 'bg-[#00695C] text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {plan.name}
            </button>
          ))}
        </div>

        {/* Table Container */}
        <div className="rounded-3xl border border-slate-200 overflow-hidden shadow-xs bg-white">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse" aria-label="Detailed Pricing Feature Comparison">
              {/* Header */}
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50/90 text-slate-900">
                  <th scope="col" className="p-4 sm:p-6 text-sm sm:text-base font-display font-bold w-1/3 min-w-[240px] sticky left-0 bg-slate-50/95 backdrop-blur-xs z-20">
                    Feature & Infrastructure
                  </th>
                  {PRICING_PLANS.map((plan) => (
                    <th
                      key={plan.id}
                      scope="col"
                      className={`p-4 sm:p-6 text-center min-w-[140px] ${
                        plan.id === 'pro'
                          ? 'bg-teal-50/40 border-x border-teal-200/50'
                          : plan.id === 'enterprise'
                          ? 'bg-slate-900 text-white'
                          : ''
                      }`}
                    >
                      <div className="text-base sm:text-lg font-bold font-display">{plan.name}</div>
                      <div className={`text-xs font-mono mt-0.5 ${plan.id === 'enterprise' ? 'text-teal-400' : 'text-slate-500'}`}>
                        {plan.monthlyPrice}
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>

              {/* Body */}
              <tbody className="divide-y divide-slate-100">
                {COMPARISON_CATEGORIES.map((category) => {
                  const isExpanded = expandedCategories[category.id] !== false;

                  return (
                    <Fragment key={category.id}>
                      {/* Category Header Row */}
                      <tr className="bg-slate-100/70 border-y border-slate-200">
                        <td
                          colSpan={5}
                          className="p-3.5 sm:p-4 text-xs font-mono font-bold uppercase tracking-wider text-slate-800"
                        >
                          <button
                            type="button"
                            onClick={() => toggleCategory(category.id)}
                            className="w-full flex items-center justify-between text-left hover:text-[#00695C] transition-colors"
                          >
                            <span className="flex items-center gap-2">
                              <span>{category.name}</span>
                              <span className="text-[11px] font-normal text-slate-500 lowercase">
                                ({category.features.length} capabilities)
                              </span>
                            </span>
                            {isExpanded ? (
                              <ChevronUp className="w-4 h-4 text-slate-500" />
                            ) : (
                              <ChevronDown className="w-4 h-4 text-slate-500" />
                            )}
                          </button>
                        </td>
                      </tr>

                      {/* Category Features */}
                      {isExpanded &&
                        category.features.map((feature) => (
                          <tr
                            key={feature.id}
                            className="hover:bg-slate-50/70 transition-colors group cursor-pointer"
                            onClick={() => handleOpenDetail(feature)}
                          >
                            {/* Feature Name & Info */}
                            <td className="p-4 sm:p-5 text-xs sm:text-sm font-medium text-slate-900 sticky left-0 bg-white group-hover:bg-slate-50/90 backdrop-blur-xs z-10 border-r border-slate-100">
                              <div className="flex items-center justify-between gap-2">
                                <div>
                                  <div className="font-semibold text-slate-900 group-hover:text-[#00695C] transition-colors flex items-center gap-1.5">
                                    <span>{feature.name}</span>
                                    <HelpCircle className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#00695C] transition-colors shrink-0" />
                                  </div>
                                  <p className="text-xs text-slate-500 mt-0.5 line-clamp-1">
                                    {feature.description}
                                  </p>
                                </div>
                              </div>
                            </td>

                            {/* Plan Availability Columns */}
                            {PRICING_PLANS.map((plan) => {
                              const avail = feature.availability[plan.id];
                              const isIncluded = avail === true;
                              const isString = typeof avail === 'string';

                              return (
                                <td
                                  key={plan.id}
                                  className={`p-4 text-center text-xs sm:text-sm ${
                                    plan.id === 'pro'
                                      ? 'bg-teal-50/20 border-x border-teal-200/40'
                                      : plan.id === 'enterprise'
                                      ? 'bg-slate-900/5'
                                      : ''
                                  }`}
                                >
                                  {isIncluded ? (
                                    <div className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-teal-50 text-[#00695C]">
                                      <Check className="w-4 h-4" />
                                      <span className="sr-only">Included in {plan.name}</span>
                                    </div>
                                  ) : isString ? (
                                    <span className="inline-block px-2.5 py-1 rounded-md text-[11px] font-mono font-semibold bg-slate-100 text-slate-800 border border-slate-200">
                                      {avail}
                                    </span>
                                  ) : (
                                    <div className="inline-flex items-center justify-center text-slate-300">
                                      <Minus className="w-4 h-4" />
                                      <span className="sr-only">Not included in {plan.name}</span>
                                    </div>
                                  )}
                                </td>
                              );
                            })}
                          </tr>
                        ))}
                    </Fragment>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Feature Detail Drawer / Modal */}
        <PricingFeatureDrawer
          feature={selectedFeature}
          onClose={() => setSelectedFeature(null)}
        />
      </div>
    </section>
  );
}
