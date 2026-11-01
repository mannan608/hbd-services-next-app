"use client";

import { useState, type FormEvent } from "react";
import {
  ArrowRight,
  CheckCircle2,
  GraduationCap,
  Send,
  Sparkles,
} from "lucide-react";
import type { DestinationDetail } from "@/data/destinations/destination.types";

interface Props {
  destination: DestinationDetail;
}

export default function DestinationHeader({ destination }: Props) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    targetIntake: "",
  });

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // Replace this with your API request.
    console.log("Consultation request:", {
      ...formData,
      destination: destination.slug,
    });
  }

  return (
    <header className="relative overflow-hidden bg-gradient-to-br from-brand-950 via-brand-900 to-[#0B1D36] py-10 text-white lg:py-14">
      <div className="pointer-events-none absolute -right-20 -top-20 h-96 w-96 rounded-full bg-brand-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:gap-8 lg:px-8">
        <div className="space-y-5 text-center lg:col-span-7 lg:text-left">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold text-brand-100">
            <GraduationCap className="h-4 w-4 text-cyan-300" />
            {destination.hero.badge}
          </div>

          <h1 className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            Study at{" "}
            <span className="bg-gradient-to-r from-blue-200 via-brand-300 to-cyan-300 bg-clip-text text-transparent">
              {destination.hero.title}
            </span>{" "}
            {destination.name} Universities
          </h1>

          <p className="mx-auto max-w-2xl text-sm leading-7 text-slate-300 sm:text-base lg:mx-0">
            {destination.hero.description}
          </p>

          <div className="flex flex-wrap justify-center gap-3 pt-2 lg:justify-start">
            <a
              href="#consultation"
              className="inline-flex items-center gap-2 rounded-xl bg-brand-500 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-brand-600"
            >
              Book Free Consultation <ArrowRight size={17} />
            </a>
            <a
              href="#universities"
              className="inline-flex items-center rounded-xl border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/15"
            >
              Explore Universities
            </a>
          </div>

          <div className="grid gap-3 border-t border-white/10 pt-5 text-left sm:grid-cols-3">
            {destination.hero.features.map((feature) => (
              <div key={feature} className="flex items-center justify-center gap-2 text-xs text-slate-200 lg:justify-start">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        <div id="consultation" className="scroll-mt-28 lg:col-span-5">
          <div className="rounded-2xl border border-white/60 bg-white p-6 text-slate-900 shadow-2xl sm:p-8">
            <div className="mb-6">
              <div className="mb-2 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-600">
                <Sparkles size={15} /> Free Express Assessment
              </div>
              <h2 className="text-2xl font-extrabold text-[#0B1D36]">
                Start Your Study Journey
              </h2>
              <p className="mt-2 text-sm leading-6 text-slate-500">
                Share your details and our counsellor can contact you.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="fullName" className="mb-1.5 block text-xs font-semibold text-slate-700">
                  Full Name
                </label>
                <input
                  id="fullName"
                  required
                  autoComplete="name"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="Your full name"
                  className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-brand-500 focus:bg-white focus:ring-2 focus:ring-brand-500/20"
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-1.5 block text-xs font-semibold text-slate-700">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  autoComplete="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="you@example.com"
                  className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-brand-500 focus:bg-white focus:ring-2 focus:ring-brand-500/20"
                />
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <div>
                  <label htmlFor="phone" className="mb-1.5 block text-xs font-semibold text-slate-700">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    required
                    autoComplete="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+880..."
                    className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-brand-500 focus:bg-white focus:ring-2 focus:ring-brand-500/20"
                  />
                </div>

                <div>
                  <label htmlFor="targetIntake" className="mb-1.5 block text-xs font-semibold text-slate-700">
                    Target Intake
                  </label>
                  <select
                    id="targetIntake"
                    required
                    value={formData.targetIntake}
                    onChange={(e) => setFormData({ ...formData, targetIntake: e.target.value })}
                    className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-3 text-sm outline-none transition focus:border-brand-500 focus:bg-white focus:ring-2 focus:ring-brand-500/20"
                  >
                    <option value="">Select intake</option>
                    <option value="January 2027">January 2027</option>
                    <option value="May 2027">May 2027</option>
                    <option value="September 2027">September 2027</option>
                    <option value="January 2028">January 2028</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-brand-500 py-3.5 text-sm font-bold text-white transition hover:bg-brand-600"
              >
                <Send size={16} /> Get Free Assessment
              </button>
            </form>
          </div>
        </div>
      </div>
    </header>
  );
}
