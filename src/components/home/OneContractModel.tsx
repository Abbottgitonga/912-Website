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
    <section className="py-32 bg-[#0A0A1A] text-white overflow-hidden relative">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-blue/10 skew-x-12 translate-x-1/4" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-brand-orange/5 rounded-full blur-[100px]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
          <div className="lg:col-span-6">
            <ScrollReveal direction="right">
              <div className="flex items-center gap-4 mb-12">
                <span className="text-brand-orange uppercase tracking-[0.4em] text-xs font-black">The 912 Advantage</span>
                <span className="h-[1px] w-12 bg-brand-orange/30" />
              </div>
              <h2 className="text-5xl md:text-8xl font-heading font-bold mb-12 leading-[0.9] tracking-tighter">
                THE <span className="text-brand-orange italic">ONE</span> <br />
                <span className="text-brand-blue">CONTRACT</span> <br />
                MODEL.
              </h2>
              <p className="text-2xl text-white/50 mb-12 leading-relaxed font-medium max-w-xl">
                Stop juggling multiple vendors. 912 provides a unified technology ecosystem 
                under a single managed contract. From your electric fence to your cloud server, 
                we handle it all.
              </p>
              <Button asChild size="lg" className="bg-brand-orange hover:bg-brand-orange/90 text-white rounded-none px-12 py-8 text-xl font-bold group">
                <a href="/about/one-contract">
                  Explore the Model
                  <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {benefits.map((benefit, i) => (
                <ScrollReveal key={i} delay={i * 0.1} direction="left">
                  <div className="p-8 bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-all duration-500 group h-full flex flex-col justify-between">
                    <div className="w-10 h-10 bg-brand-orange/20 flex items-center justify-center mb-6 group-hover:bg-brand-orange transition-colors">
                      <CheckCircle2 className="w-5 h-5 text-brand-orange group-hover:text-white transition-colors" />
                    </div>
                    <p className="text-lg font-bold leading-tight text-white/80 group-hover:text-white transition-colors">{benefit}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
