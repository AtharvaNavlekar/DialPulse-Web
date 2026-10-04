# DialPulse-Web — Change Control Governance & Procedure

**Document Status:** ACTIVE GOVERNANCE STANDARD  
**Version:** 1.0.0  
**Effective Date:** 2026-10-04  
**Scope:** DialPulse-Web (`dialpulse.com`)  
**Authority:** Technical Architecture & Change Advisory Board (CAB)  

---

## 1. Purpose & Objectives

The purpose of this Change Control procedure is to maintain structural integrity, claims truthfulness, security isolation, and code quality across **DialPulse-Web**.

Given the public visibility of this repository and its direct role in establishing commercial and technical trust with enterprise buyers, no untracked, ad-hoc, or unverified changes are permitted in production branches.

---

## 2. Change Categories

Every change proposed for DialPulse-Web must be classified into one of the following seven formal categories:

| Category | Description | Typical Scope | Approval Authority |
| :--- | :--- | :--- | :--- |
| **PATCH** | Small, non-breaking bug fixes, CSS tweaks, minor typo corrections, or small layout adjustments. | Single component or utility file. | Lead Frontend Engineer |
| **MINOR** | Incremental enhancements, new FAQ entries, non-breaking component additions, or subtle visual refinements. | 2–5 components; no route additions. | Technical Product Manager |
| **FEATURE** | New marketing page, new route, substantial interactive component (e.g. Decision Helper, Comparison Table), or major mock UI. | New routes in `App.tsx`, navigation updates in `navigation.ts`. | Systems Architect & Product Lead |
| **MAJOR** | Architectural refactoring, design system overhaul, framework/dependency upgrades, global layout restructuring. | Global layout, bundler config (`vite.config.ts`), multiple routes. | Full Change Advisory Board (CAB) |
| **SECURITY** | Remediation of vulnerable dependencies, client-side secret isolation enforcement, or security briefing updates. | Dependencies (`package.json`), build configs, `/security` page. | Security Officer & Lead Architect |
| **LEGAL/COMPLIANCE** | Modifications to `/privacy`, `/terms`, `/refund`, `/cookies`, statutory disclaimers, or claims remediations. | Legal pages, claims register (`PUBLIC-CLAIMS-REGISTER.md`). | Legal Counsel / Privacy Officer |
| **CONTENT** | Editorial copywriting updates, value proposition refinement, case study or resource additions without code changes. | Content models (`src/content/`), data files (`src/data/`). | Content Lead & Product Manager |

---

## 3. Mandatory Change Record Structure

Every significant change must be documented using the following standard 11-field record structure in pull requests, issue trackers, and release notes:

```markdown
### Change Record: [CHG-YYYYMMDD-XXX] — [Short Summary]

- **Change ID:** CHG-YYYYMMDD-XXX
- **Requested Change:** [Detailed summary of what is being modified, added, or removed]
- **Reason:** [Business, technical, or compliance motivation for the change]
- **Affected Area:** [Pages, layout, components, documentation, or infrastructure affected]
- **Risk Level:** [LOW | MEDIUM | HIGH | CRITICAL]
- **Requirements Affected:** [Associated IDs from BRAIN/SDLC-REQUIREMENTS.md, e.g. FR-001, SEC-001]
- **Files / Modules Affected:** [List of exact file paths modified]
- **Security / Privacy Impact:** [Impact on data collection, client secrets, or privacy disclosures]
- **Testing Impact:** [Required test validations: static analysis, build verification, responsive test]
- **Approval / Status:** [PENDING | APPROVED | REJECTED | DEPLOYED]
- **Verification Result:** [Output of npm run lint, npm run build, and functional verification]
```

---

## 4. Risk Level Assessment Matrix

| Risk Level | Definition | Criteria | Required Governance |
| :--- | :--- | :--- | :--- |
| **LOW** | Minor localized changes with zero impact on architecture, security, or public claims. | Isolated copy fix, CSS adjustment, non-critical documentation update. | Single peer review; pass `npm run lint` & `npm run build`. |
| **MEDIUM** | Changes affecting component layout, interactive behavior, or secondary navigation links. | Updating feature spotlight cards, modifying pricing FAQ, adding data items. | Technical Lead review; responsive QA; pass build verification. |
| **HIGH** | Changes affecting routes, global navigation, legal terms, pricing models, or security claims. | Modifying `App.tsx`, changing `/terms` or `/privacy`, updating `pricing.ts`, editing `/security`. | CAB review; Systems Architect + Legal sign-off; full regression test. |
| **CRITICAL** | Changes impacting client-server boundaries, secrets, external dependencies, or severe claims disputes. | Adding dependencies to `package.json`, updating Vite proxy, fixing high-severity vulnerabilities. | Immediate escalation; Security Officer + Principal Architect sign-off. |

---

## 5. Re-Analysis & Re-Testing Triggers

A change cannot proceed directly to deployment if it triggers any of the following conditions. In these cases, it **must** be sent back for formal re-analysis (Stage C) or re-testing (Stage F / G):

### 5.1 When Re-Analysis (Stage C) is Mandatory
Re-analysis is triggered when:
1. **Public Claims Alteration:** The change introduces or modifies statements regarding certifications (SOC 2, ISO), performance metrics (uptime %, SLAs), or compliance guarantees (TRAI, TCPA).
2. **Third-Party Script / Dependency Addition:** Any new npm package or third-party service is proposed in `package.json`.
3. **Data Collection Change:** Any modification to forms, inputs, cookies, or local storage structures that collects additional user information.
4. **Scope Creep / Behavioral Drift:** The implementation diverges from the original acceptance criteria in `BRAIN/SDLC-REQUIREMENTS.md`.
5. **Commercial Pricing Model Changes:** Modifying tier structures, currencies, or seat allocations in `src/config/pricing.ts`.

### 5.2 When Re-Testing (Stage F / Stage G) is Mandatory
Full re-testing is triggered when:
1. **Global Layout Modification:** Any change to `src/components/layout/Navbar.tsx`, `Layout.tsx`, `Footer.tsx`, or `DesktopDropdown.tsx` requires full cross-browser and mobile responsive re-testing.
2. **TypeScript Compilation Errors:** Any type mutation or tsconfig change requires re-running `npm run lint` across the entire project.
3. **Routing / Navigation Changes:** Any change to `src/App.tsx` or `src/config/navigation.ts` requires re-verifying every top-level and nested route, including the 404 catch-all.
4. **Tailwind Theme Token Updates:** Modifying `src/index.css` requires visual regression inspection across light and dark showcase sections.
5. **Legal or Privacy Copy Edits:** Any revision to `/privacy`, `/terms`, `/refund`, or `/cookies` requires re-validation against `BRAIN/PUBLIC-CLAIMS-REGISTER.md`.

---

## 6. Change Control Workflow Pipeline

```
[ Step 1: Change Request ]
       │ (Categorize & Assign Risk Level)
       ▼
[ Step 2: Impact Analysis & Claims Check ]
       │
       ├── Claims conflict? ──────> [ Stage C Re-Analysis / Neutralization ]
       │
       ▼
[ Step 3: CAB / Peer Approval ]
       │
       ▼
[ Step 4: Development (Stage E) ]
       │
       ▼
[ Step 5: Verification (Stage F & G) ]
       │  • npm run lint
       │  • npm run build
       │  • Responsive & Claims Verification
       │
       ├── Fails verification? ───> [ Stage E Rework ]
       │
       ▼
[ Step 6: Release Sign-Off (Stage H) ]
       │
       ▼
[ Step 7: Record Updated in CHANGELOG.md ]
```

---

## 7. Exemplar Change Control Records

### Example 1: High-Risk Legal & Compliance Change
```markdown
### Change Record: CHG-20260927-001 — Public Terms of Service Real-World Alignment

- **Change ID:** CHG-20260927-001
- **Requested Change:** Comprehensive audit and neutralization of unsupported contractual promises in `/terms` to reflect verified CRM capabilities and truthfulness standards.
- **Reason:** Prevent deceptive marketing, clarify DialPulse technology provider vs customer data controller liability, and remove unconfirmed universal uptime/SLA claims.
- **Affected Area:** `src/pages/Terms.tsx`, `src/components/terms/*`, `BRAIN/OPEN-QUESTIONS.md`.
- **Risk Level:** HIGH
- **Requirements Affected:** PRIV-001, SEC-001, OPS-001
- **Files / Modules Affected:**
  - `src/components/terms/TermsSections.tsx`
  - `src/components/terms/TermsHero.tsx`
  - `src/components/terms/TermsTOC.tsx`
  - `BRAIN/OPEN-QUESTIONS.md`
- **Security / Privacy Impact:** Reaffirmed customer responsibility for communication consent and call recording notices; disclaimed universal statutory compliance guarantees.
- **Testing Impact:** Static typing validation (`tsc --noEmit`), build verification (`vite build`), table of contents anchor scrolling verification.
- **Approval / Status:** APPROVED & DEPLOYED (Signed off by Legal Governance & Systems Architect).
- **Verification Result:** `npm run lint` passed with 0 errors; `npm run build` completed cleanly; 22 legal sections verified.
```

### Example 2: Medium-Risk Commercial Pricing Architecture Change
```markdown
### Change Record: CHG-20260919-002 — Dedicated /pricing Route & Non-Fabrication Rule

- **Change ID:** CHG-20260919-002
- **Requested Change:** Build a dedicated `/pricing` route with parameterized plan tiers, decision helper, and comparison table without fabricating unapproved prices.
- **Reason:** Enable enterprise prospects to evaluate plan boundaries while keeping unconfirmed pricing rates transparent as "TBD / Talk to Sales".
- **Affected Area:** New route `/pricing`, centralized config `src/config/pricing.ts`, utility `src/lib/currency.ts`.
- **Risk Level:** MEDIUM
- **Requirements Affected:** FR-001, NFR-001, UX-001, SEO-001
- **Files / Modules Affected:**
  - `src/config/pricing.ts`
  - `src/lib/currency.ts`
  - `src/pages/Pricing.tsx`
  - `src/components/pricing/*`
  - `src/App.tsx`
  - `src/config/navigation.ts`
- **Security / Privacy Impact:** Zero impact; purely presentation and parameterized data models.
- **Testing Impact:** TypeScript strict type checking; route transition testing; mobile comparison table responsive scroll check.
- **Approval / Status:** APPROVED & DEPLOYED (Signed off by Product Lead).
- **Verification Result:** `npm run lint` clean; `npm run build` clean; responsive table sticky columns verified.
```

---

## 8. Governance Enforcement

Any change introduced to the codebase that bypasses this Change Control procedure, introduces unverified public claims, or fails automated static checks is subject to immediate rollback. The Change Advisory Board reserves the authority to veto any release that violates DialPulse-Web governance invariants.
