import React from 'react';
import { Link } from 'react-router-dom';
import { ScrollReveal } from '@/components/layout/ScrollReveal';
import { ArrowRight, XCircle, CheckCircle2 } from 'lucide-react';

const traditionalModel = [
  "3-5 separate IT vendors",
  "Nobody coordinates",
  "Nobody documents",
  "Blame-shifting when things break",
];

const nineOneTwoModel = [
  "One contract, one team",
  "Unified documentation vault",
  "Single point of accountability",
  "One number to call for everything",
];

export function OneContractModel() {
  return (
    <section className="py-32 bg-[#0A0A1A] text-white overflow-hidden relative">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-blue/10 skew-x-12 translate-x-1/4" aria-hidden="true" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-brand-orange/5 rounded-full blur-[100px]" aria-hidden="true" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
          <div className="lg:col-span-5">
            <ScrollReveal direction="right">
              <div className="flex items-center gap-4 mb-12">
                <span className="text-brand-orange uppercase tracking-[0.4em] text-xs font-black">The 912 Architecture</span>
                <span className="h-[1px] w-12 bg-brand-orange/30" aria-hidden="true" />
              </div>
              <h2 className="text-5xl md:text-7xl font-heading font-bold mb-12 leading-[0.9] tracking-tighter">
                STOP MANAGING <br />
                <span className="text-brand-orange italic">FIVE</span> <span className="text-brand-blue">VENDORS.</span> <br />
              </h2>
              <p className="text-2xl text-white/50 mb-12 leading-relaxed font-medium max-w-xl">
                Start managing one contract. Physical security, cloud, software, data — 
                all under one accountability structure that documents everything 
                and owns the outcome.
              </p>
              <Link to="/about/one-contract" className="inline-flex items-center justify-center bg-brand-orange hover:bg-brand-orange/90 text-white rounded-none px-12 py-5 text-lg font-bold group transition-colors">
                How it works
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </Link>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Traditional column */}
              <ScrollReveal delay={0.1} direction="left">
                <div className="p-8 bg-white/5 border border-white/10">
                  <h3 className="text-xs font-black uppercase tracking-[0.3em] text-red-400 mb-6">Traditional model</h3>
                  <ul className="space-y-4">
                    {traditionalModel.map((item) => (
                      <li key={item} className="flex gap-3 items-start">
                        <XCircle className="w-5 h-5 text-red-400/60 flex-shrink-0 mt-0.5" aria-hidden="true" />
                        <span className="text-white/40">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
              {/* 912 column */}
              <ScrollReveal delay={0.2} direction="left">
                <div className="p-8 bg-brand-orange/10 border border-brand-orange/30">
                  <h3 className="text-xs font-black uppercase tracking-[0.3em] text-brand-orange mb-6">912 One Contract</h3>
                  <ul className="space-y-4">
                    {nineOneTwoModel.map((item) => (
                      <li key={item} className="flex gap-3 items-start">
                        <CheckCircle2 className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" aria-hidden="true" />
                        <span className="text-white/90 font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
