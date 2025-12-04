import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { Pill } from "lucide-react";

const footerLinks = {
  info: [
    { label: "About Us", href: "/about" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" },
  ],
  legal: [
    { label: "Disclosure", href: "/disclosure" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Medical Disclaimer", href: "/disclaimer" },
    { label: "Terms of Service", href: "/terms" },
  ],
  providers: [
    { label: "CoreAge Rx Review", href: "/reviews/coreage-rx" },
    { label: "Mochi Health Review", href: "/reviews/mochi-health" },
    { label: "Ro Review", href: "/reviews/ro" },
    { label: "Noom Review", href: "/reviews/noom" },
    { label: "Remedy Meds Review", href: "/reviews/remedy-meds" },
    { label: "Hers Review", href: "/reviews/hers" },
    { label: "MEDVI Review", href: "/reviews/medvi" },
    { label: "Eden Review", href: "/reviews/eden" },
    { label: "MyStart Review", href: "/reviews/mystart" },
    { label: "Clinic Secret Review", href: "/reviews/clinic-secret" },
    { label: "All Reviews", href: "/reviews" },
  ],
  guides: [
    { label: "Best Place to Get Tirzepatide", href: "/best-place-to-get-tirzepatide" },
    { label: "Best Online Semaglutide Program", href: "/best-online-semaglutide-program" },
    { label: "Best Online Tirzepatide Program", href: "/best-online-tirzepatide-program" },
    { label: "Best Compounding Pharmacy for Semaglutide", href: "/best-compounding-pharmacy-for-semaglutide" },
    { label: "Best Compounding Pharmacy for Tirzepatide", href: "/best-compounding-pharmacy-for-tirzepatide" },
    { label: "Best Place to Inject Semaglutide", href: "/best-place-to-inject-semaglutide" },
    { label: "Best Place to Inject Tirzepatide", href: "/best-place-to-inject-tirzepatide" },
    { label: "Best Time to Take Semaglutide", href: "/best-time-of-day-to-take-semaglutide-for-weight-loss" },
    { label: "Best Time to Take Tirzepatide", href: "/best-time-of-day-to-take-tirzepatide-for-weight-loss" },
    { label: "Best Alcohol on Semaglutide", href: "/best-alcohol-on-semaglutide" },
    { label: "Best Alcohol on Tirzepatide", href: "/best-alcohol-on-tirzepatide" },
    { label: "Vitamins for Semaglutide", href: "/best-vitamins-to-take-while-on-semaglutide" },
    { label: "Vitamins for Tirzepatide", href: "/best-vitamins-to-take-while-on-tirzepatide" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-muted/30 border-t border-border/50">
      <div className="container mx-auto max-w-6xl px-4 py-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                <Pill className="h-6 w-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">
                Rx Saver Hub
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Your trusted resource for comparing and reviewing weight loss treatments.
              We help you make informed decisions about your health journey.
            </p>
          </div>

          {/* Info Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Information</h3>
            <ul className="space-y-3">
              {footerLinks.info.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Provider Reviews */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Provider Reviews</h3>
            <ul className="space-y-3">
              {footerLinks.providers.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Guides */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Guides</h3>
            <ul className="space-y-3">
              {footerLinks.guides.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Bottom Section */}
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Rx Saver Hub. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="/privacy"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Terms
            </Link>
            <Link
              href="/cookies"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Cookies
            </Link>
          </div>
        </div>

        {/* Medical Disclaimer */}
        <div className="mt-8 p-4 bg-muted/50 rounded-lg">
          <p className="text-xs text-muted-foreground leading-relaxed">
            <strong>Medical Disclaimer:</strong> The information provided on this website is for
            general informational purposes only and is not intended as medical advice. Always
            consult with a qualified healthcare provider before starting any weight loss treatment.
            Individual results may vary. This site may receive compensation from some of the
            companies whose products we review.
          </p>
        </div>
      </div>
    </footer>
  );
}
