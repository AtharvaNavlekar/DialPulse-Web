import React from 'react';
import { useSEO } from '@/lib/seo/useSEO';
import { AboutHero } from '@/components/about/AboutHero';
import { AboutProblem } from '@/components/about/AboutProblem';
import { AboutCrmThinking } from '@/components/about/AboutCrmThinking';
import { AboutBeliefs } from '@/components/about/AboutBeliefs';
import { AboutJourney } from '@/components/about/AboutJourney';
import { AboutArchitectureWhy } from '@/components/about/AboutArchitectureWhy';
import { AboutMosaic } from '@/components/about/AboutMosaic';
import { AboutSecurityTrust } from '@/components/about/AboutSecurityTrust';
import { AboutAiPhilosophy } from '@/components/about/AboutAiPhilosophy';
import { AboutAudience } from '@/components/about/AboutAudience';
import { AboutDifference } from '@/components/about/AboutDifference';
import { AboutVision } from '@/components/about/AboutVision';
import { AboutHumanNote } from '@/components/about/AboutHumanNote';
import { AboutContactCTA } from '@/components/about/AboutContactCTA';

export default function About() {
  useSEO({
    title: 'About DialPulse | Built for Better Customer Operations',
    description: 'Learn why DialPulse exists, how we think about customer operations, and the product principles behind leads, communication, teams, compliance, security and AI-assisted work.',
    canonical: 'https://dialpulse.com/about',
  });

  return (
    <div className="flex flex-col bg-background min-h-screen text-on-surface">
      {/* 1. Hero: "Why DialPulse" with converging workflow pieces */}
      <AboutHero />

      {/* 2. The Problem: "Too many systems. Not enough context." */}
      <AboutProblem />

      {/* 3. A Different Way to Think About CRM */}
      <AboutCrmThinking />

      {/* 4. The DialPulse Beliefs: Vertical Editorial Index */}
      <AboutBeliefs />

      {/* 5. Product Philosophy: "Built from the work outward." */}
      <AboutJourney />

      {/* 6. Why the Platform is Built This Way: Asymmetric 01, 02, 03 */}
      <AboutArchitectureWhy />

      {/* 7. What We're Building: Immersive Product Mosaic */}
      <AboutMosaic />

      {/* 8. Security / Trust Philosophy: "Trust is a product decision." */}
      <AboutSecurityTrust />

      {/* 9. AI Philosophy: "AI should make the workflow lighter, not less accountable." */}
      <AboutAiPhilosophy />

      {/* 10. Who We Build For: Editorial Role Index */}
      <AboutAudience />

      {/* 11. The DialPulse Difference: "How we approach the product" */}
      <AboutDifference />

      {/* 12. Future & Vision: "The goal is not more software. It's better customer work." */}
      <AboutVision />

      {/* 13. Human Note: "We're still building." */}
      <AboutHumanNote />

      {/* 14. Contact Transition: "Have a workflow worth talking about?" */}
      <AboutContactCTA />
    </div>
  );
}
