import React from 'react';
import { Wifi, Home, Coffee, Shield, Clock, Users, Zap, Wallet } from 'lucide-react';

const features = [
  {
    title: "Instant Connectivity",
    problem: "Dead zones and service contracts?",
    solution: "We provide dedicated, pre-installed gigabit fiber in every suite. Move in and start working immediately without calling a single service provider.",
    icon: <Zap className="w-7 h-7" />,
  },
  {
    title: "Personalized Support",
    problem: "Mechanical failure at midnight?",
    solution: "Maintenance requests shouldn't go to a voicemail. Our localized response teams are on standby 24/7 to resolve any issue within hours, not days.",
    icon: <Clock className="w-7 h-7" />,
  },
  {
    title: "The Home Standard",
    problem: "Cramped rooms and limited menus?",
    solution: "Reclaim your routine. Every suite features a designer kitchen with full-sized appliances, allowing you to maintain your diet and health on your own schedule.",
    icon: <Coffee className="w-7 h-7" />,
  },
  {
    title: "Elite Security",
    problem: "Worried about hotel corridor safety?",
    solution: "We exclusively lease in premium residential buildings with 24-hour controlled access, secure parking, and verified resident safety protocols for total peace of mind.",
    icon: <Shield className="w-7 h-7" />,
  },
  {
    title: "Financial Simplicity",
    problem: "Stressed by multiple monthly bills?",
    solution: "One single monthly invoice covers everything: rent, all utilities, and internet. We offer direct-bill options for corporations and ALE insurance adjusters.",
    icon: <Wallet className="w-7 h-7" />,
  },
  {
    title: "Executive Space",
    problem: "Living and working in a 300sqft box?",
    solution: "Our suites offer 3x the square footage of a hotel room, providing distinct, ergonomic zones for living, sleeping, and peak professional performance.",
    icon: <Home className="w-7 h-7" />,
  }
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-32 bg-slate-900 relative overflow-hidden">
      {/* Visual Accents */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#bf9b30]/5 blur-[150px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#bf9b30]/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-24">
          <h2 className="text-[10px] font-black text-[#bf9b30] tracking-[0.6em] uppercase mb-6">The Infinite Difference</h2>
          <p className="text-5xl font-black text-white sm:text-6xl tracking-tight mb-8">
            Stop waiting. <span className="text-slate-500 font-light">Start living.</span>
          </p>
          <div className="h-1.5 w-24 bg-[#bf9b30] mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col group">
              <div className="flex items-center mb-8">
                <div className="flex items-center justify-center h-16 w-16 rounded-2xl bg-white/10 border border-white/20 text-[#bf9b30] group-hover:bg-[#bf9b30] group-hover:text-white transition-all duration-500 shadow-2xl">
                  {feature.icon}
                </div>
                <h3 className="ml-5 text-2xl font-black text-white tracking-tighter">{feature.title}</h3>
              </div>
              <div className="space-y-5">
                <p className="text-xs font-black text-[#bf9b30] uppercase tracking-widest bg-[#bf9b30]/10 px-4 py-1.5 rounded-lg inline-block">
                  Pain: {feature.problem}
                </p>
                <p className="text-slate-400 text-lg leading-relaxed font-medium">
                  {feature.solution}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;