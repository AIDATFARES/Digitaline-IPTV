import { CreditCard, MailCheck, PlayCircle } from "lucide-react";
import Link from "next/link";

export default function HowItWorksSection() {
  const steps = [
    {
      num: "01",
      title: "Choose Your Plan",
      subtitle: "Flexible Durations",
      href: "/pricing",
      description: (
        <>
          Select the subscription duration and number of device connections from our{" "}
          <Link href="/pricing" className="text-white/90 hover:underline">
            pricing tiers
          </Link>{" "}
          that match your household streaming habits.
        </>
      ),
      icon: CreditCard,
      color: "from-[#00F2FE] to-[#0284C7]",
      border: "border-[#00F2FE]/40",
      accent: "#00F2FE",
    },
    {
      num: "02",
      title: "Receive Your Account",
      subtitle: "Fast Activation",
      href: "/contact",
      description: (
        <>
          Your login credentials (M3U playlist, Xtream Codes API URL, username and password) are sent promptly upon order confirmation. Reach out to our{" "}
          <Link href="/contact" className="text-white/90 hover:underline">
            support team
          </Link>{" "}
          anytime.
        </>
      ),
      icon: MailCheck,
      color: "from-[#38BDF8] to-[#2563EB]",
      border: "border-[#38BDF8]/40",
      accent: "#38BDF8",
    },
    {
      num: "03",
      title: "Start Streaming",
      subtitle: "Instant Playback",
      href: "/installation",
      description: (
        <>
          Enter your credentials into your preferred IPTV player using our step-by-step{" "}
          <Link href="/installation" className="text-white/90 hover:underline">
            setup guide
          </Link>{" "}
          on your Smart TV, Firestick, Android box, or phone.
        </>
      ),
      icon: PlayCircle,
      color: "from-[#00F5A0] to-[#10B981]",
      border: "border-[#00F5A0]/40",
      accent: "#00F5A0",
    },
  ];

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden border-t border-white/[0.06]">
      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block py-1 px-3.5 rounded-full border border-white/10 bg-white/[0.03] text-xs font-extrabold uppercase tracking-[0.2em] text-[#00F2FE] mb-4">
            Quick Setup
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight mb-4">
            How To Get Started With <Link href="/how-it-works" className="text-white hover:text-[#00F2FE] underline decoration-[#00F2FE]/50 underline-offset-4 transition-colors">Digitaline IPTV</Link>
          </h2>
          <p className="text-[#94A3B8] text-base sm:text-lg">
            Follow three straightforward steps to unlock seamless television on all your <Link href="/installation" className="text-white/90 hover:text-[#00F2FE] underline decoration-[#00F2FE]/40 underline-offset-2 transition-colors">favorite devices</Link>. Learn more about our <Link href="/pricing" className="text-white/90 hover:text-[#00F5A0] underline decoration-[#00F5A0]/40 underline-offset-2 transition-colors">subscription options</Link>.
          </p>
        </div>

        {/* 3 Modern Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          
          {/* Connector Line on Desktop */}
          <div className="hidden md:block absolute top-1/2 left-[18%] right-[18%] -translate-y-1/2 h-[2px] bg-gradient-to-r from-[#00F2FE]/40 via-[#38BDF8]/40 to-[#00F5A0]/40 z-0" />

          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="relative z-10 flex flex-col items-center text-center p-8 rounded-3xl glass-card hover:border-[#00F2FE]/50 hover:shadow-[0_0_35px_rgba(0,242,254,0.2)] transition-all duration-300"
              >
                {/* Number Indicator Pill */}
                <div className="mb-6 relative">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} p-[1.5px] shadow-[0_0_25px_rgba(0,242,254,0.35)] flex items-center justify-center`}>
                    <div className="w-full h-full bg-[#070E1E] rounded-[14px] flex items-center justify-center">
                      <Icon className="w-7 h-7" style={{ color: step.accent }} />
                    </div>
                  </div>
                  
                  {/* Floating Number Badge */}
                  <span className="absolute -bottom-2 -right-2 px-2 py-0.5 rounded-md bg-[#030712] border border-white/20 text-[10px] font-black text-white tracking-wider">
                    {step.num}
                  </span>
                </div>

                <h3 className="text-xl font-black text-white tracking-wide mb-1">
                  <Link href={step.href} className="hover:text-white/90 transition-colors">
                    {step.title}
                  </Link>
                </h3>
                
                <span className="text-[11px] font-bold text-[#94A3B8] uppercase tracking-wider mb-4">
                  {step.subtitle}
                </span>

                <p className="text-sm text-[#94A3B8] leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
