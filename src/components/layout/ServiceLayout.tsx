import React from 'react';
import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ServiceLayoutProps {
  hero: {
    title: string;
    subtitle: string;
    description: string;
    image?: string;
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
      <section className={cn(
        "relative min-h-screen flex items-center overflow-hidden",
        theme === 'dark' ? "bg-brand-dark" : "bg-slate-50"
      )}>
        {/* Background Elements */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          {hero.image && (
            <img 
              src={hero.image} 
              alt={hero.title}
              className="w-full h-full object-cover opacity-10 grayscale"
            />
          )}
          <div className={cn(
            "absolute inset-0",
            theme === 'dark' 
              ? "bg-gradient-to-b from-brand-dark via-brand-dark/95 to-brand-dark" 
              : "bg-gradient-to-b from-slate-50/50 via-white to-white"
          )} />
          
          {/* Animated background blobs */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-blue/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 animate-pulse" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-orange/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" />
        </div>

        <div className="container mx-auto px-4 relative z-10 pt-32 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7">
              <nav className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-blue/60 mb-8">
                {hero.breadcrumbs.map((bc, i) => (
                  <React.Fragment key={i}>
                    {bc.href ? (
                      <a href={bc.href} className="hover:text-brand-blue transition-colors">{bc.label}</a>
                    ) : (
                      <span className={theme === 'dark' ? "text-white" : "text-brand-dark"}>{bc.label}</span>
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
                <h1 className={cn(
                  "text-6xl md:text-8xl font-heading font-black mb-8 leading-[0.9] tracking-tighter uppercase",
                  theme === 'dark' ? "text-white" : "text-brand-dark"
                )}>
                  {hero.title.split(' ').map((word, i) => (
                    <span key={i} className="block">
                      {word === 'Security' || word === 'Intelligence' || word === 'Recovery' || word === 'Cloud' ? (
                        <span className="text-brand-blue">{word}</span>
                      ) : word === 'Infrastructure' || word === 'Reporting' ? (
                        <span className="text-brand-orange italic">{word}</span>
                      ) : word}
                    </span>
                  ))}
                </h1>
                
                <div className="flex items-center gap-4 mb-8">
                  <div className="h-[2px] w-12 bg-brand-orange" />
                  <p className="text-xl font-bold tracking-tight text-brand-blue uppercase">
                    {hero.subtitle}
                  </p>
                </div>

                <p className={cn(
                  "text-xl mb-12 max-w-xl leading-relaxed font-medium",
                  theme === 'dark' ? "text-white/60" : "text-slate-500"
                )}>
                  {hero.description}
                </p>

                <div className="flex flex-wrap gap-6">
                  <Button size="lg" className="bg-brand-blue hover:bg-brand-blue/90 text-white rounded-none px-10 py-8 text-xl font-bold shadow-xl shadow-brand-blue/20">
                    Get Started
                  </Button>
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
                    <input 
                      type="text" 
                      placeholder="First Name" 
                      className={cn(
                        "w-full p-4 rounded-xl border outline-none transition-all",
                        theme === 'dark' 
                          ? "bg-white/5 border-white/10 focus:border-brand-blue text-white placeholder:text-white/30" 
                          : "bg-slate-50 border-slate-200 focus:border-brand-blue text-brand-dark"
                      )} 
                    />
                    <input 
                      type="text" 
                      placeholder="Last Name" 
                      className={cn(
                        "w-full p-4 rounded-xl border outline-none transition-all",
                        theme === 'dark' 
                          ? "bg-white/5 border-white/10 focus:border-brand-blue text-white placeholder:text-white/30" 
                          : "bg-slate-50 border-slate-200 focus:border-brand-blue text-brand-dark"
                      )} 
                    />
                  </div>
                  <input 
                    type="email" 
                    placeholder="Work Email" 
                    className={cn(
                      "w-full p-4 rounded-xl border outline-none transition-all",
                      theme === 'dark' 
                        ? "bg-white/5 border-white/10 focus:border-brand-blue text-white placeholder:text-white/30" 
                        : "bg-slate-50 border-slate-200 focus:border-brand-blue text-brand-dark"
                    )} 
                  />
                  <select 
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
                  <textarea 
                    placeholder="Briefly describe your needs..." 
                    rows={3} 
                    className={cn(
                      "w-full p-4 rounded-xl border outline-none transition-all resize-none",
                      theme === 'dark' 
                        ? "bg-white/5 border-white/10 focus:border-brand-blue text-white placeholder:text-white/30" 
                        : "bg-slate-50 border-slate-200 focus:border-brand-blue text-brand-dark"
                    )} 
                  />
                  <Button className="w-full bg-brand-orange hover:bg-brand-orange/90 text-white rounded-xl py-8 text-xl font-bold transition-transform active:scale-[0.98]">
                    Send Request
                  </Button>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mb-16">
            <h2 className="text-4xl font-heading font-bold text-brand-dark mb-4">{capabilities.title}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.items.map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="bg-white p-8 border border-gray-100 shadow-sm hover:shadow-md transition-all"
              >
                <h3 className="text-xl font-heading font-bold text-brand-dark mb-4">{item.title}</h3>
                <ul className="space-y-3">
                  {item.points.map((point, j) => (
                    <li key={j} className="flex gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-5 h-5 text-brand-blue shrink-0" />
                      {point}
                    </li>
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
            <h2 className="text-4xl font-heading font-bold text-brand-dark mb-6">{challenges.title}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {challenges.items.map((item, i) => (
              <div key={i} className="flex gap-4 items-start p-6 bg-gray-50 border-l-4 border-brand-orange">
                <CheckCircle2 className="w-6 h-6 text-brand-orange shrink-0" />
                <p className="text-gray-700 font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-brand-dark text-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-heading font-bold mb-4">{process.title}</h2>
            <p className="text-white/60">{process.description}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {process.steps.map((step, i) => (
              <div key={i} className="relative">
                <div className="text-6xl font-heading font-black text-white/5 absolute -top-8 -left-4">0{i + 1}</div>
                <h3 className="text-xl font-heading font-bold mb-4 relative z-10">{step.title}</h3>
                <p className="text-white/50 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mb-16">
            <h2 className="text-4xl font-heading font-bold text-brand-dark mb-4">{advantages.title}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {advantages.items.map((item, i) => (
              <div key={i} className="p-8 bg-gray-50 border border-gray-100 hover:border-brand-blue transition-colors">
                <h3 className="text-xl font-heading font-bold text-brand-dark mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes Section */}
      <section className="py-24 bg-brand-blue text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-heading font-bold mb-4">{outcomes.title}</h2>
              <p className="text-xl text-white/80 mb-8">{outcomes.subtitle}</p>
              <Button size="lg" className="bg-white text-brand-blue hover:bg-white/90 rounded-none px-8 py-6 text-lg font-bold group">
                Speak to Our Experts
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {outcomes.stats.map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-5xl font-heading font-bold mb-2">{stat.value}</div>
                  <div className="text-sm text-white/70 uppercase tracking-wider font-bold">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {children}
    </div>
  );
}
