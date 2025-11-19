import React from 'react';

// Helper for consistent SVG sizing/styling
const IconWrapper: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = "w-6 h-6" }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    {children}
  </svg>
);

export const Icons = {
  Logo: ({ className }: { className?: string }) => (
    <IconWrapper className={className}>
      {/* Stylized K with circuit nodes */}
      <path d="M4 4v16" />
      <path d="M4 12h4" />
      <path d="m8 12 8-8" />
      <path d="m8 12 8 8" />
      <circle cx="16" cy="4" r="2" />
      <circle cx="16" cy="20" r="2" />
      <path d="M18 4h2" />
      <path d="M18 20h2" />
    </IconWrapper>
  ),
  ShieldCheck: ({ className }: { className?: string }) => (
    <IconWrapper className={className}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
      <path d="m9 12 2 2 4-4" />
    </IconWrapper>
  ),
  Server: ({ className }: { className?: string }) => (
    <IconWrapper className={className}>
      <rect width="20" height="8" x="2" y="2" rx="2" ry="2" />
      <rect width="20" height="8" x="2" y="14" rx="2" ry="2" />
      <line x1="6" x2="6.01" y1="6" y2="6" />
      <line x1="6" x2="6.01" y1="18" y2="18" />
    </IconWrapper>
  ),
  Cloud: ({ className }: { className?: string }) => (
    <IconWrapper className={className}>
      <path d="M17.5 19c0-3.037-2.463-5.5-5.5-5.5S6.5 15.963 6.5 19" />
      <path d="M11 19h-5a5 5 0 0 1-5-5 5 5 0 0 1 5-5h1a5 5 0 0 1 5 5v5" />
      <path d="M12 13.5a5.5 5.5 0 0 1 5.5 5.5H12v-5.5" />
      <path d="M12 13.5V19h5.5" />
      <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
    </IconWrapper>
  ),
  Phone: ({ className }: { className?: string }) => (
    <IconWrapper className={className}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </IconWrapper>
  ),
  Menu: ({ className }: { className?: string }) => (
    <IconWrapper className={className}>
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </IconWrapper>
  ),
  X: ({ className }: { className?: string }) => (
    <IconWrapper className={className}>
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </IconWrapper>
  ),
  MessageSquare: ({ className }: { className?: string }) => (
    <IconWrapper className={className}>
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </IconWrapper>
  ),
  ChevronRight: ({ className }: { className?: string }) => (
    <IconWrapper className={className}>
      <path d="m9 18 6-6-6-6" />
    </IconWrapper>
  ),
  Bot: ({ className }: { className?: string }) => (
    <IconWrapper className={className}>
      <path d="M12 8V4H8" />
      <rect width="16" height="12" x="4" y="8" rx="2" />
      <path d="M2 14h2" />
      <path d="M20 14h2" />
      <path d="M15 13v2" />
      <path d="M9 13v2" />
    </IconWrapper>
  ),
  Send: ({ className }: { className?: string }) => (
    <IconWrapper className={className}>
      <path d="m22 2-7 20-4-9-9-4Z" />
      <path d="M22 2 11 13" />
    </IconWrapper>
  ),
  Check: ({ className }: { className?: string }) => (
    <IconWrapper className={className}>
      <path d="M20 6 9 17l-5-5" />
    </IconWrapper>
  ),
  ArrowRight: ({ className }: { className?: string }) => (
    <IconWrapper className={className}>
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </IconWrapper>
  ),
  Calendar: ({ className }: { className?: string }) => (
    <IconWrapper className={className}>
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </IconWrapper>
  ),
};