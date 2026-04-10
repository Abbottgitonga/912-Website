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
        {/* Central glowing core */}
        <div className="absolute inset-x-1/4 inset-y-1/4 bg-brand-orange/40 rounded-full blur-3xl animate-pulse" />
        
        {/* Floating elements */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute inset-0 border border-brand-blue/30 bg-brand-dark/10 backdrop-blur-sm rounded-xl"
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
              duration: 15,
              repeat: Infinity,
              ease: "linear",
              delay: i * -2
            }}
            style={{
              transformStyle: 'preserve-3d',
            }}
          >
            {/* Inner detail */}
            <div className="absolute inset-4 border border-brand-orange/20 rounded-lg" />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
