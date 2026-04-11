import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ServiceLayout } from '@/components/layout/ServiceLayout';
import { Building2, Factory, Stethoscope, ShoppingBag, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { HoverBorderButton } from '@/components/ui/HoverBorderButton';

const industries = {
  'financial-services': {
    title: "Financial Services",
    subtitle: "Forensic IT | Zero-Trust | Compliance",
    description: "Securing the lifeblood of East African commerce. From bank-grade Active Directory hardening to forensic transaction audits that uncover multi-year fraud.",
    icon: Building2,
    image: "/images/industries/financial.png",
    challenges: [
      "Internal fraud hiding in small, fragmented rounding discrepancies.",
      "Legacy financial databases reaching scaling limits (SAP HANA needs).",
      "Unrotated access privileges creating backdoors for bad actors.",
      "Strict ODPC compliance and data residency requirements."
    ],
    evidence: {
      case: "Forensic discovery of a multi-year internal fraud scheme at a Nairobi financial firm, recovered through transaction log analysis.",
      metric: "Millions Recovered"
    }
  },
  'manufacturing-logistics': {
    title: "Manufacturing & Logistics",
    subtitle: "Recovery | Automation | SAP HANA",
    description: "Restoring operational control to the factory floor. Whether it's a 25-day total lockout rescue or a migration to dedicated bare-metal SAP hosting.",
    icon: Factory,
    image: "/images/industries/manufacturing.png",
    challenges: [
      "Total system lockout due to unmanaged credentials and zero documentation.",
      "Inconsistent network stability across remote regional factory sites.",
      "Fragmented asset registries leading to hardware loss and licensing gaps.",
      "High latency on shared cloud environments for ERP workloads."
    ],
    evidence: {
      case: "Full remote recovery of a Senegal manufacturing plant after a 25-day total system lockout, including zero-to-full asset registry build.",
      metric: "25 Days Restored"
    }
  },
  'healthcare': {
    title: "Healthcare",
    subtitle: "Precision | Privacy | Connectivity",
    description: "Technology that saves lives. Built-to-last campus-wide connectivity and secure medical record systems that never go offline.",
    icon: Stethoscope,
    image: "/images/industries/healthcare.png",
    challenges: [
      "Fragmented patient data silos creating life-critical information delays.",
      "Unreliable Wi-Fi connectivity in campuses preventing mobile diagnostics.",
      "Cyber-security risks involving highly sensitive medical records.",
      "Lack of real-time visibility into ward and equipment availability."
    ],
    evidence: {
      case: "Deployment of unified campus-wide medical record infrastructure with 99.9% uptime and zero-latency access for diagnostic imaging.",
      metric: "99.9% Uptime"
    }
  },
  'retail-ecommerce': {
    title: "Retail & E-commerce",
    subtitle: "Profitability | Workflow | Scale",
    description: "Automating the path to profitability. We connect your storefront to your warehouse with data-driven precision.",
    icon: ShoppingBag,
    image: "/images/industries/retail.png",
    challenges: [
      "Lack of real-time synchronization between sales and stock levels.",
      "Manual process bottlenecks reducing overall operating margins.",
      "Insecure payment gateway integrations leading to transaction drops.",
      "Difficulty managing multi-site retail infrastructure remotely."
    ],
    evidence: {
      case: "End-to-end FMCG process automation for a regional distributor, resulting in a direct 14% increase in net profitability.",
      metric: "14% Profitability ↑"
    }
  }
};

export default function IndustryPage() {
  const { slug } = useParams<{ slug: string }>();
  const industry = industries[slug as keyof typeof industries];

  if (!industry) {
    return (
      <div className="pt-32 pb-20 container mx-auto px-4 min-h-[60vh]">
        <h1 className="text-4xl font-heading font-bold mb-4 text-brand-dark">Industry Not Found</h1>
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
            title: "Recovery & Resilience",
            description: "Restoring operations and building the documentation you're missing.",
            points: ["Credential vaulting", "Complete asset auditing", "Disaster recovery testing"]
          },
          {
            title: "Performance Hosting",
            description: "Optimized infrastructure for heavy ERP and SAP HANA workloads.",
            points: ["Bare-metal performance", "Low-latency regional routing", "Cost optimization"]
          },
          {
            title: "Forensic Security",
            description: "Deep-dive security that finds what standard firewalls miss.",
            points: ["Transaction log auditing", "Zero-trust AD architecture", "ODPC compliance"]
          }
        ]
      }}
      process={{
        title: "The 912 Sector Methodology",
        description: "How we deploy technology into your specific industry environment.",
        steps: [
          { title: "Audit", description: "Deep dive into existing workflows, hidden silos, and security bottlenecks." },
          { title: "Rescue/Design", description: "Either restoring broken systems or architecting the ideal replacement." },
          { title: "Manage", description: "Continuous 24/7 monitoring and strategic roadmapping under One Contract." }
        ]
      }}
      advantages={{
        title: "The 912 Sector Advantage",
        items: [
          {
            title: "Industry Expertise",
            description: "Deep understanding of sector-specific compliance, security, and operational needs."
          },
          {
            title: "Integrated One Contract",
            description: "No fragmented vendors. One team, one architecture, one predictable monthly cost."
          }
        ]
      }}
      outcomes={{
        title: "Proven Results",
        subtitle: industry.evidence.case,
        stats: [
          { value: industry.evidence.metric, label: "Success" },
          { value: "100%", label: "Compliance" },
          { value: "One", label: "Contract" }
        ]
      }}
    >
      <div className="py-24 bg-brand-dark text-white text-center">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-8 italic">
            "Your industry runs on technology. We ensure that technology is documented, secured, and always available."
          </h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link to="/contact">
              <HoverBorderButton variant="orange" className="px-12 py-6 text-lg font-bold">
                <span className="flex items-center gap-2">
                  Discuss Your Sector Leads
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </span>
              </HoverBorderButton>
            </Link>
            <Link to="/results">
              <HoverBorderButton variant="blue" className="px-12 py-6 text-lg font-bold" theme="dark">
                View All Case Studies
              </HoverBorderButton>
            </Link>
          </div>
        </div>
      </div>
    </ServiceLayout>
  );
}
