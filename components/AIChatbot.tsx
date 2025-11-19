import React, { useState, useRef, useEffect } from 'react';
import { Icons } from './Icons';
import { ChatMessage, LoadingState } from '../types';
import { sendMessageToGemini } from '../services/geminiService';

export const AIChatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: 'model',
      text: 'Initialising Korbies AI Interface... System Online. How may I assist you?',
      timestamp: new Date()
    }
  ]);
  const [loadingState, setLoadingState] = useState<LoadingState>(LoadingState.IDLE);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!input.trim() || loadingState === LoadingState.LOADING) return;

    const userMessage: ChatMessage = {
      role: 'user',
      text: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setLoadingState(LoadingState.LOADING);

    try {
      const responseText = await sendMessageToGemini(userMessage.text, messages);
      
      const botMessage: ChatMessage = {
        role: 'model',
        text: responseText,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
      setLoadingState(LoadingState.SUCCESS);
    } catch (error) {
      setMessages(prev => [...prev, {
        role: 'model',
        text: 'Error: Connection timeout. Please retry.',
        timestamp: new Date()
      }]);
      setLoadingState(LoadingState.ERROR);
    }
  };

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all duration-300 hover:scale-110 focus:outline-none border border-cyan-500/30 ${
          isOpen ? 'bg-slate-900 rotate-90 text-slate-400' : 'bg-cyan-600 text-white'
        }`}
        aria-label="Open AI Support Chat"
      >
        {isOpen ? (
          <Icons.X className="w-6 h-6" />
        ) : (
          <Icons.Bot className="w-8 h-8" />
        )}
      </button>

      {/* Chat Window */}
      <div
        className={`fixed bottom-24 right-6 z-50 w-[90vw] md:w-[400px] max-h-[600px] h-[70vh] bg-slate-950 rounded-lg shadow-2xl border border-slate-800 flex flex-col transition-all duration-300 origin-bottom-right transform ${
          isOpen ? 'scale-100 opacity-100 translate-y-0' : 'scale-95 opacity-0 translate-y-10 pointer-events-none'
        }`}
      >
        {/* Header */}
        <div className="bg-slate-900/80 backdrop-blur p-4 border-b border-slate-800 flex items-center justify-between rounded-t-lg">
          <div className="flex items-center gap-3">
             <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
             <span className="text-cyan-400 font-mono text-sm font-bold">AI_TERMINAL_V2.1</span>
          </div>
          <span className="text-[10px] text-slate-500 font-mono">SECURE_CONN</span>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-950/50 scrollbar-hide font-mono text-sm">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex w-full ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[85%] p-3 rounded ${
                  msg.role === 'user'
                    ? 'bg-cyan-900/30 text-cyan-100 border border-cyan-500/30'
                    : 'bg-slate-900 text-slate-300 border border-slate-800'
                }`}
              >
                <span className="block text-[10px] opacity-50 mb-1">
                    {msg.role === 'user' ? '> USER' : '> SYSTEM'}
                </span>
                {msg.text}
              </div>
            </div>
          ))}
          {loadingState === LoadingState.LOADING && (
             <div className="flex justify-start w-full">
               <div className="text-cyan-400 font-mono text-xs animate-pulse">
                 > PROCESSING_REQUEST...
               </div>
             </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <form onSubmit={handleSend} className="p-3 bg-slate-900 border-t border-slate-800 rounded-b-lg">
          <div className="relative flex items-center gap-2">
            <span className="text-cyan-500 font-mono pl-2">{'>'}</span>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Enter command..."
              className="w-full bg-transparent border-none focus:ring-0 text-white font-mono text-sm placeholder-slate-600"
              autoFocus
            />
            <button
              type="submit"
              disabled={loadingState === LoadingState.LOADING || !input.trim()}
              className="p-2 text-cyan-400 hover:text-white transition-colors"
            >
              <Icons.Send className="w-4 h-4" />
            </button>
          </div>
        </form>
      </div>
    </>
  );
};