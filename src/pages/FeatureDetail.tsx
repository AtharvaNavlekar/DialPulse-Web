import { useParams, Link, Navigate } from 'react-router-dom';
import { Button } from '@/components/ui/Button';
import { coreFeatures } from '@/content/features';
import * as Icons from 'lucide-react';
import { useSEO } from '@/lib/seo/useSEO';

export default function FeatureDetail() {
  const { id } = useParams();
  const feature = coreFeatures.find(f => f.id === id);

  if (!feature) {
    return <Navigate to="/404" replace />;
  }

  useSEO({
    title: `${feature.title} | DialPulse CRM`,
    description: feature.description,
  });

  const Icon = (Icons as any)[feature.icon] || Icons.Circle;

  return (
    <div className="flex flex-col bg-background min-h-screen pb-24">
      {/* Breadcrumb - M3 styling */}
      <div className="bg-surface border-b border-outline-variant py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center text-sm font-medium text-on-surface-variant">
          <Link to="/" className="hover:text-primary transition-colors flex items-center gap-1">
            <Icons.Home className="w-4 h-4" /> Home
          </Link>
          <Icons.ChevronRight className="w-4 h-4 mx-2 text-outline-variant" />
          <Link to="/" className="hover:text-primary transition-colors">Platform</Link>
          <Icons.ChevronRight className="w-4 h-4 mx-2 text-outline-variant" />
          <span className="text-on-surface">{feature.title}</span>
        </div>
      </div>

      {/* Hero / Split layout */}
      <section className="pt-12 pb-16 md:pt-16 md:pb-24 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(0,105,92,0.04),transparent_60%)] pointer-events-none translate-x-1/2 -translate-y-1/2" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-start">
            
            <div className="lg:col-span-5 animate-slide-up sticky top-32">
              <div className="w-16 h-16 bg-primary-container rounded-[20px] flex items-center justify-center mb-10 shadow-sm border border-primary/10">
                <Icon className="w-8 h-8 text-primary" strokeWidth={1.5} />
              </div>
              <h1 className="text-5xl md:text-[64px] font-display font-bold text-on-surface tracking-tight leading-[1.05] mb-8">
                {feature.title}
              </h1>
              <p className="text-xl text-on-surface-variant mb-12 leading-relaxed max-w-md">
                {feature.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" href="https://app.dialpulse.com/signup" external className="text-base h-14 px-8">
                  Start your trial
                </Button>
                <Button variant="outlined" size="lg" href="/contact" className="text-base h-14 px-8 bg-surface">
                  Talk to Sales
                </Button>
              </div>
            </div>
            
            {/* Visual Narrative Side */}
            <div className="lg:col-span-7 space-y-12 animate-fade-in delay-150">
              
              {/* Primary Product Visualization Container */}
              <div className="rounded-[40px] bg-surface border border-outline-variant shadow-[0_32px_64px_-16px_rgba(0,0,0,0.05)] overflow-hidden flex flex-col min-h-[500px]">
                <div className="border-b border-outline-variant bg-surface-container-lowest px-8 py-5 flex items-center justify-between">
                   <div className="font-bold text-on-surface flex items-center gap-3 text-lg">
                     <Icon className="w-6 h-6 text-primary" /> {feature.title} Module
                   </div>
                   <div className="flex gap-2">
                     <div className="w-10 h-10 rounded-xl bg-surface-container-high border border-outline-variant flex items-center justify-center">
                        <Icons.Search className="w-5 h-5 text-outline" />
                     </div>
                     <div className="w-10 h-10 rounded-xl bg-surface-container-high border border-outline-variant flex items-center justify-center">
                        <Icons.MoreHorizontal className="w-5 h-5 text-outline" />
                     </div>
                   </div>
                </div>
                
                <div className="p-10 flex-1 bg-surface-container-low flex flex-col items-center justify-center relative overflow-hidden">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary/5 blur-[100px] rounded-full pointer-events-none" />
                  
                  {/* High Fidelity Abstract Mockup */}
                  <div className="relative z-10 w-full max-w-lg">
                    <div className="bg-surface border border-outline-variant rounded-[32px] p-8 shadow-lg mb-6 transform -rotate-1 hover:rotate-0 transition-transform duration-500">
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-4">
                           <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold">DP</div>
                           <div>
                              <div className="font-bold text-on-surface">System Process</div>
                              <div className="text-xs text-on-surface-variant font-mono">ID: #992-B</div>
                           </div>
                        </div>
                        <div className="px-3 py-1.5 bg-success-container text-on-success-container text-xs font-bold rounded-lg border border-success/20 uppercase tracking-wide">
                           Active
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div className="h-3 w-full bg-surface-container-highest rounded-full" />
                        <div className="h-3 w-5/6 bg-surface-container-highest rounded-full" />
                        <div className="h-3 w-4/6 bg-surface-container-highest rounded-full" />
                      </div>
                    </div>
                    
                    <div className="flex gap-6 transform translate-x-8">
                      <div className="flex-1 bg-surface border border-outline-variant rounded-[32px] p-8 shadow-lg flex flex-col gap-3">
                        <div className="w-10 h-10 rounded-xl bg-secondary-container text-on-secondary-container flex items-center justify-center mb-2">
                           <Icons.Activity className="w-5 h-5" />
                        </div>
                        <div className="font-bold text-on-surface">Telemetry</div>
                        <div className="text-2xl font-mono text-on-surface">99.9%</div>
                      </div>
                      <div className="flex-1 bg-surface border border-outline-variant rounded-[32px] p-8 shadow-lg flex flex-col gap-3">
                         <div className="w-10 h-10 rounded-xl bg-tertiary-container text-on-tertiary-container flex items-center justify-center mb-2">
                           <Icons.Shield className="w-5 h-5" />
                        </div>
                        <div className="font-bold text-on-surface">Isolation</div>
                        <div className="text-2xl font-mono text-on-surface">Tenant</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Supporting capability breakdown */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="bg-surface-container-lowest p-10 rounded-[32px] border border-outline-variant shadow-sm hover:border-primary/30 transition-colors">
                  <div className="w-14 h-14 rounded-[16px] bg-primary/10 text-primary flex items-center justify-center font-bold mb-8 border border-primary/10">
                    <Icons.CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-on-surface mb-4">Native Integration</h3>
                  <p className="text-lg text-on-surface-variant leading-relaxed">
                    Designed to work seamlessly with the rest of the DialPulse platform, eliminating data silos and brittle API bridges.
                  </p>
                </div>
                
                <div className="bg-surface-container-lowest p-10 rounded-[32px] border border-outline-variant shadow-sm hover:border-primary/30 transition-colors">
                  <div className="w-14 h-14 rounded-[16px] bg-primary/10 text-primary flex items-center justify-center font-bold mb-8 border border-primary/10">
                    <Icons.Shield className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-on-surface mb-4">Strict Isolation</h3>
                  <p className="text-lg text-on-surface-variant leading-relaxed">
                    Operates strictly within your tenant boundaries, ensuring data privacy, compliance, and enterprise-grade security.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Narrative Section - Visual Workflow */}
      <section className="py-32 bg-surface-container-low border-t border-outline-variant/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-24">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-on-surface mb-8 leading-[1.15]">
              How {feature.title.toLowerCase()} integrates <br className="hidden md:block"/> into the core engine.
            </h2>
            <p className="text-xl text-on-surface-variant leading-relaxed">
              DialPulse implements {feature.title.toLowerCase()} natively at the tenant level, ensuring strict isolation, role-based control, and compliance across your entire organization.
            </p>
          </div>
          
          <div className="relative max-w-4xl ml-0 lg:ml-12">
            {/* Vertical Line */}
            <div className="absolute left-[27px] top-6 bottom-6 w-[2px] bg-outline-variant/50 hidden md:block" />
            
            <div className="flex flex-col gap-20">
              {/* Step 1 */}
              <div className="flex flex-col md:flex-row gap-10 relative z-10 group">
                <div className="w-14 h-14 rounded-full bg-primary text-on-primary flex items-center justify-center font-bold text-xl shrink-0 transition-transform group-hover:scale-110 shadow-lg shadow-primary/20">
                  1
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="text-3xl font-display font-bold text-on-surface mb-4">Automated Rules & Policies</h3>
                  <p className="text-lg text-on-surface-variant leading-relaxed mb-8 max-w-2xl">
                    Configure tenant-wide policies that automatically govern how {feature.title.toLowerCase()} is executed by your team. These boundaries are evaluated before any action is permitted.
                  </p>
                  <div className="bg-surface border border-outline-variant rounded-2xl p-5 inline-flex items-center gap-4 shadow-sm">
                    <div className="w-10 h-10 rounded-[12px] bg-surface-container-high flex items-center justify-center"><Icons.Settings2 className="w-5 h-5 text-on-surface" /></div>
                    <div className="text-base font-bold text-on-surface pr-4">Policy Engine Active</div>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col md:flex-row gap-10 relative z-10 group">
                <div className="w-14 h-14 rounded-full bg-surface-container-highest text-on-surface flex items-center justify-center font-bold text-xl shrink-0 transition-transform group-hover:scale-110 shadow-sm border border-outline-variant">
                  2
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="text-3xl font-display font-bold text-on-surface mb-4">Secure Execution</h3>
                  <p className="text-lg text-on-surface-variant leading-relaxed mb-8 max-w-2xl">
                    Your team executes workflows within the DialPulse CRM. All actions are immediately verified against the security contexts established in step one.
                  </p>
                  <div className="bg-surface border border-outline-variant rounded-2xl p-5 inline-flex items-center gap-4 shadow-sm">
                    <div className="w-10 h-10 rounded-[12px] bg-success/10 flex items-center justify-center"><Icons.CheckCircle2 className="w-5 h-5 text-success" /></div>
                    <div className="text-base font-bold text-on-surface pr-4">Validated Context</div>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col md:flex-row gap-10 relative z-10 group">
                <div className="w-14 h-14 rounded-full bg-surface-container-highest text-on-surface flex items-center justify-center font-bold text-xl shrink-0 transition-transform group-hover:scale-110 shadow-sm border border-outline-variant">
                  3
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="text-3xl font-display font-bold text-on-surface mb-4">Immutable Audit Logging</h3>
                  <p className="text-lg text-on-surface-variant leading-relaxed mb-8 max-w-2xl">
                    Every action generates an immutable audit record, providing complete visibility and compliance tracking into {feature.title.toLowerCase()} events.
                  </p>
                  <div className="bg-surface border border-outline-variant rounded-2xl p-5 inline-flex items-center gap-4 shadow-sm">
                    <div className="w-10 h-10 rounded-[12px] bg-surface-container-high flex items-center justify-center"><Icons.Database className="w-5 h-5 text-on-surface" /></div>
                    <div className="text-base font-bold text-on-surface pr-4">Record Appended</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
