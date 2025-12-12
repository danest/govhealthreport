import { Metadata } from "next";
import { notFound } from "next/navigation";
import { ReviewPage } from "@/components/sections/ReviewPage";
import { getProviderBySlug } from "@/lib/providers";
import { generateProviderMetadata } from "@/lib/provider-metadata";
import { SchemaScript } from "@/components/SchemaScript";
import { generateProductSchema, generateBreadcrumbSchema } from "@/lib/schema";
import { SITE_URL } from "@/lib/site-config";

const provider = getProviderBySlug("healthicare");

export const metadata: Metadata = provider
  ? generateProviderMetadata(provider)
  : {
      title: "Provider Not Found | GOV Health Report",
    };

export default function HealthiCareReviewPage() {
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
    </>
  );
}
