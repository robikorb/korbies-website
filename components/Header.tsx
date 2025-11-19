
import React, { useState, useEffect } from 'react';
import { Icons } from './Icons';

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Calculator', href: '#calculator' },
    { name: 'FAQ', href: '#faq' },
    { name: 'About', href: '#about' },
    { name: 'Blog', href: '#blog' },
  ];

  return (
    <header 
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? 'bg-slate-950/80 backdrop-blur-md border-b border-slate-800' : 'bg-transparent border-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center space-x-3 group">
          <div className="p-2 bg-cyan-500/10 border border-cyan-500/20 rounded-lg group-hover:bg-cyan-500/20 group-hover:border-cyan-500/50 transition-all duration-300 shadow-[0_0_15px_rgba(6,182,212,0.1)]">
            <Icons.Logo className="w-6 h-6 text-cyan-400" />
          </div>
          <span className="font-bold text-xl tracking-tight text-white font-mono">
            Korbies<span className="text-cyan-400">Tech_</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium text-slate-400 hover:text-cyan-400 transition-colors font-mono tracking-wide"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            className="px-5 py-2.5 text-sm font-bold text-slate-950 bg-white rounded hover:bg-cyan-400 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_20px_rgba(34,211,238,0.4)]"
          >
            Get Started
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-md transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <Icons.X /> : <Icons.Menu />}
        </button>
      </div>

      {/* Mobile Nav Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-slate-800 bg-slate-950/95 backdrop-blur-xl absolute w-full">
          <div className="px-4 py-6 space-y-4 flex flex-col">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-base font-medium text-slate-300 hover:text-cyan-400 font-mono"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
             <a 
                href="#contact" 
                className="text-base font-bold text-cyan-400 font-mono"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                > Get Quote_
              </a>
          </div>
        </div>
      )}
    </header>
  );
};
