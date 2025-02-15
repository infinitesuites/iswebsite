
import { useParams } from "react-router-dom";
import Header from "@/components/home/Header";
import Footer from "@/components/home/Footer";
import NotFound from "./NotFound";

const BlogPost = () => {
  const { slug } = useParams();

  const blogPosts = {
    "top-burbank-neighborhoods": {
      title: "Top 5 Neighborhoods in Burbank for Entertainment Professionals",
      date: "2024-03-15",
      content: `
        <h2>The Best Areas for Entertainment Industry Professionals in Burbank</h2>
        <p>Burbank is home to some of the biggest names in entertainment, including Warner Bros., Disney, and Netflix. Here are the top neighborhoods for industry professionals:</p>
        
        <h3>1. Media District</h3>
        <p>The Media District is the heart of Burbank's entertainment industry. Home to major studios and production facilities, this area offers convenient access to work while providing upscale living options.</p>
        
        <h3>2. Downtown Burbank</h3>
        <p>With its mix of shopping, dining, and entertainment options, Downtown Burbank provides the perfect balance of work and leisure. The area offers various housing options within walking distance to amenities.</p>
        
        <h3>3. Magnolia Park</h3>
        <p>Known for its vintage shops and cafes, Magnolia Park offers a more relaxed atmosphere while still being close to major studios. Perfect for those seeking a neighborhood feel.</p>
        
        <h3>4. Rancho District</h3>
        <p>This upscale neighborhood offers larger homes and a quieter environment, ideal for executives and established professionals who prefer more space and privacy.</p>
        
        <h3>5. NoHo Adjacent</h3>
        <p>While technically in Burbank, this area borders North Hollywood, offering easy access to both Burbank studios and NoHo's arts district.</p>
      `
    },
    "long-beach-maritime-guide": {
      title: "Living in Long Beach: A Guide to the Maritime District",
      date: "2024-03-10",
      content: `
        <h2>Everything You Need to Know About Long Beach's Maritime District</h2>
        <p>Long Beach's Maritime District is a unique blend of industrial heritage and modern living. Here's your comprehensive guide to the area:</p>
        
        <h3>Location and Accessibility</h3>
        <p>The Maritime District offers easy access to the Port of Long Beach and major transportation routes. Perfect for maritime professionals and shipping industry workers.</p>
        
        <h3>Housing Options</h3>
        <p>From modern apartments with harbor views to converted industrial lofts, the area offers diverse housing options for maritime professionals.</p>
        
        <h3>Local Amenities</h3>
        <p>Discover the best restaurants, shopping areas, and entertainment venues in the Maritime District. Many establishments cater specifically to maritime industry workers.</p>
        
        <h3>Transportation Tips</h3>
        <p>Learn about the best routes to and from the port, parking options, and public transportation alternatives for maritime professionals.</p>
      `
    },
    // ... add content for other blog posts
  };

  const post = blogPosts[slug as keyof typeof blogPosts];

  if (!post) {
    return <NotFound />;
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <p className="text-sm text-amber-600 mb-2">{post.date}</p>
          <h1 className="text-4xl font-bold mb-8 text-amber-900">
            {post.title}
          </h1>
          <div 
            className="prose prose-amber max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;
