
'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Building2, Menu, X, Phone, ChevronDown, ShieldCheck, HardHat, HeartPulse, Briefcase, MapPin, Zap } from 'lucide-react';
import { View } from '../types';

/* Added props interface for Header component to resolve App.tsx type errors */
interface HeaderProps {
  onNavigate?: (view: View) => void;
  currentView?: View;
}

const Header: React.FC<HeaderProps> = ({ onNavigate, currentView }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isLocationsOpen, setIsLocationsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const solutions = [
    { title: "Insurance Housing", desc: "Emergency turnkey support.", href: '/solution/insurance-housing', icon: <ShieldCheck className="w-5 h-5" /> },
    { title: "Corporate Relocation", desc: "Hassle-free transitions.", href: '/solution/corporate-relocation', icon: <Briefcase className="w-5 h-5" /> },
    { title: "Workforce Logistics", desc: "Housing for mobile crews.", href: '/solution/workforce-logistics', icon: <HardHat className="w-5 h-5" /> },
    { title: "Healthcare Travel", desc: "Peace for medical staff.", href: '/solution/medical-staffing', icon: <HeartPulse className="w-5 h-5" /> },
  ];

  const locations = [
    { name: "Long Beach", region: "Coastal / Port", href: '/location/long-beach' },
    { name: "Burbank", region: "Media District", href: '/location/burbank' },
    { name: "Los Angeles", region: "Metro Center", href: '/location/los-angeles' }
  ];

  const headerBgClass = isScrolled 
    ? 'bg-white shadow-xl py-3 border-b border-slate-100' 
    : (pathname !== '/' ? 'bg-slate-950 py-6' : 'bg-transparent py-6');
  
  const textColorClass = isScrolled ? 'text-slate-900' : 'text-white';
  const navItemClass = `font-bold text-sm uppercase tracking-widest transition-all duration-300 hover:text-[#bf9b30] flex items-center space-x-1 ${isScrolled ? 'text-slate-600' : 'text-white/90'}`;

  return (
    <header className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${headerBgClass}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex-shrink-0 flex items-center group">
            <div className="relative">
               <Building2 className="h-8 w-8 text-[#bf9b30] transition-transform group-hover:scale-110" />
               <Zap className="absolute -top-1 -right-1 w-3 h-3 text-[#bf9b30] animate-pulse" />
            </div>
            <span className={`ml-3 text-xl font-extrabold tracking-tighter ${textColorClass}`}>INFINITE SUITES</span>
          </Link>

          <nav className="hidden xl:flex items-center space-x-8">
            <div className="flex items-center px-4 py-1.5 bg-slate-900/5 rounded-full border border-slate-900/10 mr-4">
               <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-3"></div>
               <span className="text-[9px] font-black uppercase tracking-widest text-slate-400">Live Status: Premium Availability in LA & Burbank</span>
            </div>

            <div className="relative group py-4" onMouseEnter={() => setIsSolutionsOpen(true)} onMouseLeave={() => setIsSolutionsOpen(false)}>
              <button className={navItemClass}>
                <span>Solutions</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isSolutionsOpen ? 'rotate-180' : ''}`} />
              </button>
              <div className={`absolute top-full -left-10 w-80 pt-2 transition-all duration-300 ${isSolutionsOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-4 invisible'}`}>
                <div className="bg-white rounded-2xl shadow-3xl border border-slate-100 overflow-hidden p-3">
                  {solutions.map((item, idx) => (
                    <Link key={idx} href={item.href} className="w-full flex items-center p-4 rounded-xl hover:bg-slate-50 transition-colors group/item" onClick={() => setIsSolutionsOpen(false)}>
                      <div className="p-2 bg-slate-50 text-slate-400 group-hover/item:bg-[#bf9b30]/10 group-hover/item:text-[#bf9b30] rounded-lg transition-colors">{item.icon}</div>
                      <div className="ml-4 text-left">
                        <p className="text-sm font-bold text-slate-900 group-hover/item:text-[#bf9b30] transition-colors">{item.title}</p>
                        <p className="text-[11px] text-slate-500 mt-0.5">{item.desc}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative group py-4" onMouseEnter={() => setIsLocationsOpen(true)} onMouseLeave={() => setIsLocationsOpen(false)}>
              <button className={navItemClass}>
                <span>Locations</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isLocationsOpen ? 'rotate-180' : ''}`} />
              </button>
              <div className={`absolute top-full -left-4 w-64 pt-2 transition-all duration-300 ${isLocationsOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-4 invisible'}`}>
                <div className="bg-white rounded-2xl shadow-3xl border border-slate-100 overflow-hidden p-3">
                  {locations.map((city, idx) => (
                    <Link key={idx} href={city.href} className="w-full flex items-center p-3 rounded-xl hover:bg-slate-50 transition-all group/loc" onClick={() => setIsLocationsOpen(false)}>
                      <div className="p-2 bg-slate-100 rounded-lg text-slate-400 group-hover/loc:bg-[#bf9b30]/10 group-hover/loc:text-[#bf9b30] transition-colors"><MapPin className="w-4 h-4" /></div>
                      <div className="ml-3 text-left">
                        <p className="text-sm font-bold text-slate-900 group-hover/loc:text-[#bf9b30] transition-colors">{city.name}</p>
                        <p className="text-[10px] text-slate-400 uppercase font-medium">{city.region}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link href="/why-us" className={navItemClass}>Why Us</Link>
            <Link href="/blog" className={navItemClass}>Blog</Link>
            
            <div className={`h-6 w-px ${isScrolled ? 'bg-slate-200' : 'bg-white/20'}`}></div>
            
            <a href="tel:5622835221" className={`flex items-center font-bold text-sm ${textColorClass} hover:text-[#bf9b30] transition-colors`}>
              <Phone className="w-4 h-4 mr-2 text-[#bf9b30]" /> 562-283-5221
            </a>
            
            <Link href="/request-suite" className="bg-[#bf9b30] hover:bg-slate-900 text-white px-8 py-3.5 rounded-full text-xs font-black uppercase tracking-widest transition-all shadow-xl shadow-[#bf9b30]/20 active:scale-95">Request a Suite</Link>
          </nav>

          <div className="xl:hidden">
            <button onClick={() => setIsMenuOpen(true)} className={`p-2 transition-colors ${isScrolled ? 'text-slate-900' : 'text-white'}`}>
              <Menu className="h-8 w-8" />
            </button>
          </div>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="fixed inset-0 z-[110] bg-white animate-in slide-in-from-right">
          <div className="flex justify-between items-center p-6 border-b">
            <div className="flex items-center"><Building2 className="h-8 w-8 text-[#bf9b30]" /><span className="ml-2 text-xl font-extrabold text-slate-900">INFINITE SUITES</span></div>
            <button onClick={() => setIsMenuOpen(false)} className="p-2 bg-slate-100 rounded-full"><X className="w-8 h-8" /></button>
          </div>
          <nav className="p-6 space-y-6">
            <Link href="/" onClick={() => setIsMenuOpen(false)} className="block text-3xl font-black text-slate-900">Home</Link>
            <Link href="/why-us" onClick={() => setIsMenuOpen(false)} className="block text-3xl font-black text-slate-900">Why Us</Link>
            <Link href="/blog" onClick={() => setIsMenuOpen(false)} className="block text-3xl font-black text-slate-900">Blog</Link>
            <Link href="/faq" onClick={() => setIsMenuOpen(false)} className="block text-3xl font-black text-slate-900">FAQ</Link>
            <Link href="/request-suite" onClick={() => setIsMenuOpen(false)} className="block w-full bg-[#bf9b30] text-white py-5 rounded-2xl text-center font-black uppercase text-sm tracking-widest">Request Your Portfolio</Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
