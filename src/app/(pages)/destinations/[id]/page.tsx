
import {
  ArrowUpRight,
  Check,
  CheckCircle2,
  Clock3,
  GraduationCap,
  Info,
  MapPin,
  PoundSterling,
  BriefcaseBusiness,
  Globe2,
  Wallet,
  FileCheck,
  Plane,
  ShieldCheck,
  Sparkles,
  Users,
  type LucideIcon,
} from "lucide-react";
import type { ReactNode } from "react";

import DestinationHeader from "@/app/components/destinations/DestinationHeader";
import DestinationFaq from "@/app/components/destinations/DestinationFaq";
import DestinationNav from "@/app/components/destinations/DestinationNav";
import DestinationCTA from "@/app/components/destinations/DestinationCTA";
import SectionReveal from "@/app/components/destinations/SectionReveal";

const quickFacts = [
  {
    icon: Info,
    title: "Oldest University",
    description:
      "Oxford University was founded around 1096 — it is the oldest English-speaking university in the world.",
  },
  {
    icon: GraduationCap,
    title: "Nobel Laureates",
    description:
      "The UK has produced over 160 Nobel Prize winners — more than any other country except the USA.",
  },
  {
    icon: Clock3,
    title: "Master's Duration",
    description:
      "A UK Master's degree typically takes just 1 year, compared to 2 years in most other countries.",
  },
  {
    icon: Globe2,
    title: "International Students",
    description:
      "Over 500,000 international students study in the UK each year, making it the world's second most popular study destination.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Graduate Route",
    description:
      "The Graduate Route visa requires no job offer — you can arrive and look for work freely.",
  },
  {
    icon: Users,
    title: "Bangladeshi Students",
    description:
      "Bangladesh ranks among the top 10 source countries for UK student visas each year.",
  },
];

const highlights = [
  {
    title: "Top 10 Global Universities",
    description: "4 universities in the global top 10 (QS 2024)",
  },
  {
    title: "1-Year Masters",
    description:
      "1-year Masters saves tuition and gets you into the workforce faster.",
  },
  {
    title: "2-Year Graduate Route",
    description:
      "Graduate Route: 2 years post-study work with no employer tie.",
  },
  {
    title: "Part-Time Work Rights",
    description:
      "Work 20 hrs/week during term, unlimited during holidays.",
  },
  {
    title: "Lower IELTS Requirement",
    description: "IELTS from 5.5 accepted by many universities.",
  },
  {
    title: "Vibrant Student Life",
    description: "Rich student life: societies, sports, cultural events.",
  },
];

const universities = [
  {
    name: "University College London",
    city: "London, United Kingdom",
    ranking: "QS #9",
    courses: "5 courses",
    href: "https://globalpathwayexperts.com/universities/university-college-london",
  },
  {
    name: "University of Edinburgh",
    city: "Edinburgh, United Kingdom",
    ranking: "QS #27",
    courses: "5 courses",
    href: "https://globalpathwayexperts.com/universities/university-of-edinburgh",
  },
  {
    name: "University of Manchester",
    city: "Manchester, United Kingdom",
    ranking: "QS #34",
    courses: "5 courses",
    href: "https://globalpathwayexperts.com/universities/university-of-manchester",
  },
];

const visaSteps = [
  {
    title: "Apply to a UK University and Accept Your Offer",
    description:
      "Research and apply to UKVI-licensed universities via UCAS (undergraduate) or directly (postgraduate). Once you receive an unconditional offer, formally accept it and pay any required deposit.",
  },
  {
    title: "Receive Your CAS",
    description:
      "Once you have met all conditions and paid the deposit, your university will issue a CAS — a 14-character reference number. The CAS contains details of your course, fees, and English language proof.",
  },
  {
    title: "Complete Your TB Test",
    description:
      "Bangladeshi nationals must complete a tuberculosis (TB) test at an approved clinic before applying. The test is valid for 6 months. Results are sent directly to UKVI.",
  },
  {
    title: "Prepare Financial Evidence",
    description:
      "Show you have enough funds to pay your tuition and living costs. You need bank statements covering 28 consecutive days showing the required balance.",
  },
  {
    title: "Apply Online and Pay Fees",
    description:
      "Submit your UK Student Visa application online at gov.uk/student-visa. Pay the applicable visa application fee and Immigration Health Surcharge (IHS).",
  },
  {
    title: "Attend Biometric Appointment",
    description:
      "Book a biometric appointment at a UKVCAS service point in Dhaka. Provide fingerprints and a digital photo. Upload all supporting documents via the UKVCAS portal.",
  },
  {
    title: "Receive Decision",
    description:
      "Standard processing usually takes around 3 weeks. Once approved, travel to the UK and complete the required arrival formalities.",
  },
];

const documents = [
  { name: "Valid Passport", required: true },
  { name: "CAS Reference Number", required: true },
  { name: "Bank Statements (28-day)", required: true },
  { name: "TB Test Certificate", required: true },
  { name: "English Language Certificate", required: true },
  { name: "Academic Transcripts & Certificates", required: true },
  { name: "Passport-Sized Photos", required: true },
  { name: "ATAS Certificate", required: false },
  { name: "Proof of Accommodation", required: false },
];

const expenses = [
  { title: "Accommodation", amount: "£920", icon: MapPin },
  { title: "Food & Groceries", amount: "£320", icon: Wallet },
  { title: "Transport", amount: "£150", icon: Plane },
  { title: "Personal Expenses", amount: "£180", icon: BriefcaseBusiness },
];

const scholarships = [
  {
    name: "Global Futures Scholarship",
    university: "University of Manchester",
    amount: "GBP 8,000",
    href: "https://globalpathwayexperts.com/scholarships/global-futures-scholarship",
  },
  {
    name: "UCL Global Excellence Scholarship",
    university: "University College London",
    amount: "GBP 5,000",
    href: "https://globalpathwayexperts.com/scholarships/ucl-global-excellence-scholarship",
  },
  {
    name: "Edinburgh Global Online Learning Scholarship",
    university: "University of Edinburgh",
    amount: "GBP 5,000",
    href: "https://globalpathwayexperts.com/scholarships/edinburgh-global-online-learning-scholarship",
  },
];



type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  center?: boolean;
};

function SectionHeading({
  eyebrow,
  title,
  description,
  center = false,
}: SectionHeadingProps) {
  return (
    <div className={`max-w-3xl ${center ? "mx-auto text-center" : ""}`}>
      <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-brand-500">
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

type CardProps = {
  children: ReactNode;
  className?: string;
};

function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`rounded-2xl border border-slate-200/80 bg-white shadow-[0_4px_24px_rgba(11,29,54,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(11,29,54,0.08)] ${className}`}
    >
      {children}
    </div>
  );
}

type IconBoxProps = {
  icon: LucideIcon;
  dark?: boolean;
};

function IconBox({ icon: Icon, dark = false }: IconBoxProps) {
  return (
    <div
      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${
        dark
          ? "bg-white/10 text-[#E3C879]"
          : "bg-brand-500/10 text-brand-500"
      }`}
    >
      <Icon size={22} strokeWidth={1.8} />
    </div>
  );
}
const page = () => {
  return (
    <div className="min-h-screen">
      <DestinationHeader/>
        {/* Sticky Navigation */}
     <DestinationNav/>

      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Overview */}
        <SectionReveal id="overview" className="scroll-mt-44 md:scroll-mt-48 py-16 lg:py-24">
          <div className="grid gap-6 lg:grid-cols-12">
            <Card className="p-7 sm:p-10 lg:col-span-8 lg:p-12">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-brand-500">
                Destination Overview
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-[#0B1D36] sm:text-4xl">
                Study in United Kingdom
              </h2>
              <p className="mt-6 text-sm leading-8 text-slate-500 sm:text-base">
                The United Kingdom offers an unmatched combination of academic
                prestige and practical opportunity. With over 130 universities,
                students can choose from thousands of programmes across every
                discipline. Degrees are typically 3 years for undergraduate
                and 1 year for postgraduate, making UK education time-efficient
                and cost-competitive. Beyond the classroom, the UK offers a
                vibrant multicultural society, world-class cities like London,
                Manchester, Edinburgh, and Birmingham, and a rich arts and
                cultural scene. International students benefit from the
                Graduate Route visa, which allows eligible graduates to stay
                and work in the UK after completing their studies.
              </p>
            </Card>

            <div className="grid grid-cols-2 gap-4 lg:col-span-4 lg:grid-cols-2">
              {[
                { label: "Universities", value: "3", icon: GraduationCap },
                { label: "Scholarships", value: "3", icon: Sparkles },
                { label: "Currency", value: "GBP", icon: PoundSterling },
                { label: "Work Rights", value: "20h", icon: BriefcaseBusiness },
              ].map((item) => (
                <Card key={item.label} className="flex flex-col justify-between p-5 sm:p-6">
                  <item.icon className="mb-5 text-brand-500" size={23} />
                  <div>
                    <p className="text-2xl font-bold tracking-tight text-[#0B1D36] sm:text-3xl">
                      {item.value}
                    </p>
                    <p className="mt-1 text-xs font-medium text-slate-500">
                      {item.label}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </SectionReveal>

        {/* Quick Facts */}
        <SectionReveal id="facts" className="scroll-mt-44 md:scroll-mt-48 py-16 lg:py-20">
          <SectionHeading
            eyebrow="Quick Facts"
            title="United Kingdom at a Glance"
            description="A few interesting facts about studying and living in one of the world's most popular education destinations."
          />

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {quickFacts.map((fact) => (
              <Card key={fact.title} className="p-6 sm:p-7">
                <IconBox icon={fact.icon} />
                <p className="mt-5 text-xs font-bold uppercase tracking-wider text-brand-500">
                  {fact.title}
                </p>
                <p className="mt-3 text-sm font-medium leading-7 text-[#0B1D36]">
                  {fact.description}
                </p>
              </Card>
            ))}
          </div>
        </SectionReveal>

        {/* Why UK */}
        <SectionReveal id="why" className="scroll-mt-44 md:scroll-mt-48 py-16 lg:py-20">
          <div className="relative overflow-hidden rounded-[28px] bg-[#0B1D36] p-8 sm:p-12 lg:p-16">
            <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full border border-white/10" />
            <div className="absolute -right-10 -top-10 h-60 w-60 rounded-full border border-white/10" />

            <div className="relative max-w-3xl">
              <div className="mb-6 inline-flex rounded-full bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-brand-500">
                Why this destination
              </div>
              <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
                Why choose the
                <span className="text-brand-500"> United Kingdom?</span>
              </h2>
              <p className="mt-6 text-sm leading-8 text-slate-300 sm:text-base">
                The UK is home to four of the world&apos;s top 10 universities,
                offering students globally recognised degrees and excellent
                academic opportunities. One-year master&apos;s programmes help save
                both time and tuition costs, while the Graduate Route visa
                allows eligible international graduates to work in the UK
                after completing their studies. Students may also work up to
                20 hours per week during term time, subject to their visa
                conditions. With a strong Bangladeshi community and
                well-established support networks, the UK provides a welcoming
                environment for Bangladeshi students.
              </p>

              <div className="mt-9 flex items-center gap-3 text-sm font-semibold text-brand-500">
                <CheckCircle2 size={19} />
                A globally recognised education destination
              </div>
            </div>
          </div>
        </SectionReveal>

        {/* Highlights */}
        <SectionReveal id="highlights" className="scroll-mt-44 md:scroll-mt-48 py-16 lg:py-20">
          <SectionHeading
            eyebrow="Key Highlights"
            title="What Makes the UK Stand Out"
            description="Explore the key benefits that make the United Kingdom an attractive destination for international students."
          />

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {highlights.map((item) => (
              <Card key={item.title} className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-500/10 text-brand-500">
                    <Check size={20} strokeWidth={2.5} />
                  </div>
                  <div>
                    <p className="font-bold text-[#0B1D36]">{item.title}</p>
                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </SectionReveal>

        {/* Universities */}
        <SectionReveal id="universities" className="scroll-mt-44 md:scroll-mt-48 py-16 lg:py-20">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <SectionHeading
              eyebrow="Courses & Universities"
              title="Partner Universities in the UK"
              description="Explore some of the partner universities available for your study journey."
            />
            <a
              href="https://globalpathwayexperts.com/courses?destination=united-kingdom"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl border border-[#0B1D36]/20 px-5 py-3 text-sm font-bold text-[#0B1D36] transition hover:bg-[#0B1D36] hover:text-white"
            >
              Browse Courses <ArrowUpRight size={17} />
            </a>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {universities.map((university) => (
              <a
                key={university.name}
                href={university.href}
                className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-7 shadow-[0_4px_24px_rgba(11,29,54,0.04)] transition duration-300 hover:-translate-y-1 hover:border-brand-500/60 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-100 text-brand-500">
                  <GraduationCap size={24} />
                </div>
                <h3 className="mt-6 text-lg font-bold text-[#0B1D36] group-hover:text-brand-500">
                  {university.name}
                </h3>
                <p className="mt-2 flex items-center gap-2 text-sm text-slate-500">
                  <MapPin size={15} />
                  {university.city}
                </p>
                <div className="mt-7 flex items-center gap-2 border-t border-slate-100 pt-5">
                  <span className="rounded-lg bg-brand-500/15 px-3 py-1.5 text-xs font-bold text-brand-600">
                    {university.ranking}
                  </span>
                  <span className="rounded-lg bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-600">
                    {university.courses}
                  </span>
                  <ArrowUpRight className="ml-auto text-slate-400 transition group-hover:text-brand-500" size={19} />
                </div>
              </a>
            ))}
          </div>
        </SectionReveal>

        {/* Visa */}
        <SectionReveal id="visa" className="scroll-mt-44 md:scroll-mt-48 py-16 lg:py-20">
          <SectionHeading
            eyebrow="Visa Guidance"
            title="UK Student Visa Requirements"
            description="Understand the main application stages and prepare the documents required for your UK student visa journey."
          />

          <div className="mt-9 rounded-2xl border border-brand-500/30 bg-brand-500/[0.07] p-5 sm:p-6">
            <div className="flex items-start gap-3">
              <Info className="mt-1 shrink-0 text-brand-500" size={21} />
              <div>
                <h3 className="font-bold text-[#0B1D36]">
                  Important visa information
                </h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  The UK Student visa is the route most international students
                  need to study in the UK. Before applying, you must hold a
                  Confirmation of Acceptance for Studies (CAS) from a licensed
                  UK institution and meet the applicable English language,
                  financial and academic requirements. Bangladeshi applicants
                  must also provide a tuberculosis test certificate where
                  required. Visa fees, maintenance funds and post-study work
                  rules can change, so check the latest official GOV.UK
                  guidance before applying.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="border-b border-slate-100 bg-[#0B1D36] p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-brand-500">
                  <ShieldCheck size={23} />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-brand-500">
                    UK Student Visa
                  </p>
                  <h3 className="mt-1 text-xl font-bold text-white sm:text-2xl">
                    Application Guide for Bangladeshi Students
                  </h3>
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-2">
              {/* Application Steps */}
              <div className="p-6 sm:p-8 lg:border-r lg:border-slate-100">
                <h4 className="flex items-center gap-2 text-lg font-bold text-[#0B1D36]">
                  <FileCheck className="text-brand-500" size={20} />
                  Application Steps
                </h4>

                <div className="mt-8">
                  {visaSteps.map((step, index) => (
                    <div key={step.title} className="relative flex gap-4 pb-8 last:pb-0">
                      {index !== visaSteps.length - 1 && (
                        <div className="absolute bottom-0 left-[17px] top-9 w-px bg-slate-200" />
                      )}
                      <div className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#0B1D36] text-sm font-bold text-white">
                        {index + 1}
                      </div>
                      <div className="pt-1">
                        <h5 className="text-sm font-bold text-[#0B1D36]">
                          {step.title}
                        </h5>
                        <p className="mt-2 text-sm leading-6 text-slate-500">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Documents */}
              <div className="bg-slate-50/70 p-6 sm:p-8">
                <h4 className="flex items-center gap-2 text-lg font-bold text-[#0B1D36]">
                  <FileCheck className="text-brand-500" size={20} />
                  Document Requirements
                </h4>
                <p className="mt-2 text-sm text-slate-500">
                  Prepare these documents before submitting your application.
                </p>

                <div className="mt-6 space-y-3">
                  {documents.map((document) => (
                    <div
                      key={document.name}
                      className="flex items-center justify-between gap-3 rounded-xl border border-slate-200/80 bg-white p-4"
                    >
                      <div className="flex min-w-0 items-center gap-3">
                        <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${
                          document.required
                            ? "bg-emerald-50 text-emerald-600"
                            : "bg-slate-100 text-slate-400"
                        }`}>
                          <Check size={16} />
                        </div>
                        <span className="text-sm font-semibold text-[#0B1D36]">
                          {document.name}
                        </span>
                      </div>
                      <span
                        className={`shrink-0 rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide ${
                          document.required
                            ? "bg-emerald-50 text-emerald-700"
                            : "bg-slate-100 text-slate-500"
                        }`}
                      >
                        {document.required ? "Required" : "Optional"}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </SectionReveal>

        {/* Living Costs */}
        <SectionReveal id="costs" className="scroll-mt-44 md:scroll-mt-48 py-16 lg:py-20">
          <SectionHeading
            eyebrow="Cost of Living"
            title="Estimated Monthly Expenses"
            description="London is expensive; outside London is significantly more affordable. Budget £800–£1,200/month outside London. Student accommodation and public transport passes can help reduce costs."
          />

          <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {expenses.map((expense) => (
              <Card key={expense.title} className="p-5 text-center sm:p-7">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-brand-500/10 text-brand-500">
                  <expense.icon size={22} />
                </div>
                <p className="mt-5 text-xs font-bold uppercase tracking-wider text-slate-500">
                  {expense.title}
                </p>
                <p className="mt-3 text-3xl font-bold tracking-tight text-[#0B1D36] sm:text-4xl">
                  {expense.amount}
                </p>
                <p className="mt-2 text-xs text-slate-400">Per month estimate</p>
              </Card>
            ))}
          </div>
        </SectionReveal>

        {/* Work Rights */}
        <SectionReveal id="work" className="scroll-mt-44 md:scroll-mt-48 py-16 lg:py-20">
          <SectionHeading
            eyebrow="Work Opportunities"
            title="Work While Studying in the UK"
            description="Explore part-time work opportunities during your studies and possible options after graduation."
          />

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            <Card className="p-7">
              <IconBox icon={BriefcaseBusiness} />
              <p className="mt-6 text-xs font-bold uppercase tracking-widest text-brand-500">
                During Study
              </p>
              <h3 className="mt-3 text-3xl font-bold text-[#0B1D36]">
                20 hours
              </h3>
              <p className="mt-2 text-sm text-slate-500">Per week during term time</p>
              <p className="mt-5 border-t border-slate-100 pt-4 text-sm leading-6 text-slate-500">
                Student work conditions can vary by visa type, course load and
                academic calendar.
              </p>
            </Card>

            <Card className="p-7">
              <IconBox icon={GraduationCap} />
              <p className="mt-6 text-xs font-bold uppercase tracking-widest text-brand-500">
                After Graduation
              </p>
              <h3 className="mt-3 text-3xl font-bold text-[#0B1D36]">
                2 years
              </h3>
              <p className="mt-2 text-sm text-slate-500">Graduate Route reference</p>
              <p className="mt-5 border-t border-slate-100 pt-4 text-sm leading-6 text-slate-500">
                Post-study options depend on qualification level, institution,
                application date and applicable immigration rules.
              </p>
            </Card>

            <Card className="border-brand-500/30 bg-[#0B1D36] p-7 text-white">
              <IconBox icon={Info} />
              <p className="mt-6 text-xs font-bold uppercase tracking-widest text-brand-500">
                Counsellor Note
              </p>
              <h3 className="mt-3 text-xl font-bold text-white">
                Graduate Route Visa
              </h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                Graduate Route eligibility and duration depend on the rules
                applicable when you apply. Check official immigration guidance
                before making plans.
              </p>
            </Card>
          </div>
        </SectionReveal>

        {/* Scholarships */}
        <SectionReveal id="scholarships" className="scroll-mt-44 md:scroll-mt-48 py-16 lg:py-20">
          <SectionHeading
            eyebrow="Funding Opportunities"
            title="Scholarships in the United Kingdom"
            description="Explore scholarship opportunities offered by our partner universities."
          />

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {scholarships.map((scholarship) => (
              <a
                href={scholarship.href}
                key={scholarship.name}
                className="group rounded-2xl border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-brand-500/60 hover:shadow-xl"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-500/10 text-brand-500">
                  <Sparkles size={22} />
                </div>
                <h3 className="mt-6 text-lg font-bold leading-7 text-[#0B1D36] group-hover:text-brand-500">
                  {scholarship.name}
                </h3>
                <p className="mt-2 text-sm text-slate-500">
                  {scholarship.university}
                </p>
                <div className="mt-7 flex items-end justify-between border-t border-slate-100 pt-5">
                  <div>
                    <p className="text-xs font-medium text-slate-400">
                      Scholarship amount
                    </p>
                    <p className="mt-1 text-2xl font-bold text-brand-500">
                      {scholarship.amount}
                    </p>
                  </div>
                  <ArrowUpRight
                    className="text-slate-400 transition group-hover:text-brand-500"
                    size={21}
                  />
                </div>
              </a>
            ))}
          </div>
        </SectionReveal>

        {/* FAQ */}
        <SectionReveal id="faq" className="scroll-mt-44 md:scroll-mt-48 py-16 lg:py-20">
          <SectionHeading
            eyebrow="Frequently Asked Questions"
            title="Questions About Studying in the UK"
            description="Find answers to common questions from Bangladeshi students planning to study in the United Kingdom."
          />

         <DestinationFaq />
        </SectionReveal>

      <DestinationCTA />
      </div>
    </div>
  )
}

export default page