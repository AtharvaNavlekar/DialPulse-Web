/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useSEO } from '@/lib/seo/useSEO';
import { FeaturesHero } from '@/components/features/FeaturesHero';
import { FeaturesDirectory } from '@/components/features/FeaturesDirectory';
import { FeaturesWorkflowJourney } from '@/components/features/FeaturesWorkflowJourney';
import { FeaturesLeadSpotlight } from '@/components/features/FeaturesLeadSpotlight';
import { FeaturesCallsSpotlight } from '@/components/features/FeaturesCallsSpotlight';
import { FeaturesMessagingSpotlight } from '@/components/features/FeaturesMessagingSpotlight';
import { FeaturesTicketsSpotlight } from '@/components/features/FeaturesTicketsSpotlight';
import { FeaturesTeamsSpotlight } from '@/components/features/FeaturesTeamsSpotlight';
import { FeaturesReportingSpotlight } from '@/components/features/FeaturesReportingSpotlight';
import { FeaturesDataMovementSpotlight } from '@/components/features/FeaturesDataMovementSpotlight';
import { FeaturesComplianceSpotlight } from '@/components/features/FeaturesComplianceSpotlight';
import { FeaturesAISpotlight } from '@/components/features/FeaturesAISpotlight';
import { FeaturesAdminSpotlight } from '@/components/features/FeaturesAdminSpotlight';
import { FeaturesSecurityFoundation } from '@/components/features/FeaturesSecurityFoundation';
import { FeaturesProductMap } from '@/components/features/FeaturesProductMap';
import { FeaturesDetailPreview } from '@/components/features/FeaturesDetailPreview';
import { FeaturesRoleMatrix } from '@/components/features/FeaturesRoleMatrix';
import { FeaturesPhilosophyCTA } from '@/components/features/FeaturesPhilosophyCTA';

export default function Features() {
  useSEO({
    title: 'Features | DialPulse',
    description:
      'Explore DialPulse features for lead management, calling, messaging, tickets, teams, reporting, imports, exports, compliance, AI and administration.',
    canonical: 'https://dialpulse.com/features',
  });

  return (
    <div className="bg-[#F8FAF8] text-[#191C1B] min-h-screen">
      {/* 2. Hero */}
      <FeaturesHero />

      {/* 3. Feature Navigation Index */}
      <FeaturesDirectory />

      {/* 4. Workflow Overview */}
      <FeaturesWorkflowJourney />

      {/* 5. Lead Management Spotlight */}
      <FeaturesLeadSpotlight />

      {/* 6. Calls Spotlight */}
      <FeaturesCallsSpotlight />

      {/* 7. Messaging Spotlight */}
      <FeaturesMessagingSpotlight />

      {/* 8. Tickets Spotlight */}
      <FeaturesTicketsSpotlight />

      {/* 9. Teams & Roles Spotlight */}
      <FeaturesTeamsSpotlight />

      {/* 10. Reporting Spotlight (Dark/Tinted) */}
      <FeaturesReportingSpotlight />

      {/* 11. Imports & Exports Spotlight */}
      <FeaturesDataMovementSpotlight />

      {/* 12. Compliance Safeguards Spotlight */}
      <FeaturesComplianceSpotlight />

      {/* 13. AI Spotlight */}
      <FeaturesAISpotlight />

      {/* 14. Administration Spotlight */}
      <FeaturesAdminSpotlight />

      {/* 15. Security as a Feature Foundation */}
      <FeaturesSecurityFoundation />

      {/* 16. Connected Product Map */}
      <FeaturesProductMap />

      {/* 17. Feature Detail Preview */}
      <FeaturesDetailPreview />

      {/* 18. Role-Based Feature View */}
      <FeaturesRoleMatrix />

      {/* 19. Typographic Statement & 20. Contact CTA */}
      <FeaturesPhilosophyCTA />
    </div>
  );
}
