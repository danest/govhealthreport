import { SITE_NAME, SITE_URL, SITE_DESCRIPTION } from "./site-config";

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export interface ArticleData {
  title: string;
  description: string;
  image: string;
  date: string;
  author: string;
  keywords?: string[];
  slug: string;
  category?: string;
}

export interface ProviderData {
  name: string;
  description: string;
  rating: number;
  url: string;
  slug: string;
  image?: string;
}

export interface RatingStats {
  average_rating: number;
  total_ratings: number;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ReviewData {
  author_name: string;
  rating: number;
  title?: string;
  content: string;
  created_at: string;
}

/**
 * Generate Organization schema for site-wide use
 */
export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/opengraph-image`,
    description: SITE_DESCRIPTION,
    sameAs: [], // Add social media URLs here if available
  };
}

/**
 * Generate Article/BlogPosting schema
 */
export function generateArticleSchema(article: ArticleData) {
  const schema: any = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: article.description,
    image: article.image,
    datePublished: article.date,
    dateModified: article.date,
    author: {
      "@type": "Organization",
      name: article.author,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/opengraph-image`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/articles/${article.slug}`,
    },
  };

  if (article.keywords && article.keywords.length > 0) {
    schema.keywords = article.keywords.join(", ");
  }

  if (article.category) {
    schema.articleSection = article.category;
  }

  return schema;
}

/**
 * Generate Breadcrumb schema
 */
export function generateBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/**
 * Generate AggregateRating schema
 */
export function generateAggregateRatingSchema(stats: RatingStats) {
  return {
    "@type": "AggregateRating",
    ratingValue: stats.average_rating.toFixed(1),
    ratingCount: stats.total_ratings,
    bestRating: "10",
    worstRating: "1",
  };
}

/**
 * Generate Product schema for provider
 */
export function generateProductSchema(
  provider: ProviderData,
  ratingStats?: RatingStats
) {
  const schema: any = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: provider.name,
    description: provider.description,
    url: provider.url,
    brand: {
      "@type": "Organization",
      name: provider.name,
    },
  };

  if (provider.image) {
    schema.image = provider.image;
  }

  if (ratingStats) {
    schema.aggregateRating = generateAggregateRatingSchema(ratingStats);
  } else {
    // Use static rating from provider data (10-point scale)
    schema.aggregateRating = {
      "@type": "AggregateRating",
      ratingValue: provider.rating.toFixed(1),
      ratingCount: 1,
      bestRating: "10",
      worstRating: "1",
    };
  }

  return schema;
}

/**
 * Generate Review schema
 */
export function generateReviewSchema(review: ReviewData, provider: ProviderData) {
  const schema: any = {
    "@context": "https://schema.org",
    "@type": "Review",
    itemReviewed: {
      "@type": "Product",
      name: provider.name,
    },
    author: {
      "@type": "Person",
      name: review.author_name,
    },
    reviewRating: {
      "@type": "Rating",
      ratingValue: review.rating,
      bestRating: "5",
      worstRating: "1",
    },
    reviewBody: review.content,
    datePublished: review.created_at,
  };

  if (review.title) {
    schema.name = review.title;
  }

  return schema;
}

/**
 * Generate FAQPage schema
 */
export function generateFAQSchema(faqs: FAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

/**
 * Generate CollectionPage schema for listing pages
 */
export function generateCollectionPageSchema(
  title: string,
  description: string,
  url: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: title,
    description: description,
    url: url,
  };
}

/**
 * Generate WebPage schema for general pages
 */
export function generateWebPageSchema(
  title: string,
  description: string,
  url: string,
  type: "AboutPage" | "ContactPage" | "WebPage" = "WebPage"
) {
  return {
    "@context": "https://schema.org",
    "@type": type,
    name: title,
    description: description,
    url: url,
  };
}
