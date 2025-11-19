
import React from 'react';
import { Icons } from './Icons';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-slate-500 py-16 border-t border-slate-900 font-mono text-sm">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 text-white font-bold text-lg mb-6">
              <Icons.Logo className="w-5 h-5 text-cyan-500" />
              <span>Korbies Tech</span>
            </div>
            <p className="leading-relaxed opacity-60">
              Empowering UK businesses with secure, scalable, and managed technology solutions.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-xs">Services</h4>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-cyan-400 transition-colors">IT Support</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Cyber Security</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Microsoft 365</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">VoIP & Telecoms</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-xs">Company</h4>
            <ul className="space-y-3">
              <li><a href="#about" className="hover:text-cyan-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Case Studies</a></li>
              <li><a href="#blog" className="hover:text-cyan-400 transition-colors">Insights</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-xs">Newsletter</h4>
            <div className="flex flex-col space-y-3">
              <input 
                type="email" 
                placeholder="Enter email..." 
                className="bg-slate-900 border border-slate-800 rounded px-4 py-2 focus:outline-none focus:border-cyan-500 text-white placeholder-slate-600 transition-colors"
              />
              <button className="bg-slate-800 text-white px-4 py-2 rounded hover:bg-cyan-500 hover:text-black transition-all font-bold">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center text-xs opacity-40">
          <p>&copy; {new Date().getFullYear()} Korbies Tech Ltd. Registered in England & Wales.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">TWITTER</a>
            <a href="#" className="hover:text-white">LINKEDIN</a>
            <a href="#" className="hover:text-white">INSTAGRAM</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
