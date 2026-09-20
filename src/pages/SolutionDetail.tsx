/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/Button';
import { SOLUTIONS_DATA, SolutionDefinition } from '@/data/solutionsData';
import { FEATURE_DEFINITIONS, FeatureDefinition } from '@/data/featuresData';
import { FeatureMockupRenderer } from '@/components/features/FeatureMockupRenderer';
import NotFound from '@/pages/NotFound';
import * as Icons from 'lucide-react';
import { useSEO } from '@/lib/seo/useSEO';

export default function SolutionDetail() {
  const { slug } = useParams<{ slug: string }>();

  // Find matching solution by slug or id
  const solution: SolutionDefinition | undefined = SOLUTIONS_DATA.find(
    s => s.slug === slug || s.id === slug
  );

  if (!solution) {
    return <NotFound />;
  }

  useSEO({
    title: `${solution.title} | DialPulse Solutions`,
    description: solution.shortDescription,
    canonical: `https://dialpulse.com/solutions/${solution.slug}`,
  });

  const IconComponent = ((Icons as unknown) as Record<string, React.ComponentType<{ className?: string; strokeWidth?: number }>>)[solution.icon] || Icons.Circle;

  // Resolve related features safely
  const relatedFeaturesList = solution.relatedFeatures
    .map(featSlug => FEATURE_DEFINITIONS.find(f => f.slug === featSlug || f.id === featSlug))
    .filter((f): f is FeatureDefinition => Boolean(f));

  return (
    <div className="flex flex-col bg-[#F8FAF8] min-h-screen text-[#191C1B]">
      {/* 1. Breadcrumb - Strict Hub Hierarchy */}
      <div className="bg-white border-b border-slate-200 py-3.5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center text-xs font-medium text-slate-500 font-mono">
          <Link to="/" className="hover:text-[#00695C] transition-colors flex items-center gap-1">
            <Icons.Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
          <Icons.ChevronRight className="w-3.5 h-3.5 mx-2 text-slate-300" />
          <Link to="/solutions" className="hover:text-[#00695C] transition-colors">
            Solutions Hub
          </Link>
          <Icons.ChevronRight className="w-3.5 h-3.5 mx-2 text-slate-300" />
          <span className="text-slate-900 font-semibold">{solution.title}</span>
        </div>
      </div>

      {/* 2. Solution Hero */}
      <section className="bg-white border-b border-slate-200 pt-12 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-2.5 mb-4">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-teal-50 border border-teal-200 text-[#00695C] text-xs font-mono font-bold tracking-wider uppercase">
                <IconComponent className="w-3.5 h-3.5" />
                <span>SOLUTION {solution.number} • {solution.badge}</span>
              </span>
              <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-mono font-semibold bg-slate-100 text-slate-700 border border-slate-200">
                {solution.statusBadge}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-slate-900 tracking-tight leading-tight">
              {solution.title}
            </h1>

            <p className="mt-4 text-lg sm:text-xl text-slate-700 font-medium leading-relaxed">
              {solution.headline}
            </p>

            <p className="mt-2 text-base text-slate-600 leading-relaxed">
              {solution.shortDescription}
            </p>

            <div className="mt-4 flex items-center gap-2 text-xs font-mono text-slate-500">
              <span className="font-semibold text-slate-700">Target Audience:</span>
              <span>{solution.audience}</span>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button href="/contact" variant="filled" size="lg" className="bg-[#00695C] hover:bg-[#004D40] text-white">
                Book Architecture Walkthrough
              </Button>
              <Button href="#capabilities" variant="outlined" size="lg" className="border-slate-300 text-slate-700 hover:bg-slate-50">
                Review Product Capabilities
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. The Operational Problem & Why It Persists */}
      <section className="py-14 sm:py-20 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-rose-700">
              The Operational Problem
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 mt-2 tracking-tight">
              {solution.problem.headline}
            </h2>
            <p className="mt-3 text-base text-slate-600 leading-relaxed">
              {solution.problem.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {solution.problem.frictions.map((friction, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-rose-100 shadow-2xs">
                <div className="w-8 h-8 rounded-lg bg-rose-50 border border-rose-200 flex items-center justify-center text-rose-700 font-mono text-xs font-bold mb-3">
                  0{idx + 1}
                </div>
                <p className="text-sm text-slate-700 leading-relaxed font-medium">
                  {friction}
                </p>
              </div>
            ))}
          </div>

          {/* Root Cause Card */}
          <div className="bg-amber-50/70 border border-amber-200/80 rounded-2xl p-6 sm:p-8">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-amber-800 uppercase tracking-wider mb-2">
              <Icons.HelpCircle className="w-4 h-4" />
              <span>Why This Problem Persists In Legacy Workflows</span>
            </div>
            <p className="text-sm sm:text-base text-amber-950 leading-relaxed">
              {solution.problem.whyItPersists}
            </p>
          </div>
        </div>
      </section>

      {/* 4. The DialPulse Approach & Step-by-Step Workflow */}
      <section className="py-14 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#00695C]">
              Operational Re-engineering
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 mt-2 tracking-tight">
              {solution.approach.headline}
            </h2>
            <p className="mt-3 text-base text-slate-600 leading-relaxed">
              {solution.approach.description}
            </p>
          </div>

          <div className="space-y-4">
            <div className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
              Chronological Workflow Sequence:
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {solution.workflow.map((st) => (
                <div key={st.step} className="bg-[#F8FAF8] p-5 rounded-2xl border border-slate-200/80 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="w-7 h-7 rounded-lg bg-[#00695C] text-white flex items-center justify-center text-xs font-mono font-bold">
                        0{st.step}
                      </span>
                      <span className="text-[10px] font-mono text-slate-400 uppercase">Phase 0{st.step}</span>
                    </div>
                    <h3 className="text-base font-display font-bold text-slate-900">
                      {st.title}
                    </h3>
                    <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                      {st.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Supporting High-Fidelity UI Representation */}
      <section className="py-14 sm:py-20 border-b border-slate-200 bg-[#F8FAF8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-8 text-center sm:text-left">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#00695C]">
              Interactive Demonstration
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 mt-1 tracking-tight">
              Operational Interface Representation
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
              Experience the abstracted DOM interface telecallers and operations leads use to manage this workflow.
            </p>
          </div>

          <div className="w-full">
            <FeatureMockupRenderer mockupType={solution.mockupType} disclaimer={solution.mockupDisclaimer} />
          </div>
        </div>
      </section>

      {/* 6. Product Capabilities Involved */}
      <section id="capabilities" className="py-14 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#00695C]">
              Technical Functions
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 mt-2 tracking-tight">
              Verified Product Capabilities
            </h2>
            <p className="mt-3 text-base text-slate-600 leading-relaxed">
              Every solution is powered by modular, tenant-isolated functions engineered directly into the DialPulse codebase.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {solution.capabilities.map((cap, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-[#F8FAF8] border border-slate-200/80 flex items-start gap-4">
                <div className="w-9 h-9 rounded-xl bg-teal-50 border border-teal-200 flex items-center justify-center text-[#00695C] shrink-0 mt-0.5">
                  <Icons.CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-display font-bold text-slate-900">
                    {cap.title}
                  </h3>
                  <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">
                    {cap.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Operational Benefits Checklist */}
          <div className="mt-12 pt-8 border-t border-slate-100">
            <div className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mb-4">
              Direct Operational Outcomes:
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {solution.benefits.map((b, idx) => (
                <div key={idx} className="p-5 rounded-xl bg-slate-50 border border-slate-200">
                  <h4 className="text-sm font-bold font-display text-slate-900">
                    {b.title}
                  </h4>
                  <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                    {b.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. Practical Real-World Use Cases */}
      <section className="py-14 sm:py-20 border-b border-slate-200 bg-[#F8FAF8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500">
              Operational Scenarios
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 mt-2 tracking-tight">
              Practical Real-World Use Cases
            </h2>
            <p className="mt-3 text-base text-slate-600 leading-relaxed">
              How high-volume sales teams and operations leads deploy this solution in daily production.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {solution.practicalUseCases.map((uc, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs flex flex-col justify-between">
                <div>
                  <div className="text-[11px] font-mono font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200 inline-block mb-3">
                    {uc.audience}
                  </div>
                  <h3 className="text-base font-display font-bold text-slate-900">
                    {uc.title}
                  </h3>
                  <div className="mt-3 text-xs text-slate-600 space-y-2">
                    <p>
                      <strong className="text-slate-800">Operational Reality:</strong> {uc.scenario}
                    </p>
                    <p>
                      <strong className="text-[#00695C]">DialPulse Resolution:</strong> {uc.outcome}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Interconnected Product Features (Bidirectional Architecture) */}
      {relatedFeaturesList.length > 0 && (
        <section className="py-14 sm:py-20 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-8">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#00695C]">
                Platform Architecture
              </span>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 mt-2 tracking-tight">
                Interconnected Product Modules
              </h2>
              <p className="mt-3 text-base text-slate-600 leading-relaxed">
                This solution relies on the following verified platform feature modules:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedFeaturesList.map((feat) => {
                const FeatIcon = ((Icons as unknown) as Record<string, React.ComponentType<{ className?: string; strokeWidth?: number }>>)[feat.icon] || Icons.Layers;
                return (
                  <Link
                    key={feat.id}
                    to={feat.route}
                    className="p-5 rounded-2xl border border-slate-200 bg-[#F8FAF8] hover:bg-white hover:border-[#00695C] hover:shadow-sm transition-all flex flex-col justify-between group cursor-pointer"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <div className="w-8 h-8 rounded-lg bg-teal-50 border border-teal-200 flex items-center justify-center text-[#00695C] group-hover:bg-[#00695C] group-hover:text-white transition-colors">
                          <FeatIcon className="w-4 h-4" />
                        </div>
                        <span className="text-[10px] font-mono text-slate-400">MOD {feat.number}</span>
                      </div>
                      <h3 className="text-base font-display font-bold text-slate-900 group-hover:text-[#00695C] transition-colors">
                        {feat.name}
                      </h3>
                      <p className="text-xs text-slate-600 mt-1.5 line-clamp-2 leading-relaxed">
                        {feat.shortDescription}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-200/70 flex items-center justify-between text-xs font-mono text-[#00695C] font-semibold">
                      <span>Explore Module Specs</span>
                      <Icons.ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* 9. Solution CTA Banner */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left flex flex-col sm:flex-row sm:items-center justify-between gap-8">
          <div className="max-w-2xl">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-teal-400">
              Ready to deploy this workflow?
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-white mt-2 tracking-tight">
              Evaluate {solution.title} for Your Sales Squad
            </h2>
            <p className="mt-2 text-slate-300 text-sm sm:text-base leading-relaxed">
              Schedule an architecture demonstration with our operations engineering team. We will review your current CRM schema, telephony carriers, and compliance requirements.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 justify-center sm:justify-start shrink-0">
            <Button href="/contact" variant="filled" size="lg" className="bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold">
              Schedule Architecture Review
            </Button>
            <Button href="/solutions" variant="outlined" size="lg" className="border-slate-700 text-white hover:bg-slate-800">
              View All Solutions
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
