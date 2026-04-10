import React from 'react';
import { ServiceLayout } from '@/components/layout/ServiceLayout';
import { BarChart3, LineChart, Database, PieChart, Search, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ProjectShowcase } from '@/components/ui/ProjectShowcase';
import { FAQSection } from '@/components/ui/FAQSection';

const dataFaqs = [
  { question: "What is Power BI and why do we need it?", answer: "Power BI is a business analytics service by Microsoft. It lets you visualize your data and share insights across your organization, or embed them in your app or website. It replaces static Excel reports with real-time, interactive dashboards." },
  { question: "Can you connect to our existing ERP or software?", answer: "Yes. Our data engineers specialize in building ETL (Extract, Transform, Load) pipelines that pull data securely from almost any system—including SAP, Microsoft Dynamics, Navision, Sage, or custom SQL databases." },
  { question: "What is a data warehouse?", answer: "A data warehouse is a central repository where data from multiple sources is consolidated and optimized for reporting and analysis. It ensures your dashboards run instantly without slowing down your live operational systems." },
  { question: "How long does it take to see the first dashboard?", answer: "Once we have secure access to your raw data, we typically deliver the first iteration of your Power BI dashboard within 2-4 weeks, allowing leadership to start making data-driven decisions almost immediately." }
];

const dataSolutions = [
  {
    id: "power-bi-reporting",
    title: "Power BI & Reporting",
    description: "Custom dashboards and automated reporting for enterprise leadership.",
    href: "/expertise/power-bi-&-reporting",
    category: "Analytics",
    image: "https://images.unsplash.com/photo-1551288049-bbbda50a13a9?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "data-engineering",
    title: "Data Engineering",
    description: "Robust data warehousing and ETL pipeline automation.",
    href: "/expertise/data-engineering",
    category: "Architecture",
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80&w=800"
  }
];

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
      <ProjectShowcase 
        items={dataSolutions} 
        title="Explore Specific Solutions"
        theme="light"
      />
      <FAQSection 
        faqs={dataFaqs} 
        title="Frequently Asked Questions" 
        subtitle="Common questions about our Data & Intelligence services"
        theme="light"
      />
    </ServiceLayout>
  );
}
