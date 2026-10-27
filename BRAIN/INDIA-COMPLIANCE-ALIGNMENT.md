# DialPulse-Web — India Data Protection & IT Compliance Alignment

**Document status:** Architecture and governance assessment  
**Assessment date:** 2026-10-27  
**Repository reviewed:** `AtharvaNavlekar/DialPulse-Web`, default branch `main`  
**Scope:** Public marketing website, website-originated data, its public hosting/telemetry boundary, and its proposed integration with the separate DialPulse CRM  
**Important:** Internal engineering/compliance planning document, not a legal opinion or customer-facing policy.

## 1. Executive determination

The public website is a React/Vite single-page application and is intended to remain separate from the authenticated DialPulse CRM. The current repository does **not** demonstrate the target production intake architecture from the project diagrams: the contact form runs a client-side simulated `setTimeout` and displays success without an API request or durable storage. The reviewed website analytics helper logs events only outside production and does not deliver them to an analytics provider. The consent store maintains local preferences, but those preferences do not currently guard a production analytics SDK because no such SDK is configured in the reviewed helper.

Legal pages exist, but they retain pre-publication/draft indicators and unresolved legal/business fields. This repository therefore has partial privacy documentation, not evidence of end-to-end legal or operational compliance.

### Compliance status snapshot

| Area | Current evidence | Status | Required next action |
|---|---|---|---|
| Public website vs CRM separation | `README.md` describes a separate website and external `app.dialpulse.com` login; `src/App.tsx` contains public website routes only | **Documented invariant; re-verify deployment** | Preserve the boundary; verify production network traffic and any future API design |
| Contact/demo intake | `src/pages/Contact.tsx` uses simulated `setTimeout` success; no POST/API submit is shown in the reviewed page | **NOT IMPLEMENTED** | Design the API, durable acceptance criteria, error states and retry/duplicate behavior before implementation |
| Browser consent preferences | `src/lib/cookies/cookieConsentStore.ts` writes `dialpulse_cookie_consent_v1` to localStorage | **PARTIALLY IMPLEMENTED** | Test actual choices and ensure any future non-essential analytics respects the applicable choice and approved policy |
| Analytics | `src/lib/analytics/index.ts` logs only when `NODE_ENV !== 'production'`; no production provider is wired in this helper | **No production analytics provider evidenced in this helper** | Verify full production bundle, tag manager, fonts, embeds, CDN and network requests before making any site-wide “zero trackers” claim |
| Privacy / Terms / Cookie / Refund content | Pages exist; several display draft, pre-publication, or “To be confirmed” wording | **DRAFT / LEGAL REVIEW REQUIRED** | Resolve entity/contact, purposes, actual deployment/vendors, retention, requests handling and legal wording before final publication |
| Website privacy requests and deletion | Privacy page points visitors to `/contact`, while the contact form is not connected to a request-handling backend | **NOT OPERATIONAL end-to-end** | Provide a monitored request intake and tracking workflow before representing requests as operational |
| Retention and deletion | Existing privacy requirements say no CRM automated purge/TTL jobs are evidenced; website has no durable intake service shown | **BLOCKED / NOT VERIFIED** | Approve product-specific retention schedules and map them to implemented storage and deletion routines |
| Vendor/subprocessor inventory | BRAIN documentation mentions GCP, Google Gemini and telephony/messaging providers for the CRM; final contracts and the website production vendor inventory are unresolved | **PARTIAL / CONTRACTUAL REVIEW REQUIRED** | Separate website vendors from CRM subprocessors; record purpose, data, region, contract and status for each |
| Incident response and CERT-In readiness | Repository has general SDLC/security checklists; no tested website incident escalation and reporting workflow is evidenced here | **NOT VERIFIED** | Confirm applicable entity/system scope, log availability, incident owner, evidence preservation, escalation and reporting procedure |
| Hosting/log location | Internal docs refer to Cloud Run/default `asia-southeast1`; the actual current production deployment and log-storage regions are not proven by the website source alone | **TO BE CONFIRMED** | Confirm deployment, CDN/WAF, edge/origin/access logs, telemetry, backups and provider regions |
| RBI/financial-sector scope | Website is a marketing site; it is not, on current evidence, itself a bank, NBFC, payment-system provider, LSP or DLA | **CONDITIONAL; LEGAL CLASSIFICATION REQUIRED** | Determine DialPulse’s contractual/operational role for each financial-services customer; flow down applicable client requirements without assuming universal applicability |

## 2. Product boundary and information flows

### 2.1 Website (this repository)

Verified source-code facts:
- `src/App.tsx` contains public routes such as `/`, `/product`, `/features`, `/solutions`, `/pricing`, `/contact`, `/privacy`, `/terms`, `/cookies`, and `/refund`.
- The structured contact form renders First Name, Last Name, Work Email, Company Name and a free-text Message.
- The reviewed `handleSubmit` prevents normal form submission, changes UI status, then uses `setTimeout` to show “Request Received”. The reviewed handler does not send a network request or persist the enquiry. Therefore fields are entered in the browser, but this code does not demonstrate that the enquiry is transmitted, received or retained by DialPulse.
- The local consent store key is `dialpulse_cookie_consent_v1`; categories include strictly necessary, preferences, analytics and marketing.
- The reviewed analytics helper has no production provider integration; current development behavior writes structured events to the console.
- The website’s package scripts expose Vite development/build/preview and TypeScript checking. The package manifest reviewed does not define website API, unit-test or end-to-end-test scripts.

### 2.2 Separate CRM application

The CRM is a separate repository/application. This website audit does not prove current CRM database behavior, identity/session cookie behavior on the CRM origin, CRM retention/deletion routines, KYC document handling, server authorization, or CRM production hosting. Those need their own evidence. Do not describe CRM-only session storage, authentication, customer records or controls as though they are necessarily collected or executed by `dialpulse.com`.

### 2.3 Target flow (not yet implemented)

`Visitor → Public Website → Contact/Demo API → server-side validation / abuse controls → Lead Intake Service → durable lead store → authorized CRM API → sales notification → monitoring and reconciliation`

The future website must not connect directly to the CRM database. CRM credentials must stay server-side. A UI may report “submitted/received” only when the agreed durable acceptance condition has been met. Notification or CRM synchronization failures must have explicit, observable states and safe retry/reconciliation behavior.

The target architecture must also define:
- A governed CMS for blog/guides/case studies, if approved.
- Privacy-aware analytics with documented events, collection minimization and consent/purpose gating where applicable.
- Reviewed and versioned policy content.
- CDN/WAF/HTTPS protections only once the deployment configuration is confirmed, not merely because they appear in a target diagram.

## 3. Indian legal framework — verified timing and applicability notes

This section records a dated engineering interpretation of official sources, not legal advice. Before release, counsel should confirm later amendments/corrigenda and applicability to DialPulse’s actual entity, service and contracts.

### 3.1 DPDP Act, 2023 — phased commencement

The commencement notification G.S.R. 843(E), dated 13 November 2025, specifies different commencement dates for different provisions:
- Initial provisions specified in paragraph (a) commenced on Gazette publication.
- DPDP Act section 6(9) and section 27(1)(d) are scheduled one year after publication: **13 November 2026**.
- The major tranche specified in paragraph (c), including sections 3–17 and the other listed provisions, is scheduled eighteen months after publication: **13 May 2027**.

Do not say that every substantive DPDP processing, notice, consent, rights, security or breach obligation was already fully in force on 27 October 2026 merely because the Act was enacted or the commencement notification was published.

### 3.2 DPDP Rules, 2025 — phased commencement

The Rules notification G.S.R. 846(E), dated 13 November 2025, states:
- Rules 1, 2 and 17–21 commenced on publication.
- Rule 4 is scheduled one year after Gazette publication: **13 November 2026**.
- Rules 3, 5–16, 22 and 23 are scheduled eighteen months after Gazette publication: **13 May 2027**.

Rule 4 concerns Consent Managers. It must **not** be mistaken for a requirement that every ordinary website cookie-consent banner is itself a registered DPDP Consent Manager. First determine whether DialPulse actually offers a service that fits the statutory Consent Manager role. The Rules were subject to a December 2025 corrigendum; check the official MeitY listing and corrigendum before any formal legal sign-off.

### 3.3 IT Act, 2000 and SPDI Rules, 2011

The IT Act/SPDI framework must remain in the applicability analysis during the phased transition. The DPDP Act commencement notification schedules DPDP Act section 44(2) for the eighteen-month tranche; do not prematurely assume related amendments have already displaced the current provisions. SPDI Rules apply to specified sensitive personal data/information in their scope, not automatically to every name or work email. The website’s structured form does not ask for bank statements, KYC documents, passwords or biometrics; however, the free-text message could invite oversharing. The site should not be designed as a channel for KYC or financial-document intake.

### 3.4 CERT-In Directions

CERT-In’s 28 April 2022 directions include a six-hour reporting requirement for specified cyber incidents, including data breaches/leaks, for entities and incidents within scope. They also address ICT-system logs and other security practices. The project must establish the actual operating entity, applicable role, incident owner, log sources, log availability/location and escalation playbook. Do not mark the website compliant with CERT-In merely because the rules are documented. Legal/technical review must confirm applicability to the responsible entity and actual hosting architecture.

### 3.5 RBI requirements — conditional by regulated role and service

- RBI Outsourcing of IT Services Directions, 2023 apply to specified RBI-regulated entities (REs) and govern those entities’ outsourcing arrangements and oversight. A SaaS supplier may face contractual, audit, access, confidentiality, resilience and incident requirements through an arrangement, but the directions must not be portrayed as universally applying to every website or vendor in the same way.
- RBI’s Storage of Payment System Data direction applies to payment-system providers within its scope; it is **not** a universal rule that every CRM database or marketing website must store all data in India.
- RBI Digital Lending Directions, 2025 and related lending rules require a role-and-contract-specific applicability assessment if DialPulse is supporting a covered RE/LSP/DLA activity. The marketing website is not shown in this repository to itself operate as a regulated lender, payment-system provider, LSP or DLA.
- Do not claim “RBI compliant”, “India-only data residency”, or equivalent legal outcomes without a documented applicability assessment and evidence.

## 4. Compliance control mapping

| Control area | Current status | Required evidence / future acceptance criteria |
|---|---|---|
| Data inventory and purpose | **PARTIAL** | Separate website/CRM inventory with fields, purpose, origin, destination, owner, recipients and retention; review free-text minimization |
| Notice and consent | **PARTIAL** | Final approved notice reflects actual production data flows; consent is purpose-specific and not used as a blanket lawful-basis claim |
| Data subject/privacy requests | **BLOCKED** | A monitored intake route, request ID, identity verification proportionate to risk, routing/ownership, response tracking and closure evidence |
| Collection and persistence | **BLOCKED for web inquiries** | Server validation, rate limits/anti-spam, durable record, request receipt only after persistence, failure behavior, idempotency and monitoring |
| CRM handoff | **NOT IMPLEMENTED in website** | Documented authenticated server-to-server API, authorization, retries/reconciliation, secret isolation and integration tests |
| Retention/deletion | **BLOCKED** | Approved schedule by data category and purpose, deletion/return workflow, backup treatment, legal holds and verification evidence |
| Provider/subprocessor governance | **PARTIAL** | Current website/vendor list plus CRM-specific list, data categories, locations, agreements, subprocessors and review owners |
| Security safeguards | **PARTIAL / NOT VERIFIED end-to-end** | Deployment evidence, access boundaries, dependency/security scans, logging, backup/restore and remediation records |
| Incident reporting | **NOT VERIFIED** | Tested incident-response plan with duty owner, evidence preservation, notification decision tree and legal reporting clocks |
| Hosting/log location | **TO BE CONFIRMED** | Production region and location of relevant origin/CDN/WAF/access/security logs, backups, analytics and provider processing |
| Cookies / analytics | **PARTIAL** | Production network/bundle audit, accurate inventory, consent-choice tests and a gate that prevents unapproved future tags/integrations |
| Children’s data | **NOT A CURRENT FEATURE** | Do not intentionally target children or request child data through B2B forms; if product scope changes, require specific legal/design review |
| Accessibility / dark patterns | **SEPARATE SDLC CONTROLS REQUIRED** | Maintain accessible choice controls, clear decline/customize behavior, no deceptive consent and documented WCAG/manual checks |
| Legal policy readiness | **BLOCKED for final publication** | Entity/address/contact, actual processing, vendors/regions, retention, request channel and counsel approval resolved |

## 5. High-priority architecture risks and required decisions

1. **False receipt / lost enquiry risk:** current UI says “Request Received” without a demonstrated request delivery path. Do not use this as proof of collection or submission. Replace only after a reviewed backend design and testing.
2. **Privacy request path not operational:** a link to the simulated contact form is not a dependable rights/grievance intake process.
3. **Website/CRM scope conflation:** current policy content discusses website and CRM data together. Validate each statement against the product origin and actual data flow.
4. **Log location and reporting readiness:** the internal documentation refers to `asia-southeast1` as a default Cloud Run region, but deployed runtime and relevant logs were not independently verified. Determine the actual hosting and logging footprint before asserting compliance or localization.
5. **Retention and deletion:** no approved, implemented website lead retention/deletion path is evidenced; CRM retention questions remain open.
6. **Subprocessors and AI:** do not publish zero-retention/zero-training promises or finalized subprocessor statements without current contracts and provider configuration evidence.
7. **Financial-sector applicability:** classify each customer arrangement and legal role; do not apply payment-system or digital-lending localization requirements universally.
8. **Consent architecture:** current consent preferences exist, but a cookie banner alone is not proof of statutory compliance. A future analytics or tag integration needs a privacy impact review and verified preference enforcement.

## 6. Decision and approval gates

Before target architecture moves to implementation:
- Product/engineering approves a website-vs-CRM data-flow diagram and the contact intake success contract.
- Security reviews hosting, API authentication, secret management, abuse controls, incident logging and recovery.
- Privacy/legal approves the data inventory, purposes/lawful-basis mapping, notices, request pathway and retention/erasure approach.
- Business confirms the legal entity, accountable contacts, sales routing and retention owners.
- Vendor/operations owners confirm actual providers, contracts, subprocessor list, deployment regions and relevant log locations.
- Financial-services counsel confirms which RBI/KYC/digital-lending requirements apply to specific customer contracts, if any.
- QA evidence is attached to the relevant requirements and traceability rows under the project SDLC.

No application changes were made by this assessment. The next work is requirements/analysis and decisions, not a claim that compliance controls are already deployed.

## 7. Authoritative reference sources

1. **DPDP Act commencement notification, G.S.R. 843(E), 13 Nov 2025:** https://egazette.gov.in/WriteReadData/2025/267647.pdf
2. **DPDP Rules, 2025, G.S.R. 846(E):** https://www.meity.gov.in/static/uploads/2025/11/53450e6e5dc0bfa85ebd78686cadad39.pdf
3. **MeitY official Acts & Policies page** (includes the DPDP Rules and listed corrigendum): https://www.meity.gov.in/documents/act-and-policies
4. **IT Act, 2000 (India Code):** https://www.indiacode.nic.in/bitstream/123456789/13116/1/it_act_2000_updated.pdf
5. **MeitY note on SPDI Rules, 2011:** https://www.meity.gov.in/writereaddata/files/PressNote_25811.pdf
6. **CERT-In Directions under section 70B:** https://www.cert-in.org.in/Directions70B.jsp
7. **CERT-In Directions PDF (28 Apr 2022):** https://www.cert-in.org.in/PDF/CERT-In_Directions_70B_28.04.2022.pdf
8. **RBI Outsourcing of IT Services Directions, 2023:** https://systemhealth.rbi.org.in/Scripts/BS_ViewMasDirections.aspx_id%3D12486.html
9. **RBI Storage of Payment System Data (6 Apr 2018):** https://www.rbi.org.in/Scripts/NotificationUser.aspx?Id=11244

**Review rule:** Reconfirm official consolidated texts, subsequent corrigenda/amendments, commencement and applicability before final legal sign-off and again before production release.
