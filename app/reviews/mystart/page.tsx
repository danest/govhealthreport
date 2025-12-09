import { Metadata } from "next";
import { notFound } from "next/navigation";
import { ReviewPage } from "@/components/sections/ReviewPage";
import { getProviderBySlug } from "@/lib/providers";

const provider = getProviderBySlug("mystart");

export const metadata: Metadata = {
  title: `${provider?.name} Reviews 2025 - Provider Assessment | GOV Health Report`,
  description: provider?.description,
};

export default function MyStartReviewPage() {
  if (!provider) return notFound();
  return <ReviewPage provider={provider} />;
}
