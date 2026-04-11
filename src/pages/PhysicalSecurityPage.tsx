import React from 'react';
import { ServiceLayout } from '@/components/layout/ServiceLayout';
import { Shield, Eye, Lock, Bell, Smartphone, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ProjectShowcase } from '@/components/ui/ProjectShowcase';
import { FAQSection } from '@/components/ui/FAQSection';
import { SEOHead } from '@/components/seo/SEOHead';
import { FAQSchema } from '@/components/seo/FAQSchema';
import { ServiceSchema } from '@/components/seo/ServiceSchema';

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
    href: "/services/access-control",
    category: "Physical Security",
    image: "/images/heroes/physical-security.png"
  },
  {
    id: "cctv-surveillance",
    title: "CCTV & Surveillance",
    description: "AI-powered visual intelligence and remote monitoring.",
    href: "/services/cctv-surveillance",
    category: "Surveillance",
    image: "/images/heroes/physical-security.png"
  }
];

export default function PhysicalSecurityPage() {
  return (
    <>
      <SEOHead
        title="CCTV Installation & Access Control Kenya — Physical Security | 912"
        description="Enterprise CCTV surveillance, biometric access control, electric fencing, and structured cabling for businesses across Kenya and Africa. Expert installation & 24/7 monitoring by 912."
      />
      <FAQSchema faqs={securityFaqs} id="physical-security-faq-schema" />
      <ServiceSchema
        name="Physical & Security Infrastructure"
        description="Comprehensive physical security solutions including CCTV surveillance, biometric access control, electric fencing, and structured cabling for enterprises across Africa."
        url="/services/physical-security"
      />
    <ServiceLayout
      hero={{
        title: "Physical & Security Infrastructure",
        subtitle: "Unified Protection | AI-Driven Surveillance | Intelligent Access",
        description: "We design and implement comprehensive physical security ecosystems that protect your people, assets, and data. From server room infrastructure to pan-African surveillance networks.",
        image: "/images/heroes/physical-security.png",
        breadcrumbs: [
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
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
      aeo={{
        question: "Why should an enterprise choose integrated security over standalone CCTV?",
        directAnswer: "Standalone CCTV systems only record events, whereas integrated physical security links video surveillance with biometric access control, fire alarms, and HR systems. This enables automated alerting, prevents unauthorized remote access, and eliminates ghost worker payroll fraud—creating a proactive defense rather than reactive recording.",
        statistics: [
          { value: "68%", label: "Faster incident response", source: "Security Industry Association (SIA)" },
          { value: "3x", label: "Higher ROI vs standalone", source: "Enterprise Security Audit" }
        ],
        expertQuote: {
          text: "The days of a guard staring at a wall of monitors are over. Modern physical security in Africa requires AI-driven object detection and multi-site remote visibility synchronized with central ERP systems.",
          author: "Josephine Wanjiru",
          role: "Systems Integration Specialist, 912"
        }
      }}
    >
      <ProjectShowcase 
        items={securitySolutions} 
        title="Explore Specific Solutions"
        theme="light"
      />
      <FAQSection 
        faqs={securityFaqs} 
        title="Common Questions" 
        subtitle="Answers to the most frequent inquiries about our Physical Security services"
        theme="light"
      />
    </ServiceLayout>
    </>
  );
}
