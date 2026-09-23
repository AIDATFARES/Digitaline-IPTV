import type { Metadata } from "next";
import PricingPageContent from "@/components/pricing/PricingPageContent";

export const metadata: Metadata = {
  title: "IPTV Subscription Plans & Pricing | Digitaline IPTV",
  description: "Explore flexible Digitaline IPTV subscription plans. Stream live TV, sports, and on-demand movies with multi-device support, transparent pricing, and instant activation.",
  alternates: {
    canonical: "/pricing",
  },
};

export default function PricingPage() {
  return (
    <main className="flex-grow pt-4">
      <PricingPageContent />
    </main>
  );
}
