import { X, Check, Minus, Info, Shield, Users, ArrowRight } from 'lucide-react';
import { FeatureComparisonItem, PRICING_PLANS } from '@/config/pricing';
import { Link } from 'react-router-dom';

interface PricingFeatureDrawerProps {
  feature: FeatureComparisonItem | null;
  onClose: () => void;
}

export function PricingFeatureDrawer({ feature, onClose }: PricingFeatureDrawerProps) {
  if (!feature) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="drawer-feature-title"
    >
      <div className="relative w-full max-w-xl bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-200 space-y-6 max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-start justify-between gap-4 border-b border-slate-100 pb-4">
          <div className="space-y-1">
            <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-[#00695C] bg-teal-50 px-2.5 py-0.5 rounded-md border border-teal-200">
              Feature Specification
            </span>
            <h3 id="drawer-feature-title" className="text-xl sm:text-2xl font-display font-bold text-slate-900">
              {feature.name}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
            aria-label="Close feature details"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* What it does */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-slate-500">
            <Info className="w-4 h-4 text-[#00695C]" />
            <span>Operational Capability</span>
          </div>
          <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
            {feature.description}
          </p>
        </div>

        {/* Who needs it */}
        <div className="space-y-2 p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
          <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-slate-700">
            <Users className="w-4 h-4 text-[#00695C]" />
            <span>Target Workflow & Need</span>
          </div>
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
            {feature.whoNeedsIt}
          </p>
        </div>

        {/* Plan Availability Grid */}
        <div className="space-y-3">
          <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500">
            Commercial Tier Availability
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            {PRICING_PLANS.map((plan) => {
              const availability = feature.availability[plan.id];
              const isIncluded = availability === true;
              const isCustom = typeof availability === 'string';
              const isExcluded = availability === false;

              return (
                <div
                  key={plan.id}
                  className={`p-3 rounded-xl border text-center flex flex-col justify-between ${
                    plan.id === 'pro'
                      ? 'bg-teal-50/50 border-teal-200'
                      : plan.id === 'enterprise'
                      ? 'bg-slate-900 text-white border-slate-800'
                      : 'bg-white border-slate-200 text-slate-800'
                  }`}
                >
                  <span className="text-xs font-bold block mb-1 font-display">
                    {plan.name}
                  </span>
                  <div className="flex items-center justify-center min-h-[28px]">
                    {isIncluded ? (
                      <span className="inline-flex items-center gap-1 text-xs font-bold text-teal-700 dark:text-teal-400">
                        <Check className="w-3.5 h-3.5" />
                        <span>Included</span>
                      </span>
                    ) : isCustom ? (
                      <span className="text-[11px] font-mono font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-teal-300">
                        {availability}
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-xs text-slate-400">
                        <Minus className="w-3.5 h-3.5" />
                        <span>—</span>
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer Action */}
        <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
          <span className="text-xs text-slate-500">
            Need tailored configuration?
          </span>
          <Link
            to="/contact"
            onClick={onClose}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#00695C] hover:bg-[#004D40] text-white text-xs font-semibold transition-colors"
          >
            <span>Ask Architecture Team</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
