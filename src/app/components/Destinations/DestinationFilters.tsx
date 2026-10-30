"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import {
  ArrowRight,
  ChevronDown,
  Compass,
  Globe2,
  GraduationCap,
  MapPin,
  Search,
  SlidersHorizontal,
  Sparkles,
  Star,
  X,
} from "lucide-react";
import { useInView } from "@/hooks/useInView";

export type Destination = {
  id: string;
  title: string;
  country: string;
  region: string;
  flag: string;
  image: string;
  rating: number;
  reviewsCount: number;
  topUniversities: string[];
  popularFor: string[];
  avgCost: string;
  visaProcessing: string;
  featured: boolean;
  description: string;
  keyStats: {
    internationalStudents: string;
    workRights: string;
    livingCost: string;
  };
  highlights: string[];
};

type SortOption = "rating" | "reviews" | "name";

type Props = {
  destinations: Destination[];
  regions: string[];
};

const REVEAL =
  "transition-all duration-700 ease-out motion-reduce:transition-none motion-reduce:translate-y-0 motion-reduce:opacity-100";

const revealClass = (show: boolean) =>
  `${REVEAL} ${show ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`;

const ResultCard = ({
  destination,
  index,
}: {
  destination: Destination;
  index: number;
}) => {
  const { ref, visible } = useInView<HTMLDivElement>();

  return (
    <article
      ref={ref}
      style={{ transitionDelay: `${(index % 3) * 90}ms` }}
      className={`group flex h-full flex-col overflow-hidden rounded-3xl border border-neutral-200/80 bg-white shadow-[0_1px_3px_rgba(15,23,42,0.06)] hover:-translate-y-1.5 hover:border-brand-200 hover:shadow-[0_24px_48px_-16px_rgba(15,23,42,0.18)] ${REVEAL} ${
        visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
    >
      {/* Image */}
      <div className="relative h-52 shrink-0 overflow-hidden">
        <Image
          src={destination.image}
          alt={`${destination.title}, ${destination.country}`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-110 motion-reduce:transition-none"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        {/* Badges */}
        <div className="absolute left-4 top-4 flex items-center gap-2">
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/95 text-base leading-none shadow-sm backdrop-blur">
            <span aria-hidden="true">{destination.flag}</span>
          </span>
          {destination.featured ? (
            <span className="inline-flex items-center gap-1 rounded-full bg-brand-500/95 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-white shadow-sm backdrop-blur">
              <Sparkles className="h-3 w-3" />
              Featured
            </span>
          ) : null}
        </div>

        {/* Rating */}
        <div className="absolute right-4 top-4 inline-flex items-center gap-1 rounded-full bg-white/95 px-2.5 py-1 text-xs font-bold text-neutral-800 shadow-sm backdrop-blur">
          <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
          {destination.rating.toFixed(2)}
        </div>

        {/* Title */}
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

      {/* Body */}
      <div className="flex flex-1 flex-col p-5">
        <p className="line-clamp-2 text-sm leading-6 text-neutral-600">
          {destination.description}
        </p>

        {/* Universities */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {destination.topUniversities.slice(0, 3).map((university) => (
            <span
              key={university}
              className="inline-flex items-center gap-1 rounded-lg bg-brand-50 px-2.5 py-1 text-[11px] font-medium text-brand-700"
            >
              <GraduationCap className="h-3.5 w-3.5" />
              {university}
            </span>
          ))}
        </div>

        {/* Facts */}
        <div className="mt-4 space-y-2">
          <div className="flex items-center justify-between gap-3 rounded-xl border border-neutral-100 bg-neutral-50 px-3 py-2 text-xs">
            <span className="font-medium text-neutral-500">Avg. Cost</span>
            <span className="text-right font-semibold text-neutral-800">
              {destination.avgCost}
            </span>
          </div>
          <div className="flex items-center justify-between gap-3 rounded-xl border border-neutral-100 bg-neutral-50 px-3 py-2 text-xs">
            <span className="font-medium text-neutral-500">Visa Processing</span>
            <span className="text-right font-semibold text-neutral-800">
              {destination.visaProcessing}
            </span>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-auto flex items-center justify-between border-t border-neutral-100 pt-4">
          <span className="text-xs text-neutral-400">
            {destination.reviewsCount.toLocaleString()} reviews
          </span>
          <span className="inline-flex items-center gap-1 text-sm font-semibold text-brand-600">
            Learn more
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 motion-reduce:transition-none" />
          </span>
        </div>
      </div>
    </article>
  );
};

const DestinationFilters = ({ destinations, regions }: Props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("All");
  const [selectedCountry, setSelectedCountry] = useState("All");
  const [sortBy, setSortBy] = useState<SortOption>("rating");
  const [entered, setEntered] = useState(false);

  const { ref: panelRef, visible: panelVisible } = useInView<HTMLDivElement>();
  const { ref: headingRef, visible: headingVisible } =
    useInView<HTMLDivElement>();

  useEffect(() => {
    const id = requestAnimationFrame(() => setEntered(true));
    return () => cancelAnimationFrame(id);
  }, []);

  const countries = useMemo(
    () => ["All", ...Array.from(new Set(destinations.map((item) => item.country))).sort()],
    [destinations]
  );

  const regionOptions = useMemo(
    () => ["All", ...regions.filter((region) => region !== "All")],
    [regions]
  );

  const filteredDestinations = useMemo(() => {
    const search = searchTerm.trim().toLowerCase();

    return destinations
      .filter((item) => {
        const matchesSearch =
          !search ||
          item.title.toLowerCase().includes(search) ||
          item.country.toLowerCase().includes(search) ||
          item.topUniversities.some((university) =>
            university.toLowerCase().includes(search)
          );

        const matchesRegion =
          selectedRegion === "All" || item.region === selectedRegion;

        const matchesCountry =
          selectedCountry === "All" || item.country === selectedCountry;

        return matchesSearch && matchesRegion && matchesCountry;
      })
      .sort((a, b) => {
        if (sortBy === "rating") return b.rating - a.rating;
        if (sortBy === "reviews") return b.reviewsCount - a.reviewsCount;
        return a.title.localeCompare(b.title);
      });
  }, [destinations, searchTerm, selectedRegion, selectedCountry, sortBy]);

  function resetFilters() {
    setSearchTerm("");
    setSelectedRegion("All");
    setSelectedCountry("All");
    setSortBy("rating");
  }

  function scrollToList() {
    document.getElementById("destinations-list")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-brand-950">
        <div
          className="absolute inset-0 -z-20 bg-cover bg-center opacity-20"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=2000&q=85')",
          }}
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-brand-950 via-brand-900/95 to-brand-700/90" />
        <div className="absolute -right-40 top-0 -z-10 h-[500px] w-[500px] animate-pulse rounded-full bg-brand-500/25 blur-[120px] motion-reduce:animate-none" />
        <div className="absolute -bottom-40 -left-40 -z-10 h-[400px] w-[400px] animate-pulse rounded-full bg-accent-cyan/10 blur-[100px] motion-reduce:animate-none" />

        <div className="mx-auto max-w-7xl px-4 pb-28 pt-12 sm:px-6 sm:pb-36 sm:pt-16 lg:px-8 lg:pb-40 lg:pt-20">
          <div className="mx-auto max-w-4xl text-center">
            {/* Eyebrow */}
            <div
              style={{ transitionDelay: "0ms" }}
              className={`mb-7 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 backdrop-blur-md ${revealClass(entered)}`}
            >
              <Sparkles className="h-4 w-4 text-accent-cyan" />
              <span className="text-xs font-semibold tracking-[0.12em] text-brand-100 sm:text-sm">
                EXPLORE YOUR FUTURE
              </span>
            </div>

            {/* Heading */}
            <h1
              style={{ transitionDelay: "80ms" }}
              className={`text-4xl font-bold leading-[1.15] tracking-tight text-white sm:text-5xl lg:text-7xl ${revealClass(entered)}`}
            >
              Your Journey.
              <br />
              <span className="bg-gradient-to-r from-brand-300 via-accent-cyan to-brand-300 bg-clip-text text-transparent">
                Your Destination.
              </span>
            </h1>

            <p
              style={{ transitionDelay: "160ms" }}
              className={`mx-auto mt-6 max-w-2xl text-sm leading-7 text-brand-100/80 sm:text-lg sm:leading-8 ${revealClass(entered)}`}
            >
              Discover world-class study destinations, leading universities and
              exciting opportunities. Find the right place to build your future.
            </p>

            {/* Search */}
            <div
              style={{ transitionDelay: "240ms" }}
              className={`mx-auto mt-10 max-w-3xl ${revealClass(entered)}`}
            >
              <div className="flex flex-col gap-2 rounded-2xl border border-white/20 bg-white p-2 shadow-2xl shadow-black/20 transition-shadow duration-300 focus-within:shadow-brand-500/20 sm:flex-row sm:items-center sm:rounded-full sm:p-2.5">
                <div className="flex min-w-0 flex-1 items-center gap-3 px-4">
                  <Search className="h-5 w-5 shrink-0 text-brand-500" />

                  <input
                    type="search"
                    value={searchTerm}
                    onChange={(event) => setSearchTerm(event.target.value)}
                    onKeyDown={(event) => {
                      if (event.key === "Enter") scrollToList();
                    }}
                    placeholder="Search country, city or university..."
                    aria-label="Search destinations"
                    className="h-12 w-full min-w-0 bg-transparent text-sm font-medium text-neutral-900 outline-none placeholder:text-neutral-400 sm:text-base"
                  />

                  {searchTerm ? (
                    <button
                      type="button"
                      onClick={() => setSearchTerm("")}
                      aria-label="Clear search"
                      className="rounded-full p-1 text-neutral-500 transition hover:bg-neutral-100 active:scale-90"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  ) : null}
                </div>

                <button
                  type="button"
                  onClick={scrollToList}
                  className="group flex h-12 shrink-0 items-center justify-center gap-2 rounded-xl bg-brand-500 px-7 text-sm font-semibold text-white transition-all duration-300 hover:bg-brand-700 active:scale-95 sm:rounded-full"
                >
                  Explore Destinations
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transition-none" />
                </button>
              </div>
            </div>

            {/* Hero details */}
            <div
              style={{ transitionDelay: "320ms" }}
              className={`mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-xs font-medium text-brand-100/80 sm:text-sm ${revealClass(entered)}`}
            >
              <div className="flex items-center gap-2">
                <Globe2 className="h-4 w-4 text-accent-cyan" />
                Global Study Options
              </div>

              <div className="hidden h-4 w-px bg-white/20 sm:block" />

              <div className="flex items-center gap-2">
                <GraduationCap className="h-4 w-4 text-accent-cyan" />
                World-Class Universities
              </div>

              <div className="hidden h-4 w-px bg-white/20 sm:block" />

              <div className="flex items-center gap-2">
                <Compass className="h-4 w-4 text-accent-cyan" />
                Your Future Starts Here
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters + results */}
      <section
        id="destinations-list"
        className="relative mx-auto -mt-10 max-w-7xl scroll-mt-6 px-4 pb-20 sm:px-6 lg:px-8"
      >
        <div
          ref={panelRef}
          style={{ transitionDelay: "80ms" }}
          className={`rounded-2xl border border-neutral-200 bg-white p-4 shadow-[0_12px_40px_rgba(6,29,52,0.07)] sm:p-6 ${revealClass(panelVisible)}`}
        >
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-50 text-brand-500">
                    <SlidersHorizontal className="h-4 w-4" />
                  </div>
                  <h2 className="text-base font-bold text-brand-950">
                    Find Your Destination
                  </h2>
                </div>
                <p className="mt-1 text-xs text-neutral-500">
                  Explore and compare your study options.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <div className="relative min-w-0 flex-1 sm:flex-none">
                  <select
                    value={selectedCountry}
                    onChange={(event) => setSelectedCountry(event.target.value)}
                    aria-label="Filter by country"
                    className="h-11 w-full appearance-none rounded-xl border border-neutral-200 bg-neutral-50 py-2 pl-4 pr-10 text-sm font-medium text-neutral-700 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-500/10 sm:min-w-[180px]"
                  >
                    {countries.map((country) => (
                      <option key={country} value={country}>
                        {country === "All" ? "All Countries" : country}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-500" />
                </div>

                <div className="relative min-w-0 flex-1 sm:flex-none">
                  <select
                    value={sortBy}
                    onChange={(event) => setSortBy(event.target.value as SortOption)}
                    aria-label="Sort destinations"
                    className="h-11 w-full appearance-none rounded-xl border border-neutral-200 bg-neutral-50 py-2 pl-4 pr-10 text-sm font-medium text-neutral-700 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-500/10 sm:min-w-[180px]"
                  >
                    <option value="rating">Top Rated</option>
                    <option value="reviews">Most Popular</option>
                    <option value="name">Name (A-Z)</option>
                  </select>
                  <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-500" />
                </div>
              </div>
            </div>

            <div className="border-t border-neutral-100 pt-4">
              <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.12em] text-neutral-400">
                Browse by Region
              </p>
              <div className="flex gap-2 overflow-x-auto pb-1">
                {regionOptions.map((region) => (
                  <button
                    key={region}
                    type="button"
                    onClick={() => setSelectedRegion(region)}
                    aria-pressed={selectedRegion === region}
                    className={`shrink-0 rounded-full px-5 py-2.5 text-xs font-semibold transition-all duration-300 active:scale-95 sm:text-sm ${
                      selectedRegion === region
                        ? "scale-105 bg-brand-500 text-white shadow-md shadow-brand-500/20"
                        : "border border-neutral-200 bg-white text-neutral-500 hover:border-brand-300 hover:bg-brand-25 hover:text-brand-600"
                    }`}
                  >
                    {region === "All" ? "All Regions" : region}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div
          ref={headingRef}
          style={{ transitionDelay: "120ms" }}
          className={`mb-6 mt-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between ${revealClass(headingVisible)}`}
        >
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-brand-600">
              <span className="h-2 w-2 rounded-full bg-accent-cyan" />
              EXPLORE THE WORLD
            </div>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-brand-950 sm:text-3xl">
              Popular Destinations
            </h2>
            <p className="mt-2 text-sm text-neutral-500">
              Find the perfect destination for your education.
            </p>
          </div>

          <p className="text-sm text-neutral-500" aria-live="polite">
            Showing{" "}
            <span className="font-bold text-brand-950">
              {filteredDestinations.length}
            </span>{" "}
            of{" "}
            <span className="font-bold text-brand-950">{destinations.length}</span>{" "}
            destinations
          </p>
        </div>

        {filteredDestinations.length > 0 ? (
          <div
            key={`${selectedRegion}-${selectedCountry}-${sortBy}`}
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {filteredDestinations.map((destination, index) => (
              <ResultCard
                key={destination.id}
                destination={destination}
                index={index}
              />
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-neutral-200 bg-white px-5 py-16 text-center shadow-sm">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-50 text-brand-500">
              <Compass className="h-8 w-8" />
            </div>
            <h3 className="mt-5 text-xl font-bold text-brand-950">
              No Destinations Found
            </h3>
            <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-neutral-500">
              We couldn&apos;t find any destinations matching your search. Try
              another country or adjust your filters.
            </p>
            <button
              type="button"
              onClick={resetFilters}
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-brand-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-700 active:scale-95"
            >
              Reset Filters
              <X className="h-4 w-4" />
            </button>
          </div>
        )}
      </section>
    </>
  );
};

export default DestinationFilters;
