import React from 'react';
import { Link } from 'react-router-dom';
import { ScrollReveal } from '@/components/layout/ScrollReveal';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { HoverBorderButton } from '@/components/ui/HoverBorderButton';

interface CaseStudyLayoutProps {
  eyebrow: string;
  title: string;
  metrics: { value: string; label: string }[];
  situation: string | React.ReactNode;
  intervention: string | React.ReactNode;
  resolution: string | React.ReactNode;
  whatThisMeans: string;
  nextStudy?: { title: string; slug: string };
}

export function CaseStudyLayout({
  eyebrow,
  title,
  metrics,
  situation,
  intervention,
  resolution,
  whatThisMeans,
  nextStudy,
}: CaseStudyLayoutProps) {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="bg-brand-dark text-white py-32">
        <div className="container mx-auto px-4">
          <Link to="/results" className="inline-flex items-center text-white/50 hover:text-brand-orange text-xs uppercase tracking-widest font-bold mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" aria-hidden="true" />
            All Case Studies
          </Link>
          <ScrollReveal direction="right">
            <span className="text-brand-orange uppercase tracking-[0.4em] text-xs font-black mb-4 block">
              {eyebrow}
            </span>
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-12 leading-tight max-w-4xl">
              {title}
            </h1>
          </ScrollReveal>
          {/* Metrics strip */}
          <ScrollReveal delay={0.2}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl">
              {metrics.map((m) => (
                <div key={m.label} className="border border-white/10 p-6">
                  <div className="text-3xl md:text-4xl font-heading font-bold text-brand-orange mb-2">{m.value}</div>
                  <div className="text-xs uppercase tracking-wider text-white/50 font-bold">{m.label}</div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* SIR sections */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-3xl space-y-20">
          <ScrollReveal>
            <span className="text-brand-blue uppercase tracking-[0.3em] text-xs font-black mb-4 block">Situation</span>
            <div className="text-lg text-slate-600 leading-relaxed space-y-4">
              {typeof situation === 'string' ? <p>{situation}</p> : situation}
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <span className="text-brand-orange uppercase tracking-[0.3em] text-xs font-black mb-4 block">Intervention</span>
            <div className="text-lg text-slate-600 leading-relaxed space-y-4">
              {typeof intervention === 'string' ? <p>{intervention}</p> : intervention}
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <span className="text-[#10B981] uppercase tracking-[0.3em] text-xs font-black mb-4 block">Resolution</span>
            <div className="text-lg text-slate-600 leading-relaxed space-y-4">
              {typeof resolution === 'string' ? <p>{resolution}</p> : resolution}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* What This Means */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <ScrollReveal>
            <span className="text-brand-dark uppercase tracking-[0.3em] text-xs font-black mb-4 block">What this means for your business</span>
            <p className="text-xl text-slate-600 leading-relaxed mb-10">{whatThisMeans}</p>
            <Link to="/contact">
              <HoverBorderButton variant="orange" theme="light">
                Book a Discovery Call
              </HoverBorderButton>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Next case study */}
      {nextStudy && (
        <section className="py-16 bg-white border-t border-slate-200">
          <div className="container mx-auto px-4">
            <Link to={`/results/${nextStudy.slug}`} className="flex items-center justify-between group max-w-3xl mx-auto">
              <div>
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-blue">Next Case Study</span>
                <h3 className="text-xl font-heading font-bold text-brand-dark group-hover:text-brand-blue transition-colors">{nextStudy.title}</h3>
              </div>
              <ArrowRight className="w-6 h-6 text-brand-orange group-hover:translate-x-2 transition-transform" aria-hidden="true" />
            </Link>
          </div>
        </section>
      )}
    </main>
  );
}
