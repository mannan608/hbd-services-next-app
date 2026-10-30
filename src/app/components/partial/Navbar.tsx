
"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import logo from "@/app/assets/brand/logo.webp";

type NavItem = {
    label: string;
    href: string;
};

type NavbarUser = {
    name?: string;
    rolePrefix: string;
    avatarUrl?: string;
};

type NavbarProps = {
    user?: NavbarUser | null;
};

// Navigation configuration
const services: NavItem[] = [
     {
        label: "Study Abroad",
        href: "/services/study-abroad",
    },
    {
        label: "Language Academy",
        href: "/services/language-academy",
    },
    {
        label: "Digital Solutions for Education",
        href: "/services/digital-solutions",
    },
];

const destinations: NavItem[] = [
    { label: "United Kingdom", href: "/destinations/uk" },
    { label: "United States", href: "/destinations/usa" },
    { label: "Canada", href: "/destinations/canada" },
    { label: "Australia", href: "/destinations/australia" },
    { label: "New Zealand", href: "/destinations/new-zealand" },
    { label: "Malaysia", href: "/destinations/malaysia" },
    { label: "Germany", href: "/destinations/germany" },
    { label: "France", href: "/destinations/france" },
    { label: "Italy", href: "/destinations/italy" },
    { label: "Ireland", href: "/destinations/ireland" },
    { label: "Japan", href: "/destinations/japan" },
    { label: "South Korea", href: "/destinations/south-korea" },
];

const navigation: NavItem[] = [
    { label: "Universitys", href: "/universities" },
    { label: "News", href: "/news" },
    { label: "Events", href: "/events" },
];

export default function Navbar({ user = null }: NavbarProps) {
    const pathname = usePathname();

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
    const [mobileDestinationsOpen, setMobileDestinationsOpen] = useState(false);

    const navbarRef = useRef<HTMLElement>(null);

    // Close menus on outside click and Escape
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                navbarRef.current &&
                !navbarRef.current.contains(event.target as Node)
            ) {
                setActiveDropdown(null);
            }
        };

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setActiveDropdown(null);
                setMobileMenuOpen(false);
                setMobileServicesOpen(false);
                setMobileDestinationsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    // Close navigation after route change
    useEffect(() => {
        setMobileMenuOpen(false);
        setActiveDropdown(null);
        setMobileServicesOpen(false);
        setMobileDestinationsOpen(false);
    }, [pathname]);

    const closeMobileMenu = () => {
        setMobileMenuOpen(false);
        setMobileServicesOpen(false);
        setMobileDestinationsOpen(false);
    };

    const isActive = (href: string) => {
        return pathname === href || pathname.startsWith(`${href}/`);
    };

    const isGroupActive = (items: NavItem[]) => {
        return items.some((item) => isActive(item.href));
    };

    const dashboardHref = user
        ? user.rolePrefix === "student"
            ? "/student/dashboard"
            : `/${user.rolePrefix}/dashboard`
        : "/login";

    const linkClasses = (href: string, mobile = false) => {
        const active = isActive(href);

        return [
            "relative font-medium transition-colors duration-200",
            mobile
                ? "block rounded-xl px-4 py-3 text-sm"
                : "inline-flex items-center py-2 text-base tracking-wide",
            active
                ? "text-brand-600"
                : "text-neutral-600 hover:text-brand-600 dark:text-neutral-300 dark:hover:text-white",
            mobile && active
                ? "bg-brand-50 dark:bg-neutral-800"
                : "",
            !mobile
                ? "after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-brand-600 after:transition-all after:duration-300"
                : "",
            !mobile && active ? "after:w-full" : "",
            !mobile && !active
                ? "after:w-0 hover:after:w-full"
                : "",
        ]
            .filter(Boolean)
            .join(" ");
    };

    // Desktop dropdown trigger
    const dropdownTriggerClasses = (active: boolean) => [
        "relative inline-flex items-center gap-1.5 py-2 text-xs font-medium transition-colors duration-200",
        active
            ? "text-brand-600"
            : "text-neutral-600 hover:text-brand-600 dark:text-neutral-300 dark:hover:text-white",
    ].join(" ");

    // Reusable dropdown arrow
    const ArrowIcon = ({ open }: { open: boolean }) => (
        <svg
            className={`size-5 transition-transform duration-200 ${
                open ? "rotate-180" : ""
            }`}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.8}
            aria-hidden="true"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m7 10 5 5 5-5"
            />
        </svg>
    );

    // Reusable desktop dropdown
    const renderDropdown = (
        label: string,
        items: NavItem[],
        columns = 1
    ) => {
        const isOpen = activeDropdown === label;
        const groupActive = isGroupActive(items);

        return (
            <div
                className="relative"
                onMouseEnter={() => setActiveDropdown(label)}
                onMouseLeave={() => setActiveDropdown(null)}
            >
                <button
                    type="button"
                    onClick={() =>
                        setActiveDropdown(isOpen ? null : label)
                    }
                    onFocus={() => setActiveDropdown(label)}
                    className={dropdownTriggerClasses(groupActive || isOpen)}
                    aria-expanded={isOpen}
                    aria-haspopup="true"
                >
                   <span className="text-base font-medium"> {label}</span>
                    <ArrowIcon open={isOpen} />
                </button>

                {/* Dropdown panel */}
                <div
                    className={[
                        "absolute left-0 top-full z-50 pt-3 transition-all duration-200",
                        isOpen
                            ? "visible translate-y-0 opacity-100"
                            : "invisible -translate-y-2 opacity-0",
                    ].join(" ")}
                >
                    <div
                        className="w-72 overflow-hidden rounded-2xl border border-neutral-200 bg-white p-2 shadow-xl shadow-neutral-900/10 dark:border-neutral-800 dark:bg-neutral-900"
                        style={{
                            width: columns > 1 ? "480px" : "330px",
                        }}
                    >
                        <div
                            className="grid gap-1"
                            style={{
                                gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
                            }}
                        >
                            {items.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    onClick={() => setActiveDropdown(null)}
                                    className={[
                                        "group flex items-center gap-3 rounded-xl px-3 py-3 text-sm transition-colors",
                                        isActive(item.href)
                                            ? "bg-brand-50 text-brand-600 dark:bg-neutral-800"
                                            : "text-neutral-700 hover:bg-neutral-50 hover:text-brand-600 dark:text-neutral-200 dark:hover:bg-neutral-800",
                                    ].join(" ")}
                                >
                                    <span
                                        className={[
                                            "flex size-8 shrink-0 items-center justify-center rounded-lg transition-colors",
                                            isActive(item.href)
                                                ? "bg-brand-100 text-brand-600 dark:bg-neutral-700"
                                                : "bg-neutral-100 text-neutral-500 group-hover:bg-brand-50 group-hover:text-brand-600 dark:bg-neutral-800",
                                        ].join(" ")}
                                    >
                                        <svg
                                            className="size-4"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={1.7}
                                            aria-hidden="true"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M5 12h14M12 5l7 7-7 7"
                                            />
                                        </svg>
                                    </span>

                                    <span className="flex-1 font-medium">
                                        {item.label}
                                    </span>

                                    <svg
                                        className="size-4 opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={1.8}
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M5 12h14m-7-7 7 7-7 7"
                                        />
                                    </svg>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    // Mobile expandable dropdown
    const renderMobileDropdown = (
        label: string,
        items: NavItem[],
        isOpen: boolean,
        setIsOpen: (open: boolean) => void
    ) => {
        const groupActive = isGroupActive(items);

        return (
            <div>
                <button
                    type="button"
                    onClick={() => setIsOpen(!isOpen)}
                    className={[
                        "flex w-full items-center justify-between rounded-xl px-4 py-3 text-sm font-medium transition-colors",
                        groupActive
                            ? "bg-brand-50 text-brand-600 dark:bg-neutral-800"
                            : "text-neutral-700 hover:bg-neutral-50 dark:text-neutral-200 dark:hover:bg-neutral-800",
                    ].join(" ")}
                    aria-expanded={isOpen}
                >
                    <span>{label}</span>
                    <ArrowIcon open={isOpen} />
                </button>

                <div
                    className={[
                        "grid transition-all duration-300 ease-in-out",
                        isOpen
                            ? "grid-rows-[1fr] opacity-100"
                            : "grid-rows-[0fr] opacity-0",
                    ].join(" ")}
                >
                    <div className="min-h-0 overflow-hidden">
                        <div className="ml-4 space-y-1 border-l-2 border-neutral-100 py-2 pl-3 dark:border-neutral-800">
                            {items.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    tabIndex={mobileMenuOpen ? 0 : -1}
                                    onClick={closeMobileMenu}
                                    className={[
                                        "block rounded-lg px-3 py-2.5 text-sm transition-colors",
                                        isActive(item.href)
                                            ? "bg-brand-50 font-semibold text-brand-600 dark:bg-neutral-800"
                                            : "text-neutral-600 hover:bg-neutral-50 hover:text-brand-600 dark:text-neutral-300 dark:hover:bg-neutral-800",
                                    ].join(" ")}
                                >
                                    {item.label}
                                    {isActive(item.href) && (
                                        <span className="float-right mt-1.5 size-2 rounded-full bg-brand-600" />
                                    )}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <header
            ref={navbarRef}
            className="relative z-50 border-b border-neutral-200/80 bg-white/95 shadow-sm shadow-neutral-900/2 backdrop-blur-xl dark:border-neutral-800 dark:bg-neutral-950/95"
        >
            <nav
                className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
                aria-label="Main navigation"
            >
                <div className="flex h-20 items-center justify-between gap-4 md:h-22">

                    {/* Mobile menu button */}
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen((open) => !open)}
                        className="inline-flex size-10 shrink-0 items-center justify-center rounded-xl text-neutral-700 transition hover:bg-neutral-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 md:hidden dark:text-neutral-200 dark:hover:bg-neutral-800"
                        aria-label={
                            mobileMenuOpen ? "Close menu" : "Open menu"
                        }
                        aria-expanded={mobileMenuOpen}
                        aria-controls="mobile-navigation"
                    >
                        {mobileMenuOpen ? (
                            <svg
                                className="size-6"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={1.8}
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 6l12 12M18 6L6 18"
                                />
                            </svg>
                        ) : (
                            <svg
                                className="size-6"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={1.8}
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4 7h16M4 12h16M4 17h16"
                                />
                            </svg>
                        )}
                    </button>

                    {/* Brand logo */}
                    <Link
                        href="/"
                        className="relative flex shrink-0 items-center"
                        aria-label="Hbd Services"
                    >
                        <Image
                            src={logo}
                            alt="Hbd Services"
                            width={160}
                            height={70}
                            priority
                            className="h-auto max-h-16 w-32 object-contain sm:w-36 md:w-40"
                        />
                    </Link>

                    {/* Desktop navigation */}
                    <div className="hidden items-center gap-5 md:flex lg:gap-8">

                        {/* Services */}
                        {renderDropdown("Services", services)}
                         {/* Destinations Mega Menu */}
                        {renderDropdown("Destinations", destinations, 2)}

                        {/* Normal links */}
                        {navigation.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={linkClasses(item.href)}
                                aria-current={
                                    isActive(item.href) ? "page" : undefined
                                }
                            >
                                {item.label}
                            </Link>
                        ))}

                       
                    </div>

                    {/* Right-side actions */}
                    <div className="flex shrink-0 items-center gap-2 sm:gap-3">
                        {user ? (
                            <Link
                                href={dashboardHref}
                                aria-label={`Open ${user.name ?? "user"} dashboard`}
                                title="Go to dashboard"
                                className="group flex items-center gap-2 rounded-full p-1 transition hover:bg-neutral-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 dark:hover:bg-neutral-800"
                            >
                                <span className="relative block size-10 overflow-hidden rounded-full bg-neutral-100 ring-1 ring-neutral-200 transition group-hover:ring-brand-600 dark:bg-neutral-800 dark:ring-neutral-700">
                                    <Image
                                        src={user.avatarUrl || "/images/user/owner.png"}
                                        alt={user.name ?? "User profile"}
                                        fill
                                        sizes="40px"
                                        className="object-cover"
                                    />
                                </span>

                                <svg
                                    className="hidden size-4 text-neutral-500 sm:block"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={1.8}
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="m7 10 5 5 5-5"
                                    />
                                </svg>
                            </Link>
                        ) : (
                            <>
                                <Link
                                    href="/login"
                                    className="rounded-lg px-2 py-2 text-sm font-medium uppercase tracking-wide text-neutral-700 transition hover:text-brand-600 sm:px-3 dark:text-neutral-200 dark:hover:text-white"
                                >
                                    Login
                                </Link>

                                <Link
                                    href="/register"
                                    className="hidden items-center justify-center rounded-lg bg-brand-600 px-4 py-2.5 text-sm font-medium uppercase tracking-wide text-white shadow-sm transition hover:bg-brand-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2 sm:inline-flex lg:px-5"
                                >
                                    Sign Up Free
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            </nav>

            {/* Mobile navigation */}
            <div
                id="mobile-navigation"
                aria-hidden={!mobileMenuOpen}
                className={[
                    "grid overflow-hidden transition-[grid-template-rows,opacity] duration-300 ease-in-out md:hidden",
                    mobileMenuOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "pointer-events-none grid-rows-[0fr] opacity-0",
                ].join(" ")}
            >
                <div className="min-h-0 overflow-y-auto max-h-[calc(100dvh-72px)]">
                    <div className="border-t border-neutral-200 bg-white px-4 pb-5 pt-3 dark:border-neutral-800 dark:bg-neutral-950">

                        <div className="space-y-1">

                            {/* Mobile Services */}
                            {renderMobileDropdown(
                                "Services",
                                services,
                                mobileServicesOpen,
                                setMobileServicesOpen
                            )}

                            {/* Normal links */}
                            {navigation.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    tabIndex={mobileMenuOpen ? 0 : -1}
                                    className={linkClasses(item.href, true)}
                                    aria-current={
                                        isActive(item.href) ? "page" : undefined
                                    }
                                    onClick={closeMobileMenu}
                                >
                                    {item.label}
                                    {isActive(item.href) && (
                                        <span className="float-right mt-1.5 size-4 rounded-full bg-brand-600" />
                                    )}
                                </Link>
                            ))}

                            {/* Mobile Destinations */}
                            {renderMobileDropdown(
                                "Destinations",
                                destinations,
                                mobileDestinationsOpen,
                                setMobileDestinationsOpen
                            )}
                        </div>

                        {/* Mobile authentication */}
                        {!user && (
                            <div className="mt-4 border-t border-neutral-200 pt-4 dark:border-neutral-800">
                                <Link
                                    href="/register"
                                    onClick={closeMobileMenu}
                                    tabIndex={mobileMenuOpen ? 0 : -1}
                                    className="flex w-full items-center justify-center rounded-xl bg-brand-600 px-5 py-3 text-sm font-semibold uppercase text-white transition hover:bg-brand-700"
                                >
                                    Sign Up Free
                                </Link>

                                <p className="mt-3 text-center text-xs text-neutral-500 dark:text-neutral-400">
                                    Already have an account?{" "}
                                    <Link
                                        href="/login"
                                        tabIndex={mobileMenuOpen ? 0 : -1}
                                        onClick={closeMobileMenu}
                                        className="font-semibold text-brand-600 hover:underline"
                                    >
                                        Login
                                    </Link>
                                </p>
                            </div>
                        )}

                        {/* Mobile user dashboard */}
                        {user && (
                            <Link
                                href={dashboardHref}
                                tabIndex={mobileMenuOpen ? 0 : -1}
                                onClick={closeMobileMenu}
                                className="mt-4 flex items-center gap-3 rounded-xl border border-neutral-200 p-3 text-sm font-medium text-neutral-700 transition hover:border-brand-600 hover:text-brand-600 dark:border-neutral-800 dark:text-neutral-200"
                            >
                                <span className="relative size-9 overflow-hidden rounded-full">
                                    <Image
                                        src={user.avatarUrl || "/images/user/owner.png"}
                                        alt=""
                                        fill
                                        sizes="36px"
                                        className="object-cover"
                                    />
                                </span>

                                <span className="min-w-0 flex-1 truncate">
                                    {user.name || "My Account"}
                                </span>

                                <span aria-hidden="true">→</span>
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
}
