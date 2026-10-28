"use client";

import { useInView } from '@/hooks/useInView';
import { Zap } from 'lucide-react'
import ServiceCard from './ServiceCard';


const services=[
  {
    "id": "admission-counselling",
    "title": "Admission Counselling & Course Selection",
    "description": "Navigate the complex admissions process with expert guidance and select the perfect course to match your aspirations.",
    "icon": "Compass"
  },
  {
    "id": "language-prep",
    "title": "English Language Preparation (IELTS/PTE) & NAATI CCL",
    "description": "Excel in English proficiency exams such as IELTS, PTE, and NAATI CCL with our tailored preparation programs.",
    "icon": "Languages"
  },
  {
    "id": "scholarship",
    "title": "Scholarship & Financial Assistance",
    "description": "Unlock opportunities for scholarships and financial aid to support your academic ambitions without stress.",
    "icon": "Award"
  },
  {
    "id": "health-cover",
    "title": "Arranging Health Cover OSHC/OVHC",
    "description": "Ensure your well-being with hassle-free arrangements for Overseas Student Health Cover (OSHC) or Visitor Cover (OVHC).",
    "icon": "ShieldCheck"
  },
  {
    "id": "provider-changing",
    "title": "Course Provider Changing",
    "description": "Explore options for changing course providers seamlessly to optimize your educational experience and growth.",
    "icon": "RefreshCw"
  },
  {
    "id": "professional-year",
    "title": "Professional Year Admission",
    "description": "Secure admission into professional year programs to kickstart your career journey in your chosen field.",
    "icon": "Briefcase"
  }
]

const ServicesSection = () => {
     const { ref, visible } = useInView();
  return (
        <section className="relative overflow-hidden bg-slate-50 pb-16 pt-10 dark:bg-slate-950 md:pb-24">
      {/* Ambient glows */}
      <div className="pointer-events-none absolute -top-32 left-1/4 h-80 w-80 rounded-full bg-brand-400/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 right-1/4 h-80 w-80 rounded-full bg-brand-400/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          ref={ref}
          className={`mx-auto max-w-2xl py-12 text-center transition-all duration-700 ${
            visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-200/60 bg-brand-500/10 px-4 py-2">
            <Zap className="h-4 w-4 text-brand-500" />
            <span className="text-sm font-semibold uppercase tracking-wide text-brand-500">
              Our Services
            </span>
          </div>

          <h1 className="text-2xl font-extrabold uppercase tracking-tight text-slate-900 sm:text-3xl md:text-4xl lg:text-5xl dark:text-white">
            Everything You Need{" "}
            <span className="bg-gradient-to-r from-brand-500 to-brand-500 bg-clip-text text-transparent">
              To Study Abroad
            </span>
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-base text-neutral-600 sm:text-lg dark:text-neutral-400">
            From course selection to scholarships and health cover — expert
            guidance at every step of your study journey.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
           {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection