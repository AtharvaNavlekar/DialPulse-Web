import React from 'react';
import { useSEO } from '@/lib/seo/useSEO';
import { NotFoundHero } from '@/components/notfound/NotFoundHero';
import { NotFoundSuggestions } from '@/components/notfound/NotFoundSuggestions';
import { NotFoundContext } from '@/components/notfound/NotFoundContext';

export default function NotFound() {
  useSEO({
    title: '404 | DialPulse',
    description: 'The requested page was not found. DialPulse is built to keep customer operations organized — from leads and calls to messaging, tickets, teams and reporting.',
    robots: 'noindex, nofollow',
  });

  return (
    <div className="flex flex-col bg-background min-h-[calc(100vh-16rem)] text-on-surface">
      {/* 404 Hero Section */}
      <NotFoundHero />

      {/* Suggestion Destinations */}
      <NotFoundSuggestions />

      {/* Product Connection & Subtle Human Touch */}
      <NotFoundContext />
    </div>
  );
}
