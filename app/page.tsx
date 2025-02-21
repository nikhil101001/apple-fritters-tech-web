"use client";

import { Star, Mail, Phone, MapPin } from "lucide-react";
import { projects, reviews, services } from "@/data/data";

import Header from "@/components/header";
import AboutSection from "@/components/about-section";
import HeroSection from "@/components/hero-section";
import ServiceSection from "@/components/service-section";
import ProjectSection from "@/components/projects-section";
import ReviewSection from "@/components/review-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <Header />
      <HeroSection />
      <AboutSection />
      <ServiceSection />
      <ProjectSection />
      <ReviewSection />
      <Footer />

      {/* Reviews Section */}
      <section id="reviews" className="py-16 md:py-24 bg-gray-50 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Client Reviews
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={20}
                      className="fill-green-600 text-green-600"
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">{review.content}</p>
                <div>
                  <p className="font-semibold">{review.name}</p>
                  <p className="text-gray-500 text-sm">{review.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Apple Fritters Tech</h3>
              <p className="text-gray-400">
                Crafting digital solutions that drive business growth.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#home"
                    className="text-gray-400 hover:text-green-500"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="text-gray-400 hover:text-green-500"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#projects"
                    className="text-gray-400 hover:text-green-500"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    href="#reviews"
                    className="text-gray-400 hover:text-green-500"
                  >
                    Reviews
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                <li className="text-gray-400">Custom Software Development</li>
                <li className="text-gray-400">Web Applications</li>
                <li className="text-gray-400">Mobile Apps</li>
                <li className="text-gray-400">Cloud Solutions</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact Us</h4>
              <div className="space-y-2">
                <p className="flex items-center text-gray-400">
                  <Mail size={16} className="mr-2" /> contact@fritterstech.com
                </p>
                <p className="flex items-center text-gray-400">
                  <Phone size={16} className="mr-2" /> +x (xxx) xxx-xxxx
                </p>
                <p className="flex items-center text-gray-400">
                  <MapPin size={16} className="mr-2" /> Florida, USA
                </p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Apple Fritters Tech. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
