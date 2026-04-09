import React from 'react';
import { ServiceLayout } from '@/components/layout/ServiceLayout';
import { Eye, Shield, Video, Bell, HardDrive, LayoutDashboard } from 'lucide-react';

import { CCTVAnimation } from '@/components/ui/ServiceHeroAnimations';

export default function CCTVPage() {
  return (
    <ServiceLayout
      theme="dark"
      hero={{
        title: "Ensuring Safety One Camera at a Time",
        subtitle: "Intelligent Surveillance | Real-time Monitoring | AI-Powered",
        description: "Protect your property with cutting-edge technology. 912 provides unified surveillance solutions that combine high-definition hardware with intelligent analytics.",
        animation: <CCTVAnimation />,
        breadcrumbs: [
          { label: "Home", href: "/" },
          { label: "Expertise", href: "/expertise" },
          { label: "CCTV & Surveillance" }
        ]
      }}
      capabilities={{
        title: "Advanced Surveillance Capabilities",
        items: [
          {
            title: "AI Video Analytics",
            description: "Go beyond simple recording with smart insights.",
            points: [
              "Facial recognition & LPR",
              "Object detection & tracking",
              "Behavioral anomaly alerts"
            ]
          },
          {
            title: "Remote Monitoring",
            description: "Keep an eye on your assets from anywhere.",
            points: [
              "Mobile app integration",
              "Multi-site unified view",
              "Low-latency streaming"
            ]
          },
          {
            title: "Integrated Security",
            description: "Surveillance that works with your entire stack.",
            points: [
              "Access control integration",
              "Alarm system synchronization",
              "Cloud storage failover"
            ]
          }
        ]
      }}
      challenges={{
        title: "Is your surveillance leaving you exposed?",
        items: [
          "Low-resolution footage that is useless for identification or evidence.",
          "Disconnected systems that require manual monitoring of multiple screens.",
          "Lack of proactive alerts, leading to delayed response to incidents.",
          "Difficulties in retrieving and sharing footage during critical events."
        ]
      }}
      process={{
        title: "Our Security Blueprint",
        description: "A strategic approach to visual intelligence.",
        steps: [
          {
            title: "Site Assessment",
            description: "Identifying blind spots and high-risk areas for optimal camera placement."
          },
          {
            title: "System Integration",
            description: "Deploying high-definition hardware and configuring the analytics engine."
          },
          {
            title: "Continuous Oversight",
            description: "Setting up 24/7 monitoring and automated alert protocols."
          }
        ]
      }}
      advantages={{
        title: "The 912 Advantage",
        items: [
          {
            title: "High-Definition Precision",
            description: "Crystal clear 4K footage that ensures every detail is captured and recorded."
          },
          {
            title: "AI-Driven Proactivity",
            description: "Our systems identify threats before they escalate, sending instant alerts to your team."
          },
          {
            title: "Unified Dashboard",
            description: "Manage all your cameras across multiple locations from a single, intuitive interface."
          },
          {
            title: "Scalable Storage",
            description: "Flexible on-premises and cloud storage options that grow with your data needs."
          }
        ]
      }}
      outcomes={{
        title: "Outcomes That Matter",
        subtitle: "Prioritizing Your Security from Day One",
        stats: [
          { value: "12+", label: "Years Excellence" },
          { value: "5K+", label: "Installations" },
          { value: "75+", label: "Security Patents" }
        ]
      }}
    >
      {/* Custom Section based on Inspiration Image 4 */}
      <section className="py-24 bg-brand-dark text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-12">
              <div className="max-w-md">
                <h2 className="text-4xl font-heading font-bold mb-6">Prioritizing Your Security from Day One</h2>
                <p className="text-white/50 leading-relaxed">
                  We don't just install cameras; we design comprehensive visual intelligence systems that protect your people, assets, and reputation.
                </p>
              </div>
              <div className="space-y-8">
                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center shrink-0">
                    <Eye className="w-6 h-6 text-brand-orange" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-1">Intelligent Monitoring</h4>
                    <p className="text-sm text-white/40">Real-time analysis that filters out noise and focuses on what matters.</p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center shrink-0">
                    <Shield className="w-6 h-6 text-brand-blue" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-1">Unmatched Protection</h4>
                    <p className="text-sm text-white/40">Integrated security layers that provide a 360-degree safety net.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-brand-blue/20 to-transparent rounded-full absolute -inset-20 blur-3xl opacity-30" />
              <img 
                src="https://images.unsplash.com/photo-1557597774-9d2739f8f01f?auto=format&fit=crop&q=80&w=1000" 
                alt="High-tech Security Camera"
                className="w-full h-auto relative z-10 rounded-3xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
        </div>
      </section>
    </ServiceLayout>
  );
}
