/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Link } from 'react-router-dom';
import { Home, ChevronRight } from 'lucide-react';
import { useSEO } from '@/lib/seo/useSEO';

import { LeadHero } from '@/components/features/leads/LeadHero';
import { LeadAtAGlance } from '@/components/features/leads/LeadAtAGlance';
import { LeadCustomerStory } from '@/components/features/leads/LeadCustomerStory';
import { LeadInformationDetails } from '@/components/features/leads/LeadInformationDetails';
import { LeadPipelineStages } from '@/components/features/leads/LeadPipelineStages';
import { LeadOwnershipRoles } from '@/components/features/leads/LeadOwnershipRoles';
import { LeadNotesCustomFields } from '@/components/features/leads/LeadNotesCustomFields';
import { LeadComplianceSafeguards } from '@/components/features/leads/LeadComplianceSafeguards';
import { LeadDataMovement } from '@/components/features/leads/LeadDataMovement';
import { LeadSecurityBoundary } from '@/components/features/leads/LeadSecurityBoundary';
import { LeadLifecycleInteractive } from '@/components/features/leads/LeadLifecycleInteractive';
import { LeadRelatedFeatures } from '@/components/features/leads/LeadRelatedFeatures';
import { LeadRoleMatrixFAQ } from '@/components/features/leads/LeadRoleMatrixFAQ';

export default function LeadManagementFeature() {
  useSEO({
    title: 'Lead Management CRM | DialPulse',
    description: 'Manage lead context, ownership, stages, notes, custom fields, communication preferences, imports and exports with DialPulse.',
    canonical: 'https://dialpulse.com/features/leads',
  });

  return (
    <div className="flex flex-col bg-white min-h-screen">
      {/* M3 Editorial Breadcrumb */}
      <div className="bg-[#F8FAF8] border-b border-slate-200 py-3.5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center text-xs font-medium text-slate-500 font-mono">
          <Link to="/" className="hover:text-[#00695C] transition-colors flex items-center gap-1">
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
          <ChevronRight className="w-3.5 h-3.5 mx-2 text-slate-300" />
          <Link to="/features" className="hover:text-[#00695C] transition-colors">
            Features
          </Link>
          <ChevronRight className="w-3.5 h-3.5 mx-2 text-slate-300" />
          <span className="text-slate-900 font-semibold">Leads</span>
        </div>
      </div>

      {/* 1. Hero */}
      <LeadHero />

      {/* 2. The Lead, At a Glance */}
      <LeadAtAGlance />

      {/* 3. The Customer Story (Dark Section) */}
      <LeadCustomerStory />

      {/* 4. Lead Information (Asymmetric Section) */}
      <LeadInformationDetails />

      {/* 5. Stage & Pipeline Context */}
      <LeadPipelineStages />

      {/* 6. Ownership & Assignment + Different Views */}
      <LeadOwnershipRoles />

      {/* 7. Notes & Custom Fields */}
      <LeadNotesCustomFields />

      {/* 8. Communication Preferences & Compliance Safeguards (Dark Section) */}
      <LeadComplianceSafeguards />

      {/* 9. Bulk Lead Import & Export & Deduplication */}
      <LeadDataMovement />

      {/* 10. Security Around Leads (Boundary Section) */}
      <LeadSecurityBoundary />

      {/* 11. Lead Lifecycle (Interactive Timeline) */}
      <LeadLifecycleInteractive />

      {/* 12. Related Features */}
      <LeadRelatedFeatures />

      {/* 13. Role Matrix, FAQ Mini Section, Typographic Statement, Full-Width CTA */}
      <LeadRoleMatrixFAQ />
    </div>
  );
}
