import React, { useRef, useCallback, useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface InfiniteSliderProps {
  children: React.ReactNode;
  gap?: number;
  speed?: number;
  speedOnHover?: number;
  reverse?: boolean;
  className?: string;
}

export function InfiniteSlider({
  children,
  gap = 40,
  speed = 60,
  speedOnHover = 20,
  reverse = false,
  className,
}: InfiniteSliderProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const currentSpeed = isHovered ? speedOnHover : speed;
  const direction = reverse ? 'reverse' : 'normal';

  return (
    <div
      className={cn('overflow-hidden', className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        ref={scrollRef}
        className="flex w-max"
        style={{
          gap: `${gap}px`,
          animation: `infiniteSlide ${100 / (currentSpeed / 60)}s linear infinite`,
          animationDirection: direction,
        }}
      >
        {/* Original items */}
        {children}
        {/* Duplicated items for seamless loop — hidden from assistive tech */}
        <div aria-hidden="true" className="contents">
          {children}
        </div>
      </div>

      <style>{`
        @keyframes infiniteSlide {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
