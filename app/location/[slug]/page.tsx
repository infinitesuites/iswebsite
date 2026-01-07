
import LocationPage from "@/components/LocationPage";
import { locationMarketData } from "@/data/siteData";
import { notFound } from "next/navigation";
import { Metadata } from "next";

export async function generateStaticParams() {
  return Object.values(locationMarketData).map((location) => ({
    slug: location.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const location = Object.values(locationMarketData).find(l => l.slug === params.slug);
  return {
    title: location?.metaTitle || "Market Location",
    description: location?.metaDesc,
  };
}

export default function LocationDetail({ params }: { params: { slug: string } }) {
  const location = Object.values(locationMarketData).find(l => l.slug === params.slug);
  if (!location) notFound();
  return <LocationPage data={location} />;
}
