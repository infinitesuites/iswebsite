
import React from 'react';
import Link from 'next/link';
import { MapPin, Building, ShieldCheck, ArrowRight, Plane, Coffee } from 'lucide-react';
import { LocationData } from '../types';

interface LocationPageProps {
  data: LocationData;
}

const LocationPage: React.FC<LocationPageProps> = ({ data }) => {
  return (
    <div className="bg-white">
      {/* SEO Hero Section */}
      <section className="relative pt-48 pb-32 overflow-hidden bg-slate-900">
        <div className="absolute inset-0">
          <img 
            src={data.heroImage} 
            alt={`Corporate Housing in ${data.name}`} 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="inline-flex items-center space-x-2 bg-[#bf9b30]/20 backdrop-blur-md border border-[#bf9b30]/30 px-4 py-2 rounded-full mb-8">
            <MapPin className="w-4 h-4 text-[#bf9b30]" />
            <span className="text-white text-[10px] font-black uppercase tracking-[0.2em]">{data.region} Market</span>
          </div>
          
          <h1 className="text-6xl lg:text-9xl font-black text-white tracking-tighter leading-[0.85] mb-8">
            {data.name} <br/>
            <span className="text-[#bf9b30]">Executive Suites.</span>
          </h1>
          
          <p className="max-w-2xl text-xl text-slate-300 font-light leading-relaxed">
            {data.description}
          </p>
        </div>
      </section>

      {/* Market Highlights */}
      <section className="py-24 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="p-10 bg-slate-50 rounded-[2.5rem] border border-slate-100">
              <div className="p-3 bg-white w-fit rounded-xl shadow-sm mb-6">
                <Building className="w-8 h-8 text-[#bf9b30]" />
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight">Business Hubs</h3>
              <ul className="space-y-3">
                {data.hubs.map((hub, i) => (
                  <li key={i} className="flex items-center text-slate-600 font-medium">
                    <div className="w-1.5 h-1.5 bg-[#bf9b30] rounded-full mr-3"></div>
                    {hub}
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-10 bg-slate-900 rounded-[2.5rem] text-white">
              <div className="p-3 bg-white/10 w-fit rounded-xl border border-white/10 mb-6">
                <MapPin className="w-8 h-8 text-[#bf9b30]" />
              </div>
              <h3 className="text-2xl font-black mb-4 tracking-tight">Key Neighborhoods</h3>
              <div className="flex flex-wrap gap-2">
                {data.neighborhoods.map((n, i) => (
                  <span key={i} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-xs font-bold uppercase tracking-widest text-[#bf9b30]">
                    {n}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-10 bg-[#bf9b30] rounded-[2.5rem] text-white relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-20 transform group-hover:scale-110 transition-transform">
                <ShieldCheck className="w-32 h-32" />
              </div>
              <h3 className="text-2xl font-black mb-4 tracking-tight relative z-10">Insurance ALE Ready</h3>
              <p className="font-medium text-white/90 leading-relaxed relative z-10">
                We prioritize direct-billing with adjusters in {data.name} for emergency displacement, ensuring families are settled within 48 hours.
              </p>
              <Link 
                href="/request-suite"
                className="mt-8 flex items-center justify-center font-black text-xs uppercase tracking-widest bg-slate-900 px-6 py-4 rounded-full hover:bg-white hover:text-slate-900 transition-all relative z-10 shadow-lg"
              >
                Check Availability
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Local Insights */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-[10px] font-black text-[#bf9b30] tracking-[0.5em] uppercase mb-6">Strategic Proximity</h2>
              <p className="text-5xl font-black text-slate-900 tracking-tighter mb-8 leading-none">
                Live where your <br/>industry <span className="text-slate-400">thrives.</span>
              </p>
              <div className="space-y-12 mt-12">
                <div className="flex space-x-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center">
                    <Plane className="w-6 h-6 text-slate-400" />
                  </div>
                  <div>
                    <h4 className="font-black text-slate-900 uppercase text-sm tracking-widest mb-1">Transit Optimized</h4>
                    <p className="text-slate-500 font-medium italic">Our {data.name} suites are selected based on proximity to major arteries and regional airports.</p>
                  </div>
                </div>
                <div className="flex space-x-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center">
                    <Coffee className="w-6 h-6 text-slate-400" />
                  </div>
                  <div>
                    <h4 className="font-black text-slate-900 uppercase text-sm tracking-widest mb-1">Walkable Living</h4>
                    <p className="text-slate-500 font-medium italic">High "Walk Scores" are mandatory for our portfolio in this market. Premium dining and essentials are always steps away.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1577412647305-991150c7d163?auto=format&fit=crop&w=800&q=80" 
                  alt="Modern Office in California" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 p-12 bg-white rounded-[2.5rem] shadow-3xl border border-slate-100 hidden md:block">
                <p className="text-4xl font-black text-slate-900 tracking-tighter">98%</p>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Client Renewal Rate</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LocationPage;
