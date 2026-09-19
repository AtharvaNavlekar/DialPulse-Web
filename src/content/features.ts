export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string; // we can use lucide-react icon names or custom svgs
  href: string;
}

export const coreFeatures: Feature[] = [
  {
    id: 'leads',
    title: 'Lead Management',
    description: 'Import, assign, and track leads through custom pipelines. Build dynamic lists based on engagement and custom properties.',
    icon: 'Users',
    href: '/features/leads',
  },
  {
    id: 'calls',
    title: 'Calling & History',
    description: 'Track call history, attribution, and analytics with full tenant-aware data separation.',
    icon: 'Phone',
    href: '/features/calls',
  },
  {
    id: 'calling',
    title: 'Calling & History',
    description: 'Track call history, attribution, and analytics with full tenant-aware data separation.',
    icon: 'Phone',
    href: '/features/calls',
  },
  {
    id: 'messaging',
    title: 'Omnichannel Messaging',
    description: 'Manage outbound and inbound communications, handle queued and bulk messaging with delivery tracking.',
    icon: 'MessageSquare',
    href: '/features/messaging',
  },
  {
    id: 'tickets',
    title: 'Tickets & Support Context',
    description: 'Track customer issues, replies, priority, and operational context without losing the relationship around the customer.',
    icon: 'LifeBuoy',
    href: '/features/tickets',
  },
  {
    id: 'teams',
    title: 'Team Hierarchy & Roles',
    description: 'Role-based access control with robust security models. Define roles like Owners, Team Leads, and Telecallers.',
    icon: 'ShieldCheck',
    href: '/features/teams',
  },
  {
    id: 'reports',
    title: 'Reporting & Analytics',
    description: 'Real-time visibility into business outcomes and team performance with background generation for large exports.',
    icon: 'BarChart3',
    href: '/features/reports',
  },
  {
    id: 'imports-exports',
    title: 'Imports & Exports',
    description: 'Move customer data safely with structured bulk lead validation, background queue processing, and audited exports.',
    icon: 'ArrowUpDown',
    href: '/features/imports-exports',
  },
  {
    id: 'compliance',
    title: 'Communication Compliance',
    description: 'Enforce quiet hours, DNC lists, frequency limits, and channel preferences natively at the tenant level.',
    icon: 'Scale',
    href: '/features/compliance',
  },
  {
    id: 'ai',
    title: 'AI-Assisted Workflows',
    description: 'Tenant-isolated AI automatically summarizes calls, drafts responses, and categorizes leads without exposing your data.',
    icon: 'Sparkles',
    href: '/features/ai',
  },
  {
    id: 'administration',
    title: 'Administration & Governance',
    description: 'Control the environment around the work with user provisioning, team management, compliance rules, and audit logs.',
    icon: 'Sliders',
    href: '/features/administration',
  },
];
