
import React from 'react';
import { Icons } from './Icons';
import { ServiceItem } from '../types';
import { ScrollReveal } from './ScrollReveal';

const services: ServiceItem[] = [
  {
    id: '1',
    title: 'Managed IT Support',
    description: 'Unlimited remote and on-site support for UK businesses. We include proactive RMM, patching, and fast response SLAs.',
    iconName: 'Bot'
  },
  {
    id: '2',
    title: 'Cyber Security',
    description: 'Layered protection including AV/EDR, firewall management, and 24/7 ransomware protection. Cyber Essentials aligned.',
    iconName: 'ShieldCheck'
  },
  {
    id: '3',
    title: 'Cloud Solutions',
    description: 'Microsoft 365 migration, Azure management, and secure private cloud hosting for sensitive data.',
    iconName: 'Cloud'
  },
  {
    id: '4',
    title: 'Connectivity & VoIP',
    description: 'High-speed leased lines and hosted VoIP telephony systems designed for the modern hybrid workplace.',
    iconName: 'Phone'
  },
  {
    id: '5',
    title: 'Backup & Recovery',
    description: 'UK-based data residency with automated backups, testing, and robust business continuity planning.',
    iconName: 'Server'
  },
  {
    id: '6',
    title: 'Digital Consulting',
    description: 'Strategic IT roadmapping (vCIO) to align technology investment with your business growth goals.',
    iconName: 'Bot'
  }
];

const ServiceCard: React.FC<{ service: ServiceItem; index: number }> = ({ service, index }) => {
  const IconComponent = (Icons as any)[service.iconName] || Icons.Server;

  return (
    <div className="group relative p-8 bg-slate-900/40 backdrop-blur-sm rounded border border-slate-800 hover:border-cyan-500/50 transition-all duration-500 hover:-translate-y-2 overflow-hidden h-full flex flex-col">
      {/* Hover Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <div className="relative z-10 flex flex-col flex-grow">
        <div className="w-12 h-12 bg-slate-800/80 rounded flex items-center justify-center text-cyan-400 mb-6 group-hover:bg-cyan-500 group-hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(0,0,0,0.5)]">
          <IconComponent className="w-6 h-6" />
        </div>
        <h3 className="text-xl font-bold text-white mb-3 font-mono">{service.title}</h3>
        <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">{service.description}</p>
        <a href="#contact" className="inline-flex items-center text-cyan-400 text-xs font-bold uppercase tracking-wider group-hover:text-cyan-300 mt-auto">
          Learn More <Icons.ChevronRight className="w-3 h-3 ml-1" />
        </a>
      </div>
    </div>
  );
};

export const Services: React.FC = () => {
  return (
    <div className="w-full">
      <div className="container mx-auto px-4 md:px-6">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20">
            <h2 className="text-cyan-500 font-mono text-sm mb-4 tracking-[0.2em]">OUR EXPERTISE</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">Complete IT Management</h3>
            <p className="text-lg text-slate-400">
              Tailored technology solutions for forward-thinking UK enterprises.
            </p>
          </div>
        </ScrollReveal>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ScrollReveal key={service.id} delay={`delay-${index * 100}`}>
                <ServiceCard service={service} index={index} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
};
