# DialPulse-Web — Release & Deployment Quality Checklist

**Document Status:** ACTIVE GOVERNANCE STANDARD  
**Version:** 1.0.0  
**Effective Date:** 2026-10-04  
**Scope:** DialPulse-Web (`dialpulse.com`)  
**Authority:** Release Engineering & Systems Governance  

---

## 1. Purpose & Scope

This checklist defines the mandatory operational gates, verification steps, and sign-off protocols required before and immediately following any release of **DialPulse-Web**.

No release shall be pushed to production without 100% completion of this checklist and documented authorization from the responsible release personas.

---

## 2. Pre-Release Verification Gates (Mandatory)

All checks in this section must be completed and marked **PASS** before deploying any code to production hosting environments:

### 2.1 Code Quality & Build Integrity
- [ ] **Static Type Validation:** `npm run lint` (`tsc --noEmit`) passes with 0 errors and 0 warnings.
- [ ] **Artifact Hygiene:** Clean previous build output via `npm run clean`.
- [ ] **Production Build Compilation:** `npm run build` (`vite build`) completes cleanly with exit code 0.
- [ ] **Asset Size Budget:** Vendor and application chunks in `dist/assets/` comply with performance budgets (< 500 KB uncompressed for primary chunks).
- [ ] **Zero Dev Artifacts:** Ensure no temporary debug scripts, `.log` files, or local test files are present in the build.

### 2.2 Security, Secrets & Boundaries
- [ ] **Zero Client Secrets:** Codebase search confirms zero API keys, private tokens, or backend credentials in `src/` or `dist/`.
- [ ] **Environment Variable Audit:** Client environment variables strictly follow the `VITE_` prefix convention. `.env.example` contains zero secrets.
- [ ] **CRM Decoupling Maintained:** Confirm the site makes zero direct database connections and relies on external hyperlinks for CRM actions (`https://app.dialpulse.com/login`).
- [ ] **Reverse Proxy Alignment:** Dev server and container bindings are locked to port `3000` (`--port=3000 --host=0.0.0.0`).

### 2.3 Truthfulness & Claims Register Compliance
- [ ] **Public Claims Audit:** All copy complies with `BRAIN/PUBLIC-CLAIMS-REGISTER.md`. Zero unsupported Class E claims (no false SOC 2 certifications, no universal 1-hour SLAs).
- [ ] **Non-Fabrication Policy:** Commercial pricing adheres to `src/config/pricing.ts`; unapproved prices remain marked as "TBD / Talk to Sales".
- [ ] **Marketing Invariants Checked:** Zero fake testimonials, fake client logos, or uncredited statistical claims ("boosts sales by 40%").
- [ ] **Compliance Guardrails Clarification:** All telephony compliance mentions emphasize software technical safeguards, not statutory or legal indemnification.

### 2.4 Legal & Privacy Review
- [ ] **Privacy Disclosures:** `/privacy` accurately reflects actual data handling; pending items marked transparently.
- [ ] **Cookie Consent Active:** Cookie banner and preference manager active; zero third-party tracking pixels (GA4, Meta, Hotjar) loaded without consent.
- [ ] **Terms of Service Alignment:** `/terms` maintains strict customer vs platform liability boundaries.
- [ ] **Refund Policy Transparency:** `/refund` clearly distinguishes B2B enterprise terms and non-refundable carrier consumption.

### 2.5 Design, UI & Accessibility
- [ ] **Design DNA Conformance:** Material Design 3 tokens applied consistently: Deep Teal (`#00695C`), Surface (`#F8FAF8`), Navy (`#1E293B`).
- [ ] **Typography Scale:** Headings use `Plus Jakarta Sans`, body uses `Roboto`, technical schemas use `JetBrains Mono`.
- [ ] **Mobile Responsiveness:** Layouts adapt smoothly without horizontal overflow across 375px, 768px, and 1280px+.
- [ ] **Accessibility (WCAG AA):** Focus rings visible on keyboard tab navigation (`focus-visible:ring-2`); color contrast passes AA standards.

### 2.6 Routing & SEO
- [ ] **Route Matrix Check:** All routes declared in `src/App.tsx` resolve without error; unknown routes load `NotFound.tsx`.
- [ ] **SEO Dynamic Sync:** Dynamic page titles, meta descriptions, and canonical links update on all routes via `useSEO()`.
- [ ] **Navigation Synchronization:** All menu items in `src/config/navigation.ts` point to valid active routes.

---

## 3. Release Execution Procedure

Execute the following sequential deployment steps:

1. **Lock Main Branch:** Notify team that deployment is commencing.
2. **Execute Clean Build:**
   ```bash
   npm run clean
   npm run build
   ```
3. **Inspect Local Build Preview:**
   ```bash
   npm run preview
   ```
   Open local preview URL and perform 60-second visual sanity check.
4. **Trigger Deployment:** Deploy the compiled `dist/` directory or container image to target hosting environment (Google Cloud Run / NGINX).
5. **Verify Runtime Routing:** Confirm NGINX reverse proxy redirects all non-file route requests to `index.html` (SPA fallback).

---

## 4. Post-Release Smoke Verification (Live Production)

Immediately upon deployment completion, verify the live production URL:

| Verification Item | Target | Verification Method | Status |
| :--- | :--- | :--- | :--- |
| **HTTP Status** | `https://dialpulse.com` (Root) | Browser load; verify HTTP 200. | [ ] PASS |
| **Browser Console** | DevTools Console | Verify 0 unhandled errors or uncaught exceptions. | [ ] PASS |
| **Header Navigation** | Desktop & Mobile | Open Product, Solutions, Resources mega-menus. | [ ] PASS |
| **Core Conversion Route** | `/contact` | Fill and submit form; verify success message. | [ ] PASS |
| **Commercial Route** | `/pricing` | Toggle monthly/annual; open FAQ accordion. | [ ] PASS |
| **Security Briefing** | `/security` | Verify 15 technical modules render. | [ ] PASS |
| **Legal Routes** | `/privacy`, `/terms`, `/cookies`, `/refund` | Verify sticky TOC links scroll to sections. | [ ] PASS |
| **404 Handling** | `/non-existent-smoke-test-url` | Verify custom 404 page renders cleanly. | [ ] PASS |
| **SEO Head Inspection** | Inspect DOM `<head>` | Confirm `<title>` matches route name. | [ ] PASS |

---

## 5. Rollback Strategy & Protocol

If any critical failure occurs during deployment or post-release smoke verification, trigger immediate rollback.

### 5.1 Rollback Criteria (Trigger Immediate Abort if Any Occur):
- Production URL returns HTTP 5xx or fails to respond.
- Blank white screen renders upon loading any core route (JavaScript runtime bundle failure).
- Critical asset loading failure (CSS stylesheet or primary JS chunk 404).
- Critical security or secret exposure detected in live production bundle.
- High-severity legal claim dispute requiring immediate withdrawal.

### 5.2 Immediate Rollback Actions:
1. **Revert Traffic:** Revert Cloud Run traffic routing to the previous healthy revision tag (or redeploy previous verified git tag).
2. **Purge Edge Cache:** Flush CDN / edge cache if stale corrupted assets are cached.
3. **Notify Stakeholders:** Broadcast deployment rollback alert to Engineering, Product, and Governance teams.
4. **Post-Mortem Initiation:** Convene incident triage to analyze root cause before attempting another deployment.

---

## 6. Formal Release Sign-Off Record Template

Every production release must document a completed sign-off record stored in release archives:

```markdown
### Release Sign-Off Record: [REL-YYYYMMDD-X]

- **Release ID:** REL-YYYYMMDD-X
- **Release Version / Tag:** [e.g. v1.1.0]
- **Target Git Commit Hash:** [Full 40-character commit hash]
- **Deployment Timestamp:** [YYYY-MM-DD HH:MM UTC]
- **Release Category:** [PATCH | MINOR | FEATURE | MAJOR | SECURITY | LEGAL | CONTENT]
- **Deployer Name / Role:** [Name, DevOps / Release Engineer]
- **Pre-Release Checklist Completed:** [YES / NO]
- **Lint Result:** `npm run lint` — 0 errors (Passed)
- **Build Result:** `npm run build` — Clean dist/ generated (Passed)
- **Post-Release Smoke Test Completed:** [YES / NO]
- **Rollback Triggered:** [NO / YES (with reason)]

**Sign-off Approvals:**
- **Technical Lead / Architect:** ________________________ Date: ____________
- **QA Specialist:** ___________________________________ Date: ____________
- **Security & Privacy Officer:** ______________________ Date: ____________
- **Release Manager:** _________________________________ Date: ____________
```
