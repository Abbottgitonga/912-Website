import React from 'react';
import { motion } from 'motion/react';
import { ScrollReveal } from '@/components/layout/ScrollReveal';
import { Star } from 'lucide-react';

const testimonials = [
  {
    featured: true,
    quote: "We were managing five IT vendors — CCTV, cloud, software, cybersecurity, and cabling. None of them talked to each other. When our systems went down, we spent more time figuring out who to call than actually fixing the problem. 912 consolidated everything under one contract. Within three months, we had documentation we'd never had, response times dropped to minutes, and our IT costs went down 30%. That's not a sales pitch — that's our actual P&L.",
    name: 'Sarah Mwangi',
    role: 'CFO, Manufacturing Group',
    initials: 'SM',
    region: 'Kenya · Multi-site',
  },
  {
    quote: "Our internal IT person resigned and took every password with them. No documentation existed. 912 restored full operations remotely from Nairobi in 25 days — including building a complete digital asset registry from scratch. They're now our only IT partner.",
    name: 'Jean-Pierre Diallo',
    role: 'Managing Director',
    initials: 'JD',
    region: 'Senegal · Manufacturing',
  },
  {
    quote: "The Power BI dashboards changed how our leadership team operates. We went from monthly Excel reports to real-time visibility. Decisions that took a week now take an hour.",
    name: 'Grace Okonkwo',
    role: 'Head of Operations',
    initials: 'GO',
    region: 'Kenya · FMCG',
  },
  {
    quote: "912 found a multi-year internal fraud scheme that our previous auditors missed entirely. The flag cost us almost nothing. The recovery was substantial.",
    name: 'Daniel Kimathi',
    role: 'Finance Director',
    initials: 'DK',
    region: 'Kenya · Financial Services',
  },
  {
    quote: "They migrated our SAP HANA off shared cloud onto dedicated bare-metal. Faster performance, disaster recovery included, and we're saving EUR 58,200 over five years. The ROI was immediate.",
    name: 'Marie Ndayisaba',
    role: 'IT Manager',
    initials: 'MN',
    region: 'Multi-country · Manufacturing',
  },
];

export function Testimonials() {
  return (
    <section className="py-20 md:py-32 bg-slate-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <ScrollReveal className="text-center mb-16 md:mb-20">
          <span className="text-brand-orange uppercase tracking-[0.4em] text-xs font-black mb-4 block">
            What our clients say
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-brand-dark mb-6">
            Trusted by businesses across{' '}
            <span className="text-brand-orange italic">10 African countries.</span>
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Real feedback from real clients. Every claim backed by the case studies in our Results section.
          </p>
        </ScrollReveal>

        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-rows-2">
          {/* Featured testimonial — large card */}
          <ScrollReveal className="sm:col-span-2 lg:row-span-2">
            <div className="bg-white border border-slate-200 p-8 sm:p-10 h-full flex flex-col">
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-brand-orange text-brand-orange" />
                ))}
              </div>
              <blockquote className="flex-1 flex flex-col justify-between gap-8">
                <p className="text-xl font-medium text-brand-dark leading-relaxed">
                  "{testimonials[0].quote}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-blue flex items-center justify-center text-white font-bold text-sm">
                    {testimonials[0].initials}
                  </div>
                  <div>
                    <cite className="text-sm font-bold text-brand-dark not-italic block">
                      {testimonials[0].name}
                    </cite>
                    <span className="text-sm text-slate-500">{testimonials[0].role}</span>
                    <span className="block text-[10px] uppercase tracking-widest text-brand-blue font-bold mt-0.5">
                      {testimonials[0].region}
                    </span>
                  </div>
                </div>
              </blockquote>
            </div>
          </ScrollReveal>

          {/* Medium cards */}
          {testimonials.slice(1, 3).map((t, i) => (
            <ScrollReveal key={i} delay={(i + 1) * 0.1} className="md:col-span-2">
              <div className="bg-white border border-slate-200 p-8 h-full flex flex-col">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-3 h-3 fill-brand-orange text-brand-orange" />
                  ))}
                </div>
                <blockquote className="flex-1 flex flex-col justify-between gap-6">
                  <p className="text-lg font-medium text-brand-dark leading-relaxed">
                    "{t.quote}"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-brand-orange flex items-center justify-center text-white font-bold text-xs">
                      {t.initials}
                    </div>
                    <div>
                      <cite className="text-sm font-bold text-brand-dark not-italic block">{t.name}</cite>
                      <span className="text-xs text-slate-500">{t.role}</span>
                      <span className="block text-[9px] uppercase tracking-widest text-brand-blue font-bold">
                        {t.region}
                      </span>
                    </div>
                  </div>
                </blockquote>
              </div>
            </ScrollReveal>
          ))}

          {/* Small cards */}
          {testimonials.slice(3).map((t, i) => (
            <ScrollReveal key={i} delay={(i + 3) * 0.1}>
              <div className="bg-white border border-slate-200 p-6 h-full flex flex-col">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-3 h-3 fill-brand-orange text-brand-orange" />
                  ))}
                </div>
                <blockquote className="flex-1 flex flex-col justify-between gap-4">
                  <p className="text-sm text-brand-dark leading-relaxed">
                    "{t.quote}"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-brand-dark flex items-center justify-center text-white font-bold text-[10px]">
                      {t.initials}
                    </div>
                    <div>
                      <cite className="text-xs font-bold text-brand-dark not-italic block">{t.name}</cite>
                      <span className="text-[10px] text-slate-500">{t.role}</span>
                    </div>
                  </div>
                </blockquote>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
