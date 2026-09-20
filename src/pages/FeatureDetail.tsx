import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/Button';
import { FEATURE_DEFINITIONS, FeatureDefinition } from '@/data/featuresData';
import { FeatureMockupRenderer } from '@/components/features/FeatureMockupRenderer';
import NotFound from '@/pages/NotFound';
import * as Icons from 'lucide-react';
import { useSEO } from '@/lib/seo/useSEO';

export default function FeatureDetail() {
  const { id } = useParams<{ id: string }>();

  // Normalize route parameter (e.g., alias 'calling' to canonical 'calls')
  const normalizedId = id === 'calling' ? 'calls' : id;
  const feature: FeatureDefinition | undefined = FEATURE_DEFINITIONS.find(
    f => f.slug === normalizedId || f.id === normalizedId
  );

  if (!feature) {
    return <NotFound />;
  }

  useSEO({
    title: `${feature.name} | DialPulse CRM`,
    description: feature.shortDescription,
    canonical: `https://dialpulse.com${feature.route}`,
  });

  const Icon = ((Icons as unknown) as Record<string, React.ComponentType<{ className?: string; strokeWidth?: number }>>)[feature.icon] || Icons.Circle;

  // Resolve related features safely
  const relatedFeaturesList = feature.relatedFeatures
    .map(slug => FEATURE_DEFINITIONS.find(f => f.slug === slug))
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
          <Link to="/features" className="hover:text-[#00695C] transition-colors">
            Features
          </Link>
          <Icons.ChevronRight className="w-3.5 h-3.5 mx-2 text-slate-300" />
          <span className="text-slate-900 font-semibold">{feature.name}</span>
        </div>
      </div>

      {/* 2. Hero / Overview */}
      <section className="pt-10 pb-12 md:pt-16 md:pb-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-2.5 mb-6">
              <span className="px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-[#00695C] text-xs font-bold font-mono">
                {feature.category}
              </span>
              <span className="px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-semibold font-mono">
                Feature {feature.number}
              </span>
              <span className="px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold font-mono">
                {feature.statusBadge}
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6">
              {feature.name}
            </h1>

            <p className="text-lg sm:text-xl text-slate-700 leading-relaxed font-normal mb-6">
              {feature.shortDescription}
            </p>

            <p className="text-sm sm:text-base text-slate-500 leading-relaxed mb-8">
              {feature.longDescription}
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-8">
              <Button size="lg" href="/contact" className="h-12 px-7 bg-[#00695C] hover:bg-[#004D40] text-white font-bold rounded-xl shadow-xs">
                Book Architecture Walkthrough
              </Button>
              <Button variant="outlined" size="lg" href="/features" className="h-12 px-7 border-slate-300 text-slate-700 hover:bg-slate-50 font-bold rounded-xl">
                Features Index
              </Button>
            </div>

            <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-slate-500 font-mono">
              <div>
                <span className="text-slate-400">Target Audience:</span>{' '}
                <span className="text-slate-700 font-semibold">{feature.audience}</span>
              </div>
              <div>
                <span className="text-slate-400">Execution Boundary:</span>{' '}
                <span className="text-slate-700 font-semibold">Tenant Isolated</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Product Demonstration / Workflow Visual */}
      <section className="py-12 md:py-16 bg-[#F8FAF8] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-bold text-[#00695C] uppercase tracking-wider font-mono">
              Operational Interface
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 mt-1">
              Visual Demonstration
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Representative workflow demonstration of how {feature.name.toLowerCase()} functions in daily customer operations.
            </p>
          </div>

          <FeatureMockupRenderer mockupType={feature.mockupType} disclaimer={feature.mockupDisclaimer} />
        </div>
      </section>

      {/* 4. Problem First: What problem does this address? */}
      <section className="py-14 md:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 border border-rose-200 text-rose-700 text-xs font-bold font-mono uppercase tracking-wider mb-4">
              <Icons.AlertCircle className="w-3.5 h-3.5 text-rose-600" />
              The Operational Problem
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 tracking-tight mb-4">
              {feature.problem.headline}
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              {feature.problem.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {feature.problem.frictions.map((friction, i) => (
              <div key={i} className="bg-[#F8FAF8] rounded-xl p-6 border border-slate-200/90 shadow-2xs">
                <div className="w-8 h-8 rounded-lg bg-rose-100 text-rose-700 flex items-center justify-center font-bold text-xs font-mono mb-4">
                  0{i + 1}
                </div>
                <h3 className="text-sm font-bold text-slate-900 mb-2">Operational Friction</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {friction}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. DialPulse Solution & Workflow */}
      <section className="py-14 md:py-20 bg-[#F8FAF8] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-[#00695C] text-xs font-bold font-mono uppercase tracking-wider mb-4">
              <Icons.CheckCircle2 className="w-3.5 h-3.5 text-[#00695C]" />
              The DialPulse Architecture
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 tracking-tight mb-4">
              {feature.solution.headline}
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              {feature.solution.description}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {feature.solution.workflowSteps.map(item => (
              <div key={item.step} className="bg-white rounded-xl p-6 border border-slate-200 shadow-2xs flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-8 h-8 rounded-lg bg-teal-50 border border-teal-200 text-[#00695C] font-mono font-bold text-xs flex items-center justify-center">
                      0{item.step}
                    </span>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400">Sequence</span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Capabilities vs. Operational Benefits */}
      <section className="py-14 md:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Column A: Platform Capabilities (What the system executes) */}
            <div>
              <div className="mb-8">
                <span className="text-xs font-bold text-[#00695C] uppercase tracking-wider font-mono">
                  Functional Scope
                </span>
                <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 mt-1">
                  Platform Capabilities
                </h2>
                <p className="text-sm text-slate-600 mt-2">
                  Concrete operational features implemented in the software architecture.
                </p>
              </div>

              <div className="space-y-4">
                {feature.capabilities.map((cap, i) => (
                  <div key={i} className="p-5 rounded-xl bg-[#F8FAF8] border border-slate-200/90 shadow-2xs">
                    <div className="flex items-center justify-between gap-3 mb-1.5">
                      <h3 className="text-base font-bold text-slate-900">{cap.title}</h3>
                      {cap.tag && (
                        <span className="px-2 py-0.5 rounded bg-white border border-slate-200 text-[10px] font-mono font-bold text-slate-600 shrink-0">
                          {cap.tag}
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {cap.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Column B: Operational Benefits (Why it matters for teams) */}
            <div>
              <div className="mb-8">
                <span className="text-xs font-bold text-blue-700 uppercase tracking-wider font-mono">
                  Team Impact
                </span>
                <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 mt-1">
                  Operational Benefits
                </h2>
                <p className="text-sm text-slate-600 mt-2">
                  How structured software execution translates into day-to-day team clarity.
                </p>
              </div>

              <div className="space-y-4">
                {feature.benefits.map((ben, i) => (
                  <div key={i} className="p-5 rounded-xl bg-[#F8FAF8] border border-slate-200/90 shadow-2xs">
                    <div className="flex items-center gap-2.5 mb-2">
                      <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                        <Icons.Check className="w-3 h-3" />
                      </div>
                      <h3 className="text-base font-bold text-slate-900">{ben.title}</h3>
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed pl-7">
                      {ben.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Related Features Directory */}
      {relatedFeaturesList.length > 0 && (
        <section className="py-14 md:py-20 bg-[#F8FAF8] border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
              <div>
                <span className="text-xs font-bold text-[#00695C] uppercase tracking-wider font-mono">
                  Interconnected Workflows
                </span>
                <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 mt-1">
                  Related Platform Modules
                </h2>
              </div>
              <Link
                to="/features"
                className="text-xs font-bold text-[#00695C] hover:underline flex items-center gap-1 font-mono"
              >
                View all 10 features <Icons.ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedFeaturesList.map(rel => {
                const RelIcon = ((Icons as unknown) as Record<string, React.ComponentType<{ className?: string }>>)[rel.icon] || Icons.Circle;
                return (
                  <Link
                    key={rel.slug}
                    to={rel.route}
                    className="group bg-white p-6 rounded-xl border border-slate-200 hover:border-teal-400 shadow-2xs transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-10 h-10 rounded-lg bg-teal-50 border border-teal-200 text-[#00695C] flex items-center justify-center group-hover:scale-105 transition-transform">
                          <RelIcon className="w-5 h-5" />
                        </div>
                        <span className="text-[10px] font-mono text-slate-400 font-bold">
                          {rel.number}
                        </span>
                      </div>
                      <h3 className="text-base font-bold text-slate-900 group-hover:text-[#00695C] transition-colors mb-2">
                        {rel.name}
                      </h3>
                      <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed mb-4">
                        {rel.shortDescription}
                      </p>
                    </div>
                    <div className="text-xs font-bold text-[#00695C] flex items-center gap-1 pt-3 border-t border-slate-100 font-mono">
                      <span>Explore workflow</span>
                      <Icons.ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* 8. Architecture Review CTA */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-bold font-mono uppercase tracking-wider mb-6">
            Technical Architecture Review
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 tracking-tight mb-4">
            Evaluate DialPulse in your technical environment
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto mb-8">
            Schedule a 30-minute operational walkthrough to review tenant data isolation, telephony latency, compliance safeguards, and schema customization for your sales operations.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
            <Button size="lg" href="/contact" className="h-12 px-8 bg-[#00695C] hover:bg-[#004D40] text-white font-bold rounded-xl shadow-xs">
              Schedule Technical Consultation
            </Button>
            <Button variant="outlined" size="lg" href="/features" className="h-12 px-8 border-slate-300 text-slate-700 hover:bg-slate-50 font-bold rounded-xl">
              All Capabilities
            </Button>
          </div>

          <p className="text-xs text-slate-400 font-mono">
            No credit card required • Structured technical walkthrough • Engineering-led
          </p>
        </div>
      </section>
    </div>
  );
}

