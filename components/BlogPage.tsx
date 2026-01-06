
import React from 'react';
import Link from 'next/link';
import { BookOpen, ArrowRight } from 'lucide-react';
import { BlogPostData } from '../types';

interface BlogPageProps {
  posts: BlogPostData[];
}

export const BlogPage: React.FC<BlogPageProps> = ({ posts }) => {
  const featuredPost = posts[0];
  const remainingPosts = posts.slice(1);

  return (
    <div className="bg-white">
      {/* Blog Hero */}
      <section className="pt-48 pb-20 bg-slate-950 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#bf9b30]/10 blur-[150px] rounded-full opacity-50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center space-x-2 bg-[#bf9b30]/10 border border-[#bf9b30]/30 px-4 py-2 rounded-full mb-8">
            <BookOpen className="w-4 h-4 text-[#bf9b30]" />
            <span className="text-white text-[10px] font-black uppercase tracking-[0.2em]">The Infinite Journal</span>
          </div>
          <h1 className="text-6xl lg:text-8xl font-black text-white tracking-tighter mb-8 leading-[0.85]">
            Insights for the <br/>
            <span className="text-[#bf9b30]">Modern Professional.</span>
          </h1>
          <p className="max-w-2xl text-xl text-slate-400 font-light leading-relaxed">
            Expert guidance on corporate relocation, insurance housing logistics, and the travel nursing lifestyle.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link 
          href={`/blog/${featuredPost.slug}`}
          className="group relative bg-slate-50 rounded-[3rem] overflow-hidden flex flex-col lg:flex-row cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-700 block"
        >
          <div className="lg:w-1/2 overflow-hidden">
            <img 
              src={featuredPost.image} 
              alt={featuredPost.title} 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
            />
          </div>
          <div className="lg:w-1/2 p-12 lg:p-20 flex flex-col justify-center">
            <div className="flex items-center space-x-6 text-[10px] font-black text-[#bf9b30] uppercase tracking-widest mb-8">
              <span>{featuredPost.category}</span>
              <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
              <span>{featuredPost.readTime}</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-slate-900 tracking-tighter mb-8 group-hover:text-[#bf9b30] transition-colors leading-tight">
              {featuredPost.title}
            </h2>
            <p className="text-lg text-slate-500 font-medium leading-relaxed mb-10 line-clamp-3 italic border-l-4 border-slate-100 pl-6">
              {featuredPost.excerpt}
            </p>
            <div className="flex items-center space-x-3 text-slate-900 font-black uppercase tracking-widest text-xs">
              <span>Read Full Article</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </div>
          </div>
        </Link>
      </section>

      {/* Post Grid */}
      <section className="py-24 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {remainingPosts.map((post) => (
              <Link 
                key={post.id} 
                href={`/blog/${post.slug}`}
                className="group cursor-pointer block"
              >
                <div className="aspect-[16/10] rounded-[2rem] overflow-hidden mb-8 shadow-sm">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="flex items-center space-x-4 text-[9px] font-black text-[#bf9b30] uppercase tracking-widest mb-4">
                  <span>{post.category}</span>
                  <span className="w-1 h-1 bg-slate-200 rounded-full"></span>
                  <span>{post.date}</span>
                </div>
                <h3 className="text-2xl font-black text-slate-900 tracking-tighter mb-4 group-hover:text-[#bf9b30] transition-colors">
                  {post.title}
                </h3>
                <p className="text-slate-500 text-sm font-medium leading-relaxed line-clamp-2">
                  {post.excerpt}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export const BlogPost: React.FC<{ post: BlogPostData }> = ({ post }) => {
  return (
    <article className="bg-white">
      {/* Article Header */}
      <header className="pt-48 pb-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="flex justify-center items-center space-x-4 text-[10px] font-black text-[#bf9b30] uppercase tracking-widest mb-8">
            <span className="bg-[#bf9b30]/10 px-3 py-1 rounded-full">{post.category}</span>
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>
          <h1 className="text-5xl lg:text-7xl font-black text-slate-900 tracking-tighter leading-[0.95] mb-12">
            {post.title}
          </h1>
          <div className="flex items-center justify-center space-x-3">
             <div className="w-12 h-12 rounded-full bg-slate-200 overflow-hidden">
                <img src="https://i.pravatar.cc/100?img=32" alt={post.author} />
             </div>
             <div className="text-left">
                <p className="text-sm font-black text-slate-900 uppercase tracking-widest">{post.author}</p>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Relocation Specialist</p>
             </div>
          </div>
        </div>
      </header>

      {/* Featured Image */}
      <div className="max-w-6xl mx-auto px-4 -mt-10 mb-20">
        <div className="rounded-[3rem] overflow-hidden shadow-3xl h-[600px]">
          <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 pb-32">
        <div className="prose prose-slate prose-lg lg:prose-xl font-medium text-slate-600 leading-relaxed space-y-8">
          {post.content}
        </div>
        
        <div className="mt-20 pt-12 border-t border-slate-100">
           <div className="bg-slate-950 rounded-[2.5rem] p-12 text-center text-white">
              <h3 className="text-3xl font-black mb-6 tracking-tighter">Need Immediate Housing?</h3>
              <p className="text-slate-400 mb-10">Don't wait. Our team is standing by to assist with your placement.</p>
              <Link 
                href="/request-suite"
                className="inline-block bg-[#bf9b30] text-white px-10 py-5 rounded-full font-black uppercase tracking-widest text-xs hover:bg-white hover:text-slate-900 transition-all"
              >
                Request a Suite Now
              </Link>
           </div>
        </div>
      </div>
    </article>
  );
};
