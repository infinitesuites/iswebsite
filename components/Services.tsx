
import React from 'react';
import Link from 'next/link';
import { HardHat, HeartPulse, ShieldCheck, ArrowRight } from 'lucide-react';
import { ServiceCardProps } from '../types';

interface ExtendedServiceCardProps extends ServiceCardProps {
  problem: string;
}

const ServiceCard: React.FC<ExtendedServiceCardProps> = ({ title, problem, description, icon, image }) => (
  <div className="flex flex-col overflow-hidden rounded-[2.5rem] shadow-sm transition-all duration-700 hover:-translate-y-3 hover:shadow-3xl bg-white border border-slate-100 group h-full">
    <div className="flex-shrink-0 h-80 overflow-hidden relative">
      <img className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110" src={image} alt={title} />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-transparent opacity-80"></div>
      <div className="absolute bottom-8 left-8 p-4 bg-[#bf9b30] text-white rounded-2xl shadow-2xl transform transition-transform duration-500 group-hover:rotate-3">
        {icon}
      </div>
    </div>
    <div className="flex-1 p-10 lg:p-12 flex flex-col">
      <div className="flex-1">
        <h4 className="text-[11px] font-black text-[#bf9b30] uppercase tracking-[0.4em] mb-4">{title}</h4>
        <h3 className="text-3xl font-black text-slate-900 mb-6 leading-[1.1] tracking-tighter">
          {problem}
        </h3>
        <p className="text-lg text-slate-500 leading-relaxed font-medium italic border-l-4 border-slate-100 pl-6">
          {description}
        </p>
      </div>
      <div className="mt-12 pt-8 border-t border-slate-50">
        <Link 
          href="/request-suite"
          className="w-full py-5 bg-slate-900 text-white rounded-2xl font-bold flex items-center justify-center hover:bg-[#bf9b30] transition-all duration-300 group/btn shadow-lg"
        >
          Explore Our Solution
          <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover/btn:translate-x-2" />
        </Link>
      </div>
    </div>
  </div>
);

const Services: React.FC = () => {
  return (
    <section id="services" className="py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mb-24">
          <h2 className="text-[10px] font-black text-[#bf9b30] tracking-[0.5em] uppercase mb-6">Professional Housing</h2>
          <p className="text-5xl font-black tracking-tight text-slate-900 sm:text-7xl mb-10 leading-[0.95]">
            Temporary living that <span className="text-[#bf9b30]">feels permanent.</span>
          </p>
          <p className="text-2xl text-slate-500 leading-relaxed font-light">
            Generic hotels are for vacations. We provide mission-critical sanctuaries for professionals who cannot afford a compromise in their living standard.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
          <ServiceCard
            title="Insurance Placement"
            problem="Losing your home is a crisis. Finding a place shouldn't be."
            description="Stop fighting with hotel lobbies and utility setups. We place your family in a fully-stocked executive home within 48 hours and manage the billing directly with your adjuster."
            icon={<ShieldCheck className="h-7 w-7" />}
            image="https://images.unsplash.com/photo-1560185007-cde436f6a4d0?auto=format&fit=crop&w=800&q=80"
          />
          <ServiceCard
            title="Workforce Logistics"
            problem="High-stakes projects fail when your crew is exhausted."
            description="Don't lose your best talent to poor accommodations. Our multi-bedroom apartments feature full kitchens and private workspaces to keep your team rested, productive, and focused."
            icon={<HardHat className="h-7 w-7" />}
            image="https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=800&q=80"
          />
          <ServiceCard
            title="Medical Staffing"
            problem="A hero's shift ends. Where do you go to recover?"
            description="Skip the noisy motel. We provide high-security, quiet sanctuaries near medical hubs with blackout curtains and luxury linens, ensuring your recovery is as prioritized as your patients."
            icon={<HeartPulse className="h-7 w-7" />}
            image="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80"
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
