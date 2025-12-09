"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X, Shield, AlertTriangle } from "lucide-react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Reviews", href: "/reviews" },
  { label: "Articles", href: "/articles" },
  { label: "FAQ", href: "/faq" },
  { label: "Disclosure", href: "/disclosure" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Government Disclaimer Banner */}
      <div className="bg-[#a31621] text-white py-2 px-4 text-center text-xs sm:text-sm">
        <div className="container mx-auto max-w-6xl flex items-center justify-center gap-2">
          <AlertTriangle className="h-4 w-4 flex-shrink-0" />
          <span>
            <strong>Notice:</strong> This is NOT an official government website. We are not affiliated with any government agency.
          </span>
        </div>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-50 w-full bg-[#003366] shadow-lg">
        {/* Top Bar */}
        <div className="border-b border-[#004080]">
          <div className="container mx-auto max-w-6xl px-4 py-3">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <Link href="/" className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white border-2 border-[#ffc72c]">
                  <Shield className="h-7 w-7 text-[#003366]" />
                </div>
                <div>
                  <span className="text-xl font-bold text-white block leading-tight">
                    GOV Health Report
                  </span>
                  <span className="text-xs text-[#ffc72c]">
                    Independent Health Resource Portal
                  </span>
                </div>
              </Link>

              {/* Desktop CTA */}
              <div className="hidden md:flex items-center gap-4">
                <Button
                  variant="default"
                  size="sm"
                  className="bg-[#ffc72c] text-[#003366] hover:bg-[#ffda6a] font-semibold cursor-pointer"
                  asChild
                >
                  <Link href="/best-weight-loss-injections">
                    Access Directory
                  </Link>
                </Button>
              </div>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden p-2 text-white"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Navigation Bar */}
        <nav className="hidden md:block bg-[#004080]">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="flex items-center gap-0">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-4 py-3 text-sm font-medium text-white/90 transition-colors hover:bg-[#003366] hover:text-white border-r border-[#003366] last:border-r-0"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#003366] border-t border-[#004080]">
            <nav className="container mx-auto px-4 py-4 flex flex-col">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="py-3 text-sm font-medium text-white/90 transition-colors hover:text-[#ffc72c] border-b border-[#004080] last:border-b-0"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Button
                variant="default"
                size="sm"
                className="w-full mt-4 bg-[#ffc72c] text-[#003366] hover:bg-[#ffda6a] font-semibold cursor-pointer"
                asChild
              >
                <Link href="/best-weight-loss-injections">
                  Access Directory
                </Link>
              </Button>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
