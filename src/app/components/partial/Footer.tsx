
import Image from "next/image";
import Link from "next/link";

const footerSections = [
  {
    title: "About Us",
    links: [
      { label: "About HBD Services", href: "/about" },
      { label: "Book Your Appointment", href: "/appointments" },
      { label: "IELTS/PTE Registration", href: "/ielts-pte-registration" },
      { label: "Claims", href: "/claims" },
      { label: "Referral Program", href: "/referral" },
    ],
  },
  {
    title: "Quick Links",
    links: [
      { label: "Courses", href: "/courses" },
      { label: "Scholarships", href: "/scholarships" },
      { label: "Universities", href: "/providers" },
      { label: "Counsellors", href: "/counsellors" },
      { label: "Events", href: "/events" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Australian Visa Guide", href: "/resources/visa-guide" },
      { label: "PR Pathway Courses", href: "/resources/pr-pathways" },
      { label: "Visa Points Calculator", href: "/visa-points-calculator" },
      { label: "Student Accommodation", href: "/resources/accommodation" },
      { label: "Careers", href: "/careers" },
    ],
  },
];



const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M13.4 21v-8.2h2.8l.4-3.2h-3.2V7.5c0-.9.3-1.6 1.6-1.6h1.7V3.1c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.3H7.2v3.2H10V21h3.4Z" />
      </svg>
    ),
  },
  {
    label: "X",
    href: "https://x.com/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M18.9 2H22l-6.8 7.8L23.2 22h-6.3L12 14.6 5.5 22H2.4l7.3-8.4L1.9 2h6.5l4.5 6.8L18.9 2Zm-1.1 17.8h1.7L7.3 4.1H5.5l12.3 15.7Z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        aria-hidden="true"
      >
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.8" r="0.8" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M5.2 3a2.2 2.2 0 1 0 0 4.4 2.2 2.2 0 0 0 0-4.4ZM3.3 9h3.8v12H3.3V9Zm6.2 0h3.6v1.6h.1c.5-.9 1.7-2 3.6-2 3.8 0 4.5 2.5 4.5 5.7V21h-3.8v-5.9c0-1.4 0-3.2-2-3.2s-2.3 1.5-2.3 3.1V21H9.5V9Z" />
      </svg>
    ),
  },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms-conditions" },
  { label: "Contact Us", href: "/contact" },
];

type FooterProps = {
  year: number;
};

export default function Footer({ year }: FooterProps) {

  return (
    <footer className="border-t border-slate-800 bg-slate-950 text-slate-400">
      <div className="mx-auto max-w-7xl px-5 pb-6 pt-12 sm:px-6 md:pt-16 lg:px-8">
        {/* Main footer */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-5 md:gap-8">
          {/* Brand section */}
          <div className="col-span-2">
            <Link
              href="/"
              aria-label="HBD Services home"
              className="mb-5 inline-flex items-center rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400"
            >
              <Image
                src="/logo.png"
                alt="HBD Services"
                width={180}
                height={70}
                className="h-auto max-h-14 w-36 object-contain object-left sm:w-40"
              />
            </Link>

            <p className="mb-6 max-w-sm text-sm leading-7 text-slate-400 sm:text-[15px]">
              Connecting international students with premier educational
              institutions across Australia. Your journey to a brighter future
              starts here.
            </p>

            {/* Social links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit us on ${social.label}`}
                  className="flex size-10 items-center justify-center rounded-xl border border-slate-800 bg-slate-900 text-slate-400 transition duration-200 hover:border-brand-600 hover:bg-brand-600 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400"
                >
                  <span className="size-[18px]">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Footer link groups */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h2 className="mb-5 text-sm font-bold uppercase tracking-[0.12em] text-white">
                {section.title}
              </h2>

              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="inline-flex text-sm leading-6 text-slate-400 transition-colors duration-200 hover:text-brand-400 focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col gap-5 border-t border-slate-800 pt-7 md:mt-14 md:flex-row md:items-center md:justify-between">
          <p className="text-center text-xs leading-6 text-slate-500 md:text-left md:text-sm">
            &copy; {year} HBD Services. All rights reserved.
          </p>

          <nav
            aria-label="Legal navigation"
            className="flex flex-wrap items-center justify-center gap-x-5 gap-y-3 md:justify-end"
          >
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs text-slate-500 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 md:text-sm"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
