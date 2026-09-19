import React, { useState } from 'react';
import { useSEO } from '@/lib/seo/useSEO';
import { ResourceCategory } from '@/data/resourcesData';
import { ResourcesHero } from '@/components/resources/ResourcesHero';
import { ResourcesFeatured } from '@/components/resources/ResourcesFeatured';
import { ResourcesCategoryNav } from '@/components/resources/ResourcesCategoryNav';
import { ResourcesDirectory } from '@/components/resources/ResourcesDirectory';
import { ResourcesComingSoonState } from '@/components/resources/ResourcesComingSoonState';
import { ResourcesProductGuides } from '@/components/resources/ResourcesProductGuides';
import { ResourcesTrustSecurity } from '@/components/resources/ResourcesTrustSecurity';
import { ResourcesCaseStudies } from '@/components/resources/ResourcesCaseStudies';
import { ResourcesBlogInsights } from '@/components/resources/ResourcesBlogInsights';
import { ResourcesPhilosophy } from '@/components/resources/ResourcesPhilosophy';
import { ResourcesNewsletter } from '@/components/resources/ResourcesNewsletter';
import { ResourcesCTA } from '@/components/resources/ResourcesCTA';

export default function Resources() {
  useSEO({
    title: 'Resources | DialPulse',
    description: 'Explore DialPulse resources covering customer operations, CRM workflows, communication, compliance, security and AI-assisted work.',
    canonical: 'https://dialpulse.com/resources',
  });

  const [selectedCategory, setSelectedCategory] = useState<ResourceCategory>('all');

  const handleSelectCategory = (category: ResourceCategory) => {
    setSelectedCategory(category);
    // Smooth scroll to directory when selecting from top hero chips or category nav if needed
    const directoryEl = document.getElementById('resource-directory');
    if (directoryEl && window.scrollY > 400) {
      directoryEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="flex flex-col bg-background min-h-screen text-on-surface">
      {/* 1. Editorial Hero */}
      <ResourcesHero
        selectedCategory={selectedCategory}
        onSelectCategory={handleSelectCategory}
      />

      {/* 2. Featured Resource */}
      <ResourcesFeatured />

      {/* 3. Resource Type Navigation */}
      <ResourcesCategoryNav
        selectedCategory={selectedCategory}
        onSelectCategory={handleSelectCategory}
      />

      {/* 4. Resource Directory with Search & Filtering */}
      <ResourcesDirectory
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />

      {/* 5. Coming Soon State */}
      <ResourcesComingSoonState />

      {/* 6. Product Workflow Guides */}
      <ResourcesProductGuides />

      {/* 7. Dark Trust / Security Section */}
      <ResourcesTrustSecurity />

      {/* 8. Case Studies */}
      <ResourcesCaseStudies />

      {/* 9. Blog / Insights */}
      <ResourcesBlogInsights />

      {/* 10. Content Philosophy */}
      <ResourcesPhilosophy />

      {/* 11. Newsletter / Updates Placeholder */}
      <ResourcesNewsletter />

      {/* 12. Final CTA */}
      <ResourcesCTA />
    </div>
  );
}
