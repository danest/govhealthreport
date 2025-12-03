import { Metadata } from "next";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { ComparisonHero } from "@/components/sections/ComparisonHero";
import { ProviderList } from "@/components/sections/ProviderList";
import { EducationalContent } from "@/components/sections/EducationalContent";
import { FAQ } from "@/components/sections/FAQ";
import { PageDisclaimer } from "@/components/sections/PageDisclaimer";

export const metadata: Metadata = {
  title: "Best Weight Loss Injections 2026 - Compare Top 10 Providers | Rx Saver Hub",
  description:
    "Compare the best weight loss injections including Semaglutide and Tirzepatide. Find affordable GLP-1 programs with FDA-approved medications, free shipping, and professional medical support.",
  keywords: [
    "best weight loss injections",
    "semaglutide",
    "tirzepatide",
    "GLP-1 injections",
    "Ozempic",
    "Wegovy",
    "Mounjaro",
    "weight loss medications",
    "online weight loss program",
  ],
  openGraph: {
    title: "Best Weight Loss Injections 2026 - Compare Top 10 Providers",
    description:
      "Compare the best weight loss injections including Semaglutide and Tirzepatide. Find affordable GLP-1 programs with FDA-approved medications.",
    type: "website",
  },
};

export default function BestWeightLossInjectionsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <ComparisonHero />
        <section className="py-8 bg-background">
          <div className="container mx-auto max-w-6xl px-4">
            <ProviderList />
          </div>
        </section>
        <EducationalContent />
        <FAQ />
        <PageDisclaimer />
      </main>
      <Footer />
    </div>
  );
}
