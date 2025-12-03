import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { ValueProposition } from "@/components/sections/ValueProposition";
import { ProviderCards } from "@/components/sections/ProviderCards";
import { FAQ } from "@/components/sections/FAQ";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <ValueProposition />
        <ProviderCards />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
