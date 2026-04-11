import React from 'react';
import { ServiceLayout } from '@/components/layout/ServiceLayout';
import { Cloud, Server, Shield, Globe, Zap, Cpu } from 'lucide-react';

import { CloudAnimation } from '@/components/ui/ServiceHeroAnimations';

export default function CloudPage() {
  return (
    <ServiceLayout
      hero={{
        title: "Cloud & Core IT Infrastructure",
        subtitle: "Scalable Solutions | 99.9% Uptime | Modern Architecture",
        description: "Enhance your business with 912 cloud solutions. We provide flexible cloud strategies that unlock the full potential of cloud computing with powerful and reliable features.",
        animation: <CloudAnimation />,
        breadcrumbs: [
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Cloud & Core IT" }
        ]
      }}
      capabilities={{
        title: "Enterprise Cloud Capabilities",
        items: [
          {
            title: "Cloud Migration",
            description: "Seamlessly move your workloads to the cloud.",
            points: [
              "Lift-and-shift strategies",
              "Application refactoring",
              "Zero-downtime migration"
            ]
          },
          {
            title: "Managed Infrastructure",
            description: "Expert management of your core IT systems.",
            points: [
              "24/7 monitoring & support",
              "Patch management",
              "Performance optimization"
            ]
          },
          {
            title: "Hybrid Cloud",
            description: "The best of both worlds: public and private.",
            points: [
              "Unified management plane",
              "Secure connectivity",
              "Workload portability"
            ]
          }
        ]
      }}
      challenges={{
        title: "Is your infrastructure holding you back?",
        items: [
          "Inflexible legacy systems that cannot scale with business growth.",
          "High capital expenditure on physical hardware and data centers.",
          "Security vulnerabilities in aging infrastructure.",
          "Lack of specialized talent to manage complex cloud environments."
        ]
      }}
      process={{
        title: "Our Cloud Journey",
        description: "A proven path to digital maturity.",
        steps: [
          {
            title: "Readiness Assessment",
            description: "Evaluating your current environment and defining migration goals."
          },
          {
            title: "Architecture Design",
            description: "Building a secure, scalable, and cost-effective cloud blueprint."
          },
          {
            title: "Execution & Optimization",
            description: "Migrating workloads and continuously tuning for performance."
          }
        ]
      }}
      advantages={{
        title: "The 912 Advantage",
        items: [
          {
            title: "99.9% Uptime Guaranteed",
            description: "Our resilient architectures ensure your business stays online, always."
          },
          {
            title: "Global Reach",
            description: "Deploy applications closer to your users with global cloud regions."
          },
          {
            title: "Cost Transparency",
            description: "Real-time visibility into your cloud spend with automated cost optimization."
          },
          {
            title: "Security First",
            description: "Compliance-ready infrastructure with built-in security best practices."
          }
        ]
      }}
      outcomes={{
        title: "Outcomes That Matter",
        subtitle: "Driving Innovation Through Infrastructure",
        stats: [
          { value: "40%", label: "Cost Reduction" },
          { value: "99.99%", label: "Availability" },
          { value: "2x", label: "Deployment Speed" }
        ]
      }}
    >
      {/* Custom Section based on Inspiration Image 7 */}
      <section className="py-24 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-heading font-bold text-brand-dark mb-6 text-center">Challenges we solve</h2>
            <p className="text-gray-500">Modern businesses face complex operational challenges. We provide the expertise to navigate them.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center opacity-50 grayscale hover:grayscale-0 transition-all">
            <div className="flex justify-center font-black text-2xl text-gray-400 italic">SERVICENOW</div>
            <div className="flex justify-center font-black text-2xl text-gray-400 italic">AUTODESK</div>
            <div className="flex justify-center font-black text-2xl text-gray-400 italic">NVIDIA</div>
            <div className="flex justify-center font-black text-2xl text-gray-400 italic">FORTINET</div>
          </div>
        </div>
      </section>
    </ServiceLayout>
  );
}
