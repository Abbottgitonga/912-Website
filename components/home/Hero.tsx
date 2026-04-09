import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

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
    <section ref={heroRef} className="relative h-screen min-h-[700px] flex items-center overflow-hidden bg-brand-dark">
      {/* Background Video/Image Placeholder */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/80 to-transparent z-10" />
        <img 
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000" 
          alt="Tech Network" 
          className="w-full h-full object-cover opacity-40"
        />
      </div>

      {/* Cheetah Interactivity (Light Trail) */}
      <motion.div 
        className="absolute pointer-events-none z-20 w-32 h-32 bg-brand-orange/20 rounded-full blur-3xl"
        style={{ x: cheetahX, y: cheetahY, translateX: '-50%', translateY: '-50%' }}
      />
      <motion.div 
        className="absolute pointer-events-none z-20 w-4 h-4 bg-brand-orange rounded-full shadow-[0_0_20px_#FF7A00]"
        style={{ x: cheetahX, y: cheetahY, translateX: '-50%', translateY: '-50%' }}
      />

      <div className="container mx-auto px-4 relative z-30">
        <motion.div 
          style={{ y: y1, opacity }}
          className="max-w-4xl"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center gap-4 mb-8"
          >
            <span className="h-[1px] w-12 bg-brand-orange" />
            <span className="text-brand-orange uppercase tracking-[0.3em] text-sm font-bold">Infinite Possibilities</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-white leading-[1.1] mb-8"
          >
            Your <span className="text-brand-orange italic">trusted</span> <br />
            technology partner <br />
            across Africa
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl md:text-2xl text-white/60 mb-12 max-w-2xl leading-relaxed"
          >
            With more than 15 years of excellence and a track record of delivering 
            end-to-end digital transformation for the continent's leading enterprises.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap gap-6"
          >
            <Button asChild size="lg" className="bg-brand-blue hover:bg-brand-blue/90 text-white rounded-none px-8 py-8 text-lg group">
              <a href="/expertise">
                Explore Our Expertise
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10 rounded-none px-8 py-8 text-lg">
              <a href="/about/one-contract">The One Contract Model</a>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Award Logos (Bottom) */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-12 left-0 right-0 z-30"
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            <span className="text-white/40 text-xs uppercase tracking-widest font-bold">Trusted By</span>
            <div className="h-8 w-px bg-white/20 hidden md:block" />
            {/* Placeholder for partner logos */}
            <div className="flex gap-12 items-center">
              <div className="text-white font-heading font-bold text-xl">FORTINET</div>
              <div className="text-white font-heading font-bold text-xl">MICROSOFT</div>
              <div className="text-white font-heading font-bold text-xl">CISCO</div>
              <div className="text-white font-heading font-bold text-xl">SAP</div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
