import { useEffect } from 'react';
import { ArrowRight, CheckCircle2, Shield, Sparkles, Layers, PhoneCall, Calendar, Users } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { SolutionHeroVisual } from '@/components/solutions/SolutionHeroVisual';
import { SolutionExplorer } from '@/components/solutions/SolutionExplorer';
import { SolutionsWorkflowVisual } from '@/components/solutions/SolutionsWorkflowVisual';
import { SolutionsSituations } from '@/components/solutions/SolutionsSituations';
import { SolutionsByRole } from '@/components/solutions/SolutionsByRole';
import { SolutionsComparison } from '@/components/solutions/SolutionsComparison';
import { SolutionsProductMatrix } from '@/components/solutions/SolutionsProductMatrix';
import { SolutionsSecurity } from '@/components/solutions/SolutionsSecurity';
import { SolutionsFAQ } from '@/components/solutions/SolutionsFAQ';

export default function Solutions() {
  const { slug } = useParams<{ slug?: string }>();

  useEffect(() => {
    document.title = 'Solutions & Operational Workflows | DialPulse CRM';
    if (!slug) {
      window.scrollTo(0, 0);
    }
  }, [slug]);

  return (
    <div className="w-full bg-[#F8FAFC] min-h-screen text-slate-900 selection:bg-[#00695C] selection:text-white pb-20">
      
      {/* Top Hero Section */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-24 px-4 sm:px-6 lg:px-8 border-b border-slate-200/80 bg-linear-to-b from-white via-slate-50/50 to-[#F8FAFC]">
        <div className="max-w-7xl mx-auto space-y-12">
          
          {/* Header Copy */}
          <div className="max-w-3xl space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-teal-50 border border-teal-200 text-[#00695C] text-xs font-mono font-semibold uppercase tracking-wider">
              <Layers className="w-3.5 h-3.5" />
              Problem-First Operational Workflows
            </div>
            
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display font-bold text-slate-900 tracking-tight leading-[1.08]">
              DialPulse adapts to the way your team sells, communicates and operates.
            </h1>
            
            <p className="text-slate-600 text-lg sm:text-xl leading-relaxed">
              Connect customer data, in-browser telephony, multi-channel messaging, structured follow-ups, team hierarchy, reporting, and compliance controls in a single, tenant-isolated platform.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#solution-explorer"
                className="px-6 py-3 rounded-xl bg-slate-900 text-white hover:bg-slate-800 text-sm font-semibold transition-all shadow-sm flex items-center gap-2"
              >
                <span>Find Your Workflow Solution</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <Link
                to="/product"
                className="px-6 py-3 rounded-xl bg-white border border-slate-300 text-slate-700 hover:bg-slate-50 text-sm font-semibold transition-all flex items-center gap-2"
              >
                <span>Explore Technical Specs</span>
                <span>→</span>
              </Link>
            </div>

            {/* Quick trust metrics */}
            <div className="flex flex-wrap items-center gap-6 pt-4 text-xs font-mono text-slate-500">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#00695C]" />
                <span>Zero Deskphone Hardware</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#00695C]" />
                <span>Zero-Bypass Policy Engine</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#00695C]" />
                <span>Tenant-Isolated Database</span>
              </div>
            </div>
          </div>

          {/* Hero Connected Pipeline Visual */}
          <div className="w-full">
            <SolutionHeroVisual />
          </div>

        </div>
      </section>

      {/* Main Container for Solution Modules */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-24 mt-16 sm:mt-24">
        
        {/* 1. Solution Explorer: 8 Problem Categories */}
        <section>
          <SolutionExplorer selectedSlug={slug} />
        </section>

        {/* 2. Operational Lifecycle Flow */}
        <section>
          <SolutionsWorkflowVisual />
        </section>

        {/* 3. Operational Situations & Team Maturity */}
        <section>
          <SolutionsSituations />
        </section>

        {/* 4. Solutions by Role */}
        <section>
          <SolutionsByRole />
        </section>

        {/* 5. Before vs With DialPulse Comparison */}
        <section>
          <SolutionsComparison />
        </section>

        {/* 6. Product Matrix Cross-Reference */}
        <section>
          <SolutionsProductMatrix />
        </section>

        {/* 7. Security, Tenant Boundaries & Governance */}
        <section>
          <SolutionsSecurity />
        </section>

        {/* 8. Solutions FAQ */}
        <section>
          <SolutionsFAQ />
        </section>

        {/* 9. Closing Action Banner */}
        <section className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 lg:p-16 border border-slate-800 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(0,105,92,0.25),transparent_70%)] pointer-events-none" />
          
          <div className="max-w-3xl space-y-6 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-teal-950 border border-teal-500/30 text-teal-400 text-xs font-mono font-medium tracking-wide uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              Operational Architecture Review
            </div>

            <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight leading-tight">
              Find the workflow that fits your team.
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">
              Stop juggling disjointed softphones, spreadsheets, and messaging tabs. Speak directly with our product team to walk through a tailored walkthrough of your sales and telecalling operations.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                to="/contact"
                className="px-6 py-3.5 rounded-xl bg-teal-400 hover:bg-teal-300 text-slate-950 font-bold text-sm transition-all shadow-md flex items-center gap-2"
              >
                <span>Book Architecture Walkthrough</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                to="/product"
                className="px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 text-sm font-semibold transition-all flex items-center gap-2"
              >
                <span>Explore Complete Product Specs</span>
                <span>→</span>
              </Link>
            </div>

            <div className="pt-6 border-t border-slate-800/80 flex flex-wrap items-center gap-6 text-xs font-mono text-slate-400">
              <span>● Tailored 1-on-1 walkthrough</span>
              <span>● No generic sales pitch</span>
              <span>● Custom schema evaluation</span>
            </div>
          </div>
        </section>

      </main>

    </div>
  );
}
