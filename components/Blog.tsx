
import React from 'react';
import { Icons } from './Icons';
import { ScrollReveal } from './ScrollReveal';

const posts = [
  {
    id: 1,
    title: 'Quantum Encryption Standards 2025',
    excerpt: 'Preparing your infrastructure for the post-quantum era. Why RSA-2048 is no longer enough.',
    date: 'OCT 15, 2024',
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2070&auto=format&fit=crop',
    category: 'SECURITY'
  },
  {
    id: 2,
    title: 'Kubernetes: Edge Deployment Guide',
    excerpt: 'Optimizing container orchestration for IoT devices at the edge. Reducing latency to sub-5ms.',
    date: 'SEP 28, 2024',
    image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=1000&auto=format&fit=crop',
    category: 'DEVOPS'
  },
  {
    id: 3,
    title: 'The Rise of AI-Driven Threat Hunting',
    excerpt: 'How we utilize generative models to predict and neutralize zero-day exploits before execution.',
    date: 'SEP 10, 2024',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop',
    category: 'AI / ML'
  }
];

export const Blog: React.FC = () => {
  return (
    <div className="w-full">
      <div className="container mx-auto px-4 md:px-6">
        <ScrollReveal>
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-slate-800 pb-8">
                <div className="max-w-2xl">
                    <h2 className="text-cyan-500 font-mono text-sm mb-3 tracking-widest">INTELLIGENCE</h2>
                    <h3 className="text-3xl md:text-4xl font-bold text-white">Technical Insights</h3>
                </div>
                <a href="#" className="hidden md:flex items-center text-slate-400 font-mono text-sm hover:text-cyan-400 mt-4 md:mt-0 transition-colors">
                    [ VIEW_ARCHIVE ] <Icons.ArrowRight className="ml-2 w-4 h-4" />
                </a>
            </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <ScrollReveal key={post.id} delay={`delay-${index * 100}`}>
                <article className="group bg-slate-900/40 backdrop-blur-sm border border-slate-800 rounded overflow-hidden hover:border-slate-600 transition-all duration-300 flex flex-col h-full">
                <div className="h-48 overflow-hidden relative">
                    <div className="absolute inset-0 bg-cyan-900/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                    <span className="absolute top-4 left-4 bg-slate-950/80 backdrop-blur text-cyan-400 border border-cyan-900/50 text-[10px] font-mono font-bold px-3 py-1 rounded z-20">
                        {post.category}
                    </span>
                    <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter grayscale group-hover:grayscale-0"
                    />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center text-slate-500 text-xs mb-4 gap-2 font-mono">
                        <Icons.Calendar className="w-3 h-3" />
                        <span>{post.date}</span>
                    </div>
                    <h4 className="text-lg font-bold text-white mb-3 leading-snug group-hover:text-cyan-400 transition-colors cursor-pointer">
                    {post.title}
                    </h4>
                    <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-1">
                    {post.excerpt}
                    </p>
                    <a href="#" className="inline-flex items-center text-white text-xs font-bold uppercase tracking-wider hover:text-cyan-400 mt-auto">
                    Read Analysis <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                    </a>
                </div>
                </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
};
