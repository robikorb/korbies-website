
import React from 'react';
import { Icons } from './Icons';
import { ScrollReveal } from './ScrollReveal';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-32 pb-16 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          {/* Text Content */}
          <ScrollReveal className="space-y-8" delay="delay-0">
            <div className="inline-flex items-center px-3 py-1 rounded border border-cyan-500/30 bg-cyan-950/30 text-cyan-400 text-xs font-mono tracking-wider mb-4">
              <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse mr-2"></span>
              IPSWICH & SUFFOLK
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-[1.1]">
              Local Roots. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 text-glow">
                Global Scale.
              </span>
            </h1>
            
            <p className="text-lg text-slate-400 leading-relaxed max-w-xl border-l-2 border-slate-800 pl-6">
              Korbies Tech delivers robust, secure, and scalable IT services for UK SMBs. From our Ipswich headquarters, we provide enterprise-grade support with a personal touch.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
              <a 
                href="#contact"
                className="w-full sm:w-auto px-8 py-4 text-base font-bold text-slate-950 bg-cyan-400 rounded hover:bg-cyan-300 transition-all duration-200 shadow-[0_0_20px_rgba(34,211,238,0.4)] hover:shadow-[0_0_30px_rgba(34,211,238,0.6)] flex items-center justify-center gap-2 group"
              >
                Book Free Consultation
                <Icons.ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            <div className="pt-8 grid grid-cols-3 gap-6 border-t border-slate-800/50">
              <div>
                <p className="text-3xl font-bold text-white font-mono">100<span className="text-cyan-500 text-xl">%</span></p>
                <p className="text-xs text-slate-500 uppercase tracking-widest mt-1">UK Based</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white font-mono">24/7</p>
                <p className="text-xs text-slate-500 uppercase tracking-widest mt-1">Security First</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white font-mono">1hr</p>
                <p className="text-xs text-slate-500 uppercase tracking-widest mt-1">Response SLA</p>
              </div>
            </div>
          </ScrollReveal>

          {/* Visual Content - The Window Block */}
          <ScrollReveal className="relative hidden lg:block perspective-1000" delay="delay-300">
             {/* Floating animation container */}
            <div className="animate-[float_6s_ease-in-out_infinite]">
                <div className="absolute -inset-1 bg-gradient-to-tr from-cyan-500 to-purple-600 rounded-2xl blur opacity-20"></div>
                
                {/* Window Frame */}
                <div className="relative rounded-xl overflow-hidden bg-slate-900/90 border border-slate-700 shadow-2xl transform transition-transform hover:scale-[1.02] duration-500">
                  
                  {/* Window Header */}
                  <div className="h-10 bg-slate-800/80 backdrop-blur border-b border-slate-700 flex items-center px-4 justify-between">
                    <div className="flex space-x-2">
                        <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                    </div>
                    <div className="font-mono text-xs text-slate-400 flex items-center gap-2">
                        <Icons.Server className="w-3 h-3" />
                        admin@korbies-uk-node:~
                    </div>
                    <div className="w-10"></div>
                  </div>

                  {/* Window Content */}
                  <div className="relative aspect-square md:aspect-video max-h-[500px] w-full group bg-slate-800">
                     <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900 z-0"></div>
                    <img 
                        src="https://images.unsplash.com/photo-1558494949-efc02570fbc9?q=80&w=1000&auto=format&fit=crop" 
                        alt="Futuristic Data Center Chipset" 
                        className="w-full h-full object-cover opacity-90 relative z-10 animate-[pulse_8s_ease-in-out_infinite]"
                    />
                    
                    {/* Overlay UI - Data Visualization Mockup */}
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 z-10 pointer-events-none"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60 z-20"></div>
                    
                    {/* Floating HUD Elements */}
                    <div className="absolute top-8 right-8 p-4 bg-slate-950/80 backdrop-blur border border-cyan-900/50 rounded shadow-lg z-30 animate-[float_4s_ease-in-out_infinite_reverse]">
                        <div className="flex flex-col gap-2">
                            <div className="flex justify-between items-center gap-8">
                                <span className="text-[10px] font-mono text-slate-400">SUFFOLK_DC</span>
                                <span className="text-[10px] font-mono text-cyan-400">ONLINE</span>
                            </div>
                             <div className="w-32 h-1 bg-slate-800 rounded-full overflow-hidden">
                                <div className="bg-cyan-500 h-full w-[100%] animate-[pulse_2s_infinite]"></div>
                            </div>
                        </div>
                    </div>

                     <div className="absolute bottom-8 left-8 z-30">
                         <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/20 border border-green-500/30 text-green-400 text-xs font-mono">
                             <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></div>
                             Local Support Active
                         </div>
                     </div>
                  </div>
                </div>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
};
