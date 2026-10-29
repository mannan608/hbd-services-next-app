"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Play, X, Sparkles } from "lucide-react";


const videoTestimonials=[
  {
    "id": "1",
    "name": "Sarah Jenkins",
    "course": "Master of IT, Australia",
    "videoId": "IAOHC6FcjZw",
    "thumbnail": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "2",
    "name": "Rahul Sharma",
    "course": "MBA, United Kingdom",
    "videoId": "sz_DA1TkGvk",
    "thumbnail": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "3",
    "name": "Ananya Patel",
    "course": "Data Science, Canada",
    "videoId": "KP2PoEkO3jE",
    "thumbnail": "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "4",
    "name": "Liam O'Connor",
    "course": "Engineering, USA",
    "videoId": "fwXF0hSY89Q",
    "thumbnail": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "5",
    "name": "Mei Lin",
    "course": "Nursing, New Zealand",
    "videoId": "a_Y7NumY2ic",
    "thumbnail": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "6",
    "name": "Carlos Mendez",
    "course": "Architecture, Germany",
    "videoId": "-6RkLOHDbg8",
    "thumbnail": "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "7",
    "name": "Priya Singh",
    "course": "Finance, Ireland",
    "videoId": "XbFprBIdzyQ",
    "thumbnail": "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "8",
    "name": "David Kim",
    "course": "Cyber Security, Australia",
    "videoId": "DIMgG8e0LKQ",
    "thumbnail": "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=600&q=80"
  }
]

/* ── Types ─────────────────────────────────────────────── */
export interface Testimonial {
  id: string;
  name: string;
  course: string;
  videoId: string;
  thumbnail: string;
}


const AchieversVoices = () => {
    const [activeVideoId, setActiveVideoId] = useState<string | null>(null);
  return (
    <section className="relative overflow-hidden bg-slate-950 py-24 text-white" id="achievers">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div
          ref={headerRef}
          className={`mx-auto max-w-2xl text-center pb-16 transition-all duration-700 ${
            headerVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 shadow-sm backdrop-blur-md">
            <Sparkles className="h-4 w-4 text-amber-400" />
            <span className="text-xs font-bold uppercase tracking-widest text-slate-200">
              Student Experiences
            </span>
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
            Achievers'{" "}
            <span className="bg-gradient-to-r from-blue-400 to-amber-300 bg-clip-text text-transparent">
              Voices
            </span>
          </h2>

          <p className="mt-4 text-base text-slate-400 sm:text-lg">
            Realize your dreams. Join the successful achievers worldwide!
          </p>
        </div>

        {/* Video Thumbnail Grid */}
        <div
          ref={gridRef}
          className={`grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 transition-all duration-700 delay-100 ${
            gridVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          {testimonials.map((item, index) => (
            <button
              key={item.id}
              onClick={() => setActiveVideoId(item.videoId)}
              style={{ transitionDelay: `${index * 60}ms` }}
              className="group relative aspect-video w-full overflow-hidden rounded-3xl border border-white/10 bg-neutral-900 shadow-xl transition-all duration-500 hover:-translate-y-1.5 hover:border-amber-400/50 hover:shadow-2xl hover:shadow-amber-500/10 focus:outline-none"
              aria-label={`Play success story by ${item.name}`}
            >
              {/* Thumbnail Image */}
              <Image
                src={item.thumbnail}
                alt={item.name}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />

              {/* Gradient Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-neutral-950/20 to-transparent transition-colors duration-300 group-hover:from-neutral-950/60" />

              {/* Play Button Icon Center */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-neutral-950 shadow-lg backdrop-blur transition-all duration-300 group-hover:scale-110 group-hover:bg-amber-400 group-hover:shadow-amber-400/30">
                  <Play className="h-5 w-5 fill-current ml-0.5" />
                </div>
              </div>

              {/* Student Details Footer over Thumbnail */}
              <div className="absolute bottom-3 left-4 right-4 text-left">
                <p className="text-sm font-bold text-white tracking-wide truncate">
                  {item.name}
                </p>
                <p className="text-xs text-slate-300 truncate">
                  {item.course}
                </p>
              </div>
            </button>
          ))}
        </div>

      </div>

      {/* Video Modal Popup */}
      {activeVideoId && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-neutral-950/90 backdrop-blur-md p-4 animate-in fade-in duration-300"
          role="dialog"
          aria-modal="true"
          aria-label="Student Video Modal"
        >
          <div className="relative w-full max-w-4xl overflow-hidden rounded-3xl border border-white/10 bg-black shadow-2xl">
            {/* Close Button */}
            <button
              onClick={() => setActiveVideoId(null)}
              className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur transition-all duration-300 hover:bg-amber-400 hover:text-neutral-950"
              aria-label="Close video player"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Responsive Iframe Container */}
            <div className="aspect-video w-full">
              <iframe
                src={`https://www.youtube.com/embed/${activeVideoId}?autoplay=1`}
                title="HBD Services Student Success Story"
                className="h-full w-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default AchieversVoices