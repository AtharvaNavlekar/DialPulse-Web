import React, { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { ArrowRight, MessageSquare, Smartphone, Zap, FileText } from 'lucide-react';
import { OmnichannelMockup } from '@/components/marketing/mockups/OmnichannelMockup';

export function MessagingTabs() {
  const [activeTab, setActiveTab] = useState('inbox');

  const tabs = [
    { id: 'inbox', label: 'Unified Inbox', icon: MessageSquare },
    { id: 'whatsapp', label: 'WhatsApp', icon: Smartphone },
    { id: 'broadcasts', label: 'Bulk Broadcasts', icon: Zap },
    { id: 'templates', label: 'Templates', icon: FileText },
  ];

  return (
    <section className="py-24 md:py-32 bg-[#0B1E36] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="text-sm font-bold text-cyan-400 tracking-widest uppercase mb-4">Unified Communications</div>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6 leading-tight">
            Every message in one place.
          </h2>
          <p className="text-lg text-slate-300 leading-relaxed">
            Don't force your agents to switch tabs. DialPulse brings WhatsApp, SMS, and Email into a single threaded interface linked directly to the lead profile.
          </p>
        </div>

        <div className="flex justify-center mb-10 overflow-x-auto pb-4">
          <div className="inline-flex bg-slate-800/50 p-1.5 rounded-2xl border border-slate-700/50 whitespace-nowrap">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-2.5 rounded-xl font-bold text-sm transition-all ${
                  activeTab === tab.id
                    ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'
                    : 'text-slate-400 hover:text-slate-200 border border-transparent'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="max-w-6xl mx-auto h-[600px] relative transition-opacity duration-300">
           {/* In a real app we'd swap mockups based on activeTab. For now we use the main mockup for all or slightly tweak opacity/content */}
           <div className={`transition-opacity duration-300 ${activeTab === 'inbox' ? 'opacity-100' : 'opacity-80'}`}>
              <OmnichannelMockup />
           </div>
        </div>
      </div>
    </section>
  );
}
