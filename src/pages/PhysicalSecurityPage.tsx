import React from 'react';
import { ServiceLayout } from '@/components/layout/ServiceLayout';
import { Shield, Eye, Lock, Bell, Smartphone, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export default function PhysicalSecurityPage() {
  return (
    <ServiceLayout
      hero={{
        title: "Physical & Security Infrastructure",
        subtitle: "Unified Protection | AI-Driven Surveillance | Intelligent Access",
        description: "We design and implement comprehensive physical security ecosystems that protect your people, assets, and data. From server room infrastructure to pan-African surveillance networks.",
        image: "https://images.unsplash.com/photo-1557597774-9d2739f8f01f?auto=format&fit=crop&q=80&w=2000",
        breadcrumbs: [
          { label: "Home", href: "/" },
          { label: "Expertise", href: "/expertise" },
          { label: "Physical & Security" }
        ]
      }}
      capabilities={{
        title: "Core Security Solutions",
        items: [
          {
            title: "Access Control",
            description: "Intelligent entry management for any scale.",
            points: [
              "Biometric & RFID systems",
              "Mobile key integration",
              "Multi-site unified control"
            ]
          },
          {
            title: "CCTV & Surveillance",
            description: "High-definition visual intelligence.",
            points: [
              "AI-powered object detection",
              "Remote real-time monitoring",
              "Cloud-based video storage"
            ]
          },
          {
            title: "Infrastructure",
            description: "The foundation of your security stack.",
            points: [
              "Structured cabling (Fiber/UTP)",
              "Server room design & build",
              "Environmental monitoring"
            ]
          }
        ]
      }}
      challenges={{
        title: "Common Security Gaps",
        items: [
          "Fragmented systems that don't communicate with each other.",
          "Lack of remote visibility into physical premises.",
          "Outdated hardware that is vulnerable to tampering.",
          "Inefficient manual logs for visitor and staff access."
        ]
      }}
      process={{
        title: "Our Security Framework",
        description: "A disciplined approach to physical protection.",
        steps: [
          {
            title: "Audit & Design",
            description: "Comprehensive site survey and custom system architecture."
          },
          {
            title: "Deployment",
            description: "Professional installation and configuration of high-end hardware."
          },
          {
            title: "Managed Support",
            description: "Continuous monitoring, maintenance, and system updates."
          }
        ]
      }}
      advantages={{
        title: "Why 912 Security?",
        items: [
          {
            title: "Unified Management",
            description: "Control your entire security footprint from a single dashboard."
          },
          {
            title: "Hardware Agnostic",
            description: "We integrate with the best-in-class hardware vendors globally."
          }
        ]
      }}
      outcomes={{
        title: "Security Outcomes",
        subtitle: "Peace of Mind Through Technology",
        stats: [
          { value: "100%", label: "Coverage" },
          { value: "< 5s", label: "Alert Speed" },
          { value: "24/7", label: "Monitoring" }
        ]
      }}
    >
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-heading font-bold mb-12 uppercase tracking-tight">Explore Specific Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Link to="/expertise/access-control" className="group p-12 border border-gray-100 bg-gray-50 hover:border-brand-blue transition-all">
              <Lock className="w-12 h-12 text-brand-blue mb-6 mx-auto group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-heading font-bold mb-4">Access Control</h3>
              <p className="text-gray-500 mb-8">Comprehensive entry management and biometric solutions.</p>
              <Button variant="outline" className="rounded-none border-brand-dark group-hover:bg-brand-dark group-hover:text-white">Learn More</Button>
            </Link>
            <Link to="/expertise/cctv-&-surveillance" className="group p-12 border border-gray-100 bg-gray-50 hover:border-brand-blue transition-all">
              <Eye className="w-12 h-12 text-brand-orange mb-6 mx-auto group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-heading font-bold mb-4">CCTV & Surveillance</h3>
              <p className="text-gray-500 mb-8">AI-powered visual intelligence and remote monitoring.</p>
              <Button variant="outline" className="rounded-none border-brand-dark group-hover:bg-brand-dark group-hover:text-white">Learn More</Button>
            </Link>
          </div>
        </div>
      </section>
    </ServiceLayout>
  );
}
