
"use client";

import Image from "next/image";

const suggestions = [
  { name: "Australia", code: "AU", flag: "🇦🇺" },
  { name: "USA", code: "US", flag: "🇺🇸" },
  { name: "UK", code: "GB", flag: "🇬🇧" },
  { name: "Canada", code: "CA", flag: "🇨🇦" },
  { name: "Malaysia", code: "MY", flag: "🇲🇾" },
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
          <div className="pointer-events-none absolute -bottom-2 right-2 z-20 w-[min(46%,560px)] max-md:hidden">
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
      </div>
    </section>
  );
}
