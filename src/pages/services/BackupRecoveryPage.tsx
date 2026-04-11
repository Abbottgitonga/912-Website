import React from 'react';
import { ServiceLayout } from '@/components/layout/ServiceLayout';
import { Database, Cloud, RefreshCw, ShieldCheck, Zap, BarChart3 } from 'lucide-react';

import { CloudAnimation } from '@/components/ui/ServiceHeroAnimations';

export default function BackupRecoveryPage() {
  return (
    <ServiceLayout
      hero={{
        title: "Ridiculously Easy Backup & Recovery",
        subtitle: "Instant Recovery | Unbreakable Security | Cloud Native",
        description: "You want recovery that's instant, security that's unbreakable, and costs that won't make your CFO cry. That's where we come in. 912 provides unified data protection for the modern enterprise.",
        animation: <CloudAnimation />,
        breadcrumbs: [
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Backup & Recovery" }
        ]
      }}
      capabilities={{
        title: "Unified Data Protection",
        items: [
          {
            title: "Cloud Backup",
            description: "Secure your cloud workloads effortlessly.",
            points: [
              "AWS & Azure native integration",
              "Cross-region replication",
              "Automated snapshot management"
            ]
          },
          {
            title: "Disaster Recovery",
            description: "Minimize downtime with instant failover.",
            points: [
              "Near-zero RTO/RPO",
              "Automated DR testing",
              "One-click recovery orchestration"
            ]
          },
          {
            title: "SaaS Protection",
            description: "Backup your critical business applications.",
            points: [
              "Microsoft 365 backup",
              "Google Workspace protection",
              "Salesforce data recovery"
            ]
          }
        ]
      }}
      challenges={{
        title: "Is your data at risk?",
        items: [
          "Legacy backup systems that are slow, complex, and expensive to maintain.",
          "Increasing threat of ransomware and cyberattacks targeting backup data.",
          "Difficulty meeting strict compliance and data residency requirements.",
          "Lack of visibility into backup health across hybrid cloud environments."
        ]
      }}
      process={{
        title: "Our Recovery Roadmap",
        description: "From assessment to automated resilience.",
        steps: [
          {
            title: "Data Discovery",
            description: "Mapping your critical data assets and recovery requirements."
          },
          {
            title: "Policy Design",
            description: "Defining retention, frequency, and security protocols."
          },
          {
            title: "Automated Deployment",
            description: "Implementing self-healing backup workflows with zero-touch management."
          }
        ]
      }}
      advantages={{
        title: "The 912 Advantage",
        items: [
          {
            title: "98% Storage Cost Savings",
            description: "Our deduplication and compression technologies dramatically reduce your cloud storage footprint."
          },
          {
            title: "Zero Trust Security",
            description: "Immutable backups and multi-factor authentication ensure your data is safe from tampering."
          },
          {
            title: "Choose Your Adventure",
            description: "Seamlessly integrate with AWS, Azure, or on-premises infrastructure with a single management plane."
          },
          {
            title: "Instant Verification",
            description: "Automated recovery testing ensures your backups actually work when you need them most."
          }
        ]
      }}
      outcomes={{
        title: "Outcomes That Matter",
        subtitle: "Business Continuity, Guaranteed",
        stats: [
          { value: "98%", label: "Cost Savings" },
          { value: "< 15min", label: "Recovery Time" },
          { value: "0", label: "Data Loss Incidents" }
        ]
      }}
    >
      {/* Custom Section based on Inspiration Image 3 */}
      <section className="py-24 bg-[#FDFBF7]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 bg-white p-12 rounded-3xl shadow-sm border border-gray-100 flex flex-col justify-center">
              <h3 className="text-4xl font-heading font-bold text-brand-dark mb-6">Ridiculously easy backup & recovery</h3>
              <p className="text-xl text-gray-500 max-w-lg">
                We used 912 to drastically reduce recovery times, ensuring uninterrupted business continuity for one of Africa's largest transportation networks.
              </p>
            </div>
            <div className="bg-brand-orange/10 p-12 rounded-3xl flex flex-col justify-between">
              <h3 className="text-3xl font-heading font-bold text-brand-dark">Choose your adventure</h3>
              <div className="space-y-4 mt-8">
                <div className="bg-white p-4 rounded-xl flex items-center gap-4 shadow-sm">
                  <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                    <Cloud className="text-brand-orange" />
                  </div>
                  <span className="font-bold">AWS</span>
                </div>
                <div className="bg-white p-4 rounded-xl flex items-center gap-4 shadow-sm">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Cloud className="text-brand-blue" />
                  </div>
                  <span className="font-bold">Azure</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ServiceLayout>
  );
}
