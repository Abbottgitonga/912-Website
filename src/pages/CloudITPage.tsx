import React from 'react';
import { ServiceLayout } from '@/components/layout/ServiceLayout';
import { Cloud, Server, Shield, PhoneCall, Zap, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export default function CloudITPage() {
  return (
    <ServiceLayout
      hero={{
        title: "Cloud & Core IT Infrastructure",
        subtitle: "Resilient Environments | Unified Communications | Enterprise Security",
        description: "We build the digital backbone of your business. Our cloud and core IT services ensure your operations are scalable, secure, and always connected across the African continent.",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000",
        breadcrumbs: [
          { label: "Home", href: "/" },
          { label: "Expertise", href: "/expertise" },
          { label: "Cloud & Core IT" }
        ]
      }}
      capabilities={{
        title: "Core IT Capabilities",
        items: [
          {
            title: "Managed Cloud",
            description: "Scalable and secure cloud environments.",
            points: [
              "Public, Private & Hybrid Cloud",
              "Cloud migration & strategy",
              "Cost optimization & management"
            ]
          },
          {
            title: "Cybersecurity",
            description: "Protecting your digital assets 24/7.",
            points: [
              "Endpoint protection",
              "Network security audits",
              "Threat detection & response"
            ]
          },
          {
            title: "Unified Comms",
            description: "Seamless connectivity for your teams.",
            points: [
              "IP Telephony (VoIP)",
              "Collaboration platforms",
              "SD-WAN & Connectivity"
            ]
          }
        ]
      }}
      challenges={{
        title: "Infrastructure Challenges",
        items: [
          "High costs of maintaining aging on-premises hardware.",
          "Security risks from unpatched systems and weak network perimeters.",
          "Difficulty scaling IT resources to meet rapid business growth.",
          "Fragmented communication tools that hinder team collaboration."
        ]
      }}
      process={{
        title: "Our IT Roadmap",
        description: "A proven path to infrastructure maturity.",
        steps: [
          {
            title: "Assessment",
            description: "Evaluating your current stack and identifying optimization opportunities."
          },
          {
            title: "Architecture",
            description: "Designing a resilient, cloud-first infrastructure blueprint."
          },
          {
            title: "Management",
            description: "Ongoing proactive monitoring and strategic IT guidance."
          }
        ]
      }}
      advantages={{
        title: "The 912 Advantage",
        items: [
          {
            title: "Pan-African Reach",
            description: "We support businesses across the continent with local expertise and global standards."
          },
          {
            title: "Zero Trust Security",
            description: "Security is baked into every layer of our infrastructure designs."
          }
        ]
      }}
      outcomes={{
        title: "Infrastructure Outcomes",
        subtitle: "Powering Your Digital Future",
        stats: [
          { value: "99.9%", label: "Uptime" },
          { value: "30%", label: "Cost Savings" },
          { value: "24/7", label: "Support" }
        ]
      }}
    >
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-heading font-bold mb-12 uppercase tracking-tight">Explore Specific Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Link to="/expertise/cloud" className="group p-12 border border-gray-100 bg-gray-50 hover:border-brand-blue transition-all">
              <Cloud className="w-12 h-12 text-brand-blue mb-6 mx-auto group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-heading font-bold mb-4">Cloud Solutions</h3>
              <p className="text-gray-500 mb-8">Scalable public, private, and hybrid cloud architectures.</p>
              <Button variant="outline" className="rounded-none border-brand-dark group-hover:bg-brand-dark group-hover:text-white">Learn More</Button>
            </Link>
            <Link to="/expertise/backup-&-recovery" className="group p-12 border border-gray-100 bg-gray-50 hover:border-brand-blue transition-all">
              <Server className="w-12 h-12 text-brand-orange mb-6 mx-auto group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-heading font-bold mb-4">Backup & Recovery</h3>
              <p className="text-gray-500 mb-8">Business continuity and disaster recovery planning.</p>
              <Button variant="outline" className="rounded-none border-brand-dark group-hover:bg-brand-dark group-hover:text-white">Learn More</Button>
            </Link>
          </div>
        </div>
      </section>
    </ServiceLayout>
  );
}
