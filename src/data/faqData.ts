export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: FAQCategoryId;
  learnMoreHref?: string;
  learnMoreLabel?: string;
  highlighted?: boolean;
}

export type FAQCategoryId = 
  | 'product'
  | 'leads'
  | 'calls'
  | 'teams'
  | 'compliance'
  | 'ai'
  | 'security'
  | 'imports'
  | 'pricing';

export interface FAQCategoryMeta {
  id: FAQCategoryId;
  label: string;
  description: string;
}

export const FAQ_CATEGORIES: FAQCategoryMeta[] = [
  { id: 'product', label: 'PRODUCT', description: 'Architecture, scope, and foundational platform capabilities.' },
  { id: 'leads', label: 'LEADS & SALES', description: 'Lead ingestion, server-side scoping, custom fields, and access.' },
  { id: 'calls', label: 'CALLS & MESSAGING', description: 'Telecalling timelines, WhatsApp, SMS, and communication controls.' },
  { id: 'teams', label: 'TEAMS & REPORTING', description: 'Role-based access, team hierarchies, and operational analytics.' },
  { id: 'compliance', label: 'COMPLIANCE', description: 'Opt-outs, quiet hours, fatigue thresholds, and technical safeguards.' },
  { id: 'ai', label: 'AI', description: 'Server-side Gemini workflows, redaction, transcription, and tenant boundaries.' },
  { id: 'security', label: 'SECURITY', description: 'Multi-tenant isolation, authorization, rate limiting, and audit trails.' },
  { id: 'imports', label: 'IMPORTS & EXPORTS', description: 'Bulk file ingestion, background processing, and audited exports.' },
  { id: 'pricing', label: 'PRICING & ACCOUNT', description: 'Commercial terms, account setup, and contact routing.' },
];

export const FAQ_ITEMS: FAQItem[] = [
  // --------------------------------
  // PRODUCT
  // --------------------------------
  {
    id: 'prod-what-is-dialpulse',
    category: 'product',
    question: 'What is DialPulse?',
    answer: 'DialPulse is a customer operations platform that brings lead management, communication workflows, team operations, reporting, compliance controls and AI-assisted capabilities into one system.',
    learnMoreHref: '/product',
    learnMoreLabel: 'Explore Product Architecture',
    highlighted: true,
  },
  {
    id: 'prod-what-does-it-manage',
    category: 'product',
    question: 'What does DialPulse help teams manage?',
    answer: 'DialPulse is designed to bring together customer leads, calls, messages, support workflows, team activity, reporting, imports/exports and operational controls.',
    learnMoreHref: '/product',
    learnMoreLabel: 'View Core Capabilities',
  },
  {
    id: 'prod-who-is-it-designed-for',
    category: 'product',
    question: 'Who is DialPulse designed for?',
    answer: 'DialPulse is designed around sales, telecalling and customer operations workflows where teams need structured lead management, communication, follow-up and visibility.',
    learnMoreHref: '/solutions',
    learnMoreLabel: 'See Solutions & Workflows',
    highlighted: true,
  },
  {
    id: 'prod-is-it-only-a-crm',
    category: 'product',
    question: 'Is DialPulse only a CRM?',
    answer: 'CRM functionality is at the center of the platform, but the product also includes communication workflows, tickets, team operations, reporting, compliance controls, data workflows and AI-assisted capabilities.',
    learnMoreHref: '/product',
    learnMoreLabel: 'Explore the Feature Breakdown',
  },
  {
    id: 'prod-configurable-teams',
    category: 'product',
    question: 'Can DialPulse be configured for different teams?',
    answer: 'Yes. DialPulse supports role-based access and team-level scoping so different users can work with different levels of visibility and control.',
    learnMoreHref: '/features/teams',
    learnMoreLabel: 'Review Team Hierarchy Features',
  },

  // --------------------------------
  // LEADS & SALES
  // --------------------------------
  {
    id: 'leads-import-existing',
    category: 'leads',
    question: 'Can I import existing leads into DialPulse?',
    answer: 'Yes. The platform supports bulk lead ingestion from structured files, with imported records processed through validation and asynchronous background jobs.',
    learnMoreHref: '/features/leads',
    learnMoreLabel: 'Learn About Lead Management',
  },
  {
    id: 'leads-different-access',
    category: 'leads',
    question: 'Can users have different access to leads?',
    answer: 'Yes. Access is governed by server-side role and scope rules. Different roles can have self, team, multi-team or company-level visibility depending on their permissions.',
    learnMoreHref: '/features/teams',
    learnMoreLabel: 'Review Role Scoping',
  },
  {
    id: 'leads-custom-fields',
    category: 'leads',
    question: 'Can leads contain custom fields?',
    answer: 'Yes. Lead records support tenant-defined custom fields for additional business information.',
  },
  {
    id: 'leads-export-leads',
    category: 'leads',
    question: 'Can leads be exported?',
    answer: 'Authorized users can request lead exports. Export operations are permission-controlled, require explicit confirmation in the current workflow, and may run as background jobs.',
  },
  {
    id: 'leads-telecaller-visibility',
    category: 'leads',
    question: 'Can telecallers see every lead in the company?',
    answer: "Not necessarily. Access depends on the user's role and scope. Operational roles can be restricted to records they own or their authorized team scope.",
  },

  // --------------------------------
  // CALLS & MESSAGING
  // --------------------------------
  {
    id: 'comm-calling-workflows',
    category: 'calls',
    question: 'Does DialPulse support calling workflows?',
    answer: 'Yes. DialPulse records call interactions including outcomes, durations, timestamps, notes and related lead information.',
    learnMoreHref: '/features/calling',
    learnMoreLabel: 'Inspect Call Management',
  },
  {
    id: 'comm-messaging-support',
    category: 'calls',
    question: 'Does DialPulse support messaging?',
    answer: 'The platform supports messaging workflows involving WhatsApp and SMS, including message content and delivery-related metadata.',
    learnMoreHref: '/features/messaging',
    learnMoreLabel: 'See Omnichannel Messaging',
  },
  {
    id: 'comm-preference-enforcement',
    category: 'calls',
    question: 'Can communication preferences be enforced?',
    answer: 'Yes. DialPulse includes technical controls for opt-outs, blocked contacts, temporary pauses and channel restrictions.',
    learnMoreHref: '/features/compliance',
    learnMoreLabel: 'Explore Compliance Safeguards',
  },
  {
    id: 'comm-outreach-limits',
    category: 'calls',
    question: 'Does DialPulse limit repeated outreach?',
    answer: 'Yes. The compliance layer includes frequency and fatigue controls intended to prevent outreach from exceeding configured thresholds.',
  },
  {
    id: 'comm-quiet-hours',
    category: 'calls',
    question: 'Does DialPulse have quiet hours?',
    answer: 'Yes. The current compliance implementation evaluates configured communication activity against a quiet-hours window.',
  },
  {
    id: 'comm-call-notes',
    category: 'calls',
    question: 'Can I store call notes?',
    answer: 'Yes. Call records can include notes associated with the interaction.',
  },
  {
    id: 'comm-audio-recording-storage',
    category: 'calls',
    question: 'Does DialPulse store audio recordings directly in the database?',
    answer: 'The current application model stores an optional recording URL rather than raw audio directly in the primary relational database. The final storage location and retention behavior of recorded audio depend on the configured recording infrastructure.',
  },

  // --------------------------------
  // TEAMS & REPORTING
  // --------------------------------
  {
    id: 'team-roles-supported',
    category: 'teams',
    question: 'Can DialPulse support different team roles?',
    answer: 'Yes. The platform uses role-based access controls covering operational users, team management and higher-level administrative roles.',
    learnMoreHref: '/features/teams',
    learnMoreLabel: 'Learn More About Role Controls',
  },
  {
    id: 'team-lead-vs-agent-views',
    category: 'teams',
    question: 'Can team leads have a different view from telecallers?',
    answer: 'Yes. Access can be scoped according to role and team relationships.',
  },
  {
    id: 'team-reporting-scope',
    category: 'teams',
    question: 'Does DialPulse provide reporting?',
    answer: "Yes. Reporting and operational visibility are part of the platform's product scope.",
    learnMoreHref: '/features/reports',
    learnMoreLabel: 'View Operational Reporting',
  },
  {
    id: 'team-manage-multiple-groups',
    category: 'teams',
    question: 'Can teams manage multiple groups?',
    answer: 'Certain supervisory roles can operate across multiple managed teams, subject to their permissions and configured scope.',
  },

  // --------------------------------
  // COMPLIANCE
  // --------------------------------
  {
    id: 'comp-controls-overview',
    category: 'compliance',
    question: 'What communication compliance controls does DialPulse provide?',
    answer: 'The platform includes opt-out and blocked-contact handling, temporary communication pauses, channel restrictions, frequency controls, fatigue controls and quiet-hours enforcement.',
    learnMoreHref: '/features/compliance',
    learnMoreLabel: 'Review the Compliance Engine',
    highlighted: true,
  },
  {
    id: 'comp-legal-guarantee-clarification',
    category: 'compliance',
    question: 'Does DialPulse automatically make my communication legally compliant?',
    answer: 'No software control can by itself determine whether every customer communication is legally compliant. DialPulse provides technical safeguards; customers remain responsible for understanding and configuring the platform for their applicable legal and regulatory requirements.',
    highlighted: true,
  },
  {
    id: 'comp-opt-out-handling',
    category: 'compliance',
    question: 'Can customers opt out of communication?',
    answer: 'Yes. The current platform supports a global opt-out state that prevents further outreach through the compliance layer.',
  },
  {
    id: 'comp-restrict-channel',
    category: 'compliance',
    question: 'Can a contact restrict communication to one channel?',
    answer: 'Yes. Channel preferences can restrict certain communication types.',
  },

  // --------------------------------
  // AI
  // --------------------------------
  {
    id: 'ai-supported-features',
    category: 'ai',
    question: 'What AI features does DialPulse support?',
    answer: 'Supported AI capabilities include audio transcription, conversation summarization, sentiment classification and text-based AI assistance.',
    learnMoreHref: '/features/ai',
    learnMoreLabel: 'Discover AI Intelligence',
    highlighted: true,
  },
  {
    id: 'ai-provider-infrastructure',
    category: 'ai',
    question: 'Which AI provider does DialPulse use?',
    answer: "The current CRM implementation uses Google's Gemini services through server-side infrastructure.",
  },
  {
    id: 'ai-client-to-provider-routing',
    category: 'ai',
    question: 'Is customer information sent directly from the browser to Gemini?',
    answer: 'The documented architecture routes Gemini-related processing through the DialPulse server-side AI layer rather than exposing the provider credential in the client application.',
  },
  {
    id: 'ai-text-sanitization',
    category: 'ai',
    question: 'Does DialPulse sanitize information before AI processing?',
    answer: 'For supported text processing, the current implementation masks detected email addresses and phone numbers before dispatching the text to the external AI provider.',
  },
  {
    id: 'ai-audio-processing-path',
    category: 'ai',
    question: 'Is audio treated the same way?',
    answer: 'No. Audio submitted for transcription follows a different processing path and is sent as audio data to the configured transcription service.',
  },
  {
    id: 'ai-model-training-policy',
    category: 'ai',
    question: 'Does DialPulse train AI models on customer data?',
    answer: 'The current product does not train custom models or maintain its own training datasets using tenant data. Provider-specific contractual treatment of prompts, audio and model usage depends on the configured AI service and applicable agreement.',
  },

  // --------------------------------
  // SECURITY
  // --------------------------------
  {
    id: 'sec-tenant-isolation',
    category: 'security',
    question: 'How does DialPulse separate customer data?',
    answer: 'DialPulse uses server-side tenant scoping and authorization controls designed to keep customer records within their authorized tenant boundaries.',
    learnMoreHref: '/security',
    learnMoreLabel: 'Read Security Architecture',
    highlighted: true,
  },
  {
    id: 'sec-cross-tenant-access',
    category: 'security',
    question: "Can one customer's users access another customer's data?",
    answer: 'The architecture is designed to prevent unauthorized cross-tenant access through server-side tenant scoping and resource authorization.',
  },
  {
    id: 'sec-user-access-controls',
    category: 'security',
    question: 'What controls protect user access?',
    answer: 'DialPulse uses authentication, role-based authorization, session controls, tenant scoping, rate limiting and audit logging.',
    learnMoreHref: '/security',
    learnMoreLabel: 'Review Tenant Controls',
  },
  {
    id: 'sec-audit-logging-coverage',
    category: 'security',
    question: 'Does DialPulse log important administrative activity?',
    answer: 'Yes. The audit subsystem records important security, authorization, data-export, administrative and compliance-related events.',
  },
  {
    id: 'sec-staff-data-access',
    category: 'security',
    question: 'Can DialPulse support staff access customer data?',
    answer: 'Platform staff are restricted from raw tenant-data access by default. The documented architecture requires an active verified impersonation session for supported raw-data access, with the activity recorded in the audit trail.',
  },

  // --------------------------------
  // IMPORTS & EXPORTS
  // --------------------------------
  {
    id: 'data-import-size-limit',
    category: 'imports',
    question: 'How large can an import be?',
    answer: 'The current documented implementation accepts bulk lead imports up to 250 records per upload.',
  },
  {
    id: 'data-import-asynchronous',
    category: 'imports',
    question: 'Are imports processed immediately?',
    answer: 'Bulk imports are handled asynchronously through background jobs, allowing the request to return while processing continues.',
  },
  {
    id: 'data-exports-audited',
    category: 'imports',
    question: 'Are exports audited?',
    answer: 'Yes. Authorized export activity and completed export jobs are recorded in the audit system.',
  },
  {
    id: 'data-exported-data-handling',
    category: 'imports',
    question: 'Can exported customer data leave DialPulse?',
    answer: 'Exports are generated as files outside the primary relational dataset, so customers should treat exported data as a separate data-handling responsibility.',
  },

  // --------------------------------
  // PRICING & ACCOUNT
  // --------------------------------
  {
    id: 'price-cost-structure',
    category: 'pricing',
    question: 'What does DialPulse cost?',
    answer: 'Pricing is presented separately on the Pricing page and may depend on the applicable plan, configuration or commercial agreement.',
    learnMoreHref: '/pricing',
    learnMoreLabel: 'View Pricing Information',
  },
  {
    id: 'price-trial-availability',
    category: 'pricing',
    question: 'Is there a free trial?',
    answer: 'Trial availability has not been finalized in the current public product definition.',
  },
  {
    id: 'price-terms-changes',
    category: 'pricing',
    question: 'Can pricing change?',
    answer: 'Commercial terms, pricing and subscription details are governed by the applicable pricing or commercial agreement.',
  },
  {
    id: 'price-contact-team',
    category: 'pricing',
    question: 'How do I talk to the DialPulse team?',
    answer: 'Use the Contact page to start a conversation.',
    learnMoreHref: '/contact',
    learnMoreLabel: 'Go to Contact Page',
  },
];

export const FEATURED_FAQ_IDS = [
  'prod-what-is-dialpulse',
  'prod-who-is-it-designed-for',
  'sec-tenant-isolation',
  'comp-controls-overview',
  'ai-supported-features',
];
