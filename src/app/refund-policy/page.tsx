import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Refund Policy | Digitaline IPTV",
  description: "Review the transparent refund policy and satisfaction process for Digitaline IPTV subscriptions.",
  alternates: {
    canonical: "/refund-policy",
  },
};

const sections = [
  {
    title: "1. Satisfaction Commitment",
    content: (
      <p className="text-sm text-[#94A3B8] leading-relaxed">
        At Digitaline IPTV, we strive to deliver consistent, high-performance streaming services. We encourage all prospective clients to test their setup using our 24-hour trial prior to committing to extended multi-month{" "}
        <Link href="/pricing" className="text-[#00F2FE] underline hover:text-white">
          subscription plans
        </Link>
        .
      </p>
    ),
  },
  {
    title: "2. Refund Eligibility",
    content: (
      <p className="text-sm text-[#94A3B8] leading-relaxed">
        Refund requests are evaluated under the following standard criteria:
      </p>
    ),
    items: [
      "Technical Outages: Confirmed server-side outages exceeding 72 consecutive hours that prevent access across all compatible devices.",
      "Duplicate Charges: Accidental duplicate billing for the same plan period.",
      "First 7 Days: New subscribers who experience verified incompatibility issues after working with technical support following our installation guides.",
    ],
  },
  {
    title: "3. How to Submit a Refund Inquiry",
    content: (
      <p className="text-sm text-[#94A3B8] leading-relaxed">
        To request a refund review, please contact our team within 7 days of purchase via our{" "}
        <Link href="/contact" className="text-[#00F2FE] underline hover:text-white">
          Contact page
        </Link>{" "}
        or WhatsApp with your order email and description of the technical issue.
      </p>
    ),
  },
  {
    title: "4. Processing Timeline",
    content: (
      <p className="text-sm text-[#94A3B8] leading-relaxed">
        Approved refunds are credited to the original payment method within 5 to 10 business days, depending on your bank or payment provider. For billing questions, check our{" "}
        <Link href="/faq" className="text-[#00F2FE] underline hover:text-white">
          FAQ
        </Link>
        .
      </p>
    ),
  },
];

export default function RefundPolicyPage() {
  return (
    <main className="min-h-screen bg-[#030712] text-[#F8FAFC] pt-36 pb-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full">
      <header className="mb-14 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#00F2FE]/30 bg-[#00F2FE]/10 mb-6">
          <ShieldCheck className="w-3.5 h-3.5 text-[#00F5A0]" />
          <span className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#00F2FE]">
            Customer Guarantee
          </span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tight">
          Refund Policy
        </h1>
        <p className="text-sm text-[#94A3B8] mt-3">
          Last updated: {new Date().getFullYear()} · Digitaline IPTV. View our{" "}
          <Link href="/pricing" className="text-[#00F2FE] underline hover:text-white">
            pricing plans
          </Link>{" "}
          or get in touch on our{" "}
          <Link href="/contact" className="text-[#00F2FE] underline hover:text-white">
            contact page
          </Link>
          .
        </p>
      </header>

      <div className="space-y-8">
        {sections.map((sec, idx) => (
          <article key={idx} className="glass-card rounded-3xl p-8 border-white/[0.08]">
            <h2 className="text-xl font-black text-white mb-4">
              <Link href="/refund-policy" className="hover:text-[#00F2FE] transition-colors">
                {sec.title}
              </Link>
            </h2>
            {sec.content}
            {sec.items && (
              <ul className="mt-4 space-y-2 text-sm text-[#94A3B8]">
                {sec.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="flex items-start gap-2">
                    <span className="text-[#00F2FE] mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}
          </article>
        ))}
      </div>
    </main>
  );
}
