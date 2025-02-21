import { services } from "@/data/data";
import { ChevronRight } from "lucide-react";
import React from "react";

const ServiceSection = () => {
  return (
    <section className="relative bg-black py-24 overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 grid grid-cols-12 gap-4 opacity-10 pointer-events-none">
        {Array.from({ length: 200 }).map((_, i) => (
          <div
            key={i}
            className="w-full h-4 border-t border-l border-white/20"
          ></div>
        ))}
      </div>

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-80"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-green-500"></div>
            <span className="text-green-500 text-sm font-medium uppercase tracking-wider">
              Our Services
            </span>
            <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-green-500"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            What We Offer
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">
            End-to-end digital solutions tailored to your business needs. From
            design to development, we deliver excellence at every step of your
            digital journey.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-green-500/50 transition-all duration-300"
            >
              {/* Service Icon */}
              <div className="inline-flex items-center justify-center p-4 bg-green-500/10 rounded-lg text-green-500 mb-6 group-hover:bg-green-500/20 transition-all duration-300">
                {service.icon && <service.icon className="w-12 h-12" />}
              </div>

              {/* Service Content */}
              <h3 className="text-xl font-semibold text-white mb-3">
                {service.title}
              </h3>
              <p className="text-white/70 mb-6">{service.description}</p>

              {/* Features List */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, fIndex) => (
                  <li
                    key={fIndex}
                    className="flex items-center text-white/60 text-sm"
                  >
                    <ChevronRight className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Learn More Link */}
              <a
                href="#"
                className="inline-flex items-center text-green-500 hover:text-green-400 transition-colors mt-auto"
              >
                Learn more
                <ChevronRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <button className="bg-green-500 text-black px-8 py-4 rounded-lg hover:bg-green-400 transition-colors inline-flex items-center group">
            Discuss Your Project
            <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
