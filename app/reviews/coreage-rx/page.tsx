import { Metadata } from "next";
import { notFound } from "next/navigation";
import { ReviewPage } from "@/components/sections/ReviewPage";
import { getProviderBySlug } from "@/lib/providers";
import { generateProviderMetadata } from "@/lib/provider-metadata";
import { SchemaScript } from "@/components/SchemaScript";
import { generateProductSchema, generateBreadcrumbSchema } from "@/lib/schema";
import { SITE_URL } from "@/lib/site-config";

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

      <section className="py-8 bg-[#f5f7fa]">
        <div className="container mx-auto max-w-5xl px-4 space-y-6">
          <p className="text-gray-700 text-center">
            <strong>CoreAge RX</strong> (also written as coreage rx) is the same trusted brand.
          </p>

          <div className="bg-white border-2 border-[#003366] rounded-lg p-6">
            <h2 className="text-2xl font-bold text-[#003366] mb-4">Semaglutide</h2>
            <p className="text-gray-700">
              A glucagon-like peptide-1 (GLP-1) receptor agonist that helps regulate blood sugar and reduce appetite. The same active ingredient found in Ozempic and Wegovy.
            </p>
          </div>

          <div className="bg-white border-2 border-[#003366] rounded-lg p-6">
            <h2 className="text-2xl font-bold text-[#003366] mb-4">Tirzepatide</h2>
            <p className="text-gray-700">
              A dual glucose-dependent insulinotropic polypeptide (GIP) and GLP-1 receptor agonist. The same active ingredient found in Mounjaro and Zepbound. May provide superior weight loss results.
            </p>
          </div>

          <div className="bg-white border-2 border-[#003366] rounded-lg p-6">
            <h3 className="text-xl font-bold text-[#003366] mb-4">How They're Similar</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Both from CoreAge RX with the same brand quality</li>
              <li>• Both are weekly injections</li>
              <li>• Both reduce appetite and promote fullness</li>
              <li>• Both require medical supervision</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
