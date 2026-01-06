
'use client';
import React, { useState, useRef } from 'react';
import { Send, CheckCircle, ShieldCheck, Clock, Building, User, Mail, Phone, MessageSquare, Calendar } from 'lucide-react';

interface ContactFormProps {
  onSuccess?: () => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ onSuccess }) => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const dateInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      if (onSuccess) {
        setTimeout(onSuccess, 3000);
      }
    }, 1500);
  };

  // Improved helper to trigger native date picker
  const triggerDatePicker = () => {
    const input = dateInputRef.current;
    if (input) {
      try {
        if ('showPicker' in input) {
          (input as any).showPicker();
        } else {
          // Use type assertion to avoid 'never' type inference issue in some TS environments
          (input as HTMLInputElement).focus();
        }
      } catch (err) {
        // Fix narrowing issues where TypeScript would incorrectly infer 'never' type.
        (input as HTMLInputElement).focus();
      }
    }
  };

  if (submitted) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center animate-fade-in">
        <div className="text-center max-w-md px-6">
          <div className="w-24 h-24 bg-[#bf9b30]/10 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle className="w-12 h-12 text-[#bf9b30] animate-bounce" />
          </div>
          <h2 className="text-4xl font-black text-slate-900 tracking-tighter mb-4">Request Received.</h2>
          <p className="text-slate-500 font-medium text-lg leading-relaxed">
            Jessica L or one of our senior agents will review your requirements and provide a curated portfolio within 60 minutes.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 pt-48">
      <div className="grid lg:grid-cols-2 gap-20 items-start">
        {/* Left Side: Information */}
        <div>
          <div className="inline-flex items-center space-x-2 bg-[#bf9b30]/10 border border-[#bf9b30]/30 px-4 py-2 rounded-full mb-8">
            <ShieldCheck className="w-4 h-4 text-[#bf9b30]" />
            <span className="text-[#bf9b30] text-[10px] font-black uppercase tracking-[0.2em]">Priority Deployment</span>
          </div>
          <h1 className="text-6xl lg:text-7xl font-black text-slate-900 tracking-tighter leading-[0.9] mb-8">
            Request an <br/>
            <span className="text-[#bf9b30]">Executive Suite.</span>
          </h1>
          <p className="text-xl text-slate-500 font-medium italic border-l-4 border-slate-100 pl-6 mb-12">
            "We don't just provide housing; we provide certainty for professionals whose projects cannot afford a delay."
          </p>

          <div className="space-y-8">
            <div className="flex items-start space-x-6">
              <div className="w-12 h-12 bg-slate-900 rounded-2xl flex items-center justify-center flex-shrink-0">
                <Clock className="text-[#bf9b30] w-6 h-6" />
              </div>
              <div>
                <h4 className="font-black text-slate-900 uppercase text-sm tracking-widest mb-1">60-Minute Response</h4>
                <p className="text-slate-500 text-sm font-medium">During business hours, our relocation specialists respond with availability and pricing in under an hour.</p>
              </div>
            </div>
            <div className="flex items-start space-x-6">
              <div className="w-12 h-12 bg-slate-900 rounded-2xl flex items-center justify-center flex-shrink-0">
                <Building className="text-[#bf9b30] w-6 h-6" />
              </div>
              <div>
                <h4 className="font-black text-slate-900 uppercase text-sm tracking-widest mb-1">Custom Portfolio</h4>
                <p className="text-slate-500 text-sm font-medium">Receive a curated list of vetted suites matching your exact neighborhood and amenity requirements.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="bg-white rounded-[3rem] shadow-3xl p-8 md:p-12 border border-slate-100">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="relative">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 block ml-1">Full Name</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input required type="text" placeholder="John Doe" className="w-full bg-slate-50 border-none rounded-2xl py-4 pl-12 pr-4 text-slate-900 placeholder:text-slate-300 focus:ring-2 focus:ring-[#bf9b30] transition-all" />
                </div>
              </div>
              <div className="relative">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 block ml-1">Company / Agency</label>
                <div className="relative">
                  <Building className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input required type="text" placeholder="Global Logistics Inc." className="w-full bg-slate-50 border-none rounded-2xl py-4 pl-12 pr-4 text-slate-900 placeholder:text-slate-300 focus:ring-2 focus:ring-[#bf9b30] transition-all" />
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="relative">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 block ml-1">Work Email</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input required type="email" placeholder="john@company.com" className="w-full bg-slate-50 border-none rounded-2xl py-4 pl-12 pr-4 text-slate-900 placeholder:text-slate-300 focus:ring-2 focus:ring-[#bf9b30] transition-all" />
                </div>
              </div>
              <div className="relative">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 block ml-1">Phone Number</label>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input required type="tel" placeholder="(555) 000-0000" className="w-full bg-slate-50 border-none rounded-2xl py-4 pl-12 pr-4 text-slate-900 placeholder:text-slate-300 focus:ring-2 focus:ring-[#bf9b30] transition-all" />
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="relative">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 block ml-1">Solution Type</label>
                <select className="w-full bg-slate-50 border-none rounded-2xl py-4 px-6 text-slate-900 focus:ring-2 focus:ring-[#bf9b30] transition-all appearance-none cursor-pointer">
                  <option>Corporate Relocation</option>
                  <option>Insurance ALE</option>
                  <option>Workforce Logistics</option>
                  <option>Medical Staffing</option>
                  <option>Entertainment / Production</option>
                </select>
              </div>
              <div className="relative">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 block ml-1">Target Market</label>
                <select className="w-full bg-slate-50 border-none rounded-2xl py-4 px-6 text-slate-900 focus:ring-2 focus:ring-[#bf9b30] transition-all appearance-none cursor-pointer">
                  <option>Long Beach</option>
                  <option>Burbank</option>
                  <option>Los Angeles</option>
                  <option>Orange County</option>
                  <option>Other / Multi-City</option>
                </select>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="relative">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 block ml-1">Move-In Date</label>
                <div className="relative" onClick={triggerDatePicker}>
                  <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input 
                    required 
                    ref={dateInputRef}
                    type="date" 
                    className="w-full bg-slate-50 border-none rounded-2xl py-4 pl-12 pr-4 text-slate-900 focus:ring-2 focus:ring-[#bf9b30] transition-all cursor-pointer block" 
                  />
                </div>
              </div>
              <div className="relative">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 block ml-1">Est. Duration</label>
                <select className="w-full bg-slate-50 border-none rounded-2xl py-4 px-6 text-slate-900 focus:ring-2 focus:ring-[#bf9b30] transition-all appearance-none cursor-pointer">
                  <option>30-60 Days</option>
                  <option>3-6 Months</option>
                  <option>6-12 Months</option>
                  <option>Long-Term / Unknown</option>
                </select>
              </div>
            </div>

            <div className="relative">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 block ml-1">Project Requirements / Special Notes</label>
              <div className="relative">
                <MessageSquare className="absolute left-4 top-4 w-4 h-4 text-slate-400" />
                <textarea rows={4} placeholder="E.g. Specific neighborhood preferences, pet requirements, or security needs..." className="w-full bg-slate-50 border-none rounded-2xl py-4 pl-12 pr-4 text-slate-900 placeholder:text-slate-300 focus:ring-2 focus:ring-[#bf9b30] transition-all" />
              </div>
            </div>

            <button 
              disabled={loading}
              className="w-full bg-slate-900 hover:bg-[#bf9b30] text-white py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-sm transition-all shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-3"
            >
              {loading ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Submit Request</span>
                </>
              )}
            </button>
            <p className="text-[10px] text-center text-slate-400 font-bold uppercase tracking-widest">Secure 256-bit encrypted submission</p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
