import { Metadata } from "next";
import { notFound } from "next/navigation";
import { ReviewPage } from "@/components/sections/ReviewPage";
import { getProviderBySlug } from "@/lib/providers";

const provider = getProviderBySlug("ro");

export const metadata: Metadata = {
  title: `${provider?.name} Review 2024 - Is It Worth It? | Rx Saver Hub`,
  description: provider?.description,
};

export default function RoReviewPage() {
  if (!provider) return notFound();
  return <ReviewPage provider={provider} />;
}
