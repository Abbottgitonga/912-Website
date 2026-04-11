import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ServiceLayout } from '@/components/layout/ServiceLayout';
import { SEOHead } from '@/components/seo/SEOHead';
import { LocationData, locationsData } from '@/data/locationData';
import { HoverBorderButton } from '@/components/ui/HoverBorderButton';
import { MapPin, Shield, Cloud, Building2, ChevronRight, ArrowRight } from 'lucide-react';

export default function LocationPage() {
  const { slug } = useParams<{ slug: string }>();
  const [location, setLocation] = useState<LocationData | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const foundLocation = locationsData.find(loc => loc.id === slug);
    if (foundLocation) {
      setLocation(foundLocation);
    }
  }, [slug]);

  if (!location) {
    return (
      <main className="min-h-[60vh] flex flex-col items-center justify-center p-4 pt-32 pb-20">
        <h1 className="text-3xl font-bold mb-4">Location not found</h1>
        <Link to="/services" className="text-brand-blue hover:underline">Explore Services</Link>
      </main>
    );
  }

  return (
    <>
      <SEOHead
        title={location.seoTitle}
        description={location.seoDescription}
      />
      <ServiceLayout
        hero={{
          title: `IT Support & Infrastructure in ${location.city}, ${location.country}`,
          subtitle: `Serving the ${location.region} Enterprise Market`,
          description: `Comprehensive Managed IT, ${location.primaryService}, and Cybersecurity for businesses operating in ${location.city}. We build resilient technology architectures designed specifically for local constraints.`,
          image: location.heroImage,
          breadcrumbs: [
            { label: "Home", href: "/" },
            { label: "Locations", href: "/services" },
            { label: `${location.city}, ${location.country}` }
          ]
        }}
        capabilities={{
          title: `Core Services in ${location.city}`,
          items: [
            {
              title: "Managed IT Services",
              description: "End-to-End technology management",
              points: [
                "24/7 localized helpdesk support",
                "Proactive server patching",
                "Vendor and ISP management"
              ]
            },
            {
              title: "Cloud & Network Infrastructure",
              description: "High-availability networking",
              points: [
                "SD-WAN for remote branch connectivity",
                "Cloud migration to Azure/AWS",
                "Disaster recovery planning"
              ]
            },
            {
              title: "Physical Security",
              description: "Integrated protection systems",
              points: [
                "AI-powered CCTV surveillance",
                "Biometric access control",
                "Server room build-outs"
              ]
            }
          ]
        }}
        challenges={{
          title: `Overcoming IT Challenges in ${location.country}`,
          items: location.challenges
        }}
        process={{
          title: "Our Local Deployment Framework",
          description: "How we deploy enterprise architecture physically and digitally.",
          steps: [
            {
              title: "Site Audit",
              description: `Physical and network audit in ${location.city} to identify specific infrastructure bottlenecks.`
            },
            {
              title: "Architecture Design",
              description: "Redundant hardware and network design to bypass local grid or ISP failures."
            },
            {
              title: "Managed Run",
              description: "Ongoing 24/7 monitoring from our centralized NOC, ensuring near 100% uptime."
            }
          ]
        }}
        advantages={{
          title: "The 912 Tech Protocol",
          items: [
            {
              title: "One Contract Accountability",
              description: "We eliminate the vendor blame game. 912 handles your firewall, your switches, your CCTV, and your software under an identical SLA."
            },
            {
              title: "African Context Engineering",
              description: "We don't deploy vanilla Western solutions. We engineer for power dips, high latency regions, and rugged environments."
            }
          ]
        }}
        outcomes={{
          title: "Service Outcomes",
          subtitle: `${location.primaryService} Excellence`,
          stats: location.stats
        }}
      >
        <section className="py-24 bg-brand-dark text-white relative overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, #1b49c2 0%, transparent 50%)' }}></div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h2 className="text-4xl font-heading font-black tracking-tighter mb-6">
              Ready to Upgrade Your Operations in {location.city}?
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10">
              Stop fighting with unreliable vendors and constant downtime. Partner with 912 for enterprise-grade managed IT and secure infrastructure.
            </p>
            <Link to="/contact">
              <HoverBorderButton variant="orange" className="px-10 py-4 text-lg font-bold">
                Book a Technical Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </HoverBorderButton>
            </Link>
          </div>
        </section>
      </ServiceLayout>
    </>
  );
}
