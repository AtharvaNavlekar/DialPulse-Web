import React from 'react';
import { useSEO } from '@/lib/seo/useSEO';
import { SecurityHero } from '@/components/security/SecurityHero';
import { SecurityAtAGlance } from '@/components/security/SecurityAtAGlance';
import { SecurityCoreModel } from '@/components/security/SecurityCoreModel';
import { SecurityTenantIsolation } from '@/components/security/SecurityTenantIsolation';
import { SecurityRbac } from '@/components/security/SecurityRbac';
import { SecurityResourceAuth } from '@/components/security/SecurityResourceAuth';
import { SecurityPrivilegedAccess } from '@/components/security/SecurityPrivilegedAccess';
import { SecurityAuthSessions } from '@/components/security/SecurityAuthSessions';
import { SecurityAuditability } from '@/components/security/SecurityAuditability';
import { SecurityExportControls } from '@/components/security/SecurityExportControls';
import { SecurityInputProtection } from '@/components/security/SecurityInputProtection';
import { SecurityCommunicationSafeguards } from '@/components/security/SecurityCommunicationSafeguards';
import { SecurityAiPrivacy } from '@/components/security/SecurityAiPrivacy';
import { SecurityThirdParty } from '@/components/security/SecurityThirdParty';
import { SecurityComplianceDistinction } from '@/components/security/SecurityComplianceDistinction';
import { SecurityCustomerResponsibility } from '@/components/security/SecurityCustomerResponsibility';
import { SecurityContactAndRoadmap } from '@/components/security/SecurityContactAndRoadmap';
import { SecurityFinalCTA } from '@/components/security/SecurityFinalCTA';

export default function Security() {
  useSEO({
    title: 'Security | DialPulse',
    description: 'Learn how DialPulse approaches tenant isolation, access control, authentication, auditability, communication safeguards and AI security.',
    canonical: 'https://dialpulse.com/security',
  });

  return (
    <div className="flex flex-col bg-background min-h-screen text-on-surface">
      {/* 1. Light Hero: "Security isn't a checkbox." */}
      <SecurityHero />

      {/* 2. Security at a Glance (6 core technical safeguards) */}
      <SecurityAtAGlance />

      {/* 3. The Core Security Model (Dark, Server-authoritative context chain) */}
      <SecurityCoreModel />

      {/* 4. Tenant Isolation: "Your tenant. Your boundary." */}
      <SecurityTenantIsolation />

      {/* 5. Role-Based Access: "Not everyone needs the same access." */}
      <SecurityRbac />

      {/* 6. Resource-Level Authorization: "Access isn't just about the screen." */}
      <SecurityResourceAuth />

      {/* 7. Platform Access & Impersonation (Dark high-trust section) */}
      <SecurityPrivilegedAccess />

      {/* 8. Authentication & Sessions: "Accounts need strong boundaries too." */}
      <SecurityAuthSessions />

      {/* 9. Auditability: "Important actions should be explainable." */}
      <SecurityAuditability />

      {/* 10. Data Export Controls: "Moving data should be intentional." */}
      <SecurityExportControls />

      {/* 11. Input & Data Protection: "Security starts before data is stored." */}
      <SecurityInputProtection />

      {/* 12. Communication Safeguards: "Security also means knowing when not to send." */}
      <SecurityCommunicationSafeguards />

      {/* 13. AI Security & Privacy: "AI with boundaries." */}
      <SecurityAiPrivacy />

      {/* 14. Third-Party Services: Transparent Subprocessors */}
      <SecurityThirdParty />

      {/* 15. Security != Compliance: "Security controls are not a legal certification." */}
      <SecurityComplianceDistinction />

      {/* 16. Customer Responsibility: "Security is shared." */}
      <SecurityCustomerResponsibility />

      {/* 17. Security Contact & Continuous Improvement */}
      <SecurityContactAndRoadmap />

      {/* 18. Final CTA: "Built for customer work. Built with boundaries." */}
      <SecurityFinalCTA />
    </div>
  );
}
