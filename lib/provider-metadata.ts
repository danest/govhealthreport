import { Metadata } from "next";
import { Provider } from "./providers";
import { SITE_URL } from "./site-config";

/**
 * Generate enhanced metadata for provider review pages
 */
export function generateProviderMetadata(provider: Provider): Metadata {
  const providerUrl = `${SITE_URL}/reviews/${provider.slug}`;

  return {
    title: `${provider.name} Reviews 2025 - Provider Assessment | GOV Health Report`,
    description: provider.description,
    keywords: [
      provider.name,
      `${provider.name} reviews`,
      "GLP-1",
      "semaglutide",
      "tirzepatide",
      "weight loss",
      "telehealth weight loss",
      "online weight loss medication",
    ],
    alternates: {
      canonical: providerUrl,
    },
    openGraph: {
      title: `${provider.name} Reviews 2025 - Provider Assessment`,
      description: provider.description,
      url: providerUrl,
      type: "website",
      images: [`${SITE_URL}/opengraph-image`],
    },
    twitter: {
      card: "summary_large_image",
      title: `${provider.name} Reviews 2025`,
      description: provider.description,
      images: [`${SITE_URL}/opengraph-image`],
    },
  };
}
