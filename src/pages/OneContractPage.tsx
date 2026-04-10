import React from 'react';
import { Link } from 'react-router-dom';
import { ScrollReveal } from '@/components/layout/ScrollReveal';
import { ArrowRight, CheckCircle2, XCircle } from 'lucide-react';

const steps = [
  { num: '01', title: 'Audit & Assessment', desc: 'We map everything. Every device, every license, every vendor, every contract, every credential. Most clients discover 30-40% more IT assets than they thought they had.' },
  { num: '02', title: 'Solution Design', desc: 'We design a unified architecture — physical security, cloud, software, data — that eliminates redundancy, closes gaps, and gives you one documented system where you previously had five.' },
  { num: '03', title: 'Deployment', desc: 'We build and configure everything. Structured cabling, server rooms, CCTV, access control, cloud migrations, firewall deployments, Active Directory, backup systems, software — all of it, in sequence, documented as we go.' },
  { num: '04', title: 'Training', desc: 'We train your team on every system. Not a PowerPoint — a structured handover with per-user guides, escalation procedures, and documented SOPs.' },
  { num: '05', title: 'Ongoing Management', desc: 'Monthly health checks. Quarterly reviews. 24/7 monitoring for critical systems. You call one number for everything — cameras, servers, laptops, cloud, security.' },
  { num: '06', title: 'Annual IT Review', desc: 'Every year, we re-audit the entire environment. New gaps, new risks, new opportunities. The contract evolves with the business.' },
];

const scope = [
  { pillar: 'Physical & Security', items: ['CCTV & surveillance', 'Access control & biometrics', 'Electric fences & perimeter', 'Structured cabling', 'Server room build-outs'] },
  { pillar: 'Cloud & Core IT', items: ['Cloud migration & optimisation', 'Cybersecurity & firewalls', 'Active Directory & identity', 'Backup & disaster recovery', 'IP telephony', 'Corporate IT maintenance'] },
  { pillar: 'Applications & Software', items: ['Custom web applications', 'Mobile applications', 'SaaS platform development', 'ERP & process automation'] },
  { pillar: 'Data & Intelligence', items: ['Power BI dashboards', 'Data warehousing & ETL'] },
];

export default function OneContractPage() {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="bg-brand-dark text-white py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-blue/10 skew-x-12 translate-x-1/4" />
        <div className="container mx-auto px-4 relative z-10">
          <ScrollReveal direction="right">
            <span className="text-brand-orange uppercase tracking-[0.4em] text-xs font-black mb-4 block">The Positioning Anchor</span>
            <h1 className="text-5xl md:text-7xl font-heading font-bold mb-8 leading-tight max-w-4xl">
              Walk in with a <span className="text-brand-orange italic">problem.</span> <br />
              Walk out with a <span className="text-brand-blue italic">complete solution.</span>
            </h1>
            <p className="text-xl text-white/50 max-w-3xl leading-relaxed mb-12">
              Nine One Two designs, secures, and manages the technology businesses depend on — 
              from core IT infrastructure and cloud systems to the security technologies that 
              protect your operations. All under one contract.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <ScrollReveal>
            <span className="text-brand-blue uppercase tracking-[0.3em] text-xs font-black mb-4 block">The problem</span>
            <h2 className="text-4xl font-heading font-bold text-brand-dark mb-8">
              You're probably managing three to five IT vendors right now.
            </h2>
            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
              <p>One for CCTV. One for cloud or email. One for "IT support." Maybe one for software. Maybe another for telephony.</p>
              <p>Each of them sends a separate invoice. Each of them has a separate point of contact. None of them coordinate with each other. None of them document what the others are doing. And when something breaks at the intersection of two vendors' responsibilities — which is where things always break — nobody owns it.</p>
              <p><strong>The One Contract Model is the alternative.</strong></p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Hidden Cost */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <ScrollReveal>
            <span className="text-brand-orange uppercase tracking-[0.3em] text-xs font-black mb-4 block">The hidden cost</span>
            <h2 className="text-3xl font-heading font-bold text-brand-dark mb-8">
              The real cost isn't in the invoices. It's in the gaps.
            </h2>
            <ul className="space-y-4">
              {[
                'The CCTV company that installed cameras without telling the IT team about the bandwidth impact.',
                'The cloud provider that migrated your email but has no idea what your backup retention policy is.',
                'The software developer who built your app but doesn\'t know what firewall rules are in place.',
                'The IT support company that\'s been renewing licenses you stopped using two years ago.',
                'The electric fence installer who doesn\'t have the access control company\'s contact details.',
              ].map((item, i) => (
                <li key={i} className="flex gap-4 items-start text-slate-600">
                  <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </div>
      </section>

      {/* The Architecture — 6 Steps */}
      <section className="py-32 bg-brand-dark text-white">
        <div className="container mx-auto px-4">
          <ScrollReveal className="mb-16 max-w-3xl">
            <span className="text-brand-orange uppercase tracking-[0.4em] text-xs font-black mb-4 block">The architecture</span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              How the One Contract Model <span className="text-brand-orange italic">actually works.</span>
            </h2>
            <p className="text-xl text-white/50">
              A client signs one contract. 912 conducts a full technology audit — physical security, IT infrastructure, software, data, and communications. We design a complete solution, deploy it, and manage it on an ongoing basis. The client never has to think about technology again.
            </p>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <ScrollReveal key={step.num} delay={i * 0.08}>
                <div className="p-8 bg-white/5 border border-white/10 hover:bg-white/10 transition-all h-full">
                  <span className="text-5xl font-heading font-black text-white/5">{step.num}</span>
                  <h3 className="text-xl font-heading font-bold mt-2 mb-4">{step.title}</h3>
                  <p className="text-white/50 leading-relaxed">{step.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Scope */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4">
          <ScrollReveal className="mb-16 max-w-3xl">
            <span className="text-brand-blue uppercase tracking-[0.3em] text-xs font-black mb-4 block">Scope</span>
            <h2 className="text-4xl font-heading font-bold text-brand-dark">
              Everything that lives under the contract.
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {scope.map((pillar, i) => (
              <ScrollReveal key={pillar.pillar} delay={i * 0.1}>
                <div className="border border-slate-200 p-6 h-full">
                  <h3 className="font-heading font-bold text-brand-dark mb-4">{pillar.pillar}</h3>
                  <ul className="space-y-2">
                    {pillar.items.map((item) => (
                      <li key={item} className="flex gap-2 text-sm text-slate-600">
                        <CheckCircle2 className="w-4 h-4 text-brand-orange flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <ScrollReveal className="mb-12">
            <span className="text-brand-orange uppercase tracking-[0.3em] text-xs font-black mb-4 block">The real difference</span>
            <h2 className="text-3xl font-heading font-bold text-brand-dark">Traditional model vs 912 model.</h2>
          </ScrollReveal>
          <ScrollReveal>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b-2 border-brand-dark">
                    <th className="py-4 pr-4 text-sm font-heading font-bold text-brand-dark uppercase tracking-wider w-1/3">What happens</th>
                    <th className="py-4 px-4 text-sm font-heading font-bold text-slate-400 uppercase tracking-wider w-1/3">Traditional (3-5 vendors)</th>
                    <th className="py-4 pl-4 text-sm font-heading font-bold text-brand-orange uppercase tracking-wider w-1/3">912 One Contract</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  {[
                    ['Something breaks', 'Three calls. Finger-pointing begins.', 'One call. We own it.'],
                    ['New office setup', '4 vendors, 4 timelines, nobody coordinates.', 'One project plan. One team.'],
                    ['Annual IT review', 'Doesn\'t happen.', 'Built into the contract.'],
                    ['Disaster recovery test', 'Never been tested.', 'Tested quarterly with reports.'],
                    ['Employee leaves', 'Passwords leave with them.', 'Centralised credential vault. Access revoked in minutes.'],
                    ['Cost visibility', '5 invoices. Hidden overlap.', 'One invoice. One number.'],
                  ].map(([what, trad, nine12], i) => (
                    <tr key={i} className="border-b border-slate-200">
                      <td className="py-4 pr-4 font-medium text-brand-dark">{what}</td>
                      <td className="py-4 px-4 text-slate-400">{trad}</td>
                      <td className="py-4 pl-4 text-brand-dark font-medium">{nine12}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Who it's for */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <ScrollReveal>
            <span className="text-brand-blue uppercase tracking-[0.3em] text-xs font-black mb-4 block">Who this is for</span>
            <h2 className="text-3xl font-heading font-bold text-brand-dark mb-8">Best fit for the One Contract Model.</h2>
            <ul className="space-y-4">
              {[
                'Businesses with 30-500 employees who want one IT partner instead of five.',
                'Companies expanding into new African markets who need consistent IT standards across locations.',
                'Organisations that have never had a proper IT audit and suspect they\'re overspending.',
                'Companies whose IT is run by one internal person with no documentation or redundancy.',
                'Businesses that have been burned by an IT vendor and want structural accountability.',
              ].map((item, i) => (
                <li key={i} className="flex gap-4 items-start text-slate-600 text-lg">
                  <CheckCircle2 className="w-5 h-5 text-brand-orange flex-shrink-0 mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </div>
      </section>

      {/* Senegal proof */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <ScrollReveal>
            <span className="text-brand-orange uppercase tracking-[0.3em] text-xs font-black mb-4 block">Proof: The Senegal Recovery</span>
            <h2 className="text-3xl font-heading font-bold text-brand-dark mb-6">
              25 days locked out. Zero documentation. Fully restored — remotely, from Nairobi.
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              A manufacturing client's internal IT employee resigned and walked out with every password. 
              No handover. No asset registry. No backup credentials. We restored full operations remotely 
              and built a documentation-first environment from scratch. That client is now on a 912 One Contract.
            </p>
            <Link to="/results/senegal-factory-rescue" className="inline-flex items-center text-brand-blue font-bold hover:text-brand-orange transition-colors group">
              Read the full case study
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-brand-orange text-white text-center">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <h2 className="text-4xl md:text-6xl font-heading font-bold mb-8">
              What would your IT audit reveal?
            </h2>
            <p className="text-xl mb-12 max-w-2xl mx-auto opacity-90">
              A 20-minute Discovery Call. No pitch. We'll map your current vendors, identify gaps, 
              and tell you honestly whether the One Contract Model is a fit.
            </p>
            <Link to="/contact" className="inline-flex items-center justify-center bg-brand-dark hover:bg-brand-dark/90 text-white font-bold text-xl px-12 py-6 transition-colors">
              Book a Discovery Call
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
