import React, { useEffect, useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';

/**
 * 912 operates in these countries across 4 regions.
 * Coordinates are approximate centroids for pin placement on the SVG viewBox.
 */
interface CountryPin {
  id: string;
  name: string;
  svgX: number;
  svgY: number;
  region: 'kenya' | 'east' | 'central' | 'west';
}

const operatingCountries: CountryPin[] = [
  { id: 'kenya',       name: 'Kenya',        svgX: 590, svgY: 458, region: 'kenya' },
  { id: 'tanzania',    name: 'Tanzania',      svgX: 570, svgY: 510, region: 'east' },
  { id: 'rwanda',      name: 'Rwanda',        svgX: 530, svgY: 470, region: 'east' },
  { id: 'burundi',     name: 'Burundi',       svgX: 525, svgY: 490, region: 'east' },
  { id: 'drc',         name: 'DRC',           svgX: 470, svgY: 480, region: 'central' },
  { id: 'angola',      name: 'Angola',        svgX: 410, svgY: 560, region: 'central' },
  { id: 'senegal',     name: 'Senegal',       svgX: 165, svgY: 315, region: 'west' },
  { id: 'mali',        name: 'Mali',          svgX: 240, svgY: 290, region: 'west' },
  { id: 'burkina-faso',name: 'Burkina Faso',  svgX: 270, svgY: 340, region: 'west' },
];

const regionOrder: Array<'kenya' | 'east' | 'central' | 'west'> = ['kenya', 'east', 'central', 'west'];
const regionLabels = ['Kenya Operations', 'East Africa Expansion', 'Central Africa Reach', 'West Africa Footprint'];

/**
 * Real country paths for the African continent.
 * Each country has an SVG path, whether it's a 912-operating country, and its id.
 */
const africaCountries: { id: string; d: string; operating: boolean }[] = [
  // ----- OPERATING COUNTRIES (highlighted) -----
  { id: 'kenya', operating: true, d: 'M577,430 L595,435 L610,450 L615,465 L610,480 L595,490 L580,485 L570,475 L565,460 L568,445 Z' },
  { id: 'tanzania', operating: true, d: 'M565,490 L580,485 L595,490 L600,505 L595,520 L580,535 L560,530 L545,515 L548,500 L555,493 Z' },
  { id: 'rwanda', operating: true, d: 'M530,458 L542,455 L548,463 L545,473 L535,476 L528,470 Z' },
  { id: 'burundi', operating: true, d: 'M528,476 L536,476 L542,483 L538,492 L530,494 L524,488 Z' },
  { id: 'drc', operating: true, d: 'M430,435 L465,425 L500,435 L525,450 L530,458 L528,476 L524,488 L530,510 L525,535 L510,550 L490,558 L465,555 L445,545 L430,530 L420,510 L415,490 L420,465 Z' },
  { id: 'angola', operating: true, d: 'M390,530 L420,510 L430,530 L445,545 L450,565 L445,585 L425,600 L400,605 L380,595 L365,575 L360,555 L370,540 Z' },
  { id: 'senegal', operating: true, d: 'M145,300 L170,295 L185,305 L188,320 L175,332 L158,335 L142,325 L138,312 Z' },
  { id: 'mali', operating: true, d: 'M210,240 L260,235 L285,255 L290,285 L280,310 L258,325 L235,330 L210,320 L195,300 L188,275 L195,255 Z' },
  { id: 'burkina-faso', operating: true, d: 'M258,325 L280,318 L298,325 L305,340 L295,355 L275,360 L258,352 L248,340 Z' },

  // ----- NON-OPERATING COUNTRIES (continent context) -----
  { id: 'morocco', operating: false, d: 'M260,100 L310,90 L340,105 L345,130 L330,155 L300,165 L270,160 L250,140 L245,120 Z' },
  { id: 'algeria', operating: false, d: 'M300,100 L345,95 L390,110 L410,150 L405,200 L380,240 L340,260 L300,250 L275,220 L265,180 L270,140 L285,115 Z' },
  { id: 'tunisia', operating: false, d: 'M345,90 L365,85 L378,100 L375,120 L360,125 L345,115 Z' },
  { id: 'libya', operating: false, d: 'M380,100 L440,95 L490,115 L505,155 L500,200 L480,235 L450,250 L415,245 L395,220 L385,185 L380,145 Z' },
  { id: 'egypt', operating: false, d: 'M495,105 L545,100 L575,120 L590,160 L585,200 L565,230 L535,245 L510,240 L495,215 L488,180 L485,145 Z' },
  { id: 'mauritania', operating: false, d: 'M165,215 L210,210 L240,225 L245,255 L230,275 L200,280 L175,270 L160,250 L155,235 Z' },
  { id: 'niger', operating: false, d: 'M295,240 L345,230 L385,245 L400,275 L390,305 L365,320 L335,325 L310,315 L295,295 L285,265 Z' },
  { id: 'chad', operating: false, d: 'M400,240 L440,235 L470,255 L480,290 L470,325 L445,345 L420,340 L400,320 L390,295 Z' },
  { id: 'sudan', operating: false, d: 'M490,240 L540,235 L570,260 L580,300 L570,340 L545,365 L520,370 L500,355 L485,325 L480,290 Z' },
  { id: 'south-sudan', operating: false, d: 'M500,365 L530,370 L548,390 L545,415 L530,430 L510,435 L490,425 L480,405 L485,385 Z' },
  { id: 'ethiopia', operating: false, d: 'M555,330 L595,325 L625,345 L635,375 L625,405 L600,420 L575,425 L555,410 L545,385 L548,355 Z' },
  { id: 'eritrea', operating: false, d: 'M570,290 L600,280 L620,295 L625,315 L610,325 L590,325 L575,315 Z' },
  { id: 'somalia', operating: false, d: 'M625,340 L660,320 L690,350 L700,390 L685,430 L650,450 L625,440 L615,415 L620,380 Z' },
  { id: 'nigeria', operating: false, d: 'M310,330 L340,325 L370,335 L385,360 L380,390 L360,405 L335,410 L310,400 L298,380 L298,355 Z' },
  { id: 'cameroon', operating: false, d: 'M370,350 L395,340 L415,355 L425,380 L420,405 L400,415 L380,410 L370,390 Z' },
  { id: 'gabon', operating: false, d: 'M372,430 L395,420 L410,435 L415,460 L400,475 L380,470 L370,455 Z' },
  { id: 'congo', operating: false, d: 'M395,420 L420,410 L435,425 L440,450 L430,465 L415,465 L402,455 Z' },
  { id: 'cote-divoire', operating: false, d: 'M230,340 L258,340 L270,355 L270,380 L255,395 L235,395 L220,380 L218,360 Z' },
  { id: 'ghana', operating: false, d: 'M270,350 L295,345 L310,360 L312,385 L300,400 L280,400 L268,388 L265,370 Z' },
  { id: 'guinea', operating: false, d: 'M175,318 L200,310 L225,318 L235,340 L225,355 L205,358 L185,348 L175,335 Z' },
  { id: 'sierra-leone', operating: false, d: 'M175,348 L192,355 L200,372 L190,385 L175,382 L168,368 Z' },
  { id: 'liberia', operating: false, d: 'M195,375 L215,370 L230,382 L228,398 L215,405 L200,400 L192,390 Z' },
  { id: 'zambia', operating: false, d: 'M475,530 L510,520 L535,535 L545,560 L535,580 L510,590 L485,585 L468,565 L463,545 Z' },
  { id: 'zimbabwe', operating: false, d: 'M510,590 L540,585 L555,600 L558,620 L545,635 L525,638 L510,628 L505,610 Z' },
  { id: 'mozambique', operating: false, d: 'M555,575 L580,565 L600,580 L610,610 L605,645 L590,665 L570,668 L555,650 L548,625 L545,600 Z' },
  { id: 'madagascar', operating: false, d: 'M630,570 L645,560 L660,575 L665,610 L655,645 L640,660 L625,650 L618,620 L620,590 Z' },
  { id: 'south-africa', operating: false, d: 'M440,640 L475,630 L510,635 L540,645 L560,665 L555,695 L535,715 L505,725 L470,720 L445,705 L430,685 L430,660 Z' },
  { id: 'namibia', operating: false, d: 'M385,605 L415,610 L435,630 L440,660 L430,685 L410,695 L388,690 L370,670 L365,645 L368,620 Z' },
  { id: 'botswana', operating: false, d: 'M435,630 L460,625 L478,640 L480,665 L468,685 L450,690 L435,680 L428,660 Z' },
  { id: 'malawi', operating: false, d: 'M545,530 L560,525 L570,540 L572,565 L562,580 L548,578 L540,560 Z' },
  { id: 'uganda', operating: false, d: 'M530,420 L555,415 L568,430 L565,450 L550,460 L535,458 L525,445 Z' },
  { id: 'central-african-republic', operating: false, d: 'M420,340 L460,340 L485,358 L490,385 L475,400 L450,405 L430,395 L415,375 L412,355 Z' },
  { id: 'togo', operating: false, d: 'M300,365 L310,360 L318,375 L315,395 L305,400 L296,390 Z' },
  { id: 'benin', operating: false, d: 'M310,355 L322,348 L332,360 L330,385 L322,400 L312,395 L308,378 Z' },
];

interface AfricaMapProps {
  /** 'hero' mode: dark bg, larger, auto-cycling regions. 'page' mode: for standalone sections. */
  variant?: 'hero' | 'page';
}

export function AfricaMap({ variant = 'hero' }: AfricaMapProps) {
  const [activeRegion, setActiveRegion] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveRegion((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const visiblePins = useMemo(() => {
    const regions = regionOrder.slice(0, activeRegion + 1);
    return operatingCountries.filter(p => regions.includes(p.region));
  }, [activeRegion]);

  const isHero = variant === 'hero';

  return (
    <div 
      className={`relative select-none ${isHero ? 'w-full aspect-square max-w-2xl mx-auto' : 'w-full max-w-4xl mx-auto'}`}
      role="img"
      aria-label={`Map of Africa showing 912's operating countries: ${operatingCountries.map(c => c.name).join(', ')}`}
    >
      {/* Subtle grid background for hero variant */}
      {isHero && (
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(27,73,194,0.05)_1px,transparent_1px)] bg-[size:20px_20px] [mask-image:radial-gradient(circle_at_center,black,transparent_80%)]" aria-hidden="true" />
      )}

      {/* Africa SVG Map with real country borders */}
      <svg
        viewBox="100 60 620 700"
        className={`w-full h-full ${isHero ? '' : 'drop-shadow-lg'}`}
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          {/* Glow filter for operating countries */}
          <filter id="orange-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feFlood floodColor="#FF7A00" floodOpacity="0.3" result="color" />
            <feComposite in="color" in2="blur" operator="in" result="glow" />
            <feMerge>
              <feMergeNode in="glow" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Render all countries */}
        {africaCountries.map((country) => (
          <motion.path
            key={country.id}
            d={country.d}
            className={
              country.operating
                ? 'fill-brand-orange/25 stroke-brand-orange/60'
                : isHero
                  ? 'fill-white/[0.03] stroke-white/[0.12]'
                  : 'fill-slate-200/60 stroke-slate-300/80'
            }
            strokeWidth={country.operating ? 1.2 : 0.6}
            strokeLinejoin="round"
            filter={country.operating ? 'url(#orange-glow)' : undefined}
            initial={isHero ? { opacity: 0 } : { opacity: 1 }}
            animate={{ opacity: 1 }}
            transition={isHero ? { duration: 1.5, delay: country.operating ? 0.5 : 0.2 } : undefined}
            whileHover={country.operating ? { fill: 'rgba(255, 122, 0, 0.4)' } : undefined}
          />
        ))}
      </svg>

      {/* Pinging Markers for operating countries */}
      <AnimatePresence>
        {visiblePins.map((pin) => {
          // Convert SVG coordinates to percentage of the viewBox for absolute positioning
          // viewBox: "100 60 620 700" → x: (svgX - 100) / 620, y: (svgY - 60) / 700
          const xPct = ((pin.svgX - 100) / 620) * 100;
          const yPct = ((pin.svgY - 60) / 700) * 100;

          return (
            <motion.div
              key={pin.id}
              className="absolute flex flex-col items-center pointer-events-none"
              style={{ left: `${xPct}%`, top: `${yPct}%` }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            >
              {/* Ping rings */}
              <div className="relative">
                <div className="w-3 h-3 bg-brand-orange rounded-full relative z-10 shadow-[0_0_8px_rgba(255,122,0,0.6)]" />
                {/* Pulse ring 1 */}
                <motion.div
                  className="absolute inset-0 border-2 border-brand-orange rounded-full"
                  animate={{ scale: [1, 2.5], opacity: [0.6, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeOut' }}
                  aria-hidden="true"
                />
                {/* Pulse ring 2 (staggered) */}
                <motion.div
                  className="absolute inset-0 border-2 border-brand-orange rounded-full"
                  animate={{ scale: [1, 2.5], opacity: [0.6, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeOut', delay: 0.6 }}
                  aria-hidden="true"
                />
              </div>
              {/* Country label */}
              <motion.span
                className={`mt-1 text-[9px] font-black uppercase tracking-tight whitespace-nowrap px-1.5 py-0.5 rounded-sm backdrop-blur-sm ${
                  isHero
                    ? 'text-white bg-brand-orange/80'
                    : 'text-white bg-brand-orange/90'
                }`}
                initial={{ y: 5, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.15 }}
              >
                {pin.name}
              </motion.span>
            </motion.div>
          );
        })}
      </AnimatePresence>

      {/* Region progress indicator (hero variant only) */}
      {isHero && (
        <div className="absolute bottom-4 left-4 flex flex-col gap-1.5">
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-orange">
            {regionLabels[activeRegion]}
          </span>
          <div className="flex gap-1" role="progressbar" aria-valuenow={activeRegion + 1} aria-valuemin={1} aria-valuemax={4} aria-label="Region expansion progress">
            {[0, 1, 2, 3].map((i) => (
              <div
                key={i}
                className={`h-1 transition-all duration-500 rounded-full ${
                  activeRegion === i ? 'w-8 bg-brand-orange' : 'w-2 bg-white/20'
                }`}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
