import { useState } from 'react';
import { Check, ArrowRight, ShieldAlert, ChevronDown, ChevronUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PricingPlan } from '@/config/pricing';
import { trackEvent } from '@/lib/analytics';

interface PricingPlanCardProps {
  key?: string | number;
  plan: PricingPlan;
  billingCycle: 'monthly' | 'annual';
  isHighlightedByDecision?: boolean;
}

export function PricingPlanCard({ plan, billingCycle, isHighlightedByDecision }: PricingPlanCardProps) {
  const [showAllFeatures, setShowAllFeatures] = useState(false);

  const isEmphasized = plan.highlighted || isHighlightedByDecision;
  const isEnterprise = plan.id === 'enterprise';

  const priceValue = billingCycle === 'annual' ? plan.annualPrice : plan.monthlyPrice;

  const handleCtaClick = () => {
    trackEvent('plan_select', {
      planId: plan.id,
      planName: plan.name,
      billingCycle,
    });
  };

  return (
    <div
      id={`plan-card-${plan.id}`}
      className={`rounded-[24px] p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 relative ${
        isEnterprise
          ? 'bg-slate-900 text-white border-2 border-slate-700 shadow-xl'
          : isEmphasized
          ? 'bg-white text-slate-900 border-2 border-[#00695C] shadow-lg ring-4 ring-teal-500/10'
          : 'bg-white text-slate-900 border border-slate-200 shadow-xs hover:border-slate-300 hover:shadow-sm'
      }`}
    >
      {/* Badge if present or highlighted */}
      {(plan.badge || isHighlightedByDecision) && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-10">
          <span
            className={`px-3.5 py-1 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider shadow-xs ${
              isHighlightedByDecision
                ? 'bg-amber-500 text-white border border-amber-600'
                : isEnterprise
                ? 'bg-slate-800 text-teal-400 border border-slate-700'
                : 'bg-[#00695C] text-white border border-[#004D40]'
            }`}
          >
            {isHighlightedByDecision ? 'Selected from helper' : plan.badge}
          </span>
        </div>
      )}

      {/* Top Header & Description */}
      <div className="space-y-4">
        <div className="flex items-center justify-between gap-2">
          <h3
            className={`text-2xl font-display font-bold tracking-tight ${
              isEnterprise ? 'text-white' : 'text-slate-900'
            }`}
          >
            {plan.name}
          </h3>
          <span
            className={`text-[11px] font-mono font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-md ${
              isEnterprise
                ? 'bg-slate-800 text-slate-300 border border-slate-700'
                : 'bg-slate-100 text-slate-600 border border-slate-200'
            }`}
          >
            {plan.tagline}
          </span>
        </div>

        <p
          className={`text-sm leading-relaxed ${
            isEnterprise ? 'text-slate-300' : 'text-slate-600'
          }`}
        >
          {plan.description}
        </p>

        {/* Price Display */}
        <div className="py-4 border-y border-slate-100 dark:border-slate-800">
          <div className="flex items-baseline gap-2">
            <span
              className={`text-4xl sm:text-5xl font-display font-extrabold tracking-tight ${
                isEnterprise ? 'text-teal-400' : 'text-slate-900'
              }`}
            >
              {priceValue}
            </span>
            <span
              className={`text-xs font-mono font-medium ${
                isEnterprise ? 'text-slate-400' : 'text-slate-500'
              }`}
            >
              / seat
            </span>
          </div>

          <div className="flex items-center gap-2 mt-1.5">
            <span
              className={`text-xs font-medium ${
                isEnterprise ? 'text-slate-400' : 'text-slate-500'
              }`}
            >
              {plan.billingUnit}
            </span>
          </div>

          {plan.commercialStatus === 'tbd' && (
            <div className="mt-2.5 flex items-center gap-1.5 text-[11px] text-amber-600 dark:text-amber-400 font-mono">
              <ShieldAlert className="w-3.5 h-3.5 shrink-0" />
              <span>Commercial pricing in final legal review</span>
            </div>
          )}
        </div>

        {/* Best For Callout */}
        <div
          className={`p-3.5 rounded-xl text-xs leading-relaxed ${
            isEnterprise
              ? 'bg-slate-800/80 text-slate-200 border border-slate-700'
              : 'bg-slate-50 text-slate-700 border border-slate-200/80'
          }`}
        >
          <span className="font-semibold block mb-0.5 text-[11px] font-mono uppercase tracking-wider text-[#00695C] dark:text-teal-400">
            Operational Fit:
          </span>
          {plan.bestFor}
        </div>

        {/* Feature List */}
        <div className="space-y-3 pt-2">
          <div
            className={`text-xs font-mono uppercase tracking-wider font-semibold ${
              isEnterprise ? 'text-slate-400' : 'text-slate-500'
            }`}
          >
            Included Capabilities
          </div>

          <ul className="space-y-2.5" role="list">
            {(showAllFeatures ? plan.keyCapabilities : plan.keyCapabilities.slice(0, 5)).map(
              (feature, idx) => (
                <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm">
                  <div
                    className={`w-5 h-5 rounded-md flex items-center justify-center shrink-0 mt-0.5 ${
                      isEnterprise
                        ? 'bg-teal-900/60 text-teal-400'
                        : 'bg-teal-50 text-[#00695C]'
                    }`}
                  >
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span
                    className={
                      feature.startsWith('Everything in')
                        ? 'font-semibold text-slate-900 dark:text-teal-300'
                        : isEnterprise
                        ? 'text-slate-300'
                        : 'text-slate-700'
                    }
                  >
                    {feature}
                  </span>
                </li>
              )
            )}
          </ul>

          {plan.keyCapabilities.length > 5 && (
            <button
              type="button"
              onClick={() => setShowAllFeatures(!showAllFeatures)}
              className={`text-xs font-semibold inline-flex items-center gap-1 mt-1 transition-colors ${
                isEnterprise
                  ? 'text-teal-400 hover:text-teal-300'
                  : 'text-[#00695C] hover:text-[#004D40]'
              }`}
            >
              <span>{showAllFeatures ? 'Show fewer highlights' : `+${plan.keyCapabilities.length - 5} more highlights`}</span>
              {showAllFeatures ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
            </button>
          )}
        </div>
      </div>

      {/* CTA Button */}
      <div className="pt-6 mt-6 border-t border-slate-100 dark:border-slate-800 space-y-2">
        <Link
          to={plan.ctaHref}
          onClick={handleCtaClick}
          className={`w-full h-12 rounded-xl flex items-center justify-center gap-2 text-sm font-semibold transition-all shadow-xs ${
            isEnterprise
              ? 'bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold'
              : isEmphasized
              ? 'bg-[#00695C] hover:bg-[#004D40] text-white'
              : 'bg-slate-900 hover:bg-slate-800 text-white'
          }`}
        >
          <span>{plan.ctaText}</span>
          <ArrowRight className="w-4 h-4" />
        </Link>

        {plan.operationalLimitNote && (
          <p
            className={`text-[11px] text-center ${
              isEnterprise ? 'text-slate-400' : 'text-slate-500'
            }`}
          >
            {plan.operationalLimitNote}
          </p>
        )}
      </div>
    </div>
  );
}
