/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowLeft, Clock, Sparkles, BookOpen, Layers, Mail } from 'lucide-react';
import { Button } from '@/components/ui/Button';

const sectionInfo: Record<string, { title: string; subtitle: string; description: string }> = {
  '/blog': {
    title: 'DialPulse Editorial & Perspectives',
    subtitle: 'Operational Engineering Blog',
    description:
      'We are preparing in-depth technical and operational breakdowns on customer communication, zero-bypass policy engines, and multi-tenant telephony architecture.',
  },
  '/guides': {
    title: 'Telecalling & CRM Operational Guides',
    subtitle: 'Playbooks & Standard Operating Procedures',
    description:
      'Structured operational playbooks covering follow-up enforcement, team hierarchy governance, and compliance best practices for sales leaders.',
  },
  '/case-studies': {
    title: 'Customer Case Studies & Benchmarks',
    subtitle: 'Real-World Scale Deployments',
    description:
      'Verified performance studies showing how distributed sales and telecalling teams eliminate lead leakage and enforce compliance at scale.',
  },
  '/compare': {
    title: 'Platform Architecture Comparison',
    subtitle: 'DialPulse vs. Fragmented CRM & Telephony Tools',
    description:
      'Detailed technical matrix comparing unified communication CRM architecture against multi-vendor stitchups and legacy telecalling solutions.',
  },
  '/careers': {
    title: 'Careers at DialPulse',
    subtitle: 'Building the Future of Customer Operations',
    description:
      'Our team is heads-down building high-reliability communication infrastructure. Formal openings will be posted here as our engineering and product teams expand.',
  },
};

export default function ComingSoonPage() {
  const location = useLocation();
  const currentPath = location.pathname;
  const info = sectionInfo[currentPath] || {
    title: 'Coming Soon to DialPulse',
    subtitle: 'Operational Roadmap',
    description:
      'This resource is actively in development as part of the DialPulse platform release schedule.',
  };

  return (
    <div className="min-h-[75vh] bg-[#F8FAFC] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-2xl w-full text-center space-y-8 bg-white p-8 sm:p-12 rounded-3xl border border-slate-200/80 shadow-[0_20px_50px_-12px_rgba(15,23,42,0.06)]">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 border border-teal-200 text-[#00695C] text-xs font-mono font-semibold uppercase tracking-wider">
          <Clock className="w-3.5 h-3.5" />
          <span>IN ACTIVE DEVELOPMENT</span>
        </div>

        {/* Headings */}
        <div className="space-y-3">
          <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
            {info.subtitle}
          </div>
          <h1 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-950 tracking-tight">
            {info.title}
          </h1>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-lg mx-auto">
            {info.description}
          </p>
        </div>

        {/* Action Options */}
        <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/resources"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-sm font-semibold transition-colors"
          >
            <BookOpen className="w-4 h-4 text-slate-500" />
            <span>Explore Available Resources</span>
          </Link>

          <Link
            to="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#00695C] hover:bg-[#004D40] text-white text-sm font-semibold transition-colors shadow-xs"
          >
            <Mail className="w-4 h-4 text-teal-200" />
            <span>Talk to DialPulse</span>
          </Link>
        </div>

        <div className="text-xs text-slate-400 font-mono">
          Looking for platform capabilities? Check out our{' '}
          <Link to="/features" className="text-[#00695C] underline hover:text-[#004D40]">
            Features Hub
          </Link>{' '}
          or{' '}
          <Link to="/product" className="text-[#00695C] underline hover:text-[#004D40]">
            Product Overview
          </Link>
          .
        </div>
      </div>
    </div>
  );
}
