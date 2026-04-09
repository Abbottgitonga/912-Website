import React from 'react';
import { ScrollReveal } from '@/components/layout/ScrollReveal';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const news = [
  {
    date: "8 Apr 2026",
    category: "Article",
    title: "GenAI, gender and employment equity",
    description: "As generative artificial intelligence (GenAI) adoption transforms industries globally, South African businesses face a particular challenge...",
    tag: "Employment Law",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800"
  },
  {
    date: "8 Apr 2026",
    category: "Alert",
    title: "Labour Court reaffirms strict compliance",
    description: "In Nhlanhla Mdakane and Others v Kwadukuza Municipality and Others, the Labour Court struck an urgent application...",
    tag: "Dispute Resolution",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=800"
  },
  {
    date: "7 Apr 2026",
    category: "Podcast",
    title: "SCA confirms position on reconsideration",
    description: "In the recent case of Hi-Q Automotive (Pty) Ltd v Erga Investments, the Supreme Court of Appeal provided much needed clarity...",
    tag: "Corporate Law",
    image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&q=80&w=800"
  }
];

export function LatestNews() {
  return (
    <section className="py-32 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <ScrollReveal direction="right">
            <h3 className="text-4xl md:text-5xl font-heading font-bold text-brand-dark">
              Latest <span className="text-brand-blue">News</span>
            </h3>
          </ScrollReveal>
          <ScrollReveal direction="left">
            <Button variant="outline" className="border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white rounded-none px-8">
              All News
            </Button>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {news.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 0.1}>
              <div className="group cursor-pointer bg-white border border-slate-200 overflow-hidden hover:shadow-2xl transition-all duration-500">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 bg-brand-blue text-white text-[10px] uppercase tracking-widest font-bold px-3 py-1">
                    {item.category}
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-4 text-xs text-slate-400 font-medium">
                    <span>{item.date}</span>
                    <span className="w-1 h-1 bg-slate-300 rounded-full" />
                    <span className="text-brand-orange">{item.tag}</span>
                  </div>
                  <h4 className="text-xl font-heading font-bold text-brand-dark mb-4 group-hover:text-brand-blue transition-colors line-clamp-2">
                    {item.title}
                  </h4>
                  <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-3">
                    {item.description}
                  </p>
                  <div className="flex items-center text-brand-blue font-bold text-sm group-hover:gap-2 transition-all">
                    Read More
                    <ArrowRight className="ml-2 w-4 h-4" />
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
