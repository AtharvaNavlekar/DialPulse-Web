# Changelog

## [2026-09-19] - Commercial Pricing Architecture & Dedicated /pricing Route
- **Dedicated Pricing Experience (`/pricing`)**: Designed and built the complete commercial decision experience adhering to Material 3 + DialPulse CRM design tokens (Primary `#00695C`, surface `#F8FAF8`, Plus Jakarta Sans, JetBrains Mono).
- **Non-Fabrication Policy**: Strictly avoided inventing prices, fake user limits, or artificial "Save 20%" discounts. Clearly communicated "TBD" and "Talk to Sales" states while keeping all commercial parameters fully configurable.
- **Centralized Commercial Configuration**: Created `/src/config/pricing.ts` defining 4 operational tiers (Core, Pro, Business, Enterprise), 8 feature comparison categories, 4 problem-driven decision rules, 5 modular add-on categories, and 10 FAQ entries.
- **Reusable Currency Utility**: Created `/src/lib/currency.ts` supporting INR (₹) as the primary base currency with multi-currency extensibility and robust status handling.
- **Visual Rhythm & Editorial Flow**:
  - Light Hero with value badges, commercial notice banner, and clear calls to action.
  - Dark / Editorial Value Banner establishing 6 core infrastructure pillars before price comparison.
  - Light Pricing & Plan Cards with monthly/annual toggle and clear per-seat parameters.
  - High-Fidelity Product UI Preview demonstrating active WebRTC softphone, dual-track recordings, and pipeline progression.
  - Interactive Decision Helper ("What are you trying to solve?") mapping operational situations to platform tiers.
  - Comprehensive 8-category Comparison Table with sticky desktop columns, mobile responsiveness, and click-to-view Feature Specification Drawer.
  - "Who Is This For?" self-selection section covering 4 real-world operational archetypes.
  - Modular Infrastructure Add-ons section detailing pass-through carrier routes and compute scaling.
  - Dark Enterprise & Bespoke section detailing single-tenant PostgreSQL partitions and 1-hour priority SLAs.
  - B2B Buyer Trust section detailing tenant data boundaries, encryption, and regulatory guardrails.
  - Responsive Pricing FAQ with category filtering.
  - High-impact Teal Final CTA.
- **Analytics & SEO**: Integrated pricing analytics tracking (`pricing_view`, `billing_toggle`, `plan_select`, `comparison_expand`, `pricing_faq_open`, `enterprise_cta_click`, `get_started_click`, `demo_click`) and populated meta tags via `useSEO`.
- **Documentation**: Updated `BRAIN/DECISIONS.md`, `BRAIN/MARKETING-CONTEXT.md`, `BRAIN/OPEN-QUESTIONS.md`, and authored `BRAIN/PRICING-CONTEXT.md`.
- **HTML Table Nesting Fix**: Replaced invalid nested `<tr>` wrapper in `PricingComparisonTable.tsx` with `<Fragment key={category.id}>` to resolve React hydration/HTML validity errors (`<tr> cannot be a child of <tr>`).
