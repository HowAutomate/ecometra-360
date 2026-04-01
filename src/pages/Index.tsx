import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BlogSection from "@/components/BlogSection";
import ContactSection from "@/components/ContactSection";
import FreelancerHero from "@/components/FreelancerHero";
import FreelancerBenefits from "@/components/FreelancerBenefits";
import FreelancerForm from "@/components/FreelancerForm";
import Footer from "@/components/Footer";
import { useMode } from "@/contexts/ModeContext";

const Index = () => {
  const { mode } = useMode();

  return (
    <div className="min-h-screen">
      <Navbar />
      {mode === "client" ? (
        <>
          <HeroSection />
          <ServicesSection />
          <AboutSection />
          <TestimonialsSection />
          <BlogSection />
          <ContactSection />
        </>
      ) : (
        <>
          <FreelancerHero />
          <FreelancerBenefits />
          <FreelancerForm />
        </>
      )}
      <Footer />
    </div>
  );
};

export default Index;
