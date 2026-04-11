import React from 'react';
import { ServiceLayout } from '@/components/layout/ServiceLayout';
import { Shield, Lock, Users, Smartphone, Key, Bell } from 'lucide-react';

import { AccessControlAnimation } from '@/components/ui/ServiceHeroAnimations';

export default function AccessControlPage() {
  return (
    <ServiceLayout
      theme="dark"
      hero={{
        title: "Universal Access Control",
        subtitle: "Intelligent Entry Management | Secure, Scalable, Unified",
        description: "Access control software that lets you choose from any brand of hardware and is built to scale. Protect your property with cutting-edge technology designed for modern enterprises.",
        animation: <AccessControlAnimation />,
        breadcrumbs: [
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Access Control" }
        ]
      }}
      capabilities={{
        title: "Discover 912 For Your Property",
        items: [
          {
            title: "Apartment & Residential",
            description: "Secure multi-tenant buildings with ease.",
            points: [
              "Mobile key access for residents",
              "Visitor management systems",
              "Automated move-in/move-out access"
            ]
          },
          {
            title: "Business & Enterprise",
            description: "Unified security for corporate offices.",
            points: [
              "Multi-site management",
              "Active Directory integration",
              "Real-time occupancy tracking"
            ]
          },
          {
            title: "Home & Private Estate",
            description: "Premium security for your private sanctuary.",
            points: [
              "Smart lock integration",
              "Remote access control",
              "Synchronous alarm systems"
            ]
          }
        ]
      }}
      challenges={{
        title: "Is your property facing security gaps?",
        items: [
          "Fragmented systems from multiple vendors leading to management complexity.",
          "Lack of real-time visibility into who is entering or exiting your premises.",
          "Manual key management that is prone to loss and unauthorized duplication.",
          "Inability to integrate access control with other building management systems."
        ]
      }}
      process={{
        title: "Our Implementation Process",
        description: "A structured approach to securing your perimeter.",
        steps: [
          {
            title: "Security Audit",
            description: "We assess your current entry points and identify vulnerabilities."
          },
          {
            title: "System Design",
            description: "Custom architecture selecting the best hardware for your needs."
          },
          {
            title: "Unified Integration",
            description: "Connecting all points into a single, easy-to-manage platform."
          }
        ]
      }}
      advantages={{
        title: "The 912 Advantage",
        items: [
          {
            title: "Hardware Agnostic",
            description: "We work with any brand of hardware, ensuring you aren't locked into a single vendor."
          },
          {
            title: "Mobile-First Experience",
            description: "Control your locks and monitor access from your phone, no matter where you are in the world."
          },
          {
            title: "Automated Workflows",
            description: "Set schedules, manage permissions, and automate entry protocols effortlessly."
          },
          {
            title: "Real-time Alerts",
            description: "Receive instant notifications for unauthorized attempts or system overrides."
          }
        ]
      }}
      outcomes={{
        title: "Outcomes That Matter",
        subtitle: "Ensuring Safety, One Entry at a Time",
        stats: [
          { value: "99.9%", label: "System Uptime" },
          { value: "40%", label: "Admin Efficiency" },
          { value: "100%", label: "Audit Compliance" }
        ]
      }}
    >
      {/* Custom Section based on Inspiration Image 2 */}
      <section className="py-24 bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=1000" 
                alt="Modern Office Entry"
                className="w-full h-[600px] object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-8 -right-8 bg-brand-blue p-8 text-white max-w-xs rounded-xl shadow-xl">
                <Shield className="w-12 h-12 mb-4" />
                <h4 className="text-xl font-bold mb-2">Synchronous Alarm</h4>
                <p className="text-sm text-white/70">When an alarm occurs, the repeater will sound at the same time with the control panel.</p>
              </div>
            </div>
            <div className="space-y-12">
              <div className="flex gap-6">
                <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center shrink-0">
                  <Smartphone className="w-8 h-8 text-brand-blue" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-brand-dark mb-2">Manually control your locks</h4>
                  <p className="text-gray-600">Ever think, \"Did I lock the door?\" Not anymore. Lock up from your phone no matter where you are in the world.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center shrink-0">
                  <Lock className="w-8 h-8 text-brand-orange" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-brand-dark mb-2">Automate your locks</h4>
                  <p className="text-gray-600">Your 912 system can automatically lock your doors for you based on schedules or events.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center shrink-0">
                  <Users className="w-8 h-8 text-brand-blue" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-brand-dark mb-2">Compatible Locks</h4>
                  <p className="text-gray-600">We integrate with leading brands like Danalock, Yale, and August to provide a unified experience.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ServiceLayout>
  );
}
