
import React from 'react';
import Link from 'next/link';
import { CheckCircle2, ShieldCheck, Zap } from 'lucide-react';
import { SolutionData } from '../types';

interface SolutionPageProps {
  data: SolutionData;
}

const SolutionPage: React.FC<SolutionPageProps> = ({ data }) => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative pt-48 pb-32 overflow-hidden bg-slate-950">
        <div className="absolute inset-0">
          <img 
            src={data.heroImage} 
            alt={data.title} 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/60 to-transparent"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 bg-[#bf9b30]/10 border border-[#bf9b30]/30 px-4 py-2 rounded-full mb-8">
              <ShieldCheck className="w-4 h-4 text-[#bf9b30]" />
              <span className="text-white text-[10px] font-black uppercase tracking-[0.2em]">Priority Solution</span>
            </div>
            
            <h1 className="text-6xl lg:text-8xl font-black text-white tracking-tighter leading-[0.9] mb-8">
              {data.title} <br/>
              <span className="text-[#bf9b30]">{data.subtitle}</span>
            </h1>
            
            <p className="text-xl text-slate-300 font-light leading-relaxed mb-10">
              {data.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-6">
              <Link 
                href="/request-suite"
                className="inline-flex items-center justify-center px-10 py-5 bg-[#bf9b30] text-white font-black uppercase tracking-widest text-xs rounded-full hover:bg-white hover:text-slate-900 transition-all shadow-2xl shadow-[#bf9b30]/20"
              >
                Get a Quote Now
              </Link>
              <div className="flex items-center space-x-4">
                <div className="flex -space-x-2">
                   {[1,2,3].map(i => (
                     <div key={i} className="w-10 h-10 rounded-full border-2 border-slate-900 bg-slate-800 flex items-center justify-center overflow-hidden">
                       <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="user" />
                     </div>
                   ))}
                </div>
                <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                  Joined by 500+ <br/>Adjusters & HR Leads
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Propositions */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-16">
            {data.valueProps.map((prop, idx) => (
              <div key={idx} className="group">
                <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-[#bf9b30] mb-8 group-hover:bg-[#bf9b30] group-hover:text-white transition-all duration-500 shadow-sm">
                  {prop.icon}
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight">{prop.title}</h3>
                <p className="text-slate-500 font-medium leading-relaxed italic border-l-2 border-slate-100 pl-6">
                  {prop.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
             <h2 className="text-[10px] font-black text-[#bf9b30] tracking-[0.5em] uppercase mb-6">Standard vs Infinite</h2>
             <p className="text-5xl font-black text-slate-900 tracking-tighter">Why the industry is switching.</p>
          </div>

          <div className="max-w-4xl mx-auto bg-white rounded-[3rem] shadow-3xl overflow-hidden border border-slate-100">
             <div className="grid grid-cols-3 bg-slate-900 text-white p-8">
                <div className="text-[10px] font-black uppercase tracking-widest text-slate-400">Core Feature</div>
                <div className="text-[10px] font-black uppercase tracking-widest text-slate-400 text-center">Standard Provider</div>
                <div className="text-[10px] font-black uppercase tracking-widest text-[#bf9b30] text-center">Infinite Suites</div>
             </div>
             {data.comparisons.map((item, idx) => (
               <div key={idx} className="grid grid-cols-3 p-8 border-b border-slate-50 items-center">
                  <div className="text-sm font-black text-slate-900 uppercase tracking-tight">{item.feature}</div>
                  <div className="text-sm text-slate-400 text-center font-medium">{item.industry}</div>
                  <div className="text-sm text-[#bf9b30] text-center font-black">{item.infinite}</div>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Trust & CTA */}
      <section className="py-32 bg-white text-center">
         <div className="max-w-4xl mx-auto px-4">
            <Zap className="w-12 h-12 text-[#bf9b30] mx-auto mb-10" />
            <h2 className="text-5xl lg:text-7xl font-black text-slate-900 tracking-tighter mb-10">
              Ready to deploy your <span className="text-slate-400">elite team?</span>
            </h2>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-8">
               <Link 
                href="/request-suite"
                className="px-12 py-6 bg-slate-900 text-white rounded-full font-black uppercase tracking-widest text-sm hover:bg-[#bf9b30] transition-all shadow-xl"
               >
                 Request Immediate Placement
               </Link>
               <div className="flex items-center space-x-2 text-slate-400 font-bold uppercase tracking-widest text-xs">
                 <CheckCircle2 className="w-4 h-4 text-green-500" />
                 <span>ALE Direct-Bill Ready</span>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
};

export default SolutionPage;
