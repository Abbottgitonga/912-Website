import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, PhoneCall, MessageSquare, Clock } from 'lucide-react';
import { HoverBorderButton } from '@/components/ui/HoverBorderButton';

interface SpeakToExpertsProps {
  title?: string;
  subtitle?: string;
  description?: string;
  theme?: 'light' | 'dark';
}

const expertStats = [
  { icon: Clock, label: '20-minute', sublabel: 'Discovery Call' },
  { icon: PhoneCall, label: 'No obligation', sublabel: 'Free consultation' },
  { icon: MessageSquare, label: 'Direct access', sublabel: 'To senior engineers' },
];

export function SpeakToExperts({
  title = 'Speak to Our Experts',
  subtitle = 'No sales pitch. Just an honest assessment.',
  description = "Tell us where you are. We'll tell you what we'd change, what it costs, and whether it makes sense — on a 20-minute call.",
  theme = 'light',
}: SpeakToExpertsProps) {
  const isDark = theme === 'dark';

  return (
    <section
      className={`py-24 ${isDark ? 'bg-brand-dark' : 'bg-white'} relative overflow-hidden`}
    >
      {/* Subtle background gradient */}
      <div
        className={`absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,${
          isDark ? 'rgba(27,73,194,0.12)' : 'rgba(27,73,194,0.04)'
        },transparent_60%)] pointer-events-none`}
        aria-hidden="true"
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Left — Expert images collage */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative grid grid-cols-2 gap-4">
              {/* Main image */}
              <div className="col-span-2 relative rounded-2xl overflow-hidden h-64 shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200"
                  alt="912 technical team collaborating"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 via-transparent to-transparent" />
                {/* Team label overlay */}
                <div className="absolute bottom-4 left-4">
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-orange block mb-1">
                    Est. 2013
                  </span>
                  <p className="text-white font-bold text-sm">912 Technical Team — Nairobi HQ</p>
                </div>
              </div>

              {/* Secondary images */}
              <div className="relative rounded-xl overflow-hidden h-40 shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&q=80&w=600"
                  alt="IT consultation session"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-brand-blue/20" />
              </div>
              <div className="relative rounded-xl overflow-hidden h-40 shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=600"
                  alt="Data center operations"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-brand-orange/20" />
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="absolute -bottom-4 -right-4 bg-brand-orange text-white p-5 rounded-2xl shadow-2xl max-w-[10rem] text-center"
            >
              <div className="text-3xl font-heading font-black leading-none mb-1">10</div>
              <div className="text-[9px] font-black uppercase tracking-[0.2em] opacity-80">
                Countries Active
              </div>
            </motion.div>
          </motion.div>

          {/* Right — Copy + CTA */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-brand-orange uppercase tracking-[0.4em] text-xs font-black mb-4 block">
              Get in Touch
            </span>
            <h2
              className={`text-3xl md:text-4xl font-heading font-bold mb-4 leading-tight ${
                isDark ? 'text-white' : 'text-brand-dark'
              }`}
            >
              {title}
            </h2>
            <p
              className={`text-lg font-medium mb-4 ${
                isDark ? 'text-white/70' : 'text-brand-blue'
              }`}
            >
              {subtitle}
            </p>
            <p
              className={`text-base leading-relaxed mb-10 ${
                isDark ? 'text-white/50' : 'text-slate-500'
              }`}
            >
              {description}
            </p>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-6 mb-10">
              {expertStats.map((stat) => (
                <div key={stat.label} className="flex flex-col items-center text-center gap-2">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                      isDark ? 'bg-white/10' : 'bg-brand-blue/10'
                    }`}
                  >
                    <stat.icon
                      className={`w-5 h-5 ${
                        isDark ? 'text-brand-orange' : 'text-brand-blue'
                      }`}
                      aria-hidden="true"
                    />
                  </div>
                  <div>
                    <div
                      className={`text-sm font-bold ${
                        isDark ? 'text-white' : 'text-brand-dark'
                      }`}
                    >
                      {stat.label}
                    </div>
                    <div
                      className={`text-xs ${
                        isDark ? 'text-white/40' : 'text-slate-400'
                      }`}
                    >
                      {stat.sublabel}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 items-center">
              <Link to="/contact">
                <HoverBorderButton variant="orange">
                  <span className="flex items-center gap-2">
                    Book a Discovery Call
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                  </span>
                </HoverBorderButton>
              </Link>
              <Link
                to="/results"
                className={`text-xs font-black uppercase tracking-widest transition-colors flex items-center gap-2 group ${
                  isDark
                    ? 'text-white/50 hover:text-brand-orange'
                    : 'text-slate-400 hover:text-brand-blue'
                }`}
              >
                See our work first
                <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
