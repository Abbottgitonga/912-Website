import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { ScrollReveal } from '@/components/layout/ScrollReveal';
import { Button } from '@/components/ui/button';
import { IsometricIcon } from '@/components/ui/IsometricIcon';

const pillars = [
  {
    title: "Physical & Security Infrastructure",
    description: "Cameras, fences, doors, cabling, server rooms. The hardware that protects your premises and the infrastructure that makes everything else work.",
    iconType: "security" as const,
    path: "/services/physical-security",
    image: "/images/heroes/physical-security.png"
  },
  {
    title: "Cloud & Core IT",
    description: "Cloud, security, identity, backups, telephony, day-to-day IT. The digital backbone your business runs on.",
    iconType: "cloud" as const,
    path: "/services/cloud-it",
    image: "/images/heroes/cloud-it.png"
  },
  {
    title: "Applications & Software",
    description: "Custom web and mobile apps, ERP systems, SaaS platforms, process automation. Built for African operations.",
    iconType: "software" as const,
    path: "/services/applications-software",
    image: "/images/heroes/software-dev.png"
  },
  {
    title: "Data & Intelligence",
    description: "Power BI dashboards, data warehousing, ETL pipelines. The single source of truth your leadership team needs.",
    iconType: "data" as const,
    path: "/services/data-intelligence",
    image: "/images/heroes/data-intelligence.png"
  }
];

export function ServicePillars() {
  return (
    <section className="py-32 bg-white text-brand-dark">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <ScrollReveal direction="right" className="max-w-2xl">
            <span className="text-brand-orange uppercase tracking-[0.4em] text-xs font-black mb-4 block">What we cover under one contract</span>
            <h2 className="text-5xl md:text-7xl font-heading font-bold tracking-tighter leading-[0.9] mb-8 uppercase">
              FOUR PILLARS. <br />
              <span className="text-brand-blue">FOURTEEN SERVICES.</span>
            </h2>
            <p className="text-xl text-slate-500 font-medium">
              Every technology your business depends on, delivered by one team, under one contract.
            </p>
          </ScrollReveal>
          <ScrollReveal direction="left">
            <Button asChild variant="outline" className="border-brand-dark text-brand-dark hover:bg-brand-dark hover:text-white rounded-none px-8 py-6 text-lg font-bold group">
              <Link to="/services">
                All Services
                <ArrowUpRight className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" aria-hidden="true" />
              </Link>
            </Button>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pillars.map((pillar, i) => (
            <ScrollReveal key={pillar.title} delay={i * 0.1}>
              <Link to={pillar.path} className="group block relative h-[600px] overflow-hidden bg-brand-dark">
                <motion.img
                  src={pillar.image}
                  alt=""
                  width={800}
                  height={600}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover opacity-50 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                  whileHover={{ scale: 1.05 }}
                />

                <div className="absolute inset-0 p-12 flex flex-col justify-between z-20">
                  <div className="flex justify-between items-start">
                    <div className="text-white/30 font-heading font-black text-6xl" aria-hidden="true">0{i + 1}</div>
                    <IsometricIcon type={pillar.iconType} className="w-24 h-24 text-white opacity-40 group-hover:opacity-100 transition-opacity" />
                  </div>

                  <div>
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-white mb-6 group-hover:text-brand-orange transition-colors leading-tight uppercase">
                      {pillar.title}
                    </h3>
                    <p className="text-white/60 text-lg leading-relaxed max-w-md opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                      {pillar.description}
                    </p>
                  </div>
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/40 to-transparent z-10" aria-hidden="true" />
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
