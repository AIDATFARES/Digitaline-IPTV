import Link from "next/link";
import { Trophy, Film, Baby, Newspaper, Compass, ArrowRight } from "lucide-react";

const categories = [
  {
    name: "Sports",
    href: "/channels",
    icon: Trophy,
    color: "from-[#00F2FE]/20 to-[#0284C7]/10 border-[#00F2FE]/30 text-[#00F2FE]",
    description: "Live football, basketball, combat sports, motorsports & marquee pay-per-view events.",
  },
  {
    name: "Movies",
    href: "/channels",
    icon: Film,
    color: "from-[#38BDF8]/20 to-[#2563EB]/10 border-[#38BDF8]/30 text-[#38BDF8]",
    description: "Blockbusters, timeless cinema classics, cinema releases & curated on-demand titles.",
  },
  {
    name: "Kids",
    href: "/channels",
    icon: Baby,
    color: "from-[#00F5A0]/20 to-[#10B981]/10 border-[#00F5A0]/30 text-[#00F5A0]",
    description: "Animated favorites, family programming, cartoon networks & educational broadcasts.",
  },
  {
    name: "News",
    href: "/channels",
    icon: Newspaper,
    color: "from-[#3B82F6]/20 to-[#60A5FA]/10 border-[#3B82F6]/30 text-[#60A5FA]",
    description: "Continuous global breaking news, national reports, financial coverage & weather forecasts.",
  },
  {
    name: "Documentaries",
    href: "/channels",
    icon: Compass,
    color: "from-[#10B981]/20 to-[#34D399]/10 border-[#10B981]/30 text-[#34D399]",
    description: "Nature explorations, historical narratives, science features & investigative series.",
  },
];

export default function CategorySection() {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Section Heading with Internal Link in H2 */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block py-1 px-3.5 rounded-full border border-white/10 bg-white/[0.03] text-xs font-extrabold uppercase tracking-[0.2em] text-[#00F2FE] mb-4">
            Curated Channels
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight mb-4">
            Entertainment For Everyone —{" "}
            <Link 
              href="/channels" 
              className="text-gradient-cyan hover:underline decoration-[#00F2FE]/50 transition-all inline-block"
            >
              Browse Full Lineup
            </Link>
          </h2>
          <p className="text-[#94A3B8] text-base sm:text-lg leading-relaxed">
            Discover a wide variety of live streams and on-demand catalogs organized for the entire household. View our complete{" "}
            <Link href="/channels" className="text-white hover:text-[#00F2FE] underline decoration-[#00F2FE]/40 font-semibold transition-colors">
              channel directory
            </Link>{" "}
            or review our affordable{" "}
            <Link href="/pricing" className="text-white hover:text-[#00F2FE] underline decoration-[#00F2FE]/40 font-semibold transition-colors">
              subscription packages
            </Link>.
          </p>
        </div>

        {/* Categories Cards with Links in H3 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <Link
                key={cat.name}
                href={cat.href}
                className="group relative flex flex-col p-6 rounded-2xl glass-card hover:border-[#00F2FE]/50 hover:shadow-[0_0_30px_rgba(0,242,254,0.25)] transition-all duration-300"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${cat.color} border flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-6 h-6" />
                </div>
                
                {/* H3 with Internal Link */}
                <h3 className="text-lg font-black text-white tracking-wide mb-2 group-hover:text-[#00F2FE] transition-colors flex items-center justify-between">
                  <span>{cat.name}</span>
                  <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-[#00F5A0]" />
                </h3>
                
                <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                  {cat.description}
                </p>
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
}
