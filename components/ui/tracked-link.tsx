"use client";

import Link from "next/link";
import { usePostHog } from "posthog-js/react";
import { usePathname } from "next/navigation";

export interface TrackedLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
  // Tracking properties
  providerSlug: string;
  providerName: string;
  position?: number;
  elementType?: "cta_button" | "card_click" | "sidebar_cta" | "bottom_cta" | "top_choice" | "pricing_link" | "pricing_link_stats" | "mobile_pricing_link" | "mobile_top_cta";
}

function getPageType(pathname: string): string {
  if (pathname === "/") return "home";
  if (pathname === "/best-weight-loss-injections") return "listicle";
  if (pathname.startsWith("/reviews/")) return "review";
  return "other";
}

export function TrackedLink({
  href,
  children,
  providerSlug,
  providerName,
  position,
  elementType = "cta_button",
  className,
  ...props
}: TrackedLinkProps) {
  const posthog = usePostHog();
  const pathname = usePathname();

  const handleClick = () => {
    posthog?.capture("outbound_click", {
      provider_slug: providerSlug,
      provider_name: providerName,
      position: position,
      element_type: elementType,
      page_type: getPageType(pathname),
      page_path: pathname,
      destination_url: href,
      site_domain: typeof window !== "undefined" ? window.location.hostname : "",
      full_url: typeof window !== "undefined" ? window.location.href : "",
    });
  };

  return (
    <Link
      href={href}
      onClick={handleClick}
      className={className}
      {...props}
    >
      {children}
    </Link>
  );
}
