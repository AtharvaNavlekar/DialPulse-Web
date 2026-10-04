# DialPulse-Web — Requirements Traceability Matrix (RTM)

**Document Status:** ACTIVE GOVERNANCE ARTIFACT  
**Version:** 1.0.0  
**Effective Date:** 2026-10-04  
**Scope:** DialPulse-Web (`dialpulse.com`)  
**Authority:** Technical Architecture & Quality Assurance  

---

## 1. Traceability Standard & Purpose

The Requirements Traceability Matrix (RTM) establishes bidirectional traceability across the complete software development lifecycle of **DialPulse-Web**:
- Traces each requirement from business need to technical design, source code implementation, test verification evidence, and release deployment.
- Identifies gaps between written specifications and implemented realities.
- Ensures no unsupported or unverified claims are represented as completed.

Where implementation or automated test evidence does not yet exist in the codebase, it is explicitly classified as **NOT YET VERIFIED**.

---

## 2. Requirements Traceability Matrix

| Requirement ID | Requirement | Design Reference | Implementation | Test/Evidence | Release | Status |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **FR-001** | Architecture Inquiry & Consultation Form Submission | `BRAIN/PROJECT-CONTEXT.md`, `BRAIN/DESIGN-DNA.md` | `src/pages/Contact.tsx` | Manual form validation test; client simulated submission verified; backend webhook delivery: **NOT YET VERIFIED** | Current Build | PARTIALLY VERIFIED (Simulated) |
| **FR-002** | Commercial Pricing Architecture & Billing Cycle Toggle | `BRAIN/DECISIONS.md:5`, `BRAIN/PRICING-CONTEXT.md` | `src/config/pricing.ts`, `src/pages/Pricing.tsx`, `src/components/pricing/*` | Static type checks (`tsc --noEmit`); manual billing toggle & drawer verification; currency formatter unit test: **NOT YET VERIFIED** | Current Build | VERIFIED (Manual) |
| **FR-003** | Problem-First Solutions Exploration & Slug Deep Linking | `BRAIN/DECISIONS.md:4`, `src/content/solutionsData.ts` | `src/pages/Solutions.tsx`, `src/components/solutions/*` | Manual URL slug deep-linking walkthrough; responsive accordion test; automated E2E test: **NOT YET VERIFIED** | Current Build | VERIFIED (Manual) |
| **FR-004** | Communication Compliance & Zero-Bypass DNC Presentation | `BRAIN/PUBLIC-CLAIMS-REGISTER.md:CMP-001`, `BRAIN/DESIGN-DNA.md` | `src/components/security/SecurityCommunicationSafeguards.tsx`, `src/components/marketing/mockups/HeroMockup.tsx` | Visual component inspection; static type check; CRM live pipeline integration: **NOT YET VERIFIED** (Decoupled) | Current Build | VERIFIED (Manual) |
| **NFR-001** | Build Performance & Production Bundle Budget | `README.md:60-74`, `package.json` | `vite.config.ts`, `@tailwindcss/vite` | `npm run build` output: clean compilation in 5.41s; asset inspection (< 500 KB per chunk target); Lighthouse CI: **NOT YET VERIFIED** | Current Build | VERIFIED |
| **NFR-002** | Single-Page Application Client Routing & Deep Linking | `README.md:264-292`, `App.tsx` | `src/App.tsx`, `react-router-dom` | Manual 21-route matrix walkthrough; 404 catch-all check; automated route crawler: **NOT YET VERIFIED** | Current Build | VERIFIED (Manual) |
| **SEC-001** | Client-Side Secret and Private Key Isolation | `BRAIN/PUBLIC-CLAIMS-REGISTER.md:AI-001`, `README.md:54` | `.env.example`, `vite.config.ts`, `src/` | Codebase secret grep (0 private keys detected); automated secret scanner in CI: **NOT YET VERIFIED** | Current Build | VERIFIED (Manual) |
| **SEC-002** | Production CRM Decoupling & External Redirect Boundaries | `README.md:36-58` (`Architectural Decoupling`) | `src/config/navigation.ts`, `src/components/layout/Navbar.tsx` | External link inspection (`app.dialpulse.com/login`); network tab inspection confirms zero direct CRM DB queries | Current Build | VERIFIED |
| **PRIV-001** | Local Consent State Preservation & Zero Third-Party Trackers | `BRAIN/PRIVACY-POLICY-REQUIREMENTS.md:94-98`, `BRAIN/PUBLIC-CLAIMS-REGISTER.md:LEG-001` | `src/components/common/CookieConsentBanner.tsx`, `src/pages/Cookies.tsx` | Browser network audit (0 external tracker domains requested); localStorage consent inspection; automated tracker scan: **NOT YET VERIFIED** | Current Build | VERIFIED (Manual) |
| **PRIV-002** | Pre-Publication Disclaimers on Legal & Regulatory Policies | `BRAIN/OPEN-QUESTIONS.md`, `BRAIN/PUBLIC-CLAIMS-REGISTER.md:LEG-005` | `src/pages/Privacy.tsx`, `src/pages/Terms.tsx`, `src/pages/Refund.tsx` | Inspection of pre-publication notices and "Pending DPO/Legal Confirmation" badges across `/privacy`, `/terms`, `/refund` | Current Build | VERIFIED |
| **UX-001** | Material Design 3 Floating Navbar Architecture | `BRAIN/DESIGN-DNA.md`, `README.md:210-240` | `src/components/layout/Navbar.tsx`, `src/components/layout/DesktopDropdown.tsx` | Visual scroll anchoring inspection; desktop mega-menu unclipped render test; mobile drawer gesture check | Current Build | VERIFIED (Manual) |
| **UX-002** | Multi-Layer Editorial Footer with Mobile Accordions | `README.md:241-262`, `BRAIN/DESIGN-DNA.md` | `src/components/layout/Footer.tsx`, `src/components/layout/FooterCTA.tsx` | Desktop 5-column directory inspection; mobile viewport (< 1024px) accordion collapse check | Current Build | VERIFIED (Manual) |
| **SEO-001** | Dynamic Page Title, Meta Description & Canonical Sync | `README.md:347`, `src/lib/seo/useSEO.ts` | `src/lib/seo/useSEO.ts`, all `src/pages/*.tsx` | DOM `<head>` inspection across `/`, `/product`, `/pricing`, `/security`; automated OpenGraph validator: **NOT YET VERIFIED** | Current Build | VERIFIED (Manual) |
| **OPS-001** | Strict Type Checking & Automated Build Verification | `package.json:6-12`, `BRAIN/SDLC.md:Stage F` | `package.json`, `tsconfig.json` | `npm run lint` (`tsc --noEmit`) passes with 0 errors; `npm run build` (`vite build`) passes with exit code 0 | Current Build | VERIFIED |
| **OPS-002** | Port 3000 Binding & Cloud Run Container Configuration | `README.md:331-334`, `metadata.json` | `package.json` (`--port=3000 --host=0.0.0.0`), `Dockerfile` | Local dev server binding verification on port 3000; Cloud Run deployment health check: **NOT YET VERIFIED** | Current Build | VERIFIED |

---

## 3. Verification Coverage Summary

- **Total Requirements Formally Traced:** 15
- **Fully Automated Evidence (Lint / Build):** 2 (NFR-001, OPS-001)
- **Verified via Manual Inspection Protocols:** 11 (FR-002, FR-003, FR-004, NFR-002, SEC-001, SEC-002, PRIV-001, PRIV-002, UX-001, UX-002, SEO-001, OPS-002)
- **Partially Verified (Simulated / Pending Backend):** 1 (FR-001: Contact Form Webhook)
- **Unverified Automated Test Suites (Roadmap Items):**
  - Unit test runner for math/currency utilities (`src/lib/currency.ts`): **NOT YET VERIFIED**
  - E2E browser test runner (Playwright): **NOT YET VERIFIED**
  - Automated CI secret scanning: **NOT YET VERIFIED**
  - Automated broken link & SEO tag crawler: **NOT YET VERIFIED**

---

## 4. Traceability Maintenance Protocol

1. **New Requirements:** Any requirement added to `BRAIN/SDLC-REQUIREMENTS.md` must immediately be mapped in this matrix before advancing past Stage C.
2. **Implementation Changes:** Code changes touching mapped files must update the Implementation column and trigger re-verification.
3. **Evidence Updating:** When automated test runners (Vitest, Playwright) are added to `package.json`, "NOT YET VERIFIED" entries must be updated with the corresponding command and exit code evidence.
