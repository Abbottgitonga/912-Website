import React from 'react';
import { motion } from 'motion/react';

export function SplineSceneAlternative() {
  return (
    <div className="relative w-full h-[400px] flex items-center justify-center overflow-hidden perspective-1000">
      <motion.div
        animate={{
          rotateX: [0, 10, 0, -10, 0],
          rotateY: [0, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="relative w-64 h-64 preserve-3d"
      >
        {/* Central bold core */}
        <div className="absolute inset-x-1/4 inset-y-1/4 bg-brand-orange rounded-full shadow-[0_0_50px_rgba(255,102,0,0.8)] animate-pulse" />
        
        {/* Floating elements - Solid and High Contrast */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute inset-0 border-2 border-brand-blue bg-brand-dark rounded-xl shadow-lg"
            initial={{
              rotateX: i * 60,
              rotateY: i * 60,
              translateZ: 100
            }}
            animate={{
              rotateX: [i * 60, i * 60 + 180, i * 60 + 360],
              rotateY: [i * 60, i * 60 + 180, i * 60 + 360],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "linear",
              delay: i * -2
            }}
            style={{
              transformStyle: 'preserve-3d',
            }}
          >
            {/* Inner bold detail */}
            <div className="absolute inset-4 border-2 border-brand-orange rounded-lg bg-brand-blue/10" />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
