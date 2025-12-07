import { Metadata } from "next";
import { notFound } from "next/navigation";
import { ReviewPage } from "@/components/sections/ReviewPage";
import { getProviderBySlug } from "@/lib/providers";

const provider = getProviderBySlug("willow");

export const metadata: Metadata = {
  title: `${provider?.name} Review 2025 - Is It Worth It? | Rx Saver Hub`,
  description: provider?.description,
};

export default function WillowReviewPage() {
  if (!provider) return notFound();
  return <ReviewPage provider={provider} />;
}
