
"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

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

const navigation: NavItem[] = [
    { label: "Services", href: "/services" },
    { label: "Counsellors", href: "/counsellors" },
    { label: "Events", href: "/events" },
    { label: "Destinations", href: "/destinations" },
];

export default function Navbar({ user = null }: NavbarProps) {
    const pathname = usePathname();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        setMobileMenuOpen(false);
    }, [pathname]);

    useEffect(() => {
        if (!mobileMenuOpen) return;

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setMobileMenuOpen(false);
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [mobileMenuOpen]);

    const isActive = (href: string) => {
        return pathname === href || pathname.startsWith(`${href}/`);
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
                : "inline-flex items-center py-2 text-sm tracking-wide",
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

    return (
        <header className="fixed inset-x-0 top-0 z-50 border-b border-neutral-200/80 bg-white/95 shadow-sm shadow-neutral-900/2 backdrop-blur-xl dark:border-neutral-800 dark:bg-neutral-950/95">
            <nav
                className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
                aria-label="Main navigation"
            >
                <div className="flex h-18 items-center justify-between gap-4 md:h-20">
                    {/* Mobile menu button */}
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen((open) => !open)}
                        className="inline-flex size-10 shrink-0 items-center justify-center rounded-xl text-neutral-700 transition hover:bg-neutral-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 md:hidden dark:text-neutral-200 dark:hover:bg-neutral-800"
                        aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
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
                        aria-label="Nubex College home"
                    >
                        <Image
                            src="/logo.webp"
                            alt="Nubex College"
                            width={160}
                            height={70}
                            priority
                            className="h-auto max-h-12 w-28 object-contain sm:w-32"
                        />
                    </Link>

                    {/* Desktop navigation */}
                    <div className="hidden items-center gap-5 md:flex lg:gap-8">
                        {navigation.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={linkClasses(item.href)}
                                aria-current={isActive(item.href) ? "page" : undefined}
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
                                    className="rounded-lg px-2 py-2 text-xs font-medium uppercase tracking-wide text-neutral-700 transition hover:text-brand-600 sm:px-3  dark:text-neutral-200 dark:hover:text-white"
                                >
                                    Login
                                </Link>

                                <Link
                                    href="/register"
                                    className="hidden items-center justify-center rounded-lg bg-brand-600 px-4 py-2.5 text-xs font-medium uppercase tracking-wide text-white shadow-sm transition hover:bg-brand-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2 sm:inline-flex lg:px-5"
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
                <div className="min-h-0 overflow-hidden">
                    <div className="border-t border-neutral-200 bg-white px-4 pb-5 pt-3 dark:border-neutral-800 dark:bg-neutral-950">
                        <div className="space-y-1">
                            {navigation.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    tabIndex={mobileMenuOpen ? 0 : -1}
                                    className={linkClasses(item.href, true)}
                                    aria-current={isActive(item.href) ? "page" : undefined}
                                >
                                    {item.label}
                                    {isActive(item.href) && (
                                        <span
                                            className="float-right mt-1.5 size-2 rounded-full bg-brand-600"
                                            aria-hidden="true"
                                        />
                                    )}
                                </Link>
                            ))}
                        </div>

                        {!user && (
                            <div className="mt-4 border-t border-neutral-200 pt-4 dark:border-neutral-800">
                                <Link
                                    href="/register"
                                    tabIndex={mobileMenuOpen ? 0 : -1}
                                    className="flex w-full items-center justify-center rounded-xl bg-brand-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2"
                                >
                                    Sign Up Free
                                </Link>
                                <p className="mt-3 text-center text-xs text-neutral-500 dark:text-neutral-400">
                                    Already have an account?{" "}
                                    <Link
                                        href="/login"
                                        tabIndex={mobileMenuOpen ? 0 : -1}
                                        className="font-semibold text-brand-600 hover:underline"
                                    >
                                        Login
                                    </Link>
                                </p>
                            </div>
                        )}

                        {user && (
                            <Link
                                href={dashboardHref}
                                tabIndex={mobileMenuOpen ? 0 : -1}
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
