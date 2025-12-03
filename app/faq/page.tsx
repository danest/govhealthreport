import { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowLeft, HelpCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "FAQ | Rx Saver Hub",
  description:
    "Frequently asked questions about weight loss treatments, GLP-1 medications, telehealth providers, and how Rx Saver Hub can help you compare options.",
};

const faqs = [
  {
    category: "About Rx Saver Hub",
    questions: [
      {
        question: "What is Rx Saver Hub?",
        answer:
          "Rx Saver Hub is a comparison and review website that helps you research weight loss treatment providers. We compile information about pricing, medications offered, and program features to help you make informed decisions. We are NOT a medical provider and do not prescribe medications or provide medical advice.",
      },
      {
        question: "Is Rx Saver Hub a medical provider?",
        answer:
          "No. Rx Saver Hub is strictly a review and comparison website. We do not provide medical advice, prescribe medications, or replace consultations with healthcare professionals. Always consult with a qualified healthcare provider before starting any weight loss treatment.",
      },
      {
        question: "How does Rx Saver Hub make money?",
        answer:
          "We may earn affiliate commissions when you click on links to providers featured on our site and sign up for their services. This compensation may influence which providers we feature. For full details, please see our Disclosure page.",
      },
      {
        question: "How do you research and review providers?",
        answer:
          "We compile information from public sources including company websites, user reviews, articles, and videos. We also use AI tools to help research and organize information. Our community contributes ratings, reviews, and discussions. For full details on our methodology, see our Disclosure page.",
      },
    ],
  },
  {
    category: "Weight Loss Treatments",
    questions: [
      {
        question: "What are GLP-1 medications?",
        answer:
          "GLP-1 (glucagon-like peptide-1) medications are a class of drugs originally developed for type 2 diabetes that have been found to promote significant weight loss. They work by mimicking a hormone that regulates appetite and blood sugar. Common GLP-1 medications include semaglutide (Ozempic, Wegovy) and tirzepatide (Mounjaro, Zepbound).",
      },
      {
        question: "What is the difference between semaglutide and tirzepatide?",
        answer:
          "Semaglutide (found in Ozempic and Wegovy) is a GLP-1 receptor agonist. Tirzepatide (found in Mounjaro and Zepbound) is a dual GIP/GLP-1 receptor agonist, meaning it targets two hormones instead of one. Clinical trials have shown tirzepatide may produce greater weight loss on average, but individual results vary. Your healthcare provider can help determine which is right for you.",
      },
      {
        question: "What are compounded medications?",
        answer:
          "Compounded medications are custom-made by compounding pharmacies. Some telehealth providers offer compounded versions of semaglutide or tirzepatide, which may be less expensive than brand-name medications. However, compounded medications are not FDA-approved and may have different quality controls. Discuss the pros and cons with your healthcare provider.",
      },
      {
        question: "How much do weight loss treatments cost?",
        answer:
          "Costs vary significantly by provider and medication. Brand-name GLP-1 medications can cost $1,000+ per month without insurance. Telehealth programs with compounded medications typically range from $150-500 per month. Many providers offer subscription plans that include medication, consultations, and support. Check our provider reviews for current pricing information.",
      },
      {
        question: "Are weight loss medications safe?",
        answer:
          "GLP-1 medications have been extensively studied and are FDA-approved for weight management when prescribed appropriately. However, they can have side effects and are not suitable for everyone. Common side effects include nausea, vomiting, and digestive issues. Serious side effects are rare but possible. Only a qualified healthcare provider can determine if these medications are safe and appropriate for you.",
      },
    ],
  },
  {
    category: "Telehealth Providers",
    questions: [
      {
        question: "How do telehealth weight loss programs work?",
        answer:
          "Most telehealth weight loss programs follow a similar process: you complete an online health assessment, have a virtual consultation with a licensed healthcare provider, and if approved, receive medication delivered to your home. Many programs also include ongoing support, check-ins, and lifestyle coaching.",
      },
      {
        question: "Are telehealth prescriptions legitimate?",
        answer:
          "Yes, telehealth providers employ licensed healthcare professionals who can legally prescribe medications in the states where they practice. However, the quality and thoroughness of care can vary between providers. Look for programs that require comprehensive health assessments and ongoing monitoring.",
      },
      {
        question: "How do I choose the right provider?",
        answer:
          "Consider factors like: the medications offered, pricing and what's included, the consultation process, ongoing support and monitoring, user reviews and ratings, and whether they accept insurance. Our comparison pages can help you evaluate different options, but always do your own research and consult with your healthcare provider.",
      },
      {
        question: "Can I use insurance with telehealth weight loss programs?",
        answer:
          "Some telehealth providers accept insurance, while others are cash-pay only. Insurance coverage for weight loss medications varies widely by plan. Even if a provider doesn't accept insurance directly, you may be able to submit claims for reimbursement. Check with both the provider and your insurance company for specific coverage details.",
      },
    ],
  },
  {
    category: "Using Our Site",
    questions: [
      {
        question: "How current is the information on your site?",
        answer:
          "We work to keep our information current, but pricing, medications offered, and program details change frequently. Always verify current pricing and offerings directly with providers before making decisions. If you notice outdated information, please let us know through our Contact page.",
      },
      {
        question: "Can I leave a review on Rx Saver Hub?",
        answer:
          "Yes! We encourage users to share their experiences with different providers. You can leave ratings and reviews on individual provider pages. Your feedback helps others make informed decisions and helps us improve our content.",
      },
      {
        question: "How do I contact Rx Saver Hub?",
        answer:
          "You can reach us through our Contact page. We welcome questions, feedback, suggestions, and corrections to our content. Please note that we cannot provide medical advice or help with issues related to specific providers—you'll need to contact them directly.",
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-8 bg-gradient-to-br from-warm-50 via-background to-warm-100/30">
          <div className="container mx-auto max-w-4xl px-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-6 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>

            <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
              Frequently Asked <span className="text-primary">Questions</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Find answers to common questions about weight loss treatments,
              telehealth providers, and how Rx Saver Hub can help.
            </p>
          </div>
        </section>

        <section className="py-8">
          <div className="container mx-auto max-w-4xl px-4 space-y-8">
            {faqs.map((category, categoryIndex) => (
              <Card key={categoryIndex}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <HelpCircle className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-xl font-bold text-foreground mb-4">
                        {category.category}
                      </h2>
                      <Accordion type="single" collapsible className="w-full">
                        {category.questions.map((faq, faqIndex) => (
                          <AccordionItem
                            key={faqIndex}
                            value={`${categoryIndex}-${faqIndex}`}
                          >
                            <AccordionTrigger className="text-left font-medium text-foreground">
                              {faq.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-muted-foreground leading-relaxed">
                              {faq.answer}
                            </AccordionContent>
                          </AccordionItem>
                        ))}
                      </Accordion>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Still Have Questions */}
            <Card className="border-primary/30 bg-primary/5">
              <CardContent className="p-6">
                <div className="text-center">
                  <h2 className="text-xl font-bold text-foreground mb-2">
                    Still Have Questions?
                  </h2>
                  <p className="text-muted-foreground mb-4">
                    Can&apos;t find what you&apos;re looking for? We&apos;re
                    here to help.
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90 transition-colors"
                  >
                    Contact Us
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
