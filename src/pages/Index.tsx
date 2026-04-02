import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BlogSection from "@/components/BlogSection";
import ContactSection from "@/components/ContactSection";
import FreelancerHero from "@/components/freelancer/FreelancerHero";
import FreelancerIntro from "@/components/freelancer/FreelancerIntro";
import WhoCanApply from "@/components/freelancer/WhoCanApply";
import WhyJoinUs from "@/components/freelancer/WhyJoinUs";
import HowItWorks from "@/components/freelancer/HowItWorks";
import WhatWeLookFor from "@/components/freelancer/WhatWeLookFor";
import FreelancerForm from "@/components/freelancer/FreelancerForm";
import FinalCTA from "@/components/freelancer/FinalCTA";
import StickyMobileCTA from "@/components/freelancer/StickyMobileCTA";
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
          <FreelancerIntro />
          <WhoCanApply />
          <WhyJoinUs />
          <HowItWorks />
          <WhatWeLookFor />
          <FreelancerForm />
          <FinalCTA />
          <StickyMobileCTA />
        </>
      )}
      <Footer />
    </div>
  );
};

export default Index;
