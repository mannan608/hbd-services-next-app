"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  GraduationCap,
  MapPin,
  Sparkles,
  Star,
} from "lucide-react";
import { useInView } from "@/hooks/useInView";
import type { DestinationListItem } from "@/data/destinations/destination.types";

const REVEAL =
  "transition-all duration-700 ease-out motion-reduce:transition-none motion-reduce:translate-y-0 motion-reduce:opacity-100";

interface DestinationCardProps {
  destination: DestinationListItem;
  index: number;
}

export default function DestinationCard({ destination, index }: DestinationCardProps) {
  const { ref, visible } = useInView<HTMLDivElement>();

  return (
    <Link href={`/destinations/${destination.slug}`} prefetch={false} className="block h-full">
      <article
        ref={ref}
        style={{ transitionDelay: `${(index % 3) * 90}ms` }}
        className={`group flex h-full flex-col overflow-hidden rounded-3xl border border-neutral-200/80 bg-white shadow-[0_1px_3px_rgba(15,23,42,0.06)] hover:-translate-y-1.5 hover:border-brand-200 hover:shadow-[0_24px_48px_-16px_rgba(15,23,42,0.18)] ${REVEAL} ${visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
      >
        <div className="relative h-52 shrink-0 overflow-hidden">
          <Image
            src={destination.image}
            alt={`${destination.title}, ${destination.country}`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-110 motion-reduce:transition-none"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

          <div className="absolute left-4 top-4 flex items-center gap-2">
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/95 text-base leading-none shadow-sm backdrop-blur">
              <span aria-hidden="true">{destination.flag}</span>
            </span>
            {destination.featured && (
              <span className="inline-flex items-center gap-1 rounded-full bg-brand-500/95 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-white shadow-sm backdrop-blur">
                <Sparkles className="h-3 w-3" /> Featured
              </span>
            )}
            {destination.popular && !destination.featured && (
              <span className="rounded-full bg-white/95 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-brand-800 shadow-sm">
                Popular
              </span>
            )}
          </div>

          {destination.rating !== null && (
            <div className="absolute right-4 top-4 inline-flex items-center gap-1 rounded-full bg-white/95 px-2.5 py-1 text-xs font-bold text-neutral-800 shadow-sm backdrop-blur">
              <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
              {destination.rating.toFixed(2)}
            </div>
          )}

          <div className="absolute bottom-4 left-5 right-5">
            <h3 className="text-xl font-extrabold tracking-tight text-white drop-shadow-md">
              {destination.title}
            </h3>
            <div className="mt-1 flex items-center gap-1.5 text-sm text-white/85">
              <MapPin className="h-4 w-4 shrink-0" />
              {destination.country}
            </div>
          </div>
        </div>

        <div className="flex flex-1 flex-col p-5">
          <p className="line-clamp-2 text-sm leading-6 text-neutral-600">
            {destination.description}
          </p>

          {destination.topUniversities.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-1.5">
              {destination.topUniversities.slice(0, 3).map((university) => (
                <span key={university} className="inline-flex items-center gap-1 rounded-lg bg-brand-50 px-2.5 py-1 text-[11px] font-medium text-brand-700">
                  <GraduationCap className="h-3.5 w-3.5" />
                  {university}
                </span>
              ))}
            </div>
          )}

          <div className="mt-4 space-y-2">
            <div className="flex items-center justify-between gap-3 rounded-xl border border-neutral-100 bg-neutral-50 px-3 py-2 text-xs">
              <span className="font-medium text-neutral-500">Avg. Cost</span>
              <span className="text-right font-semibold text-neutral-800">{destination.avgCost}</span>
            </div>
            <div className="flex items-center justify-between gap-3 rounded-xl border border-neutral-100 bg-neutral-50 px-3 py-2 text-xs">
              <span className="font-medium text-neutral-500">Visa Processing</span>
              <span className="text-right font-semibold text-neutral-800">{destination.visaProcessing}</span>
            </div>
          </div>

          <div className="mt-auto flex items-center justify-between border-t border-neutral-100 pt-4 mt-4">
            <span className="text-xs text-neutral-400">
              {destination.reviewsCount > 0
                ? `${destination.reviewsCount.toLocaleString()} reviews`
                : "Reviews coming soon"}
            </span>
            <span className="inline-flex items-center gap-1 text-sm font-semibold text-brand-600">
              Learn more
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 motion-reduce:transition-none" />
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}
