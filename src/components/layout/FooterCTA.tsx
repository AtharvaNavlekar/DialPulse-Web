import { Button } from '@/components/ui/Button';

export function FooterCTA() {
  return (
    <div className="w-full bg-[#00695C] relative overflow-hidden py-24 md:py-32">
      {/* Background visual texture */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(128,213,196,0.3),transparent_60%)] -translate-y-1/3 translate-x-1/3" />
        <div className="absolute bottom-0 left-10 w-[400px] h-[400px] border-[1px] border-[#80D5C4]/30 rounded-full -translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 border border-white/25 mb-8 backdrop-blur-md">
          <div className="w-2 h-2 rounded-full bg-teal-200 animate-pulse"></div>
          <span className="text-teal-100 text-xs font-mono font-bold uppercase tracking-widest">Enterprise Ready</span>
        </div>
        
        <h2 className="text-5xl md:text-6xl lg:text-[80px] font-display font-extrabold text-white mb-8 leading-[1.05] tracking-tight max-w-4xl">
          Bring your customer workflow together.
        </h2>
        
        <p className="text-xl md:text-2xl text-[#CCE8E1] max-w-2xl mb-12 leading-relaxed">
          Unify lead management, omnichannel messaging, and compliance inside a single, high-performance operating layer.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center">
          <a href="https://app.dialpulse.com/signup" className="inline-flex items-center justify-center h-14 px-8 rounded-full bg-white text-[#00695C] font-bold text-lg hover:bg-[#F2F5F2] hover:scale-[1.02] transition-all shadow-[0_0_40px_rgba(255,255,255,0.2)]">
            Get Started
          </a>
          <a href="/contact" className="inline-flex items-center justify-center h-14 px-8 rounded-full bg-transparent border border-[#80D5C4]/40 text-white font-bold text-lg hover:bg-[#80D5C4]/10 transition-all">
            Request a Demo
          </a>
        </div>
      </div>
    </div>
  );
}
