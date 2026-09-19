import React from 'react';
import { 
  UserCheck, Database, PhoneCall, MessageSquare, HelpCircle, 
  ShieldAlert, Server, Cpu, AlertTriangle, AlertCircle, Info, CheckCircle2, 
  Clock, Globe, Lock, ArrowRight, FileText, Building2, Mail, MapPin, 
  Layers, HardDrive, RefreshCw
} from 'lucide-react';
import { Button } from '@/components/ui/Button';

export function PrivacySections() {
  return (
    <div className="space-y-16 lg:space-y-20">
      {/* =========================================================================
          SECTION 01: INFORMATION WE HANDLE
         ========================================================================= */}
      <section id="information-we-handle" className="scroll-mt-28">
        <div className="mb-6">
          <span className="text-xs font-mono font-bold tracking-widest text-primary uppercase block mb-1">
            01 / DATA INVENTORY
          </span>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-on-surface">
            Information We Handle
          </h2>
          <p className="mt-2 text-sm sm:text-base text-on-surface-variant leading-relaxed">
            DialPulse processes specific categories of data required to deliver core CRM, telephony, messaging, and compliance workflows. 
            The platform does not claim that every tenant necessarily utilizes every category listed below.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Account Info */}
          <div className="p-5 rounded-2xl bg-surface-container-lowest border border-outline-variant/80 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 mb-3">
                <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                  <UserCheck className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-on-surface">Account Information</h3>
                  <span className="text-[11px] font-mono text-primary font-medium">Operators & Agents</span>
                </div>
              </div>
              <ul className="text-xs text-on-surface-variant space-y-1.5 leading-relaxed">
                <li>• <strong className="text-on-surface">Identity:</strong> Full name, professional email address, phone number</li>
                <li>• <strong className="text-on-surface">Role & Hierarchy:</strong> Assigned RBAC tier (Owner, Team Lead, Telecaller, Admin), team ID, branch ID</li>
                <li>• <strong className="text-on-surface">Presence Telemetry:</strong> Floor status (Available, On Call, Break, Offline), last active timestamp</li>
                <li>• <strong className="text-on-surface">Credentials:</strong> Salted and hashed password hashes, cryptographic session identifiers</li>
              </ul>
            </div>
          </div>

          {/* Lead Info */}
          <div className="p-5 rounded-2xl bg-surface-container-lowest border border-outline-variant/80 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 mb-3">
                <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                  <Database className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-on-surface">Lead Information</h3>
                  <span className="text-[11px] font-mono text-primary font-medium">Prospects & Contacts</span>
                </div>
              </div>
              <ul className="text-xs text-on-surface-variant space-y-1.5 leading-relaxed">
                <li>• <strong className="text-on-surface">Contact Identifiers:</strong> First name, last name, primary and secondary phone numbers, email address</li>
                <li>• <strong className="text-on-surface">Pipeline State:</strong> Pipeline ID, stage ID, deal valuation, priority score, lead source attribution</li>
                <li>• <strong className="text-on-surface">Custom Attributes:</strong> Tenant-defined schema fields, qualification tags, custom notes</li>
                <li>• <strong className="text-on-surface">Preferences:</strong> Opt-out status, preferred channel, contact sequence tags</li>
              </ul>
            </div>
          </div>

          {/* Call Info */}
          <div className="p-5 rounded-2xl bg-surface-container-lowest border border-outline-variant/80 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 mb-3">
                <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                  <PhoneCall className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-on-surface">Call Information</h3>
                  <span className="text-[11px] font-mono text-primary font-medium">Telephony Sessions</span>
                </div>
              </div>
              <ul className="text-xs text-on-surface-variant space-y-1.5 leading-relaxed">
                <li>• <strong className="text-on-surface">Session Metadata:</strong> Originating DID caller ID, destination dialed number, call direction (inbound/outbound)</li>
                <li>• <strong className="text-on-surface">Timestamps & Timing:</strong> Initiation time, answer time, termination time, ring duration, talk duration</li>
                <li>• <strong className="text-on-surface">Dispositions:</strong> Agent outcome codes (Connected, Follow-Up, Voicemail, Busy, Lost, Not Interested), call notes</li>
                <li>• <strong className="text-on-surface">Recording URL:</strong> Stored external URI reference (raw audio binary blobs are not stored in PostgreSQL)</li>
              </ul>
            </div>
          </div>

          {/* Messaging Info */}
          <div className="p-5 rounded-2xl bg-surface-container-lowest border border-outline-variant/80 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 mb-3">
                <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-on-surface">Messaging Information</h3>
                  <span className="text-[11px] font-mono text-primary font-medium">WhatsApp & SMS Channels</span>
                </div>
              </div>
              <ul className="text-xs text-on-surface-variant space-y-1.5 leading-relaxed">
                <li>• <strong className="text-on-surface">Channel & Route:</strong> Communication type (WhatsApp, SMS), direction (inbound, outbound)</li>
                <li>• <strong className="text-on-surface">Content:</strong> Message body text, pre-approved template IDs and injected variable values</li>
                <li>• <strong className="text-on-surface">Lifecycle Telemetry:</strong> Delivery receipts (Queued, Sent, Delivered, Read, Failed), external gateway error codes</li>
                <li>• <strong className="text-on-surface">Timestamps:</strong> Dispatch, carrier handoff, and read confirmation timestamps</li>
              </ul>
            </div>
          </div>

          {/* Support Info */}
          <div className="p-5 rounded-2xl bg-surface-container-lowest border border-outline-variant/80 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 mb-3">
                <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                  <HelpCircle className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-on-surface">Support Information</h3>
                  <span className="text-[11px] font-mono text-primary font-medium">Service Operations</span>
                </div>
              </div>
              <ul className="text-xs text-on-surface-variant space-y-1.5 leading-relaxed">
                <li>• <strong className="text-on-surface">Ticket Records:</strong> Issue category, subject, priority classification, status state</li>
                <li>• <strong className="text-on-surface">Communications:</strong> Support agent and customer replies, troubleshooting notes</li>
                <li>• <strong className="text-on-surface">Timestamps:</strong> Ticket creation, first response timestamp, resolution SLA metrics</li>
              </ul>
            </div>
          </div>

          {/* Security & Audit Info */}
          <div className="p-5 rounded-2xl bg-surface-container-lowest border border-outline-variant/80 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 mb-3">
                <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                  <ShieldAlert className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-on-surface">Security & Audit Information</h3>
                  <span className="text-[11px] font-mono text-primary font-medium">Compliance & Access Logs</span>
                </div>
              </div>
              <ul className="text-xs text-on-surface-variant space-y-1.5 leading-relaxed">
                <li>• <strong className="text-on-surface">Actors:</strong> User ID, true actor ID (during authorized administrative impersonation sessions)</li>
                <li>• <strong className="text-on-surface">Network & Client:</strong> Remote IP address, browser User-Agent header, device fingerprints</li>
                <li>• <strong className="text-on-surface">Events:</strong> Authentication results, data-export operations, pre-flight DNC check blocks</li>
                <li>• <strong className="text-on-surface">Immutability:</strong> Append-only records with microsecond ISO-8601 UTC timestamps</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 02: HOW WE USE INFORMATION
         ========================================================================= */}
      <section id="how-we-use-information" className="scroll-mt-28">
        <div className="mb-6">
          <span className="text-xs font-mono font-bold tracking-widest text-primary uppercase block mb-1">
            02 / OPERATIONAL PURPOSES
          </span>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-on-surface">
            How We Use Information
          </h2>
          <p className="mt-2 text-sm sm:text-base text-on-surface-variant leading-relaxed">
            Data processed by DialPulse maps directly to verified functional, security, and technical requirements. 
            We do not monetize customer data or train public AI foundation models on tenant records.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-surface-container-lowest border border-outline-variant/80">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-6">
            <div className="flex items-start gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
              <span className="text-xs sm:text-sm text-on-surface-variant">
                <strong className="text-on-surface">Providing CRM Functionality:</strong> Managing sales pipelines, lead lifecycles, and contact details.
              </span>
            </div>
            <div className="flex items-start gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
              <span className="text-xs sm:text-sm text-on-surface-variant">
                <strong className="text-on-surface">Accounts & Sessions:</strong> Authenticating users and enforcing tenant-isolated workspaces.
              </span>
            </div>
            <div className="flex items-start gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
              <span className="text-xs sm:text-sm text-on-surface-variant">
                <strong className="text-on-surface">Calling & Messaging:</strong> Orchestrating softphone calls, message delivery, and disposition logs.
              </span>
            </div>
            <div className="flex items-start gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
              <span className="text-xs sm:text-sm text-on-surface-variant">
                <strong className="text-on-surface">Communication Controls:</strong> Programmatically enforcing DNC suppression, quiet hours, and frequency caps.
              </span>
            </div>
            <div className="flex items-start gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
              <span className="text-xs sm:text-sm text-on-surface-variant">
                <strong className="text-on-surface">Support Ticket Handling:</strong> Resolving customer service inquiries and technical requests.
              </span>
            </div>
            <div className="flex items-start gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
              <span className="text-xs sm:text-sm text-on-surface-variant">
                <strong className="text-on-surface">Reports & Insights:</strong> Aggregating agent handle time, conversion rates, and call volumes.
              </span>
            </div>
            <div className="flex items-start gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
              <span className="text-xs sm:text-sm text-on-surface-variant">
                <strong className="text-on-surface">Imports & Exports:</strong> Processing bulk CSV ingestion and authorized data exports.
              </span>
            </div>
            <div className="flex items-start gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
              <span className="text-xs sm:text-sm text-on-surface-variant">
                <strong className="text-on-surface">Security Auditing:</strong> Recording access attempts, administrative actions, and system integrity events.
              </span>
            </div>
            <div className="flex items-start gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
              <span className="text-xs sm:text-sm text-on-surface-variant">
                <strong className="text-on-surface">Asynchronous Tasks:</strong> Queueing worker jobs via Redis/BullMQ for intensive workloads.
              </span>
            </div>
            <div className="flex items-start gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
              <span className="text-xs sm:text-sm text-on-surface-variant">
                <strong className="text-on-surface">AI Assistance:</strong> Generating conversation summaries and sentiment tags where enabled.
              </span>
            </div>
            <div className="flex items-start gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
              <span className="text-xs sm:text-sm text-on-surface-variant">
                <strong className="text-on-surface">Platform Reliability:</strong> Monitoring error rates, latency spikes, and system uptime.
              </span>
            </div>
            <div className="flex items-start gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
              <span className="text-xs sm:text-sm text-on-surface-variant">
                <strong className="text-on-surface">No Cross-Tenant Tracking:</strong> Customer data is never shared across tenants or sold to brokers.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 03: CUSTOMER AND TENANT DATA
         ========================================================================= */}
      <section id="customer-and-tenant-data" className="scroll-mt-28">
        <div className="mb-6">
          <span className="text-xs font-mono font-bold tracking-widest text-primary uppercase block mb-1">
            03 / ARCHITECTURE & BOUNDARIES
          </span>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-on-surface">
            Customer and Tenant Data
          </h2>
          <p className="mt-2 text-sm sm:text-base text-on-surface-variant leading-relaxed">
            DialPulse operates on a multi-tenant relational architecture. 
            Tenant identifiers are derived strictly from verified server-side authentication context—never trusted from arbitrary client input.
          </p>
        </div>

        {/* Visual Architectural Diagram */}
        <div className="p-6 sm:p-8 rounded-2xl bg-surface-container-low border border-outline-variant/80 mb-6">
          <div className="text-xs font-mono uppercase tracking-wider text-primary font-semibold mb-4">
            VERIFIED EXECUTION PIPELINE
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-center">
            {/* Step 1 */}
            <div className="w-full md:w-auto flex-1 p-3.5 rounded-xl bg-surface-container-lowest border border-outline-variant shadow-xs">
              <span className="font-mono text-[10px] text-primary block mb-1">01. INITIATION</span>
              <span className="text-xs font-bold text-on-surface">USER</span>
              <p className="text-[11px] text-on-surface-variant mt-0.5">Authenticated request</p>
            </div>

            <div className="text-primary font-bold md:rotate-0 rotate-90 text-sm">→</div>

            {/* Step 2 */}
            <div className="w-full md:w-auto flex-1 p-3.5 rounded-xl bg-surface-container-lowest border border-outline-variant shadow-xs">
              <span className="font-mono text-[10px] text-primary block mb-1">02. VERIFY</span>
              <span className="text-xs font-bold text-on-surface">AUTHENTICATION</span>
              <p className="text-[11px] text-on-surface-variant mt-0.5">Signed token validation</p>
            </div>

            <div className="text-primary font-bold md:rotate-0 rotate-90 text-sm">→</div>

            {/* Step 3 */}
            <div className="w-full md:w-auto flex-1 p-3.5 rounded-xl bg-surface-container-lowest border border-outline-variant shadow-xs">
              <span className="font-mono text-[10px] text-primary block mb-1">03. CONTEXT</span>
              <span className="text-xs font-bold text-on-surface">SECURITY CONTEXT</span>
              <p className="text-[11px] text-on-surface-variant mt-0.5">RBAC & role binding</p>
            </div>

            <div className="text-primary font-bold md:rotate-0 rotate-90 text-sm">→</div>

            {/* Step 4 */}
            <div className="w-full md:w-auto flex-1 p-3.5 rounded-xl bg-surface-container-lowest border border-outline-variant shadow-xs">
              <span className="font-mono text-[10px] text-primary block mb-1">04. PARTITION</span>
              <span className="text-xs font-bold text-on-surface">TENANT SCOPE</span>
              <p className="text-[11px] text-on-surface-variant mt-0.5">Enforced tenant_id</p>
            </div>

            <div className="text-primary font-bold md:rotate-0 rotate-90 text-sm">→</div>

            {/* Step 5 */}
            <div className="w-full md:w-auto flex-1 p-3.5 rounded-xl bg-surface-container-lowest border border-outline-variant shadow-xs">
              <span className="font-mono text-[10px] text-primary block mb-1">05. EXECUTE</span>
              <span className="text-xs font-bold text-on-surface">DATABASE QUERY</span>
              <p className="text-[11px] text-on-surface-variant mt-0.5">Scoped SQL transaction</p>
            </div>
          </div>
        </div>

        <div className="text-xs sm:text-sm text-on-surface-variant leading-relaxed space-y-3">
          <p>
            DialPulse implements server-side tenant scoping and authorization controls designed to prevent unauthorized cross-tenant access. 
            Every database interaction attaches a foreign-key boundary (<code className="font-mono text-xs bg-surface-container px-1 py-0.5 rounded text-primary">tenant_id</code>) that prevents one customer organization from viewing, querying, or mutating the records of another.
          </p>
          <p>
            Platform staff and support engineers are restricted from accessing raw customer data unless authorized, time-bounded, and audit-logged impersonation is explicitly required to diagnose an escalated technical defect.
          </p>
        </div>
      </section>

      {/* =========================================================================
          SECTION 04: COMMUNICATIONS DATA
         ========================================================================= */}
      <section id="communications-data" className="scroll-mt-28">
        <div className="mb-6">
          <span className="text-xs font-mono font-bold tracking-widest text-primary uppercase block mb-1">
            04 / TELEPHONY & MESSAGING
          </span>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-on-surface">
            Communications Data
          </h2>
          <p className="mt-2 text-sm sm:text-base text-on-surface-variant leading-relaxed">
            Communication channels encompass phone calls, SMS notifications, and WhatsApp messaging threads. 
            Storage and relay mechanics vary depending on the underlying communication medium.
          </p>
        </div>

        <div className="space-y-4">
          {/* Calls */}
          <div className="p-5 rounded-2xl bg-surface-container-lowest border border-outline-variant/80">
            <h3 className="text-sm font-bold text-on-surface mb-2 flex items-center gap-2">
              <PhoneCall className="w-4 h-4 text-primary" />
              Voice Calls & Audio Recording URLs
            </h3>
            <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed mb-3">
              During phone calls handled by the DialPulse WebRTC softphone or connected SIP gateways, the platform generates session records containing call timestamps, durations, originating and destination numbers, and agent-entered notes.
            </p>
            <div className="p-3.5 rounded-xl bg-surface-container-low border border-outline-variant text-xs text-on-surface-variant flex items-start gap-2.5">
              <Info className="w-4 h-4 text-primary shrink-0 mt-0.5" />
              <div>
                <strong className="text-on-surface">Architectural Technical Disclosure:</strong> The primary PostgreSQL database records the call metadata and an external URI string (<code className="font-mono text-xs text-primary">recording_url</code>). Raw binary audio streams and media files are <strong>not stored directly in the primary PostgreSQL relational tables</strong>. Audio streams are captured via carrier-grade media vaults or encrypted object storage.
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="p-5 rounded-2xl bg-surface-container-lowest border border-outline-variant/80">
            <h3 className="text-sm font-bold text-on-surface mb-2 flex items-center gap-2">
              <MessageSquare className="w-4 h-4 text-primary" />
              Omnichannel Text Messages (WhatsApp & SMS)
            </h3>
            <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
              Text messages exchanged over WhatsApp and SMS contain message text, sender and recipient phone numbers, delivery status receipts (e.g., queued, delivered, read), and external gateway tracking identifiers. Message data is associated with the corresponding lead timeline within the tenant workspace.
            </p>
          </div>

          {/* Communication Preferences */}
          <div className="p-5 rounded-2xl bg-surface-container-lowest border border-outline-variant/80">
            <h3 className="text-sm font-bold text-on-surface mb-2 flex items-center gap-2">
              <Lock className="w-4 h-4 text-primary" />
              Communication Preferences & Channel Restrictions
            </h3>
            <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
              When a recipient requests an opt-out or sequence pause, DialPulse records preference flags (e.g., global opt-out, DNC block status, 30-day contact pause, or channel-specific restrictions) to block subsequent automated or manual outreach across restricted channels.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 05: SECURITY AND ACCESS CONTROL
         ========================================================================= */}
      <section id="security-and-access-control" className="scroll-mt-28">
        <div className="mb-6">
          <span className="text-xs font-mono font-bold tracking-widest text-primary uppercase block mb-1">
            05 / DEFENSE IN DEPTH
          </span>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-on-surface">
            Security and Access Control
          </h2>
          <p className="mt-2 text-sm sm:text-base text-on-surface-variant leading-relaxed">
            DialPulse implements defense-in-depth technical safeguards to protect tenant records, audit system modifications, and isolate operational roles.
          </p>
        </div>

        {/* Security Controls Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          <div className="p-4 rounded-xl bg-surface-container-lowest border border-outline-variant">
            <span className="text-xs font-bold text-on-surface block mb-1">Password Hashing</span>
            <p className="text-xs text-on-surface-variant leading-relaxed">
              Cryptographically salted and hashed user credentials; raw passwords are never logged or stored.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-surface-container-lowest border border-outline-variant">
            <span className="text-xs font-bold text-on-surface block mb-1">Short-Lived Tokens</span>
            <p className="text-xs text-on-surface-variant leading-relaxed">
              Authentication relies on time-bounded signed access tokens with rapid expiration lifecycles.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-surface-container-lowest border border-outline-variant">
            <span className="text-xs font-bold text-on-surface block mb-1">Hashed Refresh Tokens</span>
            <p className="text-xs text-on-surface-variant leading-relaxed">
              Longer-lived refresh credentials are cryptographic hashes with instant revocation mechanisms.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-surface-container-lowest border border-outline-variant">
            <span className="text-xs font-bold text-on-surface block mb-1">Secure Production Cookies</span>
            <p className="text-xs text-on-surface-variant leading-relaxed">
              Session cookies enforce <code className="font-mono text-[11px] bg-surface-container px-1 py-0.5 rounded">HttpOnly</code>, <code className="font-mono text-[11px] bg-surface-container px-1 py-0.5 rounded">Secure</code>, and <code className="font-mono text-[11px] bg-surface-container px-1 py-0.5 rounded">SameSite</code> headers.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-surface-container-lowest border border-outline-variant">
            <span className="text-xs font-bold text-on-surface block mb-1">API Rate Limiting</span>
            <p className="text-xs text-on-surface-variant leading-relaxed">
              Multi-tiered rate limiters on public and authenticated routes protect against brute-force attacks.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-surface-container-lowest border border-outline-variant">
            <span className="text-xs font-bold text-on-surface block mb-1">Role-Based Access (RBAC)</span>
            <p className="text-xs text-on-surface-variant leading-relaxed">
              Granular permission boundaries enforce least-privilege access across telecallers, leads, and admins.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-surface-container-lowest border border-outline-variant">
            <span className="text-xs font-bold text-on-surface block mb-1">Tenant Database Scoping</span>
            <p className="text-xs text-on-surface-variant leading-relaxed">
              Relational queries enforce mandatory tenant foreign-key scoping at the database access layer.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-surface-container-lowest border border-outline-variant">
            <span className="text-xs font-bold text-on-surface block mb-1">Immutable Audit Logging</span>
            <p className="text-xs text-on-surface-variant leading-relaxed">
              Append-only audit records track authentication, export, and compliance decisions with actor attribution.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-surface-container-lowest border border-outline-variant">
            <span className="text-xs font-bold text-on-surface block mb-1">Injection Defenses</span>
            <p className="text-xs text-on-surface-variant leading-relaxed">
              Input sanitization and spreadsheet formula escaping (<code className="font-mono text-[11px] bg-surface-container px-1 py-0.5 rounded">=, +, -, @</code>) protect CSV export artifacts.
            </p>
          </div>
        </div>

        {/* Visual Callout Card */}
        <div className="p-5 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-start gap-3.5">
          <AlertTriangle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm text-amber-900 leading-relaxed">
            <strong className="font-semibold block mb-0.5">Responsibility Boundary:</strong>
            Security controls are technical safeguards. They do not replace the customer’s own security, privacy, access management, or compliance responsibilities.
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 06: AI PROCESSING
         ========================================================================= */}
      <section id="ai-processing" className="scroll-mt-28">
        <div className="mb-6">
          <span className="text-xs font-mono font-bold tracking-widest text-primary uppercase block mb-1">
            06 / ARTIFICIAL INTELLIGENCE
          </span>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-on-surface">
            AI, with boundaries.
          </h2>
          <p className="mt-2 text-sm sm:text-base text-on-surface-variant leading-relaxed">
            DialPulse utilizes Google Gemini through server-side application infrastructure for supported AI capabilities. 
            Inference requests pass through strict permission, quota, and data sanitization controls before dispatch.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-surface-container-lowest border border-outline-variant/80 mb-6 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-surface-container-low border border-outline-variant">
              <span className="text-xs font-bold text-on-surface block mb-1">Supported AI Features</span>
              <ul className="text-xs text-on-surface-variant space-y-1">
                <li>• Speech-to-text audio transcription</li>
                <li>• Conversation summarization (key takeaways)</li>
                <li>• Sentiment and customer intent classification</li>
                <li>• Follow-up message and email draft assistance</li>
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-surface-container-low border border-outline-variant">
              <span className="text-xs font-bold text-on-surface block mb-1">Enforced Guardrails</span>
              <ul className="text-xs text-on-surface-variant space-y-1">
                <li>• Tenant feature permission checked before invocation</li>
                <li>• Tenant compute quota and usage limits verified</li>
                <li>• API credentials remain strictly server-side</li>
                <li>• DialPulse does not train custom models on tenant data</li>
              </ul>
            </div>
          </div>

          {/* Technical Distinction Disclosure */}
          <div className="p-4 rounded-xl bg-surface-container border border-outline-variant text-xs sm:text-sm text-on-surface-variant leading-relaxed">
            <strong className="text-on-surface font-semibold">Technical Pipeline Distinction:</strong> Text prompts are processed through a software sanitization layer designed to detect and redact recognizable email address and phone number patterns prior to external AI dispatch. Audio submitted for transcription follows a different processing path and is sent as audio data directly to the configured Gemini transcription service.
          </div>
        </div>

        {/* Required Confirmation Callout */}
        <div className="p-5 rounded-2xl bg-surface-container-low border border-amber-500/40 flex items-start gap-3.5">
          <AlertCircle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
            <span className="font-mono text-xs text-amber-800 font-bold uppercase tracking-wider block mb-1">
              PROVIDER TERMS REQUIRE CONFIRMATION
            </span>
            The exact contractual treatment of prompts, audio, retention, model-training restrictions, and processing location depends on the Google AI service configuration and applicable commercial agreement used by DialPulse. Final legal wording is pending verification. DialPulse makes no unverified zero-retention claims.
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 07: SHARING AND SERVICE PROVIDERS
         ========================================================================= */}
      <section id="sharing-and-service-providers" className="scroll-mt-28">
        <div className="mb-6">
          <span className="text-xs font-mono font-bold tracking-widest text-primary uppercase block mb-1">
            07 / INFRASTRUCTURE & VENDORS
          </span>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-on-surface">
            Sharing and Service Providers
          </h2>
          <p className="mt-2 text-sm sm:text-base text-on-surface-variant leading-relaxed">
            To provide core services, DialPulse shares specific data payloads with verified infrastructure and communication providers.
          </p>
        </div>

        {/* Subprocessor Table */}
        <div className="overflow-x-auto rounded-2xl border border-outline-variant bg-surface-container-lowest">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead>
              <tr className="border-b border-outline-variant bg-surface-container-low text-on-surface font-semibold">
                <th className="py-3.5 px-4">Provider</th>
                <th className="py-3.5 px-4">Purpose</th>
                <th className="py-3.5 px-4">Information Involved</th>
                <th className="py-3.5 px-4">Current Verification Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant/60 text-on-surface-variant">
              <tr>
                <td className="py-3.5 px-4 font-semibold text-on-surface whitespace-nowrap">
                  Google Cloud / Gemini
                </td>
                <td className="py-3.5 px-4">AI inference and transcription</td>
                <td className="py-3.5 px-4">Sanitized text / audio buffers where applicable</td>
                <td className="py-3.5 px-4">
                  <span className="inline-flex items-center gap-1 font-mono text-[11px] text-amber-800 bg-amber-500/10 px-2 py-0.5 rounded">
                    Legal/provider terms require confirmation
                  </span>
                </td>
              </tr>
              <tr>
                <td className="py-3.5 px-4 font-semibold text-on-surface whitespace-nowrap">
                  Meta / WhatsApp Cloud API
                </td>
                <td className="py-3.5 px-4">WhatsApp communication relay</td>
                <td className="py-3.5 px-4">Phone numbers and message content</td>
                <td className="py-3.5 px-4">
                  <span className="inline-flex items-center gap-1 font-mono text-[11px] text-amber-800 bg-amber-500/10 px-2 py-0.5 rounded">
                    Integration/business terms require confirmation
                  </span>
                </td>
              </tr>
              <tr>
                <td className="py-3.5 px-4 font-semibold text-on-surface whitespace-nowrap">
                  Google Cloud Platform
                </td>
                <td className="py-3.5 px-4">Hosting, application runtime & managed database</td>
                <td className="py-3.5 px-4">Application and tenant data as applicable</td>
                <td className="py-3.5 px-4">
                  <span className="inline-flex items-center gap-1 font-mono text-[11px] text-primary bg-primary/10 px-2 py-0.5 rounded">
                    Deployment configuration determines exact region
                  </span>
                </td>
              </tr>
              <tr>
                <td className="py-3.5 px-4 font-semibold text-on-surface whitespace-nowrap">
                  Redis / Queue Infrastructure
                </td>
                <td className="py-3.5 px-4">Rate limiting & asynchronous job processing</td>
                <td className="py-3.5 px-4">Session, rate-limit, and background job metadata</td>
                <td className="py-3.5 px-4">
                  <span className="inline-flex items-center gap-1 font-mono text-[11px] text-primary bg-primary/10 px-2 py-0.5 rounded">
                    Infrastructure configuration dependent
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* =========================================================================
          SECTION 08: RETENTION AND DELETION
         ========================================================================= */}
      <section id="retention-and-deletion" className="scroll-mt-28">
        <div className="mb-6">
          <span className="text-xs font-mono font-bold tracking-widest text-primary uppercase block mb-1">
            08 / LIFECYCLE & DISPOSAL
          </span>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-on-surface">
            Retention and Deletion
          </h2>
          <div className="mt-2 p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-xs sm:text-sm text-amber-900 font-medium">
            <strong>Important Privacy Fact:</strong> Current application behavior and final contractual retention periods are not the same thing. 
            The table below reflects current technical reality in the codebase versus items pending business and legal finalization.
          </div>
        </div>

        {/* Retention Table */}
        <div className="overflow-x-auto rounded-2xl border border-outline-variant bg-surface-container-lowest">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead>
              <tr className="border-b border-outline-variant bg-surface-container-low text-on-surface font-semibold">
                <th className="py-3.5 px-4">Data Category</th>
                <th className="py-3.5 px-4">Current Technical Behavior</th>
                <th className="py-3.5 px-4">Automatic Purge</th>
                <th className="py-3.5 px-4">Final Policy Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant/60 text-on-surface-variant">
              <tr>
                <td className="py-3.5 px-4 font-semibold text-on-surface">Lead records</td>
                <td className="py-3.5 px-4">Hard deletion endpoint exists in application code</td>
                <td className="py-3.5 px-4">No scheduled purge for ordinary retained records</td>
                <td className="py-3.5 px-4 font-mono text-[11px] text-amber-800">Requires business/legal confirmation</td>
              </tr>
              <tr>
                <td className="py-3.5 px-4 font-semibold text-on-surface">Calls</td>
                <td className="py-3.5 px-4">Stored in application database records</td>
                <td className="py-3.5 px-4">No automated purge identified in code</td>
                <td className="py-3.5 px-4 font-mono text-[11px] text-amber-800">Retention TBD</td>
              </tr>
              <tr>
                <td className="py-3.5 px-4 font-semibold text-on-surface">Messages</td>
                <td className="py-3.5 px-4">Stored in application database records</td>
                <td className="py-3.5 px-4">No automated purge identified in code</td>
                <td className="py-3.5 px-4 font-mono text-[11px] text-amber-800">Retention TBD</td>
              </tr>
              <tr>
                <td className="py-3.5 px-4 font-semibold text-on-surface">Audit logs</td>
                <td className="py-3.5 px-4">Stored in append-only tables for security governance</td>
                <td className="py-3.5 px-4">No automated purge identified in code</td>
                <td className="py-3.5 px-4 font-mono text-[11px] text-amber-800">Retention TBD</td>
              </tr>
              <tr>
                <td className="py-3.5 px-4 font-semibold text-on-surface">Sessions</td>
                <td className="py-3.5 px-4">Token expiration and revocation mechanisms exist</td>
                <td className="py-3.5 px-4">Session lifecycle is technically controlled</td>
                <td className="py-3.5 px-4 font-mono text-[11px] text-amber-800">Final retention wording TBD</td>
              </tr>
              <tr>
                <td className="py-3.5 px-4 font-semibold text-on-surface">Exports</td>
                <td className="py-3.5 px-4">Generated through asynchronous background worker jobs</td>
                <td className="py-3.5 px-4">Storage lifecycle requires infrastructure confirmation</td>
                <td className="py-3.5 px-4 font-mono text-[11px] text-amber-800">TBD</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* =========================================================================
          SECTION 09: COMMUNICATION PREFERENCES AND COMPLIANCE
         ========================================================================= */}
      <section id="communication-preferences-and-compliance" className="scroll-mt-28">
        <div className="mb-6">
          <span className="text-xs font-mono font-bold tracking-widest text-primary uppercase block mb-1">
            09 / GOVERNANCE GUARDRAILS
          </span>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-on-surface">
            Communication Preferences and Compliance
          </h2>
          <p className="mt-2 text-sm sm:text-base text-on-surface-variant leading-relaxed">
            DialPulse provides software controls that allow organizations to define and enforce communication policies across voice and messaging channels.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          <div className="p-4 rounded-xl bg-surface-container-lowest border border-outline-variant">
            <span className="text-xs font-bold text-on-surface block mb-1">Global Opt-Out</span>
            <p className="text-xs text-on-surface-variant leading-relaxed">
              Programmatic suppression preventing future communications across all channels once a contact opts out.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-surface-container-lowest border border-outline-variant">
            <span className="text-xs font-bold text-on-surface block mb-1">Blocked / Zero-Bypass DNC</span>
            <p className="text-xs text-on-surface-variant leading-relaxed">
              Pre-flight checks evaluate Do-Not-Call suppression tables prior to softphone call setup or SMS dispatch.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-surface-container-lowest border border-outline-variant">
            <span className="text-xs font-bold text-on-surface block mb-1">Temporary Sequence Pause</span>
            <p className="text-xs text-on-surface-variant leading-relaxed">
              30-day contact pause flags prevent automated cadence steps when a lead requests a temporary hold.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-surface-container-lowest border border-outline-variant">
            <span className="text-xs font-bold text-on-surface block mb-1">Channel Restriction</span>
            <p className="text-xs text-on-surface-variant leading-relaxed">
              Selective channel restrictions (e.g., WhatsApp allowed, voice calls suppressed) based on customer preference.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-surface-container-lowest border border-outline-variant">
            <span className="text-xs font-bold text-on-surface block mb-1">Frequency & Fatigue Caps</span>
            <p className="text-xs text-on-surface-variant leading-relaxed">
              Configurable limits on outreach attempts per 24-hour window to protect contacts from contact fatigue.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-surface-container-lowest border border-outline-variant">
            <span className="text-xs font-bold text-on-surface block mb-1">Timezone Quiet Hours</span>
            <p className="text-xs text-on-surface-variant leading-relaxed">
              Timezone-aware locks disable outbound calling outside permitted operational windows (e.g., 9:00 AM – 8:00 PM).
            </p>
          </div>
        </div>

        {/* Crucial Disclaimer Callout */}
        <div className="p-5 rounded-2xl bg-surface-container border border-outline-variant text-xs sm:text-sm text-on-surface-variant leading-relaxed">
          <strong className="text-on-surface font-semibold block mb-1">Regulatory Non-Liability Statement:</strong>
          These controls should not be interpreted as a legal conclusion that a customer’s communications are compliant with every applicable telecommunications, privacy, or messaging law (including TRAI/TCCCPR or TCPA requirements). DialPulse provides software capabilities; legal compliance remains the operating customer’s responsibility.
        </div>
      </section>

      {/* =========================================================================
          SECTION 10: INTERNATIONAL DATA HANDLING
         ========================================================================= */}
      <section id="international-data-handling" className="scroll-mt-28">
        <div className="mb-6">
          <span className="text-xs font-mono font-bold tracking-widest text-primary uppercase block mb-1">
            10 / GEOGRAPHIC BOUNDARIES
          </span>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-on-surface">
            International Data Handling
          </h2>
          <p className="mt-2 text-sm sm:text-base text-on-surface-variant leading-relaxed">
            Data processing geography depends on customer deployment models and the cloud regions of connected third-party infrastructure.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-surface-container-lowest border border-outline-variant/80 mb-6 space-y-3 text-xs sm:text-sm text-on-surface-variant leading-relaxed">
          <p>
            • Some third-party services may process information outside India depending on specific system configuration and carrier routing.
          </p>
          <p>
            • Current technical documentation identifies Google AI infrastructure and external telecommunications communication providers.
          </p>
          <p>
            • Exact residency boundaries, international transfer mechanisms, and contractual data transfer protections require legal confirmation.
          </p>
        </div>

        {/* Data Residency Callout */}
        <div className="p-5 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-start gap-3.5">
          <Globe className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm text-amber-900 leading-relaxed">
            <span className="font-mono text-xs text-amber-800 font-bold uppercase tracking-wider block mb-0.5">
              DATA RESIDENCY: TO BE CONFIRMED
            </span>
            DialPulse makes no blanket claim that all data remains exclusively within India or any single regional perimeter until enterprise dedicated hosting terms are contractually finalized.
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 11: PRIVACY RIGHTS AND REQUESTS
         ========================================================================= */}
      <section id="privacy-rights-and-requests" className="scroll-mt-28">
        <div className="mb-6">
          <span className="text-xs font-mono font-bold tracking-widest text-primary uppercase block mb-1">
            11 / DATA SUBJECT RIGHTS
          </span>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-on-surface">
            Privacy Rights and Requests
          </h2>
          <p className="mt-2 text-sm sm:text-base text-on-surface-variant leading-relaxed">
            Applicable privacy rights depend on the user’s role, the applicable law, the customer’s relationship with DialPulse, and the nature of the data involved.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div className="p-4 rounded-xl bg-surface-container-lowest border border-outline-variant">
            <span className="text-xs font-bold text-on-surface block mb-1">Access</span>
            <p className="text-xs text-on-surface-variant leading-relaxed">
              Reviewing the personal data records held within active tenant accounts.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-surface-container-lowest border border-outline-variant">
            <span className="text-xs font-bold text-on-surface block mb-1">Correction</span>
            <p className="text-xs text-on-surface-variant leading-relaxed">
              Updating inaccurate phone numbers, names, or qualification attributes.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-surface-container-lowest border border-outline-variant">
            <span className="text-xs font-bold text-on-surface block mb-1">Deletion</span>
            <p className="text-xs text-on-surface-variant leading-relaxed">
              Requesting lead removal through tenant administrative deletion workflows.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-surface-container-lowest border border-outline-variant">
            <span className="text-xs font-bold text-on-surface block mb-1">Portability</span>
            <p className="text-xs text-on-surface-variant leading-relaxed">
              Exporting structured contact records via authorized CSV extraction.
            </p>
          </div>
        </div>

        {/* Unconfirmed Request Process */}
        <div className="p-5 rounded-2xl bg-surface-container-low border border-outline-variant/80 text-xs sm:text-sm text-on-surface-variant flex items-start gap-3.5">
          <Info className="w-5 h-5 text-primary shrink-0 mt-0.5" />
          <div>
            <strong className="text-on-surface font-semibold block mb-0.5">Privacy Requests Workflow:</strong>
            Because DialPulse functions primarily as a technology platform for business tenants, end-consumer rights requests should generally be directed to the customer organization controlling the campaign. Direct request workflows and contact details are <span className="font-mono text-xs text-amber-800 bg-amber-100/60 px-1 py-0.5 rounded">To be confirmed</span> pending DPO designation.
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 12: CUSTOMER RESPONSIBILITIES
         ========================================================================= */}
      <section id="customer-responsibilities" className="scroll-mt-28">
        <div className="mb-6">
          <span className="text-xs font-mono font-bold tracking-widest text-primary uppercase block mb-1">
            12 / OPERATING BOUNDARIES
          </span>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-on-surface">
            Customer and Tenant Responsibilities
          </h2>
          <p className="mt-2 text-sm sm:text-base text-on-surface-variant leading-relaxed">
            Customers control the data they upload, manage, and distribute through DialPulse. 
            Customers are independently responsible for maintaining lawful operating practices.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-surface-container-lowest border border-outline-variant/80">
          <ul className="text-xs sm:text-sm text-on-surface-variant space-y-2.5 leading-relaxed">
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
              <span><strong className="text-on-surface">Lawful Collection:</strong> Ensuring all lead lists and contact records are collected through lawful and verifiable means.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
              <span><strong className="text-on-surface">Consent & Notice:</strong> Providing required notices to prospects regarding outreach intent and data processing.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
              <span><strong className="text-on-surface">Call Recording Disclosures:</strong> Delivering verbal or automated recording notices where required by jurisdiction.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
              <span><strong className="text-on-surface">Communication Permissions:</strong> Managing commercial message templates and sender identity headers.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
              <span><strong className="text-on-surface">Credential Hygiene:</strong> Provisioning least-privilege employee accounts and revoking departing staff access.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
              <span><strong className="text-on-surface">Export Safeguarding:</strong> Securely handling and storing any CSV records or report artifacts downloaded from the CRM.</span>
            </li>
          </ul>
        </div>
      </section>

      {/* =========================================================================
          SECTION 13: CHANGES & CONTACT
         ========================================================================= */}
      <section id="changes-and-contact" className="scroll-mt-28">
        <div className="mb-6">
          <span className="text-xs font-mono font-bold tracking-widest text-primary uppercase block mb-1">
            13 / ADMINISTRATION & CONTACT
          </span>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-on-surface">
            Changes to This Policy & Contact
          </h2>
          <p className="mt-2 text-sm sm:text-base text-on-surface-variant leading-relaxed">
            We may update this Privacy Policy from time to time to reflect changes in the DialPulse platform, services, legal requirements, or data practices.
          </p>
        </div>

        {/* Timestamps */}
        <div className="flex flex-wrap items-center gap-4 mb-8 p-4 rounded-xl bg-surface-container-low border border-outline-variant text-xs font-mono text-on-surface-variant">
          <div>
            <span className="text-outline block text-[10px]">POLICY STATUS</span>
            <span className="font-semibold text-on-surface">Draft for Legal Review</span>
          </div>
          <div className="h-6 w-px bg-outline-variant hidden sm:block" />
          <div>
            <span className="text-outline block text-[10px]">LAST UPDATED</span>
            <span className="font-semibold text-on-surface">To be confirmed</span>
          </div>
          <div className="h-6 w-px bg-outline-variant hidden sm:block" />
          <div>
            <span className="text-outline block text-[10px]">EFFECTIVE DATE</span>
            <span className="font-semibold text-on-surface">To be confirmed</span>
          </div>
        </div>

        {/* Contact Information Card */}
        <div className="p-6 sm:p-8 rounded-2xl bg-surface-container-lowest border border-outline-variant/80">
          <h3 className="text-lg font-display font-bold text-on-surface mb-2">
            Questions about privacy?
          </h3>
          <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed mb-6">
            Official communication channels and designated legal representatives will be published here upon final policy approval:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-surface-container-low border border-outline-variant">
              <div className="flex items-center gap-2 text-primary text-xs font-mono font-bold mb-1">
                <Mail className="w-3.5 h-3.5" />
                <span>PRIVACY CONTACT</span>
              </div>
              <span className="text-sm font-semibold text-on-surface block">To be confirmed</span>
              <span className="text-[11px] text-on-surface-variant">Pending DPO inbox setup</span>
            </div>

            <div className="p-4 rounded-xl bg-surface-container-low border border-outline-variant">
              <div className="flex items-center gap-2 text-primary text-xs font-mono font-bold mb-1">
                <Building2 className="w-3.5 h-3.5" />
                <span>LEGAL ENTITY</span>
              </div>
              <span className="text-sm font-semibold text-on-surface block">To be confirmed</span>
              <span className="text-[11px] text-on-surface-variant">Corporate registry disclosure</span>
            </div>

            <div className="p-4 rounded-xl bg-surface-container-low border border-outline-variant">
              <div className="flex items-center gap-2 text-primary text-xs font-mono font-bold mb-1">
                <MapPin className="w-3.5 h-3.5" />
                <span>REGISTERED ADDRESS</span>
              </div>
              <span className="text-sm font-semibold text-on-surface block">To be confirmed</span>
              <span className="text-[11px] text-on-surface-variant">Official headquarters location</span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          FINAL CTA
         ========================================================================= */}
      <section className="pt-8">
        <div className="p-8 sm:p-12 rounded-[28px] bg-gradient-to-br from-surface-container to-surface-container-high border border-outline-variant/80 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="max-w-xl">
            <span className="text-xs font-mono uppercase tracking-widest text-primary font-bold block mb-2">
              OPERATIONS WITH BOUNDARIES
            </span>
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-on-surface leading-tight mb-2">
              Built around customer operations. <br />
              Built with boundaries.
            </h3>
            <p className="text-sm text-on-surface-variant leading-relaxed">
              Explore how DialPulse brings leads, communication, workflow, compliance, and AI-assisted work together.
            </p>
          </div>

          <div className="shrink-0">
            <Button size="lg" href="/product" className="h-12 px-8">
              Explore DialPulse
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
