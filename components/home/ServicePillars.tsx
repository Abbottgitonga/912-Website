import React from 'react';
import { motion } from 'motion/react';
import { Shield, Server, PhoneCall, Cloud, ArrowUpRight } from 'lucide-react';
import { ScrollReveal } from '@/components/layout/ScrollReveal';
import { Button } from '@/components/ui/button';

const pillars = [
  {
    title: "Information Security",
    description: "Firewall Management, Endpoint Protection, Email Security, Security Audits, and Compliance.",
    icon: Shield,
    color: "bg-blue-600",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Physical Security",
    description: "CCTV Systems, Access Control, Visitor Management, and Site Assessments.",
    icon: Server,
    color: "bg-orange-600",
    image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "IP Telephony",
    description: "3CX Implementation, PBX Migration, Call Centre Setup, and Unified Comms.",
    icon: PhoneCall,
    color: "bg-indigo-600",
    image: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Cloud & Infrastructure",
    description: "Virtualisation, SAP HANA, Microsoft 365, Backup & DR, and Network Infrastructure.",
    icon: Cloud,
    color: "bg-brand-blue",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800"
  }
];

export function ServicePillars() {
  return (
    <section className="py-32 bg-brand-dark text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <ScrollReveal direction="right">
            <h3 className="text-4xl md:text-5xl font-heading font-bold">
              Our Service <span className="text-brand-orange">Pillars</span>
            </h3>
          </ScrollReveal>
          <ScrollReveal direction="left">
            <Button variant="link" className="text-white hover:text-brand-orange p-0 h-auto text-lg group">
              View All Services
              <ArrowUpRight className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Button>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10">
          {pillars.map((pillar, i) => (
            <ScrollReveal key={pillar.title} delay={i * 0.1} className="h-full">
              <motion.div 
                whileHover="hover"
                className="relative h-[500px] overflow-hidden group bg-brand-dark"
              >
                {/* Background Image */}
                <motion.img 
                  src={pillar.image} 
                  alt={pillar.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-30 grayscale group-hover:grayscale-0 group-hover:opacity-50 transition-all duration-700"
                  variants={{
                    hover: { scale: 1.1 }
                  }}
                />
                
                {/* Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end z-20">
                  <div className="mb-6 w-12 h-12 rounded-full bg-brand-orange flex items-center justify-center">
                    <pillar.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-2xl font-heading font-bold mb-4 group-hover:text-brand-orange transition-colors">
                    {pillar.title}
                  </h4>
                  <p className="text-white/60 text-sm leading-relaxed mb-8 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    {pillar.description}
                  </p>
                  <div className="h-1 w-0 bg-brand-orange group-hover:w-full transition-all duration-500" />
                </div>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/20 to-transparent z-10" />
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
