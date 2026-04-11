import React, { useEffect, useState, useMemo, useCallback } from 'react';
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from 'react-simple-maps';
import { motion, AnimatePresence } from 'motion/react';

// ── TopoJSON source ──────────────────────────────────────────────────────────
const GEO_URL = '/africa-110m.json';

// ── 912 operating countries ──────────────────────────────────────────────────
// ISO 3166-1 numeric IDs from the TopoJSON + approximate centroids for markers
interface OperatingCountry {
  numericId: string;
  name: string;
  displayName: string; // potentially shortened for label
  coords: [number, number]; // [lon, lat]
  labelOffset: { dx: number; dy: number };
  labelAnchor: 'start' | 'middle' | 'end';
}

const OPERATING_COUNTRIES: OperatingCountry[] = [
  {
    numericId: '404',
    name: 'Kenya',
    displayName: 'Kenya',
    coords: [37.9, 0.0],
    labelOffset: { dx: 12, dy: 4 },
    labelAnchor: 'start',
  },
  {
    numericId: '646',
    name: 'Rwanda',
    displayName: 'Rwanda',
    coords: [29.8, -2.0],
    labelOffset: { dx: -14, dy: -6 },
    labelAnchor: 'end',
  },
  {
    numericId: '108',
    name: 'Burundi',
    displayName: 'Burundi',
    coords: [29.9, -3.4],
    labelOffset: { dx: -14, dy: 8 },
    labelAnchor: 'end',
  },
  {
    numericId: '180',
    name: 'Democratic Republic of the Congo',
    displayName: 'DR Congo',
    coords: [23.6, -2.9],
    labelOffset: { dx: 0, dy: 6 },
    labelAnchor: 'middle',
  },
  {
    numericId: '024',
    name: 'Angola',
    displayName: 'Angola',
    coords: [17.5, -12.3],
    labelOffset: { dx: 0, dy: 6 },
    labelAnchor: 'middle',
  },
  {
    numericId: '686',
    name: 'Senegal',
    displayName: 'Senegal',
    coords: [-14.4, 14.5],
    labelOffset: { dx: -14, dy: 4 },
    labelAnchor: 'end',
  },
  {
    numericId: '466',
    name: 'Mali',
    displayName: 'Mali',
    coords: [-2.0, 17.0],
    labelOffset: { dx: 0, dy: 6 },
    labelAnchor: 'middle',
  },
  {
    numericId: '854',
    name: 'Burkina Faso',
    displayName: 'Burkina Faso',
    coords: [-1.7, 12.3],
    labelOffset: { dx: 14, dy: 4 },
    labelAnchor: 'start',
  },
  {
    numericId: '288',
    name: 'Ghana',
    displayName: 'Ghana',
    coords: [-1.0, 7.9],
    labelOffset: { dx: -14, dy: 4 },
    labelAnchor: 'end',
  },
  {
    numericId: '204',
    name: 'Benin',
    displayName: 'Benin',
    coords: [2.3, 9.3],
    labelOffset: { dx: 12, dy: 4 },
    labelAnchor: 'start',
  },
];

const OPERATING_IDS = new Set(OPERATING_COUNTRIES.map((c) => c.numericId));

// Complete list of African country ISO 3166-1 numeric codes
const AFRICAN_COUNTRY_IDS = new Set([
  '012', '024', '072', '084', '108', '120', '132', '140', '148', '174',
  '178', '180', '204', '226', '231', '232', '262', '266', '270', '288',
  '324', '384', '404', '426', '430', '434', '450', '454', '466', '478',
  '480', '504', '508', '516', '562', '566', '624', '646', '678', '686',
  '690', '694', '706', '710', '716', '728', '729', '732', '748', '768',
  '788', '800', '834', '854', '894',
]);

// ── Animation timing ─────────────────────────────────────────────────────────
const SINGLE_COUNTRY_DURATION = 2000; // 2s per country
const ALL_COUNTRIES_DURATION = 3000;  // 3s for the "all at once" phase
const TOTAL_STEPS = OPERATING_COUNTRIES.length + 1; // N individual + 1 "all" phase

// ── Component ────────────────────────────────────────────────────────────────
interface AfricaMapProps {
  variant?: 'hero' | 'page';
}

export function AfricaMap({ variant = 'hero' }: AfricaMapProps) {
  const [step, setStep] = useState(0);
  const isHero = variant === 'hero';

  // Animation cycle: 0..N-1 = individual countries, N = all at once
  useEffect(() => {
    const isAllPhase = step === OPERATING_COUNTRIES.length;
    const duration = isAllPhase ? ALL_COUNTRIES_DURATION : SINGLE_COUNTRY_DURATION;

    const timer = setTimeout(() => {
      setStep((prev) => (prev >= OPERATING_COUNTRIES.length ? 0 : prev + 1));
    }, duration);

    return () => clearTimeout(timer);
  }, [step]);

  // Determine which countries are currently active
  const activeCountryIds = useMemo(() => {
    if (step === OPERATING_COUNTRIES.length) {
      // All phase
      return new Set(OPERATING_COUNTRIES.map((c) => c.numericId));
    }
    // Single country phase
    return new Set([OPERATING_COUNTRIES[step].numericId]);
  }, [step]);

  const isAllPhase = step === OPERATING_COUNTRIES.length;

  // Get the current active country for marker display (single mode)
  const activeCountry = isAllPhase ? null : OPERATING_COUNTRIES[step];

  const getCountryStyle = useCallback(
    (geoId: string) => {
      const isOperating = OPERATING_IDS.has(geoId);
      const isActive = activeCountryIds.has(geoId);

      if (isActive) {
        return {
          default: {
            fill: 'rgba(255, 122, 0, 0.45)',
            stroke: '#FF7A00',
            strokeWidth: 1.2,
            transition: 'all 0.6s ease',
            outline: 'none',
          },
          hover: {
            fill: 'rgba(255, 122, 0, 0.6)',
            stroke: '#FF7A00',
            strokeWidth: 1.5,
            outline: 'none',
          },
          pressed: {
            fill: 'rgba(255, 122, 0, 0.6)',
            stroke: '#FF7A00',
            strokeWidth: 1.5,
            outline: 'none',
          },
        };
      }

      if (isOperating) {
        return {
          default: {
            fill: isHero ? 'rgba(255, 122, 0, 0.2)' : 'rgba(255, 122, 0, 0.08)',
            stroke: isHero ? 'rgba(255, 122, 0, 0.5)' : 'rgba(255, 122, 0, 0.2)',
            strokeWidth: 0.8,
            transition: 'all 0.6s ease',
            outline: 'none',
          },
          hover: {
            fill: 'rgba(255, 122, 0, 0.25)',
            stroke: '#FF7A00',
            strokeWidth: 1,
            outline: 'none',
          },
          pressed: {
            fill: 'rgba(255, 122, 0, 0.25)',
            stroke: '#FF7A00',
            strokeWidth: 1,
            outline: 'none',
          },
        };
      }

      // Non-operating African countries
      return {
        default: {
          fill: isHero ? 'rgba(255, 255, 255, 0.08)' : 'rgba(148, 163, 184, 0.15)',
          stroke: isHero ? 'rgba(255, 255, 255, 0.25)' : 'rgba(148, 163, 184, 0.3)',
          strokeWidth: 0.5,
          transition: 'all 0.6s ease',
          outline: 'none',
        },
        hover: {
          fill: isHero ? 'rgba(255, 255, 255, 0.08)' : 'rgba(148, 163, 184, 0.2)',
          stroke: isHero ? 'rgba(255, 255, 255, 0.2)' : 'rgba(148, 163, 184, 0.4)',
          strokeWidth: 0.5,
          outline: 'none',
        },
        pressed: {
          fill: isHero ? 'rgba(255, 255, 255, 0.08)' : 'rgba(148, 163, 184, 0.2)',
          stroke: isHero ? 'rgba(255, 255, 255, 0.2)' : 'rgba(148, 163, 184, 0.4)',
          strokeWidth: 0.5,
          outline: 'none',
        },
      };
    },
    [activeCountryIds, isHero]
  );

  // Status label
  const statusLabel = isAllPhase
    ? '10 Countries. One Standard.'
    : `${OPERATING_COUNTRIES[step]?.displayName ?? ''} — Active`;

  return (
    <div
      className={`relative select-none pointer-events-none ${
        isHero
          ? 'w-full aspect-square max-w-2xl mx-auto'
          : 'w-full max-w-4xl mx-auto'
      }`}
      role="img"
      aria-label={`Map of Africa showing 912's operating countries: ${OPERATING_COUNTRIES.map(
        (c) => c.displayName
      ).join(', ')}`}
    >
      {/* Subtle grid bg for hero */}
      {isHero && (
        <div
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(27,73,194,0.05)_1px,transparent_1px)] bg-[size:20px_20px] [mask-image:radial-gradient(circle_at_center,black,transparent_80%)]"
          aria-hidden="true"
        />
      )}

      <ComposableMap
        projection="geoMercator"
        projectionConfig={{
          center: [20, 3],
          scale: isHero ? 380 : 450,
        }}
        width={800}
        height={800}
        style={{ width: '100%', height: '100%' }}
      >
        <Geographies geography={GEO_URL}>
          {({ geographies }) =>
            geographies
              .filter((geo) => AFRICAN_COUNTRY_IDS.has(geo.id))
              .map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  style={getCountryStyle(geo.id)}
                  tabIndex={-1}
                />
              ))
          }
        </Geographies>

        {/* Pulsing glow overlays for active countries — rendered as duplicate paths with animation */}
        <Geographies geography={GEO_URL}>
          {({ geographies }) =>
            geographies
              .filter((geo) => activeCountryIds.has(geo.id))
              .map((geo) => (
                <Geography
                  key={`glow-${geo.rsmKey}`}
                  geography={geo}
                  style={{
                    default: {
                      fill: 'rgba(255, 122, 0, 0.2)',
                      stroke: 'none',
                      outline: 'none',
                      animation: 'countryPulse 1.8s ease-in-out infinite',
                    },
                    hover: {
                      fill: 'rgba(255, 122, 0, 0.2)',
                      stroke: 'none',
                      outline: 'none',
                      animation: 'countryPulse 1.8s ease-in-out infinite',
                    },
                    pressed: {
                      fill: 'rgba(255, 122, 0, 0.2)',
                      stroke: 'none',
                      outline: 'none',
                      animation: 'countryPulse 1.8s ease-in-out infinite',
                    },
                  }}
                  tabIndex={-1}
                />
              ))
          }
        </Geographies>

        {/* Markers — show only the active country(ies) */}
        <AnimatePresence mode="wait">
          {isAllPhase ? (
            // All-phase: small dots on every country, no labels
            OPERATING_COUNTRIES.map((country) => (
              <Marker key={`all-${country.numericId}`} coordinates={country.coords}>
                <motion.g
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                  transition={{ type: 'spring', stiffness: 260, damping: 20, delay: Math.random() * 0.3 }}
                >
                  <circle r={3} fill="#FF7A00" />
                  <circle r={3} fill="#FF7A00" opacity={0.5}>
                    <animate
                      attributeName="r"
                      values="3;8;3"
                      dur="2s"
                      repeatCount="indefinite"
                    />
                    <animate
                      attributeName="opacity"
                      values="0.5;0;0.5"
                      dur="2s"
                      repeatCount="indefinite"
                    />
                  </circle>
                </motion.g>
              </Marker>
            ))
          ) : activeCountry ? (
            // Single-country phase: pin + label
            <Marker key={`single-${activeCountry.numericId}`} coordinates={activeCountry.coords}>
              <motion.g
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                transition={{ type: 'spring', stiffness: 260, damping: 20 }}
              >
                {/* Ping rings */}
                <circle r={4} fill="#FF7A00" opacity={0.6}>
                  <animate
                    attributeName="r"
                    values="4;14;4"
                    dur="2s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="opacity"
                    values="0.6;0;0.6"
                    dur="2s"
                    repeatCount="indefinite"
                  />
                </circle>
                <circle r={4} fill="#FF7A00" opacity={0.4}>
                  <animate
                    attributeName="r"
                    values="4;18;4"
                    dur="2s"
                    begin="0.5s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="opacity"
                    values="0.4;0;0.4"
                    dur="2s"
                    begin="0.5s"
                    repeatCount="indefinite"
                  />
                </circle>
                {/* Center dot */}
                <circle
                  r={4}
                  fill="#FF7A00"
                  style={{ filter: 'drop-shadow(0 0 6px rgba(255, 122, 0, 0.8))' }}
                />
                <circle r={1.5} fill="#FFFFFF" />
                {/* Label */}
                <text
                  x={activeCountry.labelOffset.dx}
                  y={activeCountry.labelOffset.dy}
                  textAnchor={activeCountry.labelAnchor}
                  style={{
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '8px',
                    fontWeight: 800,
                    fill: isHero ? '#FFFFFF' : '#0A0A1A',
                    textTransform: 'uppercase' as const,
                    letterSpacing: '0.05em',
                    paintOrder: 'stroke',
                    stroke: isHero ? 'rgba(10,10,26,0.6)' : 'rgba(255,255,255,0.8)',
                    strokeWidth: 2.5,
                    strokeLinejoin: 'round' as const,
                  }}
                >
                  {activeCountry.displayName}
                </text>
              </motion.g>
            </Marker>
          ) : null}
        </AnimatePresence>
      </ComposableMap>

      {/* Status indicator */}
      {isHero && (
        <div className="absolute bottom-4 left-4 flex flex-col gap-1.5">
          <AnimatePresence mode="wait">
            <motion.span
              key={step}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.3 }}
              className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-orange"
            >
              {statusLabel}
            </motion.span>
          </AnimatePresence>
          <div
            className="flex gap-1"
            role="progressbar"
            aria-valuenow={step + 1}
            aria-valuemin={1}
            aria-valuemax={TOTAL_STEPS}
            aria-label="Country highlight progress"
          >
            {Array.from({ length: TOTAL_STEPS }).map((_, i) => (
              <div
                key={i}
                className={`h-1 transition-all duration-500 rounded-full ${
                  step === i
                    ? 'w-6 bg-brand-orange'
                    : i < step
                    ? 'w-2 bg-brand-orange/40'
                    : 'w-2 bg-white/20'
                }`}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
