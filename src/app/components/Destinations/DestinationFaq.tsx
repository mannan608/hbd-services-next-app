"use client";
import React, { useState } from "react";
import { CircleHelp, ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Can I work while studying in the UK?",
    answer:
      "Yes. Student visa holders can work up to 20 hours per week during term time and full-time during official university vacation periods.",
  },
  {
    question: "How much bank balance is required for a UK student visa?",
    answer:
      "The original content lists £1,334 per month for 9 months (£12,006 total) for courses outside London, or £1,023 per month for the UK capital zone. Always verify the latest official financial requirements before applying.",
  },
  {
    question: "Is IELTS mandatory for UK universities?",
    answer:
      "Most universities require IELTS 5.5–6.5 depending on the course. Some accept TOEFL, PTE Academic, or Duolingo English Test as alternatives.",
  },
  {
    question: "Can I bring my family to the UK as a student?",
    answer:
      "Student visa holders at postgraduate level studying at a higher education provider may be eligible to bring dependants (spouse and children). Undergraduate students generally cannot bring dependants.",
  },
  {
    question: "What is the Graduate Route visa?",
    answer:
      "The Graduate Route allows eligible graduates to stay in the UK after completing their degree to work or look for work. The duration depends on the applicable rules and application date.",
  },
  {
    question: "How long does the UK student visa take to process?",
    answer:
      "Standard processing from outside the UK usually takes around 3 weeks. Priority processing may be available in some countries for an additional fee.",
  },
];

const DestinationFaq = () => {
  // Added state to track which FAQ item is currently open
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  return (
    <div className="mx-auto mt-10 max-w-4xl space-y-3">
      {faqs.map((faq, index) => {
        const isOpen = activeFaq === index;

        return (
          <div
            key={faq.question}
            className={`overflow-hidden rounded-2xl border bg-white transition-all duration-300 ${
              isOpen
                ? "border-brand-500/50 shadow-[0_6px_24px_rgba(11,29,54,0.06)]"
                : "border-slate-200"
            }`}
          >
            <button
              type="button"
              onClick={() => setActiveFaq(isOpen ? null : index)}
              className="flex w-full items-center justify-between gap-4 p-5 text-left sm:p-6"
              aria-expanded={isOpen}
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

            <div
              className={`grid transition-all duration-300 ${
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
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
};

export default DestinationFaq;