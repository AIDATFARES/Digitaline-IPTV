"use client";

import { 
  Baby, 
  Check, 
  Film, 
  Globe2, 
  Layers3, 
  Monitor, 
  Newspaper, 
  Trophy, 
  Radio,
  ArrowRight
} from "lucide-react";
import Link from "next/link";
import BrandMarquee from "@/components/home/BrandMarquee";

const categoryCards = [
  {
    icon: Trophy,
    title: "Sports Channels",
    items: [
      "Football, basketball, UFC, boxing, F1, and more",
      "High definition and 60 FPS streams available",
      "Major global sports broadcasting networks & PPV"
    ],
    highlight: "Live Competitions",
    tag: "POPULAR"
  },
  {
    icon: Film,
    title: "Movies & Cinema",
    items: [
      "Premium movie networks & dedicated cinema feeds",
      "Curated on-demand library with ongoing updates",
      "Major studio blockbusters, timeless classics & VOD"
    ],
    highlight: "Curated VOD",
  },
  {
    icon: Newspaper,
    title: "News Channels",
    items: [
      "Global, national, and regional news networks",
      "24/7 breaking news and special live reporting",
      "Financial markets, political coverage & weather"
    ],
    highlight: "Continuous Coverage",
  },
  {
    icon: Baby,
    title: "Kids & Family",
    items: [
      "Cartoons, learning & family entertainment",
      "Child-friendly programming and animations",
      "Educational broadcasts and youth series"
    ],
    highlight: "Family Friendly",
  },
  {
    icon: Monitor,
    title: "Entertainment & Lifestyle",
    items: [
      "Reality TV, music networks, lifestyle & drama",
      "Popular cable, satellite, and regional networks",
      "US, UK, Canadian & European top entertainment"
    ],
    highlight: "Daily Broadcasts",
  },
  {
    icon: Globe2,
    title: "International Feeds",
    items: [
      "Multi-country packages & localized regional feeds",
      "Local sports, cultural shows & native language audio",
      "Europe, Americas, MENA, Asia & Africa channels"
    ],
    highlight: "Global Reach",
  },
  {
    icon: Layers3,
    title: "Series & Shows",
    items: [
      "Episodic series with on-demand boxsets",
      "Popular television dramas, comedies & docuseries",
      "Regularly refreshed catalogs across genres"
    ],
    highlight: "On Demand",
  }
];

export default function ChannelsPage() {
  return (
    <main className="min-h-screen bg-[#030712] text-[#F8FAFC] pt-28 pb-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-[10%] left-[5%] w-[600px] h-[500px] glow-cyan blur-[160px] pointer-events-none rounded-full opacity-25" />
      <div className="absolute top-[45%] right-[5%] w-[500px] h-[450px] glow-blue blur-[150px] pointer-events-none rounded-full opacity-20" />

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Banner */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#00F2FE]/30 bg-[#00F2FE]/10 px-4 py-1.5 text-xs font-extrabold uppercase tracking-[0.2em] text-[#00F2FE] mb-6">
            <Radio className="w-3.5 h-3.5 text-[#00F5A0] animate-pulse" />
            <span>Extensive Channel Lineup &amp; VOD</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.08] tracking-tight">
            <span className="text-white block sm:inline">Digitaline IPTV </span>
            <span className="text-gradient-hero block sm:inline">Live Channels &amp; VOD</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg text-[#94A3B8] leading-relaxed">
            Browse our comprehensive selection of live sports, cinema networks, global news, and on-demand series in HD and 4K quality across supported regions. Pair with any of our <Link href="/pricing" className="text-white/90 hover:text-[#00F2FE] underline decoration-[#00F2FE]/40 underline-offset-2 transition-colors">IPTV subscription plans</Link> and configure your setup using our step-by-step <Link href="/installation" className="text-white/90 hover:text-[#00F5A0] underline decoration-[#00F5A0]/40 underline-offset-2 transition-colors">device guides</Link>.
          </p>
        </div>

        {/* Category Cards Grid */}
        <section className="mb-20">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {categoryCards.map((category) => {
              const Icon = category.icon;

              return (
                <article
                  key={category.title}
                  className="relative flex flex-col p-8 rounded-3xl glass-card hover:border-[#00F2FE]/50 hover:shadow-[0_0_30px_rgba(0,242,254,0.25)] transition-all duration-300 group"
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-[#0B1528] border border-white/[0.08] flex items-center justify-center group-hover:scale-110 transition-transform shadow-inner">
                      <Icon className="h-6 w-6 text-[#00F2FE] group-hover:text-[#00F5A0] transition-colors" />
                    </div>

                    {category.tag && (
                      <span className="rounded-full bg-gradient-to-r from-[#00F2FE] to-[#0284C7] px-3 py-1 text-[10px] font-black uppercase tracking-wider text-[#030712] shadow-md">
                        {category.tag}
                      </span>
                    )}
                  </div>

                  <h2 className="text-xl font-black text-white tracking-wide mb-4">
                    <Link href="/pricing" className="hover:text-[#00F2FE] transition-colors">
                      {category.title}
                    </Link>
                  </h2>

                  <ul className="w-full space-y-2.5 mb-6 text-left flex-grow">
                    {category.items.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#94A3B8] leading-snug">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#00F2FE]" strokeWidth={2.5} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="w-full mt-auto pt-4 border-t border-white/[0.08] flex items-center justify-between text-xs">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#64748B]">Availability</span>
                    <span className="font-bold text-white/90">{category.highlight}</span>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* Marquee Strip */}
        <section className="mb-20 rounded-3xl overflow-hidden glass-card p-6">
          <BrandMarquee />
        </section>

        {/* Bottom CTA Box */}
        <section className="rounded-3xl glass-card p-8 sm:p-12 text-center border-[#00F2FE]/30 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#00F2FE]/10 via-transparent to-[#00F5A0]/10 pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-black uppercase text-white mb-4">
              Ready to <Link href="/pricing" className="text-white hover:text-[#00F2FE] underline decoration-[#00F2FE]/50 underline-offset-4 transition-colors">start watching</Link>?
            </h2>
            <p className="text-[#94A3B8] text-sm sm:text-base leading-relaxed mb-8">
              Choose your <Link href="/pricing" className="text-white/90 hover:text-[#00F2FE] underline decoration-[#00F2FE]/40 underline-offset-2 transition-colors">subscription plan</Link> to receive your Digitaline IPTV access credentials and learn <Link href="/how-it-works" className="text-white/90 hover:text-[#00F5A0] underline decoration-[#00F5A0]/40 underline-offset-2 transition-colors">how it works</Link> on all your devices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/pricing"
                className="btn-primary-cyan px-8 py-4 text-xs font-black uppercase tracking-wider gap-2 hover:scale-105 group"
              >
                <span>View Subscription Plans</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="https://wa.me/447882781998?text=Hello,%20I%20would%20like%20to%20request%20a%20free%20trial%20for%20Digitaline%20IPTV."
                target="_blank"
                rel="noreferrer"
                className="btn-outline-glass px-8 py-4 text-xs font-black uppercase tracking-wider hover:border-[#00F5A0]/60 hover:text-[#00F5A0]"
              >
                Get Free Trial via WhatsApp
              </a>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}
