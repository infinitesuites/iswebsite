
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Features from "@/components/Features";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Features />
      
      <section className="bg-white py-32 relative overflow-hidden border-y border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-5xl font-black text-slate-900 sm:text-7xl tracking-tighter mb-8">
            Need housing <span className="text-[#bf9b30]">yesterday?</span>
          </h2>
          <p className="text-2xl text-slate-500 max-w-3xl mx-auto leading-relaxed mb-12 font-medium">
            Don't wait for the bureaucratic crawl. Our relocation specialists bypass the noise to get you home, wherever you need to be.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link 
              href="/request-suite"
              className="inline-flex items-center justify-center px-12 py-5 bg-[#bf9b30] text-lg font-black uppercase tracking-widest rounded-full text-white hover:bg-slate-900 shadow-2xl shadow-[#bf9b30]/30 transition-all transform hover:-translate-y-1 active:scale-95"
            >
              Speak to a Specialist
            </Link>
            <Link 
              href="/location/los-angeles"
              className="inline-flex items-center justify-center px-12 py-5 border-2 border-slate-900 text-lg font-black uppercase tracking-widest rounded-full text-slate-900 hover:bg-slate-900 hover:text-white transition-all"
            >
              View All Markets
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
