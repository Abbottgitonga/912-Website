import React from 'react';
import { motion } from 'motion/react';

interface IsometricIconProps {
  type: 'security' | 'cloud' | 'software' | 'data';
  className?: string;
}

export function IsometricIcon({ type, className = "" }: IsometricIconProps) {
  const renderIcon = () => {
    switch (type) {
      case 'security':
        return (
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <motion.path
              d="M50,10 L85,30 L85,70 L50,90 L15,70 L15,30 Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.path
              d="M50,10 L50,90 M15,30 L50,50 L85,30 M15,70 L50,50 L85,70"
              stroke="currentColor"
              strokeWidth="1"
              opacity="0.5"
            />
            <circle cx="50" cy="50" r="10" fill="currentColor" className="text-brand-orange" />
          </svg>
        );
      case 'cloud':
        return (
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <motion.rect
              x="20" y="20" width="60" height="60"
              rx="8"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              transform="rotate(45 50 50)"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.path
              d="M30,50 L50,30 L70,50 L50,70 Z"
              fill="currentColor"
              className="text-brand-blue/20"
            />
          </svg>
        );
      case 'software':
        return (
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <motion.path
              d="M20,30 L50,15 L80,30 L80,70 L50,85 L20,70 Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              animate={{ rotateY: [0, 360] }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            />
            <rect x="45" y="40" width="10" height="20" fill="currentColor" className="text-brand-orange" />
          </svg>
        );
      case 'data':
        return (
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <motion.path
              d="M20,80 L20,40 L50,20 L80,40 L80,80 Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            />
            <motion.rect
              x="30" y="60" width="10" height="20" fill="currentColor"
              style={{ originY: 1 }}
              animate={{ scaleY: [0.5, 1.5, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.rect
              x="45" y="50" width="10" height="30" fill="currentColor"
              style={{ originY: 1 }}
              animate={{ scaleY: [0.67, 1.33, 0.67] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
            />
            <motion.rect
              x="60" y="40" width="10" height="40" fill="currentColor"
              style={{ originY: 1 }}
              animate={{ scaleY: [0.75, 1.25, 0.75] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
            />
          </svg>
        );
    }
  };

  return (
    <div className={`relative ${className}`}>
      {renderIcon()}
    </div>
  );
}
