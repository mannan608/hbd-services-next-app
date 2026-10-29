
"use client";

import { useRef, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  GraduationCap,
  UserRound,
  Award,
  Send,
  ChevronDown,
} from "lucide-react";

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  city: string;
  educationLevel: string;
  institutionName: string;
  hasEnglishTest: string;
  testName: string;
  overallScore: string;
  tentativeExamDate: string;
  consent: boolean;
};

const initialFormData: FormData = {
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
};

const steps = [
  { title: "Personal Details", icon: UserRound },
  { title: "Academic Profile", icon: GraduationCap },
  { title: "English Proficiency", icon: Award },
];

const inputClass =
  "h-12 w-full rounded-xl border border-slate-200 bg-white px-3.5 text-sm text-[#0B1D36] outline-none transition-all placeholder:text-slate-400 hover:border-[#C9A84C]/60 focus:border-[#C9A84C] focus:ring-4 focus:ring-[#C9A84C]/10";

const labelClass =
  "mb-2 block text-[13px] font-semibold text-slate-700";

const requiredMark = <span className="ml-0.5 text-rose-500">*</span>;

const ConsultationForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        [name]: (e.target as HTMLInputElement).checked,
      }));
      return;
    }

    setFormData((prev) => {
      const updated = { ...prev, [name]: value };

      if (name === "hasEnglishTest") {
        updated.testName = "";
        updated.overallScore = "";
        updated.tentativeExamDate = "";
      }

      if (name === "educationLevel" && !value) {
        updated.institutionName = "";
      }

      return updated;
    });
  };

  const validateCurrentStep = () => {
    const panel = formRef.current?.querySelector(
      "[data-active-step]"
    );

    if (!panel) return false;

    const fields = panel.querySelectorAll<
      HTMLInputElement | HTMLSelectElement
    >("[required]");

    for (const field of fields) {
      if (!field.checkValidity()) {
        field.reportValidity();
        field.focus();
        return false;
      }
    }

    return true;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateCurrentStep()) return;

    if (currentStep < steps.length - 1) {
      setCurrentStep((prev) => prev + 1);
      return;
    }

    // Connect your API here to save the application.
    console.log("Consultation form submitted:", formData);
    setSubmitted(true);
  };

  const handleBack = () => {
    setCurrentStep((prev) => Math.max(0, prev - 1));
  };

  const resetForm = () => {
    setFormData(initialFormData);
    setCurrentStep(0);
    setSubmitted(false);
  };

  const renderField = (
    label: string,
    name: keyof FormData,
    type = "text",
    placeholder = "",
    autoComplete?: string
  ) => (
    <div className="min-w-0" key={name}>
      <label htmlFor={name} className={labelClass}>
        {label}
        {requiredMark}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        value={formData[name] as string}
        onChange={handleChange}
        placeholder={placeholder}
        autoComplete={autoComplete}
        required
        className={inputClass}
      />
    </div>
  );

  const renderSelect = (
    label: string,
    name: keyof FormData,
    placeholder: string,
    options: { label: string; value: string }[]
  ) => (
    <div className="min-w-0" key={name}>
      <label htmlFor={name} className={labelClass}>
        {label}
        {requiredMark}
      </label>

      <div className="relative">
        <select
          id={name}
          name={name}
          value={formData[name] as string}
          onChange={handleChange}
          required
          className={`${inputClass} appearance-none pr-10 ${
            !formData[name] ? "text-slate-400" : ""
          }`}
        >
          <option value="" disabled>
            {placeholder}
          </option>

          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        <ChevronDown className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
      </div>
    </div>
  );

  if (submitted) {
    return (
      <section
        id="booking-section"
        className="bg-[#F7F8FA] px-4 py-12 sm:px-6 sm:py-16"
      >
        <div className="mx-auto max-w-5xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="flex min-h-[400px] flex-col items-center justify-center px-6 py-12 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600">
              <Check className="h-8 w-8" />
            </div>

            <h2 className="mt-6 text-2xl font-bold tracking-tight text-[#0B1D36]">
              Thank You!
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              Your form has been submitted successfully.
            </p>

            <button
              type="button"
              onClick={resetForm}
              className="mt-7 inline-flex h-11 items-center gap-2 rounded-xl bg-[#0B1D36] px-5 text-sm font-semibold text-white transition hover:bg-[#142D4C]"
            >
              Submit Another Response
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="booking-section"
      className="bg-[#F7F8FA] px-4 py-10 sm:px-6 sm:py-14 lg:py-16"
    >
      <div className="mx-auto max-w-5xl">
        <div className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-[0_12px_50px_-24px_rgba(11,29,54,0.20)] lg:grid lg:grid-cols-12">

          {/* Left: Progress panel */}
          <aside className="relative overflow-hidden bg-[#0B1D36] px-5 py-5 text-white sm:px-7 sm:py-6 lg:col-span-4 lg:px-7 lg:py-9">
            <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full border border-white/[0.06]" />
            <div className="pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full border border-white/[0.06]" />

            <div className="relative flex items-center gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.07] text-[#D8BB71]">
                <GraduationCap className="h-6 w-6" />
              </div>

              <div>
                <h2 className="text-sm font-bold tracking-wide sm:text-base">
                  Student Consultation
                </h2>
                <p className="mt-1 text-xs text-slate-400">
                  Study Abroad
                </p>
              </div>
            </div>

            {/* Desktop step list */}
            <div className="relative mt-8 hidden lg:block">
              {steps.map((step, index) => {
                const StepIcon = step.icon;
                const isActive = index === currentStep;
                const isComplete = index < currentStep;

                return (
                  <div
                    key={step.title}
                    className="relative flex min-h-[88px] gap-3"
                  >
                    {index < steps.length - 1 && (
                      <div
                        className={`absolute left-[19px] top-10 h-[48px] w-px ${
                          isComplete
                            ? "bg-[#C9A84C]"
                            : "bg-white/10"
                        }`}
                      />
                    )}

                    <div
                      className={`relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border transition-colors ${
                        isActive
                          ? "border-[#C9A84C] bg-[#C9A84C] text-[#0B1D36]"
                          : isComplete
                            ? "border-[#C9A84C]/40 bg-[#C9A84C]/10 text-[#D8BB71]"
                            : "border-white/10 bg-white/[0.04] text-slate-400"
                      }`}
                    >
                      {isComplete ? (
                        <Check className="h-4 w-4" />
                      ) : (
                        <StepIcon className="h-[18px] w-[18px]" />
                      )}
                    </div>

                    <div className="min-w-0 pt-1">
                      <p
                        className={`text-sm font-semibold ${
                          isActive
                            ? "text-white"
                            : "text-slate-400"
                        }`}
                      >
                        {step.title}
                      </p>

                      <p className="mt-1 text-xs text-slate-500">
                        Step {index + 1} of {steps.length}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Mobile step list */}
            <div className="relative mt-5 grid grid-cols-3 gap-2 lg:hidden">
              {steps.map((step, index) => {
                const StepIcon = step.icon;
                const isActive = index === currentStep;
                const isComplete = index < currentStep;

                return (
                  <div
                    key={step.title}
                    className="min-w-0"
                  >
                    <div
                      className={`mb-2 flex h-9 w-9 items-center justify-center rounded-lg border ${
                        isActive
                          ? "border-[#C9A84C] bg-[#C9A84C] text-[#0B1D36]"
                          : isComplete
                            ? "border-[#C9A84C]/40 bg-[#C9A84C]/10 text-[#D8BB71]"
                            : "border-white/15 text-slate-400"
                      }`}
                    >
                      {isComplete ? (
                        <Check className="h-4 w-4" />
                      ) : (
                        <StepIcon className="h-4 w-4" />
                      )}
                    </div>

                    <p
                      className={`text-[11px] font-semibold leading-4 sm:text-xs ${
                        isActive ? "text-white" : "text-slate-400"
                      }`}
                    >
                      {index + 1}. {step.title}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Progress */}
            <div className="relative mt-6 border-t border-white/10 pt-5 lg:mt-4">
              <div className="mb-2 flex items-center justify-between text-xs">
                <span className="text-slate-400">Your progress</span>
                <span className="font-semibold text-[#D8BB71]">
                  {Math.round(((currentStep + 1) / steps.length) * 100)}%
                </span>
              </div>

              <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
                <div
                  className="h-full rounded-full bg-[#C9A84C] transition-all duration-300"
                  style={{
                    width: `${((currentStep + 1) / steps.length) * 100}%`,
                  }}
                />
              </div>
            </div>
          </aside>

          {/* Right: Form panel */}
          <div className="min-w-0 px-5 py-7 sm:px-8 sm:py-8 lg:col-span-8 lg:px-10 lg:py-9">
            <div className="mb-6 border-b border-slate-100 pb-5">
              <div className="mb-3 flex items-center justify-between gap-3">
                <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.14em] text-[#92752D]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#C9A84C]" />
                  Step {currentStep + 1} of {steps.length}
                </span>

                <span className="text-xs text-slate-400">
                  * Required
                </span>
              </div>

              <h3 className="text-xl font-bold tracking-tight text-[#0B1D36] sm:text-2xl">
                {steps[currentStep].title}
              </h3>
            </div>

            <form
              ref={formRef}
              onSubmit={handleSubmit}
              noValidate
              className="flex flex-col"
            >
              {/* Equal minimum content height across all steps */}
              <div className="min-h-[310px] sm:min-h-[300px]">

                {/* Step 1: Personal Details */}
                {currentStep === 0 && (
                  <div
                    data-active-step
                    className="grid grid-cols-1 gap-x-5 gap-y-5 sm:grid-cols-2"
                  >
                    {renderField(
                      "First Name",
                      "firstName",
                      "text",
                      "Enter first name",
                      "given-name"
                    )}

                    {renderField(
                      "Last Name",
                      "lastName",
                      "text",
                      "Enter last name",
                      "family-name"
                    )}

                    {renderField(
                      "Email Address",
                      "email",
                      "email",
                      "you@example.com",
                      "email"
                    )}

                    {renderField(
                      "Phone Number",
                      "phone",
                      "tel",
                      "+880 1700-000000",
                      "tel"
                    )}

                    <div className="sm:col-span-2">
                      {renderField(
                        "Current City",
                        "city",
                        "text",
                        "e.g. Dhaka, Chattogram",
                        "address-level2"
                      )}
                    </div>
                  </div>
                )}

                {/* Step 2: Academic Profile */}
                {currentStep === 1 && (
                  <div
                    data-active-step
                    className="grid grid-cols-1 content-start gap-x-5 gap-y-5 sm:grid-cols-2"
                  >
                    {renderSelect(
                      "Highest Education Level",
                      "educationLevel",
                      "Select education level",
                      [
                        { label: "SSC", value: "SSC" },
                        { label: "HSC", value: "HSC" },
                        { label: "Diploma", value: "Diploma" },
                        { label: "O Level", value: "O level" },
                        { label: "A Level", value: "A level" },
                        { label: "Bachelor's", value: "Bachelor's" },
                        { label: "Hon's", value: "Hon's" },
                        { label: "Master's", value: "Master's" },
                        { label: "MBBS", value: "MBBS" },
                      ]
                    )}

                    {/* Show institution field only after an education level is selected */}
                    {formData.educationLevel && (
                      <div className="sm:col-span-2">
                        {renderField(
                          "School / College / University",
                          "institutionName",
                          "text",
                          "Enter institution name"
                        )}
                      </div>
                    )}
                  </div>
                )}

                {/* Step 3: English Proficiency */}
                {currentStep === 2 && (
                  <div
                    data-active-step
                    className="space-y-5"
                  >
                    {renderSelect(
                      "Have you taken IELTS / PTE / TOEFL?",
                      "hasEnglishTest",
                      "Select your current status",
                      [
                        {
                          label: "Yes, I have taken the test",
                          value: "yes",
                        },
                        {
                          label: "No, I plan to take it",
                          value: "no",
                        },
                      ]
                    )}

                    {formData.hasEnglishTest === "yes" && (
                      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                        {renderSelect(
                          "Test Name",
                          "testName",
                          "Select test",
                          [
                            { label: "IELTS", value: "IELTS" },
                            { label: "PTE", value: "PTE" },
                            { label: "TOEFL", value: "TOEFL" },
                            { label: "OIETC", value: "OIETC" },
                            { label: "Duolingo", value: "Duolingo" },
                          ]
                        )}

                        {renderField(
                          "Overall Score",
                          "overallScore",
                          "number",
                          "e.g. 7.0 or 65"
                        )}
                      </div>
                    )}

                    {formData.hasEnglishTest === "no" &&
                      renderField(
                        "Tentative Exam Month / Year",
                        "tentativeExamDate",
                        "text",
                        "e.g. November 2026"
                      )}

                    <div className="border-t border-slate-100 pt-5">
                      <label className="flex cursor-pointer items-start gap-3">
                        <input
                          type="checkbox"
                          name="consent"
                          checked={formData.consent}
                          onChange={handleChange}
                          required
                          className="mt-0.5 h-4 w-4 shrink-0 cursor-pointer rounded border-slate-300 accent-[#0B1D36] focus:ring-[#C9A84C]"
                        />

                        <span className="text-sm leading-5 text-slate-600">
                          I agree to be contacted regarding my study abroad plans.
                          {requiredMark}
                        </span>
                      </label>
                    </div>
                  </div>
                )}
              </div>

              {/* Navigation stays at a consistent position */}
              <div className="mt-7 flex items-center justify-between gap-3 border-t border-slate-100 pt-5">
                <button
                  type="button"
                  onClick={handleBack}
                  disabled={currentStep === 0}
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-slate-200 px-4 text-sm font-semibold text-slate-600 transition hover:border-slate-300 hover:bg-slate-50 disabled:invisible"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Back
                </button>

                <button
                  type="submit"
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-[#0B1D36] px-5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#142D4C] focus:outline-none focus:ring-4 focus:ring-[#0B1D36]/10"
                >
                  {currentStep === steps.length - 1 ? (
                    <>
                      Submit Application
                      <Send className="h-4 w-4" />
                    </>
                  ) : (
                    <>
                      Continue
                      <ArrowRight className="h-4 w-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationForm;
