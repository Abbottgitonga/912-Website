import React from 'react';
import { ServiceLayout } from '@/components/layout/ServiceLayout';
import { BarChart3, PieChart, LineChart, Database, Zap, Search } from 'lucide-react';
import { motion } from 'motion/react';

import { AnalyticsAnimation } from '@/components/ui/ServiceHeroAnimations';

export default function PowerBIPage() {
  return (
    <ServiceLayout
      hero={{
        title: "Analytics Built To Perfection",
        subtitle: "Data Intelligence | Real-time Insights | Strategic Growth",
        description: "Transform your raw data into actionable intelligence. 912 provides expert Power BI and reporting services that empower leadership to make informed, data-driven decisions.",
        animation: <AnalyticsAnimation />,
        breadcrumbs: [
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Power BI & Reporting" }
        ]
      }}
      capabilities={{
        title: "Enterprise Analytics Capabilities",
        items: [
          {
            title: "Custom Dashboards",
            description: "Visualizations tailored to your unique business needs.",
            points: [
              "Executive summary views",
              "Operational drill-downs",
              "Real-time data streaming"
            ]
          },
          {
            title: "Data Engineering",
            description: "Building the foundation for reliable reporting.",
            points: [
              "ETL pipeline automation",
              "Data warehousing",
              "Source system integration"
            ]
          },
          {
            title: "Advanced Analytics",
            description: "Predictive insights and trend analysis.",
            points: [
              "AI-powered forecasting",
              "Anomaly detection",
              "Automated report distribution"
            ]
          }
        ]
      }}
      challenges={{
        title: "Is your data working for you?",
        items: [
          "Scattered data across multiple disconnected systems and spreadsheets.",
          "Lack of real-time visibility into key performance indicators (KPIs).",
          "Manual reporting processes that are slow and prone to human error.",
          "Difficulty translating complex data into clear, strategic insights."
        ]
      }}
      process={{
        title: "Our Analytics Roadmap",
        description: "A structured path from data to intelligence.",
        steps: [
          {
            title: "Data Discovery",
            description: "Identifying key data sources and defining strategic business objectives."
          },
          {
            title: "Model Development",
            description: "Structuring data for performance and creating intuitive visualizations."
          },
          {
            title: "Insights Delivery",
            description: "Deploying unified dashboards and training teams for data-driven action."
          }
        ]
      }}
      advantages={{
        title: "The 912 Advantage",
        items: [
          {
            title: "Unified Source of Truth",
            description: "We consolidate your data into a single, dependable reporting environment."
          },
          {
            title: "Real-time Decision Support",
            description: "Gain the ability to react to market changes instantly with live data insights."
          },
          {
            title: "Scalable Architecture",
            description: "Our solutions grow with your data volume, maintaining speed and reliability."
          },
          {
            title: "Strategic Alignment",
            description: "We ensure your reports directly support your long-term business goals."
          }
        ]
      }}
      outcomes={{
        title: "Outcomes That Matter",
        subtitle: "Driving Strategic Growth Through Intelligence",
        stats: [
          { value: "50%", label: "Faster Reporting" },
          { value: "100%", label: "Data Accuracy" },
          { value: "3x", label: "Insight Depth" }
        ]
      }}
    >
      {/* Custom Section based on Inspiration Image 1 & Video 1/2 */}
      <section className="py-24 bg-[#F5F3FF] overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              {/* Simulated Isometric 3D Element */}
              <div className="relative w-full aspect-square max-w-md mx-auto">
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-brand-blue/20 to-brand-orange/20 rounded-[4rem] rotate-12"
                  animate={{ rotate: [12, 15, 12], scale: [1, 1.05, 1] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                />
                <div className="absolute inset-4 bg-white rounded-[3.5rem] shadow-2xl flex items-center justify-center p-12 overflow-hidden border border-white/50 backdrop-blur-sm">
                  <div className="grid grid-cols-2 gap-4 w-full h-full opacity-20">
                    {[...Array(16)].map((_, i) => (
                      <div key={i} className="bg-brand-blue/10 rounded-lg aspect-square" />
                    ))}
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <BarChart3 className="w-32 h-32 text-brand-blue" />
                  </div>
                </div>
                {/* Floating Elements */}
                <motion.div 
                  className="absolute -top-8 -right-8 w-24 h-24 bg-brand-orange rounded-3xl shadow-xl flex items-center justify-center"
                  animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <PieChart className="w-10 h-10 text-white" />
                </motion.div>
                <motion.div 
                  className="absolute -bottom-8 -left-8 w-20 h-20 bg-brand-blue rounded-full shadow-xl flex items-center justify-center"
                  animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                >
                  <LineChart className="w-8 h-8 text-white" />
                </motion.div>
              </div>
            </div>
            <div className="space-y-8">
              <div className="inline-block px-4 py-1 bg-brand-blue/10 text-brand-blue rounded-full text-xs font-black uppercase tracking-widest">
                Analysis • Solutions • Results
              </div>
              <h2 className="text-5xl font-heading font-bold text-brand-dark leading-tight">
                Analytics Built to <br />
                <span className="text-brand-blue italic">Perfection.</span>
              </h2>
              <p className="text-lg text-gray-500 leading-relaxed max-w-lg">
                We design sophisticated data ecosystems that don't just show you what happened, but tell you why it happened and what to do next.
              </p>
              <div className="grid grid-cols-2 gap-8 pt-8">
                <div className="space-y-2">
                  <h4 className="text-3xl font-heading font-bold text-brand-blue">99%</h4>
                  <p className="text-sm text-gray-400 font-bold uppercase tracking-tighter">Data Reliability</p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-3xl font-heading font-bold text-brand-orange">24/7</h4>
                  <p className="text-sm text-gray-400 font-bold uppercase tracking-tighter">Live Monitoring</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ServiceLayout>
  );
}
