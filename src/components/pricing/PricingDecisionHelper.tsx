import { useState } from 'react';
import { ArrowRight, CheckCircle2, HelpCircle, Sparkles } from 'lucide-react';
import { DECISION_OPTIONS, DecisionOption, PRICING_PLANS } from '@/config/pricing';
import { trackEvent } from '@/lib/analytics';

interface PricingDecisionHelperProps {
  onSelectPlan: (planId: 'core' | 'pro' | 'business' | 'enterprise') => void;
  activePlanId?: string;
}

export function PricingDecisionHelper({ onSelectPlan, activePlanId }: PricingDecisionHelperProps) {
  const [selectedOptionId, setSelectedOptionId] = useState<string>(DECISION_OPTIONS[1].id);

  const activeOption = DECISION_OPTIONS.find((opt) => opt.id === selectedOptionId) || DECISION_OPTIONS[1];
  const recommendedPlan = PRICING_PLANS.find((p) => p.id === activeOption.recommendedPlanId)!;

  const handleSelect = (option: DecisionOption) => {
    setSelectedOptionId(option.id);
    onSelectPlan(option.recommendedPlanId);
    trackEvent('plan_select', {
      source: 'decision_helper',
      problemId: option.id,
      recommendedPlan: option.recommendedPlanId,
    });
  };

  return (
    <section className="py-14 sm:py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-[#00695C] text-xs font-mono font-semibold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5" />
            Decision Guide
          </div>
          <h2 className="text-2xl sm:text-4xl font-display font-bold text-slate-900 tracking-tight">
            What operational friction are you solving today?
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Select your primary operational goal below to view the exact platform tier and participating modules engineered for your workflow.
          </p>
        </div>

        {/* 4 Clickable Options */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-8">
          {DECISION_OPTIONS.map((opt) => {
            const isSelected = opt.id === selectedOptionId;
            return (
              <button
                key={opt.id}
                type="button"
                onClick={() => handleSelect(opt)}
                className={`p-4 rounded-2xl text-left transition-all border flex flex-col justify-between ${
                  isSelected
                    ? 'bg-white border-[#00695C] shadow-md ring-2 ring-teal-500/20'
                    : 'bg-white/70 hover:bg-white border-slate-200 hover:border-slate-300 text-slate-700'
                }`}
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span
                      className={`text-xs font-mono font-bold uppercase tracking-wider ${
                        isSelected ? 'text-[#00695C]' : 'text-slate-500'
                      }`}
                    >
                      Step 1
                    </span>
                    {isSelected && (
                      <span className="w-2 h-2 rounded-full bg-[#00695C]" />
                    )}
                  </div>
                  <h4 className="text-sm font-semibold text-slate-900 leading-snug">
                    {opt.title}
                  </h4>
                </div>
                <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-500 font-medium">Maps to:</span>
                  <span className="font-mono font-bold text-[#00695C]">
                    {opt.recommendedPlanId.toUpperCase()}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Dynamic Mapping Card */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/90 shadow-sm max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-8 space-y-4">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono uppercase tracking-wider bg-teal-50 text-[#00695C] px-2.5 py-1 rounded-md border border-teal-200 font-semibold">
                  Configured Operational Rule
                </span>
                <span className="text-xs text-slate-500 font-mono">
                  Recommendation Target
                </span>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug">
                  Operational Situation: "{activeOption.problemStatement}"
                </h3>
                <p className="text-slate-600 text-sm mt-2 leading-relaxed">
                  {activeOption.whyThisPlan}
                </p>
              </div>

              {/* Modules participating */}
              <div className="space-y-1.5 pt-1">
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-500 block">
                  Key Participating Modules:
                </span>
                <div className="flex flex-wrap gap-2">
                  {activeOption.keyModules.map((mod) => (
                    <span
                      key={mod}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-100 border border-slate-200 text-slate-800 text-xs font-medium"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#00695C]" />
                      <span>{mod}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="md:col-span-4 flex flex-col items-center justify-center p-6 bg-slate-50 rounded-xl border border-slate-200 text-center space-y-3">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-500">
                Optimal Deployment Tier
              </span>
              <div className="text-3xl font-display font-extrabold text-[#00695C]">
                {recommendedPlan.name}
              </div>
              <span className="text-xs text-slate-600 font-mono">
                {recommendedPlan.monthlyPrice} • {recommendedPlan.billingUnit}
              </span>
              <a
                href={`#plan-card-${recommendedPlan.id}`}
                onClick={() => onSelectPlan(recommendedPlan.id)}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold transition-all mt-1"
              >
                <span>Inspect {recommendedPlan.name} Tier</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
