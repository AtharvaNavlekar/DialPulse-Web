# DialPulse-Web — Centralized Project Risk Register

**Document Status:** ACTIVE GOVERNANCE STANDARD  
**Version:** 1.0.0  
**Effective Date:** 2026-10-04  
**Scope:** DialPulse-Web (`dialpulse.com`)  
**Authority:** Technical Architecture & Risk Advisory Board  

---

## 1. Risk Management Framework & Purpose

This document establishes the centralized risk register for **DialPulse-Web**. 

In accordance with DialPulse governance standards:
- All registered risks are derived strictly from documented realities and open questions identified in the repository (`BRAIN/OPEN-QUESTIONS.md`, `BRAIN/PUBLIC-CLAIMS-REGISTER.md`, `BRAIN/PRIVACY-POLICY-REQUIREMENTS.md`, `README.md`, `package.json`).
- Probabilities and impacts are evaluated using standardized qualitative ratings: **LOW**, **MEDIUM**, **HIGH**, and **CRITICAL**.
- No hypothetical or unevidenced risks are fabricated.

---

## 2. Qualitative Risk Evaluation Matrix

| Severity Level | Definition | Mandatory Governance Action |
| :--- | :--- | :--- |
| **CRITICAL** | Severe legal, security, or enterprise credibility exposure capable of halting operations or inducing statutory penalties. | Immediate executive escalation; release gating; blocking public publication until resolved. |
| **HIGH** | Significant business, privacy, or architectural risk that could degrade buyer trust or breach compliance standards. | Active CAB tracking; mitigation required prior to major release milestones. |
| **MEDIUM** | Operational or technical friction requiring architectural clarity, technical mitigation, or business determination. | Scheduled resolution in technical sprint or corporate review cycles. |
| **LOW** | Minor localized technical debt or documentation discrepancy with minimal external blast radius. | Backlog management; resolved during routine maintenance cycles. |

---

## 3. Centralized Project Risk Register

| Risk ID | Risk | Category | Likelihood | Impact | Severity | Mitigation | Owner | Status | Evidence |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **RSK-001** | **Unsupported Public Claims & Certifications**: Marketing copy claiming unverified credentials (e.g. SOC 2 Type II, universal 99.9% uptime, 1-hour SLA, or uncredited statistical studies). | Claims & Trust | HIGH | CRITICAL | **CRITICAL** | Comprehensive audit in `BRAIN/PUBLIC-CLAIMS-REGISTER.md`. All Class E claims neutralized or removed from `Home.tsx`, `Contact.tsx`, `Pricing.tsx`, and `SolutionsSecurity.tsx`. Strict Claims Gate in SDLC. | Product Lead / Architect | MITIGATED & ACTIVELY MANAGED | `BRAIN/PUBLIC-CLAIMS-REGISTER.md:54, 100, 106`, `BRAIN/DECISIONS.md:5` |
| **RSK-002** | **Unresolved Corporate Legal Entity & DPO Contact**: Publishing customer-facing legal terms (`/privacy`, `/terms`, `/refund`, `/cookies`) without official legal entity name, corporate address, or designated DPO. | Legal & Governance | HIGH | HIGH | **HIGH** | Published clear pre-publication draft notices, disclaimer badges, and transparent "To be confirmed / Pending Legal Confirmation" tags. Real corporate placeholders barred from fabrication. | Corporate Counsel / DPO | PENDING LEGAL COUNSEL | `BRAIN/OPEN-QUESTIONS.md:66-70`, `BRAIN/PRIVACY-POLICY-REQUIREMENTS.md:300, 335`, `src/pages/Privacy.tsx` |
| **RSK-003** | **Unresolved Data Retention & Archival Schedules**: Absence of automated database TTL purge jobs in CRM codebase while privacy laws (GDPR, DPDP) require storage limitation. | Data Privacy | HIGH | HIGH | **HIGH** | Explicitly documented in `BRAIN/PRIVACY-POLICY-REQUIREMENTS.md`. Website policies disclaim automated purge promises; pending executive decision on retention lifecycles. | DPO / Systems Architect | PENDING BUSINESS DECISION | `BRAIN/OPEN-QUESTIONS.md:57-61`, `BRAIN/PRIVACY-POLICY-REQUIREMENTS.md:181-196` |
| **RSK-004** | **AI Provider Model Training & Prompt Retention Uncertainty**: Uncertainty over whether external Google GenAI API terms contractually guarantee zero customer transcript training and prompt deletion SLAs. | AI Governance & Compliance | MEDIUM | CRITICAL | **HIGH** | Marketing copy rewritten from "contractual guarantee" to architectural "Tenant-isolated AI speech processing perimeter". AI privacy disclosures gated pending enterprise Google Cloud agreement. | Systems Architect / Legal Counsel | PENDING LEGAL COUNSEL | `BRAIN/PUBLIC-CLAIMS-REGISTER.md:AI-004`, `BRAIN/OPEN-QUESTIONS.md:52-56`, `BRAIN/PRIVACY-POLICY-REQUIREMENTS.md:165-178` |
| **RSK-005** | **Simulated Contact Form Backend & Lead Droppage**: Inquiry form on `/contact` uses client-side simulated timeout (`setTimeout`) without persistent backend webhook ingestion, risking lost high-value enterprise leads upon page reload. | Operations & Conversion | HIGH | HIGH | **HIGH** | Current handler only simulates success and does not demonstrate network delivery or persistence. Replace it only under approved SDLC scope with a durable API flow whose success message follows the agreed acceptance condition. | Technical Lead / DevOps | ACTIVELY MANAGED | `README.md:306, 384`, `src/pages/Contact.tsx`, `BRAIN/SDLC-REQUIREMENTS.md:FR-001` |
| **RSK-006** | **Limited Automated Testing Coverage**: `package.json` contains only `tsc --noEmit` and `vite build`. Lack of automated unit test runners (Vitest/Jest) and E2E suites (Playwright) introduces regression risk during rapid UI edits. | Quality Assurance | HIGH | MEDIUM | **MEDIUM** | Enforced 13-point manual QA testing protocols, route checklists, and responsive device testing in `BRAIN/SDLC-TEST-PLAN.md`. Automated unit/E2E runners scheduled in SDLC roadmap. | QA Lead / Frontend Engineer | ACTIVELY MANAGED | `package.json:6-12`, `BRAIN/SDLC-TEST-PLAN.md:1.1` |
| **RSK-007** | **Third-Party Dependency Exposure & Vulnerabilities**: Security vulnerabilities or bundle bloat introduced by unchecked npm dependencies in `package.json`. | Security & Architecture | MEDIUM | HIGH | **MEDIUM** | Strict lockfile discipline; dependency additions restricted via Change Control (`BRAIN/SDLC-CHANGE-CONTROL.md:5.1`); regular `npm audit` checks in Stage I maintenance. | Lead Frontend Engineer | ACTIVELY MANAGED | `package.json:13-45`, `BRAIN/SDLC.md:Stage I` |
| **RSK-008** | **Lead Erasure vs. Compliance Audit Log Paradox**: Regulatory conflict between prospect "Right to be Forgotten" (GDPR Art. 17 / DPDP) and immutable compliance audit log retention required for regulatory defense. | Legal & Data Architecture | MEDIUM | HIGH | **HIGH** | Transparently disclosed in `/privacy` as an architectural boundary. Proposed pseudonymization / cryptographic tombstoning strategy submitted to legal counsel for formal sign-off. | Systems Architect / Privacy Officer | PENDING LEGAL COUNSEL | `BRAIN/OPEN-QUESTIONS.md:85-89`, `BRAIN/PRIVACY-POLICY-REQUIREMENTS.md:210-220` |
| **RSK-009** | **B2B Refund Ambiguity & Carrier Consumption Charges**: Commercial dispute risk from enterprise customers expecting consumer cooling-off refunds on consumed telephony minutes or provisioned compute. | Commercial & Finance | MEDIUM | MEDIUM | **MEDIUM** | Dedicated policy published at `/refund` explicitly stating telephony carrier consumption is non-refundable; B2B subscriptions governed by signed commercial order terms. | Product Lead / Finance | MITIGATED & ACTIVELY MANAGED | `src/pages/Refund.tsx`, `BRAIN/OPEN-QUESTIONS.md:76-80`, `BRAIN/PUBLIC-CLAIMS-REGISTER.md:LEG-002` |
| **RSK-010** | **Unauthorized Third-Party Telemetry & Tracking Pixels**: Regulatory penalties and privacy trust breach if unconsented advertising pixels (Meta Pixel, Google Analytics, Hotjar) are injected into client bundles. | Privacy & Regulatory | MEDIUM | HIGH | **MEDIUM** | The reviewed analytics helper has no production provider integration and no third-party tracker is wired through that helper. A complete production bundle/network and deployment-tag audit is still required; consent storage alone is not proof of full-site privacy compliance. | Privacy Officer / Architect | MITIGATED & ACTIVELY MANAGED | `BRAIN/PUBLIC-CLAIMS-REGISTER.md:LEG-001`, `BRAIN/PRIVACY-POLICY-REQUIREMENTS.md:94-98`, `src/pages/Cookies.tsx` |
| **RSK-011** | **DPDP Phased Commencement Misinterpretation**: Treating the Act/Rules as wholly effective immediately or confusing a normal cookie banner with statutory Consent Manager status. | Legal & Governance | MEDIUM | HIGH | **HIGH** | Maintain a dated official-source timeline, review Rule 4/section 6(9) scope before 13 Nov 2026, and obtain counsel confirmation before any public claim. | Privacy/Legal Counsel | OPEN — APPLICABILITY REVIEW | `BRAIN/INDIA-COMPLIANCE-ALIGNMENT.md`, official G.S.R. 843(E) / G.S.R. 846(E) |
| **RSK-012** | **Incident Reporting and Log Readiness Not Evidenced**: Actual production log sources/regions, accountable incident owner and a tested escalation process are not confirmed for the website deployment. | Security & Operations | MEDIUM | CRITICAL | **HIGH** | Verify hosting/CDN/WAF/log provider configuration, applicable CERT-In scope and log retention/location, and test the incident runbook. Do not claim readiness before evidence. | Security/Operations Owner | NOT VERIFIED | CERT-In Directions page; `BRAIN/COMPLIANCE-ROADMAP.md` |
| **RSK-013** | **Website and CRM Privacy Scope Conflation**: Public privacy/cookie content may describe CRM-only session/authentication or data processing as if it necessarily occurs on the public website; free-text inquiry could invite oversharing. | Privacy & Communications | HIGH | HIGH | **HIGH** | Create separate website/CRM data inventories; audit production network/storage; minimize the contact form and discourage submission of KYC/financial documents; reconcile policies only after legal review. | Product Owner / Privacy Counsel | OPEN — DISCLOSURE REVIEW | `src/pages/Contact.tsx`, `src/lib/cookies/cookieConsentStore.ts`, `src/lib/analytics/index.ts`, `BRAIN/INDIA-COMPLIANCE-ALIGNMENT.md` |
| **RSK-014** | **Conditional Financial-Sector Rules Applied Too Broadly or Missed**: Universal statements about RBI applicability or data localization could be incorrect without confirming whether the entity/service is a covered RE, LSP/DLA or payment-system provider. | Regulatory Scope | MEDIUM | HIGH | **HIGH** | Require contract/role-specific counsel review; separate direct legal obligations from customer flow-downs; do not represent payment-system localization as a universal CRM rule. | Legal Counsel / Product Owner | PENDING ROLE CLASSIFICATION | RBI Outsourcing of IT Services Directions; RBI Storage of Payment System Data direction; `BRAIN/INDIA-COMPLIANCE-ALIGNMENT.md` |

---

## 4. Risk Review & Escalation Cadence

The register currently contains 14 risks (RSK-001 through RSK-014). India compliance risks RSK-011 through RSK-014 require review during the immediate applicability assessment and before any release that changes data flows, hosting, legal copy or financial-sector positioning.


1. **Sprint Review (Bi-Weekly):** Technical and QA risks (`RSK-005`, `RSK-006`, `RSK-007`, `RSK-012`, `RSK-013`) are evaluated during sprint planning to track mitigation progress.
2. **Change Advisory Board (CAB) Review (Pre-Release):** All changes classified as `HIGH` or `CRITICAL` risk must be audited against this register before release deployment.
3. **Executive & Legal Review (Monthly and before statutory milestones):** Open questions and pending items (`RSK-002`, `RSK-003`, `RSK-004`, `RSK-008`, `RSK-011`, `RSK-014`) are reviewed with leadership/counsel to obtain binding determinations and retire open risks.
