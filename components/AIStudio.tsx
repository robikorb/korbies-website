
import React, { useState, useRef } from 'react';
import { Icons } from './Icons';
import { generateImage, generateVideo, editImage, searchGrounding } from '../services/geminiService';
import { ScrollReveal } from './ScrollReveal';

type Mode = 'IMAGEN' | 'VEO' | 'NANO' | 'SEARCH';

export const AIStudio: React.FC = () => {
  const [mode, setMode] = useState<Mode>('IMAGEN');
  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [aspectRatio, setAspectRatio] = useState('16:9');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [filePreview, setFilePreview] = useState<string | null>(null);
  const [searchLinks, setSearchLinks] = useState<any[]>([]);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onload = (e) => setFilePreview(e.target?.result as string);
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);
    setSearchLinks([]);

    try {
      if (mode === 'IMAGEN') {
        const img = await generateImage(prompt, aspectRatio);
        setResult(img);
      } else if (mode === 'VEO') {
        if (!filePreview) throw new Error("Please upload an image first.");
        const videoUrl = await generateVideo(filePreview, prompt);
        setResult(videoUrl);
      } else if (mode === 'NANO') {
        if (!filePreview) throw new Error("Please upload an image first.");
        const editedImg = await editImage(filePreview, prompt);
        setResult(editedImg);
      } else if (mode === 'SEARCH') {
        const { text, links } = await searchGrounding(prompt);
        setResult(text);
        setSearchLinks(links);
      }
    } catch (error: any) {
      alert(`Operation failed: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="ai-studio" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background FX */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none"></div>
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-cyan-500 font-mono text-sm mb-3 tracking-widest">ENTERPRISE_TOOLS</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
              Korbies <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Creative Lab</span>
            </h3>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Experience our proprietary AI engines. Generate assets, animate visuals, and mine data in real-time.
            </p>
          </div>
        </ScrollReveal>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-2">
            {[
              { id: 'IMAGEN', label: 'Asset Generator', icon: 'image_edit_auto', desc: 'Imagen 4.0' },
              { id: 'VEO', label: 'Video Animator', icon: 'movie', desc: 'Veo 3.1 Fast' },
              { id: 'NANO', label: 'Image Refiner', icon: 'image_edit_auto', desc: 'Gemini 2.5 Flash' },
              { id: 'SEARCH', label: 'Data Mining', icon: 'google', desc: 'Grounding Search' }
            ].map((tool) => (
              <button
                key={tool.id}
                onClick={() => { setMode(tool.id as Mode); setResult(null); }}
                className={`w-full p-4 text-left rounded-lg border transition-all duration-300 group ${
                  mode === tool.id 
                  ? 'bg-cyan-500/10 border-cyan-500 text-white shadow-[0_0_20px_rgba(6,182,212,0.2)]' 
                  : 'bg-slate-900/50 border-slate-800 text-slate-400 hover:bg-slate-800 hover:border-slate-600'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="font-bold font-mono">{tool.label}</span>
                  {/* Icon placeholder logic or actual icon */}
                  <div className={`w-2 h-2 rounded-full ${mode === tool.id ? 'bg-cyan-400 animate-pulse' : 'bg-slate-600'}`}></div>
                </div>
                <span className="text-[10px] uppercase tracking-widest opacity-60 font-mono">{tool.desc}</span>
              </button>
            ))}
          </div>

          {/* Main Workspace */}
          <div className="lg:col-span-3 bg-slate-900/80 backdrop-blur border border-slate-800 rounded-2xl p-6 md:p-8 shadow-2xl relative">
             {/* Scanner Line FX */}
             <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-20 animate-[scan_4s_ease-in-out_infinite] pointer-events-none"></div>

             <div className="flex items-center justify-between mb-6 pb-6 border-b border-slate-800">
               <div className="flex items-center gap-3">
                 <div className="p-2 bg-slate-800 rounded border border-slate-700">
                   <Icons.Bot className="w-5 h-5 text-cyan-400" />
                 </div>
                 <div>
                   <h4 className="text-white font-bold">
                     {mode === 'IMAGEN' && 'Generate High-Fidelity Assets'}
                     {mode === 'VEO' && 'Animate Static Imagery'}
                     {mode === 'NANO' && 'Contextual Image Editing'}
                     {mode === 'SEARCH' && 'Real-Time Market Intelligence'}
                   </h4>
                   <p className="text-slate-500 text-xs font-mono uppercase">System Ready // Awaiting Input</p>
                 </div>
               </div>
             </div>

             <form onSubmit={handleSubmit} className="space-y-6">
                {/* File Upload for VEO/NANO */}
                {(mode === 'VEO' || mode === 'NANO') && (
                  <div className="border-2 border-dashed border-slate-700 rounded-xl p-8 text-center hover:border-cyan-500/50 transition-colors cursor-pointer bg-slate-950/50" onClick={() => fileInputRef.current?.click()}>
                    <input ref={fileInputRef} type="file" accept="image/*" className="hidden" onChange={handleFileSelect} />
                    {filePreview ? (
                      <div className="relative h-48 w-full">
                        <img src={filePreview} alt="Preview" className="h-full w-full object-contain rounded" />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 hover:opacity-100 transition-opacity rounded">
                          <span className="text-white text-sm font-mono">Click to Change</span>
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-2">
                        <Icons.Cloud className="w-10 h-10 text-slate-500 mx-auto" />
                        <p className="text-slate-400 text-sm">Upload source image</p>
                        <p className="text-slate-600 text-xs">JPG, PNG supported</p>
                      </div>
                    )}
                  </div>
                )}

                {/* Aspect Ratio for IMAGEN */}
                {mode === 'IMAGEN' && (
                  <div className="flex gap-4">
                    {['1:1', '16:9', '9:16', '4:3'].map(ratio => (
                      <button
                        key={ratio}
                        type="button"
                        onClick={() => setAspectRatio(ratio)}
                        className={`px-4 py-2 rounded text-sm font-mono border ${
                          aspectRatio === ratio 
                          ? 'bg-cyan-900/30 border-cyan-500 text-cyan-400' 
                          : 'bg-slate-950 border-slate-800 text-slate-400'
                        }`}
                      >
                        {ratio}
                      </button>
                    ))}
                  </div>
                )}

                {/* Prompt Input */}
                <div className="relative">
                  <textarea
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder={
                      mode === 'IMAGEN' ? "Describe the image you want to generate..." :
                      mode === 'VEO' ? "Describe how the image should move (e.g., 'Cinematic pan, particles floating')..." :
                      mode === 'NANO' ? "Describe the edit (e.g., 'Add a futuristic neon sign')..." :
                      "Enter your query..."
                    }
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl p-4 text-white placeholder-slate-600 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none min-h-[100px] font-mono text-sm"
                  />
                  <button
                    type="submit"
                    disabled={loading || !prompt}
                    className={`absolute bottom-4 right-4 px-6 py-2 rounded-lg font-bold text-sm transition-all ${
                      loading 
                      ? 'bg-slate-800 text-slate-500 cursor-not-allowed' 
                      : 'bg-cyan-500 text-slate-950 hover:bg-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.4)]'
                    }`}
                  >
                    {loading ? 'PROCESSING...' : 'EXECUTE_RUN'}
                  </button>
                </div>
             </form>

             {/* Result Display */}
             {(result || searchLinks.length > 0) && (
               <div className="mt-8 pt-8 border-t border-slate-800 animate-in fade-in slide-in-from-bottom-4 duration-700">
                 <div className="flex items-center justify-between mb-4">
                   <h5 className="text-white font-bold font-mono text-sm flex items-center gap-2">
                     <Icons.Check className="w-4 h-4 text-green-500" /> OUTPUT_GENERATED
                   </h5>
                   {mode !== 'SEARCH' && (
                      <a href={result!} download="korbies-asset" className="text-cyan-400 text-xs hover:underline">DOWNLOAD_ASSET</a>
                   )}
                 </div>

                 <div className="bg-slate-950 rounded-xl border border-slate-800 overflow-hidden">
                    {mode === 'VEO' ? (
                      <video src={result!} controls autoPlay loop className="w-full h-auto" />
                    ) : mode === 'SEARCH' ? (
                      <div className="p-6">
                        <div className="prose prose-invert max-w-none text-sm text-slate-300">
                           {result}
                        </div>
                        {searchLinks.length > 0 && (
                           <div className="mt-4 pt-4 border-t border-slate-800">
                              <p className="text-xs text-slate-500 font-mono mb-2">SOURCES:</p>
                              <div className="flex flex-wrap gap-2">
                                {searchLinks.map((link: any, i) => (
                                   <a key={i} href={link.web?.uri} target="_blank" rel="noopener noreferrer" className="text-xs bg-slate-800 px-2 py-1 rounded text-cyan-400 hover:text-white transition-colors">
                                      {link.web?.title || 'Source'}
                                   </a>
                                ))}
                              </div>
                           </div>
                        )}
                      </div>
                    ) : (
                      <img src={result!} alt="Generated result" className="w-full h-auto" />
                    )}
                 </div>
               </div>
             )}
          </div>
        </div>
      </div>
    </section>
  );
};
