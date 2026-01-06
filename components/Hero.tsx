
import React from 'react';
import Link from 'next/link';
import { ArrowRight, ShieldCheck, Star } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-slate-900 overflow-hidden min-h-screen flex items-center">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover opacity-50 scale-105 animate-[subtle-zoom_20s_infinite_alternate]"
          src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
          alt="Premium Luxury Interior"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 via-slate-900/60 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-transparent to-transparent"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto py-32 px-4 sm:px-6 lg:px-8 z-10">
        <div className="lg:w-2/3">
          <div className="inline-flex items-center space-x-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full px-5 py-2 mb-10 shadow-2xl">
            <ShieldCheck className="w-4 h-4 text-[#bf9b30]" />
            <span className="text-white text-[10px] font-black uppercase tracking-[0.25em]">Infinite Gold Standard</span>
            <div className="w-px h-3 bg-white/20"></div>
            <div className="flex items-center text-[#bf9b30] text-[10px] font-bold uppercase tracking-widest">
              <Star className="w-3 h-3 mr-1 fill-current" />
              94% Occupied
            </div>
          </div>
          
          <h1 className="text-5xl tracking-tighter font-black text-white sm:text-7xl md:text-8xl leading-[0.85] mb-8">
            Stay <br/>
            <span className="text-[#bf9b30]">Uncompromised.</span>
          </h1>
          
          <p className="max-w-xl text-xl text-slate-300 leading-relaxed mb-12 font-medium">
            When standard housing fails, we provide certainty. Fully-vetted, turnkey executive suites for assignments that demand your absolute best.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6">
            <Link 
              href="/request-suite"
              className="inline-flex items-center justify-center px-12 py-5 bg-[#bf9b30] text-sm font-black uppercase tracking-widest rounded-full text-white hover:bg-white hover:text-slate-900 transition-all shadow-3xl shadow-[#bf9b30]/40 transform hover:-translate-y-1 active:scale-95"
            >
              Explore Solutions <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link 
              href="/why-us"
              className="inline-flex items-center justify-center px-12 py-5 border border-white/20 text-sm font-black uppercase tracking-widest rounded-full text-white hover:bg-white/10 transition-all backdrop-blur-md group"
            >
              The Infinite Proof
              <div className="ml-2 w-1.5 h-1.5 bg-[#bf9b30] rounded-full group-hover:scale-150 transition-transform"></div>
            </Link>
          </div>

          <div className="mt-20 pt-10 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
             <div className="text-white font-black uppercase tracking-widest text-[10px]">Trusted By Global HR</div>
             <div className="text-white font-black uppercase tracking-widest text-[10px]">Insurance ALE Ready</div>
             <div className="text-white font-black uppercase tracking-widest text-[10px]">30+ Day Specialists</div>
             <div className="text-white font-black uppercase tracking-widest text-[10px]">Vetted Inventory Only</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
