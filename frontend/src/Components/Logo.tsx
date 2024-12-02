import React from 'react';

const LaceUpLogo: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`relative w-30 h-10 ${className}`}>
      <svg
        viewBox="0 0 240 90"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>
        </defs>
        <path
          d="M10 45 L230 45"
          stroke="url(#gradient)"
          strokeWidth="2"
          strokeLinecap="round"
          className="animate-dash"
        />
        <text
          x="120"
          y="60"
          fontFamily="Arial, sans-serif"
          fontSize="36"
          fontWeight="bold"
          fill="url(#gradient)"
          textAnchor="middle"
          className="animate-pulse"
        >
          LACE UP
        </text>
        <circle
          cx="20"
          cy="45"
          r="5"
          fill="#3b82f6"
          className="animate-ping"
        />
        <circle
          cx="220"
          cy="45"
          r="5"
          fill="#8b5cf6"
          className="animate-ping"
        />
      </svg>
    </div>
  );
};

export default LaceUpLogo;

