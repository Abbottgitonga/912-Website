import React from 'react';
import { ScrollReveal } from '@/components/layout/ScrollReveal';
import { CheckCircle2, ArrowRight, Shield, Zap, Globe, Users, BarChart3, Layers } from 'lucide-react';
import { Button } from '@/components/ui/button';

const features = [
  {
    title: "Unified Accountability",
    description: "One contract, one team, one point of contact. We take full ownership of your entire technology stack.",
    icon: Shield
  },
  {
    title: "Pan-African Reach",
    description: "Operating across 10+ African countries with deep local knowledge and technical expertise.",
    icon: Globe
  },
  {
    title: "Physical to Digital",
    description: "The only partner handling your electric fence and your cloud server in the same conversation.",
    icon: Layers
  },
  {
    title: "Fastest Delivery",
    description: "Speed is our DNA. We respond and deliver faster than any competitor on the continent.",
    icon: Zap
  },
  {
    title: "Growth Partner",
    description: "We don't just fix IT — we design it to scale with your business across Africa.",
    icon: BarChart3
  },
  {
    title: "Expert Team",
    description: "Access to a multi-disciplinary technical team with over 15 years of experience.",
    icon: Users
  }
];

export default function OneContractPage() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="bg-brand-dark text-white py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-blue/20 skew-x-12 translate-x-1/4" />
        <div className="container mx-auto px-4 relative z-10">
          <ScrollReveal direction="right">
            <div className="flex items-center gap-4 mb-8">
              <span className="text-brand-orange uppercase tracking-[0.3em] text-sm font-bold">The Positioning Anchor</span>
              <span className="h-[1px] w-12 bg-brand-orange" />
            </div>
            <h1 className="text-5xl md:text-7xl font-heading font-bold mb-8 leading-tight max-w-4xl">
              Walk in with a <span className="text-brand-orange italic">problem.</span> <br />
              Walk out with a <span className="text-brand-blue italic">complete solution.</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/60 max-w-2xl leading-relaxed mb-12">
              Nine One Two designs, secures, and manages the technology businesses depend on — 
              from core IT infrastructure and cloud systems to the security technologies that protect your operations.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <ScrollReveal direction="right">
              <div className="p-12 bg-slate-50 border-l-4 border-brand-blue">
                <h3 className="text-xs uppercase tracking-[0.3em] font-bold text-brand-blue mb-6">Our Vision</h3>
                <p className="text-2xl md:text-3xl font-heading font-medium text-brand-dark leading-relaxed">
                  "To be Africa's go-to end-to-end digital transformation platform — 
                  the single partner that powers every technology need of every business, 
                  institution and government across the continent."
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="left" delay={0.2}>
              <div className="p-12 bg-slate-50 border-l-4 border-brand-orange">
                <h3 className="text-xs uppercase tracking-[0.3em] font-bold text-brand-orange mb-6">Our Mission</h3>
                <p className="text-2xl md:text-3xl font-heading font-medium text-brand-dark leading-relaxed">
                  "To deliver fast, reliable and complete technology solutions — 
                  from physical security to cloud infrastructure to custom applications — 
                  under one contract, so African businesses can focus entirely on growth."
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-32 bg-slate-50">
        <div className="container mx-auto px-4">
          <ScrollReveal className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-brand-dark mb-6">
              What Makes <span className="text-brand-blue">912 Different</span>
            </h2>
            <p className="text-xl text-slate-500 max-w-2xl mx-auto">
              We've reimagined IT service delivery for the African context, 
              removing the friction of multiple vendors and fragmented systems.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="bg-white p-10 h-full border border-slate-200 hover:border-brand-blue transition-all duration-300 group">
                  <div className="w-14 h-14 bg-slate-50 rounded-none flex items-center justify-center mb-8 group-hover:bg-brand-blue transition-colors">
                    <feature.icon className="w-7 h-7 text-brand-blue group-hover:text-white transition-colors" />
                  </div>
                  <h4 className="text-xl font-heading font-bold text-brand-dark mb-4">{feature.title}</h4>
                  <p className="text-slate-500 leading-relaxed">{feature.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* The Model Steps */}
      <section className="py-32 bg-brand-dark text-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="lg:w-1/2">
              <ScrollReveal direction="right">
                <h2 className="text-4xl md:text-5xl font-heading font-bold mb-8">
                  The 912 <span className="text-brand-orange">Full IT Takeover</span> Model
                </h2>
                <p className="text-xl text-white/60 mb-12 leading-relaxed">
                  A client signs ONE contract. 912 conducts a full technology audit — 
                  physical security, IT infrastructure, software, data and communications. 
                  We design a complete solution, deploy it, and manage it on an ongoing basis. 
                  The client never has to think about technology again.
                </p>
                <div className="space-y-4">
                  {[
                    "1. Audit & Assessment",
                    "2. Solution Design",
                    "3. Deployment",
                    "4. Training",
                    "5. Ongoing Management",
                    "6. Annual IT Review"
                  ].map((step, i) => (
                    <div key={i} className="flex items-center gap-4 text-lg font-medium">
                      <div className="w-2 h-2 bg-brand-orange rounded-full" />
                      <span>{step}</span>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>
            <div className="lg:w-1/2 relative">
              <ScrollReveal direction="left">
                <div className="relative z-10 bg-brand-blue p-12 aspect-square flex flex-center items-center justify-center text-center">
                  <div>
                    <h3 className="text-6xl md:text-8xl font-heading font-bold mb-4">ONE</h3>
                    <p className="text-2xl uppercase tracking-widest font-bold">Contract</p>
                    <div className="h-1 w-24 bg-brand-orange mx-auto my-8" />
                    <p className="text-white/80 text-lg max-w-xs mx-auto">
                      Infinite possibilities for your business growth.
                    </p>
                  </div>
                </div>
                {/* Decorative circles */}
                <div className="absolute -top-10 -left-10 w-40 h-40 border border-white/10 rounded-full" />
                <div className="absolute -bottom-20 -right-20 w-80 h-80 border border-white/5 rounded-full" />
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-brand-orange text-white text-center">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <h2 className="text-4xl md:text-6xl font-heading font-bold mb-8">
              Ready for a <span className="italic">complete</span> solution?
            </h2>
            <p className="text-xl mb-12 max-w-2xl mx-auto opacity-90">
              Let us handle the complexity of your technology so you can focus on what you do best.
            </p>
            <Button asChild size="lg" className="bg-brand-dark hover:bg-brand-dark/90 text-white rounded-none px-12 py-8 text-xl">
              <a href="/contact">Schedule a Discovery Call</a>
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
