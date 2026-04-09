import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface CountryPin {
  id: string;
  name: string;
  x: number; // percentage
  y: number; // percentage
  region: 'east' | 'central' | 'west' | 'kenya';
}

const pins: CountryPin[] = [
  { id: 'kenya', name: 'Kenya', x: 72, y: 55, region: 'kenya' },
  { id: 'tanzania', name: 'Tanzania', x: 70, y: 62, region: 'east' },
  { id: 'rwanda', name: 'Rwanda', x: 65, y: 58, region: 'east' },
  { id: 'burundi', name: 'Burundi', x: 65, y: 61, region: 'east' },
  { id: 'drc', name: 'DRC', x: 58, y: 58, region: 'central' },
  { id: 'angola', x: 52, y: 68, name: 'Angola', region: 'central' },
  { id: 'senegal', name: 'Senegal', x: 15, y: 38, region: 'west' },
  { id: 'mali', name: 'Mali', x: 25, y: 35, region: 'west' },
  { id: 'burkina-faso', name: 'Burkina Faso', x: 30, y: 40, region: 'west' },
];

export function AfricaMap() {
  const [activeRegion, setActiveRegion] = useState<number>(0); // 0: Kenya, 1: East, 2: Central, 3: West

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveRegion((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const getVisiblePins = () => {
    if (activeRegion === 0) return pins.filter(p => p.region === 'kenya');
    if (activeRegion === 1) return pins.filter(p => p.region === 'kenya' || p.region === 'east');
    if (activeRegion === 2) return pins.filter(p => p.region === 'kenya' || p.region === 'east' || p.region === 'central');
    return pins;
  };

  const visiblePins = getVisiblePins();

  return (
    <div className="relative w-full aspect-square max-w-2xl mx-auto">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(27,73,194,0.05)_1px,transparent_1px)] bg-[size:20px_20px] [mask-image:radial-gradient(circle_at_center,black,transparent_80%)]" />
      
      {/* Africa SVG Outline */}
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full fill-white/5 stroke-white/20 stroke-[0.5]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M35,10 C45,5 60,5 75,15 C85,25 95,45 85,65 C75,85 60,95 45,95 C30,95 15,85 10,65 C5,45 15,25 25,15 C30,12 32,11 35,10 Z" className="opacity-0" />
        {/* Simplified Africa Path */}
        <motion.path
          d="M32.5,18.5 C35,15 45,12 55,12 C65,12 75,15 82,22 C88,28 92,38 88,52 C85,65 78,78 68,85 C58,92 48,95 40,92 C32,88 28,80 25,72 C22,65 18,58 12,52 C8,48 5,42 8,35 C11,28 18,22 25,20 C28,19 30,20 32.5,18.5 Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.5"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="text-brand-blue/40"
        />
      </svg>

      {/* Pins */}
      <AnimatePresence>
        {visiblePins.map((pin) => (
          <motion.div
            key={pin.id}
            className="absolute flex flex-col items-center"
            style={{ left: `${pin.x}%`, top: `${pin.y}%` }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
          >
            {/* Ping Effect */}
            <div className="relative">
              <div className="w-3 h-3 bg-brand-orange rounded-full relative z-10" />
              <motion.div
                className="absolute inset-0 bg-brand-orange rounded-full"
                animate={{ scale: [1, 3], opacity: [0.5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut" }}
              />
            </div>
            {/* Label */}
            <motion.span
              className="mt-1 text-[10px] font-black uppercase tracking-tighter text-white bg-brand-blue/80 px-1 py-0.5 rounded backdrop-blur-sm whitespace-nowrap"
              initial={{ y: 5, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              {pin.name}
            </motion.span>
          </motion.div>
        ))}
      </AnimatePresence>

      {/* Region Indicator */}
      <div className="absolute bottom-4 left-4 flex flex-col gap-1">
        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-orange">
          {activeRegion === 0 ? 'Kenya Operations' : 
           activeRegion === 1 ? 'East Africa Expansion' : 
           activeRegion === 2 ? 'Central Africa Reach' : 
           'West Africa Footprint'}
        </span>
        <div className="flex gap-1">
          {[0, 1, 2, 3].map((i) => (
            <div
              key={i}
              className={`h-1 transition-all duration-500 ${activeRegion === i ? 'w-8 bg-brand-orange' : 'w-2 bg-white/20'}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
