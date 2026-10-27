# DialPulse-Web — India Compliance & Target Architecture Roadmap

**Status:** Proposed roadmap for analysis and prioritization; not evidence of implementation  
**Prepared:** 2026-10-27  
**Authority:** Must follow `BRAIN/SDLC.md`, `BRAIN/SDLC-REQUIREMENTS.md`, `BRAIN/SDLC-CHANGE-CONTROL.md`, `BRAIN/SDLC-TEST-PLAN.md` and `BRAIN/SDLC-RELEASE-CHECKLIST.md`.

## Guiding principle

Proceed in SDLC order: **Requirements → Analysis → Design → Implementation → Testing → Security/Privacy review → Release**. The target diagram is a desired state. Do not deploy a CMS, API, database, analytics provider, CRM integration, CDN/WAF or notifications until the relevant decisions, scope, acceptance criteria and owners are approved.

## Phase 0 — Immediate applicability and evidence triage

**Target:** Before the scheduled 13 November 2026 commencement tranche, with urgent escalation for unresolved decisions. This date is a statutory milestone, not a claim that each provision is applicable to DialPulse.

| Work item | Priority | Deliverable / exit evidence | Status |
|---|---|---|---|
| Confirm DialPulse legal entity, operating location and legal role | P0 | Signed factual profile; role/applicability review | **BLOCKED — business/legal** |
| Assess whether DialPulse operates a statutory DPDP Consent Manager service | P0 | Written applicability decision for Rule 4 / section 6(9); do not confuse this with a normal cookie banner | **NOT ASSESSED** |
| Confirm current production hosting, CDN/WAF, providers and regions | P0 | Deployment evidence and provider/data-flow inventory | **NOT VERIFIED** |
| Confirm ICT logs required/available, retention and location; confirm CERT-In reporting owner and escalation | P0 | Log-source inventory; scope decision; incident escalation runbook and contact coverage | **NOT VERIFIED** |
| Separate website data from CRM/KYC/financial data | P0 | Product-specific data inventory and disclosure map | **PARTIAL** |
| Inventory all website-originated network requests and scripts | P0 | Production network/bundle audit with dated evidence | **NOT YET VERIFIED** |
| Record unresolved legal/policy publication blockers | P0 | Decision owner and closure criteria for each item | **BLOCKED / OPEN** |

**Gate:** Do not assert broad DPDP, CERT-In, RBI, localization, certification or “compliant” status without applicable scope and objective evidence.

## Phase 1 — Stage B/C requirements and architecture analysis

**Goal:** Approve the future design before implementation.

1. Create or update privacy/security/operations requirements and link each to design, implementation and test evidence.
2. Define the actual contact API contract: permitted fields, validation, size limits, rate controls, response semantics, abuse handling, durable acceptance and failure states.
3. Determine backend hosting/runtime, lead store, backup and recovery, secrets, logging, monitoring, sales notification and CRM API approach.
4. Define duplicate prevention/idempotency, retry limits, reconciliation queue and ownership of unresolved sync failures.
5. Decide whether a CMS is required, who publishes content, approval/version history and review triggers for legal/security claims.
6. Determine whether analytics will remain absent, use first-party event collection, or add a vendor. Require vendor, data, retention, region and consent analysis before integration.
7. Approve notice, lawful-basis and consent mapping per processing purpose; avoid treating consent as a universal prerequisite or using one checkbox to bundle unrelated uses.
8. Define a reliable privacy-request/grievance route, owner, identity verification proportionate to risk, acknowledgement/tracking, deletion/correction workflow and closure evidence.
9. Decide data retention by category and purpose; address legal holds, backups, provider copies and post-contract data return/deletion.
10. Determine any financial-sector flow-down obligations by customer/entity/contract; do not adopt payment-system or digital-lending residency requirements as universal website rules.

**Gate:** Approved architecture decision record, current/target data-flow diagrams, requirement IDs, risk review, vendor decisions where needed, test plan and security/privacy analysis.

## Phase 2 — Pre-13 May 2027 DPDP readiness

The DPDP Act and Rules’ major tranche is scheduled for 13 May 2027 under the published commencement notifications. The project should prepare ahead of the deadline; the detailed scope and final wording must be confirmed by Indian counsel against current consolidated instruments.

| Workstream | Planned control | Evidence needed before marking VERIFIED |
|---|---|---|
| Notice and purpose | Clear, product-specific notice describing personal data and purposes | Approved notice mapped to actual fields, data flows and purposes |
| Consent and withdrawal | Purpose-specific consent where consent is the appropriate basis; recorded notice/version and effective withdrawal workflow | End-to-end tests and audit evidence; no claim that all processing relies on consent |
| Data principal requests | Track applicable access/correction/erasure/grievance requests and outcomes | Functional service workflow, owner, timing and records |
| Security safeguards | Access control, minimization, encryption/masking as appropriate, monitoring, recovery and third-party controls | Deployment/configuration evidence plus tests |
| Personal data breach response | Escalation, affected data/people assessment, evidence preservation, required notices/reporting | Exercise/test record and current legal decision tree |
| Processor/vendor terms | Current processor/subprocessor inventory and contractual obligations | Executed agreements or documented approved status; actual providers and regions |
| Retention/deletion | Approved lifecycle by category, legal retention needs, backups and deletion | Policy signed off and system tests showing enforcement |
| Children’s data | B2B scope review; avoid child-directed collection unless specifically designed and legally reviewed | Product scope and form/content review |
| Public claims and legal pages | Correct statements about actual handling and unresolved details | Approved copy and claims-register evidence |

**Gate:** No requirement becomes VERIFIED merely because a policy or plan has been written. Verify the relevant actual system behavior and legal approval.

## Phase 3 — Implement the contact/demo intake target architecture

This is an engineering roadmap item, not a control that already exists.

1. Public form → secure server API using HTTPS.
2. Server-side validation, field allow-list, request size limits, abuse/rate controls and appropriate anti-spam checks.
3. Durable lead intake store with unique request ID, timestamp, minimal data, access control, retention/deletion path and audit metadata.
4. Correct acknowledgement: only report success after durable acceptance; otherwise show a recoverable failure message.
5. Authenticated server-to-server CRM API integration; never browser-to-CRM-database and never expose CRM credentials client-side.
6. Safe retries, idempotency, bounded backoff and a reconciliation path for CRM failure.
7. Sales notification with delivery/error tracking; notification failure must not erase an already accepted enquiry.
8. Monitoring, alert ownership, structured errors, log minimization, incident response and backup/recovery.
9. End-to-end tests for accepted request, invalid request, abuse/rate limit, duplicate submission, store unavailable, CRM unavailable, notification unavailable and privacy-request routing.
10. Release gates and production smoke test before making public claims of delivery or persistence.

**Gate:** Demonstrate the full request lifecycle in a test environment and verify its data, security, privacy and failure behavior.

## Phase 4 — CMS, policy governance and privacy-aware analytics

- Choose a CMS only after hosting, access, editor roles, publication process, vendor contract and data/region impact are reviewed.
- Add draft → review → approved → published → archived states and version/review records for content.
- Keep legal policies under explicit legal approval; an editor publishing a page must not equal legal sign-off.
- If analytics remains absent, document that decision. If added, classify events and properties, avoid unnecessary identifiers, enforce any required choice, verify no unauthorized tags fire, document vendors/retention/location, and test all preference states.
- Keep consent categories semantically accurate. “Accept all” must not activate a future SDK that is undisclosed or unapproved.
- Keep customer-facing claims synchronized with `BRAIN/PUBLIC-CLAIMS-REGISTER.md`.

## Phase 5 — Verification and release

Apply existing SDLC gates:
- `npm run lint` and `npm run build`.
- Automated unit/E2E/security/link scanning only after actual tools and scripts are installed and configured.
- Manual or automated route, responsive, accessibility, privacy, consent, security, SEO and regression evidence appropriate to the changed system.
- Traceability matrix updates.
- Security/privacy and legal approvals where the change requires them.
- Completed release checklist and post-deployment smoke verification.

Do not treat successful TypeScript checking and bundling as proof of legal compliance, functional delivery, operational logging or deployment configuration.

## Ownership

Until actual named owners are confirmed, use role placeholders:
- Product/business owner: product purpose, sales routing, retention and business decisions.
- Systems architect: data flow, hosting, CRM contract, idempotency and security architecture.
- Privacy/legal counsel: applicability, lawful-basis/notice language, requests, retention and contract review.
- Security/operations owner: log availability/location, incident response, monitoring, recovery and CERT-In scope.
- QA/release owner: independent test evidence, traceability and release checklist.

## Roadmap exclusions

This roadmap does not itself:
- Make the website or CRM DPDP-compliant.
- Certify applicability or inapplicability of RBI directions.
- Prove CERT-In reporting readiness or log-location compliance.
- Confirm India-only data residency.
- Finalize legal policies, retention periods, vendors or contracts.
- Implement contact persistence, CRM integration, a CMS, analytics or monitoring.

See `BRAIN/INDIA-COMPLIANCE-ALIGNMENT.md` for the evidence-based status and official references.
