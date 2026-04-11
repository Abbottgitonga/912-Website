import React from 'react';
import { cn } from '@/lib/utils';

interface BrandLogoProps {
  className?: string;
  variant?: 'full' | 'icon';
  theme?: 'light' | 'dark';
}

/**
 * Official 912 Brand Logo Component
 * Recreated as high-fidelity SVG for maximum quality and quality.
 * 
 * Design:
 * - Mark: High-vibrancy orange circle with a precise white/transparent crescent cutout.
 * - Text: Bold, high-contrast brand blue "912".
 */
export function BrandLogo({ 
  className, 
  variant = 'full', 
  theme = 'light' 
}: BrandLogoProps) {
  // Brand Colors
  const ORANGE = "#FF7A00";
  const BLUE = theme === 'dark' ? "#FFFFFF" : "#1B49C2"; // Turn blue text white on dark backgrounds if needed

  return (
    <div className={cn("flex items-center gap-2", className)}>
      {/* 912 Graphical Mark */}
      <svg 
        width="40" 
        height="40" 
        viewBox="0 0 100 100" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8 md:w-10 md:h-10 shrink-0"
      >
        <circle cx="50" cy="50" r="45" fill={ORANGE} />
        {/* The Crescent Cutout - Created by a subtraction circle */}
        <mask id="mask0_logo" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="100" height="100">
          <circle cx="50" cy="50" r="45" fill="white" />
          <circle cx="75" cy="75" r="28" fill="black" />
        </mask>
        <g mask="url(#mask0_logo)">
          {/* This applies the mask to the base circle if needed, but the mask itself hides the area */}
        </g>
        {/* Simpler approach: Draw the orange circle and then a background-colored circle to "cut" it */}
        <circle cx="75" cy="75" r="28" className={cn(
          theme === 'dark' ? 'fill-brand-dark' : 'fill-white',
          "transition-colors duration-500"
        )} />
      </svg>

      {/* 912 Brand Text */}
      {variant === 'full' && (
        <span 
          className={cn(
            "font-heading font-black text-2xl tracking-tighter transition-colors duration-500",
            theme === 'dark' ? "text-white" : "text-brand-blue"
          )}
          style={{ color: theme === 'dark' ? undefined : BLUE }}
        >
          912
        </span>
      )}
    </div>
  );
}
