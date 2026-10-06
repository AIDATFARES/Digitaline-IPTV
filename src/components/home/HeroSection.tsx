import Link from "next/link";
import { ArrowRight, ShieldCheck, Sparkles, Star } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-32 pb-24 px-4 sm:px-6 lg:px-8">
      
      {/* Hero Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-65 pointer-events-none"
        style={{ backgroundImage: "url('/hero-bg-digitaline.webp')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#030712]/85 via-[#030712]/60 to-[#030712] pointer-events-none" />

      {/* Ambient Atmospheric Lighting & Gradients */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] sm:w-[900px] h-[500px] glow-cyan blur-3xl pointer-events-none rounded-full opacity-70" />
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] glow-blue blur-2xl pointer-events-none rounded-full opacity-60" />
      <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] glow-emerald blur-2xl pointer-events-none rounded-full opacity-50" />
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[500px] h-[300px] glow-blue blur-2xl pointer-events-none rounded-full opacity-40" />

      <div className="relative z-10 w-full max-w-[1100px] mx-auto flex flex-col items-center text-center">
        
        {/* Top Pill Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-[#00F2FE]/40 bg-[#00F2FE]/10 backdrop-blur-md mb-8 shadow-[0_0_20px_rgba(0,242,254,0.25)]">
          <span className="w-2 h-2 rounded-full bg-[#00F5A0] animate-pulse shadow-[0_0_8px_#00F5A0]" />
          <span className="text-[11px] sm:text-xs font-black uppercase tracking-[0.2em] text-[#00F2FE]">
            #1 RATED NEXT-GEN IPTV PROVIDER
          </span>
        </div>

        {/* Main H1 */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[76px] font-black tracking-tight leading-[1.08] max-w-5xl mb-6 drop-shadow-[0_4px_20px_rgba(0,0,0,0.95)]">
          <span className="text-white block sm:inline">The Best IPTV Provider </span>
          <span className="text-gradient-hero block sm:inline">
            USA, Canada &amp; Europe
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-2xl font-extrabold text-[#F8FAFC] tracking-wide mb-6 drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]">
          Digitaline IPTV — Pure Digital Streaming &amp; High-Speed Anti-Freeze
        </p>

        {/* Conversion Copy */}
        <p className="text-sm sm:text-base md:text-lg text-[#E2E8F0] max-w-3xl leading-relaxed mb-10 font-normal drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]">
          Elevate your home entertainment with <strong className="text-white font-semibold">Digitaline IPTV</strong>. Stream crystal-clear{" "}
          <Link href="/channels" className="text-white hover:text-[#00F2FE] underline decoration-[#00F2FE]/50 font-medium transition-colors">
            live television channels
          </Link>
          , world-class{" "}
          <Link href="/channels" className="text-white hover:text-[#00F2FE] underline decoration-[#00F2FE]/50 font-medium transition-colors">
            sporting competitions
          </Link>
          , and on-demand entertainment libraries directly to your{" "}
          <Link href="/installation" className="text-white hover:text-[#00F2FE] underline decoration-[#00F2FE]/50 font-medium transition-colors">
            supported devices
          </Link>{" "}
          with ultra-stable anti-freeze server infrastructure and instant automated activation.
        </p>

        {/* Dual CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full sm:w-auto mb-10">
          <a
            href="#pricing"
            className="btn-primary-cyan w-full sm:w-auto px-9 py-4 text-sm sm:text-base font-black tracking-wider uppercase gap-2 group"
          >
            <span className="relative z-10">Subscribe Now</span>
            <ArrowRight className="w-4.5 h-4.5 relative z-10 transform group-hover:translate-x-1.5 transition-transform duration-300" />
          </a>
          
          <a
            href="https://wa.me/213552069874?text=Hello,%20I%20would%20like%20to%20request%20a%20free%2024H%20trial%20for%20Digitaline%20IPTV."
            target="_blank"
            rel="noreferrer"
            className="btn-secondary-emerald w-full sm:w-auto px-9 py-4 text-sm sm:text-base font-black tracking-wider uppercase gap-2 group"
          >
            <span className="relative z-10">Free Trial 24H</span>
            <Sparkles className="w-4.5 h-4.5 relative z-10 transform group-hover:rotate-45 group-hover:scale-125 transition-transform duration-300 text-emerald-950" />
          </a>
        </div>

        {/* Trust Card */}
        <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-2xl glass-card text-xs sm:text-sm text-[#94A3B8] mb-4">
          <span className="flex items-center gap-1 text-[#00F5A0]">
            <Star className="w-4 h-4 fill-current" />
            <Star className="w-4 h-4 fill-current" />
            <Star className="w-4 h-4 fill-current" />
            <Star className="w-4 h-4 fill-current" />
            <Star className="w-4 h-4 fill-current" />
          </span>
          <span className="text-white font-bold">Trusted by 45,000+ Customers</span>
          <span className="text-white/20">|</span>
          <Link href="/faq" className="flex items-center gap-1.5 text-[#00F2FE] hover:text-white transition-colors">
            <ShieldCheck className="w-4 h-4 text-[#00F5A0]" />
            Fast Setup Guarantee
          </Link>
        </div>

        {/* Pricing Teaser with Internal Link */}
        <p className="text-xs sm:text-sm font-medium text-[#64748B]">
          Our flexible{" "}
          <Link href="/pricing" className="text-[#00F2FE] hover:text-white underline decoration-[#00F2FE]/40 font-semibold transition-colors">
            IPTV subscription plans
          </Link>{" "}
          start at only <span className="text-[#00F5A0] font-bold">$11.66</span>/Month · Cancel anytime.
        </p>

      </div>
    </section>
  );
}
