
"use client";

import Image from "next/image";
import { Scale, Users, FileCheck, GraduationCap, ArrowRight } from 'lucide-react';

const suggestions = [
  { name: "Australia", code: "AU", flag: "🇦🇺" },
  { name: "USA", code: "US", flag: "🇺🇸" },
  { name: "UK", code: "GB", flag: "🇬🇧" },
  { name: "Canada", code: "CA", flag: "🇨🇦" },
  { name: "New Zealand", code: "NZ", flag: "🇳🇿" },
  { name: "Malaysia", code: "MY", flag: "🇲🇾" },
];

const features = [
  {
    title: "Compare",
    description: "Courses & fees",
    icon: Scale,
    accentColor: "bg-blue-50 text-blue-600 dark:bg-blue-950/50 dark:text-blue-400",
  },
  {
    title: "Connect",
    description: "With verified experts",
    icon: Users,
    accentColor: "bg-emerald-50 text-emerald-600 dark:bg-emerald-950/50 dark:text-emerald-400",
  },
  {
    title: "Apply",
    description: "With confidence",
    icon: FileCheck,
    accentColor: "bg-amber-50 text-amber-600 dark:bg-amber-950/50 dark:text-amber-400",
  },
  {
    title: "Succeed",
    description: "In Australia",
    icon: GraduationCap,
    accentColor: "bg-indigo-50 text-indigo-600 dark:bg-indigo-950/50 dark:text-indigo-400",
  },
];

const ASSETS = {
  background: "/assets/hero/bg_image.jpg",
  decorative: "/assets/hero/element_1.png",
  student: "/assets/hero/hero.webp",
};

export default function HeroSection() {

  return (
    <section className="relative isolate overflow-hidden bg-[linear-gradient(115deg,#F5F9FE_0%,#EEF5FC_40%,#D7E7F7_100%)] font-sans text-neutral-600">
      {/* Background photograph */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 z-0 w-[56%] bg-cover bg-center bg-no-repeat opacity-30 max-md:w-full max-md:opacity-15"
        style={{
          backgroundImage: `url("${ASSETS.background}")`,
          maskImage:
            "linear-gradient(90deg,transparent 0%,#000 42%)",
          WebkitMaskImage:
            "linear-gradient(90deg,transparent 0%,#000 42%)",
        }}
      />

      {/* Right decorative radial gradient */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-80 -right-35 z-1 h-205 w-205 rounded-full bg-[radial-gradient(circle_at_40%_35%,rgba(91,149,210,.75),rgba(25,104,178,.45)_60%,rgba(25,104,178,0)_72%)]"
      />

      {/* Left circular outline */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-65 top-15 z-1 h-160 w-160 rounded-full border border-brand-200/70"
      />

      {/* Bottom-left accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-45 -left-45 z-1 h-130 w-130 rounded-full bg-brand-100/60"
      />

      <div className="relative z-10">
        {/* Main hero content */}
        <div className="relative mx-auto min-h-130 max-w-310 px-11 pb-0 pt-8.5 max-lg:px-8 max-md:min-h-0 max-md:px-5 max-md:pt-8">
          {/* Decorative image */}
          <div className="pointer-events-none absolute right-5 top-15 z-1 w-[min(44%,520px)] max-md:hidden">
            <Image
              src={ASSETS.decorative}
              alt=""
              aria-hidden="true"
              width={520}
              height={420}
              priority
              className="block h-auto w-full saturate-[1.25] brightness-[0.72]"
            />
          </div>

          {/* Student image */}
          <div className="pointer-events-none absolute bottom-0 right-2 z-2 w-[min(46%,560px)] max-md:hidden">
            <Image
              src={ASSETS.student}
              alt="Student studying with a laptop"
              width={560}
              height={500}
              priority
              className="block h-auto w-full -scale-x-100 drop-shadow-[0_34px_46px_rgba(13,60,104,.25)]"
            />
          </div>


          {/* Hero text */}
          <div className="relative z-3 max-w-[min(600px,52%)] max-md:max-w-none">
            {/* Guest browsing badge */}
            <div className="mb-7.5 inline-flex items-center gap-2.5 rounded-full border border-brand-200 bg-white/70 px-4.5 py-2 max-md:mb-6 max-sm:px-3">
              <span className="block h-1.75 w-1.75 shrink-0 rounded-full bg-brand-500" />

              <span className="text-[13px] font-semibold text-secondary-500">
                Guest browsing — no account needed
              </span>
            </div>

            <h1 className="mb-6 text-[58px] font-extrabold leading-[1.1] tracking-[-0.035em] text-secondary-500 text-pretty max-lg:text-[48px] max-md:max-w-170 max-sm:text-[38px]">
              Build Your Future with{" "}
              <span className="text-brand-500">HBD Services</span>
              — your trusted partner.
            </h1>

            {/* Description */}
            <p className="mb-[8.5 max-w-[48ch] text-[17px] leading-[1.65] text-neutral-600 max-md:mb-6 max-sm:text-[15px]">
              Compare tuition, English scores, intakes and scholarships across
              620+ institutions — then talk to a verified counsellor for free.
            </p>

            {/* Suggested courses */}
            <div className="mt-4 flex flex-wrap gap-2.5 items-center">
              {suggestions.map((item) => (
                <span
                  key={item.name}
                  className="inline-flex items-center gap-2 rounded-full border border-brand-200/60 bg-brand-50/70 px-3.5 py-1.5 text-xs font-semibold text-brand-700 shadow-2xs backdrop-blur-xs transition-all duration-200 hover:bg-brand-100/80 hover:border-brand-300 hover:shadow-xs hover:-translate-y-0.5 cursor-pointer"
                >

                  <img
                    src={`https://flagcdn.com/w20/${item.code.toLowerCase()}.png`}
                    srcSet={`https://flagcdn.com/w40/${item.code.toLowerCase()}.png 2x`}
                    width="16"
                    height="12"
                    alt={`${item.name} flag`}
                    className="h-3.5 w-4.5 rounded-xs object-cover shadow-2xs"
                  />

                  <span>{item.name}</span>
                </span>
              ))}
            </div>
          </div>

          {/* Student image on mobile */}
          <div className="relative z-2 mx-auto mt-8 hidden w-full max-w-110 max-md:block">
            <Image
              src={ASSETS.student}
              alt="Student studying with a laptop"
              width={560}
              height={500}
              priority
              className="block h-auto w-full object-contain"
            />
          </div>


        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="group relative flex items-center gap-4 rounded-2xl border border-slate-200/80 bg-white/80 p-5 shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-200/50 dark:border-slate-800 dark:bg-slate-900/80 dark:hover:shadow-none"
                >
                  {/* Icon Container with subtle animation */}
                  <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110 ${feature.accentColor}`}
                  >
                    <IconComponent className="h-6 w-6 stroke-[2]" />
                  </div>

                  {/* Text Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h3 className="text-base font-bold tracking-tight text-slate-900 dark:text-white">
                        {feature.title}
                      </h3>
                      <ArrowRight className="h-4 w-4 text-slate-400 opacity-0 transition-all duration-300 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0" />
                    </div>
                    <p className="mt-0.5 text-xs font-medium text-slate-500 dark:text-slate-400 truncate">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
