"use client";

import { projects } from "@/data/data";
import { ChevronRight, ExternalLink } from "lucide-react";
import React, { useState } from "react";

const ProjectSection = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

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
              Our Projects
            </span>
            <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-green-500"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Success Stories
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">
            Explore our portfolio of successful projects that have transformed
            businesses and delivered exceptional results for our clients.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-white/5 backdrop-blur-sm rounded-lg overflow-hidden border border-white/10 hover:border-green-500/50 transition-all duration-300"
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-all duration-300"></div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-green-500/20 backdrop-blur-sm text-green-500 px-3 py-1 rounded-full text-sm">
                  {project.category}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-white/70 mb-4">{project.description}</p>

                {/* Project Stats */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {Object.entries(project.stats).map(([key, value], i) => (
                    <div key={i} className="text-center">
                      <div className="text-green-500 font-semibold">
                        {value}
                      </div>
                      <div className="text-white/50 text-sm">{key}</div>
                    </div>
                  ))}
                </div>

                {/* View Project Link */}
                <a
                  href="#"
                  className="inline-flex items-center text-green-500 hover:text-green-400 transition-colors"
                >
                  View Project
                  <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <button className="bg-green-500 text-black px-8 py-4 rounded-lg hover:bg-green-400 transition-colors inline-flex items-center group">
            View All Projects
            <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
