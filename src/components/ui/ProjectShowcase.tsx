import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ProjectShowcaseItem {
  id: string;
  title: string;
  description: string;
  image: string;
  href: string;
  category?: string;
  className?: string; // Optional custom styling
}

interface ProjectShowcaseProps {
  items: ProjectShowcaseItem[];
  title?: string;
  theme?: 'light' | 'dark';
}

export function ProjectShowcase({
  items,
  title = 'Explore Specific Solutions',
  theme = 'light',
}: ProjectShowcaseProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const isDark = theme === 'dark';

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  return (
    <section className={cn('py-24', isDark ? 'bg-brand-dark' : 'bg-white')}>
      <div className="container mx-auto px-4 max-w-6xl">
        {title && (
          <h2
            className={cn(
              'mb-12 text-3xl font-heading font-bold uppercase tracking-tight',
              isDark ? 'text-white' : 'text-brand-dark'
            )}
          >
            {title}
          </h2>
        )}

        <div className="relative" ref={containerRef} onMouseLeave={() => setHoveredIndex(null)}>
          <div className="group/list relative z-10 w-full flex flex-col border-b border-white/10 dark:border-white/10">
            {items.map((item, index) => {
              const isHovered = hoveredIndex === index;

              return (
                <Link
                  key={item.id}
                  to={item.href}
                  onMouseEnter={() => setHoveredIndex(index)}
                  className={cn(
                    'group/item relative flex flex-col md:flex-row md:items-center min-h-[44px] justify-between border-t py-8 px-4 transition-all duration-500',
                    isDark ? 'border-white/10 hover:bg-white/5' : 'border-slate-200 hover:bg-slate-50',
                    isHovered ? 'z-20' : 'z-10'
                  )}
                >
                  <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-16 relative z-20">
                    <div className="flex flex-col">
                      {item.category && (
                        <span
                          className={cn(
                            'text-[10px] font-black uppercase tracking-[0.2em] mb-2 transition-colors',
                            isHovered ? 'text-brand-orange' : (isDark ? 'text-white/40' : 'text-slate-400')
                          )}
                        >
                          {item.category}
                        </span>
                      )}
                      <h3
                        className={cn(
                          'text-2xl md:text-4xl font-heading font-bold transition-all duration-500 group-hover/item:text-brand-blue',
                          isDark ? 'text-white' : 'text-brand-dark',
                          item.className
                        )}
                      >
                        {item.title}
                      </h3>
                    </div>
                  </div>

                  <div className="flex items-center gap-8 mt-4 md:mt-0 relative z-20">
                    <p
                      className={cn(
                        'hidden md:block max-w-sm text-sm transition-opacity duration-300',
                        isHovered ? 'opacity-100' : 'opacity-0',
                        isDark ? 'text-white/60' : 'text-slate-500'
                      )}
                    >
                      {item.description}
                    </p>
                    <div
                      className={cn(
                        'flex h-12 w-12 shrink-0 items-center justify-center rounded-full border transition-all duration-500',
                        isHovered 
                          ? 'border-brand-orange bg-brand-orange text-white rotate-0' 
                          : cn('-rotate-45', isDark ? 'border-white/20 text-white/50' : 'border-slate-300 text-slate-400')
                      )}
                      aria-hidden="true"
                    >
                      <ArrowRight className="h-5 w-5" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Floating Image Preview */}
          <AnimatePresence>
            {hoveredIndex !== null && items[hoveredIndex] && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  x: mousePosition.x + 30, // offset right to not cover text
                  y: mousePosition.y + 30, // offset bottom to not cover text
                }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ type: 'spring', damping: 20, stiffness: 150 }}
                className="pointer-events-none absolute left-0 top-0 z-50 hidden lg:block overflow-hidden rounded-xl shadow-2xl"
                style={{ width: '320px', height: '200px' }}
              >
                <div className="absolute inset-0 bg-brand-dark/20 z-10 mix-blend-overlay" />
                <img
                  src={items[hoveredIndex].image}
                  alt={items[hoveredIndex].title}
                  className="h-full w-full object-cover"
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
