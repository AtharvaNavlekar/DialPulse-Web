# DialPulse Privacy Policy Requirements

## 1. Document Purpose
This document is an **internal privacy requirements specification** derived directly from the technical codebase, configuration manifests, and architectural documentation of DialPulse CRM. 

**CRITICAL NOTICE**: 
This document is **NOT** a final legal Privacy Policy. It does not constitute legal advice, does not establish contractual representations, and must not be published directly on the marketing website or presented to end users as a binding privacy declaration. Its sole purpose is to bridge technical system realities with the legal, regulatory, and business requirements necessary for legal counsel and the Data Protection Officer (DPO) to draft the official DialPulse Customer-Facing Privacy Policy.

---

## 2. Verified Technical Facts

The following facts represent the verified data architecture, telemetry flows, and storage mechanisms identified across the DialPulse CRM codebase, runtime configuration, and architectural documentation.

### 2.1 Product & System Architecture
- **Multi-Tenant Logical Isolation**: Every transactional record (leads, calls, messages, notes, tasks) is partitioned by a mandatory foreign key `tenant_id`. Database queries and mutation handlers enforce tenant isolation via scoped database queries in PostgreSQL.
- **Dedicated Partition Capability**: Enterprise configurations support single-tenant PostgreSQL database partitions and customer-managed KMS encryption keys (BYOK).
- **Frontend / Client Architecture**: Client-side single-page application built on React 19, TypeScript, and Vite, served behind an NGINX container proxy.
- **Backend / API Service**: Express-based Node.js runtime operating in containerized Cloud Run environments.
- **Asynchronous Execution Layer**: High-volume tasks (bulk CSV ingestion, analytical CSV generation, outbound messaging queues, audio transcoders) execute on detached asynchronous background worker processes powered by Redis queues.
- **STATUS**: VERIFIED IN CODE & ARCHITECTURAL DOCUMENTATION

### 2.2 Account & User (Agent/Admin) Data
- **Identity Fields**: User ID, full name, professional email address, hashed authentication credentials, account creation and update timestamps.
- **Role Hierarchy**: Strict Role-Based Access Control (RBAC) tiers: `Owner`, `Team Lead` (Supervisor), `Telecaller` (Agent), and `Administrator`.
- **Status & Presence**: Active floor presence telemetry (`Available`, `On Call`, `Break`, `Offline`), last activity timestamp, assigned team/branch ID.
- **STATUS**: VERIFIED IN CODE & DOCUMENTATION

### 2.3 Lead & Prospect Data
- **Core Attributes**: Lead ID, tenant ID, first name, last name, primary phone number, secondary phone numbers, email address, company/account name.
- **Pipeline Progression**: Assigned pipeline ID, stage ID, stage transition history timestamps, deal value, priority score, lead source attribution.
- **Ownership & Assignment**: Assigned agent ID (`telecaller_id`), team queue ID, assignment timestamps, round-robin distribution metadata.
- **Custom Schema Attributes**: Support for tenant-defined custom properties (e.g., custom qualification fields, industry tags, custom flags) stored in structured JSON/relational columns.
- **STATUS**: VERIFIED IN CODE & CONFIG

### 2.4 Calls & Telephony Metadata
- **Call Session Records**: Call ID, tenant ID, lead ID, agent ID, call direction (`inbound` / `outbound`), initiation timestamp, answer timestamp, termination timestamp, total ring duration, total talk duration.
- **Caller Identity**: Originating caller ID (DID number), destination dialed number.
- **Outcome & Disposition**: Mandatory disposition tagging (`Connected`, `Follow-Up`, `Voicemail`, `Busy`, `Lost`, `Not Interested`, `Callback Scheduled`), agent in-call notes.
- **Channel Telemetry**: Browser WebRTC audio stream status, signaling channel states.
- **STATUS**: VERIFIED IN CODE & CONFIG

### 2.5 Call Recording Architecture & URLs
- **PostgreSQL Database Storage**: The CRM database stores **metadata and URI references only** (`recording_url`, recording duration, channel format, recording ID). **Raw audio binary blobs are NOT stored in PostgreSQL**.
- **Audio Media Storage**: Audio stream capture is dual-track (agent track and prospect track). Audio files are written to encrypted object storage buckets or carrier-managed media vaults.
- **Cryptographic Protection**: Storage encryption at rest utilizes AES-256 via Google Cloud KMS. Streaming transport is secured over TLS 1.3 WebRTC audio pipelines.
- **STATUS**: VERIFIED IN ARCHITECTURAL DOCUMENTATION & CODE

### 2.6 WhatsApp & SMS Communications Data
- **Message Records**: Message ID, tenant ID, lead ID, agent ID, communication channel (`sms`, `whatsapp`), direction (`inbound`, `outbound`), message body text.
- **Delivery Receipts**: Message lifecycle status (`Queued`, `Sent`, `Delivered`, `Read`, `Failed`), error codes, external carrier message IDs.
- **Templates**: Pre-approved messaging templates, trigger parameters (e.g., automatic SMS/WhatsApp dispatch when a call is unanswered).
- **STATUS**: VERIFIED IN CODE & CONFIG

### 2.7 Tasks, Reminders & Cadence Triggers
- **Task Attributes**: Task ID, tenant ID, lead ID, assigned agent ID, callback target timestamp, cadence sequence step, completion status.
- **Notifications**: Automated softphone notification prompts and calendar alert records.
- **STATUS**: VERIFIED IN CODE & CONFIG

### 2.8 Audit & Security Logs
- **Immutable Log Schema**: Event ID, tenant ID, timestamp (UTC ISO-8601), actor ID, original actor ID (capturing true actor identity during administrative impersonation sessions), action type (e.g., `EVT_AUTH_SUCCESS`, `EVT_EXPORT_INITIATED`, `EVT_DNC_BLOCK`), target entity type, target entity ID, IP address, user agent.
- **Tamper-Evident Policy**: Audit log tables are append-only; CRM application logic provides no update or deletion endpoints for historical audit records.
- **STATUS**: VERIFIED IN CODE & DOCUMENTATION

### 2.9 Sessions & Authentication Data
- **Session Tokens**: Cryptographically signed session tokens containing user ID, workspace ID, role scope, and issuance/expiration timestamps.
- **Tenant Context**: Scoped workspace routing ensuring database queries are scoped to the active session's tenant ID.
- **STATUS**: VERIFIED IN CODE

### 2.10 Imports (Data Ingestion)
- **Batch CSV Ingestion**: CSV upload handling with column auto-detection, schema mapping, and validation.
- **Deduplication Engine**: Phone number and email deduplication routines preventing duplicate record ingestion within the tenant partition.
- **Webhook Ingestion**: Inbound HTTP endpoints receiving lead data from external webhooks with tenant token validation.
- **STATUS**: VERIFIED IN CODE & ARCHITECTURAL DOCUMENTATION

### 2.11 Exports (Data Extraction)
- **Asynchronous Export Generation**: Large dataset extraction for leads, call logs, and compliance audits processed by background worker queues.
- **Output Artifacts**: CSV file artifacts generated asynchronously and stored temporarily for administrative download.
- **STATUS**: VERIFIED IN CODE & CONFIG

### 2.12 AI Processing & Gemini Integration
- **SDK & Provider**: Integration via Google GenAI TypeScript SDK (`@google/genai`) using server-side API key configuration (`GEMINI_API_KEY`). No API keys are exposed to client browsers.
- **Processing Capabilities**: Post-call transcription processing, automated 2-sentence bullet summarization, action item extraction, customer sentiment/intent classification, follow-up message draft generation.
- **Prompt Architecture**: Dynamic prompts constructed server-side using call transcripts and lead context, scoped strictly to the calling tenant's data.
- **PII Minimization**: Software-level prompt sanitization designed to minimize extraneous sensitive identifiers before invoking inference.
- **STATUS**: VERIFIED IN CODE, CONFIG & DOCUMENTATION

### 2.13 Compliance & Regulatory Data
- **Do-Not-Call (DNC) Registry**: Tenant-level DNC phone numbers, national/regional registry flags, addition timestamps, opt-out source attribution.
- **Policy Restrictions**: Timezone-aware quiet hour definitions (e.g., recipient local window 9:00 AM – 8:00 PM), geo-resolution cache (area codes/timezones), contact frequency limit counters, 30-day contact pause flags.
- **Compliance Audit Evidence**: Permanent decision logs recording every pre-flight dial or message approval or programmatic hard-block, accompanied by rejection reason codes.
- **STATUS**: VERIFIED IN CODE & DOCUMENTATION

### 2.14 Cookies & Client Storage
- **Browser LocalStorage / Cookies**: Authentication session tokens, UI workspace preferences (e.g., theme, sidebar collapse state).
- **Analytics Telemetry**: The codebase contains an internal analytics module (`/src/lib/analytics/index.ts`) defining events (`page_view`, `pricing_view`, `plan_select`, `form_submit`). In the current development build, this function exclusively outputs structured logs to `console.log`. **No third-party tracking scripts (Google Analytics, Meta Pixel, Hotjar, Segment) are currently loaded or active in the client bundle**.
- **STATUS**: VERIFIED IN CODE

### 2.15 Infrastructure & Hosting Runtime
- **Compute Runtime**: Google Cloud Platform / Cloud Run container environment (configured in `asia-southeast1` default region in AI Studio environment metadata).
- **Database Engine**: Managed PostgreSQL instance with tenant foreign-key scoping and row-level security.
- **Background Broker**: Redis memory queues powering detached job workers.
- **STATUS**: VERIFIED IN CONFIG & RUNTIME METADATA

---

## 3. Data Processing Purposes

Every data category collected, stored, or processed by DialPulse maps directly to an explicit operational or technical necessity:

| Data Category | Specific Operational / Technical Purpose | Verified In Code / Architecture |
| :--- | :--- | :--- |
| **Account & User Identity** | Authentication, role authorization (RBAC), multi-tenant routing, audit attribution, user management | Yes |
| **Agent Floor Presence** | Real-time call distribution, supervisor floor oversight, capacity balancing | Yes |
| **Lead & Contact Records** | Sales pipeline tracking, lead qualification, contact ownership assignment, duplicate prevention | Yes |
| **Call Session Metadata** | Telephony billing verification, agent handle-time reporting, conversion analytics, sales coaching | Yes |
| **Call Audio Recordings** | Sales quality assurance, dispute resolution, agent training, compliance verification | Yes |
| **Omnichannel Text Messages** | Customer communication delivery, inbound inquiry resolution, fallback messaging | Yes |
| **Tasks & Cadence Reminders** | Timely follow-up execution, callback notifications, sequence progression | Yes |
| **Compliance & DNC Lists** | Pre-flight call blocking, quiet-hour enforcement, spam prevention, compliance audit defense | Yes |
| **Immutable Audit Logs** | Security oversight, forensic investigation, access tracking, administrative accountability | Yes |
| **AI Inference Payloads** | Speech-to-text conversion, post-call note automation, sentiment classification, draft generation | Yes |
| **CSV Import Payloads** | Bulk migration of customer records from external spreadsheets or legacy systems | Yes |
| **CSV Export Artifacts** | Data extraction for external business intelligence, executive reporting, customer backup | Yes |

*Prohibition*: DialPulse does NOT process customer CRM data for independent behavioral advertising, consumer profiling, or cross-tenant data monetization.

---

## 4. Data Sharing & Third Parties

The following third-party infrastructure and service providers are identified in DialPulse technical architecture and configuration:

| Provider | Category | Purpose | Data Transferred | Hosting / Region | Verification Status | Legal Review Required |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Google Cloud Platform (Cloud Run, KMS)** | Cloud Infrastructure | Container compute hosting, cryptographic key management (KMS AES-256) | Application runtime memory, encrypted environment variables, encrypted data streams | Cloud Run default: `asia-southeast1` (Singapore); configurable per enterprise deployment | VERIFIED IN CONFIG | Confirm Data Processing Addendum (DPA) and regional data boundaries |
| **PostgreSQL Database Engine** | Database Infrastructure | Relational data persistence (leads, calls, messages, audit logs, tenant schemas) | All structured tenant CRM data, customer PII, metadata | Cloud SQL / Managed DB host region | VERIFIED IN CODE | Verify backup replication regions and encryption at rest agreements |
| **Google Gemini API (`@google/genai`)** | AI & LLM Inference | Speech-to-text transcription, post-call summarization, sentiment extraction | Audio transcript text, lead conversation context snippets, sanitized prompts | Google AI enterprise inference regions (server-side proxy) | VERIFIED IN CODE | Confirm enterprise API terms regarding data retention and zero model training |
| **Telephony Gateway (Twilio / Telnyx / Exotel / SIP)** | Telecommunication Gateway | WebRTC softphone audio relay, PSTN/mobile dialing, SIP trunking | Dialed phone numbers, caller IDs, live WebRTC audio streams, call session timestamps | Carrier network points of presence (PoP) | VERIFIED IN CONFIG | Review carrier interconnect DPAs, call recording storage locations, and telecom regulatory compliance |
| **Messaging Gateway (Meta WhatsApp Business / SMS Gateway)** | Omnichannel Messaging | Outbound/inbound WhatsApp messages and SMS delivery | Phone numbers, message body text, template parameters, delivery receipts | Carrier & Meta messaging API servers | VERIFIED IN CONFIG | Review Meta WhatsApp Business terms, SMS aggregator data retention, and international transfer mechanisms |
| **Redis Cache & Queue Broker** | Asynchronous Job Infrastructure | Background worker queues (bulk imports, exports, cadence jobs) | Ephemeral job payloads, lead IDs, export parameters | Co-located with application cluster | VERIFIED IN CODE | Ensure Redis data persistence does not retain unencrypted PII across restarts |

---

## 5. International Data Transfers

### 5.1 Technically Known Facts
- The runtime container environment operates in Google Cloud Platform with default deployment targets in `asia-southeast1` (Singapore).
- Database connections, Redis queues, and compute workers are provisioned within cloud container environments.
- Outbound API calls to Google GenAI (`@google/genai`) route over HTTPS from the backend server to Google's API endpoints.
- Telephony and messaging gateways route calls and SMS messages across regional and international telecom carriers depending on the destination phone number.

### 5.2 Technically Unknown Facts
- The exact physical server locations of all downstream telecom carrier gateways (e.g., Twilio, Telnyx, Exotel, local SIP providers).
- Whether Google Gemini inference requests are processed exclusively within a specific geographic territory (e.g., India or EU) or routed dynamically across Google global data centers.
- The default storage bucket regions where dual-track call audio recording files are deposited when using multi-tenant storage.

### 5.3 Required Legal & Business Confirmations
- **NO Claim of India-Only Data Residency**: Do not claim that DialPulse maintains exclusive Indian data residency until dedicated Indian database instances and local AI perimeters are contractually provisioned and verified.
- **NO Claim of Automatic GDPR Adequacy**: Do not claim full GDPR transfer compliance (such as standard contractual clauses / SCCs or adequacy decisions) until legal counsel executes DPAs with all cloud, AI, and telecom subprocessors.
- **NO Claim of Zero Data Retention**: Do not claim zero third-party retention on AI inference until enterprise contractual terms (e.g., Google Cloud Vertex AI vs Google AI Studio developer terms) are finalized.

---

## 6. AI Privacy Requirements

### 6.1 Technical Implementation vs. Legal / Contractual Guarantees

| Dimension | Technical Implementation (Code & Architecture) | Contractual / Legal Guarantee (Required from Counsel) |
| :--- | :--- | :--- |
| **AI Provider** | Implemented via `@google/genai` TypeScript SDK on Node.js backend. | Enterprise commercial agreement with Google Cloud governing data ownership. |
| **API Key Security** | `GEMINI_API_KEY` is loaded strictly server-side via environment variables; never exposed to browser. | Confirmation that API usage falls under paid commercial terms, not public consumer terms. |
| **PII Minimization** | Software prompts are structured to extract only business entities; unnecessary lead metadata is excluded. | Legal review of whether audio transcripts containing unredacted customer PII violate local privacy laws. |
| **Prompt Persistence** | DialPulse stores extracted summaries and sentiment tags in PostgreSQL. Prompts themselves are not archived in separate prompt stores. | Contractual guarantee from AI provider that inference inputs/outputs are purged within defined SLA. |
| **Zero Model Training** | Marketing and technical specs state: *"Transcripts are never used to train public LLM foundation models."* | **CRITICAL LEGAL BLOCKER**: Must be formally backed by Google enterprise API terms confirming customer data is not used for model training. |
| **Quota & Cost Controls** | AI inference is bound to tenant subscription tiers and configurable add-on compute allocations. | Terms of Service language defining quota exhaustion, fallback behavior, and customer liability. |
| **Audio Transcription Limits** | Speech-to-text is triggered post-call on completed recordings; does not process live eavesdropping or continuous background audio. | Regulatory disclosure ensuring call participants are legally notified that conversations may be transcribed by automated tools. |

---

## 7. Retention & Deletion Requirements

Currently, the DialPulse codebase **does not feature automated database purge jobs or time-to-live (TTL) expiry scripts** for relational CRM records. The table below outlines current technical behavior versus required business decisions:

| Data Type | Current Technical Behavior | Automatic Purge Active? | Current Retention | Required Business Decision | Legal Review Required |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Lead / Contact Records** | Persisted indefinitely until manual user deletion or tenant termination. | **NO** | Indefinite | Establish default customer retention policy (e.g., active + 30 days post-cancellation). | Compliance with DPDP/GDPR storage limitation principles. |
| **Call Session Metadata** | Persisted indefinitely in `call_logs` table linked to lead record. | **NO** | Indefinite | Decide whether call metadata is decoupled from leads and retained for billing audits (e.g., 1–3 years). | Alignment with telecom accounting and tax audit rules. |
| **Call Audio Recordings** | Stored in object storage bucket; referenced by `recording_url`. | **NO** (unless set on bucket) | Indefinite | Define tiered audio retention: e.g., 90-day hot storage, optional 365-day cold archive, then hard purge. | Privacy consent limits vs legal defense record requirements. |
| **WhatsApp & SMS Messages** | Persisted indefinitely in customer interaction timeline. | **NO** | Indefinite | Determine retention threshold for message content vs delivery status receipts. | Data minimization and customer right-to-erasure workflows. |
| **Immutable Audit Logs** | Append-only database table; no UI or API deletion mechanisms exist. | **NO** | Permanent / Indefinite | Set legal retention window (e.g., 1 year, 3 years, or 7 years) and immutable cold archive schedule. | Reconcile audit permanence with GDPR "Right to Erasure" (Article 17). |
| **Authentication Sessions** | Session tokens expire based on JWT timestamp; session records persisted. | **YES** (token expiration) | Session lifespan | Establish maximum idle session timeout and historical session log retention. | Security hygiene and access auditing standards. |
| **CSV Export Artifacts** | Generated asynchronously on worker disk / temporary storage bucket. | **UNKNOWN** | Ephemeral | Implement automated 24-to-48-hour hard deletion on all generated CSV download files. | Mitigate risk of exposed sensitive bulk exports. |
| **AI Summaries & Transcripts**| Persisted as text fields on lead profile and call log record. | **NO** | Indefinite | Decide if raw transcript can be purged after summary generation, or retained alongside audio. | Privacy minimization: summary vs verbatim transcript. |
| **Compliance & DNC Records** | Stored permanently in tenant DNC registry to prevent illegal dialing. | **NO** | Permanent | Clarify that DNC phone numbers must be retained to maintain opt-out suppression integrity. | Confirmation that suppression lists are legally exempt from erasure. |

---

## 8. Data Subject Rights

Because DialPulse functions primarily as a **Data Processor** (handling data on behalf of business tenants who act as Data Controllers), data subject requests require clear operational boundaries:

### 8.1 Required Rights Procedures to Define
- **Right of Access**: How does an individual prospect obtain a copy of their contact record, call history, message logs, and audio recordings?
- **Right to Rectification**: Mechanism for correcting inaccurate phone numbers, names, or qualification data across active pipelines.
- **Right to Erasure ("Right to be Forgotten")**: Technical workflow for deleting a lead upon request.
- **Right to Restriction / Opt-Out**: Immediate addition to the tenant Zero-Bypass DNC registry and suppression of all active cadence reminders.
- **Right to Data Portability**: Structured JSON/CSV export of an individual's personal records.

### 8.2 The Unresolved Deletion Conflict
A critical architectural conflict exists between **Data Deletion** and **Audit Immutability**:
1. When a tenant administrator requests the deletion of a Lead:
   - Does cascading deletion purge associated `call_logs`?
   - Does it delete the dual-track audio recording files from storage?
   - Does it purge omnichannel SMS/WhatsApp conversation records?
2. **The Audit Paradox**:
   - The compliance audit engine maintains an immutable history: *"User X called Number Y on Date Z; pre-flight DNC cleared."*
   - If Number Y is deleted under an erasure request, the historical compliance proof for regulatory defense may be destroyed.
   - **Required Resolution**: Legal counsel and engineering must decide whether lead records are **hard-deleted**, **soft-deleted / anonymized** (redacting PII like name and phone number while retaining pseudonymized transaction IDs and timestamps), or **cryptographically tombstoned** for legal audit defense.

---

## 9. Telecom & Communication Compliance

DialPulse includes sophisticated software-level compliance guardrails. However, **the existence of software controls does NOT constitute legal compliance by itself**:

### 9.1 Technically Implemented Software Controls
- **Zero-Bypass DNC Verification**: Programmatic check executed prior to softphone call setup or SMS dispatch; hard-disables dial triggers if the number is registered on tenant or external suppression lists.
- **Timezone-Aware Quiet Hours**: Automatic recipient timezone calculation (via country/area code mapping); hard-locks dialing mechanisms outside configured permissible windows (e.g., 9:00 AM – 8:00 PM).
- **Contact Frequency Capping**: Prevents outbound call attempts exceeding configured thresholds (e.g., max 3 attempts per 24 hours) to eliminate spam flags.
- **Cadence 30-Day Pause**: Automatic suppression flags pausing outreach sequences if a prospect requests a pause or fails to respond.
- **Permanent Compliance Logging**: Cryptographic logging of every approval or block decision with exact timestamp and reason code.

### 9.2 External Legal Validation Required
- **TRAI / TCCCPR Regulations (India)**: DialPulse provides suppression tools, but the customer remains legally responsible for registering headers, commercial templates, and telemarketer credentials with Indian telecom operators via Distributed Ledger Technology (DLT) portals.
- **National Do Not Call (NDNC) Scrubbing**: DialPulse does not replace the customer's statutory obligation to periodically scrub marketing lists against national DNC databases where required by law.
- **TCPA / TSR (United States)**: DialPulse quiet-hour and DNC tools assist with TCPA compliance, but cannot indemnify customers against unauthorized autodialing, non-consensual telemarketing, or prerecorded voice claims.
- **Mandatory Privacy Policy Disclaimer**: The customer-facing privacy policy and terms must explicitly state:
  > *"DialPulse provides software primitives to assist organizations in enforcing their communication policies. DialPulse does not warrant that your use of these features automatically satisfies statutory telemarketing, opt-in, or registration laws in your jurisdiction. Customers remain strictly liable for their communication practices."*

---

## 10. Call Recording Privacy

### 10.1 Technical Architecture
- Call recordings are generated through WebRTC dual-track audio relays.
- Recording metadata is saved in PostgreSQL (`recording_url`, duration, timestamps).
- Binary audio media is stored in cloud object storage or carrier vaults.
- PostgreSQL contains **zero raw audio binaries**.

### 10.2 Privacy & Legal Dilemmas Requiring Legal Counsel Input
- **One-Party vs. Two-Party Consent Jurisdictions**: In certain jurisdictions (e.g., India, federal US), one-party consent may be permissible under specific circumstances; in other jurisdictions (e.g., California, Germany), all-party consent is legally mandatory.
- **Absence of Mandatory In-Band Disclosure**: Does the softphone play an automated audio beep or audible disclosure (*"This call is recorded for quality and training purposes"*) before bridging the agent and prospect? 
  - *Technical reality*: Currently, the softphone initiates recording at call setup. Automated disclosure injection is dependent on carrier configuration or agent verbal disclosure.
- **Tenant Responsibility**: The Privacy Policy and Terms of Service must mandate that tenant telecallers provide verbal recording notice unless automated carrier announcements are enabled.
- **Audio Access Restrictions**: Audio recording URLs must not be publicly accessible; access must be authenticated and restricted by tenant RBAC.

---

## 11. Customer & Tenant Responsibilities

The public Privacy Policy must establish a clear boundary between DialPulse as a **SaaS Technology Platform (Data Processor)** and the Customer as the **Operating Organization (Data Controller)**. Customers are responsible for:

1. **Lawful Basis for Outreach**: Obtaining valid consent or establishing documented legitimate interest before uploading phone numbers or customer records into DialPulse.
2. **Recording Notice & Consent**: Giving proper disclosures to call recipients that conversations are being recorded and/or transcribed.
3. **Template & Messaging Approval**: Registering commercial message templates and sender headers with relevant telecom and messaging platforms (e.g., WhatsApp Business API, DLT registries).
4. **Data Subject Request Handling**: Directly receiving, verifying, and fulfilling data subject access, rectification, and deletion requests from their prospects.
5. **RBAC & User Access Hygiene**: Managing employee credentials, enforcing multi-factor authentication, and revoking departing employee accounts to prevent unauthorized lead exports.
6. **Integration Credentials**: Safeguarding third-party API tokens (Twilio, Telnyx, Meta WhatsApp) inputted into the DialPulse administrative vault.

---

## 12. Future Customer-Facing Privacy Policy Outline & Readiness

| Section # | Proposed Privacy Policy Section | Readiness Status | Input Needed Before Drafting |
| :--- | :--- | :--- | :--- |
| **1** | **Who We Are** | BUSINESS INPUT REQUIRED | Legal corporate entity name, registered office address, jurisdiction of incorporation. |
| **2** | **Information We Collect** | PARTIALLY READY | Technical fields are verified; need confirmation of website visitor analytics tools. |
| **3** | **How We Use Information** | READY | Operational purposes are fully documented and mapped to software features. |
| **4** | **Customer / Tenant Data** | READY | Multi-tenant PostgreSQL isolation, RBAC boundaries, and customer ownership documented. |
| **5** | **Communications Data** | PARTIALLY READY | Technical call/message flows verified; carrier storage retention policies need confirmation. |
| **6** | **AI & Automated Processing** | LEGAL INPUT REQUIRED | Verification of Google GenAI enterprise terms regarding model training and prompt retention. |
| **7** | **Cookies & Similar Technologies** | PARTIALLY READY | Current app uses local storage/session tokens; production analytics (e.g., GA4) must be decided. |
| **8** | **Sharing & Subprocessors** | PARTIALLY READY | Core technical providers identified (GCP, PostgreSQL, Google AI); carrier contracts need audit. |
| **9** | **International Data Transfers** | LEGAL INPUT REQUIRED | Legal transfer mechanisms (SCCs, cross-border terms) must be established by counsel. |
| **10** | **Data Retention & Deletion** | BUSINESS INPUT REQUIRED | Leadership must define default retention lifecycles for leads, audio, and audit logs. |
| **11** | **Security Posture** | READY | Tenant isolation, KMS AES-256 encryption, TLS 1.3, and append-only audit trails documented. |
| **12** | **Data Subject / Privacy Rights** | LEGAL INPUT REQUIRED | Counsel must specify contact workflows, DPO email, and resolution of the audit deletion paradox. |
| **13** | **Your Responsibilities (Tenant)**| READY | Boundary between Processor (DialPulse) and Controller (Customer) clearly outlined. |
| **14** | **Children’s Privacy** | READY | Standard B2B exclusion (services are strictly intended for enterprise commercial use, not minors). |
| **15** | **Changes to this Policy** | READY | Standard notification mechanism for material privacy modifications. |
| **16** | **Contact & Inquiries** | BUSINESS INPUT REQUIRED | Official privacy contact email (`privacy@dialpulse.com`) and designated DPO details. |

---

## 13. Required Business Decisions Checklist

Before the customer-facing Privacy Policy can be drafted and published, executive leadership must make formal business decisions on the following items:

- [ ] **Legal Entity Definition**: What is the exact registered legal company name, incorporation jurisdiction, and corporate headquarters address?
- [ ] **Data Residency Commitment**: Will DialPulse offer contractually guaranteed local data residency (e.g., India-only or EU-only), or maintain a global cloud infrastructure model?
- [ ] **Default Data Retention Windows**:
  - [ ] How long are call audio recordings retained in standard tiers (e.g., 30 days, 90 days, 1 year)?
  - [ ] What is the grace period for customer data deletion after subscription cancellation (e.g., 30 days vs 90 days)?
  - [ ] Are inactive/unworked leads purged after a defined dormancy period?
- [ ] **Marketing Website Analytics**: Which production analytics, telemetry, or cookie tools (if any) will be deployed on the marketing website upon official launch?
- [ ] **Official Privacy Contact**: Establish dedicated communication channels:
  - [ ] `privacy@dialpulse.com` (or equivalent alias)
  - [ ] Physical mailing address for statutory legal notices
  - [ ] Appointment of a Data Protection Officer (DPO) if legally required under DPDP or GDPR
- [ ] **Self-Serve vs. Enterprise Telephony Model**: Will self-serve users utilize bundled DialPulse carrier minutes, or must all tiers bring their own carrier SIP credentials (BYOC)?

---

## 14. Required Legal Review Checklist (For Counsel / DPO)

Legal counsel must review and approve the following legal questions:

- [ ] **Controller vs. Processor Characterization**: Formally validate that DialPulse operates as a Data Processor / Service Provider under GDPR, India DPDP, and US state privacy statutes with respect to tenant CRM records.
- [ ] **Subprocessor Agreement Verification**:
  - [ ] Review Google Cloud Platform DPA and KMS encryption compliance.
  - [ ] Review Google GenAI commercial terms to guarantee customer voice transcripts are exempt from model training.
  - [ ] Review carrier interconnect terms (Twilio, Telnyx, Meta WhatsApp).
- [ ] **Audit Log Immutability vs. Right to Erasure**: Authorize the legal strategy for handling erasure requests against immutable compliance audit logs (e.g., soft-deletion/pseudonymization of PII vs permanent suppression).
- [ ] **Statutory Telemarketing Disclaimers**: Draft clear liability waivers confirming that DialPulse software guardrails do not indemnify tenants against TRAI/TCCCPR, TCPA, or DNC violations.
- [ ] **Call Recording Consent Disclaimers**: Draft mandatory contractual clauses requiring tenants to obtain legal recording consent in all applicable jurisdictions.
- [ ] **Cross-Border Transfer Mechanisms**: Formally evaluate the adequacy of international data flows between user browser, Cloud Run containers, database instances, and external AI/telecom APIs.

---

## 15. Required Website Inputs (Before Publishing `/privacy`)

The marketing website must NOT publish a `/privacy` route until the following concrete inputs are verified:

1. **Full Legal Corporate Entity Name** (e.g., *"DialPulse Technologies Private Limited"* or *"DialPulse Inc."*).
2. **Physical Registered Corporate Address**.
3. **Designated Privacy Email Address** (e.g., `privacy@dialpulse.com`).
4. **Name and Contact of Data Protection Officer (DPO)** (if applicable).
5. **Effective Date and Version Number** of the Privacy Policy.
6. **Approved List of Subprocessors** (Infrastructure, AI, Telephony, Messaging).
7. **Approved Data Retention Schedule**.
8. **Statutory Jurisdictional Disclosures** (India DPDP Act 2023, EU/UK GDPR, California CCPA/CPRA).
9. **Formal Data Subject Request Procedure** (how users submit verification requests).
10. **Cookie & Tracking Disclosure** matching actual production scripts deployed.

---

## 16. Explicit Prohibitions

To protect DialPulse from regulatory enforcement, deceptive marketing claims, and contractual breach, the following prohibitions are in effect:

- **DO NOT** claim official legal compliance or certification (e.g., *"DialPulse is fully GDPR certified"*, *"HIPAA certified"*, or *"TRAI compliant"*) without verified independent audit certificates.
- **DO NOT** invent arbitrary data retention periods (e.g., *"We automatically delete all logs after 30 days"*) that are not enforced by automated code routines.
- **DO NOT** list hypothetical subprocessors or payment gateways that are not integrated or contractually engaged.
- **DO NOT** claim exclusive local data residency (e.g., *"All data resides strictly within India"*) while container compute routes through Singapore or international cloud regions.
- **DO NOT** claim zero data retention on AI inference without verified enterprise Google Cloud commercial terms.
- **DO NOT** publish placeholder or generic legal boilerplate on the public website as an official policy.

---

## 17. Final Readiness Matrix

| Requirement Area | Technical Evidence | Business Decision | Legal Review | Website Impact | Overall Status |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **System Architecture & Isolation** | Verified in PostgreSQL schema, RBAC middleware, and container config. | Confirmed multi-tenant model with enterprise BYOK. | Review DPA terms. | Ready for architectural summary. | **READY** |
| **Data Processing Purposes** | Verified across CRM modules (Leads, Softphone, Messaging, Compliance). | Confirmed operational alignment. | Review legitimate interest basis. | Ready for processing disclosures. | **READY** |
| **Subprocessor List** | Identified core tech stack (GCP, PostgreSQL, Google GenAI, carriers). | Finalize production carrier agreements. | Execute DPAs with all providers. | Blocked from publishing final vendor list. | **PARTIALLY READY** |
| **International Data Transfers** | Default Cloud Run region `asia-southeast1`; external AI/telecom APIs. | Decide regional hosting strategy. | Draft Standard Contractual Clauses (SCCs). | Requires transfer disclosures. | **LEGAL INPUT REQUIRED** |
| **AI Governance & Zero Training** | Server-side `@google/genai` integration; prompt sanitization. | Select commercial enterprise tier. | Confirm zero-training guarantee in writing. | Critical marketing & privacy claim. | **BLOCKED (LEGAL)** |
| **Retention & Purge Policies** | No automated database purge jobs exist in current codebase. | **Decision Required**: Set mandatory retention schedules. | Validate retention windows against privacy laws. | Blocked from publishing retention numbers. | **BLOCKED (BUSINESS)** |
| **Data Subject Rights Workflow** | Logic exists for lead update/delete; audit log paradox unresolved. | Establish customer support routing for rights requests. | Authorize anonymization / pseudonymization strategy. | Blocked from publishing request process. | **BLOCKED (LEGAL & TECH)** |
| **Telecom Regulatory Compliance**| Zero-bypass DNC, quiet hours, and frequency capping in code. | Confirm customer self-serve carrier requirements. | Draft statutory non-liability disclaimers. | Critical disclaimer needed on website. | **LEGAL INPUT REQUIRED** |
| **Call Recording Privacy** | Softphone records audio; binary stored in object bucket; URLs in DB. | Decide default retention and disclosure settings. | Draft mandatory tenant consent requirements. | Critical disclaimer needed on softphone. | **LEGAL INPUT REQUIRED** |
| **Corporate Legal Identity** | Brand name defined as "DialPulse"; no legal entity in code. | **Decision Required**: Provide legal entity name and address. | Confirm corporate registry status. | Cannot publish `/privacy` without legal identity. | **BLOCKED (BUSINESS)** |

---

### Readiness Categorization Summary

- **READY Items**:
  - Technical data architecture and schema taxonomy.
  - Multi-tenant PostgreSQL isolation and RBAC security model.
  - Core operational processing purposes.
  - Technical software compliance mechanics (DNC, quiet hours, frequency capping).
  - Identification of core cloud compute and database infrastructure.

- **BLOCKED Items**:
  - **Corporate Identity**: Missing legal entity name, corporate address, and formal DPO contact.
  - **AI Model Guarantee**: Awaiting formal contractual confirmation from Google enterprise terms guaranteeing zero model training and prompt retention limits.
  - **Retention Lifecycles**: Awaiting executive business decisions on hard retention timeframes for call audio, inactive leads, and audit logs.
  - **Right-to-Erasure Strategy**: Awaiting legal counsel resolution on how to reconcile lead erasure requests with immutable regulatory compliance audit logs.

- **UNKNOWN Items**:
  - Production marketing analytics script selection (Google Analytics, Plausible, etc.).
  - Exact geographic data centers of downstream telecom carriers.
  - Subprocessor payment processor details (if billing transitions to self-serve credit card checkout).

---

### NEXT REQUIRED ACTION
1. Transmit this requirements document (`BRAIN/PRIVACY-POLICY-REQUIREMENTS.md`) to executive leadership to resolve the **Required Business Decisions** (legal entity, retention periods, privacy contact).
2. Transmit this document to external legal counsel / DPO to review the **Required Legal Review Checklist** (subprocessor DPAs, AI terms, audit log erasure paradox, statutory telecom disclaimers).
3. **DO NOT** create the public `/privacy` route or publish customer-facing legal policy text until business decisions and legal review are formally completed.
