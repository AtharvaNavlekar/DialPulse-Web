# DialPulse-Web — Master Testing Strategy & Quality Assurance Plan

**Document Status:** ACTIVE GOVERNANCE STANDARD  
**Version:** 1.0.0  
**Effective Date:** 2026-10-04  
**Scope:** DialPulse-Web (`dialpulse.com`)  
**Authority:** QA Engineering & Systems Architecture  

---

## 1. Executive Summary & Verification Reality

This document defines the comprehensive Quality Assurance and Testing Strategy for **DialPulse-Web**.

### 1.1 Current Verification Reality (Honest Assessment)
To maintain absolute truthfulness and avoid fabricating testing capabilities that do not exist:

- **Currently Configured & Available Commands (`package.json`):**
  ```json
  "scripts": {
    "dev": "vite --port=3000 --host=0.0.0.0",
    "build": "vite build",
    "preview": "vite preview",
    "clean": "rm -rf dist server.js",
    "lint": "tsc --noEmit"
  }
  ```
  - `npm run lint`: Runs `tsc --noEmit` to perform full-codebase static TypeScript type checking. **[ACTIVE & ENFORCED]**
  - `npm run build`: Runs `vite build` to compile production bundles with `@tailwindcss/vite` and React 19. **[ACTIVE & ENFORCED]**
  - `npm run clean`: Cleans previous build artifacts. **[ACTIVE & ENFORCED]**
  - `npm run preview`: Spins up a local static server to inspect the compiled `dist/` bundle. **[ACTIVE & ENFORCED]**

- **Currently NOT Configured in `package.json`:**
  - Automated unit test runner (e.g. `vitest`, `jest`).
  - Component rendering test suite (e.g. `@testing-library/react`).
  - End-to-End browser test suite (e.g. `playwright`, `cypress`).

Consequently, testing for route transitions, responsive viewports, accessibility, security boundaries, and SEO metadata is currently executed via **rigorous manual inspection protocols, structured checklists, and static type guarantees**, with automated unit/E2E test runners designated as an engineering roadmap enhancement.

---

## 2. Comprehensive 13-Point Testing Framework

Below is the formal specification for each of the thirteen essential testing disciplines required by the DialPulse-Web SDLC:

---

### 2.1 Static & Type Validation

- **Purpose:** Detect syntax errors, missing imports, unhandled null/undefined values, invalid component props, and type mismatches across TypeScript source code without executing runtime code.
- **When It Runs:** During active development (Stage E), pre-commit, and as mandatory CI gate prior to testing sign-off (Stage F).
- **Execution Mechanism:** `npm run lint` (`tsc --noEmit`).
- **Expected Evidence:** Terminal output confirming `tsc --noEmit` exited with code 0 and zero error messages.
- **Pass/Fail Criteria:**
  - **PASS:** 0 errors reported.
  - **FAIL:** ≥ 1 compiler or typing error reported. Any failure blocks progression.
- **Current Status:** **ACTIVE & AUTOMATED**.

---

### 2.2 Build Validation

- **Purpose:** Verify that all application assets (React components, CSS via `@tailwindcss/vite`, fonts, SVG graphics, Lucide icons, and static assets) can be compiled, bundled, minified, and tree-shaken into production-ready artifacts.
- **When It Runs:** Pre-merge and pre-release (Stages E, F, and H).
- **Execution Mechanism:** `npm run build` (`vite build`).
- **Expected Evidence:** Generation of `dist/` directory containing `index.html` and hashed bundles in `dist/assets/` with exit code 0.
- **Pass/Fail Criteria:**
  - **PASS:** Clean build output with zero module resolution errors or circular dependency crashes.
  - **FAIL:** Non-zero exit code, unresolvable module paths, syntax errors, or bundling timeouts.
- **Current Status:** **ACTIVE & AUTOMATED**.

---

### 2.3 Unit Testing

- **Purpose:** Test isolated utility functions, pure algorithms, data mappers, and currency formatters (e.g. `src/lib/currency.ts`, `src/lib/utils.ts`, `pricing.ts` decision helper rules) with discrete inputs and assertions.
- **When It Runs:** Pre-commit and during Stage F testing.
- **Execution Mechanism:** *Current:* Manual assertion review. *Target Roadmap:* Vitest execution via `npm run test:unit`.
- **Expected Evidence:** Test suite output demonstrating 100% passing test assertions for mathematical, string manipulation, and business rule functions.
- **Pass/Fail Criteria:**
  - **PASS:** All test assertions evaluate to true.
  - **FAIL:** Any failed assertion or unhandled throw.
- **Current Status:** **ROADMAP / MANUAL ASSERTION REVIEW**.

---

### 2.4 Integration Testing

- **Purpose:** Verify that interacting components, shared configuration states, and dynamic data modules work cohesively together (e.g. `pricing.ts` plan configurations correctly feeding `PricingCards.tsx`, `PricingComparisonTable.tsx`, and `PricingDecisionHelper.tsx`).
- **When It Runs:** Stage F QA before any release containing modified configurations or shared data structures.
- **Execution Mechanism:** Manual interactive state verification using `npm run preview`.
- **Expected Evidence:** Verified state synchronization across child components without state desynchronization or prop mutation errors.
- **Pass/Fail Criteria:**
  - **PASS:** Shared data updates propagate across all consumer components cleanly.
  - **FAIL:** Missing props, undefined property accesses, or UI desynchronization.
- **Current Status:** **MANUAL PROTOCOL**.

---

### 2.5 UI & Component Testing

- **Purpose:** Verify that individual UI primitives (`Button`, `FloatingNav`, `Card`, `Badge`, `Dropdown`) render correctly with proper styling, hover transitions, disabled states, and design token adherence.
- **When It Runs:** Stage D (Design) and Stage F (QA) upon component creation or modification.
- **Execution Mechanism:** Visual inspection across states in development server (`npm run dev`).
- **Expected Evidence:** Visual verification matching Material Design 3 and DialPulse Design DNA tokens (Teal `#00695C`, Surface `#F8FAF8`, Slate text).
- **Pass/Fail Criteria:**
  - **PASS:** Visual appearance matches design specification; zero flickering or layout clipping.
  - **FAIL:** Broken styles, missing Tailwind classes, or unstyled raw DOM elements.
- **Current Status:** **MANUAL PROTOCOL**.

---

### 2.6 Route Testing

- **Purpose:** Verify that all declared client-side routes in `src/App.tsx` render their respective page components, deep linking functions correctly, browser back/forward buttons work, and unknown URLs fall back to the 404 page.
- **When It Runs:** Stage F (QA) on every release affecting routing, navigation, or page components.
- **Execution Mechanism:** Systematic manual traversal of all routes:
  - `/` (Home), `/product`, `/features`, `/features/leads`, `/features/:id`, `/solutions`, `/solutions/:slug`, `/resources`, `/security`, `/pricing`, `/about`, `/contact`, `/privacy`, `/terms`, `/cookies`, `/refund`, `/faq`, `/blog`, `/guides`, `/case-studies`, `/compare`, `/careers`, and non-existent URL (`/unknown-path-test`).
- **Expected Evidence:** Clean navigation log showing every path renders with HTTP 200 equivalent state in React Router, and invalid URLs load `NotFound.tsx`.
- **Pass/Fail Criteria:**
  - **PASS:** 100% of routes load without blank screens, React error boundaries, or routing loops.
  - **FAIL:** White screen of death, unhandled client routing exceptions, or broken navigation transitions.
- **Current Status:** **MANUAL PROTOCOL (SYSTEMATIC ROUTE MATRIX)**.

---

### 2.7 Responsive & Cross-Device Testing

- **Purpose:** Ensure flawless layout, typography, navigation, and readability across multiple device viewport dimensions.
- **When It Runs:** Stage F QA prior to every feature or layout release.
- **Execution Mechanism:** Viewport simulation across standard breakpoints:
  - Mobile Small: 375px × 667px (iPhone SE)
  - Mobile Large: 414px × 896px (iPhone 11/XR)
  - Tablet Portrait: 768px × 1024px (iPad Mini)
  - Desktop Standard: 1280px × 800px (MacBook Air)
  - Desktop Widescreen: 1920px × 1080px (Full HD)
- **Expected Evidence:** Screenshots or inspection logs confirming zero horizontal page blowout (`overflow-x`), proper mobile drawer functioning, legible font sizes, and accessible touch targets (≥ 44px).
- **Pass/Fail Criteria:**
  - **PASS:** No horizontal scrollbar on body; all elements adapt gracefully to viewport width.
  - **FAIL:** Text overlapping, clipped containers, horizontal scrollbars, or unreachable buttons.
- **Current Status:** **MANUAL PROTOCOL**.

---

### 2.8 Accessibility Testing (a11y)

- **Purpose:** Validate compliance with WCAG 2.1 AA standards for keyboard accessibility, color contrast, and assistive technologies.
- **When It Runs:** Stage F QA on all interactive components, navigation, and forms.
- **Execution Mechanism:** Keyboard tab navigation traversal (`Tab`, `Shift+Tab`, `Enter`, `Escape`) and color contrast evaluation.
- **Expected Evidence:**
  - Visible focus rings on all interactive elements (`focus-visible:ring-2 focus-visible:ring-[#00695C]`).
  - Text contrast ratio ≥ 4.5:1 for normal text and ≥ 3:1 for large text.
  - Form inputs have associated labels or accessible descriptions.
  - Modal dialogues trap focus and close on `Escape`.
- **Pass/Fail Criteria:**
  - **PASS:** Complete page navigable via keyboard alone; zero contrast violations.
  - **FAIL:** Inaccessible keyboard focus traps, invisible focus states, or contrast failures.
- **Current Status:** **MANUAL PROTOCOL**.

---

### 2.9 Security Testing

- **Purpose:** Validate that the client application exposes zero secret credentials, connects only to authorized endpoints, and resists client-side tampering.
- **When It Runs:** Stage G (Security & Privacy Review).
- **Execution Mechanism:**
  1. Static grep across `src/` and `dist/` for forbidden patterns (`API_KEY`, `SECRET`, `PASSWORD`, `BEARER`).
  2. Verification that `.env.example` contains zero live credentials.
  3. Browser DevTools Network tab inspection during user workflows to confirm zero private tokens are transmitted.
- **Expected Evidence:** Codebase search returns 0 hardcoded private secrets; client bundles contain only public static assets.
- **Pass/Fail Criteria:**
  - **PASS:** Zero secrets detected; all sensitive logic operates behind server proxy boundaries.
  - **FAIL:** Hardcoded API key or private URL identified anywhere in client-accessible code.
- **Current Status:** **MANUAL AUDIT PROTOCOL**.

---

### 2.10 Privacy & Compliance Testing

- **Purpose:** Ensure that the website complies with stated privacy policies, loads no unconsented third-party trackers, preserves local consent choices, and contains mandatory legal disclaimers.
- **When It Runs:** Stage G (Security & Privacy Review) before release.
- **Execution Mechanism:**
  1. Inspection of network traffic on a clean browser profile to verify zero calls to Google Analytics, Meta Pixel, Hotjar, or advertising networks.
  2. Verification that `localStorage` correctly records user cookie preferences.
  3. Content audit against `BRAIN/PUBLIC-CLAIMS-REGISTER.md` to ensure no Class E (unsupported) claims are present.
- **Expected Evidence:** Zero external tracker domains requested; claims register status verified.
- **Pass/Fail Criteria:**
  - **PASS:** 100% alignment with privacy commitments; zero unconsented telemetry scripts.
  - **FAIL:** Unauthorized tracker script detected; unverified compliance claim published.
- **Current Status:** **MANUAL AUDIT PROTOCOL**.

---

### 2.11 SEO Testing

- **Purpose:** Verify that all pages provide accurate meta tags, OpenGraph cards, Twitter cards, and canonical links to search engines and social platforms.
- **When It Runs:** Stage F (QA) upon modifying page titles, meta descriptions, or routes.
- **Execution Mechanism:** DOM inspection of `<head>` elements across distinct routes after rendering via `useSEO()`.
- **Expected Evidence:**
  - Unique `<title>` tag on every route following brand conventions.
  - Descriptive `<meta name="description">` between 120 and 160 characters.
  - Matching `<meta property="og:title">`, `<meta property="og:description">`, and `<link rel="canonical">`.
- **Pass/Fail Criteria:**
  - **PASS:** All indexable routes contain unique, fully populated SEO metadata tags.
  - **FAIL:** Missing or default placeholder title tags ("Vite + React"); duplicate descriptions across routes.
- **Current Status:** **MANUAL PROTOCOL**.

---

### 2.12 Regression Testing

- **Purpose:** Ensure that new feature implementations or bug fixes do not inadvertently break existing pages, navigation items, visual styling, or user interactions.
- **When It Runs:** Stage F (QA) prior to every merge into the main release branch.
- **Execution Mechanism:** Execution of the full regression test suite:
  1. Run `npm run clean && npm run lint && npm run build`.
  2. Inspect high-traffic user journeys:
     - Home page navigation → Product deep-dive → Contact form submission.
     - Pricing plan comparison → Toggle billing cycle → Open Decision Helper.
     - Solutions category filter → Click solution slug → View workflow comparison.
     - Header mega-menus on mobile and desktop.
     - Footer directory links.
- **Expected Evidence:** Zero regressions identified across verified functionality.
- **Pass/Fail Criteria:**
  - **PASS:** 100% of baseline regression checklist items pass.
  - **FAIL:** Any previously working page or feature displays a regression.
- **Current Status:** **MANUAL PROTOCOL WITH AUTOMATED BUILD GATES**.

---

### 2.13 Production Smoke Testing

- **Purpose:** Perform a rapid sanity verification on the live deployed production environment immediately following release deployment to ensure the application is functioning in the target runtime.
- **When It Runs:** Stage H (Release) immediately post-deployment.
- **Execution Mechanism:** Live URL verification (`https://dialpulse.com` / deployed preview URL):
  1. HTTP status code check: Ensure root and core routes return HTTP 200.
  2. Browser console check: Open browser DevTools console to verify 0 unhandled JavaScript exceptions or 404 asset errors.
  3. Interactive sanity check: Toggle mobile menu, trigger a contact form validation, and switch pricing billing tabs.
- **Expected Evidence:** Production environment responds swiftly with zero console errors and functional interactions.
- **Pass/Fail Criteria:**
  - **PASS:** Application loads cleanly; interactive controls respond; no runtime errors.
  - **FAIL:** White screen, missing bundle assets, reverse proxy 502/504 errors, or uncaught JavaScript exceptions. (Triggers immediate rollback).
- **Current Status:** **MANUAL POST-RELEASE PROTOCOL**.

---

## 3. Testing Responsibility Matrix

| Test Discipline | Automation Level | Tool / Script | Responsible Persona |
| :--- | :--- | :--- | :--- |
| **Static & Type Validation** | Automated | `npm run lint` (`tsc --noEmit`) | Frontend Engineer |
| **Build Validation** | Automated | `npm run build` (`vite build`) | Frontend Engineer / CI |
| **Unit Testing** | Manual / Roadmap | Manual Assertions (Vitest Roadmap) | Frontend Engineer |
| **Integration Testing** | Manual | `npm run preview` | QA Specialist |
| **UI & Component Testing**| Manual | Browser DevTools / Preview | UI Technologist |
| **Route Testing** | Manual Checklist | Route Matrix Walkthrough | QA Specialist |
| **Responsive Testing** | Manual Checklist | Responsive Viewport Emulation | QA Specialist |
| **Accessibility Testing** | Manual Checklist | Keyboard Tab / Contrast Analyzer | QA Specialist |
| **Security Testing** | Manual Audit | Secret Grep / Network Audit | Security Officer |
| **Privacy Testing** | Manual Audit | Cookie / Telemetry Traffic Audit | Privacy Officer |
| **SEO Testing** | Manual Audit | Head DOM Inspection | Content / SEO Lead |
| **Regression Testing** | Hybrid | Lint + Build + Core Journey Audit | QA Lead |
| **Production Smoke Test** | Manual Protocol | Live Browser Sanity Walkthrough | Release Manager |

---

## 4. Test Failure Escalation & Rework Procedure

When any test discipline encounters a **FAIL** condition:
1. **Immediate Gate Block:** The pull request or release branch is immediately locked from deployment.
2. **Defect Ticket Created:** QA logs the failure with exact reproduction steps, error logs, and browser/viewport context.
3. **Route Back to Stage E:** The defect is assigned to the authoring engineer for code remediation.
4. **Full Re-Verification:** Once remediated, the entire test suite must be re-executed starting from Stage F (Static Validation → Build Validation → Regression Test).
