import React from 'react';
import { ScrollReveal } from '@/components/layout/ScrollReveal';

export function AboutSection() {
  return (
    <section className="py-32 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-start">
          <div className="lg:col-span-4">
            <ScrollReveal direction="right">
              <div className="flex items-center gap-4 mb-12">
                <span className="text-brand-blue uppercase tracking-[0.4em] text-xs font-black">Our Philosophy</span>
                <span className="h-[1px] w-12 bg-brand-blue/20" aria-hidden="true" />
              </div>
              <h2 className="text-5xl md:text-7xl font-heading font-bold text-brand-dark leading-[0.9] tracking-tighter mb-8">
                FROM VISION <br />
                <span className="text-brand-orange italic">TO FRUITION.</span>
              </h2>
              <div className="w-24 h-2 bg-brand-blue mb-12" aria-hidden="true" />
            </ScrollReveal>
          </div>
          
          <div className="lg:col-span-8">
            <ScrollReveal delay={0.2}>
              <p className="text-3xl md:text-5xl text-brand-dark leading-[1.1] font-medium tracking-tight mb-12">
                Unlock Africa's business potential with <span className="text-brand-blue">unified</span> technology services.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <p className="text-lg text-slate-500 leading-relaxed">
                  At 912, we specialise in providing comprehensive digital transformation support to clients located in Africa or looking to do business across the continent. We bring together the expertise and resources of leading technology professionals.
                </p>
                <p className="text-lg text-slate-500 leading-relaxed">
                  With our extensive experience and in-depth understanding of diverse markets, we are a recognised enabler of business success in Africa. We offer proven experience in working with governments, agencies, and transnational corporate organisations.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
