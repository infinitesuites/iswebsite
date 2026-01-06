
import React from 'react';
import { ShieldCheck, Zap, HeartPulse, HardHat, Briefcase, Star, Clock, MapPin } from 'lucide-react';
import { SolutionData, LocationData, BlogPostData } from '../types';

export const blogPosts: BlogPostData[] = [
  {
    id: 'blog-post-1',
    slug: 'what-is-corporate-housing-vs-hotels',
    title: "Corporate Housing vs. Hotels: Why Executive Suites Win for Long Stays",
    excerpt: "Is corporate housing cheaper than a hotel? We break down the cost-benefit analysis for assignments over 30 days.",
    date: "Oct 24, 2023",
    author: "Jessica L.",
    category: "Market Insights",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1920&q=80",
    content: (
      <>
        <p className="text-2xl font-black text-slate-900 tracking-tight mb-6">"Is corporate housing cheaper than a hotel?"</p>
        <p>This is one of the most common questions we hear from HR directors and procurement leads. When planning an assignment that lasts 30, 60, or 90 days, the math quickly favors executive suites—but the benefits go far beyond the balance sheet.</p>
        <h2 className="text-3xl font-black text-slate-900 mt-12 mb-6 tracking-tight">The 30-Day Threshold</h2>
        <p>Statistically, any stay exceeding 21 days becomes significantly more affordable in a corporate suite. Why? Unlike hotels, corporate housing typically excludes the transient occupancy tax (TOT) found in major cities like Los Angeles and Burbank. This alone can save 12% to 15% on your total invoice.</p>
        <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 my-10">
          <h4 className="font-black uppercase tracking-widest text-xs text-[#bf9b30] mb-4">The Verdict</h4>
          <p className="italic font-medium text-slate-600">Choose corporate housing for any stay over 30 days to maximize ROI, employee retention, and overall productivity.</p>
        </div>
      </>
    )
  },
  {
    id: 'blog-post-2',
    slug: 'understanding-ale-insurance-housing',
    title: "ALE Insurance Housing Guide: What Displaced Homeowners Need to Know",
    excerpt: "What does ALE mean in insurance? Understanding your 'Additional Living Expense' coverage for immediate relocation.",
    date: "Nov 02, 2023",
    author: "Mark S.",
    category: "Insurance",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1920&q=80",
    content: (
      <>
        <p>Displacement due to fire, flood, or mold is a traumatic event. Understanding your insurance policy's ALE (Additional Living Expense) coverage is the first step toward regaining normalcy.</p>
        <h2 className="text-3xl font-black text-slate-900 mt-12 mb-6 tracking-tight">What is ALE Coverage?</h2>
        <p>ALE is a portion of your homeowner’s policy that covers the cost of maintaining your standard of living after a loss. This includes temporary housing, extra food costs, and even additional commute miles.</p>
      </>
    )
  }
];

export const solutionMarketData: Record<string, SolutionData> = {
  'insurance-housing': {
    slug: 'insurance-housing',
    title: 'Insurance',
    subtitle: 'Placement Experts.',
    heroImage: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1920&q=80',
    description: 'Losing a home is a crisis—finding a sanctuary shouldn\'t be. We specialize in immediate ALE housing with direct-bill capabilities for all major carriers.',
    valueProps: [
      { title: '48hr Placement', desc: 'Guaranteed turnkey housing for families within two days of claim approval.', icon: <Clock className="w-7 h-7" /> },
      { title: 'Direct Billing', desc: 'We handle all paperwork and billing directly with adjusters, eliminating out-of-pocket stress.', icon: <Zap className="w-7 h-7" /> },
      { title: 'Family Focused', desc: 'Curated 3+ bedroom homes in safe neighborhoods near schools and work.', icon: <ShieldCheck className="w-7 h-7" /> }
    ],
    comparisons: [
      { feature: 'Setup Time', industry: '5-10 Days', infinite: 'Under 48 Hours' },
      { feature: 'Billing', industry: 'Reimbursement', infinite: 'Direct Carrier Bill' },
      { feature: 'Home Stocking', industry: 'Bare Essentials', infinite: 'Fully Executive Ready' }
    ],
    metaTitle: 'Insurance ALE Housing | Emergency Displacement Solutions',
    metaDesc: 'Immediate insurance housing for families. Direct-billing with adjusters and 48-hour placement in premium furnished homes.'
  },
  'corporate-relocation': {
    slug: 'corporate-relocation',
    title: 'Corporate',
    subtitle: 'Relocation Suites.',
    heroImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80',
    description: 'Retain your best talent by offering more than just a room. Our executive suites are designed for peak productivity and seamless transitions.',
    valueProps: [
      { title: 'Talent Retention', desc: 'Superior living conditions that make your team feel valued and settled.', icon: <Star className="w-7 h-7" /> },
      { title: 'Ready to Work', desc: 'Pre-installed gigabit fiber and ergonomic workspaces in every unit.', icon: <Zap className="text-[#bf9b30] w-7 h-7" /> },
      { title: 'Admin Ease', desc: 'One portal for all bookings, invoices, and extension requests.', icon: <Briefcase className="w-7 h-7" /> }
    ],
    comparisons: [
      { feature: 'Internet', industry: 'Shared/Laggy', infinite: 'Dedicated Fiber' },
      { feature: 'Workspace', industry: 'Dining Table', infinite: 'Executive Ergonomics' },
      { feature: 'Amenities', industry: 'Standard Gym', infinite: 'Elite Wellness Access' }
    ],
    metaTitle: 'Corporate Relocation Housing | Executive Furnished Apartments',
    metaDesc: 'Premium corporate housing solutions for relocation programs. Turnkey executive suites designed for professional productivity.'
  }
};

export const locationMarketData: Record<string, LocationData> = {
  'long-beach': {
    slug: 'long-beach',
    name: 'Long Beach',
    region: 'Coastal California',
    heroImage: 'https://images.unsplash.com/photo-1517480448914-f5135252932a?auto=format&fit=crop&w=1920&q=80',
    description: 'The industrial heartbeat of the West Coast. Our Long Beach suites serve the aerospace, shipping, and port-logistics sectors.',
    hubs: ['The Port of Long Beach', 'Douglas Park Aerospace Hub', 'Downtown Business District', 'CSULB Research Centers'],
    neighborhoods: ['Belmont Shore', 'Downtown', 'The Pike', 'Signal Hill'],
    metaTitle: 'Corporate Housing Long Beach | Furnished Apartments & Suites',
    metaDesc: 'Premium furnished suites in Long Beach. Perfect for aerospace contractors and port logistics professionals.'
  },
  'burbank': {
    slug: 'burbank',
    name: 'Burbank',
    region: 'Media District',
    heroImage: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1920&q=80',
    description: 'The Media Capital of the World. We provide high-security, quiet sanctuaries for production crews.',
    hubs: ['Warner Bros. Studios', 'The Walt Disney Company', 'Nickelodeon Animation', 'Burbank Airport (BUR)'],
    neighborhoods: ['Media District', 'Toluca Lake', 'Burbank Village', 'Rancho District'],
    metaTitle: 'Corporate Housing Burbank | Entertainment Production Housing',
    metaDesc: 'Luxury corporate apartments in Burbank. Tailored for production crews, executives, and relocation.'
  },
  'los-angeles': {
    slug: 'los-angeles',
    name: 'Los Angeles',
    region: 'Metro Core',
    heroImage: 'https://images.unsplash.com/photo-1444723121867-7a241cacace9?auto=format&fit=crop&w=1920&q=80',
    description: 'The epicenter of global innovation. Our curated LA portfolio bridges high-rise luxury with strategic accessibility.',
    hubs: ['Financial District (DTLA)', 'Silicon Beach (Venice/Playa)', 'Cedars-Sinai Medical Center', 'The Arts District'],
    neighborhoods: ['Downtown LA', 'Santa Monica', 'Culver City', 'Miracle Mile'],
    metaTitle: 'Corporate Housing Los Angeles | Furnished Executive Suites',
    metaDesc: 'Strategic corporate housing across Los Angeles. Fully furnished apartments in DTLA, Santa Monica, and beyond.'
  }
};
