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
  LayoutDashboard,
  UserCheck,
  FileText,
  History,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";
import { useInView } from "@/hooks/useInView";


const platformData={
  "badge": "Digitalization of Educational Platform",
  "title": "Run your education business on one connected platform",
  "description": "We build and implement digital systems for consultancies, colleges, and training providers. Replace spreadsheets and scattered chats with a single place for leads, students, applications, and reports.",
  "bulletPoints": [
    "Custom portals for students, agents, and counsellors",
    "Lead to enrolment tracking in a visual pipeline",
    "Secure document upload and verification",
    "Call, email, and SMS history linked to each student"
  ],
  "primaryCta": {
    "label": "Request a demo",
    "url": "https://hbdservices.com/contacts"
  },
  "secondaryCta": {
    "label": "See features",
    "targetId": "digital-features"
  },
  "kpis": [
    { "label": "New leads", "value": "128" },
    { "label": "In progress", "value": "64" },
    { "label": "Offers issued", "value": "23" }
  ],
  "pipelineColumns": [
    { "stage": "Counselling", "students": ["Student A", "Student B"] },
    { "stage": "Applied", "students": ["Student C"] },
    { "stage": "Offer", "students": ["Student D", "Student E"] }
  ],
  "features": [
    {
      "id": "student-portal",
      "title": "Student portal",
      "description": "Students track application status, upload documents, and message their counsellor from any device.",
      "icon": "GraduationCap"
    },
    {
      "id": "crm",
      "title": "CRM & lead management",
      "description": "Capture leads from expos, web forms, and campaigns, assign them to counsellors, and never miss a follow-up.",
      "icon": "Users"
    },
    {
      "id": "app-tracking",
      "title": "Application tracking",
      "description": "Follow every application from submission to offer and enrolment with clear status stages.",
      "icon": "FileCheck"
    },
    {
      "id": "doc-management",
      "title": "Document management",
      "description": "Collect passports, transcripts, and test scores in one secure, searchable place.",
      "icon": "FolderLock"
    },
    {
      "id": "comm-logs",
      "title": "Call & communication logs",
      "description": "Sync phone system records to each student profile and report on call volume by counsellor.",
      "icon": "PhoneCall"
    },
    {
      "id": "analytics",
      "title": "Reports & analytics",
      "description": "See conversion by source, counsellor performance, and destination demand, with one-click Excel export.",
      "icon": "BarChart3"
    }
  ]
}

/* ── Types ─────────────────────────────────────────────── */
export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface PlatformData {
  badge: string;
  title: string;
  description: string;
  bulletPoints: string[];
  primaryCta: { label: string; url: string };
  secondaryCta: { label: string; targetId: string };
  kpis: { label: string; value: string }[];
  pipelineColumns: { stage: string; students: string[] }[];
  features: FeatureItem[];
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
  const { ref: featuresRef, visible: featuresVisible } = useInView();

  return (
    <section className="relative overflow-hidden bg-slate-50/50 py-20 dark:bg-slate-950 lg:py-28" id="digital-platform">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute -top-24 -left-20 h-96 w-96 rounded-full bg-emerald-500/10 blur-3xl" />
      <div className="pointer-events-none absolute top-1/2 -right-20 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Top Hero Section: Text Content & Interactive Dashboard Preview */}
        <div
          ref={heroRef}
          className={`grid grid-cols-1 items-center gap-12 lg:grid-cols-12 mb-20 transition-all duration-700 ${
            heroVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          {/* Left Text Column */}
          <div className="lg:col-span-6">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-200/60 bg-emerald-500/10 px-4 py-1.5 shadow-sm">
              <Sparkles className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
                {platformData.badge}
              </span>
            </div>

            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl dark:text-white leading-[1.15]">
              {platformData.title}
            </h2>

            <p className="mt-5 text-base text-slate-600 sm:text-lg dark:text-neutral-400 leading-relaxed">
              {platformData.description}
            </p>

            {/* Checklist */}
            <ul className="mt-6 space-y-3">
              {platformData.bulletPoints.map((point, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm font-medium text-slate-700 dark:text-neutral-300">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-500 mt-0.5" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href={platformData.primaryCta.url}
                className="group flex items-center gap-2 rounded-xl bg-emerald-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-emerald-600/25 transition-all duration-300 hover:bg-emerald-500 hover:shadow-emerald-500/40"
              >
                <span>{platformData.primaryCta.label}</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <a
                href={`#${platformData.secondaryCta.targetId}`}
                className="rounded-xl border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 shadow-sm transition-all duration-300 hover:bg-slate-50 hover:text-slate-900 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-700"
              >
                {platformData.secondaryCta.label}
              </a>
            </div>
          </div>

          {/* Right Column: Modern Dashboard Mockup Visual */}
          <div className="lg:col-span-6">
            <div className="relative mx-auto w-full max-w-xl overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-2xl dark:border-neutral-800 dark:bg-neutral-900">
              {/* Window Header Controls */}
              <div className="flex items-center gap-2 border-b border-slate-100 bg-slate-50 px-4 py-3 dark:border-neutral-800 dark:bg-neutral-800/60">
                <div className="flex gap-1.5">
                  <div className="h-3 w-3 rounded-full bg-rose-400" />
                  <div className="h-3 w-3 rounded-full bg-amber-400" />
                  <div className="h-3 w-3 rounded-full bg-emerald-400" />
                </div>
                <div className="mx-auto rounded-md bg-white px-3 py-0.5 text-[11px] font-medium text-slate-400 shadow-inner dark:bg-neutral-900 dark:text-neutral-500">
                  platform.hbdservices.com
                </div>
              </div>

              {/* Dashboard Layout */}
              <div className="flex h-[360px]">
                {/* Sidebar */}
                <div className="hidden sm:flex w-44 flex-col gap-1 border-r border-slate-100 bg-slate-50/50 p-3 text-xs font-semibold text-slate-500 dark:border-neutral-800 dark:bg-neutral-900/50 dark:text-neutral-400">
                  <div className="flex items-center gap-2 rounded-lg bg-emerald-500/10 px-3 py-2 text-emerald-600 dark:text-emerald-400">
                    <LayoutDashboard className="h-4 w-4" />
                    <span>Dashboard</span>
                  </div>
                  <div className="flex items-center gap-2 rounded-lg px-3 py-2 transition-colors hover:bg-slate-100 dark:hover:bg-neutral-800">
                    <Users className="h-4 w-4" />
                    <span>Leads</span>
                  </div>
                  <div className="flex items-center gap-2 rounded-lg px-3 py-2 transition-colors hover:bg-slate-100 dark:hover:bg-neutral-800">
                    <UserCheck className="h-4 w-4" />
                    <span>Students</span>
                  </div>
                  <div className="flex items-center gap-2 rounded-lg px-3 py-2 transition-colors hover:bg-slate-100 dark:hover:bg-neutral-800">
                    <FileText className="h-4 w-4" />
                    <span>Applications</span>
                  </div>
                  <div className="flex items-center gap-2 rounded-lg px-3 py-2 transition-colors hover:bg-slate-100 dark:hover:bg-neutral-800">
                    <History className="h-4 w-4" />
                    <span>Call History</span>
                  </div>
                  <div className="flex items-center gap-2 rounded-lg px-3 py-2 transition-colors hover:bg-slate-100 dark:hover:bg-neutral-800">
                    <TrendingUp className="h-4 w-4" />
                    <span>Reports</span>
                  </div>
                </div>

                {/* Main Content Area */}
                <div className="flex-1 p-4 overflow-hidden flex flex-col justify-between">
                  {/* KPI Cards */}
                  <div className="grid grid-cols-3 gap-2">
                    {platformData.kpis.map((kpi, idx) => (
                      <div
                        key={idx}
                        className="rounded-xl border border-slate-100 bg-slate-50 p-2.5 text-center dark:border-neutral-800 dark:bg-neutral-800/40"
                      >
                        <p className="text-[10px] font-semibold text-slate-400 dark:text-neutral-500 uppercase tracking-tight">
                          {kpi.label}
                        </p>
                        <p className="text-lg font-bold text-slate-800 dark:text-white">
                          {kpi.value}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Kanban Board Mock */}
                  <div className="mt-3 grid grid-cols-3 gap-2 flex-1">
                    {platformData.pipelineColumns.map((col, idx) => (
                      <div
                        key={idx}
                        className="flex flex-col rounded-xl border border-slate-100 bg-slate-50/70 p-2 dark:border-neutral-800 dark:bg-neutral-800/30"
                      >
                        <p className="mb-2 text-[11px] font-bold text-slate-600 dark:text-neutral-300">
                          {col.stage}
                        </p>
                        <div className="space-y-1.5">
                          {col.students.map((student, sIdx) => (
                            <div
                              key={sIdx}
                              className="rounded-lg border border-slate-200/80 bg-white p-2 text-[11px] font-medium text-slate-700 shadow-2xl dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-200"
                            >
                              {student}
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Grid */}
        <div
          id="digital-features"
          ref={featuresRef}
          className={`grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 transition-all duration-700 delay-100 ${
            featuresVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          {platformData.features.map((feature, idx) => {
            const IconComponent = iconMap[feature.icon] || GraduationCap;
            return (
              <div
                key={feature.id}
                style={{ transitionDelay: `${idx * 80}ms` }}
                className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-7 shadow-[0_1px_3px_rgba(15,23,42,0.06)] transition-all duration-500 hover:-translate-y-1.5 hover:border-emerald-300 hover:shadow-[0_20px_40px_-15px_rgba(15,23,42,0.12)] dark:border-neutral-800 dark:bg-neutral-900"
              >
                <div>
                  {/* Icon */}
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-50 to-blue-50 text-emerald-600 border border-emerald-100/60 shadow-sm transition-transform duration-500 group-hover:scale-110 group-hover:bg-emerald-600 group-hover:text-emerald-600 dark:bg-neutral-800 dark:border-neutral-700">
                    <IconComponent className="h-6 w-6" />
                  </div>

                  {/* Text Content */}
                  <div className="mt-5">
                    <h3 className="text-lg font-bold tracking-tight text-slate-900 transition-colors group-hover:text-emerald-600 dark:text-white">
                      {feature.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-500 dark:text-neutral-400">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  )
}

export default DigitalPlatformSection