import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ReviewPage } from "@/components/sections/ReviewPage";
import { getProviderBySlug } from "@/lib/providers";
import { generateProviderMetadata } from "@/lib/provider-metadata";
import { SchemaScript } from "@/components/SchemaScript";
import { generateProductSchema, generateBreadcrumbSchema } from "@/lib/schema";
import { SITE_URL } from "@/lib/site-config";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { Pill, CheckCircle, Info } from "lucide-react";

const provider = getProviderBySlug("coreage-rx");

export const metadata: Metadata = provider
  ? {
      ...generateProviderMetadata(provider),
      title: `CoreAge RX Review 2025 - Semaglutide & Tirzepatide | GOV Health Report`,
    }
  : {
      title: "Provider Not Found | GOV Health Report",
    };

export default function CoreAgeRxReviewPage() {
  if (!provider) return notFound();

  const productSchema = generateProductSchema({
    name: provider.name,
    description: provider.description,
    rating: provider.rating,
    url: provider.url,
    slug: provider.slug,
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: SITE_URL },
    { name: "Reviews", url: `${SITE_URL}/reviews` },
    { name: provider.name, url: `${SITE_URL}/reviews/${provider.slug}` },
  ]);

  return (
    <>
      <SchemaScript schema={[productSchema, breadcrumbSchema]} />
      <ReviewPage provider={provider} />

      {/* CoreAge RX Section */}
      <section className="py-8 bg-white border-t-4 border-[#ffc72c]">
        <div className="container mx-auto max-w-5xl px-4 space-y-8">
          {/* Intro */}
          <div className="bg-[#e8eef4] border-2 border-[#003366] p-6 rounded-lg">
            <p className="text-gray-700 leading-relaxed">
              <strong className="text-[#003366]">CoreAge RX</strong> (also written as coreage rx) is the same trusted brand offering both major GLP-1 receptor agonist medications. These medications work through similar mechanisms to help with weight loss and metabolic health, giving you options based on your specific needs and physician recommendations.
            </p>
          </div>

          {/* Semaglutide */}
          <div className="bg-white border-2 border-[#003366] rounded-lg overflow-hidden">
            <div className="bg-[#003366] text-white px-6 py-4 flex items-center gap-2">
              <Pill className="h-5 w-5 text-[#ffc72c]" />
              <h2 className="text-xl font-bold">Semaglutide</h2>
            </div>
            <div className="p-6">
              <p className="text-gray-700 mb-4 leading-relaxed">
                A glucagon-like peptide-1 (GLP-1) receptor agonist that helps regulate blood sugar and reduce appetite. The same active ingredient found in Ozempic and Wegovy. Mimics the GLP-1 hormone to slow digestion, reduce appetite, and improve insulin secretion.
              </p>
            </div>
          </div>

          {/* Tirzepatide */}
          <div className="bg-white border-2 border-[#003366] rounded-lg overflow-hidden">
            <div className="bg-[#003366] text-white px-6 py-4 flex items-center gap-2">
              <Pill className="h-5 w-5 text-[#ffc72c]" />
              <h2 className="text-xl font-bold">Tirzepatide</h2>
            </div>
            <div className="p-6">
              <p className="text-gray-700 mb-4 leading-relaxed">
                A dual glucose-dependent insulinotropic polypeptide (GIP) and GLP-1 receptor agonist. The same active ingredient found in Mounjaro and Zepbound. Activates both GIP and GLP-1 receptors for enhanced metabolic benefits and potentially greater weight loss than semaglutide alone. Dual-agonist mechanism may provide superior weight loss results (average 20-25% body weight reduction in clinical trials).
              </p>
            </div>
          </div>

          {/* How They're Similar */}
          <div className="bg-white border-2 border-[#003366] rounded-lg overflow-hidden">
            <div className="bg-[#003366] text-white px-6 py-4">
              <h3 className="text-lg font-bold">How They're Similar</h3>
            </div>
            <div className="p-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3 p-4 bg-[#e8eef4] rounded-lg">
                  <CheckCircle className="h-5 w-5 text-[#003366] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#003366]">Same Brand Quality</strong>
                    <p className="text-sm text-gray-700 mt-1">Both medications provided by CoreAge RX with the same high standards of care and support</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-[#e8eef4] rounded-lg">
                  <CheckCircle className="h-5 w-5 text-[#003366] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#003366]">Weekly Injections</strong>
                    <p className="text-sm text-gray-700 mt-1">Both are administered via once-weekly subcutaneous injection</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-[#e8eef4] rounded-lg">
                  <CheckCircle className="h-5 w-5 text-[#003366] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#003366]">Appetite Regulation</strong>
                    <p className="text-sm text-gray-700 mt-1">Both work by reducing hunger and promoting feelings of fullness</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-[#e8eef4] rounded-lg">
                  <CheckCircle className="h-5 w-5 text-[#003366] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#003366]">Medical Supervision</strong>
                    <p className="text-sm text-gray-700 mt-1">Both require ongoing physician oversight and personalized treatment plans</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-[#e8eef4] rounded-lg">
                  <CheckCircle className="h-5 w-5 text-[#003366] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#003366]">Similar Side Effects</strong>
                    <p className="text-sm text-gray-700 mt-1">Both may cause nausea, vomiting, and digestive discomfort, especially during initial weeks</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-[#e8eef4] rounded-lg">
                  <CheckCircle className="h-5 w-5 text-[#003366] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#003366]">Proven Efficacy</strong>
                    <p className="text-sm text-gray-700 mt-1">Both medications have extensive clinical trial data supporting significant weight loss outcomes</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Choosing Between */}
          <div className="bg-amber-50 border-2 border-amber-500 p-5 rounded-lg">
            <div className="flex items-start gap-3">
              <Info className="h-6 w-6 text-amber-700 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-[#003366] mb-2">Choosing Between Semaglutide and Tirzepatide</h4>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Your board-certified physician at CoreAge RX will help determine which medication is most appropriate based on your medical history, weight loss goals, budget considerations, and individual response to treatment. Some patients may start with semaglutide and transition to tirzepatide, or vice versa, based on efficacy and tolerance.
                </p>
              </div>
            </div>
          </div>

          {/* Related Resources */}
          <div className="bg-[#e8eef4] border border-[#003366] p-5 rounded-lg">
            <h4 className="font-bold text-[#003366] mb-3">Related Resources</h4>
            <div className="grid gap-2 sm:grid-cols-2">
              <Link
                href="/best-vitamins-to-take-while-on-tirzepatide"
                className="text-[#003366] hover:underline font-medium text-sm"
              >
                → Best Vitamins While on Tirzepatide
              </Link>
              <Link
                href="/best-vitamins-to-take-while-on-semaglutide"
                className="text-[#003366] hover:underline font-medium text-sm"
              >
                → Best Vitamins While on Semaglutide
              </Link>
              <Link
                href="/best-compounding-pharmacy-for-tirzepatide"
                className="text-[#003366] hover:underline font-medium text-sm"
              >
                → Best Compounding Pharmacy for Tirzepatide
              </Link>
              <Link
                href="/best-compounding-pharmacy-for-semaglutide"
                className="text-[#003366] hover:underline font-medium text-sm"
              >
                → Best Compounding Pharmacy for Semaglutide
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
