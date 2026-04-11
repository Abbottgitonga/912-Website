import React from 'react';
import { ScrollReveal } from '@/components/layout/ScrollReveal';

export default function PrivacyPolicyPage() {
  return (
    <main className="pt-40 lg:pt-48 pb-24 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <ScrollReveal>
          <span className="text-brand-orange uppercase tracking-[0.4em] text-xs font-black mb-4 block">Legal Infrastructure</span>
          <h1 className="text-4xl md:text-7xl font-heading font-bold tracking-tighter leading-[0.9] mb-12 uppercase text-brand-dark">
            Privacy Policy
          </h1>
          
          <div className="prose prose-slate prose-lg max-w-none text-slate-600 space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-brand-dark mb-4">1. Introduction</h2>
              <p>
                Nine One Two Limited ("912", "we", "us", or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal data in accordance with the <strong>Kenya Data Protection Act, 2019</strong> and other applicable laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-dark mb-4">2. Data Collection</h2>
              <p>We collect information that you provide directly to us when you:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Inquire about our services via our website or contact forms.</li>
                <li>Submit your information for a discovery call or technical audit.</li>
                <li>Engage with us for managed IT services, cybersecurity, or software development.</li>
                <li>Interact with our digital marketing emails or intelligence reports.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-dark mb-4">3. Use of Information</h2>
              <p>We use the collected data to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide and maintain our "One Contract" IT services.</li>
                <li>Communicate technical updates and service reports.</li>
                <li>Process payments and manage your account.</li>
                <li>Improve our website and diagnostic tools.</li>
                <li>Comply with regular legal and regulatory requirements in the Republic of Kenya.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-dark mb-4">4. Data Sharing and Disclosure</h2>
              <p>
                We do not sell your personal data. We may share information with trusted third-party service providers (e.g., cloud hosting partners like Microsoft/AWS) only as necessary to deliver our services. 
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-dark mb-4">5. Security</h2>
              <p>
                As a cybersecurity provider, we implement the highest industry standards to protect your data. However, no method of transmission over the Internet is 100% secure. We employ multi-layer encryption and strict access controls to minimize risk.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-brand-dark mb-4">6. Contact Us</h2>
              <p>
                If you have questions about this policy or your data rights, please contact our Data Protection Officer at <strong>info@nineonetwo.co.ke</strong>.
              </p>
            </section>
          </div>
          
          <p className="mt-16 text-xs text-slate-400 border-t pt-8">
            Last updated: April 11, 2026. This policy is subject to change as our services evolve.
          </p>
        </ScrollReveal>
      </div>
    </main>
  );
}
