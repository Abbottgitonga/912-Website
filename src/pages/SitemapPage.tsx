import React from 'react';
import { Link } from 'react-router-dom';
import { ScrollReveal } from '@/components/layout/ScrollReveal';
import { Layers, Building2, TrendingUp, Info, ShieldCheck } from 'lucide-react';

const sitemapData = [
  {
    category: "The Four Pillars",
    icon: Layers,
    links: [
      { label: "Physical & Security Infrastructure", href: "/services/physical-security" },
      { label: "Cloud & Core IT", href: "/services/cloud-it" },
      { label: "Applications & Software", href: "/services/applications-software" },
      { label: "Data & Intelligence", href: "/services/data-intelligence" },
      { label: "All Services Hub", href: "/services" }
    ]
  },
  {
    category: "Industries We Serve",
    icon: Building2,
    links: [
      { label: "Financial Services", href: "/industries/financial-services" },
      { label: "Manufacturing & Logistics", href: "/industries/manufacturing-logistics" },
      { label: "Healthcare", href: "/industries/healthcare" },
      { label: "Retail & E-commerce", href: "/industries/retail-ecommerce" }
    ]
  },
  {
    category: "Proven Results",
    icon: TrendingUp,
    links: [
      { label: "Client Case Studies", href: "/results" },
      { label: "Senegal Factory Rescue", href: "/results/senegal-factory-rescue" },
      { label: "SAP Hana Migration", href: "/results/sap-hana-migration" },
      { label: "Internal Fraud Discovery", href: "/results/internal-fraud-discovery" },
      { label: "FMCG Automation", href: "/results/fmcg-automation" },
      { label: "ERP Security Audit", href: "/results/erp-security" }
    ]
  },
  {
    category: "Company & Resources",
    icon: Info,
    links: [
      { label: "Our Story", href: "/about" },
      { label: "The One Contract Model", href: "/about/one-contract" },
      { label: "Our Team", href: "/about/team" },
      { label: "Intelligence Blog", href: "/blog" },
      { label: "Resources Hub", href: "/resources" },
      { label: "Contact Us", href: "/contact" }
    ]
  },
  {
    category: "Legal & Utility",
    icon: ShieldCheck,
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Sitemap", href: "/sitemap" }
    ]
  }
];

export default function SitemapPage() {
  return (
    <main className="pt-40 lg:pt-48 pb-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="max-w-4xl mx-auto text-center mb-20">
            <span className="text-brand-orange uppercase tracking-[0.4em] text-xs font-black mb-4 block">Site Architecture</span>
            <h1 className="text-5xl md:text-7xl font-heading font-bold tracking-tighter leading-[0.9] mb-8 uppercase text-brand-dark">
              Sitemap
            </h1>
            <p className="text-xl text-slate-500 font-medium">
              A comprehensive directory of the 912 digital ecosystem.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sitemapData.map((section, idx) => (
            <ScrollReveal key={section.category} delay={idx * 0.1}>
              <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-slate-100 rounded-2xl flex items-center justify-center text-brand-blue">
                    <section.icon className="w-6 h-6" />
                  </div>
                  <h2 className="font-heading font-bold text-xl text-brand-dark uppercase tracking-wide">
                    {section.category}
                  </h2>
                </div>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.href}>
                      <Link 
                        to={link.href} 
                        className="text-slate-600 hover:text-brand-orange transition-colors flex items-center gap-2 group"
                      >
                        <span className="w-1.5 h-1.5 bg-slate-200 rounded-full group-hover:bg-brand-orange transition-colors" />
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </main>
  );
}
