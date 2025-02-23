import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  ChevronRight,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-black pt-24 overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 grid grid-cols-12 gap-4 opacity-10 pointer-events-none">
        {Array.from({ length: 200 }).map((_, i) => (
          <div
            key={i}
            className="w-full h-4 border-t border-l border-white/20"
          ></div>
        ))}
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-80"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-green-500/20 rounded-lg border border-green-500/20 flex items-center justify-center">
                <div className="w-6 h-6 bg-green-500 rounded-md transform rotate-45"></div>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
                Apple Fritters Tech
              </span>
            </div>
            <p className="text-white/60">
              Crafting digital solutions that drive business growth. We turn
              your ideas into exceptional digital experiences.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center text-white/60 hover:bg-green-500/20 hover:text-green-500 transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center text-white/60 hover:bg-green-500/20 hover:text-green-500 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center text-white/60 hover:bg-green-500/20 hover:text-green-500 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {["Home", "About", "Services", "Projects", "Reviews"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="text-white/60 hover:text-green-500 flex items-center group"
                    >
                      <ChevronRight className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-6">Our Services</h3>
            <ul className="space-y-4">
              {[
                "Custom Software Development",
                "Web Applications",
                "Mobile Apps",
                "Cloud Solutions",
                "UI/UX Design",
                "DevOps Services",
              ].map((service) => (
                <li key={service}>
                  <a
                    href="#"
                    className="text-white/60 hover:text-green-500 flex items-center group"
                  >
                    <ChevronRight className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-6">Contact Us</h3>
            <div className="space-y-4">
              <a
                href="mailto:contact@fritterstech.com"
                className="text-white/60 hover:text-green-500 flex items-center group"
              >
                <Mail className="w-5 h-5 mr-3 text-green-500" />
                contact@fritterstech.com
              </a>
              <a
                href="tel:+1234567890"
                className="text-white/60 hover:text-green-500 flex items-center group"
              >
                <Phone className="w-5 h-5 mr-3 text-green-500" />
                +x (xxx) xxx-xxxx
              </a>
              <div className="text-white/60 flex items-center">
                <MapPin className="w-5 h-5 mr-3 text-green-500" />
                Florida, USA
              </div>
              {/* Newsletter */}
              <div className="pt-6">
                <h4 className="text-white text-sm font-semibold mb-3">
                  Subscribe to Our Newsletter
                </h4>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="bg-white/5 border border-white/10 rounded-l-lg px-4 py-2 text-white/60 focus:outline-none focus:border-green-500 flex-1 w-full"
                  />
                  <button className="bg-green-500 text-black p-2 rounded-r-lg hover:bg-green-400 transition-colors">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/60 text-sm">
              © 2025 Apple Fritters Tech. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="#"
                className="text-white/60 hover:text-green-500 text-sm"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-white/60 hover:text-green-500 text-sm"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-white/60 hover:text-green-500 text-sm"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
