# Marketing Context

## Goal
The marketing website must convert visitors by showing them a highly realistic, high-fidelity view of the actual product.

## Information Architecture
The site follows a strict, high-conversion flow:
1. **Home (`/`)**: "Why should I care about DialPulse?" — Visual product proof, calling, pipeline, compliance.
2. **Product Explorer (`/product`)**: "What is inside DialPulse?" — Deep product architecture, module explorer, DB isolation, specs.
3. **Solutions (`/solutions`)**: "How does DialPulse solve real business problems?" — Problem-first operational workflows, role archetypes, situation alignment.
4. **Security (`/security`)**: "How is our data protected?" — Tenant isolation, RBAC, encrypted vault, audit logs.
5. **Pricing (`/pricing`)**: "What does it cost and what do I get?" — Transparent, non-fabricated commercial architecture presenting 4 operational tiers (Core, Pro, Business, Enterprise), value dimensions, interactive decision guide, expandable capability matrix, modular infrastructure add-ons, and B2B buyer safeguards.
6. **Contact (`/contact`)**: "How do we get started?" — Architecture review booking and guided demo request.

## Commercial Positioning
- **Honest Commercial Truth**: No fabricated seat prices, fake discounts ("Save 20%"), or artificial quotas. Public self-serve figures are marked as "TBD" pending operational and telecom rate finalization.
- **Value Model Before Price**: Emphasizes the 6 architectural pillars (PostgreSQL DB isolation, in-browser WebRTC softphone, zero-bypass DNC compliance, cadence follow-up triggers, async BI exports, and private in-tenant AI) before comparison.
- **Configurable Pricing Hub**: Commercial rates, add-ons, and comparison attributes reside in `/src/config/pricing.ts` and `/src/lib/currency.ts` (INR ₹ default).

## Tone
Confident, Energetic, Modern, Premium, Human, Technical.
Avoid SaaS marketing clichés ("Supercharge your workflow"). Focus on concrete outcomes ("Connect instantly. Track automatically.").
