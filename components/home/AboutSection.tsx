import React from 'react';
import { ScrollReveal } from '@/components/layout/ScrollReveal';

export function AboutSection() {
  return (
    <section className="py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5">
            <ScrollReveal direction="right">
              <div className="flex items-center gap-4 mb-8">
                <span className="text-brand-blue uppercase tracking-[0.3em] text-sm font-bold">About 912</span>
                <span className="h-[1px] flex-1 bg-brand-blue/20" />
              </div>
              <h2 className="text-4xl md:text-6xl font-heading font-bold text-brand-dark leading-tight mb-8">
                From vision <br />
                <span className="text-brand-orange italic">to fruition</span>
              </h2>
            </ScrollReveal>
          </div>
          
          <div className="lg:col-span-7">
            <ScrollReveal delay={0.2}>
              <p className="text-2xl md:text-3xl text-brand-dark/80 leading-relaxed font-light">
                Unlock Africa's business potential with expert technology services. 
                At <span className="text-brand-blue font-bold">912</span>, we specialise in providing comprehensive 
                digital transformation support to clients located in Africa or looking to do business 
                across the continent.
              </p>
              <p className="mt-8 text-lg text-brand-dark/60 leading-relaxed max-w-2xl">
                We bring together the expertise and resources of leading technology professionals, 
                offering proven experience in working with governments and their agencies, 
                and local and transnational corporate organisations. With our extensive experience 
                and in-depth understanding of diverse markets, we are a recognised enabler of 
                business success in Africa.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
