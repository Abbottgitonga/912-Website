import React from 'react';
import { ScrollReveal } from '@/components/layout/ScrollReveal';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Mail, Clock, ArrowRight } from 'lucide-react';

export default function ContactPage() {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="bg-brand-dark text-white py-32">
        <div className="container mx-auto px-4">
          <ScrollReveal direction="right">
            <h1 className="text-5xl md:text-7xl font-heading font-bold mb-8">
              Let's <span className="text-brand-orange italic">Connect</span>
            </h1>
            <p className="text-2xl text-white/60 max-w-2xl leading-relaxed">
              Ready to start your digital transformation journey? Our team is here to help you 
              navigate the complexities of modern technology.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
            {/* Info */}
            <div className="lg:col-span-5 space-y-12">
              <ScrollReveal direction="right">
                <h2 className="text-3xl font-heading font-bold text-brand-dark mb-8">Get in touch</h2>
                <div className="space-y-8">
                  <div className="flex gap-6">
                    <div className="w-12 h-12 bg-slate-50 flex items-center justify-center text-brand-blue flex-shrink-0">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-dark mb-1">Headquarters</h4>
                      <p className="text-slate-500">The Chancery, 8th Floor, Valley Road</p>
                      <p className="text-slate-500">Nairobi, Kenya</p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="w-12 h-12 bg-slate-50 flex items-center justify-center text-brand-blue flex-shrink-0">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-dark mb-1">Phone</h4>
                      <p className="text-slate-500">+254 722 974 970</p>
                      <p className="text-slate-500">+254 20 562 1000</p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="w-12 h-12 bg-slate-50 flex items-center justify-center text-brand-blue flex-shrink-0">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-dark mb-1">Email</h4>
                      <p className="text-slate-500">info@nineonetwo.co.ke</p>
                      <p className="text-slate-500">sales@nineonetwo.co.ke</p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="w-12 h-12 bg-slate-50 flex items-center justify-center text-brand-blue flex-shrink-0">
                      <Clock className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-dark mb-1">Business Hours</h4>
                      <p className="text-slate-500">Monday - Friday: 8:00 AM - 5:00 PM</p>
                      <p className="text-slate-500">Saturday - Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="right" delay={0.2}>
                <div className="p-8 bg-brand-blue text-white">
                  <h3 className="text-xl font-heading font-bold mb-4">Emergency Support</h3>
                  <p className="opacity-80 mb-6">
                    Existing clients with active AMC contracts can access 24/7 emergency support 
                    via their dedicated account manager.
                  </p>
                  <Button variant="outline" className="border-white text-white hover:bg-white hover:text-brand-blue rounded-none w-full">
                    Client Login
                  </Button>
                </div>
              </ScrollReveal>
            </div>

            {/* Form & Calendly */}
            <div className="lg:col-span-7 space-y-16">
              <ScrollReveal direction="left">
                <div className="bg-slate-50 p-10 border border-slate-200">
                  <h3 className="text-2xl font-heading font-bold text-brand-dark mb-8">Send us a message</h3>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="contact-first-name" className="text-xs uppercase tracking-widest font-bold text-slate-400">First Name <span className="text-red-500" aria-hidden="true">*</span></label>
                        <input id="contact-first-name" name="firstName" type="text" autoComplete="given-name" required className="w-full bg-white border border-slate-200 p-4 focus:border-brand-blue outline-none transition-colors" placeholder="John" />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="contact-last-name" className="text-xs uppercase tracking-widest font-bold text-slate-400">Last Name <span className="text-red-500" aria-hidden="true">*</span></label>
                        <input id="contact-last-name" name="lastName" type="text" autoComplete="family-name" required className="w-full bg-white border border-slate-200 p-4 focus:border-brand-blue outline-none transition-colors" placeholder="Doe" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="contact-email" className="text-xs uppercase tracking-widest font-bold text-slate-400">Email Address <span className="text-red-500" aria-hidden="true">*</span></label>
                      <input id="contact-email" name="email" type="email" autoComplete="email" required className="w-full bg-white border border-slate-200 p-4 focus:border-brand-blue outline-none transition-colors" placeholder="john@company.com" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="contact-message" className="text-xs uppercase tracking-widest font-bold text-slate-400">Message <span className="text-red-500" aria-hidden="true">*</span></label>
                      <textarea id="contact-message" name="message" required className="w-full bg-white border border-slate-200 p-4 h-32 focus:border-brand-blue outline-none transition-colors" placeholder="How can we help you?"></textarea>
                    </div>
                    <Button type="submit" className="w-full bg-brand-blue hover:bg-brand-blue/90 text-white rounded-none py-8 text-lg">
                      Send Message
                    </Button>
                  </form>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="left" delay={0.2}>
                <div className="border border-slate-200 p-10">
                  <h3 className="text-2xl font-heading font-bold text-brand-dark mb-6">Schedule a Call</h3>
                  <p className="text-slate-500 mb-8">
                    Prefer a direct conversation? Book a 15-minute discovery call with one of our 
                    technology consultants.
                  </p>
                  <div className="bg-slate-100 aspect-video flex items-center justify-center border-2 border-dashed border-slate-300">
                    <div className="text-center">
                      <p className="text-slate-400 font-medium mb-4">[Calendly Embed Placeholder]</p>
                      <Button className="bg-brand-orange hover:bg-brand-orange/90 text-white rounded-none">
                        Open Scheduler
                      </Button>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="h-[500px] bg-slate-200 relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-blue/10 z-10 pointer-events-none" />
        <img 
          src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=2000" 
          alt="Aerial view of Nairobi, Kenya — location of 912 headquarters" 
          loading="lazy"
          width="2000"
          height="500"
          className="w-full h-full object-cover grayscale opacity-50"
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
          <div className="w-8 h-8 bg-brand-orange rounded-full animate-ping absolute" />
          <div className="w-8 h-8 bg-brand-orange rounded-full relative flex items-center justify-center shadow-lg">
            <div className="w-3 h-3 bg-white rounded-full" />
          </div>
        </div>
      </section>
    </main>
  );
}
