"use client";

import type { ReactNode } from "react";
import { useInView } from "@/hooks/useInView";

type SectionRevealProps = {
  id: string;
  className?: string;
  children: ReactNode;
};

const SectionReveal = ({ id, className = "", children }: SectionRevealProps) => {
  const { ref, visible } = useInView<HTMLElement>();

  return (
    <section
      id={id}
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      } ${className}`}
    >
      {children}
    </section>
  );
};

export default SectionReveal;
