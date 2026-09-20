/**
 * DialPulse Commercial Architecture & Central Pricing Configuration
 * 
 * CRITICAL COMMERCIAL TRUTH:
 * DialPulse public pricing is currently undergoing final operational validation.
 * DO NOT INVENT PRICES, DISCOUNTS, SEAT MINIMUMS, OR FAKE QUOTAS.
 * All commercial values are parameterized here so business teams can update
 * values instantly without modifying presentation components.
 */

export interface PricingPlan {
  id: 'core' | 'pro' | 'business' | 'enterprise';
  name: string;
  tagline: string;
  description: string;
  monthlyPrice: string; // "TBD" or commercial status string
  annualPrice: string;  // "TBD" or commercial status string
  billingUnit: string;
  commercialStatus: 'tbd' | 'contact_sales' | 'custom';
  highlighted: boolean;
  badge?: string;
  ctaText: string;
  ctaHref: string;
  keyCapabilities: string[];
  bestFor: string;
  operationalLimitNote?: string;
}

export interface FeatureComparisonItem {
  id: string;
  name: string;
  description: string;
  whoNeedsIt: string;
  availability: {
    core: boolean | string;
    pro: boolean | string;
    business: boolean | string;
    enterprise: boolean | string;
  };
}

export interface FeatureCategory {
  id: string;
  name: string;
  description: string;
  features: FeatureComparisonItem[];
}

export interface PricingAddOn {
  id: string;
  title: string;
  category: 'telephony' | 'automation' | 'ai' | 'storage' | 'services';
  description: string;
  commercialModel: string;
  unit: string;
  verifiedDetails: string[];
}

export interface DecisionOption {
  id: string;
  title: string;
  problemStatement: string;
  recommendedPlanId: 'core' | 'pro' | 'business' | 'enterprise';
  whyThisPlan: string;
  keyModules: string[];
}

export interface PricingFAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'billing' | 'telephony' | 'compliance' | 'enterprise';
}

export const PRICING_METADATA = {
  currencyCode: 'INR',
  currencySymbol: '₹',
  annualDiscountAvailable: false,
  annualDiscountNote: 'Annual and multi-year billing terms are customized per organization agreement.',
  pricingPhase: 'Commercial Architecture Review',
  notice: 'Pricing details for public self-serve tiers are currently being finalized. Custom enterprise and private waitlist deployments are active.',
};

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'core',
    name: 'Core',
    tagline: 'Lead management & foundational CRM',
    description: 'Essential customer record management, stage progression, and basic communication logs for emerging sales teams.',
    monthlyPrice: 'TBD',
    annualPrice: 'TBD',
    billingUnit: 'per user / month (pricing being finalized)',
    commercialStatus: 'tbd',
    highlighted: false,
    ctaText: 'Talk to Sales',
    ctaHref: '/contact',
    bestFor: 'Growing teams transitioning away from spreadsheets into structured pipeline tracking.',
    keyCapabilities: [
      'Multi-stage lead pipeline with Kanban views',
      'Unified activity history & contact records',
      'Manual communication logging (Calls, Notes, SMS)',
      'Basic lead assignment & team ownership',
      'Standard CSV import and export engine',
      'Standard security & tenant database separation',
    ],
    operationalLimitNote: 'Designed for standard lead tracking without automated compliance locks.',
  },
  {
    id: 'pro',
    name: 'Pro',
    tagline: 'High-volume telecalling & team presence',
    description: 'Built-in WebRTC calling softphone, multi-channel messaging, and real-time team presence for active telecalling desks.',
    monthlyPrice: 'TBD',
    annualPrice: 'TBD',
    billingUnit: 'per user / month (pricing being finalized)',
    commercialStatus: 'tbd',
    highlighted: true,
    badge: 'Popular for Telecalling',
    ctaText: 'Contact Sales',
    ctaHref: '/contact',
    bestFor: 'Sales operations requiring in-browser dialing, instantaneous call logging, and agent oversight.',
    keyCapabilities: [
      'Everything in Core, plus:',
      'In-browser WebRTC softphone with click-to-dial',
      'Automated dual-track call recording & audio playback',
      'Omnichannel WhatsApp & SMS two-way messaging',
      'Mandatory call disposition tagging & notes capture',
      'Live agent presence & supervisor status visibility',
      'Lead distribution rules (Round-robin / Ownership)',
    ],
    operationalLimitNote: 'Telephony carrier minutes/SMS billed via carrier integration or custom bundle.',
  },
  {
    id: 'business',
    name: 'Business',
    tagline: 'Automated cadences, compliance & analytics',
    description: 'Disciplined follow-up automation, strict quiet-hour & DNC compliance guardrails, and deep handle-time analytics.',
    monthlyPrice: 'TBD',
    annualPrice: 'TBD',
    billingUnit: 'per user / month (pricing being finalized)',
    commercialStatus: 'tbd',
    highlighted: false,
    ctaText: 'Contact Sales',
    ctaHref: '/contact',
    bestFor: 'Structured sales organizations needing regulatory compliance, automated follow-ups, and supervisor analytics.',
    keyCapabilities: [
      'Everything in Pro, plus:',
      'Automated callback reminders & cadence triggers',
      'Zero-bypass DNC verification & opt-out registry',
      'Automated quiet-hour timezone calling restrictions',
      'Handle-time, call duration & pipeline velocity metrics',
      'Hierarchical Role-Based Access Control (Owner/Lead/Caller)',
      'Asynchronous background worker CSV exports',
      'Call frequency capping & fatigue prevention controls',
    ],
    operationalLimitNote: 'Full compliance engine enforced at API and database layer.',
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    tagline: 'Dedicated infrastructure, custom SLAs & AI',
    description: 'Private single-tenant database partitioning, tenant-isolated AI transcription, bespoke integrations, and tailored SLA.',
    monthlyPrice: 'Custom',
    annualPrice: 'Custom',
    billingUnit: 'custom commercial agreement',
    commercialStatus: 'custom',
    highlighted: false,
    badge: 'Bespoke Deployment',
    ctaText: 'Book Architecture Review',
    ctaHref: '/contact',
    bestFor: 'Enterprise organizations requiring dedicated database isolation, custom security audits, and private AI perimeters.',
    keyCapabilities: [
      'Everything in Business, plus:',
      'Dedicated tenant database partition & custom encryption',
      'In-tenant speech-to-text call transcription & AI summaries',
      'Tenant-isolated AI speech processing & summary perimeter',
      'Custom telephony SIP trunks & carrier integrations',
      'Dedicated Customer Success & tailored SLA options',
      'Custom Role-Based Access & SSO/SAML configuration',
      'Comprehensive security review & audit log export',
    ],
    operationalLimitNote: 'Custom infrastructure deployment tailored to organizational requirements.',
  },
];

export const COMPARISON_CATEGORIES: FeatureCategory[] = [
  {
    id: 'core-crm',
    name: 'Core CRM & Pipeline',
    description: 'Lead tracking, custom schemas, and stage progression architecture.',
    features: [
      {
        id: 'lead-pipeline',
        name: 'Visual Kanban Lead Pipeline',
        description: 'Multi-stage customizable visual board reflecting your exact organizational sales progression stages.',
        whoNeedsIt: 'Every sales team needing immediate visibility into active lead stages and bottlenecks.',
        availability: { core: true, pro: true, business: true, enterprise: true },
      },
      {
        id: 'contact-records',
        name: 'Unified Contact History & Notes',
        description: 'Single timeline aggregating every customer touchpoint, interaction note, status change, and communication event.',
        whoNeedsIt: 'Reps and managers needing full context before contacting a prospect.',
        availability: { core: true, pro: true, business: true, enterprise: true },
      },
      {
        id: 'custom-schema',
        name: 'Configurable Lead Fields & Metadata',
        description: 'Support for custom attributes, industry-specific lead properties, and structured field definitions.',
        whoNeedsIt: 'Businesses with specialized qualification criteria or vertical-specific metadata.',
        availability: { core: 'Basic', pro: true, business: true, enterprise: 'Custom' },
      },
      {
        id: 'lead-assignment',
        name: 'Automated Lead Distribution',
        description: 'Rules-based routing including round-robin, territory, and team-based automatic lead distribution.',
        whoNeedsIt: 'Growing teams where manual lead assignment creates response delays or bias.',
        availability: { core: 'Manual', pro: true, business: true, enterprise: 'Custom Algorithms' },
      },
      {
        id: 'global-search',
        name: 'Full-Text Search & Filtering',
        description: 'Sub-second lookup across phone numbers, emails, names, notes, and metadata tags.',
        whoNeedsIt: 'Busy telecallers receiving inbound inquiries or searching historical records.',
        availability: { core: true, pro: true, business: true, enterprise: true },
      },
    ],
  },
  {
    id: 'communication',
    name: 'Communication & Telephony',
    description: 'Embedded WebRTC softphone, recordings, and omnichannel messaging.',
    features: [
      {
        id: 'webrtc-softphone',
        name: 'In-Browser WebRTC Softphone',
        description: 'Zero-hardware dialing directly from the CRM interface with instantaneous connection.',
        whoNeedsIt: 'Telecallers making outbound calls all day without switching between browser and mobile phones.',
        availability: { core: false, pro: true, business: true, enterprise: true },
      },
      {
        id: 'call-recording',
        name: 'Dual-Track Call Audio Recording',
        description: 'Automated dual-channel recording with in-app audio waveform scrubber and playback speed control.',
        whoNeedsIt: 'Sales supervisors conducting quality audits and rep coaching.',
        availability: { core: false, pro: true, business: true, enterprise: true },
      },
      {
        id: 'omnichannel-messaging',
        name: 'WhatsApp & SMS Omnichannel Threads',
        description: 'Centralized two-way text messaging logged directly against customer records.',
        whoNeedsIt: 'Sales teams communicating across WhatsApp and SMS alongside voice calls.',
        availability: { core: 'Manual Log', pro: true, business: true, enterprise: true },
      },
      {
        id: 'disposition-engine',
        name: 'Mandatory Call Dispositions',
        description: 'Enforces outcome logging (Connected, Busy, Callback, Not Interested) before reps can initiate next action.',
        whoNeedsIt: 'Operations managers who cannot afford missing call outcomes or undocumented conversations.',
        availability: { core: false, pro: true, business: true, enterprise: true },
      },
      {
        id: 'sip-trunking',
        name: 'Custom SIP Trunk & Carrier Integration',
        description: 'Direct interconnection with existing telecom providers, PBXs, or regional trunk lines.',
        whoNeedsIt: 'Enterprises with pre-negotiated telecom agreements or private PBX infrastructure.',
        availability: { core: false, pro: false, business: 'Add-on', enterprise: true },
      },
    ],
  },
  {
    id: 'team-ops',
    name: 'Team Operations & RBAC',
    description: 'Organizational hierarchy, supervisor presence, and granular permissions.',
    features: [
      {
        id: 'rbac-tiers',
        name: 'Role-Based Access Control (RBAC)',
        description: 'Strict separation between Owner, Team Lead, Telecaller, and Admin permissions.',
        whoNeedsIt: 'Organizations with multi-tier hierarchy where reps should only access assigned records.',
        availability: { core: 'Standard', pro: 'Standard', business: true, enterprise: 'Custom Roles' },
      },
      {
        id: 'agent-presence',
        name: 'Real-Time Agent Presence Telemetry',
        description: 'Live visibility into caller availability: Available, On Call, Break, or Offline.',
        whoNeedsIt: 'Floor managers balancing call distribution and monitoring active team capacity.',
        availability: { core: false, pro: true, business: true, enterprise: true },
      },
      {
        id: 'team-queues',
        name: 'Team-Specific Queues & Routing',
        description: 'Segregate leads by team or branch with dedicated manager oversight.',
        whoNeedsIt: 'Multi-branch or specialized product teams managing distinct sales pipelines.',
        availability: { core: false, pro: 'Basic', business: true, enterprise: true },
      },
    ],
  },
  {
    id: 'reporting',
    name: 'Reporting & Analytics',
    description: 'Operational metrics, handle times, and asynchronous business exports.',
    features: [
      {
        id: 'call-metrics',
        name: 'Handle-Time & Telephony Metrics',
        description: 'Deep visibility into talk time, ring duration, connection rates, and daily attempt volume.',
        whoNeedsIt: 'Operations leaders measuring outbound calling efficiency and conversion velocity.',
        availability: { core: 'Basic', pro: true, business: true, enterprise: true },
      },
      {
        id: 'pipeline-velocity',
        name: 'Pipeline Velocity & Conversion Funnel',
        description: 'Stage duration analysis tracking how quickly leads move from ingestion to closed revenue.',
        whoNeedsIt: 'Sales executives forecasting monthly attainment and detecting process stalls.',
        availability: { core: 'Basic', pro: true, business: true, enterprise: true },
      },
      {
        id: 'async-csv-exports',
        name: 'Asynchronous Background CSV Exports',
        description: 'Process hundreds of thousands of records in background workers without freezing UI threads.',
        whoNeedsIt: 'Data analysts needing large-scale extraction for external BI reporting.',
        availability: { core: 'Standard', pro: 'Standard', business: true, enterprise: true },
      },
    ],
  },
  {
    id: 'automation',
    name: 'Automation & Cadence Discipline',
    description: 'Scheduled reminders, follow-up timers, and operational triggers.',
    features: [
      {
        id: 'callback-scheduler',
        name: 'Automated Callback Reminder Triggers',
        description: 'Persistent calendar alerts and softphone prompt when a scheduled callback arrives.',
        whoNeedsIt: 'Reps managing multiple follow-up commitments who cannot risk dropped leads.',
        availability: { core: 'Manual', pro: true, business: true, enterprise: true },
      },
      {
        id: 'cadence-engine',
        name: 'Multi-Touch Follow-up Sequences',
        description: 'Pre-configured cadences combining call attempts, SMS notifications, and scheduled check-ins.',
        whoNeedsIt: 'High-velocity sales teams enforcing a consistent touchpoint regimen for every new inquiry.',
        availability: { core: false, pro: false, business: true, enterprise: true },
      },
      {
        id: 'worker-capacity',
        name: 'Dedicated Worker Queues',
        description: 'Isolated job scheduling queues guaranteeing time-sensitive triggers fire reliably.',
        whoNeedsIt: 'Operations running thousands of simultaneous scheduled triggers.',
        availability: { core: false, pro: false, business: 'Standard', enterprise: 'Dedicated' },
      },
    ],
  },
  {
    id: 'compliance',
    name: 'Compliance & Regulatory Guardrails',
    description: 'Zero-bypass DNC verification, quiet-hour locks, and immutable logs.',
    features: [
      {
        id: 'zero-bypass-dnc',
        name: 'Zero-Bypass DNC & Opt-Out Registry',
        description: 'Dial button is programmatically disabled when a phone number exists on the DNC list.',
        whoNeedsIt: 'Every telecalling operation subject to telecom consumer protection regulations.',
        availability: { core: false, pro: false, business: true, enterprise: true },
      },
      {
        id: 'quiet-hours',
        name: 'Automated Quiet-Hour Timezone Locks',
        description: 'Hard software blockade preventing outbound calls outside permitted regulatory hours (e.g. 9 AM - 8 PM).',
        whoNeedsIt: 'National sales operations calling across varying timezones to prevent illegal off-hours contact.',
        availability: { core: false, pro: false, business: true, enterprise: true },
      },
      {
        id: 'frequency-capping',
        name: 'Call Frequency Capping & Throttling',
        description: 'Limits max attempts per contact in 24 hours to prevent harassment flags and spam tagging.',
        whoNeedsIt: 'High-volume outbound operations protecting carrier reputation and customer goodwill.',
        availability: { core: false, pro: false, business: true, enterprise: true },
      },
      {
        id: 'audit-logging',
        name: 'Immutable Audit Trail',
        description: 'Cryptographically consistent audit logs recording every contact view, call, export, and record change.',
        whoNeedsIt: 'Compliance officers and IT administrators undergoing regulatory compliance audits.',
        availability: { core: false, pro: false, business: true, enterprise: true },
      },
    ],
  },
  {
    id: 'ai-assistance',
    name: 'In-Tenant AI Assistance',
    description: 'Private speech-to-text, call summaries, and zero public model training.',
    features: [
      {
        id: 'ai-transcription',
        name: 'Speech-to-Text Call Transcription',
        description: 'Converts dual-track voice recordings into searchable text conversations with speaker diarization.',
        whoNeedsIt: 'Supervisors reviewing calls and reps referencing exact conversational details.',
        availability: { core: false, pro: 'Add-on', business: 'Add-on', enterprise: true },
      },
      {
        id: 'ai-summary',
        name: 'Automated Post-Call Action Extraction',
        description: 'Generates objective 2-sentence call summaries, extracted action items, and sentiment flags.',
        whoNeedsIt: 'Telecallers who spend 25% of their day typing notes after each conversation.',
        availability: { core: false, pro: false, business: 'Add-on', enterprise: true },
      },
      {
        id: 'ai-boundary',
        name: 'Zero Public Training Perimeter',
        description: 'Guarantees voice data, transcripts, and CRM records are NEVER shared or used to train third-party models.',
        whoNeedsIt: 'Security-conscious enterprises with strict proprietary customer data boundaries.',
        availability: { core: 'N/A', pro: 'N/A', business: true, enterprise: true },
      },
    ],
  },
  {
    id: 'infrastructure',
    name: 'Security & Database Isolation',
    description: 'PostgreSQL partitioning, encryption, and custom SLAs.',
    features: [
      {
        id: 'tenant-isolation',
        name: 'Multi-Tenant Database Separation',
        description: 'Logical separation with tenant_id foreign-key isolation preventing cross-tenant data leaks.',
        whoNeedsIt: 'Every customer handling private customer records and financial discussions.',
        availability: { core: 'Logical', pro: 'Logical', business: 'Logical', enterprise: 'Dedicated Partition' },
      },
      {
        id: 'kms-encryption',
        name: 'At-Rest & In-Transit KMS Encryption',
        description: 'TLS 1.3 encryption for in-flight telemetry and AES-256 KMS encryption for stored audio files.',
        whoNeedsIt: 'Enterprise security reviews requiring verified cryptographic protections.',
        availability: { core: true, pro: true, business: true, enterprise: 'Custom Keys' },
      },
      {
        id: 'custom-sla',
        name: 'Guaranteed Support SLA',
        description: 'Response time guarantees with dedicated escalation pathways for production telemetry.',
        whoNeedsIt: 'Mission-critical operations whose primary revenue stream depends on continuous dialing.',
        availability: { core: 'Standard', pro: 'Standard', business: 'Priority', enterprise: 'Tailored SLA' },
      },
    ],
  },
];

export const DECISION_OPTIONS: DecisionOption[] = [
  {
    id: 'leads',
    title: 'Organize Leads & Stop Leaks',
    problemStatement: 'Inquiries are slipping through spreadsheets and uncoordinated WhatsApp chats without clear ownership.',
    recommendedPlanId: 'core',
    whyThisPlan: 'Core provides Kanban stage progression, contact timelines, and structured lead assignment without telephony overhead.',
    keyModules: ['Lead Pipeline', 'Contact Timeline', 'Assignment Engine'],
  },
  {
    id: 'telecalling',
    title: 'Equip High-Volume Calling Reps',
    problemStatement: 'Reps dial manually from cell phones; calls are unrecorded, untracked, and supervisors have zero live visibility.',
    recommendedPlanId: 'pro',
    whyThisPlan: 'Pro integrates an in-browser WebRTC softphone, automated dual-track recordings, and live supervisor presence telemetry.',
    keyModules: ['WebRTC Softphone', 'Audio Recordings', 'Agent Presence', 'Dispositions'],
  },
  {
    id: 'compliance',
    title: 'Enforce Compliance & Follow-Up Cadence',
    problemStatement: 'Risk of contacting DNC numbers, off-hours calling fines, and reps failing to execute timely follow-ups.',
    recommendedPlanId: 'business',
    whyThisPlan: 'Business locks down zero-bypass DNC verification, quiet-hour timezone barriers, and automated callback scheduling.',
    keyModules: ['Zero-Bypass DNC', 'Quiet-Hour Locks', 'Cadence Triggers', 'Handle-Time BI'],
  },
  {
    id: 'enterprise',
    title: 'Deploy Dedicated Infrastructure & AI',
    problemStatement: 'Need dedicated database partitioning, in-tenant private speech AI, custom carrier SIP trunks, and tailored SLAs.',
    recommendedPlanId: 'enterprise',
    whyThisPlan: 'Enterprise provides dedicated single-tenant database partitions, private AI perimeters, and custom contract engineering.',
    keyModules: ['Dedicated Partition', 'In-Tenant AI', 'SIP Interconnect', 'Tailored SLA'],
  },
];

export const PRICING_ADDONS: PricingAddOn[] = [
  {
    id: 'telephony-capacity',
    title: 'Additional Telephony Channels & Regional DIDs',
    category: 'telephony',
    description: 'Provision dedicated inbound numbers, local outbound caller IDs, and concurrent SIP trunk channels.',
    commercialModel: 'Carrier Pass-Through / Custom Trunk',
    unit: 'Per active DID channel',
    verifiedDetails: [
      'Local and national telephone number provisioning',
      'Configurable caller ID mapping per agent or queue',
      'Direct integration with carrier trunks (Twilio / Exotel / SIP)',
    ],
  },
  {
    id: 'scheduled-automation',
    title: 'High-Volume Async Worker Capacity',
    category: 'automation',
    description: 'Scale background worker clusters for heavy bulk operations, webhook delivery, and scheduled data transformations.',
    commercialModel: 'Configured per throughput requirement',
    unit: 'Worker cluster capacity',
    verifiedDetails: [
      'Isolated Redis queue priority for mission-critical jobs',
      'Rapid bulk CSV processing with zero UI latency',
      'High-throughput webhooks to external enterprise systems',
    ],
  },
  {
    id: 'ai-transcription-pack',
    title: 'In-Tenant AI Speech-to-Text & Summaries',
    category: 'ai',
    description: 'Private transcription minutes and LLM context extraction processing within your isolated tenant boundary.',
    commercialModel: 'Usage-based compute allocation',
    unit: 'Audio minutes processed',
    verifiedDetails: [
      'Dual-track speaker diarization (Rep vs Prospect)',
      'Automated 2-sentence summary and action item capture',
      'Zero model retention — data stays within your tenant perimeter',
    ],
  },
  {
    id: 'extended-vault',
    title: 'Long-Term Encrypted Audio Retention',
    category: 'storage',
    description: 'Extend call recording storage beyond standard operational periods to satisfy multi-year statutory compliance requirements.',
    commercialModel: 'Per gigabyte cold storage tier',
    unit: 'Monthly cold storage archive',
    verifiedDetails: [
      'AES-256 encrypted archival in geo-redundant vaults',
      'Automated regulatory lifecycle deletion policies',
      'Tamper-evident checksums for legal admissibility',
    ],
  },
  {
    id: 'migration-services',
    title: 'Architecture Onboarding & CRM Data Migration',
    category: 'services',
    description: 'Dedicated DialPulse solution engineers handling historical data schema mapping, cleanup, and softphone cutover.',
    commercialModel: 'Fixed-scope engagement',
    unit: 'Project milestone basis',
    verifiedDetails: [
      'Full extraction and deduplication of legacy CRM data',
      'PBX / telephony routing configuration and audio testing',
      'Role hierarchy configuration and team training workshops',
    ],
  },
];

export const PRICING_FAQ: PricingFAQItem[] = [
  {
    id: 'per-user-structure',
    question: 'Is DialPulse pricing structured per user seat or per workspace?',
    answer: 'DialPulse commercial tiers are structured on a per-user, per-month seat model. Each seat grants role-based access (Owner, Team Lead, Telecaller, or Admin) to the CRM, with telephony and automation capabilities scaled according to your tier. Public self-serve seat pricing is being finalized, and customized quotes are provided during architecture reviews.',
    category: 'billing',
  },
  {
    id: 'annual-billing',
    question: 'Is there an annual billing option or multi-year commitment discount?',
    answer: 'Yes, annual and multi-year billing schedules are supported. Because public commercial percentages are undergoing legal and operational review, annual rates will be announced when public sign-ups go live. Organizations engaging in enterprise architecture reviews can receive tailored multi-year pricing structures directly from sales.',
    category: 'billing',
  },
  {
    id: 'free-tier',
    question: 'Is there a free tier or trial period available?',
    answer: 'We do not currently offer an open public free plan. Because DialPulse enforces rigorous multi-tenant PostgreSQL database isolation, WebRTC carrier routing, and regulatory compliance infrastructure, access is provided via guided architecture reviews and private onboarding. You can request a live guided walkthrough to inspect the platform.',
    category: 'billing',
  },
  {
    id: 'telephony-billing',
    question: 'Are telephony calls and WhatsApp/SMS messages charged separately?',
    answer: 'Yes. Voice minutes and SMS/WhatsApp messages depend on carrier pass-through rates and regional telecom termination costs. Depending on your setup, you can either connect your existing telecom carrier (SIP trunks / Twilio / Exotel) with zero platform markup or purchase an all-inclusive telephony bundle tailored to your anticipated call volume.',
    category: 'telephony',
  },
  {
    id: 'changing-seats',
    question: 'Can our team add or adjust seats as our sales organization expands?',
    answer: 'Yes. Workspace administrators can add or reassign seats through tenant configuration at any time. When team members change or new batches of telecallers are onboarded, roles and softphone credentials can be provisioned immediately without rebuilding your CRM schema.',
    category: 'billing',
  },
  {
    id: 'ai-costs',
    question: 'How does in-tenant AI transcription and call summarization affect pricing?',
    answer: 'Our AI assistance engine operates within a strict, tenant-isolated perimeter using specialized speech-to-text models. To maintain complete transparency, AI audio transcription is allocated based on actual audio minutes processed, ensuring you never pay for unused artificial intelligence capacity.',
    category: 'compliance',
  },
  {
    id: 'implementation-support',
    question: 'Do you provide onboarding, data migration, and team training support?',
    answer: 'Yes. Every Business and Enterprise deployment includes dedicated onboarding assistance. Our solution engineering team assists with CSV contact schema mapping, user role configuration, carrier trunk routing, and supervisor dashboard orientation to ensure zero downtime during cutover.',
    category: 'enterprise',
  },
  {
    id: 'cancellation-export',
    question: 'How do cancellation and data export work?',
    answer: 'We believe your operational data belongs strictly to you. Workspace owners can generate asynchronous, full-database CSV and JSON exports of all leads, interaction histories, call metadata, and audit logs at any time. Commercial agreements define standard notice periods without restrictive data lock-in.',
    category: 'billing',
  },
  {
    id: 'security-certifications',
    question: 'What security standards and data isolation boundaries apply to commercial tiers?',
    answer: 'All plans run on multi-tenant PostgreSQL database schemas with strict tenant_id foreign-key enforcement, TLS 1.3 in-transit encryption, and AES-256 at-rest storage for call audio. Enterprise deployments have the option of dedicated single-tenant database partitions, custom KMS encryption keys, and signed Data Processing Agreements (DPAs).',
    category: 'compliance',
  },
  {
    id: 'commercial-quote',
    question: 'How can our team get an exact commercial quote today?',
    answer: 'Simply click "Book Architecture Review" or "Contact Sales" to schedule a brief consultation. Our team will review your seat count, expected calling volume, compliance mandates, and deployment timeline to provide a clear, transparent commercial proposal within 24 hours.',
    category: 'enterprise',
  },
];
