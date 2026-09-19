/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface FeatureDefinition {
  slug: string;
  name: string;
  number: string;
  shortDescription: string;
  description: string;
  icon: string;
  route: string;
  relatedFeatures: string[];
}

export const FEATURE_DEFINITIONS: FeatureDefinition[] = [
  {
    slug: 'leads',
    name: 'Leads',
    number: '01',
    shortDescription: 'Keep lead information, ownership, pipeline stages, notes, and communication preferences in context.',
    description: 'Structure customer intake, custom attributes, ownership assignment, and pipeline stages with strict tenant isolation and contextual follow-up.',
    icon: 'Users',
    route: '/features/leads',
    relatedFeatures: ['calls', 'messaging', 'teams', 'compliance'],
  },
  {
    slug: 'calls',
    name: 'Calls',
    number: '02',
    shortDescription: 'Make every call part of the customer story with outcomes, duration, and notes.',
    description: 'Track telephony outcomes, conversation duration, timestamps, and operator notes directly tied to lead history without disconnecting the voice channel.',
    icon: 'Phone',
    route: '/features/calls',
    relatedFeatures: ['leads', 'messaging', 'ai', 'reports'],
  },
  {
    slug: 'messaging',
    name: 'Messaging',
    number: '03',
    shortDescription: 'Connect supported messaging activity directly with customer records and status tracking.',
    description: 'Orchestrate inbound and outbound communications across WhatsApp and SMS with real-time delivery, read, and failure state handling.',
    icon: 'MessageSquare',
    route: '/features/messaging',
    relatedFeatures: ['leads', 'calls', 'compliance', 'reports'],
  },
  {
    slug: 'tickets',
    name: 'Tickets',
    number: '04',
    shortDescription: 'Keep customer issue tracking, replies, and priority in the same operational picture.',
    description: 'Manage post-sale inquiries, support requests, resolution timelines, and operational escalations alongside CRM customer records.',
    icon: 'LifeBuoy',
    route: '/features/tickets',
    relatedFeatures: ['leads', 'messaging', 'teams', 'reports'],
  },
  {
    slug: 'teams',
    name: 'Teams',
    number: '05',
    shortDescription: 'Give every role the right view with role-based access and scoped team boundaries.',
    description: 'Establish clear operational scopes between telecallers, team leads, department managers, and system administrators with granular access control.',
    icon: 'ShieldCheck',
    route: '/features/teams',
    relatedFeatures: ['leads', 'administration', 'reports'],
  },
  {
    slug: 'reports',
    name: 'Reports',
    number: '06',
    shortDescription: 'Turn daily operational activity into visibility across communication and lead velocity.',
    description: 'Aggregate team performance, lead conversion milestones, and communication volume with asynchronous report generation for high-volume exports.',
    icon: 'BarChart3',
    route: '/features/reports',
    relatedFeatures: ['teams', 'leads', 'calls', 'messaging'],
  },
  {
    slug: 'imports-exports',
    name: 'Imports & Exports',
    number: '07',
    shortDescription: 'Move customer data safely with structured validation, background queues, and export audits.',
    description: 'Ingest bulk lead records with format validation, and handle sensitive exports through explicit multi-step authorization and full audit logging.',
    icon: 'ArrowUpDown',
    route: '/features/imports-exports',
    relatedFeatures: ['leads', 'administration', 'security'],
  },
  {
    slug: 'compliance',
    name: 'Compliance',
    number: '08',
    shortDescription: 'Put communication safeguards directly into the workflow with quiet hours and fatigue controls.',
    description: 'Enforce platform safeguards including opt-out lists, frequency caps, quiet hours, and channel restrictions natively before messages or calls are dispatched.',
    icon: 'Scale',
    route: '/features/compliance',
    relatedFeatures: ['calls', 'messaging', 'administration'],
  },
  {
    slug: 'ai',
    name: 'AI',
    number: '09',
    shortDescription: 'Apply AI assistance to transcription, summarization, and classification with strict tenant isolation.',
    description: 'Execute server-side AI processing for call summaries, transcription, sentiment tagging, and text assistance with tenant quotas and human-in-the-loop review.',
    icon: 'Sparkles',
    route: '/features/ai',
    relatedFeatures: ['calls', 'messaging', 'tickets', 'security'],
  },
  {
    slug: 'administration',
    name: 'Administration',
    number: '10',
    shortDescription: 'Control the environment around the work with user provisioning, policies, and audit visibility.',
    description: 'Centralize tenant configuration, team assignment, communication rule definitions, and comprehensive audit trails for operational governance.',
    icon: 'Sliders',
    route: '/features/administration',
    relatedFeatures: ['teams', 'security', 'imports-exports', 'compliance'],
  },
];

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
