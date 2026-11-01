import type { Metadata } from "next";
import DestinationFilters from "@/app/components/destinations/DestinationFilters";
import { getAllDestinations, getAllRegions } from "@/data/destinations/destination-list";

export const metadata: Metadata = {
  title: "Study Abroad Destinations",
  description: "Explore international study destinations and find the right country for your education journey.",
};

export default function DestinationsPage() {
  const destinations = getAllDestinations();
  const regions = getAllRegions();

  return (
    <main className="min-h-screen bg-slate-50">
      <DestinationFilters destinations={destinations} regions={regions} />
    </main>
  );
}