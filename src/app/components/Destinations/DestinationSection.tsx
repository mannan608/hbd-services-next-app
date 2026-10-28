"use client";

import { Zap } from "lucide-react";
import { useInView } from "@/hooks/useInView";
import DestinationCard from "./DestinationCard";

import malaysia from "@/app/assets/destinations/malaysia.webp";
import unitedStates from "@/app/assets/destinations/united-states.webp";
import unitedkingdom from "@/app/assets/destinations/united-kingdom.webp";
import canada from "@/app/assets/destinations/canada.webp";
import australia from "@/app/assets/destinations/australia.webp";
import newZealand from "@/app/assets/destinations/new-zealand.webp";


const destinations = [
  {
    "slug": "united-states",
    "name": "United States",
    "image": unitedStates,
    "hero": {
      "description": "Home to many of the world's top-ranked universities, offering flexible academic programs and vibrant campus cultures."
    },
    "popular": true
  },
  {
    "slug": "united-kingdom",
    "name": "United Kingdom",
    "image": unitedkingdom,
    "hero": {
      "description": "Experience centuries of academic excellence with shorter, intensive undergraduate and postgraduate degree structures."
    },
    "popular": true
  },
  {
    "slug": "canada",
    "name": "Canada",
    "image": canada,
    "hero": {
      "description": "Renowned for high safety standards, affordable tuition fees, and welcoming immigration pathways for international graduates."
    },
    "popular": false
  },
  {
    "slug": "australia",
    "name": "Australia",
    "image": australia,
    "hero": {
      "description": "Combine world-class education with a high quality of life, sunny coastal climates, and fantastic part-time work rights."
    },
    "popular": true
  },
  {
    "slug": "new-zealand",
    "name": "New Zealand",
    "image":newZealand,
    "hero": {
      "description": "Benefit from tuition-free or low-cost education at public universities with exceptional engineering and tech programs."
    },
    "popular": false
  },
  {
    "slug": "malaysia",
    "name": "Malaysia",
    "image": malaysia,
    "hero": {
      "description": "A vibrant, English-speaking hub in Europe with a booming tech and pharma industry offering great post-study work options."
    },
    "popular": false
  }
]

const DestinationSection = () => {
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
              Global Education
            </span>
          </div>

          <h1 className="text-2xl font-extrabold uppercase tracking-tight text-slate-900 sm:text-3xl md:text-4xl lg:text-5xl dark:text-white">
            Choose Your{" "}
            <span className="bg-gradient-to-r from-brand-500 to-brand-500 bg-clip-text text-transparent">
              Study Destination
            </span>
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-base text-neutral-600 sm:text-lg dark:text-neutral-400">
            Explore top-tier universities, world-class education systems, and
            vibrant culture across leading global destinations.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
          {destinations.map((destination, index) => (
            <DestinationCard
              key={destination.slug}
              destination={destination}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default DestinationSection