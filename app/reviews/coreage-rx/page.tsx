import { Metadata } from "next";
import { notFound } from "next/navigation";
import { ReviewPage } from "@/components/sections/ReviewPage";
import { getProviderBySlug } from "@/lib/providers";
import { SchemaScript } from "@/components/SchemaScript";
import { generateProductSchema, generateBreadcrumbSchema } from "@/lib/schema";
import { SITE_URL } from "@/lib/site-config";

const provider = getProviderBySlug("coreage-rx");

export const metadata: Metadata = provider
  ? {
      title: "CoreAge Rx Reviews 2025 | Coreage RX Provider Assessment | GOV Health Report",
      description: provider.description,
      keywords: [
        "CoreAge Rx",
        "CoreAge Rx reviews",
        "Coreage RX",
        "Coreage rx",
        "Core Age RX",
        "CoreAgeRX",
        "GLP-1",
        "semaglutide",
        "tirzepatide",
        "weight loss",
        "telehealth weight loss",
        "online weight loss medication",
      ],
      alternates: {
        canonical: `${SITE_URL}/reviews/coreage-rx`,
      },
      openGraph: {
        title: "CoreAge Rx Reviews 2025 | Coreage RX Provider Assessment",
        description: provider.description,
        url: `${SITE_URL}/reviews/coreage-rx`,
        type: "website",
        images: [`${SITE_URL}/opengraph-image`],
      },
      twitter: {
        card: "summary_large_image",
        title: "CoreAge Rx Reviews 2025 | Coreage RX",
        description: provider.description,
        images: [`${SITE_URL}/opengraph-image`],
      },
    }
  : {
      title: "Provider Not Found | GOV Health Report",
    };

// Spelling variations content component
function SpellingVariationsContent() {
  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-[#003366] to-[#004080] rounded-lg px-6 py-4 mb-6">
        <h2 className="text-xl font-bold text-white">
          Common Spelling Variations of CoreAge Rx
        </h2>
        <p className="text-white/80 text-sm mt-1">
          This section covers alternate spellings that all refer to the same provider
        </p>
      </div>

      {/* Coreage RX */}
      <div className="bg-[#f5f7fa] rounded-lg p-6 border-l-4 border-[#003366]">
        <h2 className="text-xl font-bold text-[#003366] mb-3">Coreage RX</h2>
        <p className="text-gray-700 leading-relaxed">
          <strong>Coreage RX</strong> is a common alternate spelling of CoreAge Rx. This refers to the exact same GLP-1 weight loss provider reviewed on this page. Whether you search for &quot;Coreage RX&quot; or &quot;CoreAge Rx,&quot; you are looking for the same premium telehealth weight loss program that offers FDA-approved semaglutide and tirzepatide treatments with personalized care from board-certified physicians.
        </p>
      </div>

      {/* Core Age RX */}
      <div className="bg-[#f5f7fa] rounded-lg p-6 border-l-4 border-[#003366]">
        <h2 className="text-xl font-bold text-[#003366] mb-3">Core Age RX</h2>
        <p className="text-gray-700 leading-relaxed">
          <strong>Core Age RX</strong> (with a space between &quot;Core&quot; and &quot;Age&quot;) is another spelling variation that refers to the same brand as CoreAge Rx. Some users may naturally type the name with a space, but rest assured this is the same weight loss medication provider offering comprehensive GLP-1 treatment programs.
        </p>
      </div>

      {/* CoreAgeRX */}
      <div className="bg-[#f5f7fa] rounded-lg p-6 border-l-4 border-[#003366]">
        <h2 className="text-xl font-bold text-[#003366] mb-3">CoreAgeRX</h2>
        <p className="text-gray-700 leading-relaxed">
          <strong>CoreAgeRX</strong> (written as one word with capital letters) is simply an alternate way to write the CoreAge Rx brand name. This is the same telehealth provider that specializes in prescription weight loss medications including compounded semaglutide and tirzepatide.
        </p>
      </div>

      {/* Coreage rx */}
      <div className="bg-[#f5f7fa] rounded-lg p-6 border-l-4 border-[#003366]">
        <h2 className="text-xl font-bold text-[#003366] mb-3">Coreage rx</h2>
        <p className="text-gray-700 leading-relaxed">
          <strong>Coreage rx</strong> (lowercase) is another common way people search for this weight loss provider. Regardless of capitalization, &quot;Coreage rx&quot; refers to the same CoreAge Rx brand that offers personalized weight loss treatment plans backed by licensed healthcare professionals.
        </p>
      </div>

      {/* CoreAge Rx (official) */}
      <div className="bg-[#f5f7fa] rounded-lg p-6 border-l-4 border-[#ffc72c]">
        <h2 className="text-xl font-bold text-[#003366] mb-3">CoreAge Rx (Official Spelling)</h2>
        <p className="text-gray-700 leading-relaxed">
          <strong>CoreAge Rx</strong> is the official spelling of this weight loss provider&apos;s brand name. All the spelling variations listed above - including Coreage RX, Core Age RX, CoreAgeRX, and Coreage rx - refer to this same company. CoreAge Rx is our top-rated telehealth weight loss provider, offering FDA-approved GLP-1 medications with personalized treatment plans from board-certified physicians.
        </p>
      </div>

      {/* Summary box */}
      <div className="bg-[#e8eef4] rounded-lg p-6 border-2 border-[#003366]">
        <h3 className="text-lg font-bold text-[#003366] mb-3">Summary: All Variations, Same Provider</h3>
        <p className="text-gray-700 mb-4">
          Whether you&apos;re searching for <strong>Coreage RX</strong>, <strong>Core Age RX</strong>, <strong>CoreAgeRX</strong>, <strong>Coreage rx</strong>, or <strong>CoreAge Rx</strong>, you&apos;ve found the right place. All of these spelling variations refer to the same weight loss telehealth provider reviewed on this page.
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Coreage RX = CoreAge Rx</li>
          <li>Core Age RX = CoreAge Rx</li>
          <li>CoreAgeRX = CoreAge Rx</li>
          <li>Coreage rx = CoreAge Rx</li>
        </ul>
      </div>
    </div>
  );
}

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
      <ReviewPage
        provider={provider}
        additionalContent={<SpellingVariationsContent />}
      />
    </>
  );
}
