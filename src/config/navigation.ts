/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface NavItem {
  label: string;
  href: string;
  description?: string;
  icon?: string;
  badge?: string;
  isComingSoon?: boolean;
}

export interface HeaderNavigation {
  product: {
    title: string;
    overview: NavItem;
    featuresHub: NavItem;
    featuredCapabilities: NavItem[];
    bottomAction: NavItem;
  };
  solutions: {
    title: string;
    overview: NavItem;
    solutionsList: NavItem[];
    bottomAction: NavItem;
  };
  resources: {
    title: string;
    overview: NavItem;
    items: NavItem[];
    bottomAction: NavItem;
  };
  pricing: NavItem;
  cta: NavItem;
}

export interface FooterNavigation {
  ctaPanel: {
    headline: string;
    supportingText: string;
    primaryButton: NavItem;
    secondaryButton: NavItem;
  };
  brandArea: {
    tagline: string;
    description: string;
    links: NavItem[];
  };
  productColumn: {
    title: string;
    links: NavItem[];
    bottomAction: NavItem;
  };
  solutionsColumn: {
    title: string;
    links: NavItem[];
    bottomAction: NavItem;
  };
  resourcesColumn: {
    title: string;
    links: NavItem[];
    bottomAction: NavItem;
  };
  companyAndTrustColumn: {
    title: string;
    companySection: {
      subtitle: string;
      links: NavItem[];
    };
    trustSection: {
      subtitle: string;
      links: NavItem[];
    };
  };
  legalBottomBar: {
    links: NavItem[];
    copyrightOwner: string;
  };
}

export const headerNavigation: HeaderNavigation = {
  product: {
    title: 'Product',
    overview: {
      label: 'Product Overview',
      href: '/product',
      description: 'The complete communication-first operational CRM platform',
      icon: 'Layers',
    },
    featuresHub: {
      label: 'Features Hub',
      href: '/features',
      description: 'Explore the full matrix of operational capabilities',
      icon: 'Grid',
    },
    featuredCapabilities: [
      {
        label: 'Lead Management',
        href: '/features/leads',
        description: 'Complete lifecycle, audit trail & pipeline control',
        icon: 'Users',
      },
      {
        label: 'Calling',
        href: '/features/calls',
        description: 'Native dialer, recording & call attribution',
        icon: 'Phone',
      },
      {
        label: 'Messaging',
        href: '/features/messaging',
        description: 'Omnichannel SMS, WhatsApp & template engines',
        icon: 'MessageSquare',
      },
      {
        label: 'Teams',
        href: '/features/teams',
        description: 'Hierarchy, tenant scoping & role-based security',
        icon: 'ShieldCheck',
      },
      {
        label: 'Reports',
        href: '/features/reports',
        description: 'Real-time pipeline metrics & rep productivity',
        icon: 'BarChart3',
      },
      {
        label: 'AI',
        href: '/features/ai',
        description: 'Call summarization & tenant-isolated intelligence',
        icon: 'Sparkles',
      },
    ],
    bottomAction: {
      label: 'Explore all features →',
      href: '/features',
    },
  },
  solutions: {
    title: 'Solutions',
    overview: {
      label: 'Solutions Overview',
      href: '/solutions',
      description: 'Operational playbooks designed for specific scaling bottlenecks',
      icon: 'Layers',
    },
    solutionsList: [
      {
        label: 'Lead Operations',
        href: '/solutions/lead-operations',
        description: 'Deterministic ingestion, deduping & assignment',
        icon: 'Users',
      },
      {
        label: 'Follow-up Control',
        href: '/solutions/follow-up-control',
        description: 'Zero forgotten leads with automated SLAs',
        icon: 'Clock',
      },
      {
        label: 'Customer Communication',
        href: '/solutions/customer-communication',
        description: 'Unified telephony, SMS and messaging timeline',
        icon: 'PhoneCall',
      },
      {
        label: 'Sales Team Operations',
        href: '/solutions/sales-team-operations',
        description: 'Lead quotas, queue routing & activity enforcement',
        icon: 'Users2',
      },
      {
        label: 'Performance Visibility',
        href: '/solutions/performance-visibility',
        description: 'Real-time telemetry and management visibility',
        icon: 'BarChart3',
      },
      {
        label: 'Customer Operations',
        href: '/solutions/customer-operations',
        description: 'End-to-end post-sale support & customer context',
        icon: 'Layers',
      },
      {
        label: 'Communication Compliance',
        href: '/solutions/communication-compliance',
        description: 'Strict DNC, opt-out & quiet hours enforcement',
        icon: 'ShieldAlert',
      },
      {
        label: 'AI-Assisted Work',
        href: '/solutions/ai-assisted-work',
        description: 'Automated call transcription & insight extraction',
        icon: 'Cpu',
      },
    ],
    bottomAction: {
      label: 'Explore all solutions →',
      href: '/solutions',
    },
  },
  resources: {
    title: 'Resources',
    overview: {
      label: 'Resources Directory',
      href: '/resources',
      description: 'Guides, technical documentation, security and operational manuals',
      icon: 'BookOpen',
    },
    items: [
      {
        label: 'FAQ',
        href: '/faq',
        description: 'Common questions regarding architecture and adoption',
        icon: 'HelpCircle',
      },
      {
        label: 'Security',
        href: '/security',
        description: 'Multi-tenant isolation and security architecture',
        icon: 'ShieldCheck',
      },
      {
        label: 'Blog',
        href: '/blog',
        description: 'Operational perspectives on customer communication',
        icon: 'FileText',
        isComingSoon: true,
      },
      {
        label: 'Guides',
        href: '/guides',
        description: 'Practical playbooks for telecalling and CRM hygiene',
        icon: 'Compass',
        isComingSoon: true,
      },
      {
        label: 'Case Studies',
        href: '/case-studies',
        description: 'Real-world deployment outcomes and scale benchmarks',
        icon: 'Award',
        isComingSoon: true,
      },
      {
        label: 'Compare',
        href: '/compare',
        description: 'How DialPulse compares to legacy standalone tools',
        icon: 'GitCompare',
        isComingSoon: true,
      },
    ],
    bottomAction: {
      label: 'Explore resources →',
      href: '/resources',
    },
  },
  pricing: {
    label: 'Pricing',
    href: '/pricing',
  },
  cta: {
    label: 'Talk to DialPulse',
    href: '/contact',
  },
};

export const footerNavigation: FooterNavigation = {
  ctaPanel: {
    headline: 'Have a workflow worth talking about?',
    supportingText: 'Explore DialPulse or start a conversation about the way your team works.',
    primaryButton: {
      label: 'Explore Product',
      href: '/product',
    },
    secondaryButton: {
      label: 'Talk to DialPulse',
      href: '/contact',
    },
  },
  brandArea: {
    tagline: 'Customer operations, connected.',
    description:
      'DialPulse brings customer records, communication, team workflows, operational visibility, compliance controls and AI-assisted work into one connected platform.',
    links: [
      {
        label: 'Explore Product',
        href: '/product',
      },
      {
        label: 'Talk to DialPulse',
        href: '/contact',
      },
    ],
  },
  productColumn: {
    title: 'Product',
    links: [
      { label: 'Product Overview', href: '/product' },
      { label: 'Features', href: '/features' },
      { label: 'Lead Management', href: '/features/leads' },
      { label: 'Calling', href: '/features/calls' },
      { label: 'Messaging', href: '/features/messaging' },
      { label: 'Tickets', href: '/features/tickets' },
      { label: 'Teams', href: '/features/teams' },
      { label: 'Reports', href: '/features/reports' },
      { label: 'Imports & Exports', href: '/features/imports-exports' },
      { label: 'Compliance', href: '/features/compliance' },
      { label: 'AI', href: '/features/ai' },
      { label: 'Administration', href: '/features/administration' },
    ],
    bottomAction: {
      label: 'Explore all features →',
      href: '/features',
    },
  },
  solutionsColumn: {
    title: 'Solutions',
    links: [
      { label: 'Solutions Overview', href: '/solutions' },
      { label: 'Lead Operations', href: '/solutions/lead-operations' },
      { label: 'Follow-up Control', href: '/solutions/follow-up-control' },
      { label: 'Customer Communication', href: '/solutions/customer-communication' },
      { label: 'Sales Team Operations', href: '/solutions/sales-team-operations' },
      { label: 'Performance Visibility', href: '/solutions/performance-visibility' },
      { label: 'Communication Compliance', href: '/solutions/communication-compliance' },
      { label: 'Customer Operations', href: '/solutions/customer-operations' },
      { label: 'AI-Assisted Work', href: '/solutions/ai-assisted-work' },
    ],
    bottomAction: {
      label: 'Explore all solutions →',
      href: '/solutions',
    },
  },
  resourcesColumn: {
    title: 'Resources',
    links: [
      { label: 'Resources', href: '/resources' },
      { label: 'FAQ', href: '/faq' },
      { label: 'Blog', href: '/blog', isComingSoon: true },
      { label: 'Guides', href: '/guides', isComingSoon: true },
      { label: 'Case Studies', href: '/case-studies', isComingSoon: true },
      { label: 'Compare', href: '/compare', isComingSoon: true },
    ],
    bottomAction: {
      label: 'Explore resources →',
      href: '/resources',
    },
  },
  companyAndTrustColumn: {
    title: 'Company & Trust',
    companySection: {
      subtitle: 'Company',
      links: [
        { label: 'About', href: '/about' },
        { label: 'Contact', href: '/contact' },
        { label: 'Careers', href: '/careers', isComingSoon: true },
      ],
    },
    trustSection: {
      subtitle: 'Trust',
      links: [
        { label: 'Security', href: '/security' },
        { label: 'Privacy Policy', href: '/privacy' },
        { label: 'Terms of Service', href: '/terms' },
      ],
    },
  },
  legalBottomBar: {
    links: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
    ],
    copyrightOwner: 'DialPulse',
  },
};
