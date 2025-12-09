import { Card, CardContent } from "@/components/ui/card";
import { Search, FileText, CheckCircle, ClipboardList } from "lucide-react";

const features = [
  {
    icon: Search,
    title: "Research",
    description:
      "Access consolidated provider information in one official resource. Independent assessments of licensed treatment providers.",
  },
  {
    icon: FileText,
    title: "Verify",
    description:
      "Comprehensive documentation of each provider's credentials, compliance status, and treatment protocols.",
  },
  {
    icon: CheckCircle,
    title: "Proceed",
    description:
      "Make informed decisions backed by verified data and transparent reporting standards.",
  },
];

export function ValueProposition() {
  return (
    <section className="py-12 bg-white border-y border-[#d1d9e0]">
      <div className="container mx-auto max-w-6xl px-4">
        {/* Government-style Section Header */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-10 w-10 items-center justify-center rounded bg-[#003366]">
              <ClipboardList className="h-5 w-5 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-[#003366] sm:text-3xl">
                Consumer Health Resource Center
              </h2>
              <p className="text-sm text-gray-600">
                Public Information Services
              </p>
            </div>
          </div>
          <div className="h-1 w-24 bg-[#ffc72c] mb-4" />
          <p className="text-gray-600 max-w-2xl">
            Access verified information to support informed healthcare decisions.
            Independent assessments. Transparent reporting.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid gap-0 md:grid-cols-3 border-2 border-[#003366]">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`relative bg-white p-6 ${
                index < features.length - 1 ? "md:border-r-2 md:border-[#003366]" : ""
              } ${index < features.length - 1 ? "border-b-2 md:border-b-0 border-[#003366]" : ""}`}
            >
              {/* Step Number */}
              <div className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full bg-[#003366] text-white text-sm font-bold">
                {index + 1}
              </div>

              {/* Icon */}
              <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded bg-[#e8eef4] border border-[#003366]">
                <feature.icon className="h-7 w-7 text-[#003366]" />
              </div>

              {/* Content */}
              <h3 className="mb-2 text-lg font-bold text-[#003366] uppercase tracking-wide">
                Step {index + 1}: {feature.title}
              </h3>
              <p className="text-gray-700 leading-relaxed text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Information Notice */}
        <div className="mt-6 p-4 bg-[#003366] rounded-b-lg flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-2 text-sm text-white">
            <CheckCircle className="h-4 w-4 text-[#ffc72c]" />
            <span>All information independently verified</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-white">
            <FileText className="h-4 w-4 text-[#ffc72c]" />
            <span>Updated regularly for accuracy</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-white">
            <Search className="h-4 w-4 text-[#ffc72c]" />
            <span>Free public access</span>
          </div>
        </div>
      </div>
    </section>
  );
}
