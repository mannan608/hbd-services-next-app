'use client';

import { useMemo, useState } from 'react';
import {
  Search,
  MapPin,
  GraduationCap,
  Star,
  X,
  ArrowRight,
  SlidersHorizontal,
  CheckCircle2,
  Compass,
  ChevronDown,
  Sparkles,
  Globe2,
  ArrowUpRight,
} from 'lucide-react';
import { useInView } from '@/hooks/useInView';
import Link from 'next/link';

// ==========================================
// Types
// ==========================================

type Destination = {
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

// ==========================================
// Destination Data
// ==========================================

const DESTINATIONS_DATA: Destination[] = [
  {
    id: 'aus-sydney',
    title: 'Sydney',
    country: 'Australia',
    region: 'Australia',
    flag: '🇦🇺',
    image: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=1200&q=80',
    rating: 4.9,
    reviewsCount: 1280,
    topUniversities: ['University of Sydney', 'UNSW Sydney', 'UTS'],
    popularFor: ['Business & Tech', 'Subtropical Lifestyle', 'Post-Study Work Visa'],
    avgCost: '$24,000 - $38,000 / yr',
    visaProcessing: '4 - 8 Weeks',
    featured: true,
    description: 'Sydney combines world-class education institutions with stunning coastal lifestyle, vibrant culture, and robust post-study career opportunities.',
    keyStats: {
      internationalStudents: '150,000+',
      workRights: '48 hrs/fortnight',
      livingCost: '$1,800 - $2,500/mo',
    },
    highlights: [
      'High Quality of Life & Safety',
      'Top 20 Global Universities',
      'Strong Job Market in Tech & Finance',
      'Subtropical Climate & Beaches',
    ],
  },
  {
    id: 'aus-melbourne',
    title: 'Melbourne',
    country: 'Australia',
    region: 'Australia',
    flag: '🇦🇺',
    image: 'https://images.unsplash.com/photo-1514395462725-fb4566210144?auto=format&fit=crop&w=1200&q=80',
    rating: 4.95,
    reviewsCount: 1420,
    topUniversities: ['University of Melbourne', 'Monash University', 'RMIT'],
    popularFor: ['Arts & Culture', 'Research Excellence', 'Livable City'],
    avgCost: '$23,000 - $36,000 / yr',
    visaProcessing: '4 - 8 Weeks',
    featured: true,
    description: 'Known as Australia’s cultural capital, Melbourne offers world-renowned academic institutions alongside a thriving arts, coffee, and startup culture.',
    keyStats: {
      internationalStudents: '180,000+',
      workRights: '48 hrs/fortnight',
      livingCost: '$1,700 - $2,400/mo',
    },
    highlights: [
      'Voted Top Most Liveable City globally',
      'Hub for Innovation and Creative Arts',
      'Diverse & Inclusive Multicultural Environment',
      'Extensive Public Transport Network',
    ],
  },
  {
    id: 'uk-london',
    title: 'London',
    country: 'United Kingdom',
    region: 'Europe',
    flag: '🇬🇧',
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1200&q=80',
    rating: 4.88,
    reviewsCount: 2150,
    topUniversities: ['Imperial College', 'UCL', 'King’s College London'],
    popularFor: ['Global Finance', 'Historic Academics', 'Graduate Route Visa'],
    avgCost: '£18,000 - £35,000 / yr',
    visaProcessing: '3 - 6 Weeks',
    featured: true,
    description: 'London stands as a undisputed global center for education, finance, technology, and arts with unmatched networking potential.',
    keyStats: {
      internationalStudents: '200,000+',
      workRights: '20 hrs/week',
      livingCost: '£1,300 - £2,000/mo',
    },
    highlights: [
      'Access to Fortune 500 headquarters',
      '2-Year Post-Study Work Visa (Graduate Route)',
      'Rich Historic Heritage & Museums',
      'Gateway to Europe travel',
    ],
  },
  {
    id: 'usa-boston',
    title: 'Boston & Cambridge',
    country: 'United States',
    region: 'North America',
    flag: '🇺🇸',
    image: 'https://images.unsplash.com/photo-1506146332389-18140dc7b2fb?auto=format&fit=crop&w=1200&q=80',
    rating: 4.92,
    reviewsCount: 980,
    topUniversities: ['Harvard University', 'MIT', 'Boston University'],
    popularFor: ['Biotech & AI', 'Ivy League Academics', 'OPT Extension'],
    avgCost: '$35,000 - $55,000 / yr',
    visaProcessing: '6 - 10 Weeks',
    featured: false,
    description: 'The intellectual hub of the United States, hosting the highest density of top elite research universities and technology startups.',
    keyStats: {
      internationalStudents: '100,000+',
      workRights: 'OPT up to 3 years (STEM)',
      livingCost: '$2,000 - $3,000/mo',
    },
    highlights: [
      'Unrivaled Research Ecosystem',
      '3-Year STEM OPT Opportunities',
      'Biotech and Enterprise Tech Hub',
      'Historic American East Coast Charm',
    ],
  },
  {
    id: 'can-toronto',
    title: 'Toronto',
    country: 'Canada',
    region: 'North America',
    flag: '🇨🇦',
    image: 'https://images.unsplash.com/photo-1517935703635-27c7078861d6?auto=format&fit=crop&w=1200&q=80',
    rating: 4.85,
    reviewsCount: 1670,
    topUniversities: ['University of Toronto', 'York University', 'TMU'],
    popularFor: ['PGWP Pathway', 'Financial Hub', 'Multicultural Safety'],
    avgCost: 'CAD $22,000 - $42,000 / yr',
    visaProcessing: '6 - 12 Weeks',
    featured: true,
    description: 'Canada’s economic engine offering premier education alongside high immigration potential through Post-Graduation Work Permit (PGWP).',
    keyStats: {
      internationalStudents: '160,000+',
      workRights: '20 hrs/week',
      livingCost: 'CAD $1,600 - $2,400/mo',
    },
    highlights: [
      'Clear PR Pathways (Express Entry)',
      '3-Year Post Graduation Work Permit',
      'One of the World’s Safest Cities',
      'Thriving Tech & Banking Sectors',
    ],
  },
  {
    id: 'sg-singapore',
    title: 'Singapore City',
    country: 'Singapore',
    region: 'Asia',
    flag: '🇸🇬',
    image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=1200&q=80',
    rating: 4.91,
    reviewsCount: 840,
    topUniversities: ['NUS', 'NTU', 'SMU'],
    popularFor: ['Asian Financial Hub', 'Ultra Modern Safety', 'Tech Innovation'],
    avgCost: 'SGD $25,000 - $45,000 / yr',
    visaProcessing: '3 - 5 Weeks',
    featured: false,
    description: 'A global financial powerhouse connecting East and West, known for academic excellence, safety, and modern infrastructure.',
    keyStats: {
      internationalStudents: '65,000+',
      workRights: '16 hrs/week during term',
      livingCost: 'SGD $1,800 - $2,800/mo',
    },
    highlights: [
      'Top 10 Global Universities (NUS / NTU)',
      'Lowest Crime Rates Worldwide',
      'APAC Regional HQ for Tech Giants',
      'Clean, Green Smart-City Environment',
    ],
  },
  {
    id: 'nz-auckland',
    title: 'Auckland',
    country: 'New Zealand',
    region: 'Australia',
    flag: '🇳🇿',
    image: 'https://images.unsplash.com/photo-1507699622108-4be3abd695ad?auto=format&fit=crop&w=1200&q=80',
    rating: 4.79,
    reviewsCount: 510,
    topUniversities: ['University of Auckland', 'AUT University'],
    popularFor: ['Work-Life Balance', 'Scenic Beauty', 'Post-Study Visas'],
    avgCost: 'NZD $24,000 - $38,000 / yr',
    visaProcessing: '4 - 8 Weeks',
    featured: false,
    description: 'Surrounded by stunning harbors and nature, Auckland offers peaceful high-grade learning environments with excellent post-study work options.',
    keyStats: {
      internationalStudents: '45,000+',
      workRights: '20 hrs/week',
      livingCost: 'NZD $1,500 - $2,200/mo',
    },
    highlights: [
      'Up to 3-Year Open Post-Study Visa',
      'Unmatched Outdoor & Adventure Lifestyle',
      'High Academic Standards',
      'Welcoming Community Culture',
    ],
  },
  {
    id: 'ger-munich',
    title: 'Munich',
    country: 'Germany',
    region: 'Europe',
    flag: '🇩🇪',
    image: 'https://images.unsplash.com/photo-1595867818082-083862f3d630?auto=format&fit=crop&w=1200&q=80',
    rating: 4.87,
    reviewsCount: 760,
    topUniversities: ['TUM', 'LMU Munich'],
    popularFor: ['Low/No Tuition Fees', 'Engineering Powerhouse', '18-Mo Job Visa'],
    avgCost: '€0 - €3,000 / yr (Public)',
    visaProcessing: '6 - 10 Weeks',
    featured: false,
    description: 'Europe’s engineering hub where top-ranked public universities charge virtually zero tuition fees for international scholars.',
    keyStats: {
      internationalStudents: '50,000+',
      workRights: '120 full days/year',
      livingCost: '€1,000 - €1,500/mo',
    },
    highlights: [
      'Near-Zero Tuition at Public Universities',
      '18-Month Job Seeking Visa Post Graduation',
      'Home to BMW, Siemens & Tech Hubs',
      'High Standard of European Living',
    ],
  },
];

// ==========================================
// Filter Configuration
// ==========================================

const REGIONS = [
  'All',
  'Africa',
  'Asia',
  'Australia',
  'Europe',
  'North America',
  'South America',
];

// ==========================================
// Main Component
// ==========================================

export default function Destinations() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('All');
  const [selectedCountry, setSelectedCountry] = useState('All');
  const [sortBy, setSortBy] = useState('rating');
  const [activeDestination, setActiveDestination] =
    useState<Destination | null>(null);

  const { ref: headerRef, visible: headerVisible } = useInView();
  const { ref: gridRef, visible: gridVisible } = useInView();

  // Unique country list
  const countries = useMemo(() => {
    return [
      'All',
      ...Array.from(new Set(DESTINATIONS_DATA.map((item) => item.country))),
    ];
  }, []);

  // Filter and sort destinations
  const filteredDestinations = useMemo(() => {
    return DESTINATIONS_DATA.filter((item) => {
      const search = searchTerm.toLowerCase();

      const matchesSearch =
        item.title.toLowerCase().includes(search) ||
        item.country.toLowerCase().includes(search) ||
        item.topUniversities.some((university) =>
          university.toLowerCase().includes(search)
        );

      const matchesRegion =
        selectedRegion === 'All' || item.region === selectedRegion;

      const matchesCountry =
        selectedCountry === 'All' || item.country === selectedCountry;

      return matchesSearch && matchesRegion && matchesCountry;
    }).sort((a, b) => {
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'reviews') return b.reviewsCount - a.reviewsCount;
      if (sortBy === 'title') return a.title.localeCompare(b.title);
      return 0;
    });
  }, [searchTerm, selectedRegion, selectedCountry, sortBy]);

  const resetFilters = () => {
    setSearchTerm('');
    setSelectedRegion('All');
    setSelectedCountry('All');
    setSortBy('rating');
  };

  const scrollToList = () => {
    document
      .getElementById('destinations-list')
      ?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="min-h-screen bg-neutral-50 dark:bg-neutral-950">

      {/* ==================================
          HERO SECTION
      ================================== */}

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

      {/* ==================================
          DESTINATION CONTENT
      ================================== */}

      <section
        id="destinations-list"
        className="relative mx-auto -mt-10 max-w-7xl px-4 pb-20 sm:px-6 lg:px-8"
      >

        {/* Filter Panel */}
        <div className="rounded-2xl border border-neutral-200 bg-white p-4 shadow-[0_12px_40px_rgba(6,29,52,0.07)] sm:p-6 dark:border-neutral-800 dark:bg-neutral-900">

          <div className="flex flex-col gap-5">

            {/* Top filter row */}
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

              <div>
                <div className="flex items-center gap-2">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-50 text-brand-500 dark:bg-brand-950">
                    <SlidersHorizontal className="h-4 w-4" />
                  </div>

                  <h2 className="text-base font-bold text-brand-950 dark:text-white">
                    Find Your Destination
                  </h2>
                </div>

                <p className="mt-1 text-xs text-neutral-500 dark:text-neutral-400">
                  Explore and compare your study options.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3">

                {/* Country filter */}
                <div className="relative flex-1 sm:flex-none">
                  <select
                    value={selectedCountry}
                    onChange={(e) => setSelectedCountry(e.target.value)}
                    aria-label="Filter by country"
                    className="h-11 w-full appearance-none rounded-xl border border-neutral-200 bg-neutral-50 py-2 pl-4 pr-10 text-sm font-medium text-neutral-700 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-500/10 sm:min-w-[180px] dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-200"
                  >
                    {countries.map((country) => (
                      <option key={country} value={country}>
                        {country === 'All' ? 'All Countries' : country}
                      </option>
                    ))}
                  </select>

                  <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-500" />
                </div>

                {/* Sort */}
                <div className="relative flex-1 sm:flex-none">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    aria-label="Sort destinations"
                    className="h-11 w-full appearance-none rounded-xl border border-neutral-200 bg-neutral-50 py-2 pl-4 pr-10 text-sm font-medium text-neutral-700 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-500/10 sm:min-w-[180px] dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-200"
                  >
                    <option value="rating">Top Rated</option>
                    <option value="reviews">Most Popular</option>
                    <option value="title">Name (A-Z)</option>
                  </select>

                  <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-500" />
                </div>
              </div>
            </div>

            {/* Region filters */}
            <div className="border-t border-neutral-100 pt-4 dark:border-neutral-800">

              <div className="mb-3 text-[11px] font-bold uppercase tracking-[0.12em] text-neutral-400">
                Browse by Region
              </div>

              <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none">
                {REGIONS.map((region) => (
                  <button
                    key={region}
                    type="button"
                    onClick={() => setSelectedRegion(region)}
                    className={[
                      'shrink-0 rounded-full px-5 py-2.5 text-xs font-semibold transition-all duration-200 sm:text-sm',
                      selectedRegion === region
                        ? 'bg-brand-500 text-white shadow-md shadow-brand-500/20'
                        : 'border border-neutral-200 bg-white text-neutral-500 hover:border-brand-300 hover:bg-brand-25 hover:text-brand-600 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-400 dark:hover:border-brand-700 dark:hover:bg-neutral-800 dark:hover:text-brand-200',
                    ].join(' ')}
                  >
                    {region === 'All' ? 'All Regions' : region}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Results Header */}
        <div
          ref={headerRef}
          className={`mb-6 mt-10 flex flex-col gap-3 transition-all duration-700 sm:flex-row sm:items-end sm:justify-between ${
            headerVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
          }`}
        >
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-brand-600 dark:text-brand-300">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-cyan" />
              EXPLORE THE WORLD
            </div>

            <h2 className="mt-2 text-2xl font-bold tracking-tight text-brand-950 sm:text-3xl dark:text-white">
              Popular Destinations
            </h2>

            <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-400">
              Find the perfect destination for your education.
            </p>
          </div>

          <div className="flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400">
            Showing
            <span className="font-bold text-brand-950 dark:text-white">
              {filteredDestinations.length}
            </span>
            of
            <span className="font-bold text-brand-950 dark:text-white">
              {DESTINATIONS_DATA.length}
            </span>
            destinations
          </div>
        </div>

        {/* ==================================
            DESTINATION CARDS
        ================================== */}

        {filteredDestinations.length > 0 ? (
          <div
            ref={gridRef}
            className={`grid grid-cols-1 gap-6 transition-all duration-700 sm:grid-cols-2 lg:grid-cols-3 ${
              gridVisible
                ? 'translate-y-0 opacity-100'
                : 'translate-y-8 opacity-0'
            }`}
          >

            {filteredDestinations.map((item) => (
              <Link href={`/destinations/${item.id}`} key={item.id}>
             
              <article className="group flex flex-col overflow-hidden rounded-3xl border border-neutral-200 bg-white transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-300 hover:shadow-[0_24px_48px_-16px_rgba(25,104,178,0.22)] dark:border-neutral-800 dark:bg-neutral-900 dark:hover:border-brand-700">

                {/* Image */}
                <div className="relative h-60 overflow-hidden bg-brand-50 sm:h-64 dark:bg-neutral-800">

                  <img
                    src={item.image}
                    alt={`${item.title}, ${item.country}`}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-brand-950/85 via-brand-950/10 to-transparent" />

                  {/* Country */}
                  <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-white/30 bg-white/95 px-3 py-2 shadow-sm backdrop-blur-md">
                    <span className="text-base">{item.flag}</span>
                    <span className="text-xs font-semibold text-accent-navy">
                      {item.country}
                    </span>
                  </div>

                  {/* Featured */}
                  {item.featured && (
                    <div className="absolute right-4 top-4 flex items-center gap-1.5 rounded-full bg-accent-cyan px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-white shadow-lg">
                      <Sparkles className="h-3 w-3" />
                      Featured
                    </div>
                  )}

                  {/* Image bottom details */}
                  <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between p-5">
                    <div>
                      <h3 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                        {item.title}
                      </h3>

                      <div className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-white/80">
                        <MapPin className="h-3.5 w-3.5 text-accent-cyan" />
                        {item.region}
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 rounded-lg border border-white/20 bg-white/15 px-2.5 py-1.5 text-xs font-bold text-white backdrop-blur-md">
                      <Star className="h-3.5 w-3.5 fill-warning-400 text-warning-400" />
                      {item.rating}
                    </div>
                  </div>
                </div>

                {/* Card Body */}
                <div className="flex flex-1 flex-col p-5 sm:p-6">

                  {/* Universities */}
                  <div>
                    <div className="mb-3 flex items-center gap-2">
                      <GraduationCap className="h-4 w-4 text-brand-500" />

                      <h4 className="text-[11px] font-bold uppercase tracking-[0.12em] text-brand-600 dark:text-brand-300">
                        Top Universities
                      </h4>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {item.topUniversities.map((uni) => (
                        <span
                          key={uni}
                          className="rounded-lg border border-neutral-200 bg-neutral-50 px-2.5 py-1.5 text-[11px] font-medium text-neutral-600 dark:border-neutral-800 dark:bg-neutral-800/60 dark:text-neutral-300"
                        >
                          {uni}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Popular Features */}
                  <div className="mt-5 space-y-3 border-t border-neutral-100 pt-4 dark:border-neutral-800">
                    {item.popularFor.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center gap-2.5 text-xs text-neutral-600 dark:text-neutral-400"
                      >
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-accent-green" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tuition */}
                  <div className="mt-auto flex items-center justify-between gap-3 border-t border-neutral-100 pt-5 dark:border-neutral-800">

                    <div>
                      <div className="text-[10px] font-bold uppercase tracking-[0.12em] text-neutral-400">
                        Estimated Tuition
                      </div>

                      <div className="mt-1 text-sm font-bold text-brand-950 dark:text-white">
                        {item.avgCost}
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => setActiveDestination(item)}
                      className="inline-flex h-10 shrink-0 items-center gap-2 rounded-xl bg-brand-50 px-4 text-xs font-bold text-brand-600 transition-all duration-200 hover:bg-brand-500 hover:text-white dark:bg-brand-950 dark:text-brand-200 dark:hover:bg-brand-500 dark:hover:text-white"
                    >
                      Explore
                      <ArrowUpRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </article>
               </Link>
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="rounded-2xl border border-neutral-200 bg-white px-5 py-16 text-center shadow-sm dark:border-neutral-800 dark:bg-neutral-900">

            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-50 text-brand-500 dark:bg-brand-950">
              <Compass className="h-8 w-8" />
            </div>

            <h3 className="mt-5 text-xl font-bold text-brand-950 dark:text-white">
              No Destinations Found
            </h3>

            <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-neutral-500 dark:text-neutral-400">
              We couldn&apos;t find any destinations matching your search. Try
              another country or adjust your filters.
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
    
    </main>
  );
}
