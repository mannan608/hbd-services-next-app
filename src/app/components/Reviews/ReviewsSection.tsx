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

/* ── Dummy / Sample Reviews Data (Replace or pass as props) ───────── */
const reviewsData = [
  {
    id: 1,
    name: "Sajia Oshin",
    date: "3 weeks ago",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    text: "I started my journey with HBD services for my Australia visa process on August and with their wonderful assistance and By the grace of Almighty...",
  },
  {
    id: 2,
    name: "Aditto Saha",
    date: "A month ago",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    text: "Thanks to HBD services for their support and service. I recommend everyone to do your abroad journey with them. My counsellor was Pinku vai. He was...",
  },
  {
    id: 3,
    name: "Kamrul Islam",
    date: "A month ago",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    text: "I want to thank whole HBD service team. Everyone was too friendly and made my journey smoother and stress free. I will owe for this. Thanks for everything...",
  },
  {
    id: 4,
    name: "Tasfia Rahman",
    date: "2 months ago",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
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

const ReviewsSection = () => {
    const { ref: sectionRef, visible: sectionVisible } = useInView();
  const [currentIndex, setCurrentIndex] = useState(0);

  // Number of visible cards based on screen size simulation (show 3 on lg, 1 on mobile)
  const totalReviews = reviews.length;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalReviews - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === totalReviews - 1 ? 0 : prev + 1));
  };
  return (
    <section
      className="relative overflow-hidden bg-slate-950 py-24 lg:py-32 text-slate-100"
      id="success-stories"
    >
      {/* Immersive background ambient glows */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
      <div className="pointer-events-none absolute -top-40 left-1/3 h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-10 h-[400px] w-[400px] rounded-full bg-emerald-500/10 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div
          ref={sectionRef}
          className={`mx-auto max-w-3xl text-center pb-16 transition-all duration-700 ${
            sectionVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 shadow-lg shadow-blue-500/5 backdrop-blur-md">
            <Sparkles className="h-4 w-4 text-blue-400" />
            <span className="text-xs font-bold uppercase tracking-widest text-blue-300">
              From Dreamers to Achievers
            </span>
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl text-white">
            Our Success{" "}
            <span className="bg-gradient-to-r from-blue-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent">
              Stories
            </span>
          </h2>

          <p className="mt-4 text-base text-slate-400 sm:text-lg">
            See why hundreds of students trust us with their global education journey.
          </p>
        </div>

        {/* Premium Google Rating Stats Bar */}
        <div className="relative mb-12 rounded-2xl border border-white/10 bg-slate-900/80 p-5 sm:p-6 shadow-2xl backdrop-blur-xl">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            
            {/* Left: Google Brand & Score */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6">
              <div className="flex items-center gap-2.5 bg-white/5 px-4 py-2 rounded-xl border border-white/5">
                <span className="text-xl font-bold tracking-tight text-white">Google</span>
                <span className="text-xl font-black text-amber-400">4.9</span>
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-xs text-slate-400 font-medium">(443 Reviews)</span>
              </div>

              <div className="hidden sm:block h-6 w-[1px] bg-white/10" />

              <div className="flex items-center gap-2 text-sm font-semibold text-slate-200">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Top Rated Global Consultancy Service</span>
              </div>
            </div>

            {/* Right: Actions (Write Review & Verified Trustindex Badge) */}
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link
                href="https://admin.trustindex.io/api/googleWriteReview?place-id=ChIJqyQYyZC4VTcR-7vrnhjyMIw"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-2.5 text-xs font-bold text-white shadow-lg shadow-blue-600/30 transition-all duration-300 hover:bg-blue-500 hover:shadow-blue-500/50"
              >
                <span>Write a Review</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </Link>

              <div className="inline-flex items-center gap-2 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-2.5 text-xs font-bold text-emerald-300 shadow-sm">
                <ShieldCheck className="h-4 w-4 text-emerald-400" />
                <span>Verified by Trustindex</span>
              </div>
            </div>

          </div>
        </div>

        {/* Reviews Cards Carousel / Grid Container */}
        <div className="relative">
          
          {/* Review Cards Grid (Shows 3 on desktop, 1 on mobile) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.slice(0, 3).map((review, idx) => (
              <div
                key={review.id}
                className="group relative flex flex-col justify-between rounded-3xl border border-white/10 bg-slate-900/60 p-8 shadow-xl backdrop-blur-md transition-all duration-500 hover:-translate-y-1.5 hover:border-blue-500/50 hover:bg-slate-900/90 hover:shadow-2xl hover:shadow-blue-500/10"
              >
                {/* Decorative Quote mark */}
                <div className="absolute top-6 right-6 text-white/5 pointer-events-none group-hover:text-blue-500/10 transition-colors">
                  <Quote className="h-16 w-16 rotate-180" />
                </div>

                <div>
                  {/* User Profile Header */}
                  <div className="flex items-center gap-4 mb-5">
                    <div className="relative h-14 w-14 overflow-hidden rounded-full border-2 border-blue-500/30 shadow-md">
                      <Image
                        src={review.avatar}
                        alt={review.name}
                        fill
                        sizes="60px"
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-white group-hover:text-blue-400 transition-colors">
                        {review.name}
                      </h4>
                      <p className="text-xs text-slate-400">{review.date}</p>
                      
                      {/* Stars & Google icon */}
                      <div className="mt-1 flex items-center gap-1.5">
                        <div className="flex items-center gap-0.5 text-amber-400">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                          ))}
                        </div>
                        <span className="rounded bg-white/5 px-1.5 py-0.5 text-[10px] font-medium text-slate-400 border border-white/5">
                          Google Review
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Review Body Text */}
                  <p className="text-sm leading-relaxed text-slate-300 italic">
                    &ldquo;{review.text}&rdquo;
                  </p>
                </div>

                {/* Card Footer accent */}
                <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-slate-500">
                  <span>Verified Student Experience</span>
                  <span className="text-emerald-400 font-medium">Successful Visa</span>
                </div>
              </div>
            ))}
          </div>

          {/* Carousel Control Buttons */}
          <div className="mt-10 flex items-center justify-center gap-4">
            <button
              onClick={handlePrev}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-slate-900 text-white shadow-lg transition-all hover:bg-blue-600 hover:border-blue-500 hover:scale-105 active:scale-95"
              aria-label="Previous review"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <div className="flex items-center gap-2">
              {reviews.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    idx === currentIndex % reviews.length
                      ? "w-8 bg-blue-500"
                      : "w-2.5 bg-white/20 hover:bg-white/40"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-slate-900 text-white shadow-lg transition-all hover:bg-blue-600 hover:border-blue-500 hover:scale-105 active:scale-95"
              aria-label="Next review"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  )
}

export default ReviewsSection