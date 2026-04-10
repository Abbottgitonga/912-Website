import React from 'react';
import { Link } from 'react-router-dom';
import { ScrollReveal } from '@/components/layout/ScrollReveal';
import { ArrowRight, TrendingUp, Shield, Factory, BarChart3, Server } from 'lucide-react';
import { motion } from 'motion/react';
import { HoverBorderButton } from '@/components/ui/HoverBorderButton';

const caseStudies = [
  {
    slug: 'senegal-factory-rescue',
    eyebrow: 'MANUFACTURING · WEST AFRICA · 2024',
    title: '25 days locked out. Restored remotely from Nairobi.',
    metric: '25 days',
    metricLabel: 'Full restoration',
    icon: Factory,
    body: "Internal IT employee resigned and walked out with every password. No documentation existed. We restored full operations remotely, built a complete asset registry from scratch, and cut infrastructure cost by 50%.",
    span: 'col-span-full lg:col-span-3 lg:row-span-2',
    featured: true,
  },
  {
    slug: 'sap-hana-migration',
    eyebrow: 'MANUFACTURING · MULTI-COUNTRY · 2024',
    title: 'Shared cloud to bare-metal. EUR 58,200 saved.',
    metric: 'EUR 58K',
    metricLabel: 'Saved over 5 years',
    icon: Server,
    body: 'Migrated SAP HANA from shared cloud to dedicated bare-metal. 2–5× faster performance, disaster recovery included.',
    span: 'col-span-full sm:col-span-3 lg:col-span-3',
  },
  {
    slug: 'internal-fraud-discovery',
    eyebrow: 'FINANCIAL SERVICES · NAIROBI · 2023',
    title: 'A small invoice flag uncovered years of theft.',
    metric: 'Multi-year',
    metricLabel: 'Fraud uncovered',
    icon: Shield,
    body: 'A minor invoice discrepancy led to the discovery of a multi-year scheme by an internal IS Manager. Discovery cost nearly nothing — recovery was substantial.',
    span: 'col-span-full sm:col-span-3 lg:col-span-3',
  },
  {
    slug: 'fmcg-automation',
    eyebrow: 'FMCG · NAIROBI · 2023',
    title: 'Truck wait time: hours → minutes. Profit up 14%.',
    metric: '14%',
    metricLabel: 'Profitability increase',
    icon: TrendingUp,
    body: 'Automated the entire LPO-to-dispatch process. Real-time WhatsApp updates to every stakeholder. Month-end reconciliation went from days to a live dashboard.',
    span: 'col-span-full sm:col-span-3 lg:col-span-3',
  },
  {
    slug: 'erp-security',
    eyebrow: 'FINANCIAL SERVICES · NAIROBI · 2023',
    title: 'Zero unauthorised access incidents. Ever.',
    metric: '0',
    metricLabel: 'Security incidents',
    icon: Shield,
    body: 'Layered VPN + Active Directory + 2FA with time-based restrictions, session monitoring, and live DB replication for disaster recovery.',
    span: 'col-span-full sm:col-span-3 lg:col-span-3',
  },
];

export default function ResultsPage() {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="bg-brand-dark text-white py-32">
        <div className="container mx-auto px-4">
          <ScrollReveal direction="right">
            <span className="text-brand-orange uppercase tracking-[0.4em] text-xs font-black mb-4 block">
              What we've actually done
            </span>
            <h1 className="text-5xl md:text-7xl font-heading font-bold mb-8 leading-tight">
              Real outcomes. Real numbers.{' '}
              <span className="text-brand-orange italic">Real businesses.</span>
            </h1>
            <p className="text-xl text-white/50 max-w-3xl leading-relaxed">
              Every claim on the rest of the website is backed up here. Five case
              studies — what the business looked like before, what we did, and what
              changed.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Format note */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-4 max-w-3xl">
          <span className="text-brand-blue uppercase tracking-[0.3em] text-xs font-black mb-4 block">
            A note on the format
          </span>
          <p className="text-lg text-slate-600 leading-relaxed">
            Every case study follows the same three-part structure:{' '}
            <strong>Situation</strong> (what broke),{' '}
            <strong>Intervention</strong> (what we did),{' '}
            <strong>Resolution</strong> (the metric that changed). Specific
            outcomes — not vague testimonials.
          </p>
        </div>
      </section>

      {/* Bento Grid Case Studies */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-6 gap-4">
            {caseStudies.map((study, idx) => (
              <ScrollReveal
                key={study.slug}
                delay={idx * 0.08}
                className={study.span}
              >
                <Link
                  to={`/results/${study.slug}`}
                  className={`block group h-full border border-slate-200 hover:border-brand-blue transition-all duration-500 overflow-hidden relative ${
                    study.featured ? 'bg-brand-dark text-white' : 'bg-white'
                  }`}
                >
                  {/* Decorative gradient blob */}
                  <div
                    className={`absolute top-0 right-0 w-32 h-32 rounded-full blur-[80px] transition-opacity duration-500 opacity-0 group-hover:opacity-100 ${
                      study.featured
                        ? 'bg-brand-orange/30'
                        : 'bg-brand-blue/10'
                    }`}
                  />

                  <div className="relative z-10 p-8 md:p-10 flex flex-col h-full">
                    {/* Eyebrow + icon */}
                    <div className="flex items-start justify-between mb-6">
                      <span
                        className={`text-[9px] font-black uppercase tracking-[0.3em] ${
                          study.featured ? 'text-brand-orange' : 'text-brand-blue'
                        }`}
                      >
                        {study.eyebrow}
                      </span>
                      <study.icon
                        className={`w-6 h-6 ${
                          study.featured
                            ? 'text-brand-orange/40'
                            : 'text-brand-blue/20'
                        } group-hover:text-brand-orange transition-colors`}
                      />
                    </div>

                    {/* Metric */}
                    <div className="mb-4">
                      <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                        viewport={{ once: true }}
                        className={`text-4xl md:text-5xl font-heading font-black mb-1 ${
                          study.featured ? 'text-brand-orange' : 'text-brand-dark'
                        }`}
                      >
                        {study.metric}
                      </motion.div>
                      <span
                        className={`text-[10px] uppercase tracking-wider font-bold ${
                          study.featured ? 'text-white/40' : 'text-slate-400'
                        }`}
                      >
                        {study.metricLabel}
                      </span>
                    </div>

                    {/* Title */}
                    <h3
                      className={`text-xl md:text-2xl font-heading font-bold mb-4 leading-tight group-hover:text-brand-blue transition-colors ${
                        study.featured
                          ? 'text-white group-hover:text-brand-orange'
                          : 'text-brand-dark'
                      }`}
                    >
                      {study.title}
                    </h3>

                    {/* Body — only on featured */}
                    {study.featured && (
                      <p className="text-white/50 leading-relaxed mb-8 text-sm">
                        {study.body}
                      </p>
                    )}

                    {/* CTA */}
                    <div className="mt-auto pt-4">
                      <span
                        className={`inline-flex items-center font-black text-xs uppercase tracking-widest transition-colors group-hover:text-brand-orange ${
                          study.featured ? 'text-white/60' : 'text-brand-dark'
                        }`}
                      >
                        Read case study
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <span className="text-brand-orange uppercase tracking-[0.4em] text-xs font-black mb-4 block">
            Your turn
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-brand-dark mb-6">
            What would your case study look like in a year?
          </h2>
          <p className="text-lg text-slate-500 mb-10">
            A 20-minute Discovery Call. Tell us where you are. We'll tell you
            what we'd do.
          </p>
          <Link to="/contact">
            <HoverBorderButton variant="orange" theme="light">
              Book a Discovery Call
            </HoverBorderButton>
          </Link>
        </div>
      </section>
    </main>
  );
}
