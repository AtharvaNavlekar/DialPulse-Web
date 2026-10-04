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

## 6. Formal SDLC Governance & Truthfulness Gates
**Context**: As the public website expanded across 15+ routes, technical security modules, commercial pricing, and legal trust pages, an engineering and content governance framework was required to prevent regression, unverified claims, secret leakage, and uncontrolled releases.
**Decision**:
- Established a formal 9-stage SDLC pipeline (Planning → Requirements → Analysis → Design → Development → Testing/QA → Security/Privacy Review → Release → Maintenance) documented in `BRAIN/SDLC.md`.
- Formalized requirements engineering (`BRAIN/SDLC-REQUIREMENTS.md`) with standardized requirement ID prefixes (`FR`, `NFR`, `SEC`, `PRIV`, `UX`, `SEO`, `OPS`) and a 12-field mandatory template.
- Implemented formal Change Control (`BRAIN/SDLC-CHANGE-CONTROL.md`) defining 7 change categories (PATCH, MINOR, FEATURE, MAJOR, SECURITY, LEGAL/COMPLIANCE, CONTENT), a 4-tier risk matrix, and explicit re-analysis/re-testing triggers.
- Formulated a 13-point Master Test Plan (`BRAIN/SDLC-TEST-PLAN.md`) transparently distinguishing currently active commands (`npm run lint`, `npm run build`) from roadmap automation (Vitest/Playwright).
- Created a pre-release and deployment quality gate (`BRAIN/SDLC-RELEASE-CHECKLIST.md`) with mandatory rollback criteria and release sign-off templates.
**Rationale**: Anchors engineering velocity in strict truthfulness, verifiable gates, and absolute client-side secret hygiene, safeguarding enterprise trust.
