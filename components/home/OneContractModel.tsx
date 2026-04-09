import React from 'react';
import { ScrollReveal } from '@/components/layout/ScrollReveal';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const benefits = [
  "Single point of accountability for all IT needs",
  "Predictable monthly costs with no hidden fees",
  "Seamless integration between physical and digital security",
  "Priority access to our pan-African expert team",
  "Strategic IT roadmap aligned with your business growth",
  "24/7 proactive monitoring and rapid incident response"
];

export function OneContractModel() {
  return (
    <section className="py-32 bg-brand-blue text-white overflow-hidden relative">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 translate-x-1/4" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <ScrollReveal direction="right">
              <div className="flex items-center gap-4 mb-8">
                <span className="text-brand-orange uppercase tracking-[0.3em] text-sm font-bold">The Differentiator</span>
                <span className="h-[1px] w-12 bg-brand-orange" />
              </div>
              <h2 className="text-4xl md:text-6xl font-heading font-bold mb-8 leading-tight">
                The <span className="text-brand-orange italic">One Contract</span> <br />
                Model
              </h2>
              <p className="text-xl text-white/70 mb-12 leading-relaxed">
                Stop juggling multiple vendors. 912 provides a unified technology ecosystem 
                under a single managed contract. From your electric fence to your cloud server, 
                we handle it all.
              </p>
              <Button asChild size="lg" className="bg-brand-orange hover:bg-brand-orange/90 text-white rounded-none px-8 py-8 text-lg group">
                <a href="/about/one-contract">
                  Learn How It Works
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, i) => (
              <ScrollReveal key={i} delay={i * 0.1} direction="left">
                <div className="p-6 bg-white/10 backdrop-blur-sm border border-white/10 hover:bg-white/20 transition-colors group">
                  <CheckCircle2 className="w-8 h-8 text-brand-orange mb-4 group-hover:scale-110 transition-transform" />
                  <p className="font-medium leading-snug">{benefit}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
