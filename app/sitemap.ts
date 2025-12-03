import { MetadataRoute } from 'next'

const BASE_URL = 'https://www.rxsaverhub.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  // Main pages
  const mainPages = [
    '',
    '/reviews',
    '/best-weight-loss-injections',
    '/about',
    '/contact',
  ].map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified,
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  // Provider review pages
  const providerPages = [
    '/reviews/ro',
    '/reviews/hers',
    '/reviews/mystart',
    '/reviews/clinic-secret',
    '/reviews/coreage-rx',
    '/reviews/medvi',
    '/reviews/eden',
    '/reviews/noom',
    '/reviews/mochi-health',
    '/reviews/remedy-meds',
  ].map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified,
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  // Legal pages (lower priority)
  const legalPages = [
    '/disclosure',
    '/privacy',
    '/terms',
    '/cookies',
    '/disclaimer',
  ].map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.3,
  }))

  return [...mainPages, ...providerPages, ...legalPages]
}
