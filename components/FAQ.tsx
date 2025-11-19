
import React, { useState } from 'react';
import { ScrollReveal } from './ScrollReveal';
import { Icons } from './Icons';

const faqs = [
  {
    question: "Is Managed IT right for my small business?",
    answer: "Yes—our services are tailored for small teams who need expert IT without the overhead of an internal department. We scale with you."
  },
  {
    question: "How fast is your response time?",
    answer: "Most requests are resolved within the hour by our local UK‑based helpdesk. We guarantee response times in our SLA."
  },
  {
    question: "Will you work with our current setup?",
    answer: "Absolutely. We support your existing tools (Microsoft 365, Google Workspace, etc.) and suggest improvements where needed for security and speed."
  },
  {
    question: "What about data security?",
    answer: "We include multilayered security—firewalls, AV/EDR, patching, and backups—to keep your data safe from ransomware and accidental loss."
  },
  {
    question: "Where are you based?",
    answer: "We are proudly based in Ipswich & Suffolk, serving clients locally and across the wider UK with remote and on-site support."
  }
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="w-full">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">
        <ScrollReveal>
            <div className="text-center mb-12">
                <h2 className="text-cyan-500 font-mono text-sm mb-3 tracking-widest">KNOWLEDGE_BASE</h2>
                <h3 className="text-3xl md:text-4xl font-bold text-white">Common Queries</h3>
            </div>
        </ScrollReveal>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <ScrollReveal key={index} delay={`delay-${index * 100}`}>
              <div 
                className={`border rounded-lg transition-all duration-300 overflow-hidden ${
                    openIndex === index 
                    ? 'bg-slate-900/60 border-cyan-500/50 shadow-[0_0_15px_rgba(6,182,212,0.1)]' 
                    : 'bg-slate-900/30 border-slate-800 hover:border-slate-700'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left focus:outline-none"
                >
                  <span className={`font-bold ${openIndex === index ? 'text-cyan-400' : 'text-white'}`}>
                    {faq.question}
                  </span>
                  <span className={`transform transition-transform duration-300 ${openIndex === index ? 'rotate-180 text-cyan-400' : 'text-slate-500'}`}>
                    <Icons.ChevronRight />
                  </span>
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-6 text-slate-400 text-sm leading-relaxed border-t border-slate-800/50 pt-4">
                    {faq.answer}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
};
