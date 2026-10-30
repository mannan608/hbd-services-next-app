import { ArrowRight, GraduationCap } from 'lucide-react'
import React from 'react'

const DestinationCTA = () => {
  return (
        <section className="py-16 lg:py-24">
          <div className="relative overflow-hidden rounded-[28px] bg-[#0B1D36] px-6 py-14 text-center sm:px-12 sm:py-20">
            <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full border border-white/10" />
            <div className="absolute -bottom-32 -right-20 h-80 w-80 rounded-full bg-brand-500/10 blur-3xl" />

            <div className="relative mx-auto max-w-2xl">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-brand-500">
                <GraduationCap size={28} />
              </div>
              <p className="mt-7 text-xs font-bold uppercase tracking-[0.2em] text-white">
                Start Your Journey
              </p>
              <h2 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
                Ready to Study in the UK?
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-slate-300 sm:text-base">
                Get a destination-specific consultation with course,
                university, visa and scholarship guidance.
              </p>

              <a
                href="/contact"
                className="mt-9 inline-flex items-center justify-center gap-3 rounded-xl bg-brand-500 px-8 py-4 text-sm font-bold text-white shadow-lg transition hover:-translate-y-1 hover:bg-white hover:text-brand-500"
              >
                Book Free Consultation
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </section>
  )
}

export default DestinationCTA