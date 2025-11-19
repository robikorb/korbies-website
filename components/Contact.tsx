
import React, { useState } from 'react';
import { Icons } from './Icons';
import { ScrollReveal } from './ScrollReveal';

export const Contact: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('success');
    setTimeout(() => setFormStatus('idle'), 5000);
  };

  return (
    <div className="w-full relative flex flex-col justify-center overflow-hidden">
        {/* Decorative bg elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-slate-900/50 to-transparent -skew-x-12 translate-x-20 z-0 pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Contact Info */}
          <div className="lg:w-1/2 space-y-10">
            <ScrollReveal delay="delay-0">
                <div>
                <h2 className="text-cyan-500 font-mono text-sm mb-3 tracking-widest">CONNECT</h2>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Let's Discuss Your Infrastructure</h3>
                <p className="text-lg text-slate-400">
                    Ready to upgrade your IT stack? Schedule a consultation with our Ipswich & Suffolk based team.
                </p>
                </div>
            </ScrollReveal>

            <div className="space-y-8">
              <ScrollReveal delay="delay-100">
                <div className="flex items-start space-x-4 group">
                    <div className="p-3 bg-slate-900/80 border border-slate-800 rounded text-cyan-400 group-hover:border-cyan-500/50 transition-colors">
                    <Icons.Phone className="w-6 h-6" />
                    </div>
                    <div>
                    <h4 className="font-bold text-white font-mono">SUPPORT LINE</h4>
                    <p className="text-slate-400">+44 (0) 20 1234 5678</p>
                    </div>
                </div>
              </ScrollReveal>
              
              <ScrollReveal delay="delay-200">
                <div className="flex items-start space-x-4 group">
                    <div className="p-3 bg-slate-900/80 border border-slate-800 rounded text-cyan-400 group-hover:border-cyan-500/50 transition-colors">
                    <Icons.MessageSquare className="w-6 h-6" />
                    </div>
                    <div>
                    <h4 className="font-bold text-white font-mono">EMAIL</h4>
                    <p className="text-slate-400">hello@korbies.uk</p>
                    </div>
                </div>
              </ScrollReveal>

               <ScrollReveal delay="delay-300">
                <div className="flex items-start space-x-4 group">
                    <div className="p-3 bg-slate-900/80 border border-slate-800 rounded text-cyan-400 group-hover:border-cyan-500/50 transition-colors">
                    <Icons.ShieldCheck className="w-6 h-6" />
                    </div>
                    <div>
                    <h4 className="font-bold text-white font-mono">HEADQUARTERS</h4>
                    <p className="text-slate-400">Korbies Tech Ltd</p>
                    <p className="text-slate-500">Ipswich, Suffolk</p>
                    </div>
                </div>
               </ScrollReveal>
            </div>
          </div>

          {/* Form */}
          <ScrollReveal className="lg:w-1/2" delay="delay-300">
            <div className="bg-slate-900/40 backdrop-blur rounded-lg border border-slate-800 p-8 lg:p-10 shadow-2xl">
                {formStatus === 'success' ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4 min-h-[400px]">
                    <div className="w-16 h-16 bg-green-500/10 border border-green-500/50 text-green-500 rounded-full flex items-center justify-center mb-2">
                    <Icons.Check className="w-8 h-8" />
                    </div>
                    <h4 className="text-2xl font-bold text-white font-mono">TRANSMISSION_RECEIVED</h4>
                    <p className="text-slate-400">Thank you. Our support team will contact you shortly.</p>
                    <button onClick={() => setFormStatus('idle')} className="text-cyan-400 font-mono hover:text-cyan-300 mt-4">
                    > SEND_NEW_MESSAGE
                    </button>
                </div>
                ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label htmlFor="firstName" className="text-xs font-mono text-slate-500 uppercase">First Name</label>
                        <input required type="text" id="firstName" className="w-full bg-slate-950/50 border border-slate-700 text-white px-4 py-3 rounded focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/20 outline-none transition-all placeholder-slate-700" placeholder="Jane" />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="lastName" className="text-xs font-mono text-slate-500 uppercase">Last Name</label>
                        <input required type="text" id="lastName" className="w-full bg-slate-950/50 border border-slate-700 text-white px-4 py-3 rounded focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/20 outline-none transition-all placeholder-slate-700" placeholder="Smith" />
                    </div>
                    </div>

                    <div className="space-y-2">
                    <label htmlFor="email" className="text-xs font-mono text-slate-500 uppercase">Work Email</label>
                    <input required type="email" id="email" className="w-full bg-slate-950/50 border border-slate-700 text-white px-4 py-3 rounded focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/20 outline-none transition-all placeholder-slate-700" placeholder="name@company.co.uk" />
                    </div>

                    <div className="space-y-2">
                    <label htmlFor="serviceInterest" className="text-xs font-mono text-slate-500 uppercase">Service Interest</label>
                     <select id="serviceInterest" className="w-full bg-slate-950/50 border border-slate-700 text-white px-4 py-3 rounded focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/20 outline-none transition-all placeholder-slate-700 appearance-none">
                        <option>Managed IT Services</option>
                        <option>Cybersecurity</option>
                        <option>Cloud & Email</option>
                        <option>Backups & DR</option>
                        <option>General Enquiry</option>
                    </select>
                    </div>

                    <div className="space-y-2">
                    <label htmlFor="message" className="text-xs font-mono text-slate-500 uppercase">How can we help?</label>
                    <textarea required id="message" rows={4} className="w-full bg-slate-950/50 border border-slate-700 text-white px-4 py-3 rounded focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/20 outline-none transition-all placeholder-slate-700" placeholder="Tell us about your IT requirements..."></textarea>
                    </div>

                    <button type="submit" className="w-full py-4 px-6 bg-cyan-600 text-white font-bold font-mono rounded hover:bg-cyan-500 transition-all shadow-[0_0_20px_rgba(8,145,178,0.3)] hover:shadow-[0_0_30px_rgba(34,211,238,0.4)] uppercase tracking-wider">
                    Request Quote
                    </button>
                </form>
                )}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
};
