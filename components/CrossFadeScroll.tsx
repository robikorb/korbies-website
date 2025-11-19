
import React, { useRef, useState, useEffect } from 'react';

interface CrossFadeScrollProps {
  children: React.ReactNode[];
}

export const CrossFadeScroll: React.FC<CrossFadeScrollProps> = ({ children }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      
      // Total scrollable distance roughly
      const totalScroll = scrollHeight - clientHeight;
      
      // How much "scroll height" we assign to each section
      // Making it larger (e.g. 1.5 viewport heights) makes the transition slower/smoother
      const sectionHeight = clientHeight; 
      
      const currentScroll = window.scrollY;
      
      // Calculate which section we are currently "in"
      // We add a small buffer to ensure we start at 0
      const rawIndex = currentScroll / sectionHeight;
      const index = Math.floor(rawIndex + 0.2); // Slight bias to snap to next
      
      // Calculate local progress (0 to 1) within the transition zone
      // We want the cross-fade to happen around the transition point
      const localProgress = rawIndex % 1;

      setActiveIndex(Math.min(Math.max(index, 0), children.length - 1));
      setProgress(localProgress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, [children.length]);

  // We need a tall container to allow scrolling
  // Each child gets '100vh' worth of scroll space + some buffer for the transition
  const totalHeight = `${children.length * 100}vh`;

  return (
    <div ref={containerRef} style={{ height: totalHeight, position: 'relative' }}>
      <div className="fixed inset-0 w-full h-full overflow-hidden">
        {children.map((child, i) => {
            // Logic for opacity:
            // If it's the active index, it's visible.
            // We can smooth the transition if we want, but a clean CSS transition on the active index
            // is often smoother than driving opacity directly via JS frame-by-frame in React without a library.
            
            // Is this the current item?
            const isActive = i === activeIndex;
            
            // Is it the immediate neighbor? (For cross-fading)
            // For simplicity in this implementation, we will just toggle visibility classes
            // with a duration to let CSS handle the interpolation.
            
            return (
            <div
                key={i}
                className={`absolute inset-0 w-full h-full transition-all duration-1000 ease-in-out flex flex-col justify-center
                ${isActive ? 'opacity-100 z-10 scale-100 blur-0' : 'opacity-0 z-0 scale-95 blur-xl pointer-events-none'}`}
            >
                {/* 
                  Internal container for scrolling if content is too tall for viewport.
                  We center vertically, but if it overflows, we allow auto-scroll.
                */}
                <div className="w-full h-full overflow-y-auto scrollbar-hide flex flex-col items-center justify-center">
                    <div className="w-full">
                        {child}
                    </div>
                </div>
            </div>
            );
        })}
      </div>
    </div>
  );
};
