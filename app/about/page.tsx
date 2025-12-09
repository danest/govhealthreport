import { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import {
  ArrowLeft,
  Target,
  Users,
  Search,
  Scale,
  Heart,
  AlertTriangle,
  BookOpen,
  MessageCircle,
  Shield,
  ExternalLink,
  Building,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | GOV Health Report",
  description:
    "Learn about GOV Health Report - your trusted resource for comparing weight loss treatments. We help you research and compare options so you can make informed decisions.",
};

export default function AboutPage() {
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
                <Building className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-[#003366] sm:text-3xl">
                  About GOV Health Report
                </h1>
                <p className="text-sm text-gray-600">
                  Organization Information & Mission Statement
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
                    transparency in health reporting, not government affiliation.
                  </p>
                </div>
              </div>
            </div>

            {/* Mission */}
            <div className="bg-white border-2 border-[#003366] rounded-lg overflow-hidden">
              <div className="bg-[#003366] text-white px-4 py-3 flex items-center gap-2">
                <Target className="h-5 w-5" />
                <span className="font-medium">Our Mission</span>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-4">
                  At GOV Health Report, we believe everyone deserves access to clear, honest information
                  about weight loss treatments. With so many options available today—from GLP-1 medications
                  to telehealth programs—it can be overwhelming to understand what's out there and how
                  different providers compare.
                </p>
                <div className="p-4 bg-[#e8eef4] rounded-lg">
                  <p className="text-[#003366] font-medium">
                    <strong>Our mission is simple:</strong> to help you research and compare weight loss
                    treatment providers so you can have better conversations with your healthcare provider
                    and make more informed decisions about your health journey.
                  </p>
                </div>
              </div>
            </div>

            {/* What We Do */}
            <div className="bg-white border-2 border-[#003366] rounded-lg overflow-hidden">
              <div className="bg-[#003366] text-white px-4 py-3 flex items-center gap-2">
                <Search className="h-5 w-5" />
                <span className="font-medium">What We Do</span>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-4">
                  We research and compile information about weight loss treatment providers, including:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>
                    <strong>Provider comparisons:</strong> Side-by-side breakdowns of pricing,
                    medications offered, and program features
                  </li>
                  <li>
                    <strong>Detailed reviews:</strong> In-depth looks at individual providers,
                    covering how they work, what they cost, and what to expect
                  </li>
                  <li>
                    <strong>Educational content:</strong> Information about different treatment
                    types, medications, and what questions to ask your doctor
                  </li>
                  <li>
                    <strong>User experiences:</strong> A platform for real people to share their
                    experiences and ask questions
                  </li>
                </ul>
              </div>
            </div>

            {/* Medical Notice */}
            <div className="bg-white border-2 border-[#f59e0b] rounded-lg overflow-hidden">
              <div className="bg-[#f59e0b] text-white px-4 py-3 flex items-center gap-2">
                <AlertTriangle className="h-5 w-5" />
                <span className="font-medium">Important: We Are NOT a Medical Provider</span>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-4">
                  <strong>GOV Health Report is a review and comparison website only.</strong> We are not
                  doctors, nurses, pharmacists, or licensed healthcare providers. We do not:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Provide medical advice or diagnoses</li>
                  <li>Prescribe or recommend specific medications</li>
                  <li>Replace consultations with healthcare professionals</li>
                  <li>Guarantee the accuracy of any medical information</li>
                </ul>
                <div className="mt-4 p-4 bg-[#fef3c7] rounded-lg">
                  <p className="text-[#92400e] font-medium">
                    <strong>Always consult with a qualified healthcare provider</strong> before starting
                    any weight loss treatment or medication. The information on this site is for research
                    purposes only.
                  </p>
                </div>
              </div>
            </div>

            {/* Who We Serve */}
            <div className="bg-white border-2 border-[#003366] rounded-lg overflow-hidden">
              <div className="bg-[#003366] text-white px-4 py-3 flex items-center gap-2">
                <Users className="h-5 w-5" />
                <span className="font-medium">Who We're Here For</span>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-4">
                  GOV Health Report is designed for people who are:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>
                    Researching weight loss treatment options and want to understand what's available
                  </li>
                  <li>
                    Comparing different telehealth providers and their pricing
                  </li>
                  <li>
                    Looking for information to discuss with their doctor or healthcare provider
                  </li>
                  <li>
                    Seeking real user experiences and community feedback about different programs
                  </li>
                </ul>
              </div>
            </div>

            {/* Our Approach */}
            <div className="bg-white border-2 border-[#003366] rounded-lg overflow-hidden">
              <div className="bg-[#003366] text-white px-4 py-3 flex items-center gap-2">
                <Scale className="h-5 w-5" />
                <span className="font-medium">Our Approach to Reviews</span>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-4">
                  We strive to be transparent about how we gather and present information:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>
                    <strong>Research-based:</strong> We compile information from public sources
                    including company websites, user reviews, articles, and videos
                  </li>
                  <li>
                    <strong>AI-assisted:</strong> We use AI tools like Claude, ChatGPT, and Perplexity
                    to help research and organize information
                  </li>
                  <li>
                    <strong>User contributions:</strong> We include ratings, reviews, and discussions
                    from our community
                  </li>
                  <li>
                    <strong>Regular updates:</strong> We work to keep our information current, though
                    pricing and offerings change frequently
                  </li>
                </ul>
                <p className="text-gray-700 mt-4">
                  For full details on our methodology and potential biases, please read our{" "}
                  <Link href="/disclosure" className="text-[#003366] hover:underline font-medium">
                    Disclosure Page
                  </Link>.
                </p>
              </div>
            </div>

            {/* How We Make Money */}
            <div className="bg-white border-2 border-[#003366] rounded-lg overflow-hidden">
              <div className="bg-[#003366] text-white px-4 py-3 flex items-center gap-2">
                <Heart className="h-5 w-5" />
                <span className="font-medium">How We Make Money</span>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-4">
                  <strong>We believe in full transparency.</strong> GOV Health Report may earn money when
                  you click on links to providers featured on our site. This includes:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Affiliate commissions from partner companies</li>
                  <li>Referral fees when you sign up for services</li>
                  <li>Partnership and sponsorship arrangements</li>
                </ul>
                <p className="text-gray-700 mt-4">
                  This compensation may influence which providers we feature and how prominently they
                  appear. However, we strive to provide accurate information regardless of partnerships.
                  For complete details, see our{" "}
                  <Link href="/disclosure" className="text-[#003366] hover:underline font-medium">
                    Disclosure Page
                  </Link>.
                </p>
              </div>
            </div>

            {/* Learn More */}
            <div className="bg-white border-2 border-[#003366] rounded-lg overflow-hidden">
              <div className="bg-[#003366] text-white px-4 py-3 flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                <span className="font-medium">Learn More</span>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-4">
                  For more information about how we operate, please review:
                </p>
                <div className="grid gap-3 sm:grid-cols-2">
                  <Link
                    href="/disclosure"
                    className="flex items-center gap-2 p-3 bg-[#e8eef4] rounded-lg text-[#003366] font-medium hover:bg-[#d1d9e6] transition-colors"
                  >
                    <Shield className="h-5 w-5" />
                    <span>Disclosure & Affiliate Info</span>
                  </Link>
                  <Link
                    href="/disclaimer"
                    className="flex items-center gap-2 p-3 bg-[#e8eef4] rounded-lg text-[#003366] font-medium hover:bg-[#d1d9e6] transition-colors"
                  >
                    <AlertTriangle className="h-5 w-5" />
                    <span>Medical Disclaimer</span>
                  </Link>
                  <Link
                    href="/privacy"
                    className="flex items-center gap-2 p-3 bg-[#e8eef4] rounded-lg text-[#003366] font-medium hover:bg-[#d1d9e6] transition-colors"
                  >
                    <Shield className="h-5 w-5" />
                    <span>Privacy Policy</span>
                  </Link>
                  <Link
                    href="/terms"
                    className="flex items-center gap-2 p-3 bg-[#e8eef4] rounded-lg text-[#003366] font-medium hover:bg-[#d1d9e6] transition-colors"
                  >
                    <BookOpen className="h-5 w-5" />
                    <span>Terms of Service</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div className="bg-[#e8eef4] border border-[#003366] p-6 rounded-lg">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-start gap-3">
                  <MessageCircle className="h-6 w-6 text-[#003366] flex-shrink-0" />
                  <div>
                    <h2 className="text-lg font-bold text-[#003366] mb-1">
                      Get in Touch
                    </h2>
                    <p className="text-gray-700 text-sm">
                      Have questions, feedback, or suggestions? We'd love to hear from you.
                    </p>
                  </div>
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
