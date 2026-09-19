import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  ArrowRight, 
  Calendar, 
  Terminal, 
  PhoneCall, 
  Users, 
  Scale, 
  Sparkles, 
  Layers,
  Database,
  Lock,
  ArrowUpRight
} from 'lucide-react';
import { ProductModelDiagram } from '@/components/product/ProductModelDiagram';
import { ProductModuleExplorer } from '@/components/product/ProductModuleExplorer';
import { ProductLifecycle } from '@/components/product/ProductLifecycle';
import { ProductPersonas } from '@/components/product/ProductPersonas';
import { ProductArchitectureMatrix } from '@/components/product/ProductArchitectureMatrix';

export default function Product() {
  return (
    <div className="flex flex-col bg-white w-full max-w-full overflow-x-hidden">
      
      {/* 1. HERO SECTION: DEFINING DIALPULSE AS AN OPERATING PLATFORM */}
      <section className="relative pt-10 pb-16 sm:pt-14 sm:pb-20 md:pt-16 md:pb-24 overflow-hidden bg-slate-50/70 border-b border-slate-200/80">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,rgba(0,105,92,0.07),transparent_65%)] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Status & Category Eyebrows */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200/90 shadow-2xs text-xs font-mono font-bold text-[#00695C] uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              MULTI-TENANT CRM SAAS PLATFORM
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-teal-50 border border-teal-200/80 text-xs font-mono font-semibold text-[#00695C]">
              <Lock className="w-3.5 h-3.5" />
              <span>TENANT ISOLATION [IMPLEMENTED]</span>
            </div>
          </div>

          <div className="max-w-4xl">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold text-slate-900 tracking-tight leading-[1.1]">
              The complete communication & sales operating platform.
            </h1>
            
            <p className="text-lg sm:text-xl text-slate-600 mt-6 leading-relaxed font-normal max-w-3xl">
              DialPulse is not merely a contact database. It is a multi-tenant operating layer that synchronizes lead ingestion, in-browser WebRTC softphone calling, omnichannel messaging, and team hierarchy under automated compliance guardrails and tenant-isolated AI.
            </p>
          </div>

          {/* Quick Pillar Highlights Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-10 pt-8 border-t border-slate-200/70">
            <div className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-2xs">
              <div className="text-[10px] font-mono uppercase text-slate-400 font-bold tracking-wider">Pillar 1</div>
              <div className="text-sm sm:text-base font-bold text-slate-900 font-display mt-0.5">Capture & Pipeline</div>
              <div className="text-xs text-slate-500 mt-1">Custom lead schemas & Kanban</div>
            </div>

            <div className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-2xs">
              <div className="text-[10px] font-mono uppercase text-slate-400 font-bold tracking-wider">Pillar 2</div>
              <div className="text-sm sm:text-base font-bold text-slate-900 font-display mt-0.5">Communicate</div>
              <div className="text-xs text-slate-500 mt-1">WebRTC voice & omnichannel queues</div>
            </div>

            <div className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-2xs">
              <div className="text-[10px] font-mono uppercase text-slate-400 font-bold tracking-wider">Pillar 3</div>
              <div className="text-sm sm:text-base font-bold text-slate-900 font-display mt-0.5">Manage & Supervise</div>
              <div className="text-xs text-slate-500 mt-1">Multi-tier role boundaries (RBAC)</div>
            </div>

            <div className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-2xs">
              <div className="text-[10px] font-mono uppercase text-slate-400 font-bold tracking-wider">Pillar 4</div>
              <div className="text-sm sm:text-base font-bold text-slate-900 font-display mt-0.5">Comply & Protect</div>
              <div className="text-xs text-slate-500 mt-1">DNC checks & timezone locks</div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 mt-8">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 h-11 px-6 rounded-xl bg-[#00695C] hover:bg-[#004D40] text-white text-sm font-semibold tracking-normal transition-all shadow-xs hover:shadow-sm"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Architecture Demo</span>
            </Link>

            <a
              href="#explorer"
              className="inline-flex items-center gap-2 h-11 px-6 rounded-xl bg-white hover:bg-slate-50 text-slate-700 hover:text-slate-900 text-sm font-semibold border border-slate-200 transition-all shadow-2xs"
            >
              <span>Explore Modules Below</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <div className="ml-auto hidden lg:flex items-center gap-2 text-xs font-mono text-slate-500">
              <Terminal className="w-3.5 h-3.5 text-[#00695C]" />
              <span>Audit Version: 2026.1 • Product Truth Verified</span>
            </div>
          </div>

        </div>
      </section>

      {/* 2. CORE PRODUCT MODEL: VISUAL ARCHITECTURE */}
      <section className="py-16 sm:py-20 md:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-teal-50 border border-teal-200 text-[#00695C] text-xs font-mono font-semibold uppercase tracking-wider mb-3">
              <Layers className="w-3.5 h-3.5" />
              Platform Structural Hierarchy
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 tracking-tight">
              The DialPulse Product Model
            </h2>
            <p className="text-slate-600 text-base sm:text-lg mt-3 leading-relaxed">
              Every customer interaction flows through a coordinated hierarchy. Capture feeds communication, communication informs supervision, and all actions are governed by strict compliance and private AI synthesis.
            </p>
          </div>

          {/* Interactive Model Diagram */}
          <ProductModelDiagram />
        </div>
      </section>

      {/* 3. INTERACTIVE PRODUCT MODULE EXPLORER */}
      <section id="explorer" className="py-16 sm:py-20 md:py-24 bg-slate-50/60 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProductModuleExplorer />
        </div>
      </section>

      {/* 4. END-TO-END OPERATIONAL LIFECYCLE */}
      <section className="py-16 sm:py-20 md:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProductLifecycle />
        </div>
      </section>

      {/* 5. MULTI-PERSONA VALUE: WHAT IT GIVES DIFFERENT KINDS OF USERS */}
      <section className="py-16 sm:py-20 md:py-24 bg-slate-50/60 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProductPersonas />
        </div>
      </section>

      {/* 6. VERIFIED ARCHITECTURAL MATRIX & PRODUCT TRUTH */}
      <section className="py-16 sm:py-20 md:py-24 bg-slate-950 border-b border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProductArchitectureMatrix />
        </div>
      </section>

      {/* 7. ARCHITECTURAL EVALUATION & NEXT STEPS */}
      <section className="py-20 md:py-28 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#00695C] rounded-3xl p-8 sm:p-12 lg:p-16 text-white relative overflow-hidden shadow-2xl">
            {/* Background ambient circle */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/3" />
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#004D40] rounded-full blur-2xl pointer-events-none" />

            <div className="max-w-3xl relative z-10">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 border border-white/20 text-teal-100 text-xs font-mono font-semibold uppercase tracking-wider mb-6">
                <Database className="w-3.5 h-3.5" />
                ENTERPRISE DEPLOYMENT READY
              </div>

              <h2 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight leading-tight">
                Ready to explore DialPulse for your communication team?
              </h2>

              <p className="text-teal-50 text-base sm:text-lg mt-6 leading-relaxed">
                Connect directly with our solutions engineering team to review tenant isolation policies, evaluate custom pipeline schemas, and test our WebRTC softphone in your environment.
              </p>

              <div className="flex flex-wrap items-center gap-4 mt-8">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 h-12 px-7 rounded-xl bg-white hover:bg-slate-50 text-[#00695C] text-sm font-bold tracking-normal transition-all shadow-md active:scale-[0.98]"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Architecture Demo</span>
                </Link>

                <Link
                  to="/pricing"
                  className="inline-flex items-center gap-2 h-12 px-6 rounded-xl bg-teal-900/60 hover:bg-teal-900/80 text-white text-sm font-semibold border border-teal-400/30 transition-all"
                >
                  <span>View Transparent Pricing</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>

                <Link
                  to="/security"
                  className="inline-flex items-center gap-2 h-12 px-6 rounded-xl text-teal-100 hover:text-white text-sm font-medium transition-colors"
                >
                  <span>Security & Isolation Specs</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
