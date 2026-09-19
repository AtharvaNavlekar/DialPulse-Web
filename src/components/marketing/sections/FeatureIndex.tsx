import React, { useState } from 'react';
import { PipelineMockup } from '@/components/marketing/mockups/PipelineMockup';
import { OmnichannelMockup } from '@/components/marketing/mockups/OmnichannelMockup';
import { AnalyticsMockup } from '@/components/marketing/mockups/AnalyticsMockup';
import { ComplianceMockup } from '@/components/marketing/mockups/ComplianceMockup';
import { AIMockup } from '@/components/marketing/mockups/AIMockup';

export function FeatureIndex() {
  const [activeTab, setActiveTab] = useState(0);
  
  const features = [
    { num: '01', title: 'Leads & Pipeline', desc: 'Centralized multi-stage pipelines with automatic deal value tracking.', color: 'text-[#00695C]' },
    { num: '02', title: 'Calling & History', desc: 'Native WebRTC softphone with click-to-call and verified recordings.', color: 'text-blue-700' },
    { num: '03', title: 'Omnichannel Inbox', desc: 'Unified WhatsApp, SMS, and email threads in one customer timeline.', color: 'text-teal-700' },
    { num: '04', title: 'Analytics & Reports', desc: 'Real-time conversion velocity, connect rates, and agent metrics.', color: 'text-indigo-700' },
    { num: '05', title: 'Compliance Engine', desc: 'Automated DNC registries, quiet hours, and frequency caps.', color: 'text-emerald-700' },
  ];

  return (
    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
       <div className="w-full lg:w-4/12 flex flex-col gap-2.5">
          {features.map((feat, i) => {
            const isActive = activeTab === i;
            return (
              <button 
                key={i} 
                onClick={() => setActiveTab(i)}
                className={`text-left p-4 md:p-5 rounded-2xl transition-all duration-200 border cursor-pointer ${
                  isActive 
                    ? 'bg-teal-50/70 border-teal-200 shadow-2xs' 
                    : 'bg-white/60 border-slate-200/60 hover:bg-slate-50 hover:border-slate-300'
                }`}
              >
                 <div className="flex items-center gap-3 mb-1">
                    <span className={`font-mono text-xs font-bold ${isActive ? 'text-[#00695C]' : 'text-slate-400'}`}>
                      {feat.num}
                    </span>
                    <h3 className={`text-base md:text-lg font-display font-bold ${isActive ? 'text-slate-900' : 'text-slate-700'}`}>
                      {feat.title}
                    </h3>
                 </div>
                 {isActive && (
                   <p className="text-xs md:text-sm text-slate-600 ml-7 animate-fade-in leading-relaxed">
                     {feat.desc}
                   </p>
                 )}
              </button>
            );
          })}
       </div>
       <div className="w-full lg:w-8/12 min-h-[480px] h-[520px] md:h-[580px] relative">
          <div className={`absolute inset-0 transition-opacity duration-300 ${activeTab === 0 ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}>
            <PipelineMockup />
          </div>
          <div className={`absolute inset-0 transition-opacity duration-300 ${activeTab === 1 || activeTab === 2 ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}>
            <OmnichannelMockup />
          </div>
          <div className={`absolute inset-0 transition-opacity duration-300 ${activeTab === 3 ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}>
            <AnalyticsMockup />
          </div>
          <div className={`absolute inset-0 transition-opacity duration-300 ${activeTab === 4 ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}>
            <ComplianceMockup />
          </div>
       </div>
    </div>
  );
}
