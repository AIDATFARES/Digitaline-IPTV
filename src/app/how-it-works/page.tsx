import type { Metadata } from "next";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import Link from "next/link";
import { ShieldCheck, Zap, Phone, MonitorSmartphone, CheckCircle2, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "How It Works | Digitaline IPTV - Quick Setup Guide",
  description: "Learn how easy it is to set up and start streaming with Digitaline IPTV. Our 3-step process gets you watching premium live TV and VOD across any device.",
  alternates: {
    canonical: "/how-it-works",
  },
};

export default function HowItWorksPage() {
  return (
    <main className="flex-col flex min-h-screen bg-[#030712] text-[#F8FAFC]">
      
      {/* Hero Header */}
      <section className="relative pt-36 pb-20 overflow-hidden border-b border-white/[0.08]">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] glow-cyan blur-[160px] pointer-events-none rounded-full opacity-35" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#00F2FE]/30 bg-[#00F2FE]/10 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#00F5A0] animate-pulse" />
            <span className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#00F2FE]">
              Simple Setup Walkthrough
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1] mb-6">
            Start Streaming in <br />
            <span className="text-gradient-hero">Under 5 Minutes</span>
          </h1>

          <p className="text-[#94A3B8] text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            We have designed cutting the cord to be as simple as possible. No proprietary equipment, no cumbersome antennas, and zero binding contracts. Just pick a <Link href="/pricing" className="text-white/90 hover:text-[#00F2FE] underline decoration-[#00F2FE]/40 underline-offset-2 transition-colors">subscription plan</Link>, configure your IPTV player with our <Link href="/installation" className="text-white/90 hover:text-[#00F5A0] underline decoration-[#00F5A0]/40 underline-offset-2 transition-colors">device guides</Link>, and start watching your favorite <Link href="/channels" className="text-white/90 hover:text-[#00F2FE] underline decoration-[#00F2FE]/40 underline-offset-2 transition-colors">live TV channels</Link>.
          </p>
        </div>
      </section>

      {/* Reusable Core 3-Step Timeline */}
      <HowItWorksSection />

      {/* Why Choose Digitaline IPTV Feature Pill Grid */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative z-10 border-t border-white/[0.08]">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight mb-12 uppercase text-white">
            Why Stream With <Link href="/pricing" className="text-gradient-cyan hover:underline">Digitaline IPTV</Link>?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 text-left">
            <Link href="/pricing" className="flex items-center gap-3.5 p-5 rounded-2xl glass-card hover:border-[#00F2FE]/50 transition-colors">
              <ShieldCheck className="text-[#00F2FE] shrink-0 w-6 h-6" />
              <span className="text-sm font-bold text-white/90">Encrypted payment checkout</span>
            </Link>

            <Link href="/how-it-works" className="flex items-center gap-3.5 p-5 rounded-2xl glass-card hover:border-[#00F5A0]/50 transition-colors">
              <Zap className="text-[#00F5A0] shrink-0 w-6 h-6" />
              <span className="text-sm font-bold text-white/90">Prompt credential delivery</span>
            </Link>

            <Link href="/contact" className="flex items-center gap-3.5 p-5 rounded-2xl glass-card hover:border-[#38BDF8]/50 transition-colors">
              <Phone className="text-[#38BDF8] shrink-0 w-6 h-6" />
              <span className="text-sm font-bold text-white/90">24/7 dedicated human support</span>
            </Link>

            <Link href="/installation" className="flex items-center gap-3.5 p-5 rounded-2xl glass-card hover:border-[#3B82F6]/50 transition-colors">
              <MonitorSmartphone className="text-[#3B82F6] shrink-0 w-6 h-6" />
              <span className="text-sm font-bold text-white/90">Full multi-device ecosystem</span>
            </Link>

            <Link href="/pricing" className="flex items-center gap-3.5 p-5 rounded-2xl glass-card hover:border-[#10B981]/50 transition-colors">
              <CheckCircle2 className="text-[#10B981] shrink-0 w-6 h-6" />
              <span className="text-sm font-bold text-white/90">No contracts or hidden charges</span>
            </Link>

            <Link href="/channels" className="flex items-center gap-3.5 p-5 rounded-2xl glass-card hover:border-[#00F2FE]/50 transition-colors">
              <Zap className="text-[#00F2FE] shrink-0 w-6 h-6" />
              <span className="text-sm font-bold text-white/90">Optimized anti-freeze routes</span>
            </Link>
          </div>

          <div className="mt-14 flex justify-center">
            <Link
              href="/pricing"
              className="btn-primary-cyan px-9 py-4 text-xs font-black uppercase tracking-wider gap-2 group"
            >
              <span>Explore All Plans</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
