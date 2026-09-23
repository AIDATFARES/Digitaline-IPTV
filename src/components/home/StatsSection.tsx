import { Tv, Film, MonitorSmartphone, Headphones } from "lucide-react";
import Link from "next/link";

const stats = [
  {
    title: "Extensive Channel Selection",
    subtitle: "Live Global TV",
    href: "/channels",
    detail: (
      <>
        Coverage spanning sports, cinema, global news, and localized entertainment in our{" "}
        <Link href="/channels" className="text-white/90 hover:underline">
          channel lineup
        </Link>.
      </>
    ),
    icon: Tv,
    accent: "#00F2FE",
    glow: "rgba(0, 242, 254, 0.25)",
  },
  {
    title: "Curated VOD Library",
    subtitle: "On-Demand Catalog",
    href: "/pricing",
    detail: (
      <>
        Rich collection of blockbuster movies and top series updated on regular cycles in our{" "}
        <Link href="/pricing" className="text-white/90 hover:underline">
          subscription plans
        </Link>.
      </>
    ),
    icon: Film,
    accent: "#38BDF8",
    glow: "rgba(56, 189, 248, 0.25)",
  },
  {
    title: "Multi-Device Support",
    subtitle: "Complete Ecosystem",
    href: "/installation",
    detail: (
      <>
        Full compatibility across Smart TVs, Android TV, Fire TV, Apple TV, iOS, and PC with our{" "}
        <Link href="/installation" className="text-white/90 hover:underline">
          setup guides
        </Link>.
      </>
    ),
    icon: MonitorSmartphone,
    accent: "#00F5A0",
    glow: "rgba(0, 245, 160, 0.25)",
  },
  {
    title: "24/7 Customer Assistance",
    subtitle: "Direct Support",
    href: "/contact",
    detail: (
      <>
        Dedicated human assistance available around the clock via WhatsApp and our{" "}
        <Link href="/contact" className="text-white/90 hover:underline">
          support desk
        </Link>.
      </>
    ),
    icon: Headphones,
    accent: "#3B82F6",
    glow: "rgba(59, 130, 246, 0.25)",
  },
];

export default function StatsSection() {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden border-t border-white/[0.06]">
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.title}
                className="group relative p-7 rounded-2xl glass-card hover:border-[#00F2FE]/40 transition-all duration-300"
              >
                <div 
                  className="w-12 h-12 rounded-xl bg-[#0B1528] border border-white/[0.08] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform"
                  style={{ boxShadow: `0 0 20px ${stat.glow}` }}
                >
                  <Icon className="w-6 h-6" style={{ color: stat.accent }} />
                </div>

                <span className="text-[10px] font-black uppercase tracking-widest text-[#94A3B8] block mb-1">
                  {stat.subtitle}
                </span>

                <h3 className="text-lg font-black text-white tracking-wide mb-2">
                  <Link href={stat.href} className="hover:text-white/90 transition-colors">
                    {stat.title}
                  </Link>
                </h3>

                <div className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                  {stat.detail}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
