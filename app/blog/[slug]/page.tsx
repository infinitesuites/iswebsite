
import { BlogPost } from "@/components/BlogPage";
import { blogPosts } from "@/data/siteData";
import { notFound } from "next/navigation";
import { Metadata } from "next";

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = blogPosts.find(p => p.slug === params.slug);
  return {
    title: post ? `${post.title} | Infinite Suites` : "Blog Post",
    description: post?.excerpt,
  };
}

export default function BlogPostDetail({ params }: { params: { slug: string } }) {
  const post = blogPosts.find(p => p.slug === params.slug);
  if (!post) notFound();
  return <BlogPost post={post} />;
}
