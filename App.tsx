
import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Contact } from './components/Contact';
import { AIChatbot } from './components/AIChatbot';
import { Footer } from './components/Footer';
import { Blog } from './components/Blog';
import { Calculator } from './components/Calculator';
import { FAQ } from './components/FAQ';
import { Icons } from './components/Icons';

function App() {
  return (
    <div className="relative bg-slate-950 font-sans text-slate-50 selection:bg-cyan-500/30 selection:text-cyan-100 overflow-x-hidden">
      
      <Header />
      
      {/* Fixed Background Layer */}
      <div className="fixed inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20"></div>
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-cyan-500/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4"></div>
      </div>

      <main className="relative z-10">
            
            <Hero />

            <section id="about" className="py-24">
               <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center gap-16">
                  <div className="md:w-1/2 relative group order-2 md:order-1">
                     <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-700"></div>
                     <div className="relative rounded-xl overflow-hidden border border-slate-700/50 shadow-2xl bg-slate-800">
                       <div className="absolute top-0 left-0 right-0 h-6 bg-slate-900/90 border-b border-slate-700 flex items-center px-3 space-x-2 z-20">
                         <div className="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
                         <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></div>
                         <div className="w-2.5 h-2.5 rounded-full bg-green-500/50"></div>
                       </div>
                       <img 
                         src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop" 
                         alt="IT Professionals analysing data" 
                         className="w-full h-auto relative z-10 grayscale hover:grayscale-0 transition-all duration-700 scale-100 hover:scale-105 animate-[pulse_4s_ease-in-out_infinite]"
                       />
                     </div>
                  </div>
                  
                  <div className="md:w-1/2 space-y-8 order-1 md:order-2">
                    <h2 className="text-cyan-500 font-mono text-sm tracking-widest">MISSION_STATEMENT</h2>
                    <h3 className="text-3xl md:text-5xl font-bold text-white leading-tight">Technology as a <br/>Strategic Asset</h3>
                    <p className="text-lg text-slate-400 leading-relaxed">
                      We don't just maintain systems; we engineer competitive advantages. Korbies Tech aligns complex infrastructure with your business objectives, ensuring scalability, security, and speed.
                    </p>
                    <ul className="space-y-4">
                      {[
                        'Zero-Trust Security Frameworks',
                        'Automated Infrastructure as Code',
                        '24/7 Proactive Anomaly Detection',
                        'Dedicated vCIO Strategy'
                      ].map((item, i) => (
                        <li key={i} className="flex items-center text-slate-300 font-mono text-sm">
                          <Icons.Check className="w-5 h-5 text-cyan-400 mr-4" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
            </section>

            <section id="services" className="py-24">
                <Services />
            </section>

            <section id="calculator" className="py-24">
                <Calculator />
            </section>
            
            <section id="stats" className="py-24 bg-slate-900/30 border-y border-slate-900">
                 <div className="container mx-auto px-4 md:px-6">
                   <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center divide-x-0 md:divide-x divide-slate-800/50 w-full max-w-5xl mx-auto">
                     <div className="p-4 group">
                       <div className="text-4xl md:text-6xl font-bold text-white mb-4 font-mono group-hover:scale-110 transition-transform duration-300">500<span className="text-cyan-500">+</span></div>
                       <div className="text-slate-500 text-xs uppercase tracking-widest font-mono">Enterprise Nodes</div>
                     </div>
                     <div className="p-4 group">
                       <div className="text-4xl md:text-6xl font-bold text-white mb-4 font-mono group-hover:scale-110 transition-transform duration-300">15M</div>
                       <div className="text-slate-500 text-xs uppercase tracking-widest font-mono">Threats Nullified</div>
                     </div>
                     <div className="p-4 group">
                       <div className="text-4xl md:text-6xl font-bold text-white mb-4 font-mono group-hover:scale-110 transition-transform duration-300">99.9<span className="text-cyan-500">%</span></div>
                       <div className="text-slate-500 text-xs uppercase tracking-widest font-mono">SLA Uptime</div>
                     </div>
                     <div className="p-4 group">
                       <div className="text-4xl md:text-6xl font-bold text-white mb-4 font-mono group-hover:scale-110 transition-transform duration-300">24<span className="text-cyan-500">/</span>7</div>
                       <div className="text-slate-500 text-xs uppercase tracking-widest font-mono">Response Team</div>
                     </div>
                   </div>
                 </div>
            </section>

            <section id="faq" className="py-24">
                <FAQ />
            </section>

            <section id="blog" className="py-24">
                <Blog />
            </section>

            <section id="contact" className="py-24">
                <Contact />
            </section>

            <section id="footer" className="bg-black">
                <Footer />
            </section>

      </main>

      <AIChatbot />
    </div>
  );
}

export default App;
