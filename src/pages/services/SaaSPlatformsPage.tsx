import React from 'react';
import { ServiceLayout } from '@/components/layout/ServiceLayout';

export default function SaaSPlatformsPage() {
  return (
    <ServiceLayout
      hero={{
        title: "SaaS Platforms",
        subtitle: "Expertise & Implementation",
        description: "Explore our specialized SaaS Platforms capabilities, designed to scale with your business and deliver measurable ROI.",
        breadcrumbs: [
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "SaaS Platforms" }
        ]
      }}
      capabilities={{
        title: "Key Capabilities",
        items: [
          { title: "Architecture Design", description: "Scalable foundations tailored to your operations.", points: ["Needs assessment", "Capacity planning", "Security by design"] },
          { title: "Implementation", description: "Seamless deployment with minimal downtime.", points: ["Agile delivery", "Staged migration", "Quality assurance"] },
          { title: "Managed Support", description: "Ongoing maintenance and optimization.", points: ["24/7 monitoring", "Proactive patching", "Performance tuning"] }
        ]
      }}
      challenges={{
        title: "Common Challenges",
        items: [
          "Legacy systems slowing down modern workflows.",
          "Security vulnerabilities in non-compliant setups.",
          "High total cost of ownership with fragmented solutions."
        ]
      }}
      process={{
        title: "Our Implementation Approach",
        description: "A methodical process ensuring project success.",
        steps: [
          { title: "Discovery", description: "Understanding your technical environment and business goals." },
          { title: "Execution", description: "Deploying the solution accurately and securely." },
          { title: "Review", description: "Testing completely and handing over documentation." }
        ]
      }}
      advantages={{
        title: "Why Choose Us?",
        items: [
          { title: "Domain Expertise", description: "Deep understanding of the specific requirements of SaaS Platforms." },
          { title: "Comprehensive Support", description: "Full lifecycle support under the One Contract model." }
        ]
      }}
      outcomes={{
        title: "Expected Outcomes",
        subtitle: "Measuring the Impact",
        stats: [
          { value: "99%", label: "Reliability" },
          { value: "24/7", label: "Monitoring" },
          { value: "40%", label: "Faster Resolution" }
        ]
      }}
    />
  );
}
