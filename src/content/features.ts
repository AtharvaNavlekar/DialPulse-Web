import { FEATURE_DEFINITIONS, FeatureDefinition } from '@/data/featuresData';

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
  href: string;
}

export const coreFeatures: Feature[] = [
  ...FEATURE_DEFINITIONS.map(f => ({
    id: f.slug,
    title: f.name,
    description: f.shortDescription,
    icon: f.icon,
    href: f.route,
  })),
  // Alias for backward compatibility with /features/calling legacy references
  {
    id: 'calling',
    title: 'Calling & History',
    description: 'Track telephony outcomes, conversation duration, timestamps, and operator notes directly tied to lead history.',
    icon: 'Phone',
    href: '/features/calls',
  },
];

export { FEATURE_DEFINITIONS };
export type { FeatureDefinition };

