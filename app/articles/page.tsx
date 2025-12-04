import { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Calendar, Clock, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Weight Loss Articles & Research | Rx Saver Hub",
  description:
    "Expert articles on GLP-1 medications, weight loss treatments, and healthy lifestyle tips. Stay informed with the latest research and practical guides.",
  keywords: [
    "weight loss articles",
    "GLP-1 research",
    "semaglutide information",
    "tirzepatide articles",
    "weight loss tips",
    "obesity treatment research",
  ],
};

// Article data - in a real app this could come from a CMS or database
const articles = [
  {
    slug: "who-should-not-take-ozempic",
    title: "Who Should Not Take Ozempic?",
    excerpt:
      "Learn who should avoid Ozempic (semaglutide). Comprehensive guide to contraindications, medical conditions requiring caution, drug interactions, and safer alternatives.",
    image: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=600&q=80&fit=crop&crop=center",
    date: "December 5, 2025",
    readTime: "10 min read",
    category: "Safety",
  },
  {
    slug: "do-glp-1-agonists-cause-gallstones",
    title: "Do GLP-1 Agonists Cause Gallstones?",
    excerpt:
      "Rapid weight loss from GLP-1 medications like semaglutide and tirzepatide can increase gallstone risk. Learn the science behind this connection and how to reduce your risk.",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&q=80&fit=crop&crop=center",
    date: "December 5, 2025",
    readTime: "8 min read",
    category: "Side Effects",
  },
];

export default function ArticlesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-12 bg-gradient-to-br from-warm-50 via-background to-warm-100/30">
          <div className="container mx-auto max-w-4xl px-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-6 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>

            <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
              Weight Loss <span className="text-primary">Articles</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Expert-researched articles on GLP-1 medications, weight loss treatments,
              and practical tips for your health journey. Stay informed with the latest
              science and guidance.
            </p>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="py-12">
          <div className="container mx-auto max-w-4xl px-4">
            <div className="grid gap-6">
              {articles.map((article) => (
                <Link key={article.slug} href={`/articles/${article.slug}`}>
                  <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                    <div className="grid md:grid-cols-3 gap-0">
                      <div className="relative h-48 md:h-full">
                        <img
                          src={article.image}
                          alt={article.title}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                        <div className="absolute top-3 left-3">
                          <span className="bg-primary text-primary-foreground text-xs font-medium px-2 py-1 rounded">
                            {article.category}
                          </span>
                        </div>
                      </div>
                      <CardContent className="p-6 md:col-span-2 flex flex-col justify-center">
                        <h2 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                          {article.title}
                        </h2>
                        <p className="text-muted-foreground mb-4 line-clamp-2">
                          {article.excerpt}
                        </p>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {article.date}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {article.readTime}
                          </span>
                        </div>
                        <div className="mt-4 flex items-center text-primary font-medium">
                          Read Article
                          <ArrowRight className="h-4 w-4 ml-1" />
                        </div>
                      </CardContent>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>

            {articles.length === 0 && (
              <Card>
                <CardContent className="p-12 text-center">
                  <p className="text-muted-foreground">
                    No articles yet. Check back soon for expert-researched content
                    on weight loss treatments.
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </section>

        {/* Browse Guides Section */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto max-w-4xl px-4">
            <Card className="border-primary/30 bg-primary/5">
              <CardContent className="p-6">
                <h2 className="text-xl font-bold text-foreground mb-4">
                  Looking for Quick Guides?
                </h2>
                <p className="text-muted-foreground mb-4">
                  Check out our practical guides on injection sites, timing, supplements, and more.
                </p>
                <div className="grid gap-3 sm:grid-cols-2">
                  <Link
                    href="/best-place-to-inject-semaglutide"
                    className="text-primary hover:underline"
                  >
                    → Best Place to Inject Semaglutide
                  </Link>
                  <Link
                    href="/best-time-of-day-to-take-semaglutide-for-weight-loss"
                    className="text-primary hover:underline"
                  >
                    → Best Time to Take Semaglutide
                  </Link>
                  <Link
                    href="/best-vitamins-to-take-while-on-semaglutide"
                    className="text-primary hover:underline"
                  >
                    → Best Vitamins on Semaglutide
                  </Link>
                  <Link
                    href="/best-online-semaglutide-program"
                    className="text-primary hover:underline"
                  >
                    → Best Online Semaglutide Programs
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
