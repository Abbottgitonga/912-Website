import React from 'react';
import { Link } from 'react-router-dom';
import { ScrollReveal } from '@/components/layout/ScrollReveal';
import { LogoCloud } from '@/components/home/LogoCloud';
import { AfricaMap } from '@/components/home/AfricaMap';
import { ArrowRight } from 'lucide-react';
import { Testimonials } from '@/components/home/Testimonials';
import { SEOHead } from '@/components/seo/SEOHead';

const timeline = [
  { year: '2013', event: 'Founded in Nairobi by Njuguna Waitara. First client: a mid-sized manufacturer who needed CCTV, cabling, and IT support — and was tired of managing three vendors.' },
  { year: '2015', event: 'Expanded into cloud services and cybersecurity. Formalised the One Contract Model.' },
  { year: '2017', event: 'First international engagement — Angola. Built physical and digital infrastructure for a manufacturing client from scratch.' },
  { year: '2019', event: 'Expanded to Senegal, Mali, and Burkina Faso. Began custom software development practice.' },
  { year: '2021', event: 'Launched Data & Intelligence pillar. First Power BI deployment for an enterprise client.' },
  { year: '2023', event: 'Rwanda, Burundi, DRC operations formalised. 100+ active clients across 10 countries.' },
  { year: '2024', event: 'Senegal factory rescue. SAP HANA bare-metal migration program. Ghana and Benin operations launched.' },
];

const values = [
  { title: 'Documentation-first', desc: 'If it\'s not documented, it doesn\'t exist. Every system, credential, and process is recorded in a client-accessible vault.' },
  { title: 'Structural accountability', desc: 'One contract means one team owns the outcome. No finger-pointing between vendors.' },
  { title: 'Speed as a discipline', desc: 'We are consistently the fastest-responding IT partner on the continent. Not because we rush — because we prepare.' },
  { title: 'Vendor neutrality', desc: 'We recommend what costs less and works better. We don\'t resell — we architect.' },
  { title: 'African-context design', desc: 'M-Pesa-aware, WhatsApp-aware, designed for the network conditions and business realities you actually have.' },
  { title: 'No jargon, no upsell', desc: 'We explain what we\'re doing in language the finance director understands. If we can\'t, we haven\'t understood it well enough ourselves.' },
];

export default function AboutPage() {
  return (
    <main className="pt-20">
      <SEOHead
        title="About 912 — Pan-African IT Company Founded in Nairobi, Kenya"
        description="Nine One Two (912) was founded in Nairobi in 2013 to fix broken IT vendor fragmentation across Africa. 100+ enterprise clients, 10 countries, 14 integrated services under the One Contract Model."
      />
      {/* Hero */}
      <section className="bg-brand-dark text-white py-32">
        <div className="container mx-auto px-4">
          <ScrollReveal direction="right">
            <span className="text-brand-orange uppercase tracking-[0.4em] text-xs font-black mb-4 block">About 912</span>
            <h1 className="text-5xl md:text-7xl font-heading font-bold mb-8 leading-tight">
              The IT partner that exists because the{' '}
              <span className="text-brand-orange italic">multi-vendor model</span>{' '}
              is broken.
            </h1>
            <p className="text-xl text-white/50 max-w-3xl leading-relaxed">
              Nine One Two was founded in Nairobi in 2013 with a single observation: 
              most businesses in Africa are running their IT on three to five separate vendors, 
              none of whom talk to each other, none of whom document anything properly, 
              and all of whom blame the other four when something breaks.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <LogoCloud variant="dark" />

      {/* Founding Insight */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <ScrollReveal direction="right">
              <span className="text-brand-blue uppercase tracking-[0.3em] text-xs font-black mb-4 block">The founding insight</span>
              <h2 className="text-4xl font-heading font-bold text-brand-dark mb-8">
                The cost of fragmented IT isn't in the invoices. It's in the gaps between them.
              </h2>
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                <p>
                  A CCTV company installs cameras but doesn't coordinate with the IT team about network bandwidth. 
                  A cloud provider migrates your email but doesn't know your backup policy. A software developer 
                  builds an app but has no idea what firewall rules are in place.
                </p>
                <p>
                  Each vendor is competent in isolation. The problem is the architecture — or rather, the lack of one. 
                  No one owns the full picture. No one documents the full picture. No one is accountable for the full picture.
                </p>
                <p>
                  <strong>912 was built to be the full picture.</strong>
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="left" delay={0.2}>
              <div className="bg-slate-50 border border-slate-200 p-10">
                <h3 className="text-xs uppercase tracking-[0.3em] font-black text-brand-orange mb-6">The One Contract Model</h3>
                <p className="text-2xl font-heading font-medium text-brand-dark leading-relaxed mb-8">
                  One contract. One team. One set of documentation. One number to call. 
                  Every technology need — physical security, cloud, software, data — 
                  delivered by a single accountable partner.
                </p>
                <Link to="/about/one-contract" className="inline-flex items-center text-brand-blue font-bold hover:text-brand-orange transition-colors group">
                  Read the full One Contract Model
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="py-32 bg-slate-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="text-brand-orange uppercase tracking-[0.4em] text-xs font-black mb-4 block">The founder</span>
              <h2 className="text-4xl font-heading font-bold text-brand-dark">Njuguna Waitara</h2>
              <p className="text-brand-blue font-medium mt-2">Founder & CEO</p>
            </div>
            <blockquote className="text-xl md:text-2xl font-heading font-medium text-brand-dark leading-relaxed text-center border-l-4 border-brand-orange pl-8 text-left max-w-3xl mx-auto">
              "I didn't start 912 because I thought there weren't enough IT companies in Nairobi. 
              I started it because I kept watching businesses — good businesses, well-run businesses — 
              get fundamentally let down by the way IT services are structured on this continent. 
              Five vendors. No coordination. No documentation. No one accountable for the whole thing. 
              The One Contract Model is the fix."
            </blockquote>
          </ScrollReveal>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <ScrollReveal className="mb-16">
            <span className="text-brand-blue uppercase tracking-[0.3em] text-xs font-black mb-4 block">Timeline</span>
            <h2 className="text-4xl font-heading font-bold text-brand-dark">How we got here.</h2>
          </ScrollReveal>
          <div className="space-y-0">
            {timeline.map((item, i) => (
              <ScrollReveal key={item.year} delay={i * 0.05}>
                <div className="flex gap-8 pb-10 border-l-2 border-slate-200 pl-8 relative last:border-0">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-brand-orange border-4 border-white" />
                  <div>
                    <span className="text-brand-orange font-heading font-bold text-lg">{item.year}</span>
                    <p className="text-slate-600 leading-relaxed mt-1">{item.event}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-32 bg-brand-dark text-white">
        <div className="container mx-auto px-4">
          <ScrollReveal className="text-center mb-20">
            <span className="text-brand-orange uppercase tracking-[0.4em] text-xs font-black mb-4 block">What we believe</span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Operating <span className="text-brand-orange italic">principles.</span>
            </h2>
            <p className="text-xl text-white/50 max-w-2xl mx-auto">
              Not corporate values written on a wall. These are the rules that govern 
              every decision, every engagement, every deliverable.
            </p>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <div className="p-8 bg-white/5 border border-white/10 hover:bg-white/10 transition-all h-full">
                  <h4 className="text-xl font-heading font-bold mb-4">{value.title}</h4>
                  <p className="text-white/50 leading-relaxed">{value.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />

      {/* Stats + Map */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {[
              { value: '2013', label: 'Founded' },
              { value: '10', label: 'African countries' },
              { value: '100+', label: 'Active clients' },
              { value: '14', label: 'Services under one contract' },
            ].map((stat, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-heading font-bold text-brand-dark">{stat.value}</div>
                  <div className="text-sm text-slate-500 uppercase tracking-wider font-bold mt-2">{stat.label}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal>
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
              <AfricaMap variant="page" />
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
