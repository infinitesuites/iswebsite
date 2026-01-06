
'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { HelpCircle, ChevronDown, ChevronUp, Info } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const FAQPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      category: 'General',
      question: "What exactly is corporate housing and who uses it?",
      answer: "Corporate housing refers to high-quality, fully furnished apartments or homes designed for stays of 30 days or longer. It is primarily used by business executives on relocation, insurance claimants (ALE) following property damage, traveling healthcare professionals, and entertainment production crews who need a stable home base rather than a transient hotel room."
    },
    {
      category: 'Pricing',
      question: "Is corporate housing cheaper than a luxury hotel for long-term stays?",
      answer: "Typically, yes. Stays over 30 days in corporate housing are 30% to 50% more cost-effective than luxury hotels. In many regions, long-term residential stays are exempt from transient occupancy taxes. Additionally, having a full kitchen significantly reduces daily meal expenses, providing a much higher ROI for corporate relocation budgets."
    },
    {
      category: 'Insurance',
      question: "How do I use my ALE (Additional Living Expense) insurance coverage?",
      answer: "If you are displaced by fire or flood, your homeowner's policy's ALE coverage covers temporary housing costs. At Infinite Suites, we specialize in 'Direct-Billing.' We coordinate directly with your insurance adjuster so the carrier pays us directly. You have zero out-of-pocket stress while focusing on your home's recovery."
    },
    {
      category: 'Amenities',
      question: "What amenities are included in an Infinite Suite?",
      answer: "Every suite includes high-end designer furniture, premium linens, a fully-equipped chef's kitchen, dedicated high-speed gigabit fiber internet, smart TVs, and in-unit laundry. We also provide initial 'starter kits' of coffee, toiletries, and essentials so you can settle in immediately upon arrival."
    },
    {
      category: 'Pets',
      question: "Are pets allowed in corporate housing suites?",
      answer: "We are proud to offer many pet-friendly options. Because we lease in premium residential buildings, many locations feature dog parks and pet spas. Simply let our specialists know your pet's details (breed/weight) so we can find the perfect building that welcomes your entire family."
    },
    {
      category: 'Booking',
      question: "What is the minimum stay, and can I extend my lease?",
      answer: "The industry standard and our typical minimum stay is 30 days. We offer extreme flexibility for extensions—we understand that project timelines and home repairs are unpredictable. You can often switch to a month-to-month arrangement after your initial term."
    },
    {
      category: 'Safety',
      question: "How secure are your locations?",
      answer: "Safety is our absolute priority. We exclusively partner with premium residential developments that offer gated parking, 24/7 lobby security or concierge, and secure, encrypted mobile entry systems. Every location is vetted by our team to ensure it meets elite executive safety standards."
    }
  ];

  const categories = ['All', ...Array.from(new Set(faqs.map(f => f.category)))];
  const filteredFaqs = activeCategory === 'All' ? faqs : faqs.filter(f => f.category === activeCategory);

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="pt-48 pb-20 bg-slate-950 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#bf9b30]/10 blur-[150px] rounded-full opacity-50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center space-x-2 bg-[#bf9b30]/10 border border-[#bf9b30]/30 px-4 py-2 rounded-full mb-8">
            <HelpCircle className="w-4 h-4 text-[#bf9b30]" />
            <span className="text-white text-[10px] font-black uppercase tracking-[0.2em]">Knowledge Base</span>
          </div>
          <h1 className="text-6xl lg:text-8xl font-black text-white tracking-tighter mb-8 leading-[0.85]">
            Frequently Asked <br/>
            <span className="text-[#bf9b30]">Questions.</span>
          </h1>
          <p className="max-w-2xl text-xl text-slate-400 font-light leading-relaxed">
            Get instant answers to the most common questions about corporate housing, insurance relocations, and luxury amenities.
          </p>
        </div>
      </section>

      {/* Category Nav */}
      <section className="py-8 border-b border-slate-100 sticky top-[80px] bg-white z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-3 rounded-full text-xs font-black uppercase tracking-widest transition-all ${
                  activeCategory === cat 
                  ? 'bg-[#bf9b30] text-white shadow-lg' 
                  : 'bg-slate-50 text-slate-400 hover:bg-slate-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Grid */}
      <section className="py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-6">
          {filteredFaqs.map((faq, idx) => (
            <div 
              key={idx} 
              className={`group border rounded-[2rem] overflow-hidden transition-all duration-500 ${
                openIndex === idx ? 'border-[#bf9b30] bg-slate-50/50 shadow-xl' : 'border-slate-100 bg-white hover:border-slate-200'
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full px-8 py-8 flex justify-between items-center text-left"
              >
                <div className="pr-8">
                  <span className="text-[10px] font-black text-[#bf9b30] uppercase tracking-widest block mb-2">{faq.category}</span>
                  <h3 className="text-xl font-black text-slate-900 tracking-tight group-hover:text-[#bf9b30] transition-colors">{faq.question}</h3>
                </div>
                <div className={`p-2 rounded-full transition-colors ${openIndex === idx ? 'bg-[#bf9b30] text-white' : 'bg-slate-100 text-slate-400 group-hover:bg-slate-200'}`}>
                  {openIndex === idx ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                </div>
              </button>
              <div 
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === idx ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-8 pb-10">
                  <div className="h-px bg-slate-100 mb-8"></div>
                  <div className="flex items-start">
                    <Info className="w-5 h-5 text-[#bf9b30] mr-4 mt-1 flex-shrink-0" />
                    <p className="text-lg text-slate-600 leading-relaxed font-medium">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Support CTA */}
        <div className="mt-24 bg-slate-950 rounded-[3rem] p-12 lg:p-16 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#bf9b30]/10 blur-[100px] rounded-full"></div>
          <h2 className="text-3xl lg:text-4xl font-black mb-6 tracking-tighter relative z-10">Still have questions?</h2>
          <p className="text-slate-400 mb-12 max-w-lg mx-auto font-medium relative z-10">Our executive concierge team is available 24/7 to assist with your specific relocation needs.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-6 relative z-10">
            <Link 
              href="/request-suite"
              className="bg-[#bf9b30] text-white px-10 py-5 rounded-full font-black uppercase tracking-widest text-xs hover:bg-white hover:text-slate-900 transition-all shadow-2xl inline-flex items-center justify-center"
            >
              Contact Specialist
            </Link>
            <a 
              href="tel:5622835221" 
              className="px-10 py-5 rounded-full font-black uppercase tracking-widest text-xs border border-white/20 hover:bg-white/10 transition-all flex items-center justify-center"
            >
              Call 562-283-5221
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQPage;
