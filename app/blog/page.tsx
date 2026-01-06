
import { BlogPage } from "@/components/BlogPage";
import { blogPosts } from "@/data/siteData";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Infinite Journal | Corporate Housing Insights",
  description: "Expert guidance on corporate relocation, insurance housing, and the travel nursing lifestyle.",
};

export default function BlogListing() {
  return <BlogPage posts={blogPosts} />;
}
