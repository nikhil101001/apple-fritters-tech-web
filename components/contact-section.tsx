import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";

const ContactSection = () => {
  const [formStatus, setFormStatus] = useState("idle"); // idle, submitting, success
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("submitting");

    // Simulate form submission
    setTimeout(() => {
      setFormStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });

      // Reset success message after 3 seconds
      setTimeout(() => setFormStatus("idle"), 3000);
    }, 1000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="relative bg-black py-24 overflow-hidden" id="contact">
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
              Get in Touch
            </span>
            <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-green-500"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Contact Us
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">
            Have a project in mind? Let&apos;s discuss how we can help bring
            your ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10">
              <h3 className="text-2xl font-semibold text-white mb-6">
                Let&apos;s Connect
              </h3>
              <div className="space-y-6">
                <a
                  href="mailto:contact@fritterstech.com"
                  className="flex items-center group p-4 bg-white/5 rounded-lg hover:bg-green-500/10 transition-colors"
                >
                  <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center text-green-500 group-hover:bg-green-500/30">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-white font-medium">Email Us</h4>
                    <p className="text-white/60">contact@fritterstech.com</p>
                  </div>
                </a>

                <a
                  href="tel:+1234567890"
                  className="flex items-center group p-4 bg-white/5 rounded-lg hover:bg-green-500/10 transition-colors"
                >
                  <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center text-green-500 group-hover:bg-green-500/30">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-white font-medium">Call Us</h4>
                    <p className="text-white/60">+x (xxx) xxx-xxxx</p>
                  </div>
                </a>

                <div className="flex items-center group p-4 bg-white/5 rounded-lg">
                  <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center text-green-500">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-white font-medium">Visit Us</h4>
                    <p className="text-white/60">Florida, USA</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-white/70 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white/60 focus:outline-none focus:border-green-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-white/70 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white/60 focus:outline-none focus:border-green-500"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-white/70 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white/60 focus:outline-none focus:border-green-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-white/70 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white/60 focus:outline-none focus:border-green-500"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={formStatus === "submitting"}
                className={`w-full bg-green-500 text-black px-8 py-4 rounded-lg hover:bg-green-400 transition-colors flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed`}
              >
                {formStatus === "submitting" ? (
                  <>
                    <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                    <span>Sending...</span>
                  </>
                ) : formStatus === "success" ? (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    <span>Message Sent!</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
