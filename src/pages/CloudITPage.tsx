import React from 'react';
import { ServiceLayout } from '@/components/layout/ServiceLayout';
import { Cloud, Server, Shield, PhoneCall, Zap, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ProjectShowcase } from '@/components/ui/ProjectShowcase';
import { FAQSection } from '@/components/ui/FAQSection';
import { AEOBlock } from '@/components/ui/AEOBlock';

const cloudFaqs = [
  { question: "What is cloud migration?", answer: "Cloud migration involves moving your digital assets, services, databases, IT resources, and applications either partially, or wholly, into the cloud. It helps scale your business dynamically." },
  { question: "How much does managed IT cost?", answer: "Managed IT costs depend on the number of users, complexity of your network, and the specific services required (like cybersecurity, backups, and 24/7 support). We offer transparent, predictable monthly pricing under our One Contract model." },
  { question: "Is our data safe in the cloud?", answer: "Yes. Our cloud architectures implement Zero Trust security, regular penetration testing, automated backups, and strict access controls to ensure your data is more secure than on most on-premise servers." },
  { question: "Do you support hybrid cloud environments?", answer: "Absolutely. We specialize in hybrid environments, allowing you to keep sensitive workloads on-premises while taking advantage of cloud scalability for other applications." }
];

const cloudSolutions = [
  {
    id: "cloud-solutions",
    title: "Cloud Solutions",
    description: "Scalable public, private, and hybrid cloud architectures.",
    href: "/services/cloud",
    category: "Infrastructure",
    image: "/images/heroes/cloud-it.png"
  },
  {
    id: "backup-recovery",
    title: "Backup & Recovery",
    description: "Business continuity and disaster recovery planning.",
    href: "/services/backup-recovery",
    category: "Resilience",
    image: "/images/heroes/cloud-it.png"
  }
];

export default function CloudITPage() {
  return (
    <ServiceLayout
      hero={{
        title: "Cloud & Core IT Infrastructure",
        subtitle: "Resilient Environments | Unified Communications | Enterprise Security",
        description: "We build the digital backbone of your business. Whether you need Fully Managed IT to outsource your entire technology stack, or Co-Managed IT to empower your existing internal team, our engineers ensure your operations are scalable, secure, and always connected.",
        image: "/images/heroes/cloud-it.png",
        breadcrumbs: [
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
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
            title: "Co-Managed & Fully Managed IT",
            description: "Scalable IT support tailored to your team.",
            points: [
              "Augment your internal IT team (Co-Managed)",
              "Complete IT outsourcing (Fully Managed)",
              "Strategic vCIO & roadmap consulting"
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
      <div className="container mx-auto px-4 py-12">
        <AEOBlock 
          question="What is Co-Managed IT in Africa?"
          directAnswer="Co-Managed IT is a partnership model where an enterprise's internal IT department collaborates with an external Managed Service Provider (MSP) like 912. Instead of replacing internal staff, the MSP handles complex infrastructure—such as cloud migrations, true zero-trust cybersecurity, and compliance—while the internal team focuses on daily business operations."
          statistics={[
            { value: "45%", label: "Reduction in downtime", source: "Gartner Peer Insights 2024" },
            { value: "0", label: "Unauthorized branches", source: "912 Internal Metrics" }
          ]}
          expertQuote={{
            text: "Most African enterprises don't need to fire their IT guy, they need to arm him with an enterprise cloud security grid so he stops drowning in server patches.",
            author: "Technical Director",
            role: "912 End-to-End Infrastructure"
          }}
          theme="light"
        />
      </div>

      <ProjectShowcase 
        items={cloudSolutions} 
        title="Explore Specific Solutions"
        theme="light"
      />
      <FAQSection 
        faqs={cloudFaqs} 
        title="Common Questions" 
        subtitle="Answers to the most frequent inquiries about our Cloud & Core IT infrastructure"
        theme="light"
      />
    </ServiceLayout>
  );
}
