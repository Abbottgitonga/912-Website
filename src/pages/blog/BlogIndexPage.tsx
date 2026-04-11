import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, User, Clock } from 'lucide-react';
import { ScrollReveal } from '@/components/layout/ScrollReveal';
import { SEOHead } from '@/components/seo/SEOHead';
import { blogPosts } from '@/data/blogData';

export default function BlogIndexPage() {

  return (
    <main className="min-h-screen bg-slate-50 pt-32 pb-20">
      <SEOHead
        title="The 912 Tech Protocol — IT Insights for African Enterprise"
        description="Expert perspectives on managed IT, cybersecurity, cloud migration, and digital transformation strategies tailored for the African continent. No fluff — just hard data and exact architectures."
      />
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
          {blogPosts.map((post, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <Link to={`/blog/${post.id}`} className="block group h-full">
                <article className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden h-full flex flex-col transition-all hover:shadow-xl hover:border-brand-blue">
                  <div className="h-48 overflow-hidden relative">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      width={800}
                      height={600}
                      loading="lazy"
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
                        <User className="w-3 h-3" aria-hidden="true" />
                        {post.author}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" aria-hidden="true" />
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
  );
}

