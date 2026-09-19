# Architectural & Design Decisions

## 1. High-Fidelity DOM Mockups vs. Static Images
**Context**: We need to display the DialPulse product prominently throughout the marketing site (70% visual / 30% copy ratio).
**Decision**: We use React/Tailwind to build high-fidelity UI mockups (e.g., `HeroMockup`, `PipelineMockup`, `ComplianceMockup`) instead of static PNGs/SVGs.
**Rationale**: 
- Keeps bundle sizes low.
- Ensures the mockups perfectly match the live CSS theme variables.
- Prevents blurry images on high-DPI screens.
- Allows for easy programmatic updates and interactive animations later.

## 2. Abstraction of Marketing Mockups
**Context**: Rebuilding `Home.tsx` to include rich UIs was causing the file to exceed reasonable line counts.
**Decision**: Abstracted all product visual mockups into `src/components/marketing/mockups/`.
**Rationale**: Keeps structural page files clean and focused on narrative pacing and layout, while isolating complex CSS and layout logic for the fake UIs.

## 3. Typographical Scaling for Marketing
**Context**: The original implementation felt too much like a dashboard, lacking marketing impact.
**Decision**: Drastically increased typography sizes for the marketing routes (H1 up to 72px, major headings up to 56px). 
**Rationale**: Emphasizes confidence and modern SaaS aesthetics, distancing the site from generic Material UI component demos.

## 4. Problem-First Solutions Page Architecture (/solutions)
**Context**: Marketing needed a dedicated solutions experience distinct from the feature-first `/product` explorer.
**Decision**: Structured `/solutions` around the operational problem-first journey: "Problem → Operational Friction → Workflow → DialPulse Solution → Modules Used → Outcome → CTA".
**Rationale**:
- Rejects generic industry vertical claims ("Best CRM for Real Estate") in favor of verified operational situations ("Growing Sales Teams", "High-Volume Telecalling", "Policy-Driven Communication").
- Centers on 8 concrete operational categories: Lead Operations, Sales Team Operations, Customer Communication, Follow-up Discipline, Performance Visibility, Communication Compliance, Customer Operations, and In-Tenant AI Assistance.
- Maps solutions directly to verified product modules, tenant database isolation boundaries, and role-based access control tiers (Owner, Team Lead, Telecaller, Admin).

## 5. Commercial Pricing Architecture & Non-Fabrication Invariant (/pricing)
**Context**: The marketing website needed a dedicated, serious SaaS pricing experience answering "What do I get? What will it cost? Which option fits my team?", but public commercial rates (per-seat fees, annual discounts, limits) have not yet been finalized.
**Decision**:
- Implemented a complete commercial presentation architecture with parameterized data models in `/src/config/pricing.ts` and currency utilities in `/src/lib/currency.ts` (supporting INR ₹ as default).
- Strictly enforced non-fabrication: Displayed explicit "TBD" / "Talk to Sales" states rather than inventing artificial pricing, fake user quotas, or fake "20% off" discounts.
- Structured 4 operational tiers (Core, Pro, Business, Enterprise) mapped to verified platform capabilities (WebRTC softphone, dual-track recordings, zero-bypass DNC, quiet hours, in-tenant AI, and PostgreSQL tenant isolation).
- Added an interactive Decision Helper ("What are you trying to solve?") with deterministic business rules, an expandable 8-category comparison table with click-to-view feature specification drawers, modular add-on architecture, and transparent B2B buyer diligence safeguards.
**Rationale**: Builds commercial trust with enterprise buyers while leaving zero technical debt for business operations to plug in approved rates upon final launch.
