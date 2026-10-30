'use client';

import { useState, useMemo } from 'react';
import {
  Search,
  MapPin,
  GraduationCap,
  Star,
  Bookmark,
  X,
  ArrowRight,
  SlidersHorizontal,
  CheckCircle2,
  Compass,
  ChevronRight,
  Sparkles,
} from 'lucide-react';

// Sample Destinations Data (Study / Travel Destinations)
const DESTINATIONS_DATA = [
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
      livingCost: '$1,800 - $2,500/mo'
    },
    highlights: [
      'High Quality of Life & Safety',
      'Top 20 Global Universities',
      'Strong Job Market in Tech & Finance',
      'Subtropical Climate & Beaches'
    ]
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
      livingCost: '$1,700 - $2,400/mo'
    },
    highlights: [
      'Voted Top Most Liveable City globally',
      'Hub for Innovation and Creative Arts',
      'Diverse & Inclusive Multicultural Environment',
      'Extensive Public Transport Network'
    ]
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
      livingCost: '£1,300 - £2,000/mo'
    },
    highlights: [
      'Access to Fortune 500 headquarters',
      '2-Year Post-Study Work Visa (Graduate Route)',
      'Rich Historic Heritage & Museums',
      'Gateway to Europe travel'
    ]
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
      livingCost: '$2,000 - $3,000/mo'
    },
    highlights: [
      'Unrivaled Research Ecosystem',
      '3-Year STEM OPT Opportunities',
      'Biotech and Enterprise Tech Hub',
      'Historic American East Coast Charm'
    ]
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
      livingCost: 'CAD $1,600 - $2,400/mo'
    },
    highlights: [
      'Clear PR Pathways (Express Entry)',
      '3-Year Post Graduation Work Permit',
      'One of the World’s Safest Cities',
      'Thriving Tech & Banking Sectors'
    ]
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
      livingCost: 'SGD $1,800 - $2,800/mo'
    },
    highlights: [
      'Top 10 Global Universities (NUS / NTU)',
      'Lowest Crime Rates Worldwide',
      'APAC Regional HQ for Tech Giants',
      'Clean, Green Smart-City Environment'
    ]
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
      livingCost: 'NZD $1,500 - $2,200/mo'
    },
    highlights: [
      'Up to 3-Year Open Post-Study Visa',
      'Unmatched Outdoor & Adventure Lifestyle',
      'High Academic Standards',
      'Welcoming Community Culture'
    ]
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
      livingCost: '€1,000 - €1,500/mo'
    },
    highlights: [
      'Near-Zero Tuition at Public Universities',
      '18-Month Job Seeking Visa Post Graduation',
      'Home to BMW, Siemens & Tech Hubs',
      'High Standard of European Living'
    ]
  }
];

// Region List
const REGIONS = [
  'All',
  'Africa',
  'Asia',
  'Australia',
  'Europe',
  'North America',
  'South America'
];

export default function Destinations() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('All');
  const [selectedCountry, setSelectedCountry] = useState('All');
  const [sortBy, setSortBy] = useState('rating');
  const [activeDestination, setActiveDestination] = useState(null);

  // Extract unique countries
  const countries = useMemo(() => {
    const list = DESTINATIONS_DATA.map(item => item.country);
    return ['All', ...Array.from(new Set(list))];
  }, []);

  // Filter & Sort Logic
  const filteredDestinations = useMemo(() => {
    return DESTINATIONS_DATA.filter((item) => {
      const matchesSearch =
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.country.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.topUniversities.some(u => u.toLowerCase().includes(searchTerm.toLowerCase()));

      const matchesRegion = selectedRegion === 'All' || item.region === selectedRegion;
      const matchesCountry = selectedCountry === 'All' || item.country === selectedCountry;

      return matchesSearch && matchesRegion && matchesCountry;
    }).sort((a, b) => {
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'reviews') return b.reviewsCount - a.reviewsCount;
      if (sortBy === 'title') return a.title.localeCompare(b.title);
      return 0;
    });
  }, [searchTerm, selectedRegion, selectedCountry, sortBy]);


  return (
    <>

      {/* Hero Header Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#061d34] via-[#0d3c68] to-[#114b82] text-white pt-16 pb-24 px-4 sm:px-6 lg:px-8">

        {/* Subtle Background Glow Elements */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#1968b2]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-10 w-80 h-80 bg-[#5b95d2]/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10 text-center">

          {/* Top Pill Tag */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[#b8d3ef] text-xs md:text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4 text-[#8cb7e3]" />
            <span>Discover World-Class Destinations</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            Explore Global <span className="text-accent-cyan">Destinations</span>
          </h1>
          <p className="max-w-2xl mx-auto text-sm sm:text-lg text-[#d7e7f7]/90 font-normal mb-10 leading-relaxed">
            Find top international study hubs, leading universities, post-graduation opportunities, and vibrant culture tailored for your career journey.
          </p>

          {/* Hero Main Search Bar */}
          <div className="max-w-3xl mx-auto bg-white p-2 sm:p-3 rounded-2xl shadow-2xl flex flex-col sm:flex-row items-center gap-2 border border-[#d7e7f7]">
            <div className="relative flex-1 w-full flex items-center px-3">
              <Search className="w-5 h-5 text-[#1968b2] mr-3 shrink-0" />
              <input
                type="text"
                placeholder="Search by city, country, or university name..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-transparent text-[#101828] placeholder-[#5b95d2]/70 focus:outline-none text-sm sm:text-base py-2"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="p-1 hover:bg-[#eef5fc] rounded-full text-[#155b9d] transition"
                  aria-label="Clear Search"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto">            

              <button
                onClick={() => { }}
                className="w-full sm:w-auto bg-[#1968b2] hover:bg-[#155b9d] text-white font-medium text-sm py-3 px-6 rounded-xl transition shadow-md flex items-center justify-center gap-2 shrink-0"
              >
                <span>Find Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 pb-20 relative z-20">

        {/* Navigation & Filter Bar */}
        <div className="bg-white rounded-2xl shadow-lg border border-[#d7e7f7] p-4 mb-8 flex flex-col md:flex-row items-center justify-between gap-4">

          {/* Region Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {REGIONS.map((region) => (
              <button
                key={region}
                onClick={() => setSelectedRegion(region)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition whitespace-nowrap ${selectedRegion === region
                    ? 'bg-[#1968b2] text-white shadow-sm'
                    : 'bg-[#f5f9fe] text-[#114b82] hover:bg-[#eef5fc]'
                  }`}
              >
                {region}
              </button>
            ))}
          </div>

          {/* Sort Control & Results Counter */}
          <div className="flex items-center justify-between md:justify-end gap-4 w-full md:w-auto border-t md:border-t-0 pt-3 md:pt-0 border-[#eef5fc]">
            <span className="text-xs sm:text-sm font-medium text-[#5b95d2]">
              Showing <strong className="text-[#101828] font-bold">{filteredDestinations.length}</strong> Destinations
            </span>

            <div className="flex items-center gap-2">
              <SlidersHorizontal className="w-4 h-4 text-[#1968b2]" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-[#f5f9fe] text-[#101828] text-xs sm:text-sm font-medium py-2 px-3 rounded-lg border border-[#b8d3ef] focus:outline-none cursor-pointer"
              >
                <option value="rating">Sort by: Top Rated</option>
                <option value="reviews">Sort by: Most Popular</option>
                <option value="title">Sort by: Name (A-Z)</option>
              </select>
            </div>
          </div>

        </div>

        {/* Destinations Cards Grid */}
        {filteredDestinations.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredDestinations.map((item) => {

              return (
                <div
                  key={item.id}
                  onClick={() => setActiveDestination(item)}
                  className="group bg-white rounded-2xl overflow-hidden border border-[#d7e7f7] hover:border-[#8cb7e3] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col cursor-pointer transform hover:-translate-y-1"
                >
                  {/* Card Header / Image Container */}
                  <div className="relative h-52 sm:h-56 w-full overflow-hidden bg-[#eef5fc]">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                    {/* Top Badges */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[#061d34] text-xs font-bold shadow-sm">
                        <span>{item.flag}</span>
                        <span>{item.country}</span>
                      </span>                     
                    </div>

                    {/* Bottom Image Overlay Details */}
                    <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between text-white">
                      <div>
                        <h3 className="text-xl font-bold tracking-tight text-white flex items-center gap-2">
                          {item.title}
                        </h3>
                        <div className="flex items-center gap-1.5 text-xs text-[#d7e7f7]">
                          <MapPin className="w-3.5 h-3.5 text-[#8cb7e3]" />
                          <span>{item.region}</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-1 bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-lg text-xs font-semibold text-amber-300 border border-white/10">
                        <Star className="w-3.5 h-3.5 fill-current" />
                        <span>{item.rating}</span>
                        <span className="text-white/60">({item.reviewsCount})</span>
                      </div>
                    </div>
                  </div>

                  {/* Card Body Content */}
                  <div className="p-5 flex-1 flex flex-col justify-between space-y-4">

                    {/* Top Universities Section */}
                    <div>
                      <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#155b9d] mb-2">
                        <GraduationCap className="w-4 h-4 text-[#1968b2]" />
                        <span>Top Institutions</span>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {item.topUniversities.map((uni, idx) => (
                          <span
                            key={idx}
                            className="bg-[#f5f9fe] border border-[#b8d3ef]/60 text-[#0d3c68] text-xs px-2.5 py-1 rounded-md font-medium"
                          >
                            {uni}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Highlights List */}
                    <div className="space-y-1.5 border-t border-[#eef5fc] pt-3">
                      {item.popularFor.map((feat, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-[#101828]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#1968b2] shrink-0" />
                          <span className="truncate">{feat}</span>
                        </div>
                      ))}
                    </div>

                    {/* Footer Info & Action */}
                    <div className="pt-3 border-t border-[#eef5fc] flex items-center justify-between">
                      <div>
                        <div className="text-[10px] uppercase font-bold text-[#5b95d2]">Est. Tuition</div>
                        <div className="text-xs font-bold text-[#0a3053]">{item.avgCost}</div>
                      </div>

                      <button className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1968b2] group-hover:text-[#114b82] transition">
                        <span>Explore</span>
                        <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* Empty Search State */
          <div className="bg-white rounded-2xl border border-[#d7e7f7] p-12 text-center max-w-lg mx-auto my-12 shadow-sm">
            <div className="w-16 h-16 bg-[#eef5fc] rounded-full flex items-center justify-center mx-auto text-[#1968b2] mb-4">
              <Compass className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-bold text-[#101828] mb-2">No Destinations Found</h3>
            <p className="text-sm text-[#5b95d2] mb-6">
              We couldn’t find any destination matching "{searchTerm}". Try clearing your filters or search for another country.
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedRegion('All');
                setSelectedCountry('All');
              }}
              className="bg-[#1968b2] text-white px-5 py-2.5 rounded-xl font-medium text-sm hover:bg-[#155b9d] transition"
            >
              Reset Filters
            </button>
          </div>
        )}

      </main>
   

    </>
  );
}