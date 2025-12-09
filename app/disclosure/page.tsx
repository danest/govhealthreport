import { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import {
  AlertTriangle,
  DollarSign,
  Link2,
  Brain,
  FileText,
  Users,
  ArrowLeft,
  Shield,
  ExternalLink,
  CheckCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Disclosure & Affiliate Information | GOV Health Report",
  description:
    "Important disclosure about our affiliate relationships, review sources, and how we generate revenue. Full transparency about our partnerships and information gathering methods.",
};

export default function DisclosurePage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#f5f7fa]">
      <Header />
      <main className="flex-1">
        {/* Page Header */}
        <section className="py-8 bg-white border-b-4 border-[#ffc72c]">
          <div className="container mx-auto max-w-4xl px-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-[#003366] hover:text-[#004080] mb-6 transition-colors text-sm font-medium"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>

            <div className="flex items-center gap-4 mb-4">
              <div className="flex h-12 w-12 items-center justify-center rounded bg-[#003366]">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-[#003366] sm:text-3xl">
                  Disclosure & Affiliate Information
                </h1>
                <p className="text-sm text-gray-600">
                  Transparency Notice • Last Updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
                </p>
              </div>
            </div>
            <div className="h-1 w-24 bg-[#ffc72c]" />
          </div>
        </section>

        {/* Content */}
        <section className="py-8">
          <div className="container mx-auto max-w-4xl px-4 space-y-6">

            {/* Critical Government Disclaimer */}
            <div className="bg-[#a31621] text-white p-6 rounded-lg">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/20">
                  <AlertTriangle className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h2 className="text-lg font-bold mb-2">
                    Important: NOT a Government Website
                  </h2>
                  <p className="leading-relaxed text-white/95">
                    GOV Health Report is <strong>NOT</strong> an official government website. We are NOT affiliated with,
                    endorsed by, or connected to any federal, state, or local government agency, including the FDA, HHS,
                    CDC, or any other government entity. The "GOV" in our name refers to our focus on governance and
                    transparency in health reporting, not government affiliation. This is a privately operated review and
                    comparison website.
                  </p>
                </div>
              </div>
            </div>

            {/* Medical Notice */}
            <div className="bg-[#f59e0b] text-white p-6 rounded-lg">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/20">
                  <AlertTriangle className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h2 className="text-lg font-bold mb-2">
                    Important: We Are NOT a Medical Website
                  </h2>
                  <p className="leading-relaxed text-white/95">
                    GOV Health Report is a <strong>review and comparison website only</strong>. We do not provide medical advice,
                    diagnoses, or treatment recommendations. We are not healthcare professionals, doctors, nurses, or
                    licensed medical practitioners. Any information on this website should not be considered medical advice.
                  </p>
                </div>
              </div>
            </div>

            {/* Affiliate Relationships */}
            <div className="bg-white border-2 border-[#003366] rounded-lg overflow-hidden">
              <div className="bg-[#003366] text-white px-4 py-3 flex items-center gap-2">
                <DollarSign className="h-5 w-5" />
                <span className="font-medium">Section 1: Affiliate Relationships & Compensation</span>
              </div>
              <div className="p-6">
                <div className="p-4 bg-[#e8eef4] rounded-lg mb-4">
                  <p className="text-[#003366] font-medium">
                    <strong>GOV Health Report may receive compensation from the companies and brands featured on this website.</strong>
                  </p>
                </div>
                <p className="text-gray-700 mb-4">
                  This compensation may come in various forms, including but not limited to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>
                    <strong>Affiliate commissions:</strong> We may earn a commission when you click on links to partner
                    websites and make a purchase or sign up for services.
                  </li>
                  <li>
                    <strong>Referral fees:</strong> We may receive a percentage of sales or a flat fee for referring
                    customers to partner companies.
                  </li>
                  <li>
                    <strong>Sponsored content:</strong> Some content may be sponsored or paid for by the brands mentioned.
                  </li>
                  <li>
                    <strong>Partnership agreements:</strong> We may have formal partnership or affiliate agreements with
                    some or all of the brands reviewed on this site.
                  </li>
                </ul>
                <div className="mt-4 p-4 bg-[#fef3c7] rounded-lg">
                  <p className="text-[#92400e] font-medium">
                    <strong>This compensation may influence:</strong> which products or services we review, the order in
                    which they appear, the ratings we assign, and the prominence given to certain brands.
                  </p>
                </div>
              </div>
            </div>

            {/* Click Tracking */}
            <div className="bg-white border-2 border-[#003366] rounded-lg overflow-hidden">
              <div className="bg-[#003366] text-white px-4 py-3 flex items-center gap-2">
                <Link2 className="h-5 w-5" />
                <span className="font-medium">Section 2: Click Tracking & Analytics</span>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-4">
                  We track clicks on outbound links to partner websites. This tracking helps us:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Understand which products and services interest our visitors</li>
                  <li>Measure the effectiveness of our content</li>
                  <li>Receive proper credit for referrals from our affiliate partners</li>
                  <li>Improve our website and recommendations</li>
                </ul>
                <p className="text-gray-700 mt-4">
                  Links to partner sites may contain tracking parameters (such as UTM tags) that identify GOV Health Report
                  as the referral source. For more information about how we handle your data, please see our{" "}
                  <Link href="/privacy" className="text-[#003366] hover:underline font-medium">
                    Privacy Policy
                  </Link>.
                </p>
              </div>
            </div>

            {/* Review Sources */}
            <div className="bg-white border-2 border-[#003366] rounded-lg overflow-hidden">
              <div className="bg-[#003366] text-white px-4 py-3 flex items-center gap-2">
                <FileText className="h-5 w-5" />
                <span className="font-medium">Section 3: How We Source Our Reviews & Information</span>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-4">
                  Our reviews and information are compiled from various publicly available sources, including:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>YouTube videos and video reviews</li>
                  <li>Television advertisements and commercials</li>
                  <li>Online articles and blog posts</li>
                  <li>Company websites and marketing materials</li>
                  <li>Social media content and user discussions</li>
                  <li>News articles and press releases</li>
                  <li>Online forums and community discussions</li>
                </ul>
              </div>
            </div>

            {/* AI Usage */}
            <div className="bg-white border-2 border-[#f59e0b] rounded-lg overflow-hidden">
              <div className="bg-[#f59e0b] text-white px-4 py-3 flex items-center gap-2">
                <Brain className="h-5 w-5" />
                <span className="font-medium">Section 4: Use of Artificial Intelligence (AI)</span>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-4">
                  <strong>We use AI tools to help gather, summarize, and present information on this website.</strong>
                  These tools include, but are not limited to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Claude (by Anthropic)</li>
                  <li>ChatGPT (by OpenAI)</li>
                  <li>Perplexity AI</li>
                  <li>Other AI-powered research and writing tools</li>
                </ul>
                <div className="mt-4 p-4 bg-[#fef3c7] rounded-lg">
                  <p className="text-[#92400e] font-medium">
                    <strong>Important:</strong> AI tools can make mistakes, hallucinate information, or provide outdated data.
                    Our content is only as accurate as the information these tools have access to, which may not
                    reflect the most current prices, features, policies, or medical information.
                  </p>
                </div>
                <p className="text-gray-700 mt-4">
                  <strong>Always verify information independently</strong> before making any decisions, especially
                  regarding your health or finances.
                </p>
              </div>
            </div>

            {/* Your Responsibility */}
            <div className="bg-white border-2 border-[#003366] rounded-lg overflow-hidden">
              <div className="bg-[#003366] text-white px-4 py-3 flex items-center gap-2">
                <Users className="h-5 w-5" />
                <span className="font-medium">Section 5: Your Responsibility</span>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-4">
                  <strong>You are solely responsible for:</strong>
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>
                    <strong>Conducting your own research</strong> using authoritative sources such as official
                    company websites, medical journals, and government health agencies.
                  </li>
                  <li>
                    <strong>Consulting with qualified healthcare professionals</strong> (doctors, pharmacists,
                    nurses, or other licensed medical practitioners) before starting any weight loss treatment
                    or medication.
                  </li>
                  <li>
                    <strong>Verifying all information</strong> presented on this website with official sources
                    before making any decisions.
                  </li>
                  <li>
                    <strong>Understanding that individual results may vary</strong> and that what works for
                    others may not work for you.
                  </li>
                  <li>
                    <strong>Making your own informed decisions</strong> about your health and finances.
                  </li>
                </ul>
              </div>
            </div>

            {/* Accuracy Disclaimer */}
            <div className="bg-white border-2 border-[#003366] rounded-lg overflow-hidden">
              <div className="bg-[#003366] text-white px-4 py-3 flex items-center gap-2">
                <CheckCircle className="h-5 w-5" />
                <span className="font-medium">Section 6: Accuracy & Currency of Information</span>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-4">
                  While we strive to provide accurate and up-to-date information, <strong>we cannot guarantee
                  the accuracy, completeness, or timeliness of any information on this website</strong>. Information
                  about products, services, pricing, availability, and medical treatments can change frequently.
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>
                    <strong>Prices, promotions, and offers</strong> displayed on this website may not reflect current
                    pricing and are subject to change without notice.
                  </li>
                  <li>
                    <strong>Medical and health information</strong> may become outdated as new research emerges.
                  </li>
                </ul>
                <div className="mt-4 p-4 bg-[#e8eef4] rounded-lg">
                  <p className="text-[#003366] font-medium">
                    Always verify current pricing directly with the service provider and consult current medical
                    literature and healthcare professionals for the most up-to-date information.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div className="bg-[#e8eef4] border border-[#003366] p-6 rounded-lg">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <h2 className="text-lg font-bold text-[#003366] mb-1">
                    Questions About This Disclosure
                  </h2>
                  <p className="text-gray-700 text-sm">
                    If you have questions about this disclosure or our affiliate relationships, please contact us.
                  </p>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-[#003366] text-white px-4 py-2 rounded font-medium hover:bg-[#004080] transition-colors"
                >
                  Contact Us
                  <ExternalLink className="h-4 w-4" />
                </Link>
              </div>
            </div>

          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
