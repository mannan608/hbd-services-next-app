"use client";
import { Metadata } from "next";
import { ArrowRight, Zap } from "lucide-react";
import { useInView } from "@/hooks/useInView";
import DestinationCard from "../destinations/DestinationCard";


import Link from "next/link";


import { getAllDestinations } from "@/data/destinations/destination-list";


export const metadata: Metadata = {
  title: "Study Abroad Destinations",
  description:
    "Explore international study destinations and find the right country for your education journey.",
};

const DestinationSection = () => {
  const { ref, visible } = useInView();

  const destinations = getAllDestinations();

  return (
    <section className="relative overflow-hidden bg-slate-50 pb-16 pt-10 dark:bg-slate-950 md:pb-24">
      {/* Ambient glows */}
      <div className="pointer-events-none absolute -top-32 left-1/4 h-80 w-80 rounded-full bg-brand-400/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 right-1/4 h-80 w-80 rounded-full bg-brand-400/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          ref={ref}
          className={`mx-auto max-w-2xl py-12 text-center transition-all duration-700 ${visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
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
              key={destination.id}
              destination={destination}
              index={index}
            />
          ))}
        </div>
        <div className="flex justify-end mt-6">
          <Link
            href="/destinations"
            className="group inline-flex items-center gap-2 text-sm font-medium text-brand-500 transition-all duration-300 hover:gap-3 hover:text-brand-600"
          >
            <span className="transition-transform duration-300 group-hover:-translate-x-0.5">
              View All Destinations
            </span>

            <ArrowRight className="h-4 w-4 transition-transform duration-300 ease-out group-hover:translate-x-1 group-hover:scale-110" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default DestinationSection