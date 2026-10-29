"use client";

import Link from "next/link";
import {
  GraduationCap,
  Users,
  FileCheck,
  FolderLock,
  PhoneCall,
  BarChart3,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Layers,
  ShieldCheck,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { useInView } from "@/hooks/useInView";

const platformData = {
  badge: "Next-Gen Education Infrastructure",
  title: "Run your entire education ecosystem on a unified platform",
  description:
    "Empower consultancies, colleges, and training providers with an intelligent, end-to-end digital core. Replace fragmented spreadsheets and scattered chat threads with a high-performance command center built for conversion and scale.",
  bulletPoints: [
    "Role-tailored custom portals for students, recruitment partners, and expert counsellors",
    "Real-time visual pipeline tracking from initial inquiry to final enrolment",
    "Enterprise-grade encrypted document vault with automated verification workflow",
    "Unified communications hub syncing phone calls, emails, and SMS per student profile",
  ],
  primaryCta: {
    label: "Schedule a live demo",
    url: "https://hbdservices.com/contacts",
  },
  secondaryCta: {
    label: "Explore core features",
    targetId: "digital-features",
  },
  features: [
    {
      id: "student-portal",
      title: "Interactive Student Portals",
      description:
        "Enable applicants to track live statuses, upload compliance docs, and chat directly with counsellors from any device.",
      icon: "GraduationCap",
      tag: "Client Experience",
    },
    {
      id: "crm",
      title: "Advanced CRM & Lead Routing",
      description:
        "Capture multi-channel leads instantly from expos, landing pages, and campaigns with automated counsellor distribution.",
      icon: "Users",
      tag: "Growth Engine",
    },
    {
      id: "app-tracking",
      title: "Visual Application Pipelines",
      description:
        "Manage university submissions, offer letters, and visa milestones seamlessly across customized visual stages.",
      icon: "FileCheck",
      tag: "Operations",
    },
    {
      id: "doc-management",
      title: "Secure Document Vault",
      description:
        "Centralize academic transcripts, passports, and test scores in a secure, searchable cloud repository.",
      icon: "FolderLock",
      tag: "Compliance",
    },
    {
      id: "comm-logs",
      title: "Omnichannel Communications",
      description:
        "Sync telephony records, email threads, and text logs automatically to individual student profiles.",
      icon: "PhoneCall",
      tag: "Engagement",
    },
    {
      id: "analytics",
      title: "Intelligence & Analytics",
      description:
        "Gain deep insight into source conversions, counsellor performance, and global destination trends with instant exports.",
      icon: "BarChart3",
      tag: "Business Intelligence",
    },
  ],
};

/* ── Types ─────────────────────────────────────────────── */
export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  tag: string;
}

// Icon mapping
const iconMap: Record<string, LucideIcon> = {
  GraduationCap,
  Users,
  FileCheck,
  FolderLock,
  PhoneCall,
  BarChart3,
};

const DigitalPlatformSection = () => {
  const { ref: heroRef, visible: heroVisible } = useInView();
  const { ref: showcaseRef, visible: showcaseVisible } = useInView();
  const { ref: featuresRef, visible: featuresVisible } = useInView();

  return (
    <section
      className="relative overflow-hidden bg-slate-950 py-24 lg:py-32 text-slate-100"
      id="digital-platform"
    >
      {/* Immersive background glows and subtle grid texture */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
      <div className="pointer-events-none absolute -top-40 left-1/4 h-[500px] w-[500px] rounded-full bg-emerald-500/10 blur-[120px]" />
      <div className="pointer-events-none absolute top-1/3 -right-20 h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Top Hero Section Header */}
        <div
          ref={heroRef}
          className={`mx-auto max-w-3xl text-center pb-16 transition-all duration-700 ${
            heroVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 shadow-lg shadow-emerald-500/5 backdrop-blur-md">
            <Sparkles className="h-4 w-4 text-emerald-400" />
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-300">
              {platformData.badge}
            </span>
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl text-white leading-[1.15]">
            Run your entire education ecosystem on a{" "}
            <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-blue-400 bg-clip-text text-transparent">
              unified platform
            </span>
          </h2>

          <p className="mt-5 text-base text-slate-300 sm:text-lg leading-relaxed max-w-2xl mx-auto">
            {platformData.description}
          </p>
        </div>

        {/* Premium Interactive Dashboard Preview Showcase */}
        <div
          ref={showcaseRef}
          className={`relative mx-auto max-w-7xl mb-24 transition-all duration-700 delay-100 ${
            showcaseVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          }`}
        >
          <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-emerald-500/30 via-blue-500/30 to-indigo-500/30 blur-xl opacity-50" />
          
          <div className="relative rounded-3xl border border-white/10 bg-slate-900/90 p-4 sm:p-6 shadow-2xl backdrop-blur-xl">
            {/* Window bar */}
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-rose-500/80" />
                <div className="h-3 w-3 rounded-full bg-amber-500/80" />
                <div className="h-3 w-3 rounded-full bg-emerald-500/80" />
              </div>
              <div className="flex items-center gap-2 rounded-full border border-white/5 bg-white/5 px-4 py-1 text-xs font-medium text-slate-400">
                <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
                <span>secure.hbdservices.cloud / dashboard</span>
              </div>
              <div className="hidden sm:flex items-center gap-2 text-xs text-emerald-400 font-semibold bg-emerald-500/10 px-3 py-1 rounded-full">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                Live System Active
              </div>
            </div>

            {/* Dashboard Content Grid Mock */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              
              {/* Left Column: Key Values / Checklist */}
              <div className="lg:col-span-5 space-y-4">
                <h3 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
                  <Layers className="h-5 w-5 text-emerald-400" />
                  <span>Built for Scale & Precision</span>
                </h3>
                <ul className="space-y-3.5 pt-2">
                  {platformData.bulletPoints.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-slate-300 leading-normal">
                      <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
                        <CheckCircle2 className="h-4 w-4" />
                      </div>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Group inside showcase */}
                <div className="pt-4 flex flex-wrap items-center gap-3">
                  <Link
                    href={platformData.primaryCta.url}
                    className="group inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-6 py-3.5 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/25 transition-all duration-300 hover:bg-emerald-400 hover:shadow-emerald-400/40"
                  >
                    <span>{platformData.primaryCta.label}</span>
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>

                  <a
                    href={`#${platformData.secondaryCta.targetId}`}
                    className="rounded-xl border border-white/10 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-white/10 hover:border-white/20"
                  >
                    {platformData.secondaryCta.label}
                  </a>
                </div>
              </div>

              {/* Right Column: Visual Metrics & Pipeline Card Preview */}
              <div className="lg:col-span-7 rounded-2xl border border-white/10 bg-slate-950/80 p-5 shadow-inner">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Operations Overview</p>
                    <p className="text-lg font-bold text-white">Active Student Pipeline</p>
                  </div>
                  <div className="rounded-lg bg-emerald-500/10 px-3 py-1 text-xs font-bold text-emerald-400 border border-emerald-500/20">
                    Real-Time Sync
                  </div>
                </div>

                {/* Mini Metrics row */}
                <div className="grid grid-cols-3 gap-3 mb-5">
                  <div className="rounded-xl border border-white/5 bg-white/[0.02] p-3">
                    <p className="text-[10px] text-slate-400 uppercase font-semibold">Total Inquiries</p>
                    <p className="text-xl font-extrabold text-white mt-0.5">1,428</p>
                    <span className="text-[10px] text-emerald-400 font-medium">+18% this week</span>
                  </div>
                  <div className="rounded-xl border border-white/5 bg-white/[0.02] p-3">
                    <p className="text-[10px] text-slate-400 uppercase font-semibold">Offers Issued</p>
                    <p className="text-xl font-extrabold text-white mt-0.5">384</p>
                    <span className="text-[10px] text-emerald-400 font-medium">94% Visa rate</span>
                  </div>
                  <div className="rounded-xl border border-white/5 bg-white/[0.02] p-3">
                    <p className="text-[10px] text-slate-400 uppercase font-semibold">Enrolments</p>
                    <p className="text-xl font-extrabold text-white mt-0.5">215</p>
                    <span className="text-[10px] text-blue-400 font-medium">Target Met</span>
                  </div>
                </div>

                {/* Mock Kanban Pipeline Stream */}
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between text-xs text-slate-400 px-1">
                    <span>Recent Student Activity</span>
                    <span className="text-emerald-400 font-medium">View All Boards →</span>
                  </div>
                  <div className="rounded-xl border border-white/5 bg-white/[0.02] p-3 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="h-8 w-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-xs">
                        JS
                      </div>
                      <div>
                        <p className="text-xs font-bold text-white">Jessica Smith • Master of IT</p>
                        <p className="text-[11px] text-slate-400">University of Melbourne • Offer Letter Issued</p>
                      </div>
                    </div>
                    <span className="rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] px-2.5 py-1 font-semibold border border-emerald-500/20">
                      Offer Accepted
                    </span>
                  </div>
                  <div className="rounded-xl border border-white/5 bg-white/[0.02] p-3 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="h-8 w-8 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold text-xs">
                        AK
                      </div>
                      <div>
                        <p className="text-xs font-bold text-white">Alex Kumar • MBA Global</p>
                        <p className="text-[11px] text-slate-400">University of Sydney • Visa Lodgement</p>
                      </div>
                    </div>
                    <span className="rounded-full bg-blue-500/10 text-blue-400 text-[10px] px-2.5 py-1 font-semibold border border-blue-500/20">
                      In Review
                    </span>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>

        {/* Feature Grid Header */}
        <div className="text-center mb-12" id="digital-features">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 mb-3">
            <Zap className="h-3.5 w-3.5 text-amber-400" />
            <span className="text-xs font-bold uppercase tracking-wider text-slate-300">Modular Capabilities</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Engineered for Modern Educational Excellence
          </h3>
          <p className="mt-2 text-sm text-slate-400 max-w-xl mx-auto">
            Every module is carefully structured to maximize counselor productivity and student satisfaction.
          </p>
        </div>

        {/* Feature Grid Cards */}
        <div
          ref={featuresRef}
          className={`grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 transition-all duration-700 delay-150 ${
            featuresVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          {platformData.features.map((feature, idx) => {
            const IconComponent = iconMap[feature.icon] || GraduationCap;
            return (
              <div
                key={feature.id}
                style={{ transitionDelay: `${idx * 80}ms` }}
                className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-slate-900/60 p-8 shadow-xl backdrop-blur-md transition-all duration-500 hover:-translate-y-1.5 hover:border-emerald-500/50 hover:bg-slate-900/90 hover:shadow-2xl hover:shadow-emerald-500/10"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    {/* Icon Box */}
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500/20 to-blue-500/20 text-emerald-400 border border-emerald-500/30 transition-transform duration-500 group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-slate-950">
                      <IconComponent className="h-6 w-6" />
                    </div>
                    {/* Feature Badge Tag */}
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold text-slate-300">
                      {feature.tag}
                    </span>
                  </div>

                  {/* Text Content */}
                  <div>
                    <h4 className="text-xl font-bold tracking-tight text-white transition-colors group-hover:text-emerald-400">
                      {feature.title}
                    </h4>
                    <p className="mt-3 text-sm leading-relaxed text-slate-400">
                      {feature.description}
                    </p>
                  </div>
                </div>

                {/* Subtle Hover Indicator */}
                <div className="mt-8 flex items-center gap-2 text-xs font-semibold text-emerald-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span>Learn workflow</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default DigitalPlatformSection;