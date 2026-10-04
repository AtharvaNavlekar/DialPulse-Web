# DialPulse-Web — Software Development Lifecycle (SDLC) Operating Procedure

**Document Status:** ACTIVE GOVERNANCE STANDARD  
**Version:** 1.0.0  
**Effective Date:** 2026-10-04  
**Scope:** DialPulse-Web (`dialpulse.com` public marketing, product documentation, solutions, pricing, and trust architecture)  
**Authority:** DialPulse Technical Architecture & Governance Board  

---

## 1. Purpose & Scope

This document defines the formal Software Development Lifecycle (SDLC) operating procedure for **DialPulse-Web**, the public-facing marketing, product documentation, and trust architecture web application for DialPulse.

### 1.1 Architectural Boundary & Separation of Concerns
DialPulse-Web is strictly decoupled from the operational DialPulse CRM application:
- **DialPulse-Web (`dialpulse.com` / This Repository):** Public, client-side React 19 SPA served via Vite, showcasing verified CRM capabilities, architecture, pricing parameters, security briefings, and lead capture workflows.
- **DialPulse CRM (`app.dialpulse.com` / `AtharvaNavlekar/CRM`):** Private, authenticated, full-stack multi-tenant operational system handling live telephony, messaging, PostgreSQL tenant databases, background workers, and real-time CRM mutations.

**Core Invariant:** DialPulse-Web never connects directly to production CRM databases, never exposes administrative credentials or secret keys, and never invents features, metrics, certifications, or pricing that do not exist in the underlying CRM architecture.

---

## 2. SDLC Project Flow

Every feature, enhancement, content revision, bug fix, or architectural change follows the deterministic nine-stage lifecycle pipeline:

```
┌──────────┐     ┌──────────────┐     ┌──────────┐     ┌────────┐
│   IDEA   │ ──> │ REQUIREMENT  │ ──> │ ANALYSIS │ ──> │ DESIGN │
└──────────┘     └──────────────┘     └──────────┘     └────────┘
                                                            │
                                                            ▼
┌─────────────┐     ┌─────────────────┐     ┌───────────┐     ┌────────────────┐
│ MAINTENANCE │ <── │     RELEASE     │ <── │ SEC/PRIV  │ <── │ IMPLEMENTATION │
│             │     │ (DEPLOYMENT/QA) │     │  REVIEW   │     │   & TESTING    │
└─────────────┘     └─────────────────┘     └───────────┘     └────────────────┘
```

---

## 3. Detailed Lifecycle Stages (A through I)

### Stage A: Planning

- **Objective:** Evaluate new feature ideas, content updates, or technical enhancements against product vision, marketing strategy, and resource availability to determine feasibility and priority.
- **Required Inputs:**
  - Feature suggestion, customer feedback, operational need, or strategic marketing objective.
  - Current product state (`BRAIN/PROJECT-CONTEXT.md`, `README.md`).
  - Known issues and backlog (`BRAIN/KNOWN-ISSUES.md`, `BRAIN/OPEN-QUESTIONS.md`).
- **Activities:**
  - Triage the request against DialPulse invariants and anti-slop rules.
  - Determine whether the request affects DialPulse-Web (public site) or requires CRM core changes.
  - Assess architectural feasibility, bundle weight impact, and maintenance overhead.
  - Assign preliminary priority, target release milestone, and owner.
- **Required Outputs / Artifacts:**
  - Approved Initiative or Problem Brief.
  - Priority assignment (P0 / P1 / P2 / P3) in tracking system.
- **Exit Criteria:**
  - Initiative explicitly aligned with DialPulse core positioning as "Communication CRM".
  - Confirmed non-violation of core invariants.
- **Responsible Role / Persona:** Product Lead / Technical Product Manager.
- **Failure / Rework Condition:**
  - Idea requests unsupported CRM features, fabricated certifications, or violates decoupling rules.
  - *Action:* Rejected or returned to proposer for re-scoping.

---

### Stage B: Requirements

- **Objective:** Translate the approved initiative into unambiguous, testable, and categorized requirements conforming to the `BRAIN/SDLC-REQUIREMENTS.md` standard.
- **Required Inputs:**
  - Approved Initiative Brief from Stage A.
  - Existing requirements inventory (`BRAIN/PRODUCT-REQUIREMENTS.md`).
  - Public Claims Register (`BRAIN/PUBLIC-CLAIMS-REGISTER.md`).
  - Privacy and regulatory specifications (`BRAIN/PRIVACY-POLICY-REQUIREMENTS.md`).
- **Activities:**
  - Author structured requirement items with unique IDs (`FR-xxx`, `NFR-xxx`, `SEC-xxx`, `PRIV-xxx`, `UX-xxx`, `SEO-xxx`, `OPS-xxx`).
  - Detail business rationale, user persona, functional behaviors, non-functional constraints, and acceptance criteria.
  - Identify regulatory boundaries (e.g., TRAI/TCPA non-guarantee language, DNC distinction).
- **Required Outputs / Artifacts:**
  - Formalized requirement specification entries adhering to `BRAIN/SDLC-REQUIREMENTS.md`.
  - Traceability mapping from business objective to requirement IDs.
- **Exit Criteria:**
  - All acceptance criteria are concrete, unambiguous, and verifiable.
  - Zero unverified claims or fake metrics introduced.
- **Responsible Role / Persona:** Requirements Engineer / Technical Product Manager.
- **Failure / Rework Condition:**
  - Requirements contain ambiguous wording ("fast", "intuitive", "best-in-class") or unverified statistics ("boosts leads by 40%").
  - *Action:* Requirements document rejected; returned for precision refinement.

---

### Stage C: Analysis

- **Objective:** Perform technical, architectural, legal, and claims impact analysis before committing engineering effort or visual design.
- **Required Inputs:**
  - Validated requirements from Stage B.
  - System architecture documentation (`BRAIN/ARCHITECTURE.md`, `README.md`).
  - Public Claims Register (`BRAIN/PUBLIC-CLAIMS-REGISTER.md`).
  - Open Questions Register (`BRAIN/OPEN-QUESTIONS.md`).
- **Activities:**
  - Validate against the **Hierarchy of Truth**:
    - Level 1: Current implementation (source code)
    - Level 2: Documented architecture (`BRAIN/`)
    - Level 3: Approved commercial decisions
    - Level 4: Legal & privacy requirements
    - Level 5: Marketing copy (must never contradict Levels 1–4)
  - Assess impact on bundle size, client-side routing (`App.tsx`), SEO hooks (`useSEO.ts`), and navigation hierarchies (`src/config/navigation.ts`).
  - Determine if the change introduces an open legal, commercial, or security question.
- **Required Outputs / Artifacts:**
  - Technical Impact Assessment (in change record or PR description).
  - Updates to `BRAIN/OPEN-QUESTIONS.md` if business/legal determination is pending.
  - Change ticket classified under `BRAIN/SDLC-CHANGE-CONTROL.md`.
- **Exit Criteria:**
  - Technical feasibility confirmed with zero unmitigated architectural risk.
  - Legal and claims compliance verified against `BRAIN/PUBLIC-CLAIMS-REGISTER.md`.
- **Responsible Role / Persona:** Systems Architect / Technical Lead.
- **Failure / Rework Condition:**
  - Feature creates a security bypass, client-side secret exposure, or contradicts Level 1–4 truth.
  - *Action:* Architecture veto; returned to Stage B or aborted.

---

### Stage D: Design

- **Objective:** Formulate UI/UX components, interaction states, and copy conforming strictly to Material Design 3 and DialPulse Design DNA.
- **Required Inputs:**
  - Requirements specification from Stage B.
  - Technical analysis from Stage C.
  - Design system guidelines (`BRAIN/DESIGN-DNA.md`).
  - Brand and copywriting rules (`BRAIN/BRAND-RULES.md`).
- **Activities:**
  - Create or specify component layouts following the 70% visual / 30% copy ratio.
  - Enforce typography: `Plus Jakarta Sans` for display/headings, `Roboto` for body/controls, `JetBrains Mono` for technical data/schemas.
  - Apply color token palette: Deep Teal (`#00695C`), Surface (`#F8FAF8`), Navy (`#1E293B`), Emerald (`#10B981`).
  - Define responsive behavior across breakpoints (`sm`, `md`, `lg`, `xl`).
  - Design accessible focus states, ARIA roles, and high-contrast text ratios (WCAG AA).
- **Required Outputs / Artifacts:**
  - Component mockups or UI specifications.
  - Microcopy drafts reviewed for anti-slop compliance.
- **Exit Criteria:**
  - Design passes Anti-Slop Audit (no fake testimonials, no glowing neon cliches, no fabricated star ratings).
  - Responsive layouts defined for mobile, tablet, and desktop.
- **Responsible Role / Persona:** UI/UX Designer / Design Technologist.
- **Failure / Rework Condition:**
  - Generic template designs, low-contrast text, missing responsive layouts, or slop copywriting.
  - *Action:* Design rejected; returned for redesign adhering to `DESIGN-DNA.md`.

---

### Stage E: Development (Implementation)

- **Objective:** Implement production-ready React 19, TypeScript, and Tailwind CSS v4 code that meets all requirements without regressions.
- **Required Inputs:**
  - Approved requirements (Stage B), analysis (Stage C), and designs (Stage D).
  - Existing codebase (`src/`, `components.json`, `package.json`, `tsconfig.json`).
  - Coding standards (`BRAIN/DEVELOPMENT-RULES.md`, `README.md`).
- **Activities:**
  - Build modular, functional React components adhering to single-responsibility principle.
  - Maintain absolute client-side secret hygiene: No API keys, zero private tokens in client bundles.
  - Integrate dynamic page titles and OpenGraph tags via `useSEO()`.
  - Maintain component decoupling: Keep floating navbar capsule decoupled from mega-menu panels.
  - Keep simulated behaviors transparent (e.g. `/contact` form feedback clearly structured).
- **Required Outputs / Artifacts:**
  - Pristine TypeScript source files (`.tsx`, `.ts`).
  - Updated navigation configs (`src/config/navigation.ts`) or data arrays if applicable.
- **Exit Criteria:**
  - Code compiles cleanly with zero TypeScript errors (`tsc --noEmit`).
  - Zero ESLint/compiler warnings.
  - No secrets or backend dependencies committed.
- **Responsible Role / Persona:** Frontend Engineer.
- **Failure / Rework Condition:**
  - TypeScript compilation failure, broken routes, hardcoded mock secrets, or violation of design tokens.
  - *Action:* Code rework within Stage E before proceeding to testing.

---

### Stage F: Testing & QA

- **Objective:** Verify functionality, responsive rendering, routing, accessibility, and build integrity in accordance with `BRAIN/SDLC-TEST-PLAN.md`.
- **Required Inputs:**
  - Implemented code from Stage E.
  - Acceptance criteria from Stage B.
  - Test Plan specification (`BRAIN/SDLC-TEST-PLAN.md`).
- **Activities:**
  - **Static & Type Validation:** Execute `npm run lint` (`tsc --noEmit`).
  - **Build Validation:** Execute `npm run build` (`vite build`).
  - **Route & Navigation Testing:** Verify client routing across all declared paths in `App.tsx` and 404 catch-all.
  - **Responsive Testing:** Inspect across mobile (375px), tablet (768px), and desktop (1280px+).
  - **Accessibility Check:** Keyboard tab navigation, focus rings (`focus-visible:ring-2`), ARIA labels.
  - **Interactive State Validation:** Modals, accordions, tabs, drawer toggles, and form error states.
- **Required Outputs / Artifacts:**
  - QA Execution Report / Test Evidence log.
  - Verified exit code 0 on static and build validation commands.
- **Exit Criteria:**
  - 100% acceptance criteria passed.
  - Zero broken routes, console errors, or unhandled exceptions.
  - `npm run lint` passes with 0 errors.
  - `npm run build` generates production bundle cleanly.
- **Responsible Role / Persona:** QA Specialist / Frontend Engineer.
- **Failure / Rework Condition:**
  - Broken layout on mobile, TypeScript compilation errors, dead links, or console errors.
  - *Action:* Defect logged; ticket routed back to Stage E (Development).

---

### Stage G: Security, Privacy & Compliance Review

- **Objective:** Ensure all changes maintain strict cryptographic, privacy, subprocessor, and claims register compliance before any public release.
- **Required Inputs:**
  - Code and test evidence from Stages E and F.
  - `BRAIN/PUBLIC-CLAIMS-REGISTER.md`.
  - `BRAIN/PRIVACY-POLICY-REQUIREMENTS.md`.
  - `BRAIN/SECURITY-RULES.md`.
- **Activities:**
  - **Claims Audit:** Check all user-visible text against `PUBLIC-CLAIMS-REGISTER.md`. Ensure zero unverified claims (no SOC 2 certification claims, no universal 1-hour SLA claims, no uncredited statistics).
  - **Client-Side Secret Scan:** Verify no API keys, private credentials, or internal endpoints are bundled.
  - **Third-Party Telemetry Check:** Verify no unapproved tracking scripts (GA4, Meta Pixel, Hotjar) are loaded without user consent.
  - **Regulatory Disclaimers Check:** Ensure communications compliance text reinforces technical safeguard status rather than legal indemnity.
- **Required Outputs / Artifacts:**
  - Security & Privacy Sign-off recorded in change control log.
  - Claims register updates if new capabilities were legitimately verified.
- **Exit Criteria:**
  - Zero high-risk claims violations (Class E claims eliminated).
  - Privacy policy and cookie consent integrity preserved.
  - Mandatory disclaimers in place.
- **Responsible Role / Persona:** Security Officer / Privacy Officer / Legal Counsel.
- **Failure / Rework Condition:**
  - Introduction of fabricated compliance claims, unverified metrics, or unconsented telemetry scripts.
  - *Action:* Immediate release veto; returned to Stage E or Stage B for remediation.

---

### Stage H: Release / Deployment

- **Objective:** Deploy verified production assets to target staging and production hosting environments safely and reliably.
- **Required Inputs:**
  - Passing QA report (Stage F).
  - Signed Security & Privacy review (Stage G).
  - Release Checklist (`BRAIN/SDLC-RELEASE-CHECKLIST.md`).
- **Activities:**
  - Clean previous artifacts via `npm run clean`.
  - Compile production bundle via `npm run build`.
  - Execute pre-deployment smoke checks.
  - Verify environment variables (e.g. `VITE_` prefixed client variables only).
  - Verify reverse proxy configuration (port 3000 binding, SPA fallback routing to `index.html`).
  - Deploy to target hosting runtime (Google Cloud Run container behind NGINX).
  - Execute post-deployment smoke verification on live URL.
- **Required Outputs / Artifacts:**
  - Completed `BRAIN/SDLC-RELEASE-CHECKLIST.md` sign-off.
  - Deployment log and git commit tag.
  - Updated `BRAIN/CHANGELOG.md` entry.
- **Exit Criteria:**
  - Live production URL responds with HTTP 200.
  - Core routes (`/`, `/product`, `/solutions`, `/pricing`, `/security`, `/contact`) load cleanly.
  - Zero console errors in browser runtime.
- **Responsible Role / Persona:** Release Manager / DevOps Engineer.
- **Failure / Rework Condition:**
  - Build failure, 404 on deep links, broken CSS assets, or runtime JavaScript exceptions.
  - *Action:* Trigger Rollback Procedure immediately (see `BRAIN/SDLC-RELEASE-CHECKLIST.md`).

---

### Stage I: Maintenance

- **Objective:** Monitor production stability, track user feedback, audit dependencies for vulnerabilities, and manage technical debt.
- **Required Inputs:**
  - Production monitoring feedback and error telemetry.
  - Security advisory alerts (e.g., npm audit vulnerabilities).
  - User inquiries submitted via `/contact`.
  - Maintenance backlog (`BRAIN/KNOWN-ISSUES.md`).
- **Activities:**
  - Monitor runtime availability and CDN performance.
  - Review `BRAIN/OPEN-QUESTIONS.md` regularly with leadership to convert pending items into verified decisions.
  - Execute quarterly dependency security audits (`npm audit`).
  - Update `BRAIN/PUBLIC-CLAIMS-REGISTER.md` as CRM engineering ships new production capabilities.
- **Required Outputs / Artifacts:**
  - Maintenance log / issue tickets.
  - Periodic dependency update PRs.
  - Updates to `BRAIN/CHANGELOG.md` and `BRAIN/KNOWN-ISSUES.md`.
- **Exit Criteria:**
  - All critical vulnerabilities remediated within SLA.
  - Documentation kept strictly synchronized with live code.
- **Responsible Role / Persona:** Maintenance Engineer / Technical Lead.
- **Failure / Rework Condition:**
  - Stale claims out of sync with CRM realities, or unpatched security vulnerabilities.
  - *Action:* Trigger Patch or Minor change workflow through Stage A.

---

## 4. Governance Roles & Responsibilities Matrix (RACI)

| SDLC Stage | Product Lead | Systems Architect | Frontend Engineer | QA Specialist | Sec/Privacy Officer | Release Manager |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: |
| **A. Planning** | **A / R** | C | I | I | C | I |
| **B. Requirements** | **A** | C | I | C | C | I |
| **C. Analysis** | C | **A / R** | C | I | C | I |
| **D. Design** | C | C | C | I | I | I |
| **E. Development** | I | C | **A / R** | C | I | I |
| **F. Testing & QA** | I | I | C | **A / R** | I | I |
| **G. Security / Privacy Review** | I | C | C | I | **A / R** | I |
| **H. Release / Deployment** | I | I | C | C | I | **A / R** |
| **I. Maintenance** | C | C | R | I | C | **A** |

*R = Responsible (does the work) | A = Accountable (approves/owns outcome) | C = Consulted | I = Informed*

---

## 5. Non-Negotiable SDLC Invariants for DialPulse-Web

1. **No Untruthful Claims:** Never publish claims, certifications, or statistics that cannot be verified in the CRM codebase or signed business agreements.
2. **Zero Client Secrets:** Never commit, expose, or transmit backend secrets or private API keys in client-side bundles.
3. **Clean Build Gate:** No code shall be merged or deployed if `npm run lint` or `npm run build` fails.
4. **Decoupled Architecture:** DialPulse-Web must remain a standalone marketing and trust surface. It must never embed backend database engines or operational telephony media relays.
5. **Living Knowledge Base:** All technical decisions, open questions, and changelog records must be updated concurrently in `/BRAIN/` during implementation.
