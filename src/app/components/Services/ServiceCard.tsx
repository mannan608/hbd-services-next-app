
"use client";

import {
  Compass,
  Languages,
  Award,
  ShieldCheck,
  RefreshCw,
  Briefcase,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import { useInView } from "@/hooks/useInView";

/* ── Types ─────────────────────────────────────────────── */
export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

// Map string keys from JSON to actual Lucide icons
const iconMap: Record<string, LucideIcon> = {
  Compass,
  Languages,
  Award,
  ShieldCheck,
  RefreshCw,
  Briefcase,
};



interface ServiceCardProps {
  service: ServiceItem;
  index: number;
}

const ServiceCard = ({ service, index }: ServiceCardProps) => {
  const { ref, visible } = useInView();

  const IconComponent = iconMap[service.icon] || Briefcase;
  return (
    <article
      ref={ref}
      style={{ transitionDelay: `${(index % 3) * 80}ms` }}
      className={`group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-7 sm:p-8 shadow-[0_1px_3px_rgba(15,23,42,0.06)] transition-all duration-700 ease-out hover:-translate-y-1.5 hover:border-brand-200 hover:shadow-[0_20px_40px_-15px_rgba(15,23,42,0.12)] dark:border-neutral-800 dark:bg-neutral-900 ${
        visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
    >
      <div>
        {/* Icon Container */}
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-50 to-blue-50 text-brand-600 border border-brand-100/60 shadow-sm transition-all duration-500 ease-out group-hover:scale-110 group-hover:bg-brand-500 group-hover:text-brand-600 dark:bg-neutral-800 dark:border-neutral-700">
          <IconComponent className="h-6 w-6 transition-transform duration-500" />
        </div>

        {/* Text Content */}
        <div className="mt-6">
          <h3 className="text-xl font-bold tracking-tight text-slate-900 transition-colors duration-200 group-hover:text-brand-600 dark:text-white">
            {service.title}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-slate-500 dark:text-neutral-400 line-clamp-3">
            {service.description}
          </p>
        </div>
      </div>

      {/* Subtle Bottom Action Indicator */}
      <div className="mt-8 flex items-center gap-2 text-xs font-semibold tracking-wide uppercase text-brand-600  transition-opacity duration-300">
        <span>Learn More</span>
        <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
      </div>
    </article>
  )
}

export default ServiceCard