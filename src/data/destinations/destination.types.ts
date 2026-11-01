
/** Lightweight data used by destination listings and cards. */
export interface DestinationListItem {
  id: number;
  slug: string;
  code: string;
  title: string;
  name: string;
  country: string;
  region: string;
  flag: string;
  image: string;

  /** Rating from verified student reviews. */
  rating: number | null;

  /** Number of verified student reviews. */
  reviewsCount: number;

  featured: boolean;
  popular: boolean;

  topUniversities: string[];
  popularFor: string[];

  /** Estimated annual tuition fee range. */
  avgCost: string;

  /** Estimated visa processing time. */
  visaProcessing: string;

  description: string;
}

/** Student reviews for a destination. */
export interface DestinationReview {
  id: string;
  name: string;
  program?: string;
  university?: string;
  rating: 1 | 2 | 3 | 4 | 5;
  date?: string;
  comment: string;
}

/** Destination popularity classification. */
export interface DestinationPopularity {
  level: "popular" | "standard";
  label: string;
  description: string;
  signals: string[];
}

/** Full content imported only by the dynamic destination detail route. */
export interface DestinationDetail {
  hero: {
    badge: string;
    title: string;
    description: string;
    features: string[];
  };

  overview: {
    title: string;
    description: string;
    stats: {
      label: string;
      value: string;
    }[];
  };

  quickFacts: {
    title: string;
    description: string;
  }[];

  whyChoose: {
    title: string;
    description: string;
    highlights: string[];
  };

  highlights: {
    title: string;
    description: string;
  }[];

  universities: {
    name: string;
    city: string;
    ranking: string;
    courses: string;
    href: string;
  }[];

  visa: {
    title: string;
    description: string;
    steps: {
      title: string;
      description: string;
    }[];
    documents: {
      name: string;
      required: boolean;
    }[];
  };

  livingCosts: {
    title: string;
    description: string;
    currency: string;
    expenses: {
      title: string;
      amount: string;
    }[];
  };

  workRights: {
    title: string;
    description: string;
    items: {
      title: string;
      value: string;
      subtitle: string;
      description: string;
    }[];
  };

  scholarships: {
    name: string;
    university: string;
    amount: string;
    href: string;
  }[];

  faqs: {
    question: string;
    answer: string;
  }[];

  reviews: DestinationReview[];

  ratingBreakdown: {
    stars: 1 | 2 | 3 | 4 | 5;
    count: number;
    percentage: number;
  }[];

  popularity: DestinationPopularity;
}

/** Combined shape used after a detail record has been loaded. */
export type Destination = DestinationListItem & DestinationDetail;

/** Compatibility aliases for older imports. */
export type DestinationList = DestinationListItem;
