import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import SEO from "../components/SEO";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import LocalSeoSection from "../components/LocalSeoSection";
import CoursesSection from "../components/CoursesSection";
import WhyUsSection from "../components/WhyUsSection";
import PricingSection from "../components/PricingSection";
import TestimonialStrip from "../components/TestimonialStrip";
import FinalCTA from "../components/FinalCTA";
import EnrollmentSection from "../components/EnrollmentSection";
import Footer from "../components/Footer";
import FloatingActionButton from "../components/FloatingActionButton";
import { DEFAULT_TITLE, DEFAULT_DESCRIPTION } from "../data/site";
import { getHomePageSchema } from "../data/schema";

export default function HomePage() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;

    const id = location.hash.replace("#", "");
    const timer = window.setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100);

    return () => window.clearTimeout(timer);
  }, [location.pathname, location.hash]);

  return (
    <div className="min-h-screen bg-brand-bg">
      <SEO
        title={DEFAULT_TITLE}
        description={DEFAULT_DESCRIPTION}
        path="/"
        jsonLd={getHomePageSchema()}
      />
      <Navbar />
      <main>
        <Hero />
        <CoursesSection />
        <PricingSection />
        <WhyUsSection />
        <LocalSeoSection />
        <TestimonialStrip />
        <FinalCTA />
        <EnrollmentSection />
      </main>
      <Footer />
      <FloatingActionButton />
    </div>
  );
}
