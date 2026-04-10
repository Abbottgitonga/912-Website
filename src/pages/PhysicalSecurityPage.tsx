import React from 'react';
import { ServiceLayout } from '@/components/layout/ServiceLayout';
import { Shield, Eye, Lock, Bell, Smartphone, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ProjectShowcase } from '@/components/ui/ProjectShowcase';
import { FAQSection } from '@/components/ui/FAQSection';

const securityFaqs = [
  { question: "What is a CCTV system and how does it work?", answer: "CCTV (Closed-Circuit Television) systems record and transmit video footage to a specific, limited set of monitors. Modern IP-based CCTV allows for AI-powered analytics, remote viewing, and cloud storage." },
  { question: "How much does biometric access control cost?", answer: "Costs vary depending on the number of doors and users. Our access control solutions are scalable—starting from a single office door to multi-site, pan-African campus security systems, all managed from one platform." },
  { question: "Do you offer remote monitoring?", answer: "Yes, our surveillance architectures enable secure, remote monitoring 24/7. Your security team can view live footage and receive instant alerts on mobile devices or centralized control rooms." },
  { question: "Are your systems ODPC-compliant?", answer: "Yes. All our surveillance and access control data storage solutions are designed to be fully compliant with the Office of the Data Protection Commissioner (ODPC) regarding data residency and privacy." }
];

const securitySolutions = [
  {
    id: "access-control",
    title: "Access Control",
    description: "Comprehensive entry management and biometric solutions.",
    href: "/expertise/access-control",
    category: "Physical Security",
    image: "https://images.unsplash.com/photo-1557597774-9d2739f8f01f?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "cctv-surveillance",
    title: "CCTV & Surveillance",
    description: "AI-powered visual intelligence and remote monitoring.",
    href: "/expertise/cctv-&-surveillance",
    category: "Surveillance",
    image: "https://images.unsplash.com/photo-1496368077930-c1e31b4e5b44?auto=format&fit=crop&q=80&w=800"
  }
];

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
      <ProjectShowcase 
        items={securitySolutions} 
        title="Explore Specific Solutions"
        theme="light"
      />
      <FAQSection 
        faqs={securityFaqs} 
        title="Frequently Asked Questions" 
        subtitle="Common questions about our Physical Security services"
        theme="light"
      />
    </ServiceLayout>
  );
}
