import { Link } from 'react-router-dom';
import * as Icons from 'lucide-react';
import { FooterCTA } from './FooterCTA';
import { FooterColumn } from './FooterColumn';
import { FooterLinkGroup } from './FooterLinkGroup';
import { Logo } from '@/components/common/Logo';

export function Footer() {
  return (
    <footer className="relative bg-slate-50 border-t border-slate-200">
      {/* CTA Overlay Panel */}
      <FooterCTA />
      
      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-16 relative z-10">
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
            
            {/* Brand Col */}
            <div className="lg:col-span-4 flex flex-col items-start">
               <div className="mb-5">
                 <Logo size="md" variant="light" />
               </div>
               <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-8 max-w-xs">
                  The CRM built for teams that need control over every interaction. Manage leads, enforce compliance, and orchestrate communication natively.
               </p>
               
               <div className="space-y-3">
                  <a href="mailto:hello@dialpulse.com" className="flex items-center gap-3 text-slate-600 hover:text-[#00695C] transition-colors text-sm font-medium group">
                     <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-500 group-hover:border-teal-300 group-hover:text-[#00695C] shadow-xs transition-colors">
                       <Icons.Mail className="w-4 h-4" />
                     </div>
                     hello@dialpulse.com
                  </a>
                  <Link to="/contact" className="flex items-center gap-3 text-slate-600 hover:text-[#00695C] transition-colors text-sm font-medium group">
                     <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-500 group-hover:border-teal-300 group-hover:text-[#00695C] shadow-xs transition-colors">
                       <Icons.MapPin className="w-4 h-4" />
                     </div>
                     Contact Sales
                  </Link>
               </div>
            </div>

            {/* Links Columns */}
            <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8">
               
               <FooterColumn title="Platform">
                  <FooterLinkGroup links={[
                    { label: 'Features Hub', href: '/features' },
                    { label: 'Product Explorer', href: '/product' },
                    { label: 'Solutions & Workflows', href: '/solutions' },
                    { label: 'Lead Management', href: '/features/leads' },
                    { label: 'Calls & Telephony', href: '/features/calls' },
                    { label: 'Messaging Channels', href: '/features/messaging' },
                    { label: 'Team Hierarchy', href: '/features/teams' }
                  ]} />
               </FooterColumn>
               
               <FooterColumn title="Capabilities">
                  <FooterLinkGroup links={[
                    { label: 'Reporting & Analytics', href: '/features/reports' },
                    { label: 'Strict Compliance', href: '/features/compliance' },
                    { label: 'AI Intelligence', href: '/features/ai' }
                  ]} />
               </FooterColumn>
               
               <FooterColumn title="Company">
                  <FooterLinkGroup links={[
                    { label: 'About', href: '/about' },
                    { label: 'Security', href: '/security' },
                    { label: 'Resources', href: '/resources' },
                    { label: 'Pricing', href: '/pricing' },
                    { label: 'FAQ', href: '/faq' },
                    { label: 'Privacy Policy', href: '/privacy' },
                    { label: 'Terms of Service', href: '/terms' },
                    { label: 'Contact Us', href: '/contact' }
                  ]} />
               </FooterColumn>
               
               <FooterColumn title="Connect">
                  <a href="https://app.dialpulse.com/login" className="text-slate-600 hover:text-[#00695C] hover:translate-x-1 transition-all text-sm w-fit">
                    Log in
                  </a>
                  <a href="https://app.dialpulse.com/signup" className="text-slate-600 hover:text-[#00695C] hover:translate-x-1 transition-all text-sm flex items-center gap-1 group w-fit mt-3">
                     Get Started
                     <Icons.ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </a>
                  <div className="mt-6 flex items-center gap-3">
                     <a href="https://twitter.com" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-lg bg-white border border-slate-200 hover:border-teal-300 hover:text-[#00695C] flex items-center justify-center text-slate-500 shadow-xs transition-all" aria-label="Twitter">
                        <Icons.Twitter className="w-4 h-4" />
                     </a>
                     <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-lg bg-white border border-slate-200 hover:border-teal-300 hover:text-[#00695C] flex items-center justify-center text-slate-500 shadow-xs transition-all" aria-label="LinkedIn">
                        <Icons.Linkedin className="w-4 h-4" />
                     </a>
                  </div>
               </FooterColumn>
            </div>
            
         </div>
      </div>
      
      {/* Legal Bar */}
      <div className="border-t border-slate-200 bg-white/70 relative z-10">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-slate-500 text-sm">
               © {new Date().getFullYear()} DialPulse CRM. All rights reserved.
            </div>
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm">
               <Link to="/privacy" className="text-slate-500 hover:text-[#00695C] transition-colors">Privacy Policy</Link>
               <Link to="/terms" className="text-slate-500 hover:text-[#00695C] transition-colors">Terms of Service</Link>
               <div className="flex items-center gap-2 px-3 py-1 bg-emerald-50 rounded-full border border-emerald-200 text-emerald-800">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                  <span className="text-xs font-mono font-semibold tracking-wide">SYSTEMS OPERATIONAL</span>
               </div>
            </div>
         </div>
      </div>
    </footer>
  );
}
