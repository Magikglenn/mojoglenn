import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { ServicesSection } from "@/components/ServicesSection";
import { TrustSection } from "@/components/TrustSection";
import { AboutSection } from "@/components/AboutSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { MediaSection } from "@/components/MediaSection";
import { QuoteSection } from "@/components/QuoteSection";
import { OffersSection } from "@/components/OffersSection";
import { FitSection } from "@/components/FitSection";
import { ContactSection } from "@/components/ContactSection";
import { HackathonSection } from "@/components/HackathonSection";
import { ExtendedQuoteSection } from "@/components/ExtendedQuoteSection";
import { FAQSection } from "@/components/FAQSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.slice(1);
      // Wait for sections to render before scrolling
      const t = setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
      return () => clearTimeout(t);
    }
  }, [location.hash, location.key]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Section 1 - Hero */}
      <HeroSection />
      
      {/* Section 2 - Services */}
      <ServicesSection />
      
      {/* Section 3 - Trust logos */}
      <TrustSection />
      
      {/* Section 4 - About */}
      <AboutSection />
      
      {/* Section 5 - Testimonials */}
      <TestimonialsSection />
      
      {/* Section 6 - Media */}
      <MediaSection />
      
      {/* Section 7 - Quote */}
      <QuoteSection quote="Notre plus grand besoin est peut-être celui d'appartenir" />
      
      {/* Section 8 - Offers */}
      <OffersSection />
      
      {/* Section 9 - Fit section */}
      <FitSection />
      
      {/* Section 10 - Contact */}
      <ContactSection />
      
      {/* Section 11 - Hackathon */}
      <HackathonSection />
      
      {/* Section 12 - Extended Quote */}
      <ExtendedQuoteSection />
      
      {/* Section 13 - FAQ */}
      <FAQSection />
      
      {/* Section 14 - Footer */}
      <Footer />
    </div>
  );
};

export default Index;
