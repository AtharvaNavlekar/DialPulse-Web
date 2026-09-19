import React, { useState, useMemo, useEffect } from 'react';
import { useSEO } from '@/lib/seo/useSEO';
import { FAQ_ITEMS, FAQ_CATEGORIES, FAQCategoryId } from '@/data/faqData';
import { FAQHero } from '@/components/faq/FAQHero';
import { FAQCategoryNav } from '@/components/faq/FAQCategoryNav';
import { FAQFeatured } from '@/components/faq/FAQFeatured';
import { FAQList } from '@/components/faq/FAQList';
import { FAQContactCTA } from '@/components/faq/FAQContactCTA';

export default function FAQ() {
  const [selectedCategory, setSelectedCategory] = useState<FAQCategoryId | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({
    'prod-what-is-dialpulse': true,
    'comp-controls-overview': true,
    'sec-tenant-isolation': true,
  });

  // SEO configuration with canonical link
  useSEO({
    title: 'FAQ | DialPulse',
    description: 'Find answers about DialPulse CRM, leads, calling, messaging, teams, reporting, compliance, AI, security, imports, exports and pricing.',
    canonical: 'https://dialpulse.com/faq',
  });

  // Calculate category counts based on full FAQ dataset
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    FAQ_ITEMS.forEach((item) => {
      counts[item.category] = (counts[item.category] || 0) + 1;
    });
    return counts;
  }, []);

  // Filter items dynamically by selected category and search input
  const filteredItems = useMemo(() => {
    return FAQ_ITEMS.filter((item) => {
      // Category match
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
      if (!matchesCategory) return false;

      // Search match (matches question, answer, or category name)
      if (!searchQuery.trim()) return true;

      const q = searchQuery.toLowerCase().trim();
      const matchQuestion = item.question.toLowerCase().includes(q);
      const matchAnswer = item.answer.toLowerCase().includes(q);
      const matchCat = item.category.toLowerCase().includes(q);

      return matchQuestion || matchAnswer || matchCat;
    });
  }, [selectedCategory, searchQuery]);

  // Handle Accordion Toggle
  const handleToggle = (id: string) => {
    setOpenIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // Scroll to and open specific question from Featured cards
  const handleSelectFeaturedQuestion = (id: string) => {
    // Open the targeted accordion item
    setOpenIds((prev) => ({ ...prev, [id]: true }));

    // Reset category filter if it was hiding the targeted item
    const targetItem = FAQ_ITEMS.find((item) => item.id === id);
    if (targetItem && selectedCategory !== 'all' && selectedCategory !== targetItem.category) {
      setSelectedCategory('all');
    }

    // Smooth scroll into view
    setTimeout(() => {
      const el = document.getElementById(`faq-item-${id}`);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 50);
  };

  // Inject exact FAQPage JSON-LD Structured Data for rendered questions
  useEffect(() => {
    const scriptId = 'faqpage-jsonld-data';
    let scriptTag = document.getElementById(scriptId) as HTMLScriptElement | null;

    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = scriptId;
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }

    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: FAQ_ITEMS.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer,
        },
      })),
    };

    scriptTag.text = JSON.stringify(structuredData);

    return () => {
      const tag = document.getElementById(scriptId);
      if (tag) {
        tag.remove();
      }
    };
  }, []);

  return (
    <div className="flex flex-col bg-background min-h-screen text-on-surface">
      {/* 1. Hero with Search Input & Product Flow Visual */}
      <FAQHero
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onClearSearch={() => setSearchQuery('')}
      />

      {/* 2. Sticky/Responsive Category Navigation */}
      <FAQCategoryNav
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
        categoryCounts={categoryCounts}
      />

      {/* 3. "Start Here" High-Value Questions (Visible when no search filter active) */}
      {!searchQuery && (
        <FAQFeatured
          items={FAQ_ITEMS}
          onSelectQuestion={handleSelectFeaturedQuestion}
        />
      )}

      {/* 4. Grouped Category Accordion Sections */}
      <main className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FAQList
            items={filteredItems}
            openIds={openIds}
            onToggle={handleToggle}
            selectedCategory={selectedCategory}
            searchQuery={searchQuery}
            onClearSearch={() => setSearchQuery('')}
          />
        </div>
      </main>

      {/* 5. "Still Have Questions?" & 3-Route Specialized Inquiries */}
      <FAQContactCTA />
    </div>
  );
}
