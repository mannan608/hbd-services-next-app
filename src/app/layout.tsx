
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/partial/Navbar";
import Footer from "@/app/components/partial/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
  ),

  title: {
    default: "HBD Services | Study in Australia",
    template: "%s | HBD Services",
  },

  description:
    "Explore Australian education opportunities with HBD Services. Get expert guidance on courses, admissions, IELTS, PTE, and studying abroad.",

  applicationName: "HBD Services",

  openGraph: {
    type: "website",
    siteName: "HBD Services",
    title: "HBD Services | Study in Australia",
    description:
      "Explore Australian education opportunities with HBD Services.",
    images: ["/images/og-image.jpg"],
  },

  twitter: {
    card: "summary_large_image",
    title: "HBD Services | Study in Australia",
    description:
      "Expert guidance for Australian education and study abroad.",
    images: ["/images/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-screen flex-col">
        <Navbar />

        <main className="flex-1 pt-18 md:pt-20">
          {children}
        </main>

        <Footer year={2026} />
      </body>
    </html>
  );
}
