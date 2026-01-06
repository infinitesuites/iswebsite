
import React from 'react';

export enum ServiceType {
  CORPORATE = 'CORPORATE',
  INSURANCE = 'INSURANCE',
  CONTRACTORS = 'CONTRACTORS',
  TRAVEL_NURSES = 'TRAVEL_NURSES',
}

export type View = 
  | 'home' 
  | 'why-us' 
  | 'location-long-beach' 
  | 'location-burbank' 
  | 'location-los-angeles'
  | 'solution-insurance'
  | 'solution-corporate'
  | 'solution-workforce'
  | 'solution-healthcare'
  | 'request-suite'
  | 'blog'
  | 'blog-post-1'
  | 'blog-post-2'
  | 'blog-post-3'
  | 'faq';

export interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
}

export interface FeatureProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface LocationData {
  slug: string;
  name: string;
  region: string;
  heroImage: string;
  description: string;
  hubs: string[];
  neighborhoods: string[];
  metaTitle: string;
  metaDesc: string;
}

export interface SolutionData {
  slug: string;
  title: string;
  subtitle: string;
  heroImage: string;
  description: string;
  valueProps: { title: string; desc: string; icon: React.ReactNode }[];
  comparisons: { feature: string; industry: string; infinite: string }[];
  metaTitle: string;
  metaDesc: string;
}

export interface BlogPostData {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: React.ReactNode;
  image: string;
  date: string;
  author: string;
  category: string;
  readTime: string;
}
