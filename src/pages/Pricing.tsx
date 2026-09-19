import { useState, useEffect } from 'react';
import { useSEO } from '@/lib/seo/useSEO';
import { PRICING_PLANS, PRICING_METADATA } from '@/config/pricing';
import { PricingHero } from '@/components/pricing/PricingHero';
import { PricingValueBanner } from '@/components/pricing/PricingValueBanner';
import { PricingToggle } from '@/components/pricing/PricingToggle';
import { PricingPlanCard } from '@/components/pricing/PricingPlanCard';
import { PricingProductPreview } from '@/components/pricing/PricingProductPreview';
import { PricingDecisionHelper } from '@/components/pricing/PricingDecisionHelper';
import { PricingComparisonTable } from '@/components/pricing/PricingComparisonTable';
import { PricingWhoIsThisFor } from '@/components/pricing/PricingWhoIsThisFor';
import { PricingAddOns } from '@/components/pricing/PricingAddOns';
import { PricingEnterprise } from '@/components/pricing/PricingEnterprise';
import { PricingBuyerTrust } from '@/components/pricing/PricingBuyerTrust';
import { PricingFAQ } from '@/components/pricing/PricingFAQ';
import { ArrowRight, Calendar, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { trackEvent } from '@/lib/analytics';

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');
  const [highlightedPlanId, setHighlightedPlanId] = useState<'core' | 'pro' | 'business' | 'enterprise' | undefined>(undefined);

  useSEO({
    title: 'Pricing & Commercial Architecture | DialPulse CRM',
    description: 'Explore DialPulse commercial tiers (Core, Pro, Business, Enterprise). Compare in-browser WebRTC telephony, lead pipelines, regulatory compliance, and tenant-isolated AI.',
  });

  useEffect(() => {
    trackEvent('pricing_view', {
      phase: PRICING_METADATA.pricingPhase,
    });
    window.scrollTo(0, 0);
  }, []);

  const handleDecisionSelect = (planId: 'core' | 'pro' | 'business' | 'enterprise') => {
    setHighlightedPlanId(planId);
  };

  return (
    <div className="w-full bg-[#F8FAFC] min-h-screen text-slate-900 selection:bg-[#00695C] selection:text-white">
      {/* 1. LIGHT HERO */}
      <PricingHero />

      {/* 2. DARK / EDITORIAL VALUE SECTION */}
      <PricingValueBanner />

      {/* 3. LIGHT PRICING & PLAN CARDS */}
      <section id="pricing-plans" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#F8FAFC] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#00695C] bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
              Commercial Tiers
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-bold text-slate-900 tracking-tight">
              Transparent, per-seat platform plans.
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Scale seats effortlessly as your calling operation expands. All commercial terms reflect verified telephony, database isolation, and compliance capabilities.
            </p>

            {/* Billing Frequency Toggle */}
            <div className="pt-4">
              <PricingToggle
                billingCycle={billingCycle}
                onChange={setBillingCycle}
                annualNotice={PRICING_METADATA.annualDiscountNote}
              />
            </div>
          </div>

          {/* 4 Plan Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-4 items-stretch">
            {PRICING_PLANS.map((plan) => (
              <PricingPlanCard
                key={plan.id}
                plan={plan}
                billingCycle={billingCycle}
                isHighlightedByDecision={highlightedPlanId === plan.id}
              />
            ))}
          </div>

          {/* Under-grid assurance note */}
          <div className="p-4 rounded-2xl bg-white border border-slate-200/90 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600 shadow-2xs">
            <div className="flex items-center gap-2.5">
              <ShieldCheck className="w-4 h-4 text-[#00695C] shrink-0" />
              <span>
                <strong>Zero Hidden Seat Lock-ins:</strong> Add or remove seats dynamically via your tenant dashboard. Unused seats are never penalized.
              </span>
            </div>
            <a
              href="#decision-helper"
              className="font-semibold text-[#00695C] hover:text-[#004D40] whitespace-nowrap"
            >
              Need help deciding which tier fits? Use the Decision Guide ↓
            </a>
          </div>
        </div>
      </section>

      {/* 4. PRODUCT VISUAL PREVIEW */}
      <section className="py-6 bg-slate-50 border-b border-slate-200/80">
        <PricingProductPreview />
      </section>

      {/* 5. DECISION HELPER ("What are you trying to solve?") */}
      <div id="decision-helper">
        <PricingDecisionHelper
          onSelectPlan={handleDecisionSelect}
          activePlanId={highlightedPlanId}
        />
      </div>

      {/* 6. COMPREHENSIVE FEATURE COMPARISON TABLE */}
      <PricingComparisonTable />

      {/* 7. "WHO IS THIS FOR?" SELF-SELECTION ARCHETYPES */}
      <PricingWhoIsThisFor />

      {/* 8. MODULAR ADD-ONS & USAGE ARCHITECTURE */}
      <PricingAddOns />

      {/* 9. DARK ENTERPRISE & BESPOKE SECTION */}
      <PricingEnterprise />

      {/* 10. B2B BUYER TRUST ("Before you choose") */}
      <PricingBuyerTrust />

      {/* 11. LIGHT PRICING FAQ */}
      <PricingFAQ />

      {/* 12. HIGH-IMPACT FINAL CTA */}
      <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#00695C] via-[#00574B] to-[#004D40] text-white relative overflow-hidden">
        {/* Subtle decorative circles */}
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white/5 pointer-events-none blur-2xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-black/10 pointer-events-none blur-2xl" />

        <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-mono font-semibold uppercase tracking-wider">
            <CheckCircle2 className="w-3.5 h-3.5 text-teal-300" />
            Clear Operational Path
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-bold tracking-tight text-white leading-[1.08]">
            Ready to find the right setup <br className="hidden sm:block" />
            for your sales team?
          </h2>

          <p className="text-base sm:text-xl text-teal-100/90 leading-relaxed max-w-2xl mx-auto">
            Book a 20-minute architecture review with our solution engineering team. We'll map your team hierarchy, evaluate calling volumes, and structure a transparent commercial plan.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              to="/contact"
              onClick={() => trackEvent('get_started_click', { source: 'pricing_final_cta' })}
              className="inline-flex items-center gap-2 h-14 px-8 rounded-xl bg-white text-[#00695C] hover:bg-slate-50 text-base font-bold transition-all shadow-lg hover:shadow-xl active:scale-[0.99]"
            >
              <span>Book Architecture Review</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/contact"
              onClick={() => trackEvent('demo_click', { source: 'pricing_final_cta' })}
              className="inline-flex items-center gap-2 h-14 px-7 rounded-xl bg-teal-800/60 hover:bg-teal-800 border border-teal-600/40 text-white text-base font-semibold transition-all"
            >
              <Calendar className="w-4 h-4 text-teal-200" />
              <span>Request Guided Demo</span>
            </Link>
          </div>

          <div className="pt-6 border-t border-teal-600/40 flex flex-wrap items-center justify-center gap-8 text-xs font-mono text-teal-200/90">
            <span>✓ Multi-Tenant PostgreSQL Isolation</span>
            <span>✓ In-Browser WebRTC Softphone</span>
            <span>✓ Zero-Bypass DNC Verification</span>
            <span>✓ Zero Vendor Data Lock-In</span>
          </div>
        </div>
      </section>
    </div>
  );
}
