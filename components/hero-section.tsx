"use client";

import { ChevronRight, Mail } from "lucide-react";
import React, { useEffect, useState, useRef } from "react";

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoverTile, setHoverTile] = useState({ x: -1, y: -1 });
  const gridSize = 82;
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent): void => {
      if (!sectionRef.current) return;

      // Calculate the overall parallax effect
      const rect = document.documentElement.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 10;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 10;
      setMousePosition({ x, y });

      // Calculate which grid tile the mouse is over with proper offset calculation
      const sectionRect = sectionRef.current.getBoundingClientRect();
      const offsetX = e.clientX - sectionRect.left;
      const offsetY = e.clientY - sectionRect.top;

      // Account for the parallax movement in the tile calculation
      const adjustedOffsetX = offsetX - mousePosition.x;
      const adjustedOffsetY = offsetY - mousePosition.y;

      const tileX = Math.floor(adjustedOffsetX / gridSize);
      const tileY = Math.floor(adjustedOffsetY / gridSize);

      setHoverTile({ x: tileX, y: tileY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mousePosition]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black pt-10"
    >
      {/* Animated Grid Background */}
      <div
        className="absolute inset-0 transition-transform duration-200 ease-out"
        style={{
          transform: `translate3d(${mousePosition.x}px, ${mousePosition.y}px, 0)`,
          willChange: "transform",
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: `${gridSize}px ${gridSize}px`,
          }}
        />

        {/* Highlight tile under cursor */}
        {hoverTile.x >= 0 && hoverTile.y >= 0 && (
          <div
            className="absolute bg-green-500/10 transition-all duration-200 ease-out"
            style={{
              left: `${hoverTile.x * gridSize}px`,
              top: `${hoverTile.y * gridSize}px`,
              width: `${gridSize}px`,
              height: `${gridSize}px`,
              zIndex: 5,
            }}
          />
        )}
      </div>

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-80"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-80"></div>

      {/* Glow Effects */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-green-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-green-500/20 rounded-full blur-3xl"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Pre-title */}
          <div className="flex items-center justify-center space-x-2">
            <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-green-500"></div>
            <span className="text-green-500 text-sm font-medium uppercase tracking-wider">
              Welcome to the future
            </span>
            <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-green-500"></div>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">
            <span className="block text-white/90">Transforming Ideas into</span>
            <span className="block text-green-500 mt-2">
              Digital Excellence
            </span>
          </h1>

          {/* Description */}
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-white/70">
            Empowering businesses with cutting-edge software solutions. Over
            200+ successful projects and 95% client satisfaction rate.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <button className="group bg-green-500 text-black px-8 py-4 rounded-lg hover:bg-green-400 transition-all duration-300 flex items-center">
              Book a call
              <ChevronRight className="ml-2 transition-transform group-hover:translate-x-1" />
            </button>
            <div className="flex items-center">
              <span className="text-white/50 mx-4">or</span>
            </div>
            <button className="border border-green-500 px-8 py-4 rounded-lg transition-all duration-300 flex items-center group hover:bg-green-400 text-green-500 hover:text-black">
              Say Hi!
              <Mail className="ml-2 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16">
            {[
              { number: "200+", label: "Projects Completed" },
              { number: "95%", label: "Client Satisfaction" },
              { number: "50+", label: "Expert Developers" },
              { number: "10+", label: "Years Experience" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-green-500">
                  {stat.number}
                </div>
                <div className="text-sm text-white/50 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
