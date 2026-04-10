import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

import { AfricaMap } from './AfricaMap';

export function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);
  
  // Spring for smooth cheetah-like movement
  const springConfig = { damping: 25, stiffness: 150 };
  const cheetahX = useSpring(0, springConfig);
  const cheetahY = useSpring(0, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        setMousePos({ x, y });
        cheetahX.set(x);
        cheetahY.set(y);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [cheetahX, cheetahY]);

  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section ref={heroRef} className="relative h-screen min-h-[800px] flex items-center overflow-hidden bg-[#0A0A1A]">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0A0A1A]/50 to-[#0A0A1A] z-10" />
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(27,73,194,0.15),transparent_70%)]" />
        <motion.div 
          style={{ y: y1, opacity }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20" />
        </motion.div>
      </div>

      {/* Africa Map Animation (Primary Request) */}
      <div className="absolute right-[-5%] top-[15%] z-20 hidden lg:block w-[55%] pointer-events-none">
        <AfricaMap />
      </div>

      {/* Cheetah Interactivity (Light Trail) */}
      <motion.div 
        className="absolute pointer-events-none z-20 w-64 h-64 bg-brand-orange/10 rounded-full blur-[120px]"
        style={{ x: cheetahX, y: cheetahY, translateX: '-50%', translateY: '-50%' }}
      />
      <motion.div 
        className="absolute pointer-events-none z-20 w-2 h-2 bg-brand-orange rounded-full shadow-[0_0_30px_#FF7A00]"
        style={{ x: cheetahX, y: cheetahY, translateX: '-50%', translateY: '-50%' }}
      />

      <div className="container mx-auto px-4 relative z-30">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-4 mb-12"
          >
            <span className="text-brand-orange uppercase tracking-[0.4em] text-xs font-black">Est. 2009 // Pan-African</span>
            <span className="h-[1px] w-24 bg-brand-orange/30" />
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl md:text-8xl lg:text-9xl font-heading font-bold text-white leading-[0.9] mb-12 tracking-tighter"
          >
            INFINITE <br />
            <span className="text-brand-orange italic">POSSIBILITIES</span> <br />
            <span className="text-brand-blue">UNIFIED.</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end"
          >
            <p className="text-xl text-white/50 leading-relaxed font-medium">
              We design, secure, and manage the technology businesses depend on — 
              from core IT infrastructure to physical security systems.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-brand-blue hover:bg-brand-blue/90 text-white rounded-none px-10 py-8 text-lg font-bold group">
                <Link to="/expertise">
                  Our Pillars
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </Link>
              </Button>
              <Link
                to="/about/one-contract"
                className="inline-flex items-center justify-center border border-white/20 bg-transparent text-white hover:bg-white/10 rounded-none px-10 py-4 text-lg font-bold transition-colors"
              >
                One Contract
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Vertical Text Decoration */}
      <div className="absolute right-12 top-1/2 -translate-y-1/2 hidden xl:block">
        <div className="flex flex-col items-center gap-8">
          <span className="h-32 w-[1px] bg-white/10" />
          <span className="text-white/20 uppercase tracking-[0.5em] text-[10px] font-bold vertical-text">
            Digital Transformation Platform
          </span>
          <span className="h-32 w-[1px] bg-white/10" />
        </div>
      </div>
    </section>
  );
}
