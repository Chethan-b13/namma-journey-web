import React from "react";
import NavBar from "@/components/landing/NavBar";
import Footer from "@/components/landing/Footer";
import HeroSection from "@/components/landing/HeroSection";
import OurStorySection from "@/components/landing/OurStorySection";
import ValuesSection from "@/components/landing/ValuesSection";
import FeatureSection from "@/components/landing/FeatureSection";
import CTASection from "@/components/landing/CTASection";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white text-black">
      <NavBar />
      <HeroSection />
      <OurStorySection />
      <ValuesSection />
      <FeatureSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default LandingPage;
