
import React from 'react';
import Link from 'next/link';
import { Building2, Mail, MapPin, Phone } from 'lucide-react';
import { View } from '../types';

/* Added props interface for Footer component to resolve App.tsx type error */
interface FooterProps {
  onNavigate?: (view: View) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 pb-12">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center mb-6 group">
              <Building2 className="h-8 w-8 text-[#bf9b30] group-hover:scale-110 transition-transform" />
              <span className="ml-2 text-2xl font-bold text-white tracking-tight group-hover:text-[#bf9b30] transition-colors">INFINITE SUITES</span>
            </Link>
            <p className="max-w-md text-slate-400 text-sm leading-relaxed mb-6">
              Redefining corporate housing with premium furnished apartments for modern professionals. 
              From insurance relocations to medical assignments, we provide your home everywhere.
            </p>
          </div>
          
          <div>
            <h3 className="text-xs font-bold text-white tracking-widest uppercase mb-6">Explore</h3>
            <ul className="space-y-4 text-sm">
              <li><Link href="/" className="hover:text-[#bf9b30] transition-colors text-left">Home</Link></li>
              <li><Link href="/why-us" className="hover:text-[#bf9b30] transition-colors text-left">Why Us</Link></li>
              <li><Link href="/blog" className="hover:text-[#bf9b30] transition-colors text-left">Blog</Link></li>
              <li><Link href="/faq" className="hover:text-[#bf9b30] transition-colors text-left">FAQ's</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold text-white tracking-widest uppercase mb-6">Markets</h3>
            <ul className="space-y-4 text-sm">
              <li><Link href="/location/long-beach" className="hover:text-[#bf9b30] transition-colors text-left flex items-center group"><MapPin className="w-3 h-3 mr-2 opacity-30 group-hover:opacity-100 transition-opacity" /> Long Beach</Link></li>
              <li><Link href="/location/burbank" className="hover:text-[#bf9b30] transition-colors text-left flex items-center group"><MapPin className="w-3 h-3 mr-2 opacity-30 group-hover:opacity-100 transition-opacity" /> Burbank</Link></li>
              <li><Link href="/location/los-angeles" className="hover:text-[#bf9b30] transition-colors text-left flex items-center group"><MapPin className="w-3 h-3 mr-2 opacity-30 group-hover:opacity-100 transition-opacity" /> Los Angeles</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold text-white tracking-widest uppercase mb-6">Connect</h3>
            <ul className="space-y-6 text-sm">
              <li className="flex items-start">
                <div className="p-2 bg-[#bf9b30]/10 rounded-xl mr-4 group hover:bg-[#bf9b30] transition-colors duration-300">
                  <Phone className="w-4 h-4 text-[#bf9b30] group-hover:text-white" />
                </div>
                <a href="tel:5622835221" className="group block -mt-1">
                  <span className="block font-black text-slate-200 text-xs group-hover:text-[#bf9b30] transition-colors uppercase tracking-widest">Executive Support</span>
                  <span className="text-slate-400 text-base font-bold group-hover:text-white transition-all border-b-2 border-transparent group-hover:border-[#bf9b30]">562-283-5221</span>
                </a>
              </li>
              <li className="flex items-start">
                <div className="p-2 bg-[#bf9b30]/10 rounded-xl mr-4 group hover:bg-[#bf9b30] transition-colors duration-300">
                  <Mail className="w-4 h-4 text-[#bf9b30] group-hover:text-white" />
                </div>
                <a href="mailto:stay@infinitesuites.com" className="group block -mt-1">
                  <span className="block font-black text-slate-200 text-xs group-hover:text-[#bf9b30] transition-colors uppercase tracking-widest">Client Relations</span>
                  <span className="text-slate-400 text-base font-bold group-hover:text-white transition-all border-b-2 border-transparent group-hover:border-[#bf9b30]">stay@infinitesuites.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
          <p className="mb-4 md:mb-0">&copy; {new Date().getFullYear()} Infinite Suites. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
