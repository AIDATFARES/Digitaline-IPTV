"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X, Sparkles } from "lucide-react";
import BrandLogo from "@/components/ui/BrandLogo";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Pricing", href: "/pricing" },
    { label: "Channel List", href: "/channels" },
    { label: "Tutorials", href: "/installation" },
    { label: "Blog", href: "/blog" },
    { label: "Reseller", href: "/reseller" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#030712]/90 backdrop-blur-xl border-b border-white/[0.08] shadow-[0_10px_30px_rgba(0,0,0,0.8)]"
          : "bg-[#030712]/60 backdrop-blur-md border-b border-white/[0.04]"
      }`}
    >
      <div className="w-full max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Left: Brand Logo */}
        <Link href="/" onClick={handleLogoClick} className="flex items-center shrink-0 z-20">
          <BrandLogo />
        </Link>

        {/* Center: Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5 px-3 py-1.5 rounded-full border border-white/[0.08] bg-[#0B1528]/70 backdrop-blur-md">
          {navLinks.map((link) => {
            const isActive = link.href === "/" 
              ? pathname === "/" 
              : pathname.startsWith(link.href);

            return (
              <Link
                key={link.label}
                href={link.href}
                className={`px-3.5 py-1.5 rounded-full text-xs xl:text-sm font-semibold tracking-wide transition-all duration-200 ${
                  isActive
                    ? "bg-gradient-to-r from-[#00F2FE] to-[#0284C7] text-[#030712] font-black shadow-[0_0_15px_rgba(0,242,254,0.4)]"
                    : "text-[#94A3B8] hover:text-white hover:bg-white/[0.05]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right: CTA Button */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          <a
            href="https://wa.me/447882781998?text=Hello,%20I%20would%20like%20to%20request%20a%20trial%20for%20Digitaline%20IPTV."
            target="_blank"
            rel="noreferrer"
            className="btn-primary-cyan px-6 py-2.5 text-xs sm:text-sm font-black tracking-wider uppercase gap-2 hover:shadow-[0_0_25px_rgba(0,242,254,0.6)]"
          >
            <Sparkles className="w-3.5 h-3.5 text-emerald-950" />
            Try Now
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden text-white p-2 rounded-xl border border-white/[0.08] bg-white/[0.03] hover:bg-white/[0.08] transition-colors"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6 text-[#00F2FE]" /> : <Menu className="w-6 h-6 text-white" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#070E1E]/98 backdrop-blur-2xl border-b border-white/[0.08] px-6 py-6 space-y-4 animate-in slide-in-from-top-4 duration-300 shadow-2xl">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => {
              const isActive = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                    isActive
                      ? "bg-[#00F2FE]/15 text-[#00F2FE] border border-[#00F2FE]/30 font-bold"
                      : "text-[#94A3B8] hover:text-white hover:bg-white/[0.04]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="pt-4 border-t border-white/[0.08]">
            <a
              href="https://wa.me/447882781998?text=Hello,%20I%20would%20like%20to%20request%20a%20trial%20for%20Digitaline%20IPTV."
              target="_blank"
              rel="noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full btn-primary-cyan py-3 text-sm font-black tracking-wider uppercase text-center"
            >
              Try Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
