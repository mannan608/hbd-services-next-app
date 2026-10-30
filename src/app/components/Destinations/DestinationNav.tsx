import React from "react";

const navItems = [
  { label: "Overview", id: "overview" },
  { label: "Quick Facts", id: "facts" },
  { label: "Why UK", id: "why" },
  { label: "Highlights", id: "highlights" },
  { label: "Universities", id: "universities" },
  { label: "Visa Guide", id: "visa" },
  { label: "Living Costs", id: "costs" },
  { label: "Work Rights", id: "work" },
  { label: "Scholarships", id: "scholarships" },
  { label: "FAQs", id: "faq" },
];

const DestinationNav = () => {
  return (
    <div className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-10">
        <div className="flex items-center justify-between gap-3">
          {/* Removed 'hidden' and added 'flex-nowrap' so it scrolls horizontally on small screens */}
          <nav className="flex min-w-0 flex-1 flex-nowrap items-center gap-1 overflow-x-auto py-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="shrink-0 rounded-lg px-3 py-2 text-xs font-semibold text-slate-500 transition hover:bg-[#0B1D36] hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default DestinationNav;