# DialPulse Commercial & Pricing Context

## 1. Commercial Reality & Non-Fabrication Invariant
- **Status**: DialPulse public pricing is in the commercial review phase.
- **Invariant**: No public per-seat pricing numbers, discount percentages, free trial limits, or enterprise contract values have been finalized.
- **Rule**: Under NO circumstances should any engineer or marketer invent prices or make fake prices look real. All unconfirmed pricing must display explicit "TBD", "Contact Sales", or "Pricing being finalized" states.

## 2. Commercial Architecture
The pricing system is centralized in `/src/config/pricing.ts` and separated cleanly from presentation components:
- **`PRICING_PLANS`**: Array of plan tier definitions (`core`, `pro`, `business`, `enterprise`).
- **`COMPARISON_CATEGORIES`**: 8-category exhaustive capability matrix with per-tier inclusion states and deep drawer specifications.
- **`DECISION_OPTIONS`**: 4 operational problem-statement mappings to prevent arbitrary plan recommendations.
- **`PRICING_ADDONS`**: 5 modular infrastructure expansion categories (telephony channels, worker clusters, in-tenant AI, cold storage, onboarding).
- **`PRICING_FAQ`**: 10 commercial questions with candid, transparent answers.
- **`currency.ts`**: Reusable currency utility supporting INR (₹) as the primary base currency with multi-currency extensibility.

## 3. Plan System
- **Core**: Lead Management & Foundational CRM. Aimed at growing teams moving from spreadsheets to structured pipelines. Includes Kanban stages, unified contact history, and manual communication logs.
- **Pro**: High-Volume Telecalling & Floor Presence. In-browser WebRTC softphone, dual-track call recording, WhatsApp/SMS messaging, mandatory call dispositions, and live agent presence.
- **Business**: Automated Cadence & Policy Guardrails. Zero-bypass DNC verification, quiet-hour timezone locks, automated callback notifications, handle-time analytics, and hierarchical RBAC.
- **Enterprise**: Dedicated Single-Tenant Partition & AI. Single-tenant PostgreSQL database isolation, private in-tenant speech-to-text AI with zero model leak, custom SIP trunks, and 1-hour priority SLA.

## 4. Billing Model
- **Seat Model**: Per-user, per-month seat licensing.
- **Billing Schedule**: Supports monthly and annual schedules. Annual discounts are kept configurable without displaying fake savings ("Save 20%") until confirmed by business leadership.
- **Carrier Telephony**: Voice minutes and SMS are decoupled from software seat fees and handled via pass-through carrier billing or Bring-Your-Own-Carrier (BYOC) SIP interconnects.

## 5. Modular Add-ons (Known vs Unknown)
- **Known Architecture**:
  - Telephony Channels & Regional Numbers (DID)
  - Scheduled Background Worker Capacity (Redis clusters)
  - In-Tenant Speech-to-Text & AI Extraction
  - Long-Term Encrypted Audio Retention (KMS AES-256)
  - Solution Architecture & Onboarding Services
- **Unknown Commercial Values**: Specific per-minute telephony surcharges, exact cold storage gigabyte pricing, and AI audio transcription quotas are subject to final vendor and telecom carrier contracts.

## 6. Commercial Assumptions
- Target market: Sales operations, call centers, and regulated telecalling organizations in India (INR ₹) and international expansions.
- Core value proposition: Zero-bypass compliance, in-browser WebRTC softphone, and PostgreSQL database isolation are superior to retrofitting disparate generic plugins.
