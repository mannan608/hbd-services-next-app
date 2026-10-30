"use client";

import Link from "next/link";
import {
  Headphones,
  Laptop,
  MessageSquareQuote,
  CheckCircle2,
  CalendarDays,
  Sparkles,
  ArrowRight,
  GraduationCap,
  type LucideIcon,
} from "lucide-react";
import { useInView } from "@/hooks/useInView";

/* ── Types ─────────────────────────────────────────────── */

const academyData = {
  "sectionHeader": {
    "badge": "HBD Language Academy",
    "title": "Pass your English and NAATI CCL exams with confidence",
    "description": "Structured classes, timed mock tests, and personal feedback from trainers who know exactly what examiners look for."
  },
  "courses": [
    {
      "id": "ielts",
      "title": "IELTS Preparation",
      "description": "Academic and General Training. Build skills across all four modules with exam-style practice.",
      "icon": "Headphones",
      "colorTheme": "brand",
      "tags": ["Listening", "Reading", "Writing", "Speaking"],
      "features": [
        "Band score strategy for university and visa needs",
        "Writing task 1 and 2 correction with feedback",
        "Speaking practice with mock interviews"
      ]
    },
    {
      "id": "pte",
      "title": "PTE Academic Preparation",
      "description": "Train on a computer-based format so test day feels familiar, with a focus on integrated skills.",
      "icon": "Laptop",
      "colorTheme": "purple",
      "tags": ["Speaking & Writing", "Reading", "Listening"],
      "features": [
        "Templates and techniques for each question type",
        "Computer-based mock tests with score reports",
        "Pronunciation and fluency coaching"
      ]
    },
    {
      "id": "naati",
      "title": "NAATI CCL Preparation",
      "description": "Earn credentialed community language points for your Australian migration pathway.",
      "icon": "MessageSquareQuote",
      "colorTheme": "emerald",
      "tags": ["Dialogues", "Interpreting", "Vocabulary"],
      "features": [
        "Practice with real exam-style dialogues",
        "Note-taking and memory techniques",
        "Domain vocabulary for health, legal, education & more"
      ]
    }
  ],
  "formats": [
    {
      "title": "Group Batches",
      "description": "Small classes with peers on the same goal"
    },
    {
      "title": "One-to-One",
      "description": "Private sessions focused on your weak areas"
    },
    {
      "title": "Mock Test Days",
      "description": "Full timed tests with detailed review"
    }
  ],
  "studentBenefits": [
    "Free level assessment before you enrol",
    "Official-style practice material",
    "Weekly progress reports",
    "Online and in-person class options"
  ],
  "cta": {
    "text": "Book a free level check",
    "url": "https://hbdservices.com/contacts"
  }
}
export interface CourseItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  colorTheme: string;
  tags: string[];
  features: string[];
}

export interface FormatItem {
  title: string;
  description: string;
}

export interface AcademyData {
  sectionHeader: {
    badge: string;
    title: string;
    description: string;
  };
  courses: CourseItem[];
  formats: FormatItem[];
  studentBenefits: string[];
  cta: {
    text: string;
    url: string;
  };
}

/* Map string names to Lucide Icons */
const iconMap: Record<string, LucideIcon> = {
  Headphones,
  Laptop,
  MessageSquareQuote,
};


const LanguageAcademySection = () => {
  const { ref: headerRef, visible: headerVisible } = useInView();
  const { ref: gridRef, visible: gridVisible } = useInView();
  const { ref: bottomRef, visible: bottomVisible } = useInView();

  return (
    <section className="relative overflow-hidden bg-slate-50/60 py-20 dark:bg-slate-950 lg:py-28">
      {/* Ambient background glows */}
      <div className="pointer-events-none absolute top-10 left-10 h-96 w-96 rounded-full bg-brand-500/5 blur-3xl" />
      <div className="pointer-events-none absolute bottom-10 right-10 h-96 w-96 rounded-full bg-brand-500/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div
          ref={headerRef}
          className={`mx-auto max-w-3xl text-center pb-16 transition-all duration-700 ${
            headerVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-200/65 bg-brand-500/10 px-4 py-1.5 shadow-sm">
            <Sparkles className="h-4 w-4 text-brand-600 dark:text-brand-400" />
            <span className="text-xs font-bold uppercase tracking-widest text-brand-600 dark:text-brand-400">
              {academyData.sectionHeader.badge}
            </span>
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl dark:text-white">
            {academyData.sectionHeader.title}
          </h2>

          <p className="mt-4 text-base text-slate-600 sm:text-lg dark:text-neutral-400 leading-relaxed">
            {academyData.sectionHeader.description}
          </p>
        </div>

        {/* Courses Grid */}
        <div
          ref={gridRef}
          className={`grid grid-cols-1 gap-8 lg:grid-cols-3 mb-10 transition-all duration-700 delay-100 ${
            gridVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          {academyData.courses.map((course, idx) => {
            const IconComponent = iconMap[course.icon] || GraduationCap;
            return (
              <div
                key={course.id}
                style={{ transitionDelay: `${idx * 100}ms` }}
                className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-7 sm:p-8 shadow-[0_1px_3px_rgba(15,23,42,0.06)] transition-all duration-500 hover:-translate-y-1.5 hover:border-brand-300 hover:shadow-[0_20px_40px_-15px_rgba(15,23,42,0.12)] dark:border-neutral-800 dark:bg-neutral-900"
              >
                <div>
                  {/* Icon */}
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 border border-brand-100 shadow-sm transition-transform duration-500 group-hover:scale-110 group-hover:bg-brand-600 group-hover:text-white dark:bg-neutral-800 dark:border-neutral-700">
                    <IconComponent className="h-6 w-6" />
                  </div>

                  {/* Title & Desc */}
                  <div className="mt-6">
                    <h3 className="text-xl font-bold tracking-tight text-slate-900 group-hover:text-brand-600 transition-colors dark:text-white">
                      {course.title}
                    </h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-slate-500 dark:text-neutral-400">
                      {course.description}
                    </p>
                  </div>

                  {/* Exam Tags */}
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {course.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="rounded-lg bg-slate-100 px-2.5 py-1 text-[11px] font-semibold text-slate-600 dark:bg-neutral-800 dark:text-neutral-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Feature Checklist */}
                  <ul className="mt-6 space-y-2.5 border-t border-slate-100 pt-6 dark:border-neutral-800">
                    {course.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs text-slate-600 dark:text-neutral-400 leading-normal">
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-500 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Split Container: Formats & Benefits */}
        <div
          ref={bottomRef}
          className={`grid grid-cols-1 gap-8 lg:grid-cols-12 items-stretch transition-all duration-700 delay-200 ${
            bottomVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          {/* Formats Box */}
          <div className="lg:col-span-7 flex flex-col justify-between rounded-3xl border border-slate-200/80 bg-white p-8 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
            <div>
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-brand-600 mb-4 dark:bg-neutral-800 dark:text-brand-400">
                <CalendarDays className="h-5 w-5" />
              </div>
              <h3 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
                Learn the way that fits your schedule
              </h3>
              <p className="mt-2 text-sm text-slate-500 dark:text-neutral-400 leading-relaxed">
                Pick a format, start with a free level check, and get a study plan built around your test date and target score.
              </p>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
                {academyData.formats.map((format, idx) => (
                  <div
                    key={idx}
                    className="rounded-2xl border border-slate-100 bg-slate-50/70 p-4 transition-colors hover:border-brand-200 dark:border-neutral-800 dark:bg-neutral-800/50"
                  >
                    <p className="font-bold text-slate-900 text-sm dark:text-white">
                      {format.title}
                    </p>
                    <p className="mt-1 text-xs text-slate-500 dark:text-neutral-400 leading-relaxed">
                      {format.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Student Benefits & CTA Card */}
          <div className="lg:col-span-5 flex flex-col justify-between rounded-3xl border border-slate-200/80 bg-gradient-to-br from-slate-900 to-brand-950 p-8 shadow-xl text-white">
            <div>
              <h3 className="text-xl font-bold tracking-tight">
                What every student gets
              </h3>
              <ul className="mt-6 space-y-3.5">
                {academyData.studentBenefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm text-slate-200">
                    <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
                      ✓
                    </div>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10">
              <Link
                href={academyData.cta.url}
                className="group flex w-full items-center justify-center gap-2 rounded-2xl bg-red-600 px-6 py-4 text-sm font-semibold text-white shadow-lg shadow-red-600/30 transition-all duration-300 hover:bg-red-500 hover:shadow-red-500/50"
              >
                <span>{academyData.cta.text}</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default LanguageAcademySection