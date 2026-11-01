"use client";

import { useState } from "react";
import { ChevronDown, CircleHelp } from "lucide-react";
import type { DestinationDetail } from "@/data/destinations/destination.types";

interface Props {
  faqs: DestinationDetail["faqs"];
}

export default function DestinationFaq({ faqs }: Props) {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  if (!faqs.length) {
    return <p className="mt-8 text-sm text-slate-500">FAQs will be updated soon.</p>;
  }

  return (
    <div className="mx-auto mt-10 max-w-4xl space-y-3">
      {faqs.map((faq, index) => {
        const isOpen = activeFaq === index;

        return (
          <div
            key={faq.question}
            className={`overflow-hidden rounded-2xl border bg-white transition ${
              isOpen ? "border-brand-500/50 shadow-md" : "border-slate-200"
            }`}
          >
            <button
              type="button"
              onClick={() => setActiveFaq(isOpen ? null : index)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 p-5 text-left sm:p-6"
            >
              <span className="flex items-center gap-3 text-sm font-bold text-[#0B1D36] sm:text-base">
                <CircleHelp className="shrink-0 text-brand-500" size={20} />
                {faq.question}
              </span>
              <ChevronDown
                className={`shrink-0 text-slate-400 transition-transform duration-300 ${
                  isOpen ? "rotate-180 text-brand-500" : ""
                }`}
                size={20}
              />
            </button>

            <div className={`grid transition-all duration-300 ${
              isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
            }`}>
              <div className="overflow-hidden">
                <p className="px-5 pb-6 pl-12 text-sm leading-7 text-slate-500 sm:px-6 sm:pl-14">
                  {faq.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
