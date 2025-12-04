"use client";

import Link from "next/link";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { UserReviews } from "@/components/sections/UserReviews";
import { Discussions } from "@/components/sections/Discussions";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TrackedLink } from "@/components/ui/tracked-link";
import {
  Star,
  Check,
  X,
  ExternalLink,
  Crown,
  Shield,
  ArrowLeft,
  Award,
  MessageSquarePlus,
  HelpCircle
} from "lucide-react";
import { Provider, UTM_PARAMS, getRatingColor } from "@/lib/providers";

interface ReviewPageProps {
  provider: Provider;
}

export function ReviewPage({ provider }: ReviewPageProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-warm-50 via-background to-warm-100/30 py-8 md:py-10">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
            <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-warm-200/30 blur-3xl" />
          </div>

          <div className="container relative mx-auto max-w-4xl px-4">
            <Link
              href="/reviews"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-6 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to All Reviews
            </Link>

            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-muted-foreground font-medium">#{provider.rank}</span>
                  {provider.badge && (
                    <Badge className={provider.badgeColor}>{provider.badge}</Badge>
                  )}
                  {provider.rank === 1 && (
                    <Crown className="h-5 w-5 text-primary" />
                  )}
                </div>
                <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl mb-2">
                  {provider.name} <span className="text-primary">Review</span>
                </h1>
                <p className="text-lg text-muted-foreground">
                  {provider.tagline}
                </p>
              </div>

              <div className="flex flex-col items-center bg-card rounded-xl p-4 sm:p-6 shadow-lg border border-border/50 w-full sm:w-auto">
                <div className="flex items-center gap-2 mb-1">
                  <Star className="h-6 w-6 sm:h-8 sm:w-8 fill-yellow-400 text-yellow-400" />
                  <span className={`text-3xl sm:text-4xl font-bold ${getRatingColor(provider.rating)}`}>
                    {provider.rating}
                  </span>
                  <span className="text-muted-foreground">/10</span>
                </div>
                <span className={`font-medium ${getRatingColor(provider.rating)}`}>
                  {provider.ratingLabel}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Mobile CTA - Shows only on mobile at top */}
        <section className="lg:hidden py-4 bg-background border-b">
          <div className="container mx-auto max-w-4xl px-4">
            <Card className={`${provider.rank === 1 ? 'border-primary ring-2 ring-primary/20' : ''}`}>
              <CardContent className="p-4">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className={`font-bold ${getRatingColor(provider.rating)}`}>
                        {provider.rating}/10
                      </span>
                      {provider.rank === 1 && (
                        <Badge className="bg-primary text-primary-foreground text-xs">#1</Badge>
                      )}
                    </div>
                    {provider.pricing.toLowerCase().includes("click here") ? (
                      <TrackedLink
                        href={`${provider.url}${UTM_PARAMS}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        providerSlug={provider.slug}
                        providerName={provider.name}
                        position={provider.rank}
                        elementType="mobile_pricing_link"
                        className="text-sm text-primary hover:underline font-medium"
                      >
                        {provider.pricing} →
                      </TrackedLink>
                    ) : (
                      <p className="text-sm text-muted-foreground">{provider.pricing}</p>
                    )}
                  </div>
                  <Button
                    size="default"
                    className="gap-2 cursor-pointer shrink-0"
                    asChild
                  >
                    <TrackedLink
                      href={`${provider.url}${UTM_PARAMS}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      providerSlug={provider.slug}
                      providerName={provider.name}
                      position={provider.rank}
                      elementType="mobile_top_cta"
                    >
                      Visit Site
                      <ExternalLink className="h-4 w-4" />
                    </TrackedLink>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-6 sm:py-8 bg-background">
          <div className="container mx-auto max-w-4xl px-4">
            <div className="grid gap-6 sm:gap-8 lg:grid-cols-3">
              {/* Main Review Content */}
              <div className="lg:col-span-2 space-y-6 sm:space-y-8">
                {/* Overview */}
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold text-foreground mb-4">Overview</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      {provider.longDescription}
                    </p>
                  </CardContent>
                </Card>

                {/* Pros and Cons */}
                <div className="grid gap-6 md:grid-cols-2">
                  <Card className="border-emerald-500/30">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                        <Check className="h-5 w-5 text-emerald-500" />
                        Pros
                      </h3>
                      <ul className="space-y-3">
                        {provider.pros.map((pro, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <Check className="h-4 w-4 text-emerald-500 shrink-0 mt-1" />
                            <span className="text-sm text-muted-foreground">{pro}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="border-red-500/30">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                        <X className="h-5 w-5 text-red-500" />
                        Cons
                      </h3>
                      <ul className="space-y-3">
                        {provider.cons.map((con, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <X className="h-4 w-4 text-red-500 shrink-0 mt-1" />
                            <span className="text-sm text-muted-foreground">{con}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                {/* Key Features */}
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold text-foreground mb-4">Key Features</h2>
                    <div className="grid gap-3 sm:grid-cols-2">
                      {provider.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                          <Check className="h-5 w-5 text-primary shrink-0" />
                          <span className="text-sm font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Best For */}
                <Card className="border-primary/30 bg-primary/5">
                  <CardContent className="p-6">
                    <h2 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
                      <Award className="h-5 w-5 text-primary" />
                      Best For
                    </h2>
                    <p className="text-muted-foreground">
                      {provider.bestFor}
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* CTA Card */}
                <Card className={`sticky top-20 ${provider.rank === 1 ? 'border-primary ring-2 ring-primary/20' : ''}`}>
                  {provider.rank === 1 && (
                    <div className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground text-center py-2 text-sm font-semibold">
                      #1 Recommended
                    </div>
                  )}
                  <CardContent className="p-6">
                    <div className="text-center mb-6">
                      <h3 className="text-xl font-bold text-foreground mb-2">{provider.name}</h3>
                      <div className="flex items-center justify-center gap-1 mb-2">
                        <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                        <span className={`font-bold ${getRatingColor(provider.rating)}`}>
                          {provider.rating}/10
                        </span>
                      </div>
                      {provider.pricing.toLowerCase().includes("click here") ? (
                        <TrackedLink
                          href={`${provider.url}${UTM_PARAMS}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          providerSlug={provider.slug}
                          providerName={provider.name}
                          position={provider.rank}
                          elementType="pricing_link"
                          className="text-sm text-primary hover:underline font-medium"
                        >
                          {provider.pricing} →
                        </TrackedLink>
                      ) : (
                        <p className="text-sm text-muted-foreground">{provider.pricing}</p>
                      )}
                    </div>

                    <Button
                      size="lg"
                      className="w-full gap-2 cursor-pointer mb-4"
                      asChild
                    >
                      <TrackedLink
                        href={`${provider.url}${UTM_PARAMS}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        providerSlug={provider.slug}
                        providerName={provider.name}
                        position={provider.rank}
                        elementType="sidebar_cta"
                      >
                        Visit {provider.name}
                        <ExternalLink className="h-4 w-4" />
                      </TrackedLink>
                    </Button>

                    <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
                      <Shield className="h-3 w-3" />
                      <span>FDA-approved treatments</span>
                    </div>
                  </CardContent>
                </Card>

                {/* Quick Stats */}
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-bold text-foreground mb-4">Quick Stats</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Rank</span>
                        <span className="font-medium">#{provider.rank} of 10</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Rating</span>
                        <span className={`font-medium ${getRatingColor(provider.rating)}`}>
                          {provider.rating}/10
                        </span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Pricing</span>
                        {provider.pricing.toLowerCase().includes("click here") ? (
                          <TrackedLink
                            href={`${provider.url}${UTM_PARAMS}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            providerSlug={provider.slug}
                            providerName={provider.name}
                            position={provider.rank}
                            elementType="pricing_link_stats"
                            className="font-medium text-primary hover:underline"
                          >
                            Best pricing →
                          </TrackedLink>
                        ) : (
                          <span className="font-medium">{provider.pricing}</span>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Community Feedback Card */}
                <Card className="border-primary/20 bg-primary/5">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-foreground mb-2">Share Your Experience</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Help others by sharing your experience with {provider.name}
                    </p>
                    <div className="space-y-2">
                      <Button
                        variant="default"
                        className="w-full gap-2"
                        asChild
                      >
                        <a href="#user-reviews">
                          <MessageSquarePlus className="h-4 w-4" />
                          Write a Review
                        </a>
                      </Button>
                      <Button
                        variant="outline"
                        className="w-full gap-2"
                        asChild
                      >
                        <a href="#discussions">
                          <HelpCircle className="h-4 w-4" />
                          Ask a Question
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* User Reviews Section */}
        <section id="user-reviews" className="py-8 bg-background border-t scroll-mt-16">
          <div className="container mx-auto max-w-4xl px-4">
            <UserReviews
              providerSlug={provider.slug}
              providerName={provider.name}
            />
          </div>
        </section>

        {/* Discussions Section */}
        <section id="discussions" className="py-8 bg-muted/30 scroll-mt-16">
          <div className="container mx-auto max-w-4xl px-4">
            <Discussions
              providerSlug={provider.slug}
              providerName={provider.name}
            />
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-8 bg-gradient-to-br from-primary/10 via-background to-warm-100/30">
          <div className="container mx-auto max-w-4xl px-4 text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Ready to Get Started with {provider.name}?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Join thousands of others who have started their weight loss journey with {provider.name}.
            </p>
            <Button
              size="lg"
              className="gap-2 cursor-pointer"
              asChild
            >
              <TrackedLink
                href={`${provider.url}${UTM_PARAMS}`}
                target="_blank"
                rel="noopener noreferrer"
                providerSlug={provider.slug}
                providerName={provider.name}
                position={provider.rank}
                elementType="bottom_cta"
              >
                Visit {provider.name}
                <ExternalLink className="h-4 w-4" />
              </TrackedLink>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
