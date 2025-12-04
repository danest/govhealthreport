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
    '/faq',
    '/articles',
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

  // Article pages
  const articlePages = [
    '/articles/who-should-not-take-ozempic',
    '/articles/do-glp-1-agonists-cause-gallstones',
  ].map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // Guide pages
  const guidePages = [
    '/best-place-to-get-tirzepatide',
    '/best-place-to-inject-tirzepatide',
    '/best-time-to-take-tirzepatide',
    '/best-online-semaglutide-program',
    '/best-online-tirzepatide-program',
    '/best-compounding-pharmacy-for-semaglutide',
    '/best-compounding-pharmacy-for-tirzepatide',
    '/best-place-to-inject-semaglutide',
    '/best-time-of-day-to-take-semaglutide-for-weight-loss',
    '/best-time-of-day-to-take-tirzepatide-for-weight-loss',
    '/best-alcohol-on-semaglutide',
    '/best-alcohol-on-tirzepatide',
    '/best-vitamins-to-take-while-on-semaglutide',
    '/best-vitamins-to-take-while-on-tirzepatide',
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

  return [...mainPages, ...providerPages, ...articlePages, ...guidePages, ...legalPages]
}
