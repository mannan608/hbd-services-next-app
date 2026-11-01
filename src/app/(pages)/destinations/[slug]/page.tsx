import type { Metadata } from "next";
import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Check,
  CheckCircle2,
  FileCheck,
  GraduationCap,
  Info,
  MapPin,
  Sparkles,
} from "lucide-react";

import DestinationHeader from "@/app/components/destinations/DestinationHeader";
import DestinationNav from "@/app/components/destinations/DestinationNav";
import DestinationFaq from "@/app/components/destinations/DestinationFaq";
import DestinationCTA from "@/app/components/destinations/DestinationCTA";
import SectionReveal from "@/app/components/destinations/SectionReveal";
import {
  destinationDetails,
  getDestinationDetailsBySlug,
} from "@/data/destinations/destination-details";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return destinationDetails.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const destination = getDestinationDetailsBySlug(slug);

  if (!destination) return { title: "Destination Not Found" };

  return {
    title: `Study in ${destination.name} | Study Abroad`,
    description: destination.hero.description,
    openGraph: {
      title: `Study in ${destination.name}`,
      description: destination.hero.description,
      images: [destination.image],
      type: "website",
    },
  };
}

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-3xl">
      <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-brand-600">
        {eyebrow}
      </p>
      <h2 className="text-2xl font-bold tracking-tight text-[#0B1D36] sm:text-3xl lg:text-[38px]">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-sm leading-7 text-slate-500 sm:text-base">
          {description}
        </p>
      )}
    </div>
  );
}

function Card({ children, className = "" }: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`rounded-2xl border border-slate-200/80 bg-white shadow-[0_4px_24px_rgba(11,29,54,0.04)] ${className}`}>
      {children}
    </div>
  );
}

export default async function DestinationDetailsPage({ params }: PageProps) {
  const { slug } = await params;
  const destination = getDestinationDetailsBySlug(slug);

  if (!destination) notFound();

  return (
    <main className="min-h-screen">
      <DestinationHeader destination={destination} />
      <DestinationNav />

      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Overview */}
        <SectionReveal id="overview" className="scroll-mt-44 py-8 lg:py-10">
          <div className="grid gap-6 lg:grid-cols-12">
            <Card className="p-7 sm:p-10 lg:col-span-8 lg:p-12">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-brand-600">
                Destination Overview
              </p>
              <h2 className="text-3xl font-bold text-[#0B1D36] sm:text-4xl">
                {destination.overview.title}
              </h2>
              <p className="mt-6 text-sm leading-8 text-slate-500 sm:text-base">
                {destination.overview.description}
              </p>
            </Card>

            <div className="grid grid-cols-2 gap-4 lg:col-span-4">
              {destination.overview.stats.map((stat) => (
                <Card key={stat.label} className="flex flex-col justify-between p-5 sm:p-6">
                  <Info className="mb-5 text-brand-600" size={23} />
                  <div>
                    <p className="text-xl font-bold text-[#0B1D36] sm:text-2xl">{stat.value}</p>
                    <p className="mt-1 text-xs text-slate-500">{stat.label}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </SectionReveal>

        {/* Quick Facts */}
        <SectionReveal id="facts" className="scroll-mt-44 py-8 lg:py-10">
          <SectionHeading eyebrow="Quick Facts" title={`${destination.name} at a Glance`} />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {destination.quickFacts.map((fact) => (
              <Card key={fact.title} className="p-6 sm:p-7">
                <Info className="text-brand-600" size={23} />
                <p className="mt-5 text-xs font-bold uppercase tracking-wider text-brand-600">{fact.title}</p>
                <p className="mt-3 text-sm leading-7 text-[#0B1D36]">{fact.description}</p>
              </Card>
            ))}
          </div>
        </SectionReveal>

        {/* Why choose */}
        <SectionReveal id="why" className="scroll-mt-44 py-8 lg:py-10">
          <div className="relative overflow-hidden rounded-[28px] bg-[#0B1D36] p-8 sm:p-12 lg:p-16">
            <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full border border-white/10" />
            <div className="relative max-w-3xl">
              <p className="mb-6 inline-flex rounded-full bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-brand-300">
                Why this destination
              </p>
              <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl">
                {destination.whyChoose.title}
              </h2>
              <p className="mt-6 text-sm leading-8 text-slate-300 sm:text-base">
                {destination.whyChoose.description}
              </p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {destination.whyChoose.highlights.map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm font-medium text-white">
                    <CheckCircle2 size={18} className="shrink-0 text-brand-300" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </SectionReveal>

        {/* Highlights */}
        <SectionReveal id="highlights" className="scroll-mt-44 py-8 lg:py-10">
          <SectionHeading eyebrow="Key Highlights" title={`What Makes ${destination.name} Stand Out`} />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {destination.highlights.map((item) => (
              <Card key={item.title} className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                    <Check size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0B1D36]">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-500">{item.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </SectionReveal>

        {/* Universities */}
        <SectionReveal id="universities" className="scroll-mt-44 py-8 lg:py-10">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <SectionHeading
              eyebrow="Courses & Universities"
              title={`Universities in ${destination.name}`}
              description="Explore institutions and verify course availability, entry requirements and current fees directly with each university."
            />
          </div>

          {destination.universities.length > 0 ? (
            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {destination.universities.map((university) => (
                <a
                  key={university.name}
                  href={university.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-brand-500/60 hover:shadow-lg"
                >
                  <GraduationCap className="text-brand-600" size={26} />
                  <h3 className="mt-6 text-lg font-bold text-[#0B1D36] group-hover:text-brand-600">{university.name}</h3>
                  <p className="mt-2 flex items-center gap-2 text-sm text-slate-500">
                    <MapPin size={15} /> {university.city}
                  </p>
                  <div className="mt-7 flex items-center gap-2 border-t border-slate-100 pt-5">
                    <span className="rounded-lg bg-brand-50 px-3 py-1.5 text-xs font-bold text-brand-700">{university.ranking}</span>
                    <span className="rounded-lg bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-600">{university.courses}</span>
                    <ArrowUpRight className="ml-auto text-slate-400 group-hover:text-brand-600" size={19} />
                  </div>
                </a>
              ))}
            </div>
          ) : (
            <div className="mt-8 rounded-2xl border border-dashed border-slate-300 bg-white p-8 text-center">
              <GraduationCap className="mx-auto text-brand-500" size={30} />
              <p className="mt-3 font-semibold text-[#0B1D36]">University information is being updated.</p>
              <p className="mt-1 text-sm text-slate-500">Contact our counsellors for institution recommendations.</p>
            </div>
          )}
        </SectionReveal>

        {/* Visa */}
        <SectionReveal id="visa" className="scroll-mt-44 py-8 lg:py-10">
          <SectionHeading eyebrow="Visa Guidance" title={destination.visa.title} description={destination.visa.description} />
          <div className="mt-9 rounded-2xl border border-brand-500/20 bg-brand-50/60 p-5 sm:p-6">
            <div className="flex items-start gap-3">
              <Info className="mt-1 shrink-0 text-brand-600" size={21} />
              <p className="text-sm leading-7 text-slate-600">
                Visa rules, fees, financial thresholds and work conditions can change. Confirm the latest requirements through the relevant official immigration authority before applying.
              </p>
            </div>
          </div>

          <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="border-b border-slate-100 bg-[#0B1D36] p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-brand-300">
                  <FileCheck size={23} />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-brand-300">{destination.code} Student Visa</p>
                  <h3 className="mt-1 text-xl font-bold text-white sm:text-2xl">Application Guide</h3>
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-2">
              <div className="p-6 sm:p-8 lg:border-r lg:border-slate-100">
                <h4 className="flex items-center gap-2 text-lg font-bold text-[#0B1D36]">
                  <FileCheck className="text-brand-600" size={20} /> Application Steps
                </h4>
                <div className="mt-8">
                  {destination.visa.steps.map((step, index) => (
                    <div key={step.title} className="relative flex gap-4 pb-8 last:pb-0">
                      {index !== destination.visa.steps.length - 1 && (
                        <div className="absolute bottom-0 left-[17px] top-9 w-px bg-slate-200" />
                      )}
                      <div className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#0B1D36] text-sm font-bold text-white">
                        {index + 1}
                      </div>
                      <div className="pt-1">
                        <h5 className="text-sm font-bold text-[#0B1D36]">{step.title}</h5>
                        <p className="mt-2 text-sm leading-6 text-slate-500">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-slate-50/70 p-6 sm:p-8">
                <h4 className="flex items-center gap-2 text-lg font-bold text-[#0B1D36]">
                  <FileCheck className="text-brand-600" size={20} /> Document Requirements
                </h4>
                <p className="mt-2 text-sm text-slate-500">Requirements vary by applicant and visa category.</p>
                <div className="mt-6 space-y-3">
                  {destination.visa.documents.map((document) => (
                    <div key={document.name} className="flex items-center justify-between gap-3 rounded-xl border border-slate-200/80 bg-white p-4">
                      <div className="flex min-w-0 items-center gap-3">
                        <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${document.required ? "bg-emerald-50 text-emerald-600" : "bg-slate-100 text-slate-400"}`}>
                          <Check size={16} />
                        </div>
                        <span className="text-sm font-semibold text-[#0B1D36]">{document.name}</span>
                      </div>
                      <span className={`shrink-0 rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide ${document.required ? "bg-emerald-50 text-emerald-700" : "bg-slate-100 text-slate-500"}`}>
                        {document.required ? "Required" : "If applicable"}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </SectionReveal>

        {/* Living costs */}
        <SectionReveal id="costs" className="scroll-mt-44 py-8 lg:py-10">
          <SectionHeading eyebrow="Cost of Living" title={destination.livingCosts.title} description={destination.livingCosts.description} />
          <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {destination.livingCosts.expenses.map((expense) => (
              <Card key={expense.title} className="p-5 text-center sm:p-7">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                  <BriefcaseBusiness size={22} />
                </div>
                <p className="mt-5 text-xs font-bold uppercase tracking-wider text-slate-500">{expense.title}</p>
                <p className="mt-3 text-xl font-bold tracking-tight text-[#0B1D36] sm:text-2xl">{expense.amount}</p>
                <p className="mt-2 text-xs text-slate-400">{destination.livingCosts.currency}</p>
              </Card>
            ))}
          </div>
        </SectionReveal>

        {/* Work rights */}
        <SectionReveal id="work" className="scroll-mt-44 py-8 lg:py-10">
          <SectionHeading eyebrow="Work Opportunities" title={destination.workRights.title} description={destination.workRights.description} />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {destination.workRights.items.map((item) => (
              <Card key={item.title} className="p-7">
                <BriefcaseBusiness className="text-brand-600" size={24} />
                <p className="mt-6 text-xs font-bold uppercase tracking-widest text-brand-600">{item.title}</p>
                <h3 className="mt-3 text-2xl font-bold text-[#0B1D36]">{item.value}</h3>
                <p className="mt-2 text-sm text-slate-500">{item.subtitle}</p>
                <p className="mt-5 border-t border-slate-100 pt-4 text-sm leading-6 text-slate-500">{item.description}</p>
              </Card>
            ))}
          </div>
        </SectionReveal>

        {/* Scholarships */}
        <SectionReveal id="scholarships" className="scroll-mt-44 py-8 lg:py-10">
          <SectionHeading eyebrow="Funding Opportunities" title={`Scholarships in ${destination.name}`} description="Scholarship availability, value and eligibility depend on the provider and course." />
          {destination.scholarships.length > 0 ? (
            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {destination.scholarships.map((scholarship) => (
                <a key={scholarship.name} href={scholarship.href} target="_blank" rel="noopener noreferrer" className="group rounded-2xl border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:border-brand-500/60 hover:shadow-xl">
                  <Sparkles size={22} className="text-brand-600" />
                  <h3 className="mt-6 text-lg font-bold text-[#0B1D36] group-hover:text-brand-600">{scholarship.name}</h3>
                  <p className="mt-2 text-sm text-slate-500">{scholarship.university}</p>
                  <div className="mt-7 border-t border-slate-100 pt-5">
                    <p className="text-xs text-slate-400">Scholarship amount</p>
                    <p className="mt-1 text-2xl font-bold text-brand-600">{scholarship.amount}</p>
                  </div>
                </a>
              ))}
            </div>
          ) : (
            <div className="mt-8 rounded-2xl border border-dashed border-slate-300 bg-white p-8 text-center">
              <Sparkles className="mx-auto text-brand-500" size={28} />
              <p className="mt-3 font-semibold text-[#0B1D36]">Scholarship information is being updated.</p>
              <p className="mt-1 text-sm text-slate-500">Contact our counsellors to discuss available funding options.</p>
            </div>
          )}
        </SectionReveal>

        {/* FAQ */}
        <SectionReveal id="faq" className="scroll-mt-44 py-8 lg:py-10">
          <SectionHeading
            eyebrow="Frequently Asked Questions"
            title={`Questions About Studying in ${destination.name}`}
            description={`Answers to common questions about studying in ${destination.name}.`}
          />
          <DestinationFaq faqs={destination.faqs} />
        </SectionReveal>

        <DestinationCTA />
      </div>
    </main>
  );
}
