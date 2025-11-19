
import React, { useState } from 'react';
import { ScrollReveal } from './ScrollReveal';
import { Icons } from './Icons';

export const Calculator: React.FC = () => {
  const [employees, setEmployees] = useState(25);
  const [devices, setDevices] = useState(35);
  const [complexity, setComplexity] = useState(3);

  const calculateEfficiency = () => {
    const base = 40; 
    const scale = employees * 0.5;
    const comp = complexity * 2;
    return Math.min(95, Math.floor(base + scale + comp));
  };

  const getSuggestedTier = () => {
    if (employees < 10) return "Essential";
    if (employees < 50) return "Standard";
    return "Enterprise";
  };

  const efficiency = calculateEfficiency();
  const tier = getSuggestedTier();

  return (
    <div className="w-full">
      <div className="container mx-auto px-4 md:px-6">
        <ScrollReveal>
            <div className="text-center mb-12">
                <h2 className="text-cyan-500 font-mono text-sm mb-3 tracking-widest">ROI ESTIMATOR</h2>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Clarity Calculator</h3>
                <p className="text-slate-400 max-w-2xl mx-auto">
                    Compare the impact of professional MSP integration vs. ad-hoc IT management. 
                    Estimate your efficiency gains instantly.
                </p>
            </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Controls */}
            <ScrollReveal delay="delay-100">
                <div className="bg-slate-950/80 border border-slate-800 rounded-xl p-8 shadow-xl h-full">
                    <h4 className="text-white font-mono mb-8 flex items-center gap-2">
                        <Icons.Bot className="w-5 h-5 text-cyan-500" /> INPUT_PARAMETERS
                    </h4>
                    
                    <div className="space-y-8">
                        <div>
                            <div className="flex justify-between mb-2">
                                <label className="text-sm text-slate-400 font-mono">EMPLOYEES</label>
                                <span className="text-cyan-400 font-bold font-mono">{employees}</span>
                            </div>
                            <input 
                                type="range" min="1" max="200" value={employees} 
                                onChange={(e) => setEmployees(parseInt(e.target.value))}
                                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-500"
                            />
                        </div>

                        <div>
                            <div className="flex justify-between mb-2">
                                <label className="text-sm text-slate-400 font-mono">DEVICES (Approx)</label>
                                <span className="text-cyan-400 font-bold font-mono">{devices}</span>
                            </div>
                            <input 
                                type="range" min="1" max="300" value={devices} 
                                onChange={(e) => setDevices(parseInt(e.target.value))}
                                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-500"
                            />
                        </div>

                        <div>
                             <div className="flex justify-between mb-2">
                                <label className="text-sm text-slate-400 font-mono">INFRASTRUCTURE COMPLEXITY</label>
                                <span className="text-cyan-400 font-bold font-mono">Level {complexity}</span>
                            </div>
                            <input 
                                type="range" min="1" max="5" value={complexity} 
                                onChange={(e) => setComplexity(parseInt(e.target.value))}
                                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-500"
                            />
                            <div className="flex justify-between text-[10px] text-slate-500 mt-1 font-mono uppercase">
                                <span>Cloud Only</span>
                                <span>Hybrid / Legacy</span>
                            </div>
                        </div>
                    </div>
                </div>
            </ScrollReveal>

            {/* Results */}
            <ScrollReveal delay="delay-200">
                <div className="bg-slate-900/50 border border-slate-700 rounded-xl p-8 shadow-xl h-full relative overflow-hidden flex flex-col justify-between group">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div>
                        <h4 className="text-white font-mono mb-6 flex items-center gap-2">
                            <Icons.Server className="w-5 h-5 text-green-500" /> ANALYSIS_RESULT
                        </h4>

                        <div className="grid grid-cols-2 gap-4 mb-8">
                            <div className="bg-slate-950 border border-slate-800 p-4 rounded-lg">
                                <p className="text-xs text-slate-500 font-mono mb-1">SUGGESTED TIER</p>
                                <p className="text-2xl font-bold text-white">{tier}</p>
                            </div>
                            <div className="bg-slate-950 border border-slate-800 p-4 rounded-lg">
                                <p className="text-xs text-slate-500 font-mono mb-1">EST. SETUP TIME</p>
                                <p className="text-2xl font-bold text-white">{Math.ceil(employees / 5) + 2} Days</p>
                            </div>
                        </div>

                        <div className="mb-2">
                            <div className="flex justify-between items-end mb-2">
                                <p className="text-sm text-slate-400">Projected Efficiency Gain</p>
                                <p className="text-4xl font-bold text-cyan-400 font-mono">{efficiency}%</p>
                            </div>
                            <div className="w-full h-4 bg-slate-800 rounded-full overflow-hidden">
                                <div 
                                    className="h-full bg-gradient-to-r from-cyan-500 to-blue-600 transition-all duration-1000 ease-out"
                                    style={{ width: `${efficiency}%` }}
                                ></div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 pt-8 border-t border-slate-800">
                         <p className="text-xs text-slate-500 mb-4 italic">
                            * Estimations based on standard UK MSP metrics. For a precise quote, book a consultation.
                        </p>
                        <a href="#contact" className="w-full block text-center py-3 bg-white text-slate-950 font-bold rounded hover:bg-cyan-400 transition-colors uppercase text-sm tracking-wider">
                            Get Tailored Proposal
                        </a>
                    </div>
                </div>
            </ScrollReveal>
        </div>
      </div>
    </div>
  );
};
