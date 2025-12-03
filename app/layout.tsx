import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { PostHogProvider } from "@/components/providers/PostHogProvider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rx Saver Hub - Compare Weight Loss Treatments",
  description:
    "Review the leading brands in weight loss solutions. Compare effectiveness, safety profiles, approved uses, pricing, and more. Find the best weight loss treatment for you.",
  keywords: [
    "weight loss",
    "weight loss treatments",
    "GLP-1",
    "semaglutide",
    "tirzepatide",
    "Ozempic",
    "Wegovy",
    "weight loss injections",
    "telehealth weight loss",
  ],
  openGraph: {
    title: "Rx Saver Hub - Compare Weight Loss Treatments",
    description:
      "Review the leading brands in weight loss solutions. Compare effectiveness, safety profiles, approved uses, pricing, and more.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <PostHogProvider>
          {children}
        </PostHogProvider>
      </body>
    </html>
  );
}
