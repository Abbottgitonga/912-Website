import React from 'react';
import { ScrollReveal } from '@/components/layout/ScrollReveal';
import { Globe, Smartphone, Layout, Settings, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const solutions = [
  {
    title: "Web Applications",
    description: "Custom-built web platforms designed for performance, security, and exceptional user experience.",
    icon: Globe
  },
  {
    title: "Mobile Applications",
    description: "Native and cross-platform mobile apps that connect you with your customers anywhere.",
    icon: Smartphone
  },
  {
    title: "SaaS Platforms",
    description: "End-to-end development of software-as-a-service products, from MVP to global scale.",
    icon: Layout
  },
  {
    title: "ERP Systems",
    description: "Integrated business management software that unifies your operations and data.",
    icon: Settings
  }
];

export default function ApplicationsSoftwarePage() {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="bg-brand-dark text-white py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=2000" alt="Software" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <ScrollReveal direction="right">
            <h1 className="text-5xl md:text-7xl font-heading font-bold mb-8">
              Applications & <span className="text-brand-orange">Software</span> <br />
              Development
            </h1>
            <p className="text-xl md:text-2xl text-white/60 max-w-2xl leading-relaxed">
              We don't just write code; we build digital products that solve real 
              business problems and drive growth across Africa.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {solutions.map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="group p-12 bg-slate-50 border border-slate-100 hover:border-brand-blue transition-all duration-500">
                  <div className="w-16 h-16 bg-brand-blue flex items-center justify-center mb-8 group-hover:bg-brand-orange transition-colors">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-brand-dark mb-4">{item.title}</h3>
                  <p className="text-slate-500 text-lg leading-relaxed mb-8">{item.description}</p>
                  <Button variant="link" className="text-brand-blue p-0 group-hover:text-brand-orange">
                    Learn More <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-32 bg-slate-50">
        <div className="container mx-auto px-4">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-3xl font-heading font-bold text-brand-dark">Our Technology Stack</h2>
          </ScrollReveal>
          <div className="flex flex-wrap justify-center gap-12 opacity-40 grayscale">
            {["React", "Node.js", "Python", "AWS", "Azure", "PostgreSQL", "Flutter", "Docker"].map((tech) => (
              <div key={tech} className="text-2xl font-heading font-black">{tech}</div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
