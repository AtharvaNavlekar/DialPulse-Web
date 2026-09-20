/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type SolutionStatus = 'IMPLEMENTED' | 'DOCUMENTED' | 'PLANNED';

export interface SolutionWorkflowStep {
  step: number;
  title: string;
  description: string;
}

export interface SolutionCapability {
  title: string;
  description: string;
}

export interface SolutionBenefit {
  title: string;
  description: string;
}

export interface SolutionUseCase {
  title: string;
  audience: string;
  scenario: string;
  outcome: string;
}

export interface SolutionProblem {
  headline: string;
  description: string;
  frictions: string[];
  whyItPersists: string;
}

export interface SolutionApproach {
  headline: string;
  description: string;
}

export interface SolutionDefinition {
  id: string;
  slug: string;
  number: string;
  title: string;
  headline: string;
  shortDescription: string;
  badge: string;
  category: string;
  icon: string;
  status: SolutionStatus;
  statusBadge: string;
  audience: string;
  problem: SolutionProblem;
  approach: SolutionApproach;
  workflow: SolutionWorkflowStep[];
  capabilities: SolutionCapability[];
  benefits: SolutionBenefit[];
  practicalUseCases: SolutionUseCase[];
  modulesUsed: string[];
  relatedFeatures: string[];
  mockupType: 'pipeline' | 'calls' | 'messaging' | 'tickets' | 'teams' | 'reports' | 'compliance' | 'ai';
  mockupDisclaimer: string;
}

export const SOLUTIONS_DATA: SolutionDefinition[] = [
  {
    id: 'lead-operations',
    slug: 'lead-operations',
    number: '01',
    badge: 'LEAD INGESTION & PIPELINE',
    title: 'Lead Operations',
    headline: 'Deterministic lead intake, custom schema mapping, and pipeline progression.',
    shortDescription: 'Eliminate duplicate contacts, spreadsheet juggling, and delayed lead response times with centralized pipeline ownership.',
    icon: 'Users',
    category: 'Pipeline & Ingestion',
    status: 'IMPLEMENTED',
    statusBadge: 'Core Platform Workflow',
    audience: 'Inside Sales Teams, Revenue Operations, Telecalling Managers',
    problem: {
      headline: 'Customer inquiries arrive fragmented across webhooks, lead gen portals, and spreadsheets.',
      description: 'When leads arrive in unstandardized formats across multiple sources, reps spend valuable working time manually copying data into personal spreadsheets. Without automated deduplication or ownership rules, high-intent prospects stall or get contacted multiple times by different telecallers.',
      frictions: [
        'Duplicate contacts across simultaneous outreach campaigns cause customer confusion.',
        'Inquiries sit unassigned in inbox threads or shared folders while prospect interest cools.',
        'Lack of schema validation leads to missing phone numbers, invalid fields, and broken follow-ups.'
      ],
      whyItPersists: 'Most sales teams attempt to solve lead ingestion with ad-hoc spreadsheets or complex third-party integration pipelines that fail to enforce schema constraints or duplicate detection at the point of entry.'
    },
    approach: {
      headline: 'A unified ingestion engine with custom property mapping and deterministic assignment.',
      description: 'DialPulse normalizes incoming contacts through pre-flight validation and phone deduplication. Every lead is automatically routed into a custom-configured sales pipeline with clear telecaller assignment and complete interaction history.'
    },
    workflow: [
      { step: 1, title: 'Multi-Source Ingestion', description: 'Capture contacts through webhooks, direct API, or background CSV imports.' },
      { step: 2, title: 'Schema Normalization & Deduping', description: 'Validate phone numbers in E.164 format, map custom attributes, and suppress duplicate records.' },
      { step: 3, title: 'Deterministic Team Assignment', description: 'Route leads to telecallers based on territory, campaign rules, or round-robin logic.' },
      { step: 4, title: 'Pipeline Stage Progression', description: 'Advance prospects through visual stages while maintaining an immutable audit log of interactions.' }
    ],
    capabilities: [
      { title: 'Custom Property Schema Builder', description: 'Define company-specific qualification fields, deal values, and status tags.' },
      { title: 'Pre-Ingestion Deduplication', description: 'Match phone numbers and email addresses before records reach dialing queues.' },
      { title: 'Rule-Based Ownership Routing', description: 'Assign incoming prospects immediately to active telecallers without manual dispatch.' },
      { title: 'Tenant Data Isolation', description: 'Maintain all lead data strictly within your tenant partition with zero cross-tenant contamination.' }
    ],
    benefits: [
      { title: 'Faster First-Touch Response', description: 'Eliminate administrative delays so telecallers engage fresh prospects immediately.' },
      { title: 'Clean Database Hygiene', description: 'Prevent corrupt records, misformatted phone numbers, and duplicate entries from entering your CRM.' },
      { title: 'Complete Ownership Accountability', description: 'Ensure every inquiry has a designated telecaller and team lead responsible for follow-up.' }
    ],
    practicalUseCases: [
      { title: 'Inbound Webhook Routing', audience: 'Growth & Inbound Teams', scenario: 'High-volume web form submissions flowing into marketing campaigns.', outcome: 'Contacts are deduplicated and assigned to telecallers in real time.' },
      { title: 'Batch CSV Lead Ingestion', audience: 'Operations & Event Teams', scenario: 'Ingesting attendee contacts following an industry conference.', outcome: 'Pre-flight field mapping validates columns and imports records asynchronously.' },
      { title: 'Territory-Based Pipeline Sorting', audience: 'Regional Sales Directors', scenario: 'Distributing nationwide inquiries across East and West Coast telecalling squads.', outcome: 'Automatic area-code filtering routes leads to regional team queues.' }
    ],
    modulesUsed: ['Leads', 'Imports & Exports', 'Teams', 'Communication', 'Reports'],
    relatedFeatures: ['leads', 'imports-exports', 'teams', 'compliance'],
    mockupType: 'pipeline',
    mockupDisclaimer: 'Abstracted DOM demonstration • Illustrates operational lead pipeline and custom schema workflow.'
  },
  {
    id: 'follow-up-control',
    slug: 'follow-up-control',
    number: '02',
    badge: 'CADENCE & REMINDERS',
    title: 'Follow-up Control',
    headline: 'Structured call dispositions, automated callback reminders, and fallback outreach.',
    shortDescription: 'Prevent warm leads from stalling with mandatory post-call outcome logging and automated multi-channel follow-up cadences.',
    icon: 'Clock',
    category: 'Cadence & Dispositions',
    status: 'DOCUMENTED',
    statusBadge: 'Documented Architecture',
    audience: 'Telecallers, Account Executives, Inside Sales Supervisors',
    problem: {
      headline: 'Deals stall when agents lack structured callback cadences and outcome accountability.',
      description: 'In high-volume outreach, agents juggle dozens of conversations daily. When callbacks rely on mental notes or paper scratchpads, scheduled follow-ups are missed, warm prospects cool off, and pipeline velocity collapses.',
      frictions: [
        'Unanswered calls receive no immediate follow-up, ending the conversation prematurely.',
        'Agents forget to call back at promised times, causing qualified buyers to sign with competitors.',
        'Lack of mandatory call outcomes leaves managers blind to whether calls actually connected.'
      ],
      whyItPersists: 'Standard CRMs treat call logging as an optional manual task. When telecallers are rushing to their next dial, logging gets skipped unless the software enforces disposition tagging directly into the workflow.'
    },
    approach: {
      headline: 'Mandatory outcome tagging paired with automated callback schedules.',
      description: 'Every completed call triggers a required disposition selection (Interested, Call Back, Voicemail, Not Interested). If a call goes unanswered, one-click fallback templates dispatch via WhatsApp or SMS, and follow-up alerts surface directly in the agent’s drawer when due.'
    },
    workflow: [
      { step: 1, title: 'Call Connection / Termination', description: 'Telecaller dials prospect; call session ends and softphone interface displays disposition modal.' },
      { step: 2, title: 'Mandatory Disposition Logging', description: 'Agent tags outcome and sets exact callback date/time before taking the next queue item.' },
      { step: 3, title: 'One-Click Fallback Nudge', description: 'If unanswered, pre-approved WhatsApp or SMS template is dispatched immediately.' },
      { step: 4, title: 'Timely Callback Execution', description: 'System triggers high-priority reminder in telecaller queue when callback window arrives.' }
    ],
    capabilities: [
      { title: 'Enforced Disposition Workflows', description: 'Prevent reps from advancing without categorizing call outcome and recording context.' },
      { title: 'Scheduled Callback Triggers', description: 'Surface overdue and upcoming follow-ups at the exact committed time.' },
      { title: 'Instant Template Dispatch', description: 'Trigger approved WhatsApp or SMS messages directly from the call wrap-up screen.' },
      { title: 'Overdue Follow-up Telemetry', description: 'Alert supervisors when scheduled callbacks exceed established team SLA windows.' }
    ],
    benefits: [
      { title: 'Zero Forgotten Prospects', description: 'Keep every interested buyer on an active schedule until formal qualification or closure.' },
      { title: 'Standardized Outcome Data', description: 'Collect reliable objection and connection metrics across your entire sales organization.' },
      { title: 'Sustained Pipeline Momentum', description: 'Maintain consistent follow-up rhythms that prevent deals from stagnating.' }
    ],
    practicalUseCases: [
      { title: 'Unanswered Call Recovery', audience: 'Outbound Telecallers', scenario: 'A prospect does not answer an initial introductory phone call.', outcome: 'Agent tags Unanswered and dispatches a pre-written WhatsApp greeting in one click.' },
      { title: 'Specific Callback Commitments', audience: 'Inside Sales Reps', scenario: 'Prospect requests a callback Tuesday at 2:00 PM after budget review.', outcome: 'System schedules an alert in the agent queue and moves lead to Callback Scheduled.' },
      { title: 'Overdue Queue Auditing', audience: 'Team Leads', scenario: 'Ensuring telecallers adhere to follow-up timelines across active opportunities.', outcome: 'Supervisor filters queue by Overdue Follow-ups to rebalance workloads.' }
    ],
    modulesUsed: ['Calls', 'Messaging', 'Leads', 'Compliance'],
    relatedFeatures: ['calls', 'messaging', 'leads', 'compliance'],
    mockupType: 'calls',
    mockupDisclaimer: 'Abstracted DOM demonstration • Illustrates mandatory disposition and follow-up cadence workflow.'
  },
  {
    id: 'customer-communication',
    slug: 'customer-communication',
    number: '03',
    badge: 'OMNICHANNEL & SOFTPHONE',
    title: 'Customer Communication',
    headline: 'Unified in-browser telephony, WhatsApp, and SMS tied to a single customer timeline.',
    shortDescription: 'Consolidate voice calling and multi-channel messaging into an embedded browser workspace with complete chronological context.',
    icon: 'PhoneCall',
    category: 'Voice & Messaging',
    status: 'DOCUMENTED',
    statusBadge: 'Documented Architecture',
    audience: 'High-Volume Telecalling Squads, Sales Representatives, Support Operations',
    problem: {
      headline: 'Customer dialogue fractures across personal phones, external PBX apps, and separate messaging windows.',
      description: 'When telecallers use personal mobile phones or disconnected softphones, call recordings, notes, and WhatsApp messages never make it back into the CRM. When team members change roles, vital customer context disappears.',
      frictions: [
        'Context switching between CRM tabs, desktop dialers, and WhatsApp Web degrades agent focus.',
        'Zero centralized recording or transcript history for customer dispute resolution or coaching.',
        'Inconsistent messaging templates sent across personal employee channels damage brand credibility.'
      ],
      whyItPersists: 'Legacy telephony solutions were built as standalone PBX hardware systems, forcing sales software to rely on fragile third-party integrations that frequently drop call context.'
    },
    approach: {
      headline: 'Direct in-browser WebRTC voice telephony and multi-channel messaging.',
      description: 'DialPulse embeds softphone telephony directly into the CRM interface. One click initiates calls via WebRTC, records dual-track audio, and syncs SMS and WhatsApp communications into an immutable chronological timeline.'
    },
    workflow: [
      { step: 1, title: 'One-Click In-Browser Dialing', description: 'Agent clicks phone number to initiate crystal-clear WebRTC voice call with zero external hardware.' },
      { step: 2, title: 'Contextual On-Call Notes', description: 'Review past messages and log real-time notes while the call is actively connected.' },
      { step: 3, title: 'Automatic Media Attachment', description: 'Dual-track call recording is attached to the contact timeline upon call completion.' },
      { step: 4, title: 'Multi-Channel Message Threading', description: 'Send and receive SMS or WhatsApp updates within the exact same chronological record.' }
    ],
    capabilities: [
      { title: 'In-Browser WebRTC Softphone', description: 'Eliminates desk phones and desktop client software with native browser audio.' },
      { title: 'Synchronized Omnichannel Timeline', description: 'Display voice calls, SMS, WhatsApp, and internal notes in one unified feed.' },
      { title: 'Pre-Approved Message Templates', description: 'Ensure brand consistency with parameterized multi-channel templates.' },
      { title: 'Secure Media Archival', description: 'Store dual-track call audio partitions under your tenant-isolated database encryption.' }
    ],
    benefits: [
      { title: 'Eliminate Context Switching', description: 'Reps dial, text, and take notes without ever leaving the customer record.' },
      { title: 'Preserve Institutional Memory', description: 'Keep every customer interaction permanently archived regardless of staff turnover.' },
      { title: 'Accelerate Telecaller Ramp', description: 'Onboard new callers in minutes using intuitive, browser-based communication tools.' }
    ],
    practicalUseCases: [
      { title: 'High-Velocity Outbound Campaigns', audience: 'Telecalling Teams', scenario: 'Executing outbound dials with rapid note-taking directly in Chrome.', outcome: 'Browser softphone dials directly with instant post-call timeline sync.' },
      { title: 'Multi-Channel Deal Nurturing', audience: 'Account Executives', scenario: 'Alternating between phone discussions, WhatsApp agreements, and email confirmations.', outcome: 'Every channel event threads into the same unified customer profile.' },
      { title: 'Call Quality Review & Coaching', audience: 'Sales Supervisors', scenario: 'Reviewing call recordings to evaluate objection handling and script adherence.', outcome: 'Dual-track recordings available directly within the lead timeline.' }
    ],
    modulesUsed: ['Calls', 'Messaging', 'Leads', 'Compliance'],
    relatedFeatures: ['calls', 'messaging', 'leads', 'teams'],
    mockupType: 'messaging',
    mockupDisclaimer: 'Abstracted DOM demonstration • Illustrates embedded browser WebRTC softphone and messaging stream.'
  },
  {
    id: 'sales-team-operations',
    slug: 'sales-team-operations',
    number: '04',
    badge: 'TEAM HIERARCHY & PRESENCE',
    title: 'Sales Team Operations',
    headline: 'Role-based data access, real-time agent presence feeds, and queue rebalancing.',
    shortDescription: 'Govern sales visibility across Owner, Supervisor, and Telecaller tiers with live agent state monitoring and dynamic lead redistribution.',
    icon: 'Users2',
    category: 'Hierarchy & Supervision',
    status: 'IMPLEMENTED',
    statusBadge: 'Core Platform Workflow',
    audience: 'Sales Directors, Team Leads, Operational Supervisors, CRM Administrators',
    problem: {
      headline: 'Managers lack live visibility into telecaller states and struggle with rigid lead distribution.',
      description: 'Without real-time presence indicators, supervisors cannot tell whether reps are actively dialing, idle, or wrapped up in documentation. Stalled queues cannot be reallocated quickly, and flat permissions create severe data leakage risks.',
      frictions: [
        'Supervisors discover idle queues or unworked leads hours after shifts begin.',
        'Junior telecallers have excessive permissions to export sensitive corporate databases.',
        'Shift handoffs cause leads to languish in inactive user queues.'
      ],
      whyItPersists: 'Most CRMs use simplistic user models that fail to reflect the operational hierarchy of telecalling floors, treating all users as either generic admins or standard reps.'
    },
    approach: {
      headline: 'Four-tier role-based access control with live operational telemetry.',
      description: 'DialPulse establishes strict data boundaries across Owners, Team Leads, Telecallers, and Admins. Supervisors observe live calling states in real time and can redistribute untouched leads across available agents with two clicks.'
    },
    workflow: [
      { step: 1, title: 'Tenant & Role Provisioning', description: 'Assign users to Owner, Team Lead, Telecaller, or Admin roles with strict data scoping.' },
      { step: 2, title: 'Queue & Pipeline Assignment', description: 'Allocate specific leads, campaigns, and phone trunks to designated squad queues.' },
      { step: 3, title: 'Live Presence Monitoring', description: 'Supervisors monitor real-time agent statuses (Dialing, Available, Wrap-up, Offline).' },
      { step: 4, title: 'Dynamic Queue Rebalancing', description: 'Reassign untouched or stalled contacts across active agents during peak volumes.' }
    ],
    capabilities: [
      { title: '4-Tier Granular RBAC', description: 'Enforce least-privilege data access: telecallers only see assigned records.' },
      { title: 'Live Agent Presence Feeds', description: 'Track real-time softphone states via live WebSocket telemetry.' },
      { title: 'Rapid Queue Redistribution', description: 'Reassign batches of leads without disrupting active calling queues.' },
      { title: 'Supervisor Escalation Controls', description: 'Enable team leads to intervene or reassign high-value opportunities.' }
    ],
    benefits: [
      { title: 'Prevent Data Exfiltration', description: 'Restrict mass export privileges strictly to verified tenant administrators.' },
      { title: 'Maximize Squad Throughput', description: 'Ensure leads are always routed to active, available telecallers.' },
      { title: 'Streamlined Shift Management', description: 'Smoothly transfer active queues between morning and evening shifts.' }
    ],
    practicalUseCases: [
      { title: 'Managing Shift Handoffs', audience: 'Team Leads', scenario: 'Telecaller leaves for the day with uncontacted inbound inquiries in their queue.', outcome: 'Supervisor reassigns the queue to an active evening rep in two clicks.' },
      { title: 'Least-Privilege Security Scoping', audience: 'Compliance Officers', scenario: 'Ensuring junior contractors cannot view or export executive customer lists.', outcome: 'Telecaller role restricts visibility strictly to assigned leads with exports blocked.' },
      { title: 'Live Floor Supervision', audience: 'Sales Operations Managers', scenario: 'Monitoring calling floor activity across regional sales squads.', outcome: 'Live dashboard displays connection states and active call durations in real time.' }
    ],
    modulesUsed: ['Teams', 'Administration', 'Calls', 'Reports'],
    relatedFeatures: ['teams', 'calls', 'administration', 'reports'],
    mockupType: 'teams',
    mockupDisclaimer: 'Abstracted DOM demonstration • Illustrates multi-tier role hierarchy and live agent presence feed.'
  },
  {
    id: 'performance-visibility',
    slug: 'performance-visibility',
    number: '05',
    badge: 'ASYNC ANALYTICS & EXPORTS',
    title: 'Performance Visibility',
    headline: 'Real-time handle-time metrics, connection rates, and asynchronous background report exports.',
    shortDescription: 'Track telecaller connection rates, pipeline stage velocity, and average handle times with background workers that prevent UI lag.',
    icon: 'BarChart3',
    category: 'Analytics & Intelligence',
    status: 'DOCUMENTED',
    statusBadge: 'Documented Architecture',
    audience: 'Sales Leadership, Business Operations, Finance, Telecalling Supervisors',
    problem: {
      headline: 'Reporting lags behind live operations, and heavy analytical queries degrade software performance.',
      description: 'Compiling weekly activity reports often requires exporting massive spreadsheets that freeze the CRM or time out. Leaders only discover telecaller bottlenecks or campaign drop-offs weeks after opportunities have been lost.',
      frictions: [
        'Running large analytical queries across thousands of call records slows down active telecallers.',
        'Conversion drop-offs between pipeline stages go unnoticed until month-end reviews.',
        'Subjective, self-reported spreadsheet numbers provide unreliable performance data.'
      ],
      whyItPersists: 'Traditional monolithic databases attempt to process analytical aggregations on the same primary database cluster handling live transactions, causing lockups and system latency.'
    },
    approach: {
      headline: 'Real-time transactional telemetry paired with asynchronous background report workers.',
      description: 'DialPulse aggregates core operational metrics (calls placed, connection ratios, handle times, stage duration) in real time. Large historical audits and CSV exports are delegated to dedicated background worker processes without affecting front-line reps.'
    },
    workflow: [
      { step: 1, title: 'Operational Event Capture', description: 'Log timestamps, durations, and dispositions automatically upon call completion.' },
      { step: 2, title: 'Real-Time Metric Aggregation', description: 'Calculate daily dial volumes, connection rates, and stage velocities continuously.' },
      { step: 3, title: 'Role-Filtered Dashboard Display', description: 'Present tailored performance benchmarks to telecallers, team leads, and owners.' },
      { step: 4, title: 'Asynchronous Background Export', description: 'Queue complex historical report jobs; download verified CSVs when workers finish.' }
    ],
    capabilities: [
      { title: 'Connection & Handle Time Metrics', description: 'Track dials, connections, and average handle time (AHT) per agent and squad.' },
      { title: 'Pipeline Velocity Tracking', description: 'Measure average time spent in each stage to pinpoint conversion bottlenecks.' },
      { title: 'Detached Worker Job Queues', description: 'Process heavy data exports in the background with zero web interface lag.' },
      { title: 'Role-Scoped Operational Dashboards', description: 'Deliver relevant metrics based on user hierarchy and supervisory scope.' }
    ],
    benefits: [
      { title: 'Zero System Slowdowns', description: 'Run complex operational audits without disrupting active phone calling on the sales floor.' },
      { title: 'Actionable Bottleneck Detection', description: 'Identify specific sales pipeline stages where prospects are stalling or dropping off.' },
      { title: 'Objective Performance Benchmarks', description: 'Evaluate team members using verified system data rather than self-reported estimates.' }
    ],
    practicalUseCases: [
      { title: 'Daily Telecaller Standup Review', audience: 'Team Leads', scenario: 'Assessing connection rates and call volumes before morning kick-off.', outcome: 'Supervisor reviews real-time dashboard showing AHT and disposition ratios.' },
      { title: 'Quarterly Audit Export', audience: 'Operations Executives', scenario: 'Exporting historical call interaction records for compliance and operations review.', outcome: 'Asynchronous worker compiles CSV in the background and notifies user upon completion.' },
      { title: 'Pipeline Funnel Drop-off Analysis', audience: 'Sales Directors', scenario: 'Investigating why qualified demos are failing to advance to contract review.', outcome: 'Stage velocity report reveals proposals are idling extended days without follow-up.' }
    ],
    modulesUsed: ['Reports', 'Calls', 'Teams', 'Imports & Exports'],
    relatedFeatures: ['reports', 'calls', 'teams', 'imports-exports'],
    mockupType: 'reports',
    mockupDisclaimer: 'Abstracted DOM demonstration • Illustrates real-time call telemetry and async reporting queue.'
  },
  {
    id: 'customer-operations',
    slug: 'customer-operations',
    number: '06',
    badge: 'UNIFIED CUSTOMER 360',
    title: 'Customer Operations',
    headline: 'Consolidated pre-sale pipeline and post-sale support records in a unified workspace.',
    shortDescription: 'Eliminate disjointed subscriptions by bringing customer records, softphone audio, messaging, and ticket context into one platform.',
    icon: 'Layers',
    category: 'Full-Lifecycle Operations',
    status: 'DOCUMENTED',
    statusBadge: 'Documented Architecture',
    audience: 'Customer Operations Leaders, Account Managers, Support Supervisors, Business Owners',
    problem: {
      headline: 'Sales records and post-sale customer service live in isolated software silos.',
      description: 'When sales and support use different tools, account managers cannot see open support tickets, and service reps have no access to sales commitments. Customer relationships suffer as prospects must repeat their history to every new representative.',
      frictions: [
        'Paying for multiple disparate SaaS subscriptions with brittle custom webhook integrations.',
        'Sales reps pitch renewals to dissatisfied customers who have active unresolved support tickets.',
        'Support teams lack access to sales call recordings and initial contract specifications.'
      ],
      whyItPersists: 'The software market artificially divided CRM into sales-only and support-only categories, creating artificial boundaries that fragment customer relationship records.'
    },
    approach: {
      headline: 'A single multi-tenant data layer encompassing the entire customer journey.',
      description: 'DialPulse consolidates lead intake, telephony, messaging, and issue tracking around a central customer record. Every department accesses the same verified history with strict role-based data permissions.'
    },
    workflow: [
      { step: 1, title: 'Lead Qualification & Conversion', description: 'Acquire, call, and close prospects within the sales pipeline.' },
      { step: 2, title: 'Seamless Account Transition', description: 'Convert closed leads into active customer accounts retaining full historical context.' },
      { step: 3, title: 'Embedded Ticket Case Management', description: 'Create and resolve support issues directly alongside communication timelines.' },
      { step: 4, title: 'Unified Relationship Visibility', description: 'Review complete cross-department history prior to account reviews or renewals.' }
    ],
    capabilities: [
      { title: 'Unified Customer 360 Records', description: 'Maintain one authoritative database record across sales, telephony, and support.' },
      { title: 'Embedded Ticket Cases', description: 'Log and track customer complaints directly inside the contact profile.' },
      { title: 'Cross-Department Audit Logs', description: 'View full chronological logs of calls, messages, notes, and ticket resolutions.' },
      { title: 'Single-Stack Infrastructure', description: 'Reduce integration complexity and vendor costs with a consolidated operational tool.' }
    ],
    benefits: [
      { title: 'Lower Software Overhead', description: 'Replace multiple overlapping point solutions with a single operational workspace.' },
      { title: 'Seamless Team Handoffs', description: 'Enable support and account teams to immediately see initial sales commitments and notes.' },
      { title: 'Consistent Customer Experience', description: 'Ensure customers never need to repeat their account background across departments.' }
    ],
    practicalUseCases: [
      { title: 'Pre-Renewal Health Check', audience: 'Account Executives', scenario: 'Preparing for an annual enterprise renewal discussion with an existing client.', outcome: 'AE checks contact timeline and discovers an open ticket before dialing.' },
      { title: 'Support Context Retrieval', audience: 'Support Engineers', scenario: 'Investigating a customer escalation regarding a technical promise made during sales.', outcome: 'Support agent listens to initial sales call recording attached to the record.' },
      { title: 'Vendor Stack Consolidation', audience: 'Chief Technology Officers', scenario: 'Replacing separate CRM, softphone, and ticketing contracts with a unified platform.', outcome: 'Consolidates data into a single tenant-isolated PostgreSQL database.' }
    ],
    modulesUsed: ['Leads', 'Calls', 'Messaging', 'Tickets', 'Teams', 'Administration'],
    relatedFeatures: ['tickets', 'leads', 'calls', 'messaging', 'administration'],
    mockupType: 'tickets',
    mockupDisclaimer: 'Abstracted DOM demonstration • Illustrates unified customer timeline spanning leads, calls, and support tickets.'
  },
  {
    id: 'communication-compliance',
    slug: 'communication-compliance',
    number: '07',
    badge: 'POLICY & DNC LOCK',
    title: 'Communication Compliance',
    headline: 'Automated Do-Not-Call checks, recipient timezone quiet-hour locks, and audit ledgers.',
    shortDescription: 'Protect brand reputation and adhere to communication policies with pre-flight DNC verification and timezone-aware calling windows.',
    icon: 'ShieldAlert',
    category: 'Governance & Compliance',
    status: 'DOCUMENTED',
    statusBadge: 'Documented Architecture',
    audience: 'Compliance Officers, Legal Counsel, Contact Center Managers, Revenue Operations',
    problem: {
      headline: 'Manual compliance checking fails in high-volume environments, creating severe operational risks.',
      description: 'Relying on individual telecallers to manually verify area-code timezones or cross-reference Do-Not-Call (DNC) registries inevitably leads to errors. A single call placed during restricted quiet hours or to an unconsented number damages brand credibility and invites penalties.',
      frictions: [
        'Accidental outbound calls placed before 9:00 AM or after 8:00 PM in the recipient’s local timezone.',
        'Prospects who requested opt-out being dialed again by a different sales squad.',
        'Lack of cryptographic audit logs to prove compliance during regulatory inquiries.'
      ],
      whyItPersists: 'Most telecalling software delegates compliance checks to manual training or post-call warning alerts, rather than enforcing hard pre-flight locks before the call connects.'
    },
    approach: {
      headline: 'Zero-bypass pre-flight policy verification built into the dialing engine.',
      description: 'Before any WebRTC call or message dispatches, DialPulse runs an automated check against tenant and national DNC registries, calculates local recipient time, and evaluates contact frequency. If a rule is breached, the outbound trigger is physically locked.'
    },
    workflow: [
      { step: 1, title: 'Outbound Trigger Initiated', description: 'Telecaller clicks dial or dispatches a message to a prospect.' },
      { step: 2, title: 'Registry & Opt-Out Gate', description: 'System queries internal tenant opt-out lists and national DNC databases in milliseconds.' },
      { step: 3, title: 'Timezone Quiet-Hour Calculation', description: 'Evaluate recipient local time (e.g. 09:00 - 20:00); hard-lock trigger if outside permitted window.' },
      { step: 4, title: 'Immutable Audit Logging', description: 'Log permanent record of permit or block decision including timestamp, rule, and operator.' }
    ],
    capabilities: [
      { title: 'Tenant & National DNC Gate', description: 'Hard-lock outbound dialing against unsubscribed numbers with zero manual bypass.' },
      { title: 'Recipient Timezone Enforcement', description: 'Automatically calculate local calling hours based on recipient area code and geometry.' },
      { title: 'Contact Frequency Capping', description: 'Prevent aggressive over-dialing by enforcing cooling-off periods between attempts.' },
      { title: 'Cryptographic Audit Trail', description: 'Record tamper-evident logs of every compliance permission and block decision.' }
    ],
    benefits: [
      { title: 'Automated Risk Mitigation', description: 'Remove human error from compliance checking by locking out prohibited outreach at the software level.' },
      { title: 'Protect Brand Reputation', description: 'Ensure your organization respects customer communication preferences and local quiet hours.' },
      { title: 'Defensible Compliance Ledgers', description: 'Maintain complete, timestamped records proving due diligence for every outbound interaction.' }
    ],
    practicalUseCases: [
      { title: 'Cross-Timezone Outreach Guard', audience: 'National Sales Teams', scenario: 'An East Coast telecaller dialing a California prospect at 8:15 AM EST (5:15 AM PST).', outcome: 'System detects local PST quiet hours and locks the dial button until 9:00 AM PST.' },
      { title: 'Instant Opt-Out Propagation', audience: 'Compliance Teams', scenario: 'A prospect requests to be removed from all future marketing and phone outreach.', outcome: 'Status updates globally across tenant; future dials are permanently blocked.' },
      { title: 'Regulatory Audit Preparation', audience: 'Legal Counsel', scenario: 'Demonstrating adherence to telemarketing guidelines and quiet-hour rules.', outcome: 'Export comprehensive audit log of all pre-flight check outcomes.' }
    ],
    modulesUsed: ['Compliance', 'Calls', 'Messaging', 'Administration'],
    relatedFeatures: ['compliance', 'calls', 'messaging', 'administration'],
    mockupType: 'compliance',
    mockupDisclaimer: 'Abstracted DOM demonstration • Illustrates pre-flight DNC query and recipient timezone quiet-hour lock.'
  },
  {
    id: 'ai-assisted-work',
    slug: 'ai-assisted-work',
    number: '08',
    badge: 'TENANT-ISOLATED AI',
    title: 'AI-Assisted Work',
    headline: 'Post-call transcript summarization, action item extraction, and draft follow-up generation.',
    shortDescription: 'Free up telecaller time with automated post-call synthesis and draft responses operating strictly within your tenant perimeter.',
    icon: 'Sparkles',
    category: 'Assisted Intelligence',
    status: 'DOCUMENTED',
    statusBadge: 'Documented Architecture',
    audience: 'High-Volume Telecallers, Inside Sales Teams, Sales Operations',
    problem: {
      headline: 'Telecallers spend substantial working time on manual post-call documentation.',
      description: 'After every customer call, reps must manually type detailed notes, summarize objections, and draft follow-up communications. When telecallers rush, documentation is incomplete, while executives worry about customer conversations leaking to external AI models.',
      frictions: [
        'Telecallers spend valuable time each day writing call summaries instead of speaking with prospects.',
        'Inconsistent note quality leaves team leads guessing what happened during phone conversations.',
        'Concerns that proprietary customer dialogues might be utilized for public LLM training.'
      ],
      whyItPersists: 'Generic AI tools require agents to manually copy and paste transcript snippets into external web chats, introducing security risks and breaking workflow momentum.'
    },
    approach: {
      headline: 'Contextual AI assistance embedded directly into the post-call wrap-up workflow.',
      description: 'DialPulse AI operates within your tenant security boundary. It converts completed audio recordings into structured bullet points, extracts customer action items, and generates personalized draft follow-ups for human agent review.'
    },
    workflow: [
      { step: 1, title: 'Call Audio Recorded', description: 'Dual-track audio session completes and uploads to tenant-scoped encrypted storage.' },
      { step: 2, title: 'Tenant-Isolated Transcription', description: 'Process audio to text within your private tenant perimeter.' },
      { step: 3, title: 'Structured Synthesis & Extraction', description: 'Identify key topics, budget discussions, agreed timelines, and required action items.' },
      { step: 4, title: 'Human Review & Dispatch', description: 'Agent reviews generated summary bullets and approves draft WhatsApp or email in one click.' }
    ],
    capabilities: [
      { title: 'Automated Call Summarization', description: 'Generate concise bullet-point overviews of every completed phone conversation.' },
      { title: 'Action Item Extraction', description: 'Detect commitments, callback requests, and delivery dates automatically.' },
      { title: 'Draft Follow-Up Generation', description: 'Create contextual follow-up emails and WhatsApp replies ready for agent review.' },
      { title: 'Private Tenant Perimeter', description: 'Process data without using proprietary customer transcripts to train public foundation models.' }
    ],
    benefits: [
      { title: 'Reduce Administrative Overhead', description: 'Cut post-call documentation time down to seconds so telecallers can focus on selling.' },
      { title: 'Standardized Institutional Notes', description: 'Ensure every customer record has clear, structured bullets covering key discussion points.' },
      { title: 'Enforce Human-in-the-Loop Control', description: 'Every AI-generated draft requires human agent verification before dispatch.' }
    ],
    practicalUseCases: [
      { title: 'Rapid Post-Call Documentation', audience: 'Inside Sales Reps', scenario: 'Completing a 15-minute qualification call with multiple technical requirements.', outcome: 'System generates concise summary bullets and extracts agreed next steps instantly.' },
      { title: 'Instant Follow-Up Drafts', audience: 'Telecallers', scenario: 'Sending a follow-up summary to a busy prospect immediately after a phone meeting.', outcome: 'Agent reviews AI-drafted message, edits one sentence, and dispatches via WhatsApp.' },
      { title: 'Supervisor Conversation Audits', audience: 'Sales Directors', scenario: 'Gaining quick visibility into customer sentiment and objections across daily calls.', outcome: 'Director reads structured bullet points without needing to listen to full audio tracks.' }
    ],
    modulesUsed: ['AI', 'Calls', 'Messaging', 'Leads'],
    relatedFeatures: ['ai', 'calls', 'messaging', 'leads'],
    mockupType: 'ai',
    mockupDisclaimer: 'Abstracted DOM demonstration • Illustrates post-call AI synthesis and draft follow-up generation.'
  }
];
