import React from 'react';
import { Link } from 'react-router-dom';
import { ScrollReveal } from '@/components/layout/ScrollReveal';
import { ArrowRight, Shield, Cloud, Code, BarChart3 } from 'lucide-react';
import { HoverBorderButton } from '@/components/ui/HoverBorderButton';

const pillars = [
  {
    num: '01',
    title: 'Physical & Security Infrastructure',
    icon: Shield,
    oneLiner: 'The physical layer. Cameras, fences, doors, cabling, server rooms.',
    body: 'The hardware that protects your premises and the infrastructure that makes everything else work. We design and install ODPC-compliant CCTV systems, biometric access control, electric fences, structured cabling, and server room build-outs. We also maintain them — properly, with documentation, with monthly health checks.',
    services: ['CCTV Systems', 'Biometric Access Control', 'Electric Fence & Perimeter Security', 'Visitor Management Systems', 'Structured Cabling & Server Rooms'],
    href: '/services/physical-security',
  },
  {
    num: '02',
    title: 'Cloud & Core IT',
    icon: Cloud,
    oneLiner: 'The digital backbone. Cloud, security, identity, backups, telephony, day-to-day IT.',
    body: "The systems your business runs on. Cloud migration and cost optimisation. Cybersecurity and firewall management. Active Directory and identity management. Backup and disaster recovery. IP telephony. Most \"managed IT\" providers stop at this pillar — for 912, this is one of four.",
    services: ['Cloud Migration & Cost Optimisation', 'Cybersecurity & Firewall Management', 'Active Directory & Identity', 'Backup & Disaster Recovery', 'IP Telephony', 'Corporate IT Maintenance'],
    href: '/services/cloud-it',
  },
  {
    num: '03',
    title: 'Applications & Software',
    icon: Code,
    oneLiner: 'The custom software your operations team actually uses.',
    body: "The applications, platforms, and automations built for the way your business actually runs. Custom web and mobile applications, ERP systems, SaaS platforms, process automation. Built around the realities of African operations — M-Pesa-aware, WhatsApp-aware, designed for the network conditions you actually have.",
    services: ['Custom Web Application Development', 'Mobile Application Development', 'SaaS Platform Development', 'ERP Systems & Process Automation'],
    href: '/services/applications-software',
  },
  {
    num: '04',
    title: 'Data & Intelligence',
    icon: BarChart3,
    oneLiner: 'The single source of truth your leadership team has been waiting for.',
    body: "We turn the data that's already inside your business into reports your leadership team can actually use. Power BI dashboards. Data warehousing. ETL pipelines from your existing systems. Real-time reporting on the metrics that matter.",
    services: ['Power BI Dashboards & Reporting', 'Data Engineering & Warehousing'],
    href: '/services/data-intelligence',
  },
];

export default function ServicesHubPage() {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="bg-brand-dark text-white py-32">
        <div className="container mx-auto px-4">
          <ScrollReveal direction="right">
            <span className="text-brand-orange uppercase tracking-[0.4em] text-xs font-black mb-4 block">What we do</span>
            <h1 className="text-5xl md:text-7xl font-heading font-bold mb-8 leading-tight">
              Fourteen services. Four pillars.{' '}
              <span className="text-brand-orange italic">One contract.</span>
            </h1>
            <p className="text-xl text-white/50 max-w-3xl leading-relaxed mb-10">
              You're probably managing three to five separate IT vendors right now. The 912 services architecture is the alternative — every technology your business depends on, delivered by one team under one agreement.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact">
                <HoverBorderButton variant="orange">
                  Book a Discovery Call
                </HoverBorderButton>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <ScrollReveal className="mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-brand-dark mb-4">The four pillars, explained.</h2>
          </ScrollReveal>

          <div className="space-y-20">
            {pillars.map((pillar, i) => (
              <ScrollReveal key={pillar.num} delay={i * 0.1}>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start border-b border-slate-200 pb-16 last:border-0">
                  <div className="lg:col-span-7">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-6xl font-heading font-black text-brand-blue/20">{pillar.num}</span>
                      <pillar.icon className="w-8 h-8 text-brand-orange" />
                    </div>
                    <h3 className="text-3xl font-heading font-bold text-brand-dark mb-3">{pillar.title}</h3>
                    <p className="text-brand-blue font-medium mb-4">{pillar.oneLiner}</p>
                    <p className="text-slate-500 leading-relaxed mb-6">{pillar.body}</p>
                    <Link to={pillar.href} className="inline-flex items-center min-h-[44px] text-brand-dark font-black text-xs uppercase tracking-widest hover:text-brand-orange transition-colors group">
                      Explore {pillar.title.split(' ')[0]} & {pillar.title.split(' ').slice(-1)}
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                    </Link>
                  </div>
                  <div className="lg:col-span-5">
                    <h4 className="text-xs uppercase tracking-[0.3em] font-black text-brand-blue mb-4">Services in this pillar</h4>
                    <ul className="space-y-2">
                      {pillar.services.map((s) => (
                        <li key={s} className="text-sm text-slate-600 flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-brand-orange rounded-full flex-shrink-0" />
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why one contract */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <ScrollReveal>
            <span className="text-brand-orange-accessible uppercase tracking-[0.4em] text-xs font-black mb-4 block">The architecture</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-dark mb-8">
              Why every one of these services lives under the same contract.
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              Most IT companies pick a lane and stay in it. A cybersecurity firm. A CCTV installer. A cloud reseller. An applications shop. Each of them is fine in isolation. The problem is what happens when you need three of them at once — and the typical mid-sized business needs all four pillars at once.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              The 912 model is structured around a single observation: the cost and risk of running a business on technology has nothing to do with the quality of any individual component. It has everything to do with how those components are documented, coordinated, and accounted for.
            </p>
            <Link to="/about/one-contract" className="inline-flex items-center min-h-[44px] text-brand-blue font-bold hover:text-brand-orange transition-colors group">
              Read the full One Contract Model
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <span className="text-brand-orange-accessible uppercase tracking-[0.4em] text-xs font-black mb-4 block">Where to start</span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-brand-dark mb-6">
            Not sure which pillar matters most for your business?
          </h2>
          <p className="text-lg text-slate-500 mb-10">
            A 20-minute Discovery Call. We map your current vendors against the four pillars, identify where you're overlapping, where you're exposed, and where consolidation would save the most.
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
