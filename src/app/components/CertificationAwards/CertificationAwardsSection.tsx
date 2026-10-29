"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Award, CheckCircle, ExternalLink, QrCode, Sparkles } from "lucide-react";
import ICEFLogo from "@/app/assets/icons/IcefLogo";

/* ── Types ─────────────────────────────────────────────── */
export interface Certification {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    badgeNumber: string;
    verifyUrl: string;
    logoText: string;
}

const certifications: Certification[] = [
    {
        id: "icef",
        title: "ICEF Accredited Agency",
        subtitle: "ICEF Accredited Agency",
        description:
            "Independently verified and accredited by ICEF, meeting the highest global standards for international student recruitment and ethical counselling practices.",
        badgeNumber: "ICEF-2024-8842",
        verifyUrl: "https://www.icef.com",
        logoText: "ICEF",
    },

];

const CertificationAwardsSection = () => {
    const [headerVisible, setHeaderVisible] = useState(false);
    const [contentVisible, setContentVisible] = useState(false);
    const headerRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (!entry.isIntersecting) return;
                    if (entry.target === headerRef.current) setHeaderVisible(true);
                    if (entry.target === contentRef.current) setContentVisible(true);
                    observer.unobserve(entry.target);
                });
            },
            { threshold: 0.15 }
        );

        if (headerRef.current) observer.observe(headerRef.current);
        if (contentRef.current) observer.observe(contentRef.current);

        return () => observer.disconnect();
    }, []);

    return (
        <section className="relative overflow-hidden bg-slate-50/50 py-20 dark:bg-slate-950 lg:py-28" id="certifications">
            {/* Ambient background glows */}
            <div className="pointer-events-none absolute top-1/3 left-10 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />
            <div className="pointer-events-none absolute bottom-10 right-10 h-96 w-96 rounded-full bg-blue-600/10 blur-3xl" />

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <div
                    ref={headerRef}
                    className={`mx-auto max-w-2xl text-center pb-16 transition-all duration-700 ${headerVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                        }`}
                >
                    <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-200/60 bg-cyan-500/10 px-4 py-1.5 shadow-sm backdrop-blur-md">
                        <Sparkles className="h-4 w-4 text-cyan-600 dark:text-cyan-400" />
                        <span className="text-xs font-bold uppercase tracking-widest text-cyan-600 dark:text-cyan-400">
                            Accreditation & Excellence
                        </span>
                    </div>

                    <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl dark:text-white uppercase">
                        Our Certifications{" "}
                        <span className="text-brand-600">
                            And Awards
                        </span>
                    </h2>

                    <p className="mt-4 text-base text-slate-600 sm:text-lg dark:text-neutral-400">
                        Recognized by leading global authorities for premium quality education and standards.
                    </p>
                </div>

                {/* Certifications Card Grid / Container */}
                <div
                    ref={contentRef}
                    className={`mx-auto max-w-5xl transition-all duration-700 delay-100 ${contentVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                        }`}
                >
                    {certifications.map((cert) => (
                        <div
                            key={cert.id}
                            className="group relative overflow-hidden rounded-3xl border border-slate-200/80 bg-gradient-to-br from-slate-900 via-slate-900 to-cyan-950 p-8 sm:p-12 shadow-2xl dark:border-neutral-800"
                        >
                            {/* Abstract overlay lighting */}
                            <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl transition-all duration-700 group-hover:bg-cyan-500/20" />

                            <div className="relative grid grid-cols-1 items-center gap-8 lg:grid-cols-12">

                                {/* Left Side: Accreditation Details */}
                                <div className="lg:col-span-7 flex flex-col justify-between">
                                    <div>
                                        {/* Brand Identifier */}
                                        <div className="flex items-center gap-2 text-2xl font-black tracking-wider text-white">
                                            <ICEFLogo
                                                width={120}
                                                height={41}
                                                className="h-auto w-30"
                                            />
                                        </div>

                                        {/* Main Title */}
                                        <h3 className="mt-6 text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
                                            {cert.subtitle}
                                        </h3>

                                        {/* Description */}
                                        <p className="mt-3 text-base text-slate-300 leading-relaxed max-w-lg">
                                            {cert.description}
                                        </p>
                                    </div>

                                    {/* Footer Link & Verification */}
                                    <div className="mt-8 flex flex-wrap items-center gap-6">
                                        <Link
                                            href={cert.verifyUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group/link inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-6 py-3.5 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/25 transition-all duration-300 hover:bg-cyan-400 hover:shadow-cyan-400/40"
                                        >
                                            <span>Verify at {cert.verifyUrl.replace("https://", "")}</span>
                                            <ExternalLink className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-0.5" />
                                        </Link>

                                        <div className="flex items-center gap-2 text-xs font-semibold text-slate-400">
                                            <CheckCircle className="h-4 w-4 text-emerald-400" />
                                            <span>Verified Active Credential</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Right Side: Modern Seal/Badge Mockup Display */}
                                <div className="lg:col-span-5 flex justify-center lg:justify-end">
                                    <div className="relative flex flex-col items-center justify-center rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-md shadow-inner transition-transform duration-500 group-hover:scale-105">

                                        {/* ICEF Accredited Status Ring Mockup */}
                                        <div className="relative flex h-44 w-44 items-center justify-center rounded-full border-4 border-dashed border-cyan-400/30 bg-gradient-to-b from-white/10 to-transparent p-4 shadow-xl">

                                            <div className="absolute inset-2 flex flex-col items-center justify-center rounded-full bg-slate-900/90 text-white p-2">
                                                <CheckCircle className="h-6 w-6 text-cyan-400 mb-1" />
                                                <p className="text-[10px] font-bold tracking-widest text-cyan-300 uppercase">ICEF Accredited</p>

                                                {/* QR Code Placeholder icon */}
                                                <div className="my-1.5 flex h-12 w-12 items-center justify-center rounded-lg bg-white p-1 text-slate-950 shadow">
                                                    <QrCode className="h-full w-full" />
                                                </div>

                                                <span className="text-[11px] font-mono font-bold text-slate-300 tracking-wider">
                                                    {cert.badgeNumber}
                                                </span>
                                            </div>
                                        </div>

                                        <p className="mt-4 text-xs font-bold uppercase tracking-widest text-slate-300">
                                            Trusted Agency Status
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}

export default CertificationAwardsSection