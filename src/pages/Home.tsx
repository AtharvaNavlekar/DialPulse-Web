import React from 'react';
import { useSEO } from '@/lib/seo/useSEO';
import { HeroMockup } from '@/components/marketing/mockups/HeroMockup';
import { FeatureIndex } from '@/components/marketing/sections/FeatureIndex';
import { ComplianceMockup } from '@/components/marketing/mockups/ComplianceMockup';
import { ShieldCheck, Phone, Database, CheckCircle2, ArrowRight } from 'lucide-react';

export default function Home() {
  useSEO({
    title: 'DialPulse | The Complete CRM for Sales & Communication Teams',
    description: 'DialPulse is a product-led CRM bringing lead management, calling, omnichannel messaging, and compliance into a single, high-performance operating layer.',
  });

  return (
    <div className="flex flex-col bg-white w-full max-w-full overflow-x-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-10 pb-14 sm:pt-14 sm:pb-16 md:pt-16 md:pb-20 overflow-hidden bg-slate-50/50 border-b border-slate-200/80">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,rgba(0,105,92,0.06),transparent_60%)] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-white border border-slate-200/90 rounded-2xl md:rounded-3xl p-6 sm:p-8 lg:p-12 shadow-[0_20px_50px_-15px_rgba(0,105,92,0.08)] flex flex-col lg:flex-row items-center gap-10 lg:gap-12 relative overflow-hidden">
            
            {/* Copy (Left) */}
            <div className="w-full lg:w-1/2 shrink-0 relative z-20 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 border border-teal-200 text-xs font-mono font-bold text-[#00695C] mb-6 uppercase tracking-wider shadow-2xs">
                <span className="flex h-2 w-2 rounded-full bg-[#00695C] animate-pulse"></span>
                The Operating Layer for Sales
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-slate-900 tracking-tight leading-[1.08] mb-6">
                Every customer conversation.<br />
                <span className="text-[#00695C]">One unified workspace.</span>
              </h1>
              
              <p className="text-base sm:text-lg text-slate-600 mb-8 leading-relaxed max-w-xl">
                From lead capture to final follow-up. DialPulse brings your softphone calling, messaging, visual pipelines, and compliance checks into a single, lightning-fast CRM.
              </p>
              
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                <a 
                  href="https://app.dialpulse.com/signup" 
                  className="inline-flex items-center justify-center px-7 h-12 rounded-xl bg-[#00695C] text-white font-bold text-base hover:bg-[#004D40] transition-all shadow-sm shadow-teal-700/20"
                >
                  Get Started Free
                </a>
                <a 
                  href="/contact" 
                  className="inline-flex items-center justify-center px-7 h-12 rounded-xl bg-white border border-slate-300 text-slate-700 font-bold text-base hover:bg-slate-50 hover:border-slate-400 transition-all shadow-2xs"
                >
                  Request a Demo
                </a>
              </div>

              {/* Trust Subtext */}
              <div className="mt-8 pt-6 border-t border-slate-100 flex flex-wrap items-center gap-6 text-xs font-medium text-slate-500">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Multi-tenant data isolation</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>In-browser WebRTC telephony</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Automated compliance guardrails</span>
                </div>
              </div>
            </div>
            
            {/* Product Visual (Right) */}
            <div className="w-full lg:w-1/2 relative z-20">
               <HeroMockup />
            </div>

          </div>
        </div>
      </section>

      {/* 2. METRIC HIGHLIGHTS BAR */}
      <section className="py-7 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
             <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
               <span className="font-mono text-xl sm:text-2xl font-extrabold text-slate-900">Native</span>
               <span className="text-xs font-bold text-slate-500 tracking-wider uppercase mt-0.5">Softphone & CRM</span>
             </div>
             <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
               <span className="font-mono text-xl sm:text-2xl font-extrabold text-slate-900">Strict</span>
               <span className="text-xs font-bold text-slate-500 tracking-wider uppercase mt-0.5">RBAC & Data Isolation</span>
             </div>
             <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
               <span className="font-mono text-xl sm:text-2xl font-extrabold text-slate-900">Built-in</span>
               <span className="text-xs font-bold text-slate-500 tracking-wider uppercase mt-0.5">DNC Compliance</span>
             </div>
             <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
               <span className="font-mono text-xl sm:text-2xl font-extrabold text-slate-900">Unified</span>
               <span className="text-xs font-bold text-slate-500 tracking-wider uppercase mt-0.5">Omnichannel Inbox</span>
             </div>
          </div>
        </div>
      </section>

      {/* 3. EDITORIAL STORY SECTION */}
      <section className="py-20 md:py-28 bg-slate-50/60 border-b border-slate-200 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative text-left">
              <span className="text-xs font-mono font-bold text-[#00695C] uppercase tracking-wider block mb-3">Context Matters</span>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-slate-900 leading-[1.05] tracking-tight">
                Every customer conversation has history.
              </h2>
            </div>
            <div className="text-left space-y-4">
              <div className="w-12 h-1 bg-[#00695C] rounded-full" />
              <p className="text-lg text-slate-600 leading-relaxed">
                Sales context is commonly scattered across browser tabs, messaging apps, and external telephony tools. When your team dials a lead, they need the full story—every prior call, SMS, objection, and consent timestamp—rendered in real time.
              </p>
              <p className="text-base text-[#00695C] font-semibold leading-relaxed">
                DialPulse unifies communication and customer records into one high-performance interface. No duplicate data entry. No compliance surprises.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FEATURE INDEX */}
      <section className="py-20 md:py-28 bg-white border-b border-slate-200 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 md:mb-16 max-w-2xl text-left">
             <span className="text-xs font-mono font-bold text-[#00695C] uppercase tracking-wider block mb-2">Platform Capabilities</span>
             <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-slate-900 leading-tight tracking-tight mb-4">
                The operating layer for every customer workflow.
             </h2>
             <p className="text-base sm:text-lg text-slate-600">
                Switch between high-volume prospecting, rigorous compliance checking, and deep analytics without changing tabs.
             </p>
          </div>
          
          <FeatureIndex />
        </div>
      </section>

      {/* 5. LARGE BRAND STATEMENT */}
      <section className="py-20 md:py-28 bg-[#00695C] relative overflow-hidden flex items-center justify-center text-center">
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_70%)] pointer-events-none" />
         <div className="relative z-10 px-4">
            <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-extrabold text-white leading-none tracking-tight flex flex-col items-center gap-2">
               <span>CAPTURE</span>
               <span className="text-teal-200 text-2xl md:text-4xl">✦</span>
               <span>CONNECT</span>
               <span className="text-teal-200 text-2xl md:text-4xl">✦</span>
               <span>FOLLOW UP</span>
               <span className="text-teal-200 text-2xl md:text-4xl">✦</span>
               <span>GROW</span>
            </h2>
         </div>
      </section>

      {/* 6. ROLE / PEOPLE SECTION */}
      <section className="py-20 md:py-28 bg-slate-50/60 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-mono font-bold text-[#00695C] uppercase tracking-wider block mb-2">Role-Based Control</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-slate-900 mb-4 leading-tight">
              Built for the whole team.
            </h2>
            <p className="text-base sm:text-lg text-slate-600">
              DialPulse provides distinct, powerful views tailored to exactly what each role needs to execute effectively.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
             {[
               { role: 'OWNER', focus: 'Visibility & Control', desc: 'Monitor top-level conversion rates, enforce global compliance protocols, and manage multi-tenant security.', color: 'text-teal-800', bg: 'bg-teal-50', border: 'border-teal-200' },
               { role: 'SALES LEAD', focus: 'Team Performance', desc: 'Track outbound volume, review call recordings for QA, and optimize pipeline stages dynamically.', color: 'text-blue-800', bg: 'bg-blue-50', border: 'border-blue-200' },
               { role: 'TELECALLER', focus: 'High-Volume Execution', desc: 'Click to dial, log rapid dispositions, and dispatch follow-up templates directly inside the lead timeline.', color: 'text-emerald-800', bg: 'bg-emerald-50', border: 'border-emerald-200' },
               { role: 'OPERATIONS', focus: 'Reporting & Oversight', desc: 'Configure custom fields, monitor live agent statuses, and automate intelligent lead distribution.', color: 'text-indigo-800', bg: 'bg-indigo-50', border: 'border-indigo-200' }
             ].map((item, i) => (
               <div key={i} className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 hover:border-teal-300 hover:shadow-sm transition-all text-left">
                  <div className="inline-block font-mono text-xs font-bold text-[#00695C] tracking-widest uppercase mb-3 bg-slate-100 px-2.5 py-1 rounded-md">
                    {item.role}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-display font-bold text-slate-900 mb-2">
                    {item.focus}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* 7. NATIVE COMPLIANCE PROOF */}
      <section className="py-20 md:py-28 bg-white border-b border-slate-200 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="bg-slate-50/70 rounded-2xl md:rounded-3xl border border-slate-200 p-6 sm:p-8 lg:p-12 flex flex-col lg:flex-row items-center gap-10 lg:gap-12">
              <div className="w-full lg:w-1/2 text-left">
                 <span className="text-xs font-mono font-bold text-[#00695C] uppercase tracking-wider block mb-2">Zero-Trust Rules</span>
                 <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-slate-900 mb-6 leading-tight">
                   Native Compliance Engine
                 </h2>
                 <p className="text-base sm:text-lg text-slate-600 mb-8 leading-relaxed">
                   Telemarketing regulations are strict. DialPulse includes an evaluation engine that checks every outgoing call or message against DNC lists, safe contact windows, and frequency caps before dispatch.
                 </p>
                 <ul className="space-y-4">
                    <li className="flex items-center gap-3 text-base text-slate-800 font-medium">
                      <div className="w-7 h-7 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-700 shrink-0">
                        <ShieldCheck className="w-4 h-4" />
                      </div>
                      <span>Multi-tenant data isolation & verified role access</span>
                    </li>
                    <li className="flex items-center gap-3 text-base text-slate-800 font-medium">
                      <div className="w-7 h-7 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-700 shrink-0">
                        <Phone className="w-4 h-4" />
                      </div>
                      <span>Automatic local-timezone validation for outbound calls</span>
                    </li>
                    <li className="flex items-center gap-3 text-base text-slate-800 font-medium">
                      <div className="w-7 h-7 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-700 shrink-0">
                        <Database className="w-4 h-4" />
                      </div>
                      <span>Centralized Do-Not-Call (DNC) registry synchronization</span>
                    </li>
                 </ul>
              </div>
              <div className="w-full lg:w-1/2 relative">
                 <ComplianceMockup />
              </div>
           </div>
        </div>
      </section>

      {/* 8. CONTACT & DEMO REQUEST */}
      <section className="py-20 md:py-28 bg-slate-50/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              <div className="lg:col-span-5 text-left">
                 <span className="text-xs font-mono font-bold text-[#00695C] uppercase tracking-wider block mb-2">Get In Touch</span>
                 <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-slate-900 mb-4 leading-tight">
                   Talk to our team.
                 </h2>
                 <p className="text-base sm:text-lg text-slate-600 mb-8">
                   Get a customized walkthrough of DialPulse tailored to your team size, sales process, and compliance requirements.
                 </p>
                 <div className="space-y-6">
                    <div>
                       <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1 font-mono">Enterprise Sales</div>
                       <a href="mailto:sales@dialpulse.com" className="text-xl text-slate-900 font-semibold hover:text-[#00695C] transition-colors">
                         sales@dialpulse.com
                       </a>
                    </div>
                    <div>
                       <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1 font-mono">Customer Support</div>
                       <a href="mailto:support@dialpulse.com" className="text-xl text-slate-900 font-semibold hover:text-[#00695C] transition-colors">
                         support@dialpulse.com
                       </a>
                    </div>
                 </div>
              </div>
              
              <div className="lg:col-span-7 bg-white rounded-2xl md:rounded-3xl border border-slate-200 p-6 sm:p-8 lg:p-10 shadow-2xs text-left">
                 <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); }}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                       <div>
                         <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide">First Name</label>
                         <input 
                           type="text" 
                           placeholder="Sarah" 
                           className="w-full bg-slate-50 border border-slate-200 rounded-xl h-11 px-3.5 text-sm text-slate-900 focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition-all" 
                         />
                       </div>
                       <div>
                         <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide">Last Name</label>
                         <input 
                           type="text" 
                           placeholder="Connor" 
                           className="w-full bg-slate-50 border border-slate-200 rounded-xl h-11 px-3.5 text-sm text-slate-900 focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition-all" 
                         />
                       </div>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide">Work Email</label>
                      <input 
                        type="email" 
                        placeholder="sarah@company.com" 
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl h-11 px-3.5 text-sm text-slate-900 focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition-all" 
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide">Company Size</label>
                      <select className="w-full bg-slate-50 border border-slate-200 rounded-xl h-11 px-3.5 text-sm text-slate-900 focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition-all">
                        <option>1 - 20 employees</option>
                        <option>21 - 100 employees</option>
                        <option>101 - 500 employees</option>
                        <option>500+ enterprise</option>
                      </select>
                    </div>
                    <button 
                      type="submit" 
                      className="w-full h-12 rounded-xl bg-[#00695C] hover:bg-[#004D40] text-white font-bold text-base transition-colors shadow-2xs mt-2"
                    >
                       Request Live Demo
                    </button>
                 </form>
              </div>
           </div>
        </div>
      </section>

    </div>
  );
}
