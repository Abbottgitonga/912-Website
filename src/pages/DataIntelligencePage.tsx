import React from 'react';
import { ServiceLayout } from '@/components/layout/ServiceLayout';
import { BarChart3, LineChart, Database, PieChart, Search, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export default function DataIntelligencePage() {
  return (
    <ServiceLayout
      hero={{
        title: "Data & Intelligence",
        subtitle: "Actionable Insights | Real-time Analytics | AI Modeling",
        description: "Transform your raw data into your most valuable asset. We help you see what others miss and act with confidence through advanced analytics and Power BI solutions.",
        image: "https://images.unsplash.com/photo-1551288049-bbbda50a13a9?auto=format&fit=crop&q=80&w=2000",
        breadcrumbs: [
          { label: "Home", href: "/" },
          { label: "Expertise", href: "/expertise" },
          { label: "Data & Intelligence" }
        ]
      }}
      capabilities={{
        title: "Intelligence Capabilities",
        items: [
          {
            title: "Power BI",
            description: "Visualizing your business performance.",
            points: [
              "Custom dashboard design",
              "Real-time data streaming",
              "Automated report delivery"
            ]
          },
          {
            title: "Data Engineering",
            description: "The foundation of reliable insights.",
            points: [
              "Data warehousing",
              "ETL pipeline automation",
              "Source system integration"
            ]
          },
          {
            title: "Advanced Analytics",
            description: "Predicting the future of your business.",
            points: [
              "AI & Machine Learning",
              "Predictive forecasting",
              "Anomaly detection"
            ]
          }
        ]
      }}
      challenges={{
        title: "Data Challenges",
        items: [
          "Disconnected data silos across different departments.",
          "Manual, error-prone reporting processes.",
          "Lack of real-time visibility into key business metrics.",
          "Difficulty translating complex data into strategic action."
        ]
      }}
      process={{
        title: "Our Analytics Roadmap",
        description: "From raw data to strategic intelligence.",
        steps: [
          {
            title: "Discovery",
            description: "Identifying data sources and defining business objectives."
          },
          {
            title: "Development",
            description: "Building models and designing intuitive visualizations."
          },
          {
            title: "Deployment",
            description: "Rolling out dashboards and training teams for data-driven action."
          }
        ]
      }}
      advantages={{
        title: "The 912 Advantage",
        items: [
          {
            title: "Strategic Alignment",
            description: "We ensure your data strategy directly supports your business goals."
          },
          {
            title: "Rapid Implementation",
            description: "Our proven frameworks allow for faster time-to-insight."
          }
        ]
      }}
      outcomes={{
        title: "Intelligence Outcomes",
        subtitle: "Driving Growth Through Data",
        stats: [
          { value: "50%", label: "Faster Decisions" },
          { value: "100%", label: "Data Visibility" },
          { value: "3x", label: "ROI" }
        ]
      }}
    >
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-heading font-bold mb-12 uppercase tracking-tight">Explore Specific Solutions</h2>
          <div className="grid grid-cols-1 max-w-2xl mx-auto">
            <Link to="/expertise/power-bi-&-reporting" className="group p-12 border border-gray-100 bg-gray-50 hover:border-brand-blue transition-all">
              <BarChart3 className="w-12 h-12 text-brand-blue mb-6 mx-auto group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-heading font-bold mb-4">Power BI & Reporting</h3>
              <p className="text-gray-500 mb-8">Custom dashboards and automated reporting for enterprise leadership.</p>
              <Button variant="outline" className="rounded-none border-brand-dark group-hover:bg-brand-dark group-hover:text-white">Learn More</Button>
            </Link>
          </div>
        </div>
      </section>
    </ServiceLayout>
  );
}
