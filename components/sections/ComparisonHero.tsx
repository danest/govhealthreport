import { Zap, Truck, Tag, FileText, Calendar, AlertTriangle, Scale } from "lucide-react";

const features = [
  { icon: Zap, label: "Fast Approval" },
  { icon: Truck, label: "Free Shipping" },
  { icon: Tag, label: "Exclusive Coupons" },
  { icon: FileText, label: "Online Prescription" },
];

export function ComparisonHero() {
  const today = new Date();
  const formattedDate = today.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      {/* Government-style Page Header */}
      <section className="py-8 bg-white border-b-4 border-[#ffc72c]">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="flex items-center gap-4 mb-4">
            <div className="flex h-12 w-12 items-center justify-center rounded bg-[#003366]">
              <Scale className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-[#003366] sm:text-3xl md:text-4xl">
                Best Weight Loss Injections
              </h1>
              <p className="text-sm text-gray-600">
                Provider Comparison Guide
              </p>
            </div>
          </div>
          <div className="h-1 w-24 bg-[#ffc72c]" />
        </div>
      </section>

      {/* Document Information Bar */}
      <section className="bg-[#003366] text-white py-3">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-sm">
              <Calendar className="h-4 w-4 text-[#ffc72c]" />
              <span>Updated: {formattedDate}</span>
            </div>
            <div className="flex flex-wrap gap-4">
              {features.map((feature) => (
                <div
                  key={feature.label}
                  className="flex items-center gap-2 text-sm"
                >
                  <feature.icon className="h-4 w-4 text-[#ffc72c]" />
                  <span>{feature.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Government Disclaimer Banner */}
      <section className="bg-[#a31621] text-white py-3">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="flex items-center gap-3">
            <AlertTriangle className="h-5 w-5 flex-shrink-0" />
            <p className="text-sm">
              <strong>Notice:</strong> This is NOT a government website. GOV Health Report is an independent review site. Always consult a healthcare provider before starting any treatment.
            </p>
          </div>
        </div>
      </section>

      {/* Subtitle Section */}
      <section className="py-8 bg-[#f5f7fa]">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="bg-white border-2 border-[#003366] rounded-lg p-6">
            <p className="text-gray-700 text-lg leading-relaxed">
              Find the best weight loss solution for your needs by comparing leading
              brands offering Semaglutide and Tirzepatide injections, complete with
              tailored programs, affordable options, and professional medical support
              every step of the way.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
