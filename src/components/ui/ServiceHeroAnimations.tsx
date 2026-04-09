import React from 'react';
import { motion } from 'motion/react';

export const AccessControlAnimation = () => (
  <div className="relative w-64 h-64">
    <svg viewBox="0 0 200 200" className="w-full h-full">
      {/* Door Frame */}
      <motion.path
        d="M60,160 L60,40 L140,40 L140,160"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="text-brand-blue"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      />
      {/* Scanner */}
      <motion.rect
        x="150" y="80" width="20" height="30"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="text-brand-orange"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      />
      {/* Scanning Line */}
      <motion.line
        x1="155" y1="85" x2="165" y2="85"
        stroke="currentColor"
        strokeWidth="1"
        className="text-brand-orange"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
      />
      {/* Signal Waves */}
      {[1, 2, 3].map((i) => (
        <motion.path
          key={i}
          d={`M175,${95 - i * 5} Q${185 + i * 5},95 175,${95 + i * 5}`}
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          className="text-brand-blue"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0], x: [0, 10] }}
          transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.3 }}
        />
      ))}
    </svg>
  </div>
);

export const CCTVAnimation = () => (
  <div className="relative w-64 h-64">
    <div className="absolute inset-0 rounded-full border-2 border-brand-blue/20 animate-ping" />
    <svg viewBox="0 0 200 200" className="w-full h-full">
      {/* Camera Body */}
      <motion.path
        d="M40,100 L160,100 L140,60 L60,60 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="text-white"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5 }}
      />
      {/* Lens */}
      <motion.circle
        cx="100" cy="100" r="25"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        className="text-brand-orange"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      {/* Shutter lines */}
      <motion.path
        d="M85,100 L115,100 M100,85 L100,115"
        stroke="currentColor"
        strokeWidth="1"
        className="text-brand-blue"
        animate={{ rotate: 360 }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />
    </svg>
  </div>
);

export const AnalyticsAnimation = () => (
  <div className="relative w-64 h-64">
    <svg viewBox="0 0 200 200" className="w-full h-full">
      {/* 3D Path */}
      <motion.path
        d="M20,150 Q60,150 100,100 T180,50"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="text-brand-blue/30"
        strokeDasharray="4 4"
      />
      {/* Marbles/Data Points */}
      {[0, 1, 2].map((i) => (
        <motion.circle
          key={i}
          r="6"
          fill="currentColor"
          className="text-brand-orange"
          initial={{ offsetDistance: "0%" }}
          animate={{ offsetDistance: "100%" }}
          transition={{ 
            duration: 3, 
            repeat: Infinity, 
            delay: i * 1,
            ease: "linear" 
          }}
          style={{ 
            offsetPath: "path('M20,150 Q60,150 100,100 T180,50')",
            offsetRotate: "auto"
          }}
        />
      ))}
      {/* Bar Chart Growth */}
      {[40, 70, 100, 130].map((x, i) => (
        <motion.rect
          key={i}
          x={x} y={160} width="15" height="0"
          fill="currentColor"
          className="text-brand-blue"
          animate={{ height: [0, 20 + i * 20, 0], y: [160, 140 - i * 20, 160] }}
          transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
        />
      ))}
    </svg>
  </div>
);

export const CloudAnimation = () => (
  <div className="relative w-64 h-64">
    <svg viewBox="0 0 200 200" className="w-full h-full">
      {/* Cloud Outline */}
      <motion.path
        d="M50,140 A30,30 0 0,1 50,80 A40,40 0 0,1 130,80 A30,30 0 0,1 130,140 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="text-brand-blue"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2 }}
      />
      {/* Floating Nodes */}
      {[
        { x: 100, y: 110 },
        { x: 70, y: 120 },
        { x: 130, y: 120 },
      ].map((node, i) => (
        <motion.g key={i}>
          <motion.circle
            cx={node.x} cy={node.y} r="4"
            fill="currentColor"
            className="text-brand-orange"
            animate={{ y: [node.y, node.y - 10, node.y] }}
            transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
          />
          <motion.line
            x1="100" y1="50" x2={node.x} y2={node.y}
            stroke="currentColor"
            strokeWidth="0.5"
            className="text-brand-blue/20"
            animate={{ opacity: [0.1, 0.5, 0.1] }}
            transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
          />
        </motion.g>
      ))}
    </svg>
  </div>
);
