import Link from "next/link";
import { Shield, AlertTriangle } from "lucide-react";

const footerLinks = {
  info: [
    { label: "About Us", href: "/about" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" },
    { label: "Articles", href: "/articles" },
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
    <footer className="bg-[#003366] text-white">
      {/* Government Disclaimer Banner */}
      <div className="bg-[#a31621] py-4 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-start gap-3">
            <AlertTriangle className="h-5 w-5 flex-shrink-0 mt-0.5" />
            <p className="text-sm leading-relaxed">
              <strong>Official Disclaimer:</strong> GOV Health Report is NOT an official government website.
              We are NOT affiliated with, endorsed by, or connected to any federal, state, or local government agency,
              including the FDA, HHS, CDC, or any other government entity. The &quot;GOV&quot; in our name refers to our focus
              on governance and transparency in health reporting, not government affiliation.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto max-w-6xl px-4 py-10">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white border-2 border-[#ffc72c]">
                <Shield className="h-6 w-6 text-[#003366]" />
              </div>
              <span className="text-lg font-bold">
                GOV Health Report
              </span>
            </Link>
            <p className="text-sm text-white/90 leading-relaxed">
              Independent health resource portal providing verified provider information and
              consumer assessments for weight loss treatments.
            </p>
          </div>

          {/* Info Links */}
          <div>
            <h3 className="font-semibold text-[#ffc72c] mb-4 text-sm uppercase tracking-wide">Information</h3>
            <ul className="space-y-2">
              {footerLinks.info.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/90 hover:text-[#ffc72c] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-semibold text-[#ffc72c] mb-4 text-sm uppercase tracking-wide">Legal</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/90 hover:text-[#ffc72c] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Provider Reviews */}
          <div>
            <h3 className="font-semibold text-[#ffc72c] mb-4 text-sm uppercase tracking-wide">Provider Directory</h3>
            <ul className="space-y-2">
              {footerLinks.providers.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/90 hover:text-[#ffc72c] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Guides */}
          <div>
            <h3 className="font-semibold text-[#ffc72c] mb-4 text-sm uppercase tracking-wide">Resources</h3>
            <ul className="space-y-2">
              {footerLinks.guides.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/90 hover:text-[#ffc72c] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Medical Disclaimer */}
        <div className="mt-10 p-4 bg-[#004080] rounded-lg border border-[#005599]">
          <p className="text-xs text-white/95 leading-relaxed">
            <strong className="text-[#ffc72c]">Medical Notice:</strong> The information provided on this website is for
            general informational purposes only and is not intended as medical advice. Always
            consult with a qualified healthcare provider before starting any weight loss treatment.
            Individual results may vary. This site may receive compensation from some of the
            companies whose products we review. See our <Link href="/disclosure" className="text-[#ffc72c] hover:underline">Disclosure</Link> for details.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-6 border-t border-[#004080]">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <p className="text-sm text-white/90">
              © {new Date().getFullYear()} GOV Health Report. All rights reserved. Not a government entity.
            </p>
            <div className="flex items-center gap-4">
              <Link
                href="/privacy"
                className="text-sm text-white/90 hover:text-[#ffc72c] transition-colors"
              >
                Privacy
              </Link>
              <span className="text-white/30">|</span>
              <Link
                href="/terms"
                className="text-sm text-white/90 hover:text-[#ffc72c] transition-colors"
              >
                Terms
              </Link>
              <span className="text-white/30">|</span>
              <Link
                href="/cookies"
                className="text-sm text-white/90 hover:text-[#ffc72c] transition-colors"
              >
                Cookies
              </Link>
              <span className="text-white/30">|</span>
              <Link
                href="/disclaimer"
                className="text-sm text-white/90 hover:text-[#ffc72c] transition-colors"
              >
                Disclaimer
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
