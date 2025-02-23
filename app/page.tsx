"use client";

import Header from "@/components/header";
import AboutSection from "@/components/about-section";
import HeroSection from "@/components/hero-section";
import ServiceSection from "@/components/service-section";
import ProjectSection from "@/components/projects-section";
import ReviewSection from "@/components/review-section";
import Footer from "@/components/footer";
import ContactSection from "@/components/contact-section";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <AboutSection />
      <ServiceSection />
      <ProjectSection />
      <ReviewSection />
      <ContactSection />
      <Footer />
    </>
  );
}
