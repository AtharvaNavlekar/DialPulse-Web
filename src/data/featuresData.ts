/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type FeatureStatus = 'IMPLEMENTED' | 'DOCUMENTED' | 'DEMONSTRATION' | 'PLANNED' | 'UNVERIFIED';

export interface FeatureCapability {
  title: string;
  description: string;
  tag?: string;
}

export interface FeatureBenefit {
  title: string;
  description: string;
}

export interface FeatureProblem {
  headline: string;
  description: string;
  frictions: string[];
}

export interface FeatureWorkflowStep {
  step: number;
  title: string;
  description: string;
}

export interface FeatureSolution {
  headline: string;
  description: string;
  workflowSteps: FeatureWorkflowStep[];
}

export type FeatureMockupType =
  | 'pipeline'
  | 'calls'
  | 'messaging'
  | 'tickets'
  | 'teams'
  | 'reports'
  | 'imports-exports'
  | 'compliance'
  | 'ai'
  | 'administration';

export interface FeatureDefinition {
  id: string;
  slug: string;
  name: string;
  title: string;
  number: string;
  category: string;
  shortDescription: string;
  description: string;
  longDescription: string;
  icon: string;
  route: string;
  status: FeatureStatus;
  statusBadge: string;
  audience: string;
  problem: FeatureProblem;
  solution: FeatureSolution;
  capabilities: FeatureCapability[];
  benefits: FeatureBenefit[];
  mockupType: FeatureMockupType;
  mockupDisclaimer: string;
  relatedFeatures: string[];
}

export const FEATURE_DEFINITIONS: FeatureDefinition[] = [
  {
    id: 'leads',
    slug: 'leads',
    name: 'Lead Management',
    title: 'Lead Management',
    number: '01',
    category: 'Lead Operations & Ingestion',
    shortDescription: 'Keep lead information, ownership, pipeline stages, notes, and communication preferences in context.',
    description: 'Structure customer intake, custom attributes, ownership assignment, and pipeline stages with strict tenant isolation and contextual follow-up.',
    longDescription: 'Structure customer intake, custom attributes, ownership assignment, and pipeline stages with strict tenant isolation and contextual follow-up across your operational telecalling team.',
    icon: 'Users',
    route: '/features/leads',
    status: 'IMPLEMENTED',
    statusBadge: 'Core Platform Module',
    audience: 'Telecallers, Account Executives, Team Leads, Operations',
    problem: {
      headline: 'Customer context scatters across personal phones, spreadsheets, and disconnected tools.',
      description: 'When telecallers and sales reps work from isolated lists, lead ownership becomes ambiguous, follow-ups slip, and managers lose visibility into real pipeline progression.',
      frictions: [
        'Leads left unassigned or duplicated across simultaneous outreach attempts.',
        'Disjointed call notes and chat snippets trapped on personal devices.',
        'Zero visibility into which stage of the sales pipeline each lead currently occupies.',
      ],
    },
    solution: {
      headline: 'A centralized, tenant-scoped operational record for every prospect.',
      description: 'DialPulse attaches contact details, custom fields, pipeline progression, interaction histories, and communication preferences directly to the lead record.',
      workflowSteps: [
        { step: 1, title: 'Intake & Attribution', description: 'Leads enter via CSV upload or API webhook with pre-flight format validation and source attribution.' },
        { step: 2, title: 'Ownership Assignment', description: 'Leads are routed to specific telecallers or team queues according to configurable ownership rules.' },
        { step: 3, title: 'Contextual Progression', description: 'Every call disposition, note, and message automatically logs against the lead\'s unified timeline.' },
        { step: 4, title: 'Pipeline Stage Gating', description: 'Status transitions (New → Attempted → Qualified → Opportunity) are tracked with timestamped milestones.' },
      ],
    },
    capabilities: [
      { title: 'Dynamic Pipeline Stages', description: 'Configure custom linear pipeline stages matching your team\'s operational sales workflow.', tag: 'Workflow' },
      { title: 'Deterministic Ownership', description: 'Assign individual telecallers or team queues with strict boundary enforcement.', tag: 'Access Control' },
      { title: 'Custom Metadata Fields', description: 'Store domain-specific attributes (loan amount, property type, company size) without code changes.', tag: 'Schema' },
      { title: 'Communication Preference Gating', description: 'Track preferred channels (Voice vs WhatsApp) and respect explicit contact preferences.', tag: 'Governance' },
    ],
    benefits: [
      { title: 'Zero Lost Lead Context', description: 'Telecallers instantly review the complete interaction history before dialling.' },
      { title: 'Clear Team Accountability', description: 'Team leads always know which rep owns which record and how long it has been in stage.' },
      { title: 'Faster Ramp Times', description: 'New operators follow structured pipeline stages without guessing operational steps.' },
    ],
    mockupType: 'pipeline',
    mockupDisclaimer: 'Abstracted DOM demonstration • Illustrates operational lead pipeline',
    relatedFeatures: ['calls', 'messaging', 'teams', 'compliance'],
  },
  {
    id: 'calls',
    slug: 'calls',
    name: 'Calling & History',
    title: 'Calling & History',
    number: '02',
    category: 'Voice Telephony & Softphone',
    shortDescription: 'Make every call part of the customer story with outcomes, duration, and notes.',
    description: 'Track telephony outcomes, conversation duration, timestamps, and operator notes directly tied to lead history without disconnecting the voice channel.',
    longDescription: 'Track telephony outcomes, conversation duration, timestamps, and operator notes directly tied to lead history without disconnecting the voice channel from the customer record.',
    icon: 'Phone',
    route: '/features/calls',
    status: 'DOCUMENTED',
    statusBadge: 'Telephony Workflow',
    audience: 'Telecallers, Inside Sales, Customer Success, Team Leads',
    problem: {
      headline: 'Manual dialling creates logging friction and gaps in the customer conversation history.',
      description: 'When reps use personal or external desk phones, call durations go unmeasured, outcomes remain undocumented, and follow-up discipline breaks down.',
      frictions: [
        'Operators forget to log call outcomes or enter vague notes hours after conversations end.',
        'Managers cannot verify whether contact attempts actually occurred or how long calls lasted.',
        'High-effort manual copy-pasting of phone numbers between spreadsheets and softphones.',
      ],
    },
    solution: {
      headline: 'Contextual telephony embedded directly into the lead record.',
      description: 'DialPulse integrates in-browser softphone calling with standardized disposition prompts, automatic duration logging, and persistent timeline attachment.',
      workflowSteps: [
        { step: 1, title: 'Pre-Call Compliance Check', description: 'System verifies the destination number against DNC lists and local-time quiet hour restrictions.' },
        { step: 2, title: 'In-Browser Voice Session', description: 'Telecaller connects directly via browser WebRTC interface with instant customer profile view.' },
        { step: 3, title: 'Mandatory Disposition Prompt', description: 'Upon call conclusion, operator selects a standardized outcome (Connected, Busy, Callback Scheduled, Gatekeeper).' },
        { step: 4, title: 'Timeline & History Persistence', description: 'Call duration, timestamp, operator attribution, and notes immediately bind to the customer record.' },
      ],
    },
    capabilities: [
      { title: 'In-Browser Telephony Interface', description: 'Place and receive calls directly inside the CRM without switching windows or external hardware.', tag: 'WebRTC' },
      { title: 'Standardized Call Dispositions', description: 'Ensure structured, consistent categorization across all outreach attempts.', tag: 'Telemetry' },
      { title: 'Duration & Talk Time Tracking', description: 'Capture precise connection timestamps and conversational talk time automatically.', tag: 'Metrics' },
      { title: 'Timeline Interaction Association', description: 'Every voice interaction is permanently indexed in the customer\'s chronological activity log.', tag: 'Auditing' },
    ],
    benefits: [
      { title: 'Eliminate Manual Call Logs', description: 'Operators save minutes per call with automated duration capture and rapid disposition logging.' },
      { title: 'Auditable Activity Visibility', description: 'Managers review complete contact attempts and connection velocity across the entire team.' },
      { title: 'Smoother Shift Handoffs', description: 'Any team member can review past conversation outcomes before picking up the next touchpoint.' },
    ],
    mockupType: 'calls',
    mockupDisclaimer: 'Abstracted DOM demonstration • Illustrates in-browser voice session and disposition workflow',
    relatedFeatures: ['leads', 'messaging', 'ai', 'reports'],
  },
  {
    id: 'messaging',
    slug: 'messaging',
    name: 'Omnichannel Messaging',
    title: 'Omnichannel Messaging',
    number: '03',
    category: 'Omnichannel Communication',
    shortDescription: 'Connect supported messaging activity directly with customer records and status tracking.',
    description: 'Orchestrate inbound and outbound communications across WhatsApp and SMS with real-time delivery, read, and failure state handling.',
    longDescription: 'Orchestrate inbound and outbound communications across WhatsApp and SMS with real-time delivery, read, and failure state handling directly in customer records.',
    icon: 'MessageSquare',
    route: '/features/messaging',
    status: 'DOCUMENTED',
    statusBadge: 'Messaging Architecture',
    audience: 'Sales Operators, Customer Care, Telecallers, Operations',
    problem: {
      headline: 'Customer messaging scattered across unmanaged personal WhatsApp and SMS threads.',
      description: 'When agents message customers from personal mobile devices, conversation logs leave the company, compliance controls vanish, and message delivery remains unverified.',
      frictions: [
        'Customer replies sit unread on reps\' personal phones during leaves or shift changes.',
        'Zero corporate auditability over message content or outbound compliance dispatches.',
        'Inability to verify whether urgent notices were delivered or read.',
      ],
    },
    solution: {
      headline: 'Centralized, auditable messaging attached directly to the CRM record.',
      description: 'DialPulse routes WhatsApp and SMS conversations through pre-approved templates and carrier gateways, logging delivery status and conversation history in real time.',
      workflowSteps: [
        { step: 1, title: 'Template Selection', description: 'Operator selects pre-approved WhatsApp or SMS template with variable substitution.' },
        { step: 2, title: 'Safeguard & Cap Verification', description: 'System checks opt-out preferences and frequency caps before dispatching through configured carrier gateway.' },
        { step: 3, title: 'Delivery Telemetry', description: 'Real-time webhook receipts track sent, delivered, read, and failure states.' },
        { step: 4, title: 'Two-Way Reply Threading', description: 'Inbound customer replies attach to the assigned lead profile, triggering operator notifications.' },
      ],
    },
    capabilities: [
      { title: 'Pre-Approved Template Dispatch', description: 'Enforce consistent brand messaging and regulatory alignment across outbound messages.', tag: 'WhatsApp & SMS' },
      { title: 'Real-Time Delivery Telemetry', description: 'Monitor delivery receipts and read timestamps directly in the customer conversation thread.', tag: 'Webhooks' },
      { title: 'Inbound Conversation Queue', description: 'Route incoming messages to the assigned lead owner or available queue with SLA visibility.', tag: 'Routing' },
      { title: 'Unified Customer Timeline', description: 'View calls, notes, and messages in a single chronological stream rather than separate apps.', tag: 'Timeline' },
    ],
    benefits: [
      { title: 'Company-Owned Communication', description: 'Customer relationships remain secure within the organization when employees depart.' },
      { title: 'Instant Customer Responsiveness', description: 'Teams respond quickly with pre-approved templates and centralized notification queues.' },
      { title: 'Total Channel Transparency', description: 'Know exactly when customers received proposals or confirmation notices.' },
    ],
    mockupType: 'messaging',
    mockupDisclaimer: 'Abstracted DOM demonstration • Illustrates WhatsApp & SMS template and delivery telemetry',
    relatedFeatures: ['leads', 'calls', 'compliance', 'reports'],
  },
  {
    id: 'tickets',
    slug: 'tickets',
    name: 'Tickets & Support Context',
    title: 'Tickets & Support Context',
    number: '04',
    category: 'Customer Issue Tracking',
    shortDescription: 'Keep customer issue tracking, replies, and priority in the same operational picture.',
    description: 'Manage post-sale inquiries, support requests, resolution timelines, and operational escalations alongside CRM customer records.',
    longDescription: 'Manage post-sale inquiries, support requests, resolution timelines, and operational escalations alongside CRM customer records without losing account history.',
    icon: 'LifeBuoy',
    route: '/features/tickets',
    status: 'DOCUMENTED',
    statusBadge: 'Operational Support',
    audience: 'Support Specialists, Account Managers, Operations, Team Leads',
    problem: {
      headline: 'Post-sale customer issues get lost between sales teams and support queues.',
      description: 'When support inquiries live in a standalone ticketing tool, sales reps continue outreach unaware of unresolved complaints, damaging customer relationships.',
      frictions: [
        'Sales reps pitch renewals to dissatisfied customers experiencing open unresolved bugs.',
        'Support agents lack context on past sales promises, contract terms, or phone discussions.',
        'High-priority escalations lack visible SLA targets and ownership tracking.',
      ],
    },
    solution: {
      headline: 'Operational support tracking connected to the CRM relationship.',
      description: 'DialPulse embeds issue resolution, priority categorization, and response tracking right alongside the customer profile so teams share complete context.',
      workflowSteps: [
        { step: 1, title: 'Case Creation & Priority', description: 'Inquiries are logged with priority classification (P1 High, P2 Normal, P3 Low) and category tags.' },
        { step: 2, title: 'Relationship Linking', description: 'Ticket automatically binds to the lead or customer profile, visible on their primary timeline.' },
        { step: 3, title: 'SLA Response Tracking', description: 'Target response and resolution clocks run with alerts for impending SLA breaches.' },
        { step: 4, title: 'Resolution & Root Cause', description: 'Agent resolves ticket with recorded resolution notes and updates customer relationship state.' },
      ],
    },
    capabilities: [
      { title: 'Contextual Case Management', description: 'Log, triage, and assign issues directly against the customer\'s sales and call history.', tag: 'Triage' },
      { title: 'Priority & SLA Escalation', description: 'Define severity levels with visible target response timers to maintain service discipline.', tag: 'SLAs' },
      { title: 'Internal Collaboration Notes', description: 'Collaborate on resolutions with internal operator notes hidden from customer-facing channels.', tag: 'Collaboration' },
      { title: 'Shared Customer View', description: 'Sales, operations, and support all see the same unified customer status and history.', tag: 'Alignment' },
    ],
    benefits: [
      { title: 'Protect Customer Relationships', description: 'Prevent awkward sales calls when open support issues are being resolved.' },
      { title: 'Faster Problem Resolution', description: 'Support engineers review complete call logs and message history without asking repetitive questions.' },
      { title: 'Clear Service Accountability', description: 'Every issue has an assigned owner, timestamped updates, and documented resolution steps.' },
    ],
    mockupType: 'tickets',
    mockupDisclaimer: 'Abstracted DOM demonstration • Illustrates contextual case management and SLA telemetry',
    relatedFeatures: ['leads', 'messaging', 'teams', 'reports'],
  },
  {
    id: 'teams',
    slug: 'teams',
    name: 'Team Hierarchy & Roles',
    title: 'Team Hierarchy & Roles',
    number: '05',
    category: 'Organization & Access Control',
    shortDescription: 'Give every role the right view with role-based access and scoped team boundaries.',
    description: 'Establish clear operational scopes between telecallers, team leads, department managers, and system administrators with granular access control.',
    longDescription: 'Establish clear operational scopes between telecallers, team leads, department managers, and system administrators with granular role-based access control.',
    icon: 'ShieldCheck',
    route: '/features/teams',
    status: 'IMPLEMENTED',
    statusBadge: 'Core Platform Module',
    audience: 'System Administrators, Sales Directors, Operations Managers, Team Leads',
    problem: {
      headline: 'Unrestricted data access risks data leaks and creates cluttered operational queues.',
      description: 'Without structured boundaries, frontline telecallers see data outside their territory, accidental reassignments occur, and sensitive customer records are exposed.',
      frictions: [
        'Junior agents accessing and modifying accounts owned by other departments or senior reps.',
        'Overwhelmed telecallers sifting through thousands of leads not assigned to their queue.',
        'Inability to designate team leads with management oversight without granting full system admin rights.',
      ],
    },
    solution: {
      headline: 'Granular Role-Based Access Control and scoped team rosters.',
      description: 'DialPulse establishes four clear operational tiers—Telecaller, Team Lead, Operations/IT, and Owner—ensuring users see only what they need to execute.',
      workflowSteps: [
        { step: 1, title: 'Role Assignment', description: 'Operators are assigned specific operational roles with pre-defined capability permissions.' },
        { step: 2, title: 'Team Queue Scoping', description: 'Telecallers are grouped into functional teams with access restricted to assigned team queues.' },
        { step: 3, title: 'Supervisor Delegation', description: 'Team leads receive queue reassignment and monitoring permissions over their specific team roster.' },
        { step: 4, title: 'Administrative Governance', description: 'System owners maintain global configuration, user provisioning, and tenant audit visibility.' },
      ],
    },
    capabilities: [
      { title: 'Role-Based Access Control (RBAC)', description: 'Enforce strict least-privilege access across telecallers, supervisors, and administrators.', tag: 'Security' },
      { title: 'Scoped Team Rosters', description: 'Partition leads and queues by team, preventing cross-team data visibility and operational conflicts.', tag: 'Partitioning' },
      { title: 'Supervisor Queue Rebalancing', description: 'Empower team leads to reassign stalled leads and manage workload distribution.', tag: 'Workload' },
      { title: 'Administrative Action Safeguards', description: 'Restrict bulk exports and system configurations to designated operations roles.', tag: 'Governance' },
    ],
    benefits: [
      { title: 'Data Protection by Design', description: 'Sensitive customer records and contact details are shielded from unauthorized viewing.' },
      { title: 'Operational Focus', description: 'Telecallers log in to clean, distraction-free queues containing only their active assignments.' },
      { title: 'Scalable Organization Structure', description: 'Easily onboard new teams, regions, or departments with consistent access rules.' },
    ],
    mockupType: 'teams',
    mockupDisclaimer: 'Abstracted DOM demonstration • Illustrates RBAC tier definitions and team scoping',
    relatedFeatures: ['leads', 'administration', 'reports'],
  },
  {
    id: 'reports',
    slug: 'reports',
    name: 'Reporting & Analytics',
    title: 'Reporting & Analytics',
    number: '06',
    category: 'Operational Intelligence',
    shortDescription: 'Turn daily operational activity into visibility across communication and lead velocity.',
    description: 'Aggregate team performance, lead conversion milestones, and communication volume with asynchronous report generation for high-volume exports.',
    longDescription: 'Aggregate team performance, lead conversion milestones, and communication volume with asynchronous report generation for high-volume data exports.',
    icon: 'BarChart3',
    route: '/features/reports',
    status: 'DOCUMENTED',
    statusBadge: 'Analytics Architecture',
    audience: 'Sales Directors, Operations Leaders, Business Owners, Team Leads',
    problem: {
      headline: 'Operational blindness caused by manual spreadsheet tallying and delayed metrics.',
      description: 'When managers rely on end-of-week spreadsheet exports, they discover stalled leads, dropping connection rates, and imbalanced workloads days too late.',
      frictions: [
        'Hours wasted each week manually combining phone call logs, CRM records, and lead sheets.',
        'Zero real-time visibility into whether daily contact quotas are being achieved across teams.',
        'High-volume data queries locking the operational database and slowing down active agents.',
      ],
    },
    solution: {
      headline: 'Real-time operational dashboards with asynchronous background report generation.',
      description: 'DialPulse provides live metrics on call volume, connect velocity, and pipeline throughput, offloading heavy exports to isolated background workers.',
      workflowSteps: [
        { step: 1, title: 'Event Capture', description: 'Call completions, message deliveries, and stage updates stream into structured analytics tables.' },
        { step: 2, title: 'Aggregation & Metrics', description: 'Live metrics compute connect rates, talk time distributions, and conversion milestones.' },
        { step: 3, title: 'Visual Dashboard Review', description: 'Managers inspect team pacing and conversion bottlenecks through interactive visual charts.' },
        { step: 4, title: 'Async Export Processing', description: 'Large CSV data requests run in background queues, notifying users upon completion without UI lag.' },
      ],
    },
    capabilities: [
      { title: 'Call & Connect Velocity Metrics', description: 'Track total calls, connection rates, duration averages, and outcome breakdowns.', tag: 'Voice BI' },
      { title: 'Pipeline Stage Conversion Tracking', description: 'Identify conversion drop-offs between pipeline stages to optimize sales motions.', tag: 'Funnel' },
      { title: 'Asynchronous Report Queue', description: 'Export historical data and large datasets through dedicated background workers.', tag: 'Performance' },
      { title: 'Team Performance Benchmarks', description: 'Compare throughput, call pacing, and follow-up discipline across operational teams.', tag: 'Benchmarking' },
    ],
    benefits: [
      { title: 'Immediate Operational Awareness', description: 'Spot pipeline stalls and call volume drops in real time instead of waiting for weekly reviews.' },
      { title: 'Zero Database Degradation', description: 'Heavy analytical queries run in background workers without slowing frontline dialing.' },
      { title: 'Data-Driven Coaching', description: 'Pinpoint which telecallers excel at conversions and identify teams needing coaching.' },
    ],
    mockupType: 'reports',
    mockupDisclaimer: 'Abstracted DOM demonstration • Illustrates operational dashboards and export queues',
    relatedFeatures: ['teams', 'leads', 'calls', 'messaging'],
  },
  {
    id: 'imports-exports',
    slug: 'imports-exports',
    name: 'Imports & Exports',
    title: 'Imports & Exports',
    number: '07',
    category: 'Data Movement & Migration',
    shortDescription: 'Move customer data safely with structured validation, background queues, and export audits.',
    description: 'Ingest bulk lead records with format validation, and handle sensitive exports through explicit multi-step authorization and full audit logging.',
    longDescription: 'Ingest bulk lead records with format validation, and handle sensitive exports through explicit multi-step authorization and full audit logging.',
    icon: 'ArrowUpDown',
    route: '/features/imports-exports',
    status: 'DOCUMENTED',
    statusBadge: 'Data Management',
    audience: 'Operations Managers, Database Administrators, IT Leads, Team Leads',
    problem: {
      headline: 'Uncontrolled bulk data ingestion corrupts CRM records, while unregulated exports leak customer lists.',
      description: 'Messy spreadsheet uploads create duplicates and invalid phone numbers, while unrestricted export buttons allow employees to download complete databases unnoticed.',
      frictions: [
        'Spreadsheets with swapped columns or invalid phone numbers corrupting existing database fields.',
        'System crashes and UI freezes when importing tens of thousands of records simultaneously.',
        'Zero audit logs showing who downloaded customer contact records or when.',
      ],
    },
    solution: {
      headline: 'Schema pre-flight validation, background queue processing, and audited exports.',
      description: 'DialPulse validates inbound files, deduplicates phone numbers in background queues, and gates bulk data exports behind strict role authorization and immutable logs.',
      workflowSteps: [
        { step: 1, title: 'Pre-Flight Column Mapping', description: 'Upload CSV and map source columns to CRM fields with live type and format validation.' },
        { step: 2, title: 'Background Ingestion Worker', description: 'Import runs asynchronously in chunked queues with real-time progress tracking and error reporting.' },
        { step: 3, title: 'Duplicate & Validation Checks', description: 'System detects duplicate phone numbers and sanitizes country dial codes automatically.' },
        { step: 4, title: 'Audited Export Authorization', description: 'Data extraction requires administrative privileges and generates timestamped audit records.' },
      ],
    },
    capabilities: [
      { title: 'Interactive Schema Mapping', description: 'Map CSV columns to standard CRM fields and custom attributes with instant preview.', tag: 'Mapping' },
      { title: 'Asynchronous Chunked Ingestion', description: 'Ingest high-volume lead files without locking browser tabs or degrading database performance.', tag: 'Workers' },
      { title: 'Automated Deduplication', description: 'Flag or merge duplicate records based on phone numbers and email addresses.', tag: 'Hygiene' },
      { title: 'Export Permission & Audit Logging', description: 'Record every export event with operator identity, record count, and timestamp.', tag: 'Audit Trail' },
    ],
    benefits: [
      { title: 'Clean, Consistent CRM Data', description: 'Prevent malformed numbers and corrupted fields from ever entering operational pipelines.' },
      { title: 'Enterprise Data Governance', description: 'Maintain strict control over customer contact lists with visible audit trails for all exports.' },
      { title: 'Smooth High-Volume Imports', description: 'Upload tens of thousands of prospect records smoothly in background workers.' },
    ],
    mockupType: 'imports-exports',
    mockupDisclaimer: 'Abstracted DOM demonstration • Illustrates 3-step ingestion validation and export audit trail',
    relatedFeatures: ['leads', 'administration', 'compliance'],
  },
  {
    id: 'compliance',
    slug: 'compliance',
    name: 'Communication Compliance',
    title: 'Communication Compliance',
    number: '08',
    category: 'Technical Safeguards',
    shortDescription: 'Put communication safeguards directly into the workflow with quiet hours and fatigue controls.',
    description: 'Enforce platform safeguards including opt-out lists, frequency caps, quiet hours, and channel restrictions natively before messages or calls are dispatched.',
    longDescription: 'Enforce platform safeguards including opt-out lists, frequency caps, quiet hours, and channel restrictions natively before messages or calls are dispatched.',
    icon: 'Scale',
    route: '/features/compliance',
    status: 'DOCUMENTED',
    statusBadge: 'Policy Engine',
    audience: 'Compliance Officers, Operations Directors, Legal Counsel, Sales Managers',
    problem: {
      headline: 'Accidental communication policy violations trigger customer complaints and reputational risk.',
      description: 'When telecallers make outreach attempts during late evening hours, contact opted-out prospects, or bombard leads with repeated messages, brand trust suffers.',
      frictions: [
        'Telecallers accidentally dialling numbers that previously opted out via SMS or email.',
        'Outreach sent during late-night hours due to time zone differences across regions.',
        'Over-communicating with multiple reps messaging the same lead within hours.',
      ],
    },
    solution: {
      headline: 'Deterministic, zero-bypass technical safeguards evaluated before dispatch.',
      description: 'DialPulse intercepts calls and messages before transmission, verifying numbers against DNC lists, local-time quiet hour restrictions, and 24-hour frequency caps.',
      workflowSteps: [
        { step: 1, title: 'Dispatch Request Interception', description: 'When an operator initiates a call or message, the platform evaluates tenant policy rules.' },
        { step: 2, title: 'DNC & Opt-Out Verification', description: 'Destination number is checked against tenant and global suppression registries.' },
        { step: 3, title: 'Local Time & Quiet Hours Check', description: 'System verifies recipient\'s local time zone to ensure outreach occurs within allowable hours.' },
        { step: 4, title: 'Enforcement or Block', description: 'Valid outreach proceeds; non-compliant attempts are blocked with clear operator feedback.' },
      ],
    },
    capabilities: [
      { title: 'Zero-Bypass DNC Registry', description: 'Permanently suppress opted-out phone numbers across all voice and messaging channels.', tag: 'Suppression' },
      { title: 'Local-Time Quiet Hour Windows', description: 'Block outreach outside approved local customer calling windows (e.g. 9:00 AM - 8:00 PM).', tag: 'Timezones' },
      { title: 'Outreach Frequency Capping', description: 'Limit total contact attempts per lead within 24-hour intervals to prevent lead fatigue.', tag: 'Frequency' },
      { title: 'Channel Preference Gating', description: 'Enforce explicit customer channel preferences (e.g. WhatsApp only, do not call).', tag: 'Preferences' },
    ],
    benefits: [
      { title: 'Protect Brand Reputation', description: 'Prevent embarrassing complaints from contacting customers who explicitly asked not to be called.' },
      { title: 'Automated Rep Discipline', description: 'Software enforces communication guardrails automatically so reps never have to guess rules.' },
      { title: 'Auditable Compliance Defense', description: 'Maintain a complete log of blocked attempts and suppression checks for operational reviews.' },
    ],
    mockupType: 'compliance',
    mockupDisclaimer: 'Abstracted DOM demonstration • Illustrates pre-dispatch policy evaluation engine',
    relatedFeatures: ['calls', 'messaging', 'administration'],
  },
  {
    id: 'ai',
    slug: 'ai',
    name: 'AI-Assisted Workflows',
    title: 'AI-Assisted Workflows',
    number: '09',
    category: 'Tenant-Isolated Intelligence',
    shortDescription: 'Apply AI assistance to transcription, summarization, and classification with strict tenant isolation.',
    description: 'Execute server-side AI processing for call summaries, transcription, sentiment tagging, and text assistance with tenant quotas and human-in-the-loop review.',
    longDescription: 'Execute server-side AI processing for call summaries, transcription, sentiment tagging, and text assistance with tenant quotas and human-in-the-loop review.',
    icon: 'Sparkles',
    route: '/features/ai',
    status: 'DOCUMENTED',
    statusBadge: 'Private AI Architecture',
    audience: 'Sales Reps, Telecallers, Team Leads, Security Officers',
    problem: {
      headline: 'Hours wasted on manual call note typing, while private business data risks public AI leaks.',
      description: 'Sales reps spend up to 20% of their day summarizing conversations, while pasting sensitive customer discussions into public AI chatbots violates data privacy.',
      frictions: [
        'Incomplete, hurried call notes that leave future reps confused about past commitments.',
        'Employee copy-pasting customer details into consumer AI tools, risking data exposure.',
        'Lag between call completion and next-action scheduling while reps type notes.',
      ],
    },
    solution: {
      headline: 'Private, server-side AI execution within strict tenant data boundaries.',
      description: 'DialPulse processes call recordings and conversation threads inside isolated server boundaries, generating automatic summaries and suggested next steps with human review.',
      workflowSteps: [
        { step: 1, title: 'Audio Capture & Transcription', description: 'Recorded call audio processes through private speech-to-text with dual-track clarity.' },
        { step: 2, title: 'In-Tenant LLM Processing', description: 'AI extracts key discussion points, customer intent, and agreed commitments.' },
        { step: 3, title: 'Operator Review & Verification', description: 'Telecaller reviews the suggested summary, edits details, and confirms with one click.' },
        { step: 4, title: 'Automatic Timeline Filing', description: 'Verified summary and suggested next touchpoint date attach to the lead profile.' },
      ],
    },
    capabilities: [
      { title: 'In-Tenant Speech-to-Text', description: 'Generate structured transcriptions from completed voice calls without third-party data leaks.', tag: 'Transcription' },
      { title: 'Contextual Conversation Summaries', description: 'Extract key objections, pricing discussions, and buyer intent into concise bullet points.', tag: 'Summarization' },
      { title: 'Suggested Next Actions', description: 'Recommend follow-up tasks, callback dates, and stage progression based on call outcomes.', tag: 'Automation' },
      { title: 'Human-in-the-Loop Review Gate', description: 'Require operator confirmation before AI suggestions append to customer records.', tag: 'Safeguards' },
    ],
    benefits: [
      { title: 'Save Hours per Rep Daily', description: 'Cut administrative logging time, enabling telecallers to complete more quality conversations.' },
      { title: 'Absolute Data Isolation', description: 'Customer conversations are processed through private enterprise APIs and never train public models.' },
      { title: 'Consistent CRM Documentation', description: 'Every lead record contains structured, high-quality notes regardless of operator typing speed.' },
    ],
    mockupType: 'ai',
    mockupDisclaimer: 'Abstracted DOM demonstration • Illustrates in-tenant call transcription and summary suggestion',
    relatedFeatures: ['calls', 'messaging', 'tickets', 'security'],
  },
  {
    id: 'administration',
    slug: 'administration',
    name: 'Administration & Governance',
    title: 'Administration & Governance',
    number: '10',
    category: 'Tenant Governance',
    shortDescription: 'Control the environment around the work with user provisioning, policies, and audit visibility.',
    description: 'Centralize tenant configuration, team assignment, communication rule definitions, and comprehensive audit trails for operational governance.',
    longDescription: 'Centralize tenant configuration, team assignment, communication rule definitions, and comprehensive audit trails for operational governance.',
    icon: 'Sliders',
    route: '/features/administration',
    status: 'DOCUMENTED',
    statusBadge: 'Platform Control',
    audience: 'IT Directors, System Administrators, Compliance Officers, Operations Executives',
    problem: {
      headline: 'Chaotic configuration spread across scattered settings panels with no change visibility.',
      description: 'When tenant settings lack centralized governance, administrator actions go unrecorded, permissions drift, and communication guardrails fail silently.',
      frictions: [
        'Unknown team members modifying communication rules or quiet hours without documentation.',
        'Difficulty provisioning and deprovisioning users during team turnover.',
        'Zero centralized record of who altered pipeline stages or granted export privileges.',
      ],
    },
    solution: {
      headline: 'Centralized tenant governance, policy definitions, and structured audit logs.',
      description: 'DialPulse provides a single control plane for user provisioning, team structure, communication safeguard thresholds, and immutable system audit logs.',
      workflowSteps: [
        { step: 1, title: 'User Lifecycle Management', description: 'Invite, configure, and deactivate team members with instant session revocation.' },
        { step: 2, title: 'Communication Policy Tuning', description: 'Set tenant-wide quiet hours, max attempts per 24 hours, and suppression list parameters.' },
        { step: 3, title: 'Role Assignment & Scoping', description: 'Assign users to teams and operational tiers with least-privilege access enforcement.' },
        { step: 4, title: 'System Audit Log Inspection', description: 'Inspect tamper-evident records of all administrative configuration changes and exports.' },
      ],
    },
    capabilities: [
      { title: 'Centralized User Provisioning', description: 'Manage operator accounts, credentials, and team assignments from a unified console.', tag: 'IAM' },
      { title: 'Tenant Policy Thresholds', description: 'Configure operational quiet-hour windows, DNC rules, and messaging dispatch caps.', tag: 'Policies' },
      { title: 'Immutable Administrative Audit Logs', description: 'Log all role changes, data exports, and policy adjustments with operator attribution.', tag: 'Auditability' },
      { title: 'Database Tenant Partitioning', description: 'Ensure tenant configurations and records operate within isolated database schemas.', tag: 'Isolation' },
    ],
    benefits: [
      { title: 'Full Operational Control', description: 'Maintain total oversight over who can access, modify, or export company customer data.' },
      { title: 'Audit-Ready Record Keeping', description: 'Provide compliance and security teams with transparent logs of administrative actions.' },
      { title: 'Effortless Team Scaling', description: 'Quickly provision new reps with pre-configured team permissions and guardrails.' },
    ],
    mockupType: 'administration',
    mockupDisclaimer: 'Abstracted DOM demonstration • Illustrates tenant administration console and policy controls',
    relatedFeatures: ['teams', 'compliance', 'imports-exports'],
  },
];

export const FEATURE_RECORDS = FEATURE_DEFINITIONS;

export interface RoleFeatureMapping {
  role: string;
  tagline: string;
  primaryFeatures: { name: string; route: string; context: string }[];
}

export const ROLE_FEATURE_VIEWS: RoleFeatureMapping[] = [
  {
    role: 'Telecaller',
    tagline: 'Focused daily execution with direct customer context and rapid disposition.',
    primaryFeatures: [
      { name: 'Leads', route: '/features/leads', context: 'Assigned pipelines, priority tags, and customer notes' },
      { name: 'Calls', route: '/features/calls', context: 'Outcome logging, disposition notes, and call history' },
      { name: 'Messaging', route: '/features/messaging', context: 'Two-way conversational history and template dispatch' },
      { name: 'Follow-up Context', route: '/features/leads', context: 'Scheduled reminders and next touchpoint alerts' },
    ],
  },
  {
    role: 'Team Lead',
    tagline: 'Queue monitoring, workload rebalancing, and team execution tracking.',
    primaryFeatures: [
      { name: 'Leads', route: '/features/leads', context: 'Team lead distribution and stale-stage reassignment' },
      { name: 'Teams', route: '/features/teams', context: 'Telecaller assignment, team rosters, and queue status' },
      { name: 'Reports', route: '/features/reports', context: 'Daily team pacing, conversion velocity, and call durations' },
      { name: 'Activity Visibility', route: '/features/reports', context: 'Real-time interaction streams and escalation flags' },
    ],
  },
  {
    role: 'Operations / IT',
    tagline: 'Platform safeguards, bulk data integrity, security boundaries, and tenant rules.',
    primaryFeatures: [
      { name: 'Administration', route: '/features/administration', context: 'User provisioning, RBAC definitions, and system settings' },
      { name: 'Imports & Exports', route: '/features/imports-exports', context: 'Background job queues, schema validation, and export approvals' },
      { name: 'Security', route: '/security', context: 'Tenant boundary verification and audit log monitoring' },
      { name: 'Configuration', route: '/features/compliance', context: 'Quiet-hour windows, DND lists, and frequency cap policies' },
    ],
  },
  {
    role: 'Owner / Business Leader',
    tagline: 'High-level operational health, conversion visibility, and cross-team productivity.',
    primaryFeatures: [
      { name: 'Reporting', route: '/features/reports', context: 'Executive dashboards, conversion pipelines, and trend models' },
      { name: 'Teams', route: '/features/teams', context: 'Department organizational structure and capacity balance' },
      { name: 'Leads', route: '/features/leads', context: 'Top-of-funnel intake volume and pipeline health' },
      { name: 'Operational Visibility', route: '/features/reports', context: 'Overall customer lifecycle efficiency and response rates' },
    ],
  },
];
