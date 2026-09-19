cat << 'INNER_EOF' > src/pages/Home.tsx
import React, { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { useSEO } from '@/lib/seo/useSEO';
import { HeroMockup } from '@/components/marketing/mockups/HeroMockup';
import { PipelineMockup } from '@/components/marketing/mockups/PipelineMockup';
import { AnalyticsMockup } from '@/components/marketing/mockups/AnalyticsMockup';
import { ComplianceMockup } from '@/components/marketing/mockups/ComplianceMockup';
import { OmnichannelMockup } from '@/components/marketing/mockups/OmnichannelMockup';
import { AIMockup } from '@/components/marketing/mockups/AIMockup';
import { MessagingTabs } from '@/components/marketing/sections/MessagingTabs';
import { ArrowRight, ShieldCheck, Database, LayoutDashboard, Settings, Phone, MessageSquare, Bot, ArrowUpRight } from 'lucide-react';

export default function Home() {
  useSEO({
    title: 'DialPulse | The Complete CRM for Sales & Communication Teams',
    description: 'DialPulse is a product-led CRM bringing lead management, calling, omnichannel messaging, and compliance into a single, high-performance operating layer.',
  });

  return (
    <div className="flex flex-col bg-[#111413]">
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-[#111413]">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,rgba(0,105,92,0.15),transparent_60%)] pointer-events-none" />
        
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-[#1D201F] border border-[#272B2A] rounded-[40px] p-8 lg:p-12 flex flex-col lg:flex-row items-center relative overflow-visible">
            
            {/* Copy (Left) */}
            <div className="w-full lg:w-[45%] shrink-0 pt-8 lg:pt-10 lg:pr-12 relative z-20">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#111413] border border-[#272B2A] text-xs font-mono font-bold text-[#80D5C4] mb-8 uppercase tracking-widest shadow-lg">
                <span className="flex h-2 w-2 rounded-full bg-[#80D5C4] animate-pulse shadow-[0_0_8px_rgba(128,213,196,0.6)]"></span>
                The Operating Layer for Sales
              </div>
              
              <h1 className="text-[56px] lg:text-[72px] font-display font-extrabold text-white tracking-tight leading-[1.05] mb-8">
                Every customer conversation.<br />
                <span className="text-[#00695C]">One workspace.</span>
              </h1>
              
              <p className="text-xl text-[#BEC9C5] mb-12 leading-relaxed max-w-lg">
                From lead capture to final follow-up. DialPulse brings your calling, messaging, pipelines, and compliance into a single, high-performance CRM.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <a href="https://app.dialpulse.com/signup" className="flex items-center justify-center w-full sm:w-auto px-8 h-14 rounded-full bg-white text-[#00695C] font-bold text-lg hover:bg-[#F8FAF8] hover:scale-105 transition-all shadow-[0_0_24px_rgba(255,255,255,0.1)]">
                  Get Started
                </a>
                <a href="/contact" className="flex items-center justify-center w-full sm:w-auto px-8 h-14 rounded-full bg-[#111413] border border-[#272B2A] text-white font-bold text-lg hover:border-[#80D5C4]/30 hover:bg-[#272B2A]/50 transition-all">
                  Request a Demo
                </a>
              </div>
            </div>
            
            {/* Product Visual (Right) */}
            <div className="w-full lg:w-[55%] h-[500px] lg:h-[700px] mt-16 lg:mt-0 relative z-30 lg:-mr-24 lg:translate-x-12">
               <div className="absolute inset-0 bg-[#00695C]/20 blur-3xl rounded-full opacity-30 transform -translate-x-10" />
               <HeroMockup />
               {/* Floating Product Alert */}
               <div className="absolute -left-12 top-1/4 bg-[#111413]/90 backdrop-blur-xl border border-[#272B2A] rounded-2xl p-4 shadow-2xl flex items-center gap-4 hidden lg:flex animate-float">
                  <div className="w-10 h-10 rounded-full bg-[#06B6D4]/20 flex items-center justify-center border border-[#06B6D4]/30">
                    <CheckCircle2 className="w-5 h-5 text-[#06B6D4]" />
                  </div>
                  <div>
                    <div className="text-xs font-mono font-bold text-[#BEC9C5] uppercase tracking-wider mb-1">Compliance Passed</div>
                    <div className="text-sm font-bold text-white">Safe to call in EST</div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. STATS SECTION */}
      <section className="py-8 bg-[#111413] border-t border-b border-[#272B2A]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center lg:justify-between items-center gap-8 lg:gap-12 opacity-80">
             <div className="flex flex-col items-center lg:items-start gap-1">
               <div className="font-mono text-2xl font-bold text-white">Native</div>
               <div className="text-sm font-bold text-[#BEC9C5] tracking-widest uppercase">Softphone & CRM</div>
             </div>
             <div className="w-px h-12 bg-[#272B2A] hidden lg:block" />
             <div className="flex flex-col items-center lg:items-start gap-1">
               <div className="font-mono text-2xl font-bold text-white">Strict</div>
               <div className="text-sm font-bold text-[#BEC9C5] tracking-widest uppercase">RBAC & Data Isolation</div>
             </div>
             <div className="w-px h-12 bg-[#272B2A] hidden lg:block" />
             <div className="flex flex-col items-center lg:items-start gap-1">
               <div className="font-mono text-2xl font-bold text-white">Built-in</div>
               <div className="text-sm font-bold text-[#BEC9C5] tracking-widest uppercase">DNC Compliance</div>
             </div>
             <div className="w-px h-12 bg-[#272B2A] hidden lg:block" />
             <div className="flex flex-col items-center lg:items-start gap-1">
               <div className="font-mono text-2xl font-bold text-white">Unified</div>
               <div className="text-sm font-bold text-[#BEC9C5] tracking-widest uppercase">Omnichannel Inbox</div>
             </div>
          </div>
        </div>
      </section>

      {/* 3. EDITORIAL STORY SECTION */}
      <section className="py-32 bg-[#111413] relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="order-2 lg:order-1 relative">
              <h2 className="text-[56px] lg:text-[80px] font-display font-extrabold text-white leading-[0.95] tracking-tighter">
                EVERY<br/>CUSTOMER<br/>CONVERSATION<br/><span className="text-[#00695C]">HAS CONTEXT.</span>
              </h2>
            </div>
            <div className="order-1 lg:order-2 lg:pl-12">
              <div className="w-16 h-1 bg-[#00695C] mb-8" />
              <p className="text-2xl text-[#BEC9C5] leading-relaxed mb-8">
                Context is scattered across tabs, tools, and spreadsheets. When your team makes a call, they need the entire history—every message, every interaction, and every compliance check—available instantly.
              </p>
              <p className="text-xl text-[#80D5C4] font-medium leading-relaxed">
                DialPulse merges communication and data into a single, highly-responsive pane of glass. No more missing details. No more dropped balls.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PRODUCT MOSAIC */}
      <section className="py-24 bg-[#1D201F] border-y border-[#272B2A]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative h-[800px] w-full flex items-center justify-center">
             {/* Center/Back: Analytics */}
             <div className="absolute top-0 right-0 w-[60%] h-[500px] z-10 opacity-60 hover:opacity-100 hover:z-40 transition-all duration-500 rounded-[32px] overflow-hidden shadow-2xl border border-[#272B2A] bg-[#111413]">
               <AnalyticsMockup />
             </div>
             
             {/* Left/Middle: Pipeline */}
             <div className="absolute bottom-10 left-0 w-[65%] h-[550px] z-20 hover:z-40 transition-all duration-500 rounded-[32px] overflow-hidden shadow-[0_32px_64px_rgba(0,0,0,0.5)] border border-[#272B2A] bg-[#111413]">
               <PipelineMockup />
             </div>
             
             {/* Front/Right: Omnichannel/Conversation */}
             <div className="absolute top-1/4 right-[10%] w-[45%] h-[600px] z-30 hover:z-40 transition-all duration-500 rounded-[32px] overflow-hidden shadow-[0_48px_80px_rgba(0,0,0,0.6)] border border-[#00695C]/40 bg-[#111413]">
               <OmnichannelMockup />
             </div>
          </div>
        </div>
      </section>

      {/* 5. FEATURE INDEX */}
      <section className="py-32 bg-[#111413] relative">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-20 max-w-3xl">
             <h2 className="text-[48px] lg:text-[64px] font-display font-bold text-white leading-tight tracking-tight mb-6">
                The operating layer for every customer workflow.
             </h2>
             <p className="text-xl text-[#BEC9C5]">
                Switch between high-volume prospecting, rigorous compliance checking, and deep analytics without changing tabs.
             </p>
          </div>
          
          <MessagingTabs />
        </div>
      </section>

      {/* 6. LARGE TYPOGRAPHIC STATEMENT */}
      <section className="py-40 bg-[#00695C] relative overflow-hidden flex items-center justify-center text-center">
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1),transparent_70%)] pointer-events-none" />
         <div className="relative z-10 px-4">
            <h2 className="text-[64px] md:text-[96px] lg:text-[140px] font-display font-extrabold text-white leading-none tracking-tighter mix-blend-overlay opacity-90 flex flex-col items-center">
               <span>CAPTURE</span>
               <span className="text-[#80D5C4] my-2 text-[40px] md:text-[64px]">✦</span>
               <span>CONNECT</span>
               <span className="text-[#80D5C4] my-2 text-[40px] md:text-[64px]">✦</span>
               <span>FOLLOW UP</span>
               <span className="text-[#80D5C4] my-2 text-[40px] md:text-[64px]">✦</span>
               <span>GROW</span>
            </h2>
         </div>
      </section>

      {/* 7. ROLE / PEOPLE SECTION */}
      <section className="py-32 bg-[#1D201F] border-b border-[#272B2A]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-[40px] md:text-[56px] font-display font-bold text-white mb-6 leading-tight">Built for the whole team.</h2>
            <p className="text-xl text-[#BEC9C5]">DialPulse provides distinct, powerful views tailored to exactly what each role needs to succeed.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
             {[
               { role: 'OWNER', focus: 'Visibility & Control', desc: 'Monitor top-level metrics, enforce compliance protocols, and securely manage multi-tenant workspaces.', color: 'text-[#06B6D4]', bg: 'bg-[#06B6D4]/10' },
               { role: 'SALES LEAD', focus: 'Team Performance', desc: 'Track conversion rates, listen to call recordings for QA, and optimize pipeline stages in real-time.', color: 'text-[#3B82F6]', bg: 'bg-[#3B82F6]/10' },
               { role: 'TELECALLER', focus: 'High-Volume Execution', desc: 'Click to dial, log rapid dispositions, and send automated follow-ups without leaving the lead profile.', color: 'text-[#00695C]', bg: 'bg-[#00695C]/20' },
               { role: 'MANAGER', focus: 'Reporting & Oversight', desc: 'Generate custom reports, monitor agent activity statuses, and route leads intelligently.', color: 'text-[#8B5CF6]', bg: 'bg-[#8B5CF6]/10' }
             ].map((item, i) => (
               <div key={i} className="bg-[#111413] border border-[#272B2A] rounded-[32px] p-10 hover:border-[#80D5C4]/30 transition-colors group relative overflow-hidden">
                  <div className={`absolute top-0 right-0 w-64 h-64 ${item.bg} blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 -translate-y-1/2 translate-x-1/2`} />
                  <div className="relative z-10">
                     <div className="font-mono text-sm font-bold text-[#80D5C4] tracking-widest uppercase mb-4">{item.role}</div>
                     <h3 className={`text-3xl font-display font-bold ${item.color} mb-4`}>{item.focus}</h3>
                     <p className="text-lg text-[#BEC9C5] leading-relaxed">{item.desc}</p>
                  </div>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* 8. PRODUCT PROOF */}
      <section className="py-32 bg-[#111413] relative">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
           <div className="bg-[#1D201F] rounded-[40px] border border-[#272B2A] p-8 lg:p-16 flex flex-col lg:flex-row items-center gap-16">
              <div className="w-full lg:w-1/2">
                 <h2 className="text-[40px] lg:text-[56px] font-display font-bold text-white mb-8 leading-tight">Native Compliance Engine</h2>
                 <p className="text-xl text-[#BEC9C5] mb-8 leading-relaxed">
                   Communication regulations are strict. DialPulse includes a native Policy Engine that checks every outgoing call or message against DNC lists, timezone restrictions, and frequency caps before execution.
                 </p>
                 <ul className="space-y-6">
                    <li className="flex items-center gap-4 text-lg text-white font-medium">
                      <div className="w-8 h-8 rounded-full bg-[#10B981]/20 flex items-center justify-center border border-[#10B981]/30">
                        <ShieldCheck className="w-4 h-4 text-[#10B981]" />
                      </div>
                      Multi-tenant data isolation
                    </li>
                    <li className="flex items-center gap-4 text-lg text-white font-medium">
                      <div className="w-8 h-8 rounded-full bg-[#10B981]/20 flex items-center justify-center border border-[#10B981]/30">
                        <Phone className="w-4 h-4 text-[#10B981]" />
                      </div>
                      Timezone-aware contact rules
                    </li>
                    <li className="flex items-center gap-4 text-lg text-white font-medium">
                      <div className="w-8 h-8 rounded-full bg-[#10B981]/20 flex items-center justify-center border border-[#10B981]/30">
                        <Database className="w-4 h-4 text-[#10B981]" />
                      </div>
                      Centralized DNC registry
                    </li>
                 </ul>
              </div>
              <div className="w-full lg:w-1/2 h-[500px] relative">
                 <ComplianceMockup />
              </div>
           </div>
        </div>
      </section>

      {/* 9. CONTACT SECTION */}
      <section className="py-32 bg-[#1D201F] border-t border-[#272B2A]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div>
                 <h2 className="text-[48px] lg:text-[64px] font-display font-bold text-white mb-6 leading-tight">Talk to our team.</h2>
                 <p className="text-xl text-[#BEC9C5] max-w-md mb-12">
                   Get a customized demonstration of DialPulse tailored to your sales process and compliance requirements.
                 </p>
                 <div className="space-y-8">
                    <div>
                       <div className="text-sm font-bold text-[#80D5C4] uppercase tracking-widest mb-2 font-mono">Enterprise Sales</div>
                       <div className="text-2xl text-white font-medium">sales@dialpulse.com</div>
                    </div>
                    <div>
                       <div className="text-sm font-bold text-[#80D5C4] uppercase tracking-widest mb-2 font-mono">Support</div>
                       <div className="text-2xl text-white font-medium">support@dialpulse.com</div>
                    </div>
                 </div>
              </div>
              <div className="bg-[#111413] rounded-[32px] border border-[#272B2A] p-8 lg:p-12">
                 <form className="space-y-6">
                    <div className="grid grid-cols-2 gap-6">
                       <div>
                         <label className="block text-sm font-bold text-[#BEC9C5] mb-2 uppercase tracking-wide">First Name</label>
                         <input type="text" className="w-full bg-[#1D201F] border border-[#272B2A] rounded-xl h-14 px-4 text-white focus:outline-none focus:border-[#80D5C4] transition-colors" />
                       </div>
                       <div>
                         <label className="block text-sm font-bold text-[#BEC9C5] mb-2 uppercase tracking-wide">Last Name</label>
                         <input type="text" className="w-full bg-[#1D201F] border border-[#272B2A] rounded-xl h-14 px-4 text-white focus:outline-none focus:border-[#80D5C4] transition-colors" />
                       </div>
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-[#BEC9C5] mb-2 uppercase tracking-wide">Work Email</label>
                      <input type="email" className="w-full bg-[#1D201F] border border-[#272B2A] rounded-xl h-14 px-4 text-white focus:outline-none focus:border-[#80D5C4] transition-colors" />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-[#BEC9C5] mb-2 uppercase tracking-wide">Company Size</label>
                      <select className="w-full bg-[#1D201F] border border-[#272B2A] rounded-xl h-14 px-4 text-white focus:outline-none focus:border-[#80D5C4] transition-colors appearance-none">
                        <option>1-50 employees</option>
                        <option>51-200 employees</option>
                        <option>201-1000 employees</option>
                        <option>1000+ employees</option>
                      </select>
                    </div>
                    <button type="button" className="w-full h-14 rounded-xl bg-[#00695C] hover:bg-[#80D5C4] hover:text-[#111413] text-white font-bold text-lg transition-colors mt-4">
                       Request Demo
                    </button>
                 </form>
              </div>
           </div>
        </div>
      </section>

    </div>
  );
}
// Temporary dummy component for CheckCircle2
function CheckCircle2(props: any) {
  return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>;}
INNER_EOF
