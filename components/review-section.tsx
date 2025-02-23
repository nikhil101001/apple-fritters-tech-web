import React from "react";
import { Star, ChevronRight, Quote } from "lucide-react";
import { reviews } from "@/data/data";

const ReviewSection = () => {
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
              Testimonials
            </span>
            <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-green-500"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            What Our Clients Say
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">
            Don't just take our word for it. Here's what our clients have to say
            about their experience working with us.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="group bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10 hover:border-green-500/50 transition-all duration-300"
            >
              {/* Quote Icon */}
              <div className="inline-flex items-center justify-center p-3 bg-green-500/10 rounded-lg text-green-500 mb-6 group-hover:bg-green-500/20 transition-all duration-300">
                <Quote className="w-6 h-6" />
              </div>

              {/* Rating */}
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < review.rating
                        ? "fill-green-500 text-green-500"
                        : "fill-white/10 text-white/10"
                    }`}
                  />
                ))}
              </div>

              {/* Review Content */}
              <p className="text-white/70 mb-6 min-h-[100px]">
                {review.content}
              </p>

              {/* Reviewer Info */}
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center text-green-500 font-semibold text-lg">
                  {review.name.charAt(0)}
                </div>
                <div className="ml-4">
                  <h4 className="text-white font-semibold">{review.name}</h4>
                  <p className="text-white/50 text-sm">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <button className="bg-green-500 text-black px-8 py-4 rounded-lg hover:bg-green-400 transition-colors inline-flex items-center group">
            Read More Reviews
            <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ReviewSection;
