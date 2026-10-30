"use client";

import { useMemo, useState } from "react";
import {
    ArrowRight,
  ChevronDown,
  Compass,
  Globe2,
  GraduationCap,
  Search,
  SlidersHorizontal,
  Sparkles,
  X,
} from "lucide-react";
import type { DestinationWithCardDetails } from "@/data/destinations/types";
import DestinationCard from "./DestinationCard";


type SortOption = "rating" | "reviews" | "name";

type Props = {
  destinations: DestinationWithCardDetails[];
  regions: string[];
};

const DestinationFilters = ({ destinations, regions }: Props) => {
      const [searchTerm, setSearchTerm] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("All");
  const [selectedCountry, setSelectedCountry] = useState("All");
  const [sortBy, setSortBy] = useState<SortOption>("rating");

  const countries = useMemo(
    () => ["All", ...Array.from(new Set(destinations.map((item) => item.country))).sort()],
    [destinations]
  );

  const filteredDestinations = useMemo(() => {
    const search = searchTerm.trim().toLowerCase();

    return destinations
      .filter((item) => {
        const matchesSearch =
          !search ||
          item.name.toLowerCase().includes(search) ||
          item.country.toLowerCase().includes(search) ||
          item.cardDetails.topUniversities.some((university) =>
            university.toLowerCase().includes(search)
          );

        const matchesRegion =
          selectedRegion === "All" || item.region === selectedRegion;

        const matchesCountry =
          selectedCountry === "All" || item.country === selectedCountry;

        return matchesSearch && matchesRegion && matchesCountry;
      })
      .sort((a, b) => {
        if (sortBy === "rating") return b.cardDetails.rating - a.cardDetails.rating;
        if (sortBy === "reviews") return b.cardDetails.reviewsCount - a.cardDetails.reviewsCount;
        return a.name.localeCompare(b.name);
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
            <section className="relative isolate overflow-hidden bg-brand-950">

        {/* Background image */}
        <div
          className="absolute inset-0 -z-20 bg-cover bg-center opacity-20"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=2000&q=85')",
          }}
        />

        {/* Background gradients */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-brand-950 via-brand-900/95 to-brand-700/90" />

        {/* Ambient glows */}
        <div className="absolute -right-40 top-0 -z-10 h-[500px] w-[500px] rounded-full bg-brand-500/25 blur-[120px]" />
        <div className="absolute -bottom-40 -left-40 -z-10 h-[400px] w-[400px] rounded-full bg-accent-cyan/10 blur-[100px]" />

        <div className="mx-auto max-w-7xl px-4 pb-28 pt-12 sm:px-6 sm:pb-36 sm:pt-16 lg:px-8 lg:pb-40 lg:pt-20">

          <div className="mx-auto max-w-4xl text-center">

            {/* Eyebrow */}
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 backdrop-blur-md">
              <Sparkles className="h-4 w-4 text-accent-cyan" />
              <span className="text-xs font-semibold tracking-[0.12em] text-brand-100 sm:text-sm">
                EXPLORE YOUR FUTURE
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl font-bold leading-[1.15] tracking-tight text-white sm:text-5xl lg:text-7xl">
              Your Journey.
              <br />
              <span className="bg-gradient-to-r from-brand-300 via-accent-cyan to-brand-300 bg-clip-text text-transparent">
                Your Destination.
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-brand-100/80 sm:text-lg sm:leading-8">
              Discover world-class study destinations, leading universities and
              exciting opportunities. Find the right place to build your future.
            </p>

            {/* Search */}
            <div className="mx-auto mt-10 max-w-3xl">
              <div className="flex flex-col gap-2 rounded-2xl border border-white/20 bg-white p-2 shadow-2xl shadow-black/20 sm:flex-row sm:items-center sm:rounded-full sm:p-2.5">

                <div className="flex min-w-0 flex-1 items-center gap-3 px-4">
                  <Search className="h-5 w-5 shrink-0 text-brand-500" />

                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') scrollToList();
                    }}
                    placeholder="Search country, city or university..."
                    className="h-12 w-full min-w-0 bg-transparent text-sm font-medium text-neutral-900 outline-none placeholder:text-neutral-400 sm:text-base"
                  />

                  {searchTerm && (
                    <button
                      type="button"
                      onClick={() => setSearchTerm('')}
                      aria-label="Clear search"
                      className="rounded-full p-1 text-neutral-500 transition hover:bg-neutral-100"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  )}
                </div>

                <button
                  type="button"
                  onClick={scrollToList}
                  className="flex h-12 shrink-0 items-center justify-center gap-2 rounded-xl bg-brand-500 px-7 text-sm font-semibold text-white transition-all duration-300 hover:bg-brand-700 sm:rounded-full"
                >
                  Explore Destinations
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Hero bottom details */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-xs font-medium text-brand-100/80 sm:text-sm">
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
      <section className="relative isolate overflow-hidden bg-brand-950">
        <div
          className="absolute inset-0 -z-20 bg-cover bg-center opacity-20"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=2000&q=85')",
          }}
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-brand-950 via-brand-900/95 to-brand-700/90" />
        <div className="absolute -right-40 top-0 -z-10 h-[500px] w-[500px] rounded-full bg-brand-500/25 blur-[120px]" />
        <div className="absolute -bottom-40 -left-40 -z-10 h-[400px] w-[400px] rounded-full bg-accent-cyan/10 blur-[100px]" />

        <div className="mx-auto max-w-7xl px-4 pb-28 pt-12 sm:px-6 sm:pb-36 sm:pt-16 lg:px-8 lg:pb-40 lg:pt-20">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 backdrop-blur-md">
              <span className="text-sm text-accent-cyan" aria-hidden="true">✦</span>
              <span className="text-xs font-semibold tracking-[0.12em] text-brand-100 sm:text-sm">
                EXPLORE YOUR FUTURE
              </span>
            </div>

            <h1 className="text-4xl font-bold leading-[1.15] tracking-tight text-white sm:text-5xl lg:text-7xl">
              Your Journey.
              <br />
              <span className="bg-gradient-to-r from-brand-300 via-accent-cyan to-brand-300 bg-clip-text text-transparent">
                Your Destination.
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-brand-100/80 sm:text-lg sm:leading-8">
              Discover world-class study destinations, leading universities and
              exciting opportunities. Find the right place to build your future.
            </p>

            <div className="mx-auto mt-10 max-w-3xl">
              <div className="flex flex-col gap-2 rounded-2xl border border-white/20 bg-white p-2 shadow-2xl shadow-black/20 sm:flex-row sm:items-center sm:rounded-full sm:p-2.5">
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
                      className="rounded-full p-1 text-neutral-500 transition hover:bg-neutral-100"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  ) : null}
                </div>
                <button
                  type="button"
                  onClick={scrollToList}
                  className="flex h-12 shrink-0 items-center justify-center gap-2 rounded-xl bg-brand-500 px-7 text-sm font-semibold text-white transition hover:bg-brand-700 sm:rounded-full"
                >
                  Explore Destinations
                  <span aria-hidden="true">→</span>
                </button>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-xs font-medium text-brand-100/80 sm:text-sm">
              <span>◎ Global Study Options</span>
              <span className="hidden h-4 w-px bg-white/20 sm:block" />
              <span>✧ World-Class Universities</span>
              <span className="hidden h-4 w-px bg-white/20 sm:block" />
              <span>⌖ Your Future Starts Here</span>
            </div>
          </div>
        </div>
      </section>

      <section
        id="destinations-list"
        className="relative mx-auto -mt-10 max-w-7xl scroll-mt-6 px-4 pb-20 sm:px-6 lg:px-8"
      >
        <div className="rounded-2xl border border-neutral-200 bg-white p-4 shadow-[0_12px_40px_rgba(6,29,52,0.07)] sm:p-6">
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
                {["All", ...regions].map((region) => (
                  <button
                    key={region}
                    type="button"
                    onClick={() => setSelectedRegion(region)}
                    aria-pressed={selectedRegion === region}
                    className={`shrink-0 rounded-full px-5 py-2.5 text-xs font-semibold transition sm:text-sm ${
                      selectedRegion === region
                        ? "bg-brand-500 text-white shadow-md shadow-brand-500/20"
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

        <div className="mb-6 mt-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-brand-600">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-cyan" />
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
            Showing <span className="font-bold text-brand-950">{filteredDestinations.length}</span>
            {" "}of <span className="font-bold text-brand-950">{destinations.length}</span> destinations
          </p>
        </div>

        {filteredDestinations.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredDestinations.map((destination) => (
              <DestinationCard key={destination.id} destination={destination} />
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
              We couldn’t find any destinations matching your search. Try another
              country or adjust your filters.
            </p>
            <button
              type="button"
              onClick={resetFilters}
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-brand-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-700"
            >
              Reset Filters
              <X className="h-4 w-4" />
            </button>
          </div>
        )}
      </section>
    </>
  )
}

export default DestinationFilters