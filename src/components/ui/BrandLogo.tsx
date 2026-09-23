interface BrandLogoProps {
  compact?: boolean;
  className?: string;
}

export default function BrandLogo({ compact = false, className = "" }: BrandLogoProps) {
  return (
    <div className={`flex items-center gap-3 select-none group ${className}`}>
      {/* High-Tech Digital Stream D-Mark */}
      <div className="relative flex items-center justify-center shrink-0">
        <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-[#00F2FE] via-[#2563EB] to-[#030712] p-[1.5px] shadow-[0_0_20px_rgba(0,242,254,0.45)] group-hover:shadow-[0_0_30px_rgba(0,242,254,0.75)] transition-all duration-300">
          <div className="w-full h-full bg-[#070E1E] rounded-[10px] flex items-center justify-center relative overflow-hidden">
            {/* Ambient inner glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#00F2FE]/20 via-transparent to-[#00F5A0]/20 pointer-events-none" />
            
            {/* Digital Wave & Play SVG Icon */}
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6 text-white transform group-hover:scale-110 transition-transform duration-300"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Outer Stream Screen */}
              <rect
                x="2.5"
                y="3.5"
                width="19"
                height="13"
                rx="2.5"
                stroke="url(#cyanBlueGradient)"
                strokeWidth="2"
              />
              {/* Play symbol with emerald spark */}
              <polygon
                points="10,6.5 16,10 10,13.5"
                fill="url(#emeraldPulseGradient)"
              />
              {/* Digital Base / Frequency line */}
              <path
                d="M7 20.5H17M12 16.5V20.5"
                stroke="#38BDF8"
                strokeWidth="2"
                strokeLinecap="round"
              />
              {/* Gradients */}
              <defs>
                <linearGradient id="cyanBlueGradient" x1="2" y1="3" x2="22" y2="17" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#00F2FE" />
                  <stop offset="1" stopColor="#2563EB" />
                </linearGradient>
                <linearGradient id="emeraldPulseGradient" x1="10" y1="6.5" x2="16" y2="13.5" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#00F5A0" />
                  <stop offset="1" stopColor="#10B981" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>

        {/* Small energetic emerald live status badge */}
        <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-[#00F5A0] ring-2 ring-[#030712] shadow-[0_0_8px_#00F5A0]" />
      </div>

      {/* Wordmark & Tagline */}
      <div className="flex flex-col leading-none">
        <div className="flex items-center gap-1.5 tracking-tight">
          <span className="text-xl sm:text-2xl font-black tracking-wider text-white">
            DIGITA<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F2FE] via-[#38BDF8] to-[#2563EB]">LINE</span>
          </span>
          <span className="text-[10px] font-black uppercase tracking-widest px-1.5 py-0.5 rounded bg-[#00F2FE]/15 text-[#00F2FE] border border-[#00F2FE]/30">
            IPTV
          </span>
        </div>
        {!compact && (
          <span className="text-[8px] sm:text-[9px] font-extrabold uppercase tracking-[0.22em] text-[#94A3B8] mt-1 group-hover:text-white transition-colors">
            NEXT-GEN DIGITAL STREAMING
          </span>
        )}
      </div>
    </div>
  );
}
