import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CoursesSection from "./components/CoursesSection";
import WhyUsSection from "./components/WhyUsSection";
import PricingSection from "./components/PricingSection";
import TestimonialStrip from "./components/TestimonialStrip";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import FloatingActionButton from "./components/FloatingActionButton";

export default function App() {
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
      </main>
      <Footer />
      <FloatingActionButton />
    </div>
  );
}
