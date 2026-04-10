import React from 'react';
import { Link } from 'react-router-dom';
import { Hero } from '@/components/home/Hero';
import { LogoCloud } from '@/components/home/LogoCloud';
import { ServicePillars } from '@/components/home/ServicePillars';
import { OneContractModel } from '@/components/home/OneContractModel';
import { ScrollReveal } from '@/components/layout/ScrollReveal';
import { AfricaMap } from '@/components/home/AfricaMap';
import { ArrowRight } from 'lucide-react';
import { Testimonials } from '@/components/home/Testimonials';

export default function HomePage() {
  return (
    <main className="pt-0">
      <Hero />
      <LogoCloud variant="dark" />
      
      {/* Proof Strip — anonymised case study teasers */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <ScrollReveal className="mb-12">
            <span className="text-brand-orange uppercase tracking-[0.4em] text-xs font-black mb-4 block">What this looks like in practice</span>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { metric: '25 days', desc: 'locked out of every system. Restored remotely from Nairobi.', tag: 'Manufacturing · West Africa' },
              { metric: 'EUR 58,200', desc: 'saved over 5 years by migrating SAP HANA off shared cloud.', tag: 'Manufacturing · Multi-country' },
              { metric: '14%', desc: 'profitability increase from automating one logistics process.', tag: 'FMCG · Nairobi' },
              { metric: '0 incidents', desc: 'of unauthorised access since deploying layered ERP security.', tag: 'Financial Services · Nairobi' },
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="p-6 border border-slate-200 hover:border-brand-blue transition-colors group h-full flex flex-col justify-between">
                  <div>
                    <span className="text-[9px] font-black uppercase tracking-[0.3em] text-brand-blue mb-3 block">{item.tag}</span>
                    <div className="text-3xl font-heading font-bold text-brand-dark mb-2">{item.metric}</div>
                    <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal delay={0.3} className="mt-8 text-center">
            <Link to="/results" className="inline-flex items-center text-brand-dark font-black text-xs uppercase tracking-widest hover:text-brand-orange transition-colors group">
              Read the full case studies
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      <Testimonials />
      <OneContractModel />
      <ServicePillars />
      
      {/* Pan-African Map Section */}
      <section className="py-32 bg-[#0A0A1A] text-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="right">
              <span className="text-brand-orange uppercase tracking-[0.4em] text-xs font-black mb-4 block">
                Pan-African Reach
              </span>
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-8 leading-tight">
                10 countries. <br />
                <span className="text-brand-orange italic">One standard.</span>
              </h2>
              <p className="text-xl text-white/50 leading-relaxed mb-8">
                Headquartered in Nairobi with active operations across 
                Kenya, Senegal, Rwanda, Burkina Faso, Angola, Ghana, 
                Benin, DR Congo, Mali, and Burundi. Same documentation 
                standard. Same response times. Same accountability model.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center text-brand-orange font-black text-xs uppercase tracking-widest hover:text-white transition-colors group"
              >
                Our Story
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </Link>
            </ScrollReveal>
            <ScrollReveal direction="left" delay={0.2}>
              <AfricaMap variant="page" />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Founder Block */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <div className="flex items-center gap-4 mb-8">
                <div className="h-[1px] flex-1 bg-slate-200" aria-hidden="true" />
                <span className="text-brand-orange uppercase tracking-[0.4em] text-[10px] font-black">From the Founder</span>
                <div className="h-[1px] flex-1 bg-slate-200" aria-hidden="true" />
              </div>
              <blockquote className="text-2xl md:text-3xl font-heading font-medium text-brand-dark leading-relaxed text-center mb-8">
                "I started 912 because I kept seeing the same thing — businesses in Nairobi 
                running on five different IT vendors, none of whom talk to each other, none of 
                whom document anything, and all of whom blame the other four when something breaks. 
                The One Contract Model isn't a marketing package. It's an architectural decision. 
                One team. One set of documentation. One number to call."
              </blockquote>
              <div className="text-center">
                <p className="font-heading font-bold text-brand-dark">Njuguna Waitara</p>
                <p className="text-sm text-slate-500">Founder & CEO, Nine One Two</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </main>
  );
}
