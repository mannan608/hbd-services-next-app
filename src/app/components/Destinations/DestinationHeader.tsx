"use client";

import React, { useState } from "react";
import {
  GraduationCap,
  CheckCircle2,
  Award,
  Clock,
  Sparkles,
  ArrowRight,
  Send,
} from "lucide-react";

interface DestinationHeroProps {
  destination?: {
    code?: string;
    name?: string;
    hero?: {
      description?: string;
    };
  };
}

const DestinationHeader = ({ destination }: DestinationHeroProps) => {

    // Default dynamic data with fallbacks
  const code = destination?.code || "UK";
  const name = destination?.name || "United Kingdom";
  const description =
    destination?.hero?.description ||
    "Unlock world-class education opportunities, generous scholarships, and post-study work visas with personalized guidance from certified study abroad experts.";

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    targetIntake: "Sept 2026",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    // Handle form submission logic here
  };
  return (
    <header className="relative overflow-hidden bg-gradient-to-br from-brand-950 via-brand-900 to-neutral-dark text-white pt-12 pb-24 lg:pt-20 lg:pb-32">
      {/* Background Decorative Glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent-cyan/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column - Hero Content */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-brand-500/15 text-brand-200 border border-brand-400/20 backdrop-blur-md shadow-sm">
              <GraduationCap className="w-4 h-4 text-accent-cyan" />
              <span>Premier {code} Education Consultancy</span>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
              Study at{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-light-300 via-brand-300 to-accent-cyan">
                World-Class
              </span>{" "}
              {name} Universities
            </h1>

            {/* Description */}
            <p className="text-neutral-300 text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
              {description}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-2">
              <a
                href="#consultation"
                className="inline-flex items-center gap-2 px-8 py-4 bg-brand-500 hover:bg-brand-600 text-white font-semibold rounded-xl shadow-lg shadow-brand-900/50 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Book Free Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#universities"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/15 text-white font-semibold rounded-xl backdrop-blur-md border border-white/10 transition-all duration-200"
              >
                <span>Explore Universities</span>
              </a>
            </div>

            {/* Feature Badges Grid */}
            <div className="pt-8 border-t border-brand-800/60 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-neutral-200">
              <div className="flex items-center gap-2.5 justify-center lg:justify-start">
                <CheckCircle2 className="w-5 h-5 text-accent-green flex-shrink-0" />
                <span className="font-medium">130+ Partner Universities</span>
              </div>
              <div className="flex items-center gap-2.5 justify-center lg:justify-start">
                <Award className="w-5 h-5 text-accent-green flex-shrink-0" />
                <span className="font-medium">Up to £5,000 Scholarships</span>
              </div>
              <div className="flex items-center gap-2.5 justify-center lg:justify-start">
                <Clock className="w-5 h-5 text-accent-green flex-shrink-0" />
                <span className="font-medium">Fast Track Admission</span>
              </div>
            </div>
          </div>

          {/* Right Column - Lead Form Card */}
          <div id="consultation" className="lg:col-span-5">
            <div className="bg-white/95 backdrop-blur-xl p-6 sm:p-8 rounded-2xl shadow-2xl border border-neutral-100 text-neutral-900">
              
              <div className="mb-6">
                <div className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-600 uppercase tracking-wider mb-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  Free Express Assessment
                </div>
                <h2 className="text-2xl font-extrabold text-neutral-900">Refine Your Future</h2>
                <p className="text-xs sm:text-sm text-neutral-500 mt-1">
                  Fill in your details for immediate application assistance.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-neutral-700 uppercase mb-1.5">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="John Doe"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-neutral-200 bg-neutral-25 focus:bg-white focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all outline-none text-sm text-neutral-900 placeholder:text-neutral-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-700 uppercase mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-neutral-200 bg-neutral-25 focus:bg-white focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all outline-none text-sm text-neutral-900 placeholder:text-neutral-400"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 uppercase mb-1.5">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+44..."
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-neutral-200 bg-neutral-25 focus:bg-white focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all outline-none text-sm text-neutral-900 placeholder:text-neutral-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 uppercase mb-1.5">
                      Target Intake
                    </label>
                    <select
                      value={formData.targetIntake}
                      onChange={(e) => setFormData({ ...formData, targetIntake: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-neutral-200 bg-neutral-25 focus:bg-white focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all outline-none text-sm text-neutral-700 cursor-pointer"
                    >
                      <option value="Sept 2026">Sept 2026</option>
                      <option value="Jan 2027">Jan 2027</option>
                      <option value="May 2027">May 2027</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full mt-2 py-4 bg-brand-500 hover:bg-brand-600 text-white font-bold rounded-xl shadow-md hover:shadow-lg transition-all duration-200 text-sm uppercase tracking-wide flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Get Free Assessment</span>
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </header>
  )
}

export default DestinationHeader