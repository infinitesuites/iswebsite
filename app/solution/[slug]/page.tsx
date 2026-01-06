
import SolutionPage from "@/components/SolutionPage";
import { solutionMarketData } from "@/data/siteData";
import { notFound } from "next/navigation";
import { Metadata } from "next";

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const solution = Object.values(solutionMarketData).find(s => s.slug === params.slug);
  return {
    title: solution?.metaTitle || "Housing Solution",
    description: solution?.metaDesc,
  };
}

export default function SolutionDetail({ params }: { params: { slug: string } }) {
  const solution = Object.values(solutionMarketData).find(s => s.slug === params.slug);
  if (!solution) notFound();
  return <SolutionPage data={solution} />;
}
