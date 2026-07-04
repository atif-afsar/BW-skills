import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import CoursesSection from "../components/CoursesSection";
import WhyUsSection from "../components/WhyUsSection";
import PricingSection from "../components/PricingSection";
import TestimonialStrip from "../components/TestimonialStrip";
import FinalCTA from "../components/FinalCTA";
import EnrollmentSection from "../components/EnrollmentSection";
import Footer from "../components/Footer";
import FloatingActionButton from "../components/FloatingActionButton";

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
    }, 50);

    return () => window.clearTimeout(timer);
  }, [location.hash]);

  return (
    <div className="min-h-screen bg-brand-bg">
      <Navbar />
      <main>
        <Hero />
        <CoursesSection />
        <WhyUsSection />
        <PricingSection />
        <TestimonialStrip />
        <FinalCTA />
        <EnrollmentSection />
      </main>
      <Footer />
      <FloatingActionButton />
    </div>
  );
}
