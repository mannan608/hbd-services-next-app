"use client";

import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";

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

// Distance from the viewport top where a section is considered "active".
// Sits just below the fixed site header (pt-28 / md:pt-30) plus this bar.
const SPY_OFFSET = 190;

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

const DestinationNav = () => {
  const [activeId, setActiveId] = useState(navItems[0].id);
  const [stuck, setStuck] = useState(false);
  const [entered, setEntered] = useState(false);
  const [indicator, setIndicator] = useState({ left: 0, width: 0 });

  const listRef = useRef<HTMLDivElement | null>(null);
  const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({});
  const frameRef = useRef<number | null>(null);

  // Entrance animation
  useEffect(() => {
    const id = requestAnimationFrame(() => setEntered(true));
    return () => cancelAnimationFrame(id);
  }, []);

  const measureIndicator = useCallback(() => {
    const link = linkRefs.current[activeId];
    if (!link) return;
    setIndicator({ left: link.offsetLeft, width: link.offsetWidth });
  }, [activeId]);

  useIsomorphicLayoutEffect(() => {
    if (entered) measureIndicator();
  }, [entered, measureIndicator]);

  // Keep the pill aligned when the layout or fonts change
  useEffect(() => {
    const handleResize = () => measureIndicator();
    window.addEventListener("resize", handleResize);
    document.fonts?.ready.then(handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [measureIndicator]);

  // Scroll spy: track the section currently under the bar
  useEffect(() => {
    const update = () => {
      setStuck(window.scrollY > 8);

      let current = navItems[0].id;
      for (const item of navItems) {
        const section = document.getElementById(item.id);
        if (section && section.getBoundingClientRect().top <= SPY_OFFSET) {
          current = item.id;
        }
      }

      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 4;
      if (atBottom) current = navItems[navItems.length - 1].id;

      setActiveId(current);
    };

    const handleScroll = () => {
      if (frameRef.current !== null) return;
      frameRef.current = requestAnimationFrame(() => {
        frameRef.current = null;
        update();
      });
    };

    update();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);
    };
  }, []);

  // Keep the active link centred while the bar scrolls horizontally
  useEffect(() => {
    const list = listRef.current;
    const link = linkRefs.current[activeId];
    if (!list || !link) return;

    const left = link.offsetLeft;
    const right = left + link.offsetWidth;
    if (left < list.scrollLeft || right > list.scrollLeft + list.clientWidth) {
      list.scrollTo({
        left: left - (list.clientWidth - link.offsetWidth) / 2,
        behavior: "smooth",
      });
    }
  }, [activeId]);

  return (
    <div
      className={`sticky top-28 z-40 border-b border-slate-200 bg-white backdrop-blur-xl transition-shadow duration-300 md:top-30 ${
        stuck
          ? "shadow-[0_12px_32px_rgba(11,29,54,0.10)]"
          : "shadow-[0_1px_2px_rgba(11,29,54,0.04)]"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-10">
        <div className="flex items-center justify-between gap-3">
          <nav
            ref={listRef}
            aria-label="Page sections"
            className="relative flex min-w-0 flex-1 flex-nowrap items-center gap-1 overflow-x-auto py-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {entered && indicator.width > 0 && (
              <span
                aria-hidden="true"
                className="pointer-events-none absolute top-1/2 h-8 -translate-y-1/2 rounded-lg bg-[#0B1D36] transition-[left,width] duration-300 ease-out"
                style={{ left: indicator.left, width: indicator.width }}
              />
            )}

            {navItems.map((item, index) => {
              const active = item.id === activeId;

              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  ref={(node) => {
                    linkRefs.current[item.id] = node;
                  }}
                  aria-current={active ? "true" : undefined}
                  style={{
                    transitionDelay: entered ? "0ms" : `${index * 40}ms`,
                  }}
                  className={`relative z-10 shrink-0 rounded-lg px-3 py-2 text-sm font-semibold transition-all duration-300 ease-out ${
                    entered
                      ? "translate-y-0 opacity-100"
                      : "-translate-y-2 opacity-0"
                  } ${
                    active
                      ? "text-white"
                      : "text-slate-500 hover:bg-slate-100 hover:text-[#0B1D36]"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default DestinationNav;
