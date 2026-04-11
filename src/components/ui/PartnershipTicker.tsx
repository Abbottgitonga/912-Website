import React from 'react';
import { motion } from 'motion/react';
import { Shield, Award, CheckCircle2 } from 'lucide-react';

const partnerships = [
  { name: 'ISO 27001 Certified', icon: Shield },
  { name: 'Microsoft Gold Partner', icon: Award },
  { name: 'AWS Advanced Consulting', icon: Award },
  { name: 'Cisco Premier Integrator', icon: CheckCircle2 },
  { name: 'ODPC Compliant (Kenya)', icon: Shield },
  { name: 'Fortinet Expert', icon: Award },
];

export function PartnershipTicker() {
  return (
    <div className="w-full bg-slate-50 border-y border-slate-200 py-6 overflow-hidden flex relative z-20">
      <div className="w-full max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-6 md:gap-12 text-slate-400">
        <span className="text-xs font-black uppercase tracking-widest text-brand-blue flex-shrink-0">
          Trusted Enterprise Partnerships
        </span>
        <div className="flex-1 overflow-hidden relative">
          <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-slate-50 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-slate-50 to-transparent z-10" />
          <motion.div
            animate={{ x: [0, -1035] }}
            transition={{
              repeat: Infinity,
              duration: 30,
              ease: "linear",
            }}
            className="flex items-center gap-12 sm:gap-24 whitespace-nowrap"
          >
            {/* Double the array for seamless infinite scrolling */}
            {[...partnerships, ...partnerships].map((partner, i) => (
              <div key={i} className="flex items-center gap-2 group">
                <partner.icon className="w-5 h-5 text-brand-orange/40 group-hover:text-brand-orange transition-colors" />
                <span className="font-bold text-sm text-slate-500 group-hover:text-brand-dark transition-colors">
                  {partner.name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
