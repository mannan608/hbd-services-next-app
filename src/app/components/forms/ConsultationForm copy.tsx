
"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Send,
  Sparkles,
  GraduationCap,
  Building2,
  Calendar,
  Award,
  CheckCircle2,
  Phone,
  Mail,
  MapPin,
  User,
  ShieldCheck,
  ArrowRight,
  Globe2,
} from "lucide-react";
import { useInView } from "@/hooks/useInView";

const ConsultationForm = () => {
  const { ref: sectionRef, visible: sectionVisible } = useInView();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    city: "",
    educationLevel: "",
    institutionName: "",
    hasEnglishTest: "",
    testName: "",
    overallScore: "",
    tentativeExamDate: "",
    consent: false,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Connect your API here to save registration data.
    console.log("Form Submitted:", formData);
    setSubmitted(true);
  };

  const inputClass =
    "w-full min-w-0 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition-all duration-200 placeholder:text-slate-400 hover:border-brand-200 focus:border-brand-500 focus:ring-4 focus:ring-brand-100/70";

  const iconInputClass = `${inputClass} pl-11`;

  const labelClass =
    "mb-2 block text-sm font-semibold text-secondary-500";

  const iconClass =
    "pointer-events-none absolute left-3.5 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-brand-500";

  return (
    <section
      id="booking-section"
      className="relative overflow-hidden bg-brand-25 py-16 sm:py-20 lg:py-24"
    >
      {/* Soft brand background */}
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-brand-100/50 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-brand-200/30 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section introduction */}
        <div
          className={`mx-auto mb-10 max-w-3xl text-center transition-all duration-700 sm:mb-12 ${
            sectionVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-5 opacity-0"
          }`}
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-100 bg-white px-4 py-2 shadow-sm">
            <Sparkles className="h-4 w-4 text-brand-600" />
            <span className="text-xs font-bold uppercase tracking-[0.15em] text-brand-700">
              Your Global Education Journey
            </span>
          </div>

          <h2 className="text-3xl font-bold leading-tight tracking-tight text-secondary-500 sm:text-4xl lg:text-5xl">
            Let&apos;s Plan Your
            <span className="block text-brand-600 sm:inline sm:pl-2">
              Study Abroad Future
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
            Tell us about your academic background and goals. Our counselling
            team can help you explore the right opportunities for your future.
          </p>

          <div className="mx-auto mt-6 h-1 w-16 rounded-full bg-brand-500" />
        </div>

        {/* Main consultation card */}
        <div
          ref={sectionRef}
          className={`grid grid-cols-1 overflow-hidden rounded-2xl border border-brand-100 bg-white shadow-[0_24px_80px_-32px_rgba(24,47,90,0.20)] transition-all duration-700 lg:grid-cols-12 lg:rounded-3xl ${
            sectionVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-6 opacity-0"
          }`}
        >
          {/* Left branding panel */}
          <aside className="relative flex flex-col overflow-hidden bg-secondary-500 px-6 py-9 text-white sm:px-10 sm:py-12 lg:col-span-4 lg:px-10 lg:py-12">
            <Image
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80"
              alt="Students preparing for their international education journey"
              fill
              sizes="(max-width: 1024px) 100vw, 35vw"
              className="object-cover opacity-15"
            />

            {/* Brand overlays */}
            <div className="absolute inset-0 bg-gradient-to-br from-secondary-500/95 via-secondary-500/90 to-brand-950/95" />
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full border border-white/10" />
            <div className="pointer-events-none absolute -right-10 -top-10 h-44 w-44 rounded-full border border-white/10" />
            <div className="pointer-events-none absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-brand-500/20 blur-3xl" />

            <div className="relative z-10 flex flex-1 flex-col">
              <div className="mb-8 inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-2 backdrop-blur-sm">
                <Globe2 className="h-4 w-4 text-brand-200" />
                <span className="text-xs font-semibold tracking-wide text-white">
                  Begin Your Journey
                </span>
              </div>

              <h3 className="max-w-sm text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
                Your future has no borders.
                <span className="mt-2 block text-brand-200">
                  Let&apos;s get you there.
                </span>
              </h3>

              <p className="mt-5 max-w-md text-sm leading-7 text-blue-50/80 sm:text-base">
                Take the first step towards international education with
                guidance tailored to your academic profile and aspirations.
              </p>

              {/* Benefits */}
              <div className="mt-9 space-y-5 border-t border-white/15 pt-7">
                <div className="flex items-start gap-3.5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/15 bg-white/10 text-brand-200">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">
                      Personalized Counselling
                    </p>
                    <p className="mt-1 text-xs leading-5 text-blue-50/70">
                      Guidance based on your academic profile and goals.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/15 bg-white/10 text-brand-200">
                    <GraduationCap className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">
                      University Application Guidance
                    </p>
                    <p className="mt-1 text-xs leading-5 text-blue-50/70">
                      Understand application requirements and next steps.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/15 bg-white/10 text-brand-200">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">
                      A Clearer Path Forward
                    </p>
                    <p className="mt-1 text-xs leading-5 text-blue-50/70">
                      Get help understanding your available options.
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom message */}
              <div className="mt-10 rounded-2xl border border-white/15 bg-white/[0.07] p-5 backdrop-blur-sm lg:mt-auto lg:translate-y-6">
                <p className="text-sm font-semibold text-white">
                  Every great journey starts with a conversation.
                </p>
                <p className="mt-2 text-xs leading-6 text-blue-50/70">
                  Share your details and take a step closer to your study
                  abroad goals.
                </p>
              </div>
            </div>
          </aside>

          {/* Right form panel */}
          <div className="min-w-0 px-5 py-8 sm:px-9 sm:py-10 lg:col-span-8 lg:px-12 lg:py-12">
            {submitted ? (
              <div className="flex min-h-[520px] flex-col items-center justify-center px-2 py-12 text-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full border border-brand-100 bg-brand-50 text-brand-600">
                  <CheckCircle2 className="h-10 w-10" />
                </div>

                <h3 className="mt-6 text-2xl font-bold tracking-tight text-secondary-500 sm:text-3xl">
                  Registration Received!
                </h3>

                <p className="mt-3 max-w-md text-sm leading-7 text-slate-600 sm:text-base">
                  Thank you for reaching out. Your form has passed the
                  client-side submission step. Connect the form to your API
                  to save your details and arrange a counselling session.
                </p>

                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-8 inline-flex items-center justify-center gap-2 rounded-xl bg-brand-600 px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-brand-700 focus:outline-none focus:ring-4 focus:ring-brand-100"
                >
                  Submit Another Response
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Form heading */}
                <div className="flex items-start gap-4 border-b border-slate-100 pb-6">
                  <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600 sm:flex">
                    <GraduationCap className="h-6 w-6" />
                  </div>

                  <div className="min-w-0">
                    <h3 className="text-xl font-bold tracking-tight text-secondary-500 sm:text-2xl">
                      Student Consultation Form
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      Complete the details below so we can better understand
                      your study plans.
                    </p>
                    <p className="mt-3 text-xs text-slate-500">
                      <span className="font-semibold text-brand-600">*</span>{" "}
                      Required fields
                    </p>
                  </div>
                </div>

                {/* Personal information */}
                <div className="space-y-5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                      <User className="h-4 w-4" />
                    </div>
                    <h4 className="text-base font-bold text-secondary-500">
                      Personal Information
                    </h4>
                  </div>

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="firstName" className={labelClass}>
                        First Name <span className="text-brand-600">*</span>
                      </label>
                      <input
                        id="firstName"
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        autoComplete="given-name"
                        required
                        placeholder="Enter first name"
                        className={inputClass}
                      />
                    </div>

                    <div>
                      <label htmlFor="lastName" className={labelClass}>
                        Last Name <span className="text-brand-600">*</span>
                      </label>
                      <input
                        id="lastName"
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        autoComplete="family-name"
                        required
                        placeholder="Enter last name"
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="email" className={labelClass}>
                        Email Address{" "}
                        <span className="text-brand-600">*</span>
                      </label>
                      <div className="relative">
                        <Mail className={iconClass} />
                        <input
                          id="email"
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          autoComplete="email"
                          required
                          placeholder="you@example.com"
                          className={iconInputClass}
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="phone" className={labelClass}>
                        Phone Number{" "}
                        <span className="text-brand-600">*</span>
                      </label>
                      <div className="relative">
                        <Phone className={iconClass} />
                        <input
                          id="phone"
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          autoComplete="tel"
                          required
                          placeholder="+880 1700-000000"
                          className={iconInputClass}
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="city" className={labelClass}>
                      Current City <span className="text-brand-600">*</span>
                    </label>
                    <div className="relative">
                      <MapPin className={iconClass} />
                      <input
                        id="city"
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        autoComplete="address-level2"
                        required
                        placeholder="e.g. Dhaka, Chattogram"
                        className={iconInputClass}
                      />
                    </div>
                  </div>
                </div>

                {/* Academic information */}
                <div className="space-y-5 border-t border-slate-100 pt-7">
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                      <GraduationCap className="h-4 w-4" />
                    </div>
                    <h4 className="text-base font-bold text-secondary-500">
                      Academic Background
                    </h4>
                  </div>

                  <div>
                    <label htmlFor="educationLevel" className={labelClass}>
                      Highest Education Level{" "}
                      <span className="text-brand-600">*</span>
                    </label>
                    <div className="relative">
                      <GraduationCap className={iconClass} />
                      <select
                        id="educationLevel"
                        name="educationLevel"
                        value={formData.educationLevel}
                        onChange={handleChange}
                        required
                        className={`${iconInputClass} appearance-none pr-10`}
                      >
                        <option value="" disabled>
                          Select your education level
                        </option>
                        <option value="SSC">SSC</option>
                        <option value="HSC">HSC</option>
                        <option value="Diploma">Diploma</option>
                        <option value="O level">O level</option>
                        <option value="A level">A level</option>
                        <option value="Bachelor's">Bachelor&apos;s</option>
                        <option value="Hon's">Hon&apos;s</option>
                        <option value="Master's">Master&apos;s</option>
                        <option value="MBBS">MBBS</option>
                      </select>
                    </div>
                  </div>

                  {formData.educationLevel && (
                    <div className="animate-in fade-in duration-300">
                      <label htmlFor="institutionName" className={labelClass}>
                        School / College / University Name{" "}
                        <span className="text-brand-600">*</span>
                      </label>
                      <div className="relative">
                        <Building2 className={iconClass} />
                        <input
                          id="institutionName"
                          type="text"
                          name="institutionName"
                          value={formData.institutionName}
                          onChange={handleChange}
                          required
                          placeholder="Enter your institution name"
                          className={iconInputClass}
                        />
                      </div>
                    </div>
                  )}
                </div>

                {/* English proficiency */}
                <div className="space-y-5 border-t border-slate-100 pt-7">
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                      <Award className="h-4 w-4" />
                    </div>
                    <h4 className="text-base font-bold text-secondary-500">
                      English Proficiency
                    </h4>
                  </div>

                  <div>
                    <label htmlFor="hasEnglishTest" className={labelClass}>
                      Have you taken IELTS / PTE / TOEFL?{" "}
                      <span className="text-brand-600">*</span>
                    </label>
                    <div className="relative">
                      <Award className={iconClass} />
                      <select
                        id="hasEnglishTest"
                        name="hasEnglishTest"
                        value={formData.hasEnglishTest}
                        onChange={handleChange}
                        required
                        className={`${iconInputClass} appearance-none pr-10`}
                      >
                        <option value="" disabled>
                          Select your current status
                        </option>
                        <option value="yes">
                          Yes, I have already taken the test
                        </option>
                        <option value="no">
                          No, I plan to take it in the future
                        </option>
                      </select>
                    </div>
                  </div>

                  {formData.hasEnglishTest === "yes" && (
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 animate-in fade-in duration-300">
                      <div>
                        <label htmlFor="testName" className={labelClass}>
                          Which Test?{" "}
                          <span className="text-brand-600">*</span>
                        </label>
                        <select
                          id="testName"
                          name="testName"
                          value={formData.testName}
                          onChange={handleChange}
                          required
                          className={inputClass}
                        >
                          <option value="" disabled>
                            Select your test
                          </option>
                          <option value="IELTS">IELTS</option>
                          <option value="PTE">PTE</option>
                          <option value="TOEFL">TOEFL</option>
                          <option value="OIETC">OIETC</option>
                          <option value="Duolingo">Duolingo</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="overallScore" className={labelClass}>
                          Overall Score{" "}
                          <span className="text-brand-600">*</span>
                        </label>
                        <input
                          id="overallScore"
                          type="number"
                          step="0.5"
                          name="overallScore"
                          value={formData.overallScore}
                          onChange={handleChange}
                          required
                          placeholder="e.g. 7.0 or 65"
                          className={inputClass}
                        />
                      </div>
                    </div>
                  )}

                  {formData.hasEnglishTest === "no" && (
                    <div className="animate-in fade-in duration-300">
                      <label
                        htmlFor="tentativeExamDate"
                        className={labelClass}
                      >
                        Tentative Exam Month / Year{" "}
                        <span className="text-brand-600">*</span>
                      </label>
                      <div className="relative">
                        <Calendar className={iconClass} />
                        <input
                          id="tentativeExamDate"
                          type="text"
                          name="tentativeExamDate"
                          value={formData.tentativeExamDate}
                          onChange={handleChange}
                          required
                          placeholder="e.g. November 2026"
                          className={iconInputClass}
                        />
                      </div>
                    </div>
                  )}
                </div>

                {/* Consent */}
                <div className="rounded-xl border border-brand-100 bg-brand-25 p-4 sm:p-5">
                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="consent"
                      name="consent"
                      checked={formData.consent}
                      onChange={handleChange}
                      required
                      className="mt-1 h-4 w-4 shrink-0 cursor-pointer rounded border-slate-300 accent-brand-600 focus:ring-2 focus:ring-brand-500 focus:ring-offset-2"
                    />
                    <label
                      htmlFor="consent"
                      className="cursor-pointer text-xs leading-6 text-slate-600 sm:text-sm"
                    >
                      I confirm my interest in participating in counselling
                      and give permission to be contacted regarding my study
                      abroad plans.{" "}
                      <span className="font-semibold text-brand-600">*</span>
                    </label>
                  </div>
                </div>

                {/* Submit */}
                <div className="space-y-4">
                  <button
                    type="submit"
                    className="group flex min-h-14 w-full items-center justify-center gap-3 rounded-xl bg-brand-600 px-6 py-4 text-sm font-bold text-white shadow-md shadow-brand-600/15 transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-700 hover:shadow-lg hover:shadow-brand-600/20 focus:outline-none focus:ring-4 focus:ring-brand-200 active:translate-y-0"
                  >
                    <Send className="h-[18px] w-[18px] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                    <span>Request a Consultation</span>
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>

                  <p className="flex items-center justify-center gap-2 text-center text-xs leading-5 text-slate-500">
                    <ShieldCheck className="h-4 w-4 shrink-0 text-brand-600" />
                    Your information should be handled securely and
                    confidentially.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>     
      </div>
    </section>
  );
};

export default ConsultationForm;
