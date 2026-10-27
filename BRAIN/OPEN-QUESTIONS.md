# Open Commercial, Technical, Legal & Security Questions

This document tracks unresolved business decisions, legal determinations, and commercial policies identified during technical audits and public claims reviews.

---

## 1. Commercial & Pricing Strategy

1. **Public Self-Serve Per-Seat Pricing Rates**:
   - What are the approved monthly and annual per-seat price points for Core, Pro, and Business tiers in INR (₹) and international currencies (USD)?
   - *Current Status*: Marked as "TBD" on `/pricing`. Quotes are provisioned during private architecture reviews.

2. **Annual Commitment Discount Percentage**:
   - Will annual billing include a standardized discount (e.g. 15-20%) or remain individually negotiated on multi-year enterprise contracts?
   - *Current Status*: Billing toggle displays transparent notice explaining terms are finalized upon commercial agreement; no fabricated savings are displayed.

3. **Telephony Carrier Usage Billing**:
   - Will DialPulse bundle voice minutes/SMS into higher-tier plans or maintain a strict pass-through carrier model (BYO carrier/SIP trunk)?
   - *Current Status*: Documented as carrier pass-through or custom bundled trunking with zero hidden platform markups.

4. **AI Processing Quotas & Surcharges**:
   - What is the default monthly allocation of speech-to-text audio minutes and summary generations per seat before usage fees apply?
   - *Current Status*: Documented as an optional in-tenant compute add-on without inventing artificial limits.

5. **Self-Serve vs. Sales-Assisted Onboarding Threshold**:
   - Will Core tier be accessible via credit card self-serve checkout, or will all deployments continue through guided architecture review to verify telephony trunk compliance?
   - *Current Status*: All marketing CTAs route to guided walkthroughs (`/contact`); no unsupported self-serve registration promises exist on the site.

---

## 2. Support, SLAs & Operational Commitments

6. **Enterprise Support SLAs & Incident Response Tiers**:
   - What are the formal response time commitments for Standard, Priority, and Enterprise support tiers?
   - Is a 1-hour response time commitment legally and operationally achievable for Severity 1 production incidents, or should enterprise contracts specify a 4-hour window?
   - *Current Status*: Public website references "Standard", "Priority", and "Tailored SLA" under enterprise agreements; public "1-hour SLA" promises have been neutralized.

7. **Uptime Commitments & Maintenance Windows**:
   - What is the targeted platform availability SLA percentage (e.g., 99.5%, 99.9%) for production multi-tenant clusters and dedicated enterprise partitions?
   - How are scheduled maintenance windows communicated and excluded from availability calculations?
   - *Current Status*: Terms of Service explicitly disclaim universal uptime guarantees; formal SLAs are established only through separate enterprise agreements.

---

## 3. Security, Privacy & Certifications

8. **Security Certifications & External Audit Roadmap**:
   - What is the target timeline for completing a formal AICPA SOC 2 Type II audit or ISO 27001 certification?
   - In the interim, what standardized documentation package (e.g., Cloud Security Alliance CAIQ, architecture whitepaper, third-party penetration testing executive summary) is approved for enterprise vendor security questionnaires?
   - *Current Status*: All public claims of SOC 2 Type II compliance have been completely removed from marketing copy. Security page clearly states "Security controls are not a legal certification".

9. **AI Model Provider Data Boundary Warranties**:
   - Does DialPulse maintain a commercial enterprise agreement with Google Cloud that contractually guarantees zero retention and zero training on API prompts and audio transcripts submitted via `@google/genai`?
   - Can DialPulse execute a formal Business Associate Agreement (BAA) or Data Processing Agreement (DPA) incorporating these protections for regulated customers?
   - *Current Status*: Website states DialPulse does not train proprietary models on customer data; contractual perimeter warranties are positioned as subject to enterprise terms.

10. **Data Retention, Archival & Right-to-Be-Forgotten Deletion**:
    - What are the default retention windows for call audio media, transcripts, and message records (e.g., 90 days, 1 year, indefinite)?
    - What is the exact technical workflow and SLA for executing a customer or prospect data deletion request under GDPR / Digital Personal Data Protection (DPDP) Act across object storage and backups?
    - *Current Status*: Documented in internal privacy requirements (`BRAIN/PRIVACY-POLICY-REQUIREMENTS.md`); awaiting formal DPO sign-off.

---

## 4. Legal & Regulatory Requirements

11. **Official Legal Entity & Governing Jurisdiction**:
    - What is the official legal entity name, corporate registration number, and registered office address for DialPulse?
    - What is the default governing law and dispute jurisdiction (e.g., Bengaluru, Karnataka, India / Singapore / Delaware, USA) for master service agreements?
    - *Current Status*: General placeholders present in legal drafts; pending corporate counsel determination.

12. **Subprocessor Registry & Data Residency**:
    - What is the exhaustive list of approved third-party subprocessors (Google Cloud, Meta/WhatsApp, Twilio, Telnyx, Redis Cloud)?
    - Can DialPulse guarantee strict domestic data residency (e.g., India-only or EU-only storage and compute) for enterprise customers with data sovereignty mandates?
    - *Current Status*: Core subprocessors listed transparently on `/security`; contractual residency options marked for private architecture review.

16. **Standard B2B Refund Terms & Cooling-Off Windows**:
    - What is the executive decision regarding standard money-back guarantees (e.g. 14-day vs. 30-day window, or strictly no refunds once provisioning begins)?
    - How are telephony carrier usage consumption fees reconciled upon account cancellation?
    - *Current Status*: Dedicated pre-publication policy published at `/refund` disclaiming universal consumer refunds and clarifying that telephony carrier consumption and compute usage are non-refundable. Final formal windows marked as "To be confirmed".

17. **Cookie Policy & Third-Party Telemetry Approval**:
    - Will DialPulse deploy third-party analytics (Google Analytics 4, Plausible, PostHog) on the public website upon production launch?
    - *Current Status*: Client-side cookie consent banner, storage store, modal preferences, and `/cookies` route implemented. Local storage taxonomy distinguishes Essential, Preferences, Analytics, and Marketing (currently zero third-party trackers). Production vendor selection pending marketing approval.

18. **Lead Erasure vs. Compliance Audit Log Paradox**:
    - How should lead erasure requests under GDPR Article 17 / DPDP Act be technically resolved against permanent compliance audit logs (e.g., proof of DNC pre-flight clearing for past calls)?
    - Should contact PII be pseudonymized/tombstoned while preserving transaction proof?
    - *Current Status*: Disclosed transparently in `/privacy` as a technical architecture constraint; formal legal resolution pending DPO and legal counsel determination.

19. **Official Privacy, DPO & Terms Support Channels**:
    - What are the dedicated monitored mailboxes for privacy and legal inquiries (e.g., `privacy@dialpulse.com`, `legal@dialpulse.com`)?
    - *Current Status*: Placeholders ("To be confirmed / Pending DPO setup") maintained across `/privacy`, `/terms`, `/cookies`, and `/refund`; awaiting infrastructure team domain mailbox provisioning.

---

## 5. Solutions Architecture & Operational Workflows

13. **Do-Not-Call (DNC) Scrubber Integration Scope**:
    - Does the communication compliance pre-flight check connect directly to government national DNC registry APIs (e.g., TRAI DND registry in India or FTC DNC in the US) or does it enforce tenant-uploaded suppressions and customer opt-out databases?
    - *Current Status*: Documented as an automated pre-flight policy check against internal tenant suppression lists and quiet-hour windows. External registry API integrations are configured per regional gateway.

14. **Customer Operations (Solution 07) Support Ticketing Scope**:
    - Is Solution 07 intended to replace full-scale ITIL/helpdesk systems (e.g. Zendesk) or provide integrated post-sale inquiry logging, customer 360 history, and account coordination for sales/account teams?
    - *Current Status*: Scoped as a unified Customer 360 operations center combining lead history, past call transcripts, and ticket/inquiry notes, rather than a standalone enterprise ITSM tool.

15. **Regional Voice Dialect & Language Coverage in AI Transcripts**:
    - Which spoken languages and regional accents are officially verified for automated call transcription and bullet-point extraction (e.g., English, Hindi, Hinglish, regional dialects)?
    - *Current Status*: English is the primary baseline; multilingual capabilities depend on underlying tenant-configured speech models and require evaluation during architecture onboarding.


## 6. India Compliance Alignment (Added 2026-10-27)

20. **India Legal Applicability and DPDP Commencement**:
    - What is the precise legal entity and operating role for DialPulse-Web and the separate CRM (including whether any service is provided as a processor, LSP, DLA, payment-system provider or other regulated role)?
    - Does any DialPulse service fit the statutory DPDP Consent Manager role, distinct from an ordinary website cookie-preference banner?
    - *Current Status*: Official DPDP commencement notifications are mapped in `BRAIN/INDIA-COMPLIANCE-ALIGNMENT.md`; role-specific legal determination is pending. The next scheduled tranche is 13 November 2026, and the major tranche is 13 May 2027.

21. **Production Hosting, Logs and CERT-In Readiness**:
    - What are the actual production regions for origin, CDN/WAF, access/security logs, error reporting, backups and provider telemetry?
    - Who is the incident owner and how will the team preserve evidence, assess applicability, escalate and report qualifying incidents in applicable timeframes?
    - *Current Status*: Internal architecture documentation mentions `asia-southeast1`, but actual production topology/log regions and a tested incident playbook are not verified.

22. **Website vs CRM Data Inventory and Privacy Disclosures**:
    - Which storage keys, cookies, network destinations and data flows exist on `dialpulse.com` versus `app.dialpulse.com`?
    - Do privacy/cookie disclosures currently imply CRM authentication/session storage or other CRM-only activity occurs on the public website?
    - *Current Status*: Source inspection confirms the public contact form fields, consent localStorage key and a development-console-only analytics helper. Full production bundle/network audit and policy reconciliation remain outstanding.

23. **Public Contact Form and Privacy Request Intake**:
    - Which monitored system or API should receive sales/demo and privacy/grievance requests, and who owns triage and resolution?
    - Should the form explicitly warn visitors not to submit KYC documents, bank statements, passwords or other sensitive financial information?
    - *Current Status*: `src/pages/Contact.tsx` simulates success with a timeout; it does not show network submission or durable persistence. A monitored request process is not evidenced.

24. **Website/CRM Vendor, Subprocessor and Data Location Register**:
    - Which providers are actually active for the public site today (hosting, CDN/WAF, fonts/assets, analytics, forms, monitoring) and which are CRM-only?
    - What are the relevant data regions, contract/DPA status, subprocessors, retention and incident terms?
    - *Current Status*: Existing CRM architectural documentation is not a complete, verified live vendor register for the public website.

25. **Conditional RBI / Financial-Services Applicability**:
    - For each financial-services customer/contract, is DialPulse acting only as a software supplier or performing an activity that places it within specific regulated arrangements or contractual flow-downs?
    - Do any arrangements involve a covered RBI-regulated entity, LSP/DLA activity or payment-system provider?
    - *Current Status*: Applicability is conditional and not confirmed for the public website. Do not apply India payment-system data localization or digital-lending requirements universally without legal scope analysis.

