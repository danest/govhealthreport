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
    '/articles/ideal-diet-while-taking-glp-1-weight-loss-medications',
    '/articles/do-weight-loss-pills-and-injections-work',
    '/articles/ozempic-face',
    '/articles/how-long-to-establish-new-weight-set-point',
    '/articles/best-fruits-for-weight-loss',
    '/articles/can-you-take-ozempic-while-pregnant',
    '/articles/who-should-not-take-ozempic',
    '/articles/do-glp-1-agonists-cause-gallstones',
    '/articles/can-ozempic-cause-depression',
    '/articles/who-should-not-take-mounjaro',
    '/articles/ozempic-and-alcohol',
    '/articles/how-to-travel-with-your-medication',
    '/articles/online-weight-loss-coach',
    '/articles/ozempic-babies',
    '/articles/celebrities-on-weight-loss-drugs',
    '/articles/semaglutide-and-alcohol',
    '/articles/compounded-vs-brand-name-glp-1',
    '/articles/glp-1-and-exercise',
    '/articles/how-to-prevent-muscle-loss-on-glp-1',
    '/articles/ozempic-vs-mounjaro',
    '/articles/how-long-does-ozempic-take-to-work',
    '/articles/ozempic-shortage-what-to-do',
    '/articles/what-happens-when-you-stop-ozempic',
    '/articles/managing-ozempic-nausea',
    '/articles/glp-1-medications-and-pcos',
    '/articles/does-insurance-cover-glp-1',
    '/articles/ozempic-for-diabetes-vs-weight-loss',
    '/articles/glp-1-side-effects-timeline',
    '/articles/ozempic-constipation-relief',
    '/articles/glp-1-and-thyroid',
    '/articles/ozempic-diarrhea-management',
    '/articles/glp-1-hair-loss',
    '/articles/glp-1-heart-health',
    '/articles/glp-1-and-sleep-apnea',
    '/articles/glp-1-and-kidney-health',
    '/articles/glp-1-and-fatty-liver',
    '/articles/glp-1-and-menstruation',
    '/articles/glp-1-and-healthy-aging',
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
