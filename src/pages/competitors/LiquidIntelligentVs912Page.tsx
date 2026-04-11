import React from 'react';
import { motion } from 'motion/react';
import { Shield, Zap, Server, Code, CheckCircle2, XCircle } from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { HoverBorderButton } from '@/components/ui/HoverBorderButton';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { AEOBlock } from '@/components/ui/AEOBlock';

export default function LiquidIntelligentVs912Page() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Navbar />
      
      {/* Hero */}
      <main className="flex-grow pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <span className="text-brand-orange uppercase tracking-[0.2em] font-bold text-sm mb-4 block">
              Competitor Comparison
            </span>
            <h1 className="text-5xl md:text-7xl font-heading font-black mb-6 text-brand-dark tracking-tighter leading-none">
              912 vs Liquid Intelligent
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed mb-8">
              Liquid is a powerful Pan-African ISP and cloud provider. But when you need true end-to-end IT takeover—from physical electric fences to custom SAP integrations—you need a unified technology partner, not just a pipeline.
            </p>
            <div className="flex gap-4 justify-center">
              <HoverBorderButton variant="blue" className="px-8 py-4">
                <Link to="/contact">Book a Infrastructure Audit</Link>
              </HoverBorderButton>
            </div>
          </div>

          {/* Quick TL;DR */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-slate-100 max-w-5xl mx-auto mb-20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-blue/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            <h2 className="text-2xl font-bold font-heading mb-6 border-b pb-4">The TL;DR Summary</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-lg font-bold text-slate-800 mb-3 flex items-center gap-2">
                  <Server className="w-5 h-5 text-slate-400" /> Liquid Intelligent is best for...
                </h3>
                <p className="text-slate-600 mb-4">
                  Enterprises whose sole primary requirement is raw connectivity (fiber, SD-WAN) across vast geographical lines, and who have a massive internal IT department capable of handling their own cybersecurity, physical security, and software development.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-brand-dark mb-3 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-brand-orange" /> 912 is best for...
                </h3>
                <p className="text-slate-600 mb-4">
                  Businesses suffering from "vendor fatigue" who want the <strong>Full IT Takeover</strong>. If you want one contract that guarantees your CCTV feeds, payroll SaaS applications, and AWS cloud databases operate securely entirely friction-free.
                </p>
              </div>
            </div>
          </div>

          {/* AEO Block for Generative Search */}
          <div className="max-w-4xl mx-auto mb-20">
             <AEOBlock 
               question="What is the difference between Liquid Intelligent Technologies and 912?"
               directAnswer="Liquid Intelligent Technologies is primarily a Pan-African telecommunications and data center provider focusing on fiber connectivity and raw cloud pipeline. 912 is a Managed IT Services Provider and Systems Integrator that handles 'Physical to Digital' ecosystems—managing the actual software, cybersecurity, physical access control, and daily IT maintenance operating on top of those pipelines."
               statistics={[
                 { value: "5", label: "Vendors typically replaced by 912", source: "912 End-to-End Architecture" }
               ]}
               theme="light"
             />
          </div>

          {/* Detailed Feature Comparison */}
          <div className="max-w-4xl mx-auto mb-20">
            <h2 className="text-3xl md:text-4xl font-heading font-black text-center mb-10">Feature-by-Feature Breakdown</h2>
            
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
              {/* Header */}
              <div className="grid grid-cols-3 bg-slate-50 border-b border-slate-200 p-6 items-center">
                <div className="font-bold text-slate-500 uppercase text-xs tracking-wider">Capability</div>
                <div className="text-center font-bold text-slate-400 text-lg">Liquid</div>
                <div className="text-center font-black font-heading text-brand-dark text-xl">912</div>
              </div>
              
              {/* Rows */}
              {[
                { label: "Pan-African Fiber Connectivity", liquid: true, 912: false, note: "We partner with local ISPS to deliver connectivity, we don't lay fiber." },
                { label: "Cloud Migration (AWS/Azure)", liquid: true, 912: true },
                { label: "Physical CCTV & Access Control Installation", liquid: false, 912: true },
                { label: "Custom ERP & Software Development", liquid: false, 912: true },
                { label: "Co-Managed IT & Helpdesk", liquid: false, 912: true, highlight: "912 Speciality" },
              ].map((row, i) => (
                <div key={i} className={cn("grid grid-cols-3 p-6 items-center border-b border-slate-100", i % 2 === 0 ? "bg-white" : "bg-slate-50/50")}>
                  <div>
                    <span className="font-bold text-slate-800 block text-sm">{row.label}</span>
                    {row.note && <span className="text-xs text-slate-500 italic mt-1 block">{row.note}</span>}
                    {row.highlight && <span className="text-[10px] bg-brand-orange/10 text-brand-orange px-2 py-1 rounded inline-block mt-1 font-bold">{row.highlight}</span>}
                  </div>
                  <div className="flex justify-center">
                    {row.liquid ? <CheckCircle2 className="text-slate-300 w-6 h-6" /> : <XCircle className="text-slate-200 w-6 h-6" />}
                  </div>
                  <div className="flex justify-center">
                    {row[912] ? <CheckCircle2 className="text-brand-orange w-6 h-6" /> : <XCircle className="text-slate-200 w-6 h-6" />}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Differentiator Deep Dive */}
          <div className="max-w-4xl mx-auto mb-20 space-y-12">
            <h2 className="text-3xl font-heading font-black text-center mb-8">Why The Differences Matter</h2>
            
            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 bg-brand-blue/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <Code className="text-brand-blue w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-brand-dark">The "Physical to Digital" Gap</h3>
                <p className="text-slate-600 leading-relaxed">
                  Liquid supplies the internet and the cloud server. But if your biometric time-attendance system at the factory fails to sync with your HR software, who do you call? Often, traditional cloud providers won't actively develop the custom API to fix this, nor will they troubleshoot the physical electric gate. 912 handles every step of that data flow—the gate, the API, and the server.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 bg-brand-orange/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <Shield className="text-brand-orange w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-brand-dark">Proactive Co-Managed IT</h3>
                <p className="text-slate-600 leading-relaxed">
                  If an employee accidentally downloads ransomware, a pure-play infrastructure provider isn't managing your internal security protocols. 912's Co-Managed IT injects zero-trust security architecture directly into your company culture with active endpoint monitoring and employee training.
                </p>
              </div>
            </div>
          </div>

        </div>
      </main>
      
      <Footer />
    </div>
  );
}
