
"use client";

import Image from "next/image";
import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";

const suggestions = [
  "Nursing",
  "Master of IT",
  "MBA",
  "Cyber Security",
  "Foundation",
];

const features = [
  { title: "Compare", description: "Courses & fees", icon: "square" },
  { title: "Connect", description: "With verified experts", icon: "circle" },
  { title: "Apply", description: "With confidence", icon: "square" },
  { title: "Succeed", description: "In Australia", icon: "circle" },
];

const ASSETS = {
  background: "/assets/hero/bg_image.jpg",
  decorative: "/assets/hero/element_1.png",
  student: "/assets/hero/hero.webp",
};

export default function HeroSection() {
  const [search, setSearch] = useState("");
  const router = useRouter();

  function handleSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const query = search.trim();

    if (query) {
      router.push(`/courses?search=${encodeURIComponent(query)}`);
    }
  }

  return (
    <section className="relative isolate overflow-hidden bg-[linear-gradient(115deg,#F5FBFB_0%,#EAF7F6_40%,#D7EFEC_100%)] font-sans text-[#4A5768]">

      {/* Background photograph */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 z-0 w-[56%] bg-cover bg-center bg-no-repeat opacity-30 max-md:w-full max-md:opacity-15"
        style={{
          backgroundImage: `url("${ASSETS.background}")`,
          maskImage:
            "linear-gradient(90deg,transparent 0%,black 42%)",
          WebkitMaskImage:
            "linear-gradient(90deg,transparent 0%,black 42%)",
        }}
      />

      {/* Right teal radial accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-80 -right-35 z-1 h-205 w-205 rounded-full bg-[radial-gradient(circle_at_40%_35%,rgba(31,167,154,.85),rgba(11,154,139,.55)_60%,rgba(11,154,139,0)_72%)]"
      />

      {/* Large left outline */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-65 top-14.5 z-1 h-160 w-160 rounded-full border border-[rgba(11,154,139,.18)]"
      />

      {/* Bottom-left circle */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-45 -left-45 z-1 h-130 w-130 rounded-full bg-[rgba(127,214,203,.16)]"
      />

      <div className="relative z-10">

        {/* Main hero container */}
        <div className="relative mx-auto min-h-155 max-w-310 px-11 pb-0 pt-7.75 max-lg:px-8 max-md:min-h-0 max-md:px-5 max-md:pt-8">

          {/* Decorative background image */}
          <div className="pointer-events-none absolute right-5 top-33 z-1 w-[min(44%,520px)] max-md:hidden">
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

          {/* Student image: keep it layered behind the information card */}
          <div className="pointer-events-none absolute bottom-0 right-2 z-2 w-[min(46%,560px)] max-md:hidden">
            <Image
              src={ASSETS.student}
              alt="Student studying with a laptop"
              width={560}
              height={500}
              priority
              className="block h-auto w-full -scale-x-100 drop-shadow-[0_34px_46px_rgba(6,60,55,.28)]"
            />
          </div>

          {/* Floating information card */}
          <div className="absolute right-11 top-99.25 z-4 w-52.5 rounded-[18px] bg-white p-[22px_24px] shadow-[0_26px_60px_-26px_rgba(6,60,55,.42)] max-lg:right-6 max-md:hidden">
            <span className="mb-4 grid h-9.5 w-9.5 place-items-center rounded-[10px] bg-[#EDF8F6]">
              <span className="block h-3.75 w-3.75 rotate-45 rounded-xs bg-[#0B9A8B]" />
            </span>

            <div className="mb-1.5 text-[16px] font-extrabold tracking-[-0.02em] text-[#0F1B2D]">
              Your journey
            </div>

            <p className="text-[14px] leading-normal text-[#4A5768]">
              guided by experts,
              <br />
              powered by insights.
            </p>
          </div>

          {/* Left content */}
          <div className="relative z-3 max-w-[min(600px,52%)] max-md:max-w-none">

            {/* Guest browsing badge */}
            <div className="mb-7.5 inline-flex items-center gap-2.5 rounded-full border border-[rgba(11,154,139,.24)] bg-white/70 px-4.5 py-4.5 max-md:mb-6 max-sm:px-3">
              <span className="block h-1.75 w-1.75 shrink-0 rounded-full bg-[#0B9A8B]" />

              <span className="text-[13px] font-semibold text-[#33465C]">
                Guest browsing — no account needed
              </span>
            </div>

            {/* Main heading */}
            <h1 className="mb-6 text-[58px] font-extrabold leading-[1.1] tracking-[-0.035em] text-[#0F1B2D] text-pretty max-lg:text-[48px] max-sm:text-[38px]">
              Find your course in{" "}
              <span className="text-[#0B9A8B]">Australia</span>, then apply
              with an{" "}
              <span className="text-[#0B9A8B]">expert</span> beside you
            </h1>

            {/* Description */}
            <p className="mb-[8.5 max-w-[48ch] text-[17px] leading-[1.65] text-[#4A5768] max-md:mb-6 max-sm:text-[15px]">
              Compare tuition, English scores, intakes and scholarships across
              620+ institutions — then talk to a verified counsellor for free.
            </p>

            {/* Search bar */}
            <form
              onSubmit={handleSearch}
              role="search"
              className="flex items-center gap-3 rounded-full border border-[#E2E7EA] bg-white p-2 shadow-[0_20px_44px_-26px_rgba(6,60,55,.35)] max-sm:flex-wrap max-sm:rounded-2xl"
            >
              <label htmlFor="course-search" className="sr-only">
                Search courses
              </label>

              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                aria-hidden="true"
                className="ml-4 h-4.25 w-4.25 shrink-0 text-[#6B7889] max-sm:ml-2"
              >
                <circle cx="11" cy="11" r="6.5" />
                <path d="m16 16 4 4" />
              </svg>

              <input
                id="course-search"
                type="search"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search courses, e.g. Master of IT in Melbourne"
                className="h-10.5 min-w-0 flex-1 border-0 bg-transparent text-[15px] text-[#0F1B2D] outline-none placeholder:text-[#6B7889]/70"
              />

              <button
                type="submit"
                disabled={!search.trim()}
                className="shrink-0 rounded-full border-0 bg-[#0B9A8B] px-6 py-3.25 text-[15px] font-bold text-white transition-colors hover:bg-[#098376] disabled:cursor-not-allowed disabled:opacity-60 max-sm:w-full"
              >
                Search courses
              </button>
            </form>

            {/* Suggested courses */}
            <div className="mt-4.5 flex flex-wrap gap-2.5">
              {suggestions.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setSearch(item)}
                  aria-pressed={search === item}
                  className={`rounded-lg border px-4 py-2.25 text-[14px] font-semibold transition-colors ${
                    search === item
                      ? "border-[#0B9A8B] bg-[#EDF8F6] text-[#0B9A8B]"
                      : "border-[#D3E4E2] bg-white/80 text-[#33465C] hover:bg-white"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile student image */}
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

          {/* Mobile information card */}
          <div className="relative z-4 mx-auto mt-5 hidden w-full max-w-75 rounded-[18px] bg-white p-[22px_24px] shadow-[0_26px_60px_-26px_rgba(6,60,55,.42)] max-md:block">
            <span className="mb-4 grid h-9.5 w-9.5 place-items-center rounded-[10px] bg-[#EDF8F6]">
              <span className="block h-3.75 w-3.75 rotate-45 rounded-xs bg-[#0B9A8B]" />
            </span>

            <div className="mb-1.5 text-[16px] font-extrabold text-[#0F1B2D]">
              Your journey
            </div>

            <p className="text-[14px] leading-normal text-[#4A5768]">
              guided by experts,
              <br />
              powered by insights.
            </p>
          </div>
        </div>

        {/* Feature cards */}
        <div className="relative z-5 mx-auto grid max-w-310 grid-cols-4 gap-4.5 px-11 pb-8.5 pt-11 max-lg:grid-cols-2 max-lg:px-8 max-md:pt-8 max-sm:grid-cols-1 max-sm:gap-3 max-sm:px-5">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex min-h-21.5 items-center gap-3.5 rounded-2xl border border-white bg-white/95 p-[18px_20px] shadow-[0_20px_44px_-30px_rgba(6,60,55,.5)]"
            >
              <span className="grid h-9.5 w-9.5 shrink-0 place-items-center rounded-[10px] bg-[#EDF8F6]">
                <span
                  className={`block h-3.5 w-3.5 bg-[#0B9A8B] ${
                    feature.icon === "circle"
                      ? "rounded-full"
                      : "rounded-[3px]"
                  }`}
                />
              </span>

              <div>
                <div className="text-[16px] font-extrabold tracking-[-0.02em] text-[#0F1B2D]">
                  {feature.title}
                </div>

                <div className="mt-0.75 text-[14px] text-[#6B7889]">
                  {feature.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
