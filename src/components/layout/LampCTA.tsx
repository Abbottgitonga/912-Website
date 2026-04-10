import React from 'react';
import { motion } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { HoverBorderButton } from '@/components/ui/HoverBorderButton';

/**
 * Persistent CTA section with lamp effect — orange conic gradient.
 * Appears above the footer on every page except /contact.
 * Lamp light source raised for stronger visual impact.
 */
export function LampCTA() {
  const location = useLocation();

  if (location.pathname === '/contact') return null;

  return (
    <section className="relative flex flex-col items-center justify-center overflow-hidden bg-brand-dark w-full z-0 pb-20 md:pb-24">
      {/* Lamp effect */}
      <div className="relative flex w-full scale-y-125 items-center justify-center isolate z-0 h-[300px]">
        {/* Left cone */}
        <motion.div
          initial={{ opacity: 0.5, width: '12rem' }}
          whileInView={{ opacity: 1, width: '30rem' }}
          transition={{ delay: 0.3, duration: 0.8, ease: 'easeInOut' }}
          viewport={{ once: true }}
          className="absolute inset-auto right-1/2 h-56 overflow-visible w-[30rem]"
          style={{
            backgroundImage: `conic-gradient(from 70deg at center top, #FF7A00, transparent, transparent)`,
          }}
        >
          <div className="absolute w-[100%] left-0 bg-brand-dark h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
          <div className="absolute w-40 h-[100%] left-0 bg-brand-dark bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
        </motion.div>

        {/* Right cone */}
        <motion.div
          initial={{ opacity: 0.5, width: '12rem' }}
          whileInView={{ opacity: 1, width: '30rem' }}
          transition={{ delay: 0.3, duration: 0.8, ease: 'easeInOut' }}
          viewport={{ once: true }}
          className="absolute inset-auto left-1/2 h-56 w-[30rem]"
          style={{
            backgroundImage: `conic-gradient(from 290deg at center top, transparent, transparent, #FF7A00)`,
          }}
        >
          <div className="absolute w-40 h-[100%] right-0 bg-brand-dark bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
          <div className="absolute w-[100%] right-0 bg-brand-dark h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
        </motion.div>

        {/* Blur cover and glow layers */}
        <div className="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-brand-dark blur-2xl" />
        <div className="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md" />

        {/* Wide glow orb */}
        <div className="absolute inset-auto z-50 h-36 w-[28rem] -translate-y-[60%] rounded-full bg-brand-orange opacity-50 blur-3xl" />

        {/* Tight glow orb */}
        <motion.div
          initial={{ width: '6rem' }}
          whileInView={{ width: '16rem' }}
          transition={{ delay: 0.3, duration: 0.8, ease: 'easeInOut' }}
          viewport={{ once: true }}
          className="absolute inset-auto z-30 h-36 w-64 -translate-y-[70%] rounded-full bg-brand-orange/80 blur-2xl"
        />

        {/* Glowing horizontal bar */}
        <motion.div
          initial={{ width: '12rem' }}
          whileInView={{ width: '30rem' }}
          transition={{ delay: 0.3, duration: 0.8, ease: 'easeInOut' }}
          viewport={{ once: true }}
          className="absolute inset-auto z-50 h-0.5 w-[30rem] -translate-y-[8rem] bg-brand-orange"
        />

        {/* Dark cover above content */}
        <div className="absolute inset-auto z-40 h-44 w-full -translate-y-[14rem] bg-brand-dark" />
      </div>

      {/* Content — sits BELOW the lamp */}
      <div className="relative z-10 flex flex-col items-center px-5 -mt-8 text-center max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8, ease: 'easeInOut' }}
          viewport={{ once: true }}
        >
          <span className="text-brand-orange uppercase tracking-[0.4em] text-[10px] font-black mb-6 block">
            Ready?
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white leading-tight mb-6">
            What would a proper IT audit reveal about your infrastructure?
          </h2>
          <p className="text-lg text-white/50 mb-10 max-w-xl mx-auto">
            A 20-minute Discovery Call. No pitch.
          </p>
          <div className="flex justify-center">
            <Link to="/contact">
              <HoverBorderButton variant="orange">
                Book a Discovery Call
              </HoverBorderButton>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
