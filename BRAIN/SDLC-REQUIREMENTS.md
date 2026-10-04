# DialPulse-Web — Requirements Engineering Governance & Framework

**Document Status:** ACTIVE GOVERNANCE STANDARD  
**Version:** 1.0.0  
**Effective Date:** 2026-10-04  
**Scope:** DialPulse-Web (`dialpulse.com`)  
**Authority:** Technical Architecture & Product Management  

---

## 1. Purpose & Standards

This document establishes the mandatory standard for defining, categorizing, writing, and approving software requirements for the **DialPulse-Web** platform.

Every feature, enhancement, or compliance change initiated in Stage B (Requirements) of the SDLC must be formalized using this specification before advancing to Stage C (Analysis) and Stage E (Development).

---

## 2. Requirement Taxonomy & ID Conventions

All requirements are assigned a persistent, unique identifier using the following prefix taxonomy:

| Prefix | Category | Definition | Primary Governance Reference |
| :--- | :--- | :--- | :--- |
| **FR-xxx** | **Functional Requirement** | Specific user-facing or system behavioral capabilities and interactions. | `BRAIN/PROJECT-CONTEXT.md` |
| **NFR-xxx** | **Non-Functional Requirement** | Performance, responsiveness, browser compatibility, and architectural constraints. | `README.md`, `package.json` |
| **SEC-xxx** | **Security Requirement** | Cryptographic boundaries, secret isolation, RBAC representation, and attack surface minimization. | `BRAIN/PUBLIC-CLAIMS-REGISTER.md` |
| **PRIV-xxx** | **Privacy Requirement** | Data collection boundaries, consent state preservation, and statutory disclaimers. | `BRAIN/PRIVACY-POLICY-REQUIREMENTS.md` |
| **UX-xxx** | **UX / Design Requirement** | Material Design 3 token compliance, typography scales, accessibility, and visual rhythm. | `BRAIN/DESIGN-DNA.md`, `BRAIN/BRAND-RULES.md` |
| **SEO-xxx** | **SEO Requirement** | Dynamic OpenGraph metadata, title tags, canonical links, and crawlability. | `src/lib/seo/useSEO.ts` |
| **OPS-xxx** | **Operational Requirement** | Build tooling, runtime reverse proxy configuration, container health, and deployment. | `vite.config.ts`, `metadata.json` |

---

## 3. Mandatory Requirement Specification Template

Every requirement entry must contain all of the following 12 fields without exception:

```markdown
### [REQ-ID]: [Title]

- **Requirement ID:** [e.g. FR-001]
- **Title:** [Concise, descriptive title]
- **Description:** [Clear narrative explaining the feature or constraint]
- **Business Reason:** [Why this requirement exists and what value it delivers]
- **User / Actor:** [Target persona, e.g. Enterprise Prospect, Site Visitor, Compliance Officer, Developer]
- **Functional Requirement:** [Concrete behavioral specification: When [trigger], the system shall [action]]
- **Non-Functional Requirement:** [Performance, bundle, or architectural constraint, where applicable]
- **Dependencies:** [Pre-requisite components, libraries, or data structures]
- **Risks:** [Potential failure modes, legal liabilities, or performance regressions]
- **Acceptance Criteria:** [Verifiable checklist using Given/When/Then or concrete bullet criteria]
- **Source / Reference:** [Originating document, e.g. BRAIN/PROJECT-CONTEXT.md, User Feedback, Legal Audit]
- **Status:** [DRAFT | APPROVED | IN PROGRESS | IMPLEMENTED | VERIFIED | DEPRECATED]
```

---

## 4. Requirements Quality & Anti-Slop Rules

When authoring requirements for DialPulse-Web, the following standards are strictly enforced:

1. **Testability & Verifiability:** Every acceptance criterion must be verifiable by automated commands (`npm run lint`, `npm run build`) or manual inspection. Subjective criteria like "must be user-friendly" or "must look modern" are prohibited.
2. **Strict Hierarchy of Truth:** Requirements must never mandate claims that exceed the verified capabilities of the CRM application as registered in `BRAIN/PUBLIC-CLAIMS-REGISTER.md`.
3. **No Fabricated Pricing or SLAs:** Commercial requirements must use configurable parameters (`src/config/pricing.ts`) and transparent "TBD / Talk to Sales" states rather than hardcoding unapproved prices.
4. **No Premature Architecture:** Do not specify server-side databases or CRM internal services inside marketing website requirements.

---

## 5. Verified Reference Examples Derived from Current Documentation

The following examples demonstrate properly structured requirements derived directly from the verified capabilities and constraints of DialPulse-Web:

---

### Example 1: Functional Requirement (FR)

#### FR-001: Architecture Inquiry & Consultation Form Submission
- **Requirement ID:** FR-001
- **Title:** Architecture Inquiry & Consultation Form Submission
- **Description:** Provide a structured multi-step inquiry form on the `/contact` page allowing enterprise prospects to request technical architecture reviews and sales walkthroughs.
- **Business Reason:** High-volume telecalling teams and compliance-conscious enterprises require tailored architectural evaluations rather than generic self-serve signups.
- **User / Actor:** Enterprise Buyer, VP of Sales, Call Center Director.
- **Functional Requirement:**
  1. The system shall render input fields for: First Name, Last Name, Work Email, Company Name, Team Size (select), Primary Workflow Interest (select), and Message.
  2. The system shall validate all required fields before submission.
  3. Upon submission, the system shall transition to an accessible success state confirming receipt of the request without refreshing the page.
- **Non-Functional Requirement:**
  - Form state handling must be client-side resilient; submission feedback must render within 300ms.
- **Dependencies:** `src/pages/Contact.tsx`, Lucide React icons, Tailwind CSS form controls.
- **Risks:** Spam submissions; unhandled form errors leading to lost high-value enterprise leads.
- **Acceptance Criteria:**
  - [x] All 7 inputs validate correctly with descriptive client-side error states.
  - [x] Invalid email formats are prevented from submitting.
  - [x] Successful submission displays confirmation panel with next-step timeline expectations.
  - [x] Form passes WCAG AA contrast and keyboard tab navigation.
- **Source / Reference:** `BRAIN/PROJECT-CONTEXT.md`, `README.md:151`.
- **Status:** IMPLEMENTED (Simulated client feedback; webhook backend pending).

---

### Example 2: Non-Functional Requirement (NFR)

#### NFR-001: Build Performance & Production Bundle Budget
- **Requirement ID:** NFR-001
- **Title:** Build Performance & Production Bundle Budget
- **Description:** Maintain strict production asset size limits and build velocity across the React 19 + Vite toolchain.
- **Business Reason:** Fast web performance directly correlates with search indexing, lower bounce rates, and immediate buyer engagement.
- **User / Actor:** All Website Visitors, Web Crawlers.
- **Functional Requirement:** N/A (Purely non-functional).
- **Non-Functional Requirement:**
  1. Production build executed via `npm run build` must complete cleanly with zero errors.
  2. Individual vendor chunk sizes must not exceed 500 KB uncompressed.
  3. First Contentful Paint (FCP) must remain under 1.5 seconds on mobile 4G networks.
- **Dependencies:** Vite 6, `@tailwindcss/vite`, React 19.
- **Risks:** Bloating bundle size through unchecked heavy third-party dependencies.
- **Acceptance Criteria:**
  - [x] `npm run build` passes with exit code 0.
  - [x] Dist output contains optimized hashed assets in `dist/assets/`.
  - [x] Unused heavy charting or animation libraries are excluded from initial bundle.
- **Source / Reference:** `package.json`, `README.md:60-74`.
- **Status:** IMPLEMENTED.

---

### Example 3: Security Requirement (SEC)

#### SEC-001: Client-Side Secret and Private Key Isolation
- **Requirement ID:** SEC-001
- **Title:** Client-Side Secret and Private Key Isolation
- **Description:** Ensure zero backend secrets, database connection strings, or private API keys are bundled into the public client application.
- **Business Reason:** DialPulse-Web is an untrusted public client. Leaked API keys or internal database URLs would compromise production CRM clusters.
- **User / Actor:** Systems Architect, Security Officer.
- **Functional Requirement:**
  1. The build pipeline shall reject any client environment variable not prefixed with `VITE_`.
  2. All references to server-side AI keys (`GEMINI_API_KEY`) or internal CRM tokens must be isolated to server proxy environments (`/api/*`).
- **Non-Functional Requirement:**
  - Static bundle code must pass automated secret scanning before release.
- **Dependencies:** `vite.config.ts`, `.env.example`.
- **Risks:** Catastrophic credential exposure leading to unauthorized CRM cluster access.
- **Acceptance Criteria:**
  - [x] Zero hardcoded API keys or bearer tokens in `src/`.
  - [x] `.env.example` documents only public configurable variables with zero real secrets.
  - [x] Browser network inspection reveals zero transmission of private platform tokens.
- **Source / Reference:** `BRAIN/PUBLIC-CLAIMS-REGISTER.md:AI-001`, `README.md:54`.
- **Status:** VERIFIED.

---

### Example 4: Privacy Requirement (PRIV)

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
- **Non-Functional Requirement:**
  - Consent check must occur asynchronously without blocking the initial paint of marketing content.
- **Dependencies:** `src/components/common/CookieConsentBanner.tsx`, `src/pages/Cookies.tsx`.
- **Risks:** Regulatory fines for non-consensual tracking; legal liability from unapproved ad network scripts.
- **Acceptance Criteria:**
  - [x] Banner appears for first-time visitors and dismisses permanently upon selection.
  - [x] Zero network requests dispatched to external tracker domains (Google Analytics, Meta Pixel, Hotjar).
  - [x] Dedicated `/cookies` page details exact categories: Essential, Preferences, Analytics, Marketing.
- **Source / Reference:** `BRAIN/PRIVACY-POLICY-REQUIREMENTS.md:94-98`, `BRAIN/PUBLIC-CLAIMS-REGISTER.md:LEG-001`.
- **Status:** IMPLEMENTED.

---

### Example 5: UX & Design Requirement (UX)

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
- **Status:** IMPLEMENTED.

---

### Example 6: SEO Requirement (SEO)

#### SEO-001: Dynamic Page Title, Meta Description & Canonical Sync
- **Requirement ID:** SEO-001
- **Title:** Dynamic Page Title, Meta Description & Canonical Sync
- **Description:** Ensure all client-side routes synchronize `document.title`, OpenGraph tags, and canonical links to match route context upon navigation.
- **Business Reason:** Correct search engine indexing, social share card fidelity, and organic search ranking.
- **User / Actor:** Search Engine Spiders, Social Media Share Crawlers.
- **Functional Requirement:**
  1. Every page component shall invoke the `useSEO()` hook with: `title`, `description`, `canonicalPath`, and optional `ogType`.
  2. The hook shall update the DOM `<head>` elements immediately upon route transition.
- **Non-Functional Requirement:**
  - Title tags must follow standard brand pattern: `[Page Name] | DialPulse — Communication CRM`.
- **Dependencies:** `src/lib/seo/useSEO.ts`, `react-router-dom`.
- **Risks:** Duplicate title tags across routes; generic fallback descriptions indexed by Google.
- **Acceptance Criteria:**
  - [x] Navigating between `/`, `/solutions`, `/pricing`, and `/security` updates `<title>` instantly.
  - [x] `<meta name="description">` reflects the specific page copy.
  - [x] Canonical link points to the absolute clean URL without trailing slashes.
- **Source / Reference:** `src/lib/seo/useSEO.ts`, `README.md:347`.
- **Status:** IMPLEMENTED.

---

### Example 7: Operational Requirement (OPS)

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
- **Status:** VERIFIED.

---

## 6. Requirements Lifecycle & Status Workflow

```
[ DRAFT ] ──> [ APPROVED ] ──> [ IN PROGRESS ] ──> [ IMPLEMENTED ] ──> [ VERIFIED ]
     │              │
     ▼              ▼
[ REJECTED ]   [ DEPRECATED ]
```

- **DRAFT:** Authored by engineer or PM; awaiting technical and claims audit.
- **APPROVED:** Signed off by Systems Architect and Legal/Claims reviewer.
- **IN PROGRESS:** Active development in Stage E.
- **IMPLEMENTED:** Code complete and verified in Stage E.
- **VERIFIED:** Validated by QA (Stage F) and Security/Privacy review (Stage G).
- **DEPRECATED:** Superseded by a newer requirement or retired product capability.
