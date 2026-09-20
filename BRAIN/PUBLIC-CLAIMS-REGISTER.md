# DialPulse Public Claims Register & Verification Audit

**Document Status**: ACTIVE GOVERNANCE REGISTER  
**Audit Date**: 2026-09-20  
**Authority**: DialPulse Content Governance & Trust Architecture  

---

## 1. Governance Principles & Hierarchy of Truth

All public statements, marketing copy, documentation, and interface text across the DialPulse digital property must conform to the following strict hierarchy of truth:

1. **Level 1 — Actual Current Implementation (Source Code)**: What is built, tested, and actively functioning in the codebase.
2. **Level 2 — Explicitly Documented Product Behavior (`BRAIN/`)**: Technical architectures, verified data flows, schema specifications, and security policies.
3. **Level 3 — Approved Business & Commercial Decisions**: Signed leadership determinations regarding pricing tiers, sales models, and enterprise commercial structures.
4. **Level 4 — Legal & Privacy Requirements**: Statutory mandates, data protection policies, and regulatory compliance disclosures.
5. **Level 5 — Marketing Copy**: Contextual and editorial narrative. Marketing copy **MUST NOT** contradict or outrun Levels 1–4.

### Core Governance Rules
- **Rule 1**: Marketing copy must never invent features, certifications, customer logos, metrics, SLAs, or contractual commitments.
- **Rule 2**: When marketing copy conflicts with technical or commercial reality, technical and commercial reality wins; the marketing claim must be neutralized or removed.
- **Rule 3**: Do not confuse technical capability with legal or operational guarantees (e.g., "technical DNC check" ≠ "statutory compliance guarantee").

---

## 2. Classification Schema

| Class | Designation | Definition | Action Required |
| :--- | :--- | :--- | :--- |
| **A** | **Verified Implemented** | Directly backed by functional, active application source code. | Approved for public representation. |
| **B** | **Documented Architecture** | Documented in verified engineering architecture, system specifications, or `BRAIN/` specs. | Approved with accurate architectural terminology. |
| **C** | **Business Decision Required** | Commercial, pricing, or support policy requiring executive/commercial confirmation. | Flagged; displayed as TBD, Custom, or Contact Sales until approved. |
| **D** | **Legal/Privacy Approval Required** | Regulatory, privacy, subprocessor, or statutory statement requiring Legal Counsel/DPO sign-off. | Gated; disclaimers enforced; no unauthorized contractual warranties. |
| **E** | **Unsupported / Removed** | Claim with no evidence in code or documentation (e.g. fake certifications, unverified metrics). | **REMOVED** or neutralized to non-fabricated form. |
| **F** | **Marketing / Editorial Framing** | Qualitative operational framing, problem-statement contrast, or brand identity copy. | Approved when clearly qualitative and free of fabricated stats. |

---

## 3. Comprehensive Public Claims Inventory

### 3.1 System Architecture & Multi-Tenant Infrastructure

| ID | Verbatim Claim / Text | Location / File | Category | Class | Verification / Evidence | Status / Remediation Action |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **SYS-001** | "Multi-tenant logical isolation with mandatory `tenant_id` foreign key scoping" | `src/components/security/SecurityTenantIsolation.tsx`, `BRAIN/PRIVACY-POLICY-REQUIREMENTS.md` | Architecture | **A** | Verified in PostgreSQL schema design and tenant middleware. All queries scope to active tenant ID. | Approved. Accurately describes data model. |
| **SYS-002** | "Enterprise configurations support single-tenant PostgreSQL database partitions" | `src/config/pricing.ts`, `src/components/security/SecurityTenantIsolation.tsx` | Architecture | **B** | Verified in enterprise architecture roadmap and infrastructure specs. Dedicated VPC/DB instances. | Approved. Accurately framed as bespoke enterprise deployment. |
| **SYS-003** | "Asynchronous background workers powered by Redis queues for heavy workloads" | `src/components/solutions/SolutionsSecurity.tsx`, `src/config/pricing.ts` | Architecture | **A** | Verified in worker process architecture for CSV ingestion, export generation, and queue management. | Approved. Accurately describes decoupling of heavy tasks. |
| **SYS-004** | "Cloud Run containerized runtime environment behind NGINX proxy" | `src/components/security/SecurityHero.tsx`, `BRAIN/PRIVACY-POLICY-REQUIREMENTS.md` | Infrastructure | **A** | Verified in production runtime container setup and reverse proxy config on port 3000. | Approved. Matches platform runtime facts. |

### 3.2 Security, Cryptography & Access Control

| ID | Verbatim Claim / Text | Location / File | Category | Class | Verification / Evidence | Status / Remediation Action |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **SEC-001** | "SOC 2 Type II compliant / report available" | `src/pages/Home.tsx`, `src/pages/Contact.tsx`, `src/components/solutions/SolutionsSecurity.tsx` | Certification | **E** | **UNSUPPORTED**: DialPulse has not completed a formal AICPA SOC 2 Type II audit. | **REMEDIATED**: Removed from `Home.tsx`, `Contact.tsx`, and `SolutionsSecurity.tsx`. Replaced with verified architecture documentation. |
| **SEC-002** | "Security controls are not a legal certification" | `src/components/security/SecurityComplianceDistinction.tsx` | Compliance | **B** | Verified in corporate compliance policy. Clarifies technical safeguards vs organizational legal duties. | Approved. Strong boundary governance statement. |
| **SEC-003** | "TLS 1.3 encryption in-transit and AES-256 at-rest storage for call audio" | `src/config/pricing.ts`, `src/components/solutions/SolutionsSecurity.tsx`, `BRAIN/PRIVACY-POLICY-REQUIREMENTS.md` | Cryptography | **B** | Verified in Google Cloud KMS storage specs and WebRTC TLS 1.3 transport configuration. | Approved. Technical standard correctly stated. |
| **SEC-004** | "Multi-tier Role-Based Access Control (Owner, Team Lead, Telecaller, Admin)" | `src/config/pricing.ts`, `src/components/security/SecurityRbac.tsx` | Access Control | **A** | Verified in CRM RBAC permissions matrix and route guards. | Approved. Correctly reflects four implemented roles. |
| **SEC-005** | "Two-step administrative impersonation logging with original actor ID capture" | `src/components/security/SecurityPrivilegedAccess.tsx`, `BRAIN/PRIVACY-POLICY-REQUIREMENTS.md` | Audit | **A** | Verified in audit schema: `actor_id` and `original_actor_id` captured in tamper-evident logs. | Approved. Verified implementation invariant. |
| **SEC-006** | "Immutable, append-only audit logging with microsecond ISO-8601 UTC timestamps" | `src/components/security/SecurityAuditability.tsx`, `src/components/privacy/PrivacySections.tsx` | Audit | **A** | Verified in database schema: audit log tables prevent update and delete operations. | Approved. Verified implementation invariant. |
| **SEC-007** | "Bring Your Own Key (BYOK) with customer-managed KMS keys" | `src/config/pricing.ts`, `src/components/pricing/PricingEnterprise.tsx` | Cryptography | **B** | Supported in Enterprise architecture blueprint for dedicated database partitions. | Approved as Enterprise-tier bespoke option. |

### 3.3 Telephony, Softphone & Omnichannel Messaging

| ID | Verbatim Claim / Text | Location / File | Category | Class | Verification / Evidence | Status / Remediation Action |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **TEL-001** | "In-browser WebRTC softphone with one-click dialing" | `src/pages/Product.tsx`, `src/components/features/FeaturesSoftphoneSpotlight.tsx` | Telephony | **A** | Verified in client-side WebRTC softphone component and audio session handlers. | Approved. Real product feature. |
| **TEL-002** | "Dual-track audio recording (agent track and customer track)" | `src/config/pricing.ts`, `src/components/solutions/SolutionsComparison.tsx` | Telephony | **B** | Verified in telephony audio recording pipeline specification (stored in object store, URI in DB). | Approved. Audio blobs stored in media buckets, not relational DB. |
| **TEL-003** | "Carrier pass-through billing or Bring-Your-Own-Carrier (BYOC) SIP interconnects" | `src/config/pricing.ts`, `BRAIN/PRICING-CONTEXT.md` | Commercial | **B** | Verified in telephony architecture. DialPulse decouples seat software fees from telco usage. | Approved. Transparent carrier relationship statement. |
| **TEL-004** | "Two-way WhatsApp and SMS messaging directly linked to lead record" | `src/config/pricing.ts`, `src/components/features/FeaturesOmnichannelSpotlight.tsx` | Messaging | **A** | Verified in omnichannel message schema (`sms`, `whatsapp`) linked by `lead_id` and `tenant_id`. | Approved. Real product feature. |
| **TEL-005** | "Pre-approved messaging templates and automated fallback triggers" | `src/components/solutions/SolutionsComparison.tsx`, `src/config/pricing.ts` | Messaging | **A** | Verified in template engine and unanswered-call fallback triggers. | Approved. Matches product workflow. |

### 3.4 Compliance & Zero-Bypass Policy Engine

| ID | Verbatim Claim / Text | Location / File | Category | Class | Verification / Evidence | Status / Remediation Action |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **CMP-001** | "Zero-bypass DNC pre-flight verification engine" | `src/config/pricing.ts`, `src/components/solutions/SolutionsFAQ.tsx`, `src/pages/Home.tsx` | Compliance | **A** | Verified in dialer trigger pipeline: queries tenant and global DNC tables before audio stream initiates. | Approved. Real technical safeguard. |
| **CMP-002** | "Local-timezone safe calling window lock (e.g. 9:00 AM – 8:00 PM recipient local time)" | `src/components/solutions/SolutionsFAQ.tsx`, `src/components/security/SecurityCommunicationSafeguards.tsx` | Compliance | **A** | Verified in recipient area code / geo-lookup timezone calculator and hard dial locks. | Approved. Real technical safeguard. |
| **CMP-003** | "DialPulse does not make blanket statutory compliance guarantees (TRAI, TCPA, DLT)" | `src/components/terms/TermsSections.tsx`, `src/data/faqData.ts` | Legal | **D** | Verified in Terms of Service and FAQ. Explains software provides technical tools, not legal certification. | Approved. Essential legal safeguard. |
| **CMP-004** | "Contact frequency limits and 30-day contact pause flags" | `src/components/features/FeaturesComplianceSpotlight.tsx`, `BRAIN/PRIVACY-POLICY-REQUIREMENTS.md` | Compliance | **A** | Verified in cadence policy engine restricting over-contacting. | Approved. Real feature. |

### 3.5 AI & Google Gemini Integration

| ID | Verbatim Claim / Text | Location / File | Category | Class | Verification / Evidence | Status / Remediation Action |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **AI-001** | "Server-side Gemini SDK integration (`@google/genai`) with zero API keys in client" | `src/data/faqData.ts`, `src/components/security/SecurityAiPrivacy.tsx`, `BRAIN/PRIVACY-POLICY-REQUIREMENTS.md` | AI Architecture | **A** | Verified in server API endpoints. `GEMINI_API_KEY` is server-only environment variable. | Approved. Mandatory security invariant. |
| **AI-002** | "Automated call transcription, 2-sentence summaries, and sentiment classification" | `src/data/featuresData.ts`, `src/components/features/FeaturesAiSpotlight.tsx` | AI Capability | **A** | Verified in post-call AI processing endpoints and UI display cards. | Approved. Core product functionality. |
| **AI-003** | "Pre-inference text sanitization (masking detected phone numbers and emails)" | `src/data/faqData.ts`, `src/components/security/SecurityAiPrivacy.tsx` | AI Privacy | **A** | Verified in regex-based sanitization routines prior to LLM prompt dispatch. | Approved. Real privacy control. |
| **AI-004** | "Zero public AI model training perimeter guarantee" | `src/config/pricing.ts` (original text) | Contractual | **E** | **UNCONFIRMED CONTRACTUAL GUARANTEE**: While DialPulse does not train models on tenant data, external provider terms are governed by Google Cloud terms. | **REMEDIATED**: Rewritten to "Tenant-isolated AI speech processing & summary perimeter". Contractual guarantee status moved to Open Questions. |
| **AI-005** | "DialPulse does not train proprietary custom models using tenant data" | `src/data/faqData.ts:281`, `src/components/security/SecurityAiPrivacy.tsx` | AI Policy | **B** | Verified in system architecture. DialPulse operates purely as an inference consumer of pre-trained models. | Approved. Factual representation of product operations. |

### 3.6 Commercial, Pricing & Licensing Claims

| ID | Verbatim Claim / Text | Location / File | Category | Class | Verification / Evidence | Status / Remediation Action |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **COM-001** | "No credit card required / Full feature 14-day trial" | `src/pages/Home.tsx` (original text) | Commercial | **E** | **UNSUPPORTED**: Self-serve free trial is not provisioned in current CRM architecture; access is via guided demo. | **REMEDIATED**: Removed from `Home.tsx`. Replaced with verified architecture trust highlights. |
| **COM-002** | "Start your trial" CTA pointing to `https://app.dialpulse.com/signup` | `src/pages/FeatureDetail.tsx` (original text) | Commercial | **E** | **UNSUPPORTED**: Public registration flow is in private review; onboarding requires architecture review. | **REMEDIATED**: Updated to "Book Walkthrough" pointing to `/contact` and "All Features" pointing to `/features`. |
| **COM-003** | "Per-user, per-month seat licensing model" | `src/config/pricing.ts`, `BRAIN/PRICING-CONTEXT.md` | Commercial | **B** | Verified in pricing configuration architecture (`PRICING_PLANS`). | Approved. Matches business model. |
| **COM-004** | "Public self-serve pricing in commercial review (TBD / Custom)" | `src/config/pricing.ts`, `src/pages/Pricing.tsx` | Commercial | **C** | Verified in `BRAIN/PRICING-CONTEXT.md`. Pricing is actively undergoing executive review; zero fake prices shown. | Approved. Complies with commercial non-fabrication invariant. |
| **COM-005** | "Standard vs Priority vs Tailored SLA availability by tier" | `src/config/pricing.ts` | Support | **C** | Documented support tiers. Custom SLAs are negotiated under enterprise commercial agreements. | Approved. 1-hour SLA neutralized to "Tailored SLA". |
| **COM-006** | "Dedicated 1-hour SLA commitment" | `src/config/pricing.ts` (original text) | Commercial/SLA | **E** | **UNSUPPORTED**: 1-hour SLA is not a standardized public offering without an enterprise master services agreement. | **REMEDIATED**: Updated to "Dedicated Customer Success & tailored SLA options" / "Tailored SLA". |

### 3.7 Metrics, Statistics & Performance Claims

| ID | Verbatim Claim / Text | Location / File | Category | Class | Verification / Evidence | Status / Remediation Action |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **MET-001** | "Telemetry: 99.9%" metric card | `src/pages/FeatureDetail.tsx` (original text) | Performance | **E** | **UNSUPPORTED**: Unverified 99.9% telemetry percentage metric on marketing detail page. | **REMEDIATED**: Replaced with operational status descriptor "Telemetry: Active". |
| **MET-002** | "Over 60% of interested leads drop off because reps forget to follow up" | `src/components/solutions/SolutionsComparison.tsx`, `src/components/solutions/SolutionsWorkflowVisual.tsx` | Marketing | **E** | **UNSUPPORTED METRIC**: Uncited statistical percentage presenting as factual industry metric. | **REMEDIATED**: Rewritten to qualitative operational reality: "interested leads frequently stall or drop off when reps lack disciplined follow-up cadences". |
| **MET-003** | "Reps spend 30% / 35% of their workday typing manual summaries" | `src/components/solutions/SolutionsComparison.tsx`, `src/components/solutions/SolutionExplorer.tsx` | Marketing | **E** | **UNSUPPORTED METRIC**: Arbitrary daily percentage burden without cited time-motion study. | **REMEDIATED**: Rewritten to qualitative reality: "Reps spend substantial time each day typing manual summaries". |
| **MET-004** | "Compliance Rate: 99.9% / 100% Passed" in supervisor dashboard mockup | `src/components/marketing/mockups/HeroMockup.tsx` | Product Mockup | **F** | Mockup UI component illustrating supervisor compliance monitoring. | **REMEDIATED**: Labeled as "Compliance Checks: 100% Verified" to accurately depict zero-bypass pre-flight verification. |

---

## 4. Remediation Action Summary

The following high-risk unsupported claims were identified during this audit and remediated directly in the codebase:

1. **Elimination of Fabricated SOC 2 Certification Claims**:
   - `src/pages/Home.tsx`: Removed `<span>SOC 2 Type II compliant</span>`; replaced with `<span>Multi-tenant data isolation</span>`.
   - `src/pages/Contact.tsx`: Removed `Request our SOC 2 Type II report and comprehensive tenant isolation whitepaper`; replaced with `Request architectural specifications, tenant isolation whitepapers, and technical data flow documentation`.
   - `src/components/solutions/SolutionsSecurity.tsx`: Removed `SOC 2 Type II aligned controls, GDPR right-to-be-forgotten data purging, and zero-compromise encryption`; replaced with `Multi-tenant isolation boundaries, structured data retention controls, and encrypted communication channels`.
   - `src/components/solutions/SolutionExplorer.tsx`: Modified mock prospect dialogue from requesting "ISO 27001 certificate" to "security whitepaper & architecture review" to avoid certification confusion.

2. **Removal of Unsupported Commercial & Trial Promises**:
   - `src/pages/Home.tsx`: Removed `<span>No credit card required</span>` and `<span>Full feature 14-day trial</span>`; replaced with verified capabilities `<span>In-browser WebRTC telephony</span>` and `<span>Automated compliance guardrails</span>`.
   - `src/pages/FeatureDetail.tsx`: Replaced "Start your trial" CTA pointing to external signup with "Book Walkthrough" (`/contact`) and "All Features" (`/features`).

3. **Neutralization of Contractual Commitments & SLAs**:
   - `src/config/pricing.ts`: Replaced public "1-hour SLA" with "Dedicated Customer Success & tailored SLA options" and "Tailored SLA".
   - `src/config/pricing.ts`: Replaced contractual "Zero public AI model training perimeter guarantee" with architectural "Tenant-isolated AI speech processing & summary perimeter".
   - `src/components/pricing/PricingEnterprise.tsx`: Replaced "1-Hour Priority Incident SLA" and "1-Hour P1 Response SLA" with "Priority Incident Escalation SLA" and "Tailored P1 Response SLA" under enterprise agreements.
   - `src/components/pricing/PricingWhoIsThisFor.tsx`: Replaced "1-hour SLAs" with "tailored SLAs".

4. **Neutralization of Fabricated Metric & Statistical Claims**:
   - `src/pages/FeatureDetail.tsx`: Replaced arbitrary "Telemetry: 99.9%" metric with operational descriptor "Telemetry: Active".
   - `src/components/solutions/SolutionsComparison.tsx`: Removed unverified "60% lead dropoff" and "30% manual typing" statistics; replaced with verified qualitative workflow friction.
   - `src/components/solutions/SolutionsWorkflowVisual.tsx`: Removed "over 60% lead dropoff" claim.
   - `src/components/solutions/SolutionExplorer.tsx`: Removed "35% of their working day" claim.
   - `src/components/marketing/mockups/HeroMockup.tsx`: Updated supervisor mockup to "Compliance Checks: 100% Verified".

---

## 5. Ongoing Content Governance Rules for DialPulse

When authoring new pages, components, or documentation for DialPulse, the following rules are mandatory:

1. **No External Certifications Without Legal Proof**: Do not cite SOC 2, ISO 27001, HIPAA, FedRAMP, or PCI-DSS unless a current, valid certificate of compliance is formally registered in the repository.
2. **No Arbitrary Numerical Guarantees**: Never use `99.9%`, `99.99%`, `100% uptime`, or `< 1 hour response` without an approved Master Service Agreement (MSA) or Service Level Agreement (SLA).
3. **No Uncredited Statistical Studies**: Describe workflow problems qualitatively (e.g. "manual follow-ups are easily missed") rather than fabricating uncredited statistics (e.g. "increases win rates by 47%").
4. **Honest Commercial Pathways**: Direct prospects to Architecture Reviews and Sales Walkthroughs (`/contact`) rather than inventing self-serve instant sign-up or free trial flows that do not exist.
5. **Clear Legal Distinction**: Consistently affirm that software controls provide technical safeguards, not statutory or legal certifications.
