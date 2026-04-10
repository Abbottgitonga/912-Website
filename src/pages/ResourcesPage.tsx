import React from 'react';
import { Link } from 'react-router-dom';
import { ScrollReveal } from '@/components/layout/ScrollReveal';
import { FileSpreadsheet, Shield, BarChart3, CheckCircle2 } from 'lucide-react';

export default function ResourcesPage() {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="bg-brand-dark text-white py-32">
        <div className="container mx-auto px-4">
          <ScrollReveal direction="right">
            <span className="text-brand-orange uppercase tracking-[0.4em] text-xs font-black mb-4 block">Resources</span>
            <h1 className="text-5xl md:text-7xl font-heading font-bold mb-8 leading-tight">
              The Digital Asset Registry{' '}
              <span className="text-brand-orange italic">template.</span>
            </h1>
            <p className="text-xl text-white/50 max-w-3xl leading-relaxed">
              This is the same four-tab Excel workbook we use with every 912 client during our initial audit. It's not a freebie or a marketing handout — it's the actual template our team uses, shared publicly, because if more Nairobi businesses had one of these, our job would be a lot easier.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Tabs */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <span className="text-brand-blue uppercase tracking-[0.3em] text-xs font-black mb-4 block">What you get</span>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-brand-dark mb-12">
              Four tabs. One workbook. Everything your IT environment should have on it.
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { icon: FileSpreadsheet, title: 'Tab 1 — Hardware Asset Registry', desc: 'Every device on your network. Make, model, serial number, purchase date, location, owner, support contract, end-of-life date.' },
              { icon: Shield, title: 'Tab 2 — Software Asset Registry', desc: 'Every license, subscription, cloud service. Vendor, contract number, renewal date, monthly/annual cost in KES, license count.' },
              { icon: BarChart3, title: 'Tab 3 — Cost Tracker', desc: 'Auto-calculated total monthly and annual IT spend, broken down by category. The number that comes out of this tab is usually 20–40% higher than the finance director thought.' },
              { icon: CheckCircle2, title: 'Tab 4 — Gap Checklist', desc: 'A checklist of things every business should have but most don\'t. Documented backup restore tests, AD hygiene, firewall config, ODPC retention policy.' },
            ].map((tab, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="p-8 border border-slate-200 hover:border-brand-blue transition-colors group h-full">
                  <tab.icon className="w-8 h-8 text-brand-orange mb-4" />
                  <h3 className="text-xl font-heading font-bold text-brand-dark mb-3">{tab.title}</h3>
                  <p className="text-slate-500 leading-relaxed">{tab.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Download form */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 max-w-2xl">
          <ScrollReveal>
            <span className="text-brand-orange uppercase tracking-[0.4em] text-xs font-black mb-4 block">Get the template</span>
            <h2 className="text-3xl font-heading font-bold text-brand-dark mb-8">Download the workbook.</h2>
            <form className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="res-name" className="text-xs uppercase tracking-widest font-bold text-slate-400">Full name <span className="text-red-500">*</span></label>
                <input id="res-name" type="text" required className="w-full bg-white border border-slate-200 p-4 focus:border-brand-blue outline-none transition-colors" />
              </div>
              <div className="space-y-2">
                <label htmlFor="res-email" className="text-xs uppercase tracking-widest font-bold text-slate-400">Work email <span className="text-red-500">*</span></label>
                <input id="res-email" type="email" required className="w-full bg-white border border-slate-200 p-4 focus:border-brand-blue outline-none transition-colors" />
              </div>
              <div className="space-y-2">
                <label htmlFor="res-company" className="text-xs uppercase tracking-widest font-bold text-slate-400">Company name <span className="text-red-500">*</span></label>
                <input id="res-company" type="text" required className="w-full bg-white border border-slate-200 p-4 focus:border-brand-blue outline-none transition-colors" />
              </div>
              <div className="space-y-2">
                <label htmlFor="res-vendors" className="text-xs uppercase tracking-widest font-bold text-slate-400">How many IT vendors are you currently working with?</label>
                <select id="res-vendors" className="w-full bg-white border border-slate-200 p-4 focus:border-brand-blue outline-none transition-colors">
                  <option>1</option>
                  <option>2–3</option>
                  <option>4–5</option>
                  <option>6+</option>
                  <option>I'm not sure</option>
                </select>
              </div>
              <button type="submit" className="w-full bg-brand-orange hover:bg-brand-orange/90 text-white font-bold text-lg py-5 transition-colors">
                Send me the template
              </button>
              <p className="text-xs text-slate-400 text-center">
                We don't run automated email sequences. You'll receive the template once. If you'd like a follow-up conversation, you'll have to ask for one.
              </p>
            </form>
          </ScrollReveal>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <ScrollReveal className="text-center mb-12">
            <span className="text-brand-blue uppercase tracking-[0.3em] text-xs font-black mb-4 block">A small case</span>
            <h2 className="text-3xl font-heading font-bold text-brand-dark">What our clients have found in their first audit.</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { value: '60+', label: 'Average distinct hardware items at a 50-employee business' },
              { value: '3.4×', label: '"Things on the network" vs "things the IT manager remembered"' },
              { value: 'KES 280K/mo', label: 'Median monthly IT spend the finance director didn\'t know about' },
            ].map((stat, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="text-center p-8 bg-slate-50 border border-slate-200">
                  <div className="text-4xl font-heading font-bold text-brand-dark mb-2">{stat.value}</div>
                  <p className="text-sm text-slate-500">{stat.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <span className="text-brand-orange uppercase tracking-[0.4em] text-xs font-black mb-4 block">Or skip the form</span>
          <h2 className="text-3xl font-heading font-bold text-brand-dark mb-6">Already know you want to talk?</h2>
          <p className="text-lg text-slate-500 mb-10">Skip the template and book a Discovery Call directly. We'll send you the workbook either way.</p>
          <Link to="/contact" className="inline-flex items-center justify-center bg-brand-orange hover:bg-brand-orange/90 text-white font-bold text-lg px-10 py-5 transition-colors">
            Book a Discovery Call
          </Link>
        </div>
      </section>
    </main>
  );
}
