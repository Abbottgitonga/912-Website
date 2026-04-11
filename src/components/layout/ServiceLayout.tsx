import React from 'react';
import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { HoverBorderButton } from '@/components/ui/HoverBorderButton';
import { Link } from 'react-router-dom';
import { PartnershipTicker } from '@/components/ui/PartnershipTicker';
import { LogoCloud } from '@/components/home/LogoCloud';
import { cn } from '@/lib/utils';

interface ServiceLayoutProps {
  hero: {
    title: string;
    subtitle: string;
    description: string;
    image?: string;
    imageAlt?: string;
    breadcrumbs: { label: string; href?: string }[];
    animation?: React.ReactNode;
  };
  capabilities: {
    title: string;
    items: { title: string; description: string; points: string[] }[];
  };
  challenges: {
    title: string;
    items: string[];
  };
  process: {
    title: string;
    description: string;
    steps: { title: string; description: string }[];
  };
  advantages: {
    title: string;
    items: { title: string; description: string }[];
  };
  outcomes: {
    title: string;
    subtitle: string;
    stats: { value: string; label: string }[];
  };
  children?: React.ReactNode;
  theme?: 'light' | 'dark';
}

/* Animated counter for stats */
function AnimatedStat({ value, label, delay }: { value: string; label: string; delay: number; key?: React.Key }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true }}
      className="text-center"
    >
      <motion.div
        initial={{ y: 20 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.8, delay: delay + 0.1 }}
        viewport={{ once: true }}
        className="text-5xl md:text-6xl font-heading font-bold mb-2"
      >
        {value}
      </motion.div>
      <div className="text-sm text-white/70 uppercase tracking-wider font-bold">{label}</div>
    </motion.div>
  );
}

/* Animated bar chart decoration */
function AnimatedBarChart() {
  const bars = [
    { height: 40, delay: 0 },
    { height: 65, delay: 0.15 },
    { height: 50, delay: 0.3 },
    { height: 85, delay: 0.45 },
    { height: 70, delay: 0.6 },
    { height: 95, delay: 0.75 },
  ];

  return (
    <div className="flex items-end justify-center gap-3 h-32">
      {bars.map((bar, i) => (
        <motion.div
          key={i}
          initial={{ height: 0, opacity: 0 }}
          whileInView={{ height: bar.height, opacity: 1 }}
          transition={{
            duration: 0.8,
            delay: bar.delay,
            ease: [0.16, 1, 0.3, 1],
          }}
          viewport={{ once: true }}
          className={cn(
            "w-6 rounded-t-sm",
            i % 2 === 0 ? "bg-brand-blue/60" : "bg-brand-orange/60"
          )}
        />
      ))}
    </div>
  );
}

/* Animated data dots flowing */
function AnimatedDataFlow() {
  return (
    <div className="relative h-24 w-full overflow-hidden">
      <svg viewBox="0 0 400 100" className="w-full h-full" preserveAspectRatio="none">
        <motion.path
          d="M0,80 Q100,20 200,50 T400,30"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="text-brand-blue/30"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          transition={{ duration: 2, ease: 'easeInOut' }}
          viewport={{ once: true }}
        />
        {[0, 1, 2].map((i) => (
          <motion.circle
            key={i}
            r="5"
            fill="currentColor"
            className="text-brand-orange"
            initial={{ offsetDistance: '0%' }}
            whileInView={{ offsetDistance: '100%' }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 1,
              ease: 'linear',
            }}
            viewport={{ once: true }}
            style={{
              offsetPath: "path('M0,80 Q100,20 200,50 T400,30')",
            }}
          />
        ))}
      </svg>
    </div>
  );
}

export function ServiceLayout({
  hero,
  capabilities,
  challenges,
  process,
  advantages,
  outcomes,
  children,
  theme = 'light'
}: ServiceLayoutProps) {
  return (
    <div className={cn("pt-0", theme === 'dark' ? "bg-brand-dark text-white" : "bg-white text-brand-dark")}>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-brand-dark">
        {/* Professional Tech Background Elements */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          {/* Base Background */}
          <div className="absolute inset-0 transition-colors duration-1000 bg-brand-dark" />
          
          {/* Subtle Grid overlay */}
          <div 
            className="absolute inset-0 opacity-[0.03]" 
            style={{ 
              backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
              backgroundSize: '4rem 4rem'
            }} 
          />
          
          {/* Elegant atmospheric glows */}
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-blue/10 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-orange/5 rounded-full blur-[150px] translate-y-1/3 -translate-x-1/3" />

          {/* Original Image integration if provided, heavily overlayed */}
          {hero.image && (
            <div className="absolute inset-0 z-0">
              <img 
                src={hero.image} 
                alt={hero.imageAlt || `${hero.title} - 912 Enterprise IT Infrastructure Africa`}
                fetchPriority="high"
                loading="eager"
                className="w-full h-full object-cover opacity-20 grayscale mix-blend-overlay"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/95 to-brand-dark/80" />
            </div>
          )}
        </div>

        <div className="container mx-auto px-4 relative z-10 pt-32 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7">
              <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-blue/60 mb-8">
                {hero.breadcrumbs.map((bc, i) => (
                  <React.Fragment key={i}>
                    {bc.href ? (
                      <a href={bc.href} className="hover:text-brand-blue transition-colors">{bc.label}</a>
                    ) : (
                      <span className="text-white">{bc.label}</span>
                    )}
                    {i < hero.breadcrumbs.length - 1 && <span className="opacity-30">/</span>}
                  </React.Fragment>
                ))}
              </nav>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                <h1 className="text-5xl sm:text-6xl lg:text-[4.5rem] xl:text-[5.5rem] font-heading font-black mb-8 leading-[0.9] tracking-tighter uppercase text-white break-words hyphens-auto">
                  {hero.title.split(' ').map((word, i) => {
                    const isOrange = word === 'Infrastructure' || word === 'Reporting' || word === 'Apps' || word === 'Software' || word === 'Custom';
                    const isBlue = word === 'Security' || word === 'Intelligence' || word === 'Recovery' || word === 'Cloud';
                    return (
                      <span key={i} className="block">
                        {isBlue ? (
                          <span className="text-brand-blue">{word}</span>
                        ) : isOrange ? (
                          <span className="text-brand-orange italic">{word}</span>
                        ) : (
                          <span className="text-white">{word}</span>
                        )}
                      </span>
                    );
                  })}
                </h1>
                
                <div className="flex items-center gap-4 mb-8">
                  <div className="h-[2px] w-12 bg-brand-orange" />
                  <p className="text-xl font-bold tracking-tight text-brand-blue uppercase">
                    {hero.subtitle}
                  </p>
                </div>

                <p className="text-xl mb-12 max-w-xl leading-relaxed font-medium text-white/60">
                  {hero.description}
                </p>

                <div className="flex flex-wrap gap-6 items-center">
                  <Link to="/contact">
                    <HoverBorderButton variant="blue" className="px-10 py-4 text-xl font-bold">
                      Get Started
                    </HoverBorderButton>
                  </Link>
                  {hero.animation && (
                    <div className="hidden md:block">
                      {hero.animation}
                    </div>
                  )}
                </div>
              </motion.div>
            </div>

            <div className="lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className={cn(
                  "p-10 rounded-3xl shadow-2xl relative overflow-hidden group",
                  theme === 'dark' ? "bg-white/5 backdrop-blur-xl border border-white/10" : "bg-white border border-slate-100"
                )}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-orange/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                
                <h3 className={cn(
                  "text-3xl font-heading font-bold mb-8 relative z-10",
                  theme === 'dark' ? "text-white" : "text-brand-dark"
                )}>
                  Request <span className="text-brand-orange">Consultation</span>
                </h3>
                
                <form className="space-y-5 relative z-10">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="svc-first-name" className="sr-only">First Name</label>
                      <input 
                        id="svc-first-name"
                        name="firstName"
                        type="text" 
                        autoComplete="given-name"
                        required
                        placeholder="First Name" 
                        className={cn(
                          "w-full p-4 rounded-xl border outline-none transition-all",
                          theme === 'dark' 
                            ? "bg-white/5 border-white/10 focus:border-brand-blue text-white placeholder:text-white/30" 
                            : "bg-slate-50 border-slate-200 focus:border-brand-blue text-brand-dark"
                        )} 
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="svc-last-name" className="sr-only">Last Name</label>
                      <input 
                        id="svc-last-name"
                        name="lastName"
                        type="text" 
                        autoComplete="family-name"
                        required
                        placeholder="Last Name" 
                        className={cn(
                          "w-full p-4 rounded-xl border outline-none transition-all",
                          theme === 'dark' 
                            ? "bg-white/5 border-white/10 focus:border-brand-blue text-white placeholder:text-white/30" 
                            : "bg-slate-50 border-slate-200 focus:border-brand-blue text-brand-dark"
                        )} 
                      />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="svc-email" className="sr-only">Work Email</label>
                    <input 
                      id="svc-email"
                      name="email"
                      type="email" 
                      autoComplete="email"
                      required
                      placeholder="Work Email" 
                      className={cn(
                        "w-full p-4 rounded-xl border outline-none transition-all",
                        theme === 'dark' 
                          ? "bg-white/5 border-white/10 focus:border-brand-blue text-white placeholder:text-white/30" 
                          : "bg-slate-50 border-slate-200 focus:border-brand-blue text-brand-dark"
                      )} 
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="svc-service" className="sr-only">Select Service</label>
                    <select 
                      id="svc-service"
                      name="service"
                      required
                      className={cn(
                        "w-full p-4 rounded-xl border outline-none transition-all appearance-none",
                        theme === 'dark' 
                          ? "bg-white/5 border-white/10 focus:border-brand-blue text-white" 
                          : "bg-slate-50 border-slate-200 focus:border-brand-blue text-brand-dark"
                      )}
                    >
                      <option value="">Select Service</option>
                      <option value="security">Physical Security</option>
                      <option value="cloud">Cloud & IT</option>
                      <option value="data">Data Intelligence</option>
                      <option value="software">Software Dev</option>
                    </select>
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="svc-needs" className="sr-only">Describe your needs</label>
                    <textarea 
                      id="svc-needs"
                      name="needs"
                      placeholder="Briefly describe your needs..." 
                      rows={3} 
                      className={cn(
                        "w-full p-4 rounded-xl border outline-none transition-all resize-none",
                        theme === 'dark' 
                          ? "bg-white/5 border-white/10 focus:border-brand-blue text-white placeholder:text-white/30" 
                          : "bg-slate-50 border-slate-200 focus:border-brand-blue text-brand-dark"
                      )} 
                    />
                  </div>
                  <Button type="submit" className="w-full bg-brand-orange hover:bg-brand-orange/90 text-white rounded-xl py-8 text-xl font-bold transition-transform active:scale-[0.98]">
                    Send Request
                  </Button>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Stand-in Logos */}
      <LogoCloud variant={theme} />

      {/* Global Partnership Ticker */}
      <PartnershipTicker />

      {/* Explore Specific Solutions (Children) */}
      {children}

      {/* Capabilities Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-4xl font-heading font-bold text-brand-dark mb-4"
            >
              {capabilities.title}
            </motion.h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.items.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 border border-gray-100 shadow-sm hover:shadow-md transition-all"
              >
                <h3 className="text-xl font-heading font-bold text-brand-dark mb-4">{item.title}</h3>
                <ul className="space-y-3">
                  {item.points.map((point, j) => (
                    <motion.li
                      key={j}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: i * 0.1 + j * 0.05 }}
                      viewport={{ once: true }}
                      className="flex gap-3 text-sm text-gray-600"
                    >
                      <CheckCircle2 className="w-5 h-5 text-brand-blue shrink-0" aria-hidden="true" />
                      {point}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-4xl font-heading font-bold text-brand-dark mb-6"
            >
              {challenges.title}
            </motion.h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {challenges.items.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex gap-4 items-start p-6 bg-gray-50 border-l-4 border-brand-orange"
              >
                <CheckCircle2 className="w-6 h-6 text-brand-orange shrink-0" aria-hidden="true" />
                <p className="text-gray-700 font-medium">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-brand-dark text-white relative overflow-hidden">
        {/* Animated background decoration */}
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute top-1/4 left-0 w-full">
            <AnimatedDataFlow />
          </div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-4xl font-heading font-bold mb-4"
            >
              {process.title}
            </motion.h2>
            <p className="text-white/60">{process.description}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {process.steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 0.05 }}
                  transition={{ duration: 0.8, delay: i * 0.2 }}
                  viewport={{ once: true }}
                  className="text-8xl font-heading font-black absolute -top-10 -left-4 text-white"
                >
                  0{i + 1}
                </motion.div>
                <h3 className="text-xl font-heading font-bold mb-4 relative z-10">{step.title}</h3>
                <p className="text-white/50 leading-relaxed">{step.description}</p>
                {/* Connecting line */}
                {i < process.steps.length - 1 && (
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: i * 0.3 + 0.5 }}
                    viewport={{ once: true }}
                    className="hidden md:block absolute top-8 -right-6 w-12 h-[2px] bg-brand-orange/30 origin-left"
                  />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-4xl font-heading font-bold text-brand-dark mb-4"
            >
              {advantages.title}
            </motion.h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {advantages.items.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                viewport={{ once: true }}
                className="p-8 bg-gray-50 border border-gray-100 hover:border-brand-blue transition-colors group"
              >
                <h3 className="text-xl font-heading font-bold text-brand-dark mb-4 group-hover:text-brand-blue transition-colors">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes Section — with animated stats */}
      <section className="py-24 bg-brand-blue text-white relative overflow-hidden">
        {/* Decorative background animation */}
        <div className="absolute inset-0 z-0">
          <div className="absolute bottom-0 left-0 right-0 opacity-30">
            <AnimatedBarChart />
          </div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-heading font-bold mb-4">{outcomes.title}</h2>
              <p className="text-xl text-white/80 mb-8">{outcomes.subtitle}</p>
              <Link to="/contact">
                <HoverBorderButton variant="orange" containerClassName="border-white/30">
                  <span className="flex items-center gap-2">
                    Speak to Our Experts
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </HoverBorderButton>
              </Link>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {outcomes.stats.map((stat, i) => (
                <AnimatedStat key={i} value={stat.value} label={stat.label} delay={i * 0.2} />
              ))}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
