# DialPulse-Web — Authoritative Requirements Baseline

**Document Status:** ACTIVE GOVERNANCE BASELINE  
**Version:** 1.0.0  
**Effective Date:** 2026-10-04  
**Scope:** DialPulse-Web (`dialpulse.com`)  
**Authority:** Technical Architecture & Requirements Engineering  

---

## 1. Document Purpose & Baseline Governance

This document establishes the official, authoritative requirements baseline for **DialPulse-Web**, the public-facing marketing, product documentation, and trust architecture web property for DialPulse.

### 1.1 Governance Principles
1. **Source of Truth:** This baseline represents the canonical entry point for all future SDLC engineering, QA testing, risk analysis, and change control.
2. **Strict Hierarchy of Truth:** All requirements are grounded in verified application source code, documented system architectures (`BRAIN/`), and signed business decisions.
3. **No Fabrication:** Features, commercial pricing, certifications, or operational capabilities that do not exist in the codebase or legal agreements are never documented as verified.
4. **Transparent Status Discipline:** A requirement is marked `VERIFIED` only when backed by objective automated evidence or verified manual inspection protocols. Requirements with partial implementations or pending backend dependencies are classified as `IMPLEMENTED (Simulated)`, `PLANNED`, or `BLOCKED`.

---

## 2. Status Classification Schema

| Status | Definition | Criteria |
| :--- | :--- | :--- |
| **DRAFT** | Requirement authored and in initial review. | Specification written; awaiting architectural alignment. |
| **APPROVED** | Formal sign-off granted by Architecture & Product. | Criteria validated; ready for development. |
| **IN PROGRESS** | Active code development in Stage E. | Branch open; implementation underway. |
| **IMPLEMENTED** | Code complete and functioning in codebase. | Frontend implementation complete; may rely on manual QA protocols. |
| **VERIFIED** | Validated with repeatable evidence. | Automated check passes (`npm run lint`, `npm run build`) or verified manual audit. |
| **BLOCKED** | Implementation halted by external dependency. | Awaiting legal counsel, DPO setup, or backend API provisioning. |
| **DEPRECATED** | Retired or superseded requirement. | Replaced by newer architectural standard. |

---

## 3. Authoritative Requirements Inventory by Category

---

### Category 1: FUNCTIONAL REQUIREMENTS

#### FR-001: Architecture Inquiry & Consultation Form Submission
- **Requirement ID:** FR-001
- **Title:** Architecture Inquiry & Consultation Form Submission
- **Description:** Provide a structured inquiry form on `/contact` allowing enterprise prospects to submit technical inquiries, request architectural walkthroughs, and select team scaling parameters.
- **Business Reason:** High-volume telecalling teams and compliance-sensitive organizations require consultative architectural review rather than unassisted self-serve checkouts.
- **User / Actor:** Enterprise Prospect, VP of Sales, Call Center Director.
- **Functional Requirement:**
  1. The form shall render input fields for: First Name, Last Name, Work Email, Company Name, Team Size (select), Primary Workflow Interest (select), and Message.
  2. Client-side validation shall enforce non-empty required fields and RFC-compliant email syntax before triggering submission.
  3. Upon submission, the form shall display an accessible success state confirming inquiry receipt without causing a full-page reload.
- **Non-Functional Requirement:** Form response feedback must render within 300ms.
- **Dependencies:** `src/pages/Contact.tsx`, Tailwind CSS form styling, Lucide React icons.
- **Risks:** Unhandled input errors; lost high-value enterprise leads due to client-side-only persistence.
- **Acceptance Criteria:**
  - [x] All 7 input fields validate correctly with clear inline error messaging.
  - [x] Invalid email addresses trigger descriptive error states.
  - [x] Submission renders confirmation state with follow-up timeline expectations.
  - [ ] Submission persists directly to production CRM intake queue: **MISSING / PENDING BACKEND**.
- **Source / Reference:** `BRAIN/PROJECT-CONTEXT.md`, `README.md:151`, `BRAIN/RISK-REGISTER.md:RSK-005`.
- **Status:** IMPLEMENTED (Simulated client feedback via `setTimeout`; backend webhook integration pending).

---

#### FR-002: Commercial Pricing Architecture & Parameterization
- **Requirement ID:** FR-002
- **Title:** Commercial Pricing Architecture & Parameterization
- **Description:** Deliver a dedicated `/pricing` route presenting 4 operational tiers (Core, Pro, Business, Enterprise), a monthly/annual billing toggle, an interactive Decision Helper, and an 8-category comparison table while strictly avoiding fabricated pricing rates.
- **Business Reason:** Enable enterprise buyers to self-qualify platform tiers and technical capabilities while business leadership finalizes commercial rates.
- **User / Actor:** Enterprise Buyer, Procurement Manager.
- **Functional Requirement:**
  1. The system shall render 4 distinct tier cards parameterized via `src/config/pricing.ts`.
  2. Where per-seat rates are unconfirmed, the UI shall display transparent "TBD" or "Talk to Sales" notices.
  3. The system shall provide an interactive Decision Helper matching operational bottlenecks to recommended plans.
  4. The system shall render an 8-category comparison table with expandable feature specification drawers.
- **Non-Functional Requirement:** Sticky comparison table header must remain locked during vertical scroll without breaking mobile viewports.
- **Dependencies:** `src/config/pricing.ts`, `src/lib/currency.ts`, `src/pages/Pricing.tsx`, `src/components/pricing/*`.
- **Risks:** Legal disputes or buyer churn resulting from fabricated discounts or hidden per-seat fees.
- **Acceptance Criteria:**
  - [x] Zero fabricated per-seat prices or artificial "Save 20%" discounts displayed.
  - [x] Billing cycle toggle updates plan card descriptors smoothly.
  - [x] Decision Helper outputs deterministic plan recommendations based on user selections.
  - [x] Feature comparison drawer opens and closes without layout clipping.
- **Source / Reference:** `BRAIN/DECISIONS.md:5`, `BRAIN/PRICING-CONTEXT.md`, `BRAIN/PUBLIC-CLAIMS-REGISTER.md:COM-004`.
- **Status:** IMPLEMENTED (Manually verified; currency utility unit test is roadmap).

---

#### FR-003: Problem-First Solutions Exploration & Slug Deep Linking
- **Requirement ID:** FR-003
- **Title:** Problem-First Solutions Exploration & Slug Deep Linking
- **Description:** Provide a problem-oriented solutions hub at `/solutions` supporting direct deep-linking via URL slugs (`/solutions/:slug`) across 8 operational problem categories.
- **Business Reason:** Enterprise buyers evaluate software based on operational pain points (e.g. Lead Operations, Follow-up Control, Compliance) rather than abstract feature matrices.
- **User / Actor:** VP of Revenue Operations, Sales Team Lead, Compliance Officer.
- **Functional Requirement:**
  1. The system shall render 8 problem categories: Lead Operations, Follow-up Control, Customer Communication, Sales Team Operations, Performance Visibility, Customer Operations, Communication Compliance, and AI-Assisted Work.
  2. Accessing `/solutions/:slug` shall automatically select and display the corresponding problem playbook.
  3. Each playbook shall articulate: Problem → Operational Friction → Workflow → DialPulse Solution → Modules Used → Outcome.
- **Non-Functional Requirement:** Tab and slug transitions must execute client-side in under 150ms without full-page reloads.
- **Dependencies:** `src/pages/Solutions.tsx`, `src/pages/SolutionDetail.tsx`, `src/components/solutions/*`, `react-router-dom`.
- **Risks:** Broken deep links; missing slug parameters causing React runtime render crashes.
- **Acceptance Criteria:**
  - [x] All 8 solution slugs resolve cleanly from navigation links and direct URL entry.
  - [x] Invalid slugs fall back gracefully to solutions overview.
  - [x] Workflow comparison diagrams render responsively across mobile and desktop.
- **Source / Reference:** `BRAIN/DECISIONS.md:4`, `README.md:275-276`.
- **Status:** IMPLEMENTED (Manually verified; automated route testing is roadmap).

---

#### FR-004: Communication Compliance & Zero-Bypass DNC Presentation
- **Requirement ID:** FR-004
- **Title:** Communication Compliance & Zero-Bypass DNC Presentation
- **Description:** Provide comprehensive technical visualizers and documentation illustrating DialPulse's pre-flight DNC verification engine, timezone-aware quiet hours, and frequency capping.
- **Business Reason:** High-volume telecalling teams face severe statutory penalties for calling suppressed numbers or violating quiet hours; architectural transparency builds essential trust.
- **User / Actor:** Compliance Officer, Call Center Director, Enterprise Security Assessor.
- **Functional Requirement:**
  1. The system shall present the technical flow of pre-flight compliance checking (Tenant DNC → Area Code Timezone → Calling Window Lock → Programmatic Dial Block).
  2. The system shall explicitly disclaim that software technical safeguards do not constitute legal certification or statutory compliance guarantees under TRAI/TCPA.
- **Non-Functional Requirement:** Diagrams must adhere to Material Design 3 surface elevations and JetBrains Mono code tags.
- **Dependencies:** `src/components/security/SecurityCommunicationSafeguards.tsx`, `src/components/marketing/mockups/HeroMockup.tsx`.
- **Risks:** Misleading prospects into assuming software replaces statutory telemarketing registrations.
- **Acceptance Criteria:**
  - [x] Visual diagrams accurately depict the CRM's multi-step pre-flight check.
  - [x] Prominent disclaimer reinforces that customers remain liable for statutory compliance.
- **Source / Reference:** `BRAIN/PUBLIC-CLAIMS-REGISTER.md:CMP-001-003`, `src/components/security/SecurityComplianceDistinction.tsx`.
- **Status:** IMPLEMENTED (Manually verified).

---

#### FR-005: Backend Webhook Ingestion for Contact Inquiries
- **Requirement ID:** FR-005
- **Title:** Backend Webhook Ingestion for Contact Inquiries
- **Description:** Connect the `/contact` form to a live, authenticated backend webhook endpoint to persist enterprise leads into the DialPulse CRM intake queue.
- **Business Reason:** Prevent lost business opportunities by replacing simulated client-side timeouts with durable database ingestion.
- **User / Actor:** Enterprise Prospect, DialPulse Sales Operations.
- **Functional Requirement:**
  1. The form submission handler shall dispatch an asynchronous HTTP POST request to the designated CRM ingestion webhook.
  2. The endpoint shall return a unique submission tracking token.
  3. Network failures shall present a graceful retry state with direct fallback email instructions.
- **Non-Functional Requirement:** Webhook dispatch must time out after 5000ms with clear error messaging.
- **Dependencies:** Backend CRM webhook endpoint, HTTPS transport, `src/pages/Contact.tsx`.
- **Risks:** Unavailability of backend webhook; exposure of internal endpoints to public spam bots.
- **Acceptance Criteria:**
  - [ ] Submissions successfully create lead records in CRM intake queue.
  - [ ] Rate limiting prevents form spamming.
- **Source / Reference:** `README.md:384`, `BRAIN/RISK-REGISTER.md:RSK-005`.
- **Status:** BLOCKED (Awaiting infrastructure deployment of authenticated CRM webhook endpoint).

---

### Category 2: NON-FUNCTIONAL REQUIREMENTS

#### NFR-001: Build Performance & Production Bundle Budget
- **Requirement ID:** NFR-001
- **Title:** Build Performance & Production Bundle Budget
- **Description:** Maintain strict production asset size limits, fast tree-shaking, and rapid build velocity across the React 19 + Vite toolchain.
- **Business Reason:** Fast web performance directly correlates with search indexing, reduced bounce rates, and immediate buyer engagement.
- **User / Actor:** All Website Visitors, Web Crawlers.
- **Functional Requirement:** N/A (Purely non-functional).
- **Non-Functional Requirement:**
  1. Production build executed via `npm run build` must compile cleanly with exit code 0.
  2. Individual vendor chunk sizes must not exceed 500 KB uncompressed.
  3. Total build duration must remain under 15 seconds.
- **Dependencies:** Vite 6, `@tailwindcss/vite`, React 19, `package.json`.
- **Risks:** Bundle bloat resulting in degraded mobile load times and poor Core Web Vitals scores.
- **Acceptance Criteria:**
  - [x] `npm run build` compiles cleanly with exit code 0 in < 10 seconds.
  - [x] Hashed production assets emitted to `dist/assets/`.
  - [ ] Continuous automated Lighthouse score tracking (> 90 Performance): **MISSING / ROADMAP**.
- **Source / Reference:** `package.json:8`, `README.md:60-74`.
- **Status:** VERIFIED (Automated build compilation verified cleanly).

---

#### NFR-002: Single-Page Application Client Routing & Deep Linking
- **Requirement ID:** NFR-002
- **Title:** Single-Page Application Client Routing & Deep Linking
- **Description:** Provide seamless, instantaneous client-side navigation across all 21 public routes using React Router 7 with automatic scroll position reset.
- **Business Reason:** Fluid navigation eliminates full-page reloads and provides a modern SaaS user experience for prospect evaluation.
- **User / Actor:** Website Visitor.
- **Functional Requirement:** N/A (Architectural non-functional).
- **Non-Functional Requirement:**
  1. Route transitions must execute client-side in under 100ms.
  2. `ScrollToTop` component must reset window scroll to top `(0, 0)` upon every route change.
  3. Unmatched URL paths must load the custom `NotFound` component without uncaught exceptions.
- **Dependencies:** `src/App.tsx`, `react-router-dom`, `src/components/layout/ScrollToTop.tsx`.
- **Risks:** Broken deep links causing white-screen crashes on server reload; scroll disorientation.
- **Acceptance Criteria:**
  - [x] All 21 declared routes resolve with HTTP 200 equivalent state in client router.
  - [x] Window scroll resets to top on route change.
  - [x] Unknown routes render custom 404 page with recovery navigation links.
  - [ ] Automated route crawl verification script in CI: **MISSING / ROADMAP**.
- **Source / Reference:** `src/App.tsx`, `README.md:264-292`.
- **Status:** IMPLEMENTED (Manually verified).

---

### Category 3: SECURITY REQUIREMENTS

#### SEC-001: Client-Side Secret and Private Key Isolation
- **Requirement ID:** SEC-001
- **Title:** Client-Side Secret and Private Key Isolation
- **Description:** Ensure zero backend secrets, database connection strings, or private API keys (e.g. `GEMINI_API_KEY`) are committed or bundled into the public client application.
- **Business Reason:** DialPulse-Web is an untrusted public surface. Leaked API keys or internal database URLs would compromise production CRM clusters.
- **User / Actor:** Systems Architect, Security Officer.
- **Functional Requirement:**
  1. The build pipeline shall reject any client environment variable not prefixed with `VITE_`.
  2. All server-side AI integrations (`@google/genai`) must operate behind authenticated server proxy boundaries (`/api/*`).
- **Non-Functional Requirement:** Client bundle code must contain zero plaintext private keys or sensitive credentials.
- **Dependencies:** `vite.config.ts`, `.env.example`.
- **Risks:** Catastrophic credential exposure leading to unauthorized CRM cluster access.
- **Acceptance Criteria:**
  - [x] Zero hardcoded API keys, bearer tokens, or database passwords in `src/`.
  - [x] `.env.example` documents only public configurable variables with zero real secrets.
  - [x] Network inspection during browser usage reveals zero private tokens transmitted.
  - [ ] Automated CI secret scanning action (e.g. GitGuardian/TruffleHog): **MISSING / ROADMAP**.
- **Source / Reference:** `BRAIN/PUBLIC-CLAIMS-REGISTER.md:AI-001`, `README.md:54`, `BRAIN/RISK-REGISTER.md:RSK-007`.
- **Status:** VERIFIED (Verified via manual codebase grep; automated CI scanner pending).

---

#### SEC-002: Production CRM Decoupling & External Redirect Boundaries
- **Requirement ID:** SEC-002
- **Title:** Production CRM Decoupling & External Redirect Boundaries
- **Description:** Maintain strict architectural decoupling between the public marketing website and the private CRM application (`AtharvaNavlekar/CRM`).
- **Business Reason:** Prevent security breaches by ensuring the public website has no direct access to production CRM databases or tenant environments.
- **User / Actor:** Security Officer, Platform Architect.
- **Functional Requirement:**
  1. The marketing website shall never open direct database connections to CRM PostgreSQL or Redis clusters.
  2. Actions requiring authentication (e.g. "Sign In", "Get Started Free") shall route via external hyperlinks to `https://app.dialpulse.com/login` and `https://app.dialpulse.com/signup`.
- **Non-Functional Requirement:** Decoupled architecture must be maintained across all navigation menus and footer links.
- **Dependencies:** `src/config/navigation.ts`, `src/components/layout/Navbar.tsx`.
- **Risks:** Cross-site scripting (XSS) or CSRF attacks bridging from public marketing pages to CRM session cookies.
- **Acceptance Criteria:**
  - [x] Zero CRM database drivers or connection strings in dependencies (`package.json`).
  - [x] All operational app links point to external subdomains.
- **Source / Reference:** `README.md:36-58` (`Architectural Decoupling`), `BRAIN/MARKETING-INVARIANTS.md:3`.
- **Status:** VERIFIED.

---

#### SEC-003: Automated CI/CD Secret Scanning Gate
- **Requirement ID:** SEC-003
- **Title:** Automated CI/CD Secret Scanning Gate
- **Description:** Deploy an automated static analysis hook in the pre-commit or CI pipeline to detect high-entropy strings, private keys, and token patterns before merging code.
- **Business Reason:** Eliminate human error in inadvertently committing credentials to public repositories.
- **User / Actor:** DevOps Engineer, Security Officer.
- **Functional Requirement:** Automated scanner shall scan all git diffs and fail the build if a secret pattern is detected.
- **Non-Functional Requirement:** Scan execution must take less than 5 seconds.
- **Dependencies:** Pre-commit hooks, CI workflow script.
- **Risks:** False positives blocking legitimate commits; false negatives allowing obfuscated keys.
- **Acceptance Criteria:**
  - [ ] Pre-commit or CI job scans staged files and blocks commits containing private keys.
- **Source / Reference:** `BRAIN/RISK-REGISTER.md:RSK-007`, `BRAIN/SDLC-TEST-PLAN.md:2.9`.
- **Status:** PLANNED (Manual secret audit active; automated CI hook not yet installed).

---

### Category 4: PRIVACY REQUIREMENTS

#### PRIV-001: Local Consent State Preservation & Zero Third-Party Trackers
- **Requirement ID:** PRIV-001
- **Title:** Local Consent State Preservation & Zero Third-Party Trackers
- **Description:** Implement a client-side cookie consent banner and local storage preference manager that respects user choice and loads zero unauthorized tracking pixels.
- **Business Reason:** Comply with international data protection principles (GDPR, DPDP Act 2023) and preserve buyer trust.
- **User / Actor:** Website Visitor, Privacy Officer.
- **Functional Requirement:**
  1. The system shall present a consent banner upon first visit offering "Accept All", "Reject Non-Essential", and "Customize Preferences".
  2. User preferences must be saved in `localStorage` under a typed consent record.
  3. The website shall NOT execute third-party ad pixels or behavioral tracking scripts.
- **Non-Functional Requirement:** Consent banner check must execute asynchronously without blocking page rendering.
- **Dependencies:** `src/components/common/CookieConsentBanner.tsx`, `src/pages/Cookies.tsx`.
- **Risks:** Regulatory fines for non-consensual tracking; legal liability from unapproved ad network scripts.
- **Acceptance Criteria:**
  - [x] Banner appears for first-time visitors and dismisses permanently upon selection.
  - [x] Zero network requests dispatched to external tracker domains (Google Analytics, Meta Pixel, Hotjar).
  - [x] Dedicated `/cookies` page details exact categories: Essential, Preferences, Analytics, Marketing.
  - [ ] Automated daily cookie scanner verifying 0 tracking cookies: **MISSING / ROADMAP**.
- **Source / Reference:** `BRAIN/PRIVACY-POLICY-REQUIREMENTS.md:94-98`, `BRAIN/PUBLIC-CLAIMS-REGISTER.md:LEG-001`.
- **Status:** VERIFIED (Manually verified via browser network audit).

---

#### PRIV-002: Pre-Publication Disclaimers on Legal & Regulatory Policies
- **Requirement ID:** PRIV-002
- **Title:** Pre-Publication Disclaimers on Legal & Regulatory Policies
- **Description:** Prominently display pre-publication draft notices, disclaimer badges, and transparent "To be confirmed" placeholders across legal pages (`/privacy`, `/terms`, `/refund`, `/cookies`) until corporate legal entity details and DPO appointments are finalized.
- **Business Reason:** Prevent legal misrepresentation, statutory non-compliance, and deceptive trade practice liability.
- **User / Actor:** General Counsel, Data Protection Officer, Website Visitor.
- **Functional Requirement:**
  1. `/privacy`, `/terms`, `/refund`, and `/cookies` shall display an explicit notice stating policies are drafts subject to formal counsel approval.
  2. Unresolved corporate attributes (entity name, registered address, DPO contact) must be flagged transparently rather than populated with placeholder fictions.
- **Non-Functional Requirement:** Disclaimers must be legible and rendered using high-contrast surface containers.
- **Dependencies:** `src/pages/Privacy.tsx`, `src/pages/Terms.tsx`, `src/pages/Refund.tsx`, `src/pages/Cookies.tsx`.
- **Risks:** Regulatory enforcement for publishing binding legal terms without a registered legal entity.
- **Acceptance Criteria:**
  - [x] Pre-publication banner rendered on all 4 legal pages.
  - [x] Zero fabricated legal entities or addresses published.
- **Source / Reference:** `BRAIN/PUBLIC-CLAIMS-REGISTER.md:LEG-005`, `BRAIN/OPEN-QUESTIONS.md:66-70`.
- **Status:** IMPLEMENTED (Manually verified).

---

#### PRIV-003: Substantive Legal Entity & DPO Contact Publishing
- **Requirement ID:** PRIV-003
- **Title:** Substantive Legal Entity & DPO Contact Publishing
- **Description:** Update legal pages with the official registered corporate entity name, registered office address, governing jurisdiction, and designated Data Protection Officer contact once formally established.
- **Business Reason:** Satisfy statutory disclosure requirements under GDPR, India DPDP Act 2023, and global consumer protection laws.
- **User / Actor:** General Counsel, Data Protection Officer.
- **Functional Requirement:** Replace all "Pending Legal Confirmation" placeholders across `/privacy`, `/terms`, `/refund`, and `/cookies` with verified legal entity data.
- **Non-Functional Requirement:** Must pass legal counsel review before publishing.
- **Dependencies:** Corporate incorporation documents, DPO appointment resolution.
- **Risks:** Publishing incorrect legal entity names leading to contractual invalidity.
- **Acceptance Criteria:**
  - [ ] Official legal corporate entity name published.
  - [ ] Dedicated monitored privacy mailbox (`privacy@dialpulse.com`) provisioned and verified.
- **Source / Reference:** `BRAIN/OPEN-QUESTIONS.md:66-70`, `BRAIN/PRIVACY-POLICY-REQUIREMENTS.md:300`.
- **Status:** BLOCKED (Awaiting executive leadership decision on corporate registration and DPO appointment).

---

#### PRIV-004: Automated CRM Data Retention & Purge Policy Integration
- **Requirement ID:** PRIV-004
- **Title:** Automated CRM Data Retention & Purge Policy Integration
- **Description:** Document verified, automated database purge schedules for lead records, call session metadata, call audio recordings, and SMS logs once executive retention policies and CRM TTL jobs are deployed.
- **Business Reason:** Ensure marketing and privacy claims align with statutory storage limitation mandates without promising purge schedules that the CRM codebase does not execute.
- **User / Actor:** Privacy Officer, Systems Architect.
- **Functional Requirement:** Publish verified retention schedules (e.g. 90-day hot storage for audio, automated purge post-cancellation) on `/privacy` once implemented in CRM database workers.
- **Non-Functional Requirement:** Retention claims must match Level 1 source code truth.
- **Dependencies:** Production CRM database TTL purge workers, executive retention decision.
- **Risks:** Promising automated data deletion that does not occur in database storage, creating statutory liability.
- **Acceptance Criteria:**
  - [ ] Executive decision recorded on retention windows for call audio and inactive leads.
  - [ ] Automated purge workers deployed and verified in CRM repository.
- **Source / Reference:** `BRAIN/OPEN-QUESTIONS.md:57-61`, `BRAIN/PRIVACY-POLICY-REQUIREMENTS.md:181-196`.
- **Status:** BLOCKED (Awaiting executive business decision and CRM backend TTL worker deployment).

---

#### PRIV-005: Contractually Guaranteed Zero AI Model Training Perimeter
- **Requirement ID:** PRIV-005
- **Title:** Contractually Guaranteed Zero AI Model Training Perimeter
- **Description:** Publish formal enterprise warranties guaranteeing zero retention and zero public LLM training on customer audio transcripts once enterprise Google Cloud commercial agreements are executed.
- **Business Reason:** Satisfy enterprise security questionnaires and data processing agreements for regulated financial and healthcare buyers.
- **User / Actor:** Enterprise Security Assessor, General Counsel.
- **Functional Requirement:** Update `/security` and `/privacy` with binding contractual perimeter terms once Google Cloud enterprise BAA/DPA terms are signed.
- **Non-Functional Requirement:** Wording must be approved by legal counsel.
- **Dependencies:** Signed Google Cloud enterprise contract governing `@google/genai` inference.
- **Risks:** Promising third-party provider guarantees that exceed the underlying cloud provider's commercial terms.
- **Acceptance Criteria:**
  - [ ] Google Cloud enterprise terms reviewed and signed by legal counsel.
  - [ ] AI privacy disclosures updated to reflect contractual perimeter.
- **Source / Reference:** `BRAIN/PUBLIC-CLAIMS-REGISTER.md:AI-004`, `BRAIN/OPEN-QUESTIONS.md:52-56`.
- **Status:** BLOCKED (Awaiting corporate legal execution of Google Cloud enterprise commercial terms).

---

### Category 5: UX & ACCESSIBILITY REQUIREMENTS

#### UX-001: Material Design 3 Floating Navbar Architecture
- **Requirement ID:** UX-001
- **Title:** Material Design 3 Floating Navbar Architecture
- **Description:** Maintain an anchored, decoupled floating navigation capsule providing immediate access to key product, solutions, and conversion routes without clipping dropdown contents.
- **Business Reason:** Smooth, persistent navigation facilitates deep exploration across complex product specifications and increases contact conversions.
- **User / Actor:** Website Visitor.
- **Functional Requirement:**
  1. The top capsule shall remain fixed at `top-3 sm:top-4` during scroll (no hide-on-scroll).
  2. Hovering or clicking Product, Solutions, or Resources shall open decoupled floating mega-menu panels.
  3. On viewports `< 1024px`, the system shall render a sliding drawer with accessible accordion sections.
- **Non-Functional Requirement:**
  - Backdrop blur filter `backdrop-blur-md` with `border-slate-200/80` outline.
  - Transition timing must adhere to Material 3 standard easing (200ms–300ms).
- **Dependencies:** `src/components/layout/Navbar.tsx`, `src/components/layout/DesktopDropdown.tsx`, Motion.
- **Risks:** Mega-menu overflow clipping; jittery scroll transitions; mobile drawer focus traps.
- **Acceptance Criteria:**
  - [x] Navbar capsule remains anchored throughout full-page vertical scroll.
  - [x] Dropdown panels render without horizontal scrollbars or clipping.
  - [x] Keyboard `Escape` closes active dropdown or mobile drawer immediately.
- **Source / Reference:** `BRAIN/DESIGN-DNA.md`, `README.md:210-240`.
- **Status:** IMPLEMENTED (Manually verified).

---

#### UX-002: Multi-Layer Editorial Footer with Mobile Accordions
- **Requirement ID:** UX-002
- **Title:** Multi-Layer Editorial Footer with Mobile Accordions
- **Description:** Provide a structured 3-layer global footer comprising a conversion CTA panel, a 5-column operational directory, and a legal/copyright bar, collapsing into accordions on mobile screens.
- **Business Reason:** Provide complete structural wayfinding for search engine spiders and human buyers seeking specific capabilities, documentation, or legal trust resources.
- **User / Actor:** Website Visitor.
- **Functional Requirement:**
  1. Layer 1: Render `FooterCTA` with dual routes to `/product` and `/contact`.
  2. Layer 2: Render 5 columns (Brand/Status, Product, Solutions, Resources, Company & Trust). On screens `< 1024px`, columns must collapse into accessible interactive accordions.
  3. Layer 3: Render copyright notice and direct links to `/privacy`, `/terms`, `/cookies`, and `/refund`.
- **Non-Functional Requirement:** Color contrast must meet WCAG AA standards (`text-slate-600` on `bg-white`/`bg-slate-50`).
- **Dependencies:** `src/components/layout/Footer.tsx`, `src/components/layout/FooterCTA.tsx`, Lucide icons.
- **Risks:** Bloated mobile layout if accordions fail to collapse; broken footer links.
- **Acceptance Criteria:**
  - [x] All 28 footer links resolve to valid routes without 404s.
  - [x] Mobile viewport test confirms accordions toggle smoothly without content blowout.
- **Source / Reference:** `README.md:241-262`, `src/components/layout/Footer.tsx`.
- **Status:** IMPLEMENTED (Manually verified).

---

### Category 6: SEO REQUIREMENTS

#### SEO-001: Dynamic Page Title, Meta Description & Canonical Sync
- **Requirement ID:** SEO-001
- **Title:** Dynamic Page Title, Meta Description & Canonical Sync
- **Description:** Ensure all client-side routes synchronize `document.title`, OpenGraph tags, and canonical links to match route context upon navigation.
- **Business Reason:** Correct search engine indexing, social share card fidelity, and organic search ranking.
- **User / Actor:** Search Engine Spiders, Social Media Share Crawlers.
- **Functional Requirement:**
  1. Every page component shall invoke the `useSEO()` hook with: `title`, `description`, `canonicalPath`, and optional `ogType`.
  2. The hook shall update the DOM `<head>` elements immediately upon route transition.
- **Non-Functional Requirement:** Title tags must follow standard brand pattern: `[Page Name] | DialPulse — Communication CRM`.
- **Dependencies:** `src/lib/seo/useSEO.ts`, `react-router-dom`.
- **Risks:** Duplicate title tags across routes; generic fallback descriptions indexed by Google.
- **Acceptance Criteria:**
  - [x] Navigating between `/`, `/solutions`, `/pricing`, and `/security` updates `<title>` instantly.
  - [x] `<meta name="description">` reflects the specific page copy.
  - [x] Canonical link points to the absolute clean URL without trailing slashes.
- **Source / Reference:** `src/lib/seo/useSEO.ts`, `README.md:347`.
- **Status:** IMPLEMENTED (Manually verified).

---

#### SEO-002: Automated Link & OpenGraph Crawler Validation
- **Requirement ID:** SEO-002
- **Title:** Automated Link & OpenGraph Crawler Validation
- **Description:** Establish an automated CI verification script to crawl all internal hyperlinks and validate OpenGraph image dimensions, status codes, and meta descriptions across production builds.
- **Business Reason:** Prevent dead links, broken social preview cards, and indexing degradation before deploying to production.
- **User / Actor:** SEO Lead, Content Manager.
- **Functional Requirement:** Automated crawler script shall inspect the generated `dist/` build and assert 0 broken internal links and 100% meta tag presence.
- **Non-Functional Requirement:** Crawler must complete in under 30 seconds.
- **Dependencies:** Node.js crawler utility, `dist/` build artifacts.
- **Risks:** False positives on external links; undetected 404 links on deep routes.
- **Acceptance Criteria:**
  - [ ] Automated script crawls all routes and reports 0 broken internal links.
- **Source / Reference:** `BRAIN/SDLC-TEST-PLAN.md:2.11`.
- **Status:** PLANNED (Manual inspection active; automated crawler script not yet configured).

---

### Category 7: OPERATIONS REQUIREMENTS

#### OPS-001: Strict Type Checking & Automated Build Verification
- **Requirement ID:** OPS-001
- **Title:** Strict Type Checking & Automated Build Verification
- **Description:** Enforce static TypeScript validation and production compilation checks as mandatory gates for all code changes.
- **Business Reason:** Eliminate runtime JavaScript exceptions, prevent broken deployments, and ensure codebase maintainability.
- **User / Actor:** Frontend Engineer, CI/CD Pipeline, Release Manager.
- **Functional Requirement:** N/A (Build automation).
- **Non-Functional Requirement:**
  1. `npm run lint` (`tsc --noEmit`) must execute in under 15 seconds and exit with code 0.
  2. `npm run build` (`vite build`) must compile all assets without warnings or errors.
- **Dependencies:** TypeScript `~5.8.2`, Vite `^6.2.3`, `package.json`.
- **Risks:** Broken production builds deployed to users; type regressions breaking subtle UI states.
- **Acceptance Criteria:**
  - [x] `npm run lint` exits with 0 errors.
  - [x] `npm run build` generates valid `dist/` directory containing `index.html` and bundled assets.
- **Source / Reference:** `package.json:6-12`, `BRAIN/SDLC.md:Stage F`.
- **Status:** VERIFIED (Fully automated command evidence: exit code 0).

---

#### OPS-002: Port 3000 Binding & Cloud Run Container Configuration
- **Requirement ID:** OPS-002
- **Title:** Port 3000 Binding & Cloud Run Container Configuration
- **Description:** Configure the Vite development server and production reverse proxy to bind strictly to port 3000 (`--port=3000 --host=0.0.0.0`) in accordance with container environment constraints.
- **Business Reason:** The platform reverse proxy and Cloud Run ingress route external traffic exclusively to port 3000; non-standard port bindings result in connection refused errors.
- **User / Actor:** Release Manager, DevOps Engineer.
- **Functional Requirement:** Dev server and container entrypoints shall bind to port 3000.
- **Non-Functional Requirement:** Ingress routing must support SPA route fallbacks to `index.html`.
- **Dependencies:** `package.json:7`, `vite.config.ts`, `metadata.json`.
- **Risks:** Dev server inaccessible via preview iframe; reverse proxy 502 Bad Gateway errors.
- **Acceptance Criteria:**
  - [x] `dev` script in `package.json` explicitly specifies `--port=3000 --host=0.0.0.0`.
  - [x] Preview server binds to port 3000.
- **Source / Reference:** `package.json:7`, `README.md:331-334`.
- **Status:** IMPLEMENTED (Verified in config and runtime environment).

---

#### OPS-003: Automated Unit Testing Framework (Vitest)
- **Requirement ID:** OPS-003
- **Title:** Automated Unit Testing Framework (Vitest)
- **Description:** Install and configure Vitest to execute automated unit tests for math utilities, currency converters, string helpers, and pricing decision helper business rules.
- **Business Reason:** Eliminate manual assertion checks and protect algorithmic calculations from regressions during feature extensions.
- **User / Actor:** Frontend Engineer, QA Specialist.
- **Functional Requirement:** `npm run test:unit` shall execute unit test files and output assertion statistics with coverage reporting.
- **Non-Functional Requirement:** Test execution must complete in under 5 seconds.
- **Dependencies:** `vitest`, `@testing-library/react` (roadmap packages).
- **Risks:** Package version conflicts during install; brittle tests slowing velocity.
- **Acceptance Criteria:**
  - [ ] Vitest configured in `package.json` with test scripts.
  - [ ] 100% of currency formatting rules in `src/lib/currency.ts` covered by unit tests.
- **Source / Reference:** `BRAIN/SDLC-TEST-PLAN.md:2.3`, `BRAIN/RISK-REGISTER.md:RSK-006`.
- **Status:** PLANNED (Unit test runner not yet installed in `package.json`).

---

#### OPS-004: Automated End-to-End Browser Testing Suite (Playwright)
- **Requirement ID:** OPS-004
- **Title:** Automated End-to-End Browser Testing Suite (Playwright)
- **Description:** Install and configure Playwright to execute headless browser journeys validating route transitions, contact form submission flows, pricing toggle interactions, and mobile drawer accessibility.
- **Business Reason:** Provide repeatable, automated cross-browser verification across Chrome, Firefox, and Safari viewports.
- **User / Actor:** QA Lead, Release Manager.
- **Functional Requirement:** `npm run test:e2e` shall run automated browser journeys against production previews.
- **Non-Functional Requirement:** Suite execution must complete within 60 seconds.
- **Dependencies:** `@playwright/test` (roadmap package).
- **Risks:** Flaky network assertions; heavy CI runtime burden.
- **Acceptance Criteria:**
  - [ ] Headless test suite verifies core user journeys across mobile and desktop viewports.
- **Source / Reference:** `BRAIN/SDLC-TEST-PLAN.md:2.6`, `BRAIN/RISK-REGISTER.md:RSK-006`.
- **Status:** PLANNED (E2E browser suite not yet installed in `package.json`).

---

## 4. Requirements Baseline Summary Metrics

- **Total Documented Requirements:** 23
  - **Functional Requirements:** 5 (`FR-001` through `FR-005`)
  - **Non-Functional Requirements:** 2 (`NFR-001`, `NFR-002`)
  - **Security Requirements:** 3 (`SEC-001`, `SEC-002`, `SEC-003`)
  - **Privacy Requirements:** 5 (`PRIV-001` through `PRIV-005`)
  - **UX / Accessibility Requirements:** 2 (`UX-001`, `UX-002`)
  - **SEO Requirements:** 2 (`SEO-001`, `SEO-002`)
  - **Operations Requirements:** 4 (`OPS-001` through `OPS-004`)

- **Requirements by Current Status:**
  - **VERIFIED (Automated or Verified Audit):** 4 (`NFR-001`, `SEC-001`, `SEC-002`, `OPS-001`)
  - **IMPLEMENTED (Manual QA Verified):** 9 (`FR-002`, `FR-003`, `FR-004`, `NFR-002`, `PRIV-001`, `PRIV-002`, `UX-001`, `UX-002`, `SEO-001`, `OPS-002`)
  - **IMPLEMENTED (Simulated / Pending Backend):** 1 (`FR-001`)
  - **BLOCKED (External Legal / Business / Backend Dependency):** 4 (`FR-005`, `PRIV-003`, `PRIV-004`, `PRIV-005`)
  - **PLANNED (Tooling / Automation Roadmap):** 4 (`SEC-003`, `SEO-002`, `OPS-003`, `OPS-004`)
  - **DRAFT / DEPRECATED:** 0
