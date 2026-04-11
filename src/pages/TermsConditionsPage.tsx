import React from 'react';
import { ScrollReveal } from '@/components/layout/ScrollReveal';

export default function TermsConditionsPage() {
  return (
    <main className="pt-40 lg:pt-48 pb-24 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <ScrollReveal>
          <span className="text-brand-orange uppercase tracking-[0.4em] text-xs font-black mb-4 block">Legal Infrastructure</span>
          <h1 className="text-4xl md:text-7xl font-heading font-bold tracking-tighter leading-[0.9] mb-12 uppercase text-brand-dark">
            Terms of Service
          </h1>
          
          <div className="prose prose-slate prose-lg max-w-none text-slate-600 space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-brand-dark mb-4">1. Acceptance of Terms</h2>
              <p>
                By accessing and using this website or engaging the services of Nine One Two Limited ("912"), you agree to be bound by these Terms and Conditions. If you do not agree, please do not use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-dark mb-4">2. Service Provision</h2>
              <p>
                912 provides managed IT services, infrastructure security, and software development under a unified "One Contract" model. Specific Service Level Agreements (SLAs) will be outlined in individual Client Service Agreements.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-dark mb-4">3. Intellectual Property</h2>
              <p>
                All content on this website, including text, graphics, logos, and technical documentation, is the property of Nine One Two Limited or its licensors and is protected by intellectual property laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-dark mb-4">4. Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by the laws of Kenya, 912 shall not be liable for any indirect, incidental, or consequential damages resulting from the use or inability to use our services or website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-dark mb-4">5. Governing Law</h2>
              <p>
                These Terms and Conditions shall be governed by and construed in accordance with the laws of the Republic of Kenya. Any disputes arising shall be subject to the exclusive jurisdiction of the Kenyan courts.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-dark mb-4">6. Modification</h2>
              <p>
                We reserve the right to modify these terms at any time. Continued use of our website or services constitutes acceptance of the updated terms.
              </p>
            </section>
          </div>
          
          <p className="mt-16 text-xs text-slate-400 border-t pt-8">
            Last updated: April 11, 2026.
          </p>
        </ScrollReveal>
      </div>
    </main>
  );
}
