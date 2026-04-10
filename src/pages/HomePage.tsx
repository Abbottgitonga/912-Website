import React from 'react';
import { Hero } from '@/components/home/Hero';
import { AboutSection } from '@/components/home/AboutSection';
import { ServicePillars } from '@/components/home/ServicePillars';
import { LatestNews } from '@/components/home/LatestNews';
import { OneContractModel } from '@/components/home/OneContractModel';
import { ScrollReveal } from '@/components/layout/ScrollReveal';
import { Button } from '@/components/ui/button';
import { ArrowRight, MapPin, Phone, Mail } from 'lucide-react';

export default function HomePage() {
  return (
    <main className="pt-0">
      <Hero />
      <AboutSection />
      <ServicePillars />
      <OneContractModel />
      <LatestNews />
      
      {/* Contact CTA Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <ScrollReveal direction="right">
                <h2 className="text-4xl md:text-6xl font-heading font-bold text-brand-dark leading-tight mb-8">
                  Ready to <br />
                  <span className="text-brand-blue italic">transform?</span>
                </h2>
                <p className="text-xl text-slate-500 mb-12 leading-relaxed">
                  Join the leading enterprises across Africa that trust 912 for their 
                  end-to-end technology needs. Let's build your digital future together.
                </p>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-brand-blue">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-dark">Headquarters</h4>
                      <p className="text-slate-500">The Chancery, 8th Floor, Nairobi, Kenya</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-brand-blue">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-dark">Phone</h4>
                      <p className="text-slate-500">+254 722 974 970</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-brand-blue">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-dark">Email</h4>
                      <p className="text-slate-500">info@nineonetwo.co.ke</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="left" delay={0.2}>
                <div className="bg-slate-50 p-10 border border-slate-200">
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="home-first-name" className="text-xs uppercase tracking-widest font-bold text-slate-400">First Name <span className="text-red-500" aria-hidden="true">*</span></label>
                        <input id="home-first-name" name="firstName" type="text" autoComplete="given-name" required className="w-full bg-white border border-slate-200 p-4 focus:border-brand-blue outline-none transition-colors" placeholder="John" />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="home-last-name" className="text-xs uppercase tracking-widest font-bold text-slate-400">Last Name <span className="text-red-500" aria-hidden="true">*</span></label>
                        <input id="home-last-name" name="lastName" type="text" autoComplete="family-name" required className="w-full bg-white border border-slate-200 p-4 focus:border-brand-blue outline-none transition-colors" placeholder="Doe" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="home-email" className="text-xs uppercase tracking-widest font-bold text-slate-400">Email Address <span className="text-red-500" aria-hidden="true">*</span></label>
                      <input id="home-email" name="email" type="email" autoComplete="email" required className="w-full bg-white border border-slate-200 p-4 focus:border-brand-blue outline-none transition-colors" placeholder="john@company.com" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="home-subject" className="text-xs uppercase tracking-widest font-bold text-slate-400">Subject</label>
                      <select id="home-subject" name="subject" className="w-full bg-white border border-slate-200 p-4 focus:border-brand-blue outline-none transition-colors">
                        <option>Information Security</option>
                        <option>Physical Security</option>
                        <option>Cloud & Infrastructure</option>
                        <option>IP Telephony</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="home-message" className="text-xs uppercase tracking-widest font-bold text-slate-400">Message <span className="text-red-500" aria-hidden="true">*</span></label>
                      <textarea id="home-message" name="message" required className="w-full bg-white border border-slate-200 p-4 h-32 focus:border-brand-blue outline-none transition-colors" placeholder="How can we help you?"></textarea>
                    </div>
                    <Button type="submit" className="w-full bg-brand-blue hover:bg-brand-blue/90 text-white rounded-none py-8 text-lg">
                      Send Message
                    </Button>
                  </form>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
