import React from 'react';
import { InfiniteSlider } from '@/components/ui/InfiniteSlider';
import { cn } from '@/lib/utils';

// Logo set — images in public/logos/ for those provided, text fallbacks for others
const logos = [
  { src: '/logos/kam.png', alt: 'Kenya Association of Manufacturers', width: 120 },
  { src: '/logos/magnate.png', alt: 'Magnate Ventures', width: 140 },
  { src: '/logos/capitol.png', alt: 'Capitol Printers', width: 140 },
  { src: '/logos/insignia.png', alt: 'Insignia Group', width: 120 },
  // Text-only placeholders for logos not yet provided as images
  { text: 'TRM', alt: 'TRM' },
  { text: 'MEDS', alt: 'MEDS' },
  { text: 'Fresha', alt: 'Fresha' },
  { text: 'Tononoka', alt: 'Tononoka' },
];

interface LogoCloudProps {
  className?: string;
  variant?: 'light' | 'dark';
}

export function LogoCloud({ className, variant = 'dark' }: LogoCloudProps) {
  const isLight = variant === 'light';

  return (
    <section
      aria-label="Trusted partners"
      className={cn(
        'py-12 border-y',
        isLight
          ? 'bg-white border-slate-200'
          : 'bg-[#0A0A1A] border-white/10',
        className
      )}
    >
      <div className="container mx-auto px-4 mb-6">
        <p
          className={cn(
            'text-xs font-black uppercase tracking-[0.3em] text-center',
            isLight ? 'text-slate-400' : 'text-white/30'
          )}
        >
          Trusted by 100+ organisations across Africa
        </p>
      </div>

      <div
        className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
      >
        <InfiniteSlider gap={56} speed={60} speedOnHover={20}>
          {logos.map((logo) =>
            'src' in logo && logo.src ? (
              <img
                key={logo.alt}
                src={logo.src}
                alt={logo.alt}
                width={logo.width || 120}
                height={40}
                loading="lazy"
                className={cn(
                  'pointer-events-none h-8 md:h-10 w-auto select-none object-contain',
                  isLight
                    ? 'opacity-40 hover:opacity-80 grayscale hover:grayscale-0'
                    : 'opacity-50 hover:opacity-90 brightness-0 invert',
                  'transition-all duration-300'
                )}
              />
            ) : (
              <span
                key={logo.alt}
                className={cn(
                  'pointer-events-none select-none font-heading font-bold text-xl md:text-2xl tracking-wider whitespace-nowrap',
                  isLight
                    ? 'text-slate-300'
                    : 'text-white/20'
                )}
              >
                {'text' in logo ? logo.text : logo.alt}
              </span>
            )
          )}
        </InfiniteSlider>
      </div>
    </section>
  );
}
