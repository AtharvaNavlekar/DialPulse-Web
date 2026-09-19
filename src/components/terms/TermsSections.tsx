import React from 'react';
import { 
  FileCheck, Shield, AlertTriangle, AlertCircle, Info, Lock, 
  Database, UserCheck, MessageSquare, PhoneCall, Cpu, ArrowRight, 
  HelpCircle, Scale, Building2, MapPin, Mail, Layers, CheckCircle2,
  Clock, ShieldAlert
} from 'lucide-react';
import { Button } from '@/components/ui/Button';

export function TermsSections() {
  return (
    <div className="space-y-16 lg:space-y-20">
      {/* =========================================================================
          SECTION 01: ACCEPTANCE OF TERMS
         ========================================================================= */}
      <section id="acceptance-of-terms" className="scroll-mt-28">
        <div className="mb-6">
          <span className="text-xs font-mono font-bold tracking-widest text-primary uppercase block mb-1">
            01 / CONTRACTUAL PREMISE
          </span>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-on-surface">
            Acceptance of Terms
          </h2>
          <p className="mt-2 text-sm sm:text-base text-on-surface-variant leading-relaxed">
            By accessing or using DialPulse, the customer or authorized user agrees to the applicable terms governing the service, subject to the final agreement and applicable law.
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-surface-container-lowest border border-outline-variant/80">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs sm:text-sm text-on-surface-variant">
            <span>
              These Terms outline operational boundaries, customer responsibilities, and service conditions. 
              If you are entering into these terms on behalf of a company or other legal entity, you represent that you have authority to bind that entity.
            </span>
          </div>

          <div className="mt-4 pt-3 border-t border-outline-variant/50 flex flex-wrap items-center gap-3 text-xs">
            <span className="text-on-surface font-semibold">Legal acceptance mechanism:</span>
            <span className="font-mono text-amber-800 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
              To be confirmed
            </span>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 02: ELIGIBILITY AND AUTHORITY
         ========================================================================= */}
      <section id="eligibility-and-authority" className="scroll-mt-28">
        <div className="mb-6">
          <span className="text-xs font-mono font-bold tracking-widest text-primary uppercase block mb-1">
            02 / AUTHORITY TO CONTRACT
          </span>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-on-surface">
            Eligibility and Authority
          </h2>
          <p className="mt-2 text-sm sm:text-base text-on-surface-variant leading-relaxed">
            Customers and users must have the authority required to enter into or use the applicable service agreement.
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-surface-container-lowest border border-outline-variant/80">
          <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed mb-4">
            The platform is intended exclusively for authorized business and operational use by commercial enterprises, sales organizations, and their designated personnel. Individual operators access the platform strictly under organizational sponsorship.
          </p>
          <div className="flex items-center gap-2 text-xs">
            <span className="text-on-surface font-semibold">Eligibility requirements:</span>
            <span className="font-mono text-amber-800 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
              Pending legal review
            </span>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 03: THE DIALPULSE SERVICE
         ========================================================================= */}
      <section id="the-dialpulse-service" className="scroll-mt-28">
        <div className="mb-6">
          <span className="text-xs font-mono font-bold tracking-widest text-primary uppercase block mb-1">
            03 / SERVICE DESCRIPTION
          </span>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-on-surface">
            The DialPulse Service
          </h2>
          <p className="mt-2 text-sm sm:text-base text-on-surface-variant leading-relaxed">
            DialPulse is a multi-tenant telecalling CRM and operational sales management platform. 
            The platform provides workflow capabilities designed to facilitate sales execution and customer contact management.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-surface-container-lowest border border-outline-variant/80 mb-4">
          <span className="text-xs font-bold text-on-surface block mb-3 uppercase tracking-wider font-mono text-primary">
            VERIFIED PLATFORM CAPABILITIES
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-xs sm:text-sm text-on-surface-variant">
            <div className="p-3 rounded-xl bg-surface-container-low border border-outline-variant/60">
              <strong className="text-on-surface block mb-0.5">Lead Management</strong>
              Pipelines, custom qualification fields, deal stages, and lifecycle tracking.
            </div>
            <div className="p-3 rounded-xl bg-surface-container-low border border-outline-variant/60">
              <strong className="text-on-surface block mb-0.5">Customer Records</strong>
              Consolidated lead cards, engagement history, notes, and profile attributes.
            </div>
            <div className="p-3 rounded-xl bg-surface-container-low border border-outline-variant/60">
              <strong className="text-on-surface block mb-0.5">Telephony Workflows</strong>
              WebRTC softphone dialer, call disposition logging, and recording URL mapping.
            </div>
            <div className="p-3 rounded-xl bg-surface-container-low border border-outline-variant/60">
              <strong className="text-on-surface block mb-0.5">WhatsApp / SMS Messaging</strong>
              Template-based messaging, conversational threads, and delivery tracking.
            </div>
            <div className="p-3 rounded-xl bg-surface-container-low border border-outline-variant/60">
              <strong className="text-on-surface block mb-0.5">Support Tickets</strong>
              Internal issue tracking, SLA timestamps, replies, and status management.
            </div>
            <div className="p-3 rounded-xl bg-surface-container-low border border-outline-variant/60">
              <strong className="text-on-surface block mb-0.5">Team Operations</strong>
              Hierarchical role structures, floor availability telemetry, and branch groupings.
            </div>
            <div className="p-3 rounded-xl bg-surface-container-low border border-outline-variant/60">
              <strong className="text-on-surface block mb-0.5">Operational Visibility</strong>
              Call handle times, conversion velocity metrics, and agent performance reports.
            </div>
            <div className="p-3 rounded-xl bg-surface-container-low border border-outline-variant/60">
              <strong className="text-on-surface block mb-0.5">Imports & Exports</strong>
              Asynchronous bulk CSV lead ingestion and authorized export workflows.
            </div>
            <div className="p-3 rounded-xl bg-surface-container-low border border-outline-variant/60">
              <strong className="text-on-surface block mb-0.5">Compliance Controls</strong>
              DNC suppression, quiet hours, fatigue caps, and channel restriction flags.
            </div>
            <div className="p-3 rounded-xl bg-surface-container-low border border-outline-variant/60">
              <strong className="text-on-surface block mb-0.5">Background Processing</strong>
              Queued task orchestration using Redis and BullMQ worker infrastructure.
            </div>
            <div className="p-3 rounded-xl bg-surface-container-low border border-outline-variant/60">
              <strong className="text-on-surface block mb-0.5">AI-Assisted Workflows</strong>
              Server-side transcription, conversation summaries, and sentiment classification.
            </div>
            <div className="p-3 rounded-xl bg-surface-container-low border border-outline-variant/60">
              <strong className="text-on-surface block mb-0.5">Audit Governance</strong>
              Append-only security logging of authentication, exports, and compliance checks.
            </div>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-surface-container border border-outline-variant text-xs sm:text-sm text-on-surface-variant leading-relaxed">
          <strong className="text-on-surface">Plan Availability Notice:</strong> Features may vary by product configuration, subscription, tenant settings, or applicable commercial agreement. DialPulse makes no universal uptime or permanent feature availability guarantees under this general document.
        </div>
      </section>

      {/* =========================================================================
          SECTION 04: ACCOUNTS AND ACCESS
         ========================================================================= */}
      <section id="accounts-and-access" className="scroll-mt-28">
        <div className="mb-6">
          <span className="text-xs font-mono font-bold tracking-widest text-primary uppercase block mb-1">
            04 / ROLES & CREDENTIALS
          </span>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-on-surface">
            Accounts and Access
          </h2>
          <p className="mt-2 text-sm sm:text-base text-on-surface-variant leading-relaxed">
            DialPulse implements access controls intended to restrict users to resources they are authorized to access. 
            Access is organized through server-side tenant scoping and granular role-based access control (RBAC).
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="p-5 rounded-2xl bg-surface-container-lowest border border-outline-variant/80">
            <h3 className="text-sm font-bold text-on-surface mb-2 flex items-center gap-2">
              <UserCheck className="w-4 h-4 text-primary" />
              Organizational Role Hierarchy
            </h3>
            <p className="text-xs text-on-surface-variant leading-relaxed mb-3">
              Customer organizations assign users to defined permission tiers to enforce least privilege:
            </p>
            <ul className="text-xs text-on-surface-variant space-y-1">
              <li>• <strong className="text-on-surface">Telecaller:</strong> Lead dialing, disposition logging, notes</li>
              <li>• <strong className="text-on-surface">Team Lead:</strong> Team queue distribution, floor monitoring</li>
              <li>• <strong className="text-on-surface">Head of Team Leads:</strong> Multi-branch performance review</li>
              <li>• <strong className="text-on-surface">IT Administrator:</strong> Telephony gateways, webhook configs</li>
              <li>• <strong className="text-on-surface">Owner / CTO:</strong> Tenant billing, RBAC assignments, exports</li>
            </ul>
          </div>

          <div className="p-5 rounded-2xl bg-surface-container-lowest border border-outline-variant/80">
            <h3 className="text-sm font-bold text-on-surface mb-2 flex items-center gap-2">
              <Lock className="w-4 h-4 text-primary" />
              Administrative Isolation
            </h3>
            <p className="text-xs text-on-surface-variant leading-relaxed">
              Platform engineering and support staff are strictly partitioned from raw customer data. Administrative access to tenant workspaces is only permitted during verified, time-limited impersonation sessions initiated to diagnose explicit technical support escalations, and every session is immutably logged with actor attribution.
            </p>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-start gap-3 text-xs sm:text-sm text-amber-900">
          <AlertCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
          <div>
            <strong className="font-semibold block mb-0.5">Customer Access Obligation:</strong>
            Customers are responsible for managing authorized users, revoking departing staff credentials, maintaining password secrecy, and preventing unauthorized use of their accounts.
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 05: CUSTOMER DATA
         ========================================================================= */}
      <section id="customer-data" className="scroll-mt-28">
        <div className="mb-6">
          <span className="text-xs font-mono font-bold tracking-widest text-primary uppercase block mb-1">
            05 / DATA SCOPE
          </span>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-on-surface">
            Customer Data
          </h2>
          <p className="mt-2 text-sm sm:text-base text-on-surface-variant leading-relaxed">
            "Customer Data" means electronic data, text, messages, audio metadata, communications, or other materials submitted, uploaded, or transmitted to DialPulse by or on behalf of a customer.
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-surface-container-lowest border border-outline-variant/80 space-y-4">
          <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
            Supported platform data categories include lead records, custom attributes, disposition notes, call session metadata, WhatsApp/SMS message bodies, support requests, team rosters, and exported reports.
          </p>

          <div className="p-4 rounded-xl bg-surface-container-low border border-outline-variant text-xs sm:text-sm text-on-surface-variant leading-relaxed">
            Customers should ensure that they have the necessary rights, notices, permissions, and lawful basis required to provide information to DialPulse and to use it through the service.
          </div>

          <div className="flex items-center gap-2 text-xs pt-1">
            <span className="text-on-surface font-semibold">Data ownership / rights:</span>
            <span className="font-mono text-amber-800 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
              Pending legal review
            </span>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 06: CUSTOMER RESPONSIBILITIES
         ========================================================================= */}
      <section id="customer-responsibilities" className="scroll-mt-28">
        <div className="mb-6">
          <span className="text-xs font-mono font-bold tracking-widest text-primary uppercase block mb-1">
            06 / OPERATIONAL BOUNDARIES
          </span>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-on-surface">
            Customer Responsibilities
          </h2>
          <p className="mt-2 text-sm sm:text-base text-on-surface-variant leading-relaxed">
            Customers retain primary control over their business operations, personnel permissions, and data lifecycles within the platform.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-surface-container-lowest border border-outline-variant/80 mb-4">
          <span className="text-xs font-bold text-on-surface block mb-3 uppercase tracking-wider font-mono text-primary">
            CUSTOMER COMPLIANCE OBLIGATIONS
          </span>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-on-surface-variant">
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
              <span><strong className="text-on-surface">Data Accuracy:</strong> Ensuring data entered into leads, tickets, and user accounts is accurate and lawful.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
              <span><strong className="text-on-surface">Lawful Collection:</strong> Securing appropriate consent or legal grounds to process contact records.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
              <span><strong className="text-on-surface">Communication Permissions:</strong> Securing prior opt-ins for promotional voice or messaging outreach.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
              <span><strong className="text-on-surface">Call-Recording Disclosures:</strong> Providing statutory call recording notifications where required by law.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
              <span><strong className="text-on-surface">Access Governance:</strong> Monitoring authorized users, credentials, and internal administrative privilege.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
              <span><strong className="text-on-surface">Export Security:</strong> Safely storing, encrypting, and handling customer records after CSV download.</span>
            </li>
          </ul>
        </div>

        <div className="p-4 rounded-xl bg-surface-container border border-outline-variant text-xs sm:text-sm text-on-surface-variant leading-relaxed">
          <strong className="text-on-surface">Technical vs. Legal Distinction:</strong> DialPulse provides technical controls; customers remain responsible for determining how those controls should be configured and used for their specific business, legal, and regulatory requirements.
        </div>
      </section>

      {/* =========================================================================
          SECTION 07: ACCEPTABLE USE
         ========================================================================= */}
      <section id="acceptable-use" className="scroll-mt-28">
        <div className="mb-6">
          <span className="text-xs font-mono font-bold tracking-widest text-primary uppercase block mb-1">
            07 / CODE OF CONDUCT
          </span>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-on-surface">
            Acceptable Use
          </h2>
          <p className="mt-2 text-sm sm:text-base text-on-surface-variant leading-relaxed">
            Customers and users must use DialPulse solely for legitimate, authorized business operations. The activities below are strictly prohibited.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-surface-container-lowest border border-outline-variant/80">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm text-on-surface-variant">
            <div className="p-4 rounded-xl bg-red-500/5 border border-red-500/20">
              <strong className="text-on-surface block mb-1">System & Boundary Integrity</strong>
              <ul className="space-y-1">
                <li>• Attempting unauthorized access or credential sharing</li>
                <li>• Attempting to probe, bypass, or cross tenant isolation boundaries</li>
                <li>• Interfering with server-side authentication or RBAC logic</li>
                <li>• Reverse engineering, decompiling, or probing APIs without authorization</li>
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-red-500/5 border border-red-500/20">
              <strong className="text-on-surface block mb-1">Infrastructure & Data Abuse</strong>
              <ul className="space-y-1">
                <li>• Introducing malware, malicious scripts, or exploitative payloads</li>
                <li>• Automating scraper bots against application resources</li>
                <li>• Circumventing platform API rate limits or task queues</li>
                <li>• Using data export tools to circumvent organizational access policies</li>
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-red-500/5 border border-red-500/20">
              <strong className="text-on-surface block mb-1">Communication Abuse</strong>
              <ul className="space-y-1">
                <li>• Transmitting unlawful, harassing, or unsolicited bulk communications</li>
                <li>• Intentionally overriding or circumventing Do-Not-Call (DNC) blocks</li>
                <li>• Spoofing originating caller ID headers in violation of telecom rules</li>
                <li>• Disregarding customer opt-out requests or quiet-hour restrictions</li>
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-red-500/5 border border-red-500/20">
              <strong className="text-on-surface block mb-1">Administrative Malfeasance</strong>
              <ul className="space-y-1">
                <li>• Misusing support impersonation features to view unauthorized data</li>
                <li>• Uploading fraudulent, defamatory, or infringing customer data</li>
                <li>• Reselling or sublicensing access without written authorization</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 08: COMMUNICATION AND COMPLIANCE RESPONSIBILITIES
         ========================================================================= */}
      <section id="communication-and-compliance-responsibilities" className="scroll-mt-28">
        <div className="mb-6">
          <span className="text-xs font-mono font-bold tracking-widest text-primary uppercase block mb-1">
            08 / TELECOM SAFEGUARDS
          </span>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-on-surface">
            Communication and Compliance Responsibilities
          </h2>
          <p className="mt-2 text-sm sm:text-base text-on-surface-variant leading-relaxed">
            DialPulse builds product-level technical safeguards into softphone calling and messaging pipelines.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-4">
          <div className="p-4 rounded-xl bg-surface-container-lowest border border-outline-variant">
            <strong className="text-xs text-on-surface block mb-1">Global Opt-Out</strong>
            <p className="text-xs text-on-surface-variant leading-relaxed">
              Automated suppression flag preventing outreach across voice, SMS, and WhatsApp channels.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-surface-container-lowest border border-outline-variant">
            <strong className="text-xs text-on-surface block mb-1">Zero-Bypass DNC</strong>
            <p className="text-xs text-on-surface-variant leading-relaxed">
              Pre-flight software verification against suppression lists prior to softphone call setup.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-surface-container-lowest border border-outline-variant">
            <strong className="text-xs text-on-surface block mb-1">Contact Pause Flags</strong>
            <p className="text-xs text-on-surface-variant leading-relaxed">
              30-day sequence hold mechanics responding to prospect temporary pause requests.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-surface-container-lowest border border-outline-variant">
            <strong className="text-xs text-on-surface block mb-1">Channel Restrictions</strong>
            <p className="text-xs text-on-surface-variant leading-relaxed">
              Selective channel rules honoring customer preference (e.g., messaging only, no voice).
            </p>
          </div>
          <div className="p-4 rounded-xl bg-surface-container-lowest border border-outline-variant">
            <strong className="text-xs text-on-surface block mb-1">Frequency & Fatigue Caps</strong>
            <p className="text-xs text-on-surface-variant leading-relaxed">
              Outreach attempt limiters per 24-hour cycle to prevent prospective customer harassment.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-surface-container-lowest border border-outline-variant">
            <strong className="text-xs text-on-surface block mb-1">Quiet Hours Locks</strong>
            <p className="text-xs text-on-surface-variant leading-relaxed">
              Timezone-aware software locks restricting dialing outside authorized daytime windows.
            </p>
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-surface-container border border-outline-variant text-xs sm:text-sm text-on-surface-variant leading-relaxed">
          <strong className="text-on-surface block mb-1 font-semibold">Important Regulatory Notice:</strong>
          These controls are technical safeguards and do not constitute a legal determination that a customer’s communication activities comply with every applicable telecommunications, privacy, messaging, or marketing law. DialPulse does not make blanket statutory compliance guarantees (such as TRAI, TCCCPR, TCPA, or DLT certification). Customers remain solely responsible for statutory registration and lawful operation.
        </div>
      </section>

      {/* =========================================================================
          SECTION 09: AI-ASSISTED FEATURES
         ========================================================================= */}
      <section id="ai-assisted-features" className="scroll-mt-28">
        <div className="mb-6">
          <span className="text-xs font-mono font-bold tracking-widest text-primary uppercase block mb-1">
            09 / ARTIFICIAL INTELLIGENCE
          </span>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-on-surface">
            AI that operates inside the platform's workflow.
          </h2>
          <p className="mt-2 text-sm sm:text-base text-on-surface-variant leading-relaxed">
            Where enabled by tenant configuration, DialPulse integrates Google Gemini models via server-side application proxies to assist sales representatives with transcription and workflow intelligence.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-surface-container-lowest border border-outline-variant/80 mb-4 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-surface-container-low border border-outline-variant">
              <strong className="text-xs text-on-surface block mb-1">Assisted Capabilities</strong>
              <ul className="text-xs text-on-surface-variant space-y-1">
                <li>• Speech-to-text call transcription</li>
                <li>• Conversation summary generation</li>
                <li>• Sentiment and customer objection tagging</li>
                <li>• Suggested email and WhatsApp follow-up drafting</li>
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-surface-container-low border border-outline-variant">
              <strong className="text-xs text-on-surface block mb-1">Architectural Controls</strong>
              <ul className="text-xs text-on-surface-variant space-y-1">
                <li>• Tenant feature permissions and quotas verified before invocation</li>
                <li>• Text prompts sanitized for email and phone patterns</li>
                <li>• Provider credentials remain secured server-side</li>
                <li>• AI request volume and tokens logged for governance</li>
              </ul>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
            AI features may involve third-party AI infrastructure. The exact treatment of prompts, audio, retention, processing location, and model-use restrictions depends on the configured provider service and applicable agreement. DialPulse does not independently train public foundation models on tenant data.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-between text-xs">
          <span className="text-amber-900 font-medium">AI provider terms & zero-retention verification:</span>
          <span className="font-mono text-amber-800 bg-amber-500/20 px-2 py-0.5 rounded border border-amber-500/30">
            Pending legal review
          </span>
        </div>
      </section>

      {/* =========================================================================
          SECTION 10: THIRD-PARTY SERVICES
         ========================================================================= */}
      <section id="third-party-services" className="scroll-mt-28">
        <div className="mb-6">
          <span className="text-xs font-mono font-bold tracking-widest text-primary uppercase block mb-1">
            10 / INFRASTRUCTURE VENDORS
          </span>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-on-surface">
            Third-Party Services
          </h2>
          <p className="mt-2 text-sm sm:text-base text-on-surface-variant leading-relaxed">
            DialPulse relies on specialized third-party providers for hosting, message transmission, and computational intelligence.
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-outline-variant bg-surface-container-lowest">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead>
              <tr className="border-b border-outline-variant bg-surface-container-low text-on-surface font-semibold">
                <th className="py-3.5 px-4">Provider</th>
                <th className="py-3.5 px-4">Purpose</th>
                <th className="py-3.5 px-4">Current Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant/60 text-on-surface-variant">
              <tr>
                <td className="py-3.5 px-4 font-semibold text-on-surface whitespace-nowrap">
                  Google Cloud / Gemini
                </td>
                <td className="py-3.5 px-4">AI inference and speech transcription</td>
                <td className="py-3.5 px-4 font-mono text-[11px] text-amber-800">
                  Configuration / contractual details subject to confirmation
                </td>
              </tr>
              <tr>
                <td className="py-3.5 px-4 font-semibold text-on-surface whitespace-nowrap">
                  Meta / WhatsApp Cloud API
                </td>
                <td className="py-3.5 px-4">WhatsApp business communication relay</td>
                <td className="py-3.5 px-4 font-mono text-[11px] text-amber-800">
                  Configuration / contractual details subject to confirmation
                </td>
              </tr>
              <tr>
                <td className="py-3.5 px-4 font-semibold text-on-surface whitespace-nowrap">
                  Google Cloud Platform
                </td>
                <td className="py-3.5 px-4">Application/cloud hosting, compute and managed PostgreSQL</td>
                <td className="py-3.5 px-4 font-mono text-[11px] text-amber-800">
                  Configuration / contractual details subject to confirmation
                </td>
              </tr>
              <tr>
                <td className="py-3.5 px-4 font-semibold text-on-surface whitespace-nowrap">
                  Redis / Queue Infrastructure
                </td>
                <td className="py-3.5 px-4">Caching, rate limiting and BullMQ background task processing</td>
                <td className="py-3.5 px-4 font-mono text-[11px] text-amber-800">
                  Configuration / contractual details subject to confirmation
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* =========================================================================
          SECTION 11: IMPORTS, EXPORTS AND CUSTOMER CONTENT
         ========================================================================= */}
      <section id="imports-exports-customer-content" className="scroll-mt-28">
        <div className="mb-6">
          <span className="text-xs font-mono font-bold tracking-widest text-primary uppercase block mb-1">
            11 / DATA MOBILITY & CONTENT
          </span>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-on-surface">
            Imports, Exports and Customer Content
          </h2>
          <p className="mt-2 text-sm sm:text-base text-on-surface-variant leading-relaxed">
            Customers may import lead databases and export operational reports in supported structured file formats.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-surface-container-lowest border border-outline-variant/80 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-surface-container-low border border-outline-variant">
              <strong className="text-xs text-on-surface block mb-1">Data Ingestion (Imports)</strong>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                Bulk lead uploads are validated for field mapping and processed through asynchronous background worker queues to protect application stability.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-surface-container-low border border-outline-variant">
              <strong className="text-xs text-on-surface block mb-1">Data Extraction (Exports)</strong>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                Exports require elevated role authorization, trigger explicit confirmation modals, and record immutable audit trail entries containing actor and timestamp metadata.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-surface-container border border-outline-variant text-xs sm:text-sm text-on-surface-variant leading-relaxed">
            <strong className="text-on-surface">Post-Export Responsibility:</strong> Customers are responsible for securing and handling exported data after it is delivered or made available to them outside the controlled DialPulse server environment.
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 12: SECURITY
         ========================================================================= */}
      <section id="security" className="scroll-mt-28">
        <div className="mb-6">
          <span className="text-xs font-mono font-bold tracking-widest text-primary uppercase block mb-1">
            12 / TECHNICAL SAFEGUARDS
          </span>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-on-surface">
            Security and Safeguards
          </h2>
          <p className="mt-2 text-sm sm:text-base text-on-surface-variant leading-relaxed">
            DialPulse maintains technical and organizational safeguards designed to protect the service and information processed through it. 
            No internet-connected service can guarantee absolute security.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-4">
          <div className="p-4 rounded-xl bg-surface-container-lowest border border-outline-variant">
            <strong className="text-xs text-on-surface block mb-1">Authentication</strong>
            <p className="text-xs text-on-surface-variant">Salted password hashing and short-lived signed access tokens.</p>
          </div>
          <div className="p-4 rounded-xl bg-surface-container-lowest border border-outline-variant">
            <strong className="text-xs text-on-surface block mb-1">Tenant Scoping</strong>
            <p className="text-xs text-on-surface-variant">Server-enforced relational isolation across database queries.</p>
          </div>
          <div className="p-4 rounded-xl bg-surface-container-lowest border border-outline-variant">
            <strong className="text-xs text-on-surface block mb-1">Audit Trails</strong>
            <p className="text-xs text-on-surface-variant">Append-only audit logs capturing security and compliance events.</p>
          </div>
          <div className="p-4 rounded-xl bg-surface-container-lowest border border-outline-variant">
            <strong className="text-xs text-on-surface block mb-1">Input Hygiene</strong>
            <p className="text-xs text-on-surface-variant">Sanitization and spreadsheet formula injection defenses.</p>
          </div>
        </div>

        <div className="flex items-center gap-2 text-xs">
          <span className="text-on-surface font-semibold">Contractual security obligations:</span>
          <span className="font-mono text-amber-800 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
            Pending legal review
          </span>
        </div>
      </section>

      {/* =========================================================================
          SECTION 13: INTELLECTUAL PROPERTY
         ========================================================================= */}
      <section id="intellectual-property" className="scroll-mt-28">
        <div className="mb-6">
          <span className="text-xs font-mono font-bold tracking-widest text-primary uppercase block mb-1">
            13 / PROPRIETARY RIGHTS
          </span>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-on-surface">
            Intellectual Property
          </h2>
          <p className="mt-2 text-sm sm:text-base text-on-surface-variant leading-relaxed">
            DialPulse retains all right, title, and interest in and to the DialPulse platform, brand, software, documentation, website, visual systems, and service materials.
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-surface-container-lowest border border-outline-variant/80">
          <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed mb-4">
            Customers retain the rights they have in content and data they submit, subject to the final agreement and applicable law. DialPulse is granted a limited operational license solely to host, process, and display customer content as necessary to provide the service.
          </p>
          <div className="flex items-center gap-2 text-xs">
            <span className="text-on-surface font-semibold">IP allocation wording:</span>
            <span className="font-mono text-amber-800 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
              Subject to legal review
            </span>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 14: FEES AND COMMERCIAL TERMS
         ========================================================================= */}
      <section id="fees-and-commercial-terms" className="scroll-mt-28">
        <div className="mb-6">
          <span className="text-xs font-mono font-bold tracking-widest text-primary uppercase block mb-1">
            14 / COMMERCIAL TERMS
          </span>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-on-surface">
            Fees and Commercial Terms
          </h2>
          <p className="mt-2 text-sm sm:text-base text-on-surface-variant leading-relaxed">
            Fees, billing schedules, subscription terms, taxes, renewals, credits, refunds, usage charges, and related commercial terms are determined by the applicable subscription, order form, proposal, or other commercial agreement.
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-surface-container-lowest border border-outline-variant/80">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-xs sm:text-sm">
            <div className="p-3 rounded-xl bg-surface-container-low border border-outline-variant">
              <span className="text-on-surface-variant block text-xs">Pricing & Seat Tiers</span>
              <strong className="text-on-surface font-mono text-xs">Defined outside this document / To be confirmed</strong>
            </div>
            <div className="p-3 rounded-xl bg-surface-container-low border border-outline-variant">
              <span className="text-on-surface-variant block text-xs">Billing Frequency</span>
              <strong className="text-on-surface font-mono text-xs">To be confirmed</strong>
            </div>
            <div className="p-3 rounded-xl bg-surface-container-low border border-outline-variant">
              <span className="text-on-surface-variant block text-xs">Refund Policy</span>
              <strong className="text-on-surface font-mono text-xs">To be confirmed</strong>
            </div>
            <div className="p-3 rounded-xl bg-surface-container-low border border-outline-variant">
              <span className="text-on-surface-variant block text-xs">Renewal Terms</span>
              <strong className="text-on-surface font-mono text-xs">To be confirmed</strong>
            </div>
            <div className="p-3 rounded-xl bg-surface-container-low border border-outline-variant">
              <span className="text-on-surface-variant block text-xs">Cancellation Procedure</span>
              <strong className="text-on-surface font-mono text-xs">To be confirmed</strong>
            </div>
            <div className="p-3 rounded-xl bg-surface-container-low border border-outline-variant">
              <span className="text-on-surface-variant block text-xs">Tax Treatment</span>
              <strong className="text-on-surface font-mono text-xs">Subject to applicable tax invoice</strong>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 15: SERVICE AVAILABILITY AND CHANGES
         ========================================================================= */}
      <section id="service-availability-and-changes" className="scroll-mt-28">
        <div className="mb-6">
          <span className="text-xs font-mono font-bold tracking-widest text-primary uppercase block mb-1">
            15 / PLATFORM EVOLUTION
          </span>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-on-surface">
            Service Availability and Changes
          </h2>
          <p className="mt-2 text-sm sm:text-base text-on-surface-variant leading-relaxed">
            Features, configurations, integrations, and technical implementation may change over time as DialPulse improves and iterates the platform.
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-surface-container-lowest border border-outline-variant/80 text-xs sm:text-sm text-on-surface-variant leading-relaxed space-y-3">
          <p>
            DialPulse strives to provide reliable services, but does not warrant that the service will be entirely uninterrupted, error-free, or continuously available. Formal Service Level Agreements (SLAs) or performance commitments are established only through separate enterprise agreements.
          </p>
          <div className="flex items-center gap-2 text-xs pt-1">
            <span className="text-on-surface font-semibold">Service SLA status:</span>
            <span className="font-mono text-amber-800 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
              Subject to applicable agreement
            </span>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 16: SUSPENSION AND TERMINATION
         ========================================================================= */}
      <section id="suspension-and-termination" className="scroll-mt-28">
        <div className="mb-6">
          <span className="text-xs font-mono font-bold tracking-widest text-primary uppercase block mb-1">
            16 / ACCESS REMEDIES
          </span>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-on-surface">
            Suspension and Termination
          </h2>
          <p className="mt-2 text-sm sm:text-base text-on-surface-variant leading-relaxed">
            Specific suspension, termination, notice, and post-termination obligations will be defined in the final agreement.
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-surface-container-lowest border border-outline-variant/80 space-y-4">
          <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
            Circumstances that may trigger immediate account or tenant suspension include serious breach of acceptable use, unauthorized security probing, non-payment, malicious communication transmission, or requests from regulatory authorities.
          </p>

          <div className="p-4 rounded-xl bg-surface-container-low border border-outline-variant flex items-center justify-between text-xs">
            <span className="text-on-surface font-semibold">Post-termination data retrieval & handling:</span>
            <span className="font-mono text-amber-800 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
              To be confirmed
            </span>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 17: DISCLAIMERS
         ========================================================================= */}
      <section id="disclaimers" className="scroll-mt-28">
        <div className="mb-6">
          <span className="text-xs font-mono font-bold tracking-widest text-primary uppercase block mb-1">
            17 / WARRANTIES & ADVICE
          </span>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-on-surface">
            Disclaimers
          </h2>
          <p className="mt-2 text-sm sm:text-base text-on-surface-variant leading-relaxed">
            Except as expressly provided in a signed commercial agreement, the service is provided on an "as available" basis without warranties of any kind.
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-surface-container-lowest border border-outline-variant/80 space-y-4">
          <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-xs sm:text-sm text-amber-900 leading-relaxed">
            <strong className="font-semibold block mb-1">AI Output Advisory:</strong>
            AI-generated or AI-assisted outputs may contain errors and should be reviewed by an appropriate human before being relied upon for consequential decisions. DialPulse does not provide legal, statutory, telecommunications compliance, or financial advice.
          </div>

          <div className="flex items-center gap-2 text-xs">
            <span className="text-on-surface font-semibold">Final disclaimer language:</span>
            <span className="font-mono text-amber-800 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
              Pending legal review
            </span>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 18: LIMITATION OF LIABILITY
         ========================================================================= */}
      <section id="limitation-of-liability" className="scroll-mt-28">
        <div className="mb-6">
          <span className="text-xs font-mono font-bold tracking-widest text-primary uppercase block mb-1">
            18 / RISK ALLOCATION
          </span>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-on-surface">
            Limitation of Liability
          </h2>
          <p className="mt-2 text-sm sm:text-base text-on-surface-variant leading-relaxed">
            Contractual liability allocations, damage exclusions, and statutory caps are subject to formal negotiation and commercial counsel finalization.
          </p>
        </div>

        {/* Obvious Legal Review Placeholder */}
        <div className="p-6 rounded-2xl bg-amber-500/10 border border-amber-500/30">
          <div className="flex items-center gap-2 mb-3">
            <Scale className="w-5 h-5 text-amber-700" />
            <h3 className="text-sm font-bold text-amber-900 uppercase font-mono tracking-wider">
              LIABILITY TERMS — LEGAL REVIEW REQUIRED
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
            <div className="p-3 rounded-xl bg-white/70 border border-amber-500/30">
              <span className="text-amber-800 block mb-1 font-semibold">Liability Cap:</span>
              <span className="font-mono text-on-surface">To be specified</span>
            </div>
            <div className="p-3 rounded-xl bg-white/70 border border-amber-500/30">
              <span className="text-amber-800 block mb-1 font-semibold">Excluded Damages:</span>
              <span className="font-mono text-on-surface">To be specified</span>
            </div>
            <div className="p-3 rounded-xl bg-white/70 border border-amber-500/30">
              <span className="text-amber-800 block mb-1 font-semibold">Exceptions:</span>
              <span className="font-mono text-on-surface">To be specified</span>
            </div>
          </div>
          <p className="mt-3 text-xs text-amber-800 leading-relaxed">
            Standard boilerplate caps (e.g., fees paid in the prior 12 months) are withheld pending formal commercial structuring.
          </p>
        </div>
      </section>

      {/* =========================================================================
          SECTION 19: INDEMNIFICATION
         ========================================================================= */}
      <section id="indemnification" className="scroll-mt-28">
        <div className="mb-6">
          <span className="text-xs font-mono font-bold tracking-widest text-primary uppercase block mb-1">
            19 / INDEMNITY
          </span>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-on-surface">
            Indemnification
          </h2>
          <p className="mt-2 text-sm sm:text-base text-on-surface-variant leading-relaxed">
            Indemnity provisions define defense and hold-harmless duties concerning third-party claims arising from service misuse.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-amber-500/10 border border-amber-500/30">
          <div className="flex items-center gap-2 mb-3">
            <Shield className="w-5 h-5 text-amber-700" />
            <h3 className="text-sm font-bold text-amber-900 uppercase font-mono tracking-wider">
              INDEMNIFICATION TERMS — LEGAL REVIEW REQUIRED
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-amber-900 leading-relaxed mb-3">
            Potential topics under commercial counsel review include customer misuse of service, unlawful customer-submitted data, violation of third-party intellectual property, and violation of applicable telecom or marketing regulations.
          </p>
          <div className="flex items-center gap-2 text-xs">
            <span className="font-semibold text-amber-900">Final wording:</span>
            <span className="font-mono text-amber-800 bg-amber-500/20 px-2 py-0.5 rounded border border-amber-500/30">
              To be specified by counsel
            </span>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 20: CONFIDENTIALITY
         ========================================================================= */}
      <section id="confidentiality" className="scroll-mt-28">
        <div className="mb-6">
          <span className="text-xs font-mono font-bold tracking-widest text-primary uppercase block mb-1">
            20 / NON-DISCLOSURE
          </span>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-on-surface">
            Confidentiality
          </h2>
          <p className="mt-2 text-sm sm:text-base text-on-surface-variant leading-relaxed">
            Confidentiality obligations apply to proprietary business information, customer datasets, and technical specifications exchanged in connection with the platform.
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-surface-container-lowest border border-outline-variant/80">
          <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed mb-3">
            Neither party will disclose non-public confidential information of the other party except to authorized personnel or as required by court order.
          </p>
          <div className="flex items-center gap-2 text-xs">
            <span className="text-on-surface font-semibold">Final confidentiality terms & exclusions:</span>
            <span className="font-mono text-amber-800 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
              To be confirmed
            </span>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 21: GOVERNING LAW AND DISPUTES
         ========================================================================= */}
      <section id="governing-law-and-disputes" className="scroll-mt-28">
        <div className="mb-6">
          <span className="text-xs font-mono font-bold tracking-widest text-primary uppercase block mb-1">
            21 / JURISDICTION
          </span>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-on-surface">
            Governing Law and Disputes
          </h2>
          <p className="mt-2 text-sm sm:text-base text-on-surface-variant leading-relaxed">
            Jurisdictional venue, governing legislation, and dispute resolution mechanisms remain subject to corporate registry and legal finalization.
          </p>
        </div>

        {/* Explicit Placeholder Block */}
        <div className="p-6 rounded-2xl bg-surface-container-lowest border border-outline-variant/80">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs sm:text-sm">
            <div className="p-3 rounded-xl bg-surface-container-low border border-outline-variant">
              <span className="text-on-surface-variant block text-xs">Governing Law</span>
              <strong className="text-amber-800 font-mono text-xs">To be confirmed</strong>
            </div>
            <div className="p-3 rounded-xl bg-surface-container-low border border-outline-variant">
              <span className="text-on-surface-variant block text-xs">Jurisdiction</span>
              <strong className="text-amber-800 font-mono text-xs">To be confirmed</strong>
            </div>
            <div className="p-3 rounded-xl bg-surface-container-low border border-outline-variant">
              <span className="text-on-surface-variant block text-xs">Dispute Resolution</span>
              <strong className="text-amber-800 font-mono text-xs">To be confirmed</strong>
            </div>
            <div className="p-3 rounded-xl bg-surface-container-low border border-outline-variant">
              <span className="text-on-surface-variant block text-xs">Arbitration Rules</span>
              <strong className="text-amber-800 font-mono text-xs">To be confirmed</strong>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 22: CHANGES & CONTACT
         ========================================================================= */}
      <section id="changes-and-contact" className="scroll-mt-28">
        <div className="mb-6">
          <span className="text-xs font-mono font-bold tracking-widest text-primary uppercase block mb-1">
            22 / MODIFICATIONS & INQUIRIES
          </span>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-on-surface">
            Changes and Contact Information
          </h2>
          <p className="mt-2 text-sm sm:text-base text-on-surface-variant leading-relaxed">
            DialPulse may update these Terms from time to time. Material-change notification and effective-date mechanics will be specified in the final agreement.
          </p>
        </div>

        {/* Contact Block */}
        <div className="p-6 rounded-2xl bg-surface-container-lowest border border-outline-variant/80">
          <h3 className="text-sm font-bold text-on-surface mb-3 flex items-center gap-2">
            <Building2 className="w-4 h-4 text-primary" />
            Corporate and Legal Inquiries
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
            <div className="p-3.5 rounded-xl bg-surface-container-low border border-outline-variant">
              <span className="text-on-surface-variant block text-xs mb-1">Legal Entity</span>
              <strong className="text-on-surface font-mono text-xs">To be confirmed</strong>
            </div>
            <div className="p-3.5 rounded-xl bg-surface-container-low border border-outline-variant">
              <span className="text-on-surface-variant block text-xs mb-1">Legal / Terms Contact</span>
              <strong className="text-on-surface font-mono text-xs">To be confirmed</strong>
            </div>
            <div className="p-3.5 rounded-xl bg-surface-container-low border border-outline-variant">
              <span className="text-on-surface-variant block text-xs mb-1">Registered Address</span>
              <strong className="text-on-surface font-mono text-xs">To be confirmed</strong>
            </div>
            <div className="p-3.5 rounded-xl bg-surface-container-low border border-outline-variant">
              <span className="text-on-surface-variant block text-xs mb-1">Support Contact</span>
              <strong className="text-on-surface font-mono text-xs">To be confirmed</strong>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 29: LEGAL READINESS PANEL
         ========================================================================= */}
      <section className="scroll-mt-28">
        <div className="p-6 sm:p-8 rounded-2xl bg-surface-container-low border border-outline-variant">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-outline-variant/80">
            <div>
              <span className="text-xs font-mono font-bold tracking-widest text-primary uppercase block mb-1">
                INTERNAL AUDIT
              </span>
              <h2 className="text-xl sm:text-2xl font-display font-bold text-on-surface">
                FINAL LEGAL REVIEW REQUIRED
              </h2>
            </div>
            <span className="text-xs text-on-surface-variant font-mono">
              Pre-Publication Readiness Status
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 text-xs">
            <div className="p-3 rounded-xl bg-surface-container-lowest border border-outline-variant flex items-center justify-between">
              <span className="text-on-surface font-medium">Product description</span>
              <span className="font-mono text-[11px] font-bold text-emerald-800 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                READY
              </span>
            </div>

            <div className="p-3 rounded-xl bg-surface-container-lowest border border-outline-variant flex items-center justify-between">
              <span className="text-on-surface font-medium">Customer Data def.</span>
              <span className="font-mono text-[11px] font-bold text-amber-800 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                LEGAL REVIEW
              </span>
            </div>

            <div className="p-3 rounded-xl bg-surface-container-lowest border border-outline-variant flex items-center justify-between">
              <span className="text-on-surface font-medium">Fees & billing</span>
              <span className="font-mono text-[10px] font-bold text-amber-800 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20 whitespace-nowrap">
                BUSINESS + LEGAL
              </span>
            </div>

            <div className="p-3 rounded-xl bg-surface-container-lowest border border-outline-variant flex items-center justify-between">
              <span className="text-on-surface font-medium">Termination</span>
              <span className="font-mono text-[11px] font-bold text-amber-800 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                LEGAL REVIEW
              </span>
            </div>

            <div className="p-3 rounded-xl bg-surface-container-lowest border border-outline-variant flex items-center justify-between">
              <span className="text-on-surface font-medium">Liability</span>
              <span className="font-mono text-[11px] font-bold text-amber-800 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                LEGAL REVIEW
              </span>
            </div>

            <div className="p-3 rounded-xl bg-surface-container-lowest border border-outline-variant flex items-center justify-between">
              <span className="text-on-surface font-medium">Indemnification</span>
              <span className="font-mono text-[11px] font-bold text-amber-800 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                LEGAL REVIEW
              </span>
            </div>

            <div className="p-3 rounded-xl bg-surface-container-lowest border border-outline-variant flex items-center justify-between">
              <span className="text-on-surface font-medium">Governing law</span>
              <span className="font-mono text-[11px] font-bold text-amber-800 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                LEGAL REVIEW
              </span>
            </div>

            <div className="p-3 rounded-xl bg-surface-container-lowest border border-outline-variant flex items-center justify-between">
              <span className="text-on-surface font-medium">Disputes</span>
              <span className="font-mono text-[11px] font-bold text-amber-800 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                LEGAL REVIEW
              </span>
            </div>

            <div className="p-3 rounded-xl bg-surface-container-lowest border border-outline-variant flex items-center justify-between">
              <span className="text-on-surface font-medium">Privacy contact</span>
              <span className="font-mono text-[11px] font-bold text-blue-800 bg-blue-500/10 px-2 py-0.5 rounded border border-blue-500/20">
                BUSINESS INPUT
              </span>
            </div>

            <div className="p-3 rounded-xl bg-surface-container-lowest border border-outline-variant flex items-center justify-between">
              <span className="text-on-surface font-medium">Effective date</span>
              <span className="font-mono text-[11px] font-bold text-blue-800 bg-blue-500/10 px-2 py-0.5 rounded border border-blue-500/20">
                BUSINESS INPUT
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 30: FINAL CTA
         ========================================================================= */}
      <section className="p-8 sm:p-12 rounded-3xl bg-surface-container-lowest border border-outline-variant text-center max-w-4xl mx-auto shadow-xs">
        <h3 className="text-2xl sm:text-3xl font-display font-bold text-on-surface mb-3">
          Understand the platform. <br />
          <span className="text-primary">Then put it to work.</span>
        </h3>
        <p className="text-sm sm:text-base text-on-surface-variant max-w-xl mx-auto mb-8 leading-relaxed">
          Explore what DialPulse brings together across leads, communication, workflow, compliance and AI-assisted operations.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href="/product" size="lg" className="w-full sm:w-auto shadow-sm">
            Explore Product
            <ArrowRight className="w-4 h-4 ml-1.5" />
          </Button>

          <Button href="/privacy" variant="outlined" size="lg" className="w-full sm:w-auto">
            View Privacy
          </Button>
        </div>
      </section>
    </div>
  );
}
