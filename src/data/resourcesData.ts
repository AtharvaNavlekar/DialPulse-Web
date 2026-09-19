export type ResourceCategory =
  | 'all'
  | 'guides'
  | 'product'
  | 'operations'
  | 'communication'
  | 'compliance'
  | 'ai'
  | 'security'
  | 'case-studies';

export type ResourceType =
  | 'Guide'
  | 'Product'
  | 'Operations'
  | 'Communication'
  | 'Compliance'
  | 'AI'
  | 'Security'
  | 'Case Study'
  | 'Article';

export interface ResourceCategoryMeta {
  id: ResourceCategory;
  name: string;
  description: string;
  focusArea: string;
}

export interface ResourceItem {
  id: string;
  title: string;
  category: ResourceCategory;
  type: ResourceType;
  description: string;
  status: 'published' | 'coming-soon';
  slug?: string;
  publishedAt?: string;
  image?: string;
  href?: string;
  topics: string[];
}

export const RESOURCE_CATEGORIES: ResourceCategoryMeta[] = [
  {
    id: 'guides',
    name: 'Guides',
    description: 'Practical explanations for customer operations and CRM workflows.',
    focusArea: 'Operational Workflows',
  },
  {
    id: 'product',
    name: 'Product',
    description: 'Understand how DialPulse features fit together.',
    focusArea: 'Architecture & Features',
  },
  {
    id: 'operations',
    name: 'Operations',
    description: 'Ideas around sales, calling, follow-up, teams and visibility.',
    focusArea: 'Team Execution',
  },
  {
    id: 'communication',
    name: 'Communication',
    description: 'Calling, messaging and communication workflows.',
    focusArea: 'Voice & Omnichannel',
  },
  {
    id: 'compliance',
    name: 'Compliance',
    description: 'Understanding operational safeguards and communication controls.',
    focusArea: 'Policy & Guardrails',
  },
  {
    id: 'ai',
    name: 'AI',
    description: 'AI-assisted customer operations and workflow design.',
    focusArea: 'Assisted Intelligence',
  },
  {
    id: 'security',
    name: 'Security',
    description: 'Security, access and data-handling concepts.',
    focusArea: 'Isolation & Governance',
  },
  {
    id: 'case-studies',
    name: 'Case Studies',
    description: 'Real customer stories when available.',
    focusArea: 'Field Implementation',
  },
];

/**
 * Editorial Resource Slots
 * Architecture-first initial collection representing scheduled knowledge areas.
 * NOTE: As required, these slots do NOT contain fabricated authors, dates, reading times, or URLs.
 * They represent scheduled educational topics built directly around established DialPulse concepts.
 */
export const EDITORIAL_RESOURCE_SLOTS: ResourceItem[] = [
  {
    id: 'slot-guide-workflow',
    title: 'Lead Lifecycle Management & Supervisory Allocation',
    category: 'guides',
    type: 'Guide',
    description: 'Structuring lead intake, automated qualification rules, and team supervisor distribution across shifting telecaller shifts.',
    status: 'coming-soon',
    topics: ['Leads', 'Supervision', 'Shift Routing'],
  },
  {
    id: 'slot-product-multi-tenant',
    title: 'Understanding Multi-Tenant Isolation in Customer Operations',
    category: 'product',
    type: 'Product',
    description: 'A deep architectural explainer of server-authoritative tenant scoping, RBAC hierarchies, and shared infrastructure boundaries.',
    status: 'coming-soon',
    topics: ['Architecture', 'Tenant Isolation', 'RBAC'],
  },
  {
    id: 'slot-ops-call-queues',
    title: 'Managing Active Calling Queues & Disposition Escalations',
    category: 'operations',
    type: 'Operations',
    description: 'Practical workflows for live pacing controls, telecaller disposition tracking, and SLA escalation thresholds.',
    status: 'coming-soon',
    topics: ['Calling', 'Dispositions', 'Pacing'],
  },
  {
    id: 'slot-comm-omnichannel',
    title: 'Coordinating Voice Calls & WhatsApp Messaging Sequences',
    category: 'communication',
    type: 'Communication',
    description: 'Maintaining a single customer audit trail across synchronous voice conversations and asynchronous messaging channels.',
    status: 'coming-soon',
    topics: ['Voice', 'Messaging', 'Unified History'],
  },
  {
    id: 'slot-comp-safeguards',
    title: 'Implementing Strict Quiet Hours & Do-Not-Disturb Governance',
    category: 'compliance',
    type: 'Compliance',
    description: 'Configuring time-zone aware quiet windows, automated contact frequency fatigue caps, and instant opt-out handling.',
    status: 'coming-soon',
    topics: ['Quiet Hours', 'Opt-out', 'Fatigue Caps'],
  },
  {
    id: 'slot-ai-operational',
    title: 'AI-Assisted Call Summaries & Sentiment Flagging in Real Time',
    category: 'ai',
    type: 'AI',
    description: 'Grounding conversational summaries in customer ticket data while maintaining strict tenant compute quotas and text redaction.',
    status: 'coming-soon',
    topics: ['Summarization', 'Data Privacy', 'Model Quotas'],
  },
  {
    id: 'slot-sec-data-exports',
    title: 'Controlled Data Export Safeguards & Administrative Audit Trails',
    category: 'security',
    type: 'Security',
    description: 'Why bulk customer record exfiltration requires two-step administrative authorization, background sanitation, and immutable logging.',
    status: 'coming-soon',
    topics: ['Export Controls', 'Auditability', 'Access Scope'],
  },
];
