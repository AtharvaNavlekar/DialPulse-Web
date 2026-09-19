import React from 'react';
import { useSEO } from '@/lib/seo/useSEO';
import { PrivacyHero } from '@/components/privacy/PrivacyHero';
import { PrivacyGlance } from '@/components/privacy/PrivacyGlance';
import { PrivacyTOC } from '@/components/privacy/PrivacyTOC';
import { PrivacySections } from '@/components/privacy/PrivacySections';

export default function Privacy() {
  useSEO({
    title: 'Privacy Policy | DialPulse',
    description: 'Learn how DialPulse handles account, customer, communication, security and AI-related data across its CRM platform.',
    canonical: 'https://dialpulse.com/privacy',
  });

  return (
    <div className="flex flex-col bg-background min-h-screen text-on-surface">
      {/* Privacy Hero */}
      <PrivacyHero />

      {/* Privacy At a Glance */}
      <PrivacyGlance />

      {/* Main Content with Sticky TOC */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 w-full">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
          {/* Table of Contents */}
          <PrivacyTOC />

          {/* Core Content Body */}
          <main className="flex-1 min-w-0 max-w-4xl w-full">
            <PrivacySections />
          </main>
        </div>
      </div>
    </div>
  );
}
