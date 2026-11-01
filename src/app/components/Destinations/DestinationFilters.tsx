"use client";

import { useMemo, useState } from "react";
import { Search, SlidersHorizontal, Sparkles, X, ArrowRight, Globe2, GraduationCap, Compass } from "lucide-react";
import DestinationCard from "@/app/components/destinations/DestinationCard";
import type { DestinationListItem } from "@/data/destinations/destination.types";

type SortOption = "popular" | "rating" | "reviews" | "name";

interface DestinationFiltersProps {
  destinations: DestinationListItem[];
  regions: string[];
}

export default function DestinationFilters({ destinations, regions }: DestinationFiltersProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("All");
  const [selectedCountry, setSelectedCountry] = useState("All");
  const [sortBy, setSortBy] = useState<SortOption>("popular");

  const countries = useMemo(
    () => ["All", ...Array.from(new Set(destinations.map((item) => item.country))).sort()],
    [destinations],
  );

  const regionOptions = useMemo(() => ["All", ...regions], [regions]);

  const filteredDestinations = useMemo(() => {
    const search = searchTerm.trim().toLowerCase();

    return destinations
      .filter((item) => {
        const matchesSearch =
          !search ||
          item.name.toLowerCase().includes(search) ||
          item.country.toLowerCase().includes(search) ||
          item.region.toLowerCase().includes(search) ||
          item.code.toLowerCase().includes(search) ||
          item.description.toLowerCase().includes(search) ||
          item.topUniversities.some((university) => university.toLowerCase().includes(search)) ||
          item.popularFor.some((subject) => subject.toLowerCase().includes(search));

        const matchesRegion = selectedRegion === "All" || item.region === selectedRegion;
        const matchesCountry = selectedCountry === "All" || item.country === selectedCountry;

        return matchesSearch && matchesRegion && matchesCountry;
      })
      .sort((a, b) => {
        if (sortBy === "popular") return Number(b.popular) - Number(a.popular) || a.name.localeCompare(b.name);
        if (sortBy === "rating") return (b.rating ?? -1) - (a.rating ?? -1);
        if (sortBy === "reviews") return b.reviewsCount - a.reviewsCount;
        return a.name.localeCompare(b.name);
      });
  }, [destinations, searchTerm, selectedRegion, selectedCountry, sortBy]);

  function resetFilters() {
    setSearchTerm("");
    setSelectedRegion("All");
    setSelectedCountry("All");
    setSortBy("popular");
  }

  function scrollToList() {
    document.getElementById("destinations-list")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <>
      <section className="relative isolate overflow-hidden bg-[#0B1D36]">
        <div
          className="absolute inset-0 -z-20 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=2000&q=85')" }}
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#0B1D36] via-[#102B4D]/95 to-[#173D65]/90" />
        <div className="mx-auto max-w-7xl px-4 pb-28 pt-16 sm:px-6 sm:pb-36 lg:px-8 lg:pt-20">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 backdrop-blur-md">
              <Sparkles className="h-4 w-4 text-[#C9A84C]" />
              <span className="text-xs font-semibold tracking-[0.12em] text-slate-100">EXPLORE YOUR FUTURE</span>
            </div>
            <h1 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
              Your Journey. <span className="text-[#C9A84C]">Your Destination.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-slate-200/80 sm:text-lg sm:leading-8">
              Discover study destinations, explore universities and find the right place to build your future.
            </p>

            <div className="mx-auto mt-10 max-w-3xl">
              <div className="flex flex-col gap-2 rounded-2xl border border-white/20 bg-white p-2 shadow-2xl sm:flex-row sm:items-center sm:rounded-full sm:p-2.5">
                <div className="flex min-w-0 flex-1 items-center gap-3 px-4">
                  <Search className="h-5 w-5 shrink-0 text-[#0B1D36]" />
                  <input
                    type="search"
                    value={searchTerm}
                    onChange={(event) => setSearchTerm(event.target.value)}
                    onKeyDown={(event) => { if (event.key === "Enter") scrollToList(); }}
                    placeholder="Search country, region or university..."
                    aria-label="Search destinations"
                    className="h-12 w-full min-w-0 bg-transparent text-sm font-medium text-slate-900 outline-none placeholder:text-slate-400 sm:text-base"
                  />
                  {searchTerm && (
                    <button type="button" onClick={() => setSearchTerm("")} aria-label="Clear search" className="rounded-full p-1 text-slate-500 hover:bg-slate-100">
                      <X className="h-4 w-4" />
                    </button>
                  )}
                </div>
                <button type="button" onClick={scrollToList} className="group flex h-12 shrink-0 items-center justify-center gap-2 rounded-xl bg-[#0B1D36] px-7 text-sm font-semibold text-white transition hover:bg-[#173D65] active:scale-95 sm:rounded-full">
                  Explore Destinations <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>

            <div className="mt-8 hidden flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm font-medium text-slate-200/80 sm:flex">
              <span className="flex items-center gap-2"><Globe2 className="h-4 w-4 text-[#C9A84C]" /> Global Study Options</span>
              <span className="flex items-center gap-2"><GraduationCap className="h-4 w-4 text-[#C9A84C]" /> University Choices</span>
              <span className="flex items-center gap-2"><Compass className="h-4 w-4 text-[#C9A84C]" /> Your Future Starts Here</span>
            </div>
          </div>
        </div>
      </section>

      <section id="destinations-list" className="relative mx-auto -mt-20 max-w-7xl scroll-mt-6 px-4 pb-20 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-[0_12px_40px_rgba(6,29,52,0.07)] sm:p-6">
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-50 text-brand-600"><SlidersHorizontal className="h-4 w-4" /></div>
                  <h2 className="text-base font-bold text-[#0B1D36]">Find Your Destination</h2>
                </div>
                <p className="mt-1 text-xs text-slate-500">Explore and compare your study options.</p>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                {([{ value: "popular", label: "Popular First" }, { value: "rating", label: "Top Rated" }, { value: "reviews", label: "Most Reviewed" }, { value: "name", label: "Name A–Z" }] as const).map((option) => (
                  <label key={option.value} className={`inline-flex cursor-pointer items-center gap-2 rounded-xl border px-4 py-2 text-xs font-medium transition ${sortBy === option.value ? "border-brand-500 bg-brand-50 text-brand-700" : "border-slate-200 bg-slate-50 text-slate-600 hover:border-slate-300"}`}>
                    <input type="radio" name="destination-sort" value={option.value} checked={sortBy === option.value} onChange={() => setSortBy(option.value)} className="h-3.5 w-3.5 accent-brand-600" />
                    {option.label}
                  </label>
                ))}
              </div>
            </div>

            <div className="border-t border-slate-100 pt-4">
              <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.12em] text-slate-400">Browse by Region</p>
              <div className="flex gap-2 overflow-x-auto pb-1">
                {regionOptions.map((region) => (
                  <button key={region} type="button" onClick={() => setSelectedRegion(region)} aria-pressed={selectedRegion === region} className={`shrink-0 rounded-xl px-4 py-2 text-xs font-medium transition ${selectedRegion === region ? "bg-[#0B1D36] text-white" : "border border-slate-200 bg-white text-slate-600 hover:border-brand-300 hover:bg-brand-50 hover:text-brand-700"}`}>
                    {region === "All" ? "All Regions" : region}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-2 border-t border-slate-100 pt-4 sm:flex-row sm:items-center">
              <label htmlFor="destination-country" className="text-xs font-semibold text-slate-500">Filter by country</label>
              <select id="destination-country" value={selectedCountry} onChange={(event) => setSelectedCountry(event.target.value)} className="h-10 rounded-xl border border-slate-200 bg-white px-3 text-sm text-slate-700 outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/10 sm:ml-auto sm:min-w-56">
                {countries.map((country) => <option key={country} value={country}>{country === "All" ? "All Countries" : country}</option>)}
              </select>
            </div>
          </div>
        </div>

        <div className="mb-6 mt-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-brand-600"><span className="h-2 w-2 rounded-full bg-[#C9A84C]" /> Explore the world</p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-[#0B1D36] sm:text-3xl">Popular Destinations</h2>
            <p className="mt-2 text-sm text-slate-500">Find the right destination for your education.</p>
          </div>
          <p className="text-xs font-medium text-slate-500" aria-live="polite">Showing <span className="font-semibold text-[#0B1D36]">{filteredDestinations.length}</span> of <span className="font-semibold text-[#0B1D36]">{destinations.length}</span> destinations</p>
        </div>

        {filteredDestinations.length ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredDestinations.map((destination, index) => (
              <DestinationCard key={destination.id} destination={destination} index={index} />
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-slate-200 bg-white px-5 py-16 text-center shadow-sm">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-50 text-brand-600"><Compass className="h-8 w-8" /></div>
            <h3 className="mt-5 text-xl font-bold text-[#0B1D36]">No Destinations Found</h3>
            <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500">We couldn&apos;t find destinations matching your search. Try another country or adjust your filters.</p>
            <button type="button" onClick={resetFilters} className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#0B1D36] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#173D65]">Reset Filters <X className="h-4 w-4" /></button>
          </div>
        )}
      </section>
    </>
  );
}
