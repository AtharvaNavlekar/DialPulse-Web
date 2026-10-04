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
| **RSK-005** | **Simulated Contact Form Backend & Lead Droppage**: Inquiry form on `/contact` uses client-side simulated timeout (`setTimeout`) without persistent backend webhook ingestion, risking lost high-value enterprise leads upon page reload. | Operations & Conversion | HIGH | HIGH | **HIGH** | Form provides transparent immediate validation and success confirmation; architecture review request instructions provided. Backend webhook persistence slated in roadmap. | Technical Lead / DevOps | ACTIVELY MANAGED | `README.md:306, 384`, `src/pages/Contact.tsx`, `BRAIN/SDLC-REQUIREMENTS.md:FR-001` |
| **RSK-006** | **Limited Automated Testing Coverage**: `package.json` contains only `tsc --noEmit` and `vite build`. Lack of automated unit test runners (Vitest/Jest) and E2E suites (Playwright) introduces regression risk during rapid UI edits. | Quality Assurance | HIGH | MEDIUM | **MEDIUM** | Enforced 13-point manual QA testing protocols, route checklists, and responsive device testing in `BRAIN/SDLC-TEST-PLAN.md`. Automated unit/E2E runners scheduled in SDLC roadmap. | QA Lead / Frontend Engineer | ACTIVELY MANAGED | `package.json:6-12`, `BRAIN/SDLC-TEST-PLAN.md:1.1` |
| **RSK-007** | **Third-Party Dependency Exposure & Vulnerabilities**: Security vulnerabilities or bundle bloat introduced by unchecked npm dependencies in `package.json`. | Security & Architecture | MEDIUM | HIGH | **MEDIUM** | Strict lockfile discipline; dependency additions restricted via Change Control (`BRAIN/SDLC-CHANGE-CONTROL.md:5.1`); regular `npm audit` checks in Stage I maintenance. | Lead Frontend Engineer | ACTIVELY MANAGED | `package.json:13-45`, `BRAIN/SDLC.md:Stage I` |
| **RSK-008** | **Lead Erasure vs. Compliance Audit Log Paradox**: Regulatory conflict between prospect "Right to be Forgotten" (GDPR Art. 17 / DPDP) and immutable compliance audit log retention required for regulatory defense. | Legal & Data Architecture | MEDIUM | HIGH | **HIGH** | Transparently disclosed in `/privacy` as an architectural boundary. Proposed pseudonymization / cryptographic tombstoning strategy submitted to legal counsel for formal sign-off. | Systems Architect / Privacy Officer | PENDING LEGAL COUNSEL | `BRAIN/OPEN-QUESTIONS.md:85-89`, `BRAIN/PRIVACY-POLICY-REQUIREMENTS.md:210-220` |
| **RSK-009** | **B2B Refund Ambiguity & Carrier Consumption Charges**: Commercial dispute risk from enterprise customers expecting consumer cooling-off refunds on consumed telephony minutes or provisioned compute. | Commercial & Finance | MEDIUM | MEDIUM | **MEDIUM** | Dedicated policy published at `/refund` explicitly stating telephony carrier consumption is non-refundable; B2B subscriptions governed by signed commercial order terms. | Product Lead / Finance | MITIGATED & ACTIVELY MANAGED | `src/pages/Refund.tsx`, `BRAIN/OPEN-QUESTIONS.md:76-80`, `BRAIN/PUBLIC-CLAIMS-REGISTER.md:LEG-002` |
| **RSK-010** | **Unauthorized Third-Party Telemetry & Tracking Pixels**: Regulatory penalties and privacy trust breach if unconsented advertising pixels (Meta Pixel, Google Analytics, Hotjar) are injected into client bundles. | Privacy & Regulatory | MEDIUM | HIGH | **MEDIUM** | Codebase verified with zero external analytics/tracking scripts loaded. Cookie consent banner and local storage preference manager enforced (`/cookies`). | Privacy Officer / Architect | MITIGATED & ACTIVELY MANAGED | `BRAIN/PUBLIC-CLAIMS-REGISTER.md:LEG-001`, `BRAIN/PRIVACY-POLICY-REQUIREMENTS.md:94-98`, `src/pages/Cookies.tsx` |

---

## 4. Risk Review & Escalation Cadence

1. **Sprint Review (Bi-Weekly):** Technical and QA risks (`RSK-005`, `RSK-006`, `RSK-007`) are evaluated during sprint planning to track mitigation progress.
2. **Change Advisory Board (CAB) Review (Pre-Release):** All changes classified as `HIGH` or `CRITICAL` risk must be audited against this register before release deployment.
3. **Executive & Legal Review (Monthly):** Open questions and pending items (`RSK-002`, `RSK-003`, `RSK-004`, `RSK-008`) are reviewed with leadership to obtain binding determinations and retire open risks.
