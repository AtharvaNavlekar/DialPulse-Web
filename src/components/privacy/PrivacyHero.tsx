import React from 'react';
import { Shield, Clock, FileText, AlertCircle } from 'lucide-react';

export function PrivacyHero() {
  return (
    <section className="relative pt-12 pb-16 md:pt-20 md:pb-20 bg-surface border-b border-outline-variant/60 overflow-hidden">
      {/* Subtle architectural grid pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(0,105,92,0.05),transparent_60%)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl">
          {/* Eyebrow and Status */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-wider uppercase font-mono">
              <Shield className="w-3.5 h-3.5 text-primary" />
              PRIVACY AT DIALPULSE
            </span>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-800 text-xs font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
              <span>DRAFT FOR LEGAL REVIEW</span>
            </div>

            <span className="text-xs text-on-surface-variant font-mono flex items-center gap-1">
              <Clock className="w-3 h-3 text-on-surface-variant" />
              Effective date: To be confirmed
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold tracking-tight text-on-surface leading-[1.1] mb-6">
            Your data. <br />
            <span className="text-primary">Your boundaries.</span> <br />
            Our responsibility.
          </h1>

          {/* Supporting Copy */}
          <p className="text-lg sm:text-xl text-on-surface-variant leading-relaxed max-w-3xl mb-8">
            DialPulse is built to manage customer relationships, communication workflows, and sales operations. 
            This page explains, in plain language, what information the platform handles, why it is processed, 
            how access is controlled, and which details still require confirmation before this policy is finalized.
          </p>

          {/* Transparency Disclaimer Notice */}
          <div className="p-4 sm:p-5 rounded-2xl bg-surface-container border border-outline-variant/80 flex items-start gap-3.5 max-w-3xl">
            <AlertCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
              <strong className="text-on-surface font-semibold">Technical Transparency Disclosure:</strong> This document reflects verified system architecture from the DialPulse CRM code and data audit. Unconfirmed statutory items, retention windows, and subprocessors are explicitly marked as <span className="font-mono text-amber-800 bg-amber-100/60 px-1 py-0.5 rounded">To be confirmed</span> to prevent speculative legal claims.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
