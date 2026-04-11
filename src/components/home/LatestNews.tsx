import React from 'react';
import { Link } from 'react-router-dom';
import { ScrollReveal } from '@/components/layout/ScrollReveal';
import { Button } from '@/components/ui/button';
import { HoverBorderButton } from '@/components/ui/HoverBorderButton';
import { ArrowRight } from 'lucide-react';

const news = [
  {
    date: "8 Apr 2026",
    category: "Article",
    title: "The Future of Cybersecurity in Africa",
    description: "As digital transformation accelerates across the continent, the threat landscape is evolving. We explore the critical security trends for 2026.",
    tag: "Security",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800"
  },
  {
    date: "8 Apr 2026",
    category: "Alert",
    title: "912 Expands Cloud Infrastructure to West Africa",
    description: "We are proud to announce the launch of our new data center facilities in Senegal and Mali, strengthening our pan-African reach.",
    tag: "Cloud",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800"
  },
  {
    date: "7 Apr 2026",
    category: "Podcast",
    title: "Unified Technology: The One Contract Model",
    description: "In this episode, our CEO discusses how 912 is simplifying IT management for large-scale enterprises across the continent.",
    tag: "Strategy",
    image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&q=80&w=800"
  }
];

export function LatestNews() {
  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <ScrollReveal direction="right" className="max-w-2xl">
            <h2 className="text-5xl md:text-7xl font-heading font-bold tracking-tighter leading-[0.9] mb-8 uppercase">
              The 912 <br />
              <span className="text-brand-orange">Blog.</span>
            </h2>
            <p className="text-xl text-slate-500 font-medium">
              Expert perspectives on technology, security, and 
              digital transformation in the African context.
            </p>
          </ScrollReveal>
          <ScrollReveal direction="left">
            <Link to="/blog">
              <HoverBorderButton variant="blue" className="px-8 py-6 text-lg font-bold" theme="light">
                View All Insights
              </HoverBorderButton>
            </Link>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {news.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 0.1}>
              <div className="group cursor-pointer">
                <div className="relative aspect-[4/5] overflow-hidden mb-8 bg-slate-100">
                  <img 
                    src={item.image} 
                    alt=""
                    width={800}
                    height={1000}
                    loading="lazy"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute top-6 left-6 bg-brand-blue text-white text-[10px] uppercase tracking-[0.3em] font-black px-4 py-2">
                    {item.category}
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-xs font-black uppercase tracking-widest text-slate-400">
                    <span>{item.date}</span>
                    <span className="w-1 h-1 bg-brand-orange rounded-full" aria-hidden="true" />
                    <span className="text-brand-blue">{item.tag}</span>
                  </div>
                  <h4 className="text-2xl font-heading font-bold text-brand-dark group-hover:text-brand-blue transition-colors leading-tight">
                    {item.title}
                  </h4>
                  <p className="text-slate-500 leading-relaxed line-clamp-2">
                    {item.description}
                  </p>
                  <div className="pt-4 flex items-center text-brand-dark font-black text-xs uppercase tracking-widest group-hover:text-brand-orange transition-colors">
                    Read Story
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
