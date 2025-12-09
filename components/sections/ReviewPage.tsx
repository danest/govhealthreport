"use client";

import Link from "next/link";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { UserReviews } from "@/components/sections/UserReviews";
import { Discussions } from "@/components/sections/Discussions";
import { Button } from "@/components/ui/button";
import { TrackedLink } from "@/components/ui/tracked-link";
import {
  Star,
  Check,
  X,
  ExternalLink,
  Crown,
  Shield,
  ArrowLeft,
  Award,
  MessageSquarePlus,
  HelpCircle,
  FileText,
  AlertTriangle,
  CheckCircle,
  Info,
  ChevronRight,
  Scale,
  Banknote,
  Users,
  Pill,
  ClipboardList,
  Truck,
  CreditCard,
  HeartPulse,
  Building2,
  Phone,
  Sparkles,
  XCircle,
} from "lucide-react";
import { Provider, UTM_PARAMS, getRatingColor } from "@/lib/providers";

interface ReviewPageProps {
  provider: Provider;
}

// Default content generators for providers without extended fields
function getDefaultMedications(provider: Provider): string[] {
  if (provider.medicationsOffered) return provider.medicationsOffered;
  return [
    "Compounded Semaglutide",
    "Compounded Tirzepatide",
    "Additional medications may be available"
  ];
}

function getDefaultHowItWorks(provider: Provider): string[] {
  if (provider.howItWorks) return provider.howItWorks;
  return [
    "Complete an online health assessment questionnaire",
    "A licensed healthcare provider reviews your information",
    "If approved, receive a personalized treatment plan",
    "Medication is shipped directly to your door",
    "Ongoing support and dose adjustments as needed"
  ];
}

function getDefaultEligibility(provider: Provider): string[] {
  if (provider.eligibilityRequirements) return provider.eligibilityRequirements;
  return [
    "BMI of 27+ with weight-related health condition, or BMI of 30+",
    "Must be 18 years or older",
    "No history of medullary thyroid cancer or MEN 2 syndrome",
    "Not currently pregnant or breastfeeding",
    "Resident of the United States"
  ];
}

function getDefaultSideEffects(provider: Provider): string[] {
  if (provider.sideEffects) return provider.sideEffects;
  return [
    "Nausea (most common, typically decreases over time)",
    "Vomiting and diarrhea",
    "Constipation",
    "Abdominal pain",
    "Injection site reactions",
    "Fatigue and headache"
  ];
}

export function ReviewPage({ provider }: ReviewPageProps) {
  const medications = getDefaultMedications(provider);
  const howItWorks = getDefaultHowItWorks(provider);
  const eligibility = getDefaultEligibility(provider);
  const sideEffects = getDefaultSideEffects(provider);

  return (
    <div className="flex min-h-screen flex-col bg-[#f5f7fa]">
      <Header />
      <main className="flex-1">
        {/* Government-Style Document Header */}
        <section className="bg-[#003366] text-white">
          <div className="container mx-auto max-w-5xl px-4 py-6">
            <Link
              href="/reviews"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-4 transition-colors text-sm"
            >
              <ArrowLeft className="h-4 w-4" />
              Return to Provider Directory
            </Link>

            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              <div>
                <div className="flex items-center gap-2 text-[#ffc72c] text-sm font-medium mb-2">
                  <FileText className="h-4 w-4" />
                  <span>PROVIDER ASSESSMENT DOCUMENT</span>
                </div>
                <h1 className="text-3xl sm:text-4xl font-bold mb-2">
                  {provider.name} Reviews
                </h1>
                <p className="text-white/80 max-w-xl">
                  {provider.tagline}
                </p>
              </div>

              {/* Rating Badge */}
              <div className="bg-white rounded-lg p-5 text-center min-w-[200px]">
                <div className="text-xs text-gray-500 uppercase tracking-wide mb-1">Overall Assessment</div>
                <div className="flex items-center justify-center gap-2">
                  <Star className="h-8 w-8 fill-[#ffc72c] text-[#ffc72c]" />
                  <span className="text-4xl font-bold text-[#003366]">{provider.rating}</span>
                  <span className="text-gray-400 text-xl">/10</span>
                </div>
                <div className={`text-sm font-semibold mt-1 ${getRatingColor(provider.rating)}`}>
                  {provider.ratingLabel}
                </div>
                {provider.rank === 1 && (
                  <div className="mt-2 inline-flex items-center gap-1 bg-[#ffc72c] text-[#003366] px-3 py-1 rounded-full text-xs font-bold">
                    <Crown className="h-3 w-3" />
                    TOP RATED
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Document Reference Bar */}
        <section className="bg-[#e8eef4] border-b-2 border-[#003366]">
          <div className="container mx-auto max-w-5xl px-4 py-3">
            <div className="flex flex-wrap items-center justify-between gap-4 text-sm">
              <div className="flex items-center gap-6">
                <span className="text-gray-600">
                  <strong className="text-[#003366]">Document #:</strong> REV-{provider.rank.toString().padStart(3, '0')}
                </span>
                <span className="text-gray-600">
                  <strong className="text-[#003366]">Status:</strong>
                  <span className="ml-1 text-green-600">● Active</span>
                </span>
              </div>
              <span className="text-gray-500">
                Last Updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
              </span>
            </div>
          </div>
        </section>

        {/* Critical Notice */}
        <section className="bg-[#a31621] text-white py-3">
          <div className="container mx-auto max-w-5xl px-4">
            <div className="flex items-center gap-3">
              <AlertTriangle className="h-5 w-5 shrink-0" />
              <p className="text-sm">
                <strong>IMPORTANT:</strong> GOV Health Report is NOT a government website. This is an independent review.
                Consult healthcare professionals before medical decisions.
              </p>
            </div>
          </div>
        </section>

        {/* Quick Actions Bar - Mobile */}
        <section className="lg:hidden bg-white border-b-2 border-[#003366] py-4">
          <div className="container mx-auto max-w-5xl px-4">
            <div className="flex items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-2xl font-bold text-[#003366]">{provider.rating}/10</span>
                  {provider.rank === 1 && (
                    <span className="bg-[#ffc72c] text-[#003366] text-xs font-bold px-2 py-0.5 rounded">#1</span>
                  )}
                </div>
                <p className="text-sm text-gray-600">{provider.pricing}</p>
              </div>
              <Button
                className="bg-[#003366] hover:bg-[#004080] gap-2"
                asChild
              >
                <TrackedLink
                  href={`${provider.url}${UTM_PARAMS}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  providerSlug={provider.slug}
                  providerName={provider.name}
                  position={provider.rank}
                  elementType="mobile_top_cta"
                >
                  Visit Site
                  <ExternalLink className="h-4 w-4" />
                </TrackedLink>
              </Button>
            </div>
          </div>
        </section>

        {/* Main Document Content */}
        <section className="py-8">
          <div className="container mx-auto max-w-5xl px-4">
            <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
              {/* Main Content */}
              <div className="space-y-8">
                {/* Executive Summary */}
                <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                  <div className="bg-gradient-to-r from-[#003366] to-[#004080] px-6 py-4">
                    <h2 className="text-lg font-bold text-white flex items-center gap-2">
                      <FileText className="h-5 w-5" />
                      Section 1: Executive Summary
                    </h2>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-700 leading-relaxed text-lg">
                      {provider.longDescription}
                    </p>
                  </div>
                </div>

                {/* Assessment Grid */}
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Strengths */}
                  <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                    <div className="bg-[#2e7d32] px-5 py-3 flex items-center justify-between">
                      <h3 className="font-bold text-white flex items-center gap-2">
                        <Check className="h-5 w-5" />
                        Documented Strengths
                      </h3>
                      <span className="bg-white/20 text-white text-xs px-2 py-1 rounded">
                        {provider.pros.length} Items
                      </span>
                    </div>
                    <div className="p-5">
                      <ul className="space-y-4">
                        {provider.pros.map((pro, index) => (
                          <li key={index} className="flex gap-3">
                            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600 text-xs font-bold">
                              {index + 1}
                            </span>
                            <span className="text-gray-700">{pro}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Limitations */}
                  <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                    <div className="bg-[#a31621] px-5 py-3 flex items-center justify-between">
                      <h3 className="font-bold text-white flex items-center gap-2">
                        <X className="h-5 w-5" />
                        Noted Limitations
                      </h3>
                      <span className="bg-white/20 text-white text-xs px-2 py-1 rounded">
                        {provider.cons.length} Items
                      </span>
                    </div>
                    <div className="p-5">
                      <ul className="space-y-4">
                        {provider.cons.map((con, index) => (
                          <li key={index} className="flex gap-3">
                            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-100 text-red-600 text-xs font-bold">
                              {index + 1}
                            </span>
                            <span className="text-gray-700">{con}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Medications Offered */}
                <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                  <div className="bg-gradient-to-r from-[#003366] to-[#004080] px-6 py-4">
                    <h2 className="text-lg font-bold text-white flex items-center gap-2">
                      <Pill className="h-5 w-5" />
                      Section 2: Medications Offered
                    </h2>
                  </div>
                  <div className="p-6">
                    <div className="grid sm:grid-cols-2 gap-3">
                      {medications.map((med, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-3 p-3 bg-[#f5f7fa] rounded-lg border-l-4 border-[#003366]"
                        >
                          <CheckCircle className="h-5 w-5 text-[#003366] shrink-0" />
                          <span className="text-gray-700 font-medium">{med}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 p-4 bg-[#fef3c7] rounded-lg flex items-start gap-3">
                      <AlertTriangle className="h-5 w-5 text-[#f59e0b] shrink-0 mt-0.5" />
                      <p className="text-sm text-[#92400e]">
                        <strong>Note:</strong> Medication availability may vary. Compounded medications are not FDA-approved.
                        Always verify current offerings directly with the provider.
                      </p>
                    </div>
                  </div>
                </div>

                {/* How It Works */}
                <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                  <div className="bg-gradient-to-r from-[#003366] to-[#004080] px-6 py-4">
                    <h2 className="text-lg font-bold text-white flex items-center gap-2">
                      <ClipboardList className="h-5 w-5" />
                      Section 3: How It Works
                    </h2>
                  </div>
                  <div className="p-6">
                    <div className="space-y-4">
                      {howItWorks.map((step, index) => (
                        <div key={index} className="flex gap-4">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#003366] text-white font-bold">
                            {index + 1}
                          </div>
                          <div className="flex-1 pt-2">
                            <p className="text-gray-700">{step}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Eligibility Requirements */}
                <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                  <div className="bg-gradient-to-r from-[#003366] to-[#004080] px-6 py-4">
                    <h2 className="text-lg font-bold text-white flex items-center gap-2">
                      <Users className="h-5 w-5" />
                      Section 4: Eligibility Requirements
                    </h2>
                  </div>
                  <div className="p-6">
                    <ul className="space-y-3">
                      {eligibility.map((req, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <ChevronRight className="h-5 w-5 text-[#003366] shrink-0 mt-0.5" />
                          <span className="text-gray-700">{req}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4 p-4 bg-[#e8eef4] rounded-lg">
                      <p className="text-sm text-[#003366]">
                        <strong>Important:</strong> Final eligibility is determined by a licensed healthcare provider after reviewing your complete medical history.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Side Effects Warning */}
                <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                  <div className="bg-[#f59e0b] px-6 py-4">
                    <h2 className="text-lg font-bold text-white flex items-center gap-2">
                      <HeartPulse className="h-5 w-5" />
                      Section 5: Potential Side Effects
                    </h2>
                  </div>
                  <div className="p-6">
                    <div className="grid sm:grid-cols-2 gap-3 mb-4">
                      {sideEffects.map((effect, index) => (
                        <div key={index} className="flex items-start gap-2">
                          <XCircle className="h-4 w-4 text-[#f59e0b] shrink-0 mt-1" />
                          <span className="text-gray-700 text-sm">{effect}</span>
                        </div>
                      ))}
                    </div>
                    <div className="p-4 bg-[#a31621] text-white rounded-lg">
                      <p className="text-sm">
                        <strong>WARNING:</strong> This is not a complete list. Serious side effects may occur.
                        Seek immediate medical attention if you experience severe symptoms.
                        Consult your healthcare provider for complete safety information.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Service Features */}
                <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                  <div className="bg-gradient-to-r from-[#003366] to-[#004080] px-6 py-4">
                    <h2 className="text-lg font-bold text-white flex items-center gap-2">
                      <CheckCircle className="h-5 w-5" />
                      Section 6: Service Features
                    </h2>
                  </div>
                  <div className="p-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      {provider.features.map((feature, index) => (
                        <div
                          key={index}
                          className="flex items-start gap-3 p-4 bg-[#f5f7fa] rounded-lg border-l-4 border-[#003366]"
                        >
                          <ChevronRight className="h-5 w-5 text-[#003366] shrink-0 mt-0.5" />
                          <span className="text-gray-700 font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Additional Information Grid */}
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Insurance & Payment */}
                  <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                    <div className="bg-[#003366] px-5 py-3">
                      <h3 className="font-bold text-white flex items-center gap-2">
                        <CreditCard className="h-5 w-5" />
                        Insurance & Payment
                      </h3>
                    </div>
                    <div className="p-5">
                      <p className="text-gray-700 text-sm">
                        {provider.insuranceInfo || "Contact provider directly for insurance and payment information. Many providers offer FSA/HSA acceptance and flexible payment options."}
                      </p>
                    </div>
                  </div>

                  {/* Shipping Info */}
                  <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                    <div className="bg-[#003366] px-5 py-3">
                      <h3 className="font-bold text-white flex items-center gap-2">
                        <Truck className="h-5 w-5" />
                        Shipping Information
                      </h3>
                    </div>
                    <div className="p-5">
                      <p className="text-gray-700 text-sm">
                        {provider.shippingInfo || "Medications are typically shipped directly to your home with temperature-controlled packaging. Delivery times vary by location."}
                      </p>
                    </div>
                  </div>

                  {/* Customer Support */}
                  <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                    <div className="bg-[#003366] px-5 py-3">
                      <h3 className="font-bold text-white flex items-center gap-2">
                        <Phone className="h-5 w-5" />
                        Customer Support
                      </h3>
                    </div>
                    <div className="p-5">
                      <p className="text-gray-700 text-sm">
                        {provider.customerSupport || "Support available via phone, email, and/or in-app messaging. Contact the provider directly for specific support hours and response times."}
                      </p>
                    </div>
                  </div>

                  {/* Cancellation */}
                  <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                    <div className="bg-[#003366] px-5 py-3">
                      <h3 className="font-bold text-white flex items-center gap-2">
                        <Shield className="h-5 w-5" />
                        Cancellation Policy
                      </h3>
                    </div>
                    <div className="p-5">
                      <p className="text-gray-700 text-sm">
                        {provider.cancellationPolicy || "Most providers allow cancellation at any time. Review specific terms and conditions on the provider's website before enrolling."}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Additional Services */}
                {provider.additionalServices && provider.additionalServices.length > 0 && (
                  <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                    <div className="bg-gradient-to-r from-[#003366] to-[#004080] px-6 py-4">
                      <h2 className="text-lg font-bold text-white flex items-center gap-2">
                        <Sparkles className="h-5 w-5" />
                        Section 7: Additional Services
                      </h2>
                    </div>
                    <div className="p-6">
                      <div className="grid sm:grid-cols-2 gap-3">
                        {provider.additionalServices.map((service, index) => (
                          <div
                            key={index}
                            className="flex items-center gap-3 p-3 bg-[#f5f7fa] rounded-lg"
                          >
                            <CheckCircle className="h-5 w-5 text-[#2e7d32] shrink-0" />
                            <span className="text-gray-700">{service}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Company Info */}
                {(provider.foundedYear || provider.headquarters) && (
                  <div className="bg-[#e8eef4] rounded-lg p-6 flex flex-wrap items-center gap-6">
                    <div className="flex items-center gap-2">
                      <Building2 className="h-5 w-5 text-[#003366]" />
                      <span className="text-gray-700">
                        <strong className="text-[#003366]">Founded:</strong> {provider.foundedYear || "N/A"}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Building2 className="h-5 w-5 text-[#003366]" />
                      <span className="text-gray-700">
                        <strong className="text-[#003366]">Headquarters:</strong> {provider.headquarters || "United States"}
                      </span>
                    </div>
                  </div>
                )}

                {/* Recommended For */}
                <div className="bg-[#ffc72c]/10 border-2 border-[#ffc72c] rounded-lg p-6">
                  <h2 className="text-lg font-bold text-[#003366] flex items-center gap-2 mb-3">
                    <Award className="h-5 w-5 text-[#ffc72c]" />
                    Assessment Recommendation
                  </h2>
                  <p className="text-gray-700 text-lg">
                    <strong>Best suited for:</strong> {provider.bestFor}
                  </p>
                </div>

                {/* Affiliate Disclosure */}
                <div className="bg-[#f59e0b]/10 border border-[#f59e0b] rounded-lg p-4 flex items-start gap-3">
                  <Info className="h-5 w-5 text-[#f59e0b] shrink-0 mt-0.5" />
                  <div className="text-sm text-gray-700">
                    <strong>Disclosure:</strong> We may earn a commission when you click links and sign up with this provider.
                    See our <Link href="/disclosure" className="text-[#003366] underline hover:no-underline">full disclosure</Link>.
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Action Card */}
                <div className="bg-white rounded-lg shadow-sm overflow-hidden sticky top-4">
                  {provider.rank === 1 && (
                    <div className="bg-[#ffc72c] text-[#003366] text-center py-2 text-sm font-bold flex items-center justify-center gap-2">
                      <Crown className="h-4 w-4" />
                      #1 RECOMMENDED PROVIDER
                    </div>
                  )}
                  <div className="p-6">
                    <div className="text-center mb-6">
                      <h3 className="text-xl font-bold text-[#003366] mb-3">{provider.name}</h3>
                      <div className="inline-flex items-center gap-2 bg-[#003366] text-white px-4 py-2 rounded-full mb-3">
                        <Star className="h-5 w-5 fill-[#ffc72c] text-[#ffc72c]" />
                        <span className="font-bold text-lg">{provider.rating}/10</span>
                      </div>
                      {provider.pricing.toLowerCase().includes("click here") ? (
                        <TrackedLink
                          href={`${provider.url}${UTM_PARAMS}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          providerSlug={provider.slug}
                          providerName={provider.name}
                          position={provider.rank}
                          elementType="pricing_link"
                          className="block text-sm text-[#003366] hover:underline font-medium"
                        >
                          {provider.pricing} →
                        </TrackedLink>
                      ) : (
                        <p className="text-gray-600">{provider.pricing}</p>
                      )}
                    </div>

                    <Button
                      size="lg"
                      className="w-full gap-2 bg-[#003366] hover:bg-[#004080] text-base h-12 mb-3"
                      asChild
                    >
                      <TrackedLink
                        href={`${provider.url}${UTM_PARAMS}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        providerSlug={provider.slug}
                        providerName={provider.name}
                        position={provider.rank}
                        elementType="sidebar_cta"
                      >
                        Visit Official Site
                        <ExternalLink className="h-4 w-4" />
                      </TrackedLink>
                    </Button>

                    <div className="text-center text-xs text-gray-500 flex items-center justify-center gap-1">
                      <Shield className="h-3 w-3" />
                      <span>FDA-approved treatments available</span>
                    </div>
                  </div>

                  {/* Quick Facts */}
                  <div className="border-t border-gray-200 px-6 py-4 bg-[#f5f7fa]">
                    <h4 className="font-bold text-[#003366] text-sm mb-3">Quick Reference</h4>
                    <div className="space-y-3 text-sm">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600 flex items-center gap-2">
                          <Scale className="h-4 w-4" />
                          Ranking
                        </span>
                        <span className="font-bold text-[#003366]">#{provider.rank}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600 flex items-center gap-2">
                          <Banknote className="h-4 w-4" />
                          Pricing
                        </span>
                        {provider.pricing.toLowerCase().includes("click here") ? (
                          <TrackedLink
                            href={`${provider.url}${UTM_PARAMS}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            providerSlug={provider.slug}
                            providerName={provider.name}
                            position={provider.rank}
                            elementType="pricing_link_stats"
                            className="font-bold text-[#003366] hover:underline"
                          >
                            View →
                          </TrackedLink>
                        ) : (
                          <span className="font-bold text-[#003366]">{provider.pricing}</span>
                        )}
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600 flex items-center gap-2">
                          <Star className="h-4 w-4" />
                          Rating
                        </span>
                        <span className={`font-bold ${getRatingColor(provider.rating)}`}>
                          {provider.ratingLabel}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Community Card */}
                <div className="bg-white rounded-lg shadow-sm p-5">
                  <h4 className="font-bold text-[#003366] mb-3 flex items-center gap-2">
                    <Users className="h-5 w-5" />
                    Community Input
                  </h4>
                  <p className="text-sm text-gray-600 mb-4">
                    Share your experience with {provider.name}
                  </p>
                  <div className="space-y-2">
                    <Button
                      className="w-full gap-2 bg-[#003366] hover:bg-[#004080]"
                      size="sm"
                      asChild
                    >
                      <a href="#user-reviews">
                        <MessageSquarePlus className="h-4 w-4" />
                        Submit Review
                      </a>
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full gap-2 border-[#003366] text-[#003366] hover:bg-[#e8eef4]"
                      size="sm"
                      asChild
                    >
                      <a href="#discussions">
                        <HelpCircle className="h-4 w-4" />
                        Ask Question
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* User Reviews Section */}
        <section id="user-reviews" className="py-8 bg-white border-t-4 border-[#ffc72c] scroll-mt-16">
          <div className="container mx-auto max-w-5xl px-4">
            <UserReviews
              providerSlug={provider.slug}
              providerName={provider.name}
            />
          </div>
        </section>

        {/* Discussions Section */}
        <section id="discussions" className="py-8 bg-[#e8eef4] scroll-mt-16">
          <div className="container mx-auto max-w-5xl px-4">
            <Discussions
              providerSlug={provider.slug}
              providerName={provider.name}
            />
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="bg-[#003366] py-10">
          <div className="container mx-auto max-w-5xl px-4 text-center">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                Proceed to {provider.name}
              </h2>
              <p className="text-white/70 mb-6">
                Assessment complete. Ready to start your consultation?
              </p>
              <Button
                size="lg"
                className="gap-2 bg-[#ffc72c] text-[#003366] hover:bg-[#e6b325] font-bold text-base h-12 px-8"
                asChild
              >
                <TrackedLink
                  href={`${provider.url}${UTM_PARAMS}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  providerSlug={provider.slug}
                  providerName={provider.name}
                  position={provider.rank}
                  elementType="bottom_cta"
                >
                  Visit {provider.name}
                  <ExternalLink className="h-5 w-5" />
                </TrackedLink>
              </Button>
              <p className="text-xs text-white/50 mt-4">
                Affiliate link — Commission may be earned on sign-ups
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
