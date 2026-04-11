import React from "react";

interface LogoProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className, ...props }) => {
  return (
    <svg 
      viewBox="-150 -170 300 340" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className} 
      {...props}
    >
      <defs>
        {/* Top Layer (Cyan) */}
        <linearGradient id="layerTop" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00F0FF"/>
          <stop offset="100%" stopColor="#147BFF"/>
        </linearGradient>
        
        {/* Middle Layer (Blue/Purple) */}
        <linearGradient id="layerMid" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#147BFF"/>
          <stop offset="100%" stopColor="#8B5CF6"/>
        </linearGradient>

        {/* Bottom Layer (Purple/Pink) */}
        <linearGradient id="layerBot" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8B5CF6"/>
          <stop offset="100%" stopColor="#E83AA8"/>
        </linearGradient>

        {/* Edge Highlighting */}
        <linearGradient id="edgeHighlight" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9"/>
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.1"/>
        </linearGradient>

        {/* Deep Drop Shadow */}
        <filter id="deepShadow" x="-30%" y="-30%" width="160%" height="160%">
          <feDropShadow dx="0" dy="16" stdDeviation="12" floodColor="#000000" floodOpacity="0.6"/>
        </filter>

        {/* Brilliant Glow for the top layer */}
        <filter id="topGlow" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="16" result="blur"/>
          <feDropShadow dx="0" dy="8" stdDeviation="8" floodColor="#00F0FF" floodOpacity="0.4"/>
          <feComposite in="SourceGraphic" in2="blur" operator="over"/>
        </filter>
      </defs>

      {/* Logo Group (Perfectly Centered) */}
      <g>
        {/* 1. Bottom Layer (Data) */}
        <g transform="translate(0, 60)" filter="url(#deepShadow)">
          <polygon points="0,-60 120,0 0,60 -120,0" fill="url(#layerBot)" stroke="url(#layerBot)" strokeWidth="8" strokeLinejoin="round"/>
          <polygon points="0,-60 120,0 0,60 -120,0" fill="none" stroke="url(#edgeHighlight)" strokeWidth="2.5" strokeLinejoin="round" opacity="0.6"/>
        </g>

        {/* 2. Middle Layer (Model / Logic) */}
        <g transform="translate(0, 0)" filter="url(#deepShadow)">
          <polygon points="0,-60 120,0 0,60 -120,0" fill="url(#layerMid)" stroke="url(#layerMid)" strokeWidth="8" strokeLinejoin="round"/>
          <polygon points="0,-60 120,0 0,60 -120,0" fill="none" stroke="url(#edgeHighlight)" strokeWidth="2.5" strokeLinejoin="round" opacity="0.8"/>
        </g>

        {/* 3. Top Layer (Application / UI) */}
        <g transform="translate(0, -60)" filter="url(#topGlow)">
          <polygon points="0,-60 120,0 0,60 -120,0" fill="url(#layerTop)" stroke="url(#layerTop)" strokeWidth="8" strokeLinejoin="round"/>
          {/* Top shine */}
          <polygon points="0,-60 120,0 0,60 -120,0" fill="none" stroke="#FFFFFF" strokeWidth="3" strokeLinejoin="round" opacity="0.9"/>
        </g>
      </g>
    </svg>
  );
};
