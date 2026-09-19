import React, { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { useSEO } from '@/lib/seo/useSEO';
import { MessageSquare, Calendar, ArrowRight, ShieldCheck, Mail } from 'lucide-react';

export default function Contact() {
  useSEO({
    title: 'Contact Sales | DialPulse CRM',
    description: 'Get in touch with the DialPulse team to discuss your enterprise CRM needs, view a product demo, or ask technical questions.',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    // Simulate form submission
    setTimeout(() => {
      setStatus('success');
    }, 1500);
  };

  return (
    <div className="flex flex-col min-h-[calc(100vh-80px)] bg-background">
      <section className="pt-12 pb-20 sm:pt-16 sm:pb-24 md:pt-20 md:pb-28 flex-grow flex items-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(0,105,92,0.04),transparent_60%)] pointer-events-none -translate-x-1/2 -translate-y-1/4" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-start">
            
            <div className="lg:col-span-5 animate-slide-up sticky top-32">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm font-bold text-primary mb-10 tracking-wide uppercase">
                <MessageSquare className="w-4 h-4" />
                Contact Solutions Architecture
              </div>
              <h1 className="text-5xl md:text-[72px] font-display font-bold text-on-surface tracking-tight mb-8 leading-[1.05]">
                Let's talk about your <br className="hidden md:block"/>
                <span className="text-primary">workflow.</span>
              </h1>
              <p className="text-xl text-on-surface-variant leading-relaxed mb-12 max-w-lg">
                Whether you have questions about our zero-trust security architecture, need a customized demo, or want to discuss enterprise tenant provisioning, our team is ready.
              </p>
              
              <div className="space-y-6 hidden lg:block max-w-md">
                <div className="bg-surface-container-lowest rounded-[32px] border border-outline-variant p-8 shadow-sm flex items-start gap-5 hover:border-primary/30 transition-colors">
                  <div className="w-14 h-14 rounded-[16px] bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                    <Calendar className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-on-surface mb-2">Technical Demos</h3>
                    <p className="text-on-surface-variant leading-relaxed">See DialPulse in action with a walkthrough tailored to your organization's compliance boundaries.</p>
                  </div>
                </div>

                <div className="bg-surface-container-lowest rounded-[32px] border border-outline-variant p-8 shadow-sm flex items-start gap-5 hover:border-primary/30 transition-colors">
                  <div className="w-14 h-14 rounded-[16px] bg-surface-container-high border border-outline-variant flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-6 h-6 text-on-surface" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-on-surface mb-2">Security Audits</h3>
                    <p className="text-on-surface-variant leading-relaxed">Request our SOC 2 Type II report and comprehensive tenant isolation whitepaper.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 bg-surface p-10 md:p-16 rounded-[40px] border border-outline-variant shadow-[0_32px_64px_-16px_rgba(0,0,0,0.05)] animate-fade-in delay-150">
              <div className="flex items-center gap-4 mb-10 pb-8 border-b border-outline-variant/50">
                 <div className="w-12 h-12 bg-surface-container-high rounded-[16px] flex items-center justify-center">
                    <Mail className="w-6 h-6 text-on-surface" />
                 </div>
                 <div>
                    <h3 className="text-2xl font-bold text-on-surface">Direct Inquiry</h3>
                    <p className="text-sm text-on-surface-variant font-mono">SECURE SUBMISSION</p>
                 </div>
              </div>

              {status === 'success' ? (
                <div className="text-center py-20">
                  <div className="w-24 h-24 bg-success/20 text-success rounded-[24px] flex items-center justify-center mx-auto mb-8 border border-success/30">
                    <ShieldCheck className="w-12 h-12" />
                  </div>
                  <h3 className="text-3xl font-display font-bold text-on-surface mb-4">Request Received</h3>
                  <p className="text-lg text-on-surface-variant mb-10 max-w-md mx-auto leading-relaxed">Thank you for reaching out. A solutions architect from our enterprise team will be in touch with you shortly.</p>
                  <Button onClick={() => setStatus('idle')} variant="tonal" size="lg" className="h-14 px-8">Send another message</Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label htmlFor="firstName" className="block text-sm font-bold text-on-surface uppercase tracking-wide">First Name</label>
                      <input 
                        type="text" 
                        id="firstName" 
                        required
                        className="w-full px-5 py-4 rounded-[20px] border border-outline-variant bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      />
                    </div>
                    <div className="space-y-3">
                      <label htmlFor="lastName" className="block text-sm font-bold text-on-surface uppercase tracking-wide">Last Name</label>
                      <input 
                        type="text" 
                        id="lastName" 
                        required
                        className="w-full px-5 py-4 rounded-[20px] border border-outline-variant bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <label htmlFor="email" className="block text-sm font-bold text-on-surface uppercase tracking-wide">Work Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      required
                      className="w-full px-5 py-4 rounded-[20px] border border-outline-variant bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    />
                  </div>

                  <div className="space-y-3">
                    <label htmlFor="company" className="block text-sm font-bold text-on-surface uppercase tracking-wide">Company Name</label>
                    <input 
                      type="text" 
                      id="company" 
                      required
                      className="w-full px-5 py-4 rounded-[20px] border border-outline-variant bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    />
                  </div>
                  
                  <div className="space-y-3">
                    <label htmlFor="message" className="block text-sm font-bold text-on-surface uppercase tracking-wide">How can we help?</label>
                    <textarea 
                      id="message" 
                      rows={5}
                      required
                      className="w-full px-5 py-4 rounded-[20px] border border-outline-variant bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                    ></textarea>
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full mt-4 h-14 text-lg" 
                    size="lg"
                    disabled={status === 'loading'}
                  >
                    {status === 'loading' ? 'Sending...' : 'Send Message'}
                    {!status && <ArrowRight className="w-5 h-5 ml-2" />}
                  </Button>
                  
                  <p className="text-sm text-on-surface-variant text-center mt-8">
                    By submitting this form, you agree to our <a href="/privacy" className="font-bold underline hover:text-primary transition-colors">Privacy Policy</a>.
                  </p>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
