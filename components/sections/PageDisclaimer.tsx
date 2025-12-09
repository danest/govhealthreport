import { AlertTriangle, Shield } from "lucide-react";

export function PageDisclaimer() {
  return (
    <section className="py-8 bg-[#f5f7fa]">
      <div className="container mx-auto max-w-6xl px-4 space-y-4">
        {/* Government Notice */}
        <div className="bg-[#a31621] text-white p-6 rounded-lg">
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/20">
              <AlertTriangle className="h-5 w-5 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-bold mb-2">Important: NOT a Government Website</h3>
              <p className="leading-relaxed text-white/95">
                GOV Health Report is <strong>NOT</strong> an official government website. We are NOT affiliated with,
                endorsed by, or connected to any federal, state, or local government agency. This is a privately
                operated review and comparison website.
              </p>
            </div>
          </div>
        </div>

        {/* Medical Disclaimer */}
        <div className="bg-[#f59e0b] text-white p-6 rounded-lg">
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/20">
              <Shield className="h-5 w-5 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-bold mb-2">Important Notice</h3>
              <ul className="space-y-2 text-white/95">
                <li>
                  • Medications should not be purchased online without valid prescriptions
                  from licensed healthcare providers
                </li>
                <li>
                  • Efficacy claims must be based on clinical data and individual patient
                  assessments
                </li>
                <li>
                  • Prioritize safety, compliance, and transparency in healthcare services
                </li>
                <li>
                  • Always consult with a qualified healthcare provider before starting any treatment
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Content Notice */}
        <div className="bg-[#e8eef4] border border-[#003366] p-4 rounded-lg">
          <p className="text-sm text-[#003366]">
            <strong>Content Notice:</strong> Information on this page is compiled from publicly available sources and may be AI-assisted.
            Always verify information with official sources and consult healthcare professionals for medical decisions.
          </p>
        </div>
      </div>
    </section>
  );
}
