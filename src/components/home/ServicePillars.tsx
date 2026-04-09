import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { ScrollReveal } from '@/components/layout/ScrollReveal';
import { Button } from '@/components/ui/button';
import { IsometricIcon } from '@/components/ui/IsometricIcon';

const pillars = [
  {
    title: "Physical & Security Infrastructure",
    description: "From server rooms and structured cabling to AI-powered CCTV and biometric access control.",
    iconType: "security" as const,
    path: "/expertise/physical-&-security-infrastructure",
    image: "https://images.unsplash.com/photo-1557597774-9d2739f8f01f?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Cloud & Core IT",
    description: "Resilient cloud environments, cybersecurity, and unified communications for the modern enterprise.",
    iconType: "cloud" as const,
    path: "/expertise/cloud-&-core-it",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Applications & Software",
    description: "Custom web and mobile applications, SaaS platforms, and ERP systems built for African scale.",
    iconType: "software" as const,
    path: "/expertise/applications-&-software",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Data & Intelligence",
    description: "Transforming raw data into actionable insights with Power BI, analytics, and AI modeling.",
    iconType: "data" as const,
    path: "/expertise/data-&-intelligence",
    image: "https://images.unsplash.com/photo-1551288049-bbbda50a13a9?auto=format&fit=crop&q=80&w=800"
  }
];

export function ServicePillars() {
  return (
    <section className="py-32 bg-white text-brand-dark">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <ScrollReveal direction="right" className="max-w-2xl">
            <h2 className="text-5xl md:text-7xl font-heading font-bold tracking-tighter leading-[0.9] mb-8 uppercase">
              OUR SERVICE <br />
              <span className="text-brand-blue">PILLARS.</span>
            </h2>
            <p className="text-xl text-slate-500 font-medium">
              A comprehensive technology ecosystem designed to power 
              every aspect of your business operations.
            </p>
          </ScrollReveal>
          <ScrollReveal direction="left">
            <Button asChild variant="outline" className="border-brand-dark text-brand-dark hover:bg-brand-dark hover:text-white rounded-none px-8 py-6 text-lg font-bold group">
              <a href="/expertise">
                All Expertise
                <ArrowUpRight className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </Button>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pillars.map((pillar, i) => (
            <ScrollReveal key={pillar.title} delay={i * 0.1}>
              <a href={pillar.path} className="group block relative h-[600px] overflow-hidden bg-brand-dark">
                <motion.img 
                  src={pillar.image} 
                  alt={pillar.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-40 grayscale group-hover:grayscale-0 group-hover:opacity-60 transition-all duration-700"
                  whileHover={{ scale: 1.05 }}
                />
                
                <div className="absolute inset-0 p-12 flex flex-col justify-between z-20">
                  <div className="flex justify-between items-start">
                    <div className="text-white/30 font-heading font-black text-6xl">0{i + 1}</div>
                    <IsometricIcon type={pillar.iconType} className="w-24 h-24 text-white opacity-40 group-hover:opacity-100 transition-opacity" />
                  </div>
                  
                  <div>
                    <h3 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6 group-hover:text-brand-orange transition-colors leading-tight uppercase">
                      {pillar.title}
                    </h3>
                    <p className="text-white/60 text-lg leading-relaxed max-w-md opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                      {pillar.description}
                    </p>
                  </div>
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/20 to-transparent z-10" />
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
