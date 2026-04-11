import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ServiceLayout } from '@/components/layout/ServiceLayout';
import { Building2, Factory, Stethoscope, ShoppingBag, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const industries = {
  'financial-services': {
    title: "Financial Services",
    subtitle: "Security | Compliance | Scalability",
    description: "Reliable IT infrastructure and cybersecurity for banks, SACCOs, and fintech platforms in East Africa.",
    icon: Building2,
    image: "https://images.unsplash.com/photo-1550565118-3a14e8d0386f?auto=format&fit=crop&q=80&w=2000",
    challenges: [
      "Securing sensitive customer financial data against evolving cyber threats.",
      "Maintaining 99.9% uptime for digital banking and transaction systems.",
      "Ensuring compliance with Central Bank and data protection regulations.",
      "Legacy system integration with modern cloud-based fintech APIs."
    ]
  },
  'manufacturing-logistics': {
    title: "Manufacturing & Logistics",
    subtitle: "Automation | Visibility | Connectivity",
    description: "End-to-end technology solutions for factories, warehouses, and supply chain operators.",
    icon: Factory,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2000",
    challenges: [
      "Lack of real-time visibility into production line efficiency.",
      "Unreliable connectivity in remote factory locations.",
      "Manual inventory tracking leading to stock discrepancies.",
      "Security of physical assets and perimeter across large sites."
    ]
  },
  'healthcare': {
    title: "Healthcare",
    subtitle: "Availability | Privacy | Records",
    description: "Digital transformation for hospitals and clinics to improve patient outcomes through technology.",
    icon: Stethoscope,
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=2000",
    challenges: [
      "Fragmented patient record systems across departments.",
      "Critical system downtime affecting emergency care delivery.",
      "Data privacy concerns involving sensitive medical imaging.",
      "Need for secure, high-speed campus-wide Wi-Fi for medical staff."
    ]
  },
  'retail-ecommerce': {
    title: "Retail & E-commerce",
    subtitle: "Unified Commerce | Data | Experience",
    description: "Bridging the gap between physical retail and digital storefronts with robust IT.",
    icon: ShoppingBag,
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=2000",
    challenges: [
      "Disconnected online and offline inventory management systems.",
      "Slow checkout processes during peak seasonal traffic.",
      "Lack of data-driven insights into customer buying behavior.",
      "Security of POS systems and online payment gateways."
    ]
  }
};

export default function IndustryPage() {
  const { slug } = useParams<{ slug: string }>();
  const industry = industries[slug as keyof typeof industries];

  if (!industry) {
    return (
      <div className="pt-32 pb-20 container mx-auto px-4 min-h-[60vh]">
        <h1 className="text-4xl font-heading font-bold mb-4 text-brand-dark transition-all">Industry Not Found</h1>
        <p className="text-slate-500 mb-8">We haven't built a specific case for this sector yet, but we likely still serve it.</p>
        <Button asChild variant="blue">
          <Link to="/contact">Contact us about your sector</Link>
        </Button>
      </div>
    );
  }

  return (
    <ServiceLayout
      hero={{
        title: industry.title,
        subtitle: industry.subtitle,
        description: industry.description,
        image: industry.image,
        breadcrumbs: [
          { label: "Home", href: "/" },
          { label: "Industries", href: "/services" },
          { label: industry.title }
        ]
      }}
      challenges={{
        title: `${industry.title} Challenges`,
        items: industry.challenges
      }}
      capabilities={{
        title: "Our Sector Solutions",
        items: [
          {
            title: "Strategic Consulting",
            description: "Designing roadmaps tailored to your industry's unique regulatory environment.",
            points: ["Gap analysis", "Compliance auditing", "Budget optimization"]
          },
          {
            title: "Core Infrastructure",
            description: "Building the resilient foundation your specific operations require.",
            points: ["Industrial networking", "Secure cloud hosting", "24/7 Monitoring"]
          },
          {
            title: "Managed Security",
            description: "Protecting what matters most in your industry.",
            points: ["Data encryption", "Access control", "Disaster recovery"]
          }
        ]
      }}
      process={{
        title: "Sector Implementation",
        description: "How we deploy technology into your specific environment.",
        steps: [
          { title: "Audit", description: "Deep dive into existing workflows and bottlenecks." },
          { title: "Design", description: "Architecting a solution that fits your scale." },
          { title: "Deploy", description: "Minimal-disruption rollout with full team training." }
        ]
      }}
      outcomes={{
        title: "Proven Results",
        subtitle: `Enhancing ${industry.title} through 912 Precision`,
        stats: [
          { value: "99.9%", label: "System Uptime" },
          { value: "100%", label: "Compliance Rate" },
          { value: "30%", label: "Cost Efficiency" }
        ]
      }}
    >
      <div className="py-24 bg-brand-dark text-white text-center">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-8 italic">
            "We don't just provide IT. We provide the operational stability your industry runs on."
          </h2>
          <Button asChild variant="orange" size="lg" className="rounded-none h-16 px-12 text-lg font-bold group">
            <Link to="/contact">
              Discuss Your Sector Needs
              <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </ServiceLayout>
  );
}
