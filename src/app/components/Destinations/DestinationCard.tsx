"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import {
  MapPin,
  GraduationCap,
  Briefcase,
  ArrowRight,
  Flame,
} from "lucide-react";
import { useInView } from "@/hooks/useInView";

/* ── Types ─────────────────────────────────────────────── */
export interface Destination {
  slug: string;
  name: string;
  image: StaticImageData;
  hero: { description: string };
  popular?: boolean;
}

interface DestinationCardProps {
  destination: Destination;
  index: number;
}

const DestinationCard = ({ destination, index }: DestinationCardProps) => {
  const { ref, visible } = useInView();

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${(index % 3) * 100}ms` }}
      className={`group flex h-full flex-col overflow-hidden rounded-3xl border border-neutral-200/80 bg-white shadow-[0_1px_3px_rgba(15,23,42,0.06)] transition-all duration-700 ease-out hover:-translate-y-1.5 hover:border-brand-200 hover:shadow-[0_24px_48px_-16px_rgba(15,23,42,0.18)] dark:border-neutral-800 dark:bg-neutral-900 ${
        visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
    >
      {/* Image */}
      <Link
        href={`/destinations/${destination.slug}`}
        className="relative block h-56 shrink-0 overflow-hidden"
      >
        <Image
          src={destination.image}
          alt={destination.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-transparent" />

        {/* Badges */}
        <div className="absolute left-4 top-4 flex gap-2">
          {destination.popular && (
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1.5 text-xs font-semibold text-neutral-700 shadow-sm backdrop-blur">
              <Flame className="h-3.5 w-3.5 text-orange-500" />
              Popular
            </span>
          )}
        </div>

        {/* Country name over image */}
        <div className="absolute bottom-4 left-5 right-5">
          <h3 className="text-2xl font-extrabold tracking-tight text-white drop-shadow-md">
            {destination.name}
          </h3>
          <div className="mt-1 flex items-center gap-1.5 text-sm text-white/85">
            <MapPin className="h-4 w-4 shrink-0" />
            <span>Study Destination</span>
          </div>
        </div>
      </Link>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        {/* Description */}
        <p className="text-sm leading-6 text-neutral-600 dark:text-neutral-400 line-clamp-2">
          {destination.hero.description}
        </p>

        {/* Highlights */}
        <div className="mt-5 grid grid-cols-2 gap-3">
          <div className="rounded-xl border border-neutral-100 bg-neutral-50 px-3.5 py-3 transition-colors duration-200 group-hover:border-brand-100 dark:border-neutral-800 dark:bg-neutral-800/50">
            <div className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white text-brand-500 shadow-sm dark:bg-neutral-700">
                <GraduationCap className="h-5 w-5" />
              </div>
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-wide text-neutral-400">
                  Universities
                </p>
                <p className="text-[13px] font-semibold text-neutral-800 dark:text-neutral-200">
                  Top Ranked
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-neutral-100 bg-neutral-50 px-3.5 py-3 transition-colors duration-200 group-hover:border-emerald-100 dark:border-neutral-800 dark:bg-neutral-800/50">
            <div className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white text-emerald-500 shadow-sm dark:bg-neutral-700">
                <Briefcase className="h-4.5 w-4.5" />
              </div>
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-wide text-neutral-400">
                  Career
                </p>
                <p className="text-xs font-semibold text-neutral-800 dark:text-neutral-200">
                  Work Options
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-auto pt-6">
          <Link
            href={`/destinations/${destination.slug}`}
            className="flex items-center justify-between border-t border-neutral-100 pt-4 dark:border-neutral-800"
          >
            <div>
              <p className="text-sm font-semibold text-brand-600">
                Explore Universities
              </p>
              <p className="mt-0.5 text-xs text-neutral-400">
                Discover your options
              </p>
            </div>
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200 text-neutral-400 transition-all duration-300 group-hover:border-brand-500 group-hover:bg-brand-500 group-hover:text-white group-hover:shadow-lg group-hover:shadow-brand-500/30">
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default DestinationCard