import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { LogoMarquee } from "@/components/LogoMarquee";
import { Dashboard } from "@/components/Dashboard";
import { Features } from "@/components/Features";
import { Integrations } from "@/components/Integrations";
import { Pricing } from "@/components/Pricing";
import { FAQ } from "@/components/FAQ";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-cream flex flex-col">
      <Navigation />
      <main className="flex-1">
        <Hero />
        <LogoMarquee />
        <Dashboard />
        <Features />
        <Integrations />
        <Pricing />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
