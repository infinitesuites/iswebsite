
import React from 'react';
import Link from 'next/link';
import { Check, X, Shield, Star, Clock, Heart } from 'lucide-react';

const ComparisonRow = ({ feature, hotel, airbnb, infinite }: { feature: string; hotel: boolean | string; airbnb: boolean | string; infinite: boolean | string }) => (
  <div className="grid grid-cols-4 border-b border-white/5 py-6 items-center">
    <div className="col-span-1">
      <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">{feature}</p>
    </div>
    <div className="col-span-1 flex justify-center">
      {typeof hotel === 'boolean' ? (hotel ? <Check className="text-green-500 w-5 h-5" /> : <X className="text-red-500/50 w-5 h-5" />) : <span className="text-xs text-slate-500">{hotel}</span>}
    </div>
    <div className="col-span-1 flex justify-center">
      {typeof airbnb === 'boolean' ? (airbnb ? <Check className="text-green-500 w-5 h-5" /> : <X className="text-red-500/50 w-5 h-5" />) : <span className="text-xs text-slate-500">{airbnb}</span>}
    </div>
    <div className="col-span-1 flex justify-center">
      {typeof infinite === 'boolean' ? (infinite ? <Check className="text-[#bf9b30] w-6 h-6" /> : <X className="text-red-500/50 w-5 h-5" />) : <span className="text-xs text-[#bf9b30] font-black">{infinite}</span>}
    </div>
  </div>
);

const WhyUs: React.FC = () => {
  return (
    <div className="bg-slate-950">
      {/* Inner Hero for the Page */}
      <section className="pt-48 pb-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#bf9b30]/10 blur-[180px] rounded-full opacity-50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-6xl lg:text-8xl font-black text-white tracking-tighter mb-8 leading-[0.85]">
              The Infinite <span className="text-[#bf9b30]">Proof.</span>
            </h1>
            <p className="text-2xl text-slate-400 font-light leading-relaxed max-w-2xl">
              Temporary doesn't mean substandard. We've built the most reliable housing logistics engine in the industry to ensure you never miss a beat.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-start mb-40">
            <div>
              <h2 className="text-[10px] font-black text-[#bf9b30] tracking-[0.5em] uppercase mb-6">Market Comparison</h2>
              <p className="text-4xl font-black text-white mb-10 leading-tight">
                Why professionals choose <br/>us over the alternatives.
              </p>
              <p className="text-lg text-slate-400 mb-12">
                Hotels are built for transient tourists. Managed short-term rentals are often inconsistent. Infinite Suites provides the perfect hybrid of residential comfort and corporate reliability.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-white/5 rounded-xl"><Shield className="text-[#bf9b30]" /></div>
                  <div>
                    <h4 className="font-bold text-white">Full Vetting Process</h4>
                    <p className="text-sm text-slate-500">Every unit undergoes a 50-point inspection before every check-in.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-[3rem] p-8 md:p-12 backdrop-blur-xl shadow-3xl">
              <div className="grid grid-cols-4 mb-10 pb-6 border-b border-white/10">
                <div className="col-span-1"></div>
                <div className="col-span-1 text-center text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">Hotels</div>
                <div className="col-span-1 text-center text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">Airbnb</div>
                <div className="col-span-1 text-center text-[10px] font-black text-[#bf9b30] uppercase tracking-[0.2em]">Infinite</div>
              </div>
              <ComparisonRow feature="Full Kitchen" hotel={false} airbnb={true} infinite={true} />
              <ComparisonRow feature="Private Desk" hotel="Shared" airbnb="Partial" infinite={true} />
              <ComparisonRow feature="Direct Billing" hotel={true} airbnb={false} infinite={true} />
              <ComparisonRow feature="24/7 Service" hotel={true} airbnb={false} infinite={true} />
              <ComparisonRow feature="Consolidated Billing" hotel={false} airbnb={false} infinite={true} />
              <ComparisonRow feature="Unit Size" hotel="300 sqft" airbnb="Varries" infinite="1200+ sqft" />
            </div>
          </div>

          {/* Process Section */}
          <div className="text-center mb-24">
            <h2 className="text-4xl font-black text-white mb-4">Zero-Friction <span className="text-[#bf9b30]">Logistics</span></h2>
            <p className="text-slate-500">From request to check-in, we move at the speed of business.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 mb-32">
            {[
              { step: "01", title: "Instant Quote", desc: "Submit your needs and get a curated portfolio in 60 minutes.", icon: <Clock /> },
              { step: "02", title: "Digital Lease", desc: "Secure digital signing and ID verification in under 5 minutes.", icon: <Shield /> },
              { step: "03", title: "Mobile Entry", desc: "Arrive at your leisure with secure, keyless mobile entry.", icon: <Heart /> }
            ].map((item, idx) => (
              <div key={idx} className="bg-white/5 border border-white/5 p-10 rounded-[2rem] hover:border-[#bf9b30]/30 transition-all group">
                <div className="text-5xl font-black text-[#bf9b30]/20 mb-6 group-hover:text-[#bf9b30]/40 transition-colors">{item.step}</div>
                <h3 className="text-2xl font-black text-white mb-4">{item.title}</h3>
                <p className="text-slate-400 font-medium leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-[#bf9b30] rounded-[3rem] p-12 lg:p-20 text-center relative overflow-hidden">
             <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
             </div>
             <h2 className="text-4xl lg:text-6xl font-black text-white mb-10 tracking-tighter relative z-10">
                Ready to upgrade <br/>your standards?
             </h2>
             <Link 
                href="/request-suite"
                className="inline-block bg-slate-900 text-white px-12 py-5 rounded-full font-black uppercase tracking-widest text-lg hover:scale-105 transition-all shadow-2xl relative z-10"
              >
                Request a Portfolio
             </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyUs;
