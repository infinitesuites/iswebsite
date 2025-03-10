
import Header from "@/components/home/Header";
import Footer from "@/components/home/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Blog = () => {
  const blogPosts = [
    {
      title: "Top 5 Neighborhoods in Burbank for Entertainment Professionals",
      excerpt: "Discover the best areas in Burbank for entertainment industry workers, including proximity to major studios and local amenities.",
      date: "2024-03-15",
      slug: "top-burbank-neighborhoods"
    },
    {
      title: "Living in Long Beach: A Guide to the Maritime District",
      excerpt: "Everything you need to know about living near the Port of Long Beach, from commuting tips to local attractions.",
      date: "2024-03-10",
      slug: "long-beach-maritime-guide"
    },
    {
      title: "Corporate Housing vs. Hotels: Making the Right Choice",
      excerpt: "Compare the benefits of corporate housing and extended hotel stays for your business trip to Southern California.",
      date: "2024-03-05",
      slug: "corporate-housing-vs-hotels"
    },
    {
      title: "Tech Professional's Guide to Extended Stays in Southern California",
      excerpt: "Essential tips for tech professionals relocating to SoCal, including workspace setups and networking opportunities.",
      date: "2024-03-01",
      slug: "tech-professional-guide"
    },
    {
      title: "Maximizing Your Business Trip: Long-Term vs Short-Term Rentals",
      excerpt: "A comprehensive cost-benefit analysis of different accommodation options for business travelers.",
      date: "2024-02-25",
      slug: "business-trip-accommodation-guide"
    },
    {
      title: "Remote Work from Paradise: Setting Up Your Home Office in Long Beach",
      excerpt: "How to create the perfect remote work environment in your furnished rental with oceanfront views.",
      date: "2024-02-20",
      slug: "remote-work-long-beach"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8 text-amber-900">
            INFINITE SUITES Blog
          </h1>
          <p className="text-xl mb-12 text-amber-800">
            Insights about corporate housing, local areas, and life in Southern California
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.slug} className="border-amber-100">
                <CardContent className="p-6">
                  <p className="text-sm text-amber-600 mb-2">{post.date}</p>
                  <h2 className="text-2xl font-semibold mb-4 text-amber-900">
                    {post.title}
                  </h2>
                  <p className="text-amber-700 mb-6">
                    {post.excerpt}
                  </p>
                  <Link to={`/blog/${post.slug}`}>
                    <Button className="bg-amber-600 hover:bg-amber-700 text-white">
                      Read More
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
