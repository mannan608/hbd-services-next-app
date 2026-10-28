"use client";

import Image from "next/image";
import { Sparkles } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const patnerData=[
  {
    "id": "1",
    "name": "Stanford University",
    "logo": "/assets/patners/sponsor_1.png"
  },
  {
    "id": "2",
    "name": "Harvard University",
    "logo": "/assets/patners/sponsor_2.png"
  },
  {
    "id": "3",
    "name": "University of Oxford",
    "logo": "/assets/patners/sponsor_3.png"
  },
  {
    "id": "4",
    "name": "MIT",
    "logo": "/assets/patners/sponsor_4.png"
  },
  {
    "id": "5",
    "name": "University of Cambridge",
    "logo": "/assets/patners/sponsor_5.png"
  },
  {
    "id": "6",
    "name": "Yale University",
    "logo": "/assets/patners/sponsor_6.png"
  },
  {
    "id": "7",
    "name": "Princeton University",
    "logo": "/assets/patners/sponsor_7.png"
  },
  {
    "id": "8",
    "name": "Columbia University",
    "logo": "/assets/patners/sponsor_8.png"
  }
]

/* ── Types ─────────────────────────────────────────────── */
export interface PartnerUniversity {
  id: string;
  name: string;
  logo: string;
}


const UniversityMarqueeSection = () => {
  const { ref: headerRef, visible: headerVisible } = useInView();

  return (
    <section className="relative overflow-hidden bg-slate-50/50 py-16 dark:bg-slate-950 md:py-24">
      {/* Header Container */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header
          ref={headerRef}
          className={`mx-auto max-w-2xl text-center transition-all duration-700 ${
            headerVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-200/60 bg-brand-500/10 px-4 py-2 shadow-sm backdrop-blur-sm">
            <Sparkles className="h-4 w-4 animate-pulse text-brand-600 dark:text-brand-400" />
            <span className="text-xs font-bold uppercase tracking-widest text-brand-600 dark:text-brand-400">
              Global Network
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-2xl font-extrabold uppercase tracking-tight text-slate-900 sm:text-3xl md:text-4xl lg:text-5xl dark:text-white">
            Trusted By{" "}
            <span className="bg-gradient-to-r from-brand-500 to-indigo-600 bg-clip-text text-transparent">
              2,000+ Universities
            </span>
          </h2>

          {/* Description */}
          <p className="mx-auto mt-4 max-w-xl text-base text-slate-600 sm:text-lg dark:text-neutral-400">
            Partnering with the world's leading educational institutions to deliver global success.
          </p>
        </header>
      </div>

      {/* Infinite Marquee Container */}
      <div className="relative mt-12 space-y-6">
        {/* Left & Right Gradient Vignettes for Seamless Fade */}
        <div className="pointer-events-none absolute bottom-0 left-0 top-0 z-20 w-20 bg-gradient-to-r from-slate-50 to-transparent sm:w-32 lg:w-48 dark:from-slate-950" />
        <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-20 w-20 bg-gradient-to-l from-slate-50 to-transparent sm:w-32 lg:w-48 dark:from-slate-950" />

        {/* Row 1: Left to Right Marquee */}
        <div className="flex w-full overflow-hidden">
          <div className="flex min-w-full shrink-0 animate-marquee-left gap-5 pr-5 hover:[animation-play-state:paused]">
            {[...patnerData, ...patnerData].map((uni, idx) => (
              <div
                key={`r1-${uni.id}-${idx}`}
                className="group flex h-20 shrink-0 items-center justify-center rounded-2xl border border-slate-200/80 bg-white px-8 shadow-[0_1px_3px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-brand-300 hover:shadow-lg dark:border-neutral-800 dark:bg-neutral-900"
              >
                <div className="relative h-10 w-36 grayscale opacity-75 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105">
                  <Image
                    src={uni.logo}
                    alt={uni.name}
                    fill
                    sizes="150px"
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Right to Left Marquee */}
        <div className="flex w-full overflow-hidden">
          <div className="flex min-w-full shrink-0 animate-marquee-right gap-5 pr-5 hover:[animation-play-state:paused]">
            {[...patnerData, ...patnerData].map((uni, idx) => (
              <div
                key={`r2-${uni.id}-${idx}`}
                className="group flex h-20 shrink-0 items-center justify-center rounded-2xl border border-slate-200/80 bg-white px-8 shadow-[0_1px_3px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-brand-300 hover:shadow-lg dark:border-neutral-800 dark:bg-neutral-900"
              >
                <div className="relative h-10 w-36 grayscale opacity-75 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105">
                  <Image
                    src={uni.logo}
                    alt={uni.name}
                    fill
                    sizes="150px"
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default UniversityMarqueeSection