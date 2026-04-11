import React from 'react';
import { motion } from 'motion/react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, User } from 'lucide-react';
import { ScrollReveal } from '@/components/layout/ScrollReveal';

export default function BlogIndexPage() {
  const posts = [
    {
      id: "cost-of-managed-it-africa",
      title: "The True Cost of IT Downtime in African Manufacturing",
      category: "Strategic Insights",
      author: "Chief Technical Officer",
      date: "Oct 12, 2026",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
      excerpt: "Nairobi factory floors lose an average of $2,300 per hour during server outages. Here is how Co-Managed IT solves the hardware redundancy gap."
    },
    {
      id: "zero-trust-cybersecurity-keny",
      title: "Zero Trust Architecture: Bypassing Legacy Telecom Firewalls",
      category: "Cybersecurity",
      author: "Lead Security Architect",
      date: "Oct 05, 2026",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
      excerpt: "Why the standard ISP router provided to your remote branches is the weakest link in your corporate network, and how to lock it down."
    },
    {
      id: "migrating-sap-hana-aws",
      title: "Migrating SAP to AWS: A Guide for East African Enterprises",
      category: "Cloud Migration",
      author: "Cloud Infrastructure Lead",
      date: "Sep 28, 2026",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
      excerpt: "Enterprise Resource Planning requires absolute uptime. A deep dive into structuring high-availability zones for SAP across multiple African regions."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <ScrollReveal>
              <span className="text-brand-orange uppercase tracking-[0.2em] font-bold text-sm mb-4 block">
                Intelligence
              </span>
              <h1 className="text-5xl md:text-7xl font-heading font-black mb-6 text-brand-dark tracking-tighter">
                The 912 Tech Protocol
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
                No fluff. Just hard data, exact technical architectures, and enterprise IT strategies tailored for the African continent.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {posts.map((post, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <Link to={`/blog/${post.id}`} className="block group h-full">
                  <article className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden h-full flex flex-col transition-all hover:shadow-xl hover:border-brand-blue">
                    <div className="h-48 overflow-hidden relative">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute top-4 left-4 bg-brand-dark/90 backdrop-blur-sm text-brand-orange text-xs font-bold uppercase tracking-wider px-3 py-1 rounded">
                        {post.category}
                      </div>
                    </div>
                    
                    <div className="p-6 flex-grow flex flex-col">
                      <h2 className="text-xl font-bold font-heading text-brand-dark mb-3 leading-tight group-hover:text-brand-blue transition-colors">
                        {post.title}
                      </h2>
                      <p className="text-slate-600 text-sm mb-6 flex-grow line-clamp-3">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between text-xs text-slate-500 font-medium pt-4 border-t border-slate-100">
                        <div className="flex items-center gap-1">
                          <User className="w-3 h-3" />
                          {post.author}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {post.date}
                        </div>
                      </div>
                    </div>
                  </article>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
