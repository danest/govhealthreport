import { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { Badge } from "@/components/ui/badge";
import { SchemaScript } from "@/components/SchemaScript";
import { generateCollectionPageSchema } from "@/lib/schema";
import { SITE_URL } from "@/lib/site-config";
import {
  Star,
  ArrowRight,
  ArrowLeft,
  Crown,
  ClipboardList,
  AlertTriangle,
  FileText,
  CheckCircle,
} from "lucide-react";
import { providers, getRatingColor } from "@/lib/providers";

export const metadata: Metadata = {
  title: "Provider Reviews & Assessments | GOV Health Report",
  description:
    "Official provider directory and assessment reports. Compare weight loss treatment providers with detailed reviews, ratings, and compliance documentation.",
  alternates: {
    canonical: `${SITE_URL}/reviews`,
  },
  openGraph: {
    title: "Provider Reviews & Assessments | GOV Health Report",
    description:
      "Official provider directory and assessment reports. Compare weight loss treatment providers with detailed reviews, ratings, and compliance documentation.",
    url: `${SITE_URL}/reviews`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Provider Reviews & Assessments | GOV Health Report",
    description:
      "Official provider directory and assessment reports. Compare weight loss treatment providers with detailed reviews, ratings, and compliance documentation.",
  },
};

export default function ReviewsPage() {
  const collectionSchema = generateCollectionPageSchema(
    "Provider Reviews & Assessments",
    "Official provider directory and assessment reports. Compare weight loss treatment providers with detailed reviews, ratings, and compliance documentation.",
    `${SITE_URL}/reviews`
  );

  return (
    <div className="flex min-h-screen flex-col bg-[#f5f7fa]">
      <SchemaScript schema={collectionSchema} />
      <Header />
      <main className="flex-1">
        {/* Page Header */}
        <section className="py-8 bg-white border-b-4 border-[#ffc72c]">
          <div className="container mx-auto max-w-6xl px-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-[#003366] hover:text-[#004080] mb-6 transition-colors text-sm font-medium"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>

            <div className="flex items-center gap-4 mb-4">
              <div className="flex h-12 w-12 items-center justify-center rounded bg-[#003366]">
                <ClipboardList className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-[#003366] sm:text-3xl">
                  Provider Reviews & Assessments
                </h1>
                <p className="text-sm text-gray-600">
                  Official Directory • {providers.length} Providers Documented
                </p>
              </div>
            </div>
            <div className="h-1 w-24 bg-[#ffc72c] mb-4" />
            <p className="text-gray-700 max-w-3xl">
              Comprehensive assessment reports for weight loss treatment providers.
              Review documentation includes service offerings, pricing structures, and consumer feedback analysis.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-8">
          <div className="container mx-auto max-w-6xl px-4 space-y-6">

            {/* Government Disclaimer */}
            <div className="bg-[#a31621] text-white p-4 rounded-lg">
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-5 w-5 shrink-0 mt-0.5" />
                <p className="text-sm text-white/95">
                  <strong>Notice:</strong> GOV Health Report is NOT a government website. Reviews are compiled from public sources and AI research.
                  Always verify information directly with providers and consult healthcare professionals before making medical decisions.
                </p>
              </div>
            </div>

            {/* Status Bar */}
            <div className="bg-[#003366] text-white p-4 rounded-lg flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-6 flex-wrap">
                <div className="flex items-center gap-2 text-sm">
                  <FileText className="h-4 w-4 text-[#ffc72c]" />
                  <span>{providers.length} Active Listings</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-[#ffc72c]" />
                  <span>Independently Researched</span>
                </div>
              </div>
              <span className="text-xs text-white/70">
                Last Updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long" })}
              </span>
            </div>

            {/* Reviews Grid */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {providers.map((provider) => (
                <Link
                  key={provider.slug}
                  href={`/reviews/${provider.slug}`}
                  className="block group"
                >
                  <div className={`h-full bg-white border-2 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg ${
                    provider.rank === 1
                      ? "border-[#ffc72c] ring-2 ring-[#ffc72c]/30"
                      : "border-[#003366] hover:-translate-y-1"
                  }`}>
                    {/* Header */}
                    <div className={`px-4 py-2 flex items-center justify-between ${
                      provider.rank === 1 ? "bg-[#ffc72c]" : "bg-[#003366]"
                    }`}>
                      <div className="flex items-center gap-2">
                        <span className={`text-sm font-bold ${provider.rank === 1 ? "text-[#003366]" : "text-white"}`}>
                          Assessment #{provider.rank}
                        </span>
                        {provider.rank === 1 && (
                          <Crown className="h-4 w-4 text-[#003366]" />
                        )}
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className={`h-4 w-4 ${provider.rank === 1 ? "fill-[#003366] text-[#003366]" : "fill-[#ffc72c] text-[#ffc72c]"}`} />
                        <span className={`text-sm font-bold ${provider.rank === 1 ? "text-[#003366]" : "text-white"}`}>
                          {provider.rating}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h2 className="text-lg font-bold text-[#003366] mb-1">{provider.name}</h2>
                          {provider.badge && (
                            <Badge className="bg-[#e8eef4] text-[#003366] border-[#003366] text-xs">
                              {provider.badge}
                            </Badge>
                          )}
                        </div>
                      </div>

                      <p className="text-sm text-gray-700 mb-4 leading-relaxed">
                        {provider.description}
                      </p>

                      {/* Rating Label */}
                      <div className="mb-4 p-2 bg-[#e8eef4] rounded text-center">
                        <span className={`text-sm font-medium ${getRatingColor(provider.rating)}`}>
                          Assessment Rating: {provider.ratingLabel}
                        </span>
                      </div>

                      <div className="flex items-center text-[#003366] font-medium text-sm group-hover:gap-2 transition-all">
                        <FileText className="h-4 w-4 mr-2" />
                        View Full Assessment
                        <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Information Notice */}
            <div className="bg-[#f59e0b] text-white p-4 rounded-lg">
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-5 w-5 shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium mb-1">Affiliate Disclosure</p>
                  <p className="text-sm text-white/95">
                    We may earn commissions when you click links and sign up with providers. This may influence rankings and featured placements.
                    See our <Link href="/disclosure" className="underline hover:text-white">full disclosure</Link> for details.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
