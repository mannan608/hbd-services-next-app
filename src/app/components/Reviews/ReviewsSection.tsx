
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Star,
  ShieldCheck,
  ChevronLeft,
  ChevronRight,
  Quote,
  Sparkles,
  ExternalLink,
} from "lucide-react";
import { useInView } from "@/hooks/useInView";

const reviews = [
  {
    id: 1,
    name: "Sajia Oshin",
    date: "3 weeks ago",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    text: "I started my journey with HBD services for my Australia visa process on August and with their wonderful assistance and By the grace of Almighty...",
  },
  {
    id: 2,
    name: "Aditto Saha",
    date: "A month ago",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    text: "Thanks to HBD services for their support and service. I recommend everyone to do your abroad journey with them. My counsellor was Pinku vai. He was...",
  },
  {
    id: 3,
    name: "Kamrul Islam",
    date: "A month ago",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    text: "I want to thank whole HBD service team. Everyone was too friendly and made my journey smoother and stress free. I will owe for this. Thanks for everything...",
  },
  {
    id: 4,
    name: "Tasfia Rahman",
    date: "2 months ago",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
    text: "Amazing experience! The guidance I received for university selection and visa documentation was top-notch. Highly professional team.",
  },
];

export interface ReviewItem {
  id: number;
  name: string;
  date: string;
  rating: number;
  avatar: string;
  text: string;
}

const REVIEWS_URL =
  "https://admin.trustindex.io/api/googleWriteReview?place-id=ChIJqyQYyZC4VTcR-7vrnhjyMIw";

const ReviewsSection = () => {
  const { ref: sectionRef, visible: sectionVisible } = useInView();
  const [currentIndex, setCurrentIndex] = useState(0);

  const totalReviews = reviews.length;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + totalReviews) % totalReviews);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalReviews);
  };

  const visibleReviews = Array.from(
    { length: Math.min(3, totalReviews) },
    (_, index) => reviews[(currentIndex + index) % totalReviews]
  );

  const activeReview = reviews[currentIndex];

  return (
    <section
      id="success-stories"
      className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28"
    >
      {/* Subtle brand background */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(25,104,178,0.07),_transparent_48%)]" />
      <div className="pointer-events-none absolute -right-40 top-40 h-96 w-96 rounded-full bg-brand-50/80 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div
          ref={sectionRef}
          className={`mx-auto max-w-3xl text-center transition-all duration-700 ${
            sectionVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-5 opacity-0"
          }`}
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-brand-100 bg-brand-50 px-4 py-2">
            <Sparkles className="h-4 w-4 text-brand-600" />
            <span className="text-xs font-bold uppercase tracking-[0.16em] text-brand-700">
              From Dreamers to Achievers
            </span>
          </div>

          <h2 className="text-3xl font-bold leading-tight tracking-tight text-secondary-500 sm:text-4xl lg:text-5xl">
            Stories That Inspire
            <span className="mt-1 block text-brand-600 sm:inline sm:pl-2">
              Success
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            Real experiences from students who trusted us with their global
            education journey. Your next success story starts here.
          </p>

          <div className="mx-auto mt-7 h-1 w-16 rounded-full bg-brand-500" />
        </div>

        {/* Google rating and trust panel */}
        <div className="mt-12 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_12px_40px_-24px_rgba(24,47,90,0.22)] sm:mt-16">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] lg:items-center">
            {/* Rating information */}
            <div className="flex flex-col gap-5 p-6 sm:flex-row sm:items-center sm:gap-7 sm:p-8">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-slate-100 bg-slate-50 text-2xl font-bold">
                  <span className="bg-gradient-to-br from-blue-500 via-red-500 to-yellow-500 bg-clip-text text-transparent">
                    G
                  </span>
                </div>

                <div>
                  <p className="text-sm font-semibold text-slate-500">
                    Google Reviews
                  </p>
                  <div className="mt-1 flex flex-wrap items-center gap-2">
                    <span className="text-3xl font-bold tracking-tight text-secondary-500">
                      4.9
                    </span>
                    <div
                      className="flex items-center gap-0.5 text-amber-500"
                      aria-label="Rated 4.9 out of 5"
                    >
                      {Array.from({ length: 5 }).map((_, index) => (
                        <Star
                          key={index}
                          className="h-4 w-4 fill-current"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="hidden h-12 w-px bg-slate-200 sm:block" />

              <div>
                <p className="text-sm font-semibold text-secondary-500">
                  Trusted by students and families
                </p>
                <p className="mt-1 text-sm text-slate-500">
                  443 Reviews · Global education consultancy
                </p>
                <div className="mt-2 flex items-center gap-2 text-xs font-medium text-emerald-700">
                  <span className="h-2 w-2 rounded-full bg-emerald-500" />
                  Building brighter futures together
                </div>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap items-center gap-3 border-t border-slate-100 bg-slate-50/70 p-5 sm:p-6 lg:border-l lg:border-t-0">
              <Link
                href={REVIEWS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-brand-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-brand-700 hover:shadow-md focus:outline-none focus:ring-4 focus:ring-brand-100"
              >
                Write a Review
                <ExternalLink className="h-4 w-4" />
              </Link>

              <div className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-600">
                <ShieldCheck className="h-4 w-4 text-brand-600" />
                <span>Trustindex</span>
              </div>
            </div>
          </div>
        </div>

        {/* Review cards */}
        <div className="mt-10 sm:mt-12">
          {/* Mobile: one review at a time */}
          <div className="md:hidden">
            <ReviewCard review={activeReview} />
          </div>

          {/* Tablet and desktop: three review cards */}
          <div className="hidden gap-6 md:grid md:grid-cols-2 lg:grid-cols-3">
            {visibleReviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        </div>

        {/* Carousel controls */}
        <div className="mt-6 flex items-center justify-center gap-5 sm:mt-8">
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous review"
            className="group flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-secondary-500 shadow-sm transition-all duration-200 hover:border-brand-600 hover:bg-brand-600 hover:text-white focus:outline-none focus:ring-0 "
          >
            <ChevronLeft className="h-5 w-5 transition-transform group-hover:-translate-x-0.5" />
          </button>

          <div className="flex items-center gap-2.5">
            {reviews.map((review, index) => (
              <button
                key={review.id}
                type="button"
                onClick={() => setCurrentIndex(index)}
                aria-label={`Show review ${index + 1}`}
                aria-current={index === currentIndex ? "true" : undefined}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "w-8 bg-brand-600"
                    : "w-2 bg-slate-300 hover:bg-brand-300"
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={handleNext}
            aria-label="Next review"
            className="group flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-secondary-500 shadow-sm transition-all duration-200 hover:border-brand-600 hover:bg-brand-600 hover:text-white focus:outline-none focus:ring-0 "
          >
            <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
          </button>
        </div>       
      </div>
    </section>
  );
};

function ReviewCard({ review }: { review: ReviewItem }) {
  return (
    <article className="group relative flex h-full min-h-[290px] flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_8px_30px_-20px_rgba(24,47,90,0.25)] transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-[0_20px_45px_-25px_rgba(25,104,178,0.28)] sm:p-7">
      {/* Small brand accent */}
      <div className="absolute left-0 top-0 h-1 w-16 rounded-br-full bg-brand-500 transition-all duration-300 group-hover:w-28" />

      <div className="flex items-start justify-between gap-3">
        <div className="flex min-w-0 items-center gap-3">
          <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full border-2 border-brand-100 bg-brand-50">
            <Image
              src={review.avatar}
              alt={review.name}
              fill
              sizes="48px"
              className="object-cover"
            />
          </div>

          <div className="min-w-0">
            <h3 className="truncate text-sm font-bold text-secondary-500 sm:text-base">
              {review.name}
            </h3>
            <p className="mt-1 text-xs text-slate-500">{review.date}</p>
          </div>
        </div>

        <Quote className="h-8 w-8 shrink-0 fill-brand-50 text-brand-200" />
      </div>

      <div className="mt-5 flex items-center justify-between gap-3">
        <div className="flex items-center gap-0.5 text-amber-500">
          {Array.from({ length: review.rating }).map((_, index) => (
            <Star key={index} className="h-4 w-4 fill-current" />
          ))}
        </div>

        <span className="inline-flex items-center gap-1 rounded-full bg-brand-50 px-2.5 py-1 text-[10px] font-semibold text-brand-700 sm:text-xs">
          <ShieldCheck className="h-3.5 w-3.5" />
          Google Review
        </span>
      </div>

      <p className="mt-5 flex-1 text-sm leading-7 text-slate-600 line-clamp-3">
        “{review.text}”
        {/* <Link href='/reviews' className="ml-2 text-brand-500 text-xs">Read more</Link> */}
      </p>
    </article>
  );
}

export default ReviewsSection;
