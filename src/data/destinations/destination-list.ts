
import type { DestinationListItem } from "./destination.types";

export const destinations: DestinationListItem[] = [
  {
    id: 1,
    slug: "united-states",
    code: "USA",
    title: "Study in the United States",
    name: "United States",
    country: "United States",
    region: "North America",
    flag: "🇺🇸",
    image: "/images/destinations/united-states.jpg",
    rating: 4.9,
    reviewsCount: 1250,
    featured: true,
    popular: true,
    topUniversities: [
      "Harvard University",
      "Stanford University",
      "Massachusetts Institute of Technology",
      "University of California, Berkeley",
    ],
    popularFor: [
      "World-class universities",
      "Research opportunities",
      "Flexible academic programs",
      "Global career opportunities",
    ],
    avgCost: "USD 20,000 – 45,000/year",
    visaProcessing: "3–8 weeks (estimated)",
    description:
      "Discover world-renowned universities, innovative learning environments, flexible academic pathways, and diverse opportunities to build a successful global career.",
  },
  {
    id: 2,
    slug: "united-kingdom",
    code: "UK",
    title: "Study in the United Kingdom",
    name: "United Kingdom",
    country: "United Kingdom",
    region: "Europe",
    flag: "🇬🇧",
    image: "/images/destinations/united-kingdom.jpg",
    rating: 4.8,
    reviewsCount: 980,
    featured: true,
    popular: true,
    topUniversities: [
      "University College London",
      "University of Oxford",
      "University of Cambridge",
      "University of Manchester",
    ],
    popularFor: [
      "Globally recognised degrees",
      "One-year Master's programs",
      "Historic universities",
      "Student support services",
    ],
    avgCost: "USD 15,000 – 35,000/year",
    visaProcessing: "3–6 weeks (estimated)",
    description:
      "Experience a rich academic heritage, internationally recognised qualifications, shorter degree programs, and excellent opportunities for personal and professional growth.",
  },
  {
    id: 3,
    slug: "canada",
    code: "CA",
    title: "Study in Canada",
    name: "Canada",
    country: "Canada",
    region: "North America",
    flag: "🇨🇦",
    image: "/images/destinations/canada.jpg",
    rating: 4.7,
    reviewsCount: 860,
    featured: false,
    popular: true,
    topUniversities: [
      "University of Toronto",
      "University of British Columbia",
      "McGill University",
      "University of Alberta",
    ],
    popularFor: [
      "High-quality education",
      "Multicultural communities",
      "Practical learning",
      "Research opportunities",
    ],
    avgCost: "USD 15,000 – 35,000/year",
    visaProcessing: "Varies by application",
    description:
      "Benefit from high-quality education, multicultural communities, welcoming campuses, and diverse opportunities for career development and post-graduation pathways.",
  },
  {
    id: 4,
    slug: "australia",
    code: "AU",
    title: "Study in Australia",
    name: "Australia",
    country: "Australia",
    region: "Oceania",
    flag: "🇦🇺",
    image: "/images/destinations/australia.jpg",
    rating: 4.9,
    reviewsCount: 1450,
    featured: true,
    popular: true,
    topUniversities: [
      "University of Melbourne",
      "University of Sydney",
      "Monash University",
      "University of Queensland",
    ],
    popularFor: [
      "Globally recognised qualifications",
      "Practical learning programs",
      "Multicultural student life",
      "Post-study opportunities",
    ],
    avgCost: "USD 18,000 – 40,000/year",
    visaProcessing: "Varies by application",
    description:
      "Combine globally recognised education with an exceptional lifestyle, vibrant multicultural cities, practical learning experiences, and opportunities to gain international work experience.",
  },
  {
    id: 5,
    slug: "new-zealand",
    code: "NZ",
    title: "Study in New Zealand",
    name: "New Zealand",
    country: "New Zealand",
    region: "Oceania",
    flag: "🇳🇿",
    image: "/images/destinations/new-zealand.jpg",
    rating: 4.7,
    reviewsCount: 520,
    featured: false,
    popular: false,
    topUniversities: [
      "University of Auckland",
      "University of Otago",
      "Victoria University of Wellington",
      "University of Canterbury",
    ],
    popularFor: [
      "Quality education",
      "Applied learning",
      "Student wellbeing",
      "Beautiful natural surroundings",
    ],
    avgCost: "USD 15,000 – 30,000/year",
    visaProcessing: "4–8 weeks (estimated)",
    description:
      "Explore internationally respected institutions, innovative teaching methods, stunning natural surroundings, and a supportive environment for international students.",
  },
  {
    id: 6,
    slug: "malaysia",
    code: "MY",
    title: "Study in Malaysia",
    name: "Malaysia",
    country: "Malaysia",
    region: "Southeast Asia",
    flag: "🇲🇾",
    image: "/images/destinations/malaysia.jpg",
    rating: 4.6,
    reviewsCount: 430,
    featured: false,
    popular: false,
    topUniversities: [
      "University of Malaya",
      "Universiti Putra Malaysia",
      "Taylor's University",
      "Monash University Malaysia",
    ],
    popularFor: [
      "Affordable education",
      "International branch campuses",
      "Multicultural lifestyle",
      "Regional career opportunities",
    ],
    avgCost: "USD 4,000 – 12,000/year",
    visaProcessing: "4–8 weeks (estimated)",
    description:
      "Experience affordable, high-quality education in a dynamic multicultural environment, with internationally recognised programs and strong connections to regional and global industries.",
  },
];

export const getAllDestinations = (): DestinationListItem[] =>
  destinations;

export const getDestinationBySlug = (
  slug: string
): DestinationListItem | undefined =>
  destinations.find((destination) => destination.slug === slug);

export const getPopularDestinations = (): DestinationListItem[] =>
  destinations.filter((destination) => destination.popular);

export const getDestinationsByRegion = (
  region: string
): DestinationListItem[] =>
  destinations.filter((destination) => destination.region === region);

export const getAllRegions = (): string[] =>
  Array.from(
    new Set(destinations.map((destination) => destination.region))
  ).sort();
