import React from 'react';
import { useSEO } from '@/lib/seo/useSEO';
import { TermsHero } from '@/components/terms/TermsHero';
import { TermsSummary } from '@/components/terms/TermsSummary';
import { TermsTOC } from '@/components/terms/TermsTOC';
import { TermsSections } from '@/components/terms/TermsSections';

export default function Terms() {
  useSEO({
    title: 'Terms of Service | DialPulse',
    description: 'Read the DialPulse Terms of Service covering platform use, customer responsibilities, data, communications, AI-assisted features, security and commercial terms.',
    canonical: 'https://dialpulse.com/terms',
  });

  return (
    <div className="flex flex-col bg-background min-h-screen text-on-surface">
      {/* Terms Hero */}
      <TermsHero />

      {/* Terms Quick Summary */}
      <TermsSummary />

      {/* Main Content with Sticky TOC */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 w-full">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
          {/* Table of Contents */}
          <TermsTOC />

          {/* Core Content Body */}
          <main className="flex-1 min-w-0 max-w-4xl w-full">
            <TermsSections />
          </main>
        </div>
      </div>
    </div>
  );
}
